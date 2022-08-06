// function to update a post
async function updatePost(event) {
    event.preventDefault();

    // get id of post from url (last element in array)
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    // get post title from input
    const title = document.querySelector('input[name="post-title"]').value.trim();
    // get post content from textarea
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    // send put request
    const response = await fetch(`/api/posts/${id}`, {
        method: 'put',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // if request successful, redirect user to dashboard
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#edit-post-form').addEventListener('submit', updatePost);