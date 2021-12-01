import React from 'react';

function TodayFoods(props) {

  const {todayFoods} = props;
  const totalCal = todayFoods.reduce((sum, elem) => {
    return sum + elem.calories * elem.quantity;
  }, 0);

  return (
    <div>
      <h1 style={{fontSize:"25px"}}>Today's Foods</h1>
      {todayFoods.map((elem, i) => {
        return (
          <div>
            <div>
              <h1>
                {elem.name} x {elem.quantity}
              </h1>
              <p>Calories: {elem.calories * elem.quantity} cal</p>
{/*                <button onClick={() => {btnDelete(food, qty)}} className="button is-info">'🗑️' </button>
 */}            </div>
            <br></br>
          </div>
        );
      })}
      <h1>Total Calories: {Math.round(totalCal)} cal</h1>
    </div>
  );
}

export default TodayFoods;
