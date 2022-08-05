// contains user-facing routes (homepage and login page)
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// route to display all posts on the homepage
router.get('/', (req, res) => {
    console.log(req.session);
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

            res.render('homepage', { 
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// route to login page
router.get('/login', (req, res) => {
    // if logged in already, redirect to homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route to display a single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }

            // serialize the data
            const post = dbPostData.get({ plain: true });

            // pass data to single-post template
            res.render('single-post', { 
                post, 
                loggedIn: req.session.loggedIn 
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
  
module.exports = router;