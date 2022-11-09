import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { set } from "lodash";
const Author = () => {
  const { id } = useParams();
  const baseUrl = `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const getAuthorbyId = async () => {
   
    const { data } = await axios.get(`${baseUrl}`);
    setPost(data);
  };
  useEffect(() => {
    setLoading(true);
    if (id) {
      
      getAuthorbyId();
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);;
  }, [id]);
  console.log(post)
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={post.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {post.authorName}
                          <span className="profile_username">@{post.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {post.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        {post.followers} followers
                      </div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems  post={post}/> 
                    
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
