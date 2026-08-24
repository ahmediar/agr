const AUTOBOTS = [
  {
    id: "optimus",
    name: "OPTIMUS PRIME",
    aka: "Оптимус Прайм",
    role: "command",
    roleLabel: "Командование",
    alt: "Тягач",
    weapon: "Энергонный топор",
    code: "UNIT-01",
    img: "images/optimus.png",
    bio: "Лидер автоботов. Держит строй, когда остальные уже сомневаются. Свобода для него — не лозунг, а приказ, который он готов выполнить первым."
  },
  {
    id: "bumblebee",
    name: "BUMBLEBEE",
    aka: "Бамблби",
    role: "scout",
    roleLabel: "Разведка",
    alt: "Спорткомпакт",
    weapon: "Плазменные бластеры",
    code: "UNIT-B7",
    img: "images/bumblebee.png",
    bio: "Самый быстрый глаз команды. Мал, ярок и всегда оказывается там, где враг меньше всего ждёт гостя в жёлтой броне."
  },
  {
    id: "ironhide",
    name: "IRONHIDE",
    aka: "Айронхайд",
    role: "combat",
    roleLabel: "Бой",
    alt: "Броневик",
    weapon: "Тяжёлые пушки",
    code: "UNIT-IH",
    img: "images/ironhide.png",
    bio: "Живой щит автоботов. Говорит мало, стреляет точно. Если Айронхайд стоит между тобой и огнём — считай, что прикрытие уже есть."
  },
  {
    id: "ratchet",
    name: "RATCHET",
    aka: "Рэтчет",
    role: "support",
    roleLabel: "Поддержка",
    alt: "Медэвак",
    weapon: "Лазеры-скальпели",
    code: "UNIT-MD",
    img: "images/ratchet.png",
    bio: "Главный медик. Ворочает энергонные жилы так же спокойно, как спорит с Праймом. Без него ангар давно бы опустел."
  },
  {
    id: "jazz",
    name: "JAZZ",
    aka: "Джазз",
    role: "scout",
    roleLabel: "Разведка",
    alt: "Спорткупе",
    weapon: "Звуковой импульс",
    code: "UNIT-JZ",
    img: "images/jazz.png",
    bio: "Стиль и скорость в одном корпусе. Ведёт спецоперации в городе так, будто это сцена, а десептиконы — плохая разогревающая группа."
  },
  {
    id: "sideswipe",
    name: "SIDESWIPE",
    aka: "Сайдсвайп",
    role: "combat",
    roleLabel: "Бой",
    alt: "Суперкар",
    weapon: "Энергонные клинки",
    code: "UNIT-SW",
    img: "images/sideswipe.png",
    bio: "Дуэлянт ближнего боя. Режет воздух быстрее, чем враг успевает прицелиться, и всегда оставляет себе последний эффектный разворот."
  },
  {
    id: "arcee",
    name: "ARCEE",
    aka: "Арси",
    role: "combat",
    roleLabel: "Бой",
    alt: "Мотоцикл",
    weapon: "Парные бластеры",
    code: "UNIT-AC",
    img: "images/arcee.png",
    bio: "Точность и манёвр. Арси заходит в бой по траектории, которую невозможно просчитать с первого взгляда — и второго тоже."
  },
  {
    id: "bulkhead",
    name: "BULKHEAD",
    aka: "Балкхэд",
    role: "combat",
    roleLabel: "Бой",
    alt: "Внедорожник",
    weapon: "Гипермолот",
    code: "UNIT-BH",
    img: "images/bulkhead.png",
    bio: "Живая стена. Ломает баррикады плечом и прикрывает напарников корпусом. Добрый характер не мешает ему крушить технику."
  },
  {
    id: "wheeljack",
    name: "WHEELJACK",
    aka: "Уилджек",
    role: "support",
    roleLabel: "Поддержка",
    alt: "Гоночный болид",
    weapon: "Экспериментальные заряды",
    code: "UNIT-WJ",
    img: "images/wheeljack.png",
    bio: "Изобретатель, от которого ангар то взрывается, то спасается. Если нужен невозможный гаджет к утру — зовите Уилджека."
  },
  {
    id: "cliffjumper",
    name: "CLIFFJUMPER",
    aka: "Клиффджампер",
    role: "scout",
    roleLabel: "Разведка",
    alt: "Маслкар",
    weapon: "Плазменные пистолеты",
    code: "UNIT-CJ",
    img: "images/cliffjumper.png",
    bio: "Горячая голова красного корпуса. Летит в разведку так, будто это штурм, и почти всегда возвращается с добытыми координатами."
  },
  {
    id: "jetfire",
    name: "JETFIRE",
    aka: "Джетфайр",
    role: "combat",
    roleLabel: "Бой",
    alt: "Истребитель",
    weapon: "Воздушные ракеты",
    code: "UNIT-JF",
    img: "images/jetfire.png",
    bio: "Воздушное прикрытие автоботов. Старый, быстрый и слишком умный, чтобы верить в простые планы. Небо — его вторая крепость."
  },
  {
    id: "hotrod",
    name: "INFERNO",
    aka: "Инферно",
    role: "support",
    roleLabel: "Поддержка",
    alt: "Пожарная машина",
    weapon: "Пенные пушки / огнемёт",
    code: "UNIT-IF",
    img: "images/hotrod.png",
    bio: "Спасатель на переднем крае. Тушит пожары, которые сами автоботы иногда устраивают, и вытаскивает раненых из-под обломков."
  }
];

const roster = document.getElementById("roster");
const dialog = document.getElementById("dossier");
let currentRole = "all";

function render() {
  const list = AUTOBOTS.filter((bot) => currentRole === "all" || bot.role === currentRole);
  document.getElementById("unit-count").textContent = String(list.length).padStart(2, "0");
  roster.innerHTML = list
    .map(
      (bot) => `
      <article class="card" data-id="${bot.id}">
        <span class="badge">${bot.code}</span>
        <img src="${bot.img}" alt="${bot.aka}">
        <div class="meta">
          <h3>${bot.name}</h3>
          <p>${bot.aka} · ${bot.roleLabel}</p>
          <div class="bar"><i></i></div>
        </div>
      </article>`
    )
    .join("");
}

function openDossier(id) {
  const bot = AUTOBOTS.find((item) => item.id === id);
  if (!bot) return;
  document.getElementById("d-img").src = bot.img;
  document.getElementById("d-img").alt = bot.aka;
  document.getElementById("d-code").textContent = bot.code;
  document.getElementById("d-name").textContent = bot.name;
  document.getElementById("d-aka").textContent = bot.aka;
  document.getElementById("d-role").textContent = bot.roleLabel;
  document.getElementById("d-alt").textContent = bot.alt;
  document.getElementById("d-weapon").textContent = bot.weapon;
  document.getElementById("d-bio").textContent = bot.bio;
  dialog.showModal();
}

roster.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (card) openDossier(card.dataset.id);
});

document.querySelector(".close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("is-on"));
    chip.classList.add("is-on");
    currentRole = chip.dataset.role;
    render();
  });
});

render();
