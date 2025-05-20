# 🤖 AI-Powered Technical Interview Question Generator

This app uses **Google Gemini Pro** LLM to generate **tailored interview questions** based on:

- ✅ Job Title
- ✅ Job Description
- ✅ Experience Level

This app also integrates a simple **Retrieval-Augmented Generation (RAG)** mechanism using a local knowledge base to ground generated questions with relevant examples.

---

## ✨ Features

- **Dynamic Skill Inference** : Extracts relevant skills using LLM.
- **RAG-Style Grounding**: Uses a local question bank to enrich context before question generation.
- **Evaluation Criteria Included**: Each question has difficulty and category level and evaluation criteria.

---

## 🚀 How It Works

1. **Input**: You provide:

   - `Job Title`: e.g., "Python Developer"
   - `Job Description`: A paragraph describing the role
   - `Experience Level`: e.g., "Mid"

2. **LLM Skill Extraction**:

3. **Example Retrieval**: The app searches the local `Question` for matching examples based on skills (RAG grounding).

4. **LLM Question Generation**: Gemini generates result based on given input.

5. **Output**: Returns a clean JSON array of questions, expected answers, and scoring criteria.

---

**Output**
A clean and structured JSON array like:

```json
{
  "question": "Describe a scenario where you had to refactor a large React component...",
  "difficulty": "medium",
  "category": "Frontend Architecture",
  "skillAreas": [
    "React",
    "Prop Drilling",
    "Component Refactoring",
    "Redux",
    "State Management"
  ],
  "practicalApplicationContext": "Improving the structure and maintainability of a complex React component in a MERN application.",
  "evaluationCriteria": {
    "answerHighlights": [
      "Identifies prop drilling as a problem",
      "Uses Context API or Redux",
      "Considers trade-offs"
    ],
    "knowledgeLevel": "intermediate",
    "warningSigns": ["Fails to recognize prop drilling as a problem"]
  },
  "answer": "Prop drilling makes components harder to understand..."
}
```

## 🧰 Tech Stack
1. Typescript
2. Node Js
3. React Js
4. Google Gemini AI (LLM) - @google/genai
5. In-Memory Knowledge Bank

## 📦 Installation

Follow the steps below to set up the project locally:


### 1. Run the server
```bash
    cd server/
    npm install
    npm run dev
```

### 2. Configure Environment Variables in server
Create a .env file and add your Gemini API key:

```bash
    GEMINI_API_KEY=your_google_gemini_api_key
```

### 3. Run the client
```bash
    cd client
    npm install
    npm run dev
```
### 4. Configure Environment Variables in client
```bash
    VITE_BACKEND_URL=http://localhost:3001
```
## Reference
<img width="1226" alt="Reference" src="https://github.com/user-attachments/assets/7eb49f8c-8933-4225-a46e-91b55407ba5a" />

## Sample output

https://github.com/user-attachments/assets/178e6116-2c27-42db-b8f5-4dde2c2a0b70



