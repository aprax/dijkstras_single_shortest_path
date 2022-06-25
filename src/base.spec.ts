import findShortestPath from ".";
import type { Nodes } from './types';

describe('should return base result if root node ', () => {
	const nodes: Nodes = new Map([
		['A', [['B', 2], ['C', 3]]],
		['B', []],
	]);

	it('does not exist', () => {
		expect(findShortestPath('C', nodes)).toMatchSnapshot();
	})

	it('has no edges', () => {
		expect(findShortestPath('B', nodes)).toMatchSnapshot();
	})
});
