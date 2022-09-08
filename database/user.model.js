import connectDatabase from './connect';
import { Schema, model, models } from "mongoose";
import { genSalt, hash, compare } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    clientId: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    roles: [{ type: Schema.Types.String }]
}, {
    timestamps: false,
    versionKey: false
})

UserSchema.method('setPassword', async function(password){
    const salt = await genSalt(11)
    this.password = await hash(password, salt)
})

UserSchema.method('isMyPassword', async function(password){
    return await compare(password, this.password)
})

UserSchema.method('setClientId', async function(){
    this.clientId = await uuidv4()
})

UserSchema.static('findByEmail', async function(email){
    return await this.findOne({ email })
})

UserSchema.static('findByClientId', async function(clientId){
    return await this.findOne({ clientId })
});

const userModel = (models['User']) ? models['User'] : new model('User', UserSchema)

export default userModel;