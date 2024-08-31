import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "./Button";

function SpecialOffer() {
  return (
    <section className="flex flex-wrap justify-center items-center  gap-10 max-xontainer max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          width={770}
          height={680}
          alt="Offer"
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 ">
        <h1 className="text-4xl font-montserrat capitalize ">
          <span className="text-red-400 ">Special</span>
          Offer
        </h1>
        <p className="mt-4 lg:max-w-lg info-text ">
          Ensuring premium somfort and style out meticulously crafted footwear
          is designed to elevate your experience providing you with unmatched
          qyality innovation and a touch of elegance
        </p>
        <p className="text-xl  font-montserrat text-gray-500 my-5  leading-8">
          elevate your experience providing you with unmatched qyality
          innovation and a touch of elegance
        </p>
        <div className="flex gap-5 max-sm:flex-col">
          <Button Label="Shop Now" iconUrl={arrowRight} />
          <Button Label="Learn More" type="inhert" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
