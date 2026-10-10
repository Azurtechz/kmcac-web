export type Photo = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  title: string;
  group: "art" | "interiors";
  summary: string;
  lede: string;
  body: string[];
  details: { title: string; text: string }[];
  photos: Photo[];
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  note?: string;
  photo?: Photo;
};

export type Person = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
};

const muralPhotos: Photo[] = [
  { src: "/images/art/murals/wa-99.jpg", alt: "Wall mural of two decorated cows and lotus flowers in a circular field" },
  { src: "/images/art/murals/wa-128.jpg", alt: "Wall art from the KMCAC catalogue" },
  { src: "/images/art/murals/wa-124.jpg", alt: "Wall art from the KMCAC catalogue" },
  { src: "/images/art/murals/wa-108.jpg", alt: "Wall art from the KMCAC catalogue" },
  { src: "/images/art/murals/wa-121.jpg", alt: "Wall art from the KMCAC catalogue" },
  { src: "/images/art/murals/wa-158.jpg", alt: "Wall art from the KMCAC catalogue" },
  { src: "/images/art/murals/wa-187.jpeg", alt: "Wall art from the KMCAC catalogue" },
  { src: "/images/art/murals/wa-15.jpeg", alt: "Wall art from the KMCAC catalogue" },
];

const reliefPhotos: Photo[] = [
  { src: "/images/art/relief/wr-25.jpg", alt: "Wall relief from the KMCAC catalogue" },
  { src: "/images/art/relief/wr-15.jpg", alt: "Wall relief from the KMCAC catalogue" },
  { src: "/images/art/relief/wr-134.jpg", alt: "Wall relief from the KMCAC catalogue" },
  { src: "/images/art/relief/wr-107.jpeg", alt: "Wall relief from the KMCAC catalogue" },
  { src: "/images/art/relief/wr-112.jpeg", alt: "Wall relief from the KMCAC catalogue" },
  { src: "/images/art/relief/wr-43.jpeg", alt: "Wall relief from the KMCAC catalogue" },
  { src: "/images/art/relief/wr-96.jpeg", alt: "Wall relief from the KMCAC catalogue" },
  { src: "/images/art/relief/wr-20.jpeg", alt: "Wall relief from the KMCAC catalogue" },
];

const paintingPhotos: Photo[] = [
  { src: "/images/art/paintings/vaf-0704.jpg", alt: "Painting from the studio archive" },
  { src: "/images/art/paintings/vaf-0757.jpg", alt: "Painting from the studio archive" },
  { src: "/images/art/paintings/vaf-0598.jpg", alt: "Painting from the studio archive" },
  { src: "/images/art/paintings/vaf-0026.jpg", alt: "Painting from the studio archive" },
  { src: "/images/art/paintings/vaf-0124.jpg", alt: "Painting from the studio archive" },
];

const sculpturePhotos: Photo[] = [
  { src: "/images/art/sculpture/wood.png", alt: "Wooden sculpture" },
  { src: "/images/art/sculpture/stone.png", alt: "Stone sculpture" },
  { src: "/images/art/sculpture/statue-51.jpg", alt: "Cast sculpture from the studio sheets" },
  { src: "/images/art/sculpture/statue-89.jpg", alt: "Cast sculpture from the studio sheets" },
  { src: "/images/art/sculpture/abstract-57.jpg", alt: "Abstract sculpture design" },
  { src: "/images/art/sculpture/abstract-64.jpg", alt: "Abstract sculpture design" },
];

const texturePhotos: Photo[] = [
  { src: "/images/art/textures/calcecruda.jpg", alt: "Calcecruda Roman Mandala wall texture" },
  { src: "/images/art/textures/calcecruda-room.jpg", alt: "Calcecruda Roman Mandala texture in a room" },
  { src: "/images/art/textures/stucco-marble.jpg", alt: "Stucco Marble wall texture" },
  { src: "/images/art/textures/stucco-mirror.jpg", alt: "Stucco Mirror wall texture" },
  { src: "/images/art/textures/basket.jpeg", alt: "Basket wall texture" },
  { src: "/images/art/textures/crinkle.jpg", alt: "Crinkle wall texture" },
];

