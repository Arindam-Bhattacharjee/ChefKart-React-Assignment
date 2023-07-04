import React from 'react'
import Navbar from "./Navbar"
import DateTime from "./DateTime";
import Cusine from "./Cusine";
import PopularDishes from "./PopularDishes";
import Separator from "./Separator";
import Recomended from "./Recomended";

const Home = () => {
    return (
        <>
            <Navbar />
            <DateTime />
            <Cusine />
            <PopularDishes />
            <Separator />
            <Recomended />
        </>
    )
}

export default Home