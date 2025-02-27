import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AnalyserExample from './AnalyserExample';

export default function ToolArea() {
  return (
    <Box
      sx={{
        marginTop: '10px',
        perspective: '3000px',
        transition: 'transform 1s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
            '.text' : {
                color: 'black',
                visibility: 'visible',
            },
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          height: '10%',  
          width: '100%',
          margin: 'auto',
          backgroundColor: '#ffffff',
          borderColor: '#e6e6e6',
        }}
      >
        <Typography level="h2" textColor="#000" sx={{ fontSize: 'lg' }}>
          Analyser
        </Typography>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(99, 176, 248, 0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(253, 253, 253, 0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#e6e6e6',
            
          }}
        >
          <Typography visibility={'hidden'} level="h2" className='text' textColor="#ffffff" sx={{ fontSize: 'lg', position: 'relative', bottom: '33%', transition: '0.8s' }}>
            Uma ferramenta anti rug-pulls
          </Typography>
        </CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background:
            'linear-gradient(to top, rgba(99, 176, 248, 0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(253, 253, 253, 0.8), rgba(0,0,0,0) 300px)',
            border: '1px solid',
            borderColor: '#e6e6e6',
            backdropFilter: 'blur(1px)',
            padding: '10px',
            borderRadius: '10px'
          }}
        >
          <Typography sx={{ width: '100%', margin: 'auto', display: 'block'}}>
            <AnalyserExample />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
