import { Link  } from "react-router-dom";

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

export default Homepage;
