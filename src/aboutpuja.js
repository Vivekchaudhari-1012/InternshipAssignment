import React from "react";
import prayring from './images/prayring.png'
import lamp from './images/lamp.png'

const Aboutpuja = () =>{
    return(
    <div>
        <div className="flex flex-col md:flex-row-reverse justify-around">
            <div id='booknow' className=" top-1306 left-957 w-412 h-331 bg-purple-300 rounded-lg mt-6 lg:mt-0">
              <h1 className="text-purple-800 lg:text-left mr-2 ml-2 mb-4 text-2xl font-bold">Book Now</h1>
              <div>
                <label className="block text-gray-700 mb-2 lg:text-left ml-2 font-bold">Birth Details</label>
                <div className="flex justify-left">
                  <input className="border border-black text-black px-2 py-1 lg:text-left rounded w-14 mr-1 ml-1 placeholder-black" placeholder='DD'/>
                  <input className="border border-black text-black px-2 py-1 lg:text-left rounded w-14 mr-1 ml-1 placeholder-black" placeholder='MM'/>
                  <input className="border border-black text-black px-2 py-1 lg:text-left rounded w-14 mr-1 ml-1 placeholder-black" placeholder='YYYY'/>
                </div>
              </div>
              <label className="block text-gray-700 lg:text-left ml-2 mt-4 font-bold" >Venue</label>
              <input type='address' placeholder='Enter your venue' className="block border border-purple-300 px-2 py-1 text-left text-gray-700 bg-purple-300 rounded appearance-none placeholder-gray-700"/>
              <hr className="flex-grow border-black ml-2 w-60"/>

              <img src={prayring} className="inline-block w-10 h-10 mx-4" alt="Image"/>
              <img src={prayring} className="inline-block w-20 h-20 mx-4" alt="Image"/>
              <img src={prayring} className="inline-block w-10 h-10 mx-4" alt="Image"/>
            </div>
            <div id='aboutpuja'className="lg:w-1/2 lg:mr-4">
              <h1 className="font-inter text-2xl font-bold leading-10 tracking-normal text-left text-purple-900 border-l-4 border-yellow-400 mr-4 ml-6 px-4">About Puja</h1>
              <ul className='list-none text-left'>
                <li className="flex justify-center space-x-2 items-start"><img src={lamp} className="inline-block w-5 h-5 mx-4 mt-1" alt="Image"/>
                  The festive season of India is earmarked by the worshipping and celebration of Goddess Durga.
                  It generally occurs in the month of September-October.
                </li>
                <li className="flex justify-center space-x-2 items-start"><img src={lamp} className="inline-block w-5 h-5 mx-4 mt-1" alt="Image"/>
                  The entire nation becomes more colourful and celebrates the fact of good’s win over evil. 
                  Goddess Durga is considered to be the physical form of ‘Shakti’ or ‘Universal Energy’.
                </li>
                <li className="flex justify-center space-x-2 items-start"><img src={lamp} className="inline-block w-5 h-5 mx-4 mt-1" alt="Image"/>
                  Online puja, also known as e-puja or virtual puja, is a modern approach to performing traditional Hindu rituals through digital platforms. 
                  It allows individuals to participate in religious ceremonies and seek blessings from the comfort of their homes, regardless of geographical location.
                </li>
                <li className="flex justify-center space-x-2 items-start"><img src={lamp} className="inline-block w-5 h-5 mx-4 mt-1" alt="Image"/>
                  Online puja services offer convenience and accessibility, especially for those who may not have access to local temples or priests.
                  However, it's important to choose a reputable service provider to ensure the authenticity and sanctity of the rituals.
                </li>
              </ul>
            </div>
        </div>
    </div>

    );
};

export default Aboutpuja;