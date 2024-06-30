import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantData } from "../../assets/dummydata";
import RestaurantCard from "../../components/RestaurantCard";
import UserContext from "../../utils/UserContext";
import Carousel from "../../components/Carousel";

export default function Restaurants() {
    
    const { loggedInUser } = useContext(UserContext);

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const restaurantsInUserCity = restaurants.filter(restaurant => restaurant?.city == loggedInUser?.city);

    useEffect(() => {
      const sortedRestaurants = restaurantData.sort((a, b) => b.rating - a.rating);
      setRestaurants(sortedRestaurants);
      setLoading(false);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    
  return (
<div className="flex flex-col min-h-screen bg-slate-50 flex-1 py-2 md:py-16">
      <div className="container py-8 mx-auto grid gap-8 px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Restaraunts Near You</h1>
          <p className="mt-2 text-muted-foreground md:text-lg">
            Up for a quick bite? Its in your city!
          </p>
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {restaurantsInUserCity.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
      </div>
      <div className="container bg-slate-200 py-8 mx-auto grid gap-8 px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Discover the Best Restaurants in Town</h1>
          <p className="mt-2 text-muted-foreground md:text-lg">
            Explore a wide variety of cuisines and find your new favorite spot.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
      </div>
      <div className="container py-8 mx-auto grid gap-8 px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h1>
          <p className="mt-2 text-muted-foreground md:text-lg">
          Check out the latest reviews from our satisfied customers.
          </p>
        </div>
        <div className="">
          <Carousel restaurants={restaurants}/>
        </div>
      </div>
</div>
  )
}
