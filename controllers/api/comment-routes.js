const router = require('express').Router();
const { Comment, User } = require('../../models');
// import middleware function to authguard routes
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'id',
            'comment_text',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// post a comment
router.post('/', withAuth, (req, res) => {
    // expects {comment_text: 'Hello World!', user_id: '1', post_id: 1}
    // check if session exists
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            // use session id
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

// delete a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;