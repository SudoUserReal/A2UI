# A2UI React Sample

A sample React application demonstrating the A2UI React renderer with UI components.

## Prerequisites

- Node.js 18+
- An A2UI-compatible agent running (e.g., the restaurant_finder sample)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the agent (in another terminal):

```bash
cd samples/agent/adk/restaurant_finder
uv run .
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser.

## Features

- Full A2UI v0.8 protocol support
- React 19 compatible
- Semi UI component library integration
- Real-time updates from A2A agents

## Project Structure

```
src/
├── main.tsx      # Entry point
├── App.tsx       # Main application component
├── client.ts     # A2A client for communicating with agents
└── index.css     # Global styles
```

## License

Apache-2.0

