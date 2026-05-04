function slugifyText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getWarframeImage(name) {
  return `images/warframes/${slugifyText(name)}.png`;
}

function getFashionImage(name) {
  return `images/fashion/${slugifyText(name)}_fashion.png`;
}

function getBuildImage(name) {
  return `images/builds/${slugifyText(name)}_build.png`;
}

function getWeaponImage(warframeName, slot) {
  return `images/weapons/${slugifyText(warframeName)}_${slot}.png`;
}

function getWeaponBuildImage(warframeName, slot) {
  return `images/weapon_builds/${slugifyText(warframeName)}_${slot}_build.png`;
}

function getSpecialWeaponImage(warframeName, index) {
  return `images/special_weapons/${slugifyText(warframeName)}_special_${index + 1}.png`;
}

function getSpecialWeaponBuildImage(warframeName, index) {
  return `images/special_weapon_builds/${slugifyText(warframeName)}_special_${index + 1}_build.png`;
}

function getIncarnonImage(warframeName, slotKey, index) {
  return `images/incarnons/${slugifyText(warframeName)}_${slotKey}_incarnon_${index + 1}.png`;
}

function getCompanionImage(warframeName) {
  return `images/companions/${slugifyText(warframeName)}_compagnon.png`;
}

function getCompanionSkinImage(warframeName) {
  return `images/companions/${slugifyText(warframeName)}_compagnon_skin.png`;
}

function getCompanionWeaponImage(warframeName) {
  return `images/companions/${slugifyText(warframeName)}_arme_compagnon.png`;
}

function getCompanionBuildImage(warframeName) {
  return `images/companion_builds/${slugifyText(warframeName)}_compagnon_build.png`;
}

function getCompanionWeaponBuildImage(warframeName) {
  return `images/companion_builds/${slugifyText(warframeName)}_arme_compagnon_build.png`;
}

function createIncarnonSlots(warframeName, slotKey, count = 4) {
  return Array.from({ length: count }, (_, index) => ({
    image: getIncarnonImage(warframeName, slotKey, index),
    text: "Texte incarnon"
  }));
}

function createBuildFor(name) {
  return {
    name: `${name} Configuration`,
    infoText: "",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    fragments: [
      { key: "ecarlate", tooltip: "Informations pour fragment d'archonte" },
      { key: "ambre", tooltip: "Informations pour fragment d'archonte" },
      { key: "azur", tooltip: "Informations pour fragment d'archonte" },
      { key: "emeraude", tooltip: "Informations pour fragment d'archonte" },
      { key: "topaze", tooltip: "Informations pour fragment d'archonte" },
      { key: "violet", tooltip: "Informations pour fragment d'archonte" }
    ],

    /*
      SPECIAL WEAPONS / EXALTÉES / PROPRES À LA WARFRAME
      Mets 1, 2 ou 3 armes dans "items".
      Tu peux rename chaque arme comme tu veux.
    */
    specialWeapons: {
      enabled: false,
      title: "Armes Exaltées / Propres à la Warframe",
      items: [
        /*
        {
          name: "Nom arme spéciale",
          image: getSpecialWeaponImage(name, 0),
          buildImage: getSpecialWeaponBuildImage(name, 0)
        }
        */
      ]
    },

    weaponMode: "full",
    weaponText: "Jouer n'importe quelle arme",
    weapons: {
      principale: { name: "Nom d'arme" },
      secondaire: { name: "Nom d'arme" },
      melee: { name: "Nom d'arme" }
    },

    /*
      INCARNONS
      Pour chaque catégorie: enabled true/false
      items = 4 ou 5 cases comme tu veux
      Tu peux changer l'image et le texte de chaque case par warframe
    */
    incarnons: {
      principale: {
        enabled: false,
        title: "Incarnon Principale",
        items: createIncarnonSlots(name, "principale", 4)
      },
      secondaire: {
        enabled: false,
        title: "Incarnon Secondaire",
        items: createIncarnonSlots(name, "secondaire", 4)
      },
      melee: {
        enabled: false,
        title: "Incarnon Mêlée",
        items: createIncarnonSlots(name, "melee", 4)
      }
    },

    companionMode: "full",
    companionText: "Vous pouvez jouer n'importe quel compagnon",
    companion: {
      name: "Nom du compagnon",
      skinName: "Skin du compagnon",
      weaponName: "Nom de l'arme du compagnon"
    }
  };
}

let warframesData = [
  {
    name: "Caliban Prime",
    builds: [{
      name: "Caliban Prime Configuration",
      infoText: "",
      video: "https://www.youtube.com/embed/yWWbuNyPiwM",
      fragments: [
        { key: "tau_ambre", tooltip: "Fragment d'Archonte Ambre Tauforgé | +37,5% de Vitesse de Lancement" },
        { key: "tau_ambre", tooltip: "Fragment d'Archonte Ambre Tauforgé | +37,5% de Vitesse de Lancement" },
        { key: "tau_ambre", tooltip: "Fragment d'Archonte Ambre Tauforgé | +37,5% de Vitesse de Lancement" },
        { key: "tau_ecarlate", tooltip: "Fragment d'Archonte Écarlate Tauforgé | +15% de Puissance de Pouvoir" },
        { key: "tau_ecarlate", tooltip: "Fragment d'Archonte Écarlate Tauforgé | +15% de Puissance de Pouvoir" }
      ],

      specialWeapons: {
        enabled: false,
        title: "Armes Exaltées / Propres à la Warframe",
        items: [
          {
            name: "Arme spéciale 1",
            image: getSpecialWeaponImage("Caliban Prime", 0),
            buildImage: getSpecialWeaponBuildImage("Caliban Prime", 0)
          }
        ]
      },

      weaponMode: "text",
      weaponText: "Jouer n'importe quelle arme",
      weapons: {
        principale: { name: "Nom d'arme" },
        secondaire: { name: "Nom d'arme" },
        melee: { name: "Nom d'arme" }
      },

      incarnons: {
        principale: {
          enabled: false,
          title: "Incarnon Principale",
          items: [
            { image: getIncarnonImage("Caliban Prime", "principale", 0), text: "Bonus 1" },
            { image: getIncarnonImage("Caliban Prime", "principale", 1), text: "Bonus 2" },
            { image: getIncarnonImage("Caliban Prime", "principale", 2), text: "Bonus 3" },
            { image: getIncarnonImage("Caliban Prime", "principale", 3), text: "Bonus 4" }
          ]
        },
        secondaire: {
          enabled: false,
          title: "Incarnon Secondaire",
          items: []
        },
        melee: {
          enabled: false,
          title: "Incarnon Mêlée",
          items: []
        }
      },

      companionMode: "full",
      companionText: "Vous pouvez jouer n'importe quel compagnon",
      companion: {
        name: "Kubrow Huras",
        skinName: "Skin du compagnon",
        weaponName: "Griffes Huras"
      }
    }]
  },

  {
    name: "Gara Prime",
    builds: [{
      name: "Gara Prime Configuration",
      infoText: "",
      video: "",
      fragments: [
        { key: "tau_violet", tooltip: "Obtenez +37% de Dégâts Critiques de Mêlée. Lorsque l'Énergie max est supérieure à 500, le boost des Dégâts est doublé." },
        { key: "tau_ambre", tooltip: "Fragment d'Archonte Ambre Tauforgé | +37,5% de Vitesse de Lancement" },
        { key: "tau_ambre", tooltip: "Fragment d'Archonte Ambre Tauforgé | +75% d'Efficacité des Orbes d'Énergie" },
        { key: "tau_ambre", tooltip: "Fragment d'Archonte Ambre Tauforgé | +37,5% de Vitesse de Lancement" },
        { key: "tau_violet", tooltip: "Obtenez +37% de Dégâts Critiques de Mêlée. Lorsque l'Énergie max est supérieure à 500, le boost des Dégâts est doublé." }
      ],

      specialWeapons: {
        enabled: true,
        title: "Armes Exaltées / Propres à la Warframe",
        items: [
          {
            name: "Pique Cassante Prime",
            image: getSpecialWeaponImage("Gara Prime", 0),
            buildImage: getSpecialWeaponBuildImage("Gara Prime", 0)
          },
        ]
      },

      weaponMode: "full",
      weaponText: "Jouer n'importe quelle arme",
      weapons: {
        principale: { name: "Nataruk" },
        secondaire: { name: "Épitaphe Prime" },
        melee: { name: "Praedos" }
      },

      incarnons: {
        principale: {
          enabled: false,
          title: "Incarnon Principale",
          items: [
            { image: getIncarnonImage("Gara Prime", "principale", 0), text: "Effet 1" },
            { image: getIncarnonImage("Gara Prime", "principale", 1), text: "Effet 2" },
            { image: getIncarnonImage("Gara Prime", "principale", 2), text: "Effet 3" },
            { image: getIncarnonImage("Gara Prime", "principale", 3), text: "Effet 4" },
            { image: getIncarnonImage("Gara Prime", "principale", 4), text: "Effet 5" }
          ]
        },
        secondaire: {
          enabled: false,
          title: "Incarnon Secondaire",
          items: [
            { image: getIncarnonImage("Gara Prime", "secondaire", 0), text: "Effet 1" },
            { image: getIncarnonImage("Gara Prime", "secondaire", 1), text: "Effet 2" },
            { image: getIncarnonImage("Gara Prime", "secondaire", 2), text: "Effet 3" },
            { image: getIncarnonImage("Gara Prime", "secondaire", 3), text: "Effet 4" }
          ]
        },
        melee: {
          enabled: true,
          title: "Incarnon Mêlée",
          items: [
            { image: getIncarnonImage("Gara Prime", "melee", 0), text: "Effet 1" },
            { image: getIncarnonImage("Gara Prime", "melee", 1), text: "Effet 2" },
            { image: getIncarnonImage("Gara Prime", "melee", 2), text: "Effet 3" },
            { image: getIncarnonImage("Gara Prime", "melee", 3), text: "Effet 4" },
            { image: getIncarnonImage("Gara Prime", "melee", 3), text: "Effet 5" }
          ]
        }
      },

      companionMode: "full",
      companionText: "Vous pouvez jouer n'importe quel compagnon",
      companion: {
        name: "Kubrow Huras",
        skinName: "Skin du compagnon",
        weaponName: "Griffes Huras"
      }
    }]
  }

  /*
  { name: "Ash Prime", builds: [createBuildFor("Ash Prime")] },
  { name: "Atlas Prime", builds: [createBuildFor("Atlas Prime")] },
  { name: "Banshee Prime", builds: [createBuildFor("Banshee Prime")] },
  { name: "Baruuk Prime", builds: [createBuildFor("Baruuk Prime")] },
  { name: "Chroma Prime", builds: [createBuildFor("Chroma Prime")] },
  { name: "Citrine", builds: [createBuildFor("Citrine")] },
  { name: "Cyte-09", builds: [createBuildFor("Cyte-09")] },
  { name: "Dagath", builds: [createBuildFor("Dagath")] },
  { name: "Dante", builds: [createBuildFor("Dante")] },
  { name: "Ember Prime", builds: [createBuildFor("Ember Prime")] },
  { name: "Equinox Prime", builds: [createBuildFor("Equinox Prime")] },
  { name: "Excalibur Umbra", builds: [createBuildFor("Excalibur Umbra")] },
  { name: "Frost Prime", builds: [createBuildFor("Frost Prime")] },
  { name: "Garuda Prime", builds: [createBuildFor("Garuda Prime")] },
  { name: "Gauss Prime", builds: [createBuildFor("Gauss Prime")] },
  { name: "Grendel Prime", builds: [createBuildFor("Grendel Prime")] },
  { name: "Gyre Prime", builds: [createBuildFor("Gyre Prime")] },
  { name: "Harrow Prime", builds: [createBuildFor("Harrow Prime")] },
  { name: "Hildryn Prime", builds: [createBuildFor("Hildryn Prime")] },
  { name: "Hydroid Prime", builds: [createBuildFor("Hydroid Prime")] },
  { name: "Inaros Prime", builds: [createBuildFor("Inaros Prime")] },
  { name: "Ivara Prime", builds: [createBuildFor("Ivara Prime")] },
  { name: "Jade", builds: [createBuildFor("Jade")] },
  { name: "Khora Prime", builds: [createBuildFor("Khora Prime")] },
  { name: "Koumei", builds: [createBuildFor("Koumei")] },
  { name: "Kullervo", builds: [createBuildFor("Kullervo")] },
  { name: "Lavos Prime", builds: [createBuildFor("Lavos Prime")] },
  { name: "Limbo Prime", builds: [createBuildFor("Limbo Prime")] },
  { name: "Loki Prime", builds: [createBuildFor("Loki Prime")] },
  { name: "Mag Prime", builds: [createBuildFor("Mag Prime")] },
  { name: "Mesa Prime", builds: [createBuildFor("Mesa Prime")] },
  { name: "Mirage Prime", builds: [createBuildFor("Mirage Prime")] },
  { name: "Nekros Prime", builds: [createBuildFor("Nekros Prime")] },
  { name: "Neza Prime", builds: [createBuildFor("Neza Prime")] },
  { name: "Nidus Prime", builds: [createBuildFor("Nidus Prime")] },
  { name: "Nokko", builds: [createBuildFor("Nokko")] },
  { name: "Nova Prime", builds: [createBuildFor("Nova Prime")] },
  { name: "Nyx Prime", builds: [createBuildFor("Nyx Prime")] },
  { name: "Oberon Prime", builds: [createBuildFor("Oberon Prime")] },
  { name: "Octavia Prime", builds: [createBuildFor("Octavia Prime")] },
  { name: "Oraxia", builds: [createBuildFor("Oraxia")] },
  { name: "Protea Prime", builds: [createBuildFor("Protea Prime")] },
  { name: "Qorvex", builds: [createBuildFor("Qorvex")] },
  { name: "Revenant Prime", builds: [createBuildFor("Revenant Prime")] },
  { name: "Rhino Prime", builds: [createBuildFor("Rhino Prime")] },
  { name: "Saryn Prime", builds: [createBuildFor("Saryn Prime")] },
  { name: "Sevagoth Prime", builds: [createBuildFor("Sevagoth Prime")] },
  { name: "Styanax", builds: [createBuildFor("Styanax")] },
  { name: "Temple", builds: [createBuildFor("Temple")] },
  { name: "Titania Prime", builds: [createBuildFor("Titania Prime")] },
  { name: "Trinity Prime", builds: [createBuildFor("Trinity Prime")] },
  { name: "Uriel", builds: [createBuildFor("Uriel")] },
  { name: "Valkyr Prime", builds: [createBuildFor("Valkyr Prime")] },
  { name: "Vauban Prime", builds: [createBuildFor("Vauban Prime")] },
  { name: "Volt Prime", builds: [createBuildFor("Volt Prime")] },
  { name: "Voruna", builds: [createBuildFor("Voruna")] },
  { name: "Wisp Prime", builds: [createBuildFor("Wisp Prime")] },
  { name: "Wukong Prime", builds: [createBuildFor("Wukong Prime")] },
  { name: "Xaku Prime", builds: [createBuildFor("Xaku Prime")] },
  { name: "Yareli Prime", builds: [createBuildFor("Yareli Prime")] },
  { name: "Zephyr Prime", builds: [createBuildFor("Zephyr Prime")] }
  */
];

