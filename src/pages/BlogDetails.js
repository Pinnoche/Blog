import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../components/useFetch";

const BlogDetails = () => {
const { id } = useParams();
const {data: blog, error, isPending} =useFetch(`/api/blogs/${id}`);
const navigate = useNavigate();
const handleDelete = () =>{
    fetch(`/api/blogs/${blog._id}`, {
        method: 'DELETE'
    })
    .then(() =>{
        navigate('/');
    })
    
}

    return ( 
        <div className="blog_details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div className="blog_body">
                        {blog.body}
                    </div>
                    <button onClick = {handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;