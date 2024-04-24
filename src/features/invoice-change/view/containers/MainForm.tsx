import React from 'react';
import styled from 'styled-components';
import { $invoice, setName, setCost, setStatus } from '../../model/private';
import { Input, Radio } from '@/ui';
import { useStore } from 'effector-react';

export const MainForm = () => {
    const invoice = useStore($invoice);

    const statusLabels = [
        { label: 'active', value: 'active' },
        { label: 'completed', value: 'completed' },
        { label: 'aborted', value: 'aborted' },
    ];
    return (
        <Container>
            <Container>
                <Input
                    placeholder="name"
                    value={invoice.name}
                    onChange={(e) => setName(e.target.value)}
                ></Input>
                <Cont>
                    <Input
                        placeholder="cost"
                        type="number"
                        value={invoice.cost}
                        disabled={invoice.type == 'task'}
                        onChange={(e) => setCost(e.target.value)}
                    ></Input>
                    <Radio
                        labels={statusLabels}
                        setter={setStatus}
                        value={invoice.status ? invoice.status : 'active'}
                        name="statusCh"
                    />
                </Cont>
            </Container>
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
        div[id='statusCh'] {
            width: 300px;
        }
        input[type='number'] {
            width: 200px;
        }
    }
`;
