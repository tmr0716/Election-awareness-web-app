const quiz = [
    {
        question: "Minimum voting age in India?",
        options: ["18", "21", "25"],
        answer: 0
    },
    {
        question: "Which body conducts elections in India?",
        options: ["Supreme Court", "Election Commission", "Parliament"],
        answer: 1
    },
    {
        question: "What is NOT allowed during elections?",
        options: ["Voting", "Bribery", "Campaigning"],
        answer: 1
    },
    {
        question: "What does EVM stand for?",
        options: ["Electronic Voting Machine", "Election Vote Method", "Electronic Vote Manager"],
        answer: 0
    },
    {
        question: "Is voting a right or duty?",
        options: ["Only right", "Only duty", "Both"],
        answer: 2
    }
];
let currentQ = 0;
let score = 0;
function loadQuestion() {
    let q = quiz[currentQ];
    document.getElementById("question").innerText = q.question;

    let buttons = document.querySelectorAll(".option");
    buttons.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}
function checkAnswer(selected) {
    if (selected === quiz[currentQ].answer) {
        score++;
        document.getElementById("result").innerText = "✅ Correct!";
    } else {
        document.getElementById("result").innerText = "❌ Wrong!";
    }
    currentQ++;
    setTimeout(() => {
        document.getElementById("result").innerText = "";
        
        if (currentQ < quiz.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz-box").innerHTML =
                `<h2>Your Score: ${score}/${quiz.length}</h2>`;
        }
    }, 1000);
}
window.onload = loadQuestion;
