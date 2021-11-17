const Post = require('../models/posts')

module.exports = {
    create,
    unlike
}

async function create(req, res){
    try{
        const post = await Post.findById(req.params.id);
        post.likes.push({username: req.user.username, userId: req.user._id})
        await post.save()
        res.status(201).json({data: 'like added'})
    }catch(err){
        res.status(400).json({err})
    }
}

async function unlike(req, res){
    try{
        const post = await Post.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        post.likes.remove(req.params.id)
        await post.save()
        res.json({data: 'user unliked'})
    }catch(err){
        res.status(400).json({err})
    }
}