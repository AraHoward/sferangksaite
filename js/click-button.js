const buttons = document.querySelectorAll('.button-page');

buttons.forEach(batoni => {
    batoni.addEventListener('click', () => {
        buttons.forEach(b => {
            b.classList.remove("active-button");
            b.classList.add("no-active-button");
        });
        batoni.classList.add("active-button");
        batoni.classList.remove("no-active-button");
    });
});
