import { services } from "../constant";

function Services() {
  return (
    <section className="flex max-container justify-center gap-5 flex-wrap">
      {services.map((item) => (
        <div
          className=" px-8 py-14 shadow-2xl w-[300px] flex-grow flex flex-col justify-start"
          key={item.label}
        >
          <div className="p-2 bg-red-500 flex items-center justify-center w-fit">
            <img
              src={item.imgURL}
              alt={item.label}
              width={30}
              height={30}
              className="text-red-400"
            />
          </div>

          <h2 className="text-2xl font-montserrat font-bold my-6">
            {item.label}
          </h2>
          <p className="text-gray-400 font-montserrat break-words text-lg">
            {item.subtext}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Services;
