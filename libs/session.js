export const sessionOptions = {
    cookieName: "myapp_cookiename",
    password: "WKQ20kmKjbYGUsLncWi1EE2iamtVhTDn4",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};