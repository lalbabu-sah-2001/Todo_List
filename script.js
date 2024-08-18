let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let item = document.createElement(("li"));
    item.innerHTML = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
});

let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
    delBtn.addEventListener("click", function () {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){// BUTTON is always Capital Latter( becouse it is a nodeName)
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    
})