import project1Hero from "@/assets/project-1-hero.jpg";
import project1A from "@/assets/project-1-a.jpg";
import project1B from "@/assets/project-1-b.jpg";
import project2Hero from "@/assets/project-2-hero.jpg";
import project2A from "@/assets/project-2-a.jpg";
import project2B from "@/assets/project-2-b.jpg";
import project3Hero from "@/assets/project-3-hero.jpg";
import project3A from "@/assets/project-3-a.jpg";
import project4Hero from "@/assets/project-4-hero.jpg";
import project4A from "@/assets/project-4-a.jpg";

export interface Project {
  slug: string;
  name: string;
  location: string;
  year: number;
  category: "Residence" | "Retreat" | "Interior" | "Cultural";
  descriptor: string;
  cover: string;
  gallery: string[];
  area: string;
  scope: string;
  status: "Completed" | "In construction";
  overview: string;
  narrative: string[];
  materials: string[];
  landscape: string;
}

export const projects: Project[] = [
  {
    slug: "house-of-quiet-courts",
    name: "House of Quiet Courts",
    location: "Panangad, Kochi",
    year: 2024,
    category: "Residence",
    descriptor: "A linear residence organised around three planted courts.",
    cover: project1Hero,
    gallery: [project1Hero, project1A, project1B],
    area: "4,200 sq.ft",
    scope: "Architecture, Interiors, Landscape",
    status: "Completed",
    overview:
      "A single-storey residence for a family of four, set on a long narrow plot bordered by a tidal creek. The plan resolves into three planted courts that draw monsoon light and breeze deep into the home.",
    narrative: [
      "The site asked for restraint. We worked with a long, narrow plot held quietly against a tidal creek, and the plan emerged as a sequence of measured volumes — solid, void, solid — each opening onto a planted court rather than the perimeter.",
      "Material choice followed function. Board-formed concrete carries the weight of the deep overhangs; teak louvers temper the western sun; kota stone, polished and oiled, returns the cool of the ground into the rooms above it.",
      "The courts do most of the architectural work. They cross-ventilate, they bring rain into view, and they make the house feel larger than its footprint without ever stepping outside.",
    ],
    materials: ["Board-formed concrete", "Burma teak", "Polished kota stone", "Lime plaster"],
    landscape:
      "A planted spine of rain trees, ferns and native ginger threads through the three courts, designed with botanist Ananya Pillai.",
  },
  {
    slug: "ridge-house-wayanad",
    name: "Ridge House",
    location: "Vythiri, Wayanad",
    year: 2023,
    category: "Retreat",
    descriptor: "A low horizontal volume held against a misted valley edge.",
    cover: project2Hero,
    gallery: [project2Hero, project2A, project2B],
    area: "6,800 sq.ft",
    scope: "Architecture, Interiors",
    status: "Completed",
    overview:
      "A weekend retreat for a Bangalore-based family, sited along the contour of a tea-growing ridge. The house lies low and long, ceding the view to the valley.",
    narrative: [
      "We resisted the temptation to perch. The brief invited a hilltop gesture; the site suggested otherwise. The house was tucked into the contour, its long horizontal roof reading as a single quiet line against the ridge.",
      "Laterite, quarried within fifteen kilometres of the site, forms the plinth and load-bearing walls. Above, a steel and timber roof allows the public rooms to open fully to the weather.",
      "Interiors are deliberately undecorated. Heavy linen, oiled teak, hand-loomed wool — surfaces meant to age in the highland damp.",
    ],
    materials: ["Laterite stone", "Burma teak", "Hand-loomed wool", "Mild steel"],
    landscape:
      "Existing tea and silver oak were retained; new planting is limited to native shola understory along the approach.",
  },
  {
    slug: "backwater-pavilions",
    name: "Backwater Pavilions",
    location: "Kumarakom, Kottayam",
    year: 2024,
    category: "Residence",
    descriptor: "Twin timber pavilions on the edge of a quiet backwater channel.",
    cover: project3Hero,
    gallery: [project3Hero, project3A],
    area: "5,400 sq.ft",
    scope: "Architecture, Interiors, Landscape",
    status: "Completed",
    overview:
      "Two pitched pavilions — one public, one private — held apart by a glazed link and a strip of water that mirrors the backwater beyond.",
    narrative: [
      "The site is flat, soft, and prone to flood. The house is lifted on a continuous laterite plinth; the rooms above are kept light, in dark-stained teak and lime plaster.",
      "Separating the pavilions allowed the family's rhythms to remain distinct without enforcing a hierarchy of rooms. Guests pass through water and shade before arriving at the principal volume.",
      "Roof pitches were studied against monsoon trajectories so that the verandahs remain usable through July and August.",
    ],
    materials: ["Dark-stained teak", "Laterite plinth", "Lime plaster", "Mangalore tile"],
    landscape:
      "Existing coconut palms were retained; new planting introduces edible species — pepper, nutmeg, curry leaf — close to the kitchen pavilion.",
  },
  {
    slug: "slot-house-kozhikode",
    name: "Slot House",
    location: "Kozhikode",
    year: 2022,
    category: "Residence",
    descriptor: "An urban infill house defined by a single vertical light slot.",
    cover: project4Hero,
    gallery: [project4Hero, project4A],
    area: "3,100 sq.ft",
    scope: "Architecture, Interiors",
    status: "Completed",
    overview:
      "A tall, narrow residence set into a dense urban street, organised around a triple-height void that draws daylight to the lower floors.",
    narrative: [
      "The plot was tight on three sides. Rather than fight the constraint, we treated the void as the principal room — a vertical court that orders the section and lets the street recede.",
      "A single mature frangipani, retained from the previous house, anchors the entry. The facade defers to it: a flat plane of board-formed concrete with one slot window aligned to the tree.",
      "Inside, the staircase becomes the social spine; the bedrooms are quiet and shuttered, the public rooms gather around the void.",
    ],
    materials: ["Board-formed concrete", "White oak", "Polished oxide", "Brushed brass"],
    landscape:
      "A single retained frangipani and a narrow planted strip along the eastern boundary.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
