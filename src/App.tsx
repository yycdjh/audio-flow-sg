import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: 0, y: 100 },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: Connection) => {
    setEdges((eds) => addEdge(params, eds));
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </div>
  );
}
