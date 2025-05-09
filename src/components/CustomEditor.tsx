import React, { useState, useEffect, useRef, forwardRef  } from 'react';
import { FaBold, FaItalic, FaClipboard } from 'react-icons/fa';

type TextEditorProps = {
  res: string;
};

const TextEditor= forwardRef<HTMLDivElement, TextEditorProps>(({ res }, ref) => {
  const initialText = res || "Edit your response here...";
  const [content, setContent] = useState(initialText);
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const editorRef = useRef<HTMLDivElement>(null);
  const [copyButtonText, setCopyButtonText] = useState<string>("Copy");


  const handleCopy = () => {
    navigator.clipboard.writeText(window.getSelection()?.toString() || '');
    alert('Text copied to clipboard!');
  };

  const handleCopyAll = () => {
    const editor = editorRef.current;
    if (editor) {
      const text = editor.innerText;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopyButtonText("Copied!");
          setTimeout(() => {
            setCopyButtonText("Copy All");
          }, 3000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
          setCopyButtonText("Failed");
          setTimeout(() => {
            setCopyButtonText("Copy All");
          }, 3000);
        });
    }
  };
  

  const applyFormat = (command: string) => {
    document.execCommand(command);
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const toolbarWidth = 150; // Adjust this width based on the actual toolbar width
      const toolbarLeft = Math.max(rect.left + rect.width / 2 - toolbarWidth / 2, 0);
      const toolbarTop = rect.top - 40;

      const editor = editorRef.current;
      if (editor && editor.contains(range.commonAncestorContainer)) {
        setToolbarPosition({ top: toolbarTop, left: toolbarLeft });
        setShowToolbar(true);
      } else {
        setShowToolbar(false);
      }
    } else {
      setShowToolbar(false);
    }
  };

  const handleFocus = () => {
    const editor = editorRef.current;
    if (editor?.innerText.trim() === "Edit your response here...") {
      editor.innerText = "";
      editor.classList.remove("text-gray-500");
    }
  };

  const handleBlur = () => {
    const editor = editorRef.current;
    if (editor?.innerText.trim() === "") {
      editor.innerText = "Edit your response here...";
      editor.classList.add("text-gray-500");
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    const editor = editorRef.current;
    if (editor) {
      editor.innerHTML = initialText;
      if (initialText === "Edit your response here...") {
        editor.classList.add("text-gray-500");
      } else {
        editor.classList.remove("text-gray-500");
      }
    }
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [initialText]);

  const updateCounts = (text: string) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
    setCharCount(text.length);
  };

  useEffect(() => {
    updateCounts(content);
  }, [content]);

  return (
    <div className="mx-auto rounded-lg overflow-hidden relative ">
      {showToolbar && (
        <div
          className="fixed z-50 flex space-x-2 bg-gray-800 text-white p-2 rounded shadow"
          style={{ top: `${toolbarPosition.top}px`, left: `${toolbarPosition.left}px`, zIndex: 1000 }}
        >
          <button onClick={() => applyFormat('bold')}>
            <FaBold />
          </button>
          <button onClick={() => applyFormat('italic')}>
            <FaItalic />
          </button>
          <button onClick={handleCopy}>
            <FaClipboard />
          </button>
        </div>
      )}
<div className="relative h-[calc(100vh-120px)] flex flex-col overflow-y-auto custom-scrollbar">
        <button
          type="button"
          onClick={handleCopyAll}
          className="absolute top-2 right-2 copyButton self-end bg-primary-two rounded-full text-sm px-2 p-1 -mb-[36px] mr-2 z-30 py-1  shadow"
        >
          {copyButtonText}
        </button>      <h2 className="text-3xl font-medium py-5 pb-3 capitalize text-center">Free Style Editor</h2>
        <div
          ref={editorRef}
          contentEditable={true}
          className="p-4 pb-10 h-full text-lg leading-relaxed  border-b border-[#16144a] focus:outline focus:outline-[#16144a] relative"
          onInput={(e) => { 
            const text = (e.target as HTMLDivElement).innerText;
            setContent(text);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
        >
          {initialText}
        </div>
      </div>
      <div className="bg-[#161637] flex gap-2 px-2 py-1">
          <p className='bg-[#16144a] text-white font-semibold pb-[1px] pt-1 px-2 text-sm md:text-base rounded-md'>Words: {wordCount}</p>
          <p className='bg-[#16144a] text-white font-semibold pb-[1px] pt-1 px-2 text-sm md:text-base rounded-md'>Characters: {charCount}</p>
        </div>
    </div>
  );
});

export default TextEditor;
