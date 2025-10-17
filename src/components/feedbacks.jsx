import { useEffect, useState } from "react";

const FeedBack = () => {
  const reviews = [
  { reviewer: "Zyra Moon", comment: "Absolutely loved it! Will buy again.", image: "https://i.pravatar.cc/150?img=1" },
  { reviewer: "Jaxon Blaze", comment: "It was okay, nothing extraordinary.", image: "https://i.pravatar.cc/150?img=2" },
  { reviewer: "Luna Starling", comment: "Not satisfied, expected better quality.", image: "https://i.pravatar.cc/150?img=3" },
  { reviewer: "Kairo Vex", comment: "Fast shipping and great packaging!", image: "https://i.pravatar.cc/150?img=4" },
  { reviewer: "Nova Drift", comment: "I’m impressed, works perfectly.", image: "https://i.pravatar.cc/150?img=5" },
  { reviewer: "Axel Thorn", comment: "Average product, could be improved.", image: "https://i.pravatar.cc/150?img=6" },
  { reviewer: "Eira Sol", comment: "Five stars! Highly recommended.", image: "https://i.pravatar.cc/150?img=7" },
  { reviewer: "Orion Pax", comment: "Stopped working after a few days, disappointing.", image: "https://i.pravatar.cc/150?img=8" },
  { reviewer: "Lyra Quill", comment: "Exactly what I needed, very happy!", image: "https://i.pravatar.cc/150?img=9" },
  { reviewer: "Caspian Rye", comment: "Poor quality, not worth the money.", image: "https://i.pravatar.cc/150?img=10" },
];


  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

   useEffect(()=>{
    const timeinterval =  setTimeout(()=>{
      if(current == total){
         setCurrent(0);
      }else{
        setCurrent((prev) => prev + 1 % total);
      }
    },3000);

    return ()=> clearTimeout(timeinterval)
   })
  return (
    <div className="feedback-container xs:m-3 md:m-3.5 lg:m-4 xl:m-5">
      {/* Header */}
      <div className="feedback-headline flex items-center justify-between xs:p-2">
        <h1 className="font-bold text-lg lg:text-xl">Our Happy Customers</h1>
        <div className="arrows flex items-center">
          <i
            onClick={prevSlide}
            className="ri-arrow-left-long-line xs:ml-2 lg:ml-5 cursor-pointer text-xl hover:text-gray-500 transition-colors"
          ></i>
          <i
            onClick={nextSlide}
            className="ri-arrow-right-long-line xs:ml-2 lg:ml-5 cursor-pointer text-xl hover:text-gray-500 transition-colors"
          ></i>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden relative xs:m-1 lg:m-2">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 50}%)`,
            width: `${total * 10}%`,
          }}
        >
          {reviews.map((feed, index) => (
            <div
              key={index}
              className="feedback flex-shrink-0  xs:p-1 lg:p-2 border border-gray-300 rounded-3xl flex flex-col justify-center items-start text-center bg-white mx-1"
            >
             <div className="feedback-details flex flex-col justify-center items-center xs:w-[85vw] lg:w-[80vw]">
              <div className="image-container border-2 border-dotted border-black rounded-full hover:border-gray-400 xs:p-1">
                <img src={feed.image} alt="" className="xs:h-24 rounded-full transition-all ease-in-out delay-100 duration-75 cursor-pointer  hover:scale-105" />
              </div>
               <p className="customer-name flex font-extrabold mb-2 justify-center items-center">
                {feed.reviewer}
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/017/350/123/small/green-check-mark-icon-in-round-shape-design-png.png"
                  alt=""
                  className="h-4 ml-1"
                />
              </p>
              <p className="text-gray-600">{feed.comment}</p>
             </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3 space-x-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`xs:h-1 xs:w-2 lg:h-1 lg:w-4 rounded-2xl border-black norder ${
              idx === current ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>  
    </div>
  );
};

export default FeedBack;
