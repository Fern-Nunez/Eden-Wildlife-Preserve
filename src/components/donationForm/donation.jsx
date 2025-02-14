"use client"

import { useState, useEffect, useRef } from 'react';
import "./donationForm.css";

const DonationForm = () => {
    const [donationAmount, setDonationAmount] = useState(50);
    const sliderRef = useRef(null);

    useEffect(() => {
        // Set initial progress on mount
        if (sliderRef.current) {
            const min = Number(sliderRef.current.min);
            const max = Number(sliderRef.current.max);
            const progress = ((donationAmount - min) / (max - min)) * 100;
            sliderRef.current.style.setProperty('--progress', `${progress}%`);
        }
    }, [donationAmount]);

    const handleSliderChange = (e) => {
        setDonationAmount(e.target.value);
        // Calculate the progress percentage for the colored bar
        const progress = ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
        e.target.style.setProperty('--progress', `${progress}%`);
    };

    return (
        <form className="donationForm">
            <div className="donationSection">
                <h2 className="sectionTitle">Select Amount</h2>
                <hr className="sectionDivider" />
                <div className="sliderContainer">
                    <input 
                        ref={sliderRef}
                        type="range" 
                        min="5" 
                        max="1000" 
                        value={donationAmount} 
                        onChange={handleSliderChange}
                        className="donationSlider"
                    />
                    <div className="donationDisplay">
                        <p className="donationAmount">${donationAmount}</p>
                    </div>
                </div>
            </div>

            <div className="paymentSection">
                <h2 className="sectionTitle">Payment Details</h2>
                <hr className="sectionDivider" />
                <div className="formGroup">
                    <input type="text" name="cardName" placeholder="Name on Card" required className="formInput" />
                    <input type="text" name="cardNumber" placeholder="Card Number" required className="formInput" />
                    <div className="cardDetails">
                        <input type="text" name="expiry" placeholder="MM/YY" required className="formInput" />
                        <input type="text" name="cvv" placeholder="CVV" required className="formInput" />
                    </div>
                </div>
            </div>

            <div className="billingSection">
                <h2 className="sectionTitle">Billing Address</h2>
                <hr className="sectionDivider" />
                <div className="formGroup">
                    <input type="text" name="address" placeholder="Street Address" required className="formInput" />
                    <input type="text" name="city" placeholder="City" required className="formInput" />
                    <input type="text" name="state" placeholder="State" required className="formInput" />
                    <input type="text" name="zipCode" placeholder="ZIP Code" required className="formInput" />
                    <input type="text" name="country" placeholder="Country" required className="formInput" />
                </div>
            </div>

            <div className="submitSection">
                <button type="submit" className="submitButton">
                    Donate Now
                </button>
            </div>
        </form>
    );
};

export default DonationForm;