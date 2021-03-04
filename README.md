# javascript-challenge
Homework 14

This is a webpage that dynamically updates according to the user's input
The webpage is about UFOs

1. I have created some buttons for fun. They do not do much but the change texts and count visitors.
2. In the first part (level one), I read the UFO data with Javascript. The data is given and it is located inside the static folder
3. The html that displays the website is index.html, which uses the code in Java.js at the same level as index.html and also uses the script to do most of the work, which is Aliens.js
4. I created the headers for the data in html and then used code to initiate js objects corresponding to table and table element.
5. The table Element was passed to a function that handles the reading and reformating the data so that the data can show on the webpage as a table.
6. At this point, every variable is some string
7. Then, I used the html button and form definitions to capture the user's input. The user has to click the button.
8. The date format for the input is recommended (initialized also) to be able to handle the information. This is a "date" captured as such.
9. Because the date is a js object, it cannot be compared with the string data of the table. To resolve this, I created some code to re-format the date object as string. The re-formatting includes the possibility that user's do not use "0" when they enter the month and day when it is necessary.
10. The date string is then used to search for the matching elements inside the table. 
11. The search returns some js table element, which in turn has to be passed to the dynamic part of the html.
12. I went on to create some searches for additional types of searches, which is part of level 2 of this homework. These additional inputs from the user are already strings, so they can be passed to the javascript "as is". Some functions were created in javascript to handle these other types of searches and display the summary tables on the page dynamically
13. Finally I did some work in the html to add some references to public images taken from the internet
14. It was difficult to make the page look better, in particular the extra buttons to play with the user. I had to create a special style to render the buttons to be placed in separate halves of the screen.
