"use client"

import { useState, useEffect } from 'react';
import CustomDatePicker from '../datePicker/customDatePicker';
import "./purchaseTickets.css";

const TicketForm = () => {
    const PRICES = {
        adult: 29.99,
        child: 19.99,
        senior: 24.99
    };

    const [tickets, setTickets] = useState({
        adult: 0,
        child: 0,
        senior: 0
    });

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = (
            tickets.adult * PRICES.adult +
            tickets.child * PRICES.child +
            tickets.senior * PRICES.senior
        ).toFixed(2);
        setTotal(newTotal);
    }, [tickets]);

    const handleTicketChange = (type, value) => {
        const newValue = Math.max(0, parseInt(value) || 0);
        setTickets(prev => ({
            ...prev,
            [type]: newValue
        }));
    };

    return (
        <form className="ticketsForm">
            <div className="datePickerSection">
                <h2 className="sectionTitle">Select Date</h2>
                <hr className="sectionDivider" />
                <CustomDatePicker />
            </div>

            <div className="ticketTypeSection">
                <h2 className="sectionTitle">Select Tickets</h2>
                <hr className="sectionDivider" />
                <div className="ticketTypeContainer">
                    <div className="ticketType">
                        <div className='certainTicketContainer'>
                            <p>Adult (18-64)</p>
                            <p className="ticketPrice">${PRICES.adult}</p>
                        </div>
                        <input 
                            type="number" 
                            min="0" 
                            value={tickets.adult || ''}
                            onChange={(e) => handleTicketChange('adult', e.target.value)}
                            className="ticketInput" 
                        />
                    </div>
                    <div className="ticketType">
                        <div className='certainTicketContainer'>
                            <p>Child (3-17)</p>
                            <p className="ticketPrice">${PRICES.child}</p>
                        </div>
                        <input 
                            type="number" 
                            min="0" 
                            value={tickets.child || ''}
                            onChange={(e) => handleTicketChange('child', e.target.value)}
                            className="ticketInput" 
                        />
                    </div>
                    <div className="ticketType">
                        <div className='certainTicketContainer'>
                            <p>Senior (65+)</p>
                            <p className="ticketPrice">${PRICES.senior}</p>
                        </div>
                        <input 
                            type="number" 
                            min="0" 
                            value={tickets.senior || ''}
                            onChange={(e) => handleTicketChange('senior', e.target.value)}
                            className="ticketInput" 
                        />
                    </div>
                </div>
            </div>

            <div className="contactSection">
                <h2 className="sectionTitle">Contact Information</h2>
                <hr className="sectionDivider" />
                <div className="formGroup">
                    <div className="nameGroup">
                        <input type="text" name="firstName" placeholder="First Name" required className="formInput" />
                        <input type="text" name="lastName" placeholder="Last Name" required className="formInput" />
                    </div>
                    <input type="email" name="email" placeholder="Email" required className="formInput" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="formInput" />
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

            <div className="totalSection">
                <div className="totalAmount">
                    <p className="totalLabel">Total:</p>
                    <p className="totalPrice">${total}</p>
                </div>
            </div>

            <div className="submitSection">
                <button type="submit" className="submitButton">
                    Complete Purchase
                </button>
            </div>
        </form>
    );
};

export default TicketForm;