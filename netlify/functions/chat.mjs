import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt to guide the conversation
const systemPrompt = `You are a friendly assistant for Hoffer Studios, a creative operations studio specializing in Shopify ecosystems for fashion and wellness brands.

Your goal is to gather information about a potential client's project in a conversational, natural way. Ask one question at a time and be warm and professional.

Gather the following information:
1. Their name and company name
2. What type of business they have (fashion, wellness, other)
3. What they're looking for help with (new Shopify build, redesign, lifecycle marketing, etc.)
4. Their budget range (under $10k, $10-25k, $25-50k, $50k+)
5. Their timeline (ASAP, 1-3 months, 3-6 months, exploring)
6. Their email for follow-up

After gathering all information, create a brief summary and ask them to confirm. Once they confirm, respond with EXACTLY:
"SUBMIT_BRIEF||{brief summary here}"

Keep responses brief (2-3 sentences max). Be conversational, not robotic.`;

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method not allowed'
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    const result = streamText({
      model: openai('gpt-4o-mini'), // Cheapest GPT-4 class model
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      maxTokens: 500,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to process request' })
    };
  }
};

