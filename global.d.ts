// src/global.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
    REACT_APP_ENV: "local" | "staging" | "production";
    // Add other custom environment variables here
  }
}
