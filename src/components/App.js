
import React from "react";
// import './../styles/App.css';
// import Homepage from '././components/ritem.jsx';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
// import ItemList from '././components/ItemList.jsx';
import { useParams } from 'react-router-dom';


const App = () => {
  return (
    <div>
       <Router>
                <Routes>
                    <Route path='/' element={<Homepage />}/>
                    <Route path='/items/:num' element={<ItemList />}/>
                </Routes>
            </Router>
    </div>
  )
}

const Homepage = () => {
    return(
        <>
                <h3>Item List</h3>
                <ul>
                    <li><Link to='/items/1'>Item 1</Link></li>
                    <li><Link to='/items/2'>Item 2</Link></li>
                    <li><Link to='/items/3'>Item 3</Link></li>
                </ul>
        </>
    )
}

const ItemList = () => {
    const {num} = useParams();
    
    return(
        <>
            <div >
                <h1>Item {num}</h1>
                <p>Description for Item {num}</p>
            </div>

        </>
    )
}

export default App
