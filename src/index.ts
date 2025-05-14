/**
 * Simple hello world function
 * @param name The name to greet
 * @returns A greeting message
 */
export function greet(name: string = 'World'): string {
  return `Hello, ${name}!`;
}

/**
 * Main application entry point
 */
function main(): void {
  const message = greet();
  console.log(message);
}

// Run the application if this file is executed directly
if (require.main === module) {
  main();
}
