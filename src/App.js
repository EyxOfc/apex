import { useRef, useState } from 'react';
import './App.css';
import WishLists from './Comps/WishLists';

function App() {

  const [Wish, setWish] = useState([
  ])
  const InputRef = useRef();

  return (
    <>
    <WishLists Wish={Wish} setWish={setWish} InputRef={InputRef}/>
    </>
  );
}

export default App;
