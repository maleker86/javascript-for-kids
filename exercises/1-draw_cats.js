//Draw as many cats as you want!

var drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        let section = document.getElementById("section1");
        let p = document.createElement("p");
        section.append(p)
        p.innerText = (i + 1) + ": =^-^=";
    }
}