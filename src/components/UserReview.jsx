import { FaRegStar, FaStar } from "react-icons/fa";


export default function UserReview({review}){
    return(
        <div className="border rounded-lg p-4 bg-background">
        <div className="flex justify-between items-center">
           <p className="text-sm font-semibold">{review.name}</p>
           <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) =>(
               review.rating >= i+1 ? <FaStar  key={i} className="text-yellow-400" /> : <FaRegStar  key={i} className="text-yellow-400" />
            ))}       
              <span className="text-sm font-medium">{review.rating}</span>
           </div>
        </div>
        <p className="text-muted-foreground mt-2">{review.review}</p>
     </div>

    )
}