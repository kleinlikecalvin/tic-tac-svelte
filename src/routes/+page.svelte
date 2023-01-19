<script lang="ts">
	import '../styles.css';
	import isWinner from '../IsWinner';
	import type { Player } from '../types';

	let spaces: (Player | null)[] = Array(9).fill(null);
	let turn: Player = 'X';

	$: fullBoard = !spaces.includes(null);
	$: message = getMessage(isWinner(spaces), turn, fullBoard);
	$: handleTurn = (index: number) => {
		spaces[index] = turn;

		if (turn === 'O') {
			turn = 'X';
		} else {
			turn = 'O';
		}
	};

	function getMessage(hasWinner: Player | false, currentPlayer: Player, fullBoard: boolean) {
		if (hasWinner) {
			return `The Champion is ${hasWinner}`;
		} else if (fullBoard) {
			return 'This game is for the cats';
		} else {
			return `Current Player: ${currentPlayer}`;
		}
	}
</script>

<div class="container">
	<div class="board">
		{#each spaces as value, index}
			<button
				class="square"
				disabled={!!value || isWinner(spaces) === 'X' || isWinner(spaces) === 'O'}
				on:click={() => handleTurn(index)}
			>
				{value !== null ? value : ''}
			</button>
		{/each}
	</div>
	<div class="turns">{message}</div>
	<button
		on:click={() => {
			turn = 'X';
			spaces = Array(9).fill(null);
		}}
	>
		reset
	</button>
</div>
