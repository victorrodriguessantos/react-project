import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            (response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                comsole.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div> Carregando dados ... </div>
    }

    return (
        <section>
            <h1> Postagens dos Usuarios </h1>

            {posts.map((posts) => (
                
                <div className='post'>
                    <label>Post {posts.id} </label>
                    <h1 key={posts.id}><span>Title:</span> {posts.title}</h1>
                    <p > { posts.body } </p>
                
                </div>
             ))};

        </section>
    )
}

export default Posts;