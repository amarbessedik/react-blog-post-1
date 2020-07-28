import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import blog from "../../data/blog";
import Sidebar from "../../components/Sidebar";

const Home = (props) => {
  const gallaryHeight = 450;
  // const gallaryStyle = {
  //   height: `${gallaryHeight}px`,
  //   overflow: "hidden",
  // };
  const sideImageHeight = gallaryHeight / 3;
  const blogData = blog.data;
  const imageStyle = {
    width: "100%",
    objectFit: "fill",
    height: `${sideImageHeight - 3}px`,
  };
  // example image
  const mainImage = blog.data[0].blogImage;

  return (
    <div>
      <Card>
        <div className="gallary-post">
          <section style={{ width: "70%" }}>
            <div>
              <img
                src={mainImage}
                alt="imageMain"
                style={{ height: `${gallaryHeight}px`, width: "100%" }}
              />
            </div>
          </section>
          <section
            style={{
              width: "28%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img src={mainImage} alt="imageMain1" style={imageStyle} />
            </div>
            <div>
              <img src={mainImage} alt="imageMain2" style={imageStyle} />
            </div>
            <div>
              <img src={mainImage} alt="imageMain3" style={imageStyle} />
            </div>
          </section>
        </div>
      </Card>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <div style={{ width: "70%" }}>
          <Card style={{ marginBottom: "20px" }}>
            <div className="post-image-wrapper">
              <img src={mainImage} alt="postImage" />
            </div>
            <div style={{ textAlign: "center" }}>
              <span>Featured</span>
              <h2>{blog.data[0].blogTitle}</h2>
              <span style={{ fontWeight: "300", fontSize: "13px" }}>
                Posted on July 27, 2020 by Sorra Blogging Tips
              </span>
              <p style={{ textAlign: "left", fontWeight: "300" }}>
                {blog.data[0].blogText.substring(0, 240) + "..."}
              </p>
            </div>
          </Card>
          <Card style={{ marginBottom: "20px" }}>post2</Card>
        </div>
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
