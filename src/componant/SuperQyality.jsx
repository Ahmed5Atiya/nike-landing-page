import {  shoe8 } from "../assets/images";
import Button from "./Button";
function SuperQyality() {
  return (
    <section className="max-container max-sm:mt-14 flex max-lg:flex-col items-center w-full gap-10 justify-between">
      <div className="flex flex-1 flex-col gap-3 ">
        <h1 className="text-4xl font-montserrat capitalize ">
          We Provide You{" "}
          <span className="text-red-400 ">
            Super <br /> Quality{" "}
          </span>
          Shoes
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
        <Button Label="View Detalis" />
      </div>
      <div className="flex-1 flex  justify-center items-center">
        <img
          className="object-contain"
          src={shoe8}
          alt="Quality"
          width={570}
          height={533}
        />
      </div>
    </section>
  );
}

export default SuperQyality;
