import { FC } from 'react';
import { EdgeProps, getBezierPath, EdgeText } from 'reactflow';

type CustomEdgeData = {
  label: string;
  onClick?: () => void;
};

const CustomEdge: FC<EdgeProps<CustomEdgeData>> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path id={id} className="react-flow__edge-path" d={edgePath} />
      <EdgeText
        x={labelX}
        y={labelY}
        label={data?.label}
        labelStyle={{
          fill: '#ffcc00',
          fontWeight: 700,
          fontSize: 12,
        }}
        labelShowBg
        labelBgStyle={{
          fill: 'black',
          opacity: 0.75,
        }}
        labelBgPadding={[8, 4]}
        labelBgBorderRadius={4}
        onClick={data?.onClick}
        className="nodrag nopan"
      />
    </>
  );
};

export default CustomEdge;