/*DOM EXERCISES
        31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list
*/


//------------------Task started -----------------------//


//     31) Get the element with an id of "container" from the page

const getDivElementsFromHTML = document.querySelectorAll("div")





//-----        32) Get every <td> element from the page

const GetEveryTDElementFromPage = document.querySelectorAll("td")





////        33) Use a loop for printing the text inside of every <td> element in the page

// function generate_table() {
//     var body = document.getElementsByTagName("body")[0]; 
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
  
//     // creating all cells
//     for (var i = 0; i < 2; i++) {
//       // creates a table row
//       var row = document.createElement("tr");
  
//       for (var j = 0; j < 2; j++) {
//         var cell = document.createElement("td");
//         var cellText = document.createTextNode(" td "+i+", td "+j);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
//       tblBody.appendChild(row);
//     }
//     tbl.appendChild(tblBody);
//     body.appendChild(tbl);
//     tbl.setAttribute("border", "2");
//   }


// Exercises  34) Write a function to change the heading of the page

const changeHeadingPage = function(){
    let pageHeading = document.getElementById("page-heading")
    pageHeading.innerHTML = "I am new header here"
}
// let output34 = changeHeadingPage()
// console.log(output34)




// Exercises   35) Write a function to add an extra row to the table



const addNewRowToTable = function(){
    let getTableId = document.getElementById("add-new-row")
    let newTableRow = document.createElement("TH")
    newTableRow.innerText = "Country"
    getTableId.appendChild(newTableRow)
}
// let output35 = addNewRowToTable()
// console.log(output35)


// Exercises  36) Write a function to add a class of "test" to each row in the table




const changeStyleEachRow = function(){
    let rowId = document.getElementById("add-new-row")
    rowId.classList.add("test")
}
// let output36 = changeStyleEachRow()
// console.log(output36)






// Exercises 37) Write a function to add a red background to every link in the page



const addBackgroundToLinks = function(){
    let getLinkId = document.querySelectorAll("a")
    getLinkId[1].style.backgroundColor = "red"
    getLinkId[3].style.backgroundColor = "red"
    getLinkId[5].style.backgroundColor = "red"
    getLinkId[7].style.backgroundColor = "red"
}
// let output37 = addBackgroundToLinks()
// console.log(output37)






// Exercises 38) Console log "Page loaded" when the page is correctly loaded

window.onload = function(){
    console.log("Page Loaded")
}
let output38 = onload()
console.log(output38);







// Exercises 39) Write a function to add new items to a unordered list
const addNewItemToUL = function(){
    let getULId = document.getElementById("unordered-list")
    let addNewLI = document.createElement("LI")
    addNewLI.innerText = "New Added LI"
    getULId.appendChild(addNewLI)
}
// let output39 = addNewItemToUL()
// console.log(output39)






// Exercises 40) Write a function to empty a list
const emptyTheList = function(){
    let getListId = document.getElementById("ordered-list")
    getListId.style.display = "none"
    let getListId2 = document.getElementById("unordered-list")
    getListId2.style.display = "none"
}

/// i have finished --////