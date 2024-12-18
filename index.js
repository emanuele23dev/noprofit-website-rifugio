document.addEventListener('DOMContentLoaded', function() {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNav',
        offset: 100
    });

    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieBanner').style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector("#home");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          homeSection.classList.add("visible");
        } else {
          homeSection.classList.remove("visible");
          // Resetta l'animazione rimuovendo e riaggiungendo l'elemento ::before
          homeSection.style.display = "none";
          setTimeout(() => {
            homeSection.style.display = "";
          }, 10);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(homeSection);
});

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieBanner').style.display = 'none';
}
