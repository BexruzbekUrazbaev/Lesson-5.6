function func1() {
    let add = prompt("body background color ni kiriting")
    let addSecond = prompt("matn rangini kiriting")
    let changeSecond;
    let change;
    switch (add) {
        case "blue":
            change = document.getElementById("main").style.backgroundColor = "blue"
            break;
        case "red":
            change = document.getElementById("main").style.backgroundColor = "red"
            break;
        case "yellow":
            change = document.getElementById("main").style.backgroundColor = "yellow"
            break;
        case "green":
            change = document.getElementById("main").style.backgroundColor = "green"
            break;
        case "black":
            change = document.getElementById("main").style.backgroundColor = "black"
            break;
        case "white":
            change = document.getElementById("main").style.backgroundColor = "white"
            break;
        case "pink":
            change = document.getElementById("main").style.backgroundColor = "pink"
            break;
        case "purple":
            change = document.getElementById("main").style.backgroundColor = "purple"
            break;
        case "aqua":
            change = document.getElementById("main").style.backgroundColor = "aqua"
            break;
        default:
            change = document.getElementById("main").style.backgroundColor = "white"
            break;
    }
    switch (addSecond) {
        case "blue":
            change = document.getElementById("text").style.color = "blue"
            break;
        case "red":
            change = document.getElementById("text").style.color = "red"
            break;
        case "yellow":
            change = document.getElementById("text").style.color = "yellow"
            break;
        case "green":
            change = document.getElementById("text").style.color = "green"
            break;
        case "black":
            change = document.getElementById("text").style.color = "black"
            break;
        case "white":
            change = document.getElementById("text").style.color = "white"
            break;
        case "pink":
            change = document.getElementById("text").style.color = "pink"
            break;
        case "purple":
            change = document.getElementById("text").style.color = "purple"
            break;
        case "aqua":
            change = document.getElementById("text").style.color = "aqua"
            break;
        default:
            change = document.getElementById("text").style.color = "white"
            break;
    }
}

func1()