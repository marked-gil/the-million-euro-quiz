// QUESTION CATEGORIES <-- [Start]
let easyQuestions = [
    {
        id: 1,
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        wrongAnswers: ["Italy", "Cannes", "Marseille"]
	},
    {
        id: 2,
        question: "Which Queen of Pop was married to Guy Ritchie and Sean Penn?",
        correctAnswer: "Madonna",
        wrongAnswers: ["Celine Dion", "Mariah Carey", "Cher"]
	},
    {
        id: 3,
        question: "What brand is also known as the Golden Arches?",
        correctAnswer: "McDonalds",
        wrongAnswers: ["KFC", "Kenny Rogers", "Subway"]
	},
    {
        id: 4,
        question: "Often described as the longest river on earth, on which continent would you find the Nile?",
        correctAnswer: "Africa",
        wrongAnswers: ["Asia", "Europe", "North America"]
	},
    {
        id: 5,
        question: "What elements make up water?",
        correctAnswer: "oxygen and hydrogen",
        wrongAnswers: ["oxygen and nitrogen", "oxygen and carbon", "oxygen and sodium"]
	},
    {
        id: 6,
        question: "Which scientist came up with the theory of E=MC2?",
        correctAnswer: "Albert Einstein",
        wrongAnswers: ["Isaac Newton", "Marie Curie", "Stephen Hawking"]
	},
    {
        id: 7,
        question: "What animal is Pumbaa in the Lion King?",
        correctAnswer: "warthog",
        wrongAnswers: ["tiger", "meerkat", "mandrill"]
	},
    {
        id: 8,
        question: "How many cards are there in a pack of cards (excluding jokers)?",
        correctAnswer: "52",
        wrongAnswers: ["32", "60", "50"]
	},
    {
        id: 9,
        question: "What bird is famous for being pink?",
        correctAnswer: "flamingo",
        wrongAnswers: ["turaco", "southern cassowary", "bar-throated minla"]
	},
    {
        id: 10,
        question: "What planet is closest to the sun? ",
        correctAnswer: "Mercury",
        wrongAnswers: ["Saturn", "Venus", "Pluto"]
	},
];

let moderateQuestions = [
    {
        id: 11,
        question: "Which British King famously had six wives?",
        correctAnswer: "Henry VIII",
        wrongAnswers: ["George VI", "George V", "William IV"]
	},
    {
        id: 12,
        question: "Conquering much of China and central Asia, uniting the wandering tribes and even responsible for creating one of the first international postal systems, who led the Mongols?",
        correctAnswer: "Genghis Khan",
        wrongAnswers: ["Kublai Khan", "The Bogd Khan", "Kaidu"]
	},
    {
        id: 13,
        question: "Which German classical composer and pianist, was the film Immortal Beloved about?",
        correctAnswer: "Ludwig van Beethoven",
        wrongAnswers: ["Mozart", "Johannes Brahms", "Felix Mendelssohn"]
	},
    {
        id: 14,
        question: "In which country would you find Angel Falls, the highest waterfall on earth?",
        correctAnswer: "Venezuela",
        wrongAnswers: ["Mexico", "Canada", "Brazil"]
	},
    {
        id: 15,
        question: "The gaseous elements helium, neon, argon, krypton, xenon, and radon are better known as what?",
        correctAnswer: "noble gases",
        wrongAnswers: ["halogens", "simple gases", "liquified gases"]
	},
    {
        id: 16,
        question: "What is the name of Saturn’s largest moon?",
        correctAnswer: "Titan",
        wrongAnswers: ["Enceladus", "Mimas", "Rhea"]
	},
    {
        id: 17,
        question: "What character has both Robert Downey Jr. and Benedict Cumberbatch played?",
        correctAnswer: "Sherlock Holmes",
        wrongAnswers: ["'Mad' Max Rockatansky", "Charles Spencer Chaplin", "Alan Turing"]
	},
    {
        id: 18,
        question: "What country drinks the most coffee per person?",
        correctAnswer: "Finland",
        wrongAnswers: ["USA", "Canada", "Denmark"]
	},
    {
        id: 19,
        question: "What company was initially known as 'Blue Ribbon Sports'?",
        correctAnswer: "Nike",
        wrongAnswers: ["Addidas", "Puma", "Reebok"]
	},
    {
        id: 20,
        question: "What are the colours of the Olympic Rings?",
        correctAnswer: "red, green, black, blue and yellow",
        wrongAnswers: ["green, yellow, violet, blue, white", "yellow, red, brown, blue, green", "black, orange, yellow, green, red"]
	},
];

