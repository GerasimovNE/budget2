import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Button } from '@/ui';
import { importDbEvent, exportDbFx, $db } from '../../model/private';

export const Buttons = () => {
    const db = useStore($db);
    return (
        <Container>
            <Button
                disabled={!db}
                onClick={() => {
                    importDbEvent();
                }}
            >
                import
            </Button>
            <Button onClick={() => exportDbFx(null)}>export</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
