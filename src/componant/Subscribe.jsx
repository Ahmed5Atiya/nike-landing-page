import Button from "./Button";

function Subscribe() {
  return (
    <section
      id="contact-us"
      className="max-container justify-between flex items-center max-lg:flex-col gap-10"
    >
      <h1 className="text-3xl lg:max-w-lg text-center font-bold uppercase font-montserrat ">
        Sign Up for <span className="text-red-400">updates </span>& newsletter
      </h1>
      <div className="w-full lg:max-w-[50%] relative flex max-sm:flex-col items-center ">
        <input
          className="w-full py-5 px-4 outline-none  border-red-500 border-2"
          type="email"
          name="email"
          placeholder="Ahmed@gmail.com"
        />
        <div className="md:absolute max-sm:mt-5 max-sm:w-full right-3">
          <Button Label="Sign Up" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
