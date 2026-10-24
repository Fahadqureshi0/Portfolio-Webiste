# Portfolio Website

Personal portfolio of **Fahad Qureshi**, Software Engineer working in machine learning, RAG, NLP, and FastAPI.

**Live site:** [portfolio-webiste-virid.vercel.app](https://portfolio-webiste-virid.vercel.app/)

Built with React, Vite, Tailwind CSS, and Motion.

## What's on the site

The site showcases my machine learning and AI projects, each with its own project page covering the problem, the approach, key technical highlights, the tech stack, and links to the code and a live demo where one exists.

| Project | What it is |
|---------|------------|
| [Company Research Agent](https://github.com/Fahadqureshi0/Company-Research-Agent) | Tool-calling AI agent that researches a company and produces a PDF report (LangChain, Groq, FastAPI, React) |
| [HR Assistant RAG Chatbot](https://github.com/Fahadqureshi0/HR-Assistant-RAG-Chatbot) | RAG chatbot that answers HR policy questions strictly from company documents (LangChain, Groq, FAISS, FastAPI) |
| [Customer Reviews Sentiment Analysis](https://github.com/Fahadqureshi0/Customer-Reviews-Sentiment-Analysis) | LSTM sentiment classifier behind a FastAPI service with a Streamlit UI, containerized with Docker |
| [AI Customer Support Intent Classifier](https://github.com/Fahadqureshi0/AI-Customer-Support-Intent-Classifier) | LSTM intent detection with automated responses (TensorFlow, Streamlit) |
| [Job Recommendation System](https://github.com/Fahadqureshi0/Job-Recommendation-System) | Resume-to-job matching with TF-IDF and cosine similarity |
| [Customer Churn Prediction API](https://github.com/Fahadqureshi0/Customer-Churn-Prediction-APIs) | Churn-risk model served through a FastAPI REST endpoint |
| [Multiple Disease Prediction System](https://github.com/Fahadqureshi0/Multiple-Disease-Prediction-System) | Diabetes, heart disease, and Parkinson's predictors in one Streamlit app |

## Tech stack

- **React** for the UI
- **Vite** for development and builds
- **Tailwind CSS** for styling
- **Motion** for animations
- **Vercel** for hosting

## Run locally

You need [Node.js](https://nodejs.org/) (LTS recommended).

```bash
git clone https://github.com/Fahadqureshi0/Portfolio-Webiste.git
cd Portfolio-Webiste
npm install
npm run dev
```

Vite prints the local address in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production files are written to `dist/`. To preview the build locally:

```bash
npm run preview
```

## Deployment

The site deploys to Vercel as a Vite project. `vercel.json` handles client-side routing, so direct links to project pages work after a refresh.

To deploy your own copy, import the repository in Vercel and keep the default Vite settings (build command `npm run build`, output directory `dist`).

## Adding or editing a project

Project content lives in a single data file inside `src` (`projects.js`). Each entry has a `slug`, name, subtitle, headline, a stat, tech tags, a gradient, a `github` link, an optional `demo` link, a description, and a list of highlights. Add a new object to the `projects` array (the first entry appears first on the site), then save and the page updates.

## License

Released under the [MIT License](LICENSE).

## Contact

- GitHub: [Fahadqureshi0](https://github.com/Fahadqureshi0)
- LinkedIn: [Fahad Qureshi](https://www.linkedin.com/in/fahad-qureshi-b85664444/)
- Email: fahadqureshi.dev@gmail.com
