import { redirect, RouteObject } from "react-router-dom";
import DashboardHome from "../pages/dashboard/dashboard-home";
import DashboardLayout from "../pages/dashboard/dashboard-layout";
import DashboardRoom from "../pages/dashboard/dashboard-room";
import { getProfile } from "../services/auth.service";


const RouteDashboard: RouteObject[] =  [
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        loader: async () => {
          const response = await getProfile();
          if (!response?.data.data.user){
            // redirect ถ้า login ไม่ผ่านจะโยนไปหน้า login แต่ต้องมี throw
            throw redirect('/login');
          }
          return response.data.data.user;
        },
        children: [
          {
            path: '', //http://localhost:5173/dashboard
            element: <DashboardHome/>
          },
          {
            path: 'room', //http://localhost:5173/dashboard/room
            element: <DashboardRoom/>
          },
    
        ]
      },
];

export default RouteDashboard;