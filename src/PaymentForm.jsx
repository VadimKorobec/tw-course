const PaymentForm = () => {
  return (
    <div className="p-10 w-2/3 mx-auto">
      <section className="mb-12">
        <h2 className="text-white mb-0.5">Your balance</h2>
        <div className="flex items-center gap-2 mb-3.5">
          <div className="shadow-2xl bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
            <span className="italic font-bold text-red-400">V</span>
          </div>
          <p className="text-2xl font-bold">$1.878.67</p>
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded-md flex items-center justify-center font-medium">
          <span>+</span>
          <span>Buy credits</span>
        </button>
      </section>
      <section>
        <div className="flex justify-between items-center mb-2.5">
          <h2 className="font-semibold">Payment cards</h2>
          <button className="font-semibold text-blue-500">
            <span>+ </span>
            <span>Add card</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="rounded-xl overflow-hidden shrink-0"
            src="/visa.svg"
            alt="visa"
            width={60}
          />
          <div className="flex justify-center items-center w-full">
            <div>
              <p className="flex items-center gap-2 font-medium">
                Domen Kralj{" "}
                <p className="rounded-lg text-blue-500 bg-blue-100 px-1 ry-[0.02rem] text-[0.8rem]">
                  Primary
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-green-200/15 rounded-lg py-2 px-3">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est
            minus iure, illum, illo cum qui ratione aperiam voluptas repellendus
            harum recusandae nulla, nobis quia. Accusamus, aperiam? Consectetur,
            quidem reprehenderit!
          </p>
        </div>
      </section>
    </div>
  );
};

export default PaymentForm;
