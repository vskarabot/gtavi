document.addEventListener('DOMContentLoaded', () => {

    const pageEnd = document.querySelector('.page-end');
    const white = document.querySelector('.white');

    const observe = (entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                white.classList.add('is-active');
            }
            else {
                white.classList.remove('is-active');
            }

        })
    };
    
    const observer = new IntersectionObserver(observe, {});
    observer.observe(pageEnd);

});