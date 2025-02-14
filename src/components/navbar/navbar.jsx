"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Search from '../search/search';
import './navbar.css';

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = navbarOpen ? 'hidden' : 'unset';
    }, [navbarOpen]);

    return (
        <header className="navbar">
            <nav className="navbarLinksLeft">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Image src={'/icons/instagram.svg'} width={22} height={22} alt="Instagram"/></a>
                <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer"><Image src={'/icons/twitter.svg'} width={22} height={22} alt="X"/></a>
                <a href="https://facebook.com/home" target="_blank" rel="noopener noreferrer"><Image src={'/icons/facebook.svg'} width={22} height={22} alt="Facebook"/></a>
                <Search />
            </nav>
            <div className="navbarCenter">
                <a href='/'>
                    <Image
                        src="/images/logosvg.svg"
                        alt="Eden Wildlife Preserve logo"
                        width={90}
                        height={90}
                        className='navbarLogo'
                    />
                </a>
            </div>
            <nav className="navbarLinksRight">
                <a href="/events" title="Discover our events" aria-label="Our events">Events</a>
                <a href="/animals" title="Meet our animals" aria-label="Our animals">Animals</a>
                <a href="/conservation" title="Learn about conservation efforts" aria-label="Conservation efforts">Conservation</a>
                <a href="/tickets" title="Plan your visit to Eden Wildlife Preserve" aria-label="Tickets">Tickets</a>
            </nav>
            <div className='hamburgerMenuContainer' onClick={() => setNavbarOpen(!navbarOpen)}>
                <div className={`hamburger ${navbarOpen ? 'active' : ''}`}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </div>
            </div>
            {navbarOpen && (
                <nav className="navbarMobileMenu">
                    <div className='leafs'>
                        <Image
                            src={"/images/jungleLeaves.png"}
                            width={150}
                            height={150}
                            alt='leaves'
                            className='leaf1'
                            loading='eager'
                        />
                        <Image
                            src={"/images/jungleLeaves.png"}
                            width={150}
                            height={150}
                            alt='leaves'
                            className='leaf2'
                            loading='eager'
                        />
                        <Image
                            src={"/images/jungleLeaves.png"}
                            width={150}
                            height={150}
                            alt='leaves'
                            className='leaf3'
                            loading='eager'
                        />
                        <Image
                            src={"/images/jungleLeaves.png"}
                            width={150}
                            height={150}
                            alt='leaves'
                            className='leaf4'
                            loading='eager'
                        />
                    </div>
                    <div className='navbarMobileLinks'>
                        <div className='link'>
                            <a href="/events" title="Discover our events" aria-label="Our events">Events</a>
                        </div>
                        <div className='link'>
                            <a href="/animals" title="Meet our animals" aria-label="Our animals">Animals</a>
                        </div>
                        <div className='link'>
                            <a href="/conservation" title="Learn about conservation efforts" aria-label="Conservation efforts">Conservation</a>
                        </div>
                        <div className='link'>
                            <a href="/tickets" title="Plan your visit to Eden Wildlife Preserve" aria-label="Tickets">Tickets</a>
                        </div>
                    </div>
                    <div className='navbarMobileSocials'>
                        <a href="https://www.instagram.com"><Image src={'/icons/instagram.svg'} width={20} height={20} loading='eager' alt="Instagram"/></a>
                        <a href="https://x.com/?lang=en&mx=2"><Image src={'/icons/twitter.svg'} width={20} height={20} loading='eager' alt="X"/></a>
                        <a href="https://www.facebook.com/"><Image src={'/icons/facebook.svg'} width={20} height={20} loading='eager' alt="Facebook"/></a>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
