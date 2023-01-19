import type { Player } from './types';

type P = Player | null;

function matches(a: P, b: P, c: P) {
	if (a === null) return false;
	if (b !== a) return false;
	if (c !== b) return false;
	return a;
}

export default function isWinner(spaces: P[]) {
	const PossibleWins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < PossibleWins.length; i++) {
		const [a, b, c] = PossibleWins[i];
		const thereIsAMatch = matches(spaces[a], spaces[b], spaces[c]);
		if (thereIsAMatch) {
			return thereIsAMatch;
		}
	}
	return false;
}
