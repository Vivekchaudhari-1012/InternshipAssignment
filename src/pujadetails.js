import React from "react";

const Pujadetails = () =>{
    return(
        <div>
            <h1 className="font-inter text-4xl font-bold leading-12 text-center text-purple-900">Puja Details</h1>
            <p className="text-center text-purple-900">Frequently Asked Questions</p>
            <div>
                <ul className="mx-20 text-left" >
                    <li>
                        <p className="text-xl font-semibold py-4 px-10 flex items-center">
                            <span className="flex-grow">Is this really a LIVE puja performed at temple?</span>
                            <span className="font-bold">^</span>
                        </p>
                        <p className="flex justify-center space-x-2 items-start pb-4 px-10">YES, it is. We have our infrastructure deployed in select temples and we plan to add more in the future.
                            When you buy a ticket, Temple will be sent your details and Pujari will perform in santum santorium with your Gotranama ( Names & Gotra)
                        </p>
                        <hr className="flex-grow border-gray-600"/>
                    </li>
                    <li>
                        <p className="text-xl font-semibold py-4 px-10 flex items-center">
                            <span className="flex-grow">Can I perform puja in temple of my choice?</span>
                            <span className="font-bold">^</span>
                        </p>
                        <p className="flex justify-center space-x-2 items-start pb-4 px-10">Not Possible. We are partnered with Select Temples (popular enough)with which we have agreement and we only provide Puja Services of those temples.
                            All Pujas offered Starts with your Gotranama, Sankalp(Reason) and ends with Aarti as applicable
                        </p>
                        <hr className="flex-grow  border-gray-600"/>
                    </li>
                    <li>
                    <p className="text-xl font-semibold py-4 px-10 flex items-center">
                        <span className="flex-grow">What if I am not able to watch LIVE puja?</span>
                        <span className="font-bold">^</span>
                    </p>
                        <p className="flex justify-center space-x-2 items-start pb-4 px-10">For all Puja Services that are offered, we cut and Upload a recorded version of Puja (Sankalp video for Long Pujas like Abhishek/Kalyan or Full Puja like Archana) to our Youtube Channel after 5 hours of Offering. 
                            (Any Power and Internet failure may delay sometimes but rarely)
                        </p> 
                        <hr className="flex-grow  border-gray-600"/>
                    </li>
                    <li>
                        <p className="text-xl font-semibold py-4 px-10 flex items-center">
                            <span className="flex-grow">Can I offer any Dakshina to priest?</span>
                            <span className="font-bold">^</span></p>
                        <p className="flex justify-center space-x-2 items-start pb-4 px-10">Yes you can. There is a column in the booking form where you can enter a amount of choice and we will pay the amount to Pujari directly. 
                            You can also request for a separate payment link if availing any Puja Package
                        </p>
                        <hr className="flex-grow  border-gray-600"/>
                    </li>
                    <li>
                        <p className="text-xl font-semibold py-4 px-10 flex items-center">
                            <span className="flex-grow">How to contact you if I don’t find answer to my question?</span>
                            <span className="font-bold">^</span></p>
                        <p className="pb-4 px-10">If you have any specific question which ONLY relates to Puja Services we Offer, you can send a WhatsApp message to our Official Number
                        </p>
                    </li>
                    <hr className="flex-grow  border-gray-600"/>
                </ul>
            </div>
        </div>
    );
};
export default Pujadetails;