let hardQuestions = [
    {
        id: 21,
        question: "Aureolin is a shade of what colour?",
        correctAnswer: "yellow",
        wrongAnswers: ["pink", "orange", "blue"]
	},
    {
        id: 22,
        question: "In what country is the Chernobyl nuclear plant located?",
        correctAnswer: "Ukraine",
        wrongAnswers: ["Austria", "Norway", "Poland"]
	},
    {
        id: 23,
        question: "How many dots appear on a pair of dice?",
        correctAnswer: "42",
        wrongAnswers: ["21", "52", "32"]
	},
    {
        id: 24,
        question: "What country has the only national flag that does not have four sides?",
        correctAnswer: "Nepal",
        wrongAnswers: ["Luxembourg", "Taiwan", "Tuvalu"]
	},
    {
        id: 25,
        question: "What sporting event has a strict dress code of almost entirely white?",
        correctAnswer: "Wimbledon",
        wrongAnswers: ["Tour de France", "Royal Ascot", "US Masters Tournament"]
	},
    {
        id: 26,
        question: "How many minutes are in a full week?",
        correctAnswer: "10,080 minutes",
        wrongAnswers: ["20,160 minutes", "43,800 minutes", "7,200 minutes"]
	},
    {
        id: 27,
        question: "In what capital would you find The Little Mermaid statue?",
        correctAnswer: "Copenhagen",
        wrongAnswers: ["Vienna", "Helsinki", "Athens"]
	},
    {
        id: 28,
        question: "What is Cynophobia the fear of?",
        correctAnswer: "dogs",
        wrongAnswers: ["cats", "computers", "accidents"]
	},
    {
        id: 29,
        question: "Unix Time is defined as the number of seconds that have elapsed since when?",
        correctAnswer: "midnight of January 1, 1970",
        wrongAnswers: ["midnight of January 1, 1987", "noontime of January 1, 1970", "noontime of January 1, 1987"]
	},
    {
        id: 30,
        question: "Who first coined the term 'battery' to describe an electrical storage device?",
        correctAnswer: "Benjamin Franklin",
        wrongAnswers: ["Henry Ford", "Michael Faraday", "Albert Einstein"]
	},
];

let hardestQuestions = [
    {
        id: 31,
        question: "What is a group of pandas known as?",
        correctAnswer: "an embarassment",
        wrongAnswers: ["a shrewdness", "a murder", "a convocation"]
	},
    {
        id: 32,
        question: "How long is an elephant pregnant before it gives birth?",
        correctAnswer: "22 months",
        wrongAnswers: ["9 months", "12 months", "16 months"]
	},
    {
        id: 33,
        question: "The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?",
        correctAnswer: "Smallpox",
        wrongAnswers: ["Yellow Fever", "Poliomyelitis", "Tuberculosis"]
	},
    {
        id: 34,
        question: "Who is the only musician ever to have been awarded the Nobel prize for literature?",
        correctAnswer: "Bob Dylan",
        wrongAnswers: ["Jimi Hendrix", "Elton John", "Stevie Wonder"]
	},
];
// QUESTION CATEGORIES <-- [End]

