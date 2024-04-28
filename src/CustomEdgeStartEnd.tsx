import { FC } from 'react';
import { EdgeProps, getBezierPath, EdgeText } from 'reactflow';

type CustomEdgeStartEndData = {
  startLabel?: string;
  endLabel?: string;
  onStartLabelClick?: () => void;
  onEndLabelClick?: () => void;
};

const CustomEdgeStartEnd: FC<EdgeProps<CustomEdgeStartEndData>> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  const [edgePath] = getBezierPath({
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
      {data?.startLabel && (
        <EdgeText
          x={sourceX}
          y={sourceY}
          label={data?.startLabel}
          labelStyle={{
            fill: '#ff5050',
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
          onClick={data?.onStartLabelClick}
          className="nodrag nopan"
        />
      )}
      {data?.endLabel && (
        <EdgeText
          x={targetX}
          y={targetY}
          label={data?.endLabel}
          labelStyle={{
            fill: '#ff5050',
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
          onClick={data?.onEndLabelClick}
          className="nodrag nopan"
        />
      )}
    </>
  );
};

export default CustomEdgeStartEnd;