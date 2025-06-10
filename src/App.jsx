const App = () => {
  return (
    <div className=" container mx-auto relative">
      <h1 className=" text-6xl font-bold text-orange-400 text-center mt-32">
        Hello Tailwind!
      </h1>
      <button className=" rounded-2xl bg-orange-500 hover:bg-orange-400 transition-colors ease-in-out duration-300 mt-10 px-2 mx-auto block border border-white/50 border-solid cursor-pointer">
        Click me!
      </button>
      <div className=" bg-blue-400 mt-5 w-24 h-32 mx-auto animate-bounce">
        Width and Height
      </div>
      <div className="flex mt-4 items-center gap-5">
        <div className=" bg-amber-300 w-20 h-20"></div>
        <div className=" bg-amber-300 w-20 h-20"></div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-4">
        <div className=" bg-blue-400  h-20"></div>
        <div className=" bg-blue-400  h-20"></div>
      </div>
      <div className=" mt-4 bg-white/80 rounded w-1/2 absolute top-20 left-20">
        <h1>Modal window</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          ipsam tenetur, aperiam aliquam tempora, voluptatibus architecto rem
          voluptas, eius consectetur magnam consequuntur libero voluptatem
          eveniet debitis saepe cum! Similique, quos!
        </p>
      </div>
      <div className=" absolute top-0 left-0 w-full h-full bg-white/85"></div>
    </div>
  );
};

export default App;
