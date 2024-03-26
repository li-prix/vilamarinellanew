import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-80`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => {
          return <img src={s} alt={s} key={index} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between item-center flex text-white">
        <button onClick={previousSlide}>
          <FaAngleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
