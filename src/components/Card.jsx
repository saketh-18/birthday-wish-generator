import React from "react";
import { useSetRecoilState } from "recoil"; 
import { useNavigate } from "react-router-dom";
import { cardName } from "../atoms";

export default function Card() {
    const navigate = useNavigate();
    const setCardName = useSetRecoilState(cardName);

    function handleClick(name) {
      setCardName(name);
    }

    return (
      <div className='box'>
        <div className='inner-cont'>
          <h2> Enter Name : </h2>
          <input name="card-name" onChange={(e) => handleClick(e.target.value)} />
          <button onClick={() => {navigate("/generatedCard")}}>Generate Card</button>
        </div>
      </div>
    );
  }