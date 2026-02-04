import User from "../userModel/userModel.js";

export const createUser = async (req, res) => {
    try {
        console.log("BODY:", req.body); // sanity check
        const { userEmail } = req.body;
        const isDuplicateEmail = await User.findOne({ userEmail });
        if (isDuplicateEmail) {
            return res.status(400).json({
                message: "User already exists with this email",
            });
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
            res.status(400).json({ message: "No User To Get" })
        }
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({ message: error })
    }


}

export const getUserbyId = async (req, res) => {
    try {
        const _id = req.params._id
        const target = await User.findOne({ _id })
        if (target) {
            res.status(200).json(target)
        }
        res.status(400).json({ message: "User Not Found" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
export const queryUser = async (req, res) => {
    try {
        const query = req.query
        console.log(query)
        const target = await User.findOne(query)
        if (target) {
            res.status(200).json(target)
        }
        res.status(400).json({ message: "User Not Found" })

    } catch (error) {

        res.status(500).json({ message: error })
    }
}