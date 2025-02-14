import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import TicketForm from "../../components/purchasetickets/purchaseTickets";
import "./tickets.css";

export default function TicketsPage() {
    return (
        <>
            <Navbar/>
            <div className="ticketsHeroContainer">
                <div className="animalHeroImageWrapper">
                    <Image
                        src="/images/tickets/heroImageTickets.jpg"
                        alt="animal Hero"
                        className="ticketsHeroImage"
                        fill
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <div className="ticketsMainContainer">
                <div className="ticketsHeadline">
                    <h1>Buy Tickets</h1>
                </div>
                <div className="ticketsSubline">
                    <p>Secure your spot for an unforgettable wildlife experience—book your tickets today!</p>
                </div>
                <TicketForm />
            </div>
            <Footer/>
        </>
    );
}