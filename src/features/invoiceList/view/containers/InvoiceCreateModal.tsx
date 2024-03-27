import React from 'react';
import {
    $cost,
    $name,
    $type,
    setCost,
    setName,
    setType,
    createInvoiceEvent,
    $isOpenCreateModal,
} from '../../model/private';
import styled from 'styled-components';
import { useStore } from 'effector-react';

export const InvoiceCreateModal = () => {
    const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (
            e.target.value == 'task' ||
            e.target.value == 'income' ||
            e.target.value == 'expense'
        ) {
            setType(e.target.value);
        }
    };
    const isOpen = useStore($isOpenCreateModal);
    const name = useStore($name);
    const cost = useStore($cost);
    const type = useStore($type);

    return (
        <Container isOpen={isOpen}>
            <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <input
                placeholder="cost"
                type="number"
                value={cost}
                onChange={(e) => setCost(parseFloat(e.target.value))}
            ></input>
            <div>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="task"
                        checked={type == 'task'}
                        onChange={(e) => onChangeFunc(e)}
                    />
                    task
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="income"
                        checked={type == 'income'}
                        onChange={(e) => onChangeFunc(e)}
                    />
                    income
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="expense"
                        checked={type == 'expense'}
                        onChange={(e) => onChangeFunc(e)}
                    />
                    expense
                </label>
            </div>
            <button onClick={() => createInvoiceEvent()}>add</button>
        </Container>
    );
};

const Container = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 15px;
    background-color: #efe0b5;
    position: fixed;
    transform: translateX(40vw) translateY(50vh);
    padding: 10px;
    border-radius: 6px;
    border-color: #000;
    font-size: 16px;
    margin: 10px;
    box-shadow: 0px 0px 5px black;
`;
