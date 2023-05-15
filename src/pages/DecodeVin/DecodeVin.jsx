import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './decodevin.module.css'




const DecodeVin = () => {
    const [render, setRender] = useState('')
    // const [searchParams, setSearchParams] = useSearchParams();


    const location = useLocation();
    const vinLists = location.state?.vinLists;
    // const storedResult = localStorage.getItem('recentResult');
    // return storedResult ? JSON.parse(storedResult) : [];
    // setSearchParams({ filter: JSON.parse(storedResult) })

    useEffect(() => {
        setRender(vinLists)
    }, [vinLists])
    return (
        <div>
            <h1>VIN data</h1>
            <Link to={'/'}>Back</Link>
            <ul>
                {render && render.map(list => (
                    <li key={list.VariableId} className={styles.decode__list}>
                        <Link to={`${list.VariableId}`} state={{ from: location }} >
                            {list.Variable}: {list.Value ? list.Value : 'no information'}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DecodeVin;