export const artServices: Service[] = [
  {
    slug: "wall-art-and-murals",
    title: "Wall art and murals",
    group: "art",
    summary: "Painted and applied work made for a particular wall, in a home or a business.",
    lede: "A mural can hold a room. The studio designs it for that wall, then makes and installs it.",
    body: [
      "Wall art and murals are made to give a room a focus, a mood, or a story. The work might be a single painted wall in a living room, a quieter piece in a bedroom, or a large statement in a workplace.",
      "Each piece is designed for the space rather than chosen from a ready-made range. The catalogue photographs on this page are from the studio’s own wall-art files.",
    ],
    details: [
      { title: "Where it goes", text: "Homes, offices, restaurants, and other rooms that need a wall to do more than sit empty." },
      { title: "How it is made", text: "A consultation, a design for that wall, then making and installation." },
    ],
    photos: muralPhotos,
  },
  {
    slug: "wall-relief",
    title: "Wall relief",
    group: "art",
    summary: "Sculptural work that comes off the wall, so light and shadow do part of the drawing.",
    lede: "Relief is art that is not flat. Part of the design stands proud of the wall, or is cut into it.",
    body: [
      "The studio makes custom wall relief for rooms that need texture and depth: a landscape, a geometric pattern, or a design that belongs to the client.",
      "The studio’s own writing describes three kinds. Bas-relief is shallow and sits close to the wall. High relief projects further and reads more strongly across a room. Sunken relief is carved into the surface, so the drawing recedes.",
    ],
    details: [
      { title: "Bas-relief", text: "A low projection. Useful when the wall should stay calm and the drawing still catch the light." },
      { title: "High relief", text: "A deeper projection, for a wall that is meant to be the focus of a larger room." },
      { title: "Sunken relief", text: "The design is cut into the surface rather than built out from it." },
    ],
    photos: reliefPhotos,
  },
  {
    slug: "sculpture",
    title: "Sculpture casting",
    group: "art",
    summary: "Cast and carved sculpture for gardens, homes, and workplaces, in a range of materials.",
    lede: "Sculpture is made for a place: a garden, a hall, a desk, or a corner that needs an object with weight.",
    body: [
      "The studio casts and makes sculpture to a client’s brief, then installs it. Materials are chosen for where the piece will live, indoors or out.",
    ],
    details: [
      { title: "Bronze", text: "Durable, and suited to both indoor and outdoor pieces." },
      { title: "Marble and stone", text: "Carved stone, including marble, granite, and limestone." },
      { title: "Wood", text: "Carved wood, used where the grain should stay visible." },
      { title: "Metal", text: "Steel, iron, and aluminium, polished or left to take a patina." },
      { title: "Fiber", text: "Fibreglass and similar materials, lighter pieces that can take complex forms." },
      { title: "Plaster of Paris", text: "Used for detailed interior pieces and installations." },
      { title: "Mixed media", text: "Combinations of metal, glass, ceramic, and other materials." },
    ],
    photos: sculpturePhotos,
  },
  {
    slug: "paintings",
    title: "Paintings",
    group: "art",
    summary: "Paintings in oil, acrylic, watercolour, and mixed media, from classical to contemporary.",
    lede: "Paintings from the studio run from classical work to contemporary, in oil, acrylic, watercolour, and mixed media.",
    body: [
      "A painting can be the one object a room is arranged around. The studio makes and selects work across those mediums so the piece fits the wall and the light.",
      "The photographs here are from the studio’s painting archive.",
    ],
    details: [
      { title: "Mediums", text: "Oil, acrylic, watercolour, and mixed media." },
      { title: "Range", text: "Classical through contemporary, including abstract, realist, and expressionist work." },
    ],
    photos: paintingPhotos,
  },
  {
    slug: "wall-textures",
    title: "Wall textures",
    group: "art",
    summary: "Hand-applied finishes, from stucco and concrete to named surfaces such as Calcecruda and Stucco Marble.",
    lede: "A texture changes the wall itself. The finish is chosen in a consultation, then applied by the studio.",
    body: [
      "Textures suit homes and offices. The published range includes smooth, metallic, rustic, and geometric finishes, along with stucco, concrete, textured stripes, and brick effects.",
      "Named finishes in the studio’s catalogue include Calcecruda Roman Mandala, Stucco Marble, Stucco Mirror, Basket, and Crinkle.",
    ],
    details: [
      { title: "Smooth", text: "A refined, even surface." },
      { title: "Metallic", text: "A finish that takes light differently from flat paint." },
      { title: "Rustic", text: "Stucco, brick, and other warmer, more irregular surfaces." },
      { title: "Geometric", text: "Patterned texture, including stripes and repeat motifs." },
    ],
    photos: texturePhotos,
  },
  {
    slug: "3d-wall-panels",
    title: "3D wall panels",
    group: "art",
    summary: "Dimensional panels, listed with the studio’s other wall work. A full catalogue was never published.",
    lede: "3D wall panels sit with the studio’s other wall work. The previous site announced the service and did not publish a catalogue.",
    body: [
      "The panels were on the art site’s service menu. The page itself was only a notice that a fuller description was still to come. There is no materials list and no panel photograph in the archive that is clearly this product.",
      "They are commissioned the same way as textures and relief: a conversation about the room, a design, then making and installation. Ask the studio what is available now.",
    ],
    details: [],
    photos: [],
  },
];

