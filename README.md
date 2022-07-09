# The Million Euro Quiz
<!-- Image from IamResponsive here-->
The **Million Euro Quiz** is a time-pressured online quiz game that tests the general knowledge of its player by asking 15 multiple-choice questions with varying difficulty levels, from easy to hardest, and simulates a game show that earns a cash prize. Each question is provided with 4 randomly arranged answer choices among which only one is correct. Also, it contains a special feature, such as the life lines, which are help tools for the player. [View the live website](https://marked-gil.github.io/the-million-euro-quiz/).

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
* [Acknowledgment](#acknowledgment)

---
## UXD (User Experience Design)
### **Strategy**
#### **Goal:**
* This site aims to provide an online quiz game to users, young and old, who want to play and enjoy a challenging game that tests their general knowledge. This is endeavored to be achieved by employing special features, which include a timer, life lines, randomness of questions, progressive level of difficulty, and 'cash-prize winning' simulation.

#### **User Stories:**
* As a user, I want to play a quiz game online to test my general knowledge.
* As a user, I want to feel a sense of challenge and excitement when playing the game, so it will not be just another ordinary quiz game.
* As a user, I want to play a simulation of a game that earns a cash prize so it will be more exciting.
* As a user, I want to re-play the game multiple times as I want and expect to be asked random questions each time so it will feel like new every time.
* As a user, I want to experience an increase in difficulty level as the game progresses to bring more challenge into it.
* As a user, I want to utilize strategic options to help me when a question is difficult, so the game will also have a strategic nature.
* As a user, I want to get immediate feedback on whether my answer is right or wrong so I will learn along the way.
* As a user, I want to have the feel of a personalized game so it would help preserve my interest in the game.
* As a user, I want to be able to quit the current game or return to home page so I would have the options to either play a new game or to enter a new name without needing to leave the site.
* As a user, I want to be able to read the mechanics of the game before starting, and even while playing the game so I can be guided well.
* As a user, I want the game to have an intuitive user interface so I can just play it straight away even without reading the mechanics of the game.

### **Scope**
#### Planned Features:
This online quiz game has the following planned features based on the User Stories:
* User Story:
    > As a user, I want to play a quiz game online to test my general knowledge.
    *  IMPLEMENTATION: 
        * Provide 15 general knowledge quiz questions per game.

* User Story:
    > As a user, I want to feel a sense of challenge and excitement when playing the game, so it will not be just another ordinary quiz game.
    * IMPLEMENTATION:
        * A timer will be set for each question, and the player must select their answer before the timer ends, otherwise game will be over and player loses.
        * The questions will be categorized according to difficulty level, and questions will increase in difficulty as the game progresses.

* User Story: 
    > As a user, I want to play a simulation of a game that earns a cash prize so it will be more exciting.
    * IMPLEMENTATION:
        * A box will be displayed where money prizes to be earned per question will be displayed and highlighted.
        * The current prize earned by the player will be displayed in realtime.

* User Story:
    > As a user, I want to re-play the game multiple times as I want and expect to be asked random questions each time so it will feel like new every time.
    * IMPLEMENTATION:
        * The game can be re-played multiple times by player, and 'Play Again' button will be available when game is over or won.
        * Questions will be randomly selected, and the order of their answer choices will be randomly displayed, every time the game is played and re-played.

* User Story:
    > As a user, I want to experience an increase in difficulty level as the game progresses to bring more challenge into it.
    * IMPLEMENTATION:
        * There are 4 levels of difficulty for the questions to be presented: "**easy**" (for questions 1-5), "**moderate**" (for questions 6-10), "**hard**" (for questions 11-14), and **"hardest"** (for the last question).

* User Story: 
    > As a user, I want to utilize strategic options to help me when a question is difficult, so the game will also have a strategic nature.
    * IMPLEMENTATION:
        * Life lines, which are help tools that increase the chances for the player to select the correct answer will be created. These life lines are: (1) to remove 1 wrong answer, (2) to remove 2 wrong answers, and (3) to add more time to the timer.
        * One or more life lines can be used in a question, but each life line can only be used once in the course of the game.

* User Story:
    > * As a user, I want to get immediate feedback on whether my answer is right or wrong so I will learn along the way.
    * IMPLEMENTATION:
        * After every answered question, a '✓' (check mark) will be shown on the selected answer when it is correct, and an 'x' (x mark) when it is wrong.

* User Story:
    > As a user, I want to have the feel of a personalized game so it would help preserve my interest in the game.
    * IMPLEMENTATION:
        * The game will require the player to enter their name before starting the game, and the player's name will be displayed while the game is on. Also, the player will be addressed by the their name when they lose or win the game.

* User Story:
    > As a user, I want to be able to quit the current game or return to home page so I would have the options to either play a new game or to enter a new name without needing to leave the site.
    * IMPLEMENTATION:
        * On the game page, the nav bar will contain the 'Home' button and 'Quit' button. When the 'Home' button is clicked, it will automatically redirects the user to the home page, and if they want to play the game again, they will have to enter their name. If the 'Quit' button is clicked, it will automatically stop the current game and show a popup box with options to play again or to return to home page.

* User Story: 
    > As a user, I want to be able to read the mechanics of the game before starting, and even while playing the game so I can be guided well.
    * IMPLEMENTATION:
        * A 'How to Play' popup box will be available for the player when they want to read the mechanics of the game. This can be accessed before the start of the game, and even when the game is on. A button or link will be provided for this.

* User Story: 
    > As a user, I want the game to have an intuitive user interface so I can just play it straight away even without reading the mechanics of the game.
    * IMPLEMENTATION:
        * The design of the game display will be minimalist.
        * The home page will only show the logo, and 2 buttons ('Play' and 'How To Play' buttons).
        * The game page will have a logo, nav bar with 3 nav links ('Home', 'How To Play' and 'Quit'), the player's name and money earned, cash prize box, life lines, and the main game area where the question and multiple answer choices will be displayed.
        * The popup boxes will be minimal in text content, and will only contain 1 or 2 buttons/links.

#### **Design Choices:**
This online game site is created with a minimalist, uncluttered design theme that seeks to retain the user's focus on the game. The play of shades of green is chosen due to its calming and stress-relieving effects to the user who, I believe, will play the game as a diversion from the hassles of life.

* **Color Scheme**: 
    * Green
    <!-- more content -->
* **Typography**:   
This website uses fonts from [Google Fonts](https://fonts.google.com/). The following are the utilized fonts:
    * **Roboto** — the default font for the site
    * **Playfair Display** — for the main logo
    * **Roboto Slab** — for the cash prize amount (number)
    * **Satisfy** — for the word 'CONGRATULATIONS' in 'GAME WON' lightbox

### **Structure**

#### **Interaction Design (IXD)**
* Consistent:   
    * The color scheme is consistent by mainly using shades of green and some yellow-like color in the entire page. 
    * The fonts used are consistent across all pages of the site.   
    * The look and feel of the lightboxes (popup boxes) are similar.    
    * There is consistency in the navigation system of the site and the game. Nav links are placed at the top of the game page, and 404 page. Also, other bottoms - such as the home, play, and play again - are always located at the bottom of some text content where a user would expect them to be seen after reading a short textual information. 
    * The logo appears on each page of the site.    
    * Feedbacks are available for each interaction a user does in the site. Examples include:   
        * When a mouse hovers on a link and button, a style change on the hovered link/button would appear, thus making the user aware that it is a clickable button/link.  
        * When clicking on a button, it would momentarily change the style of the button to confirm that it was successfully clicked.   
        * Also, when clicking certain buttons, a lightbox (popup box), would show up to provide more information or as a feedback to the action taken by the user.  

* Predictable:
    * The layout of each page of the site is simple and very intuitive, that the user would easily realize where they are on the home page. 
    * The buttons are placed strategically where users expect them to be, such as at the end of a short text of information, or at the top right beside the heading for the 'close' button in the 'How to Play' lightbox.      

* Learnable:
    * The navigation of the website is extremely learnable and very intuitive due to its simple styling and minimalist design.  
    * The game itself is easy to learn and users may dive into it and discover how it works effortlessly.        

* Visible:
    * The site is made simple and minimalist so that the user can easily locate the buttons they want to click, or the information they need in the site.   
    * The fonts are of sufficient size to ensure that the components of the site can be easily seen or read.    
    * The texts for these questions and answer options can be easily read through the use of a reader-friendly font.     

* Provides clear and intuitive feedback:
    * The buttons and links can be hovered and will show style changes in them to tell the user that they are functional or clickable.  
    * The buttons and links can be clicked and will show a momentary style change, and may also provide a lightbox (popup box) as a feedback.

#### **Information Design/Architecture**
*

### **Skeleton**
#### Wireframes

### Surface 
* Color
* Contrast
* Typography (Font Families & Sizes)
* Specific layout

## FEATURES

### **Home Page**
The home page is simple and only shows the website logo, and 2 buttons ('Play' & 'How to Play').
<!-- Screenshot of Home Page -->
* **'Enter Player's Name' Lightbox**    
    When the 'Play' button is clicked, this lightbox will pop up where the user can enter a name before entering the game page.     
    <!-- Screenshot of 'Enter Player's Name' -->
    * Inside the lightbox, the user will be required to enter a name before they can proceed to the game page. Clicking the "Let's Play" button without entering at least 1 character will flash a message to the user.   
    * Also, the entered name can only have a maximum of 12 characters - beyond this, a flash message will show up and the user is prevented from typing beyond 12 characters.  
    
* **'How To Play' Lightbox**    
    When the 'How to Play' button is clicked, this lightbox will pop up which contains the instruction for, or mechanics of, the quiz game.
    <!-- Screenshot of 'How to Play' Button -->
    * Contains an 'x' icon to close the lightbox. This is located at the top right of the lightbox.

### Game Page
<!-- Screenshot of Game Page for large screens -->
<!-- Screenshot of Game Page for mobile screens -->
* Navigation Bar (Logo & Nav Menu)
* Life Lines
* Question Area
    * Question text
    * Timer
* Answers Buttons

### 404 Page
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