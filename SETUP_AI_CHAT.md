# AI Chat Setup Guide

## Overview
The AI-powered conversation modal uses **GPT-4o-mini** (OpenAI's cheapest model at $0.15/1M input tokens and $0.60/1M output tokens) to gather client information and generate project briefs.

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up OpenAI API Key

#### For Local Development:
Create a `.env` file in the project root:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

#### For Netlify:
1. Go to your Netlify site dashboard
2. Navigate to **Site settings → Environment variables**
3. Add a new variable:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key

### 3. Get an OpenAI API Key
1. Go to [platform.openai.com](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to **API keys**
4. Click **Create new secret key**
5. Copy the key (you won't be able to see it again!)
6. Add billing information if you haven't already

### 4. Test Locally
```bash
netlify dev
```

Then click "Start a Conversation" on your site to test the AI chat.

## How It Works

1. **User clicks "Start a Conversation"** - Modal opens with AI assistant
2. **AI gathers information** - Conversationally asks about:
   - Name & company
   - Business type (fashion/wellness/other)
   - Project needs (Shopify build, redesign, marketing, etc.)
   - Budget range
   - Timeline
   - Email
3. **AI confirms details** - Summarizes and asks for confirmation
4. **Extract structured data** - Second AI call extracts fields from conversation
5. **Submit to Netlify Form** - Brief is automatically submitted
6. **User receives confirmation** - Modal shows success message

## Cost Estimate

GPT-4o-mini pricing:
- **Input**: $0.15 per 1M tokens (~750K words)
- **Output**: $0.60 per 1M tokens (~750K words)

Typical conversation cost: **~$0.001-0.005** (less than half a cent per conversation!)

## Files Created

- `package.json` - Dependencies for AI SDK and Zod
- `netlify/functions/chat.mjs` - Serverless function for AI streaming
- `netlify/functions/extract-brief.mjs` - Function to extract structured data from conversation
- `index.html` - Updated with:
  - Hidden Netlify form for submissions
  - Chat modal UI
  - JavaScript for conversation and form submission
- `SETUP_AI_CHAT.md` - This file

## Form Submissions in Netlify

After deployment, you can view form submissions in your Netlify dashboard:
1. Go to your site dashboard
2. Click **Forms** in the sidebar
3. View all **project-brief** submissions with:
   - Structured data (name, email, budget, etc.)
   - Full conversation transcript
   - AI-generated brief summary

## Troubleshooting

**Modal doesn't open?**
- Check browser console for errors
- Make sure all "Start a Conversation" links are updated

**Chat not responding?**
- Verify `OPENAI_API_KEY` is set in Netlify environment variables
- Check Netlify function logs for errors

**Form not submitting?**
- The hidden form must be deployed first for Netlify to recognize it
- Check that the form has the `netlify` attribute

Need help? Check the [AI SDK docs](https://ai-sdk.dev/) or [Netlify Functions docs](https://docs.netlify.com/functions/overview/).

