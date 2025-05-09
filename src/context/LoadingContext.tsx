"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface LoadingContextProps {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

// Create the context with default values
const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

// Create a provider component
export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoading = (value: boolean) => {
    setIsLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Create a custom hook for using the context
export const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
