export function splitStack(stack: string): string[] {
    return stack
        .split(/[/,]/)
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0)
}
