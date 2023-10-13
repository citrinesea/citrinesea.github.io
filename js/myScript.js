//javascript for  story  recommendations

var ryuseitaiSelection = document.getElementById("ryuseitaiSelection");
var ryuseitai = ["Chiaki", "Kanata", "Tetora", "Midori", "Shinobu"];

var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
ryuseitaiSelection.appendChild(selectList);

for (var i = 0; i < ryuseitai.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", ryuseitai[i]);
    option.text = ryuseitai[i];
    selectList.appendChild(option);
}

var akatsukiSelection = document.getElementById("akatsukiSelection");
var akatsuki = ["Keito", "Kuro", "Souma"];

var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
akatsukiSelection.appendChild(selectList);

for (var i = 0; i < akatsuki.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", akatsuki[i]);
    option.text = akatsuki[i];
    selectList.appendChild(option);
}