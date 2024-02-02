import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

const useGeminiPro = () => {
  return run;
};

async function run({ query }: { query: string }): Promise<string> {
  const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY || "AIzaSyB8WtrOlC4ZS5ElHbcGM9uL6Bi6SZRwbG8"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const parts = [{ text: query }];
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
    const response = result.response;
    const res = response.text();
    if (res) return res;
    else throw new Error("no response");
  } catch (error) {
    return "Unable to generate response... The Google Gemini Pro has certain limitations!! Try a different query";
  }
}

export default useGeminiPro;
