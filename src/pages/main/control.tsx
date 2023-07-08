import { Stack, Select, MenuItem, Button, Container } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';

import { timerTypes } from '.';
import styled from '@emotion/styled';

interface controlProps {
  timerType: String;
  setTimerType: Function;
}

const ControlButton = styled(Button)`
  min-width: 120px;
  margin-right: 10px;
`;

function Control({ timerType, setTimerType }: controlProps) {
  return (
    <Container>
      <Stack direction={'row'} m={2} justifyContent="center">
        <Select
          labelId="timer-type"
          id="timer-type"
          value={timerType}
          onChange={(e) => setTimerType(e.target.value)}
          sx={{ marginRight: 3, minWidth: 200 }}
        >
          {timerTypes.map((type) => (
            <MenuItem value={type}>{type}</MenuItem>
          ))}
        </Select>

        <ControlButton variant="contained" color="success">
          Start
          <PlayCircle sx={{ paddingLeft: 1 }} />
        </ControlButton>
        <ControlButton variant="contained" color="error">
          Reset
        </ControlButton>
      </Stack>
    </Container>
  );
}

export default Control;
