import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useUserContext } from "../hooks/useUserContext";

const Create = () => {
    const { user } = useUserContext()
    const { dispatch } = useBlogsContext()
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Quadri');
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);    
        const response = await fetch('http://localhost:8000/api/blogs',{
            method: 'POST',
            headers:{ 
                "content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`

            },
            body: JSON.stringify(blog)
        }) 

        const json = await response.json();
        if(!response.ok){
            throw Error(json.error)
        }
        if(response.ok){
            dispatch({ type: 'CREATE_BLOG', payload: json})
            setIsPending(false);
            navigate('/');
        }       
        
        
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Quadri">Quadri</option>
                    <option value="Dimeji">Dimeji</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog.....</button>}
                         
                
            </form>
        </div>
     );
}
 
export default Create;