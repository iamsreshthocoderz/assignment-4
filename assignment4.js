function cubeNumber(number) {

    if(typeof number !== 'number'){
        return 'please provide a number';
    }
    const result = number * number * number ;
    return result ;
}








function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return false; 
    }
    if (string2.length === 0) {
        return 'sorry second string not validate ';
    }

    return string1.includes(string2);

    
}


function findAddress(addressObject) {
    if (typeof addressObject !== 'object' || addressObject === null) {
        return 'Invalid input. Please provide a valid address object.';
    }

    const street = addressObject.street || '';
    const house = addressObject.house || '';
    const society = addressObject.society || '';

    return `${street},${house},${society}`;
}
const address = { street: 10, house: "15A", society: "Earth Perfect" };

const address1 = { street: 10, society: "Earth Perfect" };

const address2 = { street: 10 };
console.log(findAddress(address2));