// HOME PAGE <-- [Start]
if (document.getElementById('homepage-body')) {
    // variables to access the DOM elements
    const howToPlayBtn = document.getElementById('howtoplay-btn-homepage');
    const enterNameSection = document.getElementById('username-outer-wrapper');
    const closeUsernameIcon= document.getElementById('close-username');
    const usernameInput = document.getElementById('username');
    const playBtn = document.getElementById('play-button');
    const flashMsg = document.getElementById('username-feedback');

    // displays 'Enter Username' lightbox
    playBtn.addEventListener('click', () => {
        enterNameSection.classList.remove('hide');
        enterNameSection.classList.add('overlay-bg');
    });

	// feedback for usernames >12 characters
    usernameInput.addEventListener('input', (e) => {
        if (e.target.value.length === 12) {
            flashMsg.innerHTML = "Your name can only have a maximum of 12 characters.";
        }
    });

    // closes 'Enter Username' lightbox
    closeUsernameIcon.addEventListener('click', () => {
        flashMsg.innerHTML = "";
        enterNameSection.classList.add('hide');
        enterNameSection.classList.remove('overlay-bg');
    });

    // displays 'How to Play' lightbox
    howToPlayBtn.addEventListener('click', () => {
        howToPlayLightbox();
    });
    
    const userNameSubmit = document.getElementById('username-btn');
    userNameSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        if (captureUserName()) {
            location.href = 'game-page.html';
        } else {
            flashMsg.innerHTML = "You need to enter your name.";
        }
    }); 
}
// HOME PAGE <-- [End]

// GAME PAGE <-- [Start]
// variables to access 'Game Area' DOM elements
const playerNameHolder = document.getElementById('player-name');
const moneyEarned = document.getElementById('money-earned');
const questionText = document.getElementById('question-text');
const optionButtonsList = document.getElementsByClassName('answer-button');
const questionNumber = document.getElementById('question-number');
const timerValue = document.getElementById('timer-value');
const lifelineRemoveOne = document.querySelector('[data-lifeline="remove-one-option"]');
const lifelineRemoveTwo = document.querySelector('[data-lifeline="remove-two-options"]');
const lifelineAddToTimer = document.querySelector('[data-lifeline="add-to-timer"]');
const optionButtonA = document.getElementById('answer-option-a');
const optionButtonB = document.getElementById('answer-option-b');
const optionButtonC = document.getElementById('answer-option-c');
const optionButtonD = document.getElementById('answer-option-d');

// variables to access 'Cash Prize' DOM elements
const prizeOne = document.querySelector('[data-prize="500"]');
const prizeTwo = document.querySelector('[data-prize="1,000"]');
const prizeThree = document.querySelector('[data-prize="1,500"]');
const prizeFour = document.querySelector('[data-prize="2,000"]');
const prizeFive = document.querySelector('[data-prize="2,500"]');
const prizeSix = document.querySelector('[data-prize="5,000"]');
const prizeSeven = document.querySelector('[data-prize="10,000"]');
const prizeEight = document.querySelector('[data-prize="20,000"]');
const prizeNine = document.querySelector('[data-prize="40,000"]');
const prizeTen = document.querySelector('[data-prize="80,000"]');
const prizeEleven = document.querySelector('[data-prize="100,000"]');
const prizeTwelve = document.querySelector('[data-prize="125,000"]');
const prizeThirteen = document.querySelector('[data-prize="150,000"]');
const prizeFourteen = document.querySelector('[data-prize="200,000"]');
const prizeFifteen = document.querySelector('[data-prize="1-million"]');

// variables to access lightbox links for 'How to Play' & 'Quit'
const howToPlayLink = document.getElementById('howtoplay-btn-gamepage');
const quitLink = document.getElementById('quit-link');

// variables to access 'Countdown to Start [Lightbox]'
const countdownSection = document.getElementById('countdown-outer-wrapper');
const countdown = document.getElementById('countdown');

// common variables
let usedQuestions = [];     // variable for list of IDs of used questions
let selectedQuestion;       // variable for randomly selected question (object)
let counter;                // variable containing id of timer() (object)

