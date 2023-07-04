import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import clock from "../assets/icons/clock.svg"
import star from "../assets/icons/star.svg"
import back from "../assets/icons/back.svg"
import heroImg from "../assets/images/bati-buti.png"
import fridge from "../assets/images/fridge.png"
import down from "../assets/icons/downarrow.svg"

const IngPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const URL = `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${location.state.id}`;
    const getDishIngredients = () => {
        fetch(`${URL}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    };
    useEffect(() => {
        getDishIngredients();
    }, [])
    const goback = ()=>{
        navigate("/")
    }
    return (
        <>
            <div onClick={goback} className="back2">
                <img className='backimg' height="11px" width="6px" src={back} alt="" />
            </div>

            <div className="hero">
                <div className="left">
                    <div className="dish-head">
                        <div className='dish-head-name'>{data?.name || "loading..."}</div>
                        <div className="rating" id='edits'>
                            <div>{location.state.rating}</div>  <div><img height={"8px"} src={star} alt="" /></div>
                        </div>
                    </div>
                    <div className="dish-desc">
                        {location.state.description}
                    </div>
                    <div className="time-to-prep">
                        <img src={clock} alt="" /> {data?.timeToPrepare || "loading..."}
                    </div>
                </div>
                <div className="right">
                    <img src={heroImg} height="215px" alt="" />
                </div>
            </div>
            <div className="head-ing" >
                <p className='main'>Ingredients</p>
                <p className="sub">
                    For 2 people
                </p>
            </div>

            <div className="ing-list">
                <div className="vegies">
                    <div className="ing-head">
                        Vegetables {`(0${data?.ingredients.vegetables.length || 0})`} <img src={down} alt="" />
                    </div>
                    <div className="list">
                        {data?.ingredients.vegetables.map((i, index) => {
                            return (
                                <div className='list-item' key={index}>
                                    <div className="name">
                                        {i.name}
                                    </div>
                                    <div className="qty">
                                        {`${i.quantity}`}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div className="spices">
                    <div className="ing-head">
                        Spices {`(0${data?.ingredients.spices.length || 0})`} <img src={down} alt="" />
                    </div>
                    <div className="list">
                        {data?.ingredients.spices.map((i, index) => {
                            return (
                                <div className='list-item'>
                                    <div className="name">
                                        {i.name}
                                    </div>
                                    <div className="qty">
                                        {i.quantity}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="head-ing" >
                <p className='main'>Appliances</p>
                <div className='appliances'>{data?.ingredients.appliances.map((i, index) => {
                    return (
                        <div className='appl'>
                            <img src={fridge} alt="" />
                            <div className="name">
                                {i.name}
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>





        </>
    )
}

export default IngPage