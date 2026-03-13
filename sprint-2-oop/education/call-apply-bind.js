/* CALL APPLY BIND */

// Call - func.call(this, arg1, arg2) = Apply - func.apply(this, [arg1, arg2])
const user = {
    firstName: "Maksym",
    lastName: "Demkovych",
    getFullName: function() {
        return `Full name: ${this.firstName} ${this.lastName}`;
    },
    getFullName2: function() {
        return `Full name: ${firstName} ${lastName}`;
    }
}

function fullName(obj) {
    return `Full name: ${obj.firstName} ${obj.lastName}`
}

console.log(user.getFullName());
console.log(fullName(user));

function getUserInfo(position, exp){
    return `Full name: ${this.getFullName()} \n Position: ${position} \n Experience: ${exp} years.`;
}

console.log(getUserInfo.call(user, 'Student', 5)); // Comma-separated
console.log(getUserInfo.apply(user,['Employer', 2])); // Array


// Bind - func.bind(thisArg, arg1, arg2) → newFunc()
const getInfo = getUserInfo.bind(user, 'Student');
console.log(getInfo(18));