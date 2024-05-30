import {Fade} from "react-awesome-reveal";


export default function MRI_CTProductPage() {
  return (
    <div className="text-black flex flex-col gap-2 pb-10">
      <Fade triggerOnce={true} direction="up">
        <h1 className="text-xl lg:text-3xl font-bold text-orange">
          Refurbished CT and MRI machines
        </h1>
        <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
          Upgrade your diagnostic imaging capabilities with our refurbished CT
          and MRI machines. Benefit from advanced imaging technology at a
          fraction of the cost, without compromising on quality or performance.
        </p>
      </Fade>

      <Fade triggerOnce direction="up">
        <div className="my-8">
          <h2 className="text-xl lg:text-3xl font-bold text-orange">
            About Refurbished CT Scan Machines
          </h2>
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            At Shelves Tech we deal in refurbished or pre-owned CT Scan
            Machines. We specialize in providing high-quality refurbished CT
            scanner equipment to medical facilities, hospitals, clinics, and
            imaging centers worldwide. With a commitment to quality,
            reliability, and affordability, we aim to make advanced medical
            imaging technology accessible to healthcare providers of all sizes.
          </p>
        </div>
      </Fade>
      <Fade triggerOnce direction="up">
        <div className="mb-8">
          <h2 className="text-xl lg:text-3xl font-bold text-orange">
            About Refurbished MRI Machines
          </h2>
          <p className="mt-2 ml-4 text-justify text-graylight text-sm md:text-base">
            At Shelves Tech, we specialize in providing high-quality refurbished
            MRI machines to medical facilities worldwide. Our mission is to
            offer cutting-edge imaging technology at affordable prices, enabling
            healthcare providers to enhance patient care and diagnosis without
            breaking the bank.
          </p>
        </div>
      </Fade>
    </div>
  );
}
