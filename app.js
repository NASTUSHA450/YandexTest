const chessBtn = document.querySelector("#chessBtn");
const stepsBtn = document.querySelector("#stepsBtn");
const chessBlock = document.querySelector("#supportChess");
const stepsBlock = document.querySelector("#steps");

function scrollToBlock(button, block) {
  button.addEventListener("click", () => {
    if (block) {
      window.scrollTo({
        top: block.offsetTop,
        behavior: "smooth",
      });
    }
  });
}
scrollToBlock(chessBtn, chessBlock);
scrollToBlock(stepsBtn, stepsBlock);
const membersArea = document.querySelector("#members .carousel-content");
const stepsTable = document.querySelector("#steps table #stepsTableBody");
const stepsCarousel = document.querySelector("#steps .carousel-content");
const chessTableBlock = document.querySelector("#chessTable");

console.log(chessTableBlock);
const members = [
  { name: "Хозе-Рауль Капабланка", desc: "Чемпион мира по шахматам" },
  { name: "Эммануил Ласкер", desc: "Чемпион мира по шахматам" },
  { name: "Александр Алехин", desc: "Чемпион мира по шахматам" },
  { name: "Арон Нимцович", desc: "Чемпион мира по шахматам" },
  { name: "Рихард Рети", desc: "Чемпион мира по шахматам" },
  { name: "Остап Бендер", desc: "Гроссмейстер" },
];
const steps = [
  "Строительство железнодорожной магистрали Москва-Васюки",
  "Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов",
  "Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет",
  "Строительство дворца для турнира",
  "Размещение гаражей для гостевого автотранспорта",
  "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
  "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн",
];
const chessTable = [
  { th: "Место проведения", td: "Клуб «Картонажник»" },
  { th: "Дата и время мероприятия", td: "22 июня 1927 г. в 18:00" },
  { th: "Стоимость входных билетов", td: "20 коп." },
  { th: "Плата за игру", td: "50 коп." },
  {
    th: "Взнос на телеграммы",
    td: `<s><span>100руб. <span></s>21 руб. 16 коп.`,
  },
];
function returnChessTable(values) {
  return values
    .map(
      (value) => `
  <div class="chess-row">
    <p>${value.th}:</p>
    <p class="chess-col">${value.td}</p>
  </div>
  `
    )
    .join("");
}
function returnCards(valuesCards) {
  return valuesCards
    .map(
      (valuesCard) => `
  <div class="my-card">
      <img src="/YandexTest/img/avatar.jpg" alt="" />
      <p class="center">${valuesCard.name}</p>
      <p class="desc">${valuesCard.desc}</p>
      <div class="center"><button>Подробнее</button></div>
  </div>`
    )
    .join("");
}
function returnSteps(values) {
  return `<tr>
      <td>
        <div class="table-box">
          <div><div class="number">1</div></div>
          <p>
            ${values[0]}
          </p>
        </div>
      </td>
      <td>
        <div class="table-box">
          <div><div class="number">2</div></div>
          <p>
          ${values[1]}
          </p>
        </div>
      </td>
      <td rowspan="2">
        <div class="table-box">
          <div><div class="number">3</div></div>
          <p>
          ${values[2]}
          </p>
        </div>
      </td>
    </tr><tr>
    <td>
      <div class="table-box">
        <div><div class="number">4</div></div>
        <p>${values[3]}</p>
      </div>
    </td>
    <td>
      <div class="table-box">
        <div><div class="number">5</div></div>
        <p>${values[4]}</p>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="table-box">
        <div><div class="number">6</div></div>
        <p>
        ${values[5]}
        </p>
      </div>
    </td>
    <td colspan="2">
      <div class="table-box">
        <div><div class="number">7</div></div>
        <p>
        ${values[6]}
        </p>
      </div>
    </td>
  </tr>`;
}
function returnStepsCarousel(values) {
  return values
    .map((value, idx) => {
      if (idx === 0) {
        return `<div class="my-card">
      <div class="table-box">
        <div><div class="number">${idx + 1}</div></div>
        <p>
        ${value}
        </p>
      </div>
      <div class="table-box">
        <div><div class="number">${idx + 2}</div></div>
        <p>
          ${values[1]}
        </p>
      </div>
    </div>`;
      } else if (idx === 1) {
        return "";
      }
      return `<div class="my-card">
    <div class="table-box">
      <div><div class="number">${idx + 1}</div></div>
      <p>
        ${value}
      </p>
    </div>
  </div>`;
    })
    .join("");
}
membersArea.innerHTML = returnCards(members);
stepsTable.innerHTML = returnSteps(steps);
chessTableBlock.innerHTML = returnChessTable(chessTable);
stepsCarousel.innerHTML = returnStepsCarousel(steps);
class Carousel {
  constructor(element) {
    this.content = element.querySelector(".carousel-content");
    this.arrowLeft = element.querySelector(".carousel-arrow-left");
    this.arrowRight = element.querySelector(".carousel-arrow-right");
    this.dots = element.querySelector(".carousel-navigation").children;
    this.slides = element.querySelectorAll(".my-card");
    this.slideIndex = element.querySelector("#slideIndex");
    this.allSlides = element.querySelector("#allSlides");

    this.activeElement = 0;
  }

  activateElement(n) {
    console.log(n, this.slides.length);
    if (n < 0 || n >= this.slides.length) return;
    this.activeElement = n;
    if (this.slideIndex && this.allSlides) {
      this.slideIndex.innerText = n + 1;
      this.allSlides.innerText = this.slides.length;
    }
    this.content.scrollTo(
      this.content.children[n].offsetLeft - this.content.offsetLeft,
      0
    );
    for (let i = 0; i < this.dots.length; i++)
      this.dots[i].classList.toggle(
        "carousel-dot-active",
        this.activeElement === i
      );
    this.arrowLeft.classList.toggle(
      "carousel-arrow-disabled",
      this.activeElement === 0
    );
    this.arrowRight.classList.toggle(
      "carousel-arrow-disabled",
      this.activeElement === this.slides.length - 1
    );
  }

  addEventListeners() {
    for (let i = 0; i < this.dots.length; i++)
      this.dots[i].addEventListener("click", () => this.activateElement(i));
    this.arrowLeft.addEventListener("click", () =>
      this.activateElement(this.activeElement - 1)
    );
    this.arrowRight.addEventListener("click", () =>
      this.activateElement(this.activeElement + 1)
    );
  }
}

const carousels = document.getElementsByClassName("carousel");
for (const carousel of carousels) new Carousel(carousel).addEventListeners();
const avatarCarousels = document.getElementsByClassName("avatar-carousel");
for (const carousel of avatarCarousels)
  new Carousel(carousel).addEventListeners();

let runningLine = document.getElementsByClassName("runningLine")[0];
let runningLineOne = document.getElementsByClassName("runningLine")[1];

function play(element) {
  let str = element.textContent;
  let a = str.slice(1);
  let b = str.slice(0, 1);
  let newstr = a + b;
  element.textContent = newstr;
  return;
}
setInterval(play, 500, runningLine);
setInterval(play, 500, runningLineOne);
