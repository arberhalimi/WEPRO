const container = document.querySelector("#photos");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".images");

container.addEventListener("click", function (e){
    var id = e.target.dataset.id;
    if(id === id){
        btns.forEach(function (btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
        articles.forEach(function(article){
            article.classList.remove("active");
        })
        const element = document.getElementById(id)
        element.classList.add("active");
    }
});









// form validation



// background change


let q = new Date().getHours();

while(document.readyState === false) {}
var colors = ["#ffffff","#F5F5F5","#FAF9F6","#F5F5F5","#f0f8ff"];
window.addEventListener("load",function() { setBackground(q) });
function setBackground(time) {


switch(time) {
    case 0:
    case 1:
    case 2:
    case 3:
        document.body.style.backgroundColor = colors[0];
        break;
    case 4:
    case 5:
    case 6:
        document.body.style.backgroundColor = colors[1];
        break;
    case 7:
    case 8:
    case 9:
        document.body.style.backgroundColor = colors[2];
        break;
    case 10:
    case 11:
    case 12:
        document.body.style.backgroundColor = colors[3];
        break;
    case 13:
    case 14:
    case 15:
        document.body.style.backgroundColor = colors[4];
        break;
    case 16:
    case 17:
    case 18:
        document.body.style.backgroundColor = colors[3];
        break;
    case 19:
    case 20:
    case 21:
        document.body.style.backgroundColor = colors[2];
        break;
    case 22:
    case 23:
    case 24:
        document.body.style.backgroundColor = colors[1];
        break;
}
print(t);
}
