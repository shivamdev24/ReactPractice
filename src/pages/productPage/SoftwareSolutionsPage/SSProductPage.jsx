import {Fade} from "react-awesome-reveal";

export default function SSProductPage() {
  return (
    <div className="text-black flex flex-col gap-2 pb-10">
      <Fade triggerOnce={true} direction="up">
      <h1 className="text-2xl font-bold uppercase text-orange">
        Software Solutions
      </h1>
      <p className="text-gray-700 text-justify">
        At Shelves Tech, we specialize in providing innovative and comprehensive software solutions designed to streamline operations, enhance patient care, and improve efficiency in healthcare facilities of all sizes. Our customizable software products are tailored to meet the unique needs of hospitals, clinics, medical centers, and healthcare organizations, helping them deliver high-quality care and optimize their workflows.
      </p>
      </Fade>
      <Fade triggerOnce={true} direction="up">
      <h2 className="text-xl font-bold text-orange mt-4">Why Choose Our Software Solutions?</h2>

      <h3 className="text-lg font-semibold mt-2">1. Customization and Scalability</h3>
      <p className="text-gray-700 text-justify">
        Our software solutions are highly customizable and scalable to meet the specific needs and requirements of your healthcare facility. Whether you run a small clinic or a large hospital, our team can tailor our software products to fit your workflow and enhance operational efficiency.
      </p>

      <h3 className="text-lg font-semibold mt-2">2. Compliance and Security</h3>
      <p className="text-gray-700 text-justify">
        We prioritize data security and compliance with industry regulations, such as HIPAA, to ensure the confidentiality and integrity of patient information. Our software solutions are designed with robust security features to protect sensitive data and maintain compliance with healthcare privacy standards.
      </p>

      <h3 className="text-lg font-semibold mt-2">3. Expert Support and Training</h3>
      <p className="text-gray-700 text-justify">
        Our dedicated team of support professionals is available to provide technical assistance, training, and ongoing support to help you maximize the value of our software solutions. We are committed to ensuring that you have the resources and knowledge to effectively use our products and achieve your operational goals.
      </p>
    </Fade>
    </div>
  );
}
