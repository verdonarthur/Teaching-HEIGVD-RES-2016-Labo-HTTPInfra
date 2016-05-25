Chance = require('chance');
chance = new Chance();


function generateStudent() {

    var numberOfStudent = chance.integer({
        min: 0,
        max: 10
    })
    console.log(numberOfStudent);

    var students = [];
    for (var i = 0; i < numberOfStudent; i++) {
        var birthYear = chance.year({
            min: 1990,
            max: 2000
        });

        var gender = chance.gender();


        students.push({
            firstname: chance.first({
                gender: gender
            }),
            lastname: chance.last(),
            gender: gender,
            birthday: chance.birthday({
                year: birthYear
            })
        });

    }

    console.log(students);
    return students;
}


function generatePayload() {

    return generateStudent();
}

exports.generatePayload = generatePayload;
