import heroImage from "../assets/image6.png";

function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between space-y-8 text-center lg:text-left">
      <div className="lg:mr-auto place-self-center">
        <h3 className="max-w-2xl pb-7 text-lg text-primary font-bold tracking-tight leading-none md:text-xl xl:text-2xl">
          EYEBROW IPSUM
        </h3>
        <h1 className="max-w-2xl font-bold text-3xl text-secondary md:text-4xl lg:text-5xl">
          Lorem ipsum
        </h1>
        <h3 className="max-w-2xl hidden lg:block text-lg mt-10 text-secondary font-medium tracking-tight leading-none md:text-xl xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi.
        </h3>
      </div>
      <div className="md:flex">
        <div className="md:shrink-0 md:place-self-center">
          <img src={heroImage} alt="shop image" />
        </div>
      </div>
      <div>
        <h3 className="max-w-2xl lg:hidden block md:pt-10 sm:pt-9 text-lg text-secondary font-medium tracking-tight leading-none md:text-xl xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi.
        </h3>
      </div>
    </section>
  );
}

export default HeroSection;
