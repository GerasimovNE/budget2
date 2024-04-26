import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui';
import { useStore } from 'effector-react';
import { $summaryResult, getSummaryEvent } from '../../model/private';

export const ButtonAndResult = () => {
    const summaryResult = useStore($summaryResult);

    return (
        <Container>
            <Res>{summaryResult}</Res>
            <Button onClick={() => getSummaryEvent()}>summ</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
`;
const Res = styled.div`
    font-size: 30px;
`;
