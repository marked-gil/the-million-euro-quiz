# The Million Euro Quiz
<!-- Image from IamResponsive here-->
The **Million Euro Quiz** is a time-pressured online quiz game that tests the general knowledge of its player by answering 15 questions with varying difficulty levels, from easy to hardest, and simulates a game show that earns a cash prize. Each question is provided with 4 randomly arranged answer choices among which only one is correct. Also, it contains a special feature, such as the lifelines, which are help tools for the player. View the live website here: https://marked-gil.github.io/the-million-euro-quiz/

## TABLE OF CONTENTS
* [User Experience Design (UXD)](#uxd-user-experience-design)
    * [Strategy](#strategy)
        * [Goals](#goals)
        * [User Stories](#user-stories)
    * [Scope](#scope)
        * [Planned Features](#planned-features)
        * [Design Choices](#design-choices)
    * [Structure](#structure)
        * [Interaction Design (IXD)](#interaction-design-ixd)
        * [Information Design/Architecture](#information-designarchitecture)
    * [Skeleton](#skeleton)
        * [Wireframes](#wireframes)
    * [Surface](#surface)
* [Features](#features)
    * [Existing Features](#existing-features)
        * [Home Page](#home-page)
        * [Game Page](#game-page)
        * [404 Page](#404-page)
    * [Features for the Future](#features-for-the-future)
* [Fixed Bugs](#fixed-bugs)
* [Bugs Left to Fix](#bugs-left-to-fix)
* [Testing](#testing)
    * [Responsiveness](#responsiveness)
    * [Accessiblity](#accessibility)
    * [Links/Buttons Functionality Testing](#linksbuttons-functionality-testing)
    * [Validator Testing](#validator-testing)
    * [Lighthouse Testing](#lighthouse-testing)
* [Deployment](#deployment)
    * [Version Control](#version-control)
    * [Github Pages Deployment](#github-pages-deployment)
    * [Cloning from Github](#cloning-from-github)
* [Technologies](#technologies)
* [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
* [Acknowledgment](#acknowledgment)

---

## UXD (User Experience Design)
### Strategy
#### Goal:
* This site aims to provide an online quiz game for users, young and old, who want to play and enjoy a challenging and exciting game that tests their general knowledge. This is endeavored to be achieved by employing special features, which include a timer, life lines, randomness of questions, progressive level of difficulty, and 'cash-prize winning' simulation.

#### User Stories:
* As a user, I want to play a quiz game online that tests their general knowledge.
* As a user, I want to feel a sense of challenge and excitement when playing the game.
* As a user, I want to play a simulation of a game that earns a cash prize.
* As a user, I want to re-play the game multiple times as I want and expect to be asked random questions each time.
* As a user, I want to experience an increase in difficulty level as the game progresses.
* As a user, I want to utilize strategic options to help me when a question is difficult.
* As a user, I want to get immediate feedback on whether my answer is right or wrong.
* As a user, I want to have the feel of a personalized game.
* As a user, I want to be able to quit the current game or return to home page to either play a new game or to enter a new name.
* As a user, I want to be able to read the mechanics of the game before starting the game, and even while playing the game.
* As a user, I want the game to have an intuitive user interface.

### **Scope**

#### Planned Features:
This online quiz game has the following planned features based on the User Stories:
* User Story:
    > As a user, I want to play a quiz game online that tests their general knowledge.
    *  IMPLEMENTATION: 
        * Provide 15 general knowledge quiz questions per game.

* User Story:
    > As a user, I want to feel a sense of challenge and excitement when playing the game.
    * IMPLEMENTATION:
        * A timer will be set for each question, and the player must select their answer before the timer ends, otherwise game will be over and player loses.
        * The questions will be categorized according to difficulty level, and questions will increase in difficulty as the game progresses.
* User Story: 
    > As a user, I want to play a simulation of a game that earns cash prize.
    * IMPLEMENTATION:
        * A box will be displayed where money prizes to be earned per question will be displayed and highlighted.
        * The current prize earned by the player will be displayed in realtime.
* User Story:
    > As a user, I want to re-play the game multiple times as I want and expect to be asked with random questions each time.
    * IMPLEMENTATION:
        * The game can be re-played multiple times by player, and 'Play Again' button will be available when game is over or won.
        * Questions will be randomly selected, and the order of their answer choices will be randomly displayed, every time the game is played and re-played.
* User Story:
    > As a user, I want to experience an increase in difficulty level as the game progresses.
    * IMPLEMENTATION:
        * There are 4 levels of difficulty for the questions to be presented: "**easy**" (for questions 1-5), "**moderate**" (for questions 6-10), "**hard**" (for questions 11-14), and **"hardest"** (for the last question).
* User Story: 
    > As a user, I want to utilize strategic options to help me when question is difficult.
    * IMPLEMENTATION:
        * Life lines, which are help tools that increase the chances for the player to select the correct answer will be created. These life lines are: (1) to remove 1 wrong answer, (2) to remove 2 wrong answers, and (3) to add more time to the timer.
        * One or more life lines can be used in a question, but each life line can only be used once in the course of the game.
* User Story:
    > * As a user, I want to get an immediate feedback of whether my answer is right or wrong.
    * IMPLEMENTATION:
        * After every answered question, a '✓' (check mark) will be shown on the selected answer when it is correct, and an 'x' (x mark) when it is wrong.
* User Story:
    > As a user, I want to have the feel of a personalized game.
    * IMPLEMENTATION:
        * The game will require the player to enter their name before starting the game, and the player's name will be displayed while the game is on. Also, the player will be addressed by the their name when they lose or win the game.
* User Story:
    > As a user, I want to be able to quit the current game or return to home page to either play a new game or to enter a new name.
    * IMPLEMENTATION:
        * On the game page, the nav bar will contain the 'Home' button and 'Quit' button. When the 'Home' button is clicked, it will automatically redirects the user to the home page, and if they want to play the game again, they will have to enter their name. If the 'Quit' button is clicked, it will automatically stop the current game and show a popup box with options to play again or to return to home page.
* User Story: 
    > As a user, I want to be able to read the mechanics of the game before starting the game, and even while playing the game.
    * IMPLEMENTATION:
        * A 'How to Play' popup box will be available for the player when they want to read the mechanics of the game. This can be accessed before the start of the game, and even when the game is on. A button or link will be provided for this.
* As a user, I want the game to have an intuitive user interface.
    * IMPLEMENTATION:
        * The design of the game display will be minimalist.
        * The home page will only show the logo, and 2 buttons ('Play' and 'How To Play' buttons).
        * The game page will have a logo, nav bar with 3 nav links ('Home', 'How To Play' and 'Quit'), the player's name and money earned, cash prize box, life lines, and the main game area where the question and multiple answer choices will be displayed.
        * The popup boxes will be minimal in text content, and will only contain 1 or 2 buttons/links.



#### Design Choices:
* 

### Structure

#### Interaction Design (IXD)
*

#### Information Design/Architecture
*

### Skeleton

#### Wireframes

### Surface

## FEATURES

### Existing Features

#### Home Page
<!-- Screenshot of Home Page -->
* Play Button
* 'How To Play' Button

#### Game Page
<!-- Screenshot of Game Page for large screens -->
<!-- Screenshot of Game Page for mobile screens -->
* Navigation Bar (Logo & Nav Menu)
* Progress Bar
* Life Lines
* Question Area
    * Question text
    * Timer
* Answers Buttons
* Money Progress Area
* Footer
    * Social Media Icons

#### 404 Page
 <!-- screenshot here  -->

### Features for the Future
* 

## FIXED BUGS
* ISSUE:
    * INTENDED OUTCOME:
    * SOLUTION:

## BUGS LEFT TO FIX
* ISSUE:
    * INTENDED OUTCOME:
    * REASON NOT FIXED:

## TESTING
### Responsiveness
### Accessibility
### Links/Buttons Functionality Testing
### Validator Testing
* W3C Markup Validator
* W3C CSS Validator

### Lighthouse Testing
* On Desktop
* On Mobile

## DEPLOYMENT

### Version Control

### Github Pages Deployment
View the live website here: https://marked-gil.github.io/the-million-euro-quiz/

### Cloning from Github


## TECHNOLOGIES
The following technologies are used in this website:

* Programming Languages: 
    * Javascript
    * HTML
    * CSS

## CREDITS

### Content

### Media

## ACKNOWLEDGMENT