import landingImage from "../assets/landing.png";
import donwlodImg from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tighter text-orange-500">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5 items-center">
        <img src={landingImage} alt="Landing Image" />
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order Takeaway even faster
          </span>
          <p>
            Our app allows you to order food in minutes, without the hassle of
            waiting in line.
          </p>
          <img src={donwlodImg} alt="Downlaod Image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
