/* Add item to the list */
function AddButton_Click() 
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Cannot add an empty item!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

/* Load the next page with our TODO list */
function LoadProgram() {
    /* Save the list to load on the Program page */
    let myList = document.getElementById("myUL").getElementsByTagName('li');
    var lis = [];
    for (const li of myList) {
        lis.push(li.outerHTML);
    }
    sessionStorage.setItem("myList", JSON.stringify(lis));

    window.location.href = "./Program.html"
}