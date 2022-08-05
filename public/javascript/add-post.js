// function to add post
async function addPost(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'post',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// function to display post form
function displayPostForm(event) {
    event.preventDefault();

    document.getElementById('post-form').classList.remove('d-none');
}

document.querySelector('#post-form').addEventListener('submit', addPost);

document.querySelector('.new-post-btn').addEventListener('click', displayPostForm);