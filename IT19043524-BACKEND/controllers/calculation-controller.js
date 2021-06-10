const { Worker, isMainThread } = require("worker_threads");

let worker;

const calculateAmount = (req, res, next) => {
    //TODO:
    let rooms = req.body.roomAmount;
    
    if (isMainThread) {        
        worker = new Worker('./IT19043524-BACKEND/controllers/calculation-worker.js');

        const dataToParse = {
            "rooms" : rooms
        }
        worker.postMessage(dataToParse);

        worker.on('message', (data) => {
            console.log("From parent=", data);
        })

    }

}

exports.calculateAmount = calculateAmount;