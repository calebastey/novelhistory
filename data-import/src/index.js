
const fs = require('fs');
const parse = require('csv-parse');
const admin = require('firebase-admin');
const serviceAccount = require("../credentials");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://novel-history.firebaseio.com"
});

let csvData=[];
fs.createReadStream('./data.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        csvData.push(csvrow);
    })
    .on('end',function() {
        csvData.forEach((row) => {
            admin.firestore()
                .collection("novels")
                .doc(row[0])
                .set(generateJson(row))
                .then((res) => {
                    console.log("Wrote ", row[1]);
                })
                .catch((error) => {
                    console.error("Error: ", error);
                });
        });
    });

function generateJson(row) {
    return {
        "id": row[0],
        "title": row[1],
        "author": row[2],
        "start": row[3],
        "end": row[4],
        "uri": row[5],
        "summary": row[6],
        "marketplaceLink": row[7],
        "rating": row[8]
    }
}
