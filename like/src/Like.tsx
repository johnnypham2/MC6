import { useState } from "react"
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const Like = () => {
const [isLiked, setIsLiked] = useState(false);

const handleClick = () => {
    setIsLiked(!isLiked);
};

  return (   
     <div onClick={handleClick}>
  {isLiked ? <BsHeartFill size={100}/> : <BsHeart size={100}/>}


    </div>
  )
}

export default Like