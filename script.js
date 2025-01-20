let questions = []; // Initialize an empty array to hold questions

async function fetchQuestions() {
    try {
        const response = await fetch('/questions.json'); // Ensure this path is correct in production
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        questions = await response.json(); // Store fetched questions in the variable
        console.log("Fetched Questions:", questions); // Log the fetched questions
        shuffleQuestions(); // Shuffle questions after fetching
        startQuiz(); // Start the quiz after fetching questions
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        alert("Failed to load questions. Please try again later.");
    }
}

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 60;
let timeLeft = timeLimit;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const progressDisplay = document.getElementById('progress');
const timerDisplay = document.getElementById('timer');

submitButton.addEventListener('click', submitAnswer);

function startQuiz() {
    resetQuiz();
    showQuestion();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = `Score: ${score}`;
    updateProgress();
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
}

function startTimer() {
    clearInterval(timer);  // Clear any existing timer to prevent overlaps
    timeLeft = timeLimit;  // Reset the timer to the initial time
    updateTimerDisplay();  // Update the timer display with the new value

    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer); // Stop the timer when it reaches 0
            alert("Time's up! You can still answer, but no points will be awarded.");
            updateTimerDisplay(); // Update the display to show 0s
        }
        updateTimerDisplay(); // Update the timer display each second
    }, 1000);
}


function updateTimerDisplay() {
    timerDisplay.innerText = `Time Left: ${timeLeft}s`;
}

function showQuestion() {
    console.log("Showing question for index:", currentQuestionIndex); // Log current question index
    const question = questions[currentQuestionIndex];
    if (!question) {
        console.error("No question found for index:", currentQuestionIndex);
        return; // Exit the function if no question is found
    }
    console.log("Current Question:", question); // Log the current question details
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.onclick = () => selectOption(button, index);
        optionsElement.appendChild(button);
    });

    startTimer();
    updateProgress();
}

function selectOption(button, index) {
    Array.from(optionsElement.children).forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

let isTransitioning = false; // Flag to prevent multiple submissions

function submitAnswer() {
    if (isTransitioning) {
        return; // Ignore submission if already transitioning
    }

    const selectedIndex = Array.from(optionsElement.children).findIndex(option => option.classList.contains('selected'));

    if (selectedIndex === -1) {
        alert("Please select an option before submitting.");
        return;
    }

    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    if (selectedIndex === correctIndex && timeLeft > 0) {
        score++;
        scoreDisplay.innerText = `Score: ${score}`;
    }

    showResult(selectedIndex === correctIndex, correctIndex);
    clearInterval(timer);  // Clear the timer before moving to the next question

    // Disable the submit button
    submitButton.disabled = true;
    isTransitioning = true; // Set the flag to true

    // After 2.5 seconds, move to the next question or end the quiz
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            displayFinalScore();
        }
        // Re-enable the submit button
        submitButton.disabled = false;
        isTransitioning = false; // Reset the flag
    }, 2500);  
}

function showResult(isCorrect, correctIndex) {
    resultElement.className = 'result-display';
    resultElement.innerText = isCorrect 
        ? "Correct!"
        : `Wrong! The correct answer was: ${questions[currentQuestionIndex].options[correctIndex]}`;
    
    // Add a class to style the result (correct/incorrect)
    resultElement.classList.add(isCorrect ? 'correct' : 'incorrect');

    resultContainer.classList.remove('hidden');  // Show result

    // Wait 2.5 seconds before hiding result and moving to the next question
    setTimeout(() => {
        resultContainer.classList.add('hidden');  // Hide result after delay
        questionContainer.classList.remove('hidden');  // Show next question
    }, isCorrect ? 1500 : 2500);  // 2.5 seconds delay
}

function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressDisplay.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function displayFinalScore() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultElement.className = 'result-display';
    resultElement.innerText = `Quiz Completed! Your final score is ${score} / ${questions.length}`;
}

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Call the function to fetch questions when needed
fetchQuestions();
