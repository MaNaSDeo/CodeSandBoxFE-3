import teamsData from "./data.js";
// console.log(teamsData);

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

const teamPillsContainer = document.getElementById(teamPillsContainerId);
const teamContentContainer = document.getElementById(teamContentContainerId);

// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {
  teamsData.forEach((element) => {
    const pillDiv = document.createElement("div");
    pillDiv.innerHTML = `
      <div class="card m-2">
        <div id="${element.id}" class="card-body">${element.name}</div>
      </div>
    `;
    teamPillsContainer.appendChild(pillDiv);
  });
}

displayTeamPills(teamsData);

const displayTeamContent = (details) => {
  // console.log(details.images);

  const carouselTeam = document.createElement("div");
  carouselTeam.setAttribute("id", `carousel_${details.id}`);
  carouselTeam.setAttribute("data-bs-ride", "carousel");
  carouselTeam.className = "carousel slide";

  const carouselInnerDiv = document.createElement("div");
  carouselInnerDiv.className = "carousel-inner";

  let imageArray = details.images;

  imageArray.forEach((element, index) => {
    const carouselItemDiv = document.createElement("div");

    if (index === 0) {
      carouselItemDiv.className = "carousel-item active";

      const imageDiv = document.createElement("img");
      imageDiv.setAttribute("src", element);
      imageDiv.className = "d-block w-100";

      carouselItemDiv.appendChild(imageDiv);
    } else {
      carouselItemDiv.className = "carousel-item";

      const imageDiv = document.createElement("img");
      imageDiv.setAttribute("src", element);
      imageDiv.className = "d-block w-100";

      carouselItemDiv.appendChild(imageDiv);
    }
    carouselInnerDiv.appendChild(carouselItemDiv);
  });

  const carouselButtonPrev = document.createElement("button");
  carouselButtonPrev.className = "carousel-control-prev";
  carouselButtonPrev.setAttribute("type", "button");
  carouselButtonPrev.setAttribute("data-bs-target", `#carousel_${details.id}`);
  carouselButtonPrev.setAttribute("data-bs-slide", "prev");
  carouselButtonPrev.innerHTML = `
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>  
  `;

  const carouselButtonNext = document.createElement("button");
  carouselButtonNext.className = "carousel-control-next";
  carouselButtonNext.setAttribute("type", "button");
  carouselButtonNext.setAttribute("data-bs-target", `#carousel_${details.id}`);
  carouselButtonNext.setAttribute("data-bs-slide", "next");
  carouselButtonNext.innerHTML = `
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>  
  `;

  //Appending
  carouselTeam.appendChild(carouselInnerDiv);
  carouselTeam.appendChild(carouselButtonPrev);
  carouselTeam.appendChild(carouselButtonNext);

  teamContentContainer.appendChild(carouselTeam);
};

// displayTeamContent(teamsData[0]);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent
  // console.log(e.target);

  teamContentContainer.innerHTML = "";
  // if (e.target.id === "mun") {
  //   displayTeamContent(teamsData[0]);
  // } else if (e.target.id === "psg") {
  //   displayTeamContent(teamsData[1]);
  // } else if (e.target.id === "rm") {
  //   displayTeamContent(teamsData[2]);
  // }

  // const clickedTeam = teamsData.filter((team) => team.id === e.target.id)[0]
  const clickedTeam = teamsData.find((team) => team.id === e.target.id);
  if (clickedTeam) {
    displayTeamContent(clickedTeam);
  }
});
