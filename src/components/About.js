import { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts';

function About() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        let mounted = true; // when the about link is clicked, the component is mounted
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            if (mounted) {
                setPosts(data);
            }
        }
        fetchData();
        return () => mounted = false; // so the component doesn't fetch data after it's unmounted
    }
    , []);
  return (
    <div>
        About Page
        <p>{posts.length} posts</p>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>

  )
}

export default About