import { Alert, Box, Typography } from '@mui/joy';
import React from 'react';

const ShowAlert = (props: any) => {
    return (
        <Box sx={{display: props.display}}>
            <Box sx={{pb: 10, display: 'flex', gap: 2, width: '100%', flexDirection: 'row' , justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                <Alert key='1' sx={{zIndex: 999, textAlign: 'center',width: '100%', display: 'flex' ,justifyContent: 'center', borderRadius: '10px'}} variant="outlined" color="warning" >
                <div>
                    <Typography level="body-sm" color="warning">{props.title}</Typography>
                </div>
                </Alert>
            </Box>   
        </Box>
    );
};

export default ShowAlert;
