import { PATH } from "../config/path";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
        path: PATH.login,
        component: Login,
        exact: true,
    }
];

export { route };
