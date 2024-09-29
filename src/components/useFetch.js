import {useState, useEffect} from 'react';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useUserContext } from '../hooks/useUserContext';

const useFetch = (url) => {
    const { user } = useUserContext()
    const { blogs, dispatch } = useBlogsContext()
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() =>{
        setTimeout(() =>{
            const fetchBlogs = async (url) => {
                
                try {
                    const res = await fetch('http://localhost:8000'+ url, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    })
                    const json = await res.json()
                    if(res.ok){
                        setIsPending(false);
                        setError(false);
                        dispatch({type: 'SET_BLOGS', payload: json })
                    }
                } catch (error) {
                    setError(true)
                    setIsPending(false);
                }
            }
            if(url && user){
                fetchBlogs(url)
            }
            }, 500);
        },[user, url, dispatch])
        
        return {blogs, isPending, error}
}

export default useFetch;