export const interiorServices: Service[] = [
  {
    slug: "residential",
    title: "Residential interiors",
    group: "interiors",
    summary: "Homes designed around how you live: living rooms, bedrooms, kitchens, and the furniture that belongs in them.",
    lede: "A home project starts with how the household lives, then the plan, the materials, and the furniture.",
    body: [
      "KMCA Interiors designs homes that have to work as well as look considered. The published scope covers living rooms, bedrooms, kitchens and dining, and furniture selection, from a refresh of one room to a fuller interior.",
      "Art from the same studio — a mural, a relief, a texture — can be part of the room rather than an afterthought.",
    ],
    details: [
      { title: "Living rooms", text: "Rooms for sitting, gathering, and the wall or object that holds them." },
      { title: "Bedrooms", text: "Quieter rooms, planned for rest and storage as well as appearance." },
      { title: "Kitchens and dining", text: "Working rooms, laid out so cooking, storage, and the table sit together." },
      { title: "Furniture", text: "Pieces chosen or made to fit the plan, not added after the room is finished." },
    ],
    photos: [],
  },
  {
    slug: "commercial",
    title: "Commercial interiors",
    group: "interiors",
    summary: "Offices, shops, showrooms, and hospitality rooms planned around the work that happens in them.",
    lede: "A commercial interior has to serve the business: how people work, buy, or stay, and what the brand should feel like.",
    body: [
      "The studio designs offices, retail and showrooms, corporate rooms, and hospitality spaces. Furniture is part of the plan, especially desks, chairs, and workstations where the room is a workplace.",
      "Named commercial and hospitality projects on the old interiors site include Aryavrat Office, Swaad Bistro, and Chai Sutta Lounge. Descriptions of those rooms were not published.",
    ],
    details: [
      { title: "Offices", text: "Workspaces planned for the people who use them every day." },
      { title: "Retail and showrooms", text: "Layouts organised around how a customer moves and what they should see." },
      { title: "Corporate rooms", text: "Client-facing spaces that have to feel deliberate." },
      { title: "Hospitality", text: "Hotels, restaurants, and cafés." },
    ],
    photos: [],
  },
  {
    slug: "site-execution",
    title: "Site execution",
    group: "interiors",
    summary: "The studio carries an approved design through on site, rather than handing over drawings alone.",
    lede: "Execution is the part of the job that happens in the room: coordinating the work and finishing what was drawn.",
    body: [
      "On the interiors site, site execution is its own service beside residential design, commercial design, and wall art. The studio’s description is plain: the design is brought to life on site, with attention to detail.",
      "It follows the same sequence as the rest of the work. Concept, then a resolved design, then execution.",
    ],
    details: [
      { title: "After the design", text: "The approved drawings and material choices are what the site work is measured against." },
      { title: "In the room", text: "Installation of art, finishes, and the rest of the interior happen as one job when they are part of the same project." },
    ],
    photos: [],
  },
];

