import { inputChangeHandler } from "../utils";

export const POST_LIST = [
  {
    id: "23deh7j",
    name: "Amet minim",
    avatarPath: "/images/Female.png",
    postTime: "5mins ago",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.",
    comments: 24,
    emoji: "👋",
    isEdited: false,
  },
  {
    id: "s3gev7l",
    name: "Marvin McKinney",
    avatarPath: "/images/Male.png",
    postTime: "8mins ago",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.",
    comments: 14,
    emoji: "😞",
    isEdited: true,
  },
];

export const SIGNUP_FIELDS = [
  {
    placeholder: "Enter your email",
    label: "Email",
    handler: inputChangeHandler,
    id: "setEmail",
    isPassword: false,
  },
  {
    placeholder: "Choose a preferred username",
    label: "Username",
    handler: inputChangeHandler,
    id: "setUsername",
    isPassword: false,
  },
  {
    placeholder: "Choose a strong password",
    label: "Password",
    handler: inputChangeHandler,
    id: "setPassword",
    isPassword: true,
  },
];

export const LOGIN_FIELDS = [
  {
    placeholder: "Enter your email or username",
    label: "Email or Username",
    handler: inputChangeHandler,
    id: "name",
    isPassword: false,
  },
  {
    placeholder: "Enter your password",
    label: "Password",
    handler: inputChangeHandler,
    id: "password",
    isPassword: true,
  },
];
