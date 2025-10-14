// import paypal from "assets/paypal.jpg";
// import venmo from "assets/venmo.jpg";
// import zelle from "assets/donate/zelle.png";

export default function DonateCodes() {
  return (
    <div className="flex w-full flex-wrap lg:flex-nowrap px-4 items-center max-w-[320px] lg:max-w-none justify-between mb-20 lg:mb-10">
      <div className="flex flex-col">
        <a
          href="https://venmo.com/u/violetdanse"
          target="_blank"
          rel="noreferrer"
        >
          <div className="font-bold uppercase tracking-widest lg:text-mg text-2xl mt-8">
            Venmo
          </div>
          {/* <img src={venmo} className="max-w-[120px] my-2" alt="qr code" /> */}
          <div className="text-[10px] text-black/40 hidden lg:flex">
            @violetdanse
          </div>
        </a>
      </div>
      <div className="flex flex-col">
        <a
          href="https://paypal.me/violetdanse"
          target="_blank"
          rel="noreferrer"
        >
          <div className="font-bold uppercase tracking-widest lg:text-mg text-2xl mt-8">
            PayPal
          </div>
          {/* <img src={paypal} className="max-w-[120px] my-2" alt="qr code" /> */}
          <div className="text-[10px] text-black/40 hidden lg:flex">
            paypal.me/violetdanse
          </div>
        </a>
      </div>
      {/* <div className="flex flex-col">
        <a
          href="https://venmo.com/u/violetdanse"
          target="_blank"
          rel="noreferrer"
        >
          <div className="font-bold uppercase tracking-widest lg:text-mg text-2xl mt-8">
            Zelle
          </div>
          <img src={zelle} className="max-w-[120px] my-2" alt="qr code" />
          <div className="text-[10px] text-black/40 hidden lg:flex">
            violetdanse@gmail.com
          </div>
        </a>
      </div> */}
      <div className="flex flex-col">
        <a
          href="mailto:violetdanse@gmail.com?subject=Donation"
          target="_blank"
          rel="noreferrer"
        >
          <div className="font-bold uppercase tracking-widest lg:text-mg text-2xl mt-8">
            Other
          </div>

          <div className="text-xs h-[120px] w-[120px] my-2 border border-dotted border-black/20 bg-black/5 p-2 rounded-md items-center flex">
            For all cash, check, or direct deposit donations, please contact
            directly.
          </div>
          <div className="text-[10px] text-black/40 hidden lg:flex">
            violetdanse@gmail.com
          </div>
        </a>
      </div>
    </div>
  );
}
