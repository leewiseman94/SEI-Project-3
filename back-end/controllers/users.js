import User from '../models/user.js'

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id).populate('createdRecipes').populate('likedRecipes')
    if (!user) throw new Error()
    return res.status(200).json(user)
  } catch (err) {
    return res.status(404).json({ 'message': 'Not found' })
  }

}