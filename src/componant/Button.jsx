function Button({ iconUrl, Label, type }) {
  return (
    <div
      className={` flex justify-center cursor-pointer ${
        type ? "bg-white text-black" : "bg-red-500 text-white"
      }   items-center gap-3 px-7 py-4 border font-montserrat text-lg leading-none`}
    >
      {Label}
      {iconUrl && <img src={iconUrl} alt={Label} />}
    </div>
  );
}

export default Button;
