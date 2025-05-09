import {
  CompetitivePricing,
  Customization,
  DedicatedSupport,
  DeveloperFriendly,
  HighAccuracy,
  IndustryIntegration,
  RealTimeProcessing,
  Scalability,
} from "../../public";
import {
  ComprehensiveDocumentation,
  DeverseLanguageSupport,
  EasyIntegration,
  Supports,
} from "../../public";
import { RxCheckCircled } from "react-icons/rx";


export const contentApisData = [
  {
    id: 1,
    title: "Video Description",
    link: "video-description",
    endPoint:
      "https://intelliwriter.io/api/video_description? title=Make Your LinkedIn Profile Work for You: The College Student's Guide",
    details: [
      {
        heading: "API Name",
        description: "Video Description Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate video descriptions based on a provided title. It is a helpful tool for content creators, video editors, and marketers who want to save time and ensure consistent and engaging video descriptions.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/video_description",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Title",
            type: "string",
            description:
              "The title of the video for which you want to generate a description.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/video_description",
        method: "POST",
        hasCode: true,
        code: `{\n     "Title": "How to Bake the Perfect Chocolate Chip Cookies" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "description",
            type: "string",
            description:
              "The generated video description based on the provided title.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The description was successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing the 'Title' parameter or if the title is too short.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a GET request to the /video_description endpoint with the 'Title' parameter containing the title of your video.",
          "The API will process the request and return a generated video description that you can use for your video content.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating engaging video descriptions, making it easier for you to attract and retain viewers with well-crafted descriptions that match your video's content.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/video_description'; \n const data = { Ttile: 'Your title here' }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/video_description' \n data = {'Title': 'Your Title here'} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/video_description"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\"Title\":\"Your Title here\"}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 2,
    title: "Article Provider",
    link: "article-provider",
    endPoint:
      "https://intelliwriter.io/api/article? title=Make Your LinkedIn Profile Work for You: The College Student's Guide",
    details: [
      {
        heading: "API Name",
        description: "Article Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate articles based on three input parameters: Title, Keywords, and Subheading. It is a valuable tool for content writers, bloggers, and businesses looking to quickly create informative articles.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/article",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Title",
            type: "string",
            description: "The title of the article.",
          },
          {
            paramTitle: "Keywords",
            type: "string",
            description:
              "A list of keywords relevant to the article, separated by commas.",
          },
          {
            paramTitle: "Subheading",
            type: "string",
            description: "A subheading or brief description of the article.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/article",
        method: "POST",
        hasCode: true,
        code: `{\n     "Title": "The Benefits of Healthy Eating", \n     "Title": "health, nutrition, diet, wellness", \n     "Subheading": "Discover the advantages of maintaining a healthy diet and lifestyle." \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "article",
            type: "string",
            description:
              "The generated article based on the provided Title, Keywords, and Subheading.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: " The article was successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing any of the required parameters.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          'Send a POST request to the /article endpoint with the "Title," "Keywords," and "Subheading" parameters containing the relevant information for your article.',
          "The API will process the request and return a generated article that you can use for your content.",
        ],
      },
    ],
    description:
      "This API streamlines the process of creating informative articles, helping you save time and effort while producing content that aligns with your desired topics and keywords.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/article'; \n const data = { \n           "Title": "The Benefits of Healthy Eating", \n           "Keywords": "health, nutrition, diet, wellness", \n           "Subheading": "Discover the advantages of maintaining a healthy diet and lifestyle." \n          }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/article' \n data = { \n           "Title": "The Benefits of Healthy Eating", \n           "Keywords": "health, nutrition, diet, wellness", \n           "Subheading": "Discover the advantages of maintaining a healthy diet and lifestyle." \n          }; \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/article"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{ \n           \"Title\": \"The Benefits of Healthy Eating\", \n           \"Keywords\": \"health, nutrition, diet, wellness\", \n           \"Subheading\": \"Discover the advantages of maintaining a healthy diet and lifestyle.\" \n          };\"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here    
        `,
    },
  },
  {
    id: 3,
    title: "Tags Provider",
    link: "tags-provider",
    endPoint:
      "https://intelliwriter.io/api/video_tags?title=Development Tutorials se KUCH NAHI HOGA! | Tanay Pratap Hindi",
    details: [
      {
        heading: "API Name",
        description: "Tags Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate tags for a given title. It's a valuable tool for content creators and video publishers looking to generate relevant tags for their videos based on the video's title.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/video_tags",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Title",
            type: "string",
            description:
              "The title of the video for which you want to generate tags.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/video_tags",
        method: "POST",
        hasCode: true,
        code: `{\n     "Title": "How to Bake the Perfect Chocolate Chip Cookies" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "tags",
            type: "string",
            description:
              "The generated article based on the provided Title, Keywords, and Subheading.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The tags were successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing the 'Title' parameter or if the title is too short.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a POST request to the /video_tags endpoint with the 'Title' parameter containing the title of your video.",
          "The API will process the request and return generated tags, comma-separated, that you can use to improve the discoverability of your video.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating video tags, making it easier for you to optimize your video's metadata and improve its visibility on video platform.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/video_tags'; \n const data = { Title: 'Your title here' }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/video_tags' \n data = {'Title': 'Your Title here'} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/video_tags"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\"Title\":\"Your Title here\"}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 4,
    title: "Title Provider",
    link: "title-provider",
    endPoint:
      "https://intelliwriter.io/api/video_title?description=Are you a college student aiming to get ahead of the competition in the professional world? Look no further! This guide to crafting an impressive LinkedIn profile for 2023 outlines the tips and tricks to help you showcase your skills, achievements, and aspirations. Here’s everything you need to know to make sure your profile is prepped and ready for your dream career.",
    details: [
      {
        heading: "API Name",
        description: "Title Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate SEO-friendly titles for a given description. It's a valuable tool for content creators and marketers looking to craft attention-grabbing and search engine optimized titles for their content.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/video_title",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Description",
            type: "string",
            description:
              "The description or content for which you want to generate a SEO-friendly title.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/video_title",
        method: "POST",
        hasCode: true,
        code: `{\n     "Description": "Learn the secrets to baking the perfect chocolate chip cookies with this step-by-step tutorial. In this video, we'll show you the ingredients, tips, and techniques for creating soft, gooey cookies that will satisfy your sweet tooth. Don't miss out on this delicious baking adventure!" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "title",
            type: "string",
            description:
              "The generated SEO-friendly title based on the provided description.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The title was successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing the 'Description' parameter or if the description is too short.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a POST request to the /video_title endpoint with the 'Description' parameter containing the content for which you want to generate a title.",
          "The API will process the request and return a generated SEO-friendly title that you can use to improve the visibility and relevance of your content.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating video tags, making it easier for you to optimize your video's metadata and improve its visibility on video platform.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/title'; \n const data = { Description: 'Your description here' }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/title' \n data = {'Description': 'Your description here'} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/title"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\"Description\":\"Your description here\"}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 5,
    title: "Caption Provider",
    link: "caption-provider",
    endPoint:
      "https://intelliwriter.io/api/caption?title=How to create a Great LinkedIn Profile in 2023 | for College Students",
    details: [
      {
        heading: "API Name",
        description: "Caption Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate captions or short descriptions for a given title. It's a useful tool for content creators and social media marketers looking to create engaging and concise captions for their posts or content.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/caption",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Title",
            type: "string",
            description: "The title for which you want to generate a caption.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/caption",
        method: "POST",
        hasCode: true,
        code: `{\n     "Title": "How to Bake the Perfect Chocolate Chip Cookies" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "caption",
            type: "string",
            description:
              "The generated caption or short description based on the provided title.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The caption was successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing the 'Title' parameter or if the title is too short.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a POST request to the /caption endpoint with the 'Title' parameter containing the title for which you want to generate a caption.",
          "The API will process the request and return a generated caption that you can use for your social media posts or content descriptions.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating engaging and concise captions, making it easier for you to captivate your audience and convey the essence of your content effectively.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/caption'; \n const data = { Title: 'Your title here' }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/caption' \n data = {'Title': 'Your Title here'} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/caption"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\"Title\":\"Your Title here\"}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 6,
    title: "Description Provider",
    link: "description-provider",
    endPoint:
      "https://intelliwriter.io/api/description?title=Make Your LinkedIn Profile Work for You: The College Student's Guide",
    details: [
      {
        heading: "API Name",
        description: "Description Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate descriptions for a given title. It's a valuable tool for content creators and marketers looking to create informative and engaging descriptions for various content types.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/description",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Title",
            type: "string",
            description:
              "The title or content for which you want to generate a description.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/description",
        method: "POST",
        hasCode: true,
        code: `{\n     "Title": "The Benefits of Healthy Eating" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "description",
            type: "string",
            description:
              "The generated description based on the provided title.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The description was successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing the 'Title' parameter or if the title is too short.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a POST request to the /description endpoint with the 'Title' parameter containing the title or content for which you want to generate a description.",
          "The API will process the request and return a generated description that you can use to provide context and engage your audience with your content.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating informative and engaging descriptions, saving you time and effort while ensuring your content is well-described and enticing to your audience.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/description'; \n const data = { Title: 'Your title here' }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/description' \n data = {'Title': 'Your Title here'} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/description"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\"Title\":\"Your Title here\"}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 7,
    title: "Hashtags Provider",
    link: "hashtags-provider",
    endPoint: `https://intelliwriter.io/api/hashtags?description=What's my story? An engineer, in love with his job, started teaching on the side. Got lucky. Impacted 1000s of lives. Had to finally leave his job to increase the impact surface area. Raised $5M funding to fix education. Is learning day and day about startups and building a valuable product.%20How is it going? A decade of engineering helps in systems thinking and product building. Learning about Strategy, Marketing, People Management, and Finance on the go. What am I building? Today, 25 million Indians prepare for government job entrance exams. They do it for years together.%20The probability of success is less than 1% but they still do it. Why? For the lack of a structured alternative to launch their white-collar career. I am building Invact to bridge this gap. %20How? Follow me to know, it's a long story. I am telling it in parts every day.`,
    details: [
      {
        heading: "API Name",
        description: "Hashtags Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate relevant hashtags for a given description. It's a valuable tool for social media enthusiasts, content creators, and marketers looking to generate hashtags that align with the content of their descriptions.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/hashtags",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Description",
            type: "string",
            description:
              "The description or content for which you want to generate hashtags.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/hashtags",
        method: "POST",
        hasCode: true,
        code: `{\n     "Description": "Learn the secrets to baking the perfect chocolate chip cookies with this step-by-step tutorial. In this video, we'll show you the ingredients, tips, and techniques for creating soft, gooey cookies that will satisfy your sweet tooth. Don't miss out on this delicious baking adventure!" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "hashtags",
            type: "string",
            description:
              "The generated hashtags based on the provided description.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The hashtags were successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing the 'Description' parameter or if the description is too short.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a POST request to the /hashtags endpoint with the 'Description' parameter containing the content for which you want to generate hashtags.",
          "The API will process the request and return generated hashtags that you can use to enhance the discoverability and reach of your content on social media platforms.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating relevant and effective hashtags, helping you improve the visibility of your content and reach a wider audience.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/hashtags'; \n const data = { Description: 'Your description here' }; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/hashtags' \n data = {'Description': 'Your description here'} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/hashtags"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\"Description\":\"Your description here\"}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 8,
    title: "Wanted Ad Provider",
    link: "wanted-ad-provider",
    endPoint: `https://intelliwriter.io/api/ad?Job_title=frontend developer&company_name=google&l`,
    details: [
      {
        heading: "API Name",
        description: "Help Wanted Ad Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate help wanted ads for job postings based on three input parameters: Job Title, Company Name, and Location. It's a useful tool for recruiters and businesses looking to create engaging and informative job ads to attract potential candidates.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/ad",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Job_title",
            type: "string",
            description: "The title of the job you're advertising.",
          },
          {
            paramTitle: "Company_name",
            type: "string",
            description: "The name of the hiring company.",
          },
          {
            paramTitle: "Location",
            type: "string",
            description: "The location where the job is based.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/ad",
        method: "POST",
        hasCode: true,
        code: `{\n     "Job_title": "Software Developer" \n     "Company_name": "Tech Innovators Inc." \n     "Location": "San Francisco, CA" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "help_waanted_ad",
            type: "string",
            description:
              "The generated help wanted ad based on the provided Job Title, Company Name, and Location.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The help wanted ad were successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing any of the required parameters.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a POST request to the /ad endpoint with the 'Job_title,' 'Company_name,'' and 'Location' parameters containing the relevant information for your job ad.",
          "The API will process the request and return a generated help wanted ad that you can use to attract potential candidates to your job posting.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating compelling job ads, helping you reach and engage with a broader pool of candidates for your job openings.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/ad'; \n const data = {\n     "Job_title": "Software Developer" \n     "Company_name": "Tech Innovators Inc." \n     "Location": "San Francisco, CA" \n}; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/ad' \n data = {\n     "Job_title": "Software Developer" \n     "Company_name": "Tech Innovators Inc." \n     "Location": "San Francisco, CA" \n} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/ad"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\n     \"Job_title\": \"Software Developer\" \n     \"Company_name\": \"Tech Innovators Inc.\" \n     \"Location\": \"San Francisco, CA\" \n}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 9,
    title: "FAQs Provider",
    link: "faqs-provider",
    endPoint: `https://intelliwriter.io/api/FAQs?company_name=OpenUp&description=Using advanced artificial intelligence and deep learning, Article Forge writes entire 1,500+ word articles automatically. From product descriptions.`,
    details: [
      {
        heading: "API Name",
        description: "FAQs Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          "This API is designed to automatically generate frequently asked questions (FAQs) based on a provided description and company name. It's a useful tool for businesses, websites, and customer support teams looking to create informative FAQs to assist their customers.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/FAQs",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Description",
            type: "string",
            description:
              "A description or content that provides context for generating FAQs",
          },
          {
            paramTitle: "Company_name",
            type: "string",
            description:
              "The name of the company or organization related to the FAQs.",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/FAQs",
        method: "POST",
        hasCode: true,
        code: `{\n     "Description": "Our company specializes in high-quality home appliances designed to make your life easier. From innovative kitchen gadgets to energy-efficient laundry machines, we strive to provide products that enhance your everyday life." \n     "Company_name": "ABC Appliances" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "faqs",
            type: "string",
            description:
              "The generated FAQs based on the provided description and company name.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The FAQs were successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              'If the request is missing the "Description" or "Company_Name" parameters.',
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          'Send a POST request to the /FAQs endpoint with the "Description" and "Company_Name" parameters containing the content and company name for which you want to generate FAQs.',
          "The API will process the request and return a list of generated FAQs that you can use to provide information and support to your customers.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating FAQs, helping you provide valuable information to your audience and improve customer satisfaction.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/FAQs'; \n const data = {\n     "Description": "Your description here" \n     "Company_name": "Tech Innovators Inc." \n}; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/FAQs' \n data = {\n     "Description": "Your description here" \n     "Company_name": "Tech Innovators Inc." \n} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/FAQs"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\n     "Description": "Your description here" \n     "Company_name": "Tech Innovators Inc." \n}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
  {
    id: 10,
    title: "Quiz Provider",
    link: "quiz-provider",
    endPoint: `https://intelliwriter.io/api/quiz?subject=machine learning&Questions=5&topic=Gradient decent`,
    details: [
      {
        heading: "API Name",
        description: "Quiz Generator",
        route: null,
        method: null,
      },
      {
        heading: "Description",
        description:
          " This API is designed to automatically generate text-based quizzes based on three input parameters: Subject, Question, and Topic. It's a valuable tool for educators, content creators, and websites looking to create engaging text-based quizzes for their audience.",
        route: null,
        method: null,
      },
      {
        heading: "Endpoint",
        description: null,
        route: "/quiz",
        method: null,
      },
      {
        heading: "HTTP Method",
        description: null,
        route: "",
        method: "GET",
      },
      {
        heading: "Parameters",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "Subject",
            type: "string",
            description: "The subject or category of the quiz.",
          },
          {
            paramTitle: "Question",
            type: "string",
            description: "The main question or topic for the quiz.",
          },
          {
            paramTitle: "Topic",
            type: "string",
            description:
              "A subtopic or additional information related to the quiz",
          },
        ],
      },
      {
        heading: "Example Request",
        description: null,
        route: "/ad",
        method: "POST",
        hasCode: true,
        code: `{\n     "Subject": "Science" \n     "Question": "The Solar System" \n     "Topic": "Planets and Their Characteristics" \n}`,
      },
      {
        heading: "Response Fields",
        description: null,
        route: null,
        method: null,
        hasBullets: true,
        bullets: [
          {
            paramTitle: "faqs",
            type: "array of strings",
            description:
              "The generated FAQs based on the provided description and company name.",
          },
        ],
      },
      {
        heading: "Status Code",
        description: null,
        route: null,
        method: null,
        hasStatus: true,
        bulletStatus: [
          {
            status: "200 OK",
            description: "The FAQs were successfully generated.",
          },
          {
            status: "400 Bad Request",
            description:
              "If the request is missing the 'Description' or 'Company_Name' parameters.",
          },
        ],
      },
      {
        heading: "Usage",
        description: null,
        route: null,
        method: null,
        hasUsage: true,
        bulletUsage: [
          "Send a POST request to the /FAQs endpoint with the 'Description' and 'Company_Name' parameters containing the content and company name for which you want to generate FAQs.",
          "The API will process the request and return a list of generated FAQs that you can use to provide information and support to your customers.",
        ],
      },
    ],
    description:
      "This API simplifies the process of creating compelling job ads, helping you reach and engage with a broader pool of candidates for your job openings.",
    codeBlock: {
      javascript: `const fetch = require('node-fetch'); // For Node.js \n const api_key = 'your_api_key'; \n const url = 'https://intelliwriter.io/api/quiz'; \n const data = {\n     "Subject": "Your subject here " \n     "Question": "Your questions here" \n     "Topic": "Your quiz topic here" \n}; \n fetch(url, { \n   method: 'POST', \n   headers: { \n     'Authorization': \`Bearer \${api_key}\`, \n     'Content-Type': 'application/json', \n   }, \n   body: JSON.stringify(data), \n }) \n .then(response => response.json()) \n .then(result => console.log(result));`,

      python: `import requests \n api_key = 'your_api_key' \n url = 'https://intelliwriter.io/api/quiz' \n data = {\n     "Subject": "Your subject here " \n     "Question": "Your questions here" \n     "Topic": "Your quiz topic here" \n} \n response = requests.post(url, headers={'Authorization': f'Bearer {api_key}'}, json=data) \n result = response.json() \n print(result)`,

      java: `import org.apache.http.HttpResponse; \n import org.apache.http.client.methods.HttpPost; \n import org.apache.http.entity.StringEntity; \n import org.apache.http.impl.client.CloseableHttpClient; \n import org.apache.http.impl.client.HttpClients; \n CloseableHttpClient client = HttpClients.createDefault(); \n HttpPost httpPost = new HttpPost("https://intelliwriter.io/api/quiz"); \n httpPost.addHeader("Authorization", "Bearer your_api_key"); \n httpPost.addHeader("Content-Type", "application/json"); \n StringEntity input = new StringEntity("{\n     "Subject": "Your subject here " \n     "Question": "Your questions here" \n     "Topic": "Your quiz topic here" \n}"); \n httpPost.setEntity(input); \n HttpResponse response = client.execute(httpPost); \n // Process the response here`,
    },
  },
];


// API Home Page

export const features = [
  {
    id: 0,
    title: "High Accuracy",
    desc: "Precise AI results you can trust",
    icon: HighAccuracy,
  },
  {
    id: 2,
    title: "Scalability",
    desc: "Grow your AI capabilities effortlessly",
    icon: Scalability,
  },
  {
    id: 3,
    title: "Real-time Processing",
    desc: "Immediate responses for dynamic applications",
    icon: RealTimeProcessing,
  },
  {
    id: 4,
    title: "Customization",
    desc: "Tailor AI solutions to your specific needs",
    icon: Customization,
  },
  {
    id: 5,
    title: "Industry Integration",
    desc: "Seamlessly fits into various sectors",
    icon: IndustryIntegration,
  },
  {
    id: 6,
    title: "Developer-Friendly",
    desc: "Simplifies integration for coders",
    icon: DeveloperFriendly,
  },
  {
    id: 7,
    title: "Competitive Pricing",
    desc: "Cost-effective plans for all users",
    icon: CompetitivePricing,
  },
  {
    id: 8,
    title: "Dedicated Support",
    desc: "24/7 assistance when you need it",
    icon: DedicatedSupport,
  },
];

export const missions = [
  {
    id: 0,
    title: "Easy Integration:",
    desc: "Integrate AI into your applications effortlessly with our API. In just a few lines of code, you can unlock the potential of machine learning and natural language processing.",
    icon: ComprehensiveDocumentation,
  },
  {
    id: 1,
    title: "Diverse Language Support",
    desc: "Our AI APIs support a wide range of programming languages, including Python, JavaScript, Ruby, and more. No matter your preferred language, you can harness the power of AI.",
    icon: DeverseLanguageSupport,
  },
  {
    id: 2,
    title: "Customization and Personalization",
    desc: "Our extensive documentation provides you with step-by-step guides, code samples, and real-world examples. We make sure you have everything you need to get started quickly.",
    icon: EasyIntegration,
  },
  {
    id: 3,
    title: "Learning Course Builder",
    desc: "Our dedicated support team is here around the clock to assist you. Have a question or run into an issue? We're just a message away, ready to help.",
    icon: Supports,
  },
];

export const trust_api_section_data = [
  {
    id: 1,
    icon: <RxCheckCircled />,
    paragraph:
      "Robust Data Encryption: Data is secure during transmission through advanced encryption, preventing unauthorized access.",
  },
  {
    id: 2,
    icon: <RxCheckCircled />,
    paragraph:
      "Data Privacy Compliance: Stringent adherence to data protection laws ensures data confidentiality and privacy.",
  },
  {
    id: 3,
    icon: <RxCheckCircled />,
    paragraph:
      "Access Control: Only authorized personnel can access and manage systems, with regular monitoring and auditing.",
  },
  {
    id: 4,
    icon: <RxCheckCircled />,
    paragraph:
      "Regular Security Audits: Ongoing tests identify vulnerabilities and address potential threats to maintain security.",
  },
  {
    id: 5,
    icon: <RxCheckCircled />,
    paragraph:
      "Dedicated Security Team: A team of experts continuously monitors for potential threats and vulnerabilities.",
  },
  {
    id: 6,
    icon: <RxCheckCircled />,
    paragraph:
      "Incident Response: A well-defined plan ensures swift response to security incidents, minimizing impact on users.",
  },
];
