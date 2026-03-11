# kafka-demo

# Check if Kafka is running
``` netstat -ano | findstr 9092 ```
If nothing appears, Kafka is not running.

# Start Kafka
```docker-compose up -d```

# Node.js Kafka Producer
```npm install kafkajs```

Run producer
```node producer.js```

Run consumer
```node consumer.js```