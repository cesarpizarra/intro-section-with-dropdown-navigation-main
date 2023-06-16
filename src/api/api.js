import todoIcon from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";
import databiz from "../assets/client-databiz.svg";
import audio from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";

export const navLinks = [
  {
    path: "/features",
    label: "Features",
    hasDropDown: true,
    dropDownItems: [
      {
        label: "Todo List",
        icon: todoIcon,
      },
      {
        label: "Calendar",
        icon: calendar,
      },
      {
        label: "Reminders",
        icon: reminders,
      },
      {
        label: "Planning",
        icon: planning,
      },
    ],
  },
  {
    path: "/company",
    label: "Company",
    hasDropDown: true,
    dropDownItems: [
      {
        label: "History",
      },
      {
        label: "Our Team",
      },
      {
        label: "Blog",
      },
    ],
  },
  {
    path: "/careers",
    label: "Careers",
  },
  {
    path: "/about",
    label: "About",
  },
];

export const form = [
  {
    path: "/login",
    label: "Login",
    loginForm: "Login",
  },
  {
    path: "/register",
    label: "Register",
    registerForm: "Register",
  },
];

export const hero = [
  {
    title: "Make remote work",
  },
  {
    subTitle:
      "Get your team in sync, no matter your location, Streamline processes, create team rituals, and watch productivity soar.",
  },
  {
    btn: "Learn More",
  },
];

export const icons = [
  { icon: databiz },
  { icon: audio },
  { icon: meet },
  { icon: maker },
];
