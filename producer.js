const { Kafka, Partitioners } = require('kafkajs')

const message = process.argv[2]
const run = async () => {
    try {
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"]
        })

        const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

        console.log("::> Connecting to Kafka")
        await producer.connect()
        console.log("::> Connected to kafka")

        // Country names starting with A-M will go to partition 0, N-Z will go to partition 1
        const partition = message[0].toUpperCase() < "N" ? 0 : 1;

        const result = await producer.send({
            topic: "Countries",
            messages: [{
                partition,
                value: message,
            }]
        })
        console.log(`::> Message sent successfully ${JSON.stringify(result)}`)
        
        await producer.disconnect()
    } catch (error) {
        console.error(error)
    } finally {
        process.exit(0)
    }
}

run()