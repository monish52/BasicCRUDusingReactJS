import {useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const [name,setName]=useState('Monish');
    const {data:blogs, isLoading}=useFetch('http://localhost:8000/blogs');
   

    const handleClick =(name)=>{
        setName('Shetty');
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={(()=> handleClick('Monish'))}>Click Me</button>
            <br /><br />

            {isLoading && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs}  title="All Blogs are mentioned here" />}
        </div>
     );
}
 
export default Home;




//npx json-server --watch data/db.json --port 8000