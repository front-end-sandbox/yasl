import React from "react"

type IconProps = {
  fill?: string
  width?: number
  height?: number
}

const createIconComponent = (svgViewBox: string, svgPath: string) => (
  ({ fill = "black", width = 16, height = 16 }: IconProps) => (
    <svg viewBox={svgViewBox} width={width} height={height}>
      <path d={svgPath} fill={fill} />
    </svg>
  )
)

export default createIconComponent