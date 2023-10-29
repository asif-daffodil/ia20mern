const tabHeaders = document.querySelectorAll(".tab-headers")[0];
const tabDetails = document.querySelectorAll(".tab-details")[0];
const tabHeadersChildren = tabHeaders.children;
const tabDetailsChildren = tabDetails.children;
const tabHeadersArray = Array.from(tabHeadersChildren);
const tabDetailsArray = Array.from(tabDetailsChildren);



tabHeadersArray.map((header) => {
    header.addEventListener("click", (e) => {
        const clickedIndex = tabHeadersArray.indexOf(e.target);
        for (let i = 0; i < tabHeadersArray.length; i++) {
            if (i === clickedIndex) {
                tabHeadersArray[i].classList.add("active");
                tabDetailsArray[i].classList.add("active");
            } else {
                tabHeadersArray[i].classList.remove("active");
                tabDetailsArray[i].classList.remove("active");
            }
        }
    });
});