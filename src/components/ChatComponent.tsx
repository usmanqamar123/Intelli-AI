import React, { useState, useEffect, useRef } from "react";
import { FaSquare } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { useWebContext } from "@/context/ContextProvider";
import Image from "next/image";

interface Message {
  text: string;
  sender: string;
  isAI?: boolean;
  file?: File | null;
  response?: string; // Add the response field here

}

interface Props {
  userMessages: Message[];
  isSidebarOpen: boolean; 
  toggleSidebar: () => void; 
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>; // Add setter
  setLoadingIndex: React.Dispatch<React.SetStateAction<number | null>>; // Change setter to match state type
  loadingIndex: number | null; // Change type to number or null
  controllerRef: React.MutableRefObject<AbortController | null>;

}


const ChatComponent: React.FC<Props> = ({ userMessages, isSidebarOpen, setIsSidebarOpen, setLoading, setLoadingIndex,loadingIndex,controllerRef   }) => {
  const [userMsgs, setUserMsgs] = useState<Message[]>([]);
  const [aiResponses, setAiResponses] = useState<Message[]>([]);
  const [revealedResponses, setRevealedResponses] = useState<string[]>([]);
  const token = localStorage.getItem("intellitokens");
  const [copied, setCopied] = useState<number[]>([]);
  const isProcessing = useRef(false);
  const { savedPrompts, fetchSavedPrompts, loading } = useWebContext();
  const [currentChatId, setCurrentChatId] = useState<number | null>(null);


  useEffect(() => {

    if (controllerRef.current) {
      controllerRef.current.abort(); // Abort any ongoing request
    }
    controllerRef.current = new AbortController(); // Create a new controller

    const signal = controllerRef.current.signal;

    localStorage.removeItem("intelliisPromptSaved");
  
    const chatIdStr = localStorage.getItem("intellichatId");
    const chatId = chatIdStr ? parseInt(chatIdStr, 10) : null;
  
    setCurrentChatId((prevChatId) => {
      if (prevChatId !== chatId) {
        // Reset states if the chat ID has changed
        setUserMsgs([]);
        setAiResponses([]);
        setRevealedResponses([]);
        setLoadingIndex(null);

        if (userMessages.length > 0) {
          setUserMsgs([...userMessages]);
          setLoadingIndex(0); // Show loader for the first message
        }
      }
      return chatId; // Update the current chat ID
    });

     
    const fetchAIResponses = async () => {
      const chatIdStr = localStorage.getItem("intellichatId");
      const chatId = chatIdStr ? parseInt(chatIdStr, 10) : null;
  
      if (chatId === null) {
        console.error("Chat ID is null");
        return;
      }
      const newUserMsgs = [...userMsgs];
      const newAIResponses = [...aiResponses];
      const newRevealedResponses = [...revealedResponses];
      const processedMessages = new Set(newUserMsgs.map(msg => msg.text));
  
      for (let i = 0; i < userMessages.length; i++) {
        const userMessage = userMessages[i];
  
        if (!processedMessages.has(userMessage.text)) {
          newUserMsgs.push(userMessage);
          processedMessages.add(userMessage.text);
          setUserMsgs(newUserMsgs);
  
          // Set the loading index to the current message index
          setLoadingIndex(newUserMsgs.length - 1); // Set loading index to current message
  
          try {
            const formData = new FormData();
            formData.append("message", userMessage.text);
            formData.append("userId", localStorage.getItem("intelliuserId") || "");
            if (userMessage.file) {
              formData.append("file", userMessage.file);
            }
  
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/openai/generate-chat`,
              formData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
                },
                signal, // Pass the signal to the axios request

              }
            );
  
            const aiResponse = {
              text: response.data.chat,
              sender: "AI",
              isAI: true,
            };
  
            newAIResponses.push(aiResponse);
            newRevealedResponses.push(""); // Prepare space for revealing AI responses
  
            const revealResponse = (index: number, responseText: string) => {
              let currentLength = 0;
  
              const revealInterval = setInterval(() => {
                if (currentLength >= responseText.length) {
                  clearInterval(revealInterval);
                  // Reset loading index after revealing the response
                  setLoadingIndex(null);
                  setLoading(false); // Stop the loader here
                  return;
                }
  
                currentLength += 2 + Math.floor(Math.random() * 2);
                setRevealedResponses((prev) => {
                  const updated = [...prev];
                  updated[newAIResponses.length - 1] = responseText.slice(0, currentLength);
                  return updated;
                });
              }, 10);
            };
  
            // Start revealing response
            revealResponse(newAIResponses.length - 1, aiResponse.text);
  
            await savePrompt(userMessage.text, aiResponse.text);
            await fetchSavedPrompts(chatId);
          } catch (error) {
            if (axios.isCancel(error)) {
              console.warn("Request canceled by user");
            } else {
              toast.error("Something went wrong. Please try again");
              console.error("Error fetching AI response:", error);
            }
          }
        }
      }
  
      setUserMsgs(newUserMsgs);
      setAiResponses(newAIResponses);
      setRevealedResponses(newRevealedResponses);
    };
  
    fetchAIResponses();

   return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [userMessages, controllerRef]);

  
  

  useEffect(() => {
    // Assuming saved prompts are loaded in savedPrompts after fetchSavedPrompts is called
    if (savedPrompts.length > 0) {
      const loadedUserMsgs: Message[] = savedPrompts.map((msg) => ({
        text: msg.prompt, // Display user prompt
        sender: "User",
        isAI: false,
      }));
  
      const loadedAIResponses: Message[] = savedPrompts.map((msg) => ({
        text: msg.response, // Display AI response
        sender: "AI",
        isAI: true,
      }));
  
      // Extract only the 'text' (string) from loadedAIResponses to set in revealedResponses
      const aiResponsesText = loadedAIResponses.map((response) => response.text);
  
      // Set the fetched messages and responses
      setUserMsgs(loadedUserMsgs);
      setRevealedResponses(aiResponsesText); // Pass only the array of strings here
    }
  }, [savedPrompts]);
  

  // Save prompt function
  const savePrompt = async (userMessages: string, aiResponse: string) => {
    if (localStorage.getItem("intelliisPromptSaved")) {
      return;
    }

    const chatId = localStorage.getItem("intellichatId");
    const token = localStorage.getItem("intellitokens");

    if (!chatId || !userMessages || !aiResponse) {
      console.error("Missing required fields:", { chatId, userMessages, aiResponse });
      return;
    }

    const requestBody = {
      chatId,
      prompt: userMessages,
      response: aiResponse,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/chats/save-prompts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      localStorage.setItem("intelliisPromptSaved", "true");
    } catch (error) {
      console.error("Error saving prompt:", error);
      toast.error("Failed to save prompt.");
    }
  };
  // function to copy text
  const handleCopyText = (index: number, text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied((prev) => [...prev, index]);
        setTimeout(() => {
          setCopied((prev) => prev.filter((i) => i !== index));
        }, 2000);
      })
      .catch((error) => {
        console.error("Failedto copy text: ", error);
      });
  };

  return (
    <div className={`chat-component flex flex-col w-full bl-black rounded-lg relative ${
              isSidebarOpen ? "left-[17%]" : "left-[4%]"
            }`}>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="rounded-xl md:px-24 px-5 text-xs md:text-sm p-3"
      />
  <div className={`flex-1 overflow-y-auto p-2 md:p-4 last:mb-[42px] ${isSidebarOpen ? "max-w-[calc(85%-1rem)]" : "max-w-[calc(95%-1rem)]"}`}>
  {/* Display user messages and AI responses */}
  {userMsgs.map((userMsg, index) => (
    <div key={index} className="flex flex-col mb-6">
      <div className="flex justify-end mb-2">
        <div className="flex items-start w-full">
          <Image
            src="/dashboard/user.png"
            alt="User"
            width={40}
            height={40}
            className="mr-2 mt-1 rounded-full"
          />
          <div className="rounded-lg w-full p-2 bg-[#0f1021] text-white">
            {userMsg.text}
          </div>
        </div>
      </div>
      <div className="flex justify-start">
  <div className="flex items-start w-full">
    {loadingIndex === index ? (
      <FaSquare className="text-white text-lg animate-spin" />
    ) : (
      <Image
        src="/logo-min.png"
        alt="AI"
        width={40}
        height={40}
        className="w-10 h-10 mr-2 mt-1"
        priority={true}
      />
    )}
    <div className="rounded-lg w-full p-2 bg-[#0f1021] text-white">
      <div className="flex flex-col justify-between items-start text-justify">
        <div className="w-full flex justify-end items-center mb-2">
          <button
            onClick={() => handleCopyText(index, revealedResponses[index] || "")}
            className="flex items-center text-sm gap-1  hover:opacity-90"
          >
            {copied.includes(index) ? (
              <>
                <FaCheck className="mr-1" /> Text copied
              </>
            ) : (
              <>
                <LuCopy className="mr-1" /> Copy text
              </>
            )}
          </button>
        </div>
        {revealedResponses[index] || ""}
      </div>
    </div>
  </div>
</div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ChatComponent;