import withSesssion from '../../libs/withSession';
import User from '../../database/user.model';
import connectDatabase from '../../database/connect';

async function loginHandler(req, res){

    const { email, password } = req.body
    const errors = []

    if(!email){
        errors.push({ field: 'email' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/login')
    }
    if(!password){
        errors.push({ field: 'password' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/login')
    }

    connectDatabase();

    const user = await User.findByEmail(email)

    if(!user){
        errors.push({ field: 'email', message: 'Email not register' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/login')
    }

    if(await user.isMyPassword(password)){
        req.session.user = {
            name: user.name,
            email: user.email,
            id: user._id.toString()
        }
    }else{
        errors.push({ field: 'password', message: 'Incorrect password' })
    }

    if(errors.length > 0){
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/login')
    }else{
        await req.session.save()
        return res.redirect(308, '/home')
    }

}

export default withSesssion(loginHandler)