const fragmentData = {
  ecarlate: { image: "images/shards/ecarlate.png", defaultTooltip: "Fragment d'Archonte Écarlate" },
  ambre: { image: "images/shards/ambre.png", defaultTooltip: "Fragment d'Archonte Ambre" },
  azur: { image: "images/shards/azur.png", defaultTooltip: "Fragment d'Archonte Azur" },
  emeraude: { image: "images/shards/emeraude.png", defaultTooltip: "Fragment d'Archonte Émeraude" },
  topaze: { image: "images/shards/topaze.png", defaultTooltip: "Fragment d'Archonte Topaze" },
  violet: { image: "images/shards/violet.png", defaultTooltip: "Fragment d'Archonte Violet" },
  tau_ecarlate: { image: "images/shards/tau_ecarlate.png", defaultTooltip: "Fragment d'Archonte Écarlate Tauforgé" },
  tau_ambre: { image: "images/shards/tau_ambre.png", defaultTooltip: "Fragment d'Archonte Ambre Tauforgé" },
  tau_azur: { image: "images/shards/tau_azur.png", defaultTooltip: "Fragment d'Archonte Azur Tauforgé" },
  tau_emeraude: { image: "images/shards/tau_emeraude.png", defaultTooltip: "Fragment d'Archonte Émeraude Tauforgé" },
  tau_topaze: { image: "images/shards/tau_topaze.png", defaultTooltip: "Fragment d'Archonte Topaze Tauforgé" },
  tau_violet: { image: "images/shards/tau_violet.png", defaultTooltip: "Fragment d'Archonte Violet Tauforgé" }
};

const grid = document.getElementById("warframeGrid");
const homeUI = document.getElementById("homeUI");
const pageTransition = document.getElementById("pageTransition");
const buildPage = document.getElementById("buildPage");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const volumeSlider = document.getElementById("volumeSlider");
const homeVideo = document.getElementById("homeBgVideo");
const searchInput = document.getElementById("search");

/* ---------- MUSIQUE MANUELLE UNIQUEMENT ---------- */

function updateMusicButton() {
  if (!bgMusic || !musicToggle) return;

  if (bgMusic.paused) {
    musicToggle.classList.remove("playing");
    musicToggle.classList.add("paused");
    musicToggle.setAttribute("aria-label", "Lancer la musique");
  } else {
    musicToggle.classList.remove("paused");
    musicToggle.classList.add("playing");
    musicToggle.setAttribute("aria-label", "Mettre la musique en pause");
  }
}

async function playMusic() {
  if (!bgMusic) return;

  try {
    await bgMusic.play();
  } catch (error) {
    console.error("Erreur lecture audio :", error);
  }

  updateMusicButton();
}

function pauseMusic() {
  if (!bgMusic) return;

  bgMusic.pause();
  updateMusicButton();
}

async function toggleMusic(event) {
  if (event) event.stopPropagation();
  if (!bgMusic) return;

  if (bgMusic.paused) {
    await playMusic();
  } else {
    pauseMusic();
  }
}

if (musicToggle) {
  musicToggle.addEventListener("click", toggleMusic);
}

if (bgMusic && volumeSlider) {
  bgMusic.volume = Number(volumeSlider.value) / 100;

  volumeSlider.addEventListener("input", () => {
    bgMusic.volume = Number(volumeSlider.value) / 100;
  });

  bgMusic.addEventListener("play", updateMusicButton);
  bgMusic.addEventListener("pause", updateMusicButton);
  bgMusic.addEventListener("ended", updateMusicButton);
}

// La musique reste toujours manuelle : elle ne démarre jamais toute seule.
if (bgMusic) {
  bgMusic.autoplay = false;
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

updateMusicButton();

/* ---------- VIDEO READY ---------- */

if (homeVideo) {
  homeVideo.addEventListener("loadeddata", () => {
    homeVideo.play().catch(() => {});
  });

  homeVideo.addEventListener("canplay", () => {
    homeVideo.play().catch(() => {});
  });
}

/* ---------- GRID ---------- */

function createWarframeCard(warframe) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = getWarframeImage(warframe.name);
  img.alt = warframe.name;

  const label = document.createElement("p");
  label.textContent = warframe.name;

  card.appendChild(img);
  card.appendChild(label);
  card.addEventListener("click", () => openBuild(warframe));

  return card;
}

