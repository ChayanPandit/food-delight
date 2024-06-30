import { CiUser } from "react-icons/ci";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { restaurantData } from "../../assets/dummydata";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";

export default function Profile () {
    const { loggedInUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ownedRestaurants, setOwnedRestaurants] = useState([])
    const getFirstName = (fullName) => {
        if (!fullName) return "";
        return fullName.split(" ")[0];
      };
    
    useEffect(()=>{
        const restaurants = restaurantData.filter(restaurant => restaurant.owner === loggedInUser?.email);
        setOwnedRestaurants(restaurants);
    },[])

    
    return (

        <div className="flex flex-col min-h-screen bg-slate-100">
        <main className="lex-1 px-4 py-8 md:px-6 md:py-12">
            <div className=" max-w-4xl mx-auto grid md:grid-cols-[1fr_2fr] gap-8">
            <div className=" bg-slate-50 bg-card rounded-lg shadow p-6 space-y-4">
                <div className="flex items-center gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full ">
                    <CiUser />
                </span>
                <div>
                    <h2 className="text-2xl font-bold">{loggedInUser?.name}</h2>
                    <p className="text-muted-foreground">{loggedInUser?.email}</p>
                </div>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                <div className="space-y-2">
                <h3 className="text-lg font-semibold">About</h3>
                <p className="text-muted-foreground">
                    {getFirstName(loggedInUser?.name)} is a passionate restaurateur with a keen eye for detail and a commitment to delivering
                    exceptional dining experiences.
                </p>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                <div className="space-y-2">
                <h3 className="text-lg font-semibold">Restaurants</h3>
                <ul className="space-y-2">
                    {ownedRestaurants.map((restaurant)=>(
                        <li className="bg-slate-100" key={restaurant.id}>
                            <Link
                                className="flex items-center justify-between bg-muted rounded-lg px-4 py-3 hover:bg-accent hover:text-accent-foreground"
                                to={`/restaurant/${restaurant.id}`}
                            >
                                <div>
                                    <h4 className="font-semibold">{restaurant.name}</h4>
                                    <p className="text-muted-foreground">Serving delicious {restaurant.cuisine} specialties</p>
                                </div>
                                <FaArrowRight />
                            </Link>
                        </li>
                        
                    ))}
                </ul>
                </div>
            </div>
            <div className="bg-slate-50 rounded-lg shadow p-6 space-y-4">
                <h2 className="text-2xl font-bold">Restaurants</h2>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                <div className="grid gap-4">
                {ownedRestaurants.map((restaurant)=>(
                    <div key={restaurant.id} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <Link to={`/restaurant/${restaurant.id}`}>
                        <div className="relative rounded-lg overflow-hidden" 
                            style={{ paddingBottom: '50%', backgroundImage: `url(${restaurant.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                                <div className="text-center text-white p-4">
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                        {restaurant.name}
                                    </h3>
                                    <p className="text-sm">
                                        Serving delicious {restaurant.cuisine} specialties
                                    </p>
                                </div>
                            </div>
                        </div></Link>
                        <div className="p-4">
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">Cuisine:</span>
                                    <span>{restaurant.cuisine}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">City:</span>
                                    <span>{restaurant.city}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">Rating:</span>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) =>(
                                            restaurant.rating >= i+1 ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar  key={i} className="text-yellow-400" />
                                        ))}
                                        {restaurant.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-start pl-4 pb-4">
                            <Link
                                to={`/restaurant/${restaurant.id}`}
                                className="inline-block rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2"
                            >
                                View Menu
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </main>
        </div>
    );
}
