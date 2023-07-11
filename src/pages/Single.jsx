import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import editIcon from "../images/edit-icon.svg";
import deleteIcon from "../images/delete-icon.svg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Single() {
  const [post, setPost] = useState({});

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/post/${postId}`);
        setPost(res.data);
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div>
      <Header />
      <div className="single">
        <div className="content">
          <img src={post.img} alt="" />
          <div className="user">
            <img src={post.userImg} alt="" />
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.CreateAt).fromNow()}</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit2`}>
                <img src={editIcon} alt="" />
              </Link>
              <img src={deleteIcon} alt="" />
            </div>
          </div>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
        <Posts postExcept={postId} />
      </div>
      <Footer />
    </div>
  );
}

export default Single;
