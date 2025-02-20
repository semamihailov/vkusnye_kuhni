// 'use strict'

$(function(){

    let testimonialsCarousel = $(".carousel-one"); // Используем правильный класс
    testimonialsCarousel.owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:20, //Отступ от картинок если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        dots: false,
        // dotsContainer: '#carousel-one-dots',
        items: 1, // Количество отображаемых элементов
    });

    $(".testimonialsCarousel-next").click(function () {
        testimonialsCarousel.trigger('next.owl.carousel', [600]);
    });
    $(".testimonialsCarousel-prev").click(function () {
        testimonialsCarousel.trigger('prev.owl.carousel', [600]);
    });
    $('.carousel-one-dot').click(function () {
        testimonialsCarousel.trigger('to.owl.carousel', [$(this).index(), 600]);
    });



    $("[data-carousel]").each(function () {
        let carousel = $(this);
        carousel.owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            autoplay: false,
            dots: false,
            items: 1,
        });

        let carouselId = carousel.data("carousel");

        $("[data-next='" + carouselId + "']").click(function () {
            carousel.trigger('next.owl.carousel', [600]);
        });

        $("[data-prev='" + carouselId + "']").click(function () {
            carousel.trigger('prev.owl.carousel', [600]);
        });
    });










    $( "#accordion" ).accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });

    $("#goTop").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // Прокрутка с использованием data-scroll
    function scrollToSection(event, sectionId) {
        event.preventDefault();
        const section = $('#' + sectionId);

        // Прокрутить секцию в видимую область
        section[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            top: -30
        });

        const offset = 0;
        const scrollPosition = section[0].getBoundingClientRect().top + $(window).scrollTop() - offset;

        $('html, body').animate({
            scrollTop: scrollPosition
        }, 600);
    }

    function scrollToSectionCenter(event, sectionId) {
        event.preventDefault();
        const section = $('#' + sectionId);

        section[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    // Используем общий атрибут data-scroll для всех ссылок
    $('[data-scroll]').on('click', function(event) {
        const sectionId = $(this).data('scroll');

        if ($(this).hasClass('center')) {
            scrollToSectionCenter(event, sectionId);
        } else {
            scrollToSection(event, sectionId);
        }
    });


    $(".openPopup").click(function () {
        $("#popup").addClass("show");
    })
    $("#closePopup").click(function () {
        $("#popup").removeClass("show");
    })


    function setupVideoControls(videoId, buttonId) {
        const video = document.getElementById(videoId);
        const playButton = document.getElementById(buttonId);

        // Обработчик клика на кнопку
        playButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playButton.style.display = 'none';
            }
        });

        // Обработчик клика на само видео
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Обработчик для видео: при паузе показывать кнопку
        video.addEventListener('pause', () => {
            playButton.style.display = 'flex';
        });

        // Обработчик для видео: при воспроизведении скрывать кнопку
        video.addEventListener('play', () => {
            playButton.style.display = 'none';
        });
        document.querySelector(".main-video-close").addEventListener("click", () => {
            document.querySelector('.main-video').classList.remove('show');
            document.querySelector(".main-video-open").style.display = "block";
            document.querySelector(".main-video-close").style.display = "none";
            video.pause();
        });
        document.querySelector(".main-video-open").addEventListener("click", () => {
            document.querySelector('.main-video').classList.add('show');
            document.querySelector(".main-video-close").style.display = "block";
            document.querySelector(".main-video-open").style.display = "none";
        });
        document.querySelector(".main-video-close-page").addEventListener("click", () => {
            document.querySelector('.main-video').classList.add('none');
            document.querySelector(".main-video-open-page").style.display = "block";
        });
        document.querySelector(".main-video-close-page").addEventListener("click", () => {
            document.querySelector('.main-video').classList.add('none');
            document.querySelector(".main-video-open-page").style.display = "block";
            document.querySelector(".main-video-open").style.display = "none";
            video.pause();
        });
        document.querySelector(".main-video-open-page").addEventListener("click", () => {
            document.querySelector('.main-video').classList.remove('none');
            document.querySelector('.main-video').classList.add('show');
            // document.querySelector(".main-video-open-page").style.display = "none";
        });
    }

    setupVideoControls('myVideo', 'playButton');

});