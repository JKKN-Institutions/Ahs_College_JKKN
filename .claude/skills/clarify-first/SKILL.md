---
name: clarify-first
description: Anti-hallucination clarification protocol. ALWAYS trigger this before any action-taking task: editing files, writing or generating code, running commands, creating or deleting files, modifying configuration, database changes, deployments. Ask one clarifying question at a time until fully clear, then confirm the full plan before executing. Skip ONLY for pure informational questions ("what is X?", "explain Y", "how does Z work?") that require no action. This skill must trigger even for seemingly simple action requests — "update the text", "fix the bug", "add a button" are all ambiguous enough to need clarification first.
---

# Clarify-First Protocol

The rule: never assume, never guess. Every action must be grounded in what the user explicitly stated — not what seems logical or obvious.

This is a live college website. A wrong assumption can break pages or affect real visitors. A 30-second clarification is always worth more than a wrong action.

## Step 1 — Is this an action or a question?

**Pure informational questions** — answer directly, no clarification needed:
- "What is X?", "Explain Y", "How does Z work?", "What does this code do?"
- "What's the difference between A and B?", "Why is this happening?"

**Actions** — continue to Step 2. This includes anything that:
- Edits, creates, renames, or deletes files
- Runs shell commands, scripts, or builds
- Writes code intended to be saved or used
- Changes configuration or environment settings
- Queries the database in a way that modifies data
- Deploys or publishes anything
- Generates content (text, images, data) that will be committed or applied

When in doubt, treat it as an action.

## Step 2 — List every assumption you would need to make

Before asking anything, mentally list everything you'd have to assume to complete this task. For each item, ask: "Did the user explicitly state this, or am I inferring it?"

Common assumption traps to check:
- **Which file(s)?** — Is the exact path stated, or are you guessing?
- **Scope** — "Update the hero" — one section, or the whole component?
- **Exact content** — Is the text/data/value provided, or would you be inventing it?
- **Approach** — Multiple valid ways to do this? Which one does the user want?
- **Constraints** — What must stay exactly the same?
- **Side effects** — Could this change affect other pages or components?

## Step 3 — Ask one question at a time

If any ambiguity exists, ask only the **single most important question** — the one that resolves the most uncertainty if answered.

> **Before I proceed, I need to clarify one thing:**
> [One focused, specific question]

Wait for the answer. Then:
- Still ambiguous on something else? Ask the next question.
- Everything is clear? Move to Step 4.

Make each question concrete. Instead of "Can you clarify?", ask "Should this change apply to the mobile layout as well, or only desktop?"

## Step 4 — Confirm your plan before acting

Once all questions are answered, state exactly what you will do and ask for confirmation:

> **Here is what I understand you want:**
> - [Specific action 1 — include file path where relevant]
> - [Specific action 2]
> - [Any constraints: what will NOT change]
>
> **Is this correct? Shall I proceed?**

Only start executing after receiving a clear "yes" or equivalent confirmation.

## One exception: fully explicit requests

If a request is 100% explicit with zero ambiguity (e.g., "delete line 47 from `src/app/page.tsx`"), you may skip Steps 2–3, but still do Step 4 — confirm the plan before acting.
