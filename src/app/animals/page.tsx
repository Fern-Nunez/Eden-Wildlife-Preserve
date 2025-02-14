import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./animals.css";

export default function Animals() {
  return (
    <>
      <Navbar/>
      <div className="animalHeroContainer">
        <div className="animalHeroImageWrapper">
          <Image
            src="/images/animals/animHero.jpg"
            alt="animal Hero"
            className="animalHeroImage"
            fill
            priority
          />
        </div>
      </div>
      <div className="animalMainContainer">
        <div className="animalHeadline">
          <h1> Meet Eden&apos;s Animals </h1>
        </div>
        <div className="animalSubline">
          <p> Discover the amazing animals of Eden Wildlife Preserve, from majestic rhinos to playful penguins </p>
        </div>


        <div className="animalGrid">

          <div className="animalGridSet">

            <div className="animalCard gridItemOne">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/masaiGiraffe.jpg"
                  alt="education Picture"
                  className="educationImage masaiGiraffe"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Masai Giraffe</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemTwo">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/africanLion.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">African Lion</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemThree">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/bengalTiger.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Bengal Tiger</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
          </div>


          <div className="animalGridSet">
            
            <div className="animalCard gridItemFour">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/plainsZebra.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Plains Zebra</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemFive">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/africanElephant.jpg"
                  alt="education Picture"
                  className="educationImage africanElephant"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">African Elephant</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemSix">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/kingPenguin.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">King Penguin</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
          </div>

          <div className="animalGridSet">

            <div className="animalCard gridItemOne">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/mountainGorilla.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Mountain Gorilla</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemTwo">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/americanFlamingo.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">American Flamingo</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemThree">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/chimpanzee.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Chimpanzee</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
          </div>


          <div className="animalGridSet">
            
            <div className="animalCard gridItemFour">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/threeToedSloth.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Three-Toed Sloth</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemFive">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/redKangaroo.jpg"
                  alt="education Picture"
                  className="educationImage redKangaroo"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Red Kangaroo</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemSix">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/redPanda.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Red Panda</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
          </div>
                    <div className="animalGridSet">

            <div className="animalCard gridItemOne">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/tortoise.jpg"
                  alt="education Picture"
                  className="educationImage tortoise"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Sulcata Tourtoise</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemTwo">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/cheetah.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Cheetah</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemThree">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/polarBear.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Polar Bear</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
          </div>


          <div className="animalGridSet">
            
            <div className="animalCard gridItemFour">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/whiteRhinoceros.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">White Rhinoceros</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemFive">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/meerkat.webp"
                  alt="education Picture"
                  className="educationImage meerkat"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Meerkat</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemSix">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/otter.jpeg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">North American River Otter</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
          </div>

          <div className="animalGridSet">

            <div className="animalCard gridItemOne">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/komodoDragon.jpg"
                  alt="education Picture"
                  className="educationImage komodoDragon"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Komodo Dragon</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemTwo">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/python.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Reticulated Python</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemThree">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/peacock.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Peacock</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
            </div>


            <div className="animalGridSet">

            <div className="animalCard gridItemFour">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/hippopotamus.webp"
                  alt="education Picture"
                  className="educationImage hippopotamus"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Hippopotamus</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemFive">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/baldEagle.jpg"
                  alt="education Picture"
                  className="educationImage baldEagle"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Bald Eagle</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemSix">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/alligator.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">American Alligator</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
            </div>

            <div className="animalGridSet">

            <div className="animalCard gridItemOne">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/macaw.jpg"
                  alt="education Picture"
                  className="educationImage macaw"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Macaws</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemTwo">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/crownedPigeon.jpg"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Crowned Pigeon</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>

            <div className="animalCard gridItemThree">
              <div className="educationImageWrapper">
                <Image
                  src="/images/animals/capuchinMonkey.webp"
                  alt="education Picture"
                  className="educationImage"
                  fill
                />
                <div className="animalOverlay">
                  <div className="animalTitle">Capuchin Monkey</div>
                </div>
              </div>
              <div className="overlayCard"></div>
            </div>
            </div>

        </div>
      </div>
      <hr className="lineBreak"></hr>
      <Footer/>
    </>
  );
}
