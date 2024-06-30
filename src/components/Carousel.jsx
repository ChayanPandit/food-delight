import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Carousel({ restaurants }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === restaurants.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? restaurants.length - 1 : prev - 1));
    };

    return (
        <div id="default-carousel" className="relative w-full bg-gray-200" data-carousel="slide">
            <div className="relative h-96 overflow-hidden rounded-lg">
                {restaurants.map((restaurant, index) => (
                    <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                        <div className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-700 ease-in-out ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`} data-carousel-item>
                            <div className="h-full w-full bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${restaurant.image})` }} />
                            <div className="absolute inset-0 flex flex-col items-start justify-start text-start p-4 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-lg">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="grid grid-cols-2 gap-4">
                                        {restaurant.reviews.map((review) => (
                                            <div key={review.id} className="p-4 bg-white bg-opacity-20 rounded-lg">
                                                <h3 className="text-xl font-semibold text-white mb-2">{review.review}</h3>
                                                <div className="flex items-center gap-1 text-yellow-500">
                                                    {[...Array(5)].map((_, i) => (
                                                        review.rating >= i + 1 ? <FaStar key={i} className="text-yellow-400 text-lg" /> : <FaRegStar key={i} className="text-yellow-400 text-lg" />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40">
                                        <h3 className="text-xl font-semibold text-white">{restaurant.name}</h3>
                                        <p className="text-sm text-white">Serving delicious {restaurant.cuisine} specialties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {restaurants.map((_, index) => (
                    <button key={index} type="button" onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`} aria-current={index === currentSlide} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index}></button>
                ))}
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <IoIosArrowBack />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <IoIosArrowForward />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
