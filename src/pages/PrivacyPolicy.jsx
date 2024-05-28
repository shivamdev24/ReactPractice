
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";



export default function PrivacyPolicy() {
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
            <span>Privacy Policy</span>
          </div>
          <div className="mt-6">
            <span className="text-4xl md:text-6xl font-bold text-white">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>

      <div className=" w-[80%] mx-auto leading-6 py-8 text-justify">
        <h1 className="text-orange text-2xl font-bold py-4 md:text-3xl">
          Privacy Policy
        </h1>

        <div className="my-4 flex flex-col gap-2 ">
          <h2 className="text-md md:text-xl text-orange font-semibold">
            Information Collection{" "}
          </h2>
          <p className="my-4 text-sm md:text-lg flex flex-col gap-2 text-graylight ml-8">
            <span>
              - We collect personal information, such as name, email address,
              and contact details, when you interact with our website or place
              an order.
            </span>
            <span>
              - We may also collect non-personal information, such as website
              usage data, to improve our services.
            </span>
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-md md:text-xl text-orange font-semibold">
            Information Use
          </h2>
          <p className="my-4 text-sm md:text-lg flex flex-col gap-2 text-graylight ml-8">
            <span>
              - We use the information collected to process orders, communicate
              with customers, and improve our products and services.
            </span>
            <span>
              - Personal information will not be shared with third parties
              without your consent, except as required by law.
            </span>
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-md md:text-xl text-orange font-semibold">
            Data Security{" "}
          </h2>
          <p className="my-4 text-sm md:text-lg flex flex-col gap-2 text-graylight ml-8">
            <span>
              - We implement security measures to protect your information from
              unauthorized access, disclosure, or alteration.
            </span>
            <span>
              - However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee the absolute security of your
              data.
            </span>
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2 ">
          <h2 className="text-md md:text-xl text-orange font-semibold">
            Cookie Policy{" "}
          </h2>
          <p className="my-4 text-sm md:text-lg flex flex-col gap-2 text-graylight ml-8">
            - Our website may use cookies to enhance user experience and track
            website analytics. By using our website, you consent to the use of
            cookies.
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-md md:text-xl text-orange font-semibold">
            Updates to Privacy Policy{" "}
          </h2>
          <p className="my-4 text-sm md:text-lg flex flex-col gap-2 text-graylight ml-8">
            - We reserve the right to update our Privacy Policy periodically.
            Any changes will be posted on our website, and your continued use of
            our services constitutes acceptance of the updated policy.
          </p>
        </div>
      </div>
    </div>
  );
}

