import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import {
    $invoice,
    setDescription,
    $deadlineCheckbox,
    deadlineToggle,
    setDeadline,
    setType,
} from '../../model/private';
import { Input, Radio, Accordion, TextArea, CheckBox } from '@/ui';

export const AdditionalForm = () => {
    const invoice = useStore($invoice);
    const deadlineCheckbox = useStore($deadlineCheckbox);

    const radioLabels = [
        { label: 'task', value: 'task' },
        { label: 'income', value: 'income' },
        { label: 'expense', value: 'expense' },
    ];

    return (
        <Cont>
            <Accordion label="Additional">
                <TextArea
                    placeholder="description"
                    maxLength={255}
                    value={invoice.description}
                    onChange={(e) => setDescription(e.target.value)}
                ></TextArea>
                <Radio
                    labels={radioLabels}
                    name="types"
                    value={invoice.type}
                    setter={setType}
                />

                <DeadCont>
                    <LabelCont>
                        deadline
                        <CheckBox
                            checked={deadlineCheckbox}
                            setter={deadlineToggle}
                        />
                    </LabelCont>

                    <Input
                        type="date"
                        disabled={!deadlineCheckbox}
                        value={invoice.deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </DeadCont>
            </Accordion>
        </Cont>
    );
};

const Cont = styled.div`
    padding-top: 8px;
`;

const LabelCont = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 16px;
`;
const DeadCont = styled.div`
    display: flex;
    gap: 10px;
    @media (min-width: 350px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        input[type='date'] {
            width: 250px;
        }
    }
`;
