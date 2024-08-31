import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constant";
import Button from "./Button";
import ShoeCard from "./ShoeCard";

function Hero() {
  const [bigShowImg, setBigShowImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full gap-10 flex flex-col xl:flex-row min-h-screen max-container justify-center"
    >
      {/* <div className="flex relative flex-col items-start justify-center xl:w-4/5 pt-28 max-xl:padding-x">
        <p className=" text-xl font-montserrat text-gray-400 ">
          Our Summer collections
        </p>
        <h1 className="text-black max-sm:leading-[82] text-8xl max-sm:text-[72px]  font-semibold mt-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10 x-10">
            The New Arrival
          </span>
          <br /> <span className="text-red-600 mt-3">Nike</span> Shoes
        </h1>
        <p className="text-gray-400 font-montserrat leading-8 mt-6 mb-14 text-lg sm:max-w-sm">
          Discover stylish Nike arrivals Quality comport , and innovation for
          your active life .
        </p>
        <Button Label="Shop now" iconUrl={arrowRight} />
        <div className="flex items-start w-full flex-wrap justify-start gap-16 mt-10">
          {statistics.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <h1 className="text-[40px] font-semibold">{item.value}</h1>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button Label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary max-xl:py-40 bg-hero bg-cover bg-center items-center  relative flex justify-center flex-1 xl:min-h-screen">
        <img
          className="object-contain relative z-10"
          src={bigShowImg}
          width={610}
          height={500}
          alt="shose"
        />

        <div className="flex  absolute -bottom-14 gap-4">
          {shoes.map((shoe) => (
            <div key={shoe} className="">
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShowImg(shoe);
                }}
                bigShoeImg={bigShowImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
