# Spot AI

This is a Next.js application that uses Generative AI to help recruiters find and rank candidates.

## Core Features

- **AI-Powered Candidate Search**: Paste a job description and the AI analyzes it to extract key skills and requirements.
- **Candidate Ranking**: The application ranks a pool of mock candidates based on their relevance to the job description, providing a score and justification.
- **Job Board**: Users can view and post job openings.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your Google AI API key:
    ```
    GOOGLE_GENAI_API_KEY=your_api_key_here
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Run the Genkit development server (in a separate terminal):**
    ```bash
    npm run genkit:watch
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.
