import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import MembershipForm from "../../components/membership/membership";
import "./membership.css";

export default function MembershipPage() {
    return (
        <>
            <Navbar/>
            <div className="membershipHeroContainer">
                <div className="animalHeroImageWrapper">
                    <Image
                        src="/images/membership/memberHero.jpg"
                        alt="animal Hero"
                        className="membershipHeroImage"
                        fill
                    />
                </div>
            </div>
            <div className="membershipMainContainer">
                <div className="membershipHeadline">
                    <h1>Become a Member</h1>
                </div>
                <div className="membershipSubline">
                    <p>Join our community and enjoy exclusive benefits all year round!</p>
                </div>
                <MembershipForm />
            </div>
            <Footer/>
        </>
    );
}