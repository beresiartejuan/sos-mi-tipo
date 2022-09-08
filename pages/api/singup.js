import withSession from '../../libs/withSession';
import connectDatabase from '../../database/connect';
import User from '../../database/user.model';

async function singup(req, res){

    const { name, email, password, country, city } = req.body

    const errors = []

    if(!email){
        errors.push({ field: 'email' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/singup')
    }
    if(!name){
        errors.push({ field: 'name' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/singup')
    }
    if(!password){
        errors.push({ field: 'password' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/singup')
    }
    if(!country){
        errors.push({ field: 'country' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/singup')
    }
    if(!city){
        errors.push({ field: 'city' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/singup')
    }

    await connectDatabase()

    if(await User.findByEmail(email)){
        errors.push({ field: 'email', message: 'This email already register' })
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/singup')
    }

    const new_user = await new User({
        name: name.toLowerCase(),
        country: country.toLowerCase(),
        city: city.toLowerCase(),
        email
    })

    new_user.roles = ['user']
    await new_user.setPassword(password)
    await new_user.setClientId()
    await new_user.save()

    if(errors.length > 0){
        req.session.errors = JSON.stringify(errors)
        await req.session.save()
        return res.redirect(308, '/singup')
    }else{
        return res.redirect(308, '/login')
    }

}

export default withSession(singup)