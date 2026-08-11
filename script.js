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


/* ---------- FIREBASE ONLINE : CONFIG + STORAGE + FIRESTORE ----------
  IMPORTANT : colle ici la configuration Web de ton projet Firebase.
  Firebase Console > Paramètres du projet > Général > Tes applications > Application Web.
  Tant que apiKey/appId restent vides, le site garde le fonctionnement local sans casser le design.
*/
const MINCH_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCDv2t3LaNp20izyKtjd38RmDkvmGrLZvQ",
  authDomain: "warframe-minch-configuration.firebaseapp.com",
  projectId: "warframe-minch-configuration",
  storageBucket: "warframe-minch-configuration.firebasestorage.app",
  messagingSenderId: "836457544046",
  appId: "1:836457544046:web:447e987af159714f83297f",
  measurementId: "G-MMPHDQZ245"
};

const FIREBASE_COLLECTION = "warframe_site";
const FIREBASE_DOCUMENT = "main";

let firebaseReady = false;
let firebaseDb = null;
let firebaseStorage = null;

function hasValidFirebaseConfig() {
  return Boolean(
    MINCH_FIREBASE_CONFIG.apiKey &&
    MINCH_FIREBASE_CONFIG.projectId &&
    MINCH_FIREBASE_CONFIG.storageBucket &&
    MINCH_FIREBASE_CONFIG.appId &&
    window.firebase
  );
}

function initMinchFirebase() {
  if (firebaseReady) return true;
  if (!hasValidFirebaseConfig()) return false;

  try {
    if (!firebase.apps || !firebase.apps.length) {
      firebase.initializeApp(MINCH_FIREBASE_CONFIG);
    }
    firebaseDb = firebase.firestore();
    firebaseStorage = firebase.storage();
    firebaseReady = true;
    console.log("Firebase connecté : sauvegarde en ligne activée.");
    return true;
  } catch (error) {
    firebaseReady = false;
    firebaseDb = null;
    firebaseStorage = null;
    console.error("Firebase non connecté :", error);
    return false;
  }
}

async function loadFirebaseAdminData() {
  if (!initMinchFirebase() || !firebaseDb) return null;
  try {
    const doc = await firebaseDb.collection(FIREBASE_COLLECTION).doc(FIREBASE_DOCUMENT).get();
    if (!doc.exists) return null;
    const data = doc.data() || {};
    return Array.isArray(data.warframesData) ? data.warframesData : null;
  } catch (error) {
    console.error("Chargement Firestore impossible :", error);
    return null;
  }
}

