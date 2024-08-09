const accountID = 1001
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed 

accountEmail = "xyz@gmail.com"
accountPassword = "54321"
accountCity = "Indore"

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/*
    Prefer not to use 'var'
    Because of isssue in block scope and functional scope
*/



