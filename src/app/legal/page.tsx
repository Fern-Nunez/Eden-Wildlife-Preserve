import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./legal.css";

export default function TicketsPage() {
    return (
        <>
            <Navbar/>
            <div className="legalHeroContainer">
                <div className="legalHeroImageWrapper">
                    <Image
                        src="/images/legal/legalHero.jpg"
                        alt="animal Hero"
                        className="legalHeroImage"
                        fill
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <div className="legalMainContainer">
                <div className="legalHeadline">
                    <h1>Important Notice: Mock Website Information</h1>
                </div>
                <div className="legalSubline">
                    <p>This website is a portfolio demonstration project and serves as a showcase of web development skills. While functional, it does not represent a real wildlife preserve.</p>
                </div>
            </div>
            
            <Footer/>
        </>
    );
}