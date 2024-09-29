import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { useBlogsContext } from "../hooks/useBlogsContext";

const Navbar = () => {
    const {user, dispatch} = useUserContext();
    const { dispatch: blogsDispatch } = useBlogsContext()

    const handleLogout = () => {
        localStorage.removeItem(user)
        dispatch({type: 'LOGOUT'})
        blogsDispatch({type: 'SET_BLOGS', payload: null})

    }
    return ( 
        <nav className="navbar">
            <h1>Dimeji's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
            {user && (<div className="signin">
                {user.email}
                <button type="button" onClick={handleLogout}>Logout</button>
            </div>)}
            {!user && (<div className="links">
                <Link to="/signup">SignUp</Link>
                <Link to="/login">Login</Link>
                
            </div>)}
        
        </nav>

        
     );
}
 
export default Navbar;