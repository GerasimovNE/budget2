import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $cost, $name, $type, setCost, setName, setType } from '../../modal';
import { Input, Radio } from '@/ui';

export const MainForm = () => {
    const name = useStore($name);
    const cost = useStore($cost);
    const type = useStore($type);

    const radioLabels = [
        { label: 'task', value: 'task' },
        { label: 'income', value: 'income' },
        { label: 'expense', value: 'expense' },
    ];

    return (
        <Container>
            <Input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></Input>
            <Cont>
                <Input
                    placeholder="cost"
                    type="number"
                    value={cost}
                    disabled={type == 'task'}
                    onChange={(e) => setCost(e.target.value)}
                ></Input>
                <Radio
                    labels={radioLabels}
                    name="types"
                    value={type}
                    setter={setType}
                />
            </Cont>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Cont = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;

    @media (min-width: 350px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        div[id='types'] {
            width: 252px;
        }
        input[type='number'] {
            width: 252px;
        }
    }
`;
