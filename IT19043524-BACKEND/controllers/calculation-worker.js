const {parentPort, isMainThread} = require('worker_threads');

if(!isMainThread){
    parentPort.on('message', (data) => {
        let total = 0;
        data.rooms.map(amount=> {
            total = total + amount;
        })

        parentPort.postMessage(total);
    })
}