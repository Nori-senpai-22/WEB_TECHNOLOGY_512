import { useState } from 'react';
import './App.css';             

// FruitList component: shows a list of fruits
const FruitList = () => {
  const fruits = ["Apple", "Pear", "Mango", "Apple"];

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// EmployeeList component: shows a list of employees with their positions
const EmployeeList = () => {
  const employees = [
    { id: 1, name: "Mr Paul", position: "IT Manager" },
    { id: 2, name: "Mr Calvin", position: "Web Designer" },
    { id: 3, name: "Ms Francisca", position: "Software Engineer" },
  ];

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.position}</li>
        ))};
      </ul>
    </div>
  );
};


const HobbiesList = () =>{
  const hobbies = [
    "Crotchet", "Reading"
  ]

  return (
    <div>
      <h1>My Hobby List</h1>
      <ul>
        {hobbies.map((hobby,index)=>(
          <li key = {index}>{hobby}</li>
        ))}
      </ul>
        
    </div>
  )
};

const AddFruit = () => {
  const  [ fruits,setFruits] = useState(["Apple", "Pear", "Mango", "Apple"]);
  const AddFruit = () => {
    setFruits([...fruits, `Fruit ${fruits.length + 1}`]);
  };
  return (
    <div>
      <h2>Dynamic List</h2>
      <button onClick={AddFruit}>Add Fruit</button>
      <ul>
        {fruits.map((fruit,index)=> (
          <li key= {index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
};
const RemoveFruitList = () => {
  const  [ Fruits,setFruits] = useState(["Apple", "Pear", "Mango", "Apple"]);

const removeFruit = (indexToremove) => {
  setFruits(Fruits.filter((_, index)=> index !== indexToremove)); //The underscore _ means we ignore the first argument (fruit value) because we only

};
return( 
  <div>
    <h2>Fruit List</h2>
    <ul>
      {Fruits.map((Fruit,index) => (
        <li key={index}>{Fruit}
        <button onClick={()=> removeFruit(index)}> X</button>
        </li>
      ))}
      
    </ul>
  </div>
)

}
// Main App component that shows both FruitList and EmployeeList
const App = () => {
  return (
    <div>
      <FruitList />
      <AddFruit/>
      <EmployeeList />
      <HobbiesList/>
      <RemoveFruitList/>
    </div>
  );
};

export default App;
