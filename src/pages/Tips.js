import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';


const Tips = () => {
    const [tips, setTips] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/tips')
        .then(res=>res.json())
        .then(data=>{
            setTips(data)
            console.log('fetch')
            console.log(data)
        })
    },[])
    return (
        <Container>
            <h1>Tips</h1>
            <Grid container>
                    {tips.map(tip=>(
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper>
                            <p key={tip.id}>{tip.tip}</p>
                            </Paper>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default Tips;