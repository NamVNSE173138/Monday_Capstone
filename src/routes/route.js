import { PATH } from "../config/path";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Register3 from "../pages/Register3";
import Register4 from "../pages/Register4";
import Resgister2 from "../pages/Resgister2";

const route = [
    {
        path: PATH.sign_up,
        component: Register,
        exact: true,
    },
    {
        path: PATH.sign_up2,
        component: Resgister2,
        exact: true,
    },
    {
        path: PATH.sign_up3,
        component: Register3,
        exact: true,
    },
    {
        path: PATH.sign_up4,
        component: Register4,
        exact: true,
    },
    {
        path: PATH.login,
        component: Login,
        exact: true,
    }
];

export { route };
