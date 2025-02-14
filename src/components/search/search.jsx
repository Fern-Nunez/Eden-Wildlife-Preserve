// components/Search/Search.jsx
"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './search.css';

const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);

    const pagesData = [
        {
            title: "Events",
            path: "/events",
            keywords: ["events", "activities", "schedule", "programs"],
        },
        {
            title: "Animals",
            path: "/animals",
            keywords: ["animals", "wildlife", "species", "creatures"],
        },
        {
            title: "Conservation",
            path: "/conservation",
            keywords: ["conservation", "preservation", "protection", "environment"],
        },
        {
            title: "Tickets",
            path: "/tickets",
            keywords: ["tickets", "admission", "entry", "visit"],
        },
        {
            title: "Donate",
            path: "/donate",
            keywords: ["donate", "support", "help", "contribution"],
        },
        {
            title: "Membership",
            path: "/membership",
            keywords: ["membership", "member", "join", "benefits"],
        },
        {
            title: "Volunteer",
            path: "/volunteer",
            keywords: ["volunteer", "help", "participate", "support"],
        },
        {
            title: "Education",
            path: "/education",
            keywords: ["education", "learn", "programs", "school"],
        }
    ];

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.length > 0) {
            const results = pagesData.filter(page => 
                page.title.toLowerCase().includes(term) ||
                page.keywords.some(keyword => keyword.toLowerCase().includes(term))
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="searchContainer" ref={searchRef}>
            <button 
                className="searchButton" 
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
            >
                <Image src={'/icons/searchIcon.png'} width={22} height={22} alt="Search"/>
            </button>
            
            {searchOpen && (
                <div className="searchDropdown">
                    <div className="searchInputWrapper">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="searchInput"
                            autoFocus
                        />
                        <button 
                            className="closeButton"
                            onClick={() => setSearchOpen(false)}
                            aria-label="Close search"
                        >
                            ×
                        </button>
                    </div>
                    {searchTerm && (
                        <div className="searchResults">
                            {searchResults.length > 0 ? (
                                searchResults.map((result, index) => (
                                    <Link 
                                        href={result.path} 
                                        key={index}
                                        className="searchResult"
                                        onClick={() => setSearchOpen(false)}
                                    >
                                        <p>{result.title}</p>
                                    </Link>
                                ))
                            ) : (
                                <div className="noResults">
                                    <p>No results found</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;