if (document.getElementById('gamepage-body')) {
     // display player's name and money earned
     let playerName = getPlayerName();
     if (playerName !== null) {
         playerNameHolder.innerText = playerName;
     } else {
         location.href = 'index.html';
     }

    // Countdown to Start [Lightbox] <-- [Start]
    countdownSection.classList.add('overlay-bg');
    countdownSection.classList.remove('hide');
    let countdownLeft = 3;
    let countdownId = setInterval(() => {
        if (countdownLeft > 1) {
            countdownLeft--;
            countdown.innerHTML = countdownLeft;
        } else {
            countdown.innerHTML = `GO`;
            clearInterval(countdownId);
            setTimeout(() => {
                countdownSection.classList.remove('overlay-bg');
                countdownSection.classList.add('hide');
                // selects and displays first question
                selectedQuestion = setDifficultyLevel();
                usedQuestions.push(selectedQuestion.id);
                console.log('Used Questions:', usedQuestions);
                displayQuestion();
                counter = timer(30);
                document.querySelector('section#question-container h2').style.visibility = 'visible';
                document.querySelector('#question-text').style.visibility = 'visible';
                highlightPrize();
            }, 1000);
        }
    }, 1000);
    // Countdown to Start [Lightbox] <-- [End]

    // LIFELINES <-- [Start]
    // removes 1 wrong option
    lifelineRemoveOne.addEventListener('click', function() {
        randomChoiceRemove(1);
        this.classList.add("disabled-button");    // disables button with css
    }, {once: true});

    // removes 2 wrong options
    lifelineRemoveTwo.addEventListener('click', function() {
        randomChoiceRemove(2);
        this.classList.add("disabled-button");    // disables button with css
    }, {once: true});

    // adds 30 seconds more to the timer
    lifelineAddToTimer.addEventListener('click', function() {
        clearInterval(counter.id);
        counter.id = addMoreTime(30);
        this.classList.add("disabled-button");    // disables button with css
    }, {once: true});
    // LIFELINES <-- [End]

    // ANSWER OPTIONS/BUTTONS <-- [Start]
    // Option A button
    optionButtonA.addEventListener('click', (e) => {
        let thisBtn = e.target;
        playGame(thisBtn, counter.id);
    });

    // Option B button
    optionButtonB.addEventListener('click', (e) => {
        let thisBtn = e.target;
        playGame(thisBtn, counter.id);
    });

    // Option C button
    optionButtonC.addEventListener('click', (e) => {
        let thisBtn = e.target;
        playGame(thisBtn, counter.id);
    });

    // Option D button
    optionButtonD.addEventListener('click', (e) => {
        let thisBtn = e.target;
        playGame(thisBtn, counter.id);
    });
    // ANSWER OPTIONS/BUTTONS <-- [End]

    // 'How to Play' link Event Listener
    howToPlayLink.addEventListener('click', () => {
        howToPlayLightbox();
    });

    // 'Quit' link Event Listener
    quitLink.addEventListener('click', () => {
        quit();
    });
}
// GAME PAGE <-- [End]

// FUNCTIONS

/**
 * Continues the process of the game, checks the answer, and declares win or loss
 * @param {*} thisBtn - The targetted event 
 * @param {*} timerId - The id of the timer() function (setInterval)
 */
function playGame(thisBtn, timerId) {
    clearInterval(timerId);
    disableOptionBtns(thisBtn);
    let clicksBlocker = blockClicks();
    if (answerChecker(thisBtn.innerText.slice(3))) {
        setTimeout(() => {
            revealCorrectAnswer(thisBtn);
            setTimeout(() => {
                clicksBlocker.remove();
                thisBtn.classList.remove('correct-answer');
                counter = timer(30);
                if (usedQuestions.length < 15) {
                    selectedQuestion = setDifficultyLevel();
                    usedQuestions.push(selectedQuestion.id);
                    console.log('Used Questions:', usedQuestions);
                    displayQuestion();
                    highlightPrize();
                    displayEarnedMoney();
                    undisableOptionBtns();
                } else {
                    gameWon();
                }
            }, 1000);
        }, 1000);
    } else {
        setTimeout(() => {
            revealWrongAnswer(thisBtn);
            setTimeout(() => {
                gameOver();
            }, 1000);
        }, 1000);
    }
}

/**
 * Creates an overlay to body document that blocks interaction
 * @returns the newly created block element
 */
function blockClicks() {
    const gamepageBody = document.getElementById('gamepage-body');
    const newDiv = document.createElement('div');
    newDiv.classList.add('overlay-bg');
    gamepageBody.appendChild(newDiv);
    return newDiv;
}

/**
 * Disables all option buttons except the one passed in as argument
 * @param {object} notToDisableBtn - The option button that is NOT to be disabled
 */
function disableOptionBtns(notToDisableBtn) {
    for (let optionBtn of optionButtonsList) {
        optionBtn.disabled = true;
        if (optionBtn !== notToDisableBtn) {
            optionBtn.classList.add('disabled-button');
        }
    }
}

