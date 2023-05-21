async function onChangedCity(districtId) {
    $("#" + districtId).empty();
    var cityId = $("#cityList").val();
    const response = await fetch("/Home/GetDistrict?cityId=" + cityId);
    const jsonData = await response.json();
    if (jsonData.length > 0) {

        let defalutValue = document.createElement("option");
        defalutValue.value = "-1";
        defalutValue.innerHTML = "District";
        $("#" + districtId).append(defalutValue);

        jsonData.map((district, i) => {
            let opt = document.createElement("option");
            opt.value = district.Id;
            opt.innerHTML = district.Name;
            $("#" + districtId).append(opt);
        });
    }
}

$(function () {
    let minPrice = 75, maxPrice = 300;
    changePrice(minPrice, maxPrice);
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            changePrice(ui.values[0], ui.values[1]);
            $("#price").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
});

const changePrice = (minPrice = 75, maxPrice = 300) => {
    $("#min-price").text("$ " + minPrice);
    $("#max-price").text("$ " + maxPrice);
}


/* Initialize Swiper Favorite Projects */
var swiper = new Swiper(".home-swiper", {
    slidesPerView: 1
});
/* Initialize Swiper Favorite Projects */
var swiper = new Swiper(".projects-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    // freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        // clickable: true,
    },
    navigation: {
        nextEl: ".projects-button-next",
        prevEl: ".projects-button-prev",
    },
});

/* Initialize Swiper References */
var swiper = new Swiper(".reference-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".reference-swiper-next",
        prevEl: ".reference-swiper-prev",
    },
});

/* Initialize Swiper Satisfaction */
var swiper = new Swiper(".satisfaction-swiper", {
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".satisfaction-button-next",
        prevEl: ".satisfaction-button-prev",
    },
});