# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands
- Run development server: `npm run dev`
- Build application: `npm run build`
- Lint code: `npm run lint`
- Preview build: `npm run preview`

## Code Style Guidelines
- **TypeScript**: Use strict typing with no unused variables/parameters
- **Formatting**: Follow ESLint recommended configuration
- **Imports**: Use ES modules (type: "module")
- **React**: Follow React hooks rules (react-hooks plugin)
- **File Structure**: Group components by student ID and class
- **Naming**: Use PascalCase for components, camelCase for variables/functions
- **Components**: Prefer functional components with hooks
- **Error Handling**: Use proper TypeScript error handling patterns

## Project Structure
- Source code in `src/`, grouped by student ID folders
- Public assets in `public/`
- Uses Vite for development and building