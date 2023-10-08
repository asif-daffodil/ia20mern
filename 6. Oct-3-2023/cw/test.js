let students = [
    ["Md Raju", "Tangail", 21],
    ["Md Munna", "Tangail", 22],
    ["Md Monzurul", "Tangail", 20],
    ["Md Bappy", "Barishal", 21],
    ["Krishno Roy", "Rongpur", 22],
    ["Md Miraz",  "Feni", 20]
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i][0] + " lives in " + students[i][1] + " and his age is " + students[i][2]);
}

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}

/**
 * students[0][0] = "Md Raju";
 * students[0][1] = "Tangail";
 * students[0][2] = 21;
 */