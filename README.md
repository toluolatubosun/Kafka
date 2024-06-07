# Apache Kafka Demo

This is a simple demo of Apache Kafka using Node.js.

## Prerequisites
- Node.js
- Docker

[Medium Article]()

## Setup

1. Start the Kafka cluster using Docker Compose:
    ```bash
    docker-compose up
    ```

You can -d flag to run the containers in the background. Personally, I prefer to run them in the foreground to see the logs 💆‍♂️

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a topic:
    ```bash
    node topic.js
    ```

4. Send a message to the topic:
    ```bash
    node producer.js Nigeria
    ```

"Nigeria" is the message that will be sent to the topic.

5. Consume the message from the topic:
    ```bash
    node consumer.js
    ```

You can start multiple consumers to see how Kafka distributes the messages among the consumers.

