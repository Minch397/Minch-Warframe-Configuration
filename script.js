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
      <button class="admin-primary" type="button" data-admin-build-action="edit">Modifier la configuration</button>
      <button class="admin-secondary" type="button" data-admin-build-action="duplicate">Dupliquer</button>
      <button class="admin-danger" type="button" data-admin-build-action="delete">Supprimer</button>
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
    buildPage.scrollTop = 0;
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
  if (event.key !== "Escape") return;

  const editorModal = document.getElementById("adminEditorModal");
  if (editorModal && editorModal.classList.contains("open")) {
    closeAdminEditor();
    return;
  }

  const loginModal = document.getElementById("adminLoginModal");
  if (loginModal && loginModal.classList.contains("open")) {
    closeAdminLogin();
    return;
  }

  if (document.body.classList.contains("build-open")) {
    closeBuild();
  }
});



/* ---------- FIREBASE EN LIGNE ----------
  1) Crée ton projet Firebase
  2) Active Firestore Database
  3) Active Storage
  4) Remplace les valeurs ci-dessous par ta config Firebase Web App
  Tant que ces valeurs restent en COLLE_ICI, le site garde le mode local navigateur.
*/
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAMtIwiKOeGrdZJPJCj57PoZ86z0vmzlxY",
  authDomain: "warframe-projet.firebaseapp.com",
  projectId: "warframe-projet",
  storageBucket: "warframe-projet.firebasestorage.app",
  messagingSenderId: "659242286736",
  appId: "1:659242286736:web:838711fb0bc36345502215",
  measurementId: "G-728P068J38"
};

const FIREBASE_DOC_PATH = "warframe_site/main";
let firebaseReady = false;
let firebaseDb = null;
let firebaseStorage = null;

function isFirebaseConfigFilled() {
  return Boolean(
    FIREBASE_CONFIG.apiKey &&
    !String(FIREBASE_CONFIG.apiKey).includes("COLLE_ICI") &&
    FIREBASE_CONFIG.projectId &&
    !String(FIREBASE_CONFIG.projectId).includes("COLLE_ICI")
  );
}

function initFirebaseOnline() {
  if (!isFirebaseConfigFilled()) return false;
  if (!window.firebase) {
    console.warn("Firebase SDK non chargé. Le site reste en sauvegarde locale.");
    return false;
  }

  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    firebaseDb = firebase.firestore();
    firebaseStorage = firebase.storage();
    firebaseReady = true;
    return true;
  } catch (error) {
    console.error("Firebase impossible à initialiser :", error);
    firebaseReady = false;
    return false;
  }
}

async function loadFirebaseWarframes() {
  if (!firebaseReady || !firebaseDb) return false;
  try {
    const doc = await firebaseDb.doc(FIREBASE_DOC_PATH).get();
    const data = doc.exists ? doc.data() : null;
    if (data && Array.isArray(data.warframes)) {
      warframesData = data.warframes;
      localStorage.setItem(ADMIN_DATA_KEY, JSON.stringify(warframesData));
      return true;
    }
  } catch (error) {
    console.error("Lecture Firebase impossible :", error);
  }
  return false;
}

async function saveFirebaseWarframes() {
  if (!firebaseReady || !firebaseDb) return false;
  try {
    await firebaseDb.doc(FIREBASE_DOC_PATH).set({
      warframes: warframesData,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error("Sauvegarde Firebase impossible :", error);
    return false;
  }
}

function readFileAsDataUrl(inputId) {
  const input = document.getElementById(inputId);
  if (!input || !input.files || !input.files[0]) return Promise.resolve(null);

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(input.files[0]);
  });
}

async function uploadImageInput(inputId, folderName) {
  const input = document.getElementById(inputId);
  if (!input || !input.files || !input.files[0]) return null;

  const file = input.files[0];

  if (!firebaseReady || !firebaseStorage) {
    return await readFileAsDataUrl(inputId);
  }

  const safeName = `${Date.now()}_${slugifyText(file.name.replace(/\.[^.]+$/, ""))}.${(file.name.split(".").pop() || "png").toLowerCase()}`;
  const ref = firebaseStorage.ref().child(`warframe-images/${folderName}/${safeName}`);
  await ref.put(file, { contentType: file.type || "image/png" });
  return await ref.getDownloadURL();
}

