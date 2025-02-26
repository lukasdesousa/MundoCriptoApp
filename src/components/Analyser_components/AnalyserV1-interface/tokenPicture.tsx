import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function TokenPicture() {
    const data = useSelector((state: RootState) => state.data.data);
    const imageSrc = data?.fileMeta?.image || 'https://cdn-icons-png.flaticon.com/128/6001/6001527.png';

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar alt="Remy Sharp" src={imageSrc} />
    </Box>
  );
}
