import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import "../style.scss";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    callApi()
      // .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, [cat]);

  const callApi = async () => {
    const response = await axios.get(`/post${cat}`);
    // const body = await response.json();
    setPosts(response.data);
    if (response.status !== 200) throw new Error(response.message);
    return;
  };

  return (
    <div className="home">
      <Header />
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>
                {post.desc.split(" ").slice(0, 50).join(" ")}
                {post.desc.split(" ").length > 50 ? " . . ." : ""}
              </p>
              <button> Read More</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
