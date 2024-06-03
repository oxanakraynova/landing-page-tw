import heroImage from "../assets/image6.png";

function HeroSection() {
  return (
    <>
      <section className="flex lg:flex-row md:flex-col lg:items-start md:items-center">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h3 className="max-w-2xl pt-10 pb-7 lg:text-left md:text-center text-lg text-primary font-bold tracking-tight leading-none md:text-xl xl:text-2xl">
            Eyebrow ipsum
          </h3>
          <h1 className="max-w-2xl pb-10 font-bold lg:text-left md:text-center text-3xl text-secondary lg:mb-8 md:text-4xl lg:text-5xl">
            Lorem ipsum
          </h1>
          <h3 className="max-w-2xl md:pt-10 sm:pt-9 lg:text-left md:text-center text-lg text-secondary font-medium tracking-tight leading-none md:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi.
          </h3>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImage} alt="shop image" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
