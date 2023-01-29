function processText() {
    // Get the user's input from the text field
    var input = document.getElementById("input").value;
  
    // Use a regular expression to find 9-digit numbers after "fødselsdato: "
    var regex = /fødselsdato: (\d{9})/g;
    var match;
    var matches = [];
    while (match = regex.exec(input)) {
      matches.push(match[1]);
    }
  
    // Create a new HTML element to display the results
    var output = document.getElementById("output");
    output.innerHTML = "";
    for (var i = 0; i < matches.length; i++) {
      var span = document.createElement("span");
      span.innerHTML = matches[i];
      span.setAttribute("id","output-number-"+i);
      span.setAttribute("class","output-number");
      output.appendChild(span);
      output.appendChild(document.createElement("br"));
    }
  }
  
function copyToClipboard() {
    // Get all of the output elements
    var outputNumbers = document.getElementsByClassName("output-number");
  
    // Create an empty string to store the output elements
    var outputString = "";
  
    // Loop through the output elements and add them to the output string
    for (var i = 0; i < outputNumbers.length; i++) {
      outputString += outputNumbers[i].innerText + "\n";
    }
  
    // Create a temporary text area element
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = outputString;
    document.body.appendChild(tempTextArea);
  
    // Select the text in the text area
    tempTextArea.select();
  
    // Copy the selected text to the clipboard
    document.execCommand("copy");
  
    // Remove the text area element from the page
    document.body.removeChild(tempTextArea);
}
  
 