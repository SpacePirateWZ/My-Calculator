# My-Calculator
Attempting The Odin Project: Calculator 

**1st Attempt Notes:**

To consider:
1) default value of screen is always set at zero
2) clicking each number will add the entered number to the end of the value
3) functions of each button are as follows:

AC - reset screen value back to zero
posneg - change current entered value to positive/negative
percent - essentially just divide by 100
/ --> divide the next entered value after clicking any function2 buttons
* --> multiply the next entered value after clicking any function2 buttons
- --> subtract the next entered value after clicking any function2 buttons
+ --> add the next entered value after clicking any function2 buttons
= --> complete the last function2 operation
(Note that the one difference between equal and other function 2 buttons is that after clicking equal, clicking a number will reset the number back to the entered number, meaning that previous number accumulated will be dumped. Unless user click on other function1/function2 buttons in which case the previous number will continue to be affected)

4) maximum number of digits to display on screen is 9
5) allow for exponential value but beyond a certain threshold will become NaN
6) if get infinity will display undefined or something funny
7) pressing keyboard also will interact with the calculator apart from clicking (extra)

**2nd Attempt Notes:**

****COMPLETED****

1) Calculator able to append number at the end of previous number to form a value on the display screen
2) Calculator able to perform the following functions:
- clear display screen after clicking 'AC' button
- perform basic operations like add, subtract, multiple, and divide after clicking on respective buttons followed by pressing the 'equal' button each time to compute
3) Added limitations to allow '.' to be entered only once. As for '0', it can be entered only once if it is the 1st digit, but allowed to add on for subsequent digits as long as the 2nd digit is not '0'

****PENDING FUNCTIONS TO ADD / BUGS TO FIX / FURTHER IMPROVEMENTS****

1) Operator functions to add:
- posneg (convert current value to positive/negative when clicked)
- percent (divide current value by 100 when clicked)
  
2) Currently Operator functions will only generate result when click on 'equal' button and supposingly after pressing 'equal' button, clicking the number button should restart the display screen instead of appending to the result

3) To allow calculator to perform computation and display result on screen when user click on any operator buttons apart from 'equal' button

4) Calculator still unable to cater for exponential value and output NaN when it reaches a certain threshold

5) Addition of backspace button to allow user to remove entered number
