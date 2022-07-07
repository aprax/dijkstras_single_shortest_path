function shortestDistance(grid: number[][]): number {
	let min = Number.MAX_SAFE_INTEGER;
	let x = 0;
	const totalBuildings = grid.reduce((previous, current) => {
		return previous + current.filter(value => value === 1).length

	}, 0);
	do {
		let y = 0;
		do {
			if (grid[x]?.[y] === 0) {
				const building: { [index: string]: number } = {}
				const visited: { [index: string]: boolean } = { [[x, y].toString()]: true }
				const queue = Object.assign<[number, number][], { enqueue: Function }>([[x, y]], {
					enqueue: function (this: [number, number][] & { enqueue: Function }, cell: [number, number], distance: number) { //TODO(aprax) extend the array prototype for fast_queue with a enqueue and deqeueue instead of creating an entirely new class
						if (!visited[cell.toString()]) {
							const [x, y] = cell;
							if (grid[x]?.[y] === 0) {
								visited[cell.toString()] = true;
								this.push(cell);
							} else if (grid[x]?.[y] === 1) {
								if (!building[cell.toString()]) {
									building[cell.toString()] = distance;
								}
							}
						}
					}
				});
				let d = 1;
				while (queue.length) {
					const next = queue.shift();
					if (!next) {
						throw new Error('que item is undefined');
					}
					const [x, y] = next;
					queue.enqueue([x, y - 1], d);
					queue.enqueue([x + 1, y], d);
					queue.enqueue([x, y + 1], d);
					queue.enqueue([x - 1, y], d);
					d++;
				}
				if (Object.keys(building).length === totalBuildings) {
					const cmin = Object.values(building).reduce((previous, current) => previous + current, 0);
					if (cmin < min) {
						min = cmin;
					}
				}

			}
		} while (y++ < grid?.[x]?.length!);
	} while (x++ < grid.length)

	return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}


export default shortestDistance