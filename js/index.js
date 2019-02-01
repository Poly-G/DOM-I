const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// IMAGES
const headerImg = document.querySelector(".cta img");
headerImg.src = siteContent["cta"]["img-src"];

const midImg = document.querySelector(".middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// NAV
const nav = document.querySelectorAll('nav a');
nav[0].innerText = siteContent["nav"]["nav-item-1"];
nav[1].innerText = siteContent["nav"]["nav-item-2"];
nav[2].innerText = siteContent["nav"]["nav-item-3"];
nav[3].innerText = siteContent["nav"]["nav-item-4"];
nav[4].innerText = siteContent["nav"]["nav-item-5"];
nav[5].innerText = siteContent["nav"]["nav-item-6"];


// CTA
const h1 = document.querySelector('.cta h1');
h1.innerHTML = 'Dom <br> Is <br> Awesome';

const button = document.querySelector('.cta button')
button.innerText = siteContent['cta']['button'];

// MAIN CONTENT
const mainContentTopH4 = document.querySelectorAll('.top-content .text-content h4');
mainContentTopH4[0].innerHTML = siteContent['main-content']['features-h4'];
mainContentTopH4[1].innerHTML = siteContent['main-content']['about-h4'];

const mainContentTopP = document.querySelectorAll('.top-content .text-content p');
mainContentTopP[0].innerHTML = siteContent['main-content']['features-content'];
mainContentTopP[1].innerHTML = siteContent['main-content']['about-content'];

const mainContentBottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
mainContentBottomH4[0].innerHTML = siteContent['main-content']['services-h4'];
mainContentBottomH4[1].innerHTML = siteContent['main-content']['product-h4'];
mainContentBottomH4[2].innerHTML = siteContent['main-content']['vision-h4'];

const mainContentBottomP = document.querySelectorAll('.bottom-content .text-content p');
mainContentBottomP[0].innerHTML = siteContent['main-content']['services-content'];
mainContentBottomP[1].innerHTML = siteContent['main-content']['product-content'];
mainContentBottomP[2].innerHTML = siteContent['main-content']['vision-content'];


// CONTACT
let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent["contact"]["contact-h4"];
let contact = document.querySelectorAll('.contact p');
contact[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA'
contact[1].innerText = siteContent["contact"]["phone"];
contact[2].innerText = siteContent["contact"]["email"];

// FOOTER
let footer = document.querySelector('footer p');
footer.innerText = siteContent["footer"]["copyright"];