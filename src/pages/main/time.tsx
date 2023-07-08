import { Stack, Select, MenuItem, Button, Container, Box } from '@mui/material';
import Countdown, { CountdownRenderProps } from 'react-countdown';

function TimeRenderer({ hours, minutes, seconds }: CountdownRenderProps) {
  const displayMinutes = minutes.toString().padStart(2, '0');
  const displaySeconds = seconds.toString().padStart(2, '0');
  return (
    <>
      {displayMinutes}:{displaySeconds}
    </>
  );
}

function Time() {
  return (
    <>
      <Container
        sx={{
          border: '2px solid white',
          borderRadius: '50%',
          height: '350px',
          width: '350px',
          textAlign: 'center',
          lineHeight: '100px',
        }}
      >
        <Container>
          <Button variant="contained">-</Button>
          <Box pt={3} pb={3} pl={2}>
            <Countdown date={Date.now() + 100000} renderer={TimeRenderer} />
          </Box>
          <Button variant="contained">+</Button>
        </Container>
      </Container>
    </>
  );
}

export default Time;