function renderWarframes(list) {
  grid.innerHTML = "";
  list.forEach((warframe) => {
    grid.appendChild(createWarframeCard(warframe));
  });

  if (window.isAdminMode) {
    const addCard = document.createElement("div");
    addCard.className = "card admin-add-card";
    addCard.innerHTML = `<div class="admin-plus">+</div><p>Ajouter une config</p>`;
    addCard.addEventListener("click", () => openAdminEditor(null));
    grid.appendChild(addCard);
  }
}

function renderGrid() {
  renderWarframes(warframesData);
}

renderGrid();

function filterWarframes() {
  const input = searchInput.value.toLowerCase().trim();

  const filteredWarframes = warframesData.filter((w) =>
    w.name.toLowerCase().includes(input)
  );

  renderWarframes(filteredWarframes);
}

/* ---------- FRAGMENTS ---------- */

function normalizeFragment(fragmentEntry) {
  if (typeof fragmentEntry === "string") {
    return {
      key: fragmentEntry,
      tooltip: fragmentData[fragmentEntry]?.defaultTooltip || "Fragment d'Archonte"
    };
  }

  if (typeof fragmentEntry === "object" && fragmentEntry !== null) {
    return {
      key: fragmentEntry.key,
      tooltip:
        fragmentEntry.tooltip ||
        fragmentData[fragmentEntry.key]?.defaultTooltip ||
        "Fragment d'Archonte"
    };
  }

  return null;
}

function buildShardLine(fragmentEntries) {
  return fragmentEntries
    .map(normalizeFragment)
    .filter((fragment) => fragment && fragmentData[fragment.key])
    .map((fragment) => {
      const baseData = fragmentData[fragment.key];
      return `
        <div class="shard-item">
          <img src="${baseData.image}" alt="${fragment.key}">
          <div class="shard-tooltip">${fragment.tooltip}</div>
        </div>
      `;
    })
    .join("");
}

/* ---------- ARMES SPÉCIALES / EXALTÉES ---------- */

function normalizeSpecialWeapons(selectedBuild, warframeName) {
  const specialWeapons = selectedBuild.specialWeapons || {};
  const items = Array.isArray(specialWeapons.items) ? specialWeapons.items : [];

  return {
    enabled: Boolean(specialWeapons.enabled) && items.length > 0,
    title: specialWeapons.title || "Armes Exaltées / Propres à la Warframe",
    items: items.slice(0, 3).map((item, index) => ({
      name: item.name || `Arme spéciale ${index + 1}`,
      image: item.image || getSpecialWeaponImage(warframeName, index),
      buildImage: item.buildImage || getSpecialWeaponBuildImage(warframeName, index)
    }))
  };
}

function renderSpecialWeaponsBlock(selectedBuild, warframeName) {
  const specialWeapons = normalizeSpecialWeapons(selectedBuild, warframeName);

  if (!specialWeapons.enabled) return "";

  const rows = specialWeapons.items.map((weapon) => `
    <div class="weapon-row">
      <div class="weapon-left weapon-mini">
        <h3>${weapon.name}</h3>
        <img src="${weapon.image}" alt="${weapon.name}">
      </div>
      <div class="weapon-right weapon-build-big">
        <h3>Configuration</h3>
        <img src="${weapon.buildImage}" alt="Configuration ${weapon.name}">
      </div>
    </div>
  `).join("");

  return `
    <div class="weapon-section">
      <h2>${specialWeapons.title}</h2>
      ${rows}
    </div>
  `;
}

/* ---------- INCARNONS ---------- */

function normalizeIncarnonItems(selectedBuild, warframeName, slotKey) {
  const incarnonData = selectedBuild.incarnons?.[slotKey] || {};
  const rawItems = Array.isArray(incarnonData.items) ? incarnonData.items : [];

  return {
    enabled: Boolean(incarnonData.enabled) && rawItems.length > 0,
    title:
      incarnonData.title ||
      (slotKey === "principale"
        ? "Incarnon Principale"
        : slotKey === "secondaire"
        ? "Incarnon Secondaire"
        : "Incarnon Mêlée"),
    items: rawItems.slice(0, 5).map((item, index) => ({
      image: item.image || getIncarnonImage(warframeName, slotKey, index),
      text: item.text || "Texte incarnon"
    }))
  };
}

function renderIncarnonBlock(selectedBuild, warframeName, slotKey) {
  const incarnon = normalizeIncarnonItems(selectedBuild, warframeName, slotKey);

  if (!incarnon.enabled) return "";

  const itemsHTML = incarnon.items.map((item) => `
    <div class="incarnon-item">
      <div class="incarnon-icon-wrap">
        <img src="${item.image}" alt="${item.text}">
      </div>
      <div class="incarnon-text">${item.text}</div>
    </div>
  `).join("");

  return `
    <div class="incarnon-block">
      <h4>${incarnon.title}</h4>
      <div class="incarnon-row">
        ${itemsHTML}
      </div>
    </div>
  `;
}

/* ---------- ARMES ---------- */

function getWeaponData(selectedBuild, slotKey, warframeName) {
  const weapon = selectedBuild.weapons?.[slotKey] || {};
  return {
    name: weapon.name || "Nom d'arme",
    image: weapon.image || getWeaponImage(warframeName, slotKey),
    buildImage: weapon.buildImage || getWeaponBuildImage(warframeName, slotKey)
  };
}

function renderWeaponSection(title, weaponData, incarnonHTML = "") {
  return `
    <div class="weapon-section">
      <h2>${title}</h2>

      <div class="weapon-row">
        <div class="weapon-left weapon-mini">
          <h3>${weaponData.name}</h3>
          <img src="${weaponData.image}" alt="${weaponData.name}">
        </div>
        <div class="weapon-right weapon-build-big">
          <h3>Configuration</h3>
          <img src="${weaponData.buildImage}" alt="Configuration ${weaponData.name}">
        </div>
      </div>

      ${incarnonHTML}
    </div>
  `;
}

function renderWeaponsBlock(selectedBuild, warframeName) {
  if (selectedBuild.weaponMode === "text") {
    return `
      <div class="weapon-section">
        <h2>Armes</h2>
        <div class="weapon-text-note">
          ${selectedBuild.weaponText || "Jouer n'importe quelle arme"}
        </div>
      </div>
    `;
  }

  const primaryWeapon = getWeaponData(selectedBuild, "principale", warframeName);
  const secondaryWeapon = getWeaponData(selectedBuild, "secondaire", warframeName);
  const meleeWeapon = getWeaponData(selectedBuild, "melee", warframeName);

  const primaryIncarnonHTML = renderIncarnonBlock(selectedBuild, warframeName, "principale");
  const secondaryIncarnonHTML = renderIncarnonBlock(selectedBuild, warframeName, "secondaire");
  const meleeIncarnonHTML = renderIncarnonBlock(selectedBuild, warframeName, "melee");

  return `
    ${renderWeaponSection("Principale", primaryWeapon, primaryIncarnonHTML)}
    ${renderWeaponSection("Secondaire", secondaryWeapon, secondaryIncarnonHTML)}
    ${renderWeaponSection("Mêlée", meleeWeapon, meleeIncarnonHTML)}
  `;
}

/* ---------- COMPAGNON ---------- */

function getCompanionData(selectedBuild, warframeName) {
  const companion = selectedBuild.companion || {};

  return {
    name: companion.name || "Nom du compagnon",
    skinName: companion.skinName || "Skin du compagnon",
    weaponName: companion.weaponName || "Nom de l'arme du compagnon",
    image: companion.image || getCompanionImage(warframeName),
    skinImage: companion.skinImage || getCompanionSkinImage(warframeName),
    weaponImage: companion.weaponImage || getCompanionWeaponImage(warframeName),
    buildImage: companion.buildImage || getCompanionBuildImage(warframeName),
    weaponBuildImage: companion.weaponBuildImage || getCompanionWeaponBuildImage(warframeName)
  };
}

function renderCompanionBlock(selectedBuild, warframeName) {
  if (selectedBuild.companionMode === "text") {
    return `
      <div class="weapon-section">
        <h2>Compagnon</h2>
        <div class="weapon-text-note">
          ${selectedBuild.companionText || "Vous pouvez jouer n'importe quel compagnon"}
        </div>
      </div>
    `;
  }

  const companionData = getCompanionData(selectedBuild, warframeName);

  return `
    <div class="weapon-section companion-section">
      <h2>Compagnon</h2>

      <div class="companion-row">
        <div class="companion-left companion-mini">
          <h3>${companionData.name}</h3>
          <img src="${companionData.image}" alt="${companionData.name}">
        </div>
        <div class="companion-right companion-build-big">
          <h3>Configuration du compagnon</h3>
          <img src="${companionData.buildImage}" alt="Configuration ${companionData.name}">
        </div>
      </div>

      <div class="companion-row">
        <div class="companion-left companion-mini">
          <h3>${companionData.weaponName}</h3>
          <img src="${companionData.weaponImage}" alt="${companionData.weaponName}">
        </div>
        <div class="companion-right companion-build-big">
          <h3>Configuration de l'arme du compagnon</h3>
          <img src="${companionData.weaponBuildImage}" alt="Configuration ${companionData.weaponName}">
        </div>
      </div>

      <div class="companion-row companion-skin-row">
        <div class="companion-left companion-mini">
          <h3>${companionData.skinName}</h3>
          <img src="${companionData.skinImage}" alt="${companionData.skinName}">
        </div>
      </div>
    </div>
  `;
}

/* ---------- BUILD ---------- */