/**
 * Adds style to the selected wrong answer
 * @param {object} selectedBtn - The wrong option button (answer) targeted
 */
function revealWrongAnswer(selectedBtn) {
    selectedBtn.classList.add('wrong-answer');
}

/**
 * Adds style to the selected correct answer
 * @param {object} selectedBtn - The correct option button (answer) targeted
 */
function revealCorrectAnswer(selectedBtn) {
    selectedBtn.classList.add('correct-answer');
}

/**
 * Stores player's name in sessionStorage
 * @returns true or false
 */
function captureUserName() {
    const userName = document.getElementById('username').value;
    if (userName) {
        let key = sessionStorage.length;
        sessionStorage.setItem(key, userName);
        return true;
    } else {
        return false;
    }
}

/**
 * Retrieves username from sessionStorage
 * @returns username
 */
function getPlayerName() {
    let key = sessionStorage.length - 1;
    let playerName = sessionStorage.getItem(key);
    return playerName;
}

/**
 * Randomly selects question based on specified difficulty level
 * @param {string} qCategory - The level of difficulty of the question
 * @returns A randomized question
 */
function questionRandomizer(qCategory) {
    let randomNumber = Math.floor(Math.random() * qCategory.length);
    return qCategory[randomNumber];
}

/**
 * Displays the question and answer options in the game page
 */
function displayQuestion() {
    questionText.innerText = selectedQuestion.question;
    questionNumber.innerText++;
    let shuffledOptions = shuffleOptions();
    let letterSequence = ['A.', 'B.', 'C.', 'D.'];
    for (let i = 0; i < optionButtonsList.length; i++) {
        optionButtonsList[i].innerText = `${letterSequence[i]} ${shuffledOptions[i]}`;
        // un-disable disabled buttons
        optionButtonsList[i].classList.remove('disabled-button');
    }
}

/**
 * Returns a shuffled list of answer options from the selected question 
 * @returns shuffled list of answer options
 */
function shuffleOptions() {
    let optionsList = [selectedQuestion.correctAnswer, selectedQuestion.wrongAnswers[0], selectedQuestion.wrongAnswers[1], selectedQuestion.wrongAnswers[2]];
    for (let i = 0; i < 4; i++) {
        let randIndex = Math.floor(Math.random() * optionsList.length);
        let lastItem = optionsList.pop();
        optionsList.splice(randIndex, 0, lastItem);
    }
    return optionsList;
}

/**
 * Checks the user's answer and returns true or false
 * @param {string} answerText - Text content of the answer
 * @returns true or false
 */
function answerChecker(answerText) {
    if (selectedQuestion.correctAnswer === answerText) {
        console.log("Correct!", selectedQuestion.correctAnswer, "=", answerText);
        return true;
    } else {
        console.log(`Wrong! 
        Correct Answer: ${selectedQuestion.correctAnswer}, 
        "Your answer:", ${answerText}`);
        return false;
    }
}

/**
 * Displays a timer that counts from specified max time down to 0
 * @param {number} num - Initial time for timer to start from
 * @returns An object with setInterval() id
 */
function timer(num) {
    let timeLeft = parseInt(num);
    timerValue.innerText = timeLeft;
    let timeInterval = setInterval(() => {
        if (timeLeft >= 0) {
            timeLeft--;
            timerValue.innerText = timeLeft + 1;
        } else {
            gameOver();
            clearInterval(timeInterval);
        }
    }, 1000);
    return {id: timeInterval};
}

/**
 * Adds specified time to the identified counter
 * @param {number} numToAdd - time (seconds) to add to the current counter
 * @returns timer id
 */
function addMoreTime(numToAdd) {
    let num = parseInt(timerValue.innerText) + numToAdd;
    return timer(num).id;
}

/**
 * Displays Game Over lightbox with player's name and money
 * earned 
 */
