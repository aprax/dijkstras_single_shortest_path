function shortestDistance(grid: number[][]): number {
	let min = Number.MAX_SAFE_INTEGER;
	let x = 0;
	const distance = new Map();
	while (x++ < grid.length) {
		let y = 0;
		const visited = new Set();
		Array.defineProperty(Array.prototype, 'enqueue', function (this: any[], value: number) {
			this.push(value);
		}
		while (y++ < grid?.[x]?.length!) {
			if (!visited.has([x, y])) {
				const building = new Map();
				const initial: [number, number][] = [[x, y]];
				const queue = Object.assign<[number, number][], { enqueue: Function }>(initial, {
					enqueue: function (cell: [number, number], d: number) { //TODO(aprax) extend the array prototype for fast_queue with a enqueue and deqeueue instead of creating an entirely new class
						if (!visited.has(cell)) {
							const [x, y] = cell;
							if (grid[x]?.[y] === 0) {
								distance.set(cell, d);
							}
						}



					}
				});

				console.log(test[0]);

				test.enqueue([[5]], 5);

				//const test = new Queue();
				/*
				const queue: Queue = {...[[x, y]], ...{
					enqueue: function (arg, distance) {
						return 5;

					}
				}} as Queue;
				*/

			}
		}
	}

};

export default shortestDistance