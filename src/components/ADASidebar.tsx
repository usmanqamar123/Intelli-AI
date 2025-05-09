"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Button {
  id: number;
  label: string;
  image: string;
  action?: () => void;
}

interface ADASidebarProps {
  closeModal: () => void;
}

const ADASidebar: React.FC<ADASidebarProps> = ({ closeModal }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [ttsActive, setTTSActive] = useState<boolean>(false);
  const [displayActive, setDisplayActive] = useState<boolean>(false);
  const [magnifyActive, setMagnifyActive] = useState<boolean>(false);
  const [textSpacingActive, setTextSpacingActive] = useState<boolean>(false);
  const [cursorActive, setCursorActive] = useState<boolean>(false);
  const [readableFontActive, setReadableFontActive] = useState<boolean>(false);
  const [headlinesActive, setHeadlinesActive] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const resetPage = () => {
    window.location.reload();
    setActiveButton(null);
  };

  const handleTTS = () => {
    if (ttsActive) {
      if (!speechSynthesis.paused) {
        speechSynthesis.pause();
      } else {
        speechSynthesis.resume();
      }
      setTTSActive(!speechSynthesis.paused);
    } else {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = document.body.innerText;
      speechSynthesis.speak(utterance);
      setTTSActive(true);
      setActiveButton(1);
    }
  };

  let linksHighlighted = false;

  const highlightLinks = () => {
    const links = document.getElementsByTagName("a");
    if (linksHighlighted) {
      for (let i = 0; i < links.length; i++) {
        links[i].style.textDecoration = "";
        links[i].style.color = "";
      }
      linksHighlighted = false;
    } else {
      for (let i = 0; i < links.length; i++) {
        links[i].style.textDecoration = "underline";
        links[i].style.color = "yellow";
      }
      linksHighlighted = true;
    }
  };

  const resetDisplay = () => {
    if (displayActive) {
      // Reset styles for document and body
      document.documentElement.style.backgroundColor = "";
      document.documentElement.style.color = "";
      document.body.style.backgroundColor = "";
      document.body.style.color = "";

      const allElements = document.querySelectorAll(
        "*"
      ) as NodeListOf<HTMLElement>;
      allElements.forEach((element) => {
        // Check if the element is not the sidebar, not a button, and not a Link
        if (
          element !== sidebarRef.current &&
          !sidebarRef.current?.contains(element) &&
          !isButton(element) &&
          !isLink(element)
        ) {
          element.style.backgroundColor = "";
          element.style.color = "";
          element.classList.remove("display-active");
        }
      });
      setDisplayActive(false);
    }
  };

  const handleDisplay = () => {
    if (!displayActive) {
      // Set dark background and light text for document and body
      document.documentElement.style.backgroundColor = "black";
      document.documentElement.style.color = "white";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

      const allElements = document.querySelectorAll(
        "*"
      ) as NodeListOf<HTMLElement>;
      allElements.forEach((element) => {
        // Check if the element is not the sidebar, not a button, and not a Link
        if (
          element !== sidebarRef.current &&
          !sidebarRef.current?.contains(element) &&
          !isButton(element) &&
          !isLink(element)
        ) {
          if (element instanceof HTMLElement) {
            element.style.backgroundColor = "black";
            element.style.color = "white";
            element.classList.add("display-active");
          }
        }
      });
      setDisplayActive(true);
    } else {
      resetDisplay();
    }
  };

  const isButton = (element: HTMLElement): boolean => {
    // Check if the element is a button or a descendant of a button
    return (
      element.tagName.toLowerCase() === "button" || !!element.closest("button")
    );
  };

  const isLink = (element: HTMLElement): boolean => {
    // Check if the element is a link or a descendant of a link
    return element.tagName.toLowerCase() === "a" || !!element.closest("a");
  };

  const handleMagnify = () => {
    const zoomFactor = 1.18;
    const header = document.querySelector(".header") as HTMLElement;
    const adaIcon = document.querySelector(".ada-icon") as HTMLElement;

    if (!magnifyActive) {
      // Apply zoom to body content
      (document.body.style as any).zoom = `${zoomFactor}`;
      if (header) {
        header.classList.add("fixed-header");
      }
      if (sidebarRef.current) {
      }
      if (adaIcon) {
      }

      setMagnifyActive(true);
    } else {
      (document.body.style as any).zoom = "";
      if (header) {
        header.classList.remove("fixed-header");
      }
      if (sidebarRef.current) {
      }
      if (adaIcon) {
      }
      setMagnifyActive(false);
    }
  };

  const handleTextSpacing = () => {
    const initialSpacingValues = {
      wordSpacing: "normal",
      letterSpacing: "normal",
      lineHeight: "normal",
    };

    if (!textSpacingActive) {
      const allElements = document.querySelectorAll(
        "*"
      ) as NodeListOf<HTMLElement>;
      allElements.forEach((element) => {
        if (
          element !== sidebarRef.current &&
          !sidebarRef.current?.contains(element)
        ) {
          // Exclude the sidebar and its children
          element.style.wordSpacing = "3px";
          element.style.letterSpacing = "3px";
          element.style.lineHeight = "2";
        }
      });
      setTextSpacingActive(true);
    } else {
      const allElements = document.querySelectorAll(
        "*"
      ) as NodeListOf<HTMLElement>;
      allElements.forEach((element) => {
        if (
          element !== sidebarRef.current &&
          !sidebarRef.current?.contains(element)
        ) {
          // Exclude the sidebar and its children
          element.style.wordSpacing = initialSpacingValues.wordSpacing;
          element.style.letterSpacing = initialSpacingValues.letterSpacing;
          element.style.lineHeight = initialSpacingValues.lineHeight;
        }
      });
      setTextSpacingActive(false);
    }
  };

  const handleCursor = () => {
    const bigCursor =
      "url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20256%20256%22%3E%3Cpath%20d=%22M38.2,48.5,96.4,203.7a8,8,0,0,0,15-.1l23.3-64.1a8.1,8.1,0,0,1,4.8-4.8l64.1-23.3a8,8,0,0,0,.1-15L48.5,38.2A8,8,0,0,0,38.2,48.5Z%22%20fill=%22%23fff%22/%3E%3Cline%20x1=%22136.6%22%20y1=%22136.6%22%20x2=%22208%22%20y2=%22208%22%20fill=%22none%22%20stroke=%22%23fff%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%2224%22/%3E%3C/svg%3E') 6 8, pointer";

    if (!cursorActive) {
      document.body.style.cursor = bigCursor;
      setCursorActive(true);
    } else {
      document.body.style.cursor = "auto";
      setCursorActive(false);
    }
  };

  const handleReadableFont = () => {
    const sidebar = sidebarRef.current;

    const isDescendantOfSidebar = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      if (element === sidebar) return true;
      return isDescendantOfSidebar(element.parentElement);
    };

    const allTextElements = document.querySelectorAll(
      "*"
    ) as NodeListOf<HTMLElement>;

    if (!readableFontActive) {
      allTextElements.forEach((element) => {
        if (!isDescendantOfSidebar(element)) {
          element.style.fontWeight = "bold";
        }
      });
      setReadableFontActive(true);
    } else {
      allTextElements.forEach((element) => {
        element.style.fontWeight = "normal";
      });
      setReadableFontActive(false);
    }
  };

  const handleHeadlines = () => {
    const sidebar = sidebarRef.current;

    const isDescendantOfSidebar = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      if (element === sidebar) return true;
      return isDescendantOfSidebar(element.parentElement);
    };

    const allHeadings = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6"
    ) as NodeListOf<HTMLElement>;

    if (!headlinesActive) {
      allHeadings.forEach((heading) => {
        if (!isDescendantOfSidebar(heading)) {
          heading.style.color = "#ff6f61";
          heading.style.textDecoration = "underline";
        }
      });
      setHeadlinesActive(true);
    } else {
      allHeadings.forEach((heading) => {
        heading.style.color = "";
        heading.style.textDecoration = "";
      });
      setHeadlinesActive(false);
    }
  };

  const buttons: Button[] = [
    { id: 1, label: "TTS", image: "/ada-icons/ada-1.png", action: handleTTS },
    {
      id: 2,
      label: "Display",
      image: "/ada-icons/ada-2.png",
      action: handleDisplay,
    },
    {
      id: 3,
      label: "Magnify",
      image: "/ada-icons/ada-3.png",
      action: handleMagnify,
    },
    {
      id: 4,
      label: "Text Spacing",
      image: "/ada-icons/ada-4.png",
      action: handleTextSpacing,
    },
    {
      id: 5,
      label: "Highlight Links",
      image: "/ada-icons/ada-5.png",
      action: highlightLinks,
    },
    {
      id: 6,
      label: "Cursor",
      image: "/ada-icons/ada-6.png",
      action: handleCursor,
    },
    {
      id: 7,
      label: "Readable Fonts",
      image: "/ada-icons/ada-7.png",
      action: handleReadableFont,
    },
    {
      id: 8,
      label: "Headlines",
      image: "/ada-icons/ada-8.png",
      action: handleHeadlines,
    },
  ];

  return (
    <section
      ref={sidebarRef}
      className="fixed top-0 left-0 z-50 flex flex-col justify-between  md:h-screen overflow-hidden bg-[#ffffffe6]"
    >
      <div className="max-w-sm divide-y bg-transparent divide-slate-800">
        <div className="px-4 py-1 sm:p-6 lg:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs md:text-sm font-bold tracking-widest !text-slate-800 uppercase">
              ADA Compliances
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="p-1 -m-1 text-gray-400 transition-all duration-200 rounded-md hover:text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Render buttons */}
        <div className="grid grid-cols-2 gap-1  md:gap-4 p-2 md:p-4">
          {buttons.map((button) => (
            <div key={button.id} className="text-center relative">
              <button
                onClick={() => {
                  if (button.action) {
                    button.action();
                  }
                }}
                className={`focus:outline-none w-20 h-20  lg:w-24 lg:h-24 transition-colors duration-300 rounded-[8px] hover:bg-gray-300 ${
                  activeButton === button.id ? "bg-gray-300" : "bg-transparent"
                }`}
              >
                <Image
                  src={button.image}
                  alt={`Button ${button.id}`}
                  width={24}
                  height={24}
                  className="md:w-10 md:h-10 mx-auto mb-2 object-contain"
                />
                <span className="text-xs md:text-[16px] text-slate-800">
                  {button.label}
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 sm:p-6 lg:p-5">
          <button
            onClick={resetPage}
            className="w-full px-4 py-2 text-center text-xs md:text-sm font-semibold text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
          >
            Reset
          </button>
          <Link href="/adacompliance" target="_blank">
            <div className="text-xs md:text-base text-center mt-4 !text-black">
              Ada Compliance
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ADASidebar;
