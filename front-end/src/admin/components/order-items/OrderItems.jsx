import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import {motion} from 'framer-motion'

const MotionBox = motion(Box)

const OrderItems = () => {
  return (
    <MotionBox initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 0.7, duration : 0.7}}>
      <Container>
        <Typography>Not Done Yet</Typography>
      </Container>
    </MotionBox>
  )
}

export default OrderItems