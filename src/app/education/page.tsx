import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./education.css";

export default function Education() {
  return (
    <>
      <Navbar/>
      <div className="educationHeroContainer">
        <div className="educationHeroImageWrapper">
          <Image
            src="/images/education/educationHeader.jpg"
            alt="education Hero"
            className="educationHeroImage"
            fill
            priority
          />
        </div>
      </div>
      <div className="educationMainContainer">
        <div className="educationHeadline">
          <h1> Conservation Through Education </h1>
        </div>
        <div className="educationSubline">
          <p> Inspiring curiosity and connections to wildlife through immersive, hands-on education for all ages </p>
        </div>


        <div className="educationGrid">

          <div className="educationCard">
            <div className="educationImageWrapper">
              <Image
                src="/images/education/animalCare.jpg"
                alt="education Picture"
                className="educationImage"
                fill
              />
              <div className="educationOverlay">
                <div className="educationTitle">Animal Care</div>
                <div className="educationDescription">Step behind the scenes to learn how zookeepers feed, train, and care for a variety of animals in this hands-on experience</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="educationCard">
            <div className="educationImageWrapper">
              <Image
                src="/images/education/juniorRangers.jpg"
                alt="education Picture"
                className="educationImage"
                fill
              />
              <div className="educationOverlay">
                <div className="educationTitle">Junior Wildlife Rangers</div>
                <div className="educationDescription">Young explorers join our team to track animals, study habitats, and learn essential skills for protecting wildlife</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="educationCard">
            <div className="educationImageWrapper">
              <Image
                src="/images/education/photoWorkshop.jpg"
                alt="education Picture"
                className="educationImage"
                fill
              />
              <div className="educationOverlay">
                <div className="educationTitle">Photography Workshop</div>
                <div className="educationDescription">Capture stunning shots of wildlife as expert photographers guide you through techniques for nature and action photography</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="educationCard">
            <div className="educationImageWrapper">
              <Image
                src="/images/education/fieldTrip.jpg"
                alt="education Picture"
                className="educationImage"
                fill
              />
              <div className="educationOverlay">
                <div className="educationTitle">School Trip Program</div>
                <div className="educationDescription">Bring learning to life with guided tours, hands-on activities, and interactive lessons tailored to school groups of all ages</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="educationCard">
            <div className="educationImageWrapper">
              <Image
                src="/images/education/stem.jpg"
                alt="education Picture"
                className="educationImage"
                fill
              />
              <div className="educationOverlay">
                <div className="educationTitle">STEM in the Wild</div>
                <div className="educationDescription">Explore the science behind wildlife conservation, engineering habitats, and using technology to study animals in nature</div>
              </div>
            </div>
            <div className="overlayCard"></div>
          </div>

          <div className="educationCard">
            <div className="educationImageWrapper">
              <Image
                src="/images/education/expertTalks.jpg"
                alt="education Picture"
                className="educationImage"
                fill
              />
              <div className="educationOverlay">
                <div className="educationTitle">Expert Talks</div>
                <div className="educationDescription">Hear from conservationists, zookeepers, and researchers as they share fascinating insights into wildlife and their care</div>
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
