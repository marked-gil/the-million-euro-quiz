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
        question: "What planet is closest to the sun?",
        correctAnswer: "Mercury",
        wrongAnswers: ["Saturn", "Venus", "Pluto"]
	},
    {
        id: 11,
        question: "What was the old name for Snickers bar before it changed in 1990?",
        correctAnswer: "Marathon",
        wrongAnswers: ["Mars", "Caramac", "Marble"]
	},
    {
        id: 12,
        question: "How many human players are there on each side in a polo match?",
        correctAnswer: "four (4)",
        wrongAnswers: ["three (2)", "three (3)", "five (5)"]
	},
    {
        id: 13,
        question: "Who was the first actor to play Dumbledore in the Harry Potter films?",
        correctAnswer: "Richard Harris",
        wrongAnswers: ["Michael Gambon", "Jude Law", "Michael Caine"]
	},
    {
        id: 14,
        question: "There are 5 countries who are permanent members of the UN Security Council. Which among the options is not included?",
        correctAnswer: "Germany",
        wrongAnswers: ["France", "United Kingdom", "Russia"]
	},
    {
        id: 15,
        question: "Which American rapper released The College Dropout album in 2004?",
        correctAnswer: "Kanye West",
        wrongAnswers: ["Eminem", "50 Cent", "Jay-Z"]
	},
    {
        id: 16,
        question: "Which year did the European Union first introduce the Euro as currency?",
        correctAnswer: "1999",
        wrongAnswers: ["2000", "2001", "1995"]
	},
    {
        id: 17,
        question: "In what year did World War II end?",
        correctAnswer: "1945",
        wrongAnswers: ["1950", "1955", "1935"]
	},
    {
        id: 18,
        question: "What holiday is celebrated after Christmas Day, and is primarily known today as a shopping holiday?",
        correctAnswer: "Boxing Day",
        wrongAnswers: ["St. Patrick's Day", "Stephen's Day", "The Day After Christmas Holiday"]
	},
    {
        id: 19,
        question: "How many bones are there in an elephant's trunk?",
        correctAnswer: "Zero (0)",
        wrongAnswers: ["One (1)", "Five (5)", "Two (2)"]
	},
    {
        id: 20,
        question: "What is the largest Spanish speaking city in the world?",
        correctAnswer: "Mexico City",
        wrongAnswers: ["Buenos Aires", "Bogotá", "Lima"]
	},
];

let moderateQuestions = [
    {
        id: 21,
        question: "If it takes ten (10) men to build a wall in 4 hours, how many hours will 5 men take to build it?",
        correctAnswer: "8 hours",
        wrongAnswers: ["2 hours", "5 hours", "4 hours"]
	},
    {
        id: 22,
        question: "Which British King famously had six wives?",
        correctAnswer: "Henry VIII",
        wrongAnswers: ["George VI", "George V", "William IV"]
	},
    {
        id: 23,
        question: "Conquering much of China and central Asia, uniting the wandering tribes and even responsible for creating one of the first international postal systems, who led the Mongols?",
        correctAnswer: "Genghis Khan",
        wrongAnswers: ["Kublai Khan", "The Bogd Khan", "Kaidu"]
	},
    {
        id: 24,
        question: "Which German classical composer and pianist, was the film Immortal Beloved about?",
        correctAnswer: "Ludwig van Beethoven",
        wrongAnswers: ["Mozart", "Johannes Brahms", "Felix Mendelssohn"]
	},
    {
        id: 25,
        question: "In which country would you find Angel Falls, the highest waterfall on earth?",
        correctAnswer: "Venezuela",
        wrongAnswers: ["Mexico", "Canada", "Brazil"]
	},
    {
        id: 26,
        question: "The gaseous elements helium, neon, argon, krypton, xenon, and radon are better known as what?",
        correctAnswer: "noble gases",
        wrongAnswers: ["halogens", "simple gases", "liquified gases"]
	},
    {
        id: 27,
        question: "What is the name of Saturn’s largest moon?",
        correctAnswer: "Titan",
        wrongAnswers: ["Enceladus", "Mimas", "Rhea"]
	},
    {
        id: 28,
        question: "What character has both Robert Downey Jr. and Benedict Cumberbatch played?",
        correctAnswer: "Sherlock Holmes",
        wrongAnswers: ["'Mad' Max Rockatansky", "Charles Spencer Chaplin", "Alan Turing"]
	},
    {
        id: 29,
        question: "What country drinks the most coffee per person?",
        correctAnswer: "Finland",
        wrongAnswers: ["USA", "Canada", "Denmark"]
	},
    {
        id: 30,
        question: "What company was initially known as 'Blue Ribbon Sports'?",
        correctAnswer: "Nike",
        wrongAnswers: ["Addidas", "Puma", "Reebok"]
	},
    {
        id: 31,
        question: "What are the colours of the Olympic Rings?",
        correctAnswer: "red, green, black, blue and yellow",
        wrongAnswers: ["green, yellow, violet, blue, white", "yellow, red, brown, blue, green", "black, orange, yellow, green, red"]
	},
    {
        id: 32,
        question: "On average, how far away is the moon from the earth in miles?",
        correctAnswer: "238,000 miles",
        wrongAnswers: ["150,000 miles", "50,000 miles", "350,000 miles"]
	},
    {
        id: 33,
        question: "Saying the name of which dried fruit was used to encourage people to smile before a photo in the 1800s, before the phrase 'cheese'?",
        correctAnswer: "prunes",
        wrongAnswers: ["oranges", "apples", "lemons"]
	},
];

let hardQuestions = [
    {
        id: 34,
        question: "Aureolin is a shade of what colour?",
        correctAnswer: "yellow",
        wrongAnswers: ["pink", "orange", "blue"]
	},
    {
        id: 35,
        question: "In what country is the Chernobyl nuclear plant located?",
        correctAnswer: "Ukraine",
        wrongAnswers: ["Austria", "Norway", "Poland"]
	},
    {
        id: 36,
        question: "How many dots appear on a pair of dice?",
        correctAnswer: "42",
        wrongAnswers: ["21", "52", "32"]
	},
    {
        id: 37,
        question: "What country has the only national flag that does not have four sides?",
        correctAnswer: "Nepal",
        wrongAnswers: ["Luxembourg", "Taiwan", "Tuvalu"]
	},
    {
        id: 38,
        question: "What sporting event has a strict dress code of almost entirely white?",
        correctAnswer: "Wimbledon",
        wrongAnswers: ["Tour de France", "Royal Ascot", "US Masters Tournament"]
	},
    {
        id: 39,
        question: "How many minutes are in a full week?",
        correctAnswer: "10,080 minutes",
        wrongAnswers: ["20,160 minutes", "43,800 minutes", "7,200 minutes"]
	},
    {
        id: 40,
        question: "In what capital would you find The Little Mermaid statue?",
        correctAnswer: "Copenhagen",
        wrongAnswers: ["Vienna", "Helsinki", "Athens"]
	},
    {
        id: 41,
        question: "What is Cynophobia the fear of?",
        correctAnswer: "dogs",
        wrongAnswers: ["cats", "computers", "accidents"]
	},
    {
        id: 42,
        question: "Unix Time is defined as the number of seconds that have elapsed since when?",
        correctAnswer: "midnight of January 1, 1970",
        wrongAnswers: ["midnight of January 1, 1987", "noontime of January 1, 1970", "noontime of January 1, 1987"]
	},
    {
        id: 43,
        question: "Who first coined the term 'battery' to describe an electrical storage device?",
        correctAnswer: "Benjamin Franklin",
        wrongAnswers: ["Henry Ford", "Michael Faraday", "Albert Einstein"]
	},
    {
        id: 44,
        question: "What do Lord of the Rings author J.R.R. Tolkien's initials stand for?",
        correctAnswer: "John Ronald Reuel",
        wrongAnswers: ["James Raymond Ross", "Jack Richard Rafael", "Joseph Rey Rick"]
	},
];

let hardestQuestions = [
    {
        id: 45,
        question: "What is a group of pandas known as?",
        correctAnswer: "an embarassment",
        wrongAnswers: ["a shrewdness", "a murder", "a convocation"]
	},
    {
        id: 46,
        question: "How long is an elephant pregnant before it gives birth?",
        correctAnswer: "22 months",
        wrongAnswers: ["9 months", "12 months", "16 months"]
	},
    {
        id: 47,
        question: "The first successful vaccine was introduced by Edward Jenner in 1796. Which disease did it guard against?",
        correctAnswer: "Smallpox",
        wrongAnswers: ["Yellow Fever", "Poliomyelitis", "Tuberculosis"]
	},
    {
        id: 48,
        question: "Who is the only musician ever to have been awarded the Nobel prize for literature?",
        correctAnswer: "Bob Dylan",
        wrongAnswers: ["Jimi Hendrix", "Elton John", "Stevie Wonder"]
	},
    {
        id: 49,
        question: "Queen Elizabeth II is the longest reining monarch of the UK, followed by Queen Victoria - but who is the third?",
        correctAnswer: "George III",
        wrongAnswers: ["William IV", "Edward VIII", "Anne"]
	},
    {
        id: 50,
        question: "Which philosopher stated the famous line 'I think, therefore I am'?",
        correctAnswer: "Rene Descartes",
        wrongAnswers: ["John Locke", "Socrates", "Thomas Aquinas"]
	},
    {
        id: 51,
        question: "The Taj Mahal was constructed as a tomb of the wife of which Mughal Emperor?",
        correctAnswer: "Shah Jahan",
        wrongAnswers: ["Jahangir", "Azam Shah", "Muhammad Shah"]
	},
    {
        id: 52,
        question: "Where were the 2 atomic bombs dropped in Japan that resulted in the end of World War II?",
        correctAnswer: "Hiroshima and Nagasaki",
        wrongAnswers: ["Tokushima and Osaka", "Fukuyama and Kochi", "Tokyo and Nagoya"]
	},
    {
        id: 53,
        question: "In this country, the sun neither rises nor sets for few months in a year. Which country is called the 'Land of the Midnight Sun'?",
        correctAnswer: "Norway",
        wrongAnswers: ["Ireland", "France", "Switzerland"]
	},
    {
        id: 54,
        question: "According to Greek mythology, who is considered the Goddess of Agriculture?",
        correctAnswer: "Demeter",
        wrongAnswers: ["Hera", "Artemis", "Athena"]
	},
    {
        id: 55,
        question: "Which fruit will you find at the top of the trophy of the Men’s Wimbledon?",
        correctAnswer: "pineapple",
        wrongAnswers: ["apple", "grapes", "pear"]
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
    const userNameSubmit = document.getElementById('username-btn');

    // displays 'Enter Name' lightbox
    playBtn.addEventListener('click', () => {
        displayLightBox(enterNameSection);
        disableAllButtons(closeUsernameIcon, userNameSubmit);
        usernameInput.focus();
    });

    // closes 'Enter Name' lightbox
    closeUsernameIcon.addEventListener('click', () => {
        flashMsg.innerHTML = "";
        closeLightBox(enterNameSection);
        enableAllButtons();
    });

	// flash message if player's name >12 characters or starts with space
    usernameInput.addEventListener('input', (e) => {
        if (e.target.value[0] === ' ') {
            flashMsg.innerHTML = "Name cannot start with a space.";
            usernameInput.value = '';
        } else if (e.target.value.length === 12) {
            flashMsg.innerHTML = "Your name can only have a maximum of 12 characters.";
        }
    });

    // displays 'How to Play' lightbox
    howToPlayBtn.addEventListener('click', () => {
        howToPlayLightbox();
        const closeHowToPlayBtn = document.getElementById('close-howtoplay');
        disableAllButtons(closeHowToPlayBtn);
        closeHowToPlayBtn.focus();
    });
    
    // 'Let's Play' button Event Listener ['Enter Name' lightbox]
    // Requires that a name is entered before redirecting to game page
    // Only allows alphanumeric characters and/or space in-between
    userNameSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        // regex pattern taken from stackoverflow (links found in README file Credits section)
        const pattern = '^[a-zA-Z0-9 ]+$';
        if (captureUserName()) {
            if (usernameInput.value.match(pattern)) {
                location.href = 'game-page.html';
            } else {
                flashMsg.innerHTML = "You can only use letters, numbers, and space in between.";
            }
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

// variables to access 'Money Prize' DOM elements
const prizesList = document.querySelectorAll('#money-list li');
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
const quitLink = document.getElementById('quit-btn');

// variables to access 'Countdown to Start' lightbox
const countdownSection = document.getElementById('countdown-outer-wrapper');
const countdown = document.getElementById('countdown');

// common variables
let usedQuestions = [];     // variable for list of IDs of used questions
let selectedQuestion;       // variable for randomly selected question (object)
let counter;                // variable containing id of timer() (object)

if (document.getElementById('gamepage-body')) {
    // display player's name and cash earned 
    // and protects game page from access if name not provided
     let playerName = getPlayerName();
     if (playerName !== null) {
         playerNameHolder.innerText = playerName;
     } else {
         location.href = 'index.html';
     }

    // 'Countdown to Start' [Lightbox] <-- [Start]
    disableAllButtons();
    displayLightBox(countdownSection);
    let countdownLeft = 3;
    let countdownId = setInterval(() => {
        if (countdownLeft > 1) {
            countdownLeft--;
            countdown.innerHTML = countdownLeft;
        } else {
            countdown.innerHTML = `GO`;
            stopTimer(countdownId);
            displayCashPrizes();
            setTimeout(() => {
                enableAllButtons();
                closeLightBox(countdownSection);
                // selects and displays first question
                selectedQuestion = setDifficultyLevel();
                usedQuestions.push(selectedQuestion.id);
                displayQuestion();
                counter = timer(30);
                highlightNextPrize();
            }, 1000);
        }
    }, 1000);
    // 'Countdown to Start' [Lightbox] <-- [End]

    // LIFELINES <-- [Start]
    // removes 1 wrong option
    lifelineRemoveOne.addEventListener('click', function() {
        randomChoiceRemove(1);
        disableLifeline(this);
    }, {once: true});
    // removes 2 wrong options
    lifelineRemoveTwo.addEventListener('click', function() {
        randomChoiceRemove(2);
        disableLifeline(this);
    }, {once: true});
    // adds 30 seconds more to the timer
    lifelineAddToTimer.addEventListener('click', function() {
        stopTimer(counter.id);
        counter.id = addMoreTime(30);
        disableLifeline(this);
    }, {once: true});
    // LIFELINES <-- [End]

    // ANSWER OPTIONS/BUTTONS <-- [Start]
    // Option A button
    optionButtonA.addEventListener('click', (e) => playGame(e.target, counter.id));
    // Option B button
    optionButtonB.addEventListener('click', (e) => playGame(e.target, counter.id));
    // Option C button
    optionButtonC.addEventListener('click', (e) => playGame(e.target, counter.id));
    // Option D button
    optionButtonD.addEventListener('click', (e) => playGame(e.target, counter.id));
    // ANSWER OPTIONS/BUTTONS <-- [End]

    // 'How to Play' link Event Listener
    howToPlayLink.addEventListener('click', () => {
        howToPlayLightbox();
        const closeHowToPlay = document.getElementById('close-howtoplay');
        disableAllButtons(closeHowToPlay);
        closeHowToPlay.focus();
    });

    // 'Quit' link Event Listener
    quitLink.addEventListener('click', () => quit());
}

// GAME PAGE <-- [End]

// FUNCTIONS <-- [Start]
/**
 * Continues the process of the game, checks the answer, and declares win or lose
 * @param {*} thisBtn - The targetted event 
 * @param {*} timerId - The id of the timer() function (setInterval)
 */
function playGame(thisBtn, timerId) {
    stopTimer(timerId);
    disableAllButtons();
    showDisabledAnswers(thisBtn);
    let clicksBlocker = blockClicks();
    if (answerChecker(thisBtn.innerText.slice(3))) {
        setTimeout(() => {
            revealCorrectAnswer(thisBtn);
            highlightEarnedPrize();
            setTimeout(() => {
                clicksBlocker.remove();
                enableAllButtons();
                counter = timer(30);
                if (usedQuestions.length < 15) {
                    thisBtn.classList.remove('correct-answer');
                    selectedQuestion = setDifficultyLevel();
                    usedQuestions.push(selectedQuestion.id);
                    displayQuestion();
                    highlightNextPrize();
                    displayEarnedMoney();
                } else {
                    gameWon();
                }
            }, 1000);
        }, 1000);
    } else {
        setTimeout(() => {
            revealWrongAnswer(thisBtn);
            setTimeout(() => {
                clicksBlocker.remove();
                enableAllButtons();
                gameOver();
            }, 1000);
        }, 1000);
    }
}

/**
 * Displays all the cash prizes for the whole game
 */
function displayCashPrizes() {
    let num = 0;
    let intervalId = setInterval(() => {
        if(num < prizesList.length) {
            prizesList[num].classList.remove('invisible');
            num += 1;
        } else {
            clearInterval(intervalId);
        }
    }, 60);
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
 * Emphasizes disabled answer buttons
 * @param {object} notDisabledBtn - The answer button that is NOT disabled
 */
 function showDisabledAnswers(notDisabledBtn) {
    for (let optionBtn of optionButtonsList) {
        if (optionBtn !== notDisabledBtn) {
            optionBtn.classList.add('disabled-btn', 'disabled-btn-opacity');
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
        optionButtonsList[i].setAttribute('aria-label', optionButtonsList[i].innerText);
        // un-disable buttons
        optionButtonsList[i].classList.remove('disabled-btn', 'disabled-btn-opacity');
    }
    // reveals the first question
    if (questionNumber.innerHTML == '1') {
        document.querySelector('section#question-container h2').classList.remove('invisible');
        document.querySelector('#question-text').classList.remove('invisible');
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
        return true;
    } else {
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
            stopTimer(timeInterval);
        }
    }, 1000);
    return {id: timeInterval};
}

/**
 * Stops timer created by setInterval() function
 * @param {number} timerId - The setInterval Id
 */
 function stopTimer(timerId) {
    clearInterval(timerId);
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
        wrongOptList[randNum].classList.add('disabled-btn', 'disabled-btn-opacity');
        wrongOptList.splice(randNum, 1);
    }
}

/**
 * Disables the lifeline and prevents its keyboard accessibility
 * @param {Element} lifeline - The lifeline element triggered 
 */
function disableLifeline(lifeline) {
    lifeline.classList.add('disabled-btn', 'disabled-btn-opacity');    // 
    lifeline.setAttribute('tabindex', '-1');
}

/**
 * Sets the difficulty and provides the question
 * @returns randomly selected question
 */
function setDifficultyLevel() {
    /* Returns selected question based on question Category (questCategory) */
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
 * Highlights the next prize money
 */
function highlightNextPrize() {
    const currentPrize = prizeMoney(questionNumber.innerText).current;
    currentPrize.classList.add('highlight-prize');
    currentPrize.scrollIntoView({behavior: "smooth", block: "center"});
}

/**
 * Highlights the prize money already earned
 */
function highlightEarnedPrize() {
    const currentPrize = prizeMoney(questionNumber.innerText).current;
    const newImg = document.createElement('img');
    newImg.setAttribute('src', 'assets/images/star-icon.png');
    newImg.setAttribute('class', 'star');
    newImg.setAttribute('alt', 'pass this level');
    currentPrize.appendChild(newImg);
    currentPrize.style.boxShadow = 'none';
}

/**
 * Displays and returns the amount of money earned
 * @returns amount of money earned
 */
function displayEarnedMoney() {
    let moneyElement = prizeMoney(questionNumber.innerText).previous;
    let money = moneyElement.dataset.prize;
    moneyEarned.innerText = '€' + money;
    return moneyEarned.innerText;
}

/**
 * Displays Game Over lightbox with player's name and money
 * earned 
 */
 function gameOver() {
    const gameOverPopUp = document.getElementById('gameover-outer-wrapper');
    const playAgainBtn = document.getElementById('play-again-gameover');
    const prizeWon = document.getElementById('prize-won');
    const playerName = document.getElementById('username-gameover');
    const addOnText = document.querySelector('.not-bad');
    const homeLink = document.querySelector('#gameover-inner-wrapper a');
    // Close 'How to Play' lightbox if it is open
    if (document.getElementById('howtoplay-inner-wrapper')) {
        closeHowToPlaySection();
    }
    // disable all buttons except buttons inside the lightbox
    disableAllButtons(playAgainBtn, homeLink);
    // Add 'Not bad!' message to game over lightbox if cash is earned
    if (moneyEarned.innerText !== '0') {
        addOnText.classList.remove('hide');
        prizeWon.innerText = moneyEarned.innerText;
    } else {
        prizeWon.innerText = `nothing`;
    }
    // displays lightbox
    playerName.innerText = playerNameHolder.innerText;
    displayLightBox(gameOverPopUp);
    playAgainBtn.focus();
    // 'Play Again' button Event Listener - reloads the game
    playAgainBtn.addEventListener('click', () => {
        location.reload();
    });
}

/**
 * Displays the 'Game Won' lightbox with 'Play Again' and 'Home' buttons,
 * and set the earned money to €1,0000,000 
 */
function gameWon() {
    const gameWonSection = document.getElementById('gamewon-outer-wrapper');
    const playerName = document.getElementById('username-gamewon');
    const playAgainBtn = document.getElementById('play-again-gamewon');
    const homeLink = document.querySelector('#gamewon-inner-wrapper a');
    // stops timer and displays lightbox with name and cash prize
    stopTimer(counter.id);
    disableAllButtons(playAgainBtn, homeLink);
    moneyEarned.innerText = '1,000,000';
    playerName.innerText = playerNameHolder.innerText;
    displayLightBox(gameWonSection);
    // 'Play Again' button Event Listener - reloads game
    playAgainBtn.addEventListener('click', function() {
        location.reload();
    });
}

/**
 * Quits the current game by stopping timer, displays 'Quit' lightbox, 
 * and provides option to reload the game.
 */
function quit() {
    const quitSection = document.getElementById('quit-outer-wrapper');
    const playAgainBtn = document.getElementById('play-again-quitter');
    const homeLink = document.querySelector('#quit-inner-wrapper > a');
    // displays lightbox and stops timer
    stopTimer(counter.id);
    displayLightBox(quitSection);
    disableAllButtons(playAgainBtn, homeLink);
    playAgainBtn.focus();
    // 'Play Again' button Event Listener - reloads game
    playAgainBtn.addEventListener('click', function() {
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
    howToPlayArticle.setAttribute('class', 'lightbox-bgcolor lightbox-border');
    howToPlayArticle.innerHTML = `
            <div class="close-howtoplay-container">
                <button id="close-howtoplay" aria-label="close the How to Play lightbox">
                    <i class="fas fa-times" id="close-howtoplay-icon"></i>
                </button>
            </div>
            <h2 id="howtoplay-heading">How to Play</h2>
            <p>To play this exciting game, read the following mechanics:</p>
            <section>
                <h3>How to win?</h3>
                <ul>
                    <li>Answer correctly all 15 questions to win the €1 million.</li>
                    <li>Each question also corresponds to a guaranteed cash prize.</li>
                </ul>
            </section>
            <section>
                <h3>When is game over?</h3>
                <ul>
                    <li>When wrong answer is selected, or</li>
                    <li>When time runs out, or</li>
                    <li>When you quit the game, or</li>
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
                <h3>Lifelines to Help You</h3>
                <img id="lifeline-image" src="assets/images/lifeline-icons.png" alt="screenshot of lifeline icons">
                <ul>
                    <li>You have 3 lifelines.</li>
                    <li>1st icon removes 1 wrong answer</li>
                    <li>2nd icon removes 2 wrong answers</li>
                    <li>3rd icon adds 30 seconds to the timer</li>
                    <li>Each lifeline can only be used ONCE in the course of the game.</li>
                    <li>You can use 1 or more lifelines in a question.</li>
                </ul>
            </section>
        `;
    // displays the lightbox
    howToPlaySection.appendChild(howToPlayArticle);
    displayLightBox(howToPlaySection);
    // Event Listener to close 'How to Play' section
    const closeHowToPlayBtn = document.getElementById('close-howtoplay');
    closeHowToPlayBtn.addEventListener('click', () => {
        closeHowToPlaySection();
    });
}

/**
 * Closes 'How to Play' Lightbox when close button triggered
 */
function closeHowToPlaySection() {
    const howToPlaySection = document.getElementById('howtoplay-outer-wrapper');
    closeLightBox(howToPlaySection);
    document.getElementById('howtoplay-inner-wrapper').remove();
    enableAllButtons();
}

/**
 * Disables all buttons except the argument/s passed in,
 * and prevents keyboard accesibility
 * @param  {...any} letOff - the elements to be exempted from inactivation
 */
function disableAllButtons(...letOff) {
    const allButtons = document.querySelectorAll('button');
    const allLinks = document.querySelectorAll('a');
    for (let button of allButtons) {
        if (letOff.includes(button)) {
            continue;
        } else {
            button.setAttribute('disabled', '');
        }
    }
    for (let aLink of allLinks) {
        if (letOff.includes(aLink)) {
            continue;
        } else {
            aLink.setAttribute('tabindex', '-1');
        }
    }
}

/**
 * Re-enables all disabled buttons & their keyboard accessibility in the page
 */
function enableAllButtons() {
    const allButtons = document.querySelectorAll('button');
    const allLinks = document.querySelectorAll('a');
    for (let button of allButtons) {
        button.removeAttribute('disabled');
    }
    for (let aLink of allLinks) {
        aLink.removeAttribute('tabindex');
    }
}

/**
 * Displays the lightbox
 * @param {Element} outerWrapper - The outer container element of the lightbox
 */
function displayLightBox(outerWrapper) {
    outerWrapper.classList.add('overlay-bg');
    outerWrapper.classList.remove('hide');
}

/**
 * Closes the lightbox
 * @param {Element} outerWrapper - The outer container element of the lightbox
 */
function closeLightBox(outerWrapper) {
    outerWrapper.classList.add('hide');
    outerWrapper.classList.remove('overlay-bg');
}

// FUNCTIONS <-- [End]