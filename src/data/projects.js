// All copy is sourced from Fahad's resume and the repositories' own READMEs
// at github.com/Fahadqureshi0 — numbers and claims are as reported there.
export const projects = [
  {
    slug: 'hr-assistant-rag-chatbot',
    name: 'HR Assistant RAG Chatbot',
    subtitle: 'Retrieval-Augmented Generation, FastAPI Backend',
    headline: 'Answers from the policy, or no answer at all.',
    stat: '3',
    statLabel: 'endpoints: /ask, /health, /unanswered',
    tech: ['Python', 'LangChain', 'Groq', 'FAISS', 'HuggingFace Embeddings', 'FastAPI'],
    gradient: 'from-indigo-400 via-blue-500 to-sky-400',
    github: 'https://github.com/Fahadqureshi0/HR-Assistant-RAG-Chatbot',
    description:
      'HR teams answer the same questions every week, and a chatbot that guesses is worse than no chatbot at all. I built a retrieval-augmented assistant that answers employees’ policy questions strictly from the company’s own documents, cites the policy behind every answer, and tells HR which questions the documents couldn’t answer. The backend API is complete; a chat frontend is next.',
    highlights: [
      'Grounding is enforced, not hoped for. The prompt restricts the Groq LLM to the retrieved excerpts and requires a fixed “not found” reply when the answer isn’t there, so the code can detect unanswered questions reliably. Those are logged and exposed through a /unanswered endpoint, which turns the chatbot’s gaps into a list of policies HR needs to write or clarify.',
      'Every chunk carries metadata (company, country, and policy type), which powers both filtering and source labels. A country filter returns that country’s rules plus the global ones, and each answer comes back with its sources: policy title, URL, country, and a snippet. Follow-ups like “and for adoption?” are rewritten into standalone questions before retrieval.',
      'Embeddings run locally (all-MiniLM-L6-v2), since Groq serves chat models only, and the FAISS index is built once and persisted to disk so restarts skip re-downloading and re-embedding. The FastAPI service is stateless: the client owns the chat history and sends it with each request, which keeps the server simple to scale.',
    ],
  },
  {
    slug: 'customer-reviews-sentiment-analysis',
    name: 'Customer Reviews Sentiment Analysis',
    subtitle: 'LSTM Model, Containerized Full-Stack App',
    headline: 'An LSTM behind an API, shipped in two containers.',
    stat: '2',
    statLabel: 'services, one docker compose up',
    tech: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'Streamlit', 'Docker', 'Docker Compose'],
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    github: 'https://github.com/Fahadqureshi0/Customer-Reviews-Sentiment-Analysis',
    demo: 'https://customer-reviews-sentiment-analysis-fdmtw3xtmcuetndecjwjva.streamlit.app/',
    description:
      'A full-stack application that classifies customer product reviews as Positive or Negative with an LSTM model. I treated the model as one component of a system, not the whole project: it sits behind a REST API, a separate UI consumes that API, and both ship as containers anyone can run with a single command.',
    highlights: [
      'The inference pipeline mirrors training exactly (text cleaning, tokenization, sequence padding, then an LSTM with a sigmoid output), built in TensorFlow/Keras.',
      'A clean API contract: POST /predict takes { review_text } and returns { sentiment, confidence }. The FastAPI backend and Streamlit frontend are decoupled, so either side can be scaled or redeployed independently.',
      'Both services are containerized and orchestrated with Docker Compose. They talk over a shared Docker network by service name rather than localhost, prebuilt images are published to Docker Hub, and a live demo runs on Streamlit Community Cloud.',
    ],
  },
  {
    slug: 'ai-customer-support-intent-classifier',
    name: 'AI Customer Support Intent Classifier',
    subtitle: 'NLP Intent Detection with Automated Responses',
    headline: 'Read the customer’s intent, reply like a professional.',
    stat: 'LSTM',
    statLabel: 'intent model with a confidence threshold',
    tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Streamlit'],
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    github: 'https://github.com/Fahadqureshi0/AI-Customer-Support-Intent-Classifier',
    demo: 'https://ai-customer-support-intent-classifier-etcm8es7qjalwytm7yx494.streamlit.app/',
    description:
      'Support teams spend their first minutes on every ticket figuring out what the customer actually wants. This system takes a raw customer message, predicts its intent with an LSTM, and selects an appropriate professional response, the first step toward automated ticket routing.',
    highlights: [
      'Model architecture: Embedding → LSTM → Dropout → Dense → Dropout → Softmax over the intent classes, with inputs tokenized and padded to 50 tokens.',
      'Four persisted artifacts (the trained model, tokenizer, label encoder, and an intent-to-response map) guarantee that production preprocessing matches training and keep the response logic separate from the model.',
      'The deployed Streamlit app shows the predicted intent, its confidence, and the top competing intents, with an adjustable confidence threshold so low-certainty predictions can be handled differently instead of answered blindly.',
    ],
  },
  {
    slug: 'job-recommendation-system',
    name: 'Job Recommendation System',
    subtitle: 'Resume-to-Job Matching with TF-IDF',
    headline: 'Upload a resume, get ranked job matches.',
    stat: '%',
    statLabel: 'match score for every recommendation',
    tech: ['Python', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'PyPDF', 'Pandas', 'Streamlit'],
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
    github: 'https://github.com/Fahadqureshi0/Job-Recommendation-System',
    demo: 'https://job-recommendation-system-p6arxjfvnvzxuhca2eues7.streamlit.app/',
    description:
      'Job seekers shouldn’t have to scroll through hundreds of postings to find the few that fit. This web app takes a PDF resume, extracts its text, and ranks job postings by relevance, showing a match percentage, job title, and category for each recommendation.',
    highlights: [
      'The pipeline runs PDF text extraction (PyPDF), then TF-IDF vectorization, cosine similarity against every posting, and a ranked top-N list.',
      'Job vectors and the fitted TF-IDF vectorizer are precomputed and stored, so each request only has to vectorize one resume. Resume parsing and recommendation logic live in separate modules.',
      'Honest output: the match percentage is labeled as text similarity between resume and posting, not a prediction of getting hired. Deployed on Streamlit Community Cloud for public use.',
    ],
  },
  {
    slug: 'customer-churn-prediction-api',
    name: 'Customer Churn Prediction API',
    subtitle: 'Predictive Analytics as a Service',
    headline: 'Churn risk, scored in real time.',
    stat: 'API',
    statLabel: 'real-time churn-risk predictions',
    tech: ['Python', 'Scikit-learn', 'FastAPI'],
    gradient: 'from-slate-600 via-slate-800 to-black',
    github: 'https://github.com/Fahadqureshi0/Customer-Churn-Prediction-APIs',
    description:
      'Losing a customer costs far more than keeping one, but only if you know who is about to leave. I trained a classification model on historical subscription and service-usage data to estimate each customer’s likelihood of churning, then exposed it as a service other applications can call.',
    highlights: [
      'A Scikit-learn classification model learns churn signals from historical subscription and service-usage data.',
      'The trained model is served through a FastAPI REST endpoint, so downstream applications such as a CRM or a retention dashboard can request a churn-risk prediction in real time instead of waiting on a batch report.',
    ],
  },
  {
    slug: 'multiple-disease-prediction-system',
    name: 'Multiple Disease Prediction System',
    subtitle: 'Three Models, One Deployed App',
    headline: 'Diabetes, heart disease, and Parkinson’s in one app.',
    stat: '3',
    statLabel: 'trained models in production',
    tech: ['Python', 'Scikit-learn', 'Logistic Regression', 'SVM', 'Pandas', 'Streamlit'],
    gradient: 'from-rose-300 via-pink-500 to-fuchsia-600',
    github: 'https://github.com/Fahadqureshi0/Multiple-Disease-Prediction-System',
    demo: 'https://multiple-disease-prediction-system-czc8m4xzgnqgxczmgi6nqe.streamlit.app/',
    description:
      'A web application that brings three separately trained diagnostic models together behind a single interface. A user enters medical measurements and gets an instant prediction for diabetes, heart disease, or Parkinson’s disease.',
    highlights: [
      'Each condition gets the model that suited its data: Logistic Regression for diabetes, and Support Vector Machines for heart disease and Parkinson’s. Each is trained on its own dataset and serialized for deployment.',
      'Pre-trained models are loaded at startup, so predictions are instant. A sidebar menu (streamlit-option-menu) switches between the three predictors.',
      'Deployed on Streamlit Community Cloud. It builds on my earlier standalone diabetes, heart disease, and Parkinson’s projects, including K-fold cross-validation experiments comparing Logistic Regression, SVM, Random Forest, and KNN.',
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
