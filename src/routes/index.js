import { HistoryOrderLayout } from "../components/Layout";
import { ListOrder } from "../Page/HistoryOrder";
import Home from "../Page/Home";
import Admin from "../Page/Admin";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/history", component: ListOrder, layout: HistoryOrderLayout },
];

export { publicRoutes };
