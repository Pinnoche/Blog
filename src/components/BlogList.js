import { Link } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
                {blogs.map((blog) =>(
            <div className="blog-preview" key={blog._id}>
                <Link to= {`/blogs/${blog._id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </Link>  
                <p>{formatDistanceToNow(new Date(blog.createdAt), {addSuffix: true})}</p>
               
              </div> 
              ))} 
        </div>
        
        
        
      );
}
 
export default BlogList;