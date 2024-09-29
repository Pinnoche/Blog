import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import useFetch from "../components/useFetch";

const BlogDetails = () => {
    const {user} = useUserContext();
    const { id } = useParams();
    const {blogs: blog, error, isPending} = useFetch(`/api/blogs/${id}`);
    const navigate = useNavigate();
    const handleDelete = () =>{
        fetch(`http://localhost:8000/api/blogs/${blog._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
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