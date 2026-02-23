import React, { useState} from 'react';

const images = [
    "/src/assets/FEBRUARY Calsan.png",
    "/src/assets/Artboard 1.png",
    "/src/assets/Black Grunge Book Cover Mockup Instagram Post.png",
    "/src/assets/Untitled (736 x 1195 px).png",
    "/src/assets/FAKEPASTRIES.png",
    "/src/assets/SUMWAT CREATIVE ELCHAPOS.png",
    "/src/assets/ADR Executive CounciL 1ADRRRRRRRRRRRRRRR.png",
    "/src/assets/Legal Tag.jpg",
    "/src/assets/Maaagaaa.jpeg.png",
    "/src/assets/Calsan Executives.png"
];

const ImgCard = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className='relative
grid grid-cols-1
md:flex md:flex-wrap md:justify-center md:gap-4
lg:grid lg:grid-cols-5
auto-rows-[250px] py-0 md:py-8 gap-2 pl-2 sm:pl-4 pr-2'>

                <div className="relative w-70 lg:w-70 sm:w-full lg:h-54 md:w-[45%] md:h-64">
                    <img 
                        src={images[0]} 
                        className="w-full h-full shadow-md cursor-pointer hover:opacity-80 transition-opacity" 
                        onClick={() => setSelectedImage(images[0])}/>
                </div>

                <div className='relative w-70 lg:w-75  md:w-[45%] md:h-64 sm:w-full lg:left-7 sm:left-0 lg:h-52 z-1 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img 
                        src={images[1]} 
                        className="w-full h-full shadow-2xl" 
                        onClick={() => setSelectedImage(images[1])}/>
                </div>

                <div className='relative w-70  md:w-[45%] md:h-64 lg:w-60 sm:w-full lg:ml-17 sm:left-0 mt-0.5 sm:mt-2 lg:h-52 z-3 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img 
                        src={images[2]} 
                        className='w-full h-full'
                        onClick={() => setSelectedImage(images[2])} />
                </div>

                <div className='relative w-70 lg:w-45 sm:w-full  md:w-[45%] md:h-64 lg:h-57 lg-mt-4 sm:mt-0 z-25 lg:left-17 sm:left-0 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[3]} 
                        className='w-full h-full shadow-md'
                        onClick={() => setSelectedImage(images[3])} />
                </div>

                <div className='relative w-70 lg:w-57 sm:w-full z-21 lg-mt-4 sm:mt-0 lg:h-64  md:w-[45%] md:h-64 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[4]} className='w-full h-full' 
                        onClick={() => setSelectedImage(images[4])}/>
                </div>

                <div className='w-70 lg:w-60 sm:w-full  md:w-[45%] md:h-64 lg:h-76 lg:-mt-10 sm:mt-0 relative z-3 shadow-md cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[5]}  className='w-full h-full'
                        onClick={() => setSelectedImage(images[5])}/>
                </div>

                <div className='w-70 lg:w-60 sm:w-full  md:w-[45%] md:h-64 lg:h-77 lg:-mt-11 sm:mt-0 lg:right-4 sm:right-0 relative z-10 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[6]} className='w-full h-full'
                        onClick={() => setSelectedImage(images[6])}/>
                </div>

                <div className='relative w-70 lg:w-84 sm:w-full lg:-mt-11 sm:mt-0  md:w-[45%] md:h-64 lg:right-5 sm:right-0 lg:h-75.5 z-13 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[7]} className='w-full h-full'
                        onClick={() => setSelectedImage(images[7])}/>
                </div>

                <div className='w-70 relative sm:w-full lg:-mt-11 sm:mt-0 lg:left-5.5  lg:h-79 lg:w-59 md:w-[45%] md:h-64 z-20 shadow-2xl cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[8]} className='w-full h-full'
                        onClick={() => setSelectedImage(images[8])} />
                </div>

                <div className='relative w-70 lg:w-59 sm:w-full lg:h-70 lg:-mt-3 sm:mt-0 lg:right-2  md:w-[45%] md:h-64  z-25 shadow-2 cursor-pointer hover:opacity-80 transition-opacity'>
                    <img src={images[9]} className='h-full w-full'
                        onClick={() => setSelectedImage(images[9])} />
                </div>

            </div>

            {selectedImage && (
                <div 
                    className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
                    onClick={() => setSelectedImage(null)}
                >
                    <img 
                        src={selectedImage}
                        className='max-h-[90%] max-w-[90%] object-contain'
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </div>
    )
}

export default ImgCard;