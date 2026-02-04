import User from "../userModel/userModel.js";

export const createUser = async (req, res) => {
    try {
        console.log("BODY:", req.body); // sanity check
        const { userEmail } = req.body;
        const isDuplicateEmail = await User.findOne({ userEmail });
        if (isDuplicateEmail) {
            throw new Error("Email Already Exist")
        }
        const user = new User(req.body);
        await user.save();

        res.status(200).json(user);
    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};


export const getallUser = async (req, res) => {
    try {
        const users = await User.find()
        if (users.length == 0) {
            throw new Error("No User Exist")
        }
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

export const getUserbyId = async (req, res) => {
    try {
        const _id = req.params._id
        const target = await User.findOne({ _id })
        if (target) {
            res.status(200).json(target)
        }
        throw new Error("User Not Found")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// ?userName= 
// ?userEmail=
// ?userAddress=
export const queryUser = async (req, res) => {
    try {
        const query = req.query
        console.log(query)
        const target = await User.findOne(query)
        if (target) {
            res.status(200).json(target)
        }
        throw new Error("Nothing Found")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const DeleteUser = async (req, res) => {
    try {
        const _id = req.body.id
        const isUSer = await User.findOne({ _id })
        if (!isUSer) {
            throw new Error("User Not Found To Delete")
        }
        const result = await User.findByIdAndDelete(_id)
        res.status(200).json({ message: "User Delete Succusfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const editUser = async (req, res) => {
    try {
        const _id = req.body.id
        const isUSer = await User.findOne({ _id })
        if (!isUSer) {
            throw new Error("User Not Found To Edit")
        }
        const result = await User.findByIdAndUpdate(_id, req.body)
        res.status(200).json({ message: "User Updated Succusfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}