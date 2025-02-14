import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./exhibits.css";

export default function Exhibits() {
  return (
    <>
      <Navbar/>
      <div className="exhibitsHeroContainer">
        <div className="exhibitsHeroImageWrapper">
          <Image
            src="/images/exhibits/mountainLion.jpg"
            alt="exhibits Hero"
            className="exhibitsHeroImage"
            fill
            priority
          />
        </div>
      </div>
      <div className="exhibitsMainContainer">
        <div className="exhibitsHeadline">
          <h1> Explore Unique Habitats </h1>
        </div>
        <div className="exhibitsSubline">
          <p> Experience diverse ecosystems that sustain wildlife and the efforts to preserve them </p>
        </div>


        <div className="exhibitsGrid">

          <div className="exhibitCard">
            <div className="exhibitsImageWrapper">
              <Image
                src="/images/exhibits/skyHaven.jpg"
                alt="exhibits Picture"
                className="exhibitsImage"
                fill
              />
              <div className="exhibitOverlay">
                <div className="exhibitTitle">Sky Haven</div>
                <div className="exhibitDescription">Wander through a lush aviary where vibrant birds glide overhead, filling the air with their songs in this peaceful sanctuary</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="exhibitCard">
            <div className="exhibitsImageWrapper">
              <Image
                src="/images/exhibits/savannaPlains.jpg"
                alt="exhibits Picture"
                className="exhibitsImage"
                fill
              />
              <div className="exhibitOverlay">
                <div className="exhibitTitle">Savanna Plains</div>
                <div className="exhibitDescription">Experience the vast open grasslands where majestic lions, towering giraffes, and swift gazelles roam in their natural habitat</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="exhibitCard">
            <div className="exhibitsImageWrapper">
              <Image
                src="/images/exhibits/oceanicDepths.webp"
                alt="exhibits Picture"
                className="exhibitsImage"
                fill
              />
              <div className="exhibitOverlay">
                <div className="exhibitTitle">Oceanic Depths</div>
                <div className="exhibitDescription">Dive into an underwater world where graceful sea creatures glide through shimmering waters in this immersive marine exhibit</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="exhibitCard">
            <div className="exhibitsImageWrapper">
              <Image
                src="/images/exhibits/wildEncounters.jpg"
                alt="exhibits Picture"
                className="exhibitsImage"
                fill
              />
              <div className="exhibitOverlay">
                <div className="exhibitTitle">Wild Encounters</div>
                <div className="exhibitDescription">Get up close with fascinating animals from around the world, learning their stories through hands-on experiences and expert talks</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="exhibitCard">
            <div className="exhibitsImageWrapper">
              <Image
                src="/images/exhibits/forestCanopy.webp"
                alt="exhibits Picture"
                className="exhibitsImage"
                fill
              />
              <div className="exhibitOverlay">
                <div className="exhibitTitle">Forest Canopy</div>
                <div className="exhibitDescription">Walk beneath towering trees where monkeys swing, exotic birds call, and hidden creatures thrive in this dense jungle ecosystem</div>
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
