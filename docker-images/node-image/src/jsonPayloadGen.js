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

function genPlaName() {
    var planetsName = ["Sun", "Kepler", "Earth", "Dagoba", "Coruscant", "Venus", "Jupiter", "Hoth"];

    var idName = chance.integer({
        min: 0,
        max: planetsName.length-1
    });
    var rndNumber = chance.integer({
        min: 1,
        max: 9999
    });

    return planetsName[idName] + "-" + rndNumber;
}

function generatePlanet() {
    var nbrOfPlanet = chance.integer({
        min: 1,
        max: 10
    });

    var planets = [];
    for (var i = 0; i < nbrOfPlanet; i++) {
        var minTemperature = chance.integer({
            min: -270,
            max: 1000
        });
        var maxTemperature = chance.integer({
            min: minTemperature,
            max: 1000
        });

        planets.push({
            name: genPlaName(),
            minTemperature: minTemperature,
            maxTemperature: maxTemperature
        });
    }

    console.log(planets);

    return planets;
}

function generatePayload() {

    return generatePlanet();
}

exports.generatePayload = generatePayload;
