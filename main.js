// You must make at least three commits in git while working on this project (make a commit everytime you get a new thing working)
// The user is able to add new to-do items
// A list of to-do items is displayed to the user
//     The number of to-do items is displayed to the user
//     If the user has no to-do items, this should be indicated to the user
// The user is able to set existing to-do items as complete
// Tell the user if they entered an invalid action


const prompt = require('prompt-sync')({ sigint: true })

// const items = []
const items = [['Do the dishes', 0], ['Buy a jetski', 1], ['Post bail', 0]]
let input
let inputOptions = [1, 2]

console.log("Welcome to the To-Do List Manager Application!", '\n')
menu()


function menu() {

    // List Items
    if (items.length === 0) {
        console.log('Your to-do list is empty.')
    } else {
        console.log('You have ' + items.length + ' to-do item(s).')
        listItems(items)
    }

    // Action Menu
    console.log('\n' + "~ Select an action ~" + '\n' + "[1] Create a to-do item" + '\n' + '[2] Complete a to-do item')
    input = Number(prompt('Selection: '))


    //Error Handling
    inputOptions = [1, 2]
    while (!(inputOptions.includes(input))) {
        input = Number(prompt('Invalid Input, enter 1 or 2: '))
    }

    // Add exit option

    // Actions
    if (input === 1) {
        createItem()
    }
    else if (input === 2) {
        completeItem()
    }
    else {
        console.log("Program error: invalid input accepted.")
    }
}


function listItems(arr) {
    for (let i = 0; i < arr.length; i++) {

        let status = '';

        if (arr[i][1] === 0) {
            status = '☐  '
        } else {
            status = '☑  '
        }

        console.log((i + 1) + '. ' + status + arr[i][0])
    }
}


function createItem() {
    console.log('\n' + "~ Creating a new to-do item ~" + '\n' + "What is this to-do item called?")
    input = prompt('')
    items.push([input, 0])
    menu()
}

function completeItem(num) {


    console.log('\n' + "~ Completing a to-do item ~" + '\n' + "Which to-do item would you like to complete ?")
    input = Number(prompt(''))








    // Assemble valid inputs
    inputOptions = []

    for (let i = 0; i < items.length; i++) {
        inputOptions.push(i + 1)
    }


        // could make new function?
    // Get item number


        // Error Handling


            // could also test if item is already added

    while (!(inputOptions.includes(input))) {
        input = Number(prompt("Invalid input, enter an item number: "))
    }

    items[input - 1][1] = 1


    menu()
}






inputOptions = [1, 2]