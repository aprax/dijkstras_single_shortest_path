import findShortestPath from ".";
import type { Nodes } from './types';

const nodes: Nodes = new Map([
	['A', [['B', 1]]],
	['B', [['C', 2]]],
	['C', [['D', 3]]]
]);

it.only('should find the shortest path from A', () => {
	expect(findShortestPath('A', nodes)).toMatchSnapshot();
})