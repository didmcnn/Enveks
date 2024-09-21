
//Animasyon
document.addEventListener("DOMContentLoaded", function() {
	// Intersection Observer ayarları
	let observerOptions = {
	  root: null,
	  rootMargin: "0px",
	  threshold: 0.2 // Elemanın %20'si görünür olduğunda tetiklenir
	};
  
	// Animasyon uygulanacak elementleri seç
	let elements = document.querySelectorAll(".animate-on-scroll");
  
	// Elementler görünür olduğunda animasyonu tetikleyen gözlemci
	let observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  // Eleman görünüyorsa 'animated' sınıfını ekle
		  entry.target.classList.add("animated");
		  entry.target.classList.remove("fade-out"); // Kaybolma sınıfını kaldır
		} else {
		  // Eleman görünmüyorsa 'fade-out' sınıfını ekle
		  if (entry.target.classList.contains("animated")) {
			entry.target.classList.add("fade-out");
			entry.target.classList.remove("animated"); // Görünme sınıfını kaldır
		  }
		}
	  });
	}, observerOptions);
  
	// Her bir elementi gözlemle
	elements.forEach(el => {
	  observer.observe(el);
	});
  });
//End Animasyon 


//Scroll Down JS
document.getElementById('scroll-down').addEventListener('click', function() {
	document.getElementById('second-section').scrollIntoView({
	  behavior: 'smooth'
	});
  });
//End Scroll Down JS


//S.S.S
document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', function () {
      const isActive = this.classList.contains('active');
      document.querySelectorAll('.question').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.answer').classList.add('d-none');
        item.querySelector('.toggle-icon').textContent = '+';
      });
  
      if (!isActive) {
        this.classList.add('active');
        this.querySelector('.answer').classList.remove('d-none');
        this.querySelector('.toggle-icon').textContent = '−'; // '+' işareti '−' işaretine dönüşür
      }
    });
  });
//End S.S.S


//Sol ALt Köşe Butonu
document.getElementById('floating-trigger').addEventListener('click', function() {
	var floatingArea = document.querySelector('.floating-circle-area');
	var isOpen = floatingArea.getAttribute('data-open');
  
	if (isOpen === 'no') {
	  floatingArea.setAttribute('data-open', 'yes');
	} else {
	  floatingArea.setAttribute('data-open', 'no');
	}
  });
//End Sol ALt Köşe Butonu



//Sağ Alt Köşe Butonu
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.onscroll = function() {
	var scrollToTopBtn = document.getElementById('scrollToTopBtn');
	if (document.documentElement.scrollTop > 100) {
	  scrollToTopBtn.style.display = 'block';
	} else {
	  scrollToTopBtn.style.display = 'none';
	}
  };
//EndSağ Alt Köşe Butonu