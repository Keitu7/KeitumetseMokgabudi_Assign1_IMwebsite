//addingthe funtion to activate each cell//
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        //for the funtion of removing the active action on each panel//
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}