let array_color = ["red", "orange", "green", "blue"];
const tag = document.getElementsByTagName("p");
const add2 = document.getElementById('add2');
let getRandomInt = (max) => { return Math.floor(Math.random() * max) };
let reset = () => {
    for (let i = 0; i < tag.length; i++) {
        tag[i].style.border = 'none'
        tag[i].style.backgroundColor = 'white'
    }
}
let del = () => {
    let els = document.querySelectorAll('h2')
    let div = document.getElementById('container')
    for (var i = 0; i < els.length; i++) {
        div.removeChild(els[i])
    }
}
add2.addEventListener('click', e => {
    let string = document.getElementById('add').value.toString();
    let tmp = document.createElement('p')
    tmp.innerHTML = string
    let div = document.getElementById('container')
    div.appendChild(tmp)
    reset();
    del();
    do_it();

})
let do_it = () => {
    for (let i = 0; i < tag.length; i++) {
        tag[i].title = i + 1 + " z " + tag.length + " dlugosc zawartosci tagu " + tag[i].innerHTML.split("").length;
        tag[i].style.color = array_color[getRandomInt(array_color.length)]
        let elem_before = document.createElement('h2')
        elem_before.innerText = 'Paragraf ' + (i + 1);
        tag[i].parentNode.insertBefore(elem_before, tag[i]);
        tag[i].addEventListener("click", (event) => {
            reset();
            tag[i].style.border = '2px solid green'
            if ((i + 1) % 2 === 0) {
                tag[i].style.backgroundColor = 'grey'
            } else {
                tag[i].style.backgroundColor = 'darkgrey'
            }
            if (i + 1 !== tag.length) {
                tag[i + 1].style.border = '2px solid blue'
            }
            if (i != 0) {
                tag[i - 1].style.border = '2px solid orange'
            }

        });
        elem_before.addEventListener('click', (event2) => {
            let number = event2.target.innerHTML.split(" ")
            if (tag[(number[1] - 1)].style.display != 'none') {
                tag[(number[1] - 1)].style.display = 'none'
            } else {
                tag[(number[1] - 1)].style.display = 'block'
            }

        })
    }
}
do_it()

