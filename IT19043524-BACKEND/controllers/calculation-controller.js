const { Worker, isMainThread } = require("worker_threads");

let worker;

const calculateAmount = (req, res, next) => {
    let rooms = req.body;
    if (isMainThread) {        
        worker = new Worker('./controllers/calculation-worker.js'); //Creates a worker thread (child thread)

        const dataToParse = {
            "rooms" : rooms
        }
        //Passes data to the worker thread (child thread)
        worker.postMessage(dataToParse);

        //Recieved incoming data from worker thread (child thread)
        worker.on('message', (data) => {
            console.log("From parent=", data);
            //send the data to frontend
            res.json({total: data});
        })       
    }
}

//exports the function so it can be used by other files.
exports.calculateAmount = calculateAmount;