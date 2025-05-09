// Reward Program
import { IconType } from "react-icons";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";

interface Reward {
  id: number;
  icon: IconType | string;
  title: string;
  content: string;
  button: string;
  link: string;
}

export const RewardProgram: Reward[] = [
  {
    id: 1,
    icon: RiFacebookFill,
    title: "Review on Facebook",
    content:
      "Get 1 month free grow plan (50000 AI words, 10 AI images) by writing a review of Intelliwriter on Facebook. Please send us a screenshot (at hello@intelliwriter.io) once you submitted the review and we'll add the credits. ",
    button: "Get 10 AI images (50K AI words)",
    link: "https://www.facebook.com/Intelliwriter.io/",
  },
  {
    id: 2,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="54" height="54" rx="27" fill="#6366F1"></rect>
      </svg>
    `,
    title: "Suggest Improvements for Intelliwrtiter.io",
    content:
      "Help us elevate Intelliwriter.io with your feedback! Provide constructive suggestions, and if our team finds them actionable, earn 200 credits (20k AI words). Your insight is vital for our growth.",
    button: "Submit Your Suggestions",
    link: "/user/suggestion",
  },
  {
    id: 3,
    icon: `<svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_145_2530)"><path d="M30 2.55716C28.8766 2.98387 27.685 3.26396 26.4649 3.38812C27.7358 2.73501 28.7116 1.70079 29.1711 0.468518C27.963 1.08323 26.6412 1.51634 25.2628 1.74912C24.14 0.723533 22.5405 0.0825806 20.7702 0.0825806C17.3711 0.0825806 14.6152 2.44543 14.6152 5.35971C14.6152 5.77338 14.6696 6.1761 14.7745 6.56244C9.6593 6.34229 5.12414 4.24138 2.0884 1.04858C1.55871 1.82799 1.2552 2.73461 1.2552 3.70161C1.2552 5.53253 2.34188 7.14772 3.99328 8.09413C3.01588 8.06788 2.05998 7.84154 1.20539 7.43399C1.20504 7.45609 1.20504 7.4782 1.20504 7.5004C1.20504 10.0573 3.3266 12.1902 6.14215 12.675C5.2358 12.8864 4.28511 12.9173 3.3627 12.7655C4.14586 14.8621 6.41895 16.3877 9.11215 16.4304C7.0057 17.8458 4.35176 18.6895 1.46824 18.6895C0.971367 18.6895 0.481523 18.6645 0 18.6157C2.72379 20.1131 5.95898 20.9867 9.43477 20.9867C20.7559 20.9867 26.9466 12.9453 26.9466 5.97172C26.9466 5.74283 26.9407 5.51525 26.9288 5.28897C28.1337 4.5421 29.1737 3.61703 30 2.55716Z" fill="white"></path></g><defs><clipPath id="clip0_145_2530"><rect width="30" height="21" fill="white"></rect></clipPath></defs></svg>`,
    title: "Follow, Tweet and Earn",
    content:
      "Follow, Tweet and Earn Free Words (1 Like = 100 Words). Tweet of the week will be given 1 month unlimited words. Please send us a screenshot (at hello@intelliwriter.io) and we'll add the credits.",
    button: "Follow, Tweet and Earn",
    link: "https://twitter.com/intelliwriter1",
  },
  {
    id: 4,
    icon: RiInstagramFill,
    title: "Review on Instagram",
    content:
      "Get (15000 AI characters) by writing a review of Intelliwriter on Instagram. Please send us a screenshot (at hello@intelliwriter.io) once you submitted the review and we'll add the credits.",
    button: "Follow, review and Earn",
    link: "https://instagram.com/intelliwriter_",
  },
];



// Landing page
//Do's

interface Do {
  id: number;
  title: string;
}

export const Dos: Do[] = [
  {
    id: 1,
    title: "Try out Intelli.AI for yourself",
  },
  {
    id: 2,
    title: "Promote Intelli.AI ethically and honestly",
  },
  {
    id: 3,
    title: "Create quality and relevant content",
  },
  {
    id: 4,
    title: "Disclose your affiliate relationship",
  },
];

//Dont's

export const Donts: Do[] = [
  {
    id: 1,
    title: " Make misleading or false claims about Intellli.AI",
  },
  {
    id: 2,
    title: "Promote on platforms that have inappropriate or illegal content",
  },
  {
    id: 3,
    title: "Promote on any coupon site",
  },
  {
    id: 4,
    title:
      "Set up ad campaigns using our brand name, or putting our domain name in your ads' destination URLs",
  },
];