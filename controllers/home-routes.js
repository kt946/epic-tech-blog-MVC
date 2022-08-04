// contains user-facing routes (homepage and login page)
const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// route to display all posts on the homepage
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
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', { posts });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// route to login page
router.get('/login', (req, res) => {
    res.render('login');
});
  
module.exports = router;