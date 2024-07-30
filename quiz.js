const quizData = [
    {
        question: "Who is known as the 'God of Indian Classical Music'?",
        options: ["Ravi Shankar", "Lata Mangeshkar", "A. R. Rahman", "Bismillah Khan"],
        answer: "Ravi Shankar"
    },
    {
        question: "Which Indian musical instrument is also known as the 'King of Instruments'?",
        options: ["Sitar", "Tabla", "Veena", "Flute"],
        answer: "Sitar"
    },
    {
        question: "Which ragam is considered the 'Morning Raga' in Indian classical music?",
        options: ["Raga Bhairav", "Raga Yaman", "Raga Darbari Kanada", "Raga Bageshree"],
        answer: "Raga Bhairav"
    },
    {
        question: "Who composed the song 'Mile Sur Mera Tumhara', known as the 'Unity Song of India'?",
        options: ["Pandit Ravi Shankar", "A. R. Rahman", "Bismillah Khan", "Lata Mangeshkar"],
        answer: "Pandit Ravi Shankar"
    },
    {
        question: "Which Indian playback singer is known as the 'Nightangle of India'?",
        options: ["Lata Mangeshkar", "Asha Bhosle", "Kishore Kumar", "Mohammed Rafi"],
        answer: "Lata Mangeshkar"
    },
    {
        question: "Which film marked the Bollywood debut of A. R. Rahman as a music composer?",
        options: ["Roja", "Dil Se..", "Taal", "Bombay"],
        answer: "Roja"
    },
    {
        question: "Who was the founder of the famous music academy 'Sangeet Research Academy'?",
        options: ["Pandit Ravi Shankar", "Ustad Allauddin Khan", "Pandit Jasraj", "Pandit Bhimsen Joshi"],
        answer: "Pandit Jasraj"
    },
    {
        question: "Which percussion instrument is essential in Indian classical music and often accompanies the sitar?",
        options: ["Tabla", "Mridangam", "Dholak", "Pakhawaj"],
        answer: "Tabla"
    },
    {
        question: "Which Indian composer won two Oscars for his work on the film 'Slumdog Millionaire'?",
        options: ["A. R. Rahman", "Ilaiyaraaja", "Anu Malik", "Shankar-Ehsaan-Loy"],
        answer: "A. R. Rahman"
    },
    {
        question: "Who composed the music for the Bollywood film 'Lagaan', which received widespread acclaim?",
        options: ["A. R. Rahman", "Shankar-Ehsaan-Loy", "Ilaiyaraaja", "Pritam"],
        answer: "A. R. Rahman"
    },
    {
        question: "Which Indian classical singer is known for popularizing the Thumri style of singing?",
        options: ["Begum Akhtar", "Pandit Bhimsen Joshi", "Kishori Amonkar", "Pandit Jasraj"],
        answer: "Begum Akhtar"
    },
    {
        question: "Who composed the music for the Bollywood film 'Swades'?",
        options: ["A. R. Rahman", "Shankar-Ehsaan-Loy", "Pritam", "Vishal-Shekhar"],
        answer: "A. R. Rahman"
    },
    {
        question: "Which Indian musician is known for his mastery of the santoor, a hammered dulcimer-like instrument?",
        options: ["Pandit Shivkumar Sharma", "Ustad Amjad Ali Khan", "Pandit Hariprasad Chaurasia", "Ustad Zakir Hussain"],
        answer: "Pandit Shivkumar Sharma"
    },
    {
        question: "Which Indian classical dance form is closely associated with Carnatic music?",
        options: ["Bharatanatyam", "Kathak", "Kuchipudi", "Odissi"],
        answer: "Bharatanatyam"
    },
    {
        question: "Who is known for the composition 'Raga Charukeshi', which is popular in both Carnatic and Hindustani classical music?",
        options: ["M. S. Subbulakshmi", "Pandit Jasraj", "Pandit Bhimsen Joshi", "Pandit Ravi Shankar"],
        answer: "Pandit Ravi Shankar"
    },
    {
        question: "Which Indian playback singer was known as the 'Voice of the Millennium'?",
        options: ["Mohammed Rafi", "Kishore Kumar", "Asha Bhosle", "Udit Narayan"],
        answer: "Mohammed Rafi"
    },
    {
        question: "Who is known for his contribution to Hindustani classical music and the 'Kirana gharana'?",
        options: ["Pandit Jasraj", "Ustad Bismillah Khan", "Pandit Bhimsen Joshi", "Ustad Amjad Ali Khan"],
        answer: "Pandit Jasraj"
    },
    {
        question: "Which Indian singer composed the music for the song 'Vande Mataram' in the film 'Kabhi Khushi Kabhie Gham'?",
        options: ["Shankar Mahadevan", "Sonu Nigam", "Kailash Kher", "A. R. Rahman"],
        answer: "A. R. Rahman"
    },
    {
        question: "Which Indian playback singer is known for her versatility and has sung in various Indian languages?",
        options: ["Asha Bhosle", "Shreya Ghoshal", "Alka Yagnik", "Sunidhi Chauhan"],
        answer: "Shreya Ghoshal"
    },
    {
        question: "Which Indian musician is known for his unique contributions to the fusion of Indian classical music with jazz?",
        options: ["Trilok Gurtu", "Zakir Hussain", "L. Subramaniam", "Ravi Shankar"],
        answer: "Trilok Gurtu"
    }
];




