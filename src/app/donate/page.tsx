import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import DonationForm from "../../components/donationForm/donation";
import "./donate.css";

export default function DonatePage() {
    return (
        <>
            <Navbar/>
            <div className="donateHeroContainer">
                <div className="animalHeroImageWrapper">
                    <Image
                        src="/images/donate/donateHero.jpg"
                        alt="animal Hero"
                        className="donateHeroImage"
                        fill
                        priority
                    />
                </div>
            </div>
            <div className="donateMainContainer">
                <div className="donateHeadline">
                    <h1>Make a Donation</h1>
                </div>
                <div className="donateSubline">
                    <p>Support our wildlife conservation efforts — every donation makes a difference!</p>
                </div>
                <DonationForm />
            </div>
            <Footer/>
        </>
    );
}