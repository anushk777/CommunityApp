import mongoose from "mongoose"

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        branch: {
            type: String,
            required: true
        }
    }
)

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;