import React, { useEffect, useState } from "react";

const PopularDishes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllpopularDishes();
  }, []);
  const URL = `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/`;
  const getAllpopularDishes = () => {
    fetch(`${URL}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.popularDishes, "userData");
        setData(data.popularDishes);
      });
  };
  return (
    <div className="popular">
      <div className="popular-header">Popular Dishes</div>
      <div className="popular-dishes">
        {data?.map((i, index) => {
          return (
          <div className="dish" key={index}>
            <p className="pdishname">{i.name}</p>
            <img className="dishimg" src={i.image} height={'80px'} width={'80px'} alt="" />
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularDishes;
