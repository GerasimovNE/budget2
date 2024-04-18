import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Input, Radio, CheckBox } from '@/ui';
import {
    $minCost,
    $maxCost,
    $status,
    $type,
    $orderBy,
    $orderDir,
    $orderByCheckBox,
    $statusCheckBox,
    $typeCheckBox,
    typeToggle,
    orderByToggle,
    statusToggle,
    setMinCost,
    setMaxCost,
    setOrderBy,
    setOrderDir,
    setStatus,
    setType,
} from '../../model/private';

export const FilterForm = () => {
    const minCost = useStore($minCost);
    const maxCost = useStore($maxCost);
    const status = useStore($status);
    const type = useStore($type);
    const orderBy = useStore($orderBy);
    const orderDir = useStore($orderDir);
    const typeCheckBox = useStore($typeCheckBox);
    const statusCheckBox = useStore($statusCheckBox);
    const orderByCheckBox = useStore($orderByCheckBox);

    const typeLabels = [
        { label: 'task', value: 'task' },
        { label: 'income', value: 'income' },
        { label: 'expense', value: 'expense' },
    ];
    const statusLabels = [
        { label: 'active', value: 'active' },
        { label: 'completed', value: 'completed' },
        { label: 'aborted', value: 'aborted' },
    ];

    const orderByLabels = [
        { label: 'cost', value: 'cost' },
        { label: 'deadline', value: 'deadline' },
    ];

    const orderDirLabels = [
        { label: '▽ ', value: 'DESC' },
        { label: '△', value: 'ASC' },
    ];
    return (
        <Cont>
            <Input
                placeholder="max cost"
                type="number"
                value={maxCost}
                onChange={(e) => setMaxCost(e.target.value)}
            />
            <Input
                placeholder="min cost"
                type="number"
                value={minCost}
                onChange={(e) => setMinCost(e.target.value)}
            />
            <ContCheckbox>
                type: <CheckBox checked={typeCheckBox} setter={typeToggle} />
            </ContCheckbox>
            <Radio
                labels={typeLabels}
                setter={setType}
                name="stflt"
                value={type}
                disabled={!typeCheckBox}
            />
            <ContCheckbox>
                status:{' '}
                <CheckBox checked={statusCheckBox} setter={statusToggle} />
            </ContCheckbox>
            <Radio
                labels={statusLabels}
                setter={setStatus}
                name="statFlt"
                value={status}
                disabled={!statusCheckBox}
            />
            <ContCheckbox>
                order by:{' '}
                <CheckBox checked={orderByCheckBox} setter={orderByToggle} />
            </ContCheckbox>
            <OrderByCont>
                <ContOrderRadio>
                    <Radio
                        labels={orderByLabels}
                        setter={setOrderBy}
                        name="orderByFLT"
                        value={orderBy}
                        disabled={!orderByCheckBox}
                    />
                </ContOrderRadio>
                <ContOrderRadio>
                    <Radio
                        labels={orderDirLabels}
                        setter={setOrderDir}
                        name="orderDirFlt"
                        value={orderDir}
                        disabled={!orderByCheckBox}
                    ></Radio>
                </ContOrderRadio>
            </OrderByCont>
        </Cont>
    );
};

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ContCheckbox = styled.div`
    display: flex;
    gap: 10px;
`;

const ContOrderRadio = styled.div`
    width: 45%;
`;
const OrderByCont = styled.div`
    display: flex;
    justify-content: space-between;
`;
