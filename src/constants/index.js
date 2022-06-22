//we need the Date object, 
let today= new Date();
today.setDate(today.getDate());

let one_hundo = new Date();
one_hundo.setDate(one_hundo.getDate() - 100 ); //we need the date 100 days ago.

const year = one_hundo.getFullYear();

const day = one_hundo.getDate();

const month = one_hundo.getMonth();

//addZero will add a zero to the front of the numba and return it
function addZero(args){
    return args < 10 ? ('0' + args) : args;
 }

const dateFinal = () => {
    console.log(year + '-' + addZero(month) + '-' + addZero(day));

    return year + '-' + addZero(month) + '-' + addZero(day);
}

export default dateFinal;