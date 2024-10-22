document.getElementById('toggleButton').addEventListener('click', function() {
    const image = document.getElementById('image');
    const video = document.getElementById('video');
    const overlayText = document.getElementById('overlayText');

    // Resim sabit kalacak
    image.style.opacity = 1; // Resim görünür kalacak
    video.style.display = 'block'; // Videoyu görünür yap
    video.classList.add('show');   // Fade-in ile görünür yap
    video.style.opacity = 0; // Başlangıçta görünmez

    // Butonu kaybet
    this.style.display = 'none'; // Butonu gizle

    // 1 saniye sonra video görünür olacak
    setTimeout(function() {
        video.style.opacity = 1; // Video görünür
        video.play(); // Video oynatılacak

        // 6. saniyede yazıyı göster
        setTimeout(function() {
            typeWriterEffect("Dünyamız temizken daha güzel!", overlayText);
        }, 6000); // 6000 milisaniye = 6 saniye
    }, 1000); // 1 saniyelik süre
});

// Yazı karakterleri tek tek yazma efekti
function typeWriterEffect(text, element) {
    element.innerHTML = ''; // Önceki metni temizle
    let i = 0;
    const typingSpeed = 91; // Karakter yazma hızı %40 hızlandırılmış (ms)

    element.style.opacity = '1'; // Yazı görünür olsun

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Karakteri yaz
            i++;
            setTimeout(type, typingSpeed); // Her karakter için bekleme süresi
        }
    }

    type(); // Fonksiyonu çağır
}

// Video bittiğinde duraklat
document.getElementById('video').addEventListener('ended', function() {
    this.pause(); // Videoyu duraklat
    this.currentTime = this.duration; // Videoyu sonuna getir
});

// Video oynatılmaya başladığında overlay'ı gizle
video.addEventListener('play', function() {
    document.getElementById('overlayText').style.opacity = '0'; // Overlay yazısını gizle
});

// Video durduğunda overlay'ı göster
video.addEventListener('pause', function() {
    document.getElementById('overlayText').style.opacity = '1'; // Overlay yazısını göster
});

// Fare videonun üzerine geldiğinde overlay'ı gizle
video.addEventListener('mouseover', function() {
    document.getElementById('overlayText').style.opacity = '0'; // Overlay yazısını gizle
});

// Fare videonun dışına çıktığında overlay'ı göster
video.addEventListener('mouseout', function() {
    if (this.paused) {
        document.getElementById('overlayText').style.opacity = '1'; // Overlay yazısını göster
    }
});
