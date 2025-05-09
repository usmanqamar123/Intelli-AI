// File: ../../../components/SEOArticle/Context.tsx
"use client"
import React, { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface MainHeading {
  mainHeading: string;
  subheadings: string[];
}

interface Outline {
  mainHeadings: MainHeading[];
}

interface PassData {
  title: string;
}

interface ExportDataContextType {
  passData: any;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  primaryKeyword: string;
  setPrimaryKeyword: React.Dispatch<React.SetStateAction<string>>;
  secondaryKeywords: string[];
  setSecondaryKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  toneOfVoice: string;
  setToneOfVoice: React.Dispatch<React.SetStateAction<string>>;
  pointOfView: string;
  setPointOfView: React.Dispatch<React.SetStateAction<string>>;
  selectedTitle: string;
  setSelectedTitle: Dispatch<SetStateAction<string>>;
  editableData:  Outline[];
  seteditableData: React.Dispatch<React.SetStateAction<Outline[]>>;
  outlines: Outline[];
  setOutlines: React.Dispatch<React.SetStateAction<Outline[]>>;
  setPassData: Dispatch<SetStateAction<any>>;

}

export const ExportDataContext = createContext<ExportDataContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [passData, setPassData] = useState<PassData | null>(null);
  const [topic, setTopic] = useState<string>('');
  const [primaryKeyword, setPrimaryKeyword] = useState<string>('');
  const [secondaryKeywords, setSecondaryKeywords] = useState<string[]>([]);
  const [toneOfVoice, setToneOfVoice] = useState<string>('');
  const [pointOfView, setPointOfView] = useState<string>('');
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [editableData, seteditableData] = useState<Outline[]>([]);
  const [outlines, setOutlines] = useState<Outline[]>([]);




  return (
    <ExportDataContext.Provider value={{ passData, setPassData, topic, setTopic, primaryKeyword, setPrimaryKeyword, secondaryKeywords, setSecondaryKeywords, toneOfVoice, setToneOfVoice, pointOfView, setPointOfView, selectedTitle, setSelectedTitle, outlines, setOutlines, editableData, seteditableData  }}>
      {children}
    </ExportDataContext.Provider>
  );
}

export default ContextProvider;
