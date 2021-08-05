import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('Shetty');
    const[loading,setLoading]=useState(false); 
    const history=useHistory(); 

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setLoading(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog added');
            setLoading(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                    <input 
                    type="text" required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                <label>Blog body: </label>
                    <textarea id="" cols="30" rows="10"
                     required
                     value={body} 
                     onChange={(e)=>setBody(e.target.value)}>
                    </textarea>
                <label>Blog Author: </label>
                    <select 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}>
                        <option value="Monish">Monish</option>
                        <option value="Shetty">Shetty</option>
                    </select>
                    <button>{!loading && 'Submit'} {loading && 'Loading'}</button>
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;