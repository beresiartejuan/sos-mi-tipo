import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../libs/session"; 

export default withIronSessionApiRoute(
    async function logoutRoute(req, res) {
        req.session.destroy();
        res.redirect(307, '/login');
    }, sessionOptions
);