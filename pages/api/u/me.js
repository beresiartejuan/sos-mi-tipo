import withSession from '../../../libs/withSession';

async function me(req, res){

    const user = req.session.user

    if(user){
        return res.json({
            isLoggedIn: true,
            ...user
        })
    } else {
        return res.json({
            isLoggedIn: false
        })
    }

}

export default withSession(me)