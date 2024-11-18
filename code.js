// This is our main function   
function validatePalin() {  
    // Grabs the data from the text box in our html using the id
    const string = document.getElementById("word");
    // Converts the data into a valid string
    const stringVal = string.value;
    // Gets the total length of the word  
    const len = stringVal.length;  
    // Use for loop to divide the words into 2 halves  
        for (let i = 0; i < len / 2; i++) {  
            // Validate the first and last characters are same  
            if (stringVal[i] !== stringVal[len - 1 - i]) {
                // Outputs negative results  
                alert( 'It is not a palindrome');  
                break;
            } else {
                // Outputs positive results
                alert( 'It is a palindrome'); 
                break;
            }  
        }
    }