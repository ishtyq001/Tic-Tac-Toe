//boxes array to store all buttons
let boxes= document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-button");
let newGameButton= document.querySelector("#new-button");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
//logic: sbse phle to ye decide krna h ki turn X ka h ya 0 ka
//also there are alternate turns
let turn0=true;
let countstep=0;
//storing winning patterns in arrays
const WinPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];


//function to reset the game
const resetGame= () =>{
  turn0=true;
  enableBoxes();
  msgContainer.classList.add("hide");
};


//function for draw game
const drawgame = () => {

    msg.innerText = `Draw Game`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
//adding event listener for clicks
boxes.forEach((box) => {
  box.addEventListener("click", () => {
   // console.log("box was clicked");

    //O's turn
    if(turn0){
      box.innerText="X";
      turn0=false;
    }
    //X's turn
    else{
      box.innerText="O";
      turn0=true;
    }
    //islye qki ek baar x ya o aane pe wo value store krna hai
    //box disable=true use ni krnge to same box pe jitna baar click krnge
    //value utna baar change hoga
    //jbki game ka logic h ki ek baar value store hone k baad wo store ho jaye
  

    //for draw if count===8 thee draw
    countstep++;
    //arrow function to check winner
    checkWinner();

    if(countstep==8){
      drawgame();
    }
  });
});

//taaki ek baar winner declare ho jaye to fir aage game na badhe

const disableBoxes= () =>{
  for(let box of boxes){
      box.disabled=true;
  }
};


const enableBoxes= () =>{
  for(let box of boxes){
      box.disabled=false;
      box.innerText="";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}




const checkWinner = ()=>{
  for( let pattern of WinPatterns ){

      //vvi chatgpt for output of this loop
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    //winning position tbhi check krnge jb pos1,pos2,pos3 teeno filled ho
    if(pos1val!="" && pos2val!="" && pos3val!=""){
          if(pos1val===pos2val && pos2val===pos3val ){
            console.log("winner", pos1val);
            
            showWinner(pos1val);

          }
    }

  }

};


newGameButton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);


