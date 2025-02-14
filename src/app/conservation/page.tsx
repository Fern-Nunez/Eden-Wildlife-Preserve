import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./conservation.css";

export default function Conservation() {
  return (
    <>
      <Navbar/>
      <div className="conservationMainContainer">
        <div className="conservationHeadline">
          <h1> Protecting Wildlife and Habitats for a Sustainable Future </h1>
        </div>
        <div className="conservationSubline">
          <p> At Eden Wildlife Preserve, we protect endangered species, preserve natural habitats, and promote biodiversity to ensure a sustainable future for our planet. </p>
        </div>

        <div className="conservationImageWrapper">
          <Image
            src="/images/conservation/hero.jpg"
            alt="Conservation Image"
            className="conservationHeroImage"
            fill
            priority
          />
        </div>
        
        <div className="conservationHeadline">
          <h1> Wildlife Threats: A Growing Challenge </h1>
        </div>
        <div className="conservationSubline">
          <p> Our planet's diverse wildlife faces growing threats from human activity and environmental changes. Recognizing these challenges is the first step toward protecting them. Here are the key dangers they encounter: </p>
        </div>


        <div className="threatsGrid">

          <div className="threatsGridSet">
            <div className="threatsImageWrapper gridItemOne gridItem">
              <Image
                src="/images/conservation/deforestation.jpg"
                alt="Conservation Image"
                className="threatsImage"
                fill
              />
            </div>
            <div className="threatsText gridItemTwo gridItem">
              <div className="threatTextHead">
                <h2> Deforestation </h2>
              </div>
              <div>
                <p> Forests, critical ecosystems supporting countless species, are rapidly disappearing due to logging, agriculture, and urban expansion. This loss deprives wildlife of shelter and food, disrupts ecosystems, and accelerates climate change, threatening the planet's delicate balance.</p>
              </div>
            </div>
          </div>


          <div className="threatsGridSet">
            <div className="threatsImageWrapper gridItem">
              <Image
                src="/images/conservation/climateChange.jpg"
                alt="Conservation Image"
                className="threatsImage"
                fill
              />
            </div>
            <div className="threatsText gridItem">
              <div className="threatTextHead">
                <h2> Climate Change </h2>
              </div>
              <div>
                <p> Rising temperatures and unpredictable weather patterns are disrupting ecosystems worldwide. These changes endanger species that struggle to adapt to their rapidly shifting environments.</p>
              </div>
            </div>
          </div>


          <div className="threatsGridSet">
            <div className="threatsImageWrapper gridItemOne gridItem">
              <Image
                src="/images/conservation/trade.jpg"
                alt="Conservation Image"
                className="threatsImage"
                fill
              />
            </div>
            <div className="threatsText gridItemTwo gridItem">
              <div className="threatTextHead">
                <h2> Illegal Wildlife Trade </h2>
              </div>
              <div>
                <p> The illegal trafficking of animals and their parts drives species toward extinction and disrupts ecosystems. This harmful trade fuels a destructive global black market, threatening biodiversity and sustainability.</p>
              </div>
            </div>
          </div>


          <div className="threatsGridSet">
            <div className="threatsImageWrapper gridItem">
              <Image
                src="/images/conservation/waste.webp"
                alt="Conservation Image"
                className="threatsImage"
                fill
              />
            </div>
            <div className="threatsText gridItem">
              <div className="threatTextHead">
                <h2> Pollution </h2>
              </div>
              <div>
                <p> Toxic waste, plastics, and harmful chemicals are polluting natural habitats across the globe. This contamination makes survival increasingly difficult for both plants and animals.</p>
              </div>
            </div>
          </div>


          <div className="threatsGridSet">
            <div className="threatsImageWrapper gridItemOne gridItem">
              <Image
                src="/images/conservation/frag.jpg"
                alt="Conservation Image"
                className="threatsImage"
                fill
              />
            </div>
            <div className="threatsText gridItemTwo gridItem">
              <div className="threatTextHead">
                <h2> Habitat Fragmentation </h2>
              </div>
              <div>
                <p> Urbanization and land development divide ecosystems, isolating species and disrupting migration patterns, which reduces their ability to find food, mates, and shelter. Over time, this fragmentation lowers their chances of survival and threatens entire ecosystems.</p>
              </div>
            </div>
          </div>

        </div>



        <div className="conservationHeadline">
          <h1> Conservation Programs </h1>
        </div>
        <div className="conservationSubline">
          <p> At Eden Wildlife Preserve, our conservation programs are at the heart of our mission to protect endangered species and restore ecosystems. Through a range of targeted initiatives, we are making a lasting impact on wildlife and their habitats: </p>
        </div>


        <div className="conservationImageWrapper">
          <Image
            src="/images/conservation/restore.jpg"
            alt="Conservation Image"
            className="conservationHeroImage"
            fill
          />
        </div>

        <div className="conservationTactics">

          <div className="tactic">
            <div>
              <h2> Breeding Programs for Endangered Species </h2>
            </div>
            <div>
              <p> Our breeding programs focus on supporting the recovery of species at risk of extinction. By ensuring healthy populations, we help safeguard their future in the wild</p>
            </div>
          </div>

          <div className="tactic">
            <div>
              <h2> Reforestation Initiatives </h2>
            </div>
            <div>
              <p> We plant native trees to restore degraded landscapes and rebuild essential habitats. These efforts also combat climate change by increasing carbon absorption and promoting biodiversity</p>
            </div>
          </div>

          <div className="tactic">
            <div>
              <h2> Anti-Poaching Measures </h2>
            </div>
            <div>
              <p> Our anti-poaching programs focus on protecting wildlife through advanced monitoring and enforcement strategies. We also work with local communities to raise awareness and reduce the demand for illegal wildlife products</p>
            </div>
          </div>

          <div className="tactic">
            <div>
              <h2> Partnerships with Conservation Organizations </h2>
            </div>
            <div>
              <p> By collaborating with conservation groups worldwide, we combine expertise and resources to amplify our impact. Together, we develop innovative solutions to address global conservation challenges</p>
            </div>
          </div>

          <div className="tactic">
            <div>
              <h2> Release and Rehabilitation Programs </h2>
            </div>
            <div>
              <p> Rescued animals receive care and rehabilitation to prepare them for reintroduction into the wild. These programs help restore ecosystem balance and give animals a second chance at life</p>
            </div>
          </div>

        </div>

        <div className="conservationCTA">
            <h1> Together, we can make a difference today.</h1>
        </div>


      </div>
      <Footer/>
    </>
  );
}
