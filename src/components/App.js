
import React from "react";
import './../styles/App.css';
import Homepage from './components/ritem.jsx';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ItemList from './components/ItemList.jsx'

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

export default App
