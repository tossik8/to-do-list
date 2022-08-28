let i = 1;
function add(){
    let input = document.getElementById("task");
    if(input.value.trim() == "") return;
    let list = document.getElementById("list");
    let listElement = document.createElement("li");
    listElement.setAttribute("id", i);
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("value", i);
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("onclick", "deleteRecord(this.value)");
    deleteButton.innerHTML = "Delete";
    let checkbox = document.createElement("input");
    checkbox.setAttribute("value", i);
    ++i;
    checkbox.setAttribute("type", "checkbox");
    listElement.append(checkbox);
    listElement.append(input.value);
    listElement.appendChild(deleteButton);
    list.appendChild(listElement);
    input.value = "";
    input.focus();

}
document.addEventListener("keydown", (e) =>{
    if(document.getElementById("task").value.trim() == "") return;
    if(e.key == "Enter") document.querySelector("input[type='button']").click();

})
function deleteRecord(id){
    document.getElementById(id).remove();
}
function deleteAll(){
    let listEl = document.querySelectorAll("li input");
    listEl.forEach(el => {
        let id = el.getAttribute("value");
        if(el.checked == true){
            console.log("reached");
            deleteRecord(id);
        }
    })

}
