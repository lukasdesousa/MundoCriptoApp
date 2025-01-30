import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import avatar02 from './img/avatar02.avif';
import avatar03 from './img/avatar03.avif';
import avatar04 from './img/avatar04.avif';
import avatar05 from './img/avatar05.jpg';
import { FaThumbsDown } from 'react-icons/fa';
import { DevcommStyle } from './styled';
import { useMediaQuery } from 'react-responsive';

export default function DevComm() {
  const isDesktop = useMediaQuery({ query: '(min-width: 576px)' });

  return (
    <DevcommStyle>
      <Card
        variant="outlined"
        sx={{
          width: isDesktop ? 580 : 320,
          minWidth: isDesktop ? 580 : 320,
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <section className='dev-comm'>
          <p className='dev-comment-warning'>Comentários do desenvolvedor</p>
        </section>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Avatar src={avatar05} size="lg" />
          <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
            <Avatar src={avatar02} />
            <Avatar src={avatar03} />
            <Avatar src={avatar04} />
            <Avatar>+4K</Avatar>
          </AvatarGroup>
        </Box>
        <CardContent>
          <Typography level="title-lg">Lukas De Souza</Typography>
          <Typography level="body-sm">
            Olá! Seja muito bem-vindo(a) ao <em>Mundo Cripto!</em> Como vai o seu dia?
          </Typography>
        </CardContent>
        <CardActions buttonFlex="0 1 120px">
        <IconButton
        variant="outlined"
        sx={{
          mr: 'auto',
          '&:active': {
            color: 'pink',
          },
        }}
      >
        <FavoriteBorder />
      </IconButton>
          <Button variant="soft" color="neutral">
            <FaThumbsDown />
          </Button>
      
        </CardActions>
      </Card>
    </DevcommStyle>
  );
}