/*
$(document).ready(function() {
    var projectsType = document.getElementsByClassName("projects__type");
    var i;
    var maxHeightType = 0;
    for (i = 0; i < projectsType.length; i++) {
        if (projectsType[i].clientHeight > maxHeightType) {
            maxHeightType = projectsType[i].clientHeight;
        }
        /!*projectsType[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });*!/
    }

    console.log('maxHeightType =', maxHeightType);

    for (i = 0; i < projectsType.length; i++) {
        projectsType[i].clientHeight = maxHeightType;
    }

    var projectsName = document.getElementsByClassName("projects__name");
    var maxHeightName = 0;
    for (i = 0; i < projectsName.length; i++) {
        if (projectsName[i].clientHeight > maxHeightName) {
            maxHeightName = projectsName[i].clientHeight;
        }
    }

    console.log('maxHeightName =', maxHeightName);

    for (i = 0; i < projectsName.length; i++) {
        projectsName[i].clientHeight = maxHeightName;
    }
});*/

$(window).on("resize", function () {
    var maxH = 0;
    $('.projects__type').each(function(){
        $(this).css('height','auto');
        if ($(this).height() > maxH) {
            maxH = $(this).height();
        }
    });

    $('.projects__type').height(maxH + 10);
    var maxH = 0;
    $('.projects__name').each(function(){
        $(this).css('height','auto');
        if ($(this).height() > maxH) {
            maxH = $(this).height();
        }
    });

    $('.projects__name').height(maxH + 10);
}).resize();

$(".js_gallery_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    arrows: !1,
    dots: !0,
    infinite: !1,
    responsive: [{breakpoint: 1101, settings: {slidesToShow: 3}}, {
        breakpoint: 851,
        settings: {slidesToShow: 3}
    }, {
        breakpoint: 780,
        settings: {slidesToShow: 2, slidesToScroll: 1, centerMode: !0, centerPadding: "50px", infinite: !0}
    }, {
        breakpoint: 551,
        settings: {slidesToShow: 1, slidesToScroll: 1, centerMode: !0, centerPadding: "90px", infinite: !0}
    }]
})
