const findTheOldest = function(arr) {
    const ages = arr.map(findAge);
    let oldest = 0;
    let oldestIndex = -1;
    for (i = 0; i < ages.length; i++) {
        const age = ages[i];
        if (age > oldest) {
            oldest = age;
            oldestIndex = i;
        }
    }
    console.log(oldestIndex);
    return arr[oldestIndex];
};

const findAge = function(person) {
    const birth = person.yearOfBirth;
    const death = ('yearOfDeath' in person) ? person.yearOfDeath : new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
