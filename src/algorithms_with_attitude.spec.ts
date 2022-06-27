import findShortestPath from ".";
import type { Nodes } from './types';

it('should find the shortest paths to all other nodes from start', () => {
	const nodes: Nodes = new Map([
		['Start', [['A', 8], ['D', 2], ['G', 3], ['F', 7]]],
		['A', [['B', 3]]],
		['B', [['A', 1], ['C', 4], ['E', 0]]],
		['C', [['B', 0]]],
		['D', [['E', 13], ['F', 3]]],
		['E', [['B', 1], ['C', 0], ['F', 5]]],
		['F', [['C', 8], ['D', 4]]],
		['G', [['F', 5]]]
	])
	expect(findShortestPath('Start', nodes)).toMatchSnapshot()
})