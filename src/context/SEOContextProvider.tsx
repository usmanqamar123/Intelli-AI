"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface MainHeading {
  mainHeading: string;
  subheadings: string[];
}

interface Outline {
  mainHeadings: MainHeading[];
}

interface TitleContextValue {
  titles: string[];
  setTitles: React.Dispatch<React.SetStateAction<string[]>>;
  outlines: Outline[];
  setOutlines: React.Dispatch<React.SetStateAction<Outline[]>>;
  article: string[];
  setArticle: React.Dispatch<React.SetStateAction<string[]>>;
  handleGenerateTitles: (topic: string, userId: string | null) => Promise<void>;
  handleGenerateOutlines: (
    topic: string,
    primaryKeyword: string,
    secondaryKeywords: string[],
    toneOfVoice: string,
    pointOfView: string,
    title: string,
    userId: string | null
  ) => Promise<void>;
  handleGenerateArticle: (
    toneOfVoice: string,
    pointOfView: string,
    title: string,
    outline: Outline,
    userId: string | null
  ) => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  charCount: number;
  setTitleCharCount: React.Dispatch<React.SetStateAction<number>>;
//   seoScore: number;
//   setSeoScore: React.Dispatch<React.SetStateAction<number>>;
//   titleError: string | null;
//   setTitleError: (error: string | null) => void;
//   descriptionError: string | null;
//   setDescriptionError: (error: string | null) => void;
//   urlError: string | null;
//   setUrlError: (error: string | null) => void; 
//   wordError1: string | null;
//   setWordError1: (error: string | null) => void;
//    wordError2: string | null;
//   setWordError2: (error: string | null) => void; 
//   wordError3: string | null;
//   setWordError3: (error: string | null) => void;
//  headingError: string | null;
//   setHeadingError: (error: string | null) => void;
//   repeatingWordsError: string | null;
//   setRepeatingWordsError: (error: string | null) => void;
//   keywordTitleError: string | null;
//   setkeywordTitleError: (error: string | null) => void;
//   keywordDescriptionError: string | null;
//   setkeywordDescriptionError: (error: string | null) => void;
//   keywordUrlError: string | null;
//   setkeywordUrlError: (error: string | null) => void;
  selectedOutline: Outline | null;
  setSelectedOutline: (outline: Outline | null) => void;
  addOutline: (outline: Outline) => void;
  references: string[];
  setReferences: React.Dispatch<React.SetStateAction<string[]>>;
  savedTopic: string;
  setSavedTopic: React.Dispatch<React.SetStateAction<string>>;
  savedReferences: string[];
  setSavedReferences: React.Dispatch<React.SetStateAction<string[]>>;
  savedTitles: string[];  // Add savedTitles here
  setSavedTitles: React.Dispatch<React.SetStateAction<string[]>>;  // Add setSavedTitles here
  savedOutlines: Outline[];
  setSavedOutlines: React.Dispatch<React.SetStateAction<Outline[]>>;
  savedArticle: string[];
  setSavedArticle: React.Dispatch<React.SetStateAction<string[]>>;
  isViewing: boolean;
  setIsViewing: (loading: boolean) => void;
  keywordArticle: string;
  setKeywordArticle: React.Dispatch<React.SetStateAction<string>>;
  }

const TitleContext = createContext<TitleContextValue | undefined>(undefined);

