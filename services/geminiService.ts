
import { GoogleGenAI, Type } from "@google/genai";
import type { ProductIdea } from '../types';

// IMPORTANT: Do NOT configure an API key in this file.
// The API key is injected automatically by the execution environment.
// We must re-initialize the client on each call to ensure the latest key is used.
const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateContent = async (topic: string): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, engaging blog post about "${topic}". The post should be around 200-300 words. Format it using Markdown.`,
    });
    return response.text ?? "No content generated.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Failed to generate content. Please check the console for details.";
  }
};

export const generateProductIdeas = async (niche: string): Promise<ProductIdea[]> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 5 innovative digital product ideas for the "${niche}" niche.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: "A catchy name for the digital product.",
              },
              description: {
                type: Type.STRING,
                description: "A brief, one-sentence description of the product.",
              },
              targetAudience: {
                type: Type.STRING,
                description: "The primary target audience for this product.",
              },
            },
            required: ["name", "description", "targetAudience"],
          },
        },
      },
    });

    if (!response.text) {
        throw new Error("API returned an empty response.");
    }
    
    // The response text is a JSON string, so we parse it.
    const ideas: ProductIdea[] = JSON.parse(response.text);
    return ideas;

  } catch (error) {
    console.error("Error generating product ideas:", error);
    throw new Error("Failed to generate product ideas. Please ensure your prompt is clear and try again.");
  }
};
