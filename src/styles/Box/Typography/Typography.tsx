import styled, { css } from 'styled-components'
import { Box } from '../Box';

export const truncatedcss = styled(Box)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const H1 = styled(Box)`
    font-size: 19px;
    line-height: 1.4;
    font-weight: bold;
    margin: 0;
`

export const H2 = styled(Box)`
    font-size: 28px;
    font-weight: bold;
    line-height: 1.4;
    margin: 0;
`

export const h3 = styled(Box)`
    font-size: 16px;
    line-height: 1.4;
    font-weight: bold;
    margin: 0;
`

export const h4 = styled(Box)`
    font-size: 14px;
    line-height: 1.3;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
`

export const h5 = styled(Box)`
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 0.02em;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
`

export const h6 = styled(Box)`
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin: 0;
`

export const text1 = styled(Box)`
    font-size: 14px;
    line-height: 1.4;
`

export const text2 = styled(Box)`
    font-size: 13px;
    line-height: 1.4;
`

export const link = styled(Box)`
    text-decoration: underline;
    cursor: pointer;
`