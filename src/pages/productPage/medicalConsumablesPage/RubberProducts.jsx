const images = import.meta.glob(
  "../../../assets/img/MediConsumables/RubberProducts/*.jpg",
  {
    eager: true,
  },
);

const descriptions = [
  "Invalid Air Rings (Air Cushions)",
  "Catheters - Malecot, Depezer..",
  "Corrugated Drainage Sheets",
  "Douche Tubes",
  "Pipette Bulbs",
  "Rectal, Colon Tubes",
  "Surgical, Laboratory Tubing",
  "Mackintosh Sheeting",
  "Hot Water Bottle Cover",
  "Enema Syringes (Higginson)",
  "Atomizer Bulbs",
  "Chloroform Bellows, Sigmoidoscope Bellows",
  "Douche Bags, Enema Bags",
  "Ear, Ulcer Syringes",
  "Ice Bags",
  "Pessary Rubber Ring",
  "Pipette Filler Bulbs - 3 Way",
  "Rectal, Infant Syringe",
  "Stomach Tube",
  "Breast Pump",
];
const sortedImages = Object.keys(images)
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]))
  .map((key) => images[key].default);

const imageArray = sortedImages.map((image, index) => ({
  image: image,
  description: descriptions[index],
}));

function RubberProducts() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {imageArray.map((item, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default RubberProducts;
