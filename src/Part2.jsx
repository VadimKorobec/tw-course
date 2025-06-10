const Part2 = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl mt-10 after:content-['RED_Group']">
        Channel:
      </h1>
      <input
        className=" outline-0  border border-solid border-white/50  focus:border-sky-500 block mx-auto mt-4 rounded px-3 py-1.5 "
        type="text"
        placeholder="Enter email"
      />
      <button className=" rounded-2xl bg-orange-500 hover:bg-orange-300 transition-colors ease-in-out duration-300 mt-10 px-2 mx-auto block border border-white/50 border-solid cursor-pointer">
        Click me!
      </button>

      <div
        className="flex items-center justify-center mx-auto w-30 h-22 text-center mt-4
       bg-orange-400 rounded shadow font-bold p-5 transition-colors duration-500 md:bg-blue-400
       lg:bg-purple-400 xl:bg-emerald-400"
      >
        ADAPTIVE
      </div>
    </div>
  );
};

export default Part2;
