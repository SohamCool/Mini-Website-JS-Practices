// const element1 = document.querySelector(".li");


// let ele = $( ".target" ).load( "intro1.html" );

// element1.addEventListener("click", () => {
//     intro();
// });
// function intro(){
//     document.getElementById('target').innerHTML = ele;
// } 

// function loadJSON(callback) {
//     var xObj = new XMLHttpRequest();
//     xObj.overrideMimeType("application/json");
//     xObj.open('GET', 'data.json', true);
//     xObj.onreadystatechange = function() {
//         if (xObj.readyState === 4 && xObj.status === 200) {
//             // 2. call your callback function
//             callback(xObj.responseText);
//         }
//     };
//     xObj.send(null);
//   }
  
//   function init() {
//     loadJSON(function(response) {
      
//       const app = document.querySelector('#target');
//       app.innerHTML = '<pre>' + JSON.stringify(json, null, 4) + '</pre>';
//     });
//   }
  
//   init();

document.getElementById("1").onclick = function() {loadContent()};

function loadContent(){
    const txt = '{"heading":"Introduction","description":"JavaScript is a lightweight, cross-platform, and interpreted scripting language. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements."}'
    const obj = JSON.parse(txt);
    const right = document.querySelector("#target");

    const title = document.createElement("div");
    title.classList.add("righthead");
    bold = document.createElement("b");
    bold.innerHTML=obj.heading;
    title.appendChild(bold);
    
    const desc = document.createElement("div");
    desc.classList.add("content");
    para = document.createElement("p")
    para.innerHTML=obj.description;
    title.appendChild(para);

    right.appendChild(title);

}







































onload = () => {
    let menuar = [];
    let mainlist = document.getElementById("menu");
    let title = [{ "title": "Introduction", "link": "./info/intro" }, { "title": "What you should already know", "link": "./info/why" }, { "title": "JavaScript and Java", "link": "./info/js&java" }, { "title": "Hello World", "link": "./info/hw" }, { "title": "Variables", "link": "./info/var" }, { "title": "Variables Declaration", "link": "./info/vard" }, { "title": "Variables Scope", "link": "./info/varscope" },];

    for (let i = 0; i < title.length; i++) {
        let le = document.createElement("li");
        le.innerHTML = title[i].title;

        le.onclick = () => {
            for (let j = 0; j < title.length; j++)
                menuar[j].removeAttribute("style");

            le.setAttribute("style", "background-color:rgb(74, 214, 137)");
            let ajx = new XMLHttpRequest();
            ajx.onreadystatechange=()=>{
                if(ajx.readyState==4 && ajx.status==200){
                    document.getElementById("target").innerHTML = ajx.responseText;            
                }
            }
            ajx.open("GET", title[i].link, true);
            ajx.send();
            
        }

        menuar[i] = le;
        mainlist.appendChild(menuar[i]);
    }
    menuar[0].click();
}