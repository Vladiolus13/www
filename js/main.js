// Header 

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 1){
        header.classList.add('header_active');
    } else{
        header.classList.remove('header_active');
    }
}

// Burger 

$(document).ready(function() {
    $(".js-block-title").each (function () {
        if ($(this).text().length > 107)
        $(this).text($(this).text().substring(0,107) + '...');
    });
    console.log($('.js-block-title').text().length)
	$('.burger__menu').click(function(event) {
		$('.burger__menu,.header__menu').toggleClass('active');
	})
})

 // Input 
const labelList = document.querySelectorAll('.form__label')
        labelList.forEach(label => label.addEventListener('click', function() {
          label.parentElement.children[0].focus()
}))