function getFirebaseStatusText() {
  if (firebaseReady) return "Mode Firebase actif : tes modifications et images sont sauvegardées en ligne.";
  return "Mode local : colle ta config Firebase dans script.js pour sauvegarder en ligne.";
}

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
  saveFirebaseWarframes().then((savedOnline) => {
    const status = document.getElementById("adminSaveStatus");
    if (status) {
      status.textContent = savedOnline
        ? "Sauvegardé en ligne sur Firebase."
        : "Sauvegardé localement. Firebase n'est pas encore configuré ou a refusé la sauvegarde.";
    }
  });
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

  const title = document.querySelector("#adminLoginModal .admin-login-card h2");
  const hint = document.querySelector("#adminLoginModal .admin-hint");
  const userInput = document.getElementById("adminUser");
  const passWrap = document.querySelector("#adminLoginModal .admin-password-wrap");
  const passInput = document.getElementById("adminPass");
  const submit = document.getElementById("adminLoginSubmit");
  const error = document.getElementById("adminLoginError");
  const eye = document.getElementById("adminPasswordToggle");

  if (error) error.textContent = "";

  if (window.isAdminMode) {
    modal.classList.add("admin-connected-view");
    if (title) title.textContent = "Admin connecté";
    if (hint) hint.textContent = "Le mode éditeur est actif. Tu peux te déconnecter ici.";
    if (userInput) userInput.style.display = "none";
    if (passWrap) passWrap.style.display = "none";
    if (submit) submit.textContent = "Se déconnecter";
  } else {
    modal.classList.remove("admin-connected-view");
    if (title) title.textContent = "Connexion Admin";
    if (hint) hint.textContent = "Entre ton identifiant et ton mot de passe pour activer le mode éditeur.";
    if (userInput) {
      userInput.style.display = "block";
      userInput.value = "";
    }
    if (passWrap) passWrap.style.display = "block";
    if (passInput) {
      passInput.value = "";
      passInput.type = "password";
    }
    if (eye) {
      eye.classList.remove("visible");
      eye.setAttribute("aria-label", "Afficher le mot de passe");
    }
    if (submit) submit.textContent = "Se connecter";
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeAdminLogin() {
  const modal = document.getElementById("adminLoginModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function tryAdminLogin() {
  if (window.isAdminMode) {
    logoutAdmin();
    closeAdminLogin();
    return;
  }

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
    <h2>${isNew ? "Ajouter une config" : "Modifier la configuration"}</h2>
    <p class="admin-hint">${getFirebaseStatusText()}</p>

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
      <button class="admin-primary" type="button" id="saveAdminEdit">Sauvegarder en ligne</button>
      <button class="admin-secondary" type="button" id="exportAdminEdit">Exporter backup JSON</button>
      <button class="admin-secondary" type="button" id="resetAdminEdit">Réinitialiser local</button>
      <button class="admin-danger" type="button" id="logoutAdminEdit">Déconnexion</button>
    </div>
    <div id="adminSaveStatus" class="admin-success"></div>
  `;

  document.getElementById("saveAdminEdit").onclick = () => saveAdminEditor(editingWarframe, isNew, warframe?.name);
  const exportBtn = document.getElementById("exportAdminEdit");
  if (exportBtn) exportBtn.onclick = exportAdminData;
  const resetBtn = document.getElementById("resetAdminEdit");
  if (resetBtn) resetBtn.onclick = resetAdminData;
  const logoutBtn = document.getElementById("logoutAdminEdit");
  if (logoutBtn) logoutBtn.onclick = () => { logoutAdmin(); closeAdminEditor(); };

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

async function saveAdminEditor(editingWarframe, isNew, originalName) {
  const saveButton = document.getElementById("saveAdminEdit");
  const status = document.getElementById("adminSaveStatus");
  if (saveButton) saveButton.disabled = true;
  if (status) status.textContent = "Sauvegarde en cours...";

  try {
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

    const uploadJobs = [
      ["editCardImage", "cards", data => editingWarframe.cardImage = data],
      ["editFashionImage", "fashion", data => build.fashionImage = data],
      ["editBuildImage", "builds", data => build.buildImage = data],
      ["editCompanionImage", "companions", data => build.companion.image = data],
      ["editCompanionBuildImage", "companions", data => build.companion.buildImage = data],
      ["editCompanionWeaponImage", "companions", data => build.companion.weaponImage = data],
      ["editCompanionWeaponBuildImage", "companions", data => build.companion.weaponBuildImage = data],
      ["editCompanionSkinImage", "companions", data => build.companion.skinImage = data],
      ...["principale", "secondaire", "melee"].flatMap(slot => [
        [`editWeaponImage_${slot}`, `weapons/${slot}`, data => build.weapons[slot].image = data],
        [`editWeaponBuild_${slot}`, `weapon-builds/${slot}`, data => build.weapons[slot].buildImage = data]
      ])
    ];

    for (const [inputId, folder, apply] of uploadJobs) {
      const url = await uploadImageInput(inputId, folder);
      if (url) apply(url);
    }

    finishSaveAdminEditor(editingWarframe, isNew, originalName);
  } catch (error) {
    console.error(error);
    if (status) status.textContent = "Erreur pendant la sauvegarde. Regarde la console du navigateur.";
  } finally {
    if (saveButton) saveButton.disabled = false;
  }
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
  if (status) status.textContent = firebaseReady ? "Sauvegarde envoyée sur Firebase..." : "Sauvegardé dans ce navigateur.";
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

async function initWarframeSiteData() {
  initFirebaseOnline();

  const loadedOnline = await loadFirebaseWarframes();
  if (!loadedOnline) {
    loadAdminSavedData();
    await loadExternalDataFile();
  }

  updateAdminButton();
  renderGrid();
}

initWarframeSiteData();

const adminButton = document.getElementById("adminButton");
if (adminButton) {
  adminButton.addEventListener("click", () => {
    openAdminLogin();
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


/* ---------- PATCH FINAL MINCH : compat GitHub/module + boutons fonctionnels ---------- */
function showAdminConnectedState() {
  const title = document.querySelector("#adminLoginModal .admin-login-card h2");
  const hint = document.querySelector("#adminLoginModal .admin-hint");
  const user = document.getElementById("adminUser");
  const pass = document.getElementById("adminPass");
  const eye = document.getElementById("adminPasswordToggle");
  const submit = document.getElementById("adminLoginSubmit");
  const error = document.getElementById("adminLoginError");

  if (!title || !hint || !user || !pass || !submit) return;

  if (window.isAdminMode) {
    title.textContent = "Admin connecté";
    hint.textContent = "Le mode éditeur est actif. Va sur une configuration pour la modifier, la dupliquer ou la supprimer.";
    user.style.display = "none";
    pass.style.display = "none";
    if (eye) eye.style.display = "none";
    submit.textContent = "Se déconnecter";
    submit.onclick = () => {
      logoutAdmin();
      closeAdminLogin();
    };
    if (error) error.textContent = "";
  } else {
    title.textContent = "Connexion Admin";
    hint.textContent = "Entre ton identifiant et ton mot de passe pour activer le mode éditeur.";
    user.style.display = "block";
    pass.style.display = "block";
    if (eye) eye.style.display = "flex";
    submit.textContent = "Se connecter";
    submit.onclick = tryAdminLogin;
    if (error) error.textContent = "";
  }
}

const originalOpenAdminLoginFinal = openAdminLogin;
openAdminLogin = function() {
  originalOpenAdminLoginFinal();
  showAdminConnectedState();
  setTimeout(() => {
    const firstInput = document.getElementById("adminUser");
    if (firstInput && !window.isAdminMode) firstInput.focus();
  }, 50);
};

function attachAdminFloatingButtons() {
  const buildContent = document.getElementById("buildContent");
  if (!buildContent) return;

  const editBtn = buildContent.querySelector('[data-admin-build-action="edit"]');
  const duplicateBtn = buildContent.querySelector('[data-admin-build-action="duplicate"]');
  const deleteBtn = buildContent.querySelector('[data-admin-build-action="delete"]');

  if (editBtn) editBtn.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!window.currentOpenWarframe) return;
    openAdminEditor(window.currentOpenWarframe);
  };

  if (duplicateBtn) duplicateBtn.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    duplicateCurrentWarframe();
  };

  if (deleteBtn) deleteBtn.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    deleteCurrentWarframe();
  };
}

const originalFillBuildContentFinal = fillBuildContent;
fillBuildContent = function(w) {
  originalFillBuildContentFinal(w);
  attachAdminFloatingButtons();
};

const originalTryAdminLoginFinal = tryAdminLogin;
tryAdminLogin = function() {
  originalTryAdminLoginFinal();
  showAdminConnectedState();
};

const finalAdminButton = document.getElementById("adminButton");
if (finalAdminButton) {
  finalAdminButton.onclick = (event) => {
    event.preventDefault();
    openAdminLogin();
  };
}


/* ---------- PATCH FINAL STABLE MINCH ---------- */
function removeFakeAdminButtons() {
  document.querySelectorAll('body > button').forEach((button) => {
    if (button.id !== 'adminButton' && button.textContent.trim().toLowerCase() === 'admin') {
      button.remove();
    }
  });
}

function bindStableNavigationButtons() {
  const buildBack = document.querySelector('#buildPage .back');
  if (buildBack) {
    buildBack.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeBuild();
    };
  }

  const loginBack = document.querySelector('#adminLoginModal .admin-back');
  if (loginBack) {
    loginBack.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeAdminLogin();
    };
  }

  const editorBack = document.querySelector('#adminEditorModal .admin-back');
  if (editorBack) {
    editorBack.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeAdminEditor();
    };
  }

  const adminBtn = document.getElementById('adminButton');
  if (adminBtn) {
    adminBtn.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      openAdminLogin();
    };
  }
}

const stableOriginalOpenBuild = openBuild;
openBuild = function(w) {
  stableOriginalOpenBuild(w);
  setTimeout(() => {
    bindStableNavigationButtons();
    attachAdminFloatingButtons();
  }, 650);
};

const stableOriginalOpenAdminEditor = openAdminEditor;
openAdminEditor = function(warframe) {
  stableOriginalOpenAdminEditor(warframe);
  setTimeout(() => {
    bindStableNavigationButtons();
    const modal = document.getElementById('adminEditorModal');
    if (modal) modal.scrollTop = 0;
  }, 0);
};

const stableOriginalOpenAdminLogin = openAdminLogin;
openAdminLogin = function() {
  stableOriginalOpenAdminLogin();
  showAdminConnectedState();
  setTimeout(bindStableNavigationButtons, 0);
};

removeFakeAdminButtons();
bindStableNavigationButtons();
setTimeout(removeFakeAdminButtons, 100);
setTimeout(removeFakeAdminButtons, 1000);

/* Les fonctions appelées depuis le HTML doivent être accessibles avec type="module". */
window.filterWarframes = filterWarframes;
window.openBuild = openBuild;
window.closeBuild = closeBuild;
window.openAdminLogin = openAdminLogin;
window.closeAdminLogin = closeAdminLogin;
window.tryAdminLogin = tryAdminLogin;
window.logoutAdmin = logoutAdmin;
window.openAdminEditor = openAdminEditor;
window.closeAdminEditor = closeAdminEditor;
window.duplicateCurrentWarframe = duplicateCurrentWarframe;
window.deleteCurrentWarframe = deleteCurrentWarframe;
window.exportAdminData = exportAdminData;
window.resetAdminData = resetAdminData;
