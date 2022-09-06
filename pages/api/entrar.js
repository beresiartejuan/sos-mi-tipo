import { sessionOptions } from '../../libs/session'
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(async (req, res) => {
    const user = req.session.user = req.body
    await req.session.save()
    res.redirect(307, '/')
}, sessionOptions)
