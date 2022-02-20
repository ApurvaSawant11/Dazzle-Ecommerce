// -------------------navbar-----------------
const navbarSearchIcon = document.querySelector('.navbar-search-icon');
const searchbarClose = document.querySelector('.searchbar-close-icon');
const navbarSearchbar = document.querySelector('.navbar-searchbar')

navbarSearchIcon.addEventListener('click', () => {
    navbarSearchbar.classList.toggle('show')
})

searchbarClose.addEventListener('click', () => {
    navbarSearchbar.classList.remove('show')
})

// -----------------navbar hamburger-------------

const myHamburger = document.querySelector(".myhamburger");
const subNav = document.querySelector(".sub-navigation");

myHamburger.addEventListener('click', () => {
    subNav.classList.toggle("nav-drawer")

})

// -----------------product-----------
const rangeInput = document.querySelectorAll(".range"),
    inputField = document.querySelectorAll(".input-field"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

inputField.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(inputField[0].value);
        let maxPrice = parseInt(inputField[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "min-field") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "min-range") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            inputField[0].value = minVal;
            inputField[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// --------------------product responsiveness----------------
const filterBtn = document.querySelector(".filter-btn");
const filterBar = document.querySelector(".filter-bar");
const filterClose = document.querySelector('.fa-x');
const addFilterBtn = document.querySelector('.add-filter-btn');
const sortBtn = document.querySelector('.sort-btn');
const dropdownContent = document.querySelector('.dropdown-content')

if (filterBtn) {
    const filterToggle = () => {
        filterBar.classList.toggle("filter-drawer")
    }
    filterBtn.addEventListener("click", () => {
        filterToggle();
    })

    filterClose.addEventListener('click', () => {
        filterToggle()
    })

    addFilterBtn.addEventListener('click', () => {
        filterToggle()
    })

    sortBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle("show-none")
    })
}

// -----------------forgot password--------------

const sendEmailBtn = document.querySelector('.send-email-btn');
const sendEmailDiv = document.querySelector('.send-email-div');
const changePwdDiv = document.querySelector('.change-pwd-div');

if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', () => {
        sendEmailDiv.style.display = "none";
        changePwdDiv.style.display = "block";
    })
}
// -----------------User Profile-------------------

const asideLink = document.querySelectorAll(".aside-link");
const profileSection = document.querySelector(".profile-section")
const addressSection = document.querySelector(".address-section")
const profileBtn = document.querySelector(".profile-btn");
const addressBtn = document.querySelector(".address-btn");

if (asideLink && addressBtn && profileBtn) {
    asideLink.forEach((link) => {
        link.addEventListener("click", () => {
            asideLink.forEach((link2) => {
                link2.classList.remove("active");
            });
            link.classList.add("active");
        });
    });

    addressBtn.addEventListener("click", () => {
        profileSection.style.display = "none"
        addressSection.style.display = "block";
    })

    profileBtn.addEventListener("click", () => {
        profileSection.style.display = "block"
        addressSection.style.display = "none";
    })
}