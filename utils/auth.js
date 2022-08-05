// middleware function to authguard routes (restrict to authenticated users only)
const withAuth = (req, res, next) => {
    // if user is not logged in, redirect to login page
    // checks for existence of session property
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        // if user_id exists, call next middleware function
        next();
    }
};

module.exports = withAuth;