let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

// Function to load question and options
function loadQuestion() {
    const q = quizData[currentQuestion];
    questionElement.textContent = q.question;

    // Clear previous options
    optionsElement.innerHTML = "";

    // Display options
    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        optionsElement.appendChild(button);

        // Add event listener for option buttons
        button.addEventListener("click", () => {
            const selectedAnswer = option;
            checkAnswer(selectedAnswer);
        });
    });
}

// Function to check selected answer
function checkAnswer(answer) {
    const q = quizData[currentQuestion];
    if (answer === q.answer) {
        score++;
    }

    // Disable all option buttons after selecting an answer
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    // Show next button after selecting an answer
    nextButton.style.display = "inline-block";
}

// Event listener for next button
nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextButton.style.display = "none"; // Hide next button
    } else {
        showResult();
    }
});

// Function to display quiz result
function showResult() {
    quiz.style.display = "none";
    resultElement.style.display = "block";
    scoreElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
    console.log(score)
}

// Start quiz
loadQuestion();


// // quiz form
function suggestSong() {
    // Retrieve selected values from the form
    let genre = document.getElementById("genre").value;
    let mood = document.querySelector('input[name="mood"]:checked').value;
    let tempo = document.querySelector('input[name="tempo"]:checked').value;

    // Perform logic to suggest a song based on preferences
    let suggestedSong = "";

    // Example suggestions based on genre, mood, and tempo
    if (genre === "pop") {
        if (mood === "happy" && tempo === "medium") {
            suggestedSong = "Happy by Pharrell Williams";
        } else if (mood === "sad" && tempo === "slow") {
            suggestedSong = "Someone Like You by Adele";
        } else if (mood === "energetic" && tempo === "fast") {
            suggestedSong = "Uptown Funk by Mark Ronson ft. Bruno Mars";
        }
    } else if (genre === "rock") {
        // Add more suggestions for rock genre
        if (mood === "happy" && tempo === "medium") {
            suggestedSong = "Don't Stop Believin' by Journey";
        } else if (mood === "sad" && tempo === "slow") {
            suggestedSong = "Stairway to Heaven by Led Zeppelin";
        } else if (mood === "energetic" && tempo === "fast") {
            suggestedSong = "Back in Black by AC/DC";
        }
    }
    // Add more conditions for other genres

    // Display the result
    let resultDiv = document.getElementById("formresult");
    resultDiv.innerHTML = "We suggest: <br><br>" + suggestedSong;
}
