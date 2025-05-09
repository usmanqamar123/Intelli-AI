import { IoMdImages } from "react-icons/io";
import { MdDiamond } from "react-icons/md";
import {
  RiArticleFill,
  RiChatSmile2Fill,
  RiFilePaper2Fill,
} from "react-icons/ri";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";

import { IconType } from "react-icons";
import { AiFillContacts } from "react-icons/ai";
import { BiBulb, BiDockLeft } from "react-icons/bi";
import {
  BsArrowsExpand,
  BsLayoutTextSidebarReverse,
  BsStars,
} from "react-icons/bs";
import { CgTranscript } from "react-icons/cg";
import {
  FaDiscourse,
  FaFlask,
  FaHashtag,
  FaQuestionCircle,
  FaRegStar,
  FaTwitter,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaListCheck, FaRetweet } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import {
  ImCalendar,
  ImParagraphJustify,
  ImParagraphLeft,
} from "react-icons/im";
import { IoMdBriefcase, IoMdContacts } from "react-icons/io";
import { IoDiamond, IoListOutline, IoLogoFacebook } from "react-icons/io5";
import {
  LuFileSpreadsheet,
  LuHash,
  LuQuote,
  LuSubtitles,
} from "react-icons/lu";
import {
  MdOutlineCallToAction,
  MdOutlineFeaturedPlayList,
  MdOutlineMarkEmailUnread,
  MdOutlineNewspaper,
  MdOutlineReviews,
  MdOutlineThumbsUpDown,
  MdQuiz,
  MdRocket,
} from "react-icons/md";
import {
  PiChatCenteredTextDuotone,
  PiDeviceMobileBold,
  PiListNumbersDuotone,
  PiSubtitles,
} from "react-icons/pi";
import { RiArticleLine, RiKeyboardFill, RiPriceTagLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";
import { TbArticle, TbTargetArrow } from "react-icons/tb";
import { TfiLayoutListPost } from "react-icons/tfi";
import { Article, Business, HelpWanted, Social } from "../../public";

// HOME PAGE

interface BasicCard {
  id: number;
  icon: IconType;
  title: string;
  plan: string;
  remaining: number | null;
}

export const BasicCardData: BasicCard[] = [
  {
    id: 1,
    icon: MdDiamond,
    title: "Current Plan",
    plan: "Basic",
    remaining: null,
  },
  {
    id: 2,
    icon: TiSortAlphabeticallyOutline,
    title: "Remaining AI Words",
    plan: " ",
    remaining: 100000,
  },
  {
    id: 3,
    icon: RiChatSmile2Fill,
    title: "Remaining AI Chats",
    plan: " ",
    remaining: 500,
  },
  {
    id: 4,
    icon: IoMdImages,
    title: "Remaining Image Prompts",
    plan: " ",
    remaining: 0,
  },
  {
    id: 5,
    icon: IoMdImages,
    title: "Remaining Voice Counts",
    plan: " ",
    remaining: NaN,
  },
];

export const StandardCardData: BasicCard[] = [
  {
    id: 1,
    icon: MdDiamond,
    title: "Current Plan",
    plan: "Standard",
    remaining: null,
  },
  {
    id: 2,
    icon: TiSortAlphabeticallyOutline,
    title: "Remaining AI Words",
    plan: " ",
    remaining: 150000,
  },
  {
    id: 3,
    icon: RiChatSmile2Fill,
    title: "Remaining AI Chats",
    plan: " ",
    remaining: 5000,
  },
  {
    id: 4,
    icon: IoMdImages,
    title: "Remaining Image Prompts",
    plan: " ",
    remaining: 500,
  },
  {
    id: 5,
    icon: IoMdImages,
    title: "Remaining Voice Counts",
    plan: " ",
    remaining: NaN,
  },
];

export const PremiumCardData: BasicCard[] = [
  {
    id: 1,
    icon: MdDiamond,
    title: "Current Plan",
    plan: "Premium",
    remaining: null,
  },
  {
    id: 2,
    icon: TiSortAlphabeticallyOutline,
    title: "Remaining AI Words",
    plan: " ",
    remaining: NaN,
  },
  {
    id: 3,
    icon: RiChatSmile2Fill,
    title: "Remaining AI Chats",
    plan: " ",
    remaining: NaN,
  },
  {
    id: 4,
    icon: IoMdImages,
    title: "Remaining Image Prompts",
    plan: " ",
    remaining: NaN,
  },
  {
    id: 5,
    icon: IoMdImages,
    title: "Remaining Voice Counts",
    plan: " ",
    remaining: NaN,
  },
];

export const BasicCardYearlyData: BasicCard[] = [
  {
    id: 1,
    icon: MdDiamond,
    title: "Current Plan",
    plan: "Basic",
    remaining: null,
  },
  {
    id: 2,
    icon: TiSortAlphabeticallyOutline,
    title: "Remaining AI Words",
    plan: " ",
    remaining: 100000,
  },
  {
    id: 3,
    icon: RiChatSmile2Fill,
    title: "Remaining AI Chats",
    plan: " ",
    remaining: 500,
  },
  {
    id: 4,
    icon: IoMdImages,
    title: "Remaining Image Prompts",
    plan: " ",
    remaining: 0,
  },
  {
    id: 5,
    icon: IoMdImages,
    title: "Remaining Voice Counts",
    plan: " ",
    remaining: NaN,
  },
];

export const StandardCardYearlyData: BasicCard[] = [
  {
    id: 1,
    icon: MdDiamond,
    title: "Current Plan",
    plan: "Standard",
    remaining: null,
  },
  {
    id: 2,
    icon: TiSortAlphabeticallyOutline,
    title: "Remaining AI Words",
    plan: " ",
    remaining: 150000*12,
  },
  {
    id: 3,
    icon: RiChatSmile2Fill,
    title: "Remaining AI Chats",
    plan: " ",
    remaining: 5000*12,
  },
  {
    id: 4,
    icon: IoMdImages,
    title: "Remaining Image Prompts",
    plan: " ",
    remaining: 500*12,
  },
  {
    id: 5,
    icon: IoMdImages,
    title: "Remaining Voice Counts",
    plan: " ",
    remaining: NaN,
  },
];

export const PremiumCardYearlyData: BasicCard[] = [
  {
    id: 1,
    icon: MdDiamond,
    title: "Current Plan",
    plan: "Premium",
    remaining: null,
  },
  {
    id: 2,
    icon: TiSortAlphabeticallyOutline,
    title: "Remaining AI Words",
    plan: " ",
    remaining: NaN,
  },
  {
    id: 3,
    icon: RiChatSmile2Fill,
    title: "Remaining AI Chats",
    plan: " ",
    remaining: NaN,
  },
  {
    id: 4,
    icon: IoMdImages,
    title: "Remaining Image Prompts",
    plan: " ",
    remaining: NaN,
  },
  {
    id: 5,
    icon: IoMdImages,
    title: "Remaining Voice Counts",
    plan: " ",
    remaining: NaN,
  },
];



export const promptHistory=[
  {
    id:1,
    title: "Generate a Car in red color",
    status: "Completed",
    words: 234,
    images: 2,
    voices: 1,
    lastEdit: "1 min ago",
  },
  {
    id:2,
    title: "Write a blog on fish",
    status: "Cancelled",
    words: 23,
    images: 0,
    voices: 0,
    lastEdit: "10 min ago",
  },
  {
    id:3,
    title: "Generate caption for sunset",
    status: "Completed",
    words: 5,
    images: 0,
    voices: 0,
    lastEdit: "3 day ago",
  },

]
interface Template {
  id: number;
  icon: string;
  title: string;
  url: string;
  bgcolor: string;
  color: string;
  description: string;
}

export const templateData: Template[] = [
  {
    id: 0,
    icon: HelpWanted,
    title: "Help Wanted Ad",
    url: "/user/modules/marketing/help-wanted",
    bgcolor: "#D2D2D2",
    color: "#527490",
    description: "Generate job wanting ads for your business with our AI tool.",
  },
  {
    id: 1,
    icon: Business,
    title: "Business Tagline",
    url: "/user/modules/marketing/business-tagline",
    bgcolor: "#FBD4B0",
    color: "#966556",
    description:
      "Generate professional slogans for your business with our AI tool.",
  },
  {
    id: 2,
    icon: Article,
    title: " Article",
    url: "/user/modules/blog-content/article",
    bgcolor: "#d89a84",
    color: "#DA5723",
    description:
      "Generate unique articles by using keywords with our AI tool. ",
  },
  {
    id: 3,
    icon: Social,
    title: "Social Post",
    url: "/user/modules/social-media/social-post",
    bgcolor: "#e27886",
    color: "#E2AE4A",
    description:
      "Generate social posts ready to be published with our AI tool. ",
  },
];

// BLOG CONTENT

interface Tool {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
}


export const content: Tool[] = [
  {
    id: 1,
    icon: RiArticleFill,
    title: "Article",
    description: "Generate articles based on title, keywords, and subheading.",
    url: "/user/modules/blog-content/article",
  },
  {
    id: 2,
    icon: BsLayoutTextSidebarReverse,
    title: "Blog Intro",
    description:
      "Generate blog intros based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-intro",
  },
  {
    id: 3,
    icon: TfiLayoutListPost,
    title: "Blog Listicle",
    description:
      "Generate blog listicle based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-listicle",
  },
  {
    id: 4,
    icon: IoListOutline,
    title: "Blog Outline",
    description:
      "Generate blog outline based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-outline",
  },
  {
    id: 5,
    icon: RiArticleFill,
    title: "Blog Outro",
    description:
      "Generate blog outro based on the blog post title and content.",
    url: "/user/modules/blog-content/blog-outro",
  },
  {
    id: 6,
    icon: ImParagraphJustify,
    title: "Blog Paragraph",
    description:
      "Generate blog paragraph based on the blog post title and subheading.",
    url: "/user/modules/blog-content/blog-paragraph",
  },
  {
    id: 7,
    icon: TbArticle,
    title: "Blog Post",
    description: "Generate blog posts, focused on keywords, about any topic.",
    url: "/user/modules/blog-content/blog-post",
  },
  {
    id: 8,
    icon: RiArticleFill,
    title: "Blog Section",
    description:
      "Generate blog section based on the blog post title and subheading.",
    url: "/user/modules/blog-content/blog-section",
  },
  {
    id: 9,
    icon: CgTranscript,
    title: "Blog Tags",
    description: "Generate blog tags based on the blog post title and content",
    url: "/user/modules/blog-content/blog-tags",
  },
  {
    id: 10,
    icon: PiListNumbersDuotone,
    title: "Blog Talking Points",
    description:
      "Generate blog talkings points based on the blog post title and content",
    url: "/user/modules/blog-content/blog-talkings-points",
  },
  {
    id: 11,
    icon: PiSubtitles,
    title: "Blog Title",
    description: "Generate blog title based on the blog post title and content",
    url: "/user/modules/blog-content/blog-title",
  },
  {
    id: 12,
    icon: FaListCheck,
    title: "Content Grammar",
    description: "Correct the grammatical errors for any text in seconds.",
    url: "/user/modules/blog-content/content-grammar",
  },
  {
    id: 13,
    icon: FaRetweet,
    title: "Content Rewriter",
    description: "Rewrite any kind of content in seconds, in an enhanced way.",
    url: "/user/modules/blog-content/content-rewriter",
  },
  {
    id: 14,
    icon: BsArrowsExpand,
    title: "Content Summary",
    description:
      "Summarize any kind of content in seconds, in an enhanced way.",
    url: "/user/modules/blog-content/content-summary",
  },
  {
    id: 15,
    icon: ImParagraphLeft,
    title: "Paragraph",
    description: "Generate paragraphs, focused on keywords, about any topic.",
    url: "/user/modules/blog-content/paragraph",
  },
];

// SOCIAL MEDIA

interface SocialData {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  url: string;
}

export const social: Tool[] = [
  {
    id: 1,
    icon: FaHashtag,
    title: "Hashtags",
    description: "Generate #hashtags for social network content.",
    url: "/user/modules/social-media/hashtags",
  },
  {
    id: 2,
    icon: RiArticleLine,
    title: "Social Post",
    description:
      "Generate social posts ready to be published on social platforms.",
    url: "/user/modules/social-media/social-post",
  },
  {
    id: 3,
    icon: FaDiscourse,
    title: "Social Post Caption",
    description: "Generate social posts caption ready to grab attention.",
    url: "/user/modules/social-media/social-post-caption",
  },
  {
    id: 4,
    icon: FaTwitter,
    title: "Tweet",
    description: "Generate engaging tweets based on a description.",
    url: "/user/modules/social-media/tweet",
  },
  {
    id: 5,
    icon: FaTwitterSquare,
    title: "Tweet Thread",
    description: "Generate engaging twitter threads based on a description.",
    url: "/user/modules/social-media/tweet-thread",
  },
  {
    id: 6,
    icon: PiChatCenteredTextDuotone,
    title: "Video Description",
    description:
      "Generate compelling video descriptions based on a description.",
    url: "/user/modules/social-media/video-description",
  },
  {
    id: 7,
    icon: CgTranscript,
    title: "Video Script",
    description: "Generate compelling video scripts based on a description.",
    url: "/user/modules/social-media/video-script",
  },
  {
    id: 8,
    icon: RiKeyboardFill,
    title: "Video Tags",
    description: "Generate compelling video tags based on a video title.",
    url: "/user/modules/social-media/video-tags",
  },
  {
    id: 9,
    icon: LuSubtitles,
    title: "Video Title",
    description:
      "Generate compelling video titles based on a video description.",
    url: "/user/modules/social-media/video-title",
  },
];

// MARKETING

interface Market {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  url: string;
}

export const Marketing: Tool[] = [
  {
    id: 1,
    icon: TbTargetArrow,
    title: "Advertisement",
    description: "Generate creative ad descriptions for a product or service.",
    url: "/user/modules/marketing/advertisement",
  },
  {
    id: 2,
    icon: IoLogoFacebook,
    title: "Facebook Advertisement",
    description:
      "Generate optimized Facebook advertisements for a product or service.",
    url: "/user/modules/marketing/facebook-advertisement",
  },
  {
    id: 3,
    icon: SiGoogleads,
    title: "Google Advertisement",
    description:
      "Generate optimized Google advertisements for a product or service.",
    url: "/user/modules/marketing/google-advertisement",
  },
  {
    id: 4,

    icon: IoMdBriefcase,
    title: "Job Description",
    description:
      "Generate professional job descriptions to attract top talents.",
    url: "/user/modules/marketing/job-description",
  },
  {
    id: 5,

    icon: MdRocket,
    title: "Mission Statement",
    description: "Generate comprehensive and informative mission statements.",
    url: "/user/modules/marketing/mission-statement",
  },
  {
    id: 6,

    icon: TbArticle,
    title: "Newsletter",
    description: "Generate engaging and comprehensive newsletters.",
    url: "/user/modules/marketing/newsletter",
  },
  {
    id: 7,
    icon: FaFlask,
    title: "Pain-Agitate-Solution",
    description: "Generate high-converting sales copy using the PAS formula.",
    url: "/user/modules/marketing/pain-agitate-solution",
  },
  {
    id: 8,
    icon: MdOutlineNewspaper,
    title: "Press Release",
    description: "Generate comprehensive and informative press releases.",
    url: "/user/modules/marketing/press-release",
  },
  {
    id: 9,
    icon: LuFileSpreadsheet,
    title: "Product Sheet",
    description: "Generate compelling product sheets for a product or service.",
    url: "/user/modules/marketing/product-sheet",
  },
  {
    id: 10,
    icon: PiDeviceMobileBold,
    title: "Push Notification",
    description:
      "Generate push notifications based on the description of a product or service.",
    url: "/user/modules/marketing/push-notification",
  },
  {
    id: 11,

    icon: HiOutlineLightBulb,
    title: "Startup Ideas",
    description: "Generate innovative startup ideas based on domains.",
    url: "/user/modules/marketing/startup-ideas",
  },
  {
    id: 12,
    icon: BiBulb,
    title: "Startup Names",
    description:
      "Generate creative startup names based on the description and keywords.",
    url: "/user/modules/marketing/startup-names",
  },
  {
    id: 13,
    icon: IoDiamond,
    title: "Value Proposition",
    description: "Generate value propositions for a product or service.",
    url: "/user/modules/marketing/value-proposition",
  },
  {
    id: 14,
    icon: FaRegStar,
    title: "Vision Statement",
    description: "Generate comprehensive and informative vision statements.",
    url: "/user/modules/marketing/vision-statement",
  },
  {
    id: 15,
    icon: MdOutlineMarkEmailUnread,
    title: "Welcome Email",
    description: "Generate engaging welcome emails for a product or service.",
    url: "/user/modules/marketing/welcome-email",
  },
  {
    id: 16,
    icon: AiFillContacts,
    title: "Help Wanted Ad",
    description: "Generate job hiring ads for your business.",
    url: "/user/modules/marketing/help-wanted",
  },
  {
    id: 17,
    icon: RiPriceTagLine,
    title: "Business Tagline",
    description: "Generate slogans for your business.",
    url: "/user/modules/marketing/business-tagline",
  },
];

// WEBSITE BUILDER

interface WebsiteBuilder {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  url: string;
}

export const Website: Tool[] = [
  {
    id: 1,
    icon: IoMdContacts,
    title: "About Us",
    description:
      "Generate about us text on the title and description of a page.",
    url: "/user/modules/website/about-us",
  },
  {
    id: 2,
    icon: MdOutlineCallToAction,
    title: "Call to Action",
    description:
      "Generate CTA lines based on the name and description of a product or service.",
    url: "/user/modules/website/call-to-action",
  },
  {
    id: 3,
    icon: FaQuestionCircle,
    title: "FAQ",
    description:
      "Generate frequently asked questions for a product or service.",
    url: "/user/modules/website/faq",
  },
  {
    id: 4,
    icon: BsStars,
    title: "Feature Section",
    description: "Generate feature sections to highlight a product or service.",
    url: "/user/modules/website/feature-section",
  },
  {
    id: 5,
    icon: LuSubtitles,
    title: "Headline",
    description: "Generate engaging headlines for products and services.",
    url: "/user/modules/website/headline",
  },
  {
    id: 6,
    icon: MdOutlineFeaturedPlayList,
    title: "Meta Description",
    description:
      "Generate meta descriptions based on the title and description of a page.",
    url: "/user/modules/website/meta-description",
  },
  {
    id: 7,
    icon: LuHash,
    title: "Meta Keywords",
    description:
      "Generate meta keywords based on the title and description of a page.",
    url: "/user/modules/website/meta-keywords",
  },
  {
    id: 8,
    icon: MdOutlineThumbsUpDown,
    title: "Pros and Cons",
    description: "Generate pros and cons for a product or service.",
    url: "/user/modules/website/pros-and-cons",
  },
  {
    id: 9,
    icon: MdOutlineReviews,
    title: "Review",
    description:
      "Generate reviews based on the name and description of a product or service.",
    url: "/user/modules/website/review",
  },
  {
    id: 10,
    icon: PiSubtitles,
    title: "Subheadline",
    description: "Generate engaging subheadlines for products and services.",
    url: "/user/modules/website/subheadline",
  },
  {
    id: 11,
    icon: LuQuote,
    title: "Testimonial",
    description:
      "Generate testimonials based on the name and description of a product or service.",
    url: "/user/modules/website/testimonial",
  },
];

//   COURSE BUILDER

interface CourseBuilder {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  url: string;
}

export const Course: Tool[] = [
  {
    id: 1,
    icon: RiFilePaper2Fill,
    title: "Course Content",
    description: "Generate course outline, quiz and its assignment.",
    url: "/user/modules/course-builder/course-content",
  },
  {
    id: 2,
    icon: RiFilePaper2Fill,
    title: "Course Outline",
    description: "Generate couse outline for your subject.",
    url: "/user/modules/course-builder/course-outline",
  },
  {
    id: 3,
    icon: MdQuiz,
    title: "Quiz Generator",
    description: "Generate quiz questions for your subject topic.",
    url: "/user/modules/course-builder/quiz-generator",
  },
  {
    id: 4,
    icon: ImCalendar,
    title: "Time Table",
    description: "Generate Time table schedule for your work!",
    url: "/user/modules/course-builder/time-table",
  },
  {
    id: 5,

    icon: BiDockLeft,
    title: "Assignment Generator",
    description: "Generate assignment questions for your work!",
    url: "/user/modules/course-builder/assignment",
  },
];

// YOUTUBE CONTENT GENERATION MODULE

interface YoutubeGenerator {
  id: number;
  title: string;
  output: string;
}

export const YoutubeContents: YoutubeGenerator[] = [
  {
    id: 1,
    title: "Title",
    output: "",
  },
  {
    id: 3,
    title: "Keywords",
    output: "",
  },
  {
    id: 2,
    title: "Description",
    output: "",
  },

  {
    id: 4,
    title: "Tags",
    output: "",
  },
];

export const Youtube: Tool[] = [
  {
    id: 1,
    icon: FaYoutube,
    title: "Content Generator",
    description:
      "Generate title, description, keywords and tags based on your youtube video title.",
    url: "/user/modules/youtube-content/content-generator",
  },
  // {
  //   id: 2,
  //   icon: BsArrowsExpand,
  //   title: "Video Summarizer",
  //   description:
  //     "Summarize any youtube video and experience full video within a second.",
  //   url: "/user/modules/youtube-content/content-summarizer",
  // },
];

export const CHAT_STEPS = [
  {
    id: 1,
    image: "/step1.png",
    title: "Step 01",
    description: "Enter your prompt & click the Generate button.",
  },
  {
    id: 2,
    image: "/step3.png",
    title: "Step 03",
    description: "Feel free to copy & share the response.",
  },
  {
    id: 3,
    image: "/step2.png",
    title: "Step 02",
    description: "Expect a more engaging & better-organized reply.",
  },
];
