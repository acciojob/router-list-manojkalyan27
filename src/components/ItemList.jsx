import { useParams } from 'react-router-dom';

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

export default ItemList;
