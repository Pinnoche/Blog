import BlogList from '../components/BlogList';
import useFetch from '../components/useFetch';
import { useEffect } from 'react';
import { useBlogsContext } from '../hooks/useBlogsContext';
// import { useUserContext } from '../hooks/useUserContext';

const Home = () => {   
    const { dispatch } = useBlogsContext();
  
    
    const { blogs, isPending, error} = useFetch('/api/blogs');

    useEffect( () => {
        if(!blogs){
            dispatch({type: 'SET_BLOGS', payload: []})
        }

    }, [blogs, dispatch])
   
    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}   
            {(!isPending && blogs) && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* {(isPending && blogs) && <div>No Blogs Yet</div>} */}
            {error && <div>could not fetch data requested</div>}
        </div>
     );
}
 
export default Home;