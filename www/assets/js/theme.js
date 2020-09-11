// Custome theme code

if ($('.clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn'});
}

if ($('.clean-product').length > 0) {
    /**$(window).on("load",function() {
        $('.sp-wrap').smoothproducts();
    }); **/
}

if (typeof(AOS) == "function"){
    AOS.init({
        mirror: true
    });    
}


$(window).on("load",function() {
        $('.sp-wrap').smoothproducts();
    });