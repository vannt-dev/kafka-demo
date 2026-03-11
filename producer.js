const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "demo-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "demo-topic",
    messages: [
      { value: "Hello Kafka from NodeJS" },
      { value: "Message 2" },
    ],
  });

  console.log("Messages sent");

  await producer.disconnect();
};

run().catch(console.error);