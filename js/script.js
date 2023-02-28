let boxLi1 = document.getElementById('box-l1')
let boxLi2 = document.getElementById('box-l2')
let boxLi3 = document.getElementById('box-l3')
let boxLi4 = document.getElementById('box-l4')
let boxLi5 = document.getElementById('box-l5')
let span = document.getElementById('span')

boxLi1.onclick = function () {
    this.style.background = '#fb7413';
    this.style.color = '#fff';
    boxLi2.style.background = 'hsl(216, 13%, 22%)';
    boxLi3.style.background = 'hsl(216, 13%, 22%)';
    boxLi4.style.background = 'hsl(216, 13%, 22%)';
    boxLi5.style.background = 'hsl(216, 13%, 22%)';
    span.innerHTML = 1
}
boxLi2.onclick = function () {
    this.style.background = '#fb7413';
    this.style.color = '#fff';
    boxLi1.style.background = 'hsl(216, 13%, 22%)';
    boxLi3.style.background = 'hsl(216, 13%, 22%)';
    boxLi4.style.background = 'hsl(216, 13%, 22%)';
    boxLi5.style.background = 'hsl(216, 13%, 22%)';
    span.innerHTML = 2;

}
boxLi3.onclick = function () {
    this.style.background = '#fb7413';
    this.style.color = '#fff';
    boxLi1.style.background = 'hsl(216, 13%, 22%)';
    boxLi2.style.background = 'hsl(216, 13%, 22%)';
    boxLi4.style.background = 'hsl(216, 13%, 22%)';
    boxLi5.style.background = 'hsl(216, 13%, 22%)';
    span.innerHTML = 3;

}
boxLi4.onclick = function () {
    this.style.background = '#fb7413';
    this.style.color = '#fff';
    boxLi1.style.background = 'hsl(216, 13%, 22%)';
    boxLi2.style.background = 'hsl(216, 13%, 22%)';
    boxLi3.style.background = 'hsl(216, 13%, 22%)';
    boxLi5.style.background = 'hsl(216, 13%, 22%)';
    span.innerHTML = 4;

}
boxLi5.onclick = function () {
    this.style.background = '#fb7413';
    this.style.color = '#fff';
    boxLi1.style.background = 'hsl(216, 13%, 22%)';
    boxLi2.style.background = 'hsl(216, 13%, 22%)';
    boxLi3.style.background = 'hsl(216, 13%, 22%)';
    boxLi4.style.background = 'hsl(216, 13%, 22%)';
    span.innerHTML = 5;
}

let box1 = document.getElementById('box-1')
let box2 = document.getElementById('box-2')
let box_subm = document.getElementById('box-subm')


//  Thank you state start


box_subm.onclick = function () {
    box1.style.display = 'none';
    box2.style.display = 'block';
    box2.style.display = 'flex';
    box2.style.flexDirection = 'column';
    box2.style.justifyContent = 'space-around';
}