function fillBuildContent(w) {
  const selectedBuild = w.builds[0];
  const fashionImgSrc = getFashionImage(w.name);
  const buildImgSrc = getBuildImage(w.name);
  const specialWeaponsHTML = renderSpecialWeaponsBlock(selectedBuild, w.name);
  const shardsHTML = buildShardLine(selectedBuild.fragments || []);
  const weaponsHTML = renderWeaponsBlock(selectedBuild, w.name);
  const companionHTML = renderCompanionBlock(selectedBuild, w.name);
  const configInfoHTML = selectedBuild.infoText
    ? `
      <div class="config-info-block">
        <h2>Informations sur la configuration</h2>
        <div class="config-info-text">${escapeHtml(selectedBuild.infoText)}</div>
      </div>
    `
    : "";

  const videoHTML = selectedBuild.video
    ? `
      <h2>Vidéo explicative</h2>
      <div class="video">
        <iframe
          src="${selectedBuild.video}"
          title="Vidéo explicative ${w.name}"
          allowfullscreen
        ></iframe>
      </div>
    `
    : "";

  document.getElementById("buildContent").innerHTML = `
    <h2>Skin</h2>
    <img src="${fashionImgSrc}" alt="Skin ${w.name}">

    <h2>${selectedBuild.name || `${w.name} Configuration`}</h2>
    <img src="${buildImgSrc}" alt="Configuration ${w.name}">

    ${specialWeaponsHTML}

    <h2>Fragments d'Archonte</h2>
    <div class="shards-container">
      ${shardsHTML}
    </div>

    ${weaponsHTML}
    ${companionHTML}
    ${configInfoHTML}
    ${videoHTML}
  `;

  if (window.isAdminMode) {
    const adminBar = document.createElement("div");
    adminBar.className = "admin-floating-bar";
    adminBar.innerHTML = `
      <button class="admin-primary" type="button" onclick="openAdminEditor(window.currentOpenWarframe)">Modifier cette config</button>
      <button class="admin-secondary" type="button" onclick="duplicateCurrentWarframe()">Dupliquer</button>
      <button class="admin-danger" type="button" onclick="deleteCurrentWarframe()">Supprimer</button>
    `;
    document.getElementById("buildContent").prepend(adminBar);
  }
}

function openBuild(w) {
  window.currentOpenWarframe = w;
  pageTransition.classList.add("active");

  setTimeout(() => {
    document.body.classList.add("build-open");
    buildPage.style.display = "block";
    fillBuildContent(w);

    setTimeout(() => {
      pageTransition.classList.remove("active");
    }, 120);
  }, 420);
}

function closeBuild() {
  if (buildPage.style.display === "none" || !document.body.classList.contains("build-open")) {
    return;
  }

  pageTransition.classList.add("active");

  setTimeout(() => {
    buildPage.style.display = "none";
    document.body.classList.remove("build-open");

    setTimeout(() => {
      pageTransition.classList.remove("active");
    }, 120);
  }, 420);
}

/* ---------- RACCOURCIS CLAVIER ---------- */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("build-open")) {
    closeBuild();
  }
});


/* ---------- ADMIN / ÉDITEUR LOCAL ---------- */
const ADMIN_USERNAME = "MINCH";
const ADMIN_PASSWORD = "MINCHELLA17";
const ADMIN_SESSION_KEY = "minch_admin_logged";
const ADMIN_DATA_KEY = "minch_warframes_data";

window.isAdminMode = localStorage.getItem(ADMIN_SESSION_KEY) === "true";
window.currentOpenWarframe = null;

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loadAdminSavedData() {
  const saved = localStorage.getItem(ADMIN_DATA_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) warframesData = parsed;
  } catch (error) {
    console.error("Données admin illisibles", error);
  }
}

async function loadExternalDataFile() {
  if (localStorage.getItem(ADMIN_DATA_KEY)) return;

  try {
    const response = await fetch("warframes-data.json", { cache: "no-store" });
    if (!response.ok) return;

    const parsed = await response.json();
    if (Array.isArray(parsed)) {
      warframesData = parsed;
      renderGrid();
    }
  } catch (error) {
    // Aucun fichier warframes-data.json trouvé : le site garde les données du script.js.
  }
}

function saveAdminData() {
  localStorage.setItem(ADMIN_DATA_KEY, JSON.stringify(warframesData));
}

function refreshAfterAdminChange() {
  saveAdminData();
  renderGrid();
  if (window.currentOpenWarframe && document.body.classList.contains("build-open")) {
    const fresh = warframesData.find(w => w.name === window.currentOpenWarframe.name) || warframesData[0];
    window.currentOpenWarframe = fresh;
    if (fresh) fillBuildContent(fresh);
  }
}

function updateAdminButton() {
  const btn = document.getElementById("adminButton");
  if (!btn) return;
  btn.textContent = window.isAdminMode ? "Admin ON" : "Admin";
  btn.classList.toggle("admin-active", window.isAdminMode);
}

function openAdminLogin() {
  const modal = document.getElementById("adminLoginModal");
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("adminLoginError").textContent = "";
}

function closeAdminLogin() {
  const modal = document.getElementById("adminLoginModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function tryAdminLogin() {
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value;
  const error = document.getElementById("adminLoginError");

  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    window.isAdminMode = true;
    localStorage.setItem(ADMIN_SESSION_KEY, "true");
    closeAdminLogin();
    updateAdminButton();
    renderGrid();
    if (window.currentOpenWarframe && document.body.classList.contains("build-open")) fillBuildContent(window.currentOpenWarframe);
  } else {
    error.textContent = "Identifiant ou mot de passe incorrect.";
  }
}

function logoutAdmin() {
  window.isAdminMode = false;
  localStorage.removeItem(ADMIN_SESSION_KEY);
  updateAdminButton();
  renderGrid();
  if (window.currentOpenWarframe && document.body.classList.contains("build-open")) fillBuildContent(window.currentOpenWarframe);
}

function fileToDataUrl(inputId, callback) {
  const input = document.getElementById(inputId);
  if (!input || !input.files || !input.files[0]) {
    callback(null);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(input.files[0]);
}

function getOrCreateBuild(warframe) {
  if (!warframe.builds) warframe.builds = [{}];
  if (!warframe.builds[0]) warframe.builds[0] = {};
  return warframe.builds[0];
}

function normalizeYouTubeUrl(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  if (value.includes("/embed/")) return value;
  const watch = value.match(/[?&]v=([^&]+)/);
  if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
  const short = value.match(/youtu\.be\/([^?&]+)/);
  if (short) return `https://www.youtube.com/embed/${short[1]}`;
  return value;
}

function fragmentsToText(fragments) {
  return (fragments || []).map(f => `${f.key || "tau_ambre"}|${f.tooltip || ""}`).join("\n");
}

function textToFragments(text) {
  return String(text || "")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const [key, ...rest] = line.split("|");
      return { key: (key || "tau_ambre").trim(), tooltip: rest.join("|").trim() };
    });
}

