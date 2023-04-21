const start_quiz = document.querySelector(".start_quiz");
const start_btn = document.querySelector(".start_quiz");
const quiz_box = document.querySelector(".quiz_box");
const que_text = document.getElementById("que_text");
const options_val = document.querySelector(".options");
const next_btn = document.querySelector(".next_btn");
const quiz_footer = document.querySelector(".quiz_footer");
const footer_left = document.querySelector(".footer_left");
const que_total = document.getElementById("que_total");
const que_count = document.getElementById("que_count");
const result_box = document.querySelector(".result_box");
const total_que = document.querySelector(".total_que");
const right_ans = document.querySelector(".right_ans");
const wrong_ans = document.querySelector(".wrong_ans");
const percentage = document.querySelector(".percentage");
const again_quiz = document.querySelector(".again_quiz");
const exit = document.querySelector(".exit");
const mark_wrong = `<i class="fa-sharp fa-solid fa-circle-xmark wrong"></i>`;
const mark_check = `<i class="fa-solid fa-circle-check"></i>`;


start_btn.onclick = () => {
    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive")
}

// footer left part
que_total.innerText = questions.length;
// ************************************************************************************//
let que_index = 0;
var right_answers = 0;
var wrong_answers = 0;
que_count.innerText = que_index + 1;
showQuestion(que_index)

function showQuestion(que_index) {
    que_text.innerText = `${questions[que_index].num}. ${questions[que_index].question}`;
    let option_statement = "";
    for (let i = 0; i < questions[que_index].options.length; i++) {
        option_statement += `<div class="option"> ${questions[que_index].options[i]} </div>`
    }
    options_val.innerHTML = option_statement;
    let all_options = options_val.querySelectorAll(".option");
    for (let i = 0; i < all_options.length; i++) {
        all_options[i].setAttribute("onclick", "userAnswer(this)")
    }
    next_btn.classList.add("inactive")
}



// next button
next_btn.onclick = () => {
    que_index++;
    if (questions.length > que_index) {
        que_count.innerText = que_index + 1;
        showQuestion(que_index)
    } else {
        console.log("Questions complete");
        quiz_box.classList.add("inactive")
        result_box.classList.remove("inactive")
        right_ans.innerText = `Right Answers: ${right_answers}`
        wrong_ans.innerText = `Wrong Answers: ${wrong_answers}`
        percentage.innerText = `Percentage: ${right_answers * 100 / questions.length}%`
    }
    if (questions.length - 1 == que_index) {
        next_btn.innerText = "Finish"
    }
}


// userAnswer function
function userAnswer(answer) {
    let userAns = answer.innerText;
    let correctAns = questions[que_index].answer;
    console.log(userAns)
    next_btn.classList.remove("inactive")
    let all_options2 = options_val.querySelectorAll(".option");
    console.log(correctAns)
    if (userAns == correctAns) {
        answer.classList.add("correct")
        answer.insertAdjacentHTML("beforeend", mark_check);
        right_answers++
    } else {
        console.log("wrong Answer")
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", mark_wrong)
        wrong_answers++;



        for (let i = 0; i < all_options2.length; i++) {
            if (all_options2[i].innerText == correctAns) {
                all_options2[i].classList.add("correct")
                all_options2[i].insertAdjacentHTML("beforeend", mark_check)
            }
        }
    }

    for (let i = 0; i < all_options2.length; i++) {
        all_options2[i].classList.add("disable")
    }
}


// 3rd box or result box
total_que.innerText = `Total Questions: ${questions.length}`


// result box footer
again_quiz.onclick = () => {
    quiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    que_index = 0;
    right_answers = 0;
    wrong_answers = 0;
    que_count.innerText = que_index + 1;
    showQuestion(que_index)
}

exit.onclick = () => {
    start_quiz.classList.remove("inactive");
    result_box.classList.add("inactive");
    que_index = 0;
    right_answers = 0;
    wrong_answers = 0;
    que_count.innerText = que_index + 1;
    showQuestion(que_index)
}