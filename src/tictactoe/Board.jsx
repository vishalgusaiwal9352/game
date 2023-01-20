import React ,{useState} from "react";
import Square from "./Square";
// import "./Board.scss";
import "./Board.css";
import celeb from "./celeb.gif";
const Board = ()=>{
    const [state,setState] = useState(Array(9).fill(null)); 
    let [isXturn,setTurn] = useState(true);
    let [isWon,setWon] = useState(false);
    const visit = [Array(9).fill(false)];
    const valvis = [Array(9).fill(false)];
    const reset = ()=>{
        console.log("done");
        let cpstate = [...state];
        for(let i=0; i<state.length; i++){
            cpstate[i] = null;
        }
        setState(cpstate);
        setTurn(true);
        setWon(false);
    }
    const winnerLogic = ()=>{
        const board = [[...state.slice(0,3)],[...state.slice(3,6)],[...state.slice(6,9)]];
        //console.log(board);
        for(let i=0; i<3; i++){
            let sum=0;
            for(let j=0; j<3; j++){
                sum+=parseInt(board[i][j]);
            }
            if(sum===15) return true;
            //console.log(sum);
        }
        for(let j=0;j<3;j++){
            let sum=0;
            for(let i=0; i<3; i++){
                sum+=parseInt(board[i][j]);
            }
            //console.log(sum);
            if(sum===15) return true;
        }
        let s=0;
        for(let i=0,j=0;j<3;j++,i++){
            s+=parseInt(board[i][j]);
        }
        console.log(s);
        if(s===15) return true;
        s=0;
        for(let i=0,j=2;j>=0;j--,i++){
            s+=parseInt(board[i][j]);
        }
        //console.log(s);
        if(s===15) return true;
        return false;
    }
    if(winnerLogic()){
        console.log("winner");
        setWon(true);
    }
    // const AiTurn=()=>{

    // }
    const getIn1=()=>{
        let value = prompt("Enter Number user 1");
        if(value==null)
        return;
        for(let i =0;i<state.length;i++){
            if(value===state[i]){
                return getIn1();
            }
        }
        return value;
    }
    const getIn2=()=>{
        // let n = [],m=[];
        // for(let i=0;i<state.length;i++){
        //     if(visit[i]===false) m.push(i);
        //     if(valvis[i]===false) n.push(i+1);
        // }
        // return [m[Math.random()*m.length-1],n[Math.random()*n.length-1]];
        let value = prompt("Enter Number user 2");
        if(value==null)
        return;
        for(let i =0;i<state.length;i++){
            if(value===state[i]){
                return getIn2();
            }
        }
        return value;
    }
    // const AiTurn = (value)=>{
    //     alert(value);
    //     const cpystate = [...state];
    //     let val = getIn2();
    //     cpystate[val[0]] = val[1];
    //     visit[val[0]]=true;
    //     valvis[val[1]-1]=true;
    //     setState(cpystate);
    // }
    const handleClick = (index)=>{
        if(state[index]==null){
            const copyState = [...state];
            copyState[index] = isXturn ? getIn1() : getIn2();
            visit[index] = true;
            valvis[copyState[index]-1] = true;
            setState(copyState);
            //console.log(state);
            //setInterval(1);
            //AiTurn(copyState[index]);
        }
    };
    const styles = [
        {
            borderRight: "2px solid black",
            borderBottom: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
            borderRight: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            borderRight : "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            border: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            borderLeft: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            borderRight: "2px solid black",
            borderTop: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
            borderTop: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
        {
            borderLeft: "2px solid black",
            borderTop: "2px solid black",
            height: "100px",
            width: "100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        fontSize:"56px",},
    ];
    return (
        <div className="fullcon">
            <div className="Board-container">
                <div className="Board-row">
                    <Square onClick={()=>handleClick(0)} value={state[0]} style={styles[0]}/>
                    <Square onClick={()=>handleClick(1)} value={state[1]} style={styles[1]}/>
                    <Square onClick={()=>handleClick(2)} value={state[2]} style={styles[2]}/>
                </div>
                <div className="Board-row">
                    <Square onClick={()=>handleClick(3)} value={state[3]} style={styles[3]}/>
                    <Square onClick={()=>handleClick(4)} value={state[4]} style={styles[4]}/>
                    <Square onClick={()=>handleClick(5)} value={state[5]} style={styles[5]}/>
                </div>
                <div className="Board-row">
                    <Square onClick={()=>handleClick(6)} value={state[6]} style={styles[6]}/>
                    <Square onClick={()=>handleClick(7)} value={state[7]} style={styles[7]}/>
                    <Square onClick={()=>handleClick(8)} value={state[8]} style={styles[8]}/>
                </div>
            </div>
            <button className="reset" onClick={()=>reset()}>Reset</button>
            <div className="imagebox">
                {isWon ? <img src={celeb} alt="No Image" />: <h1>Game Running</h1>}
                {/* <img src={celeb} alt="No Image" /> */}
            </div>
        </div>
    )
}
export default Board;