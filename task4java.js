var table = document.createElement("table");

var tr1 = document.createElement("tr");
tr1.appendChild(document.createElement("th"));
tr1.appendChild(document.createElement("th"));
tr1.appendChild(document.createElement("th"));
tr1.appendChild(document.createElement("th"));
tr1.appendChild(document.createElement("th"));
tr1.cells[0].appendChild(document.createTextNode("Name"));
tr1.cells[1].appendChild(document.createTextNode("RollNo"));
tr1.cells[2].appendChild(document.createTextNode("Branch"));
tr1.cells[3].appendChild(document.createTextNode("Update"));
tr1.cells[4].appendChild(document.createTextNode("Delete"));
table.appendChild(tr1);

var tr2 = document.createElement("tr");
tr2.appendChild(document.createElement("td"));
tr2.appendChild(document.createElement("td"));
tr2.appendChild(document.createElement("td"));
tr2.cells[0].appendChild(document.createTextNode("Surya"));
tr2.cells[1].appendChild(document.createTextNode("22MH1A0538"));
tr2.cells[2].appendChild(document.createTextNode("CSE"));
var Update = tr2.insertCell();
var button = document.createElement("button");
button.innerHTML = "Update";
button.onclick = function () {
  mod(this);
};
Update.appendChild(button);
var Delete = tr2.insertCell();
var button = document.createElement("button");
button.innerHTML = "Delete";
Delete.onclick = function () {
  del(this);
};
Delete.appendChild(button);
table.appendChild(tr2);

var tr3 = document.createElement("tr");
tr3.appendChild(document.createElement("td"));
tr3.appendChild(document.createElement("td"));
tr3.appendChild(document.createElement("td"));
tr3.cells[0].appendChild(document.createTextNode("Surendra"));
tr3.cells[1].appendChild(document.createTextNode("22MH1A0543"));
tr3.cells[2].appendChild(document.createTextNode("CSE"));
var Update = tr3.insertCell();
var button = document.createElement("button");
button.innerHTML = "Update";
button.onclick = function () {
  mod(this);
};
Update.appendChild(button);
var Delete = tr3.insertCell();
var button = document.createElement("button");
button.innerHTML = "Delete";
Delete.onclick = function () {
  del(this);
};
Delete.appendChild(button);
table.appendChild(tr3);

var tr4 = document.createElement("tr");
tr4.appendChild(document.createElement("td"));
tr4.appendChild(document.createElement("td"));
tr4.appendChild(document.createElement("td"));
tr4.cells[0].appendChild(document.createTextNode("balu"));
tr4.cells[1].appendChild(document.createTextNode("22MH1A0551"));
tr4.cells[2].appendChild(document.createTextNode("CSE"));
var Update = tr4.insertCell();
var button = document.createElement("button");
button.innerHTML = "Update";
button.onclick = function () {
  mod(this);
};
Update.appendChild(button);

var Delete = tr4.insertCell();
var button = document.createElement("button");
button.innerHTML = "Delete";
Delete.onclick = function () {
  del(this);
};
Delete.appendChild(button);
table.appendChild(tr4);

var flag = 0;

function add() {
  if (flag == 0) {
    document.body.appendChild(table);
    flag = 1;
  } else {
    var tr = document.createElement("tr");
    tr.appendChild(document.createElement("td"));
    tr.appendChild(document.createElement("td"));
    tr.appendChild(document.createElement("td"));
    tr.cells[0].appendChild(document.createTextNode(prompt("Name")));
    tr.cells[1].appendChild(document.createTextNode(prompt("RollNo")));
    tr.cells[2].appendChild(document.createTextNode(prompt("Branch")));
    var Update = tr.insertCell();
    var button = document.createElement("button");
    button.innerHTML = "Update";
    button.onclick = function () {
      mod(this);
    };
    Update.appendChild(button);
    var Delete = tr.insertCell();
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    Delete.onclick = function () {
      del(this);
    };
    Delete.appendChild(button);
    table.appendChild(tr);
  }
}

function del(button) {
  var row = button.parentNode;
  row.parentNode.removeChild(row);
}

function mod(button) {
  var tr = button.parentNode.parentNode;
  tr.cells[0].innerHTML = prompt("Name");
  tr.cells[1].innerHTML = prompt("RollNo");
  tr.cells[2].innerHTML = prompt("Branch");
}