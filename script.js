let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider_inner');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (event) => {
    pressed = true;
    startx = event.offsetX - innerSlider.offsetLeft;
    console.log(startx + 'startx');
    console.log(event.offsetX + 'ev x');
    console.log(event);
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab'
});

slider.addEventListener('mousemove', (event) => {
    if (!pressed) return;
    event.preventDefault();

    x = event.offsetX;
    //console.log(x);
    //console.log(x-startx);
    innerSlider.style.left = `${x - startx}px`;

    checkX();
});

window.addEventListener('mouseup', () => {
    pressed = false;
});

function checkX()
{
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0)
    {
        innerSlider.style.left = '0px';
    } else if (inner.right < outer.right)
    {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
}