function openAdminEditor(warframe) {
  if (!window.isAdminMode) {
    openAdminLogin();
    return;
  }

  const isNew = !warframe;
  const editingWarframe = isNew ? { name: "Nouvelle Warframe", builds: [createBuildFor("Nouvelle Warframe")] } : deepClone(warframe);
  const build = getOrCreateBuild(editingWarframe);
  const companion = build.companion || {};
  const weapons = build.weapons || {};

  const content = document.getElementById("adminEditorContent");
  content.innerHTML = `
    <h2>${isNew ? "Ajouter une config" : "Modifier la config"}</h2>
    <p class="admin-hint">La sauvegarde est immédiate dans ton navigateur. Pour GitHub, clique ensuite sur “Exporter les données”.</p>

    <div class="admin-section">
      <h3>Infos principales</h3>
      <div class="admin-grid-form">
        <label>Nom Warframe<input id="editWarframeName" class="admin-input" value="${escapeHtml(editingWarframe.name)}"></label>
        <label>Titre configuration<input id="editBuildName" class="admin-input" value="${escapeHtml(build.name || editingWarframe.name + " Configuration")}"></label>
      </div>
      <label>Lien YouTube<input id="editVideo" class="admin-input" value="${escapeHtml(build.video || "")}" placeholder="https://www.youtube.com/watch?v=..."></label>
      <label>Informations sur la configuration<textarea id="editInfoText" class="admin-textarea" placeholder="Explique ici comment jouer la config, pourquoi utiliser ce build, les astuces, etc.">${escapeHtml(build.infoText || "")}</textarea></label>
      <div class="admin-grid-form">
        <label>Image Warframe / carte<div class="admin-file-row"><input id="editCardImage" type="file" accept="image/*"></div></label>
        <label>Image Skin<div class="admin-file-row"><input id="editFashionImage" type="file" accept="image/*"></div></label>
        <label>Image Build Warframe<div class="admin-file-row"><input id="editBuildImage" type="file" accept="image/*"></div></label>
      </div>
      <p class="admin-small">Sans upload, le site garde les chemins automatiques comme images/warframes/nom.png.</p>
    </div>

    <div class="admin-section">
      <h3>Fragments d'Archonte</h3>
      <p class="admin-small">Une ligne par fragment : clé|texte. Exemples de clés : tau_ambre, tau_ecarlate, tau_violet, ambre, ecarlate, violet.</p>
      <textarea id="editFragments" class="admin-textarea">${escapeHtml(fragmentsToText(build.fragments))}</textarea>
    </div>

    <div class="admin-section">
      <h3>Armes</h3>
      <label>Mode armes
        <select id="editWeaponMode" class="admin-select">
          <option value="full" ${build.weaponMode !== "text" ? "selected" : ""}>Images + builds</option>
          <option value="text" ${build.weaponMode === "text" ? "selected" : ""}>Texte seulement</option>
        </select>
      </label>
      <label>Texte armes<input id="editWeaponText" class="admin-input" value="${escapeHtml(build.weaponText || "Jouer n'importe quelle arme")}"></label>
      ${["principale", "secondaire", "melee"].map(slot => `
        <div class="admin-section">
          <h4>${slot === "melee" ? "Mêlée" : slot.charAt(0).toUpperCase() + slot.slice(1)}</h4>
          <label>Nom<input id="editWeaponName_${slot}" class="admin-input" value="${escapeHtml(weapons[slot]?.name || "")}"></label>
          <div class="admin-grid-form">
            <label>Image arme<div class="admin-file-row"><input id="editWeaponImage_${slot}" type="file" accept="image/*"></div></label>
            <label>Image build arme<div class="admin-file-row"><input id="editWeaponBuild_${slot}" type="file" accept="image/*"></div></label>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="admin-section">
      <h3>Compagnon</h3>
      <label>Mode compagnon
        <select id="editCompanionMode" class="admin-select">
          <option value="full" ${build.companionMode !== "text" ? "selected" : ""}>Images + builds</option>
          <option value="text" ${build.companionMode === "text" ? "selected" : ""}>Texte seulement</option>
        </select>
      </label>
      <label>Texte compagnon<input id="editCompanionText" class="admin-input" value="${escapeHtml(build.companionText || "Vous pouvez jouer n'importe quel compagnon")}"></label>
      <div class="admin-grid-form">
        <label>Nom compagnon<input id="editCompanionName" class="admin-input" value="${escapeHtml(companion.name || "")}"></label>
        <label>Nom arme compagnon<input id="editCompanionWeaponName" class="admin-input" value="${escapeHtml(companion.weaponName || "")}"></label>
        <label>Nom skin<input id="editCompanionSkinName" class="admin-input" value="${escapeHtml(companion.skinName || "")}"></label>
      </div>
      <div class="admin-grid-form">
        <label>Image compagnon<div class="admin-file-row"><input id="editCompanionImage" type="file" accept="image/*"></div></label>
        <label>Build compagnon<div class="admin-file-row"><input id="editCompanionBuildImage" type="file" accept="image/*"></div></label>
        <label>Image arme compagnon<div class="admin-file-row"><input id="editCompanionWeaponImage" type="file" accept="image/*"></div></label>
        <label>Build arme compagnon<div class="admin-file-row"><input id="editCompanionWeaponBuildImage" type="file" accept="image/*"></div></label>
        <label>Image skin compagnon<div class="admin-file-row"><input id="editCompanionSkinImage" type="file" accept="image/*"></div></label>
      </div>
    </div>

    <div class="admin-toolbar">
      <button class="admin-primary" type="button" id="saveAdminEdit">Sauvegarder</button>
      <button class="admin-secondary" type="button" onclick="exportAdminData()">Exporter les données</button>
      <button class="admin-secondary" type="button" onclick="resetAdminData()">Réinitialiser local</button>
      <button class="admin-danger" type="button" onclick="logoutAdmin(); closeAdminEditor();">Déconnexion</button>
    </div>
    <div id="adminSaveStatus" class="admin-success"></div>
  `;

  document.getElementById("saveAdminEdit").onclick = () => saveAdminEditor(editingWarframe, isNew, warframe?.name);

  const modal = document.getElementById("adminEditorModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeAdminEditor() {
  const modal = document.getElementById("adminEditorModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function saveAdminEditor(editingWarframe, isNew, originalName) {
  const newName = document.getElementById("editWarframeName").value.trim() || "Nouvelle Warframe";
  editingWarframe.name = newName;
  const build = getOrCreateBuild(editingWarframe);

  build.name = document.getElementById("editBuildName").value.trim() || `${newName} Configuration`;
  build.video = normalizeYouTubeUrl(document.getElementById("editVideo").value);
  build.infoText = document.getElementById("editInfoText").value.trim();
  build.fragments = textToFragments(document.getElementById("editFragments").value);
  build.weaponMode = document.getElementById("editWeaponMode").value;
  build.weaponText = document.getElementById("editWeaponText").value.trim();
  build.companionMode = document.getElementById("editCompanionMode").value;
  build.companionText = document.getElementById("editCompanionText").value.trim();

  if (!build.weapons) build.weapons = {};
  ["principale", "secondaire", "melee"].forEach(slot => {
    if (!build.weapons[slot]) build.weapons[slot] = {};
    build.weapons[slot].name = document.getElementById(`editWeaponName_${slot}`).value.trim() || "Nom d'arme";
  });

  if (!build.companion) build.companion = {};
  build.companion.name = document.getElementById("editCompanionName").value.trim() || "Nom du compagnon";
  build.companion.weaponName = document.getElementById("editCompanionWeaponName").value.trim() || "Nom de l'arme du compagnon";
  build.companion.skinName = document.getElementById("editCompanionSkinName").value.trim() || "Skin du compagnon";

  const uploads = [
    ["editCardImage", data => editingWarframe.cardImage = data],
    ["editFashionImage", data => build.fashionImage = data],
    ["editBuildImage", data => build.buildImage = data],
    ["editCompanionImage", data => build.companion.image = data],
    ["editCompanionBuildImage", data => build.companion.buildImage = data],
    ["editCompanionWeaponImage", data => build.companion.weaponImage = data],
    ["editCompanionWeaponBuildImage", data => build.companion.weaponBuildImage = data],
    ["editCompanionSkinImage", data => build.companion.skinImage = data],
    ...["principale", "secondaire", "melee"].flatMap(slot => [
      [`editWeaponImage_${slot}`, data => build.weapons[slot].image = data],
      [`editWeaponBuild_${slot}`, data => build.weapons[slot].buildImage = data]
    ])
  ];

  let pending = uploads.length;
  uploads.forEach(([id, apply]) => {
    fileToDataUrl(id, data => {
      if (data) apply(data);
      pending -= 1;
      if (pending === 0) finishSaveAdminEditor(editingWarframe, isNew, originalName);
    });
  });
}

function finishSaveAdminEditor(editingWarframe, isNew, originalName) {
  if (isNew) {
    warframesData.push(editingWarframe);
  } else {
    const index = warframesData.findIndex(w => w.name === originalName);
    if (index >= 0) warframesData[index] = editingWarframe;
  }
  window.currentOpenWarframe = editingWarframe;
  refreshAfterAdminChange();
  const status = document.getElementById("adminSaveStatus");
  if (status) status.textContent = "Sauvegardé dans ce navigateur.";
}

function duplicateCurrentWarframe() {
  if (!window.currentOpenWarframe) return;
  const copy = deepClone(window.currentOpenWarframe);
  copy.name = `${copy.name} Copie`;
  if (copy.builds?.[0]) copy.builds[0].name = `${copy.name} Configuration`;
  warframesData.push(copy);
  window.currentOpenWarframe = copy;
  refreshAfterAdminChange();
}

function deleteCurrentWarframe() {
  if (!window.currentOpenWarframe) return;
  const ok = confirm(`Supprimer ${window.currentOpenWarframe.name} ?`);
  if (!ok) return;
  warframesData = warframesData.filter(w => w.name !== window.currentOpenWarframe.name);
  closeBuild();
  window.currentOpenWarframe = null;
  refreshAfterAdminChange();
}

function exportAdminData() {
  const blob = new Blob([JSON.stringify(warframesData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "warframes-data.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function resetAdminData() {
  const ok = confirm("Effacer les modifications sauvegardées dans ce navigateur ?");
  if (!ok) return;
  localStorage.removeItem(ADMIN_DATA_KEY);
  location.reload();
}

/* Patch images personnalisées admin */
const originalCreateWarframeCard = createWarframeCard;
createWarframeCard = function(warframe) {
  const card = originalCreateWarframeCard(warframe);
  const img = card.querySelector("img");
  if (img && warframe.cardImage) img.src = warframe.cardImage;
  return card;
};

const originalFillBuildContent = fillBuildContent;
fillBuildContent = function(w) {
  originalFillBuildContent(w);
  const build = w.builds?.[0] || {};
  const images = document.querySelectorAll("#buildContent img");
  if (build.fashionImage && images[0]) images[0].src = build.fashionImage;
  if (build.buildImage && images[1]) images[1].src = build.buildImage;
};

loadAdminSavedData();
loadExternalDataFile();
updateAdminButton();
renderGrid();

const adminButton = document.getElementById("adminButton");
if (adminButton) {
  adminButton.addEventListener("click", () => {
    if (window.isAdminMode) {
      openAdminEditor(window.currentOpenWarframe || null);
    } else {
      openAdminLogin();
    }
  });
}

const adminLoginSubmit = document.getElementById("adminLoginSubmit");
if (adminLoginSubmit) adminLoginSubmit.addEventListener("click", tryAdminLogin);

const adminPasswordToggle = document.getElementById("adminPasswordToggle");
if (adminPasswordToggle) {
  adminPasswordToggle.addEventListener("click", () => {
    const passInput = document.getElementById("adminPass");
    if (!passInput) return;
    const showPassword = passInput.type === "password";
    passInput.type = showPassword ? "text" : "password";
    adminPasswordToggle.classList.toggle("visible", showPassword);
    adminPasswordToggle.setAttribute("aria-label", showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe");
  });
}

["adminUser", "adminPass"].forEach(id => {
  const input = document.getElementById(id);
  if (input) input.addEventListener("keydown", event => {
    if (event.key === "Enter") tryAdminLogin();
  });
});

document.querySelectorAll("[data-admin-close]").forEach(btn => btn.addEventListener("click", closeAdminLogin));
document.querySelectorAll("[data-editor-close]").forEach(btn => btn.addEventListener("click", closeAdminEditor));


/* ---------- MINCH FIX DEFINITIF : ADMIN ON = STATUS UNIQUEMENT + BOUTONS FIXES ---------- */
(function minchFinalMobileAndAdminFix(){
  function forceFixedControls(){
    const adminBtn = document.getElementById('adminButton');
    const musicPanel = document.getElementById('musicPanel');

    if (adminBtn) {
      adminBtn.style.setProperty('position', 'fixed', 'important');
      adminBtn.style.setProperty('top', 'calc(env(safe-area-inset-top, 0px) + 12px)', 'important');
      adminBtn.style.setProperty('right', 'calc(env(safe-area-inset-right, 0px) + 12px)', 'important');
      adminBtn.style.setProperty('z-index', '9001', 'important');
      adminBtn.style.setProperty('transform', 'none', 'important');
    }

    if (musicPanel) {
      musicPanel.style.setProperty('position', 'fixed', 'important');
      musicPanel.style.setProperty('top', 'calc(env(safe-area-inset-top, 0px) + 12px)', 'important');
      musicPanel.style.setProperty('left', 'calc(env(safe-area-inset-left, 0px) + 12px)', 'important');
      musicPanel.style.setProperty('z-index', '9000', 'important');
      musicPanel.style.setProperty('transform', 'none', 'important');
    }
  }

  function replaceAdminButtonEvents(){
    const oldButton = document.getElementById('adminButton');
    if (!oldButton || oldButton.dataset.minchFixedAdmin === 'true') return;

    const newButton = oldButton.cloneNode(true);
    newButton.dataset.minchFixedAdmin = 'true';
    oldButton.replaceWith(newButton);

    newButton.addEventListener('click', function(event){
      event.preventDefault();
      event.stopPropagation();
      if (typeof closeAdminEditor === 'function') closeAdminEditor();
      openAdminStatusOnly();
    });
  }

  function clearSubmitEventsAndBind(handler){
    const oldSubmit = document.getElementById('adminLoginSubmit');
    if (!oldSubmit) return null;
    const newSubmit = oldSubmit.cloneNode(true);
    oldSubmit.replaceWith(newSubmit);
    newSubmit.onclick = handler;
    return newSubmit;
  }

  function setLoginModalConnectedState(){
    const modal = document.getElementById('adminLoginModal');
    const title = document.querySelector('#adminLoginModal .admin-login-card h2');
    const hint = document.querySelector('#adminLoginModal .admin-hint');
    const user = document.getElementById('adminUser');
    const pass = document.getElementById('adminPass');
    const eye = document.getElementById('adminPasswordToggle');
    const error = document.getElementById('adminLoginError');

    if (!modal || !title || !hint || !user || !pass) return;

    if (window.isAdminMode) {
      title.textContent = 'Admin connecté';
      hint.textContent = 'Le mode éditeur est actif. Va sur une configuration pour la modifier, la dupliquer ou la supprimer.';
      user.style.display = 'none';
      pass.style.display = 'none';
      if (eye) eye.style.display = 'none';
      if (error) error.textContent = '';

      const submit = clearSubmitEventsAndBind(function(event){
        event.preventDefault();
        event.stopPropagation();
        if (typeof logoutAdmin === 'function') logoutAdmin();
        if (typeof closeAdminLogin === 'function') closeAdminLogin();
        updateAdminButton && updateAdminButton();
      });

      if (submit) {
        submit.textContent = 'Se déconnecter';
        submit.classList.add('admin-centered-logout');
      }
    } else {
      title.textContent = 'Connexion Admin';
      hint.textContent = 'Entre ton identifiant et ton mot de passe pour activer le mode éditeur.';
      user.style.display = 'block';
      pass.style.display = 'block';
      if (eye) eye.style.display = 'flex';
      if (error) error.textContent = '';

      const submit = clearSubmitEventsAndBind(function(event){
        event.preventDefault();
        event.stopPropagation();
        if (typeof tryAdminLogin === 'function') tryAdminLogin();
        setTimeout(setLoginModalConnectedState, 30);
      });

      if (submit) {
        submit.textContent = 'Se connecter';
        submit.classList.remove('admin-centered-logout');
      }
    }
  }

  function openAdminStatusOnly(){
    const modal = document.getElementById('adminLoginModal');
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    setLoginModalConnectedState();
    forceFixedControls();
  }

  window.openAdminStatusOnly = openAdminStatusOnly;

  const oldOpenAdminLogin = window.openAdminLogin || openAdminLogin;
  openAdminLogin = function(){
    openAdminStatusOnly();
  };
  window.openAdminLogin = openAdminLogin;

  const oldOpenBuild = window.openBuild || openBuild;
  openBuild = function(w){
    oldOpenBuild(w);
    setTimeout(forceFixedControls, 10);
    setTimeout(forceFixedControls, 700);
  };
  window.openBuild = openBuild;

  replaceAdminButtonEvents();
  forceFixedControls();
  setTimeout(function(){ replaceAdminButtonEvents(); forceFixedControls(); }, 100);
  setTimeout(function(){ replaceAdminButtonEvents(); forceFixedControls(); }, 1000);

  window.addEventListener('scroll', forceFixedControls, { passive:true });
  window.addEventListener('resize', forceFixedControls);
  window.addEventListener('orientationchange', function(){
    setTimeout(forceFixedControls, 100);
    setTimeout(forceFixedControls, 600);
  });
})();


/* ---------- OPTIMISATION IMAGES : lazy loading + preload + fondu propre ---------- */
const MINCH_PRELOADED_IMAGES = new Set();

function minchPreloadImage(src, priority = false) {
  if (!src || typeof src !== "string") return;
  if (src.startsWith("data:")) return;
  if (MINCH_PRELOADED_IMAGES.has(src)) return;

  MINCH_PRELOADED_IMAGES.add(src);
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  if (priority) link.setAttribute("fetchpriority", "high");
  document.head.appendChild(link);
}

function minchOptimizeImage(img, priority = false) {
  if (!img || img.dataset.minchOptimized === "true") return;
  img.dataset.minchOptimized = "true";

  img.decoding = "async";
  img.loading = priority ? "eager" : "lazy";
  if (priority) img.setAttribute("fetchpriority", "high");

  img.classList.add("minch-img-loading");

  const markLoaded = () => {
    img.classList.remove("minch-img-loading");
    img.classList.add("minch-img-loaded");
  };

  if (img.complete && img.naturalWidth !== 0) {
    markLoaded();
  } else {
    img.addEventListener("load", markLoaded, { once: true });
    img.addEventListener("error", markLoaded, { once: true });
  }
}

function minchOptimizeImages(root = document, priorityCount = 0) {
  const images = Array.from(root.querySelectorAll("img"));
  images.forEach((img, index) => minchOptimizeImage(img, index < priorityCount));
}

function minchPreloadHomeImages(list = warframesData) {
  (list || []).slice(0, 6).forEach((warframe, index) => {
    minchPreloadImage(warframe.cardImage || getWarframeImage(warframe.name), index < 3);
  });
}

function minchPreloadBuildImages(warframe) {
  if (!warframe || !warframe.builds || !warframe.builds[0]) return;
  const build = warframe.builds[0];
  minchPreloadImage(warframe.cardImage || getWarframeImage(warframe.name), true);
  minchPreloadImage(build.fashionImage || getFashionImage(warframe.name), true);
  minchPreloadImage(build.buildImage || getBuildImage(warframe.name), true);

  if (build.specialWeapons && Array.isArray(build.specialWeapons.items)) {
    build.specialWeapons.items.slice(0, 3).forEach((weapon, index) => {
      minchPreloadImage(weapon.image || getSpecialWeaponImage(warframe.name, index));
      minchPreloadImage(weapon.buildImage || getSpecialWeaponBuildImage(warframe.name, index));
    });
  }
}

const minchPerfRenderWarframes = renderWarframes;
renderWarframes = function(list) {
  minchPreloadHomeImages(list);
  minchPerfRenderWarframes(list);
  minchOptimizeImages(grid, 4);
};

const minchPerfFillBuildContent = fillBuildContent;
fillBuildContent = function(w) {
  minchPreloadBuildImages(w);
  minchPerfFillBuildContent(w);
  const buildContent = document.getElementById("buildContent");
  if (buildContent) minchOptimizeImages(buildContent, 2);
};

const minchPerfOpenBuild = openBuild;
openBuild = function(w) {
  minchPreloadBuildImages(w);
  minchPerfOpenBuild(w);
};

function minchRunImageOptimisation() {
  minchPreloadHomeImages(warframesData);
  minchOptimizeImages(document, 4);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", minchRunImageOptimisation);
} else {
  minchRunImageOptimisation();
}

window.minchOptimizeImages = minchOptimizeImages;
window.minchPreloadImage = minchPreloadImage;

/* ---------- MINCH UPGRADE PACK : upload preview/compression, autosave, cache, share, stats, recherche ---------- */
(function(){
  const MINCH_STATS_KEY = "minch_build_stats_v1";
  const MINCH_LAST_DRAFT_KEY = "minch_editor_last_draft_v1";

  function minchSafeSlug(value){
    try { return slugifyText(value); } catch(e) { return String(value||"").toLowerCase().replace(/[^a-z0-9]+/g,"_"); }
  }

  function minchGetStats(){
    try { return JSON.parse(localStorage.getItem(MINCH_STATS_KEY) || "{}"); }
    catch(e){ return {}; }
  }

  function minchSetStats(stats){
    try { localStorage.setItem(MINCH_STATS_KEY, JSON.stringify(stats)); } catch(e) {}
  }

  function minchTrackView(warframe){
    if (!warframe || !warframe.name) return;
    const stats = minchGetStats();
    const key = warframe.name;
    if (!stats[key]) stats[key] = { views: 0, lastView: "" };
    stats[key].views += 1;
    stats[key].lastView = new Date().toISOString();
    minchSetStats(stats);
  }

  function minchCopyText(text){
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
    const input = document.createElement("textarea");
    input.value = text;
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    return Promise.resolve();
  }

  function minchBuildShareUrl(warframe){
    const url = new URL(location.href);
    url.hash = `warframe=${encodeURIComponent(minchSafeSlug(warframe?.name || window.currentOpenWarframe?.name || ""))}`;
    return url.toString();
  }

  function minchAddShareAndStats(warframe){
    const buildContent = document.getElementById("buildContent");
    if (!buildContent || buildContent.querySelector(".minch-share-row")) return;
    const stats = minchGetStats()[warframe?.name] || { views: 0 };
    const row = document.createElement("div");
    row.className = "minch-share-row";
    row.innerHTML = `
      <button class="minch-share-btn" type="button">Copier le lien</button>
    `;
    const btn = row.querySelector("button");
    btn.addEventListener("click", async () => {
      await minchCopyText(minchBuildShareUrl(warframe));
      btn.textContent = "Lien copié !";
      setTimeout(() => btn.textContent = "Copier le lien", 1300);
    });
    const firstH2 = buildContent.querySelector("h2");
    if (firstH2) firstH2.before(row); else buildContent.prepend(row);
  }

  // Recherche plus tolérante : plusieurs mots, accents ignorés, aliases simples.
  const minchOldFilterWarframes = window.filterWarframes || (typeof filterWarframes === "function" ? filterWarframes : null);
  window.filterWarframes = function(){
    const input = document.getElementById("search");
    const query = minchSafeSlug(input ? input.value : "").replace(/_/g," ").trim();
    const tokens = query.split(/\s+/).filter(Boolean);
    const filtered = !tokens.length ? warframesData : warframesData.filter((w) => {
      const haystack = [w.name, w.builds?.[0]?.name, w.builds?.[0]?.weapons?.principale?.name, w.builds?.[0]?.weapons?.secondaire?.name, w.builds?.[0]?.weapons?.melee?.name]
        .filter(Boolean).map(v => minchSafeSlug(v).replace(/_/g," ")).join(" ");
      return tokens.every(t => haystack.includes(t));
    });
    renderWarframes(filtered);
  };
  try { filterWarframes = window.filterWarframes; } catch(e) {}

  // Cache léger des images via Cache API quand disponible (sans mode app/PWA).
  async function minchCacheImage(src){
    if (!src || !window.caches || String(src).startsWith("data:")) return;
    try {
      const cache = await caches.open("minch-warframe-images-v1");
      const cached = await cache.match(src);
      if (!cached) {
        const response = await fetch(src, { mode: "no-cors" });
        await cache.put(src, response);
      }
    } catch(e) {}
  }

  function minchCacheImages(root=document){
    root.querySelectorAll("img").forEach(img => {
      if (img.currentSrc || img.src) minchCacheImage(img.currentSrc || img.src);
    });
  }

  // Compression client avant sauvegarde : réduit très fort les grosses images.
  function minchCompressImageFile(file, options={}){
    const maxSize = options.maxSize || 1600;
    const quality = options.quality || 0.78;
    if (!file || !file.type || !file.type.startsWith("image/")) return Promise.resolve(null);

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onerror = () => resolve(null);
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => resolve(reader.result);
        img.onload = () => {
          let { width, height } = img;
          const ratio = Math.min(1, maxSize / Math.max(width, height));
          width = Math.max(1, Math.round(width * ratio));
          height = Math.max(1, Math.round(height * ratio));
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          try {
            const type = file.type === "image/png" ? "image/png" : "image/webp";
            const dataUrl = canvas.toDataURL(type, type === "image/png" ? undefined : quality);
            resolve(dataUrl);
          } catch(e) { resolve(reader.result); }
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Remplace la lecture fichier classique par une version compressée.
  if (typeof fileToDataUrl === "function") {
    const oldFileToDataUrl = fileToDataUrl;
    fileToDataUrl = function(inputId, callback){
      const input = document.getElementById(inputId);
      if (!input || !input.files || !input.files[0]) return callback(null);
      minchCompressImageFile(input.files[0]).then((data) => callback(data)).catch(() => oldFileToDataUrl(inputId, callback));
    };
    window.fileToDataUrl = fileToDataUrl;
  }

  // Si une version Firebase avec uploadImageInput existe, compresse avant upload quand possible.
  if (typeof uploadImageInput === "function") {
    const oldUploadImageInput = uploadImageInput;
    uploadImageInput = async function(inputId, folderName){
      const input = document.getElementById(inputId);
      if (!input || !input.files || !input.files[0]) return null;
      if (!firebaseReady || !firebaseStorage) return await minchCompressImageFile(input.files[0]);
      try {
        const file = input.files[0];
        const dataUrl = await minchCompressImageFile(file);
        const blob = await (await fetch(dataUrl)).blob();
        const safeName = `${Date.now()}_${minchSafeSlug(file.name.replace(/\.[^.]+$/, ""))}.webp`;
        const ref = firebaseStorage.ref().child(`warframe-images/${folderName}/${safeName}`);
        await ref.put(blob, { contentType: blob.type || "image/webp" });
        return await ref.getDownloadURL();
      } catch(e) {
        return oldUploadImageInput(inputId, folderName);
      }
    };
    window.uploadImageInput = uploadImageInput;
  }

  function minchDecorateFileInputs(){
    const modal = document.getElementById("adminEditorModal");
    if (!modal || !modal.classList.contains("open")) return;
    modal.querySelectorAll('input[type="file"]').forEach((input) => {
      if (input.dataset.minchDropReady === "true") return;
      input.dataset.minchDropReady = "true";
      const row = input.closest(".admin-file-row") || input.parentElement;
      if (!row) return;
      row.classList.add("minch-drop-row");
      const preview = document.createElement("div");
      preview.className = "minch-file-preview";
      preview.textContent = "Glisse une image ici ou clique pour choisir";
      row.appendChild(preview);

      const updatePreview = () => {
        const file = input.files && input.files[0];
        if (!file) return;
        preview.innerHTML = `<span>Compression prête : ${file.name}</span>`;
        minchCompressImageFile(file, { maxSize: 420, quality: 0.7 }).then((data) => {
          if (data) preview.innerHTML = `<img src="${data}" alt="preview"><span>${file.name}</span>`;
        });
      };
      input.addEventListener("change", updatePreview);
      ["dragenter", "dragover"].forEach(type => row.addEventListener(type, (e) => { e.preventDefault(); row.classList.add("drag-over"); }));
      ["dragleave", "drop"].forEach(type => row.addEventListener(type, (e) => { e.preventDefault(); row.classList.remove("drag-over"); }));
      row.addEventListener("drop", (e) => {
        const file = e.dataTransfer?.files?.[0];
        if (!file) return;
        const dt = new DataTransfer();
        dt.items.add(file);
        input.files = dt.files;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
  }

  function minchInstallAutosave(){
    const modal = document.getElementById("adminEditorModal");
    if (!modal || modal.dataset.minchAutosave === "true") return;
    modal.dataset.minchAutosave = "true";
    let timer = null;
    modal.addEventListener("input", (event) => {
      if (!event.target.matches("input, textarea, select")) return;
      const status = document.getElementById("adminSaveStatus");
      if (status) status.textContent = "Autosauvegarde bientôt...";
      clearTimeout(timer);
      timer = setTimeout(() => {
        const save = document.getElementById("saveAdminEdit");
        if (save && !save.disabled && modal.classList.contains("open")) save.click();
      }, 2500);
    });
    modal.addEventListener("change", (event) => {
      if (!event.target.matches('input[type="file"], select')) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        const save = document.getElementById("saveAdminEdit");
        if (save && !save.disabled && modal.classList.contains("open")) save.click();
      }, 1200);
    });
  }

  function minchAddTemplateTools(){
    const content = document.getElementById("adminEditorContent");
    if (!content || content.querySelector(".minch-template-tools")) return;
    const tools = document.createElement("div");
    tools.className = "admin-section minch-template-tools";
    tools.innerHTML = `
      <h3>Templates rapides</h3>
      <button class="admin-secondary" type="button" data-template="full">Template complet</button>
      <button class="admin-secondary" type="button" data-template="text">Template texte simple</button>
      <button class="admin-secondary" type="button" data-template="clean">Nettoyer les champs vides</button>
    `;
    const first = content.querySelector(".admin-section");
    if (first) first.before(tools); else content.prepend(tools);
    tools.addEventListener("click", (event) => {
      const btn = event.target.closest("button[data-template]");
      if (!btn) return;
      const mode = btn.dataset.template;
      if (mode === "full") {
        ["editWeaponMode", "editCompanionMode"].forEach(id => { const el = document.getElementById(id); if (el) el.value = "full"; });
        const info = document.getElementById("editInfoText");
        if (info && !info.value.trim()) info.value = "Objectif de la config :\n\nRotation / gameplay :\n\nPourquoi ces choix :";
      }
      if (mode === "text") {
        const weapon = document.getElementById("editWeaponMode");
        const companion = document.getElementById("editCompanionMode");
        if (weapon) weapon.value = "text";
        if (companion) companion.value = "text";
      }
      if (mode === "clean") {
        content.querySelectorAll("input, textarea").forEach(el => { if (el.type !== "file") el.value = el.value.trim(); });
      }
      const status = document.getElementById("adminSaveStatus");
      if (status) status.textContent = "Template appliqué.";
    });
  }

  // Ouvre une config depuis un lien #warframe=...
  function minchOpenHashWarframe(){
    const match = decodeURIComponent(location.hash || "").match(/warframe=([^&]+)/);
    if (!match || !Array.isArray(warframesData)) return;
    const slug = match[1];
    const found = warframesData.find(w => minchSafeSlug(w.name) === slug);
    if (found && !document.body.classList.contains("build-open")) openBuild(found);
  }

  // Wrappers existants.
  const oldOpenBuild = openBuild;
  openBuild = function(w){
    window.currentOpenWarframe = w;
    minchTrackView(w);
    if (w?.name) {
      const newHash = `#warframe=${encodeURIComponent(minchSafeSlug(w.name))}`;
      if (location.hash !== newHash) history.replaceState(null, "", newHash);
    }
    oldOpenBuild(w);
    setTimeout(() => {
      minchAddShareAndStats(w);
      minchCacheImages(document.getElementById("buildContent") || document);
    }, 700);
  };

  const oldCloseBuild = closeBuild;
  closeBuild = function(){
    if (location.hash.startsWith("#warframe=")) history.replaceState(null, "", location.pathname + location.search);
    oldCloseBuild();
  };

  const oldRenderWarframes2 = renderWarframes;
  renderWarframes = function(list){
    oldRenderWarframes2(list);
    minchCacheImages(document.getElementById("warframeGrid") || document);
  };

  const oldOpenAdminEditor2 = openAdminEditor;
  openAdminEditor = function(warframe){
    oldOpenAdminEditor2(warframe);
    setTimeout(() => {
      minchDecorateFileInputs();
      minchInstallAutosave();
      minchAddTemplateTools();
    }, 80);
  };

  // Expose pour les onclick module/non-module.
  window.openBuild = openBuild;
  window.closeBuild = closeBuild;
  window.renderWarframes = renderWarframes;
  window.filterWarframes = window.filterWarframes;
  window.openAdminEditor = openAdminEditor;
  window.minchCacheImages = minchCacheImages;

  window.addEventListener("hashchange", minchOpenHashWarframe);
  setTimeout(minchOpenHashWarframe, 900);
  setTimeout(() => minchCacheImages(document), 1200);
})();


