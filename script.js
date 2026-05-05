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

const warframesData = [
  {
    name: "Caliban Prime",
    builds: [{
      name: "Caliban Prime Configuration",
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
    ${videoHTML}
  `;
}

function openBuild(w) {
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

/* ---------- MINCH STABLE PATCH 2026-05 : NE SUPPRIME RIEN, CORRIGE SEULEMENT ---------- */
(() => {
  const $ = (id) => document.getElementById(id);
  const q = (sel, root = document) => root.querySelector(sel);
  const qa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const safe = (value) => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const getVal = (id) => $(id)?.value ?? "";
  const isChecked = (id) => Boolean($(id)?.checked);

  function ensureBuildStructure(warframe) {
    if (!warframe.builds) warframe.builds = [{}];
    if (!warframe.builds[0]) warframe.builds[0] = {};
    const build = warframe.builds[0];

    if (!build.display) build.display = {};
    const defaultVisible = [
      "cardImage", "skinImage", "configImage", "specialWeapons", "fragments",
      "primaryWeapon", "secondaryWeapon", "meleeWeapon", "companionSkin",
      "companion", "companionWeapon", "description", "videoExplanation",
      "videoSkinWarframe", "videoSkinCompanion"
    ];
    const defaultHidden = [
      "cardText", "skinText", "configText", "specialText", "fragmentsText",
      "primaryText", "secondaryText", "meleeText", "companionSkinText",
      "companionTextBlock", "companionWeaponText", "descriptionText",
      "videoExplanationText", "videoSkinWarframeText", "videoSkinCompanionText"
    ];
    defaultVisible.forEach((key) => { if (typeof build.display[key] !== "boolean") build.display[key] = true; });
    defaultHidden.forEach((key) => { if (typeof build.display[key] !== "boolean") build.display[key] = false; });

    if (!build.blockTexts) build.blockTexts = {};
    if (!build.weapons) build.weapons = {};
    ["principale", "secondaire", "melee"].forEach((slot) => {
      if (!build.weapons[slot]) build.weapons[slot] = { name: "Nom d'arme" };
    });
    if (!build.companion) build.companion = {};
    if (!build.specialWeapons) build.specialWeapons = { enabled: false, title: "Armes exaltées / propres à la Warframe", items: [] };
    if (!Array.isArray(build.specialWeapons.items)) build.specialWeapons.items = [];
    while (build.specialWeapons.items.length < 3) {
      const i = build.specialWeapons.items.length;
      build.specialWeapons.items.push({ enabled: i === 0, name: `Arme exaltée ${i + 1}`, image: "", buildImage: "" });
    }
    if (!Array.isArray(build.fragments)) build.fragments = [];
    return build;
  }

  function imageWithScale(src, alt, scale = 100) {
    const pct = Number(scale || 100);
    const safePct = Math.min(200, Math.max(30, pct));
    return `<img src="${safe(src)}" alt="${safe(alt)}" style="max-width:${safePct}%;">`;
  }

  function textBlock(show, value) {
    if (!show || !String(value || "").trim()) return "";
    return `<div class="weapon-text-note minch-centered-note">${safe(value)}</div>`;
  }

  function renderVideo(title, url) {
    const clean = normalizeYouTubeUrl(url || "");
    if (!clean) return "";
    return `<h2>${safe(title)}</h2><div class="video"><iframe src="${safe(clean)}" title="${safe(title)}" allowfullscreen></iframe></div>`;
  }

  function copyText(text) {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    return Promise.resolve();
  }

  function shareUrl(warframe) {
    try {
      const url = new URL(location.href);
      url.hash = `warframe=${encodeURIComponent(slugifyText(warframe?.name || ""))}`;
      return url.toString();
    } catch (_) {
      return location.href;
    }
  }

  function addShareButton(warframe) {
    const root = $("buildContent");
    if (!root || root.querySelector(".minch-share-row")) return;
    const row = document.createElement("div");
    row.className = "minch-share-row";
    row.innerHTML = `<button class="minch-share-btn" type="button">Copier le lien</button>`;
    row.querySelector("button").addEventListener("click", async () => {
      await copyText(shareUrl(warframe));
      const btn = row.querySelector("button");
      btn.textContent = "Lien copié ✓";
      setTimeout(() => { btn.textContent = "Copier le lien"; }, 1300);
    });
    const adminBar = root.querySelector(".admin-floating-bar");
    if (adminBar) adminBar.after(row);
    else root.prepend(row);
  }

  function weaponData(build, warframeName, slot) {
    const weapon = build.weapons?.[slot] || {};
    return {
      name: weapon.name || "Nom d'arme",
      image: weapon.image || getWeaponImage(warframeName, slot),
      buildImage: weapon.buildImage || getWeaponBuildImage(warframeName, slot),
      imageScale: weapon.imageScale || 100,
      buildScale: weapon.buildScale || 100
    };
  }

  function companionData(build, warframeName) {
    const c = build.companion || {};
    return {
      name: c.name || "Nom du compagnon",
      skinName: c.skinName || "Skin du compagnon",
      weaponName: c.weaponName || "Nom de l'arme du compagnon",
      image: c.image || getCompanionImage(warframeName),
      buildImage: c.buildImage || getCompanionBuildImage(warframeName),
      skinImage: c.skinImage || getCompanionSkinImage(warframeName),
      weaponImage: c.weaponImage || getCompanionWeaponImage(warframeName),
      weaponBuildImage: c.weaponBuildImage || getCompanionWeaponBuildImage(warframeName),
      imageScale: c.imageScale || 100,
      buildScale: c.buildScale || 100,
      skinScale: c.skinScale || 100,
      weaponImageScale: c.weaponImageScale || 100,
      weaponBuildScale: c.weaponBuildScale || 100
    };
  }

  function renderWeaponBlock(key, title, data, d, textKey, text) {
    return `
      ${d[key] ? `<div class="weapon-section"><h2>${safe(title)}</h2><div class="weapon-row"><div class="weapon-left weapon-mini"><h3>${safe(data.name)}</h3>${imageWithScale(data.image, data.name, data.imageScale)}</div><div class="weapon-right weapon-build-big"><h3>Configuration</h3>${imageWithScale(data.buildImage, `Configuration ${data.name}`, data.buildScale)}</div></div></div>` : ""}
      ${textBlock(d[textKey], text)}
    `;
  }

  function renderBuildStable(warframe) {
    window.currentOpenWarframe = warframe;
    const build = ensureBuildStructure(warframe);
    const d = build.display;
    const t = build.blockTexts || {};
    const root = $("buildContent");
    if (!root) return;

    const specialItems = (build.specialWeapons.items || []).slice(0, 3).filter((item) => item.enabled !== false);
    const specialHtml = d.specialWeapons && build.specialWeapons.enabled !== false && specialItems.length
      ? `<div class="weapon-section special-weapon-section"><h2>${safe(build.specialWeapons.title || "Armes exaltées / propres à la Warframe")}</h2>${specialItems.map((item, i) => `<div class="weapon-row"><div class="weapon-left weapon-mini"><h3>${safe(item.name || `Arme exaltée ${i + 1}`)}</h3>${imageWithScale(item.image || getSpecialWeaponImage(warframe.name, i), item.name || `Arme exaltée ${i + 1}`, item.imageScale || 100)}</div><div class="weapon-right weapon-build-big"><h3>Configuration</h3>${imageWithScale(item.buildImage || getSpecialWeaponBuildImage(warframe.name, i), `Configuration ${item.name || `Arme exaltée ${i + 1}`}`, item.buildScale || 100)}</div></div>`).join("")}</div>`
      : "";

    const fragments = (build.fragments || []).slice(0, 5);
    const fragmentsHtml = d.fragments && fragments.length
      ? `<h2>Fragments d'Archonte</h2><div class="shards-container">${buildShardLine(fragments)}</div>`
      : "";

    const primary = weaponData(build, warframe.name, "principale");
    const secondary = weaponData(build, warframe.name, "secondaire");
    const melee = weaponData(build, warframe.name, "melee");
    const comp = companionData(build, warframe.name);

    root.innerHTML = `
      ${window.isAdminMode ? `<div class="admin-floating-bar"><button class="admin-primary" type="button" data-minch-action="edit">Modifier la configuration</button><button class="admin-secondary" type="button" data-minch-action="duplicate">Dupliquer</button><button class="admin-danger" type="button" data-minch-action="delete">Supprimer</button></div>` : ""}
      ${d.skinImage ? `<h2>Skin Warframe</h2>${imageWithScale(build.fashionImage || getFashionImage(warframe.name), `Skin ${warframe.name}`, build.fashionScale || 100)}` : ""}
      ${textBlock(d.skinText, t.skinText)}
      ${d.configImage ? `<h2>${safe(build.name || `${warframe.name} Configuration`)}</h2>${imageWithScale(build.buildImage || getBuildImage(warframe.name), `Configuration ${warframe.name}`, build.buildScale || 100)}` : ""}
      ${textBlock(d.configText, t.configText)}
      ${specialHtml}
      ${textBlock(d.specialText, t.specialText)}
      ${fragmentsHtml}
      ${textBlock(d.fragmentsText, t.fragmentsText)}
      ${renderWeaponBlock("primaryWeapon", "Arme principale", primary, d, "primaryText", t.primaryText)}
      ${renderWeaponBlock("secondaryWeapon", "Arme secondaire", secondary, d, "secondaryText", t.secondaryText)}
      ${renderWeaponBlock("meleeWeapon", "Mêlée", melee, d, "meleeText", t.meleeText)}
      ${d.companionSkin ? `<div class="weapon-section companion-section"><h2>Skin compagnon</h2><div class="companion-row companion-skin-row"><div class="companion-left companion-mini"><h3>${safe(comp.skinName)}</h3>${imageWithScale(comp.skinImage, comp.skinName, comp.skinScale)}</div></div></div>` : ""}
      ${textBlock(d.companionSkinText, t.companionSkinText)}
      ${d.companion ? `<div class="weapon-section companion-section"><h2>Compagnon</h2><div class="companion-row"><div class="companion-left companion-mini"><h3>${safe(comp.name)}</h3>${imageWithScale(comp.image, comp.name, comp.imageScale)}</div><div class="companion-right companion-build-big"><h3>Configuration du compagnon</h3>${imageWithScale(comp.buildImage, `Configuration ${comp.name}`, comp.buildScale)}</div></div></div>` : ""}
      ${textBlock(d.companionTextBlock, t.companionTextBlock)}
      ${d.companionWeapon ? `<div class="weapon-section companion-section"><h2>Arme compagnon</h2><div class="companion-row"><div class="companion-left companion-mini"><h3>${safe(comp.weaponName)}</h3>${imageWithScale(comp.weaponImage, comp.weaponName, comp.weaponImageScale)}</div><div class="companion-right companion-build-big"><h3>Configuration de l'arme du compagnon</h3>${imageWithScale(comp.weaponBuildImage, `Configuration ${comp.weaponName}`, comp.weaponBuildScale)}</div></div></div>` : ""}
      ${textBlock(d.companionWeaponText, t.companionWeaponText)}
      ${d.description && build.infoText ? `<div class="config-info-block"><h2>Description globale de la configuration</h2><div class="config-info-text minch-centered-text">${safe(build.infoText)}</div></div>` : ""}
      ${textBlock(d.descriptionText, t.descriptionText)}
      ${d.videoExplanation ? renderVideo("Vidéo explication", build.video) : ""}
      ${textBlock(d.videoExplanationText, t.videoExplanationText)}
      ${d.videoSkinWarframe ? renderVideo("Vidéo skin Warframe", build.skinVideo) : ""}
      ${textBlock(d.videoSkinWarframeText, t.videoSkinWarframeText)}
      ${d.videoSkinCompanion ? renderVideo("Vidéo skin compagnon", build.companionSkinVideo) : ""}
      ${textBlock(d.videoSkinCompanionText, t.videoSkinCompanionText)}
    `;

    addShareButton(warframe);
    bindBuildActions();
    ensureBuildBack();
    if (typeof window.minchOptimizeImages === "function") setTimeout(() => window.minchOptimizeImages(root, 3), 0);
  }

  function ensureBuildBack() {
    const page = $("buildPage");
    if (!page) return;
    let back = q(".back", page);
    if (!back) {
      back = document.createElement("button");
      back.className = "back";
      back.type = "button";
      back.textContent = "←";
      back.setAttribute("aria-label", "Retour");
      page.prepend(back);
    }
    back.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeBuild();
    };
    back.style.setProperty("display", document.body.classList.contains("build-open") ? "flex" : "none", "important");
    back.style.setProperty("position", "fixed", "important");
    back.style.setProperty("top", "18px", "important");
    back.style.setProperty("left", "20px", "important");
    back.style.setProperty("z-index", "2147483000", "important");
  }

  function bindBuildActions() {
    const root = $("buildContent");
    if (!root) return;
    const edit = q('[data-minch-action="edit"]', root);
    const duplicate = q('[data-minch-action="duplicate"]', root);
    const del = q('[data-minch-action="delete"]', root);
    if (edit) edit.onclick = (e) => { e.preventDefault(); e.stopPropagation(); openEditorStable(window.currentOpenWarframe); };
    if (duplicate) duplicate.onclick = (e) => { e.preventDefault(); e.stopPropagation(); duplicateCurrentWarframe(); };
    if (del) del.onclick = (e) => { e.preventDefault(); e.stopPropagation(); deleteCurrentWarframe(); };
  }

  function cb(id, label, value) {
    return `<label class="minch-checkline"><input id="${id}" type="checkbox" ${value ? "checked" : ""}> ${safe(label)}</label>`;
  }
  function scale(id, value = 100) {
    return `<label>Échelle image (%)<input id="${id}" class="admin-input" type="number" min="30" max="200" value="${safe(value || 100)}"></label>`;
  }
  function file(id, label) {
    return `<label>${safe(label)}<div class="admin-file-row"><input id="${id}" type="file" accept="image/*"></div></label>`;
  }
  function textarea(id, value, placeholder = "Texte") {
    return `<textarea id="${id}" class="admin-textarea" placeholder="${safe(placeholder)}">${safe(value || "")}</textarea>`;
  }
  function sectionNum(n, title) {
    return `<h3><span class="minch-order-badge">${n}</span>${safe(title)}</h3>`;
  }

  function editorSection(n, title, showImgId, showImg, fileId, fileLabel, scaleId, scaleValue, showTextId, showText, textId, textValue, extra = "") {
    return `<div class="admin-section">${sectionNum(n, title)}<div class="minch-toggle-line">${cb(showImgId, "Afficher", showImg)}${cb(showTextId, "Afficher le texte", showText)}</div>${extra}<div class="admin-grid-form">${fileId ? file(fileId, fileLabel) : ""}${scaleId ? scale(scaleId, scaleValue) : ""}</div><label>Texte${textarea(textId, textValue, `Texte ${title}`)}</label></div>`;
  }

  function decorateFileInputs() {
    const modal = $("adminEditorModal");
    if (!modal) return;
    qa('input[type="file"]', modal).forEach((input) => {
      if (input.dataset.minchDecorated === "true") return;
      input.dataset.minchDecorated = "true";
      const row = input.closest(".admin-file-row") || input.parentElement;
      if (!row) return;
      row.classList.add("minch-drop-row");
      const preview = document.createElement("div");
      preview.className = "minch-file-preview";
      preview.textContent = "Glisse une image ici ou clique pour choisir";
      row.appendChild(preview);
      const update = () => {
        const file = input.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => { preview.innerHTML = `<img src="${reader.result}" alt="preview"><span>${safe(file.name)}</span>`; };
        reader.readAsDataURL(file);
      };
      input.addEventListener("change", update);
      ["dragenter", "dragover"].forEach((type) => row.addEventListener(type, (e) => { e.preventDefault(); row.classList.add("drag-over"); }));
      ["dragleave", "drop"].forEach((type) => row.addEventListener(type, (e) => { e.preventDefault(); row.classList.remove("drag-over"); }));
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

  function openEditorStable(warframe) {
    if (!window.isAdminMode) {
      openAdminLoginStable();
      return;
    }
    const isNew = !warframe;
    const editing = isNew ? { name: "Nouvelle Warframe", builds: [createBuildFor("Nouvelle Warframe")] } : deepClone(warframe);
    const build = ensureBuildStructure(editing);
    const d = build.display;
    const t = build.blockTexts;
    const comp = build.companion;
    const weapons = build.weapons;
    const content = $("adminEditorContent");
    if (!content) return;
    content.classList.add("minch-editor-ordered");

    content.innerHTML = `
      <h2>${isNew ? "Ajouter une config" : "Modifier la configuration"}</h2>
      <p class="admin-hint">Chaque bloc peut être affiché/caché. Glisse une image sur une zone fichier pour avoir une prévisualisation.</p>

      <div class="admin-section">${sectionNum(0, "Carte Warframe")}
        <div class="admin-grid-form"><label>Nom Warframe<input id="editWarframeName" class="admin-input" value="${safe(editing.name)}"></label><label>Titre configuration<input id="editBuildName" class="admin-input" value="${safe(build.name || `${editing.name} Configuration`)}"></label>${file("editCardImage", "Image carte")}${scale("editCardScale", editing.cardScale || 100)}</div>
        ${cb("showCardText", "Afficher texte carte", d.cardText)}<label>Texte carte${textarea("textCard", t.cardText, "Texte carte")}</label>
      </div>

      ${editorSection(1, "Skin Warframe", "showSkinImage", d.skinImage, "editFashionImage", "Image skin Warframe", "editFashionScale", build.fashionScale || 100, "showSkinText", d.skinText, "textSkin", t.skinText)}
      ${editorSection(2, "Configuration de Warframe", "showConfigImage", d.configImage, "editBuildImage", "Image configuration", "editBuildScale", build.buildScale || 100, "showConfigText", d.configText, "textConfig", t.configText)}

      <div class="admin-section">${sectionNum(3, "Armes exaltées / propres à la Warframe")}
        <div class="minch-toggle-line">${cb("showSpecialWeapons", "Afficher", d.specialWeapons)}${cb("showSpecialText", "Afficher le texte", d.specialText)}</div>
        <label>Titre du bloc<input id="editSpecialTitle" class="admin-input" value="${safe(build.specialWeapons.title || "Armes exaltées / propres à la Warframe")}"></label>
        ${[0,1,2].map((i) => { const item = build.specialWeapons.items[i]; return `<div class="admin-section minch-mini-editor"><h4>Arme exaltée ${i + 1}</h4>${cb(`editSpecialEnabled_${i}`, `Afficher arme ${i + 1}`, item.enabled !== false)}<label>Nom<input id="editSpecialName_${i}" class="admin-input" value="${safe(item.name || `Arme exaltée ${i + 1}`)}"></label><div class="admin-grid-form">${file(`editSpecialImage_${i}`, "Image gauche")}${scale(`editSpecialImageScale_${i}`, item.imageScale || 100)}${file(`editSpecialBuild_${i}`, "Configuration droite")}${scale(`editSpecialBuildScale_${i}`, item.buildScale || 100)}</div></div>`; }).join("")}
        <label>Texte${textarea("textSpecial", t.specialText, "Texte armes exaltées")}</label>
      </div>

      <div class="admin-section">${sectionNum(4, "Fragments d'Archonte")}
        <div class="minch-toggle-line">${cb("showFragments", "Afficher", d.fragments)}${cb("showFragmentsText", "Afficher le texte", d.fragmentsText)}</div>
        <p class="admin-small">Jusqu'à 5 fragments. Une ligne : clé|texte</p><textarea id="editFragments" class="admin-textarea">${safe(fragmentsToText((build.fragments || []).slice(0, 5)))}</textarea>
        <label>Texte${textarea("textFragments", t.fragmentsText, "Texte fragments")}</label>
      </div>

      <div class="admin-section">${sectionNum(5, "Image arme principale avec config à droite")}<div class="minch-toggle-line">${cb("showPrimaryWeapon", "Afficher", d.primaryWeapon)}${cb("showPrimaryText", "Afficher le texte", d.primaryText)}</div><label>Nom<input id="editWeaponName_principale" class="admin-input" value="${safe(weapons.principale?.name || "")}"></label><div class="admin-grid-form">${file("editWeaponImage_principale", "Image arme")}${scale("editWeaponImageScale_principale", weapons.principale?.imageScale || 100)}${file("editWeaponBuild_principale", "Image config")}${scale("editWeaponBuildScale_principale", weapons.principale?.buildScale || 100)}</div><label>Texte${textarea("textPrimary", t.primaryText, "Texte arme principale")}</label></div>
      <div class="admin-section">${sectionNum(6, "Image arme secondaire avec config à droite")}<div class="minch-toggle-line">${cb("showSecondaryWeapon", "Afficher", d.secondaryWeapon)}${cb("showSecondaryText", "Afficher le texte", d.secondaryText)}</div><label>Nom<input id="editWeaponName_secondaire" class="admin-input" value="${safe(weapons.secondaire?.name || "")}"></label><div class="admin-grid-form">${file("editWeaponImage_secondaire", "Image arme")}${scale("editWeaponImageScale_secondaire", weapons.secondaire?.imageScale || 100)}${file("editWeaponBuild_secondaire", "Image config")}${scale("editWeaponBuildScale_secondaire", weapons.secondaire?.buildScale || 100)}</div><label>Texte${textarea("textSecondary", t.secondaryText, "Texte arme secondaire")}</label></div>
      <div class="admin-section">${sectionNum(7, "Image mêlée avec config à droite")}<div class="minch-toggle-line">${cb("showMeleeWeapon", "Afficher", d.meleeWeapon)}${cb("showMeleeText", "Afficher le texte", d.meleeText)}</div><label>Nom<input id="editWeaponName_melee" class="admin-input" value="${safe(weapons.melee?.name || "")}"></label><div class="admin-grid-form">${file("editWeaponImage_melee", "Image mêlée")}${scale("editWeaponImageScale_melee", weapons.melee?.imageScale || 100)}${file("editWeaponBuild_melee", "Image config")}${scale("editWeaponBuildScale_melee", weapons.melee?.buildScale || 100)}</div><label>Texte${textarea("textMelee", t.meleeText, "Texte mêlée")}</label></div>

      ${editorSection(8, "Image compagnon skin", "showCompanionSkin", d.companionSkin, "editCompanionSkinImage", "Image skin compagnon", "editCompanionSkinScale", comp.skinScale || 100, "showCompanionSkinText", d.companionSkinText, "textCompanionSkin", t.companionSkinText, `<label>Nom skin<input id="editCompanionSkinName" class="admin-input" value="${safe(comp.skinName || "")}"></label>`)}
      <div class="admin-section">${sectionNum(9, "Image compagnon avec config à droite")}<div class="minch-toggle-line">${cb("showCompanion", "Afficher", d.companion)}${cb("showCompanionTextBlock", "Afficher le texte", d.companionTextBlock)}</div><label>Nom<input id="editCompanionName" class="admin-input" value="${safe(comp.name || "")}"></label><div class="admin-grid-form">${file("editCompanionImage", "Image compagnon")}${scale("editCompanionImageScale", comp.imageScale || 100)}${file("editCompanionBuildImage", "Image config compagnon")}${scale("editCompanionBuildScale", comp.buildScale || 100)}</div><label>Texte${textarea("textCompanion", t.companionTextBlock, "Texte compagnon")}</label></div>
      <div class="admin-section">${sectionNum(10, "Image arme compagnon avec config à droite")}<div class="minch-toggle-line">${cb("showCompanionWeapon", "Afficher", d.companionWeapon)}${cb("showCompanionWeaponText", "Afficher le texte", d.companionWeaponText)}</div><label>Nom<input id="editCompanionWeaponName" class="admin-input" value="${safe(comp.weaponName || "")}"></label><div class="admin-grid-form">${file("editCompanionWeaponImage", "Image arme compagnon")}${scale("editCompanionWeaponImageScale", comp.weaponImageScale || 100)}${file("editCompanionWeaponBuildImage", "Image config arme compagnon")}${scale("editCompanionWeaponBuildScale", comp.weaponBuildScale || 100)}</div><label>Texte${textarea("textCompanionWeapon", t.companionWeaponText, "Texte arme compagnon")}</label></div>

      <div class="admin-section">${sectionNum(11, "Description globale de la configuration")}<div class="minch-toggle-line">${cb("showDescription", "Afficher", d.description)}${cb("showDescriptionText", "Afficher texte supplémentaire", d.descriptionText)}</div><label>Description${textarea("editInfoText", build.infoText || "", "Description globale")}</label><label>Texte${textarea("textDescription", t.descriptionText, "Texte supplémentaire")}</label></div>
      <div class="admin-section">${sectionNum(12, "Lien vidéo YouTube explication")}<div class="minch-toggle-line">${cb("showVideoExplanation", "Afficher", d.videoExplanation)}${cb("showVideoExplanationText", "Afficher le texte", d.videoExplanationText)}</div><label>Lien<input id="editVideo" class="admin-input" value="${safe(build.video || "")}" placeholder="https://www.youtube.com/watch?v=..."></label><label>Texte${textarea("textVideoExplanation", t.videoExplanationText, "Texte vidéo explication")}</label></div>
      <div class="admin-section">${sectionNum(13, "Lien vidéo YouTube skin Warframe")}<div class="minch-toggle-line">${cb("showVideoSkinWarframe", "Afficher", d.videoSkinWarframe)}${cb("showVideoSkinWarframeText", "Afficher le texte", d.videoSkinWarframeText)}</div><label>Lien<input id="editSkinVideo" class="admin-input" value="${safe(build.skinVideo || "")}" placeholder="https://www.youtube.com/watch?v=..."></label><label>Texte${textarea("textVideoSkinWarframe", t.videoSkinWarframeText, "Texte vidéo skin Warframe")}</label></div>
      <div class="admin-section">${sectionNum(14, "Lien vidéo YouTube skin compagnon")}<div class="minch-toggle-line">${cb("showVideoSkinCompanion", "Afficher", d.videoSkinCompanion)}${cb("showVideoSkinCompanionText", "Afficher le texte", d.videoSkinCompanionText)}</div><label>Lien<input id="editCompanionSkinVideo" class="admin-input" value="${safe(build.companionSkinVideo || "")}" placeholder="https://www.youtube.com/watch?v=..."></label><label>Texte${textarea("textVideoSkinCompanion", t.videoSkinCompanionText, "Texte vidéo skin compagnon")}</label></div>

      <div class="admin-toolbar"><button class="admin-primary" type="button" id="saveAdminEdit">Sauvegarder en ligne</button><button class="admin-secondary" type="button" id="exportAdminEdit">Exporter backup JSON</button><button class="admin-secondary" type="button" id="resetAdminEdit">Réinitialiser local</button><button class="admin-danger" type="button" id="logoutAdminEdit">Déconnexion</button></div>
      <div id="adminSaveStatus" class="admin-success"></div>
    `;

    $("saveAdminEdit").onclick = () => saveEditorStable(editing, isNew, warframe?.name);
    $("exportAdminEdit").onclick = exportAdminData;
    $("resetAdminEdit").onclick = resetAdminData;
    $("logoutAdminEdit").onclick = () => { logoutAdmin(); closeAdminEditor(); };
    const modal = $("adminEditorModal");
    if (modal) { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); modal.scrollTop = 0; }
    setTimeout(decorateFileInputs, 40);
    bindModalBack();
  }

  async function fileToDataUrlPromise(id) {
    return new Promise((resolve) => fileToDataUrl(id, resolve));
  }
  async function maybeApply(id, apply) {
    const data = await fileToDataUrlPromise(id);
    if (data) apply(data);
  }

  async function saveEditorStable(editing, isNew, originalName) {
    const status = $("adminSaveStatus");
    const saveBtn = $("saveAdminEdit");
    if (saveBtn) saveBtn.disabled = true;
    if (status) status.textContent = "Sauvegarde en cours...";
    try {
      editing.name = getVal("editWarframeName").trim() || "Nouvelle Warframe";
      editing.cardScale = Number(getVal("editCardScale") || 100);
      const build = ensureBuildStructure(editing);
      build.name = getVal("editBuildName").trim() || `${editing.name} Configuration`;
      build.fashionScale = Number(getVal("editFashionScale") || 100);
      build.buildScale = Number(getVal("editBuildScale") || 100);
      build.infoText = getVal("editInfoText").trim();
      build.video = normalizeYouTubeUrl(getVal("editVideo"));
      build.skinVideo = normalizeYouTubeUrl(getVal("editSkinVideo"));
      build.companionSkinVideo = normalizeYouTubeUrl(getVal("editCompanionSkinVideo"));
      build.fragments = textToFragments(getVal("editFragments")).slice(0, 5);
      build.display = {
        cardText: isChecked("showCardText"), skinImage: isChecked("showSkinImage"), skinText: isChecked("showSkinText"),
        configImage: isChecked("showConfigImage"), configText: isChecked("showConfigText"), specialWeapons: isChecked("showSpecialWeapons"), specialText: isChecked("showSpecialText"),
        fragments: isChecked("showFragments"), fragmentsText: isChecked("showFragmentsText"), primaryWeapon: isChecked("showPrimaryWeapon"), primaryText: isChecked("showPrimaryText"),
        secondaryWeapon: isChecked("showSecondaryWeapon"), secondaryText: isChecked("showSecondaryText"), meleeWeapon: isChecked("showMeleeWeapon"), meleeText: isChecked("showMeleeText"),
        companionSkin: isChecked("showCompanionSkin"), companionSkinText: isChecked("showCompanionSkinText"), companion: isChecked("showCompanion"), companionTextBlock: isChecked("showCompanionTextBlock"),
        companionWeapon: isChecked("showCompanionWeapon"), companionWeaponText: isChecked("showCompanionWeaponText"), description: isChecked("showDescription"), descriptionText: isChecked("showDescriptionText"),
        videoExplanation: isChecked("showVideoExplanation"), videoExplanationText: isChecked("showVideoExplanationText"), videoSkinWarframe: isChecked("showVideoSkinWarframe"), videoSkinWarframeText: isChecked("showVideoSkinWarframeText"),
        videoSkinCompanion: isChecked("showVideoSkinCompanion"), videoSkinCompanionText: isChecked("showVideoSkinCompanionText")
      };
      build.blockTexts = {
        cardText: getVal("textCard"), skinText: getVal("textSkin"), configText: getVal("textConfig"), specialText: getVal("textSpecial"), fragmentsText: getVal("textFragments"),
        primaryText: getVal("textPrimary"), secondaryText: getVal("textSecondary"), meleeText: getVal("textMelee"), companionSkinText: getVal("textCompanionSkin"),
        companionTextBlock: getVal("textCompanion"), companionWeaponText: getVal("textCompanionWeapon"), descriptionText: getVal("textDescription"),
        videoExplanationText: getVal("textVideoExplanation"), videoSkinWarframeText: getVal("textVideoSkinWarframe"), videoSkinCompanionText: getVal("textVideoSkinCompanion")
      };
      build.specialWeapons.title = getVal("editSpecialTitle").trim() || "Armes exaltées / propres à la Warframe";
      build.specialWeapons.enabled = isChecked("showSpecialWeapons");
      [0,1,2].forEach((i) => {
        const item = build.specialWeapons.items[i];
        item.enabled = isChecked(`editSpecialEnabled_${i}`);
        item.name = getVal(`editSpecialName_${i}`).trim() || `Arme exaltée ${i + 1}`;
        item.imageScale = Number(getVal(`editSpecialImageScale_${i}`) || 100);
        item.buildScale = Number(getVal(`editSpecialBuildScale_${i}`) || 100);
      });
      ["principale", "secondaire", "melee"].forEach((slot) => {
        const w = build.weapons[slot];
        w.name = getVal(`editWeaponName_${slot}`).trim() || "Nom d'arme";
        w.imageScale = Number(getVal(`editWeaponImageScale_${slot}`) || 100);
        w.buildScale = Number(getVal(`editWeaponBuildScale_${slot}`) || 100);
      });
      build.companion.name = getVal("editCompanionName").trim() || "Nom du compagnon";
      build.companion.skinName = getVal("editCompanionSkinName").trim() || "Skin du compagnon";
      build.companion.weaponName = getVal("editCompanionWeaponName").trim() || "Nom de l'arme du compagnon";
      build.companion.skinScale = Number(getVal("editCompanionSkinScale") || 100);
      build.companion.imageScale = Number(getVal("editCompanionImageScale") || 100);
      build.companion.buildScale = Number(getVal("editCompanionBuildScale") || 100);
      build.companion.weaponImageScale = Number(getVal("editCompanionWeaponImageScale") || 100);
      build.companion.weaponBuildScale = Number(getVal("editCompanionWeaponBuildScale") || 100);

      await maybeApply("editCardImage", (u) => editing.cardImage = u);
      await maybeApply("editFashionImage", (u) => build.fashionImage = u);
      await maybeApply("editBuildImage", (u) => build.buildImage = u);
      for (const i of [0,1,2]) {
        await maybeApply(`editSpecialImage_${i}`, (u) => build.specialWeapons.items[i].image = u);
        await maybeApply(`editSpecialBuild_${i}`, (u) => build.specialWeapons.items[i].buildImage = u);
      }
      for (const slot of ["principale", "secondaire", "melee"]) {
        await maybeApply(`editWeaponImage_${slot}`, (u) => build.weapons[slot].image = u);
        await maybeApply(`editWeaponBuild_${slot}`, (u) => build.weapons[slot].buildImage = u);
      }
      await maybeApply("editCompanionSkinImage", (u) => build.companion.skinImage = u);
      await maybeApply("editCompanionImage", (u) => build.companion.image = u);
      await maybeApply("editCompanionBuildImage", (u) => build.companion.buildImage = u);
      await maybeApply("editCompanionWeaponImage", (u) => build.companion.weaponImage = u);
      await maybeApply("editCompanionWeaponBuildImage", (u) => build.companion.weaponBuildImage = u);

      if (isNew) warframesData.push(editing);
      else {
        const index = warframesData.findIndex((w) => w.name === originalName);
        if (index >= 0) warframesData[index] = editing;
      }
      window.currentOpenWarframe = editing;
      refreshAfterAdminChange();
      renderBuildStable(editing);
      if (status) status.textContent = "Sauvegardé.";
    } catch (error) {
      console.error(error);
      if (status) status.textContent = "Erreur pendant la sauvegarde.";
    } finally {
      if (saveBtn) saveBtn.disabled = false;
    }
  }

  function bindModalBack() {
    qa("#adminLoginModal .admin-back").forEach((btn) => btn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); closeAdminLogin(); });
    qa("#adminEditorModal .admin-back").forEach((btn) => btn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); closeAdminEditor(); });
  }

  function showLoginMode() {
    const modal = $("adminLoginModal");
    const title = q("#adminLoginModal h2");
    const hint = q("#adminLoginModal .admin-hint");
    const user = $("adminUser");
    const wrap = q("#adminLoginModal .admin-password-wrap");
    const pass = $("adminPass");
    const eye = $("adminPasswordToggle");
    const submit = $("adminLoginSubmit");
    const error = $("adminLoginError");
    if (!modal || !title || !hint || !submit) return;
    modal.classList.remove("admin-connected-view");
    title.textContent = "Connexion Admin";
    hint.textContent = "Entre ton identifiant et ton mot de passe pour activer le mode éditeur.";
    if (user) user.style.display = "block";
    if (wrap) wrap.style.display = "block";
    if (pass) pass.style.display = "block";
    if (eye) eye.style.display = "flex";
    if (error) error.textContent = "";
    submit.textContent = "Se connecter";
    submit.onclick = (e) => { e.preventDefault(); e.stopPropagation(); tryAdminLogin(); setTimeout(() => { if (window.isAdminMode) openAdminStatusStable(); }, 40); };
    updateEye();
  }

  function openAdminStatusStable() {
    const modal = $("adminLoginModal");
    const title = q("#adminLoginModal h2");
    const hint = q("#adminLoginModal .admin-hint");
    const user = $("adminUser");
    const wrap = q("#adminLoginModal .admin-password-wrap");
    const pass = $("adminPass");
    const eye = $("adminPasswordToggle");
    const submit = $("adminLoginSubmit");
    const error = $("adminLoginError");
    if (!modal || !title || !hint || !submit) return;
    modal.classList.add("open", "admin-connected-view");
    modal.setAttribute("aria-hidden", "false");
    title.textContent = "Admin connecté";
    hint.textContent = "Le mode éditeur est actif. Va sur une configuration pour la modifier, la dupliquer ou la supprimer.";
    if (user) user.style.display = "none";
    if (wrap) wrap.style.display = "none";
    if (pass) pass.style.display = "none";
    if (eye) eye.style.display = "none";
    if (error) error.textContent = "";
    submit.textContent = "Se déconnecter";
    submit.classList.add("admin-centered-logout");
    submit.onclick = (e) => { e.preventDefault(); e.stopPropagation(); logoutAdmin(); closeAdminLogin(); };
    bindModalBack();
  }

  function openAdminLoginStable() {
    const modal = $("adminLoginModal");
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    showLoginMode();
    bindModalBack();
  }

  function updateEye() {
    const pass = $("adminPass");
    const eye = $("adminPasswordToggle");
    if (!pass || !eye) return;
    eye.classList.toggle("visible", pass.type === "text");
    eye.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      pass.type = pass.type === "password" ? "text" : "password";
      updateEye();
    };
  }

  function bindAdminButton() {
    const old = $("adminButton");
    if (!old || old.dataset.minchStableBound === "true") return;
    const btn = old.cloneNode(true);
    btn.dataset.minchStableBound = "true";
    old.replaceWith(btn);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (window.isAdminMode) openAdminStatusStable();
      else openAdminLoginStable();
    });
  }

  function forceFixedControls() {
    const music = $("musicPanel");
    const admin = $("adminButton");
    if (music) {
      music.style.setProperty("position", "fixed", "important");
      music.style.setProperty("top", "16px", "important");
      music.style.setProperty("left", "16px", "important");
      music.style.setProperty("z-index", "999999", "important");
      music.style.setProperty("opacity", "1", "important");
      music.style.setProperty("visibility", "visible", "important");
      music.style.setProperty("pointer-events", "auto", "important");
    }
    if (admin) {
      admin.style.setProperty("position", "fixed", "important");
      admin.style.setProperty("top", "16px", "important");
      admin.style.setProperty("right", "16px", "important");
      admin.style.setProperty("z-index", "1000000", "important");
      admin.style.setProperty("opacity", "1", "important");
      admin.style.setProperty("visibility", "visible", "important");
      admin.style.setProperty("pointer-events", "auto", "important");
    }
    ensureBuildBack();
  }

  function filterStable() {
    const input = $("search");
    const normalize = (v) => String(v || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
    const tokens = normalize(input?.value || "").split(/\s+/).filter(Boolean);
    const list = !tokens.length ? warframesData : warframesData.filter((w) => {
      const b = w.builds?.[0] || {};
      const hay = normalize([w.name, b.name, b.infoText, b.weapons?.principale?.name, b.weapons?.secondaire?.name, b.weapons?.melee?.name, b.companion?.name].filter(Boolean).join(" "));
      return tokens.every((t) => hay.includes(t));
    });
    renderWarframes(list);
  }

  const oldOpenBuild = openBuild;
  openBuild = function(w) {
    window.currentOpenWarframe = w;
    const result = oldOpenBuild(w);
    setTimeout(() => { renderBuildStable(w); forceFixedControls(); bindBuildActions(); }, 470);
    setTimeout(() => { forceFixedControls(); bindBuildActions(); }, 900);
    return result;
  };

  const oldCloseBuild = closeBuild;
  closeBuild = function() {
    const result = oldCloseBuild();
    setTimeout(() => { ensureBuildBack(); forceFixedControls(); }, 50);
    return result;
  };

  const oldRefresh = refreshAfterAdminChange;
  refreshAfterAdminChange = function() {
    oldRefresh();
    if (window.currentOpenWarframe && document.body.classList.contains("build-open")) renderBuildStable(window.currentOpenWarframe);
    bindAdminButton();
  };

  window.openBuild = openBuild;
  window.closeBuild = closeBuild;
  window.fillBuildContent = renderBuildStable;
  fillBuildContent = renderBuildStable;
  window.openAdminEditor = openEditorStable;
  openAdminEditor = openEditorStable;
  window.duplicateCurrentWarframe = duplicateCurrentWarframe;
  window.deleteCurrentWarframe = deleteCurrentWarframe;
  window.exportAdminData = exportAdminData;
  window.resetAdminData = resetAdminData;
  window.logoutAdmin = logoutAdmin;
  window.filterWarframes = filterStable;
  filterWarframes = filterStable;
  window.openAdminLogin = openAdminLoginStable;
  openAdminLogin = openAdminLoginStable;

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if ($("adminEditorModal")?.classList.contains("open")) { e.preventDefault(); closeAdminEditor(); return; }
    if ($("adminLoginModal")?.classList.contains("open")) { e.preventDefault(); closeAdminLogin(); return; }
    if (document.body.classList.contains("build-open")) { e.preventDefault(); closeBuild(); }
  }, true);

  document.addEventListener("click", (e) => {
    const action = e.target.closest?.("[data-minch-action]");
    if (action) {
      e.preventDefault(); e.stopPropagation();
      if (action.dataset.minchAction === "edit") openEditorStable(window.currentOpenWarframe);
      if (action.dataset.minchAction === "duplicate") duplicateCurrentWarframe();
      if (action.dataset.minchAction === "delete") deleteCurrentWarframe();
    }
  }, true);

  bindAdminButton();
  updateEye();
  bindModalBack();
  forceFixedControls();
  setTimeout(() => { bindAdminButton(); forceFixedControls(); }, 100);
  setInterval(forceFixedControls, 1500);
  ["scroll", "resize", "orientationchange"].forEach((ev) => window.addEventListener(ev, () => setTimeout(forceFixedControls, 50), { passive: true }));
})();
