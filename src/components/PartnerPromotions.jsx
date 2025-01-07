import React from "react";

const PartnerPromotions = () => {

  return (
    <div className="my-10 w-11/12 mx-auto p-10">
      <h2 className="text-4xl text-center font-bold text-white mb-6 font-titleFont">Partner Promotions</h2>
      <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <img
                src='https://i.ibb.co.com/17rW3gM/2148670006.jpg'
                alt="Exclusive Movie Ticket Discounts"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-white">Exclusive Movie Ticket Discounts</h3>
            </div>
            <p className="text-sm text-gray-400 mt-2">Get 20% off on all weekend movie tickets with PartnerX</p>
            <div className="mt-4">
              <span className="bg-green-700 text-green-200 px-3 py-1 rounded-full text-xs">
                Code: MOVIE20
              </span>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <img
                src='https://i.ibb.co.com/ZYZM2nP/133636.jpg'
                alt="Exclusive Movie Ticket Discounts"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-white">Streaming Subscription Offer</h3>
            </div>
            <p className="text-sm text-gray-400 mt-2">Enjoy 1 month free on StreamFlix when you sign up today</p>
            <div className="mt-4">
              <span className="bg-green-700 text-green-200 px-3 py-1 rounded-full text-xs">
                Code: STREAMFREE
              </span>
            </div>
          </div>


          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <img
                src='https://i.ibb.co.com/Dkgrj87/rb-154138.png'
                alt="Exclusive Movie Ticket Discounts"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-white">Popcorn Combo Deal</h3>
            </div>
            <p className="text-sm text-gray-400 mt-2">Buy 1 get 1 free popcorn combo at CineMax</p>
            <div className="mt-4">
              <span className="bg-green-700 text-green-200 px-3 py-1 rounded-full text-xs">
                Code: POPCORN
              </span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PartnerPromotions;
