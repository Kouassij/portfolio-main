//MENU MOBILE
function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
     const link = document.querySelectorAll('.navbar a');
   
    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    link.forEach(link => {
       link.addEventListener('click', () => {
            header.classList.remove('show-nav');
    
        });
        
    });
}
menuMobile(); 
//PORTFOLIO
function tabsfilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActivelinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        })
    }

    const showprojets = (elem) => {
        console.log(elem); 
        projets.forEach(projet => {


            let filter = projet.getAttribute('data-category');


            if (elem=== 'all') {
                projet.parentNode.classList.remove('hide');  
                return
            }
            console.log('lance');
            if (filter !== elem) {
                projet.parentNode.classList.add('hide');  
            } else {
                 projet.parentNode.classList.remove('hide');  
            }
        });
    }
    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            //console.log(filter);
            showprojets(filter); 
            resetActivelinks();
            elem.classList.add('active');
        });
    });
    
}

tabsfilters()

function showProjetDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
      const buttons = document.querySelectorAll('.modal__close');
    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
    });


    
   buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            hideModals();
        });
    });
    
}
showProjetDetails();