import ghpages from 'gh-pages';

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/kleinlikecalvin/tic-tac-svelte', // Update to point to your repository
		user: {
			name: 'kleinLikeCalvin', // update to use your name
			email: 'kleinlikecalvin@gmail.com' // Update to use your email
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);
