let comscore=0
let userscore=0

let startbtn=document.querySelector(".startbtn")
let homebtn=document.querySelector(".homebtn")
let choices=document.querySelectorAll(".choice")
let result=document.querySelector(".result")
let numgame=document.querySelector(".numgame")
let resetbtn=document.querySelector(".resetbtn")
let com1=document.querySelector(".com1")
let you1=document.querySelector(".you1")

let startgame = () => {
    const game=document.querySelector(".game")
    if (game) {
        setTimeout(() => {
            game.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
 };
 startbtn.addEventListener("click", startgame);

let comChoiceGen=()=>{
    let posiblity=["rock" , "peper" , "scissor"]
    let idx=Math.floor((Math.random())*3)
    const comChoice=posiblity[idx]
    return comChoice
}

let Round=1;
let numOfRound=()=>{
    numgame.innerText=`Number of Round : ${Round}`
    Round++
}

// User choice which is detacting
choices.forEach(choice => {
    choice.addEventListener("click" , ()=>{
        const userChoice=choice.getAttribute("id")
        playgame(userChoice)
        numOfRound()
    })
});

let id=null
let playgame=(userChoice)=>{
    const comChoice=comChoiceGen()
    if(comChoice===userChoice){
        result.innerText="Draw"
    }
    else if(comChoice==="rock"){
        userChoice==="peper"? id="you":id="com"
    }
    else if(comChoice==="peper"){
        userChoice==="scissor"? id="you":id="com"
    }
    else{
        userChoice==="rock"? id="you":id="com"
    }

    scorebord(id)
    showWinner(id)
 }


let reset=()=>{
    Round=0
    result.innerText="Let's Play Game"
    result.classList.add("default")
    result.classList.remove("green")
    result.classList.remove("red")
    numgame.innerText="Number of Round"

    comscore=0
    userscore=0
    you1.innerText=`0`
    com1.innerText=`0`
}
resetbtn.addEventListener("click" , reset)


let scorebord=(id)=>{
    if(id==="com"){
        comscore++
        com1.innerText=`${comscore}`   
    }
    else if(id==="you"){
        userscore++
        you1.innerText=`${userscore}`
    }
}



// Winner Showing color set
let showWinner=(id)=>{
    if(id==="you"){
        result.innerText="You are Win"
        result.classList.add("green")
        result.classList.remove("red")
        result.classList.remove("default")
    }
    else if(id==="com"){
        result.innerText="Computer Win"
        result.classList.add("red")
        result.classList.remove("default")
        result.classList.remove("green")
    }
    else{
        result.innerText="Draw"
        result.classList.add("default")
        result.classList.remove("green")
        result.classList.remove("red")
    }
}


let home = () => {
    const heading=document.querySelector(".heading")
    if (heading) {
        setTimeout(() => {
            heading.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
 };
 homebtn.addEventListener("click", home);