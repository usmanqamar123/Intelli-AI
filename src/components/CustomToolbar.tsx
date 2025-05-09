"use client"
import React, { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaFont,
  FaHighlighter,
  FaImage,
  FaVideo,
} from "react-icons/fa";

interface CustomToolbarProps {
  onBoldClick: () => void;
  onItalicClick: () => void;
  onUnderlineClick: () => void;
  onStrikeThroughClick: () => void;
  onOrderedListClick: () => void;
  onBulletListClick: () => void;
  onSubscriptClick: () => void;
  onSuperscriptClick: () => void;
  onFontColorChange: (color: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onAlignChange: (alignment: string) => void;
  onImageInsert: () => void;
  onVideoInsert: () => void;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  onBoldClick,
  onItalicClick,
  onUnderlineClick,
  onStrikeThroughClick,
  onSubscriptClick,
  onSuperscriptClick,
  onImageInsert,
  onVideoInsert,
}) => {
  const applyFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const [dropdownsOpen, setDropdownsOpen] = useState({
    textColor: false,
    backgroundColor: false,
  });

  const colorOptions = [
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
    { label: "Orange", value: "orange" },
    { label: "Purple", value: "purple" },
    { label: "Gray", value: "gray" },
    { label: "#1b1337", value: "#1b1337" },
  ];

  const changeTextColor = (color: string) => {
    applyFormat("foreColor", color);
    setDropdownsOpen({ ...dropdownsOpen, textColor: false });
  };

  const changeBackgroundColor = (color: string) => {
    applyFormat("hiliteColor", color);
    setDropdownsOpen({ ...dropdownsOpen, backgroundColor: false });
  };

  const toggleDropdown = (dropdown: "textColor" | "backgroundColor") => {
    setDropdownsOpen({
      textColor: dropdown === "textColor" ? !dropdownsOpen.textColor : false,
      backgroundColor: dropdown === "backgroundColor" ? !dropdownsOpen.backgroundColor : false,
    });
  };

  return (
    <div className="w-full flex flex-wrap items-center mb-3 text-sm text-white" id="toolbar">
      <select
        className="ql-header p-2 bg-[#0F1333] rounded"
        defaultValue=""
        onChange={(e) => {
          applyFormat("formatBlock", e.target.value);
        }}
      >
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="p">Normal</option>
      </select>

      <button className="ql-bold p-2" onClick={() => { onBoldClick(); }}>
        <FaBold />
      </button>
      <button className="ql-italic p-2" onClick={() => { onItalicClick(); }}>
        <FaItalic />
      </button>
      <button className="ql-underline p-2" onClick={() => { onUnderlineClick(); }}>
        <FaUnderline />
      </button>
      <button className="ql-strike p-2" onClick={() => { onStrikeThroughClick(); }}>
        <FaStrikethrough />
      </button>
      <button className="ql-script p-2" onClick={() => { onSubscriptClick(); }}>
        Sub
      </button>
      <button className="ql-script p-2" onClick={() => { onSuperscriptClick(); }}>
        Sup
      </button>

      {/* Text color button */}
      <button className="relative p-2 text-red-500" onClick={() => toggleDropdown("textColor")}>
        <FaFont />
      </button>
      {dropdownsOpen.textColor && (
        <div className="absolute top-18 left-[37%] bg-white p-2 rounded shadow mt-16 z-50">
          <div className="flex space-x-2">
            {colorOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => changeTextColor(option.value)}
                style={{
                  backgroundColor: option.value,
                  width: "20px",
                  height: "20px",
                  borderRadius: "none",
                  border: "1px solid #ccc",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Background color button */}
      <button className="p-2 border-b-2 border-red-500" onClick={() => toggleDropdown("backgroundColor")}>
        <FaHighlighter />
      </button>
      {dropdownsOpen.backgroundColor && (
        <div className="absolute top-18 left-[39%] bg-white p-2 rounded shadow mt-16 z-50">
          <div className="flex space-x-2">
            {colorOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => changeBackgroundColor(option.value)}
                style={{
                  backgroundColor: option.value,
                  width: "20px",
                  height: "20px",
                  borderRadius: "none",
                  border: "1px solid #ccc",
                }}
              />
            ))}
          </div>
        </div>
      )}

      <button className="ql-insertImage p-2" onClick={() => { onImageInsert(); }}>
        <FaImage />
      </button>
      <button className="ql-insertVideo p-2" onClick={() => { onVideoInsert(); }}>
        <FaVideo />
      </button>
    </div>
  );
};

export default CustomToolbar;