export async function getRandomNumber() {
	const randomNumber = Math.random();

	if (randomNumber < 0.5) {
		throw new Error('An error occurred while generating a random number');
	}

	return Math.floor(randomNumber * 100);
}