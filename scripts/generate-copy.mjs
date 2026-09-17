#!/usr/bin/env node
// Content copywriter helper for Mantassa Crafts, powered by Groq.
// Usage: node scripts/generate-copy.mjs path/to/facts.json
//
// facts.json shape:
// {
//   "type": "product" | "page",
//   "name": "Name Jhumka Earrings",
//   "facts": [
//     "hand-painted fabric disc",
//     "silver-toned jhumka bell",
//     "pom-pom trim",
//     "customer can add a name in Bengali or English",
//     "starting price 349 rupees"
//   ],
//   "tone": "warm, handmade, Kolkata craft studio"
// }
//
// The script only uses the facts you give it. It will not invent
// materials, claims, prices, or history that aren't in the input.

import { readFile } from "node:fs/promises";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

if (!GROQ_API_KEY) {
  console.error(
    "Missing GROQ_API_KEY. Add it to .env.local and run this with `node --env-file=.env.local scripts/generate-copy.mjs <facts.json>`."
  );
  process.exit(1);
}

const factsPath = process.argv[2];
if (!factsPath) {
  console.error("Usage: node scripts/generate-copy.mjs path/to/facts.json");
  process.exit(1);
}

const raw = await readFile(factsPath, "utf-8");
const input = JSON.parse(raw);

const systemPrompt = `You are the copywriter for Mantassa Crafts (মানতাসা ক্রাফটস), a women-owned handmade jewelry studio in Kolkata, India. You write warm, human, specific copy, never generic marketing filler.

Strict rules:
- Use ONLY the facts provided in the user message. Never invent materials, prices, awards, history, or claims that are not given to you.
- If the given facts are thin, write shorter copy rather than padding it with invented detail.
- Never use an em dash or en dash character. Use commas, periods, or "and" instead.
- Write like a real person who knows the craft, not like an AI assistant or a generic e-commerce listing.
- Bengali copy must read as natural, idiomatic Bengali, not a literal word-for-word translation of the English. It should carry the same warmth and facts.

Output strict JSON with this shape and nothing else:
{
  "english": "...",
  "bengali": "..."
}`;

const isPage = input.type === "page";
const lengthInstruction = isPage
  ? "Write 2 to 3 short paragraphs (roughly 120 to 200 words total) in English, then the Bengali equivalent at similar length."
  : "Write a short description (2 to 4 sentences) in English, then the Bengali equivalent.";

const userPrompt = `Type: ${input.type || "product"}
Name: ${input.name}
Tone: ${input.tone || "warm, handmade, Kolkata craft studio"}
Facts (use only these):
${(input.facts || []).map((f) => `- ${f}`).join("\n")}

${lengthInstruction}`;

const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${GROQ_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: GROQ_MODEL,
    temperature: 0.6,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  }),
});

if (!res.ok) {
  console.error(`Groq API error: ${res.status} ${res.statusText}`);
  console.error(await res.text());
  process.exit(1);
}

const data = await res.json();
const content = data.choices?.[0]?.message?.content;

try {
  const parsed = JSON.parse(content);
  console.log(JSON.stringify(parsed, null, 2));
} catch {
  console.log(content);
}
