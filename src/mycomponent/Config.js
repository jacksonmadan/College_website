// config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage("Welcome, I am Golu")],
  botName: "Golu",
  state: {
    name: "",
  },
};

export default config;
