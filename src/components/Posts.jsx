import React, { useEffect, useState } from "react";
import "../style.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function Posts({ postExcept }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    callApi()
      // .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, []);
  const callApi = async () => {
    const response = await axios.get(`/post`);
    // const body = await response.json();
    setPosts(response.data);
    if (response.status !== 200) throw new Error(response.message);
    return;
  };

  return (
    <div className="posts">
      <h1>Other posts you may like</h1>
      {posts.map((post) => {
        if (Number(post.id) !== Number(postExcept)) {
          return (
            <div className="post" key={post.id}>
              <img src={post.img} alt="" />
              <h2>{post.title}</h2>
              <button>
                <Link to={`/post/${post.id}`}> Read Mode</Link>
              </button>
            </div>
          );
        } else {
          return null; // or any other fallback logic if needed
        }
      })}
    </div>
  );
}

export default Posts;
