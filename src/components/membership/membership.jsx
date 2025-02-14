"use client"

import { useState } from 'react';
import "./membershipForm.css";

const MembershipForm = () => {
    const MEMBERSHIPS = {
        individual: {
            name: "Individual",
            price: 75,
            benefits: [
                "Unlimited visits for one person",
                "10% off gift shop purchases",
                "Quarterly newsletter",
                "Member-only events"
            ]
        },
        family: {
            name: "Family",
            price: 150,
            benefits: [
                "Unlimited visits for up to 5 family members",
                "15% off gift shop purchases",
                "Quarterly newsletter",
                "Member-only events",
                "Free parking"
            ]
        },
        premium: {
            name: "Premium",
            price: 250,
            benefits: [
                "Unlimited visits for up to 8 people",
                "20% off gift shop purchases",
                "Priority access to special exhibits",
                "Behind-the-scenes tours",
                "Free parking",
                "Exclusive events"
            ]
        }
    };

    const [selectedMembership, setSelectedMembership] = useState(null);

    return (
        <form className="membershipForm">
            <div className="membershipSection">
                <h2 className="sectionTitle">Select Membership</h2>
                <hr className="sectionDivider" />
                <div className="membershipTiersContainer">
                    {Object.entries(MEMBERSHIPS).map(([key, membership]) => (
                        <div 
                            key={key}
                            className={`membershipTier ${selectedMembership === key ? 'selectedTier' : ''}`}
                            onClick={() => setSelectedMembership(key)}
                        >
                            <div className="tierHeader">
                                <p className="tierName">{membership.name}</p>
                                <p className="tierPrice">${membership.price}/year</p>
                            </div>
                            <div className="tierBenefits">
                                {membership.benefits.map((benefit, index) => (
                                    <p key={index} className="benefitItem">
                                        • {benefit}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedMembership && (
                <>
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
                            <p className="totalPrice">${MEMBERSHIPS[selectedMembership].price}</p>
                        </div>
                    </div>

                    <div className="submitSection">
                        <button type="submit" className="submitButton">
                            Get Membership
                        </button>
                    </div>
                </>
            )}
        </form>
    );
};

export default MembershipForm;