import { Box, Typography, Stack } from '@mui/material'
import React from 'react'

const Companies = () => {
  return (
    <Box sx={{mt:"80px", backgroundColor:"black"}}>
        <Stack gap={"40px"}>
        <Typography sx={{fontSize:"26px", fontWeight:"600", paddingTop:"52px", display:"flex", justifyContent:"center", color:"white"}}>
        Your trusted measurements partner
        </Typography>
        <Typography sx={{ display:"flex", justifyContent:"space-between", px:"104px", paddingBottom:"52px"}}>
            <img src="/src/assets/Google.png" alt="" />
            <img src="src/assets/meta.png" alt="" />
            <img src="/src/assets/amazon.png" alt="" />
            <img src="/src/assets/Tik-tok.png" alt="" />
            <img src="/src/assets/TradeDes.png" alt="" />
        </Typography>
        </Stack>
    </Box>
  )
}

export default Companies
