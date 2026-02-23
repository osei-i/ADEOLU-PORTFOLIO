import React from 'react'
import bgImage from './assets/IMG_8449.PNG';
import myImage from './assets/424fccdc10a257f8930eedb9f1f74980_0_1757756133_5243.png';
import portFolio from './assets/porfolio bg.png';
import aboutImage from './assets/me.png'
import ImgCard from './components/ImgCard';


const Icon = () => <i className="fa-solid fa-phone"></i>
const EmailIcon = () => <i className="fa-solid fa-envelope "></i>

function App() {
  return (
    
    <div className=" text-black bg-cover bg-no-repeat bg-white">
      {/* {Hero SECTION} */}
      <div className="min-h-[50vh] md:min-h-[40vh] lg:min-h-screen overflow-hidden">
  <div
    className="mx-4 md:mx-8 my-6 md:my-8 shadow-2xl bg-cover bg-center relative"
    style={{ backgroundImage: `url(${bgImage})` }}
  >

    {/* NAV */}
    <nav className="absolute top-6 left-4 md:left-8 flex justify-between items-start w-[92%] md:w-[90%]">

      <div className="relative inline-block mt-10 md:mt-16 lg:mt-19">

        <img
          src={myImage}
          alt="My Image"
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain absolute -top-6 md:-top-12 left-1/2 -translate-x-1/2 z-20"
        />

        <h1
          className="text-xl sm:text-3xl md:text-4xl tracking-tight font-black font-dmSerifDisplay leading-none relative z-10"
          style={{ letterSpacing: "0.25em" }}
        >
          GRAPHIC
        </h1>

        <h2
          className="font-meowScript font-black text-lg sm:text-2xl md:text-3xl leading-none pl-4"
          style={{ letterSpacing: "0.20em" }}
        >
          Design
        </h2>

      </div>

      <div className="mt-4">
        <span
          className="font-meowScript text-3xl sm:text-6xl md:text-7xl font-black block"
          style={{ color: "#24636c" }}
        >
          2025/26
        </span>
      </div>

    </nav>

    {/* HERO CONTENT */}
    <div className="flex flex-col md:flex-row items-center justify-between pt-32 md:pt-40 px-4 md:px-0">

      <img
        src={portFolio}
        alt="Portfolio"
        className="w-full md:w-150 lg:w-200 h-auto bg-transparent md:-ml-10"
      />

      <div className="mb-10 mt-10  md:mr-10 lg:mt-70">
        <button
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
          className="
            font-spaceGrotesk
            text-sm
            uppercase
            tracking-wider
            bg-black
            text-white
            px-8
            py-2
            rounded-full
            border-b-4
            border-b-[#24636c]
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            hover:shadow-[0_25px_60px_rgba(36,99,108,0.7)]
            hover:bg-neutral-800
            transition-all
            duration-300
            cursor-pointer
          
          "
        >
          Contact Now
        </button>
      </div>

    </div>

  </div>
</div>


      <div className="min-h-[80vh] md:min-h-[50vh] lg:min-h-screen overflow-hidden">
  <div
    className="mx-4 md:mx-3 lg:-ml-35 md my-6 md:my-8 shadow-2xl bg-cover bg-center flex flex-col md:flex-row"
    style={{ backgroundImage: `url(${bgImage})` }}>

    {/* IMAGE SIDE */}
    <div className="w-full md:w-200 h-[50vh] md:h-[70vh] lg:h-screen overflow-hidden md:right-200 object-left">
      <img
        src={aboutImage}
        alt="About Me"
        className="h-full w-full object-cover"
      />
    </div>

    {/* TEXT SIDE */}
    <div className="w-full md:w-250 px-6 md:px-10 lg:px-16 py-10 md:py-16">

      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-spaceGrotesk font-bold"
        style={{ color: "#24636c" }}
      >
        PETER
      </h1>

      <h2
        className="text-xl md:text-2xl lg:text-3xl font-lora font-bold"
        style={{ letterSpacing: "0.20em" }}
      >
        ORESANYA
      </h2>

      <p className="mt-4 md:mt-8 font-lora text-sm md:text-base leading-relaxed font-semibold lg:pr-20">
        I’m a Graphic Designer with over 5 years of experience, skilled in
        Photoshop and Canva. Over the years, I’ve challenged myself to grow 
        with each project, ensuring that every design I create is more refined 
        than the last. <br /><br />
        Currently, I work with a creative agency, where I design for a 
        variety of companies across different industries. <br /><br />
        For me, design isn’t just about visuals, it’s about creating work that 
        connects and leaves a lasting impression.
      </p>

      {/* SKILLS */}
      <div className="mt-2 font-lora">
        <h4
          className="text-lg md:text-xl font-bold"
          style={{ color: "#24636c" }}
        >
          SKILLS
        </h4>

        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-3 list-disc list-inside text-sm font-semibold">
          <li>Critical Thinking</li>
          <li>Organized</li>
          <li>Time Management & Collaboration</li>
          <li>Team Work</li>
          <li>Communication</li>
          <li>Meeting Deadlines</li>
        </ul>
      </div>

      {/* EDUCATION */}
      <div className="mt-3">
        <h3
          className="font-lora text-xl md:text-2xl font-bold"
          style={{ color: "#24636c" }}
        >
          Education
        </h3>

        <h5 className="font-semibold mt-2">
          Obafemi Awolowo University
        </h5>

        <h6 className="text-sm font-semibold">
          2021 – Present
        </h6>

        <p className="mt-3 font-lora text-sm md:text-base">
          Bachelors of Law
        </p>
      </div>

    </div>
  </div>
</div>


      <div className="min-h-[70vh] md:min-h-[85vh] lg:min-h-screen overflow-hidden">
  <div
    className="mx-4 md:mx-8 my-6 md:my-8 shadow-2xl bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <ImgCard />
  </div>
</div>


        <div id='contact' className='min-h-[70vh] md:min-h-[30vh] lg:min-h-screen'>
        <div className='flex flex-col-reverse md:flex-row items-center md:items-start mx-4 my-4 shadow-2xl bg-cover bg-center'
       style={{ backgroundImage: `url(${bgImage})` }}>
       
    {/* Text section */}
    <div className='flex flex-col items-center  md:items-start text-center md:text-left mt-8 md:mt-12 md:ml-12 lg:mt-40 '>
      <h1 className='font-oswald font-bold text-5xl md:text-7xl lg:text-9xl tracking-widest'
          style={{ color: '#24636c' }}>
        LET’S 
        <span 
        className='text-7xl md:text-7xl lg:text-9xl 
        font-meowScript ml-2 md:ml-4 tracking-widest text-black'>
          work</span>
      </h1>
      <h1 className='font-oswald font-bold text-4xl md:text-6xl lg:text-8xl tracking-widest'
          style={{ color: '#24636c' }}>
        TOGETHER
      </h1>
      <p className='mt-4 md:mt-6 flex items-center gap-2 text-lg md:text-xl lg:mt-15'>
        <Icon /> +234 705 991 8355
      </p>
      <p className='flex mb-2 items-center gap-2 text-lg md:text-xl'>
        <EmailIcon /> pietroelchapo@gmail.com
      </p>
    </div>

    {/* Image section */}
    <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:ml-12">
  <img
    src={myImage}
    alt="myimage"
    className="object-cover object-left w-64 md:w-96 lg:w-250 h-64 md:h-96 lg:h-150 "
  />
</div>

  </div>
</div>
      </div>
      
    
  )
}

export default App