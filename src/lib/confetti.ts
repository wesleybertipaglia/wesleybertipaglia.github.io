import confetti, { type Shape } from 'canvas-confetti';

/**
 * Launches confetti from a specified position on the canvas.
 * @param options - Configuration options for the confetti.
 * @param options.x - The x-coordinate for the confetti origin (default is the center).
 * @param options.y - The y-coordinate for the confetti origin (default is the center).
 * @param options.count - The number of confetti pieces to launch (default is 100).
 * @param options.angle - The angle in degrees to launch the confetti (default is 90 degrees).
 * @param options.spread - The spread of the confetti in degrees (default is 45 degrees).
 * @param options.startVelocity - The initial velocity of the confetti (default is 30).
 * @param options.gravity - The gravity effect on the confetti (default is 1).
 * @param options.colors - An array of color strings for the confetti particles.
 * @param options.shapes - An array of shapes for the confetti particles (default is ['square', 'circle']).
 */
export function launchConfetti({
    x = window.innerWidth / 2,
    y = window.innerHeight / 2,
    count = 120,
    angle = 90,
    spread = 90,
    startVelocity = 60,
    gravity = 1,
    colors = ['#7df5e9', '#7d93f5', '#bf7df5', '#f57ded', '#f57da1', '#7df58d', '#f5e17d', '#f5ad7d'],
    shapes = ['square', 'circle'] as Shape[]
}: Partial<{
    x: number;
    y: number;
    count: number;
    angle: number;
    spread: number;
    startVelocity: number;
    gravity: number;
    colors: string[];
    shapes: Shape[];
}> = {}): void {
    confetti({
        angle,
        spread,
        startVelocity,
        gravity,
        particleCount: count,
        colors,
        shapes,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight }
    });
}