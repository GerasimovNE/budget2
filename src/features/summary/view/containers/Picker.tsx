import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import {
    $startDate,
    $endDate,
    setEndDate,
    setStartDate,
} from '../../model/private';
import { Input } from '@/ui';

export const Picker = () => {
    const startDate = useStore($startDate);
    const endDate = useStore($endDate);
    return (
        <Container>
            <Cont>
                start :
                <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value);
                    }}
                />
            </Cont>
            <Cont>
                end :
                <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e.target.value);
                    }}
                />
            </Cont>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    input[type='date'] {
        width: 300px;
    }
`;
