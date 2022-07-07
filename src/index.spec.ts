import shortestDistance from '.';

it('should pass the first base case', () => {
	const grid = [[1, 0]];
	expect(shortestDistance(grid)).toBe(1);
});

it('should find shortest distance in horizontal dimension', () => {
	let grid = [[1, 0, 2]];
	expect(shortestDistance(grid)).toBe(1);


	grid = [[0, 0, 1]];
	expect(shortestDistance(grid)).toBe(1);

	grid = [[1, 0, 0, 1]];
	expect(shortestDistance(grid)).toBe(3);
});

it('should find the shortest distance in horizontal dimension with multiple buildings', () => {
	const grid = [[1, 0, 1]];
	expect(shortestDistance(grid)).toBe(2);
});

it('should find shortest distance in vertical dimension', () => {

	let grid = [
		[1],
		[0],
		[2]
	];
	expect(shortestDistance(grid)).toBe(1);

	grid = [
		[1],
		[0],
		[1]
	];
	expect(shortestDistance(grid)).toBe(2);

	grid = [
		[0],
		[0],
		[1]
	];
	expect(shortestDistance(grid)).toBe(1);

	grid = [
		[1],
		[0],
		[0],
		[1]
	];
	expect(shortestDistance(grid)).toBe(3)
})

it('should pass 2x2 test case', () => {
	let grid = [
		[1, 0],
		[0, 0]
	];
	expect(shortestDistance(grid)).toBe(1)

	grid = [
		[1, 0],
		[0, 1]
	];
	expect(shortestDistance(grid)).toBe(2)
});

it.only('should pass a 3x2 test case', () => {
	const grid = [
		[1, 2, 1],
		[0, 0, 0]
	];
	expect(shortestDistance(grid)).toBe(4)
})
it.only('should pass 3x3 test case', () => {
	const grid = [
		[1, 0, 2],
		[0, 0, 0],
		[0, 0, 1],
	];
	expect(shortestDistance(grid)).toBe(4);
})

it.only('should pass 4x2 test case', () => {
	const grid = [
		[1, 0, 2, 1],
		[0, 0, 0, 0]
	]
	expect(shortestDistance(grid)).toBe(5);
})
it.only('should pass 5x2 test case', () => {
	const grid = [
		[1, 0, 2, 0, 1],
		[0, 0, 0, 0, 0]
	];
	expect(shortestDistance(grid)).toBe(6);
})

it('should pass the test case', () => {
	const grid = [
		[1, 0, 2, 0, 1],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0]
	]
	expect(shortestDistance(grid)).toBe(7);
})