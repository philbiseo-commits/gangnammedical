const clinics = [
  {
    name: "Lumiere Plastic Surgery",
    district: "Apgujeong",
    focus: "Rhinoplasty, revision",
    copy: "A premium-feeling clinic profile for visitors researching nose surgery, refined consultation experience, and premium positioning.",
    tags: ["Rhinoplasty", "Premium care", "English support"],
    price: "$$$",
  },
  {
    name: "Museon Clinic",
    district: "Gangnam",
    focus: "Eyelid surgery, facial harmony",
    copy: "Designed for first-time visitors who want a more approachable clinic narrative around facial balance and clearer consultation flow.",
    tags: ["Eyelid surgery", "First-time visitors", "Consultation-friendly"],
    price: "$$",
  },
  {
    name: "Solea Aesthetic",
    district: "Sinsa",
    focus: "Lifting, anti-aging",
    copy: "A stronger match for lifting-focused users who care about aftercare framing, mature treatment goals, and recovery-conscious branding.",
    tags: ["Lifting", "Aftercare", "Mature audience"],
    price: "$$$",
  },
  {
    name: "The River Clinic",
    district: "Cheongdam",
    focus: "Facial contouring",
    copy: "A boutique-style card profile for users comparing contouring clinics and looking for a more design-led, premium discovery experience.",
    tags: ["Contouring", "Boutique feel", "Detailed planning"],
    price: "$$$",
  },
  {
    name: "Everline Plastic Surgery",
    district: "Gangnam",
    focus: "Natural-looking outcomes",
    copy: "A softer, calmer clinic profile suited for users prioritizing natural results and a less intimidating first impression.",
    tags: ["Natural results", "English-friendly", "Comfort-led"],
    price: "$$",
  },
  {
    name: "Linea Face Center",
    district: "Apgujeong",
    focus: "Revision, facial design",
    copy: "Useful for higher-consideration visitors comparing revision and facial design positioning within a more curated shortlist.",
    tags: ["Revision", "Facial design", "Higher-touch"],
    price: "$$$",
  },
  {
    name: "Bello Seoul",
    district: "Sinsa",
    focus: "International visitors",
    copy: "A profile format for users who value accessibility, softer branding, and a more visitor-friendly tone during early research.",
    tags: ["Foreign-patient friendly", "Planning support", "Clear communication"],
    price: "$$",
  },
  {
    name: "Atelier Plastic Clinic",
    district: "Cheongdam",
    focus: "Boutique premium surgery",
    copy: "A premium clinic profile for users who prioritize atmosphere, personalized care signals, and curated discovery over mass-market presentation.",
    tags: ["Premium", "Boutique", "Custom approach"],
    price: "$$$",
  },
  {
    name: "Cellune Medical",
    district: "Gangnam",
    focus: "Combined aesthetic care",
    copy: "Useful for users deciding between surgery and broader aesthetic care, especially where skin treatments and plastic surgery overlap.",
    tags: ["Hybrid care", "Skin + surgery", "Flexible path"],
    price: "$$",
  },
  {
    name: "Miren Clinic Seoul",
    district: "Apgujeong",
    focus: "Curated foreign-patient picks",
    copy: "A discovery-ready clinic card that helps present the site's Top 10 format as a selected collection rather than a definitive leaderboard.",
    tags: ["Featured pick", "Top 10 format", "Discovery-ready"],
    price: "$$",
  },
];

