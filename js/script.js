const contens = document.querySelectorAll('.program-line__content');
const descrAll = document.querySelectorAll('.program-line__descr');

contens.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        descrAll.forEach((d) => {
            if (d !== descr)
                d.classList.remove('active')
        })

        descr.classList.toggle('active');
    })
})