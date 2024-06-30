import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : {
        name : "",
        email : "",
        city : ""
    }
})

export default UserContext;