import React from 'react';
import styled from 'styled-components';
import { Input } from '@/ui';
import { setDb } from '../../model/private';

export const FileForm = () => {
    return (
        <Container>
            <Input
                type="file"
                accept="application/json"
                multiple={false}
                onChange={(e) => setDb(e.target.files && e.target.files[0])}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    input {
        width: 250px;
    }
`;
