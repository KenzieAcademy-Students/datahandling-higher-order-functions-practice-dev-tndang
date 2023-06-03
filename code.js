// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");

const printKata = function  (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Kata 0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes1);  

// Kata 1
const activeUsers = users.filter(user => user.isActive === true);
printKata(1, activeUsers);

// Kata 2
const userEmails = users.map(user => user.email);
printKata(2, userEmails);

// Kata 3
const hasOvation = users.some(user => user.company === "OVATION");
printKata(3, hasOvation);

// Kata 4 
const over28 = users.find(user => user.age === 28);
printKata(4, over28);