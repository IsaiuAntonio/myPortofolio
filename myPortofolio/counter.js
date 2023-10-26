let count= 0
let decrease = document.querySelector('#decreaseBtn');
let increase = document.querySelector('#increaseBtn');
let reset = document.querySelector('#resetBtn');

decrease.addEventListener('click',function() {
    count -= 1;
    document.querySelector('#counter').innerHTML = count;
    if (count < 0) {
        document.querySelector('#counter').setAttribute('style','margin-right:20px');
    }
})
increase.addEventListener('click',function() {
    count+= 1;
    document.querySelector('#counter').innerHTML = count;
    if (count >= 0) {
        document.querySelector('#counter').setAttribute('style','margin-right: none');
    }
})
reset.addEventListener('click',function() {
    count = 0;
    document.querySelector('#counter').innerHTML = count;
})
