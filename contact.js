


var Messages = ["Your name must be in the form: first name, middle name, last name",
    "Your email address must have the form: user@gmail.com",
    "Write your message here.\n We will try to reply to you as soon as possible.",
    "This box Helps you to know the format of your name and email."
]

function Messages_for_user (Message_num) {
    document.getElementById("Help_box").value = Messages[Message_num];
}