console.log(ticketPrice(17))

function ticketPrice(age)
{
    switch(age){
        case age < 18:
            return "£8";
            break;
        case age >=18 && age < 60:
            return "10.95";
            break;
        case age >= 60:
            return "7.50";
            break;
        default:
            return "error";
    }
}