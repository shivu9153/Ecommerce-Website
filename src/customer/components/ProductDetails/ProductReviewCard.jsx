import React from 'react'
import { Rating, Box, Avatar, Grid, Typography } from '@mui/material';

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                        R
                    </Avatar>
                </Box>
            </Grid>
            <Grid item xs>
                <div className='space-y-2'>
                    <div> 
                        <Typography variant="subtitle1">Ram</Typography>
                        <Typography variant="body2" color="text.secondary">April 5, 2002</Typography>
                    </div>
                    <Rating value={4.5} precision={0.5} readOnly />
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur 
                    </Typography>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard