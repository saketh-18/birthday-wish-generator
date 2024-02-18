import React from "react";
import { useRecoilValue } from "recoil";
import { cardName } from "../atoms"; 

export default function GeneratedCard() {
    const greetCardName = useRecoilValue(cardName);
    let smile = ":)" ;

    return (
      <>
        <div className='container'>
        <div className='greetingCard'>
        <h3>Happy birthday { greetCardName } {smile} </h3>
        <p>Wishing you a very happy birthday filled with love and laughter 🎂 </p>
        <a href='/' className="anchorTag">Enter another name</a>
        </div>
        </div>
      </>
    );
  }