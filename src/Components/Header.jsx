import { Box, Stack } from '@mui/material'
import React from 'react'
import color from '../theme/color'

function Header() {
    const appColors= color();
  return (
    <Box component="section" sx={{ p: 2,zIndex:2 ,borderBottom:0.5,borderBottomColor:appColors.black,boxShadow: `0 4px 18px ${appColors.black}`}}>
     <Stack>
        User Feedback
     </Stack>

    </Box>
  )
}

export default Header