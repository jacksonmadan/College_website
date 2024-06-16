// ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    // Define methods to handle actions
    greet() {
      const message = this.createChatBotMessage("Hello. Nice to meet you.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handleName(name) {
      const message = this.createChatBotMessage(`Hi ${name}, please select your issue.`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handleIssue(issue) {
      const message = this.createChatBotMessage(`Okay, ${issue} submitted`);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  