// Function created that allows users to delete forum posts on dashboard page and then redirect them to an updated dashboard
const deletePostHandler = async (event) => {
  event.preventDefault();
  console.log("clicked me");
  console.log(event.target);

  let postId = event.target.getAttribute("data-id");
  console.log(postId);

  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.assign(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

// Function created that allows for a user to edit forum posts on dashboard page by redirecting them to the /create/:id page
const editPost = async (event) => {
  event.preventDefault();
  console.log("clicked me");

  let postId = event.target.getAttribute("data-id");

  document.location.assign(`/create/${postId}`);
};

const editButton = document.querySelectorAll("#editBtn");

// Iterates over all buttons on the page and allows for edit functionality
for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", editPost);
}

const deleteButton = document.querySelectorAll("#deleteBtn");

// Iterates over all buttons on the page and allows for delete functionality
for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", deletePostHandler);
}
