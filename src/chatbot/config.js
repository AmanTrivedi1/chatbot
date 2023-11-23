import { createChatBotMessage } from "react-chatbot-kit";
import Final from "./final";
import Overview from "../widgets/overview";
import Schudule from "./Schudule";
const botName = "HappilyEver";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      withAvatar: true,
      delay: 400,
      widget: "overview",
    }),
  ],
  botName: botName,
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: {},
  customMessages: {
    schudule: (props) => <Schudule {...props} />,
    final: (props) => <Final {...props} />,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },

    {
      widgetName: "final",
      widgetFunc: (props) => <Final {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgb(29, 78, 216)",
    },
    chatButton: {
      backgroundColor: " rgb(29, 78, 216)",
    },
  },
};

export default config;
