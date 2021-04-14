export interface FlexProps {
    direction?: "row" | "column";
    justify?: "flex-start" | "center" | "end" | "space-between" | "space-around";
    align?: "flex-start" | "center" | "end" | "stretch" | "baseline";
    wrap?: "wrap" | "nowrap";
    flex?: string;
    alignSelf?: "start" | "center" | "end" | "stretch" | "baseline"
}