//  SearchingStrings.js 
// Searching strings with indexOf and lastIndexOf.
var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function buttonPressed() 
{
   var inputField = document.getElementById( "inputField" );

   document.getElementById( "results" ).innerHTML =
      "<p>First occurrence is located at index " + 
         letters.indexOf( inputField.value ) + "</p>" +  
      "<p>Last occurrence is located at index " + 
         letters.lastIndexOf( inputField.value ) + "</p>" +      
      "<p>First occurrence from index 12 is located at index " +
         letters.indexOf( inputField.value, 12 ) + "</p>" +     
      "<p>Last occurrence from index 12 is located at index " +
         letters.lastIndexOf( inputField.value, 12 ) + "</p>";
} // end function buttonPressed

// register click event handler for searchButton
function start()
{
   var searchButton = document.getElementById( "searchButton" );
   searchButton.addEventListener( "click", buttonPressed, false );
} // end function start

window.addEventListener("load", start, false);

/* use String method lastIndexOf to determine the location of the last
occurrence in letters of the string in inputField. If the substring is found, the index at
which the last occurrence of the substring begins is returned; otherwise, –1 is returned.
Lines 14–15 use String method indexOf to determine the location of the first occurrence in string letters of the string in the inputField text field, starting from index 12
in letters. If the substring is found, the index at which the first occurrence of the substring (starting from index 12) begins is returned; otherwise, –1 is returned.
Lines 16–17 use String method lastIndexOf to determine the location of the last
occurrence in letters of the string in the inputField text field, starting from index 12 in
letters and moving toward the beginning of the input. If the substring is found, the
index at which the first occurrence of the substring (if one appears before index 12) begins
is returned; otherwise, –1 is returned.*/