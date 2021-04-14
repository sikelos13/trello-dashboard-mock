import styled from 'styled-components'
import { BoxProps } from './types';

export const Box = styled.div`
    ${(props: BoxProps) => props.width ? `width: ${props.width}` : undefined};
    ${(props: BoxProps) => props.height ? `height: ${props.height}` : undefined};
    ${(props: BoxProps) => props.maxWidth ? `max-width: ${props.maxWidth}` : undefined};
    ${(props: BoxProps) => props.maxHeight ? `max-height: ${props.maxHeight}` : undefined};
    ${(props: BoxProps) => props.minWidth ? `min-width: ${props.minWidth}` : undefined};
    ${(props: BoxProps) => props.minHeight ? `min-height: ${props.minHeight}` : undefined};
    ${(props: BoxProps) => props.display ? `display: ${props.display}` : undefined};

    ${(props: BoxProps) => props.mt ? `margin-top: ${props.mt}px` : undefined};
    ${(props: BoxProps) => props.mb ? `margin-bottom: ${props.mb}px` : undefined};
    ${(props: BoxProps) => props.ml ? `margin-left: ${props.ml}px` : undefined};
    ${(props: BoxProps) => props.mr ? `margin-right: ${props.mr}px` : undefined};
    ${(props: BoxProps) => props.m  ? `margin: ${props.m}` : undefined};

    ${(props: BoxProps) => props.pt ? `padding-top: ${props.pt}px` : undefined};
    ${(props: BoxProps) => props.pb ? `padding-bottom: ${props.pb}px` : undefined};
    ${(props: BoxProps) => props.pl ? `padding-left: ${props.pl}px` : undefined};
    ${(props: BoxProps) => props.pr ? `padding-right: ${props.pr}px` : undefined};
    ${(props: BoxProps) => props.p  ? `padding: ${props.p}` : undefined};

    ${(props: BoxProps) => props.direction ? `flex-direction: ${props.direction}` : undefined };
    ${(props: BoxProps) => props.wrap ? `flex-wrap: ${props.wrap}` : undefined };
    ${(props: BoxProps) => props.align ? `align-items: ${props.align}` : undefined };
    ${(props: BoxProps) => props.justify ? `justify-content: ${props.justify}` : undefined };
    ${(props: BoxProps) => props.alignSelf ? `align-self: ${props.alignSelf}` : undefined };

    ${(props: BoxProps) => props.fontSize ? `font-size: ${props.fontSize}` : undefined };
    ${(props: BoxProps) => props.fontStyle  ? `font-style: ${props.fontStyle}` : undefined };
    ${(props: BoxProps) => props.fontWeight ? `font-weight: ${props.fontWeight}` : undefined };
    ${(props: BoxProps) => props.textAlign  ? `text-align: ${props.textAlign}` : undefined };
    ${(props: BoxProps) => props.nowrap ? "white-space: nowrap" : undefined };

    ${(props: BoxProps) => props.overflow  ? `overflow: ${props.overflow}` : undefined };
    ${(props: BoxProps) => props.overflowX ? `overflow-x: ${props.overflowX}` : undefined };
    ${(props: BoxProps) => props.overflowY ? `overflow-y: ${props.overflowY}` : undefined };
    ${(props: BoxProps) => props.zIndex    ? `z-index: ${props.zIndex}` : undefined };
    ${(props: BoxProps) => props.wordBreak ? `word-break: ${props.wordBreak}` : undefined };
    ${(props: BoxProps) => props.cursor ? `cursor: ${props.cursor}` : undefined };

    ${(props: BoxProps) => props.color ? `color: ${props.color}` : undefined};
    ${(props: BoxProps) => props.backgroundColor ? `background-color: ${props.backgroundColor}` : undefined};
`;