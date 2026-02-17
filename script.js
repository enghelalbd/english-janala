const loadlessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

displayLesson = (lessons) => {
  const levelcontainer = document.getElementById("level-container");
  levelcontainer.innerHTML = "";

  for (const lesson of lessons) {
    const btndiv = document.createElement("div");
    btndiv.innerHTML = `
    <button class="btn btn-primary w-full mb-4">${lesson.level_no}
    . ${lesson.lessonName}
    
    </button>
    `;
    levelcontainer.appendChild(btndiv);
  }
};
loadlessons();
