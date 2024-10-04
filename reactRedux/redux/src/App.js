import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import { actions } from './store';
function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increment = ()=>{
   
    dispatch(actions.increment())
  }
  const decrement = ()=>{
    dispatch(actions.decrement())
  }
  const ADDBy = () =>{
    dispatch(actions.ADDBy(10))
  }
  return (
    <div >
     <h1>Counter</h1>
    {counter}<br/>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={ADDBy}>ADD by 10</button>
    </div>
  );
}

export default App;
