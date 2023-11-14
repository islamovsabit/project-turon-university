// const lang = document.querySelector('.dropdown-btn')
// const dropLang = document.querySelector('.dropdown-content')
// const dropBtn = document.getElementById('dropBtn')
// const DropContentTwo = document.getElementById('DropContentTwo')
// const dropdown = document.getElementById('dropdown-lang-btn')
// const dropdown_btn_one = document.getElementById('dropdown-btn-one')
// const dropdown_content_one = document.getElementById('dropdown_content_one')


// dropdown_btn_one.addEventListener('click', () => {
//     dropdown_content_one.classList.toggle('active')
//     DropContentTwo.classList.remove('active')
//     dropLang.classList.remove('active')
// })

// lang.addEventListener('click', function (event) {
//     event.preventDefault()
//     dropLang.classList.toggle('active')
//     DropContentTwo.classList.remove('active')
//     dropdown_content_one.classList.remove('active')
// })

// dropBtn.addEventListener('click', () => {
//     DropContentTwo.classList.toggle('active')
//     dropLang.classList.remove('active')
//     dropdown_content_one.classList.remove('active')
// })
// dropdown.addEventListener('click', (e) => {
//     e.preventDefault()
// })





// copy code started
// const media_link = document.querySelectorAll('.media_link')
// const media_btn = document.querySelector('.media_btn')
// const media_menu = document.querySelector('.media_menu')
// const nav_open = document.querySelector('.nav_open-btn')

// for (let i = 0; i < media_link.length; i++) {
//     setTimeout(() => {
//         media_link[i].addEventListener('click', function () {
//             media_link.forEach(d => d.classList.remove('active'))
//             this.classList.add('active')
//         })
//     }, 100);
// }
// media_btn.addEventListener("click", () => {
//     media_menu.classList.remove("active");
// })
// nav_open.addEventListener("click", () => {
//     media_menu.classList.add("active");
// })
// // copy code end



// let ab = document.querySelector('.ab')
// let two = document.querySelector('.media_list-two')
// ab.addEventListener('click', function () {
//     two.classList.toggle('active')
// })

// let doc = document.querySelector('.doc')
// let three = document.getElementById('media_list-two')
// doc.addEventListener('click', function () {
//     three.classList.toggle('active')
// })

// // hujjat html

// const disabled_btn = document.querySelector(".document-send-information")

// const window_model = document.querySelector('.document-release')
// const window_model_id = document.getElementById('release')

// const close_window = document.querySelector('.document-check-btn')

// var input_1 = document.getElementById("input_1")
// var input_2 = document.getElementById("input_2")
// var input_3 = document.getElementById("input_3")
// var input_4 = document.getElementById("input_4")
// var input_5 = document.getElementById("input_5")
// var input_6 = document.getElementById("input_6")
// var input_7 = document.getElementById("input_7")
// var input_8 = document.getElementById("input_8")
// var input_9 = document.getElementById("input_9")


// disabled_btn.addEventListener("click", () => {
//     window_model.classList.add('active')
// })
// close_window.addEventListener("click", () => {
//     window_model.classList.remove('active')
// })







const media_nav = document.querySelectorAll('.header-media-nav-content-item-link');
const header_media_item = document.querySelectorAll('.header-media-nav-content-item');

media_nav.forEach(element => {
    element.addEventListener('click', (e) => {
        const container = e.target.closest('.header-media-nav-content-item');
        const ul_target = container.querySelector('.header-media-nav-next-list');
        const ul_enclosing = container.querySelector('.header-media-nav-next-list-enclosing');
        const icon_if = container.querySelector('iconify-icon');

        header_media_item.forEach(item => {
            item.classList.remove('active');
        });

        if (ul_enclosing !== null) {
            const currentHeight = ul_enclosing.offsetHeight;
            const targetHeight = ul_target.offsetHeight + 20;
            icon_if.classList.toggle('active');
            ul_enclosing.style.height = '0';
            ul_enclosing.offsetHeight;
            ul_enclosing.style.height = currentHeight === targetHeight ? '0' : targetHeight + 'px';
        }
    });
});



// block

// Call the startCountUp function when the document is loaded
// document.addEventListener('DOMContentLoaded', startCountUp);

// block



window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var content_two = document.getElementById("content_two");
    var lang_offset = document.getElementById('lang_offset');
    var one_offset = document.getElementById('one_offset');
    var spare = document.getElementById("spare");

    var rect = content_two.getBoundingClientRect();
    var scrollElement = rect.top + lang_offset.offsetHeight + one_offset.offsetHeight;

    if (document.body.scrollTop > scrollElement || document.documentElement.scrollTop > scrollElement) {
        content_two.classList.add("active");
        spare.classList.add("active");
    } else {
        content_two.classList.remove("active");
        spare.classList.remove("active");
    }
}

const link_text = document.querySelectorAll('.header-nav-content-two-blog-addition-link');
link_text.forEach(element => {
    let text = element.textContent;
    let modifiedText = text.split(" ").join("&nbsp;");
    element.innerHTML = modifiedText;
});



const open_menu = document.querySelector('.nav-open-menu')
const menu = document.querySelector('.header-media-nav');
const close_menu = document.querySelector('.header-media-nav-content-title-icon')

open_menu.addEventListener('click', (e) => {
    console.log();
    menu.classList.add('active')
})
close_menu.addEventListener('click', (e) => {
    console.log();
    menu.classList.remove('active')
})





// document.addEventListener("DOMContentLoaded", function() {
//     // DOM yuklandi
  
//     var countElement = document.querySelector('.count');
//     var targetCount = 2022;
//     var currentCount = 0;
//     var speed = 1; // O'sish tezligi
  
//     function updateCount() {
//       if (currentCount < targetCount) {
//         currentCount += 1;
//         countElement.textContent = currentCount;
//         setTimeout(updateCount, speed);
//       }
//     }
  
//     updateCount();
//   });


