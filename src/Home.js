import {useState} from 'react';

const  Home = () => {
    const [blogs, setBlog] = useState([
        {tittle: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {tittle: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {tittle: 'Web div top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ]);

    return (
        <div className = "home">
            {blogs.map((blog) => (
                <div className = "blog-preview" key={blog.id}>
                <h2>{ blog.tittle }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
export default Home;