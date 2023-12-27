import { PATH } from "../config/path";
import Login from "../pages/Login";
import Register from "../pages/Register";

const route = [
    {
        path: PATH.sign_up,
        component: Register,
        exact: true,
    },
    {
        path: PATH.login,
        component: Login,
        exact: true,
    }
];

export { route };
