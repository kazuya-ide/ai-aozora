import React from 'react';
import myImage from '../assets/「青空と虹の端」の写真.jpg';

function ImageDisplay() {
    return (
        <div className="w-screen overflow-hidden flex justify-center">
            <img
              src={myImage.src}
              alt="青空と虹の端"
              className="w-full h-auto object-cover md:h-[80vh]"
            />
        </div>
    );
}

export default ImageDisplay;