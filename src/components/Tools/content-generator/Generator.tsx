"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { FormEvent, useState } from "react";
import Button from "@/components/Button";

interface Props {
  type: string;
}
interface FormProps {
  title?: string;
  keywords?: string;  
  subheading?: string;
}

const Generator = ({ type }: Props) => {
  const { getRespond } = useWebContext();
  const [formData, setFormData] = useState({
    title: "",
    subheading: "",
    keywords: "",
  });


  const { title, subheading, keywords } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formError, setFormError] = useState<FormProps | null>(null);

 const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title) {
      setFormError({ title: "Title is required" });
      return;
    } else if (!subheading) {
      setFormError({ subheading: "Subheading is required" });
      return;
    } else if (!keywords) {
      setFormError({ keywords: "Keyword is required" });
      return;
    } else {
      setFormError({
        title: "",
        subheading: "",
        keywords: "",
      });

      let prompt = "";
      switch (type) {
        case "blog-title":
          prompt = `Generate a 5 Blog titles for this title  "${title}" and focusing on this main points "${subheading}" and keywords "${keywords}" Now, I want response in this format:
          <strong>Title: ... </strong>, where ... is a blog title.Use <br/> <br/> for linebreaks
        `;
          getRespond(prompt);
          break;
        case "business-name":
          prompt = `Generate 5 business names for this "${title}" focusing on these main points "${subheading}" and keywords "${keywords}".Now I want response as follows:
      <strong>Business names:</strong><br/> where each business name is on a new line, use <br/> <br/> for line breaks.`;
          getRespond(prompt);
          break;
        case "cover-letter":
          prompt = `
      Write a cover letter for this "${title}" with this subheading "${subheading}" main points with this "${keywords}" also write Job description:
      In this role, you will support managers and other senior-level personnel by managing their calendars, arranging travel, filing expense reports, and performing other administrative tasks. Strong interpersonal skills, attention to detail, and problem-solving skills will be critical to success.
      Qualifications:
      5+ years of experience providing high-level admin support to diverse teams in a fast-paced environment
      High school diploma or equivalent work experience
      Excellent Microsoft Office Skills with an emphasis on Outlook and Excel
      Self-motivated and highly organized
      Team players who work well with minimal supervision.

      Dear Hiring Manager,
      I am writing to express my interest in the opening for an administrative assistant at [name of company].
      I'm drawn to this opportunity for several reasons. First, I have a proven track record of success in administrative roles, most recently in my current job as an administrative coordinator. A highlight from my time here was when I proactively stepped in to coordinate a summit for our senior leaders last year. I arranged travel and accommodation for a group of 15 executives from across the company, organized meals and activities, collaborated with our internal events team and ensured that everything ran according to schedule over the two-day summit. Due to the positive feedback I received, I'm now tasked with doubling attendance for the event this year and leading an internal team to get the job done.
      I am attracted to this role because of the growth opportunities that [name of company] provides. The research that I've done on your company culture has shown me that there are ample opportunities for self-motivated individuals like me. A high level of organization and attention to detail is second nature to me, and I'm eager to apply these skills in new and challenging environments.
      I look forward to sharing more details of my experience and motivations with you. Thank you for your consideration.
      Sincerely,
      [Your name]`;
          getRespond(prompt);
          break;
        case "problem-agitate-solution":
          prompt = `Write a problem agitate solution about this "${title}" with this "${subheading}" and keywords "${keywords}".`;
          getRespond(prompt);
          break;
        case "rephrase-generator":
          prompt = `Rephrase some words in a simple and easy wording of this Content "${title}" with the subheading "${subheading}" and use Synonym keywords "${keywords}" and also You may make the Chat Completions format more akin to the completions format by building a request with a single user message. Now, I want response in this format: <p><strong>Repharased Content:</strong><br/>`;
          getRespond(prompt);
          break;
        case "tags-generator":
          prompt = `Generate a 10 tags for this content "${title}" with focusing on this main subheadings "${subheading}" and keywords "${keywords}" Now, I want response use # with each tag, Use <br/> <br/> <br/> for linebreaks each tag must be shown in new line with some spaces.`;
          getRespond(prompt);
          break;
        case "video-title":
          prompt = `Generate 5 SEO friendly video title for this "${title}" with focusing on this main subheading "${subheading}" and keywords "${keywords}". Now, I want response in this format: <strong>Video Titles: ...</strong>, where ... is a video title. Use <br/> <br/> for linebreaks.`;
          getRespond(prompt);
          break; 
          case "web-scrapper":
          prompt = `Scrape text content from the following text: "${title}" with the subheading "${subheading}" and keywords "${keywords}".`;
          getRespond(prompt);
          break;
          case "question-generator":
          prompt = `Generate questions and answers based on the following topic: "${title}" with the subheading "${subheading}" and keywords "${keywords}"Now, I want response in this format:
          <strong>Question increment numbers for each question: </strong> write question use "/n \n" <br/> <br/> for linebreak then <strong> Answer increment numbers for each answers : </strong>, write answer. Use <br/> <br/> for linebreaks write question and Answer with numbering`;
          getRespond(prompt);
          break;
          case "informative-text-generator":
          prompt = `Generate informative text based on the following input: "${title}" with the subheading "${subheading}" and keywords "${keywords}".`;
          getRespond(prompt);
          break;
        default:
          break;
      }

    }
    };

  
  return (
    <div className="w-full flex flex-col md:flex-row">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full justify-center flex border border-btnPrimary backdrop-blur-md px-6 py-10 rounded-lg drop-shadow-lg"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white mb-2 font-bold">
                What do you want to create?{" "}
                <span className="text-pink-500">*</span>
              </label>

              <input
                type="text"
                name="title"
                placeholder=""
                value={title}
                onChange={handleChange}
                className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
              />
            </div>
            {formError?.title && (
              <p className="!text-red-500 text-sm px-2">{formError.title}</p>
            )}

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white mb-2 font-bold">
                What are the main points you want to cover?
                <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                name="subheading"
                value={subheading}
                onChange={handleChange}
                className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
              />
            </div>
            {formError?.subheading && (
              <p className="!text-red-500 text-sm px-2">
                {formError.subheading}
              </p>
            )}

            <div className="flex flex-col">
              <label htmlFor="name" className="text-white mb-2 font-bold">
                Keywords <span className="text-pink-500">*</span>
              </label>

              <input
                type="text"
                name="keywords"
                placeholder=""
                value={keywords}
                onChange={handleChange}
                className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
              />
            </div>
            {formError?.keywords && (
              <p className="!text-red-500 text-sm px-2">{formError.keywords}</p>
            )}

            <Button btnType="submit" className="!w-full" title="Submit" />
          </div>
        </form>
    </div>
  );
};

export default Generator;
