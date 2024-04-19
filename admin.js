const {kafka} = require('./client')

async function init(){
    const admin = kafka.admin()
    console.log("Admin is connecting...")
    admin.connect()
    console.log("Admin successfully connected...")


    console.log('Creating topic [rider-updates]')
    await admin.createTopics({
        topics:[{
            topic : "rider-updates",
            numPartitions: 2,
        }]
    })
    console.log('Created topic [rider-updates]')


    console.log("Disconnecting admin...")
    await admin.disconnect()

}

init()