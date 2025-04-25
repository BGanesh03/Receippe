import React, { useState } from "react";
import "./feed.css";
import { Icon, ThumbsUp, MessageCircle } from "lucide-react";

export default function Feed({dish , ingredient , instruction }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const increase = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  
  console.log(likes);
  return (
    <div className="main">
      <div className="image">
        {/* put header for user name and profile */}
        <div className="head">
          {/* <img className="userima" src="./user.png" alt="" /> */}
          <p className="user">{dish}</p>
        </div>

        {/* To display the contents in the collection in image format */}
        <img className="feedima" src="./download.jpeg" alt="" />

        {/* Shows likes and comments */}
        <div className="like">
          <ThumbsUp size={23} />
          <div
            style={{
              cursor: "pointer",
              color: liked ? "red" : "black",
              padding: "2px",
            }}
            onClick={increase}
          >
            {" "}
            {likes} likes
          </div>
          <MessageCircle size={23} style={{ marginLeft: "20px" }} />
          <p
            style={{
              paddingLeft: "4px",
              paddingTop: "2.5px",
              cursor: "pointer",
            }}
          >
            Comments
          </p>
        </div>
      </div>
      <div className="desc">
        <h1>Ingredients</h1>
        <div className="ingredients-container flex flex-wrap gap-2 mt-2">
          {ingredient.map((item, index) => {
            const colors = [
            //   "bg-red-100 text-red-800 ring-red-300",
            //   "bg-yellow-100 text-yellow-800 ring-yellow-300",
              // "bg-green-100 text-green-800 ring-green-300",
            //   "bg-blue-100 text-blue-800 ring-blue-300",
            //   "bg-purple-100 text-purple-800 ring-purple-300",
            //   "bg-pink-100 text-pink-800 ring-pink-300",
            //   "bg-indigo-100 text-indigo-800 ring-indigo-300",
              "bg-gray-100 text-gray-800 ring-gray-300",
            ];
            const badgeStyle = colors[index % colors.length];
            return (
              <span
                key={index}
                className={`inline-flex items-center rounded-md px-4 py-2 text-xs font-medium ring-1 ring-inset  ${badgeStyle}`}
              >
                {item}
              </span>
            );
          })}
        </div>

        <br />
        <p style={{ paddingBottom: "15px" }}>Description</p>
        <p style={{ paddingTop: "5px" }}>{instruction}</p>
      </div>
    </div>
  );
}
