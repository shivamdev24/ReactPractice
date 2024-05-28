
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
            <span>Terms and Conditions</span>
          </div>
          <div className="mt-6">
            <span className="text-4xl md:text-6xl font-bold uppercase text-white">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>

      <div className=" w-[80%] mx-auto leading-6 py-8">
        <h1 className="text-orange text-2xl font-bold py-4 md:text-3xl">
          Terms and Conditions
        </h1>

        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-lg md:text-xl text-orange font-semibold">
            Introduction{" "}
          </h2>
          <p className="text-graylight text-sm md:text-lg ml-8">
            Welcome to Shelves Tech. These Terms and Conditions govern your use
            of our website and services provided by Shelves Tech. By accessing
            and using our website, you agree to comply with these Terms and
            Conditions.
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-lg md:text-xl text-orange font-semibold">
            Products and Services{" "}
          </h2>
          <p className="text-graylight text-sm md:text-lg ml-8">
            Shelves Tech specializes in the trading of medical equipment,
            including PSA oxygen plants, refurbished CT scan and MRI machines,
            Onco Radiation products, and hospital management software. We strive
            to provide high-quality products and services to meet the needs of
            healthcare facilities.
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-lg md:text-xl text-orange font-semibold">
            Ordering and Payment{" "}
          </h2>
          <p className="my-4 flex flex-col text-sm md:text-lg gap-2 text-graylight ml-8">
            <span>
              - When you place an order through our website, you agree to
              provide accurate and complete information.
            </span>
            <span>
              - Payments must be made in full before orders are processed and
              shipped.
            </span>
            <span>
              - Prices listed on the website are subject to change without
              notice.
            </span>
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2 ">
          <h2 className="text-lg md:text-xl text-orange font-semibold">
            Shipping and Delivery{" "}
          </h2>
          <p className="my-4 flex flex-col text-sm md:text-lg gap-2 text-graylight ml-8">
            <span>
              - We aim to process and ship orders promptly, but delivery times
              may vary based on product availability and location.
            </span>
            <span>
              {" "}
              - Customers are responsible for providing accurate shipping
              information. Any additional fees incurred due to incorrect
              information will be the responsibility of the customer.
            </span>
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-lg md:text-xl text-orange font-semibold">
            Returns and Refunds{" "}
          </h2>
          <p className="my-4 flex flex-col gap-2 text-sm md:text-lg text-graylight ml-8">
            <span>
              - We accept returns of products within a specified return period,
              subject to our Return Policy.
            </span>
            <span>
              - Refunds will be issued in accordance with our Refund Policy,
              provided that returned products meet the specified criteria.
            </span>
          </p>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <h2 className="text-lg md:text-xl text-orange font-semibold">
            Intellectual Property{" "}
          </h2>
          <p className="my-4 flex flex-col gap-2 text-sm md:text-lg text-graylight ml-8">
            <span>
              - All content on our website, including text, images, logos, and
              trademarks, is the intellectual property of Shelves Tech and
              protected by copyright laws.
            </span>
            <span>
              - You may not use, reproduce, or distribute our content without
              prior written consent.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
