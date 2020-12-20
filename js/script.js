var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

function popupVacuna(){
	document.getElementById('Vacuna').addEventListener('click',
		function() {
			document.querySelector('.bg-modal').style.display = 'flex';
		});

	document.querySelector('.close').addEventListener('click',
		function(){
			document.querySelector('.bg-modal').style.display = 'none';
		});
}

function popupEco(){
	document.getElementById('Ecografía').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_1').style.display = 'flex';
		});

	document.querySelector('.close_1').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_1').style.display = 'none';
		});
}


function popupPe(){
	document.getElementById('Peluqueria').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_2').style.display = 'flex';
		});

	document.querySelector('.close_2').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_2').style.display = 'none';
		});
}

function popupLi(){
	document.getElementById('Limpieza').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_3').style.display = 'flex';
		});

	document.querySelector('.close_3').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_3').style.display = 'none';
		});
}

function popupRa(){
	document.getElementById('Radiografía').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_4').style.display = 'flex';
		});

	document.querySelector('.close_4').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_4').style.display = 'none';
		});
}

function popupDo(){
	document.getElementById('Domicilio').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_5').style.display = 'flex';
		});

	document.querySelector('.close_5').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_5').style.display = 'none';
		});
}

function popupEx(){
	document.getElementById('Exámenes').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_6').style.display = 'flex';
		});

	document.querySelector('.close_6').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_6').style.display = 'none';
		});
}


function popupAn(){
	document.getElementById('Ánfora').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_7').style.display = 'flex';
		});

	document.querySelector('.close_7').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_7').style.display = 'none';
		});
}

function popupFa(){
	document.getElementById('Farmacia').addEventListener('click',
		function() {
			document.querySelector('.bg-modal_8').style.display = 'flex';
		});

	document.querySelector('.close_8').addEventListener('click',
		function(){
			document.querySelector('.bg-modal_8').style.display = 'none';
		});
}



