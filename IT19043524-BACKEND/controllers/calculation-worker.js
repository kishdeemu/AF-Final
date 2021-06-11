const {parentPort, isMainThread} = require('worker_threads');

//Checks whether the thread is NOT in the main thread
if(!isMainThread){
    parentPort.on('message', (data) => {
        let total = 0;
        data.rooms.map(rm=> {
            total = total + rm.amount;
        })

        //pass calculated data to parent thread
        parentPort.postMessage(total);
    })
}