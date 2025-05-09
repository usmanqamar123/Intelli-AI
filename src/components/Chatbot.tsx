import React, { useEffect, useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { chatbot, loaderr } from "../../public";
import Image from "next/image";

const Chatbot = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [chatbotReplies, setChatbotReplies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const messageBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [userMessages, chatbotReplies]);

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setUserMessages([...userMessages, userInput]);
      setIsLoading(true);

      setTimeout(() => {
        const replyMessage = generateReply(userInput);
        if (replyMessage) {
          setChatbotReplies([...chatbotReplies, replyMessage]);
        }
        setIsLoading(false);
        setUserInput("");
        scrollToBottom();
      }, 2000);
    }
  };

  const generateReply = (userInput: string) => {
    const replyMap: { [key: string]: string } = {
      hello: "Hi there!",
      hi: "How are you?",
      "how are you?": "I'm doing well, thank you!",
      "how to generate image": "You can generate AI image after login",
    };

    const reply = replyMap[userInput.toLowerCase()];

    if (!reply) {
      return "Oops! It seems I didn't quite catch that. Please reach out to our support team.";
    }

    return reply;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className="fixed bottom-0 -right-5 md:bottom-5 md:right-3 flex items-center text-white z-50"
      onClick={() => setShowDropdown(true)}
    >
      <Image
        src={chatbot}
        alt="Chatbot"
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, 2000px"
        className="w-32 md:w-36 h-full cursor-pointer hover:scale-90 hover:transition hover:duration-300"
      />



      {showDropdown && (
        <div
          className="absolute bottom-[75%] right-10 w-72 md:w-96 rounded-3xl bg-[#110a24] text-white z-50 overflow-hidden"
          ref={dropdownRef}
        >
          <div className="w-full flex items-center shadow-lg shadow-black bg-[#664c8b]">
            <div className=" ">
              <Image
                src={chatbot}
                alt="Chatbot"
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, 2000px" 
                className="w-[100px] h-[100px] rounded-full "
              />
            </div>
            <div>
              <p className="text-sm">Hi! I am Intelli </p>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-3 px-3 ">
            <MdOutlineOnlinePrediction className="text-[#664c8c] text-2xl" />
            <p className="text-sm">We are Online!</p>
          </div>
          <div
            className="absolute top-[85px] left-2 right-2 bottom-28 overflow-y-auto scrollbar-hide flex flex-col py-4"
            style={{ maxWidth: "calc(100%)" }}
            ref={messageBoxRef}
          >
            {userMessages.map((message, index) => (
              <React.Fragment key={index}>
                <div className="text-white rounded-full break-words bg-[#664c8c] my-2 px-4 py-2 pr-3 text-sm max-w-[80%] self-end">
                  {message}
                </div>
                {isLoading && index === userMessages.length - 1 && (
                  <div className="loader-container">
                    <Image
                      src={loaderr}
                      alt="Loader"
                      width={0}
                      height={0}
                      sizes="(max-width: 640px) 100vw, 2000px"
                      className="loader-gif w-[100px] h-[100px]"
                    />
                  </div>
                )}
                {index < chatbotReplies.length && (
                  <div className="chatbot-reply" key={`reply_${index}`}>
                    {isLoading && index === chatbotReplies.length - 0 ? (
                      <div className="loader-container">
                        <Image
                          src={loaderr}
                          alt="Loader"
                          width={0}
                          height={0}
                          sizes="(max-width: 640px) 100vw, 2000px"
                          className="loader-gif w-[100px] h-[100px]"
                        />
                      </div>
                    ) : (
                      <div className="border border-[#664c8c] rounded-full my-2 px-4 py-2 max-w-[75%] self-start">
                        {chatbotReplies[index]}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-48 p-6 relative">
            <div className="relative">
              <input
                placeholder="Enter your message"
                value={userInput}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="w-full mt pl-5 pr-2 opacity-[0.5] text-sm rounded-[12px] flex py-3 text-white border bg-[#0f1021] focus:outline-none border-gradient-blue-purple scrollbar-hide"
              />

              <div className="absolute inset-y-0 right-3 flex items-center space-x-4">
                {isLoading ? (
                  <div className="loader animate-spin"></div>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] font-semibold p-[8px] text-sm rounded-md h-fit flex justify-between items-center gap-5 hover:opacity-90 "
                  >
                    <BsSend className="text-white text-[10px]" />
                  </button>
                )}
              </div>
            </div>
            <p className="flex pt-3 justify-center text-xs text-slate-800">
              Powered by Intelliwriter
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
