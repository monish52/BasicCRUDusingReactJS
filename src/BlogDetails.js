import { useHistory, useParams } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id}=useParams();
    const{data:blogs,isLoading}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blogs.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading....</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;