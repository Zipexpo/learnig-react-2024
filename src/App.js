import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NewEventHolder from './components/NewEventHolder';
import ToDoList from './components/ToDoList';
import Card from './components/Card';
import { useCallback, useState } from 'react';


const defaultData = [
  {name: "Study HTML/CSS/JS", done: true, endDate: '9/30/2024'},
  {name: "Study React", endDate: '10/16/2024'},
  {name: "Final project", endDate: '30/11/2024'},
]

function App() {
  const [data,setData] = useState(defaultData);
  const onAddEvent = useCallback((newEvent)=>{
    setData([...data,newEvent])
  },[data])
  return (
    <div className="App">
      <Card className='container' title={<Header/>}>
        <NewEventHolder onAddEvent={onAddEvent}/>
        <ToDoList data={data}/>
      </Card>
    </div>
  );
}

export default App;
