import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Input, Radio, Accordion, TextArea, CheckBox } from '@/ui';
import {
    $deadline,
    setDeadline,
    $deadlineCheckbox,
    $description,
    setDescription,
    $repeat,
    setRepeat,
    deadlineToggle,
    repeatToggle,
    $repeatCheckbox,
    $repeatCount,
    setRepeatCount,
} from '../../modal';

export const AdditionalForm = () => {
    const description = useStore($description);
    const deadlineCheckbox = useStore($deadlineCheckbox);
    const deadline = useStore($deadline);
    const repeat = useStore($repeat);
    const repeatCount = useStore($repeatCount);
    const repeatCheckbox = useStore($repeatCheckbox);

    const repeadLabels = [
        { label: 'daily', value: 'daily' },
        { label: 'weekly', value: 'weekly' },
        { label: 'monthly', value: 'monthly' },
        { label: 'yearly', value: 'yearly' },
    ];

    return (
        <Cont>
            <Accordion label="Additional">
                <TextArea
                    placeholder="description"
                    maxLength={255}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></TextArea>
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
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </DeadCont>
                <RepeatCont>
                    <LabelCont>
                        repeat
                        <CheckBox
                            checked={repeatCheckbox}
                            setter={repeatToggle}
                        />
                    </LabelCont>
                    <LabelCont>
                        count
                        <Input
                            type="number"
                            placeholder="count"
                            value={repeatCount}
                            disabled={!repeatCheckbox}
                            onChange={(e) => setRepeatCount(e.target.value)}
                        />
                    </LabelCont>
                </RepeatCont>
                <Radio
                    disabled={!repeatCheckbox}
                    labels={repeadLabels}
                    setter={setRepeat}
                    value={repeat}
                    name="repeat"
                />
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

const RepeatCont = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 350px) {
        input[type='number'] {
            width: 80px;
        }
    }
    @media (min-width: 768px) {
        input[type='number'] {
            width: 250px;
        }
    }
`;
