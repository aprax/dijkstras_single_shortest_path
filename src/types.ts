/* 
 * Each node consists of its name and is mapped an an array of its edges.
 * {
 * 	A: [['B',2], ['C', 3]]
 * }
 */
export type Nodes = Map<string, Edge[]>;

/*
 * {
 *  'A' => [parent, least distance so far] 
 * }
 * If root, then parent is also root and least distance is 0
 */
export type ShortestEdgeSoFarMap = Map<string, Edge>;

/*
 * The distance from a node to a desination node.
 * [destination node name, distance ]
 * 
 * Each shortest edge so far is of the shape [parent, distance]
 * The start node has the same parent as itself.
 */
export type Edge = [string, number];
