import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantData } from "../../assets/dummydata";
import RestaurantCard from "../../components/RestaurantCard";

export default function Restaurants() {

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setRestaurants(restaurantData);
      setLoading(false);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    
  return (
<div className="flex flex-col min-h-screen bg-slate-100 flex-1 py-12 md:py-16">
      <div className="container mx-auto grid gap-8 px-4 md:px-6">
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
</div>
  )
}
