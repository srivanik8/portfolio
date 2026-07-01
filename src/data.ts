export const profile = {
  name: "Srivani Konda",
  role: "AI / ML Engineer",
  tagline:
    "I build systems that learn from noisy data — trading agents, diagnostic pipelines, and the GenAI plumbing in between.",
  location: "Dublin, Ireland",
  availability: "Open to work · Dublin · Cork · Remote",
  email: "imkondasrivani@gmail.com",
  phone: "+353 83 391 1890",
  linkedin: "https://linkedin.com/in/srivani-konda",
  github: "https://github.com/srivanik8",
  summary:
    "I'm Srivani — a CS grad specialising in AI & ML, currently doing my MSc at UCD. I got into machine learning because I liked the idea of writing code that figures things out on its own, and that's still what drives most of what I build. Over the past couple of years I've shipped a reinforcement learning trading system that got published, built a Gemini-powered diagnostic tool that's live on Streamlit, and put together a multimodal learning app from scratch. I'm most at home at the intersection of research and deployment — reading papers on a Monday, pushing something to production by Friday.",
};

export const education = [
  {
    school: "University College Dublin",
    location: "Dublin, Ireland",
    degree: "MSc in Data and Computational Science",
    detail: "Grade: 2:1",
    period: "2025 — Present",
  },
  {
    school: "Sreenidhi Institute of Science and Technology",
    location: "Hyderabad, India",
    degree: "B.E. Computer Science (AI & ML)",
    detail: "GPA: 8.9 / 10",
    period: "2021 — 2025",
  },
];

export const experience = [
  {
    role: "Python Developer Intern — AI & Data",
    org: "Intel Unnati",
    location: "Remote",
    period: "Mar 2024 — Jul 2024",
    points: [
      "Analysed structured datasets with Python, Pandas and SQL to extract actionable insight for data-driven decisions.",
      "Built and evaluated end-to-end ML pipelines for classification tasks — feature engineering and model selection across structured data.",
      "Shipped interactive Streamlit dashboards so stakeholders could explore data and monitor metrics in real time.",
      "Produced visualisations in Matplotlib, Seaborn and Plotly to communicate model performance to non-technical audiences.",
    ],
  },
  {
    role: "Freelance AI-Assisted Web Developer",
    org: "Enshire Ltd",
    location: "India",
    period: "Dec 2024 — Mar 2025",
    points: [
      "Delivered end-to-end responsive web applications, translating business requirements into working software through iterative feedback loops.",
      "Improved UX through data-driven iteration, contributing to a 30% increase in customer satisfaction scores.",
    ],
  },
  {
    role: "Front End Developer Intern",
    org: "Notify Ltd",
    location: "Remote",
    period: "Oct 2023 — Dec 2023",
    points: [
      "Built 15+ dynamic UI components in React.js, increasing platform responsiveness by 80% across the production system.",
    ],
  },
];

export const projects = [
  {
    name: "Algorithmic Trading using RL",
    stack: ["PyTorch", "Gymnasium", "Transformers", "NLTK", "Pandas"],
    description:
      "Trained PPO, DQN and A2C agents to trade under simulated market conditions, reaching 92% strategy accuracy. Built a sentiment pipeline on top — Transformers and NLTK reading financial news to feed signal into the agents' decisions. Published in a peer-reviewed journal.",
    link: {
      label: "Read the paper",
      url: "https://ijsrem.com/download/algorithmic-trading-using-machine-learning",
    },
  },
  {
    name: "EMR Analysis & Disease Prediction",
    stack: ["Python", "Streamlit", "Gemini API", "Scikit-learn"],
    description:
      "End-to-end diagnostic system: Scikit-learn on structured symptom data, Gemini reading unstructured EMRs and lab reports. RAG-style reasoning that maps free-text medical documents to structured outputs. 87% classification accuracy, deployed live.",
    link: {
      label: "View on GitHub",
      url: "https://github.com/srivanik8/disease_prediction",
    },
  },
  {
    name: "FunLearn",
    stack: ["Gemini", "React.js", "Whisper", "Vercel"],
    description:
      "Gemini generates adaptive quizzes from source material; Whisper TTS converts the same content into on-demand podcasts. Built and shipped solo, concept through deployment.",
    link: {
      label: "Live demo",
      url: "https://fun-learn-nine.vercel.app",
    },
  },
  {
    name: "QuickQuery",
    stack: ["MERN", "LangChain.js", "Gemini", "MongoDB"],
    description:
      "MongoDB query assistant that converts plain English into correct queries in Python or JavaScript. LangChain.js orchestrates Gemini under the hood. Includes QuickSnippet — a saved-query library for revisiting generated queries.",
    link: {
      label: "View on GitHub",
      url: "https://github.com/srivanik8/QuickQuery",
    },
  },
  {
    name: "Vishayamitra",
    stack: ["Python", "Streamlit", "PandasAI"],
    description:
      "Conversational data assistant built as a team — Streamlit front end, PandasAI-driven natural language querying over tabular data. Contributed to the data-querying and bot logic.",
    link: {
      label: "View on GitHub",
      url: "https://github.com/srivanik8/vishayamitra",
    },
  },
];

export const skills = {
  "ML / AI": ["Python", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "RL (PPO, DQN, A2C)", "Gymnasium"],
  "LLMs & GenAI": ["Gemini API", "Claude API", "GPT", "Prompt Engineering", "RAG Pipeline Design", "LangChain"],
  NLP: ["Hugging Face (BERT, RoBERTa)", "NLTK", "Sentiment Analysis", "Document Classification"],
  Data: ["Pandas", "NumPy", "SQL", "MongoDB", "DuckDB", "EDA"],
  Deployment: ["Streamlit", "FastAPI", "Docker", "Git", "Vercel", "Azure"],
  Visualisation: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI"],
  Other: ["React.js", "JavaScript", "OpenCV", "C/C++"],
};

export const accomplishments = [
  { title: "NodeBrew 2024 Hackathon", detail: "1st Place Overall + Best Accessibility & Inclusivity Award" },
  { title: "MLH TechTogether 2023", detail: "3rd Place Overall + Best Sustainability Hack" },
  { title: "MLH Waffle Hacks 2023", detail: "Best Use of MongoDB Atlas" },
];

export const certifications = [
  "Data Scientist Professional — DataCamp",
  "Intro to Machine Learning, Data Visualisation, Pandas, Data Cleaning — Kaggle",
  "Responsive Web Design — freeCodeCamp",
];