document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.numberplus');

    const animationNumber = (number) => {
        const end = +number.getAttribute("end-number");

        let timeStart = null;

        const animationTimes = 2000;

        const fps = (fpsTime) => {
            if (timeStart === null) {
                timeStart = fpsTime;
            }

            const a = fpsTime - timeStart
            const step = Math.min(a / animationTimes, 1);

            const nowNumber = Math.floor(step * end);
            number.innerText = nowNumber;

            if (step < 1) {
                requestAnimationFrame(fps);
            }
        };

        requestAnimationFrame(fps);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animationNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
});