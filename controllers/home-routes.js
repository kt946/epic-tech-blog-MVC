// contains user-facing routes (homepage and login page)
const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id', 
            'title', 
            'content', 
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            // send post data to homepage template
            // use sequelize get() method to serialize the object into specific properties
            res.render('homepage', dbPostData[0].get({ plain: true }));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
  
module.exports = router;