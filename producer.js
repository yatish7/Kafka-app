const {kafka} = require('./client')

async function init(){
         const producer = kafka.producer();

         console.log("Connecting to the producer...")
         await producer.connect()
         console.log("Connected to producer successfully...")

         await producer.send({
            topic:'rider-updates',
            messages:[
            {
                partition:0,
                key:'location-update', 
                value: JSON.stringify({name: 'Rakesh', location: 'Hyderabad'})
            }
            ]
         })

         console.log("Disconnecting Producer...")
         await producer.disconnect()
}

init()