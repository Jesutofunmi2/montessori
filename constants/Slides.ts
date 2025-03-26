import { colors } from ".";

export type Avatar = {
  id: string;
  name: string;
  color: string;
  image: any;
};

export const slides = [
  {
    id: "1",
    title: "Explore hands-on learning with fun activities!",
    color: colors.yellow500,
  },
  {
    id: "2",
    title: "Pick what you love to learn and go at your own pace!",
    color: colors.blue500,
  },
  {
    id: "3",
    title: "Complete challenges, earn badges, and grow with every step!",
    color: colors.red500,
  },
  {
    id: "4",
    title: "Parents track progress, set goals, and support learning!",
    color: colors.purple500,
  },
];

export const steps = [
  {
    question: "Who is setting up the account?",
    options: ["I’m a Parent/Guardian", "Teacher/Educator", "Other"],
  },
  { question: "Are you home schooling?", options: ["Yes", "No"] },
  { question: "What’s your child’s name?", options: [] },
  { question: "How old is Eniola?", options: [] },
  { question: "What is your child’s gender?", options: ["Male", "Female"] },
  { question: "Prior Montessori Experience?", options: ["Yes", "No"] },
  { question: "Any Special Learning Needs?", options: ["Yes", "No", "Other"] },
  { question: "Choose an avatar for Eniola", options: ["image"] },
];

export const avatars: Avatar[] = [
  {
    id: "1",
    name: "Alice",
    color: "#A8E6CF",
    image: require("@/assets/images/alice.png"),
  },
  {
    id: "2",
    name: "Bob",
    color: "#FFD3B6",
    image: require("@/assets/images/bob.png"),
  },
  {
    id: "3",
    name: "Charlie",
    color: "#FFAAA5",
    image: require("@/assets/images/charlie.png"),
  },
  {
    id: "4",
    name: "David",
    color: "#D4A5A5",
    image: require("@/assets/images/david.png"),
  },
  {
    id: "5",
    name: "Eve",
    color: "#B5EAD7",
    image: require("@/assets/images/alice.png"),
  },
  {
    id: "6",
    name: "Frank",
    color: "#C7CEEA",
    image: require("@/assets/images/frank.png"),
  },
  {
    id: "7",
    name: "Grace",
    color: "#FFDAC1",
    image: require("@/assets/images/grace.png"),
  },
  {
    id: "8",
    name: "Hank",
    color: "#F3C4FB",
    image: require("@/assets/images/hank.png"),
  },
  {
    id: "9",
    name: "Bob",
    color: "#FFD3B6",
    image: require("@/assets/images/bob.png"),
  },
  {
    id: "10",
    name: "Charlie",
    color: "#FFAAA5",
    image: require("@/assets/images/charlie.png"),
  },
  {
    id: "11",
    name: "David",
    color: "#D4A5A5",
    image: require("@/assets/images/david.png"),
  },
  {
    id: "12",
    name: "Eve",
    color: "#B5EAD7",
    image: require("@/assets/images/eve.png"),
  },
  {
    id: "13",
    name: "Frank",
    color: "#C7CEEA",
    image: require("@/assets/images/frank.png"),
  },
  {
    id: "14",
    name: "Grace",
    color: "#FFDAC1",
    image: require("@/assets/images/grace.png"),
  },
  {
    id: "15",
    name: "Hank",
    color: "#F3C4FB",
    image: require("@/assets/images/hank.png"),
  },
];

export const subjects = [
  {
    id: "1",
    name: "Mathematics",
    icon: require("@/assets/images/math.png"),
    topics: [
      { id: "1", name: "Number Rods", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Sandpaper Numbers", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Papersand", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Practiced Shape Matching", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Tracing", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Solved a Logic Puzzle in Brain Boosters", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
  {
    id: "2",
    name: "Language",
    icon: require("@/assets/images/speaking.png"),
    topics: [
      { id: "1", name: "Explored ‘Animals Around the World", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Played ‘Sound Matching Game’ in Phonics Fun", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Multiplication", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Division", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Square Root", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Percentage", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
  {
    id: "3",
    name: "Sensorial",
    icon: require("@/assets/images/uranus.png"),
    topics: [
      { id: "1", name: "Addition", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Subtraction", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Multiplication", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Division", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Square Root", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Percentage", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
  {
    id: "4",
    name: "Science",
    icon: require("@/assets/images/world.png"),
    topics: [
      { id: "1", name: "Addition", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Subtraction", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Multiplication", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Division", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Square Root", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Percentage", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
  {
    id: "5",
    name: "Geography",
    icon: require("@/assets/images/dizzy.png"),
    topics: [
      { id: "1", name: "Addition", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Subtraction", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Multiplication", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Division", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Square Root", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Percentage", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
  {
    id: "6",
    name: "Sensorial",
    icon: require("@/assets/images/uranus.png"),
    topics: [
      { id: "1", name: "Addition", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Subtraction", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Multiplication", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Division", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Square Root", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Percentage", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
  {
    id: "7",
    name: "Science",
    icon: require("@/assets/images/world.png"),
    topics: [
      { id: "1", name: "Addition", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Subtraction", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Multiplication", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Division", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Square Root", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Percentage", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
  {
    id: "8",
    name: "Geography",
    icon: require("@/assets/images/dizzy.png"),
    topics: [
      { id: "1", name: "Addition", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "2", name: "Subtraction", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "3", name: "Multiplication", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "4", name: "Division", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
      { id: "5", name: "Square Root", questions: ["What is 2 + 3?", "Solve: 5 + 7"] },
      { id: "6", name: "Percentage", questions: ["What is 9 - 4?", "Solve: 15 - 8"] },
    ],
  },
];

export const rods = [
  { id: 1, label: "Rod 1" },
  { id: 2, label: "Rod 2" },
  { id: 3, label: "Rod 3" },
  { id: 4, label: "Rod 4" },
  { id: 5, label: "Rod 5" },
  { id: 6, label: "Rod 6" },
  { id: 7, label: "Rod 7" },
  { id: 8, label: "Rod 8" },
  { id: 9, label: "Rod 9" },
  { id: 10, label: "Rod 10" },
];
