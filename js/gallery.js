$(document).ready(function () {
    $(".js_gallery_detail_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: true,
        dots: true,
        infinite: !0,
        prevArrow: '<button class="gallery-detail__btn-left btn btn--b" type="button"></button>',
        nextArrow: '<button class="gallery-detail__btn-right btn btn--b" type="button"></button>',
        customPaging: function(slider, i) {
            return '<div class="thumbnail"></div>';
        }
    }).on('afterChange', function (event, slick, currentSlide) {
        console.log('afterChange');
        showOverlayForPreview();
    });

    function showOverlayForPreview(){
        var $currentSlide = $(".slick-active");
        var id = $currentSlide.data("id");
        var $preview = $(".gallery-detail__preview[data-preview-id=" + id + "]");
        $(".gallery-detail__preview-overlay").addClass("hidden");
        $preview.find('.gallery-detail__preview-overlay').removeClass("hidden");
    }

    $(".gallery-detail__preview").on("click", function(){
        $(".gallery-detail__preview-overlay").addClass("hidden");
        $(this).find('.gallery-detail__preview-overlay').removeClass("hidden");
        var id = $(this).data("preview-id");
        var newId = id - 1;
        $(".js_gallery_detail_slider").find('.thumbnail:nth('+newId+')').trigger('click');
    });
});
