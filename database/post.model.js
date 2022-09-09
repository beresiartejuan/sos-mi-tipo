import { Schema, models, model } from 'mongoose'

const postSchema = new Schema({
    type: { type: String, required: true },
    content: { type: String },
    hospital: { type: String },
    owner: { type: String, required: true },
    city: { type: String },
    country: { type: String }
}, {
    timestamps: true,
    versionKey: false
})

postSchema.static('all', async function(){
    return await this.find()
});

postSchema.static('findByOwner', async function(owner){
    return await this.find({ owner })
});

const postModel = (models['Post']) ? models['Post'] : new model('Post', postSchema)

export default postModel