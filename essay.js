const parentContainer = document.querySelector('.readmoreContainer');

parentContainer.addEventListener('click', event=>{
    
    const currrent = event.target;

    const isReadMoreBtn = current.className.includes('readmoreBtn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.readMoreText');

    currentText.classList.toggle('readMoreText--show');

    current.textContent = current.textContent.includes('Read More')?
    "Read Less..." : "Read More...";
})