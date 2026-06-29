export const profile = {
  name: "Srivani Konda",
  role: "AI / ML Engineer",
  tagline:
    "I build systems that learn from noisy data — trading agents, diagnostic pipelines, and the GenAI plumbing that connects them.",
  location: "Dublin, Ireland",
  email: "imkondasrivani@gmail.com",
  phone: "+353 83 391 1890",
  linkedin: "https://linkedin.com/in/srivani-konda",
  github: "https://github.com/srivanik8",
  summary:
    "Computer Science graduate (AI & ML specialisation) and current MSc Data and Computational Science student at UCD. I take AI projects from prototype to production — a published reinforcement-learning trading system, a deployed Gemini-powered diagnostic platform, and a multimodal learning app built solo end to end.",
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
    name: "Algorithmic Trading using Reinforcement Learning",
    tag: "Published Research",
    stack: ["PyTorch", "Gymnasium", "Transformers", "NLTK", "Pandas"],
    description:
      "Trained PPO, DQN and A2C agents to trade under simulated market conditions, reaching 92% strategy accuracy. Layered in a sentiment pipeline — Hugging Face Transformers and NLTK reading financial news to feed signal into the agents' decisions. Evaluated with formal risk metrics and strategy comparisons; findings published in a peer-reviewed journal.",
    metric: "92% strategy accuracy",
    link: null,
  },
  {
    name: "EMR Analysis & Disease Prediction",
    tag: "Live Demo",
    stack: ["Python", "Streamlit", "Gemini API", "Scikit-learn"],
    description:
      "An end-to-end diagnostic system pairing Scikit-learn on structured symptom data with Gemini reading unstructured EMRs and lab reports — RAG-style reasoning that maps free-text medical documents onto structured outputs. Deployed live on Streamlit, 87% classification accuracy.",
    metric: "87% classification accuracy",
    link: null,
  },
  {
    name: "FunLearn — Adaptive Learning Platform",
    tag: "Live Demo · Solo Build",
    stack: ["Gemini", "React.js", "Whisper", "Vercel"],
    description:
      "Gemini generates adaptive quizzes from source material; Whisper TTS turns the same content into on-demand podcasts. Built and shipped solo, concept through deployment, across a multimodal generative pipeline.",
    metric: "Solo, concept → deploy",
    link: null,
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
