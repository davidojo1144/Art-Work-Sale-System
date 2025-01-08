import { createContext } from "react";
import { artProducts } from "../assets/assets";

export const ArtContext = createContext()

const ArtContextProvider = (props) => {


    const artist = "259,000"
    const currency = "$"


    const value = {
        artProducts,
        artist,
        currency
    }



    return (
        <ArtContext.Provider  value={value}>
            {props.children}
        </ArtContext.Provider>
    )


}

export default ArtContextProvider