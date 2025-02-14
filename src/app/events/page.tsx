import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./events.css";

export default function Events() {
  return (
    <>
      <Navbar/>
      <div className="eventHeroContainer">
        <div className="eventHeroImageWrapper">
          <Image
            src="/images/events/pandaEating.jpg"
            alt="Events Hero"
            className="eventsHeroImage"
            fill
            priority
          />
        </div>
      </div>
      <div className="eventsMainContainer">
        <div className="eventsHeadline">
          <h1> Wildlife Themed Events </h1>
        </div>
        <div className="eventsSubline">
          <p> Our events connect you with nature through education and unforgettable experiences </p>
        </div>


        <div className="eventsGrid">

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/penguinFeeding.jpg"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Penguin Feeding</div>
                <div className="eventDescription">Get up close with our playful penguins as you watch them dive, waddle, and enjoy a delicious meal during this interactive feeding experience</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/giraffeFeeding.jpg"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Giraffe Feeding</div>
                <div className="eventDescription">Hand-feed our gentle giraffes and watch as they stretch their long necks to grab leafy treats in this up-close encounter</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/wineAndWhiskey.jpg"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Wine & Whiskey</div>
                <div className="eventDescription">Savor a selection of fine wines and rich whiskeys while exploring the zoo after hours in a relaxed, adults-only experience</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/booAtTheZoo.jpg"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Boo at the Zoo</div>
                <div className="eventDescription">Enjoy a night of family-friendly Halloween fun with trick-or-treat stations, spooky decorations, and special animal encounters</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/enchantedZooLights.jpg"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Enchanted Zoo Lights</div>
                <div className="eventDescription">Wander through a dazzling display of glowing lanterns and festive lights, transforming the zoo into a magical nighttime wonderland</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/behindTheScenesTour.jpg"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Behind-the-Scenes Tour</div>
                <div className="eventDescription">Hop aboard a guided safari adventure, where you’ll see exotic animals roaming freely in expansive, naturalistic landscapes</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/safariRide.webp"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Safari Ride</div>
                <div className="eventDescription">Step into a lush sanctuary filled with colorful birds soaring overhead as you experience their world up close and personal</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="eventCard">
            <div className="eventImageWrapper">
              <Image
                src="/images/events/aviaryOasis.jpg"
                alt="Event Picture"
                className="eventImage"
                fill
              />
              <div className="eventOverlay">
                <div className="eventTitle">Aviary Oasis</div>
                <div className="eventDescription">Get up close with our playful penguins as you watch them dive, waddle, and enjoy a delicious meal during this interactive feeding experience</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

        </div>
      </div>
      <hr className="lineBreak"></hr>
      <Footer/>
    </>
  );
}
