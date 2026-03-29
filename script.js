const clinics = [
  {
    name: "Lumiere Plastic Surgery",
    district: "Apgujeong",
    focus: "Rhinoplasty, revision",
    copy: "A refined clinic profile built around nose surgery cases, detailed consultation flow, and a polished premium feel for overseas visitors.",
    tags: ["Rhinoplasty", "Premium care", "English support"],
    price: "$$$",
  },
  {
    name: "Museon Clinic",
    district: "Gangnam",
    focus: "Eyelid surgery, facial harmony",
    copy: "Best suited for visitors who want a clean and approachable consultation experience with strong focus on facial balance and first-time procedures.",
    tags: ["Eyelid surgery", "First-time visitors", "Consultation-friendly"],
    price: "$$",
  },
  {
    name: "Solea Aesthetic",
    district: "Sinsa",
    focus: "Lifting, anti-aging",
    copy: "Presented as a strong option for lifting-focused patients who care about recovery guidance and a more mature treatment profile.",
    tags: ["Lifting", "Aftercare", "Mature audience"],
    price: "$$$",
  },
  {
    name: "The River Clinic",
    district: "Cheongdam",
    focus: "Facial contouring",
    copy: "A more editorial-style pick for visitors comparing contouring-focused clinics with a boutique atmosphere and curated experience.",
    tags: ["Contouring", "Boutique feel", "Detailed planning"],
    price: "$$$",
  },
  {
    name: "Everline Plastic Surgery",
    district: "Gangnam",
    focus: "Natural-looking outcomes",
    copy: "Useful for users searching for a natural-results narrative, approachable communication, and a calm, less overwhelming brand tone.",
    tags: ["Natural results", "English-friendly", "Comfort-led"],
    price: "$$",
  },
  {
    name: "Linea Face Center",
    district: "Apgujeong",
    focus: "Revision, facial design",
    copy: "Designed for comparison pages where patients want a clinic with a stronger identity in revision conversations and facial planning.",
    tags: ["Revision", "Facial design", "Higher-touch"],
    price: "$$$",
  },
  {
    name: "Bello Seoul",
    district: "Sinsa",
    focus: "International visitors",
    copy: "A candidate card format for users who value accessibility, softer branding, and clearer communication for their Korea trip planning.",
    tags: ["Foreign-patient friendly", "Planning support", "Clear communication"],
    price: "$$",
  },
  {
    name: "Atelier Plastic Clinic",
    district: "Cheongdam",
    focus: "Boutique premium surgery",
    copy: "A premium clinic profile format suited for visitors who prioritize experience, atmosphere, and personalized positioning.",
    tags: ["Premium", "Boutique", "Custom approach"],
    price: "$$$",
  },
  {
    name: "Cellune Medical",
    district: "Gangnam",
    focus: "Combined aesthetic care",
    copy: "Useful when mixing surgical and non-surgical categories, especially for visitors deciding between plastic surgery and broader aesthetic care.",
    tags: ["Hybrid care", "Skin + surgery", "Flexible path"],
    price: "$$",
  },
  {
    name: "Miren Clinic Seoul",
    district: "Apgujeong",
    focus: "Curated foreign-patient picks",
    copy: "A final featured card showing how the site can frame each clinic as a selected pick rather than a hard-ranked winner.",
    tags: ["Featured pick", "Top 10 format", "Discovery-ready"],
    price: "$$",
  },
];

const grid = document.getElementById("clinic-grid");
const categoryGroups = document.getElementById("category-groups");

const categoryCollections = [
  {
    id: "category-rhinoplasty",
    title: "Top 10 Rhinoplasty Clinics",
    intro:
      "For visitors starting with nose surgery research, this category gives a focused shortlist with premium, revision, and foreign-patient-friendly angles.",
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
    intro:
      "A category designed for one of the most searched Korean plastic surgery paths, balancing first-time comfort, facial harmony, and accessible consultation tone.",
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
    intro:
      "This view supports users looking for facelift and lifting-focused discovery, including clinics that feel more recovery-aware and premium in tone.",
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
    intro:
      "For higher-consideration visitors comparing facial contouring paths, this section emphasizes clinics with stronger design, planning, and premium positioning cues.",
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
    intro:
      "Skin treatments expand the site beyond surgery and help capture broader international demand around lifting, lasers, boosters, and aesthetic care.",
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

const clinicMap = Object.fromEntries(clinics.map((clinic) => [clinic.name, clinic]));

grid.innerHTML = clinics
  .map(
    (clinic) => `
      <article class="clinic-card">
        <div class="clinic-visual">
          <span>${clinic.district}</span>
        </div>
        <div class="clinic-content">
          <div class="clinic-heading">
            <span class="featured-pill">Featured clinic</span>
            <h3>${clinic.name}</h3>
          </div>
          <p class="clinic-copy">${clinic.copy}</p>
          <div class="clinic-meta">
            <span>${clinic.focus}</span>
            <span>English-friendly profile</span>
          </div>
          <div class="clinic-tags">
            ${clinic.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="clinic-footer">
            <span class="price-badge">${clinic.price} Price tier</span>
            <a class="button button-secondary" href="#for-clinics">View details</a>
          </div>
        </div>
      </article>
    `
  )
  .join("");

categoryGroups.innerHTML = categoryCollections
  .map(
    (category) => `
      <article class="category-block" id="${category.id}">
        <div class="category-block-header">
          <div>
            <h3>${category.title}</h3>
            <p>${category.intro}</p>
          </div>
          <span class="category-count">10 selected picks</span>
        </div>
        <div class="mini-clinic-grid">
          ${category.items
            .map((name) => {
              const clinic = clinicMap[name];

              return `
                <article class="mini-card">
                  <div class="mini-card-top">
                    <h4>${clinic.name}</h4>
                    <span class="price-badge">${clinic.price}</span>
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
