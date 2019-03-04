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
const logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const mainNav = document.querySelector('nav');

const navItem = document.querySelectorAll('nav a');
navItem[0].textContent = 'Home';
navItem[1].textContent = 'Product';
navItem[2].textContent = 'Vision';
navItem[3].textContent = 'Features';
navItem[4].textContent = 'About';
navItem[5].textContent = 'Contact';
navItem.forEach(function(currentValue) {
  currentValue.style.color = 'green';
});

const newNavItem = document.createElement('a');
newNavItem.textContent = 'Blog';
newNavItem.style.color = 'green';

const firstNavItem = document.createElement('a');
firstNavItem.textContent = 'Start!';
firstNavItem.style.color = 'green';

mainNav.appendChild(newNavItem);
mainNav.prepend(firstNavItem);

const headerImg = document.querySelector("#cta-img");
headerImg.src = siteContent['cta']['img-src'];

const mainH1 = document.querySelector('h1');
mainH1.textContent = 'DOM is Awesome';

const btn = document.querySelector('button');
btn.textContent = 'Get Started';

const contentHead = document.querySelectorAll('h4');
contentHead[0].textContent = siteContent['main-content']['features-h4'];
contentHead[1].textContent = siteContent['main-content']['about-h4'];
contentHead[2].textContent = siteContent['main-content']['services-h4'];
contentHead[3].textContent = siteContent['main-content']['product-h4'];
contentHead[4].textContent = siteContent['main-content']['vision-h4'];

const content = document.querySelectorAll('.main-content p');
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['services-content'];
content[3].textContent = siteContent['main-content']['product-content'];
content[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

const footerInfo = document.querySelector('footer p');
footerInfo.textContent = siteContent['footer']['copyright'];