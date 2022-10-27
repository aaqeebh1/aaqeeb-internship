import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HotCollections = () => {
  const baseUrl =
    "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections";
  const [post, setPost] = useState(false);
  const [loading, setLoading] = useState(true);

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["<", ">"],
    smartSpeed: 600,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  const settingLoadingState = () => {
    if (!loading) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } else {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  useEffect(() => {
    axios.get(`${baseUrl}`).then((res) => {
      setPost(res.data);
    });

    settingLoadingState()
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row ">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {post
              ? post.map((post, index) => (
                  <div className=" " key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap ">
                        <Link to="/item-details ">
                          <img
                            src={post.nftImage}
                            className="lazy img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to="/author">
                          <img
                            className="lazy pp-coll"
                            src={post.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{post.title}</h4>
                        </Link>
                        <span>ERC-{post.code}</span>
                      </div>
                    </div>
                  </div>
                ))
              : new Array(6).fill(0).map((_, index) => (
                  <div className="" key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap_loading">                        
                      </div>
                      <div className="nft_coll_pp_loading">
                        <Link to="/author">
                          <div
                            className="pp-coll_loading"
                            alt=""
                          ></div>
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info-loading">
                          <div className="nft_coll_info-title-loading"></div>
                        <div className="nft_coll_info-description-loading"></div>
                      </div>
                    </div>
                  </div>
                ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
