document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', function () {
      // Mevcut açık olan soruyu kapatmak için tüm cevapları gizleriz
      const isActive = this.classList.contains('active');
      document.querySelectorAll('.question').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.answer').classList.add('d-none');
        item.querySelector('.toggle-icon').textContent = '+';
      });
  
      // Eğer tıklanan öğe aktif değilse açılır
      if (!isActive) {
        this.classList.add('active');
        this.querySelector('.answer').classList.remove('d-none');
        this.querySelector('.toggle-icon').textContent = '−'; // '+' işareti '−' işaretine dönüşür
      }
    });
  });
  