import { Link } from "react-router-dom";


const FeaturedMoviesCards = ({feature}) => {
        const {_id, poster, title, genre, duration, year, rating } = feature;
        console.log(poster);
    // const genres = genre.join(' ');
    return (
          
           <>
           
           <div className="justify-center gap-6">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs">
                        <img
                            src={poster}
                            alt={title}
                            className="w-full h-48 object-cover rounded-3xl"
                        />
                        <h3 className="text-lg font-bold my-3">{title}</h3>
                        <p className="text-sm text-gray-400">
                            {
                            genre.map((gen, index)=> (
                                <span 
                                key={index}
                                className='border border-gray-600 px-2 mr-1 rounded-md text-white'>
                                {gen + ' '}
                                </span>
    ))
}                        
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            {duration} min | {year}
                        </p>
                        <p className="text-yellow-400 font-bold mt-2 ">⭐{rating}</p>
                        <Link to={`/movieDetails/${_id}`}>Details</Link>
                    </div>
            </div>
           </>
     
    );
};

export default FeaturedMoviesCards;