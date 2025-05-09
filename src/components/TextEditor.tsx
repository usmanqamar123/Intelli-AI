import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignRight, FaAlignCenter, FaAlignJustify, FaListUl, FaListOl, FaLink, FaUnlink } from 'react-icons/fa';

interface TextEditorProps {
  onContentChange: (content: string) => void; // Define prop type for onContentChange function
}

const TextEditor: React.FC<TextEditorProps> = ({ onContentChange }) => { // Accept onContentChange prop
  const [boldActive, setBoldActive] = useState<boolean>(false);
  const [italicActive, setItalicActive] = useState<boolean>(false);
  const [underlineActive, setUnderlineActive] = useState<boolean>(false);
  const [alignLeftActive, setAlignLeftActive] = useState<boolean>(false);
  const [alignRightActive, setAlignRightActive] = useState<boolean>(false);
  const [alignCenterActive, setAlignCenterActive] = useState<boolean>(false);
  const [alignJustifyActive, setAlignJustifyActive] = useState<boolean>(false);
  const [headingType, setHeadingType] = useState('Normal');
  const [ulActive, setUlActive] = useState<boolean>(false);
  const [olActive, setOlActive] = useState<boolean>(false);
  const [editorContent, setEditorContent] = useState<string>('');

  useEffect(() => {
    const handleSelectionChange = () => {
      updateEditorContent();
      setBoldActive(document.queryCommandState('bold'));
      setItalicActive(document.queryCommandState('italic'));
      setUnderlineActive(document.queryCommandState('underline'));
      setAlignLeftActive(document.queryCommandState('justifyLeft'));
      setAlignRightActive(document.queryCommandState('justifyRight'));
      setAlignCenterActive(document.queryCommandState('justifyCenter'));
      setAlignJustifyActive(document.queryCommandState('justifyFull'));
      setUlActive(document.queryCommandState('insertUnorderedList'));
      setOlActive(document.queryCommandState('insertOrderedList'));
    };

    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  const updateEditorContent = () => {
    const editor = document.getElementById('editor');
    if (editor) {
        const content = editor.innerHTML;
        setEditorContent(content);
        onContentChange(content); // Invoke onContentChange function with updated content
    }
};


  const handleToggleBold = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('bold');
    updateEditorContent();
  };

  const handleToggleItalic = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('italic');
    updateEditorContent();
  };

  const handleToggleUnderline = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('underline');
    updateEditorContent();
  };

  const handleToggleAlignLeft = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('justifyLeft');
    updateEditorContent();
  };

  const handleToggleAlignRight = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('justifyRight');
    updateEditorContent();
  };

  const handleToggleAlignCenter = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('justifyCenter');
    updateEditorContent();
  };

  const handleToggleAlignJustify = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('justifyFull');
    updateEditorContent();
  };

  const handleToggleUlList = (e: MouseEvent<HTMLButtonElement>) => {
    document.execCommand('insertUnorderedList');
    e.preventDefault();
    updateEditorContent();
  };

  const handleToggleOlList = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('insertOrderedList');
    updateEditorContent();
  };

  const handleToggleLink = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url = window.prompt('Enter the URL:');
    if (url) {
      document.execCommand('createLink', false, url);
      updateEditorContent();
    }
  };

  const handleToggleUnlink = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.execCommand('unlink');
    updateEditorContent();
  };

  const handleHeadingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setHeadingType(e.target.value);
    const editor = document.getElementById('editor');
    if (editor) {
      document.execCommand('formatBlock', false, e.target.value);
      updateEditorContent();
    }
  };

  return (
    <div>
      <div id="toolbar" style={{ marginBottom: '10px' }} className='flex items-center gap-4 relative'>
        <button onClick={handleToggleBold} style={{ fontWeight: boldActive ? 'bold' : 'normal' }} className={`w-6 h-6 rounded-sm flex items-center justify-center ${boldActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaBold /></button>
        <button onClick={handleToggleItalic} style={{ fontStyle: italicActive ? 'italic' : 'normal' }} className={`w-6 h-6 rounded-sm flex items-center justify-center ${italicActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaItalic /></button>
        <button onClick={handleToggleUnderline} style={{ textDecoration: underlineActive ? 'underline' : 'none' }} className={`w-6 h-6 rounded-sm flex items-center justify-center ${underlineActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaUnderline /></button>
        <button onClick={handleToggleAlignLeft} className={`w-6 h-6 rounded-sm flex items-center justify-center ${alignLeftActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaAlignLeft /></button>
        <button onClick={handleToggleAlignCenter} className={`w-6 h-6 rounded-sm flex items-center justify-center ${alignCenterActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaAlignCenter /></button>
        <button onClick={handleToggleAlignRight} className={`w-6 h-6 rounded-sm flex items-center justify-center ${alignRightActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaAlignRight /></button>
        <button onClick={handleToggleAlignJustify} className={`w-6 h-6 rounded-sm flex items-center justify-center ${alignJustifyActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaAlignJustify /></button>
        <button onClick={handleToggleUlList} className={`w-6 h-6 rounded-sm flex items-center justify-center ${ulActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaListUl /></button>
        <button onClick={handleToggleOlList} className={`w-6 h-6 rounded-sm flex items-center justify-center ${olActive ? 'bg-gray-400' : 'bg-gray-300'}`}><FaListOl /></button>
        <button onClick={handleToggleLink} className="w-6 h-6 rounded-sm flex items-center justify-center bg-gray-300"><FaLink /></button>
        <button onClick={handleToggleUnlink} className="w-6 h-6 rounded-sm flex items-center justify-center bg-gray-300"><FaUnlink /></button>

        <select value={headingType} onChange={handleHeadingChange} className="bg-gray-300 rounded-md p-1">
          <option value="p">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
          <option value="h6">Heading 6</option>
        </select>
      </div>
      <div
        id="editor"
        contentEditable={true}
        style={{ whiteSpace: 'pre-wrap' }}
        className='w-full intelli-editor focus:outline-none border overflow-y-auto border-gray-600 h-[350px] p-2' // Allow line breaks
      >

      </div>
    </div>
  );
};

export default TextEditor;
