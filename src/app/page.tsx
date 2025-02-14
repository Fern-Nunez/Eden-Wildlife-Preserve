import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ImageCarousel from "../components/heroImageChange/heroImageChange";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar/>

      <div className="heroSection">
        <ImageCarousel />
      </div>

      <div className="mainContainer">
      <div className="mainContent">
        {/* Content Section */}
        <div className="contentSection">
          <div>
            <h1> Connect, Learn, Protect </h1>
          </div>
          <div className="contentGrid">
            
              <div className="contentCard hikingTrails">
                <a href="/events">
                <Image
                  src="/images/hikingTrails.jpg"
                  alt="Eden Wildlife Preserve"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlayContent"></div>
                <div className="contentCardText">
                  <p className="contentCopy"> Hiking Trails</p>
                </div>
                </a>
              </div>
            

            
              <div className="contentCard">
                <a href="/events">
                <Image
                  src="/images/zooSafari.jpg"
                  alt="Eden Wildlife Preserve"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlayContent"></div>
                <div className="contentCardText">
                  <p className="contentCopy"> Safari Ride</p>
                </div>
                </a>
              </div>
            

            
              <div className="contentCard giraffeFeeding">
                <a href="/events">
                <Image
                  src="/images/giraffeFeedingCarrot.jpg"
                  alt="Eden Wildlife Preserve"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlayContent"></div>
                <div className="contentCardText">
                  <p className="contentCopy"> Giraffe Feeding</p>
                </div>
                </a>
              </div>
            

            
              <div className="contentCard">
                <a href="/events">
                <Image
                  src="/images/zooTours.jpg"
                  alt="Eden Wildlife Preserve"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="overlayContent"></div>
                <div className="contentCardText">
                  <p className="contentCopy"> Tours</p>
                </div>
                </a>
              </div>
            

            <div className="contentCard aviaryOasis">
              <a href="/events">
              <Image
                src="/images/aa.jpg"
                alt="Eden Wildlife Preserve"
                layout="fill"
                objectFit="cover"
              />
              <div className="overlayContent"></div>
              <div className="contentCardText">
                <p className="contentCopy"> Aviary Oasis</p>
              </div>
              </a>
            </div>


          </div>
        </div>
      </div>
      </div>

      {/* Information Section */}
      <div className="informationSection">
        <div className="informationHeader">
            <h1 className="informationHeaderText"> Building a Better Future</h1>
          </div>
      <div className="informationContent">

        
          <div className="informationGrid">
            <div className="informationCard">
              <Image
                src="/icons/globe-europe-africa.svg"
                alt="Eden Wildlife Preserve"
                width={95}
                height={95}
              />
              <h2 className="infoSectionCopy"> Conservation Efforts </h2>
              <p className="infoSectionCopy">Protecting endangered species and restoring habitats for a better world</p>
              <a href="/conservation">
                <button className="informationButton"> Learn More </button>
              </a>
            </div>

            <div className="informationCard"> 
              <Image
                  src="/icons/presentation.svg"
                  alt="Eden Wildlife Preserve"
                  width={90}
                  height={90}
                />
              <h2 className="infoSectionCopy"> Immersive Exhibits </h2>
              <p className="infoSectionCopy">Get close with animals in habitats designed to educate and inspire</p>
              <a href="/exhibits"> <button className="informationButton"> Learn More </button> </a>
            </div>

            <div className="informationCard"> 
                <Image
                  src="/icons/academic-cap.svg"
                  alt="Eden Wildlife Preserve"
                  width={100}
                  height={100}
                />
              <h2 className="infoSectionCopy"> Educational Programs </h2>
              <p className="infoSectionCopy">Inspiring curiosity with workshops, tours, and hands-on learning</p>
              <a href="education">
                <button className="informationButton"> Learn More </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    

    <div className="mainContainer">
      {/* Featured Animals */}
      <div className="featuredAnimalsSection">
          <h1 className="featuredAnimalsHeader"> Our Beloved Residents </h1>
          <div className="featuredAnimalsGrid">

            <div className="animalCard">
              <div className="animalImageContainer">
                <Image
                  src="/images/mountainGorilla.jpg"
                  alt="Eden Wildlife Preserve"
                  width={1080}
                  height={720}
                  className="animalImage"
                />
              </div>
              <div className="animalNameContainer">
                <h2 className="animalName">Mountain Gorilla</h2>
                <h2 className="personalAnimalName"> Koko </h2>
              </div>
            </div>

            <div className="animalCard">
              <div className="animalImageContainer">
                <Image
                  src="/images/africanElephants.jpg"
                  alt="Eden Wildlife Preserve"
                  width={500}
                  height={500}
                  className="animalImage"
                />
              </div>
              <div className="animalNameContainer">
                <h2 className="animalName">African Elephant</h2>
                <h2 className="personalAnimalName"> Ellie </h2>
              </div>
            </div>
            
            <div className="animalCard">
              <div className="animalImageContainer">
                <Image
                  src="/images/bengalTiger.jpg"
                  alt="Eden Wildlife Preserve"
                  width={500}
                  height={500}
                  className="animalImage"
                />
              </div>
              <div className="animalNameContainer">
                <h2 className="animalName">Bengal Tiger</h2>
                <h2 className="personalAnimalName"> Rajah </h2>
              </div>
            </div>

            <div className="animalCard">
              <div className="animalImageContainer">
                <Image
                  src="/images/masaiGiraffe.jpg"
                  alt="Eden Wildlife Preserve"
                  width={500}
                  height={500}
                  className="animalImage"
                />
              </div>
              <div className="animalNameContainer">
                <h2 className="animalName">Masai Giraffe</h2>
                <h2 className="personalAnimalName"> Daisy </h2>
              </div>
            </div>
          </div>
        </div>

          {/* CTA Section */}
          <div className="ctaSection">
            <h1> Join the Cause Today </h1>
            <div className="ctaCard">
              <div className="ctaImage">
                <Image
                  src="/images/conservationImage.jpg"
                  alt="Eden Wildlife Preserve"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
                <h2> Support Conservation Efforts </h2>
                <div className="ctaTextContainer">
                <p> Your donation helps provide world-class care for our animals, protect endangered species, and fund critical conservation programs around the globe. </p>
                </div>
                <a href="/donate">
                  <button className="ctaButton"> Donate </button>
                </a>
            </div>

            <div className="ctaCard">
              <div className="ctaImage">
                <Image
                  src="/images/feedingPenguins.jpg"
                  alt="Eden Wildlife Preserve"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
                <h2> Join Our Zoo Family </h2>
                <div className="ctaTextContainer">
                <p> Become a member and enjoy exclusive perks like unlimited visits, discounts, and members-only events, while helping us protect wildlife and inspire the next generation. </p>
                </div>
                <a href="membership">
                  <button className="ctaButton"> Membership </button>
                </a>
            </div>

            <div className="ctaCard">
              <div className="ctaImage">
                <Image
                  src="/images/handOnImpact.jpg"
                  alt="Eden Wildlife Preserve"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
                <div>
                  <h2> Make a Hands-On Impact </h2>
                </div>
                <div className="ctaTextContainer">
                  <p> Join our team of dedicated volunteers and play a vital role in caring for animals, educating visitors, supporting conservation efforts, and making a lasting impact on the future of wildlife. </p>
                </div>
                <div>
                  <a href="volunteer">
                    <button className="ctaButton"> Volunteer </button>
                  </a>
                </div>
            </div>
          </div>

    </div>
    {/* Newsletter Section */}
    <div className="newsletterSection">
      <div className="newsletterContent">
        <div className="newsletterImageContainer">
          <Image
            src="/icons/emailIcon.svg"
            alt="Eden Wildlife Preserve"
            width={130}
            height={91}
            className="emailIcon"
          />
        </div>
        <div>
          <div className="newsletterHeader"> Join Our Newsletter and Stay Wildly Informed! </div>
        </div>
        <div>
          <form className="newsletterForm">
            <input type="email" placeholder="Your Email Address" className="newsletterInput"/>
            <button type="submit" className="newletterButton"> Subscribe </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
