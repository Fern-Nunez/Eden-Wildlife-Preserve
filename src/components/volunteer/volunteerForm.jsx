"use client"

import { useState } from 'react';
import "./volunteerForm.css";

const VolunteerForm = () => {
    const VOLUNTEER_AREAS = [
        "Animal Care Assistant",
        "Guest Education",
        "Conservation Projects",
        "Event Support",
        "Administrative Help",
        "Maintenance & Gardens"
    ];

    const AVAILABILITY = [
        "Weekday Mornings",
        "Weekday Afternoons",
        "Weekday Evenings",
        "Weekend Mornings",
        "Weekend Afternoons",
        "Weekend Evenings"
    ];

    const [selectedAreas, setSelectedAreas] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);

    const handleAreaToggle = (area) => {
        setSelectedAreas(prev => 
            prev.includes(area) 
                ? prev.filter(a => a !== area)
                : [...prev, area]
        );
    };

    const handleTimeToggle = (time) => {
        setSelectedTimes(prev => 
            prev.includes(time) 
                ? prev.filter(t => t !== time)
                : [...prev, time]
        );
    };

    return (
        <form className="volunteerForm">
            <div className="interestSection">
                <h2 className="sectionTitle">Areas of Interest</h2>
                <hr className="sectionDivider" />
                <p className="sectionDescription">Select the areas where you'd like to volunteer (choose all that apply)</p>
                <div className="interestGrid">
                    {VOLUNTEER_AREAS.map((area) => (
                        <div 
                            key={area}
                            className={`interestCard ${selectedAreas.includes(area) ? 'selected' : ''}`}
                            onClick={() => handleAreaToggle(area)}
                        >
                            <p>{area}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="availabilitySection">
                <h2 className="sectionTitle">Availability</h2>
                <hr className="sectionDivider" />
                <p className="sectionDescription">Select your available time slots</p>
                <div className="availabilityGrid">
                    {AVAILABILITY.map((time) => (
                        <div 
                            key={time}
                            className={`availabilityCard ${selectedTimes.includes(time) ? 'selected' : ''}`}
                            onClick={() => handleTimeToggle(time)}
                        >
                            <p>{time}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="personalSection">
                <h2 className="sectionTitle">Personal Information</h2>
                <hr className="sectionDivider" />
                <div className="formGroup">
                    <div className="nameGroup">
                        <input type="text" name="firstName" placeholder="First Name" required className="formInput" />
                        <input type="text" name="lastName" placeholder="Last Name" required className="formInput" />
                    </div>
                    <input type="email" name="email" placeholder="Email" required className="formInput" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="formInput" />
                    <input type="text" name="address" placeholder="Street Address" required className="formInput" />
                    <div className="locationGroup">
                        <input type="text" name="city" placeholder="City" required className="formInput" />
                        <input type="text" name="state" placeholder="State" required className="formInput" />
                        <input type="text" name="zipCode" placeholder="ZIP Code" required className="formInput" />
                    </div>
                </div>
            </div>

            <div className="experienceSection">
                <h2 className="sectionTitle">Experience & Background</h2>
                <hr className="sectionDivider" />
                <div className="formGroup">
                    <textarea 
                        name="experience" 
                        placeholder="Tell us about any relevant experience or skills you'd like to share..." 
                        className="formTextarea"
                        rows={4}
                    />
                    <textarea 
                        name="motivation" 
                        placeholder="Why would you like to volunteer with us?" 
                        className="formTextarea"
                        rows={4}
                    />
                </div>
            </div>

            <div className="submitSection">
                <button type="submit" className="submitButton">
                    Submit Application
                </button>
            </div>
        </form>
    );
};

export default VolunteerForm;