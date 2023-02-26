import {useCallback, useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = useCallback(() => {
        setCount((prevState) => prevState + 1);
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increment}>Increment</button>
        </div>
    );
}