const btn = document.querySelector('.carousel-btns');

btn.addEventListener('click', debounce((e)=> {
    
    if(e.target.classList.contains('prev')) {
        goBack();
    } else if(e.target.classList.contains('next')) {
        goForward();
    }
}, 300))

function goBack() {
    const active = document.querySelector('.active');
    const next = active.previousElementSibling;
    if(next) {
        active.classList.remove('active')
        next.classList.add('active')
    }
}

function goForward(elem) {
    const active = document.querySelector('.active');
    const next = active.nextElementSibling;
    if(next) {
        active.classList.remove('active')
        next.classList.add('active')
    }
}

function debounce(fn, delay) {
    let inDebounce;
    let context = this;
    return function(event) {
        clearTimeout(inDebounce);

        inDebounce = setTimeout(()=> fn.call(context, event), delay);
    }
}
