import React from "react";
import Img1 from './images/img1.png'
import pray from './images/pray.png'

const Head = () => {
    return (
        <div>
            <img src={Img1} alt="logo" className="sm:block w-screen h-screen object-cover"/>
            <h1 className="font-serif lg:text-5xl sm:text-3xl md:text-4xl font-bold text-purple-700 leading-16 tracking-normal text-center">22121 Kundiye Shri Ramyagya Evam Shri Ram Katha</h1>
            <h2 className="font-inter lg:text-4xl sm:text-2xl md:text-3xl font-semibold leading-12 tracking-normal text-center">
                <img src={pray} className="inline-block w-10 h-10 mx-4" alt="Image"/>
                Ayodhyda Dham special
                <img src={pray} className="inline-block w-10 h-10 mx-4" alt="Image"/>
            </h2>
            <div className="flex items-center">
                <hr className="flex-grow border-black"/>
                <div className="text-center text-black">10,000 puja’s conducted</div>
                <hr className="flex-grow border-black"/>
            </div>
        </div>
    );
};

export default Head;
