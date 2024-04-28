import { MouseEvent, DragEvent, useCallback } from 'react';
import ReactFlow, {
  Node,
  Panel,
  ReactFlowProvider,
  useReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useStoreApi,
  MarkerType,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
} from 'reactflow';


import SimpleNode from './SimpleNode';
import GroupNode from './GroupNode';
import { initialNodes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { sortNodes, getId, getNodePositionInsideParent } from './utils';

import Sidebar from './Sidebar';
import useUndoRedo from './useUndoRedo';

import 'reactflow/dist/style.css';
import '@reactflow/node-resizer/dist/style.css';

import styles from './style.module.css';

import DownloadButton from './DownloadButton';

const proOptions = {
  hideAttribution: true,
};

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

const nodeTypes = {
  node: SimpleNode,
  group: GroupNode,
};

const defaultEdgeOptions = {
  style: {
    strokeWidth: 2,
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
};

function DynamicGrouping() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const { undo, redo, canUndo, canRedo, takeSnapshot } = useUndoRedo();

  const onConnect = useCallback(
    (edge: Edge | Connection) => {
      // 👇 make adding edges undoable
      takeSnapshot();
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges, takeSnapshot]
  );

  const { screenToFlowPosition, getIntersectingNodes } = useReactFlow();
  const store = useStoreApi();

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');
    const position = screenToFlowPosition({
      x: event.clientX - 20,
      y: event.clientY - 20,
    });
    const nodeStyle =
      type === 'group' ? { width: 400, height: 200 } : undefined;

    const intersections = getIntersectingNodes({
      x: position.x,
      y: position.y,
      width: 40,
      height: 40,
    }).filter((n) => n.type === 'group');
    const groupNode = intersections[0];

    const newNode: Node = {
      id: getId(),
      type,
      position,
      data: { label: `${type}` },
      style: nodeStyle,
    };

    if (groupNode) {
      newNode.position = getNodePositionInsideParent(
        {
          position,
          width: 40,
          height: 40,
        },
        groupNode
      ) ?? { x: 0, y: 0 };
      newNode.parentNode = groupNode?.id;
      newNode.expandParent = true;
    }

    const sortedNodes = store
      .getState()
      .getNodes()
      .concat(newNode)
      .sort(sortNodes);
    // 👇 make adding nodes undoable
    takeSnapshot();
    setNodes(sortedNodes);
  };

  const onNodeDragStop = useCallback(
    (_: MouseEvent, node: Node) => {
      if (node.type !== 'node' && !node.parentNode) {
        return;
      }

      const intersections = getIntersectingNodes(node).filter(
        (n) => n.type === 'group'
      );
      const groupNode = intersections[0];

      if (intersections.length && node.parentNode !== groupNode?.id) {
        const nextNodes: Node[] = store
          .getState()
          .getNodes()
          .map((n) => {
            if (n.id === groupNode.id) {
              return {
                ...n,
                className: '',
              };
            } else if (n.id === node.id) {
              const position = getNodePositionInsideParent(n, groupNode) ?? {
                x: 0,
                y: 0,
              };

              return {
                ...n,
                position,
                parentNode: groupNode.id,
                extent: 'parent',
              } as Node;
            }

            return n;
          })
          .sort(sortNodes);

        // 👇 make node dragging and snapping undoable
        takeSnapshot();
        setNodes(nextNodes);
      }
    },
    [getIntersectingNodes, setNodes, store]
  );

  const onNodeDrag = useCallback(
    (_: MouseEvent, node: Node) => {
      if (node.type !== 'node' && !node.parentNode) {
        return;
      }

      const intersections = getIntersectingNodes(node).filter(
        (n) => n.type === 'group'
      );
      const groupClassName =
        intersections.length && node.parentNode !== intersections[0]?.id
          ? 'active'
          : '';
      // 👇 make node dragging
      setNodes((nds) => {
        return nds.map((n) => {
          if (n.type === 'group') {
            return {
              ...n,
              className: groupClassName,
            };
          } else if (n.id === node.id) {
            return {
              ...n,
              position: node.position,
            };
          }

          return { ...n };
        });
      });
    },
    [getIntersectingNodes, setNodes]
  );

  return (
    <div className={styles.wrapper}>
      <a href="https://adamtooze.substack.com/p/chartbook-279-columbia-universitys">more info</a>
      <br></br>
      <a href="https://github.com/columbiafacts/columbiafacts.org/">how 2 help</a>
      <Sidebar />
      <div className={styles.rfWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          onNodeDrag={onNodeDrag}
          onNodeDragStop={onNodeDragStop}
          onDrop={onDrop}
          onDragOver={onDragOver}
          proOptions={proOptions}
          fitView
          selectNodesOnDrag={false}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          <Controls />
          <MiniMap />
          <Background color="#bbb" gap={50} variant={BackgroundVariant.Dots} />
          <DownloadButton />
          <Panel position="bottom-center">
            <div className={styles.buttonGroup}>
              <button
                disabled={canUndo}
                className={styles.button}
                onClick={undo}
              >
                <span className={styles.buttonIcon}>⤴️</span> Undo
              </button>
              <button
                disabled={canRedo}
                className={styles.button}
                onClick={redo}
              >
                Redo <span className={styles.buttonIcon}>⤵️</span>
              </button>
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
}

export default function Flow() {
  return (
    <ReactFlowProvider>
      <DynamicGrouping />
    </ReactFlowProvider>
  );
}