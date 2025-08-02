document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("btnadd");
    button.addEventListener("click", adddata);
});
var users=[];
var i=0;
function adddata(){
    let obj = {
        name: document.getElementById("sname").value,
        email: document.getElementById("email").value,
        phno: document.getElementById("phoneno").value,
        rno: document.getElementById("rno").value,
    };
    if(obj.name=="" || obj.email==""|| obj.phno=="" || obj.rno==""){
        alert("Fill all fields");
        return;
    }
    if(obj.phno.length!=10){
        alert("Number Invalid");
        return;
    }
    //var newrow=document.getElementById("studata").getElementsByTagName(tbody);
    let row=document.createElement("tr");
    let td=document.createElement("td");
    td.innerHTML=obj.name;
    row.appendChild(td);

    let td1=document.createElement("td");
    td1.innerHTML=obj.email;
    row.appendChild(td1);

    let td2=document.createElement("td");
    td2.innerHTML=obj.phno;
    row.appendChild(td2);

    let td3=document.createElement("td");
    td3.innerHTML=obj.rno;
    row.appendChild(td3);

    let td4=document.createElement("td");
    let delIcon=document.createElement("i");
    delIcon.className="fas fa-trash";
    delIcon.style.cursor="pointer";
    delIcon.addEventListener("click",function(){
        row.remove();
        users.splice(i,1);
        i--;
        localStorage.setItem("Users", JSON.stringify(users));
    });
    td4.appendChild(delIcon);
    row.appendChild(td4);

    let td5=document.createElement("td");
    let editIcon=document.createElement("i");
    editIcon.className="fas fa-edit";
    editIcon.style.cursor="pointer";
    editIcon.onclick = function () {
        // Convert to editable input fields
        td.innerHTML = `<input type="text" value="${td.textContent}">`;
        td1.innerHTML = `<input type="email" value="${td1.textContent}">`;
        td2.innerHTML = `<input type="text" value="${td2.textContent}">`;
        td3.innerHTML = `<input type="text" value="${td3.textContent}">`;

        // Replace edit icon with save icon
        td5.innerHTML = "";
        let saveIcon = document.createElement("i");
        saveIcon.className = "fas fa-save";
        saveIcon.style.cursor = "pointer";
        saveIcon.onclick = function () {
            // Save updated data
            obj.name = td.querySelector("input").value;
            obj.email = td1.querySelector("input").value;
            obj.phno = td2.querySelector("input").value;
            obj.rno = td3.querySelector("input").value;

            td.textContent = obj.name;
            td1.textContent = obj.email;
            td2.textContent = obj.phno;
            td3.textContent = obj.rno;

            // Restore edit icon
            td5.innerHTML = "";
            td5.appendChild(editIcon);

            // Update in localStorage
            users = users.map(u => u.rno === obj.rno ? obj : u);
            localStorage.setItem("Users", JSON.stringify(users));
        };
        td5.appendChild(saveIcon);
    };
    td5.appendChild(editIcon);
    row.appendChild(td5);
    document.getElementById("studata").appendChild(row);
    users[i]=obj;
    i++;
    localStorage.setItem("Users", JSON.stringify(users));
    console.log(users);
}
