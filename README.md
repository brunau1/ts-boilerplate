# TypeScript Boilerplate

A comprehensive, production-ready foundation for TypeScript projects with modern features, testing support, and code quality tools.

## Features

- **TypeScript Configuration**: Pre-configured with ES2022 target for modern JavaScript features
- **Node.js 20.18**: Set as the default Node.js version via .nvmrc
- **Testing Framework**: Jest setup for unit testing with TypeScript support
- **Clean Structure**: Separate `src` and `tests` directories for better organization
- **NPM Scripts**: Ready-to-use scripts for building, running, and testing your project
- **Source Maps**: Debugging support with source maps enabled
- **Code Quality Tools**: ESLint and Prettier configuration for consistent code style
- **Git Hooks**: Husky and lint-staged for pre-commit code quality checks
- **VS Code Integration**: Debugging and editor settings pre-configured
- **CI/CD Pipeline**: GitHub Actions workflow for automated testing and building
- **Development Workflow**: Optimized for productivity and code quality

## Project Structure

```
ts-boilerplate/
├── .github/           # GitHub configuration
│   └── workflows/     # GitHub Actions workflow definitions
├── .husky/            # Git hooks using Husky
├── .vscode/           # VS Code configurations
├── src/               # Source code files
│   └── index.ts       # Main application entry point
├── tests/             # Test files
│   └── index.test.ts  # Tests for the main functionality
├── dist/              # Compiled output (generated on build)
├── .eslintrc.js       # ESLint configuration
├── .eslintignore      # Files to ignore by ESLint
├── .prettierrc        # Prettier configuration
├── .prettierignore    # Files to ignore by Prettier
├── .nvmrc             # Node.js version specification
├── .gitignore         # Files to ignore by Git
├── jest.config.js     # Jest testing configuration
├── tsconfig.json      # TypeScript configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Available Scripts

- `npm run build`: Compiles the TypeScript code to JavaScript in the dist folder
- `npm start`: Runs the compiled application
- `npm run dev`: Runs the application directly from TypeScript source (using ts-node)
- `npm test`: Runs all tests
- `npm run test:watch`: Runs tests in watch mode for development
- `npm run test:coverage`: Generates a test coverage report
- `npm run lint`: Lints and fixes issues in source files using ESLint
- `npm run format`: Formats source files using Prettier
- `npm run clean`: Removes the dist directory

## Getting Started

1. Clone this repository
2. Ensure you have Node.js 20.18 installed (using nvm: `nvm install` or `nvm use`)
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Build for production: `npm run build`
6. Run tests: `npm test`

## Tools and Their Purpose

### Core Development

- **TypeScript**: Adds static typing to JavaScript, enhancing code quality and developer experience
- **ts-node**: Executes TypeScript files directly without requiring a separate compilation step
- **Node.js 20.18**: The LTS version provides stability and modern JavaScript features

### Code Quality

- **ESLint**: Analyzes code for potential errors and enforces coding standards
  - Configured with TypeScript-specific rules
  - Integration with Prettier to avoid conflicts
  
- **Prettier**: Automatically formats code to ensure consistent style
  - Configured with common styling preferences (single quotes, trailing commas, etc.)
  - Editor integration via VS Code settings

- **Husky**: Manages Git hooks to enforce quality checks before commits
  - Prevents commits with linting errors
  - Ensures formatted code is committed

- **lint-staged**: Runs linters against staged Git files to focus only on what's being committed
  - Optimizes performance by checking only changed files
  - Configured to run ESLint and Prettier automatically

### Testing

- **Jest**: Feature-rich JavaScript testing framework
  - Configured for TypeScript support via ts-jest
  - Snapshot testing, mocking, and code coverage reports
  
- **Coverage Reports**: Detailed reports on test coverage to identify untested code

### Developer Experience

- **VS Code Configuration**: 
  - Debug configurations for application and tests
  - Editor settings for consistent development experience
  - Format-on-save configuration not added, but is verified on commiting

- **.nvmrc**: Ensures consistent Node.js version across development environments

### CI/CD

- **GitHub Actions**: Automated workflow for continuous integration
  - Runs tests on multiple Node.js versions
  - Verifies builds and lints code
  - Checks test coverage

## Why These Tools?

This boilerplate combines industry best practices to provide:

1. **Code Consistency**: Using ESLint, Prettier, and pre-commit hooks ensures all code follows the same standards
2. **Quality Assurance**: Testing with Jest and automated CI helps catch issues early
3. **Developer Productivity**: VS Code integration and npm scripts streamline common tasks
4. **Modern JavaScript**: ES2022 support and TypeScript provide the latest language features with type safety
5. **Team Collaboration**: Standardized tools and configurations simplify onboarding and collaboration

## License

ISC
