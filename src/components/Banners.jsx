import Banner1 from "../assets/banner_1.jpg";
import Banner2 from "../assets/banner_2.jpg";
import Banner3 from "../assets/banner_3.jpg";
const Banners = () => {
  const banners = [Banner1, Banner2, Banner3];
  return (
    <>
      <div className="carousel p-8 h-100 ">
        {banners.map((banner, index) => (
          <div
            id={`item${index + 1}`}
            className="carousel-item w-full px-8"
            key={index}
          >
            <img src={banner} className="w-full rounded-2xl" />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {banners.map((banner, index) => (
          <a href={`#item${index + 1}`} className="btn btn-xs" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default Banners;
