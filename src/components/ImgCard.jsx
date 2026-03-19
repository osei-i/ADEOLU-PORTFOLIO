import React, { useState } from 'react';

// 1. Import all images from your assets folder
import img0 from "/assets/FEBRUARY Calsan.webp";
import img1 from "/assets/Artboard 1.webp";
import img2 from "/assets/Black Grunge Book Cover Mockup Instagram Post.webp";
import img3 from "/assets/Untitled (736 x 1195 px).webp";
import img4 from "/assets/FAKEPASTRIES.webp";
import img5 from "/assets/SUMWAT CREATIVE ELCHAPOS.webp";
import img6 from "/assets/ADR Executive CounciL 1ADRRRRRRRRRRRRRRR.webp";
import img7 from "/assets/Legal Tag.webp";
import img8 from "/assets/Maaagaaa.jpeg.webp";
import img9 from "/assets/Calsan Executives.webp";

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImgCard = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
           
            <div className='relative grid grid-cols-1 md:flex md:flex-wrap md:justify-center md:gap-4 lg:grid lg:grid-cols-5 auto-rows-[250px] py-0 md:py-8 gap-2 pl-2 sm:pl-4 pr-2'>

                {/* Card 0 */}
                <div className="relative w-70 lg:w-70 sm:w-full lg:h-54 md:w-[45%] md:h-64">
                    <img 
                        src={images[0]} 
                        alt="Gallery 0"
                        className="w-full h-full shadow-md cursor-pointer hover:opacity-80 transition-opacity" 
                        onClick={() => setSelectedImage(images[0])}/>
                </div>

                {/* Card 1 */}
                <div className='relative w-70 lg:w-75  md:w-[45%] md:h-64 sm:w-full lg:left-7 sm:left-0 lg:h-52 z-1 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img 
                        src={images[1]} 
                        alt="Gallery 1"
                        className="w-full h-full shadow-2xl" 
                        onClick={() => setSelectedImage(images[1])}/>
                </div>

                {/* Card 2 */}
                <div className='relative w-70  md:w-[45%] md:h-64 lg:w-60 sm:w-full lg:ml-17 sm:left-0 mt-0.5 sm:mt-2 lg:h-52 z-3 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img 
                        src={images[2]} 
                        alt="Gallery 2"
                        className='w-full h-full'
                        onClick={() => setSelectedImage(images[2])} />
                </div>

                {/* Card 3 */}
                <div className='relative w-70 lg:w-45 sm:w-full  md:w-[45%] md:h-64 lg:h-57 lg-mt-4 sm:mt-0 z-25 lg:left-17 sm:left-0 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[3]} 
                        alt="Gallery 3"
                        className='w-full h-full shadow-md'
                        onClick={() => setSelectedImage(images[3])} />
                </div>

                {/* Card 4 */}
                <div className='relative w-70 lg:w-57 sm:w-full z-21 lg-mt-4 sm:mt-0 lg:h-64  md:w-[45%] md:h-64 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[4]} alt="Gallery 4" className='w-full h-full' 
                        onClick={() => setSelectedImage(images[4])}/>
                </div>

                {/* Card 5 */}
                <div className='w-70 lg:w-60 sm:w-full  md:w-[45%] md:h-64 lg:h-76 lg:-mt-10 sm:mt-0 relative z-3 shadow-md cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[5]} alt="Gallery 5" className='w-full h-full object-cover'
                        onClick={() => setSelectedImage(images[5])}/>
                </div>

                {/* Card 6 */}
                <div className='w-70 lg:w-60 sm:w-full  md:w-[45%] md:h-64 lg:h-77 lg:-mt-11 sm:mt-0 lg:right-4 sm:right-0 relative z-10 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[6]} alt="Gallery 6" className='w-full h-full object-cover'
                        onClick={() => setSelectedImage(images[6])}/>
                </div>

                {/* Card 7 */}
                <div className='relative w-70 lg:w-84 sm:w-full lg:-mt-11 sm:mt-0  md:w-[45%] md:h-64 lg:right-5 sm:right-0 lg:h-75.5 z-13 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[7]} alt="Gallery 7" className='w-full h-full'
                        onClick={() => setSelectedImage(images[7])}/>
                </div>

                {/* Card 8 */}
                <div className='w-70 relative sm:w-full lg:-mt-11 sm:mt-0 lg:left-5.5  lg:h-79 lg:w-59 md:w-[45%] md:h-64 z-20 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[8]} alt="Gallery 8" className='w-full h-full'
                        onClick={() => setSelectedImage(images[8])} />
                </div>

                {/* Card 9 */}
                <div className='relative w-70 lg:w-59 sm:w-full lg:h-70 lg:-mt-3 sm:mt-0 lg:right-2  md:w-[45%] md:h-64  z-25 shadow-2 cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[9]} alt="Gallery 9" className='h-full w-full'
                        onClick={() => setSelectedImage(images[9])} />
                </div>

            </div>

            {/* LIGHTBOX MODAL */}
            {selectedImage && (
                <div 
                    className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
                    onClick={() => setSelectedImage(null)}
                >
                    <img 
                        src={selectedImage}
                        alt="Zoomed"
                        className='max-h-[90%] max-w-[90%] object-contain'
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </div>
    )
}

export default ImgCard;