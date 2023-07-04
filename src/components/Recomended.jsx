import React, { useEffect, useState } from "react";
import downArrow from "../assets/icons/downarrow.svg";
import veg from "../assets/icons/veg.svg";
import star from "../assets/icons/star.svg";
import fridge from "../assets/icons/fridge.svg";
import { useNavigate } from "react-router-dom";
const Recomended = () => {
  const [data, setData] = useState([]);
  const URL = `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/`;
  const getRecommendedDishes = () => {
    fetch(`${URL}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.dishes);
        setData(data.dishes);
      });
  };
  useEffect(() => {
    getRecommendedDishes();
  }, []);

  const navigate = useNavigate();
  const viewIng = (id, rating, description) => {
    navigate("/ingredients", { state: { id: id, rating: rating, description: description } });
  }

  return (
    <div>
      <div className="headR">
        <div className="r-text">
          <p>Recommended</p>
          <img src={downArrow} alt="" />
        </div>
        <div className="r-menu-btn">Menu</div>
      </div>
      <div className="recommended-dishes">
        {data?.map((i, index) => {
          return (
            <div className="rdish" key={index}>
              <div>
                <div className="food-name-info">
                  <div className="food-name">{i.name}</div>
                  <img className="veg" height={"10px"} src={veg} alt="" />
                  <div className="rating">
                    {i.rating} <img height={"8px"} src={star} alt="" />
                  </div>
                </div>
                <div className="food-extra-info">
                  <div className="equip-container">
                    {i.equipments?.map((j, jndex) => {
                      return (
                        <div className="equip" key={jndex}>
                          <div className="equip-img">
                            <img height={"20px"} src={fridge} alt="" />
                          </div>
                          <div className="equip-name">{j}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="ingredients">
                    <div id="ing">Ingredients</div>
                    <div onClick={() => {
                      viewIng(i.id,i.rating,i.description)
                    }} id="vlist">View List {">"}</div>
                  </div>
                </div>
                <div className="food-desc">
                  {i.description}
                </div>
              </div>
              <div className="dish-img">
                <img src={i.image} alt="" height="120px" />
                <div className="add">Add+</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomended;
