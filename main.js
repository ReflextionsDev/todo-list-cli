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

const inputOptions = [1,2]


intro();
menu();


function intro() {
    console.log("Welcome to the To-Do List Manager Application!", '\n')
}

function menu() {

    // List Items
    if (items.length === 0) {
        console.log('Your to-do list is empty.')
    } else {
        console.log('You have ' + items.length + ' to-do item(s).')
        listitems(items)
    }

    // Action Menu
    console.log('\n' + "~ Select an action ~" + '\n' + "[1] Create a to-do item" + '\n' + '[2] Complete a to-do item')
    let input = Number(prompt('Selection: '))
    

    //Error Handling
    while (!(inputOptions.includes(input))) {
        input = Number(prompt('Invalid Input, enter 1 or 2: '))
    }

}


function listitems(arr) {
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







