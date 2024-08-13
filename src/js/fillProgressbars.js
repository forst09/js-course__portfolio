export default function fillProgressbars() {

    const skillsSection = document.querySelector('.skills');
    const progressbars = document.querySelectorAll('.progressbar__progress');
    let threshold;
    if (window.innerWidth > 1024) {
        threshold = 0.5
    }
    else threshold = 0.3;

    const options = {
        threshold: threshold,
    }

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting === true) {
                setProgressValues();
            }
        })
        if (progressbars[0].value !== 0) {
            observer.disconnect();
        }
    }

    const observer = new IntersectionObserver(callback, options);

    const htmlValue = 80;
    const cssValue = 80;
    const jsValue = 50;
    const vueValue = 20;
    const nuxtValue = 10;

    function setProgressValues() {
        progressbars.forEach(item => {
            switch (item.getAttribute('data-progress')) {
                case 'html':
                    item.value = htmlValue;
                    break;
                case 'css':
                    setTimeout(() => {
                        item.value = cssValue
                    }, 200)
                    break
                case 'js':
                    setTimeout(() => {
                        item.value = jsValue
                    }, 400)
                    break
                case 'vue':
                    setTimeout(() => {
                        item.value = vueValue
                    }, 600)
                    break
                case 'nuxt':
                    setTimeout(() => {
                        item.value = nuxtValue
                    }, 800)
                    break
            }
        })
    }

    if (progressbars.length > 0 && skillsSection) {
        observer.observe(skillsSection);
    }
    else observer.unobserve();
}