/* ---------- MINCH FINAL PATCH : garde upgrades + corrige régressions ---------- */
(function(){
  function byId(id){ return document.getElementById(id); }

  function forceFixedControlsFinal(){
    const music = byId('musicPanel');
    const admin = byId('adminButton');
    if (music) {
      music.style.position = 'fixed';
      music.style.top = 'calc(env(safe-area-inset-top, 0px) + 12px)';
      music.style.left = 'calc(env(safe-area-inset-left, 0px) + 12px)';
      music.style.zIndex = '99990';
      music.style.opacity = '1';
      music.style.visibility = 'visible';
      music.style.pointerEvents = 'auto';
    }
    if (admin) {
      admin.style.position = 'fixed';
      admin.style.top = 'calc(env(safe-area-inset-top, 0px) + 12px)';
      admin.style.right = 'calc(env(safe-area-inset-right, 0px) + 12px)';
      admin.style.zIndex = '99991';
      admin.style.opacity = '1';
      admin.style.visibility = 'visible';
      admin.style.pointerEvents = 'auto';
      admin.style.display = 'flex';
      admin.style.alignItems = 'center';
      admin.style.justifyContent = 'center';
    }
  }

  function bindBackButtonsFinal(){
    const buildBack = document.querySelector('#buildPage .back');
    if (buildBack) {
      buildBack.style.position = 'fixed';
      buildBack.style.display = 'flex';
      buildBack.onclick = function(event){
        event.preventDefault();
        event.stopPropagation();
        if (typeof closeBuild === 'function') closeBuild();
      };
    }

    document.querySelectorAll('#adminLoginModal .admin-back').forEach(btn => {
      btn.onclick = function(event){ event.preventDefault(); event.stopPropagation(); if (typeof closeAdminLogin === 'function') closeAdminLogin(); };
    });
    document.querySelectorAll('#adminEditorModal .admin-back').forEach(btn => {
      btn.onclick = function(event){ event.preventDefault(); event.stopPropagation(); if (typeof closeAdminEditor === 'function') closeAdminEditor(); };
    });
  }

  function updateEyeFinal(){
    const pass = byId('adminPass');
    const eye = byId('adminPasswordToggle');
    if (!pass || !eye) return;
    const visible = pass.type === 'text';
    eye.classList.toggle('visible', visible);
    eye.setAttribute('aria-label', visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
  }

  function forceDarkInputsFinal(){
    ['adminUser','adminPass'].forEach(id => {
      const input = byId(id);
      if (!input) return;
      input.style.background = '#0b1222';
      input.style.backgroundColor = '#0b1222';
      input.style.color = '#fff';
      input.style.webkitTextFillColor = '#fff';
      input.style.caretColor = '#fff';
      input.style.boxShadow = '0 0 0 1000px #0b1222 inset';
      input.style.border = 'none';
      input.style.outline = '1px solid rgba(255,255,255,0.08)';
    });
  }

  function togglePasswordFinal(event){
    if (event) { event.preventDefault(); event.stopPropagation(); if (event.stopImmediatePropagation) event.stopImmediatePropagation(); }
    const pass = byId('adminPass');
    if (!pass) return;
    pass.type = pass.type === 'password' ? 'text' : 'password';
    updateEyeFinal();
    forceDarkInputsFinal();
  }

  function prepareLoginFinal(){
    const eye = byId('adminPasswordToggle');
    const submit = byId('adminLoginSubmit');
    if (eye) eye.onclick = togglePasswordFinal;
    if (submit) submit.onclick = function(event){
      if (typeof tryAdminLogin === 'function') return tryAdminLogin(event);
    };
    updateEyeFinal();
    forceDarkInputsFinal();
    bindBackButtonsFinal();
  }

  function bindAdminBuildActionsFinal(){
    const root = byId('buildContent') || document;
    const edit = root.querySelector('[data-admin-build-action="edit"]');
    const duplicate = root.querySelector('[data-admin-build-action="duplicate"]');
    const del = root.querySelector('[data-admin-build-action="delete"]');
    if (edit) edit.onclick = function(event){ event.preventDefault(); event.stopPropagation(); if (window.currentOpenWarframe && typeof openAdminEditor === 'function') openAdminEditor(window.currentOpenWarframe); };
    if (duplicate) duplicate.onclick = function(event){ event.preventDefault(); event.stopPropagation(); if (typeof duplicateCurrentWarframe === 'function') duplicateCurrentWarframe(); };
    if (del) del.onclick = function(event){ event.preventDefault(); event.stopPropagation(); if (typeof deleteCurrentWarframe === 'function') deleteCurrentWarframe(); };
  }

  function cleanShareFinal(){
    document.querySelectorAll('.minch-stat-pill').forEach(el => el.remove());
    document.querySelectorAll('.minch-share-btn').forEach(btn => {
      if (btn.textContent.includes('Discord')) btn.textContent = 'Copier le lien';
      if (!btn.dataset.minchFinalShareFixed) {
        btn.dataset.minchFinalShareFixed = 'true';
        btn.addEventListener('click', () => {
          setTimeout(() => {
            if (btn.textContent.includes('Discord')) btn.textContent = 'Copier le lien';
          }, 1400);
        });
      }
    });
  }

  function robustFilterWarframesFinal(){
    const input = byId('search');
    const raw = input ? input.value : '';
    const normalize = (value) => String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9]+/g,' ')
      .trim();
    const tokens = normalize(raw).split(/\s+/).filter(Boolean);
    const list = !tokens.length ? warframesData : warframesData.filter(w => {
      const build = w.builds && w.builds[0] ? w.builds[0] : {};
      const weapons = build.weapons || {};
      const haystack = normalize([
        w.name,
        build.name,
        weapons.principale && weapons.principale.name,
        weapons.secondaire && weapons.secondaire.name,
        weapons.melee && weapons.melee.name,
        build.companion && build.companion.name
      ].filter(Boolean).join(' '));
      return tokens.every(t => haystack.includes(t));
    });
    renderWarframes(list);
    if (typeof minchOptimizeImages === 'function') setTimeout(() => minchOptimizeImages(document.getElementById('warframeGrid') || document, 4), 0);
  }

  window.filterWarframes = robustFilterWarframesFinal;
  try { filterWarframes = robustFilterWarframesFinal; } catch(e) {}

  const oldOpenBuildFinal = window.openBuild || (typeof openBuild === 'function' ? openBuild : null);
  if (oldOpenBuildFinal) {
    openBuild = function(w){
      const result = oldOpenBuildFinal(w);
      forceFixedControlsFinal();
      setTimeout(() => { bindBackButtonsFinal(); bindAdminBuildActionsFinal(); cleanShareFinal(); forceFixedControlsFinal(); }, 20);
      setTimeout(() => { bindBackButtonsFinal(); bindAdminBuildActionsFinal(); cleanShareFinal(); forceFixedControlsFinal(); }, 750);
      return result;
    };
    window.openBuild = openBuild;
  }

  const oldFillFinal = window.fillBuildContent || (typeof fillBuildContent === 'function' ? fillBuildContent : null);
  if (oldFillFinal) {
    fillBuildContent = function(w){
      const result = oldFillFinal(w);
      bindAdminBuildActionsFinal();
      cleanShareFinal();
      if (typeof minchOptimizeImages === 'function') minchOptimizeImages(document.getElementById('buildContent') || document, 2);
      return result;
    };
    window.fillBuildContent = fillBuildContent;
  }

  const oldOpenAdminLoginFinal = window.openAdminLogin || (typeof openAdminLogin === 'function' ? openAdminLogin : null);
  if (oldOpenAdminLoginFinal) {
    openAdminLogin = function(){
      const result = oldOpenAdminLoginFinal();
      prepareLoginFinal();
      setTimeout(prepareLoginFinal, 50);
      setTimeout(forceDarkInputsFinal, 250);
      return result;
    };
    window.openAdminLogin = openAdminLogin;
  }

  const oldOpenAdminEditorFinal = window.openAdminEditor || (typeof openAdminEditor === 'function' ? openAdminEditor : null);
  if (oldOpenAdminEditorFinal) {
    openAdminEditor = function(w){
      const result = oldOpenAdminEditorFinal(w);
      setTimeout(() => { bindBackButtonsFinal(); forceFixedControlsFinal(); }, 50);
      return result;
    };
    window.openAdminEditor = openAdminEditor;
  }

  document.addEventListener('click', function(event){
    if (event.target.closest && event.target.closest('#adminPasswordToggle')) togglePasswordFinal(event);
    if (event.target.closest && event.target.closest('[data-admin-build-action]')) {
      setTimeout(bindAdminBuildActionsFinal, 0);
    }
  }, true);

  ['scroll','resize','orientationchange'].forEach(type => window.addEventListener(type, () => {
    forceFixedControlsFinal();
    setTimeout(forceFixedControlsFinal, 120);
  }, { passive:true }));

  setInterval(() => { forceFixedControlsFinal(); cleanShareFinal(); }, 1500);

  forceFixedControlsFinal();
  bindBackButtonsFinal();
  prepareLoginFinal();
  cleanShareFinal();
  setTimeout(() => { forceFixedControlsFinal(); bindBackButtonsFinal(); bindAdminBuildActionsFinal(); cleanShareFinal(); }, 500);
})();
