const {kafka} = require('./client');

async function init(){
    const consumer =kafka.consumer({groupId: 'group-1'})
    console.log("Connecting to the Consumer...");
    consumer.connect();
    console.log("Connected to the consumer successfully...")

    consumer.subscribe(
        {topics:['rider-updates'],fromBegining:true}
    )

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause })=>{
            console.log(`[${topic}]:PARTITION:${partition}:`,message.value.toString())
        }
    })
}

init()