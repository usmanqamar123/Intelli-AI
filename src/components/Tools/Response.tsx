import React, { useState, useEffect, useRef } from "react";
import { useWebContext } from "@/context/ContextProvider";
import QuillEditor from "@/components/QuillEditor";
import CustomEditor from "../CustomEditor";


interface ContentResponseProps {}

const Response: React.FC<ContentResponseProps> = () => {
  const { loading, setLoading, response, error, emptyResponse } = useWebContext();
  const editorRef = useRef<any>(null);
  const [query, setQuery] = useState<string>("");
  const [copyButtonText, setCopyButtonText] = useState<string>("Copy");

  useEffect(() => {
    return () => {
      emptyResponse(); 
    };
  }, []);


  const editorConfig = {
    modules: {
      toolbar: [
        [{ 'header': '1' }],
        [{ size: [] }],
        ['bold', 'italic', 'underline',],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
    },
    formats: [
      'header', 'size',
      'bold', 'italic', 'underline', 
      'list', 'bullet',
      'link', 'image', 'video'
    ]
  };

  useEffect(() => {
    setLoading(false);
    setQuery("");
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col font-medium items-center justify-center border-4 border-dashed w-full h-full text-white/40 border-white/40 rounded">
          <span className="text-center">Please wait</span>
          <span>While your Request is being Processed</span>
          <div className="inline-block mt-5 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center border-4 border-dashed w-full h-full text-white/40 border-white/40 rounded">
          <p className="font-medium !text-red-600">Something went wrong!</p>
        </div>
      ) : response ? (
        <div className="w-full h-full rounded flex flex-col items-center justify-start">
          <div className="flex items-center gap-4 w-full py-2">
            <div className="w-full h-full">
              <div className="w-full">
              <CustomEditor res={response} ref={editorRef} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center border-4 border-dashed border-white/40 w-full h-full rounded">
          <p className="font-medium text-white/40">Start By Filling The Form</p>
        </div>
      )}
    </>
  );
};

export default Response;
