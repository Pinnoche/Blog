import { Link } from "react-router-dom";

const NoPage = () => {
    return ( 
        <div className="not-found">
             <h1>Error 404</h1>
             <div>
                <Link to="/">Back to Homepage</Link>
             </div>

        </div>
       
        
        
     );
}
 
export default NoPage;