export const SEOContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [titles, setTitles] = useState<string[]>([]);
  const [outlines, setOutlines] = useState<Outline[]>([]);
  const [article, setArticle] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [charCount, setTitleCharCount] = useState(0);
  // const [seoScore, setSeoScore] = useState<number>(0);
  // const [titleError, setTitleError] = useState<string | null>(null);
  // const [descriptionError, setDescriptionError] = useState<string | null>(null);
  // const [urlError, setUrlError] = useState<string | null>(null);
  // const [wordError1, setWordError1] = useState<string | null>(null);
  // const [wordError2, setWordError2] = useState<string | null>(null);
  // const [wordError3, setWordError3] = useState<string | null>(null);
  // const [headingError, setHeadingError] = useState<string | null>(null);
  // const [repeatingWordsError, setRepeatingWordsError] = useState<string | null>(null);
  // const [keywordTitleError, setkeywordTitleError] = useState<string | null>(null);
  // const [keywordDescriptionError, setkeywordDescriptionError] = useState<string | null>(null);
  // const [keywordUrlError, setkeywordUrlError] = useState<string | null>(null);
  const [selectedOutline, setSelectedOutline] = useState<Outline | null>(null);
  const [references, setReferences] = useState<string[]>([""]);
  const [savedTopic, setSavedTopic] = useState<string>('');
  const [savedReferences, setSavedReferences] = useState<string[]>([""]);
  const [savedTitles, setSavedTitles] = useState<string[]>([]); // Initialize as an array
  const [savedOutlines, setSavedOutlines] = useState<Outline[]>([]);
  const [savedArticle, setSavedArticle] = useState<string[]>([]);
  const [isViewing, setIsViewing] = useState<boolean>(false);
  const [keywordArticle, setKeywordArticle] = useState<string>('');



  // const [userId, setUserId] = useState<string | null>(null);

  const addOutline = (outline: Outline) => {
    setOutlines(prevOutlines => [...prevOutlines, outline]);
  };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedUserId = sessionStorage.getItem("userId");
  //     if (storedUserId) {
  //       setUserId(storedUserId);
  //     }
  //   }
  // }, []);


  const handleGenerateTitles = async (topic: string,userId:string| null) => {
    setLoading(true);
    try {
      if (!userId) {
        throw new Error("User ID is missing");
      }
    
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/openai/generate-title`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, userId }),
      });
  
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("Your current plan does not support generating titles. Please upgrade your plan.");
        } else if (response.status === 500) {
          throw new Error("Please upgrade your plan to continue.");
        } else {
          throw new Error("Failed to generate titles");
        }
      }
  
      const result = await response.json();
  
      if (result.words_left === 0) {
        throw new Error("Your current plan does not support generating titles. Please upgrade your plan.");
      }
      
      setTitles(result.titles);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateOutlines = async (
    topic: string,
    primaryKeyword: string,
    secondaryKeywords: string[],
    toneOfVoice: string,
    pointOfView: string,
    title: string,
    userId: string | null
  ) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/openai/generate-outline`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, primaryKeyword, secondaryKeywords, toneOfVoice, pointOfView, title, userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate outlines");
      }

      const result = await response.json();
      const mappedOutlines: Outline[] = result.outlines.map((outline: any) => ({
        mainHeadings: outline.mainHeadings.map((heading: any) => ({
          mainHeading: heading.mainHeading,
          subheadings: heading.subheadings,
        })),
      }));
      setOutlines(mappedOutlines);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateArticle = async (
    toneOfVoice: string,
    pointOfView: string,
    title: string,
    outline: Outline,
    userId : string | null
  ) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/openai/generate-article`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toneOfVoice, pointOfView, title, outline, userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate article");
      }

      const result = await response.json();
      setArticle(result.article);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const value: TitleContextValue = {
    titles,
    setTitles,
    outlines,
    setOutlines,
    article,
    setArticle,
    handleGenerateTitles,
    handleGenerateOutlines,
    handleGenerateArticle,
    loading,
    setLoading,
    error,
    setError,
    charCount,
    setTitleCharCount,
    // seoScore,
    // setSeoScore,
    // repeatingWordsError,
    // setRepeatingWordsError,
    // titleError,
    // setTitleError, 
    // descriptionError,
    // setDescriptionError, 
    // urlError,
    // setUrlError,
    // wordError1,
    // setWordError1,
    // wordError2,
    // setWordError2,
    // wordError3,
    // setWordError3,
    // headingError,
    // setHeadingError,
    // keywordTitleError,
    // setkeywordTitleError, 
    // keywordDescriptionError,
    // setkeywordDescriptionError, 
    // keywordUrlError,
    // setkeywordUrlError,
    selectedOutline,
     setSelectedOutline,
     addOutline,
     references,
    setReferences,
    savedTopic,
    setSavedTopic,
    savedReferences, 
    setSavedReferences,
    savedTitles,
     setSavedTitles,
     savedOutlines,
      setSavedOutlines,
      savedArticle,
       setSavedArticle,
       isViewing,
        setIsViewing,
        keywordArticle,
    setKeywordArticle,
  };

  return <TitleContext.Provider value={value}>{children}</TitleContext.Provider>;
};

export const useSEOContext = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("useSEOContext must be used within a SEOContextProvider");
  }
  return context;
};