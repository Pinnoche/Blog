import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPendng] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() =>{
        setTimeout(() =>{
            fetch(url)
                .then(res => { 
                    if(!res.ok){
                        throw Error('could not fetch data requested');
                    }
                return  res.json();
                })
                .then(data =>{
                    setData(data);
                    setIsPendng(false);
                    setError(false);
                })
                .catch(err =>{
                    setIsPendng(false);
                    setError(err.message);
        
                });
            }, 500);
        },[url]);
        return {data, isPending, error}
}

export default useFetch;