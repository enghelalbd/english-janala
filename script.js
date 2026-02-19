const loadlessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const loadLevelword = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelword(data.data));
};

const loadWorddetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  displayWorddetail(data.data);
};

const displayWorddetail = (word) => {
  console.log(word);
  const detailsBox = document.getElementById("datails-container");
  detailsBox.innerHTML = `
  <h2 class="text-2xl font-bold mb-4">${word.word}</h2>
   
   <p class="mb-2"><strong>
pronunciation:</strong> ${word.pronunciation}</p>

  <p class="mb-2"><strong>Meaning:</strong> ${word.meaning}</p>
  
  
  <p class="mb-2">
Sentance: ${word.sentence}</p>
  
  `;

  document.getElementById("my_modal_5").showModal();
};

const displayLevelword = (words) => {
  const wordcontainer = document.getElementById("word-container");
  wordcontainer.innerHTML = "";
  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = ` <div class="bg-white rounded-xl shadow-md p-5">
        <h2>${word.word}</h2>
        <p>${word.meaning}</p>
        <p>Bnagla Sentence</p>
      </div>
      <button onclick="loadWorddetail(${word.id})"  class="btn btn-primary w-full mt-4">Details</button>

  `;
    wordcontainer.appendChild(card);
  });
};

const displayLesson = (lessons) => {
  const levelcontainer = document.getElementById("level-container");
  levelcontainer.innerHTML = "";

  for (const lesson of lessons) {
    const btndiv = document.createElement("div");
    btndiv.innerHTML = `
    <button onclick="loadLevelword(${lesson.level_no}) " class="btn btn-primary w-full mb-4">${lesson.level_no}
    . ${lesson.lessonName}
    
    </button>
    `;
    levelcontainer.appendChild(btndiv);
  }
};
loadlessons();
