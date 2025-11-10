import { Handle, Position } from "@xyflow/react"
import type { NodeProps } from "@xyflow/react"
import type { VenueNode } from "@/lib/venue-map-service"

const NODE_TYPE_COLORS: Record<string, string> = {
  entrance: "#3B82F6",
  table: "#1E40AF",
  "vip-table": "#DC2626",
  buffet: "#059669",
  "carving-table": "#7C3AED",
  "photo-exhibit": "#F59E0B",
  "crying-room": "#06B6D4",
  stage: "#1F2937",
  custom: "#8B5CF6",
}

export default function VenueNodeComponent(props: NodeProps<VenueNode>) {
  const { data, isSelected } = props
  const color = NODE_TYPE_COLORS[data.type] || NODE_TYPE_COLORS.custom

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex items-center justify-center font-medium text-white text-xs shadow-lg transition-all ${
          isSelected ? "ring-4 ring-yellow-400 ring-offset-2" : ""
        }`}
        style={{
          backgroundColor: color,
          width: "32px",
          height: "32px",
          minWidth: "32px",
          minHeight: "32px",
          maxWidth: "32px",
          maxHeight: "32px",
          borderRadius: "50%", // Using explicit 50% instead of rounded-full for guaranteed circle
        }}
        title={data.label}
      >
        <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      </div>

      <div
        className="mt-1 text-xs font-medium text-slate-700 text-center whitespace-nowrap max-w-[80px] overflow-hidden text-ellipsis"
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {data.label || data.id}
      </div>
    </div>
  )
}
