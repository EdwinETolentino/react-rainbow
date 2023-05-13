import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'
import {useState} from 'react'

function App() {
  const [colors, setColors]= useState(["red", "green", "blue"])
  const addColor= newColor => setColors([...colors, newColor])
  const colorsmap= colors.map(
    (color, index) => <ColorBlock key={index} color={color}/>
  )
  return (
    <div className="App">
     {colorsmap}
     <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;