function gameOver() {
    const gameOverPopUp = document.getElementById('gameover-outer-wrapper');
    const playAgainLoser = document.getElementById('play-again-gameover');
    const prizeWon = document.getElementById('prize-won');
    const playerName = document.getElementById('username-gameover');
    const addOnText = document.querySelector('.not-bad');

    // Add 'Not bad!' message to game over lightbox if cash is earned
    if (moneyEarned.innerText !== '0') {
        addOnText.classList.remove('hide');
    }

    // Close 'How to Play' lightbox if it is open
    if (document.getElementById('howtoplay-inner-wrapper')) {
        document.getElementById('howtoplay-inner-wrapper').remove();
        document.getElementById('howtoplay-outer-wrapper').classList.add('hide');
        document.getElementById('howtoplay-outer-wrapper').classList.remove('overlay-bg');
    }

    playerName.innerText = playerNameHolder.innerText;
    prizeWon.innerText = moneyEarned.innerText;
    gameOverPopUp.classList.remove('hide');
    gameOverPopUp.classList.add('overlay-bg');
    playAgainLoser.addEventListener('click', () => {
        location.reload();
    });
}

/**
 * Randomly removes wrong option/s for the answer to the question
 * @param {number} num - Number of wrong options to remove
 */
function randomChoiceRemove(num) {
    let wrongOptList = [];
    let wrongAnswers = selectedQuestion.wrongAnswers;
    for (let optBtn of optionButtonsList) {
        let optBtnText = optBtn.innerText.slice(3);
        // filters undisabled answer buttons containing the wrong answer
        if (wrongAnswers.includes(optBtnText) && optBtn.disabled === false) {
            wrongOptList.push(optBtn);
        }
    }

    // randomly selects and disables the answer button/s
    for (let i = 0; i < num; i++) {
        let randNum = Math.floor(Math.random() * wrongOptList.length);
        wrongOptList[randNum].disabled = true;
        wrongOptList[randNum].classList.add('disabled-button');
        wrongOptList.splice(randNum, 1);
    }
}

/**
 * Un-disable answer buttons that were disabled
 */
function undisableOptionBtns() {
    for (let optionBtn of optionButtonsList) {
        optionBtn.disabled = false;
    }
}

/**
 * Sets the difficulty and provides the question
 * @returns randomly selected question
 */
function setDifficultyLevel() {
    /* Returns the randomly selected question based on 
    question Category (questCategory) */
    const questionSelection = (quesCategory) => {
        let questionSelected = questionRandomizer(quesCategory);
        while (usedQuestions.includes(questionSelected.id)) {
            questionSelected = questionRandomizer(quesCategory);
        }
        return questionSelected;
    };

    // returns the newly selected question based on difficulty level
    let newQuestion;
    if (usedQuestions.length <= 4){
        newQuestion = questionSelection(easyQuestions);
    } else if (usedQuestions.length > 4 && usedQuestions.length < 10) {
        newQuestion = questionSelection(moderateQuestions);
    } else if (usedQuestions.length >= 10 && usedQuestions.length < 14) {
        newQuestion = questionSelection(hardQuestions);
    } else {
        newQuestion = questionSelection(hardestQuestions);
    }
    return newQuestion;
}

/**
 * Returns the current and previous prize money depending on
 * the question number
 * @param {string} qNum - question number as string
 * @returns An object containing current prize and previous prize
 */
function prizeMoney(qNum) {
    switch (qNum) {
        case "1": 
            return {current: prizeOne};
        case "2":
            return {current: prizeTwo, previous: prizeOne};
        case "3":
            return {current: prizeThree, previous: prizeTwo};
        case "4":
            return {current: prizeFour, previous: prizeThree};
        case "5":
            return {current: prizeFive, previous: prizeFour};
        case "6":
            return {current: prizeSix, previous: prizeFive};
        case "7":
            return {current: prizeSeven, previous: prizeSix};
        case "8":
            return {current: prizeEight, previous: prizeSeven};
        case "9":
            return {current: prizeNine, previous: prizeEight};
        case "10":
            return {current: prizeTen, previous: prizeNine};
        case "11":
            return {current: prizeEleven, previous: prizeTen};
        case "12":
            return {current: prizeTwelve, previous: prizeEleven};
        case "13":
            return {current: prizeThirteen, previous: prizeTwelve};
        case "14":
            return {current: prizeFourteen, previous: prizeThirteen};
        case "15":
            return {current: prizeFifteen, previous: prizeFourteen};
    }
}

