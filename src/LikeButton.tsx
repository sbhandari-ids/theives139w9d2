import React, { useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const LikeButton = () => {
  const [like, setLike] = useState(false);
  const likeUnlike = () => {
    setLike((liked) => !liked);
  };
  return (
    <div>
      {/* <h2>Hello from LikeButton Component</h2> */}
      <button onClick={likeUnlike} >
        {like ? <AiFillLike size={800} style={{ fill: 'teal' }}/> : <AiOutlineLike size={400}  style={{ fill: 'teal' }}/>}
      </button>
    </div>
  );
};
export default LikeButton;