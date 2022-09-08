import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'

function withSession(handler){
    return withIronSessionApiRoute(handler, sessionOptions)
}

function withSessionSsr(handler){
    return withIronSessionSsr(handler, sessionOptions)
}

const sessionOptions = {
    cookieName: "myapp_cookiename",
    password: "WKQ20kmKjbYGUsLncWi1EE2iamtVhTDn4",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production"
    },
}

export default withSession

export { withSessionSsr, sessionOptions }