import React from "react";
import couplepuja from './images/couplepuja.png';
import singlepuja from './images/singlepuja.png';
import smallfamilypuja from './images/smallfamilypuja.png';
import bigfamilypuja from './images/bigfamilypuja.png';
const Packages = () => {
    return (
        <div>
            <h2 className="font-inter text-4xl font-bold leading-12 text-center text-purple-900">Packages</h2>
            <ul className='shadow-md grid lg:grid-cols-2 gap-2 sm:grid-cols-1 sm:my-4 md:grid-cols-2'>
              <li>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md flex flex-col border border-purple-900">
                  <img className="h-48 w-full object-cover" src={couplepuja} alt="Puja Image" />
                  <div className="p-2 flex-grow flex flex-col md:flex-row ">
                    <div className="flex-grow md:w-1/2 text-left">
                      <div className="uppercase tracking-wide text-sm text-black font-bold ">Couple puja</div>
                      <p className="mt-2 text-black text-sm ">Get the blessings for your Family</p>
                    </div>
                    <div className="flex md:w-1/2 md:justify-end items-center mt-4 md:mt-0 flex-col">
                      <div className="text-sm text-black">price- <span className='text-purple-900'>Rs.901</span></div>
                      <button className="px-8 py-2 bg-purple-900 text-white rounded mt-8">Book Now</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md flex flex-col border border-purple-900" >
                  <img className="h-48 w-full object-cover" src={singlepuja} alt="Puja Image" />
                  <div className="p-2 flex-grow flex flex-col md:flex-row ">
                    <div className="flex-grow md:w-1/2 text-left">
                      <div className="uppercase tracking-wide text-sm text-black font-bold ">Single puja</div>
                      <p className="mt-2 text-black text-sm ">Get the blessings for your Family</p>
                    </div>
                    <div className="flex md:w-1/2 md:justify-end items-center mt-4 md:mt-0 flex-col">
                      <div className="text-sm text-black">price- <span className='text-purple-900'>Rs.1101</span></div>
                      <button className="px-8 py-2 bg-purple-900 text-white rounded mt-8">Book Now</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md flex flex-col border border-purple-900">
                  <img className="h-48 w-full object-cover" src={smallfamilypuja} alt="Puja Image" />
                  <div className="p-2 flex-grow flex flex-col md:flex-row ">
                    <div className="flex-grow md:w-1/2 text-left">
                      <div className="uppercase tracking-wide text-sm text-black font-bold ">Small Family puja</div>
                      <p className="mt-2 text-black text-sm ">Get the blessings for your Family</p>
                    </div>
                    <div className="flex md:w-1/2 md:justify-end items-center mt-4 md:mt-0 flex-col">
                      <div className="text-sm text-black">price- <span className='text-purple-900'>Rs.1301</span></div>
                      <button className="px-8 py-2 bg-purple-900 text-white rounded mt-8">Book Now</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md flex flex-col border border-purple-900">
                  <img className="h-48 w-full object-cover" src={bigfamilypuja} alt="Puja Image" />
                  <div className="p-2 flex-grow flex flex-col md:flex-row ">
                    <div className="flex-grow md:w-1/2 text-left">
                      <div className="uppercase tracking-wide text-sm text-black font-bold ">Big Family puja</div>
                      <p className="mt-2 text-black text-sm ">Get the blessings for your Family</p>
                    </div>
                    <div className="flex md:w-1/2 md:justify-end items-center mt-4 md:mt-0 flex-col">
                      <div className="text-sm text-black">price- <span className='text-purple-900'>Rs.1501</span></div>
                      <button className="px-8 py-2 bg-purple-900 text-white rounded mt-8">Book Now</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
        </div>

    );
};

export default Packages;