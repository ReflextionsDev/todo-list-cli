// Terminal based to-do program

// Variables
const prompt = require('prompt-sync')({ sigint: true })
let items = [], menuActionsText = [], menuActions = [], inputOptions = []
let input, listEmpty

// Init
console.log('\n' + "Welcome to the To-Do List Manager Application!")
menu()

// Navigation

function menu() {

    console.log('\n' + '==============================================' + '\n')

    // List Items
    if (items.length === 0) {
        listEmpty = true
        console.log('Your to-do list is empty.')
    } else {
        listEmpty = false
        console.log('You have ' + items.length + ' to-do item(s).')
        listItems(items)
    }

    // Build Action Menu

    menuActions = []
    menuActionsText = []

    menuActionsText.push("Create a to-do item")
    menuActions.push('create')

    if (!listEmpty) {
        menuActionsText.push("Complete a to-do item", "Uncomplete a to-do item", "Edit a to-do item", "Delete a to-do item")
        menuActions.push('complete', 'uncomplete', 'edit', 'delete')
    }

    menuActionsText.push("Exit program")
    menuActions.push('exit')

    // Display Action Menu
    console.log('\n')

    for (let i = 0; i < menuActionsText.length; i++) {
        console.log('[' + (i + 1) + ']' + menuActionsText[i])
    }

    // Get input
    input = Number(prompt('Selection: '))
    setInputOptions('menu')
    checkInput("Invalid Input, enter a menu number: ")

    // Choose Action
    let choice = menuActions[input - 1]
    switch (choice) {
        case "create":
            createItem()
            break;
        case "exit":
            exitProgram()
            break;
        case "complete":
            completeItem()
            break;
        case "uncomplete":
            uncompleteItem()
            break;
        case "edit":
            editItem()
            break;
        case "delete":
            deleteteItem()
            break;
        default:
            console.log("Program error: invalid input accepted.")
            break;
    }
}

function exitProgram() {
    console.log("Closing...")
}

// Utility Functions
// Could combine checkInput w/ SetInputOptions

function checkInput(str) {
    while (!(inputOptions.includes(input))) {
        input = Number(prompt(str))
    }
}

function setInputOptions(str) {

    inputOptions = []

    if (str === 'menu') {
        for (let i = 0; i < menuActions.length; i++) {
            inputOptions.push(i + 1)
        }
    }
    else if (str === 'items') {
        for (let i = 0; i < items.length; i++) {
            inputOptions.push(i + 1)
        }
    } else {
        console.log('Program error: Invalid input option specified.')
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

function getItem(str) {
    // Input Prompt
    console.log(str)
    input = Number(prompt(''))

    // Input Validation
    setInputOptions('items')
    checkInput("Invalid input, enter an item number: ")
}

// Item Functions

function createItem() {

    // Input Prompt
    console.log('\n' + "~ Creating a new to-do item ~" + '\n' + "What is this to-do item called?")
    input = prompt('')

    // Create Item
    items.push([input, 0])
    menu()
}

function completeItem(num) {

    // Input Prompt
    getItem(String('\n' + "~ Completing a to-do item ~" + '\n' + "Which to-do item would you like to complete?"))

    // Complete Item
    items[input - 1][1] = 1
    menu()

}

function uncompleteItem(num) {

    // Input Prompt
    getItem(String('\n' + "~ Uncompleting a to-do item ~" + '\n' + "Which to-do item would you like to uncomplete?"))

    // Complete Item
    items[input - 1][1] = 0
    menu()

}

function editItem() {

    // Input Prompt
    getItem(String('\n' + "~ Editing a to-do item ~" + '\n' + "Which to-do item would you like to edit?"))

    // Edit Item
    console.log('\n' + "Previous Text: " + items[input - 1][0] + '\n' + "New Text:")
    let newText = prompt('')
    items[input - 1][0] = newText
    menu()
}

function deleteteItem() {

    // Input Prompt
    getItem(String('\n' + "~ Deleting a to-do item ~" + '\n' + "Which to-do item would you like to delete?"))

    // Delete Item
    items.splice(input - 1, 1)
    menu()
}