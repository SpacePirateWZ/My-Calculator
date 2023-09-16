# My-Calculator
Attempting The Odin Project: Calculator 

<ins>**1st Attempt Notes:**</ins>

**To consider:**
1) default value of screen is always set at zero
2) clicking each number will add the entered number to the end of the value
3) functions of each button are as follows:

- **AC** (reset screen value back to zero)

- **+/-** (change current entered value to positive/negative)

- **%** (essentially just divide by 100)

- **/** (divide the next entered value after clicking any function2 buttons)

- \* (multiply the next entered value after clicking any function2 buttons)

- **-** (subtract the next entered value after clicking any function2 buttons)

- **+** (add the next entered value after clicking any function2 buttons)
  
- **=** (complete the last function2 operation)

<p align="justify">(Note that the one difference between equal and other function2 buttons is that after clicking equal, clicking a number will reset the number back to the entered number, meaning that previous number accumulated will be dumped. Unless user click on other function1/function2 buttons in which case the previous number will continue to be affected)</p>

4) maximum number of digits to display on screen is 9
5) allow for exponential value but beyond a certain threshold will become NaN
6) if get infinity will display undefined or something funny (extra)
7) pressing keyboard also will interact with the calculator apart from clicking (extra)

<ins>**2nd Attempt Notes:**</ins>

****COMPLETED:****

1) Calculator able to append number at the end of previous number to form a value on the display screen.
2) Calculator able to perform the following functions:
- clear display screen after clicking 'AC' button
- perform basic operations like add, subtract, multiple, and divide after clicking on respective buttons followed by pressing the 'equal' button each time to compute
3) Added limitations to allow '.' to be entered only once. As for '0', it can be entered only once if it is the 1st digit, but allowed to add on for subsequent digits as long as the 2nd digit is not '0'.

****PENDING FUNCTIONS TO ADD / BUGS TO FIX / FURTHER IMPROVEMENTS:****

1) New functions to add:
- **+/-** (convert current value to positive/negative when clicked)
- **%** (divide current value by 100 when clicked)
  
2) Currently Operator functions will only generate result when click on 'equal' button and supposingly after clicking the 'equal' button, clicking the number button should restart the display screen instead of appending to the result.

3) To allow calculator to perform computation and display result on screen when user click on any operator buttons apart from 'equal' button.

4) Calculator still unable to cater for exponential value and output NaN when it reaches a certain threshold.

5) Addition of backspace button to allow user to remove entered number.

<ins>**3rd Attempt Notes:**</ins>

**Latest Updates:**

1) Added new functions below:

- **+/-** (change **current** entered value to positive/negative) (**Note:** won't affect previously accumulated value)

- **%**  (divide **current** entered value by 100) (**Note:** won't affect previously accumulated value)

- **DEL** (enable user to delete last entered number one by one) (**Note:** previously accumulated value will still be registered, to fully reset, need to click the 'AC' button)

2) Fixed the bug for 'equal' button whereby clicking any number button after it will cause the number to append to the calculated value in the display screen instead of resetting the display screen value with the entered number.

3) Currently calculator able to perform chain computation and display the result of each computation immediately on screen just by entering the number buttons (0-9) and the 4 main operators ('+','-','*','/'):

   **Ex:** Entering in the following sequence : '12 + 4 - 6 * 6 / 5' will display the result in the following order: '16, 10, 60, 12'

**Notes:**
- The chain computation will continue provided that user does not click on the 'equal' button which will reset the accumulated value with the newly entered number.
- The operation will always be based on 1st operator that is clicked, clicking another operator will not stop the initial operation from using the 1st operator:

  **Ex:** Consider the following sequence: '12 + - 4 * - + 8', the display result will be in the following order: '16, 128'

4) Minor adjustment to HTML to make space for new 'DEL' button and added some simple styling & hover effects on the calculator buttons.

<ins>**EXTRA**</ins>

<p align="justify">Good grief~ This took me a while, but yes, I finally did it! 🫠 Needless to say, this was the most challenging project for me thus far but also the most rewarding when I was able to figure out the logic and google my way for the solutions I needed. The hardest part of this project was at the beginning when I was trying to execute for the many 'great' ideas that I have brainstormed. However, as I started executing them, I soon realized that some of them were logically flawed due to my lack of understanding on some of the javascript fundamentals. Hence, I decided to take a short break from this project and went back to brush up my fundamental knowledge and skills before attempting it again with alternative solutions. After my training, I have gotten more comfortable with classes, objects, higher-order functions, array methods, etc. and figured that I am ready to take on the project again from where I left it andddd the rest is history~ Although I know that my codes are far from perfect, but for now I am just glad that they are working as intended and I am sure that we can all agree that's the most important part!😆 (Please just let me savor this moment 🥲) Anyway, one down, more to go! 😎</p>

