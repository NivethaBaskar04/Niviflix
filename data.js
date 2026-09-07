/* ============================================================
   NIVIFLIX — Mock catalog
   All titles below are fictional, invented for this demo/clone
   project. No real film or show data is used.
   ============================================================ */

const GENRE_THEMES = {
  scifi:   { from: "#1B1035", to: "#3A1E6E", tag: "Sci-Fi" },
  drama:   { from: "#231317", to: "#5C1B2A", tag: "Drama" },
  action:  { from: "#2A1006", to: "#7A2A0C", tag: "Action" },
  comedy:  { from: "#241A02", to: "#6E4E06", tag: "Comedy" },
  doc:     { from: "#04211D", to: "#0E5C4F", tag: "Documentary" },
  horror:  { from: "#140404", to: "#4A0808", tag: "Horror" },
  romance: { from: "#2B0B1E", to: "#7A1650", tag: "Romance" },
  fantasy: { from: "#081428", to: "#153E7A", tag: "Fantasy" },
};

// id, title, year, rating (0-10), duration, maturity, genre key, blurb, cast
const CATALOG = [
  { id: 1,  title: "Glass Horizon",        year: 2025, rating: 8.7, duration: "2h 12m", maturity: "16+", genre: "scifi",
    blurb: "When a orbital colony loses contact with Earth, a lone engineer must decide whether to trust a signal that shouldn't exist.",
    cast: "Maren Okafor, Theo Lindqvist, Priya Chandran" },
  { id: 2,  title: "The Long Static",      year: 2024, rating: 7.9, duration: "1h 54m", maturity: "13+", genre: "drama",
    blurb: "Two estranged sisters return to their childhood radio station to keep it on air for one final broadcast.",
    cast: "Elena Voss, Grace Amaechi" },
  { id: 3,  title: "Redline Ferrymen",     year: 2023, rating: 8.2, duration: "2h 05m", maturity: "16+", genre: "action",
    blurb: "A retired courier is pulled back into the underground freight wars to protect the one shipment she never delivered.",
    cast: "Marcus Reyes, Ilya Petrov, Dana Okonkwo" },
  { id: 4,  title: "Nine Wrong Numbers",   year: 2025, rating: 7.4, duration: "1h 38m", maturity: "13+", genre: "comedy",
    blurb: "A wedding planner keeps answering calls meant for a stranger — and slowly falls into his life instead of her own.",
    cast: "Sofia Marchetti, Ben Whitcombe" },
  { id: 5,  title: "Undertow: The Reef",   year: 2022, rating: 8.9, duration: "48m/ep", maturity: "PG", genre: "doc",
    blurb: "A six-part descent into the last unmapped coral systems, filmed over three years with the scientists racing to save them.",
    cast: "Narrated by Adaeze Nwosu" },
  { id: 6,  title: "Hollow Orchard",       year: 2024, rating: 7.1, duration: "1h 47m", maturity: "18+", genre: "horror",
    blurb: "A family inherits an orchard where the trees remember every harvest — and every person who never left.",
    cast: "Rosalind Ahn, Callum Fitzgerald" },
  { id: 7,  title: "Paper Constellations", year: 2023, rating: 8.0, duration: "2h 01m", maturity: "13+", genre: "romance",
    blurb: "A cartographer and an astronomer trade letters for a decade before ever learning what the other looks like.",
    cast: "Nadia Farouk, Julian Mbeki" },
  { id: 8,  title: "Ashfall Kingdoms",     year: 2025, rating: 9.1, duration: "58m/ep", maturity: "16+", genre: "fantasy",
    blurb: "Three rival houses race to claim a throne built from the bones of a dead god, in a kingdom slowly turning to ash.",
    cast: "Freya Solberg, Tomas Yilmaz, Nia Botha" },
  { id: 9,  title: "Departure Gate 12",    year: 2022, rating: 7.6, duration: "1h 42m", maturity: "13+", genre: "drama",
    blurb: "A snowed-in airport terminal becomes the last place seven strangers will ever agree on anything.",
    cast: "Harriet Osei, Diego Salazar" },
  { id: 10, title: "Circuit Breakers",     year: 2024, rating: 8.4, duration: "2h 18m", maturity: "16+", genre: "scifi",
    blurb: "A rogue technician discovers the city's power grid is quietly rewriting the minds of everyone connected to it.",
    cast: "Kenji Watanabe, Lucia Ferreira" },
  { id: 11, title: "The Understudy Wars",  year: 2023, rating: 7.3, duration: "1h 33m", maturity: "13+", genre: "comedy",
    blurb: "Two backup actors sabotage each other for a lead role neither of them actually wants once they get it.",
    cast: "Poppy Duran, Aaron Kessler" },
  { id: 12, title: "Salt & Static",        year: 2025, rating: 8.6, duration: "2h 09m", maturity: "16+", genre: "action",
    blurb: "A decommissioned storm-chaser pilot is hired to fly one last run through a hurricane hiding something man-made.",
    cast: "Vikram Nair, Odette Laurent" },
  { id: 13, title: "The Cartographer's Ghost", year: 2022, rating: 7.8, duration: "1h 51m", maturity: "13+", genre: "fantasy",
    blurb: "A surveyor mapping a forgotten province keeps finding roads that lead to towns which vanished a century ago.",
    cast: "Esme Falk, Robert Achebe" },
  { id: 14, title: "Migration Season",     year: 2023, rating: 8.8, duration: "52m/ep", maturity: "PG", genre: "doc",
    blurb: "Following four species across a single continent as the routes their ancestors used for millennia start to disappear.",
    cast: "Narrated by Simon Okafor" },
  { id: 15, title: "Low Tide Motel",       year: 2024, rating: 6.9, duration: "1h 44m", maturity: "18+", genre: "horror",
    blurb: "A night manager at a coastal motel starts checking guests in who never actually arrived.",
    cast: "Mireille Duclos, Ezra Ndiaye" },
  { id: 16, title: "The Almost Wedding",   year: 2025, rating: 7.5, duration: "1h 49m", maturity: "13+", genre: "romance",
    blurb: "A wedding photographer keeps getting hired by the same runaway bride, at a different wedding, every single year.",
    cast: "Camille Rousseau, Idris Bakare" },
  { id: 17, title: "Static Age",           year: 2021, rating: 8.3, duration: "2h 22m", maturity: "16+", genre: "scifi",
    blurb: "The last analog broadcast tower on Earth becomes a sanctuary once every digital network goes dark at once.",
    cast: "Anya Kowalski, Femi Adeyemi" },
  { id: 18, title: "Foundry Row",          year: 2023, rating: 8.1, duration: "1h 56m", maturity: "16+", genre: "drama",
    blurb: "When the last steel mill in town announces its closing, three generations of one family fight over what comes next.",
    cast: "Walter Brennan-Cole, Tabitha Osei" },
  { id: 19, title: "Kestrel & Company",    year: 2024, rating: 7.7, duration: "44m/ep", maturity: "13+", genre: "comedy",
    blurb: "A failing detective agency stays afloat by taking cases none of the good agencies want to touch.",
    cast: "Nora Lindström, Devan Pillai" },
  { id: 20, title: "Deep Cut Rally",       year: 2025, rating: 8.5, duration: "2h 03m", maturity: "16+", genre: "action",
    blurb: "An underground street-racing crew is drawn into a heist that runs straight through the middle of a title race.",
    cast: "Malia Fonoti, Grigor Amiryan" },
];

const ROWS = [
  { title: "Trending Now",         ids: [8, 3, 1, 12, 20, 17, 10] },
  { title: "Niviflix Originals",   ids: [8, 5, 14, 17, 1] },
  { title: "Because you watched Redline Ferrymen", ids: [3, 12, 20, 10, 17] },
  { title: "Award-Worthy Dramas",  ids: [2, 9, 18, 7, 13] },
  { title: "Laugh Out Loud",       ids: [4, 11, 19, 16] },
  { title: "Edge of Your Seat",    ids: [6, 15, 1, 12] },
  { title: "Documentaries",        ids: [5, 14] },
  { title: "Fantasy & Sci-Fi",     ids: [8, 13, 1, 10, 17] },
];

const PROFILES = [
  { name: "Nivi",  color: "#E63950" },
  { name: "Arjun", color: "#3E8AF2" },
  { name: "Meera", color: "#F2B705" },
  { name: "Kids",  color: "#2FBF71" },
];

function getById(id) {
  return CATALOG.find((m) => m.id === id);
}
