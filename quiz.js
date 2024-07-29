
const quizData = [
    {
        question: "Who is known as the King of Pop?",
        options: ["Michael Jackson", "Elvis Presley", "Prince", "Justin Timberlake"],
        answer: "Michael Jackson"
    },
    {
        question: "What instrument did Louis Armstrong famously play?",
        options: ["Trumpet", "Saxophone", "Piano", "Guitar"],
        answer: "Trumpet"
    },
    {
        question: 'Which band performed the song "Bohemian Rhapsody"?',
        options: ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
        answer: "Queen"
    },
    {
        question: "Who is the lead singer of the band U2?",
        options: ["Bono", "Bruce Springsteen", "Mick Jagger", "Freddie Mercury"],
        answer: "Bono"
    },
    // {
    //     question: "What city is known as the birthplace of jazz?",
    //     options: ["New York City", "Chicago", "Los Angeles", "New Orleans"],
    //     answer: "New Orleans"
    // },
    // {
    //     question: "Who is known as the King of Pop?",
    //     answer: "Michael Jackson",
    //     options: ["Michael Jackson", "Prince", "Elvis Presley", "Stevie Wonder"]
    // },
    // {
    //     question: "What instrument did Louis Armstrong famously play?",
    //     answer: "Trumpet",
    //     options: ["Trumpet", "Saxophone", "Clarinet", "Trombone"]
    // },
    // {
    //     question: 'Which band performed the song "Bohemian Rhapsody"?',
    //     answer: "Queen",
    //     options: ["Queen", "The Beatles", "The Rolling Stones", "Pink Floyd"]
    // },
    // {
    //     question: "Who is the lead singer of the band U2?",
    //     answer: "Bono",
    //     options: ["Bono", "Sting", "Bruce Springsteen", "Mick Jagger"]
    // },
    // {
    //     question: "What city is known as the birthplace of jazz?",
    //     answer: "New Orleans",
    //     options: ["New Orleans", "Chicago", "Memphis", "Los Angeles"]
    // },
    // {
    //     question: 'Which classical composer wrote "The Four Seasons"?',
    //     answer: "Antonio Vivaldi",
    //     options: ["Antonio Vivaldi", "Johann Sebastian Bach", "Ludwig van Beethoven", "Franz Schubert"]
    // },
    // {
    //     question: "What is the official national instrument of Japan?",
    //     answer: "Koto",
    //     options: ["Koto", "Shamisen", "Taiko drum", "Shakuhachi"]
    // },
    // {
    //     question: 'Which rock band recorded the album "Dark Side of the Moon"?',
    //     answer: "Pink Floyd",
    //     options: ["Pink Floyd", "The Rolling Stones", "Led Zeppelin", "The Who"]
    // },
    // {
    //     question: "Who is the best-selling female artist of all time?",
    //     answer: "Madonna",
    //     options: ["Madonna", "Whitney Houston", "Celine Dion", "Taylor Swift"]
    // },
    // {
    //     question: 'Which famous rapper\'s real name is Marshall Bruce Mathers III?',
    //     answer: "Eminem",
    //     options: ["Eminem", "Kanye West", "Jay-Z", "Snoop Dogg"]
    // },
    // {
    //     question: "Who was the first woman to be inducted into the Rock and Roll Hall of Fame?",
    //     answer: "Aretha Franklin",
    //     options: ["Aretha Franklin", "Tina Turner", "Janis Joplin", "Diana Ross"]
    // },
    // {
    //     question: 'What year did The Beatles release their album "Abbey Road"?',
    //     answer: "1969",
    //     options: ["1969", "1970", "1967", "1971"]
    // },
    // {
    //     question: 'Who composed the famous opera "The Magic Flute"?',
    //     answer: "Wolfgang Amadeus Mozart",
    //     options: ["Wolfgang Amadeus Mozart", "Giuseppe Verdi", "Richard Wagner", "Johann Strauss II"]
    // },
    // {
    //     question: 'What is the name of the guitarist known for his "signature" guitar model with Fender?',
    //     answer: "Eric Clapton",
    //     options: ["Eric Clapton", "Jimi Hendrix", "Jimmy Page", "Carlos Santana"]
    // },
    // {
    //     question: "Which famous composer was deaf during most of his career?",
    //     answer: "Ludwig van Beethoven",
    //     options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert", "Johannes Brahms"]
    // },
    // {
    //     question: "What is the name of the music festival held annually in the Nevada desert?",
    //     answer: "Burning Man",
    //     options: ["Burning Man", "Coachella", "Glastonbury", "Lollapalooza"]
    // },
    // {
    //     question: 'Which famous band is known for their hit song "Stairway to Heaven"?',
    //     answer: "Led Zeppelin",
    //     options: ["Led Zeppelin", "The Rolling Stones", "The Who", "Pink Floyd"]
    // },
    // {
    //     question: "Who won the first season of American Idol?",
    //     answer: "Kelly Clarkson",
    //     options: ["Kelly Clarkson", "Carrie Underwood", "Adam Lambert", "Jennifer Hudson"]
    // },
    // {
    //     question: "What instrument did Jimi Hendrix famously play?",
    //     answer: "Electric guitar",
    //     options: ["Electric guitar", "Bass guitar", "Acoustic guitar", "Drums"]
    // },
    // {
    //     question: 'Which famous composer wrote the symphony "Eine kleine Nachtmusik"?',
    //     answer: "Wolfgang Amadeus Mozart",
    //     options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Franz Joseph Haydn", "Johannes Brahms"]
    // }
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
