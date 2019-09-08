function clockCreator () {

    const bodyCont = document.querySelector(".body-wrapper");

    const hCont = divCreator("header");
    console.log(hCont);

    const header = document.createElement("h1");
    header.textContent = "This webpage tells you the time using javascript"
    header.style.textAlign ="center";
    header.style.color = "white";
    header.style.fontSize = "4em";
    header.style.width = "50vw";

    const clockCont = divCreator("hidden");
        //clockCont.style.display ="none";

    const clocktime = actualClockCreator();
    
    
    console.log(clocktime);

    const hButton = buttonCreator("hButton", "Learn more >>");
    hButton.addEventListener("click",(event) => {
        hCont.style.display ="none";
        clockCont.style.display = "block";
        clockCont.style.height = "100vh";
    clockCont.style.display ="flex";
    clockCont.style.justifyContent = "center";
    clockCont.style.alignItems = "center";  

    });
    
    window.addEventListener("load", (event) =>{ 
        clockCont.style.display = "none";    
        header.style.display = "block";
});
   
    

    bodyCont.appendChild(clockCont);
    bodyCont.appendChild(hCont);
    hCont.appendChild(header);
    hCont.appendChild(hButton);
    clockCont.appendChild(clocktime);
   

}

clockCreator();

function buttonCreator(className, text) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(className);
    button.style.backgroundColor = "rgba(255,255,255,0.5)";
    button.style.border = "none";
    button.style.padding = "0.5em";
    button.style.margin = "0.5em";
    button.style.color = "white";
    button.style.fontSize = "1em";
    button.style.borderRadius = "0.3em";

    return button;
}

 function actualClockCreator()
{
    // display the string on the webpage
    const spanclock = document.createElement("span");
    spanclock.setAttribute("id","clock");
    spanclock.style.textAlign ="center";
    spanclock.style.color = "white";
    spanclock.style.fontSize = "3em";
    spanclock.style.width = "50vw";

    const currentTime = new Date();
 
//     const hours = currentTime.getHours();
//     const  minutes = currentTime.getMinutes();
//     const  seconds = currentTime.getSeconds();
//     const  meridian = "AM";
// //${hours}:${minutes}:${seconds}
    spanclock.textContent = `The time is: ${currentTime} `;

    return spanclock;
}

function divCreator (className) {
    const div = document.createElement("div");
    div.style.height = "100vh";
    div.style.display ="flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    div.classList.add(className);

    return div;

}