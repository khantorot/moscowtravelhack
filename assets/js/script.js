const menu_btn = document.querySelector('.menu_btn');
const profile_btn = document.querySelector('.profile_btn');
const notification_btn = document.querySelector('.notification_btn');
const side_bar = document.querySelector('.side_bar');
const side_bar_container = document.querySelector('.side_bar_container');
const sing_out_btn = document.querySelector('.sing_out_btn');


sing_out_btn.addEventListener('click', function(e){
    if (document.documentElement.clientWidth <= 900) {
        e.preventDefault();
        side_bar_container.classList.remove('side_bar_container_show');
    }
})


menu_btn.addEventListener('click', function () {
    if (side_bar.classList.contains('side_bar_left')) {
        side_bar.classList.remove('side_bar_left');
        notification_btn.classList.remove('notification_btn_active');
        side_bar.classList.add('side_bar_right');
        this.classList.add('menu_btn_active');
    } else {
        side_bar.classList.toggle('side_bar_right');
        this.classList.toggle('menu_btn_active');
    }
    if (document.documentElement.clientWidth <= 900) {
        side_bar_container.classList.add('side_bar_container_show');
    }
});

profile_btn.addEventListener('click', function () {
    side_bar.classList.remove('side_bar_right');
    side_bar.classList.remove('side_bar_left');
    menu_btn.classList.remove('menu_btn_active');
    notification_btn.classList.add('notification_btn_active');

    if (document.documentElement.clientWidth <= 900) {
        side_bar_container.classList.add('side_bar_container_show');
    }
})

notification_btn.addEventListener('click', function (e) {
    if (side_bar.classList.contains('side_bar_right')) {
        side_bar.classList.remove('side_bar_right');
        menu_btn.classList.remove('menu_btn_active');
        side_bar.classList.add('side_bar_left');
        this.classList.add('notification_btn_active');
    } else {
        side_bar.classList.toggle('side_bar_left');
        this.classList.add('notification_btn_active');
    }

    if (document.documentElement.clientWidth <= 900) {
        side_bar_container.classList.add('side_bar_container_show');
    }
})


let user = {};

chekUser();
function chekUser() {
    if (localStorage.getItem('user') != null) {
        user = JSON.parse(localStorage.getItem('user'));
    }
}