const categoriesContainer = document.getElementById("categoriesContainer");
const categoriesDiv = document.getElementById("categories");
const categoryItem = document.getElementsByClassName("category-item");
const showContentDiv = document.getElementById("showContent");
const categoryLink = document.querySelectorAll("a");
const faqElement = document.querySelectorAll(".faqElement");
const input = document.getElementById("search");
// const datasetContent = document.getElementById("datasetContent");
// const dataset = document.getElementById("dataset");

// const showHide = () => {datasetContent.classList.toggle('hide');};
// dataset.addEventListener('click', () => showHide());

search.addEventListener("input", event => {
    console.log('tirando...');
    faqElement.forEach(node => node.classList.remove("active"));
    

});

const handleClick = event => {
    // Links
    categoryLink.forEach(node => node.classList.remove("active-btn"));
    event.currentTarget.classList.add("active-btn");
    console.log('clicked: ', event.currentTarget.id);

    // Divs content
    faqElement.forEach(node => node.classList.remove("active"));
    showContentDiv.classList.add('show');
    [...faqElement].filter( faq => faq.dataset.tab === event.currentTarget.dataset.tab)[0].classList.add('active');
};

categoryLink.forEach(node => node.addEventListener('click', handleClick));
