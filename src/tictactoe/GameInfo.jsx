import React from "react";
import babyYes from "./baby-yes.gif";
import "./GameInfo.css";
const GameInfo = ()=>{
    return (
        <div className="gameinfo">
            <h1>Welcome to Tic Tac MyTicTacToe</h1>
            <div>
                <span className="info">Turn for user</span>
            </div>
            <div className="imgbox">
                <img src={babyYes} alt="" />
            </div>
        </div>
    )
}
export default GameInfo;