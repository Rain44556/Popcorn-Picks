import React from 'react';
import { IoIosSend } from "react-icons/io";

const Contact = () => {
    return (
        <div class="bg-gray-900 text-gray-300 py-16 font-paraFont">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-yellow-400 text-center mb-8 font-titleFont">
            Get in Touch with Us
          </h2>
          <p class="text-center text-gray-400 mb-8">
            Have questions, feedback, or just want to say hi? We'd love to hear from you!
          </p>
          <div class="max-w-4xl mx-auto">
            <form id="contactForm" class="space-y-6">
             
              <div>
                <label for="name" class="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  class="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
           
              <div>
                <label for="email" class="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  class="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
          
              <div>
                <label for="message" class="block text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  class="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
    
              <div>
                <button
                  type="submit"
                  class="w-full py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500"
                >
                    {/* <IoIosSend className='mx-auto' size={23}/> */}
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;