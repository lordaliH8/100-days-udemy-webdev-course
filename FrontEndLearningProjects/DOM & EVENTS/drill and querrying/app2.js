//document.body.children[1].children[0].href = "https://google.com";

// let anchorElement = document.getElementById("anchor");
// anchorElement.href = "https://google.com";


// let anchorElement = document.querySelector('#anchor')
// anchorElement.href ='https://academind.com'

let newElement = document.createElement('a')

let firstParagraph = document.querySelector('p')

firstParagraph.append(newElement)
firstParagraph.remove(newElement)