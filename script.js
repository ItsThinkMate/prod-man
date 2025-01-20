const questions = [
    {
        question: "What is the primary goal of a Minimum Viable Product (MVP)?",
        options: [
            "To ensure a fully-featured product is released",
            "To gather maximum validated learning about customers with minimal effort",
            "To generate maximum revenue in the first month of launch",
            "To reduce development costs by 50%"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of these is an example of a North Star Metric?",
        options: [
            "Number of customer complaints",
            "Daily Active Users (DAUs)",
            "Net Promoter Score (NPS)",
            "Monthly team meetings"
        ],
        correctAnswer: 1
    },
    {
        question: "In Agile methodology, what is a 'sprint'?",
        options: [
            "A backlog of all planned tasks for the product",
            "A short, time-boxed period to complete specific work",
            "A demo of the completed product to stakeholders",
            "A detailed product requirement document"
        ],
        correctAnswer: 1
    },
    {
        question: "Which metric is used to measure customer retention?",
        options: [
            "Churn rate",
            "Conversion rate",
            "Bounce rate",
            "Revenue growth"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of a Product Requirements Document (PRD)?",
        options: [
            "To describe business goals and user needs for the development team",
            "To track project budgets and timelines",
            "To provide user training guides",
            "To set marketing KPIs"
        ],
        correctAnswer: 0
    },
    {
        question: "What does RICE stand for in prioritization frameworks?",
        options: [
            "Risks, Impact, Costs, Effort",
            "Reach, Impact, Confidence, Effort",
            "Revenue, Importance, Customer Feedback, Engagement",
            "Retention, Innovation, Costs, Experience"
        ],
        correctAnswer: 1
    },
    {
        question: "What is 'A/B testing'?",
        options: [
            "Testing two different products in the market",
            "Comparing two variations of a feature to determine which performs better",
            "Comparing sales performance between two business units",
            "Testing the scalability of a product"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a 'user story'?",
        options: [
            "A fictional narrative about a target customer",
            "A short description of a feature from the end user’s perspective",
            "A case study of a competitor’s user experience",
            "A report of product performance"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a lagging indicator?",
        options: [
            "Customer churn rate",
            "Number of onboarding sessions",
            "Number of users visiting the homepage",
            "Conversion funnel drop-off rate"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the Kano Model used for?",
        options: [
            "To prioritize product features based on customer delight",
            "To determine the product-market fit",
            "To manage project timelines",
            "To calculate product profitability"
        ],
        correctAnswer: 0
    },
    {
        question: "In the context of the Lean Startup methodology, what does 'pivot' mean?",
        options: [
            "Launching a new product",
            "Fundamentally changing the product strategy based on user feedback",
            "Increasing marketing budget to drive growth",
            "Expanding into new geographic markets"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary responsibility of a product manager?",
        options: [
            "Writing code for the product",
            "Designing the user interface",
            "Defining the product vision and aligning stakeholders",
            "Managing customer support tickets"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the primary purpose of a Go-to-Market (GTM) strategy?",
        options: [
            "To plan marketing campaigns",
            "To outline how a product will be launched and gain market share",
            "To determine product pricing",
            "To optimize operational efficiency"
        ],
        correctAnswer: 1
    },
    {
        question: "What does CAC stand for?",
        options: [
            "Customer Acquisition Cost",
            "Cost Analysis Cycle",
            "Customer Attrition Count",
            "Critical Alignment Curve"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these tools is primarily used for creating wireframes and mockups?",
        options: [
            "Jira",
            "Figma",
            "SQL",
            "Power BI"
        ],
        correctAnswer: 1
    },
    {
        question: "What is 'user onboarding'?",
        options: [
            "The process of collecting user feedback after they use the product",
            "The process of guiding new users to successfully adopt the product",
            "Setting up servers for user registration",
            "Adding new users to the product development team"
        ],
        correctAnswer: 1
    },
    {
        question: "Which metric measures the profitability of a customer over time?",
        options: [
            "Customer Lifetime Value (CLV)",
            "Net Promoter Score (NPS)",
            "Average Revenue Per User (ARPU)",
            "Customer Satisfaction Score (CSAT)"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a roadmap in product management?",
        options: [
            "A timeline for completing sprints",
            "A visual plan aligning stakeholders on the product's strategic direction",
            "A checklist of features for product launch",
            "A customer feedback report"
        ],
        correctAnswer: 1
    },
    {
        question: "What does 'market segmentation' refer to?",
        options: [
            "Dividing a market into distinct subsets based on shared characteristics",
            "Launching the same product in different regions",
            "Analyzing competitors’ product features",
            "Creating a pricing strategy"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of these is an example of a leading indicator?",
        options: [
            "Number of product demos completed",
            "Monthly recurring revenue (MRR)",
            "Customer churn rate",
            "Net revenue growth"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the primary purpose of customer personas?",
        options: [
            "To create marketing campaigns for specific demographics",
            "To represent fictional users based on research to guide product decisions",
            "To organize customer feedback into structured reports",
            "To develop pricing strategies"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of a competitive analysis in product management?",
        options: [
            "To monitor pricing trends in the industry",
            "To identify strengths and weaknesses of competitors to inform product strategy",
            "To calculate the cost of product development",
            "To measure customer satisfaction against competitors"
        ],
        correctAnswer: 1
    },
    {
        question: "What does OKR stand for in product management?",
        options: [
            "Operational Key Requirements",
            "Objectives and Key Results",
            "Ongoing Key Responsibilities",
            "Outcome Key Review"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the Jobs-to-Be-Done (JTBD) framework?",
        options: [
            "A list of tasks assigned to the product team",
            "A method to identify why customers hire a product to accomplish a specific job",
            "A timeline for sprint planning",
            "A checklist for development milestones"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT typically included in a PRD?",
        options: [
            "Feature descriptions",
            "Technical specifications",
            "Marketing campaign plans",
            "User personas"
        ],
        correctAnswer: 2
    },
    {
        question: "What is a “burn down chart” used for in Agile?",
        options: [
            "Tracking project budgets",
            "Monitoring team productivity",
            "Visualizing work completed versus remaining during a sprint",
            "Organizing tasks in priority order"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of these is an example of qualitative user research?",
        options: [
            "Analyzing click-through rates",
            "Conducting customer interviews",
            "Measuring conversion rates",
            "Calculating Net Promoter Score (NPS)"
        ],
        correctAnswer: 1
    },
    {
        question: "What is 'product-market fit'?",
        options: [
            "The stage when the product has minimal bugs",
            "When the product satisfies strong market demand and retains customers",
            "When the product’s cost is lower than competitors",
            "When the product has maximum features compared to alternatives"
        ],
        correctAnswer: 1
    },
    {
        question: "Which prioritization framework uses a 2x2 matrix to assess urgency and importance?",
        options: [
            "RICE",
            "MoSCoW",
            "Eisenhower Matrix",
            "Kano Model"
        ],
        correctAnswer: 2
    },
    {
        question: "What does 'churn rate' measure?",
        options: [
            "The percentage of customers lost over a specific period",
            "The growth rate of new customer acquisitions",
            "The number of issues reported by users",
            "The rate of product updates deployed"
        ],
        correctAnswer: 0
    },
    {
        question: "In which Agile ceremony does the team discuss what went well and what can be improved?",
        options: [
            "Sprint Planning",
            "Daily Stand-up",
            "Sprint Retrospective",
            "Sprint Review"
        ],
        correctAnswer: 2
    },
    {
        question: "Which metric is commonly used to measure user engagement?",
        options: [
            "Bounce rate",
            "Session duration",
            "Churn rate",
            "Cost per acquisition"
        ],
        correctAnswer: 1
    },
    {
        question: "What is MoSCoW in product management?",
        options: [
            "A prioritization technique categorizing features into Must, Should, Could, and Won’t have",
            "A method for planning sprints",
            "A roadmap visualization tool",
            "A customer segmentation strategy"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the HEART framework used for?",
        options: [
            "Designing UI layouts",
            "Measuring user happiness and experience",
            "Building customer personas",
            "Structuring product roadmaps"
        ],
        correctAnswer: 1
    },
    {
        question: "What is an API in the context of product development?",
        options: [
            "Application Programming Interface",
            "Automated Product Integration",
            "Application Product Insights",
            "Agile Product Interaction"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is an example of a lagging metric?",
        options: [
            "Monthly recurring revenue (MRR)",
            "User onboarding completion rate",
            "Percentage of users completing a sign-up flow",
            "Click-through rates"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the focus of usability testing?",
        options: [
            "Identifying bugs in the code",
            "Evaluating how easily users can navigate and interact with the product",
            "Measuring system performance",
            "Testing integrations between APIs"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of a product backlog?",
        options: [
            "To organize features and tasks to be completed, prioritized by importance",
            "To track bugs in the product",
            "To list technical specifications",
            "To manage customer service issues"
        ],
        correctAnswer: 0
    },
    {
        question: "What does 'customer journey mapping' help with?",
        options: [
            "Tracking customer locations during product use",
            "Visualizing the end-to-end user experience with a product",
            "Designing a pricing model",
            "Identifying competitors in the market"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a 'feature toggle' used for in product development?",
        options: [
            "To track user behavior on a feature",
            "To enable or disable features without deploying new code",
            "To compare two features in A/B testing",
            "To prioritize development efforts"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a leading metric?",
        options: [
            "Customer retention rate",
            "Weekly sign-up rate",
            "Gross revenue",
            "Monthly churn rate"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a 'product discovery' phase?",
        options: [
            "Identifying bugs in the product",
            "Understanding customer problems and exploring potential solutions",
            "Finalizing technical specifications",
            "Conducting competitive analysis"
        ],
        correctAnswer: 1
    },
    {
        question: "What does 'time-to-market' (TTM) measure?",
        options: [
            "Time taken to develop the product",
            "The duration from product conception to launch",
            "Time required for marketing campaigns",
            "Time spent in customer onboarding"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a cohort analysis?",
        options: [
            "Analyzing metrics across customer segments who share a common characteristic",
            "Comparing competitor product performance",
            "Studying the financial performance of a product",
            "Measuring individual user actions"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of a wireframe?",
        options: [
            "To develop a fully interactive prototype",
            "To create a low-fidelity visual representation of a product's layout",
            "To track user interactions",
            "To write product specifications"
        ],
        correctAnswer: 1
    },
    {
        question: "Which tool is commonly used for task management in Agile teams?",
        options: [
            "Tableau",
            "Jira",
            "Figma",
            "Google Analytics"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a 'delight feature' according to the Kano Model?",
        options: [
            "A feature that users expect as standard",
            "A feature that exceeds customer expectations and creates delight",
            "A feature that prevents churn",
            "A feature that drives immediate purchases"
        ],
        correctAnswer: 1
    },
    {
        question: "What is 'scope creep'?",
        options: [
            "Adding features to a project beyond its initial scope without proper control",
            "Tracking changes in project requirements",
            "Optimizing the product roadmap",
            "Monitoring feature performance"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a 'customer feedback loop'?",
        options: [
            "A recurring survey sent to customers",
            "A process to collect, analyze, and act on customer feedback to improve the product",
            "A method to track churn rates",
            "A pricing model"
        ],
        correctAnswer: 1
    },
    {
        question: "What does 'success metric' refer to in product management?",
        options: [
            "The profit margin of a product",
            "A measurable indicator of whether a product or feature achieves its objectives",
            "The user growth rate",
            "The satisfaction score in a survey"
        ],
        correctAnswer: 1
    }
];

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
    const question = questions[currentQuestionIndex];
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

function submitAnswer() {
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

    // After 1.5 seconds, move to the next question or end the quiz
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => {
            showQuestion();
        }, 2500);    
        
    } else {
        displayFinalScore();
    }
}

function showResult(isCorrect, correctIndex) {
    resultElement.className = 'result-display';
    resultElement.innerText = isCorrect 
        ? "Correct!"
        : `Wrong! The correct answer was: ${questions[currentQuestionIndex].options[correctIndex]}`;
    
    // Add a class to style the result (correct/incorrect)
    resultElement.classList.add(isCorrect ? 'correct' : 'incorrect');

    resultContainer.classList.remove('hidden');  // Show result

    // Wait 1.5 seconds before hiding result and moving to the next question
    setTimeout(() => {
        resultContainer.classList.add('hidden');  // Hide result after delay
        questionContainer.classList.remove('hidden');  // Show next question
    }, isCorrect ? 1500 : 2500);  // 1.5 seconds delay
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

// Start the quiz when the page loads
shuffleQuestions();
startQuiz();
