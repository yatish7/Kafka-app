const {Kafka} = require('kafkajs')

exports.kafka  =  new Kafka({
    clientId: "kafka-app",
    brokers:['192.168.0.5:9092']
})