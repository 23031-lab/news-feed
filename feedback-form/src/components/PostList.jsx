import { useState, useEffect } from 'react';

export default function PostList(){
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
fetch(" https://jsonplaceholder.typicode.com/posts?_limit=10 ")
    .then(res => {
    if (!res.ok) throw new Error("Ошибка сети");
    return res. json();
    })
    .then(data =>{
    setPosts(data);
    setLoading(false);
    })
    .catch(err => {
    setError(err.message);
    setLoading(false);
    });
}, []);

if (loading) return <p>Загрузка…</p>;
if (error) return <p style={{ color: 'red' }}>Ошибка: {error}</p>;

return (
    <div>
    {posts.map(post => (
        <article key={post.id} title={post.title} body={post.body} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'  }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </article>
    ))}
    </div>
    );
}
