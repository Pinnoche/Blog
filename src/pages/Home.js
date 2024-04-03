// import {useEffect, useState} from 'react';
import BlogList from '../components/BlogList';
import useFetch from '../components/useFetch';

const Home = () => {
    
   const {data: blogs, isPending, error} = useFetch('/api/blogs');
   


    return ( 
        <div className="home">
            {error && <div>could not fetch data requested</div>}
            {isPending && <div>Loading...</div>}   
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            
            
        </div>
     );
}
 
export default Home;