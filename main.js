console.log(document)


var changebuger = document.querySelector(".hambuger")
var changebackdrop = document.querySelector(".backdrop")

var changemenu = document.querySelector(".hambuger-content")

var showcontent = document.querySelector(".firstright-content")



function dosomething() {
    changebuger.classList.toggle("show-buger")
    changebackdrop.classList.toggle("show-backdrop")
    changemenu.classList.toggle("show-hambuger-content")

    showcontent.classList.toggle("show-firstright-content")
}