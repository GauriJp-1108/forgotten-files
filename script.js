/* ==========================================
   FORGOTTEN FILES
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   FAQ USING jQuery
========================================== */

$(document).ready(function () {

    $(".faq-question").click(function () {

        $(this)
            .next(".faq-answer")
            .slideToggle(300);


        let symbol = $(this).find("span");


        if (symbol.text() === "+") {

            symbol.text("−");

        } else {

            symbol.text("+");

        }

    });

});


/* ==========================================
   LOAD CASE DATA
========================================== */

function loadCaseData() {

    fetch("data.json")

        .then(function (response) {

            if (!response.ok) {

                throw new Error(
                    "Unable to load data.json"
                );

            }

            return response.json();

        })

        .then(function (data) {

            console.log(
                "Case loaded successfully:",
                data
            );

        })

        .catch(function (error) {

            console.error(
                "Error loading case:",
                error
            );

        });

}


/* ==========================================
   DOM EXAMPLE
========================================== */

function changeCaseTitle() {

    let title =
        document.getElementById("caseTitle");


    if (title) {

        title.innerHTML =
            "THE MISSING NECKLACE";

    }

}


/* ==========================================
   FORM VALIDATION
========================================== */

function validateInvestigationForm(event) {

    event.preventDefault();


    let suspect =
        document.getElementById("suspect").value;


    let reason =
        document.getElementById("reason").value;


    if (suspect === "") {

        alert(
            "Please select a suspect."
        );

        return false;

    }


    if (reason.trim() === "") {

        alert(
            "Please explain your reasoning."
        );

        return false;

    }


    alert(
        "Your accusation has been recorded."
    );


    return true;

}


/* ==========================================
   PAGE LOAD
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCaseData();

    }
);

/* =====================================================
   SIGN IN
===================================================== */

const signinForm = document.getElementById("signinForm");

if (signinForm) {

    signinForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();


        if (email === "" || password === "") {

            alert("Please enter your email and password.");

            return;

        }


        /*
         * For now this is a front-end demo.
         * Later we can connect this to a database.
         */

       alert("Welcome back, Detective!");
window.location.href = "index.html";
    });

}


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

const togglePassword =
    document.getElementById("togglePassword");


if (togglePassword) {

    togglePassword.addEventListener("click", function() {

        const password =
            document.getElementById("password");


        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent = "HIDE";

        }

        else {

            password.type = "password";

            togglePassword.textContent = "SHOW";

        }

    });

}
/* =====================================================
   LOCKED CASE
===================================================== */

function showLockedCase() {

    alert(
        "🔒 CASE FILE LOCKED\n\n" +
        "This investigation has not been released yet.\n\n" +
        "Complete Case #001 first."
    );

}