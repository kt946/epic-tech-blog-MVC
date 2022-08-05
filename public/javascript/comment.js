// function to add comments
async function addComment(event) {
    event.preventDefault();

    // get comment text from comment textarea
    const comment_text = document.querySelector('textarea[name="comment-textarea"]').value.trim();

    // get post id from url (split url into array and get last element)
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // check if textarea is empty, then send post request to add comment to post
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // if response is ok, reload single post page with new comments
        if (response.ok) {
            document.location.reload();
        } else {
            alert.apply(response.statusText);
        }
    }
}

document.querySelector('#comment-form').addEventListener('submit', addComment);