import React, { useEffect, useState } from "react";

const Slideshow = ({ images }) => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Start the slideshow interval when the component mounts
    const slideshowInterval = setInterval(() => {
      // Update the current image index by incrementing it and cycling back to 0 when reaching the end
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval duration (in milliseconds) as desired

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(slideshowInterval);
    };
  }, [images]); // Re-run the effect when the images prop changes

  return (
    <div className="slideshow">
      {/* Display the image based on the current image index */}
      <img src={images[currentImageIndex]} alt="slideshow" className="slideshow-image" />
    </div>
  );
};

export default Slideshow;
