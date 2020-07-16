import styled from 'styled-components';

export const StyleList = styled.li`
    
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background-color: #eaeaea;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    input {
        margin: 0 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    span {
        margin-left: 10px;
        width: 100%;
        word-break: break-all;
    }
    
    button {
        margin: 0 10px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: red;
        }
    }

`