declare module 'haptics' {
	type VibrationPatternName =
		| 'bump'
		| 'nudge'
		| 'nudge-max'
		| 'ping'
		| 'ring'
		| 'confirmation'
		| 'confirmation-max';
	interface Vibration {
		start(pattern: VibrationPatternName): void;
	}
	const vibration: Vibration;
}
