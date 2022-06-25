import type { ShortestEdgeSoFarMap, Edge } from './types';

// Each val must be unique.
function findShortestPath(root: string, nodes: Map<string, Edge[]>) {
	const relaxed = new Set([root]);
	const shortestEdgeSoFarMap: ShortestEdgeSoFarMap = new Map([[root, [root, 0]]]) // These are the shorest distances that we know so far

	if (!nodes.get(root)?.[0]) {
		return shortestEdgeSoFarMap;
	}

	const queue: Edge[] = nodes.get(root)!;

	for (const edge of queue) {
		const shortestEdgeSoFar = shortestEdgeSoFarMap.get(edge[0])?.[1] ?? NaN;
		if (edge[1] < shortestEdgeSoFar) {
			shortestEdgeSoFarMap.set(edge[0], [root, edge[1]]);
		} else if (!shortestEdgeSoFar) {
			shortestEdgeSoFarMap.set(edge[0], [root, edge[1]]);
		}
	}

	while (queue.length) {
		const node = queue.shift();
		if (!node) {
			throw new Error('queue is unexpecedly undefined');
		}

		const edges = (nodes.get(node[0]) ?? []);
		edges.sort((first, second) => {
			if (first[1] > second[1]) {
				return 1;
			} else if (first[1] === second[1]) {
				return 0;
			} else {
				return -1;
			}
		});
		for (const edge of edges) {
			if (shortestEdgeSoFarMap.has(edge[0])) {
				const nodeTotalDistance = shortestEdgeSoFarMap.get(node[0])![1] + edge[1];
				const edgeCurrentTotalDistance = shortestEdgeSoFarMap.get(edge[0])![1];
				if (nodeTotalDistance < edgeCurrentTotalDistance) {
					shortestEdgeSoFarMap.set(edge[0], [
						// New Parent
						node[0],
						// New shortest distance
						nodeTotalDistance])
				}
			} else { // Distance is infinity
				shortestEdgeSoFarMap.set(edge[0], [node[0], edge[1] + node[1]]);
			}
			if (!relaxed.has(edge[0])) {
				queue.push(edge);
			}
		}
		// After calculating the shortest distance to each edge, relax the node.
		relaxed.add(node[0]);
	}

	return shortestEdgeSoFarMap;
}
export default findShortestPath