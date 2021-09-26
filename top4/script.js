const data = {
  mainTitle: "Bing travel",
  cardContents: [
    {
      name: "Okawa",
      imageLink:
        "https://images.unsplash.com/photo-1616989874243-5460a60f3a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Hampi",
      imageLink:
        "https://images.unsplash.com/photo-1613064511315-6e20e9104ed9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Port Louis",
      imageLink:
        "https://images.unsplash.com/photo-1601747714585-05ec8963751a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Zurich",
      imageLink:
        "https://images.unsplash.com/photo-1545079968-1feb95494244?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ],
  userData: { name: "Abhinav Pandey", tagLine: "Finally entered to the the web universe!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
