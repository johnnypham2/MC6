import { useState } from "react"
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const Like = () => {
const [isFaved, setIsFaved] = useState(false);

const handleClick = () => {
    setIsFaved(!isFaved);
};

  return (   
     <div onClick={handleClick}>
  {isFaved ? <BsHeartFill size={100}/> : <BsHeart size={100}/>}


    </div>
  )
}

export default Like