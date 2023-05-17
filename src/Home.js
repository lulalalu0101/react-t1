import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const  Home = () => {
    const [blogs, setBlog] = useState([
        {tittle: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {tittle: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {tittle: 'Web div top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ]);

    const handleDelete =(id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlog(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    },[]);



return (
    <div className="home">
        <BlogList blogs={blogs} tittle="All Blogs!" handleDelete={handleDelete}/>

    </div>
);
}
export default Home;