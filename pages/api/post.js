import withSesssion from '../../libs/withSession';
import connectDatabase from '../../database/connect';
import Post from '../../database/post.model';
import User from '../../database/user.model';

const createPost = async function(req, res){

    const { hospital, blood, content } = req.body

    if(!hospital){
        req.session.errors = [{ field: 'hospital' }]
        await req.session.save()
        return res.redirect(308, '/home')
    }

    if(!blood){
        req.session.errors = [{ field: 'blood' }]
        await req.session.save()
        return res.redirect(308, '/home')
    }

    if(!content){
        req.session.errors = [{ field: 'content' }]
        await req.session.save()
        return res.redirect(308, '/home')
    }

    const owner = await User.findById(req.session.user.id)

    console.log(owner)

    const new_post = await new Post({
        type: blood, content, hospital,
        owner: owner.clientId,
        city: owner.city,
        country: owner.country
    })

    await new_post.save()

    return res.redirect(308, '/home')

}

const getPost = async function(req, res){

    const posts = await Post.find()

    return res.status(200).json(posts)

}

export default withSesssion(async function(req, res){

    await connectDatabase()

    if(req.method === 'POST'){
        await createPost(req, res)
    } else if(req.method === 'GET'){ 
        await getPost(req, res)
    }else{
        return res.status(405).json({message: 'Method not support'})
    }

});