//Functions Activity 3
console.clear();
//Multi Dimensional Array of accounts: Account Number | Pin | Balance
let Accounts = [
    ["754556884", "1234", 120.00],
    ["124565523", "4521", 145.23],
    ["445625542", "4575", 20.12]
]

const checkBalance = (account, pinNumber) => {
    
    //Check if an account exists and allocate to foundAcccount
    let foundAccount;
    foundAccount =  Accounts.find((element) => element[0] == account);
    
    //Handle three outcomes - Account not found | Account found but incorrect pin | account found and pin correct
    if (typeof foundAccount === 'undefined')
    {
        console.log("Account not found");
        return [false,false,0];
    }
    else if (foundAccount[1] != pinNumber)
    {
        console.log("Pin is incorrect for ths account")
        return [true,false,0];
    }
    else
    {
        return [true,true,foundAccount[2]];
    }
};

const adjustBalance = (account, amount) => {
    //Check if an account exists and allocate to foundAcccount
    let foundAccount;
   foundAccount = Accounts.find((element) => element[0] == account);
    if (typeof foundAccount === 'undefined') return false;
    
    //check it there is an error using 
    try{
        Accounts.find((element) => element[0] == account)[2]  = foundAccount[2]+amount;
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
    
}

const Withdrawl = (amount, account, pin) => {
    
    //store the result of the checkBalance as an array in checkResult
    // [account found, pin valid, balance available]
    let checkResult = checkBalance(account, pin);
    
    //handle three states - Account Not found or Pin Incorrect | Balance available | Insufficient funds
    if (!checkResult[0] || !checkResult[1])
    {
        console.log("Not Authorised");
    }
    else if (amount <= checkResult[2])
    {
        console.log(`Withdrawl of ${amount} authorised leaving a balance of ${checkResult[2]-amount}.`);
        if (adjustBalance(account, 0-amount))
        {
            console.log("Balance Updated")
        }else {
            console.log("There was an error updating the balance")
        };
    }else{
        console.log(`There are insufficient funds`);
    } 
};

Withdrawl(110.00, "754556884", "1234");
console.log("-".repeat(30));
Withdrawl(20.00, "754556884", "1234");
console.log("-".repeat(30));
Withdrawl(120.00, "124565523", "3232");
console.log("-".repeat(30));
Withdrawl(120.00, "4456255422", "4575");
console.log("-".repeat(30));

