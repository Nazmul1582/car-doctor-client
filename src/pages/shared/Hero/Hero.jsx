import image from '../../../assets/images/checkout/checkout.png'

const Hero = ({title, route}) => {
  return (
    <div className="py-12">
      <div className="h-[300px] rounded-xl overflow-hidden relative">
        <img
          src={image}
          className="h-full w-full object-cover"
          alt="banner image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-[#151515] from-0% to-[rgba(21_21_21/0)] to-100%">
          <h2 className="text-white text-5xl font-bold pl-20">
            {title}
          </h2>
        </div>
        <p className="bg-[#ff3811] text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 py-3 px-8">
          {route}
        </p>
      </div>
    </div>
  );
};

export default Hero;
