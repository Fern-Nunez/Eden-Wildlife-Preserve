import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import VolunteerForm from "../../components/volunteer/volunteerForm";
import "./volunteer.css";

export default function TicketsPage() {
    return (
        <>
            <Navbar/>
            <div className="volunteerHeroContainer">
                <div className="animalHeroImageWrapper">
                    <Image
                        src="/images/volunteer/heroImage.jpg"
                        alt="animal Hero"
                        className="volunteerHeroImage"
                        fill
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <div className="volunteerMainContainer">
                <div className="volunteerHeadline">
                    <h1>Volunteer at Eden Wildlife Preserve</h1>
                </div>
                <div className="volunteerSubline">
                    <p>Join Eden Wildlife Preserve’s volunteers to protect wildlife, preserve habitats, and educate the community.</p>
                </div>
                <VolunteerForm/>
            </div>
            
            <Footer/>
        </>
    );
}