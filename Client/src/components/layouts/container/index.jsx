import * as React from 'react';
import Container from '@mui/material/Container';

export default function Main(props) {
  return (
    <Container
      sx={{
        width: '90vw',
        padding: '130px 0 0 0',
        minHeight: 'calc(100vh - (110px + 250px))', // header, footer, padding
      }}
      maxWidth="false"
    >
      {props.children}
    </Container>
  );
}
