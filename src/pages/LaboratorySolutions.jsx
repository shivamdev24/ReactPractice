import React from 'react';
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";

// Dynamically import all images from the specified directory
const images = import.meta.glob('../assets/img/LaboratorySol/*.jpg', { eager: true });

// Define an array of descriptions for each image
const descriptions = [
  "Clinical Lab Devices",
  "Centrifuge",
  "Hot Plates",
  "Laboratory Incubator",
  "Water Bath",
  "Laboratory Autoclave",
  "Hot Air Oven",
  "Bottles Glassware",
  "Pipettes Glassware",
  "Watch Glasses",
  "Burets",
  "Pippette Pump",
  "Condensers",
  "Desiccators Glassware",
  "Flasks Glassware",
  "Kipp's Apparatus Glassware",
  "Centrifuge Tubes",
  "Coplin Jar",
  "Funnels",
  "Molecular Model Sets",
  "Pipette Stands",
  "Sample Containers",
  "Stop Cocks",
  "Test Tube Caps",
  "Tip Boxes",
  "Volume Flasks",
  "Students Schools Microscopes",
  "Monocular Microscopes",
  "Microscopes",
  "Economy Microscopes",
  "Stereo Microscopes",
  "Beakers Glassware",
  "Beakers Glassware",
  "Burets Glassware",
  "Cylinders Glassware",
  "Extraction Apparatus",
  "Petridish Glassware",
  "Test Tubes Glassware",
  "Clamps-Holders-Stands",
  "Stirrers and Connectors",
  "Immunology Box, Polystyrene",
  "Slide Boxes, Mailer",
  "Storage Boxes, Carrier",
  "Test Tube Racks",
  "Vials",
  "Advance Research Microscopes",
  "Binocular Research Microscopes",
  "Micro Pestle",
  "Micropipettes",
  "Diagnostic Rapid testing Kits",
  // Add descriptions for all 50 images here
];

// Sort images by their index in the array
const sortedImages = Object.keys(images)
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))
  .map((key) => images[key].default);

const imageArray = sortedImages.map((image, index) => ({
  image: image,
  description: descriptions[index],
}));

export default function LaboratorySolutions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full">
        <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full"></div>
        <img
          src={AboutImg}
          className="h-[29rem] object-top w-full object-cover"
          alt="About Us"
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <span>Home</span>
            <hr className="h-4 w-[2px] bg-white" />
            <span>Laboratory Solutions</span>
          </div>
          <div className="mt-4">
            <span className="text-6xl font-bold text-white">LABORATORY SOLUTIONS</span>
          </div>
        </div>
      </div>
      <div className="p-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
          {imageArray.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="border border-gray-300 rounded p-2 w-full">
                <div className="w-full h-48 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full rounded object-contain"
                  />
                </div>
              </div>
              <p className="text-center mt-2 text-sm md:text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-60"></div> {/* This div adds space between the content and the footer */}
    </div>
  );
}
