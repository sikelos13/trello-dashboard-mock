import styled from 'styled-components'

export const PrimaryButton = styled.button`
    padding: 8px;
    border-radius: 5px;
    background-color: #e3eeff;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #9c9a9a;

    &:hover {
        cursor: pointer;
    }

    &:active {
        outline: none;
    }
`

export const SecondaryButton = styled.button`
    padding: 8px;
    border-radius: 5px;
    background-color: #d6d6d6;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #9c9a9a;

    &:hover {
        cursor: pointer;
    }

    &:active {
        outline: none;
    }
`