import { colors } from ".";

export type Avatar = {
  id: string;
  name: string;
  color: string;
  image: any;
};

export type gameMessage = {
  message: string;
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
      {
        id: "1",
        name: "Number Rods",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: true,
        link: "SandPaper",
      },
      {
        id: "2",
        name: "Sandpaper Numbers",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: true,
        link: "SandPaper",
      },
      {
        id: "3",
        name: "Number Rods and Cards",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "4",
        name: "Spindle Box",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "5",
        name: "Cards & Counters",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
    ],
  },
  {
    id: "2",
    name: "Language",
    icon: require("@/assets/images/speaking.png"),
    topics: [
      {
        id: "1",
        name: "Explored ‘Animals Around the World",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "2",
        name: "Played ‘Sound Matching Game’ in Phonics Fun",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "3",
        name: "Multiplication",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "4",
        name: "Division",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "5",
        name: "Square Root",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "6",
        name: "Percentage",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
    ],
  },
  {
    id: "3",
    name: "Sensorial",
    icon: require("@/assets/images/uranus.png"),
    topics: [
      {
        id: "1",
        name: "Addition",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "2",
        name: "Subtraction",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "3",
        name: "Multiplication",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "4",
        name: "Division",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "5",
        name: "Square Root",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "6",
        name: "Percentage",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
    ],
  },
  {
    id: "4",
    name: "Science",
    icon: require("@/assets/images/world.png"),
    topics: [
      {
        id: "1",
        name: "Addition",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "2",
        name: "Subtraction",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "3",
        name: "Multiplication",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "4",
        name: "Division",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "5",
        name: "Square Root",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "6",
        name: "Percentage",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
    ],
  },
  {
    id: "5",
    name: "Geography",
    icon: require("@/assets/images/dizzy.png"),
    topics: [
      {
        id: "1",
        name: "Addition",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "2",
        name: "Subtraction",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "3",
        name: "Multiplication",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "4",
        name: "Division",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "5",
        name: "Square Root",
        questions: ["What is 2 + 3?", "Solve: 5 + 7"],
        active: false,
        link: "SandPaper",
      },
      {
        id: "6",
        name: "Percentage",
        questions: ["What is 9 - 4?", "Solve: 15 - 8"],
        active: false,
        link: "SandPaper",
      },
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

export const rodPoint = [
  { id: 1, label: "Rod 1" },
  { id: 2, label: "Rod 2" },
  { id: 3, label: "Rod 3" },
];

export const rodColors = [
  { main: "#FF5733", shadow: "#C0392B" },
  { main: "#3498DB", shadow: "#21618C" },
];

export const ranges = [
  [1, 3],
  [4, 6],
  [7, 10],
];

export const numberData: Record<
  number,
  {
    text: string;
    d: string;
    points: { x: number; y: number }[];
  }
> = {
  1: {
    text: "1",
    d: "M100 40 Q110 100 100 160",
    points: [
      { x: 100, y: 40 },
      { x: 105, y: 80 },
      { x: 102, y: 120 },
      { x: 100, y: 160 },
    ],
  },
  2: {
    text: "2",
    d: "M50 20 Q90 0 110 40 Q120 80 80 100 Q40 120 60 160",
    points: [
      { x: 60, y: 25 },
      { x: 90, y: 40 },
      { x: 110, y: 60 },
      { x: 95, y: 90 },
      { x: 80, y: 110 },
      { x: 60, y: 140 },
    ],
  },
  3: {
    text: "3",
    d: "M60 20 Q110 40 60 80 Q110 100 60 140",
    points: [
      { x: 65, y: 30 },
      { x: 95, y: 50 },
      { x: 65, y: 75 },
      { x: 95, y: 100 },
      { x: 65, y: 130 },
    ],
  },
  4: {
    text: "4",
    d: "M120 20 L60 100 L120 100 L120 160",
    points: [
      { x: 120, y: 20 },
      { x: 90, y: 60 },
      { x: 60, y: 100 },
      { x: 120, y: 100 },
      { x: 120, y: 160 },
    ],
  },
  5: {
    text: "5",
    d: "M110 20 H60 V60 Q100 60 90 100 Q90 140 60 160",
    points: [
      { x: 110, y: 20 },
      { x: 80, y: 20 },
      { x: 60, y: 60 },
      { x: 90, y: 80 },
      { x: 90, y: 120 },
      { x: 70, y: 150 },
    ],
  },
  6: {
    text: "6",
    d: "M100 20 Q60 60 90 100 Q110 130 60 160 Q30 120 60 100",
    points: [
      { x: 95, y: 30 },
      { x: 70, y: 60 },
      { x: 85, y: 90 },
      { x: 100, y: 120 },
      { x: 80, y: 150 },
      { x: 60, y: 130 },
      { x: 55, y: 110 },
    ],
  },
  7: {
    text: "7",
    d: "M40 20 H120 L60 160",
    points: [
      { x: 40, y: 20 },
      { x: 80, y: 20 },
      { x: 120, y: 20 },
      { x: 90, y: 90 },
      { x: 60, y: 160 },
    ],
  },
  8: {
    text: "8",
    d: "M80 60 Q40 20 80 0 Q120 20 80 60 Q120 100 80 160 Q40 100 80 60",
    points: [
      { x: 80, y: 60 },
      { x: 60, y: 30 },
      { x: 80, y: 0 },
      { x: 100, y: 30 },
      { x: 80, y: 60 },
      { x: 100, y: 100 },
      { x: 80, y: 140 },
      { x: 60, y: 100 },
      { x: 80, y: 60 },
    ],
  },
  9: {
    text: "9",
    d: "M90 100 Q120 80 100 40 Q60 20 60 60 Q60 100 100 100",
    points: [
      { x: 90, y: 100 },
      { x: 110, y: 80 },
      { x: 100, y: 50 },
      { x: 80, y: 30 },
      { x: 60, y: 60 },
      { x: 70, y: 90 },
      { x: 90, y: 100 },
    ],
  },
  0: {
    text: "9",
    d: "M90 100 Q120 80 100 40 Q60 20 60 60 Q60 100 100 100",
    points: [
      { x: 90, y: 100 },
      { x: 110, y: 80 },
      { x: 100, y: 50 },
      { x: 80, y: 30 },
      { x: 60, y: 60 },
      { x: 70, y: 90 },
      { x: 90, y: 100 },
    ],
  },
};
