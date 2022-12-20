import { BsPeople } from "react-icons/bs";
import { RiSuitcase3Line } from "react-icons/ri";

const buttons = [
  {
    id: 1,
    icon: <BsPeople />,
    title: "Сотрудники",
    path: "/employee",
  },
  {
    id: 2,
    icon: <RiSuitcase3Line />,
    title: "Отпуска",
    path: "/holidays",
  },
  {
    id: 3,
    icon: <BsPeople />,
    title: "Кандидаты",
    path: "/candidates",
  },
];

export default buttons;
