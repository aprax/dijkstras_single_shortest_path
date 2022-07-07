import sD from '.';
describe("should return -1", () => {
	it('when there are no free spaces', () => {
		let grid = [[1]];
		expect(sD(grid)).toBe(-1);

		grid = [[1], [1]];
		expect(sD(grid)).toBe(-1);

		grid = [
			[1],
			[1],
			[0]
		];
		expect(sD(grid)).toBe(-1);
	});

	it('when there is no route', () => {
		const grid = [[1], [1], [0]];
		expect(sD(grid)).toBe(-1);
	})
})
