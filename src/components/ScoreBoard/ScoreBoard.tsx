import React, { FC, useState } from 'react';
import './ScoreBoard.css';
import { Box, Button, Grid, Stack } from '@mui/material';
import Player from '../Player/Player';

interface ScoreBoardProps {}

const ScoreBoard: FC<ScoreBoardProps> = () => {
  const [lastID, setLastID] = useState(1);
  const [Players, setPlayers] = useState([{ id: lastID, name: 'Player 1' }]);
  const [Rounds, setRounds] = useState(2);

  const handleAddPlayer = () => {
    const newID = lastID + 1;
    setPlayers([...Players, { id: newID, name: `Player ${newID}` }]);
    setLastID(newID);
  }

  const handleDeletePlayer = (id: number) => {
    setPlayers(Players.filter((player: { id: number; }) => player.id !== id));
  };

  const handleDeleteRound = () => {
    if (Rounds > 0) {
      setRounds(Rounds - 1);
    }
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '100%' 
    }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={() => handleAddPlayer()}>
            Add Player
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setRounds(Rounds + 1)}>
            Add Round
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleDeleteRound()}>
            Remove Round
          </Button>
        </Stack>
        <br></br>
        <Grid container spacing={2}>
          {Players.map((player: { id: number; name: string; }) => (
          <Grid item xs={12} key={player.id}>
            <Player 
              PlayerName={player.name}
              Rounds={Rounds}
              onDelete={() => handleDeletePlayer(player.id)}
            />
          </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default ScoreBoard;