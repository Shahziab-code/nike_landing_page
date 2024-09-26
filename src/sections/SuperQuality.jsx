import Button from "../nike_landing_assets/Components/Button";
import shoe8 from "../nike_landing_assets/assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl max-sm:text-[72px] max-lg:leading-[1] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>
          <span className="text-coral-red inline-block mt-3">
            Super 
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Quality
          </span> Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality confort, and innovative for
          your active life.
        </p>
        <Button label="View details" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
