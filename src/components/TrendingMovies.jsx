import React, { useRef } from "react";

const TrendingMovies = () => {
  const scrollRef = useRef(null);

  const scrollingStart = () =>{
    const scrollSection = scrollRef.current;
    if(scrollSection){
      const intervalScroll = setInterval(()=>{
        scrollSection.scrollLeft += 1;
      }, 20);
      scrollSection.dataset.intervalScroll = intervalScroll;
    }
  }

  const scrollingStop = ()=>{
    const scrollSection = scrollRef.current;
    if(scrollSection && scrollSection.dataset.intervalScroll){
      clearInterval(scrollSection.dataset.intervalScroll);
      delete scrollSection.dataset.intervalScroll;
    }
  };

  if(scrollRef.current === null){
    scrollingStart;
  }

  return (
    <div className="my-10 w-11/12 mx-auto p-10">
      <h2 className="text-4xl text-center font-bold text-white mb-4 font-titleFont">Trending Movies</h2>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        onMouseEnter={scrollingStop} 
        onMouseLeave={scrollingStart}
      >

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/n0MzKtf/themarvels-lob-mas-mob-03.jpg"
              alt="The Marvels"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">The Marvels</h3>
              <p className="text-sm text-gray-400">Cosmic power meets unstoppable teamwork—marvel like never before!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/tDx5tM6/Winter-Elemental.webp"
              alt="Elemental"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">Elemental</h3>
              <p className="text-sm text-gray-400">Opposites attract in a world where fire and water collide!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/0B5244n/p-disney-wish-2993-f80fee96.jpg"
              alt="Wish"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">Wish </h3>
              <p className="text-sm text-gray-400">When stars fall, a new magical journey begin!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/gzsrNLJ/images.jpg"
              alt="Luca"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">Luca </h3>
              <p className="text-sm text-gray-400">A sea of secrets, a summer of friendship!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/jJrMZp4/pp-turningred-herobanner-mobile-21513-af22610c.jpg"
              alt="Turning Red"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">Turning Red</h3>
              <p className="text-sm text-gray-400">Embrace the panda within and unleash the wild, colorful journey of growing up!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/PwrNXXs/MV5-BNj-Zl-Zj-U0-NTUt-NDlm-NC00-Mjkx-LWI3-Yz-It-ZGJm-Mm-U2-OWZh-Y2-Jh-Xk-Ey-Xk-Fqc-Gde-QXZ3-ZXNs-ZXk.jpg"
              alt="Minions: The Rise of Gru"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">Minions: The Rise of Gru</h3>
              <p className="text-sm text-gray-400">The untold mischief of a young villain in the making!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/w0rzPkT/flat-750x-075-f-pad-750x1000-f8f8f8.jpg"
              alt="oppenheimer"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">oppenheimer</h3>
              <p className="text-sm text-gray-400">The mind that shaped the future, and the explosion that changed history!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/88W6ryJ/eaksslfxsayjtxb.jpg"
              alt="Weathering With You"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">Weathering With You</h3>
              <p className="text-sm text-gray-400">A love story written in the rain and the clouds!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

          <div className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
            <img
              src="https://i.ibb.co.com/r0P4GpQ/MV5-BZj-M2-YTI0-Y2-Ut-Nz-I3-NS00-NDZj-LWIw-NWUt-Zjk0-MTg3-MGFk-NDNk-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
              alt="Over the Moon"
              className="w-full h-40 rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-white">Over the Moon </h3>
              <p className="text-sm text-gray-400">Reach for the stars and discover the power of dreams and love on an unforgettable lunar adventure!</p>
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full">
                Trending Now
              </span>
            </div>
          </div>

      </div>
    </div>
  );
};

export default TrendingMovies;