export const services = [...artServices, ...interiorServices];

export function serviceBySlug(group: "art" | "interiors", slug: string) {
  return services.find((service) => service.group === group && service.slug === slug);
}

export const projects: Project[] = [
  {
    slug: "aiims-mother-and-child-block",
    title: "AIIMS Mother & Child Block",
    kind: "Public",
    summary:
      "The one project the art site named. It was filed under government work. The archive has this photograph and no written account of what the studio made.",
    note: "Also recorded once as AIIMS Mother & Child Ward.",
    photo: {
      src: "/images/work/aiims.jpg",
      alt: "The All India Institute of Medical Sciences campus, used on the old site for the AIIMS Mother and Child Block project",
    },
  },
  {
    slug: "vedanta-enclave",
    title: "Vedanta Enclave",
    kind: "Interiors",
    summary: "Named on the KMCA Interiors site. No description or photograph was saved with the name.",
  },
  {
    slug: "keshav-residency",
    title: "Keshav Residency",
    kind: "Residential",
    summary: "Named on the KMCA Interiors site. No description or photograph was saved with the name.",
  },
  {
    slug: "swaad-bistro",
    title: "Swaad Bistro",
    kind: "Hospitality",
    summary: "Named on the KMCA Interiors site. No description or photograph was saved with the name.",
  },
  {
    slug: "aryavrat-office",
    title: "Aryavrat Office",
    kind: "Workplace",
    summary: "Named on the KMCA Interiors site. No description or photograph was saved with the name.",
  },
  {
    slug: "chai-sutta-lounge",
    title: "Chai Sutta Lounge",
    kind: "Hospitality",
    summary: "Named on the KMCA Interiors site. No description or photograph was saved with the name.",
  },
  {
    slug: "amrita-residency",
    title: "Amrita Residency",
    kind: "Residential",
    summary: "Named on the KMCA Interiors site. No description or photograph was saved with the name.",
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const people: Person[] = [
  {
    name: "Kanchan Mehra",
    role: "Founder",
    photo: "/images/people/kanchan-mehra.jpg",
    bio: [
      "Kanchan Mehra founded the Kanchan Mehra Centre for Art. She is an artist, and the studio describes her as a mentor as well as the person who built the practice.",
      "Through the centre she has organised workshops, exhibitions, and collaborative projects. The studio’s pages also describe her support for art education, including work with NGOs. They do not publish a school, a founding year, or a list of exhibitions.",
    ],
  },
  {
    name: "Rahul Kumar Jangra",
    role: "General Manager",
    photo: "/images/people/rahul-kumar-jangra.png",
    bio: [
      "Rahul Kumar Jangra runs the day-to-day work of the studio. His background is in commercial art, and he follows a project from the idea through to delivery.",
      "The work under his watch includes wall art, wall relief, sculpture, and decorative planters.",
    ],
  },
  {
    name: "Umesh Dhawan",
    role: "Business Relationship Manager",
    photo: "/images/people/umesh-dhawan.jpg",
    bio: [
      "Umesh Dhawan looks after relationships and new work. The studio’s page also describes him as handling business development: finding clients, and keeping the conversation going between a brief and the studio.",
      "He works with the people who make the art so that what is offered stays close to what a client actually needs.",
    ],
  },
  {
    name: "Dheeraj Gaur",
    role: "Sales & Marketing Head",
    photo: "/images/people/dheeraj-gaur.png",
    bio: [
      "Dheeraj Gaur leads sales. He is the person who presents the studio’s wall art, relief, sculpture, and planters, and who manages the sales team.",
      "He works with business development and the makers so that a sale matches what the studio can build.",
    ],
  },
];

export const founderQuote = {
  text: "Art and design are the silent storytellers of your brand, speaking louder than words ever could.",
  attribution: "Kanchan Mehra",
};
