import { writable } from 'svelte/store';

export const currentCanvas = writable<HTMLCanvasElement>();
