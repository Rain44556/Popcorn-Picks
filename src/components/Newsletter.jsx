import React from 'react';

const Newsletter = () => {
    return (
        <div class=" w-11/12 mx-auto">
        <div class="py-10 text-center px-10">
          <h2 class="text-4xl font-bold font-titleFont text-white mb-5">Subscribe to Our Newsletter</h2>
          <p class="text-gray-300 mb-8">
            Stay updated with the latest movie news, reviews, and recommendations. Join our community now!
          </p>
          <form class="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full sm:w-auto flex-grow p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              class="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      
    );
};

export default Newsletter;