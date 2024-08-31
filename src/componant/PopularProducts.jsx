import { star } from "../assets/icons";
import { products } from "../constant";

function PopularProducts() {
  return (
    <section className="max-container max-sm:mt-14 " id="products">
      <div className="p-2">
        <div className="flex justify-start flex-col gap-4">
          <h1 className="font-sembold text-4xl font-montserrat">
            Our <span className="text-red-500">Poupler</span> Product
          </h1>
          <p className="info-text">
            Experience top notch quality and style with out sough after <br />
            selections Discoverr a world of comport design and value
          </p>
        </div>
        <div className=" mt-16 grid lg:grid-cols-4 gap-7 sm:gap-3  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {products.map((item) => (
            <div
              key={item.name}
              className="p-3 bg-white flex flex-1 flex-col w-full font-montserrat rounded-lg shadow-md "
            >
              <div className="w-full">
                <img src={item.imgURL} className="w-full  object-contain" />
              </div>
              <div className="flex gap-2 items-center mt-7 ">
                <img src={star} alt="Star Rate" />
                <p className="text-gray-500 text-xl">(4.5)</p>
              </div>
              <h2 className="text-2xl  mt-4 ">{item.name}</h2>
              <p className="text-red-400 text-xl mt-2 ">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
