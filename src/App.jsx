import { useState } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(1)
  const [data, setData] = useState('no  val')
  

  function testt(){
    setCount(count + 1)
  }

  function fetchFuntion() {
    fetch('https://hamedsalehian.ir/data/json.json')
      .then(response => response.json())
      .then(fetchdatadata => {
        let modified = fetchdatadata .map(item => item.title + 'iiiii');
        setData(JSON.stringify(modified) ) })


  
  }



  return (
    <>
      <h1>the value of the api is :</h1>
      <button onClick={testt}>count adder</button>
      <h1>count : {count}</h1>
      <button onClick={fetchFuntion}>api getter</button>
      <>data: {data}</>
      
    </>
  )




}
export default App
