const { Kafka } = require("kafkajs")

const run = async () => {
    try {
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"]
        })

        const admin = kafka.admin();

        console.log("::> Connecting to Kafka")
        await admin.connect()
        console.log("::> Connected to kafka")

        await admin.createTopics({
            topics: [{
                topic: "Countries",
                numPartitions: 2
            }]
        })
        console.log("::> Successfully created topic \"Countries\"")

        await admin.disconnect()
    } catch (error) {
        console.error(error)
    } finally {
        process.exit(0)
    }
}

run()