const categories = [
  {
    id: "category-rhinoplasty",
    title: "Top 10 Rhinoplasty Clinics",
    short: "Rhinoplasty",
    tileCopy: "Start with the most searched Korean surgery category for international patients.",
    intro:
      "A focused shortlist for users starting with nose surgery, premium consult styles, revision awareness, and stronger discovery cues.",
    items: [
      "Lumiere Plastic Surgery",
      "Linea Face Center",
      "Atelier Plastic Clinic",
      "Everline Plastic Surgery",
      "Miren Clinic Seoul",
      "Museon Clinic",
      "Bello Seoul",
      "The River Clinic",
      "Solea Aesthetic",
      "Cellune Medical",
    ],
  },
  {
    id: "category-eyelid",
    title: "Top 10 Eyelid Surgery Clinics",
    short: "Eyelid Surgery",
    tileCopy: "One of the clearest entry points for users comparing Korean facial surgery options.",
    intro:
      "A category for users looking at first-time procedures, facial harmony, and softer clinic profiles that feel easier to approach.",
    items: [
      "Museon Clinic",
      "Everline Plastic Surgery",
      "Lumiere Plastic Surgery",
      "Bello Seoul",
      "Miren Clinic Seoul",
      "Linea Face Center",
      "Atelier Plastic Clinic",
      "Cellune Medical",
      "Solea Aesthetic",
      "The River Clinic",
    ],
  },
  {
    id: "category-lifting",
    title: "Top 10 Lifting Clinics",
    short: "Lifting",
    tileCopy: "A better path for anti-aging, facelift, and recovery-aware exploration.",
    intro:
      "For users comparing lifting and facelift-related options, especially where aftercare comfort and mature treatment framing matter.",
    items: [
      "Solea Aesthetic",
      "Atelier Plastic Clinic",
      "Cellune Medical",
      "The River Clinic",
      "Everline Plastic Surgery",
      "Bello Seoul",
      "Miren Clinic Seoul",
      "Lumiere Plastic Surgery",
      "Museon Clinic",
      "Linea Face Center",
    ],
  },
  {
    id: "category-contouring",
    title: "Top 10 Contouring Clinics",
    short: "Contouring",
    tileCopy: "A higher-consideration category with stronger premium and planning cues.",
    intro:
      "Built for visitors researching facial contouring and comparing clinics through premium identity, planning depth, and stronger design positioning.",
    items: [
      "The River Clinic",
      "Linea Face Center",
      "Atelier Plastic Clinic",
      "Lumiere Plastic Surgery",
      "Museon Clinic",
      "Everline Plastic Surgery",
      "Cellune Medical",
      "Miren Clinic Seoul",
      "Solea Aesthetic",
      "Bello Seoul",
    ],
  },
  {
    id: "category-skin",
    title: "Top 10 Skin Treatment Clinics",
    short: "Skin Treatments",
    tileCopy: "An expansion category that captures broader aesthetic demand beyond surgery.",
    intro:
      "Useful for visitors who may begin with lasers, lifting, boosters, or skin-focused treatments before moving into surgery comparisons.",
    items: [
      "Cellune Medical",
      "Solea Aesthetic",
      "Bello Seoul",
      "Everline Plastic Surgery",
      "Atelier Plastic Clinic",
      "Miren Clinic Seoul",
      "Museon Clinic",
      "The River Clinic",
      "Lumiere Plastic Surgery",
      "Linea Face Center",
    ],
  },
];

const clinicGrid = document.getElementById("clinic-grid");
const categoryTiles = document.getElementById("category-tiles");
const categoryGroups = document.getElementById("category-groups");
const clinicMap = Object.fromEntries(clinics.map((clinic) => [clinic.name, clinic]));

clinicGrid.innerHTML = clinics
  .map(
    (clinic) => `
      <article class="wide-card">
        <div class="wide-card-visual">
          <span>${clinic.district}</span>
        </div>
        <div class="wide-card-content">
          <div class="wide-card-head">
            <span class="featured-badge">Selected clinic</span>
            <h3>${clinic.name}</h3>
          </div>
          <p>${clinic.copy}</p>
          <div class="wide-card-tags">
            <span>${clinic.focus}</span>
            <span>English-friendly profile</span>
            ${clinic.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="wide-card-footer">
            <span class="price">${clinic.price} Price tier</span>
            <a class="button button-secondary" href="#for-clinics">View details</a>
          </div>
        </div>
      </article>
    `
  )
  .join("");

categoryTiles.innerHTML = categories
  .map(
    (category) => `
      <a class="tile-card" href="#${category.id}">
        <div>
          <div class="tile-top">
            <span class="tile-pill">Top 10</span>
            <span class="tile-meta">${category.short}</span>
          </div>
          <h3>${category.title}</h3>
          <p>${category.tileCopy}</p>
        </div>
      </a>
    `
  )
  .join("");

categoryGroups.innerHTML = categories
  .map(
    (category) => `
      <article class="category-block" id="${category.id}">
        <div class="category-block-head">
          <div>
            <h3>${category.title}</h3>
            <p>${category.intro}</p>
          </div>
          <span class="category-count">10 selected picks</span>
        </div>
        <div class="mini-card-grid">
          ${category.items
            .map((name) => {
              const clinic = clinicMap[name];
              return `
                <article class="mini-card">
                  <div class="mini-card-top">
                    <h4>${clinic.name}</h4>
                    <span class="price">${clinic.price}</span>
                  </div>
                  <p>${clinic.focus} in ${clinic.district}</p>
                  <div class="mini-card-tags">
                    ${clinic.tags.map((tag) => `<span>${tag}</span>`).join("")}
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </article>
    `
  )
  .join("");
