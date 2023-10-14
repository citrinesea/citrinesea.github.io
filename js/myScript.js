text/javascript

var akatsukiSelection = document.getElementById("akatsukiSelection");
var akatsuki = ["Keito", "Kuro", "Souma"];

var selectaktkList = document.createElement("selectaktkList").addEventListener("change", chooseFilter);
selectaktkList.setAttribute("id1", "mySelect1");
akatsukiSelection.appendChild(selectaktkList);

for (var i = 0; i < akatsuki.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", akatsuki[i]);
    option.text = akatsuki[i];
    selectaktkList.appendChild(option);
}


var ryuseitaiSelection = document.getElementById("ryuseitaiSelection").addEventListener("change", chooseFilter);
var ryuseitai = ["Chiaki", "Kanata", "Tetora", "Midori", "Shinobu"];

var selectryuseiList = document.createElement("selectryuseiList");
selectryuseiList.setAttribute("id2", "mySelect2");
ryuseitaiSelection.appendChild(selectryuseiList);

for (var i = 0; i < ryuseitai.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", ryuseitai[i]);
    option.text = ryuseitai[i];
    selectryuseiList.appendChild(option);

}

//2) [???] - Creating the function for the EventListener

function chooseFilter() {

if (akatsuki.selectedIndex == 0 && ryuseitai.selectedIndex == 0) {
        filteredList.push('Crossroad');}}

const filteredList =[]

//3) Stories (object array)

let stories= [
{
  story_name: "Crossroad",
  banner_image: "../images/reading-recc-thumbnails/crossroad.jpg",
  featured_charas: ["Chiaki", "Keito"]
},
{
  story_name: "Tough Guy",
  banner_image: "../images/reading-recc-thumbnails/tough-guy.jpg",
  featured_charas: ["Kuro", "Chiaki", "Tetora", "Midori"]
}
];