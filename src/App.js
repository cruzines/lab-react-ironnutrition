import React from 'react';
import {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import TodayFoods from './components/TodayFoods';
import Search from './components/Search';

function App() {

  const [foodsArray, setFoods] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [foodsCopy, setFoodsCopy] = useState(foods);
  const [todayFoods, setTodayFoods] = useState([]);


  function handleToggle(){
    setShowForm(!showForm)
  };

  function handleSubmit(event) {

    event.preventDefault();

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
    };

   setFoodsCopy([newFood, ...foodsCopy]);
   setShowForm(false); //to hide the form once the item was added
  }

  function handleAdd(food, quantity) {
    let addedFood = {
      name: food.name,
      quantity: quantity,
      calories: food.calories,
    };
    setTodayFoods([addedFood, ...todayFoods]);
  }

  function handleSearch(event) {
    let word = event.target.value
    let wordLower = word.toLowerCase()
    let filteredFoods = foodsArray.filter(food => {
      
      return food.name.toLowerCase().includes(wordLower)

    })
    setFoodsCopy(filteredFoods)
  }

  
  return (
    <div className="columns">
      <div className='column'>
      <h1 style={{fontSize:"40px"}}>Iron Nutrition</h1>
      <Search btnSearch={handleSearch} />
        {showForm ? <AddForm btnSubmit={handleSubmit} /> : <button onClick={handleToggle}>Add Food</button>}
        {foodsCopy.map((elem, i) => {
          return <FoodBox food={elem} key={i} btnAdd={handleAdd} />;
        })}
      </div>
      <div className='column'>
        <TodayFoods todayFoods={todayFoods}/>
      </div>
    </div>
  );
}


export default App;
