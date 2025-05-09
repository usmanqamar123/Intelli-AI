"use client";

import { ReactNode, createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextValue {
  tokens: string | null;
  affiliateToken: string | null;
  setTokens: (tokens: string | null, type: "tokens" | "affiliate") => void;
  nameLetter: string;
  setNameLetter: (nameLetter: string) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [tokens, setToken] = useState<string | null>(null);
  const [affiliateToken, setAffiliateToken] = useState<string | null>(null);
  const [nameLetter, setNameLetter] = useState<string>("");

  const setTokens = (tokens: string | null, type: "tokens" | "affiliate") => {
    if (type === "tokens") {
      setToken(tokens);
      if (tokens !== null) {
        localStorage.setItem("intellitokens", tokens);
      } else {
        localStorage.removeItem("intellitokens");
      }
    } else if (type === "affiliate") {
      setAffiliateToken(tokens);
      if (tokens !== null) {
        localStorage.setItem("intelliaffiliate_token", tokens);
      } else {
        localStorage.removeItem("intelliaffiliate_token");
      }
    }
  };

  useEffect(() => {
    const storedTokens = localStorage.getItem("intellitokens");
    const localTokens = localStorage.getItem("intellitokens");
    const storedAffiliateToken = localStorage.getItem("intelliaffiliate_token");
    const AffiliateToken = localStorage.getItem("intelliaffiliate_token");
    const storedNameLetter = localStorage.getItem("intellinameLetter");
    const NameLetter = localStorage.getItem("intellinameLetter");
    if (storedTokens) setToken(storedTokens);
    if (localTokens) setToken(localTokens);
    if (storedAffiliateToken) setAffiliateToken(storedAffiliateToken);
    if (AffiliateToken) setAffiliateToken(AffiliateToken);
    if (storedNameLetter) setNameLetter(storedNameLetter);
    if (NameLetter) setNameLetter(NameLetter);
  }, []);

  const value: AuthContextValue = {
    tokens,
    affiliateToken,
    setTokens,
    nameLetter,
    setNameLetter,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
