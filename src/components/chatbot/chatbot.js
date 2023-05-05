// components/Chatbot.js
import {
  Box,
  Button,
  IconButton,
  Input,
  VStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChatIcon } from '@chakra-ui/icons';

import { useState } from "react";
import axios from "axios";
import Chat from "./chat";

const Chatbot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userMessage, setUserMessage] = useState("");
  const [botMessage, setBotMessage] = useState("");

  async function callChatbotAPI() {
    const response = await axios.post("/api/chatbot", { messages: [{ role: "user", content: userMessage }] });
    console.log(response)
    setBotMessage(response.data.choices[0].message.text);
  }

  function handleUserMessageSubmit(e) {
    e.preventDefault();
    setUserMessage("");
    callChatbotAPI();
  }

  return (
    <>
      <IconButton
        position="fixed"
        bottom="2"
        right="2"
        onClick={onOpen}
        icon={<ChatIcon />}
        colorScheme="blue"
        aria-label="Chat with Brimstone"
      />


      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Chat with Brimstone</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Chat />
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Chatbot;
