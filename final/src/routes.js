

import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";

var routes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-bar-32",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Records",
    icon: "tim-icons icon-badge",
    component: <TableList />,
    layout: "/admin",
  },
];
export default routes;
