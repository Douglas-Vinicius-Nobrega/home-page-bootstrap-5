jQuery(document).ready(function($) { // Verificar, quando o documento estiver pronto, é que a gente vai executas, os nossos códigos 

    // fixed header
    window.onscroll = function() { //verificar se está rolando a página
        if(window.pageYOffset > 140 ) { // se o tanto que a gente rolou, for maior que 140px
            $('#header').addClass('active') // se for maior, vamos pegar o 'header' e vai adiciona uma classe nele
        } else {
            $('#header').removeClass('active') // se retorna para o topo da página, remove a classe
        }
    }

    // ISOTOPE
    let btns = $("#servicos .button-group button") // adicionando todos os button do serviços

    btns.click(function (e) {
    $("#servicos .button-group button").removeClass("active") // quando eu clicar em qualquer um dos botoês, quero remover a class active
    e.target.classList.add("active") //adicionando no que eu cliquei, a classe active
    // quando eu clicar no botão, que não seja a que esteja ativada, eu retiro a class active dela e adiciona na que eu cliquei

    let selector = $(e.target).attr("data-filter") //adicionando o atributo o data filter
    $("#servicos .grid").isotope({ // quando chamar a funtion, dentro de serviços, onde tiver a grid, vamos fazer um isotope (chamar o método da biblitoeca que a gente baixo)
        filter: selector,
        })
    })

    $(window).on("load", function() { // quando on load carrega, vou chamar uma function
        $("#servicos .grid").isotope ({ // quando chamar a function, vou aplicar um isotope nele
            filter: "*", // aplicando o filtro para "Todos"
        })
    })


    // MAGNIFY
    $(".grid .popup-link").magnificPopup({ //dentro da grid, quando a gente clica em um link com a class popup-link, eu quero aplicar o método magnifiPopup
        type:"image",
        gallery: { // para conseguir passar as img, apertado no teclado, ou clicando nas setas, que ira aparecer na tela, quando clicado encima da img
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%", 
        },
    })

    // OWL 
    $(".owl-carousel").owlCarousel({ // vai pegar o class owl-carousel e vai aplicar o owlCarousel nele, que vai transforma em carrosel 
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 2,
          },
        },
      });
})

