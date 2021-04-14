export interface TypographyProps {
    nowrap?: boolean;
    truncated?: boolean;
    zIndex?: number;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "text1" | "text2" | "link";
    fontSize?: 'small' | 'medium' | 'large' | string;
    fontWeight?: "bold";
    fontStyle?: "italic";
    wordBreak?: "break-word" | "break-all";
    textAlign?: "left" | "right" | "center";
    verticalAlign?: "top" | "bottom" | "middle" | "text-bottom" | "text-top";
    overflow?: 'hidden' | "visible" | "auto";
    overflowX?: 'hidden' | "visible" | "auto" | "scroll";
    overflowY?: 'hidden' | "visible" | "auto";
    cursor?: "default" | "pointer" | "not-allowed";
    opacity?: number;
    transform?: string;
}