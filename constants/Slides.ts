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
  { id: "1", name: "Alice", color: "#A8E6CF", image: require("@/assets/avatars/alice.svg") },
  { id: "2", name: "Bob", color: "#FFD3B6", image: require("@/assets/avatars/bob.svg") },
  { id: "3", name: "Charlie", color: "#FFAAA5", image: require("@/assets/avatars/charlie.svg") },
  { id: "4", name: "David", color: "#D4A5A5", image: require("@/assets/avatars/david.svg") },
  { id: "5", name: "Eve", color: "#B5EAD7", image: require("@/assets/avatars/eve.svg") },
  { id: "6", name: "Frank", color: "#C7CEEA", image: require("@/assets/avatars/frank.svg") },
  { id: "7", name: "Grace", color: "#FFDAC1", image: require("@/assets/avatars/grace.svg") },
  { id: "8", name: "Hank", color: "#F3C4FB", image: require("@/assets/avatars/hank.svg") },
  { id: "2", name: "Bob", color: "#FFD3B6", image: require("@/assets/avatars/bob.svg") },
  { id: "3", name: "Charlie", color: "#FFAAA5", image: require("@/assets/avatars/charlie.svg") },
  { id: "4", name: "David", color: "#D4A5A5", image: require("@/assets/avatars/david.svg") },
  { id: "5", name: "Eve", color: "#B5EAD7", image: require("@/assets/avatars/eve.svg") },
  { id: "6", name: "Frank", color: "#C7CEEA", image: require("@/assets/avatars/frank.svg") },
  { id: "7", name: "Grace", color: "#FFDAC1", image: require("@/assets/avatars/grace.svg") },
  { id: "8", name: "Hank", color: "#F3C4FB", image: require("@/assets/avatars/hank.svg") },
];
