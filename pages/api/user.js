import { sessionOptions } from '../../libs/session'
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(async (req, res) => {
    const user = req.session.user
    if (user) {
        // in a real world application you might read the user id from the session and then do a database request
        // to get more information on the user if needed
        res.json({
            isLoggedIn: true,
            ...user,
        })
    } else {
        res.json({
            isLoggedIn: false,
        })
    }
}, sessionOptions)