async function saveFirebaseAdminData() {
  if (!initMinchFirebase() || !firebaseDb) return false;
  try {
    await firebaseDb.collection(FIREBASE_COLLECTION).doc(FIREBASE_DOCUMENT).set({
      warframesData,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error("Sauvegarde Firestore impossible :", error);
    return false;
  }
}

function dataUrlToBlob(dataUrl) {
  return fetch(dataUrl).then(response => response.blob());
}

async function compressImageForFirebase(file) {
  if (typeof minchCompressImageFile === "function") {
    return await minchCompressImageFile(file);
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onerror = () => resolve(null);
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

async function uploadImageInput(inputId, folderName) {
  const input = document.getElementById(inputId);
  if (!input || !input.files || !input.files[0]) return null;

  const file = input.files[0];
  const cleanFolder = slugifyText(folderName || "images");
  const cleanName = slugifyText(file.name.replace(/\.[^.]+$/, "")) || "image";

  if (!initMinchFirebase() || !firebaseStorage) {
    return await compressImageForFirebase(file);
  }

  try {
    const dataUrl = await compressImageForFirebase(file);
    const blob = await dataUrlToBlob(dataUrl);
    const extension = blob.type === "image/png" ? "png" : "webp";
    const fileName = `${Date.now()}_${cleanName}.${extension}`;
    const ref = firebaseStorage.ref().child(`warframe-images/${cleanFolder}/${fileName}`);

    await ref.put(blob, {
      contentType: blob.type || "image/webp",
      customMetadata: { originalName: file.name }
    });

    return await ref.getDownloadURL();
  } catch (error) {
    console.error("Upload Firebase Storage impossible :", error);
    return await compressImageForFirebase(file);
  }
}

window.uploadImageInput = uploadImageInput;
window.initMinchFirebase = initMinchFirebase;

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
  const firebaseData = await loadFirebaseAdminData();
  if (Array.isArray(firebaseData)) {
    warframesData = firebaseData;
    localStorage.setItem(ADMIN_DATA_KEY, JSON.stringify(warframesData));
    renderGrid();
    return;
  }

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
  saveFirebaseAdminData().then((savedOnline) => {
    const status = document.getElementById("adminSaveStatus");
    if (status && savedOnline) status.textContent = "Sauvegardé en ligne sur Firebase.";
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

  Promise.all(uploads.map(async ([id, apply]) => {
    const folder = `${slugifyText(newName)}/${id.replace(/^edit/, "").toLowerCase()}`;
    const data = await uploadImageInput(id, folder);
    if (data) apply(data);
  })).then(() => {
    finishSaveAdminEditor(editingWarframe, isNew, originalName);
  }).catch((error) => {
    console.error("Erreur sauvegarde images :", error);
    finishSaveAdminEditor(editingWarframe, isNew, originalName);
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
  if (status) status.textContent = firebaseReady ? "Sauvegarde en cours vers Firebase..." : "Sauvegardé dans ce navigateur. Firebase non configuré.";
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
    const maxSize = options.maxSize || 3200;
    const quality = options.quality || 0.94;
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
    const isBuild = document.body.classList.contains('build-open');
    const music = (typeof byId === 'function' ? byId('musicPanel') : document.getElementById('musicPanel')) || document.getElementById('musicPanel');
    const admin = (typeof byId === 'function' ? byId('adminButton') : document.getElementById('adminButton')) || document.getElementById('adminButton');
    const apply = (el, props) => { if (!el) return; Object.keys(props).forEach(k => el.style.setProperty(k, props[k], 'important')); };
    if (isBuild) {
      apply(music, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      apply(admin, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      return;
    }
    apply(music, { display:'flex', position:'absolute', top:'16px', left:'16px', right:'auto', 'z-index':'2200', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
    apply(admin, { display:'flex', position:'absolute', top:'16px', right:'16px', left:'auto', 'z-index':'2201', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
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
    const login = document.getElementById('adminLoginModal');
    const pass = document.getElementById('adminPass');
    const eye = document.getElementById('adminPasswordToggle');
    const user = document.getElementById('adminUser');
    const wrap = pass ? pass.closest('.admin-password-wrap') : document.querySelector('#adminLoginModal .admin-password-wrap');
    const connected = !!window.isAdminMode && login && login.classList.contains('open');
    const apply = (el, prop, value) => { if (el) el.style.setProperty(prop, value, 'important'); };
    if (connected) {
      apply(user, 'display', 'none');
      apply(pass, 'display', 'none');
      apply(wrap, 'display', 'none');
      apply(eye, 'display', 'none');
      return;
    }
    if (!pass || !eye) return;
    if (wrap) wrap.style.removeProperty('display');
    eye.style.removeProperty('display');
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

/* ---------- MINCH FINAL : EDITEUR ORDONNÉ + FIXS UI DEMANDÉS ---------- */
(function(){
  const $ = (id) => document.getElementById(id);

  function safe(v){
    return String(v ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;");
  }

  function sectionDefaults(build){
    if (!build.display) build.display = {};
    const keys = [
      "skinImage","skinText","configImage","configText","specialWeapons","specialText","fragments","fragmentsText",
      "primaryWeapon","primaryText","secondaryWeapon","secondaryText","meleeWeapon","meleeText",
      "companionSkin","companionSkinText","companion","companionTextBlock","companionWeapon","companionWeaponText",
      "description","descriptionText","videoExplanation","videoExplanationText","videoSkinWarframe","videoSkinWarframeText","videoSkinCompanion","videoSkinCompanionText"
    ];
    keys.forEach(k => { if (typeof build.display[k] !== "boolean") build.display[k] = true; });
    // Par défaut les textes simples sous les images ne s'affichent que si tu les coches.
    ["skinText","configText","specialText","fragmentsText","primaryText","secondaryText","meleeText","companionSkinText","companionTextBlock","companionWeaponText","descriptionText","videoExplanationText","videoSkinWarframeText","videoSkinCompanionText"].forEach(k => {
      if (build.display[k] === undefined) build.display[k] = false;
    });
    if (!build.blockTexts) build.blockTexts = {};
    if (!build.textSizes) build.textSizes = {};
    [
      "skinText","configText","specialText","fragmentsText","primaryText","secondaryText","meleeText",
      "companionSkinText","companionTextBlock","companionWeaponText","description","descriptionText",
      "videoExplanationText","videoSkinWarframeText","videoSkinCompanionText"
    ].forEach(k => {
      const n = Number(build.textSizes[k]);
      build.textSizes[k] = Number.isFinite(n) ? Math.max(10, Math.min(40, n)) : 16;
    });
    if (!build.imageScales) build.imageScales = {};
    [
      "fashionImage","buildImage",
      "special0Image","special0Build","special1Image","special1Build","special2Image","special2Build",
      "primaryImage","primaryBuild","secondaryImage","secondaryBuild","meleeImage","meleeBuild",
      "companionSkinImage","companionImage","companionBuild","companionWeaponImage","companionWeaponBuild"
    ].forEach(k => {
      if (!Number(build.imageScales[k])) build.imageScales[k] = 100;
    });
    if (!build.specialWeapons) build.specialWeapons = { enabled:true, title:"Armes exaltées / propres à la Warframe", items:[] };
    if (!Array.isArray(build.specialWeapons.items)) build.specialWeapons.items = [];
    while (build.specialWeapons.items.length < 3) {
      const i = build.specialWeapons.items.length;
      build.specialWeapons.items.push({ enabled:i===0, name:`Arme exaltée ${i+1}`, image:"", buildImage:"" });
    }
    if (!build.weapons) build.weapons = {};
    ["principale","secondaire","melee"].forEach(slot => { if (!build.weapons[slot]) build.weapons[slot] = { name:"" }; });
    if (!build.companion) build.companion = {};
    return build;
  }

  function checked(id){ return $(id) ? $(id).checked : false; }
  function val(id){ return $(id) ? $(id).value : ""; }

  function cb(id, label, on=true){
    return `<label><input id="${id}" type="checkbox" ${on ? "checked" : ""}> ${label}</label>`;
  }

  function textArea(id, value, placeholder="Texte"){
    return `<textarea id="${id}" class="admin-textarea" placeholder="${safe(placeholder)}">${safe(value || "")}</textarea>`;
  }

  function fileRow(id, label){
    const scaleInfo = (window.__minchImageScaleMap && window.__minchImageScaleMap[id]) || null;
    const scaleHTML = scaleInfo
      ? `<label class="minch-scale-label">Échelle image
          <input id="${scaleInfo.inputId}" class="minch-scale-range" type="range" min="40" max="160" value="${scaleInfo.value}">
          <span class="minch-scale-value" data-scale-for="${scaleInfo.inputId}">${scaleInfo.value}%</span>
        </label>`
      : "";
    return `<label>${safe(label)}<div class="admin-file-row"><input id="${id}" type="file" accept="image/*"></div></label>${scaleHTML}`;
  }

  function scaleValue(build, key, fallback=100){
    const value = Number(build?.imageScales?.[key] || fallback);
    return Number.isFinite(value) ? Math.max(40, Math.min(160, value)) : fallback;
  }

  function imgTag(src, alt, build, scaleKey, extraClass=""){
    const scale = scaleValue(build, scaleKey, 100);
    return `<img class="minch-scaled-img ${extraClass}" src="${safe(src)}" alt="${safe(alt)}" style="--minch-scale:${scale / 100};">`;
  }

  function bindScaleLiveLabels(){
    document.querySelectorAll(".minch-scale-range").forEach(input => {
      const update = () => {
        const output = document.querySelector(`[data-scale-for="${input.id}"]`);
        if (output) output.textContent = `${input.value}%`;
      };
      input.addEventListener("input", update);
      update();
    });
  }

  function sectionTitle(n, title){
    return `<h3><span class="minch-order-badge">${n}</span>${safe(title)}</h3>`;
  }

  function mediaTextHTML(show, text, size=16){
    if (!show || !text) return "";
    const px = Math.max(10, Math.min(40, Number(size) || 16));
    return `<div class="weapon-text-note" style="font-size:${px}px">${window.minchRichTextHTML ? window.minchRichTextHTML(text) : safe(text)}</div>`;
  }

  function textSizeControl(build, key, label="Taille du texte"){
    const px = Math.max(10, Math.min(40, Number(build?.textSizes?.[key]) || 16));
    return `<label class="minch-text-size-control">${safe(label)}
      <input id="textSize_${key}" class="minch-text-size-input" type="number" min="10" max="40" step="1" value="${px}">
      <span>px</span>
    </label>`;
  }

  function videoHTML(title, url){
    if (!url) return "";
    return `
      <div class="minch-video-row">
        <h2>${safe(title)}</h2>
        <div class="video"><iframe src="${safe(normalizeYouTubeUrl(url))}" title="${safe(title)}" allowfullscreen></iframe></div>
      </div>
    `;
  }

  function finalShareUrl(warframe){
    try {
      const u = new URL(location.href);
      u.hash = `warframe=${encodeURIComponent(slugifyText(warframe?.name || ""))}`;
      return u.toString();
    } catch(e) { return location.href; }
  }

  function addPrettyShare(warframe){
    const root = $("buildContent");
    if (!root || root.querySelector(".minch-share-row")) return;
    const row = document.createElement("div");
    row.className = "minch-share-row";
    row.innerHTML = `<button class="minch-share-btn" type="button">Copier le lien</button>`;
    const btn = row.querySelector("button");
    btn.onclick = async () => {
      const link = finalShareUrl(warframe);
      try { await navigator.clipboard.writeText(link); }
      catch(e){
        const temp = document.createElement("textarea");
        temp.value = link; document.body.appendChild(temp); temp.select(); document.execCommand("copy"); temp.remove();
      }
      btn.textContent = "Lien copié ✓";
      setTimeout(() => btn.textContent = "Copier le lien", 1300);
    };
    const adminBar = root.querySelector(".admin-floating-bar");
    if (adminBar) adminBar.after(row); else root.prepend(row);
  }

  function finalRender(w){
    window.currentOpenWarframe = w;
    const build = sectionDefaults((w.builds && w.builds[0]) ? w.builds[0] : getOrCreateBuild(w));
    const d = build.display;
    const t = build.blockTexts;
    const companion = getCompanionData(build, w.name);
    const primary = getWeaponData(build, "principale", w.name);
    const secondary = getWeaponData(build, "secondaire", w.name);
    const melee = getWeaponData(build, "melee", w.name);

    const specialItems = (build.specialWeapons?.items || []).slice(0,3).filter(item => item && item.enabled !== false);
    const specialHTML = d.specialWeapons && build.specialWeapons?.enabled !== false && specialItems.length ? `
      <div class="weapon-section special-weapon-section">
        <h2>${safe(build.specialWeapons.title || "Armes exaltées / propres à la Warframe")}</h2>
        ${specialItems.map((item, index) => `
          <div class="weapon-row">
            <div class="weapon-left weapon-mini">
              <h3>${safe(item.name || `Arme exaltée ${index+1}`)}</h3>
              ${imgTag(item.image || getSpecialWeaponImage(w.name, index), item.name || `Arme exaltée ${index+1}`, build, `special${index}Image`) }
            </div>
            <div class="weapon-right weapon-build-big">
              <h3>Configuration</h3>
              ${imgTag(item.buildImage || getSpecialWeaponBuildImage(w.name, index), `Configuration ${item.name || `Arme exaltée ${index+1}`}`, build, `special${index}Build`) }
            </div>
          </div>
        `).join("")}
      </div>` : "";

    const fragments = (build.fragments || []).slice(0,5);
    const fragmentsHTML = d.fragments && fragments.length ? `
      <h2>Fragments d'Archonte</h2>
      <div class="shards-container">${buildShardLine(fragments)}</div>` : "";

    const weaponBlock = (key, title, data) => d[key] ? `
      <div class="weapon-section">
        <h2>${safe(title)}</h2>
        <div class="weapon-row">
          <div class="weapon-left weapon-mini"><h3>${safe(data.name)}</h3>${imgTag(data.image, data.name, build, key === "primaryWeapon" ? "primaryImage" : key === "secondaryWeapon" ? "secondaryImage" : "meleeImage")}</div>
          <div class="weapon-right weapon-build-big"><h3>Configuration</h3>${imgTag(data.buildImage, `Configuration ${data.name}`, build, key === "primaryWeapon" ? "primaryBuild" : key === "secondaryWeapon" ? "secondaryBuild" : "meleeBuild")}</div>
        </div>
      </div>` : "";

    const html = `
      ${window.isAdminMode ? `<div class="admin-floating-bar"><button class="admin-primary" type="button" data-admin-build-action="edit">Modifier la configuration</button><button class="admin-secondary" type="button" data-admin-build-action="duplicate">Dupliquer</button><button class="admin-danger" type="button" data-admin-build-action="delete">Supprimer</button></div>` : ""}

      ${d.skinImage ? `<h2>Skin Warframe</h2>${imgTag(build.fashionImage || getFashionImage(w.name), `Skin ${w.name}`, build, "fashionImage", "minch-hero-img")}` : ""}
      ${mediaTextHTML(d.skinText, t.skinText, build.textSizes.skinText)}

      ${d.configImage ? `<h2>${safe(build.name || `${w.name} Configuration`)}</h2>${imgTag(build.buildImage || getBuildImage(w.name), `Configuration ${w.name}`, build, "buildImage", "minch-hero-img")}` : ""}
      ${mediaTextHTML(d.configText, t.configText, build.textSizes.configText)}

      ${specialHTML}
      ${mediaTextHTML(d.specialText, t.specialText, build.textSizes.specialText)}

      ${fragmentsHTML}
      ${mediaTextHTML(d.fragmentsText, t.fragmentsText, build.textSizes.fragmentsText)}

      ${weaponBlock("primaryWeapon", "Arme principale", primary)}
      ${mediaTextHTML(d.primaryText, t.primaryText, build.textSizes.primaryText)}

      ${weaponBlock("secondaryWeapon", "Arme secondaire", secondary)}
      ${mediaTextHTML(d.secondaryText, t.secondaryText, build.textSizes.secondaryText)}

      ${weaponBlock("meleeWeapon", "Mêlée", melee)}
      ${mediaTextHTML(d.meleeText, t.meleeText, build.textSizes.meleeText)}

      ${d.companionSkin ? `<div class="weapon-section companion-section"><h2>Skin compagnon</h2><div class="companion-row companion-skin-row"><div class="companion-left companion-mini"><h3>${safe(companion.skinName)}</h3>${imgTag(companion.skinImage, companion.skinName, build, "companionSkinImage")}</div></div></div>` : ""}
      ${mediaTextHTML(d.companionSkinText, t.companionSkinText, build.textSizes.companionSkinText)}

      ${d.companion ? `<div class="weapon-section companion-section"><h2>Compagnon</h2><div class="companion-row"><div class="companion-left companion-mini"><h3>${safe(companion.name)}</h3>${imgTag(companion.image, companion.name, build, "companionImage")}</div><div class="companion-right companion-build-big"><h3>Configuration du compagnon</h3>${imgTag(companion.buildImage, `Configuration ${companion.name}`, build, "companionBuild")}</div></div></div>` : ""}
      ${mediaTextHTML(d.companionTextBlock, t.companionTextBlock, build.textSizes.companionTextBlock)}

      ${d.companionWeapon ? `<div class="weapon-section companion-section"><h2>Arme compagnon</h2><div class="companion-row"><div class="companion-left companion-mini"><h3>${safe(companion.weaponName)}</h3>${imgTag(companion.weaponImage, companion.weaponName, build, "companionWeaponImage")}</div><div class="companion-right companion-build-big"><h3>Configuration de l'arme du compagnon</h3>${imgTag(companion.weaponBuildImage, `Configuration ${companion.weaponName}`, build, "companionWeaponBuild")}</div></div></div>` : ""}
      ${mediaTextHTML(d.companionWeaponText, t.companionWeaponText, build.textSizes.companionWeaponText)}

      ${d.description && build.infoText ? `<div class="config-info-block"><h2>Description globale de la configuration</h2><div class="config-info-text" style="font-size:${Math.max(10, Math.min(40, Number(build.textSizes.description) || 16))}px">${window.minchRichTextHTML ? window.minchRichTextHTML(build.infoText) : safe(build.infoText)}</div></div>` : ""}
      ${mediaTextHTML(d.descriptionText, t.descriptionText, build.textSizes.descriptionText)}

      ${d.videoExplanation ? videoHTML("Vidéo explication", build.video) : ""}
      ${mediaTextHTML(d.videoExplanationText, t.videoExplanationText, build.textSizes.videoExplanationText)}

      ${d.videoSkinWarframe ? videoHTML("Vidéo skin Warframe", build.skinVideo) : ""}
      ${mediaTextHTML(d.videoSkinWarframeText, t.videoSkinWarframeText, build.textSizes.videoSkinWarframeText)}

      ${d.videoSkinCompanion ? videoHTML("Vidéo skin compagnon", build.companionSkinVideo) : ""}
      ${mediaTextHTML(d.videoSkinCompanionText, t.videoSkinCompanionText, build.textSizes.videoSkinCompanionText)}
    `;

    const root = $("buildContent");
    if (root) root.innerHTML = html;
    addPrettyShare(w);
    bindFinalButtons();
    if (typeof minchOptimizeImages === "function") setTimeout(() => minchOptimizeImages(root || document, 3), 0);
  }

  function orderSection(n, title, imageId, imageLabel, showImageId, showImage, textId, showTextId, showText, textValue, extra="", sizeKey=""){
    return `
      <div class="admin-section">
        ${sectionTitle(n, title)}
        <div class="minch-toggle-line">
          ${cb(showImageId, "Afficher l'image / le bloc", showImage)}
          ${cb(showTextId, "Afficher le texte", showText)}
          ${sizeKey ? textSizeControl(window.__minchEditingBuildForSizes, sizeKey, "Taille") : ""}
        </div>
        ${imageId ? `<div class="admin-grid-form">${fileRow(imageId, imageLabel)}</div>` : ""}
        ${extra}
        <label>Texte${textArea(textId, textValue, `Texte ${title}`)}</label>
      </div>
    `;
  }

  function finalOpenEditor(warframe){
    if (!window.isAdminMode) { openAdminLogin(); return; }
    const isNew = !warframe;
    const editing = isNew ? { name:"Nouvelle Warframe", builds:[createBuildFor("Nouvelle Warframe")] } : deepClone(warframe);
    const build = sectionDefaults(getOrCreateBuild(editing));
    const d = build.display;
    const t = build.blockTexts;
    const weapons = build.weapons;
    const companion = build.companion;
    const scales = build.imageScales || {};
    window.__minchImageScaleMap = {
      editCardImage:{inputId:"scaleCardImage", value:Number(editing.cardImageScale || editing.imageScales?.cardImage || 100)},
      editFashionImage:{inputId:"scaleFashionImage", value:Number(scales.fashionImage || 100)},
      editBuildImage:{inputId:"scaleBuildImage", value:Number(scales.buildImage || 100)},
      editSpecialImage_0:{inputId:"scaleSpecialImage_0", value:Number(scales.special0Image || 100)},
      editSpecialBuild_0:{inputId:"scaleSpecialBuild_0", value:Number(scales.special0Build || 100)},
      editSpecialImage_1:{inputId:"scaleSpecialImage_1", value:Number(scales.special1Image || 100)},
      editSpecialBuild_1:{inputId:"scaleSpecialBuild_1", value:Number(scales.special1Build || 100)},
      editSpecialImage_2:{inputId:"scaleSpecialImage_2", value:Number(scales.special2Image || 100)},
      editSpecialBuild_2:{inputId:"scaleSpecialBuild_2", value:Number(scales.special2Build || 100)},
      editWeaponImage_principale:{inputId:"scalePrimaryImage", value:Number(scales.primaryImage || 100)},
      editWeaponBuild_principale:{inputId:"scalePrimaryBuild", value:Number(scales.primaryBuild || 100)},
      editWeaponImage_secondaire:{inputId:"scaleSecondaryImage", value:Number(scales.secondaryImage || 100)},
      editWeaponBuild_secondaire:{inputId:"scaleSecondaryBuild", value:Number(scales.secondaryBuild || 100)},
      editWeaponImage_melee:{inputId:"scaleMeleeImage", value:Number(scales.meleeImage || 100)},
      editWeaponBuild_melee:{inputId:"scaleMeleeBuild", value:Number(scales.meleeBuild || 100)},
      editCompanionSkinImage:{inputId:"scaleCompanionSkinImage", value:Number(scales.companionSkinImage || 100)},
      editCompanionImage:{inputId:"scaleCompanionImage", value:Number(scales.companionImage || 100)},
      editCompanionBuildImage:{inputId:"scaleCompanionBuild", value:Number(scales.companionBuild || 100)},
      editCompanionWeaponImage:{inputId:"scaleCompanionWeaponImage", value:Number(scales.companionWeaponImage || 100)},
      editCompanionWeaponBuildImage:{inputId:"scaleCompanionWeaponBuild", value:Number(scales.companionWeaponBuild || 100)}
    };
    const content = $("adminEditorContent");
    if (!content) return;
    window.__minchEditingBuildForSizes = build;

    content.classList.add("minch-editor-ordered");
    content.innerHTML = `
      <h2>${isNew ? "Ajouter une config" : "Modifier la configuration"}</h2>
      <p class="admin-hint">Chaque bloc peut être affiché ou caché. Les images se glissent/déposent, se prévisualisent et se compressent avant sauvegarde.</p>

      <div class="admin-section minch-global-toggle-section">
        <h3>Affichage rapide</h3>
        <p class="admin-small">Permet de cocher ou décocher toutes les cases d'affichage de la configuration en une seule fois.</p>
        <div class="minch-global-toggle-row">
          <button class="admin-secondary" type="button" id="minchSelectAllToggles">Sélectionner tout</button>
          <button class="admin-secondary" type="button" id="minchUnselectAllToggles">Désélectionner tout</button>
        </div>
      </div>

      <div class="admin-section">
        <h3><span class="minch-order-badge">0</span>Infos principales</h3>
        <div class="admin-grid-form">
          <label>Nom Warframe<input id="editWarframeName" class="admin-input" value="${safe(editing.name)}"></label>
          <label>Titre configuration<input id="editBuildName" class="admin-input" value="${safe(build.name || editing.name + " Configuration")}"></label>
        </div>
        <div class="admin-grid-form minch-card-upload-row">
          ${fileRow("editCardImage", "Image de la carte Warframe") }
        </div>
        <p class="admin-small">Cette image est celle affichée dans la grille d'accueil.</p>
      </div>

      ${orderSection(1, "Skin Warframe", "editFashionImage", "Image skin Warframe", "showSkinImage", d.skinImage, "textSkin", "showSkinText", d.skinText, t.skinText, "", "skinText")}

      ${orderSection(2, "Configuration de Warframe", "editBuildImage", "Image de la configuration", "showConfigImage", d.configImage, "textConfig", "showConfigText", d.configText, t.configText, "", "configText")}

      <div class="admin-section">
        ${sectionTitle(3, "Armes exaltées / propres à la Warframe")}
        <div class="minch-toggle-line">
          ${cb("showSpecialWeapons", "Afficher les armes exaltées", d.specialWeapons)}
          ${cb("showSpecialText", "Afficher le texte", d.specialText)}
          ${textSizeControl(build, "specialText", "Taille")}
        </div>
        <label>Titre du bloc<input id="editSpecialTitle" class="admin-input" value="${safe(build.specialWeapons.title || "Armes exaltées / propres à la Warframe")}"></label>
        ${[0,1,2].map(i => {
          const item = build.specialWeapons.items[i] || {};
          return `<div class="admin-section minch-mini-editor">
            <h4>Arme exaltée ${i+1}</h4>
            ${cb(`editSpecialItemEnabled_${i}`, `Afficher l'arme ${i+1}`, item.enabled !== false)}
            <label>Nom<input id="editSpecialName_${i}" class="admin-input" value="${safe(item.name || `Arme exaltée ${i+1}`)}"></label>
            <div class="admin-grid-form">${fileRow(`editSpecialImage_${i}`, "Image arme à gauche")}${fileRow(`editSpecialBuild_${i}`, "Image configuration à droite")}</div>
          </div>`;
        }).join("")}
        <label>Texte${textArea("textSpecial", t.specialText, "Texte armes exaltées")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(4, "Fragments d'Archonte")}
        <div class="minch-toggle-line">
          ${cb("showFragments", "Afficher les fragments", d.fragments)}
          ${cb("showFragmentsText", "Afficher le texte", d.fragmentsText)}
          ${textSizeControl(build, "fragmentsText", "Taille")}
        </div>
        <p class="admin-small">Jusqu'à 5 fragments. Une ligne : clé|texte. Exemple : tau_ambre|+37,5% vitesse de lancement</p>
        <textarea id="editFragments" class="admin-textarea">${safe(fragmentsToText((build.fragments || []).slice(0,5)))}</textarea>
        <label>Texte${textArea("textFragments", t.fragmentsText, "Texte fragments")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(5, "Image arme principale avec config à droite")}
        <div class="minch-toggle-line">${cb("showPrimaryWeapon", "Afficher arme principale", d.primaryWeapon)}${cb("showPrimaryText", "Afficher le texte", d.primaryText)}${textSizeControl(build, "primaryText", "Taille")}</div>
        <label>Nom arme principale<input id="editWeaponName_principale" class="admin-input" value="${safe(weapons.principale?.name || "")}"></label>
        <div class="admin-grid-form">${fileRow("editWeaponImage_principale", "Image arme principale")}${fileRow("editWeaponBuild_principale", "Image config principale")}</div>
        <label>Texte${textArea("textPrimary", t.primaryText, "Texte arme principale")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(6, "Image arme secondaire avec config à droite")}
        <div class="minch-toggle-line">${cb("showSecondaryWeapon", "Afficher arme secondaire", d.secondaryWeapon)}${cb("showSecondaryText", "Afficher le texte", d.secondaryText)}${textSizeControl(build, "secondaryText", "Taille")}</div>
        <label>Nom arme secondaire<input id="editWeaponName_secondaire" class="admin-input" value="${safe(weapons.secondaire?.name || "")}"></label>
        <div class="admin-grid-form">${fileRow("editWeaponImage_secondaire", "Image arme secondaire")}${fileRow("editWeaponBuild_secondaire", "Image config secondaire")}</div>
        <label>Texte${textArea("textSecondary", t.secondaryText, "Texte arme secondaire")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(7, "Image mêlée avec config à droite")}
        <div class="minch-toggle-line">${cb("showMeleeWeapon", "Afficher mêlée", d.meleeWeapon)}${cb("showMeleeText", "Afficher le texte", d.meleeText)}${textSizeControl(build, "meleeText", "Taille")}</div>
        <label>Nom mêlée<input id="editWeaponName_melee" class="admin-input" value="${safe(weapons.melee?.name || "")}"></label>
        <div class="admin-grid-form">${fileRow("editWeaponImage_melee", "Image mêlée")}${fileRow("editWeaponBuild_melee", "Image config mêlée")}</div>
        <label>Texte${textArea("textMelee", t.meleeText, "Texte mêlée")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(8, "Image compagnon skin")}
        <div class="minch-toggle-line">${cb("showCompanionSkin", "Afficher skin compagnon", d.companionSkin)}${cb("showCompanionSkinText", "Afficher le texte", d.companionSkinText)}${textSizeControl(build, "companionSkinText", "Taille")}</div>
        <label>Nom skin compagnon<input id="editCompanionSkinName" class="admin-input" value="${safe(companion.skinName || "")}"></label>
        <div class="admin-grid-form">${fileRow("editCompanionSkinImage", "Image skin compagnon")}</div>
        <label>Texte${textArea("textCompanionSkin", t.companionSkinText, "Texte skin compagnon")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(9, "Image compagnon avec config à droite")}
        <div class="minch-toggle-line">${cb("showCompanion", "Afficher compagnon", d.companion)}${cb("showCompanionTextBlock", "Afficher le texte", d.companionTextBlock)}${textSizeControl(build, "companionTextBlock", "Taille")}</div>
        <label>Nom compagnon<input id="editCompanionName" class="admin-input" value="${safe(companion.name || "")}"></label>
        <div class="admin-grid-form">${fileRow("editCompanionImage", "Image compagnon")}${fileRow("editCompanionBuildImage", "Image config compagnon")}</div>
        <label>Texte${textArea("textCompanion", t.companionTextBlock, "Texte compagnon")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(10, "Image arme compagnon avec config à droite")}
        <div class="minch-toggle-line">${cb("showCompanionWeapon", "Afficher arme compagnon", d.companionWeapon)}${cb("showCompanionWeaponText", "Afficher le texte", d.companionWeaponText)}${textSizeControl(build, "companionWeaponText", "Taille")}</div>
        <label>Nom arme compagnon<input id="editCompanionWeaponName" class="admin-input" value="${safe(companion.weaponName || "")}"></label>
        <div class="admin-grid-form">${fileRow("editCompanionWeaponImage", "Image arme compagnon")}${fileRow("editCompanionWeaponBuildImage", "Image config arme compagnon")}</div>
        <label>Texte${textArea("textCompanionWeapon", t.companionWeaponText, "Texte arme compagnon")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(11, "Description globale de la configuration")}
        <div class="minch-toggle-line">${cb("showDescription", "Afficher la description", d.description)}${textSizeControl(build, "description", "Taille description")}${cb("showDescriptionText", "Afficher le texte supplémentaire", d.descriptionText)}${textSizeControl(build, "descriptionText", "Taille texte")}</div>
        <label>Description globale${textArea("editInfoText", build.infoText || "", "Description globale")}</label>
        <label>Texte${textArea("textDescription", t.descriptionText, "Texte supplémentaire description")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(12, "Lien vidéo YouTube explication")}
        <div class="minch-toggle-line">${cb("showVideoExplanation", "Afficher la vidéo", d.videoExplanation)}${cb("showVideoExplanationText", "Afficher le texte", d.videoExplanationText)}${textSizeControl(build, "videoExplanationText", "Taille")}</div>
        <label>Lien vidéo explication<input id="editVideo" class="admin-input" value="${safe(build.video || "")}" placeholder="https://www.youtube.com/watch?v=..."></label>
        <label>Texte${textArea("textVideoExplanation", t.videoExplanationText, "Texte vidéo explication")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(13, "Lien vidéo YouTube skin Warframe")}
        <div class="minch-toggle-line">${cb("showVideoSkinWarframe", "Afficher la vidéo", d.videoSkinWarframe)}${cb("showVideoSkinWarframeText", "Afficher le texte", d.videoSkinWarframeText)}${textSizeControl(build, "videoSkinWarframeText", "Taille")}</div>
        <label>Lien vidéo skin Warframe<input id="editSkinVideo" class="admin-input" value="${safe(build.skinVideo || "")}" placeholder="https://www.youtube.com/watch?v=..."></label>
        <label>Texte${textArea("textVideoSkinWarframe", t.videoSkinWarframeText, "Texte vidéo skin Warframe")}</label>
      </div>

      <div class="admin-section">
        ${sectionTitle(14, "Lien vidéo YouTube skin compagnon")}
        <div class="minch-toggle-line">${cb("showVideoSkinCompanion", "Afficher la vidéo", d.videoSkinCompanion)}${cb("showVideoSkinCompanionText", "Afficher le texte", d.videoSkinCompanionText)}${textSizeControl(build, "videoSkinCompanionText", "Taille")}</div>
        <label>Lien vidéo skin compagnon<input id="editCompanionSkinVideo" class="admin-input" value="${safe(build.companionSkinVideo || "")}" placeholder="https://www.youtube.com/watch?v=..."></label>
        <label>Texte${textArea("textVideoSkinCompanion", t.videoSkinCompanionText, "Texte vidéo skin compagnon")}</label>
      </div>

      <div class="admin-toolbar">
        <button class="admin-primary" type="button" id="saveAdminEdit">Sauvegarder en ligne</button>
        <button class="admin-secondary" type="button" id="exportAdminEdit">Exporter backup JSON</button>
        <button class="admin-secondary" type="button" id="resetAdminEdit">Réinitialiser local</button>
        <button class="admin-danger" type="button" id="logoutAdminEdit">Déconnexion</button>
      </div>
      <div id="adminSaveStatus" class="admin-success"></div>
    `;

    const minchSetAllToggles = (state) => {
      const editorRoot = $("adminEditorContent");
      if (!editorRoot) return;
      editorRoot.querySelectorAll('input[type="checkbox"]').forEach((box) => { box.checked = state; });
    };

    const selectAllToggles = $("minchSelectAllToggles");
    const unselectAllToggles = $("minchUnselectAllToggles");
    if (selectAllToggles) selectAllToggles.onclick = () => minchSetAllToggles(true);
    if (unselectAllToggles) unselectAllToggles.onclick = () => minchSetAllToggles(false);

    $("saveAdminEdit").onclick = () => finalSaveEditor(editing, isNew, warframe?._id || warframe?.name);
    $("exportAdminEdit").onclick = exportAdminData;
    $("resetAdminEdit").onclick = resetAdminData;
    $("logoutAdminEdit").onclick = () => { logoutAdmin(); closeAdminEditor(); };

    const modal = $("adminEditorModal");
    if (modal) { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); modal.scrollTop = 0; }
    setTimeout(() => { if (typeof minchDecorateFileInputs === "function") minchDecorateFileInputs(); bindScaleLiveLabels(); }, 80);
    setTimeout(bindFinalButtons, 0);
  }

  function minchStableConfigId(item){
    if (item && item._id) return item._id;
    const base = slugifyText(item?.name || "config") || "config";
    return `${base}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
  }

  function minchEnsureConfigIds(){
    const used = new Set();
    (warframesData || []).forEach((item) => {
      if (!item._id || used.has(item._id)) item._id = minchStableConfigId(item);
      used.add(item._id);
    });
  }

  function minchGetInputFile(inputId){
    const input = document.getElementById(inputId);
    return input && input.files && input.files[0] ? input.files[0] : null;
  }

  async function minchUploadStableImage(inputId, configId, fieldKey){
    const file = minchGetInputFile(inputId);
    if (!file) return null;

    if (!initMinchFirebase() || !firebaseStorage) {
      if (typeof minchCompressImageFile === "function") return await minchCompressImageFile(file);
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onerror = () => resolve(null);
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    }

    const dataUrl = typeof minchCompressImageFile === "function"
      ? await minchCompressImageFile(file)
      : await compressImageForFirebase(file);
    if (!dataUrl) return null;

    const blob = await dataUrlToBlob(dataUrl);
    const extension = blob.type === "image/png" ? "png" : "webp";
    const safeConfigId = slugifyText(configId || "config") || "config";
    const safeFieldKey = slugifyText(fieldKey || inputId) || "image";
    const ref = firebaseStorage.ref().child(`warframe-images/configs/${safeConfigId}/${safeFieldKey}.${extension}`);

    await ref.put(blob, {
      contentType: blob.type || "image/webp",
      customMetadata: {
        originalName: file.name,
        configId: safeConfigId,
        fieldKey: safeFieldKey,
        replacedAt: new Date().toISOString()
      }
    });

    return await ref.getDownloadURL();
  }

  async function maybeUpload(id, fieldKey, configId){
    return await minchUploadStableImage(id, configId, fieldKey || id);
  }

  async function finalSaveEditor(editing, isNew, originalKey){
    const saveBtn = $("saveAdminEdit");
    const status = $("adminSaveStatus");
    if (saveBtn) saveBtn.disabled = true;
    if (status) status.textContent = "Sauvegarde en cours...";
    try {
      minchEnsureConfigIds();
      if (!editing._id) {
        const existing = (warframesData || []).find(w => w._id === originalKey || w.name === originalKey);
        editing._id = existing?._id || minchStableConfigId(editing);
      }

      const build = sectionDefaults(getOrCreateBuild(editing));
      editing._updatedAt = Date.now();
      editing.name = val("editWarframeName").trim() || "Nouvelle Warframe";
      build.name = val("editBuildName").trim() || `${editing.name} Configuration`;
      build.infoText = val("editInfoText").trim();
      build.video = normalizeYouTubeUrl(val("editVideo"));
      build.skinVideo = normalizeYouTubeUrl(val("editSkinVideo"));
      build.companionSkinVideo = normalizeYouTubeUrl(val("editCompanionSkinVideo"));
      build.fragments = textToFragments(val("editFragments")).slice(0,5);
      build.blockTexts = {
        skinText: val("textSkin"), configText: val("textConfig"), specialText: val("textSpecial"), fragmentsText: val("textFragments"),
        primaryText: val("textPrimary"), secondaryText: val("textSecondary"), meleeText: val("textMelee"),
        companionSkinText: val("textCompanionSkin"), companionTextBlock: val("textCompanion"), companionWeaponText: val("textCompanionWeapon"),
        descriptionText: val("textDescription"), videoExplanationText: val("textVideoExplanation"), videoSkinWarframeText: val("textVideoSkinWarframe"), videoSkinCompanionText: val("textVideoSkinCompanion")
      };
      const sizeKeys = ["skinText","configText","specialText","fragmentsText","primaryText","secondaryText","meleeText","companionSkinText","companionTextBlock","companionWeaponText","description","descriptionText","videoExplanationText","videoSkinWarframeText","videoSkinCompanionText"];
      build.textSizes = {};
      sizeKeys.forEach(key => {
        const input = $("textSize_" + key);
        build.textSizes[key] = Math.max(10, Math.min(40, Number(input?.value) || 16));
      });
      build.display = {
        skinImage: checked("showSkinImage"), skinText: checked("showSkinText"),
        configImage: checked("showConfigImage"), configText: checked("showConfigText"),
        specialWeapons: checked("showSpecialWeapons"), specialText: checked("showSpecialText"),
        fragments: checked("showFragments"), fragmentsText: checked("showFragmentsText"),
        primaryWeapon: checked("showPrimaryWeapon"), primaryText: checked("showPrimaryText"),
        secondaryWeapon: checked("showSecondaryWeapon"), secondaryText: checked("showSecondaryText"),
        meleeWeapon: checked("showMeleeWeapon"), meleeText: checked("showMeleeText"),
        companionSkin: checked("showCompanionSkin"), companionSkinText: checked("showCompanionSkinText"),
        companion: checked("showCompanion"), companionTextBlock: checked("showCompanionTextBlock"),
        companionWeapon: checked("showCompanionWeapon"), companionWeaponText: checked("showCompanionWeaponText"),
        description: checked("showDescription"), descriptionText: checked("showDescriptionText"),
        videoExplanation: checked("showVideoExplanation"), videoExplanationText: checked("showVideoExplanationText"),
        videoSkinWarframe: checked("showVideoSkinWarframe"), videoSkinWarframeText: checked("showVideoSkinWarframeText"),
        videoSkinCompanion: checked("showVideoSkinCompanion"), videoSkinCompanionText: checked("showVideoSkinCompanionText")
      };

      if (!build.specialWeapons) build.specialWeapons = { enabled:false, title:"Armes exaltées / propres à la Warframe", items:[] };
      if (!Array.isArray(build.specialWeapons.items)) build.specialWeapons.items = [];
      while (build.specialWeapons.items.length < 3) build.specialWeapons.items.push({});
      build.specialWeapons.title = val("editSpecialTitle").trim() || "Armes exaltées / propres à la Warframe";
      build.specialWeapons.enabled = checked("showSpecialWeapons");
      [0,1,2].forEach(i => {
        build.specialWeapons.items[i].enabled = checked(`editSpecialItemEnabled_${i}`);
        build.specialWeapons.items[i].name = val(`editSpecialName_${i}`).trim() || `Arme exaltée ${i+1}`;
      });

      if (!build.weapons) build.weapons = {};
      ["principale","secondaire","melee"].forEach(slot => {
        if (!build.weapons[slot]) build.weapons[slot] = {};
        build.weapons[slot].name = val(`editWeaponName_${slot}`).trim() || "Nom d'arme";
      });
      if (!build.companion) build.companion = {};
      build.companion.name = val("editCompanionName").trim() || "Nom du compagnon";
      build.companion.skinName = val("editCompanionSkinName").trim() || "Skin du compagnon";
      build.companion.weaponName = val("editCompanionWeaponName").trim() || "Nom de l'arme du compagnon";

      // Les anciennes options d'échelle sont neutralisées : les images restent gérées par le CSS du site.
      delete editing.cardImageScale;
      delete build.imageScales;

      const configId = editing._id;
      const uploads = [
        ["editCardImage","card", u => editing.cardImage = u],
        ["editFashionImage","fashion", u => build.fashionImage = u],
        ["editBuildImage","warframe_build", u => build.buildImage = u],
        ["editSpecialImage_0","special_1_image", u => build.specialWeapons.items[0].image = u],
        ["editSpecialBuild_0","special_1_build", u => build.specialWeapons.items[0].buildImage = u],
        ["editSpecialImage_1","special_2_image", u => build.specialWeapons.items[1].image = u],
        ["editSpecialBuild_1","special_2_build", u => build.specialWeapons.items[1].buildImage = u],
        ["editSpecialImage_2","special_3_image", u => build.specialWeapons.items[2].image = u],
        ["editSpecialBuild_2","special_3_build", u => build.specialWeapons.items[2].buildImage = u],
        ["editWeaponImage_principale","primary_weapon", u => build.weapons.principale.image = u],
        ["editWeaponBuild_principale","primary_weapon_build", u => build.weapons.principale.buildImage = u],
        ["editWeaponImage_secondaire","secondary_weapon", u => build.weapons.secondaire.image = u],
        ["editWeaponBuild_secondaire","secondary_weapon_build", u => build.weapons.secondaire.buildImage = u],
        ["editWeaponImage_melee","melee_weapon", u => build.weapons.melee.image = u],
        ["editWeaponBuild_melee","melee_weapon_build", u => build.weapons.melee.buildImage = u],
        ["editCompanionSkinImage","companion_skin", u => build.companion.skinImage = u],
        ["editCompanionImage","companion", u => build.companion.image = u],
        ["editCompanionBuildImage","companion_build", u => build.companion.buildImage = u],
        ["editCompanionWeaponImage","companion_weapon", u => build.companion.weaponImage = u],
        ["editCompanionWeaponBuildImage","companion_weapon_build", u => build.companion.weaponBuildImage = u]
      ];
      for (const [id, fieldKey, applyUpload] of uploads) {
        const url = await maybeUpload(id, fieldKey, configId);
        if (url) applyUpload(url);
      }

      if (isNew) {
        warframesData.push(editing);
      } else {
        let index = warframesData.findIndex(w => w._id && w._id === editing._id);
        if (index < 0) index = warframesData.findIndex(w => w._id === originalKey || w.name === originalKey);
        if (index >= 0) warframesData[index] = editing;
        else warframesData.push(editing);
      }
      minchEnsureConfigIds();
      window.currentOpenWarframe = editing;
      refreshAfterAdminChange();
      if (status) status.textContent = "Sauvegardé.";
    } catch(err) {
      console.error(err);
      if (status) status.textContent = "Erreur pendant la sauvegarde.";
    } finally {
      if (saveBtn) saveBtn.disabled = false;
    }
  }

  function finalFilter(){
    const input = $("search");
    const normalize = v => String(v || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
    const q = normalize(input ? input.value : "").split(/\s+/).filter(Boolean);
    const filtered = !q.length ? warframesData : warframesData.filter(w => {
      const b = w.builds?.[0] || {};
      const hay = normalize([w.name,b.name,b.infoText,b.weapons?.principale?.name,b.weapons?.secondaire?.name,b.weapons?.melee?.name,b.companion?.name].filter(Boolean).join(" "));
      return q.every(x => hay.includes(x));
    });
    renderWarframes(filtered);
  }

  function fixEye(){
    const login = document.getElementById('adminLoginModal');
    const pass = document.getElementById('adminPass');
    const eye = document.getElementById('adminPasswordToggle');
    const user = document.getElementById('adminUser');
    const wrap = pass ? pass.closest('.admin-password-wrap') : document.querySelector('#adminLoginModal .admin-password-wrap');
    const connected = !!window.isAdminMode && login && login.classList.contains('open');
    const apply = (el, prop, value) => { if (el) el.style.setProperty(prop, value, 'important'); };
    if (connected) {
      apply(user, 'display', 'none');
      apply(pass, 'display', 'none');
      apply(wrap, 'display', 'none');
      apply(eye, 'display', 'none');
      return;
    }
    if (!pass || !eye) return;
    if (wrap) wrap.style.removeProperty('display');
    eye.style.removeProperty('display');
    const visible = pass.type === 'text';
    eye.classList.toggle('visible', visible);
    eye.setAttribute('aria-label', visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
  }

  function forceControls(){
    const isBuild = document.body.classList.contains('build-open');
    const music = (typeof byId === 'function' ? byId('musicPanel') : document.getElementById('musicPanel')) || document.getElementById('musicPanel');
    const admin = (typeof byId === 'function' ? byId('adminButton') : document.getElementById('adminButton')) || document.getElementById('adminButton');
    const apply = (el, props) => { if (!el) return; Object.keys(props).forEach(k => el.style.setProperty(k, props[k], 'important')); };
    if (isBuild) {
      apply(music, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      apply(admin, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      return;
    }
    apply(music, { display:'flex', position:'absolute', top:'16px', left:'16px', right:'auto', 'z-index':'2200', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
    apply(admin, { display:'flex', position:'absolute', top:'16px', right:'16px', left:'auto', 'z-index':'2201', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
  }

  function bindFinalButtons(){
    const back = document.querySelector("#buildPage .back");
    if (back) {
      back.style.display = "flex";
      back.onclick = (e) => { e.preventDefault(); e.stopPropagation(); closeBuild(); };
    }
    document.querySelectorAll(".admin-back").forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault(); e.stopPropagation();
        const editor = $("adminEditorModal");
        const login = $("adminLoginModal");
        if (editor && editor.classList.contains("open")) closeAdminEditor();
        else if (login && login.classList.contains("open")) closeAdminLogin();
      };
    });
    document.querySelectorAll('[data-admin-build-action="edit"]').forEach(btn => btn.onclick = e => { e.preventDefault(); e.stopPropagation(); if (window.currentOpenWarframe) finalOpenEditor(window.currentOpenWarframe); });
    document.querySelectorAll('[data-admin-build-action="duplicate"]').forEach(btn => btn.onclick = e => { e.preventDefault(); e.stopPropagation(); duplicateCurrentWarframe(); });
    document.querySelectorAll('[data-admin-build-action="delete"]').forEach(btn => btn.onclick = e => { e.preventDefault(); e.stopPropagation(); deleteCurrentWarframe(); });
    fixEye(); forceControls();
  }

  const oldOpenBuild = openBuild;
  openBuild = function(w){
    window.currentOpenWarframe = w;
    const res = oldOpenBuild(w);
    setTimeout(() => { finalRender(w); bindFinalButtons(); forceControls(); }, 470);
    setTimeout(() => { bindFinalButtons(); forceControls(); }, 900);
    return res;
  };
  window.openBuild = openBuild;

  const oldCloseBuild = closeBuild;
  closeBuild = function(){ const res = oldCloseBuild(); setTimeout(forceControls, 0); return res; };
  window.closeBuild = closeBuild;

  openAdminEditor = finalOpenEditor;
  window.openAdminEditor = finalOpenEditor;
  fillBuildContent = finalRender;
  window.fillBuildContent = finalRender;
  filterWarframes = finalFilter;
  window.filterWarframes = finalFilter;

  const oldOpenLogin = openAdminLogin;
  openAdminLogin = function(){ const r = oldOpenLogin(); setTimeout(() => { fixEye(); forceControls(); bindFinalButtons(); }, 20); return r; };
  window.openAdminLogin = openAdminLogin;

  window.addEventListener("scroll", forceControls, { passive:true });
  window.addEventListener("resize", forceControls, { passive:true });
  window.addEventListener("orientationchange", () => setTimeout(forceControls, 150), { passive:true });
  setInterval(() => { forceControls(); bindFinalButtons(); }, 2000);
  document.addEventListener("DOMContentLoaded", () => { forceControls(); bindFinalButtons(); });
  setTimeout(() => { forceControls(); bindFinalButtons(); }, 0);
})();

/* ---------- PATCH MINCH FINAL : flèche retour + Échap intelligent ---------- */
(function(){
  function byId(id){ return document.getElementById(id); }

  function minchFinalBindBackButtons(){
    const buildBack = document.querySelector('#buildPage .back');
    if (buildBack) {
      buildBack.style.display = 'flex';
      buildBack.style.position = 'fixed';
      buildBack.style.top = '18px';
      buildBack.style.left = '20px';
      buildBack.style.zIndex = '1000002';
      buildBack.onclick = function(event){
        event.preventDefault();
        event.stopPropagation();
        if (typeof closeBuild === 'function') closeBuild();
      };
    }

    document.querySelectorAll('.admin-back').forEach(function(button){
      button.style.display = 'flex';
      button.style.position = 'fixed';
      button.style.top = '18px';
      button.style.left = '20px';
      button.style.zIndex = '1000003';
      button.onclick = function(event){
        event.preventDefault();
        event.stopPropagation();
        const editor = byId('adminEditorModal');
        const login = byId('adminLoginModal');
        if (editor && editor.classList.contains('open')) {
          closeAdminEditor();
          return;
        }
        if (login && login.classList.contains('open')) {
          closeAdminLogin();
        }
      };
    });
  }

  function minchFinalOptimizeHeroImages(){
    const root = byId('buildContent');
    if (!root) return;
    const heroImages = root.querySelectorAll('img[alt^="Skin"], img[alt^="Configuration"]');
    heroImages.forEach(function(img, index){
      img.loading = index < 2 ? 'eager' : 'lazy';
      img.decoding = 'async';
      if (index < 2) img.setAttribute('fetchpriority', 'high');
      if (typeof minchOptimizeImage === 'function') minchOptimizeImage(img, index < 2);
    });
  }

  const previousFillBuildContent = window.fillBuildContent || (typeof fillBuildContent !== 'undefined' ? fillBuildContent : null);
  if (previousFillBuildContent) {
    const patchedFill = function(w){
      const result = previousFillBuildContent(w);
      setTimeout(function(){
        minchFinalBindBackButtons();
        minchFinalOptimizeHeroImages();
      }, 0);
      return result;
    };
    window.fillBuildContent = patchedFill;
    try { fillBuildContent = patchedFill; } catch(e) {}
  }

  const previousOpenBuild = window.openBuild || (typeof openBuild !== 'undefined' ? openBuild : null);
  if (previousOpenBuild) {
    const patchedOpenBuild = function(w){
      const result = previousOpenBuild(w);
      setTimeout(minchFinalBindBackButtons, 80);
      setTimeout(minchFinalBindBackButtons, 550);
      setTimeout(minchFinalBindBackButtons, 1000);
      return result;
    };
    window.openBuild = patchedOpenBuild;
    try { openBuild = patchedOpenBuild; } catch(e) {}
  }

  const previousOpenLogin = window.openAdminLogin || (typeof openAdminLogin !== 'undefined' ? openAdminLogin : null);
  if (previousOpenLogin) {
    const patchedOpenLogin = function(){
      const result = previousOpenLogin();
      setTimeout(minchFinalBindBackButtons, 0);
      setTimeout(minchFinalBindBackButtons, 80);
      return result;
    };
    window.openAdminLogin = patchedOpenLogin;
    try { openAdminLogin = patchedOpenLogin; } catch(e) {}
  }

  const previousOpenEditor = window.openAdminEditor || (typeof openAdminEditor !== 'undefined' ? openAdminEditor : null);
  if (previousOpenEditor) {
    const patchedOpenEditor = function(w){
      const result = previousOpenEditor(w);
      setTimeout(minchFinalBindBackButtons, 0);
      setTimeout(minchFinalBindBackButtons, 80);
      return result;
    };
    window.openAdminEditor = patchedOpenEditor;
    try { openAdminEditor = patchedOpenEditor; } catch(e) {}
  }

  // Capture en premier : Échap ferme toujours la dernière fenêtre ouverte.
  document.addEventListener('keydown', function(event){
    if (event.key !== 'Escape') return;

    const editor = byId('adminEditorModal');
    const login = byId('adminLoginModal');

    if (editor && editor.classList.contains('open')) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      closeAdminEditor();
      return;
    }

    if (login && login.classList.contains('open')) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      closeAdminLogin();
      return;
    }

    if (document.body.classList.contains('build-open')) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      closeBuild();
    }
  }, true);

  minchFinalBindBackButtons();
  setTimeout(minchFinalBindBackButtons, 0);
  setTimeout(minchFinalBindBackButtons, 800);
})();

/* ---------- PATCH MINCH FINAL DEMANDE : flèches, échelles images, œil connecté ---------- */
(function(){
  function $(id){ return document.getElementById(id); }

  function getCurrentBuild(){
    const w = window.currentOpenWarframe;
    if (!w) return null;
    if (!w.builds) w.builds = [{}];
    if (!w.builds[0]) w.builds[0] = {};
    return w.builds[0];
  }

  function bindBackButtonsFinal(){
    const buildBack = document.querySelector('#buildPage .back');
    if (buildBack) {
      buildBack.style.display = 'flex';
      buildBack.style.position = 'fixed';
      buildBack.style.top = 'calc(env(safe-area-inset-top, 0px) + 18px)';
      buildBack.style.left = 'calc(env(safe-area-inset-left, 0px) + 18px)';
      buildBack.style.zIndex = '1000005';
      buildBack.onclick = function(event){
        event.preventDefault();
        event.stopPropagation();
        if (typeof closeBuild === 'function') closeBuild();
      };
    }

    document.querySelectorAll('.admin-back').forEach(function(button){
      button.style.display = 'flex';
      button.style.position = 'fixed';
      button.style.top = 'calc(env(safe-area-inset-top, 0px) + 18px)';
      button.style.left = 'calc(env(safe-area-inset-left, 0px) + 18px)';
      button.style.zIndex = '1000006';
      button.onclick = function(event){
        event.preventDefault();
        event.stopPropagation();
        const editor = $('adminEditorModal');
        const login = $('adminLoginModal');
        if (editor && editor.classList.contains('open')) {
          closeAdminEditor();
          return;
        }
        if (login && login.classList.contains('open')) closeAdminLogin();
      };
    });
  }

  function forceFloatingControlsFinal(){
    const isBuild = document.body.classList.contains('build-open');
    const music = (typeof byId === 'function' ? byId('musicPanel') : document.getElementById('musicPanel')) || document.getElementById('musicPanel');
    const admin = (typeof byId === 'function' ? byId('adminButton') : document.getElementById('adminButton')) || document.getElementById('adminButton');
    const apply = (el, props) => { if (!el) return; Object.keys(props).forEach(k => el.style.setProperty(k, props[k], 'important')); };
    if (isBuild) {
      apply(music, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      apply(admin, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      return;
    }
    apply(music, { display:'flex', position:'absolute', top:'16px', left:'16px', right:'auto', 'z-index':'2200', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
    apply(admin, { display:'flex', position:'absolute', top:'16px', right:'16px', left:'auto', 'z-index':'2201', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
  }

  function updateEyeFinal(){
    const login = $('adminLoginModal');
    const pass = $('adminPass');
    const eye = $('adminPasswordToggle');
    const wrap = document.querySelector('#adminLoginModal .admin-password-wrap');

    if (window.isAdminMode && login && login.classList.contains('admin-connected-view')) {
      if (eye) eye.style.display = 'none';
      if (wrap) wrap.style.display = 'none';
      return;
    }

    if (!pass || !eye) return;
    if (wrap) wrap.style.display = 'block';
    eye.style.display = 'flex';
    const visible = pass.type === 'text';
    eye.classList.toggle('visible', visible);
    eye.setAttribute('aria-label', visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
    eye.onclick = function(event){
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      pass.type = pass.type === 'password' ? 'text' : 'password';
      updateEyeFinal();
    };
  }

  function applyImageScalesFinal(){
    const build = getCurrentBuild();
    const scales = (build && build.imageScales) ? build.imageScales : {};
    const skin = document.querySelector('#buildContent > img[alt^="Skin"]');
    const config = document.querySelector('#buildContent > img[alt^="Configuration"]');
    if (skin) {
      const value = Number(scales.skinWarframe || 560);
      skin.style.width = `min(100%, ${value}px)`;
      skin.style.maxWidth = `min(100%, ${value}px)`;
    }
    if (config) {
      const value = Number(scales.configWarframe || 900);
      config.style.width = `min(100%, ${value}px)`;
      config.style.maxWidth = `min(100%, ${value}px)`;
    }
  }

  function centerTextBubblesFinal(){
    document.querySelectorAll('.weapon-text-note, .config-info-text, .minch-media-text').forEach(function(el){
      el.style.textAlign = 'center';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.whiteSpace = 'pre-wrap';
    });
  }

  function addScaleControlsFinal(){
    const content = $('adminEditorContent');
    if (!content || content.querySelector('#editScaleSkinWarframe')) return;

    const build = getCurrentBuild() || {};
    const scales = build.imageScales || {};
    const skinValue = Number(scales.skinWarframe || 560);
    const configValue = Number(scales.configWarframe || 900);

    const skinSection = $('editFashionImage')?.closest('.admin-section');
    const configSection = $('editBuildImage')?.closest('.admin-section');

    function scaleHTML(id, label, value, min, max){
      return `
        <div class="minch-scale-box">
          <label>${label} : <span class="minch-scale-value" id="${id}Value">${value}px</span></label>
          <input id="${id}" type="range" min="${min}" max="${max}" step="10" value="${value}">
        </div>
      `;
    }

    if (skinSection) skinSection.insertAdjacentHTML('beforeend', scaleHTML('editScaleSkinWarframe', 'Échelle image skin Warframe', skinValue, 300, 900));
    if (configSection) configSection.insertAdjacentHTML('beforeend', scaleHTML('editScaleConfigWarframe', 'Échelle image configuration Warframe', configValue, 500, 1200));

    ['editScaleSkinWarframe','editScaleConfigWarframe'].forEach(function(id){
      const input = $(id);
      const output = $(id + 'Value');
      if (!input || !output) return;
      input.addEventListener('input', function(){ output.textContent = input.value + 'px'; });
    });

    const saveBtn = $('saveAdminEdit');
    if (saveBtn && !saveBtn.dataset.minchScalePatched) {
      saveBtn.dataset.minchScalePatched = 'true';
      saveBtn.addEventListener('click', function(){
        setTimeout(function(){
          const w = window.currentOpenWarframe;
          if (!w || !w.builds || !w.builds[0]) return;
          const b = w.builds[0];
          if (!b.imageScales) b.imageScales = {};
          const skin = $('editScaleSkinWarframe');
          const config = $('editScaleConfigWarframe');
          if (skin) b.imageScales.skinWarframe = Number(skin.value || 560);
          if (config) b.imageScales.configWarframe = Number(config.value || 900);
          try {
            const listItem = warframesData.find(item => item.name === w.name);
            if (listItem && listItem.builds && listItem.builds[0]) listItem.builds[0].imageScales = b.imageScales;
            if (typeof saveAdminData === 'function') saveAdminData();
            if (typeof fillBuildContent === 'function') fillBuildContent(w);
            applyImageScalesFinal();
          } catch(e) {}
        }, 500);
      }, true);
    }
  }

  function fullPatchFinal(){
    forceFloatingControlsFinal();
    bindBackButtonsFinal();
    updateEyeFinal();
    applyImageScalesFinal();
    centerTextBubblesFinal();
    addScaleControlsFinal();
  }

  const oldOpenBuild = window.openBuild || (typeof openBuild !== 'undefined' ? openBuild : null);
  if (oldOpenBuild && !oldOpenBuild.__minchScaleFixed) {
    const patchedOpenBuild = function(w){
      const result = oldOpenBuild(w);
      setTimeout(fullPatchFinal, 80);
      setTimeout(fullPatchFinal, 550);
      setTimeout(fullPatchFinal, 1000);
      return result;
    };
    patchedOpenBuild.__minchScaleFixed = true;
    window.openBuild = patchedOpenBuild;
    try { openBuild = patchedOpenBuild; } catch(e) {}
  }

  const oldFill = window.fillBuildContent || (typeof fillBuildContent !== 'undefined' ? fillBuildContent : null);
  if (oldFill && !oldFill.__minchScaleFixed) {
    const patchedFill = function(w){
      const result = oldFill(w);
      setTimeout(fullPatchFinal, 0);
      return result;
    };
    patchedFill.__minchScaleFixed = true;
    window.fillBuildContent = patchedFill;
    try { fillBuildContent = patchedFill; } catch(e) {}
  }

  const oldOpenLogin = window.openAdminLogin || (typeof openAdminLogin !== 'undefined' ? openAdminLogin : null);
  if (oldOpenLogin && !oldOpenLogin.__minchEyeFixed) {
    const patchedLogin = function(){
      const result = oldOpenLogin();
      setTimeout(fullPatchFinal, 0);
      setTimeout(fullPatchFinal, 80);
      return result;
    };
    patchedLogin.__minchEyeFixed = true;
    window.openAdminLogin = patchedLogin;
    try { openAdminLogin = patchedLogin; } catch(e) {}
  }

  const oldOpenEditor = window.openAdminEditor || (typeof openAdminEditor !== 'undefined' ? openAdminEditor : null);
  if (oldOpenEditor && !oldOpenEditor.__minchScaleFixed) {
    const patchedEditor = function(w){
      const result = oldOpenEditor(w);
      setTimeout(fullPatchFinal, 0);
      setTimeout(fullPatchFinal, 150);
      return result;
    };
    patchedEditor.__minchScaleFixed = true;
    window.openAdminEditor = patchedEditor;
    try { openAdminEditor = patchedEditor; } catch(e) {}
  }

  document.addEventListener('click', function(event){
    if (event.target.closest && event.target.closest('#adminPasswordToggle')) {
      updateEyeFinal();
    }
    setTimeout(fullPatchFinal, 0);
  }, true);

  window.addEventListener('scroll', forceFloatingControlsFinal, { passive:true });
  window.addEventListener('resize', fullPatchFinal, { passive:true });
  window.addEventListener('orientationchange', function(){ setTimeout(fullPatchFinal, 120); }, { passive:true });
  document.addEventListener('DOMContentLoaded', fullPatchFinal);
  setTimeout(fullPatchFinal, 0);
  setTimeout(fullPatchFinal, 800);
  setInterval(fullPatchFinal, 2500);
})();

/* ---------- PATCH MINCH : échelle image carte dans la grille ---------- */
(function(){
  if (typeof createWarframeCard !== "function") return;
  const previousCreateCard = createWarframeCard;
  createWarframeCard = function(warframe){
    const card = previousCreateCard(warframe);
    const img = card && card.querySelector ? card.querySelector("img") : null;
    if (img) {
      const scale = Number(warframe.cardImageScale || warframe.imageScales?.cardImage || 100);
      const safeScale = Number.isFinite(scale) ? Math.max(40, Math.min(160, scale)) / 100 : 1;
      img.style.setProperty("--minch-card-scale", String(safeScale));
      if (warframe.cardImage) img.src = warframe.cardImage;
    }
    return card;
  };
  window.createWarframeCard = createWarframeCard;
  if (typeof renderGrid === "function") setTimeout(renderGrid, 0);
})();


/* ---------- MINCH FINAL UI CLEAN : contrôles, cartes, upload preview, suppression échelles ---------- */
(function(){
  function setImportant(el, prop, value){
    if (!el) return;
    el.style.setProperty(prop, value, 'important');
  }

  function cleanAdminStatusEye(){
    const login = document.getElementById('adminLoginModal');
    const pass = document.getElementById('adminPass');
    const eye = document.getElementById('adminPasswordToggle');
    const user = document.getElementById('adminUser');
    const wrap = pass ? pass.closest('.admin-password-wrap') : document.querySelector('#adminLoginModal .admin-password-wrap');
    const connected = !!window.isAdminMode && login && login.classList.contains('open');
    const apply = (el, prop, value) => { if (el) el.style.setProperty(prop, value, 'important'); };
    if (connected) {
      apply(user, 'display', 'none');
      apply(pass, 'display', 'none');
      apply(wrap, 'display', 'none');
      apply(eye, 'display', 'none');
      return;
    }
    if (!pass || !eye) return;
    if (wrap) wrap.style.removeProperty('display');
    eye.style.removeProperty('display');
    const visible = pass.type === 'text';
    eye.classList.toggle('visible', visible);
    eye.setAttribute('aria-label', visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
  }

  function cleanScaleControls(){
    document.querySelectorAll('.minch-scale-label, .minch-scale-box').forEach(el => el.remove());
    document.querySelectorAll('.minch-scaled-img').forEach(img => img.style.setProperty('--minch-scale','1'));
    document.querySelectorAll('.card img').forEach(img => img.style.setProperty('--minch-card-scale','1'));
  }

  function controlsLayout(){
    const isBuild = document.body.classList.contains('build-open');
    const music = (typeof byId === 'function' ? byId('musicPanel') : document.getElementById('musicPanel')) || document.getElementById('musicPanel');
    const admin = (typeof byId === 'function' ? byId('adminButton') : document.getElementById('adminButton')) || document.getElementById('adminButton');
    const apply = (el, props) => { if (!el) return; Object.keys(props).forEach(k => el.style.setProperty(k, props[k], 'important')); };
    if (isBuild) {
      apply(music, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      apply(admin, { display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none' });
      return;
    }
    apply(music, { display:'flex', position:'absolute', top:'16px', left:'16px', right:'auto', 'z-index':'2200', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
    apply(admin, { display:'flex', position:'absolute', top:'16px', right:'16px', left:'auto', 'z-index':'2201', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none' });
  }

  function enhanceDropZones(){
    const modal = document.getElementById('adminEditorModal');
    if (!modal || !modal.classList.contains('open')) return;

    function showPreview(input, preview){
      const file = input.files && input.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      preview.innerHTML = `<img src="${url}" alt="Aperçu"><div class="minch-zone-file">${file.name}</div><div class="minch-zone-subtitle">Clique ou dépose une autre image pour remplacer</div>`;
    }

    modal.querySelectorAll('input[type="file"]').forEach(input => {
      const row = input.closest('.admin-file-row') || input.parentElement;
      if (!row) return;
      row.classList.add('minch-image-zone');
      input.classList.add('minch-hidden-file-input');
      let preview = row.querySelector('.minch-file-preview');
      if (!preview) {
        preview = document.createElement('div');
        preview.className = 'minch-file-preview';
        row.appendChild(preview);
      }
      if (!preview.dataset.minchReadyText) {
        preview.dataset.minchReadyText = 'true';
        preview.innerHTML = '<div class="minch-zone-title">Dépose ton image ici</div><div class="minch-zone-subtitle">ou clique pour choisir un fichier</div>';
      }
      if (row.dataset.minchZoneClick !== 'true') {
        row.dataset.minchZoneClick = 'true';
        row.addEventListener('click', function(e){
          if (e.target === input) return;
          e.preventDefault();
          input.click();
        });
      }
      if (row.dataset.minchDropReady !== 'true') {
        row.dataset.minchDropReady = 'true';
        ['dragenter','dragover'].forEach(type => row.addEventListener(type, function(e){
          e.preventDefault();
          e.stopPropagation();
          row.classList.add('drag-over');
        }));
        ['dragleave','dragend'].forEach(type => row.addEventListener(type, function(e){
          e.preventDefault();
          e.stopPropagation();
          row.classList.remove('drag-over');
        }));
        row.addEventListener('drop', function(e){
          e.preventDefault();
          e.stopPropagation();
          row.classList.remove('drag-over');
          const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
          if (!file || !file.type.startsWith('image/')) return;
          const dt = new DataTransfer();
          dt.items.add(file);
          input.files = dt.files;
          input.dispatchEvent(new Event('change', { bubbles:true }));
          showPreview(input, preview);
        });
      }
      if (input.dataset.minchPreviewPlus !== 'true') {
        input.dataset.minchPreviewPlus = 'true';
        input.addEventListener('change', function(){ showPreview(input, preview); });
      }
    });
  }

  function fullClean(){
    controlsLayout();
    cleanAdminStatusEye();
    cleanScaleControls();
    enhanceDropZones();
  }

  const oldOpenBuild = window.openBuild || (typeof openBuild !== 'undefined' ? openBuild : null);
  if (oldOpenBuild && !oldOpenBuild.__minchUiCleanFinal) {
    const patched = function(w){
      const result = oldOpenBuild(w);
      setTimeout(fullClean, 0);
      setTimeout(fullClean, 120);
      setTimeout(fullClean, 700);
      return result;
    };
    patched.__minchUiCleanFinal = true;
    window.openBuild = patched;
    try { openBuild = patched; } catch(e) {}
  }

  const oldCloseBuild = window.closeBuild || (typeof closeBuild !== 'undefined' ? closeBuild : null);
  if (oldCloseBuild && !oldCloseBuild.__minchUiCleanFinal) {
    const patched = function(){
      const result = oldCloseBuild();
      setTimeout(fullClean, 0);
      setTimeout(fullClean, 500);
      return result;
    };
    patched.__minchUiCleanFinal = true;
    window.closeBuild = patched;
    try { closeBuild = patched; } catch(e) {}
  }

  const oldOpenEditor = window.openAdminEditor || (typeof openAdminEditor !== 'undefined' ? openAdminEditor : null);
  if (oldOpenEditor && !oldOpenEditor.__minchUiCleanFinal) {
    const patched = function(w){
      const result = oldOpenEditor(w);
      setTimeout(fullClean, 40);
      setTimeout(fullClean, 180);
      return result;
    };
    patched.__minchUiCleanFinal = true;
    window.openAdminEditor = patched;
    try { openAdminEditor = patched; } catch(e) {}
  }

  const oldOpenLogin = window.openAdminLogin || (typeof openAdminLogin !== 'undefined' ? openAdminLogin : null);
  if (oldOpenLogin && !oldOpenLogin.__minchUiCleanFinal) {
    const patched = function(){
      const result = oldOpenLogin();
      setTimeout(fullClean, 0);
      setTimeout(fullClean, 80);
      return result;
    };
    patched.__minchUiCleanFinal = true;
    window.openAdminLogin = patched;
    try { openAdminLogin = patched; } catch(e) {}
  }

  window.addEventListener('scroll', fullClean, { passive:true });
  window.addEventListener('resize', fullClean, { passive:true });
  window.addEventListener('orientationchange', function(){ setTimeout(fullClean, 120); }, { passive:true });
  document.addEventListener('click', function(){ setTimeout(fullClean, 0); }, true);
  document.addEventListener('change', function(){ setTimeout(fullClean, 0); }, true);
  document.addEventListener('DOMContentLoaded', fullClean);
  setTimeout(fullClean, 0);
  setTimeout(fullClean, 500);
  setTimeout(fullClean, 1500);
  setInterval(fullClean, 1200);
})();


/* ---------- MINCH HOTFIX : stop clignotement + drag/drop images robuste ---------- */
(function(){
  function apply(el, props){ if (!el) return; Object.keys(props).forEach(k => el.style.setProperty(k, props[k], 'important')); }
  function finalControls(){
    const isBuild = document.body.classList.contains('build-open');
    const music = document.getElementById('musicPanel');
    const admin = document.getElementById('adminButton');
    if (isBuild) {
      apply(music, {display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none'});
      apply(admin, {display:'none', opacity:'0', visibility:'hidden', 'pointer-events':'none'});
    } else {
      apply(music, {display:'flex', position:'absolute', top:'16px', left:'16px', right:'auto', 'z-index':'2200', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none'});
      apply(admin, {display:'flex', position:'absolute', top:'16px', right:'16px', left:'auto', 'z-index':'2201', opacity:'1', visibility:'visible', 'pointer-events':'auto', transform:'none'});
    }
    const login = document.getElementById('adminLoginModal');
    if (window.isAdminMode && login && login.classList.contains('open')) {
      const pass = document.getElementById('adminPass');
      const eye = document.getElementById('adminPasswordToggle');
      const user = document.getElementById('adminUser');
      const wrap = pass ? pass.closest('.admin-password-wrap') : document.querySelector('#adminLoginModal .admin-password-wrap');
      apply(user,{display:'none'}); apply(pass,{display:'none'}); apply(wrap,{display:'none'}); apply(eye,{display:'none'});
    }
  }
  function preventBadDrop(e){
    const editor = document.getElementById('adminEditorModal');
    if (!editor || !editor.classList.contains('open')) return;
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
      e.preventDefault();
      if (e.target && e.target.closest && e.target.closest('.minch-image-zone')) return;
      e.stopPropagation();
    }
  }
  window.addEventListener('dragover', preventBadDrop, true);
  window.addEventListener('drop', preventBadDrop, true);
  window.addEventListener('dragenter', preventBadDrop, true);
  setInterval(finalControls, 120);
  setTimeout(finalControls, 0);
  setTimeout(finalControls, 300);
  setTimeout(finalControls, 1000);
})();


/* ---------- MINCH PATCH : IDs stables, duplication indépendante, images Firebase sans doublons futurs ---------- */
(function(){
  function makeId(item){
    const base = (typeof slugifyText === "function" ? slugifyText(item?.name || "config") : String(item?.name || "config").toLowerCase().replace(/[^a-z0-9]+/g,"_")) || "config";
    return `${base}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
  }
  function ensureIds(){
    const used = new Set();
    (window.warframesData || warframesData || []).forEach(item => {
      if (!item._id || used.has(item._id)) item._id = makeId(item);
      used.add(item._id);
      if (item.builds && item.builds[0]) {
        delete item.cardImageScale;
        delete item.builds[0].imageScales;
      }
    });
  }
  function uniqueCopyName(baseName){
    const names = new Set((warframesData || []).map(w => w.name));
    let candidate = `${baseName} Copie`;
    let n = 2;
    while (names.has(candidate)) candidate = `${baseName} Copie ${n++}`;
    return candidate;
  }

  ensureIds();

  const oldLoadFirebaseAdminData = window.loadFirebaseAdminData || (typeof loadFirebaseAdminData !== 'undefined' ? loadFirebaseAdminData : null);
  if (oldLoadFirebaseAdminData && !oldLoadFirebaseAdminData.__minchStableIds) {
    const patchedLoad = async function(){
      const data = await oldLoadFirebaseAdminData.apply(this, arguments);
      setTimeout(ensureIds, 0);
      return data;
    };
    patchedLoad.__minchStableIds = true;
    window.loadFirebaseAdminData = patchedLoad;
    try { loadFirebaseAdminData = patchedLoad; } catch(e) {}
  }

  const oldRefreshAfterAdminChange = window.refreshAfterAdminChange || (typeof refreshAfterAdminChange !== 'undefined' ? refreshAfterAdminChange : null);
  if (oldRefreshAfterAdminChange && !oldRefreshAfterAdminChange.__minchStableIds) {
    const patchedRefresh = function(){
      ensureIds();
      return oldRefreshAfterAdminChange.apply(this, arguments);
    };
    patchedRefresh.__minchStableIds = true;
    window.refreshAfterAdminChange = patchedRefresh;
    try { refreshAfterAdminChange = patchedRefresh; } catch(e) {}
  }

  function patchedDuplicateCurrentWarframe(){
    ensureIds();
    if (!window.currentOpenWarframe) return;
    const copy = deepClone(window.currentOpenWarframe);
    copy._id = makeId(copy);
    copy.name = uniqueCopyName((window.currentOpenWarframe.name || "Configuration").replace(/ Copie( \d+)?$/,""));
    if (copy.builds && copy.builds[0]) {
      copy.builds[0].name = `${copy.name} Configuration`;
      delete copy.builds[0].imageScales;
    }
    delete copy.cardImageScale;
    warframesData.push(copy);
    window.currentOpenWarframe = copy;
    refreshAfterAdminChange();
    if (typeof fillBuildContent === "function" && document.body.classList.contains("build-open")) fillBuildContent(copy);
  }

  window.duplicateCurrentWarframe = patchedDuplicateCurrentWarframe;
  try { duplicateCurrentWarframe = patchedDuplicateCurrentWarframe; } catch(e) {}

  window.minchEnsureStableConfigIds = ensureIds;
  setTimeout(ensureIds, 0);
  setTimeout(ensureIds, 500);
})();


/* ---------- MINCH HOTFIX SAUVEGARDE FIREBASE : nouvelles configs fiables ---------- */
(function(){
  const $ = (id) => document.getElementById(id);
  let saveQueue = Promise.resolve();

  function safeSlug(value){
    try { return slugifyText(value || "config") || "config"; }
    catch(e){ return String(value || "config").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"") || "config"; }
  }

  function makeStableId(name){
    return `${safeSlug(name || "config")}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
  }

  function ensureAllIds(){
    const used = new Set();
    (warframesData || []).forEach((w) => {
      if (!w._id || used.has(w._id)) w._id = makeStableId(w.name);
      used.add(w._id);
    });
  }

  function getValue(id){ return $(id) ? $(id).value : ""; }
  function getChecked(id){ return $(id) ? $(id).checked : false; }

  function normalizeUrlField(id){
    return typeof normalizeYouTubeUrl === "function" ? normalizeYouTubeUrl(getValue(id)) : getValue(id).trim();
  }

  function getFile(inputId){
    const input = $(inputId);
    return input && input.files && input.files[0] ? input.files[0] : null;
  }

  async function fileToDataUrlSafe(file){
    if (!file) return null;
    if (typeof compressImageForFirebase === "function") {
      const compressed = await compressImageForFirebase(file);
      if (compressed) return compressed;
    }
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onerror = () => resolve(null);
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  async function blobFromDataUrl(dataUrl){
    if (typeof dataUrlToBlob === "function") return await dataUrlToBlob(dataUrl);
    return await (await fetch(dataUrl)).blob();
  }

  async function uploadField(inputId, configId, fieldKey){
    const file = getFile(inputId);
    if (!file) return null;

    // Si Firebase n'est pas prêt, on garde l'ancien comportement local en dataURL.
    if (!initMinchFirebase() || !firebaseStorage) {
      return await fileToDataUrlSafe(file);
    }

    const dataUrl = await fileToDataUrlSafe(file);
    if (!dataUrl) return null;

    const blob = await blobFromDataUrl(dataUrl);
    const extension = blob.type === "image/png" ? "png" : "webp";
    const safeConfigId = safeSlug(configId);
    const safeField = safeSlug(fieldKey || inputId);
    const ref = firebaseStorage.ref().child(`warframe-images/configs/${safeConfigId}/${safeField}.${extension}`);

    await ref.put(blob, {
      contentType: blob.type || "image/webp",
      customMetadata: {
        originalName: file.name,
        configId: safeConfigId,
        fieldKey: safeField,
        savedAt: new Date().toISOString()
      }
    });

    return await ref.getDownloadURL();
  }

  function applyCommonEditorFields(editing){
    const newName = getValue("editWarframeName").trim() || "Nouvelle Warframe";
    editing.name = newName;
    if (!editing.builds) editing.builds = [{}];
    const build = getOrCreateBuild(editing);

    build.name = getValue("editBuildName").trim() || `${newName} Configuration`;
    build.infoText = getValue("editInfoText").trim();
    build.video = normalizeUrlField("editVideo");
    build.skinVideo = normalizeUrlField("editSkinVideo");
    build.companionSkinVideo = normalizeUrlField("editCompanionSkinVideo");
    build.fragments = textToFragments(getValue("editFragments")).slice(0, 5);

    build.blockTexts = {
      skinText: getValue("textSkin"),
      configText: getValue("textConfig"),
      specialText: getValue("textSpecial"),
      fragmentsText: getValue("textFragments"),
      primaryText: getValue("textPrimary"),
      secondaryText: getValue("textSecondary"),
      meleeText: getValue("textMelee"),
      companionSkinText: getValue("textCompanionSkin"),
      companionTextBlock: getValue("textCompanion"),
      companionWeaponText: getValue("textCompanionWeapon"),
      descriptionText: getValue("textDescription"),
      videoExplanationText: getValue("textVideoExplanation"),
      videoSkinWarframeText: getValue("textVideoSkinWarframe"),
      videoSkinCompanionText: getValue("textVideoSkinCompanion")
    };
    const sizeKeys = ["skinText","configText","specialText","fragmentsText","primaryText","secondaryText","meleeText","companionSkinText","companionTextBlock","companionWeaponText","description","descriptionText","videoExplanationText","videoSkinWarframeText","videoSkinCompanionText"];
    build.textSizes = {};
    sizeKeys.forEach((key) => {
      build.textSizes[key] = Math.max(10, Math.min(40, Number(getValue("textSize_" + key)) || 16));
    });

    build.display = {
      skinImage: getChecked("showSkinImage"), skinText: getChecked("showSkinText"),
      configImage: getChecked("showConfigImage"), configText: getChecked("showConfigText"),
      specialWeapons: getChecked("showSpecialWeapons"), specialText: getChecked("showSpecialText"),
      fragments: getChecked("showFragments"), fragmentsText: getChecked("showFragmentsText"),
      primaryWeapon: getChecked("showPrimaryWeapon"), primaryText: getChecked("showPrimaryText"),
      secondaryWeapon: getChecked("showSecondaryWeapon"), secondaryText: getChecked("showSecondaryText"),
      meleeWeapon: getChecked("showMeleeWeapon"), meleeText: getChecked("showMeleeText"),
      companionSkin: getChecked("showCompanionSkin"), companionSkinText: getChecked("showCompanionSkinText"),
      companion: getChecked("showCompanion"), companionTextBlock: getChecked("showCompanionTextBlock"),
      companionWeapon: getChecked("showCompanionWeapon"), companionWeaponText: getChecked("showCompanionWeaponText"),
      description: getChecked("showDescription"), descriptionText: getChecked("showDescriptionText"),
      videoExplanation: getChecked("showVideoExplanation"), videoExplanationText: getChecked("showVideoExplanationText"),
      videoSkinWarframe: getChecked("showVideoSkinWarframe"), videoSkinWarframeText: getChecked("showVideoSkinWarframeText"),
      videoSkinCompanion: getChecked("showVideoSkinCompanion"), videoSkinCompanionText: getChecked("showVideoSkinCompanionText")
    };

    if (!build.specialWeapons) build.specialWeapons = { enabled:false, title:"Armes exaltées / propres à la Warframe", items:[] };
    if (!Array.isArray(build.specialWeapons.items)) build.specialWeapons.items = [];
    while (build.specialWeapons.items.length < 3) build.specialWeapons.items.push({});
    build.specialWeapons.enabled = getChecked("showSpecialWeapons");
    build.specialWeapons.title = getValue("editSpecialTitle").trim() || "Armes exaltées / propres à la Warframe";
    [0,1,2].forEach((i) => {
      build.specialWeapons.items[i].enabled = getChecked(`editSpecialItemEnabled_${i}`);
      build.specialWeapons.items[i].name = getValue(`editSpecialName_${i}`).trim() || `Arme exaltée ${i + 1}`;
    });

    if (!build.weapons) build.weapons = {};
    ["principale", "secondaire", "melee"].forEach((slot) => {
      if (!build.weapons[slot]) build.weapons[slot] = {};
      build.weapons[slot].name = getValue(`editWeaponName_${slot}`).trim() || "Nom d'arme";
    });

    if (!build.companion) build.companion = {};
    build.companion.name = getValue("editCompanionName").trim() || "Nom du compagnon";
    build.companion.skinName = getValue("editCompanionSkinName").trim() || "Skin du compagnon";
    build.companion.weaponName = getValue("editCompanionWeaponName").trim() || "Nom de l'arme du compagnon";

    delete editing.cardImageScale;
    delete build.imageScales;
    return build;
  }

  async function robustSaveEditor(){
    const modal = $("adminEditorModal");
    const status = $("adminSaveStatus");
    const saveBtn = $("saveAdminEdit");
    if (!modal) return;

    if (saveBtn) saveBtn.disabled = true;
    if (status) status.textContent = "Sauvegarde en cours...";

    await (saveQueue = saveQueue.catch(() => {}).then(async () => {
      ensureAllIds();

      const originalId = modal.dataset.minchEditingId || "";
      const originalName = modal.dataset.minchEditingName || "";
      const existing = (warframesData || []).find(w => (originalId && w._id === originalId) || (!originalId && originalName && w.name === originalName));
      const editing = existing ? deepClone(existing) : { _id: originalId || makeStableId(getValue("editWarframeName")), name:"", builds:[{}] };
      if (!editing._id) editing._id = makeStableId(editing.name || getValue("editWarframeName"));
      modal.dataset.minchEditingId = editing._id;

      const build = applyCommonEditorFields(editing);
      editing._updatedAt = Date.now();
      const configId = editing._id;

      const uploads = [
        ["editCardImage", "card", (u) => editing.cardImage = u],
        ["editFashionImage", "fashion", (u) => build.fashionImage = u],
        ["editBuildImage", "warframe_build", (u) => build.buildImage = u],
        ["editSpecialImage_0", "special_1_image", (u) => build.specialWeapons.items[0].image = u],
        ["editSpecialBuild_0", "special_1_build", (u) => build.specialWeapons.items[0].buildImage = u],
        ["editSpecialImage_1", "special_2_image", (u) => build.specialWeapons.items[1].image = u],
        ["editSpecialBuild_1", "special_2_build", (u) => build.specialWeapons.items[1].buildImage = u],
        ["editSpecialImage_2", "special_3_image", (u) => build.specialWeapons.items[2].image = u],
        ["editSpecialBuild_2", "special_3_build", (u) => build.specialWeapons.items[2].buildImage = u],
        ["editWeaponImage_principale", "primary_weapon", (u) => build.weapons.principale.image = u],
        ["editWeaponBuild_principale", "primary_weapon_build", (u) => build.weapons.principale.buildImage = u],
        ["editWeaponImage_secondaire", "secondary_weapon", (u) => build.weapons.secondaire.image = u],
        ["editWeaponBuild_secondaire", "secondary_weapon_build", (u) => build.weapons.secondaire.buildImage = u],
        ["editWeaponImage_melee", "melee_weapon", (u) => build.weapons.melee.image = u],
        ["editWeaponBuild_melee", "melee_weapon_build", (u) => build.weapons.melee.buildImage = u],
        ["editCompanionSkinImage", "companion_skin", (u) => build.companion.skinImage = u],
        ["editCompanionImage", "companion", (u) => build.companion.image = u],
        ["editCompanionBuildImage", "companion_build", (u) => build.companion.buildImage = u],
        ["editCompanionWeaponImage", "companion_weapon", (u) => build.companion.weaponImage = u],
        ["editCompanionWeaponBuildImage", "companion_weapon_build", (u) => build.companion.weaponBuildImage = u]
      ];

      // Important : on attend tous les uploads avant d'écrire Firestore.
      for (const [inputId, fieldKey, applyUrl] of uploads) {
        const url = await uploadField(inputId, configId, fieldKey);
        if (url) applyUrl(url);
      }

      let index = warframesData.findIndex(w => w._id && w._id === editing._id);
      if (index < 0 && originalName) index = warframesData.findIndex(w => w.name === originalName);
      if (index >= 0) warframesData[index] = editing;
      else warframesData.push(editing);

      ensureAllIds();
      window.currentOpenWarframe = editing;
      localStorage.setItem(ADMIN_DATA_KEY, JSON.stringify(warframesData));
      const onlineOk = await saveFirebaseAdminData();
      renderGrid();
      if (document.body.classList.contains("build-open") && typeof fillBuildContent === "function") fillBuildContent(editing);
      if (status) status.textContent = onlineOk ? "Sauvegardé en ligne sur Firebase." : "Sauvegardé localement. Firebase n'a pas répondu.";
    }));

    if (saveBtn) saveBtn.disabled = false;
  }

  function patchEditorSaveButton(warframe){
    const modal = $("adminEditorModal");
    const oldBtn = $("saveAdminEdit");
    if (!modal || !oldBtn) return;

    modal.dataset.minchEditingId = warframe && warframe._id ? warframe._id : (modal.dataset.minchEditingId || "");
    modal.dataset.minchEditingName = warframe && warframe.name ? warframe.name : (modal.dataset.minchEditingName || "");

    // Clone le bouton pour retirer les anciens onclick qui pouvaient pousser une nouvelle config plusieurs fois.
    const newBtn = oldBtn.cloneNode(true);
    oldBtn.replaceWith(newBtn);
    newBtn.addEventListener("click", function(event){
      event.preventDefault();
      event.stopPropagation();
      robustSaveEditor().catch((err) => {
        console.error("Erreur sauvegarde robuste :", err);
        const status = $("adminSaveStatus");
        if (status) status.textContent = "Erreur pendant la sauvegarde.";
        const btn = $("saveAdminEdit");
        if (btn) btn.disabled = false;
      });
    });
  }

  const previousOpenAdminEditor = window.openAdminEditor || (typeof openAdminEditor !== "undefined" ? openAdminEditor : null);
  if (previousOpenAdminEditor && !previousOpenAdminEditor.__minchRobustFirebaseSave) {
    const patchedOpenAdminEditor = function(warframe){
      const result = previousOpenAdminEditor.apply(this, arguments);
      const modal = $("adminEditorModal");
      if (modal) {
        modal.dataset.minchEditingId = warframe && warframe._id ? warframe._id : "";
        modal.dataset.minchEditingName = warframe && warframe.name ? warframe.name : "";
      }
      setTimeout(() => patchEditorSaveButton(warframe), 0);
      setTimeout(() => patchEditorSaveButton(warframe), 120);
      return result;
    };
    patchedOpenAdminEditor.__minchRobustFirebaseSave = true;
    window.openAdminEditor = patchedOpenAdminEditor;
    try { openAdminEditor = patchedOpenAdminEditor; } catch(e) {}
  }

  // Corrige les anciennes données en mémoire au chargement, sans toucher au design.
  const previousSaveAdminData = window.saveAdminData || (typeof saveAdminData !== "undefined" ? saveAdminData : null);
  if (previousSaveAdminData && !previousSaveAdminData.__minchRobustFirebaseSave) {
    const patchedSaveAdminData = function(){
      ensureAllIds();
      return previousSaveAdminData.apply(this, arguments);
    };
    patchedSaveAdminData.__minchRobustFirebaseSave = true;
    window.saveAdminData = patchedSaveAdminData;
    try { saveAdminData = patchedSaveAdminData; } catch(e) {}
  }

  window.minchRobustSaveEditor = robustSaveEditor;
  ensureAllIds();
})();


/* ---------- MINCH : favoris + tri accueil + qualité cartes ---------- */
(function(){
  const FAVORITES_KEY = "minch-warframe-favorites-v1";
  const SORT_KEY = "minch-warframe-sort-v1";

  function getFavorites(){
    try {
      const parsed = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch(e) {
      return new Set();
    }
  }

  function saveFavorites(set){
    try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(set))); } catch(e) {}
  }

  function warframeKey(w){
    return String((w && (w._id || w.name)) || "");
  }

  function currentSort(){
    const select = document.getElementById("warframeSort");
    return select ? select.value : (localStorage.getItem(SORT_KEY) || "recent");
  }

  function sortedList(list){
    const favorites = getFavorites();
    const mode = currentSort();
    return Array.from(list || []).sort((a,b) => {
      const af = favorites.has(warframeKey(a)) ? 1 : 0;
      const bf = favorites.has(warframeKey(b)) ? 1 : 0;
      if (af !== bf) return bf - af;

      if (mode === "alpha") {
        return String(a?.name || "").localeCompare(String(b?.name || ""), "fr", { sensitivity:"base" });
      }

      const ad = Number(a?._updatedAt || 0);
      const bd = Number(b?._updatedAt || 0);
      if (ad !== bd) return bd - ad;
      return 0;
    });
  }

  if (typeof createWarframeCard === "function") {
    const previousCreateWarframeCard = createWarframeCard;
    createWarframeCard = function(warframe){
      const card = previousCreateWarframeCard(warframe);
      if (!card || card.querySelector(".favorite-toggle")) return card;

      const key = warframeKey(warframe);
      const favorites = getFavorites();
      const button = document.createElement("button");
      button.type = "button";
      button.className = "favorite-toggle" + (favorites.has(key) ? " is-favorite" : "");
      button.innerHTML = favorites.has(key) ? "★" : "☆";
      button.title = favorites.has(key) ? "Retirer des favoris" : "Ajouter aux favoris";
      button.setAttribute("aria-label", button.title);

      button.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        const set = getFavorites();
        if (set.has(key)) set.delete(key); else set.add(key);
        saveFavorites(set);
        if (typeof filterWarframes === "function") filterWarframes();
        else if (typeof renderGrid === "function") renderGrid();
      });

      card.appendChild(button);
      const img = card.querySelector("img");
      if (img) {
        img.decoding = "async";
        img.loading = "eager";
        img.style.imageRendering = "auto";
      }
      return card;
    };
    window.createWarframeCard = createWarframeCard;
  }

  if (typeof renderWarframes === "function") {
    const previousRenderWarframes = renderWarframes;
    renderWarframes = function(list){
      return previousRenderWarframes(sortedList(list));
    };
    window.renderWarframes = renderWarframes;
  }

  function initSort(){
    const select = document.getElementById("warframeSort");
    if (!select || select.dataset.minchSortReady === "true") return;
    select.dataset.minchSortReady = "true";
    const stored = localStorage.getItem(SORT_KEY);
    select.value = stored === "alpha" ? "alpha" : "recent";
    select.addEventListener("change", function(){
      try { localStorage.setItem(SORT_KEY, select.value); } catch(e) {}
      if (typeof filterWarframes === "function") filterWarframes();
      else if (typeof renderGrid === "function") renderGrid();
    });
  }

  function refreshHome(){
    initSort();
    if (typeof filterWarframes === "function") filterWarframes();
    else if (typeof renderGrid === "function") renderGrid();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", refreshHome, { once:true });
  } else {
    refreshHome();
  }
})();


/* ---------- MINCH V3 : zones de texte accueil administrables ---------- */
(function(){
  const STORAGE_KEY = "minch-home-text-blocks-v1";
  let homeTextBlocks = [];

  function safeHome(v){
    return String(v ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function normalizeBlocks(value){
    if (!Array.isArray(value)) return [];
    return value.map((b, i) => ({
      id: String(b?.id || `home_${Date.now()}_${i}_${Math.random().toString(36).slice(2,7)}`),
      position: b?.position === "bottom" ? "bottom" : "top",
      text: String(b?.text || ""),
      fontSize: Math.max(10, Math.min(40, Number(b?.fontSize) || 16))
    }));
  }

  function loadLocal(){
    try { homeTextBlocks = normalizeBlocks(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); }
    catch(e){ homeTextBlocks = []; }
  }

  function saveLocal(){
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(homeTextBlocks)); } catch(e) {}
  }

  async function loadOnline(){
    if (!initMinchFirebase() || !firebaseDb) return;
    try {
      const doc = await firebaseDb.collection(FIREBASE_COLLECTION).doc(FIREBASE_DOCUMENT).get();
      if (!doc.exists) return;
      const data = doc.data() || {};
      if (Array.isArray(data.homeTextBlocks)) {
        homeTextBlocks = normalizeBlocks(data.homeTextBlocks);
        saveLocal();
        renderHomeTextBlocks();
      }
    } catch(e) { console.warn("Zones texte accueil : chargement en ligne impossible", e); }
  }

  async function saveOnline(){
    saveLocal();
    if (!initMinchFirebase() || !firebaseDb) return false;
    try {
      await firebaseDb.collection(FIREBASE_COLLECTION).doc(FIREBASE_DOCUMENT).set({
        homeTextBlocks,
        homeTextBlocksUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge:true });
      return true;
    } catch(e) { console.error("Zones texte accueil : sauvegarde en ligne impossible", e); return false; }
  }

  function ensureContainers(){
    const home = document.getElementById("homeUI");
    const search = home?.querySelector(".search-container");
    const grid = document.getElementById("warframeGrid");
    if (!home || !search || !grid) return null;

    let top = document.getElementById("homeTextTop");
    if (!top) {
      top = document.createElement("div");
      top.id = "homeTextTop";
      top.className = "home-text-zone home-text-zone-top";
      search.insertAdjacentElement("afterend", top);
    }
    let bottom = document.getElementById("homeTextBottom");
    if (!bottom) {
      bottom = document.createElement("div");
      bottom.id = "homeTextBottom";
      bottom.className = "home-text-zone home-text-zone-bottom";
      grid.insertAdjacentElement("afterend", bottom);
    }
    return {top,bottom};
  }

  function openBlockEditor(block){
    const isExisting = Boolean(block && !block.__new && homeTextBlocks.some(x => x.id === block.id));
    const existing = block || { id:`home_${Date.now()}_${Math.random().toString(36).slice(2,8)}`, position:"top", text:"", fontSize:16 };
    let overlay = document.getElementById("homeTextAdminModal");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "homeTextAdminModal";
      overlay.className = "home-text-admin-modal";
      document.body.appendChild(overlay);
    }
    overlay.innerHTML = `
      <div class="home-text-admin-card">
        <button type="button" class="home-text-admin-close" aria-label="Fermer">×</button>
        <h2>${isExisting ? "Modifier la zone de texte" : "Ajouter une zone de texte"}</h2>
        <label>Emplacement
          <select id="homeTextPosition" class="admin-input">
            <option value="top" ${existing.position === "top" ? "selected" : ""}>Sous la recherche</option>
            <option value="bottom" ${existing.position === "bottom" ? "selected" : ""}>Sous toutes les cartes</option>
          </select>
        </label>
        <label>Texte<textarea id="homeTextValue" class="admin-textarea" placeholder="Écrire le texte à afficher...">${safeHome(existing.text)}</textarea></label>
        <label class="home-text-size-row">Taille du texte
          <input id="homeTextSize" class="admin-input" type="number" min="10" max="40" value="${existing.fontSize}">
          <span>px</span>
        </label>
        <div class="home-text-admin-actions">
          <button type="button" class="admin-primary" id="homeTextSave">Sauvegarder</button>
          ${isExisting ? '<button type="button" class="admin-danger" id="homeTextDelete">Supprimer</button>' : ''}
        </div>
      </div>`;
    overlay.classList.add("open");

    const close = () => overlay.classList.remove("open");
    overlay.querySelector(".home-text-admin-close").onclick = close;
    overlay.onclick = e => { if (e.target === overlay) close(); };
    overlay.querySelector("#homeTextSave").onclick = async () => {
      const text = String(overlay.querySelector("#homeTextValue")?.value || "").trim();
      const position = overlay.querySelector("#homeTextPosition")?.value === "bottom" ? "bottom" : "top";
      const fontSize = Math.max(10, Math.min(40, Number(overlay.querySelector("#homeTextSize")?.value) || 16));
      if (!text) return;
      const item = { id:existing.id, position, text, fontSize };
      const idx = homeTextBlocks.findIndex(x => x.id === existing.id);
      if (idx >= 0) homeTextBlocks[idx] = item; else homeTextBlocks.push(item);
      await saveOnline();
      renderHomeTextBlocks();
      close();
    };
    const del = overlay.querySelector("#homeTextDelete");
    if (del) del.onclick = async () => {
      homeTextBlocks = homeTextBlocks.filter(x => x.id !== existing.id);
      await saveOnline();
      renderHomeTextBlocks();
      close();
    };
  }

  function renderZone(container, position){
    if (!container) return;
    const blocks = homeTextBlocks.filter(b => b.position === position);
    container.innerHTML = blocks.map(b => `
      <div class="home-text-block" data-home-text-id="${safeHome(b.id)}" style="font-size:${b.fontSize}px">
        <div class="home-text-content">${window.minchRichTextHTML ? window.minchRichTextHTML(b.text) : safeHome(b.text).replace(/\n/g,"<br>")}</div>
        ${window.isAdminMode ? '<button type="button" class="home-text-edit-btn">Modifier</button>' : ''}
      </div>`).join("") + (window.isAdminMode ? `<button type="button" class="home-text-add-btn" data-home-add="${position}">＋ Ajouter une zone de texte</button>` : "");

    container.querySelectorAll(".home-text-edit-btn").forEach(btn => {
      btn.onclick = () => {
        const id = btn.closest(".home-text-block")?.dataset.homeTextId;
        const block = homeTextBlocks.find(x => x.id === id);
        if (block) openBlockEditor(block);
      };
    });
    container.querySelectorAll(".home-text-add-btn").forEach(btn => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openBlockEditor({
          id:`home_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
          position:btn.dataset.homeAdd === "bottom" ? "bottom" : "top",
          text:"",
          fontSize:16,
          __new:true
        });
      });
    });
  }

  function renderHomeTextBlocks(){
    const c = ensureContainers();
    if (!c) return;
    renderZone(c.top, "top");
    renderZone(c.bottom, "bottom");
  }

  loadLocal();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderHomeTextBlocks, {once:true});
  else renderHomeTextBlocks();
  setTimeout(loadOnline, 250);

  // Le mode admin peut être activé/désactivé sans recharger la page : on rafraîchit uniquement ces zones.
  setInterval(() => {
    const marker = document.body.dataset.homeAdminState;
    const state = window.isAdminMode ? "1" : "0";
    if (marker !== state) {
      document.body.dataset.homeAdminState = state;
      renderHomeTextBlocks();
    }
  }, 500);

  // Sécurité : même si une zone est recréée par un autre rendu de la page,
  // le bouton d'ajout reste toujours cliquable.
  document.addEventListener("click", (event) => {
    const addBtn = event.target.closest?.(".home-text-add-btn");
    if (!addBtn || !window.isAdminMode) return;
    event.preventDefault();
    event.stopPropagation();
    openBlockEditor({
      id:`home_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
      position:addBtn.dataset.homeAdd === "bottom" ? "bottom" : "top",
      text:"",
      fontSize:16,
      __new:true
    });
  });

  window.renderHomeTextBlocks = renderHomeTextBlocks;
})();

/* ---------- MINCH V2 : visionneuse HD des images de la page configuration ---------- */
(function(){
  function isBuildContentImage(img){
    if (!img || !img.closest) return false;
    if (!img.closest('#buildContent')) return false;
    if (img.closest('.shard-item')) return false;
    if (img.closest('.incarnon-icon-wrap')) return false;
    return true;
  }

  function ensureViewer(){
    let viewer = document.getElementById('minchImageViewer');
    if (viewer) return viewer;

    viewer = document.createElement('div');
    viewer.id = 'minchImageViewer';
    viewer.className = 'minch-image-viewer';
    viewer.setAttribute('aria-hidden', 'true');
    viewer.innerHTML = `
      <div class="minch-image-viewer-inner" role="dialog" aria-modal="true" aria-label="Image agrandie">
        <img class="minch-image-viewer-img" alt="">
        <button class="minch-image-viewer-close" type="button" aria-label="Fermer">×</button>
      </div>`;
    document.body.appendChild(viewer);

    const close = () => {
      viewer.classList.remove('open');
      viewer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('minch-image-viewer-open');
      const full = viewer.querySelector('.minch-image-viewer-img');
      if (full) {
        full.removeAttribute('src');
        full.alt = '';
      }
    };

    viewer.addEventListener('click', (event) => {
      if (event.target === viewer || event.target.closest('.minch-image-viewer-close')) close();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && viewer.classList.contains('open')) close();
    });

    viewer._minchClose = close;
    return viewer;
  }

  function markBuildImages(root=document){
    root.querySelectorAll('#buildContent img').forEach((img) => {
      if (isBuildContentImage(img)) {
        img.classList.add('minch-zoomable-image');
        img.decoding = 'async';
        img.style.imageRendering = 'auto';
      } else {
        img.classList.remove('minch-zoomable-image');
      }
    });
  }

  document.addEventListener('click', (event) => {
    const img = event.target && event.target.closest ? event.target.closest('#buildContent img') : null;
    if (!isBuildContentImage(img)) return;

    event.preventDefault();
    event.stopPropagation();

    const viewer = ensureViewer();
    const full = viewer.querySelector('.minch-image-viewer-img');
    if (!full) return;

    // Utilise directement le fichier source original : aucune capture ni redimensionnement intermédiaire.
    full.src = img.currentSrc || img.src;
    full.alt = img.alt || 'Image agrandie';
    viewer.classList.add('open');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('minch-image-viewer-open');
  }, true);

  // Le contenu de la page 2 est régénéré dynamiquement : on marque aussi les nouvelles images.
  const observer = new MutationObserver((mutations) => {
    let shouldRefresh = false;
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        shouldRefresh = true;
        break;
      }
    }
    if (shouldRefresh) markBuildImages(document);
  });

  function init(){
    ensureViewer();
    markBuildImages(document);
    const content = document.getElementById('buildContent');
    if (content) observer.observe(content, { childList:true, subtree:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once:true });
  else init();
})();


/* ---------- MINCH V6 : FORMATAGE RICHE CORRIGÉ ---------- */
(function(){
  function escapeRich(value){
    return String(value ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;");
  }

  function repairLegacyMarkup(value){
    let raw = String(value ?? "");
    // Corrige uniquement les balises générées par l'ancienne version de l'éditeur.
    raw = raw
      .replace(/&lt;(br\s*\/?)&gt;/gi, "<$1>")
      .replace(/&lt;(\/?(?:strong|b|em|i|div|p))&gt;/gi, "<$1>")
      .replace(/&lt;span\s+style=&quot;color:([^&]+)&quot;&gt;/gi, '<span style="color:$1">')
      .replace(/&lt;\/span&gt;/gi, "</span>");
    return raw;
  }

  function normalizeColor(color){
    const probe = document.createElement("span");
    probe.style.color = color || "";
    if (!probe.style.color) return "";
    document.body.appendChild(probe);
    const rgb = getComputedStyle(probe).color;
    probe.remove();
    const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return String(color || "").toLowerCase();
    return "#" + [m[1],m[2],m[3]].map(n => Number(n).toString(16).padStart(2,"0")).join("");
  }

  function sanitizeRichHTML(value){
    const raw = repairLegacyMarkup(value);
    if (!/[<>]/.test(raw)) return escapeRich(raw).replace(/\r?\n/g,"<br>");

    const source = document.createElement("template");
    source.innerHTML = raw;

    function rebuild(node){
      let out = "";
      node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          out += escapeRich(child.nodeValue || "");
          return;
        }
        if (child.nodeType !== Node.ELEMENT_NODE) return;
        const tag = child.tagName;
        const inner = rebuild(child);
        if (tag === "BR") { out += "<br>"; return; }
        if (tag === "B" || tag === "STRONG") { out += `<strong>${inner}</strong>`; return; }
        if (tag === "I" || tag === "EM") { out += `<em>${inner}</em>`; return; }
        if (tag === "SPAN" || tag === "FONT") {
          const color = tag === "FONT" ? (child.getAttribute("color") || "") : (child.style?.color || "");
          const normalized = normalizeColor(color);
          out += normalized ? `<span style="color:${normalized}">${inner}</span>` : inner;
          return;
        }
        if (tag === "DIV" || tag === "P") {
          out += inner;
          if (child.nextSibling) out += "<br>";
          return;
        }
        // Les balises inconnues ne sont jamais conservées, uniquement leur texte.
        out += inner || escapeRich(child.textContent || "");
      });
      return out;
    }

    return rebuild(source.content)
      .replace(/(?:<br>){3,}/g,"<br><br>")
      .replace(/^(?:<br>)+|(?:<br>)+$/g,"");
  }

  window.minchRichTextHTML = sanitizeRichHTML;

  function sourceToEditorHTML(value){
    const raw = repairLegacyMarkup(value);
    return sanitizeRichHTML(raw);
  }

  function syncRichEditor(editor, textarea){
    const clean = sanitizeRichHTML(editor.innerHTML);
    textarea.value = clean;
    textarea.dispatchEvent(new Event("input", { bubbles:true }));
  }

  function saveSelection(editor){
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    if (editor.contains(range.commonAncestorContainer)) editor._minchRange = range.cloneRange();
  }

  function restoreSelection(editor){
    if (!editor._minchRange) return;
    const sel = window.getSelection();
    if (!sel) return;
    try {
      sel.removeAllRanges();
      sel.addRange(editor._minchRange);
    } catch (_) {}
  }

  function currentColor(){
    try { return normalizeColor(document.queryCommandValue("foreColor")); }
    catch (_) { return ""; }
  }

  function updateToolbar(editor, toolbar){
    if (!editor || !toolbar) return;
    let bold = false, italic = false;
    try {
      bold = document.queryCommandState("bold");
      italic = document.queryCommandState("italic");
    } catch (_) {}
    toolbar.querySelector(".minch-rich-bold")?.classList.toggle("is-active", !!bold);
    toolbar.querySelector(".minch-rich-italic")?.classList.toggle("is-active", !!italic);

    const activeColor = currentColor();
    toolbar.querySelectorAll(".minch-rich-color-swatch").forEach(btn => {
      btn.classList.toggle("is-active", normalizeColor(btn.dataset.color) === activeColor);
    });
  }

  function exec(editor, textarea, toolbar, command, value=null){
    restoreSelection(editor);
    editor.focus({ preventScroll:true });
    restoreSelection(editor);
    try { document.execCommand(command, false, value); } catch (_) {}
    saveSelection(editor);
    syncRichEditor(editor, textarea);
    updateToolbar(editor, toolbar);
  }

  function applyColor(editor, textarea, toolbar, color){
    restoreSelection(editor);
    const selected = currentColor();
    const wanted = normalizeColor(color);
    // Recliquer sur la même couleur remet le texte en blanc (couleur normale du site).
    exec(editor, textarea, toolbar, "foreColor", selected === wanted ? "#ffffff" : color);
  }

  function enhanceTextarea(textarea){
    if (!textarea || textarea.dataset.minchRich === "1") return;
    if (textarea.id === "editFragments") return;
    if (!textarea.classList.contains("admin-textarea")) return;

    textarea.dataset.minchRich = "1";
    textarea.classList.add("minch-rich-source");

    const wrapper = document.createElement("div");
    wrapper.className = "minch-rich-wrap";

    const toolbar = document.createElement("div");
    toolbar.className = "minch-rich-toolbar";
    toolbar.innerHTML = `
      <button type="button" class="minch-rich-btn minch-rich-bold" title="Gras" aria-label="Gras"><strong>B</strong></button>
      <button type="button" class="minch-rich-btn minch-rich-italic" title="Italique" aria-label="Italique"><em>I</em></button>
      <span class="minch-rich-label">Couleur</span>
      <span class="minch-rich-colors">
        <button type="button" class="minch-rich-color-swatch" data-color="#ffffff" title="Blanc"><span class="minch-rich-color-dot" style="--swatch:#ffffff"></span></button>
        <button type="button" class="minch-rich-color-swatch" data-color="#7dd3fc" title="Bleu"><span class="minch-rich-color-dot" style="--swatch:#7dd3fc"></span></button>
        <button type="button" class="minch-rich-color-swatch" data-color="#c084fc" title="Violet"><span class="minch-rich-color-dot" style="--swatch:#c084fc"></span></button>
        <button type="button" class="minch-rich-color-swatch" data-color="#fb7185" title="Rouge"><span class="minch-rich-color-dot" style="--swatch:#fb7185"></span></button>
        <button type="button" class="minch-rich-color-swatch" data-color="#facc15" title="Jaune"><span class="minch-rich-color-dot" style="--swatch:#facc15"></span></button>
        <button type="button" class="minch-rich-color-swatch" data-color="#86efac" title="Vert"><span class="minch-rich-color-dot" style="--swatch:#86efac"></span></button>
      </span>
      <label class="minch-rich-custom-color" title="Autre couleur">A<input type="color" value="#7dd3fc" aria-label="Choisir une autre couleur"></label>
    `;

    const editor = document.createElement("div");
    editor.className = "minch-rich-editor admin-textarea";
    editor.contentEditable = "true";
    editor.spellcheck = true;
    editor.setAttribute("role","textbox");
    editor.setAttribute("aria-multiline","true");
    editor.innerHTML = sourceToEditorHTML(textarea.value);

    textarea.parentNode.insertBefore(wrapper, textarea);
    wrapper.appendChild(toolbar);
    wrapper.appendChild(editor);
    wrapper.appendChild(textarea);

    const remember = () => { saveSelection(editor); updateToolbar(editor, toolbar); };
    ["keyup","mouseup","focus","click"].forEach(type => editor.addEventListener(type, remember));
    editor.addEventListener("input", () => {
      saveSelection(editor);
      syncRichEditor(editor, textarea);
      updateToolbar(editor, toolbar);
    });
    editor.addEventListener("blur", () => syncRichEditor(editor, textarea));

    // Empêche B/I/les pastilles de voler la sélection du texte.
    toolbar.addEventListener("mousedown", e => {
      if (e.target.closest("button")) e.preventDefault();
      saveSelection(editor);
    });

    toolbar.querySelector(".minch-rich-bold").addEventListener("click", () => exec(editor, textarea, toolbar, "bold"));
    toolbar.querySelector(".minch-rich-italic").addEventListener("click", () => exec(editor, textarea, toolbar, "italic"));
    toolbar.querySelectorAll(".minch-rich-color-swatch").forEach(btn => {
      btn.addEventListener("click", () => applyColor(editor, textarea, toolbar, btn.dataset.color));
    });

    const picker = toolbar.querySelector('input[type="color"]');
    picker.addEventListener("pointerdown", () => saveSelection(editor));
    picker.addEventListener("change", () => applyColor(editor, textarea, toolbar, picker.value));

    // Nettoie immédiatement les anciens <br> visibles issus de la V5.
    editor.innerHTML = sourceToEditorHTML(textarea.value);
    syncRichEditor(editor, textarea);
    updateToolbar(editor, toolbar);
  }

  function scan(root=document){
    if (root.matches?.("textarea.admin-textarea")) enhanceTextarea(root);
    root.querySelectorAll?.("textarea.admin-textarea").forEach(enhanceTextarea);
  }

  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType === 1) scan(node);
    }));
  });

  function init(){
    scan(document);
    observer.observe(document.body, { childList:true, subtree:true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once:true });
  else init();
})();

