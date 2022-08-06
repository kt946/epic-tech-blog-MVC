// function to delete a post
async function deletePost(event) {
    event.preventDefault();

    // get id of post from url (last element in array)
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // send delete request
    const response = await fetch(`/api/posts/${id}`, {
        method: 'delete'
    });

    // if request successful, redirect user to dashboard
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#delete-post-btn').addEventListener('click', deletePost);