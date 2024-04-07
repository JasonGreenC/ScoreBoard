import React, { FC, useState, useEffect } from 'react';
import './Player.css';
import { Fab, Grid, TextField, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface PlayerProps {
  PlayerName: string;
  Rounds: number;
  onDelete?: () => void;
}

const Player: FC<PlayerProps> = ({ PlayerName, Rounds, onDelete }) => {
  const [scores, setScores] = useState(Array(Rounds).fill(0));
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState(PlayerName);

  const handleScoreChange = (index: number, newScore: number) => {
    const newScores = [...scores];
    newScores[index] = newScore;
    setScores(newScores);
  }

  useEffect(() => {
    setScores(prevScores => prevScores.slice(0, Rounds).concat(Array(Math.max(0, Rounds - prevScores.length)).fill(0)));
  }, [Rounds]);

  const totalScore = scores.reduce((a, b) => a + b, 0);

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={3}>
        {isEditingName ? (
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setIsEditingName(false)}
          />
        ) : (
          <Typography variant='h4' onClick={() => setIsEditingName(true)}>
            {name}
          </Typography>
        )}
      </Grid>
      {Array.from({ length: Rounds }).map((_, index) => (
        <Grid item key={index}>
          <TextField
            type="number"
            label={`${index + 1}`}
            id={`${PlayerName}round${index + 1}`}
            defaultValue={0}
            onChange={(e) => handleScoreChange(index, parseInt(e.target.value))}
            size='small'
            margin='normal'
            InputLabelProps={{ shrink: true }}
            inputProps={{ 
              style: { width: '50px' }, // sets the width of the input field
              min: 0, // sets the minimum value
              max: 999 // sets the maximum value
            }}
          />
        </Grid>
      ))}
      <Grid item xs={1}>
        <Typography variant="h6">{totalScore}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Fab color="primary" aria-label="delete" onClick={onDelete}>
          <Delete />
        </Fab>
      </Grid>
    </Grid>

  );
};

export default Player;
