let buttons=document.querySelectorAll(".button")
let startbtn=document.querySelector(".startbtn")
let resetbtn=document.querySelector(".resetbtn")
let win=document.querySelector(".winner")
let undo=document.querySelector(".undo")

const winnerpattern = [
      [0,1,2], // Top row
      [3,4,5], // Middle row
      [6,7,8], // Bottom row
      [0,3,6], // Left column
      [1,4,7], // Middle column
      [2,5,8], // Right column
      [0,4,8], // Diagonal from top-left to bottom-right
      [2,4,6]  // Diagonal from top-right to bottom-left
   ];
   



let curr=true
let lastMove = null; // Variable to store the last move made
let lastMoveText = null; // Variable to store the text content of the last move
buttons.forEach((btn)=>{
   btn.addEventListener("click", ()=>{
     if(curr){
        btn.innerText="x"
        curr=false
     }
     else{
      btn.innerText="o"
      curr=true
     }
     btn.disabled=true
     lastMoveText = btn.innerText; // Store the text content of the last move
     lastMove = btn; // Store the last move made
     checkwinner()
   })
})


let showWinner=(e)=>{
   win.classList.remove("hide")
   win.innerText=`Winner is  ${e}`
}


let checkwinner=()=>{
  for (pattern of winnerpattern){
     let val1=buttons[pattern[0]].innerText
     let val2=buttons[pattern[1]].innerText
     let val3=buttons[pattern[2]].innerText


     if(val1 !="" && val2 !="" && val3 !=""){
         if(val1===val2 && val2===val3){
            showWinner(val1)
            
            desablebtn()
         }
     }
  }
}


let desablebtn=()=>{
   buttons.forEach(btn => {//desable all buttons after getting winner
      btn.disabled=true
      undo.disabled=true
   });
}
let enablebtn=()=>{
   buttons.forEach(btn => {//desable all buttons after getting winner
      btn.disabled=false
      btn.innerText=""
      undo.disabled=false
   });
}




let resetgame=()=>{
      curr=true
      enablebtn()
      win.classList.add("hide")
     
}
resetbtn.addEventListener("click", resetgame)



let startgame = () => {
   const container = document.querySelector('.container');

   if (container) {
       resetgame()
       setTimeout(() => {
           container.scrollIntoView({ behavior: 'smooth' });
       }, 100);
   }
};

startbtn.addEventListener("click", startgame);




// Function to undo the last move
undo.addEventListener("click", () => {
    if (lastMove && lastMoveText) {
        lastMove.innerText = ""; // Restore the text of the last move
        lastMove.disabled = false; // Enable the button again
        lastMove = null; // Reset lastMove variable
        lastMoveText = null; // Reset lastMoveText variable
    }
});


