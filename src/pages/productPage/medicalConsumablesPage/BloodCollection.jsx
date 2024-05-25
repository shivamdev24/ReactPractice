import {Fade} from "react-awesome-reveal";
import { useEffect } from "react";

const images = import.meta.glob("../../../assets/img/MediConsumables/BloodCollection/*.jpg", {
    eager: true,
  });
  
  const descriptions = [
    "Serum Test Tubes",
    "Serum Seperating Tubes",
    "EDTA Blood Draw Tubes",
    "Sodium Citrate Tubes",
    "Lithium Heparin Tubes",
    "ESR Vacuum Blood Tubes",
    "Multi Sample Blood Collection Needles",
    "Fluoride Oxalate Tubes",
    "ESR Rack", 
    "Safety Lancets Twist Off",
    "Tourniquet"
  ];
  const sortedImages = Object.keys(images)
    .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))
    .map((key) => images[key].default);
  
  const imageArray = sortedImages.map((image, index) => ({
    image: image,
    description: descriptions[index],
  }));
  
  function BloodCollection() {
    useEffect(() => {
      console.log("Component re-rendered");
      window.scrollTo(0, 0);
    }, []);

    return (
      <div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {imageArray.map((item, index) => (
              <Fade key={index} triggerOnce={true} direction="up">
              <div
                key={index}
                className="flex flex-col border border-gray-400 rounded hover:shadow-lg duration-500 items-center"
              >
                <div className=" rounded p-2">
                  <div className="w-full sm:w-48 md:w-60 lg:w-64 h-64 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full rounded object-contain"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <p className="text-center m-2 text-black text-sm md:text-lg">
                  {item.description}
                </p>
              </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default BloodCollection;
  