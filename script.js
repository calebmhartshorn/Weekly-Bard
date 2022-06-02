var landingPage;
var aboutPage;
var explorePage;
var currentPage;

// Init
window.onload = function() {
    landingPage = document.getElementById("landing-page");
    aboutPage = document.getElementById("about-page");
    explorePage = document.getElementById("explore-page");

    aboutPage.style.transform = "translateX(-100%)";
    explorePage.style.transform = "translateX(-100%)";

    currentPage = landingPage;
};

function slideInLandingPage() {
    if (currentPage == landingPage) {
        return;
    }
    landingPage.style.animation = "0.5s fadeInLeft forwards";
    currentPage.style.animation = "0.5s fadeOutRight forwards";
    currentPage = landingPage;
}

function slideInAboutPage() {
    if (currentPage == aboutPage) {
        return;
    }
    if (currentPage == landingPage) {
        aboutPage.style.animation = "0.5s fadeInRight forwards";
        currentPage.style.animation = "0.5s fadeOutLeft forwards";
    } else {
        aboutPage.style.animation = "0.5s fadeInLeft forwards";
        currentPage.style.animation = "0.5s fadeOutRight forwards";
    }
    currentPage = aboutPage;
}

function slideInExplorePage() {
    if (currentPage == explorePage) {
        return;
    }
    explorePage.style.animation = "0.5s fadeInRight forwards";
    currentPage.style.animation = "0.5s fadeOutLeft forwards";
    currentPage = explorePage;
}