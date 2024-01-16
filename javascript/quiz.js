function calculateScore() {
    // verification si chaque questiion est existe 
    var allAnswered = true;

    for (var i = 1; i <= 10; i++) {
        var answer = document.querySelector('input[name="q' + i + '"]:checked');

        if (!answer) {
            allAnswered = false;
            break; // Si une réponse manque, sortir de la boucle
        }
    }

    if (!allAnswered) {
        alert("Veuillez répondre à toutes les questions avant de soumettre.");
        return; // Sortir de la fonction si toutes les questions ne sont pas répondues
    }

    // Si toutes les questions sont répondues, calculer le score
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    var q3Answer = document.querySelector('input[name="q3"]:checked').value;
    var q4Answer = document.querySelector('input[name="q4"]:checked').value;
    var q5Answer = document.querySelector('input[name="q5"]:checked').value;
    var q6Answer = document.querySelector('input[name="q6"]:checked').value;
    var q7Answer = document.querySelector('input[name="q7"]:checked').value;
    var q8Answer = document.querySelector('input[name="q8"]:checked').value;
    var q9Answer = document.querySelector('input[name="q9"]:checked').value;
    var q10Answer = document.querySelector('input[name="q10"]:checked').value;
    
    var score = 0;

    if (q1Answer === "JavaScript") score++;
    if (q2Answer === "Hypertext Markup Language") score++;
    if (q3Answer === "Manage system resources") score++;
    if (q4Answer === "Style the appearance of web pages") score++;
    if (q5Answer === "Stack") score++;
    if (q6Answer === "Clone a repository") score++;
    if (q7Answer === "Application Programming Interface") score++;
    if (q8Answer === "Query and manipulate databases") score++;
    if (q9Answer === "Hypertext Transfer Protocol and Hypertext Transfer Protocol Secure") score++;
    if (q10Answer === "Translate source code into machine code") score++;

    var correctAnswersList = "Correct Answers:\n" +
        "1. JavaScript\n" +
        "2. Hypertext Markup Language\n" +
        "3. Manage system resources\n" +
        "4. Style the appearance of web pages\n" +
        "5. Stack\n" +
        "6. Clone a repository\n" +
        "7. Application Programming Interface\n" +
        "8. Query and manipulate databases\n" +
        "9. Hypertext Transfer Protocol and Hypertext Transfer Protocol Secure\n" +
        "10. Translate source code into machine code\n";

    alert("Your score is " + score + " out of 10.\n\n" + correctAnswersList);
}
 
document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('.prc3 img');
    var currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'inline-block';
    }

    
    setInterval(showNextImage, 2000);
});

function submitForm() {
    event.preventDefault();
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xpzvwjvb", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var responseWindow = window.open("", "_blank");
                responseWindow.document.write(xhr.responseText);
            } else {
                
                alert ("le message est envpyé")
                form.reset();
            }
        }
    };
    xhr.send(formData);
}