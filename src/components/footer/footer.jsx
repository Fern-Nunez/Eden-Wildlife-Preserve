import React from 'react';
import Image from 'next/image';
import './footer.css';

function Footer() {
    return (
        <footer className='mainFooter'>
            <div className='footerContent'>
                <div className='desktopWay'>
                    <div className='footerLogoAndName'>
                        <div>
                            <Image
                            src="/images/logoFooter.png"
                            alt="Eden Wildlife Preserve logo"
                            width={200}
                            height={200}
                            className='footerLogo'
                            />
                        </div>
                        <div className='footerName'>
                            Eden Wildlife Preserve
                        </div>
                    </div>
                    <nav className="footerLinks">
                        <a href="/conservation" className='footerLink'>About Eden Wildlife Preserve</a>
                        <a href="/legal" className='footerLink'>Ticket Terms & Conditions</a>
                        <a href="/legal" className='footerLink'>Contact Us</a>
                        <a href="/legal" className='footerLink'>Terms of Service</a>
                        <a href="/legal" className='footerLink'>Membership Terms & Conditions</a>
                        <a href="/legal" className='footerLink'>Code of Conduct</a>
                        <a href="/legal" className='footerLink'>State Disclosures</a>
                        <a href="/legal" className='footerLink'>Accessibility Statement</a>
                        <a href="/legal" className='footerLink'>Privacy Policy</a>
                        <a href="/legal" className='footerLink'>Cookies</a>
                    </nav>
                </div>
                <div className='footerCopyRight'>
                    Eden Wildlife Preserve is a 501(c)(3) organization
                </div>
            </div>
        </footer>
    );
}

export default Footer;