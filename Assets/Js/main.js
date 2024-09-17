document.addEventListener('DOMContentLoaded', function () {
    const words = ["Sağlık İçin", "Güvenlik İçin", "Verimlilik İçin", "Sürdürülebilirlik İçin", "Verimlilik İçin"];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    const typewriterElement = document.getElementById('changingText');
  
    function type() {
      if (currentCharIndex < words[currentWordIndex].length) {
        typewriterElement.textContent += words[currentWordIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 150);
      } else {
        setTimeout(erase, 1500);
      }
    }
  
    function erase() {
      if (currentCharIndex > 0) {
        typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
        currentCharIndex--;
        setTimeout(erase, 100);
      } else {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(type, 500);
      }
    }
  
    type();
  });
  
  
          document.addEventListener('DOMContentLoaded', function() {
              const cards = document.querySelectorAll('.application-card');
  
              const observer = new IntersectionObserver(
                  (entries, observer) => {
                      entries.forEach(entry => {
                          if (entry.isIntersecting) {
                              entry.target.classList.add('show'); // Göründüğünde sınıf ekle
                          } else {
                              entry.target.classList.remove('show'); // Görünmediğinde sınıfı kaldır
                          }
                      });
                  },
                  { threshold: 0.1 } // Kartın %10'u göründüğünde tetiklenir
              );
  
              cards.forEach(card => {
                  observer.observe(card); // Her kartı gözlemle
              });
          });
  
  
  
  
      document.addEventListener("DOMContentLoaded", function() {
        const scrollElements = document.querySelectorAll(".content p, .content ul");
  
        const elementInView = (el, dividend = 1) => {
          const elementTop = el.getBoundingClientRect().top;
  
          return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
          );
        };
  
        const displayScrollElement = (element) => {
          element.classList.add("scroll-visible");
        };
  
        const hideScrollElement = (element) => {
          element.classList.remove("scroll-visible");
        };
  
        const handleScrollAnimation = () => {
          scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
              displayScrollElement(el);
            } else {
              hideScrollElement(el);
            }
          });
        };
  
        window.addEventListener("scroll", () => {
          handleScrollAnimation();
        });
      });