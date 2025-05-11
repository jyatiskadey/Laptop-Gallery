import React from "react";

const imageList = [
  "../IMG-20250511-WA0063.jpg",
  "../IMG-20250511-WA0066.jpg",
  "../IMG-20250511-WA0067.jpg",
  "../IMG-20250511-WA0057.jpg",
  "../IMG-20250511-WA0060.jpg",
//   "../IMG-20250511-WA0002.jpg",
];

const TestimonialsSlider = () => {
  // Repeat the images to create a seamless infinite loop
  const images = [...imageList, ...imageList];

  return (
    <div className="w-full bg-white py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Happy Customers
      </h2>
      <div className="relative">
        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll gap-8">
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-md bg-white">
                <img
                  src={src}
                  alt={`Happy customer ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
