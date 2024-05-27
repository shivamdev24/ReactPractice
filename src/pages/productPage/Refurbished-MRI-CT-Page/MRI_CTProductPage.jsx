import {Fade} from "react-awesome-reveal";


export default function MRI_CTProductPage() {
  return (
    <div className="text-black flex flex-col gap-2 pb-10">
      <Fade triggerOnce={true} direction="up">
      <h1 className="text-2xl font-bold uppercase text-orange">Refurbished CT and MRI machines</h1>
      <p className="text-grapowder text-justify">
      Upgrade your diagnostic imaging capabilities with our refurbished CT and MRI machines. Benefit from advanced imaging technology at a fraction of the cost, without compromising on quality or performance. 
      </p>
      </Fade>
    </div>
  );
}
