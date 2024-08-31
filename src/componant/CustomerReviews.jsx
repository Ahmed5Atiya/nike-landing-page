import { star } from "../assets/icons";
import { reviews } from "../constant";

function CustomerReviews() {
  return (
    <div className="max-container flex flex-col justify-center text-center gap-3">
      <div className="flex text-center flex-col  w-fit m-auto">
        <h1 className="font-montserrat text-4xl">
          What Our <span className="text-red-400">Customer</span> Say ?
        </h1>
        <p className="info-text m-auto mt-4 max-w-lg  text-lg ">
          elevate your experience providing you with unmatched qyality
          innovation and a touch of elegance
        </p>
      </div>
      <div className="flex text-center md:flex-row  flex-col gap-4 mt-10 justify-evenly ">
        {reviews.map((item) => (
          <div
            className="p-4 flex flex-col items-center justify-center bg-white shadow-lg"
            key={item.customerName}
          >
            <img
              src={item.imgURL}
              alt={item.feedback}
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-gray-400 mt-5 w-[70%] leading-4">
              {item.feedback}
            </p>
            <div className="flex gap-4 mt-4 items-center">
              <img src={star} width={30} height={30} />
              <p className="text-xl text-gray-400">({item.rating})</p>
            </div>
            <h2 className="text-2xl mt-5">{item.customerName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
