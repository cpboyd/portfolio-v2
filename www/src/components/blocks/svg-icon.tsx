import * as React from "react"

export type SVGIconNames =
  | "cli"
  | "discord"
  | "elitepvpers"
  | "gatsby"
  | "general"
  | "javascript"
  | "logo"
  | "mdx"
  | "python"
  | "react"
  | "typescript"
  | "pause"
  | "play"

type SVGIconProps = {
  id: SVGIconNames
  [x: string]: any
}

/**
 * Using a SVG sprite for performance reasons
 */
export const SVGIcon = ({ id, ...props }: SVGIconProps) => (
  <svg {...props}>
    <use href={`/icons.svg#${id}`} />
  </svg>
)