/**
 * Provides styling to current and previous prize money
 */
function highlightPrize() {
    let currentPrize = prizeMoney(questionNumber.innerText).current;
    let previousPrize = prizeMoney(questionNumber.innerText).previous;
    currentPrize.classList.add('current-prize');
    currentPrize.scrollIntoView({behavior: "smooth", block: "center"});
    if (previousPrize) {
        previousPrize.style.opacity = 0.5;
    }
}

/**
 * Displays and returns the amount of money earned
 * @returns amount of money earned
 */
function displayEarnedMoney() {
    let moneyElement = prizeMoney(questionNumber.innerText).previous;
    let money = moneyElement.dataset.prize;
    moneyEarned.innerText = money;
    return moneyEarned.innerText;
}

/**
 * Displays the 'Game Won' lightbox with 'Play Again' and 'Home' buttons,
 * and set the earned money to €1,0000,000 
 */
function gameWon() {
    const gameWonSection = document.getElementById('gamewon-outer-wrapper');
    const playerName = document.getElementById('username-gamewon');
    
    clearInterval(counter.id);
    moneyEarned.innerText = '1,000,000';
    playerName.innerText = playerNameHolder.innerText;
    gameWonSection.classList.remove('hide');
    gameWonSection.classList.add('overlay-bg');

    const playAgainWinner = document.getElementById('play-again-gamewon');
    playAgainWinner.addEventListener('click', function() {
        location.reload();
    });
}

function quit() {
    const quitSection = document.getElementById('quit-outer-wrapper');
    quitSection.classList.remove('hide');
    quitSection.classList.add('overlay-bg');
    clearInterval(counter.id);
    const playAgainQuitter = document.getElementById('play-again-quitter');
    playAgainQuitter.addEventListener('click', function() {
        location.reload();
    });
}

/**
 * Displays the 'How to Play' lightbox with 'close' icon functionality
 */
function howToPlayLightbox() {
    const howToPlaySection = document.getElementById('howtoplay-outer-wrapper');
    let howToPlayArticle = document.createElement('article');
    howToPlayArticle.setAttribute('id', 'howtoplay-inner-wrapper');
    howToPlayArticle.innerHTML = `
            <div class="close-howtoplay-container">
                <i class="fas fa-times" id="close-howtoplay"></i>
            </div>
            <h2 id="howtoplay-heading">How to Play</h2>
            <p>To play this exciting game, read the following mechanics:</p>
            <section>
                <h3>How to win?</h3>
                <ul>
                    <li>Answer correctly all 15 questions to win the €1 million.</li>
                    <li>Each question also corresponds to an amount of money.</li>
                </ul>
            </section>
            <section>
                <h3>When is game over?</h3>
                <ul>
                    <li>When wrong answer is selected, or</li>
                    <li>When time runs out, or</li>
                    <li>When all 15 questions are answered correctly.</li>
                </ul>
            </section>
            <section>
                <h3>How are the questions presented?</h3>
                <ul>
                    <li>Each question has 4 answer choices, but only 1 is correct.</li>
                    <li>You have 30 seconds for each question.</li>
                </ul>
            </section>
            <section>
                <h3>Life Lines to Help You</h3>
                <ul>
                    <li>You have 3 life lines.
                        <img id="lifeline-image" src="assets/images/lifeline-icons.png" alt="screenshot of lifeline icons">
                    </li>
                    <li>1st icon removes 1 wrong answer</li>
                    <li>2nd icon removes 2 wrong answers</li>
                    <li>3rd icon adds 30 sec to the timer</li>
                    <li>Each lifeline can only be used ONCE in the course of the game.</li>
                    <li>You can use any and as many lifelines you want in a question.</li>
                </ul>
            </section>
        `;

    howToPlaySection.appendChild(howToPlayArticle);
    howToPlaySection.classList.remove('hide');
    howToPlaySection.classList.add('overlay-bg');

    // hides 'How to Play' lightbox
    const closeHowToPlay = document.getElementById('close-howtoplay');
    closeHowToPlay.addEventListener('click', () => {
        howToPlaySection.classList.add('hide');
        howToPlaySection.classList.remove('overlay-bg');
        howToPlayArticle.remove();
    });
}