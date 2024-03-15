import React from "react";
import girl from "./images/girl.png"
import boy from "./images/boy.png"
const Testimonials = () =>{
    return(
        <div className="mb-10">
            <h1 className="font-inter text-4xl font-bold leading-12 text-center text-purple-900">Testimonials</h1>
            <h2 className="text-gradt-purp font-serif text-2xl font-bold leading-12 text-center text-purple-900 mt-4">Customer Reviews</h2>
            <div className="w-custom rounded border border-purple-900 ml-64 mt-6 sm:ml-16">
                <div>
                    "Booking a puja online was a delightful experience from start to finish. 
                    The website was easy to navigate, and the booking process was simple and straightforward. 
                    The puja ceremony was conducted with great reverence, and I could feel the positive energy flowing throughout. 
                    I highly recommend Vedaz for anyone looking to book a puja online."
                </div>
                <div className=" bg-gradient-to-r from-purple-900 to-pink-600 flex justify-end pr-8">
                    <img className = "w-10 h-10 rounded-full mt-3"src={girl}/>
                    <div className="my-3">
                        <p>Isha Sharma</p>
                        <p>4.5⭐⭐⭐⭐</p>
                    </div>   
                </div>
            </div>

            <div className="w-custom rounded border border-purple-900 ml-auto mr-48 mt-4 sm:mr-32">
                <div>
                "I had a wonderful experience booking a puja online with Vedaz.
                The website was user-friendly, and the customer service team was very helpful and responsive to all my queries. 
                The pandits who conducted the puja were knowledgeable and conducted the ceremony with utmost devotion. 
                I felt a deep sense of peace and positivity after the puja. 
                </div>
                <div className=" bg-gradient-to-r from-purple-900 to-pink-600 flex justify-end pr-8">
                    <img className = "w-10 h-10 rounded-full mt-3"src={boy}/>
                    <div className="my-3">
                        <p>Divy Agrawal</p>
                        <p>4.8⭐⭐⭐⭐⭐</p>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Testimonials;