
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";



export default function TermsConditions() {
  return (
    <div>
      <div className="relative">
        <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
        <img
          src={AboutImg}
          className="h-[29rem] object-top w-full object-cover  "
          alt=""
        />
        <div className="absolute top-48 left-[30px] md:left-[11rem]">
          <div className="flex gap-4 items-center font-bold text-white">
            <span>Home</span>
            <hr className="h-4 w-[2px] bg-white" />
            <span>About Us</span>
          </div>
          <div className="mt-4">
            <span className="text-6xl font-bold text-white">ABOUT US</span>
          </div>
        </div>
      </div>
    </div>
  );
}