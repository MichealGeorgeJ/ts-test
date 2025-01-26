import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WEBSOCKET_URL = "http://192.168.68.112:8080/websocket"; // Corrected WebSocket URL
const SUBSCRIPTION_TOPIC = "/topic/transaction-alert"; // Topic from the backend

const WebSocketClient = () => {
    const [messages, setMessages] = useState([]);
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        const socket = new SockJS(WEBSOCKET_URL);
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000, // Auto-reconnect every 5 seconds
            debug: (str) => console.log(str), 
        });

        stompClient.onConnect = () => {
            console.log("✅ Connected to WebSocket");

            stompClient.subscribe(SUBSCRIPTION_TOPIC, (message) => {
                if (message.body) {
                    const notification = JSON.parse(message.body);
                    console.log("📢 Notification received:",notification);

                    // Update state with new message
                    // setMessages((prevMessages) => [notification.content, ...prevMessages]);
                }
            });
        };

        stompClient.onStompError = (frame) => {
            console.error("❌ WebSocket error:", frame);
        };

        stompClient.activate(); // Activate WebSocket connection

        return () => {
            stompClient.deactivate(); // Cleanup on component unmount
        };
    }, []);

    return (
        <div>
            <h2>WebSocket Notifications</h2>
            <ul>
                {messages?.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketClient;
