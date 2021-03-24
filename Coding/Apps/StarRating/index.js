const starMixin = function (theContainer) {
    let _clicked = 0;
    const stars = Array.from(theContainer.children);
    if(stars.length) {
        const mouseover = (e) => {
                const starId = e.target.dataset.id;
                if(starId) {
                    hoverTill(starId);
                }
            };
        
        const mouseout = (e) => {
                if(_clicked) {
                    hoverTill(_clicked);
                } else if(!e.target.dataset.id){
                    stars.forEach((star) => star.classList.remove('gold'));
                }
            };
    
        const clicked = (e) => {
                const starId = e.target.dataset.id;
                if(starId) {
                    _clicked = starId;
                }
            };
        
        const hoverTill = (starId) => {
                const nonHovered = stars.slice(starId);
                stars.forEach((star) => star.classList.add('gold'));
                nonHovered.forEach((star) => star.classList.remove('gold'));
            };

        theContainer.addEventListener('mouseover', mouseover);
        theContainer.addEventListener('mouseout', mouseout);
        theContainer.addEventListener('click', clicked);

    }
};

const starContainer = document.querySelector('.star-container-1');
const starContainer2 = document.querySelector('.star-container-2');

starMixin(starContainer);
starMixin(starContainer2);
