let btn = document.querySelector('button');
let result = document.querySelector('h1');

document.body.addEventListener("keypress", (e) => {
    if(e.key == "Enter")  result.innerText = "Enter Key Pressed";
    if (e.key == "Enter" && e.shiftKey == true) result.innerText = "Enter + Shift Key Pressed"; 
});

btn.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keypress", {key: "Enter"});
    document.body.dispatchEvent(keyEvent);
})
