const { Kafka } = require("kafkajs");

const run = async () => {
	try {
		const kafka = new Kafka({
			clientId: "my-app",
			brokers: ["localhost:9092"],
		});

		const consumer = kafka.consumer({ groupId: "consumer-group-alpha" });

		console.log("::> Connecting to Kafka");
		await consumer.connect();
		console.log("::> Connected to kafka");

		await consumer.subscribe({
			topic: "Countries",
			fromBeginning: true,
		});

		await consumer.run({
			eachMessage: async (payload) => {
				console.log(`::> Received Message ${payload.message.value} on partition ${payload.partition}`);
			},
		});
	} catch (error) {
		console.error(error);
	} finally {
	}
};

run();
