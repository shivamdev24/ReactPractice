import {Fade} from "react-awesome-reveal";


function RefurbishedMRI() {
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

export default RefurbishedMRI;