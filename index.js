function toggle(e){
    const el = e.target;
    const parent = el.closest('.accordion-item');
    const isOpened = parent.classList.contains('opened');
    const content = parent.querySelector('.accordion-content');
    const contentHeight = content.scrollHeight;
    
    content.style.height = `${contentHeight}px`;
    if(!isOpened){
        // setTimeout(() => {
        //     content.style = `height:auto`
        // }, 310);
    } else {
        content.style.height = '0px';
        // content.style.visibility = 'visible';
        setTimeout(() => {
            content.style.removeProperty('height');
            // content.style.removeProperty('visibility');
        }, 310);
    }

    parent.classList.toggle('opened');

}

document.querySelectorAll('.accordion-button').forEach(button => {
    {button.addEventListener('click', toggle)}
})