let color = {
  Violet: ["Violet", "#9400D3"],
  Indigo: ["Indigo", "#4B0082"],
  Blue: ["Blue", "#0000FF"],
  Green: ["Green", "#00FF00"],
  Yellow: ["Yellow", "#FFFF00"],
  Orange: ["Orange", "#FF7F00"],
  Red: ["Red", "#FF0000"],
};

let normal = {
  Violet: "Violet",
  Indigo: "Indigo",
  Blue: "Blue",
  Green: "Green",
  Yellow: "Yellow",
  Orange: "Orange",
  Red: "Red",
};

document.querySelectorAll(".rb1").forEach(x => {
  x.addEventListener("mouseover", () => {
    let text = x.innerText;
    x.style.backgroundColor = `${color[text][0]}`;
    x.innerText = `${color[text][1]}`;
  });
    
  x.addEventListener("mouseout", () => {
    let text = x.innerText;
    x.style.backgroundColor = `black`;
    x.innerText = `${normal[text]}`;
  });
});


