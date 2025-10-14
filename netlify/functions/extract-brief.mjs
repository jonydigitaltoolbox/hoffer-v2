import { generateObject } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Schema for extracted data
const briefSchema = z.object({
  name: z.string().describe('Client full name'),
  company: z.string().describe('Company name'),
  email: z.string().email().describe('Email address'),
  business_type: z.string().describe('Type of business (fashion, wellness, other)'),
  project_needs: z.string().describe('What they need help with'),
  budget: z.string().describe('Budget range'),
  timeline: z.string().describe('Project timeline'),
  brief_summary: z.string().describe('A concise 2-3 sentence project brief summarizing their needs'),
});

export default async function handler(req, context) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { conversation } = await req.json();

    // Use AI to extract structured data from conversation
    const result = await generateObject({
      model: openai('gpt-4o-mini'),
      schema: briefSchema,
      prompt: `Extract the following information from this conversation between a Hoffer Studios assistant and a potential client. Fill in any fields that were discussed, use "Not provided" for missing information.

Conversation:
${conversation}

Extract the client's information into structured data.`,
    });

    return new Response(
      JSON.stringify(result.object),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Extract error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to extract data' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

export const config = {
  path: '/api/extract-brief',
};

