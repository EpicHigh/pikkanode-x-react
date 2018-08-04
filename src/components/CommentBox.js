import React from "react";

const CommentBox = ({user, comment}) => (
  <div className="comment-box">
    <img src={`https://robohash.org/${user}`} alt={`${comment}`} />
    <p className="name">{user}</p>
    <p className="c-txt">{comment}</p>
  </div>
);

export default CommentBox
