
function getVals() {
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "от " + slide1 + " - " + " до " + slide2 + " ";
}

window.onload = function () {
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) { 
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}










const profile_data = document.querySelector('.profile_data');
let profile_data_inner = '';

profile_data_inner += '<p><span>Имя :</span>' + user.name + '</p>';
profile_data_inner += '<p><span>Номер :</span>' + user.phone + '</p>';
profile_data_inner += '<p><span>Email :</span>' + user.email + '</p>';
if (user.role == 'guest') {
    profile_data_inner += '<p><span>Статус :</span>Я ' + 'турист' + '</p>';
} else {
    profile_data_inner += '<p><span>Статус :</span>Я ' +  'местный' + '</p>';
}


profile_data.innerHTML = profile_data_inner;




if (user.role == 'guest') {
    document.querySelector('.profile_info .section_title').innerHTML = 'Места которые посетил';
} else {
    document.querySelector('.profile_info .section_title').innerHTML = 'Мои избранные места';
}





// menu link
let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.6;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}




let theForm = document.getElementById('theForm');

new stepsForm(theForm, {
    onSubmit: function (form) {
        // hide form
        classie.addClass(theForm.querySelector('.simform-inner'), 'hide');

        /*
        form.submit()
        or
        AJAX request (maybe show loading indicator while we don't have an answer..)
        */

        // let's just simulate something...
        let messageEl = theForm.querySelector('.final-message');
        messageEl.innerHTML = 'Спасибо за ответы, ищем друзей';
        classie.addClass(messageEl, 'show');
    }
});