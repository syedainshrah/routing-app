import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                {/* First Row of Images */}
                <Grid container spacing={2} sx={{ p: 2 }}>
                    {/* Image 1 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img3.png"
                            alt="Image 1"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Trenton modular sofa_3
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>

                    {/* Image 2 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img4.png"
                            alt="Image 2"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Granite dining table with dining chair
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>

                    {/* Image 3 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img5.png"
                            alt="Image 3"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Outdoor bar table and stool
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>

                    {/* Image 4 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img6.png"
                            alt="Image 4"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Plain console with teak mirror
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>
                </Grid>

                {/* Second Row of Images */}
                <Grid container spacing={2} sx={{ p: 2 }}>
                    {/* Image 5 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img7.png"
                            alt="Image 5"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Grain coffee table
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>

                    {/* Image 6 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img8.png"
                            alt="Image 6"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Kent coffee table
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>

                    {/* Image 7 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img11.png"
                            alt="Image 7"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Round coffee table_color 2
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>

                    {/* Image 8 */}
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/img10.png"
                            alt="Image 8"
                            sx={{
                                objectFit: "cover",
                                width: '100%',
                                height: '250px',
                            }}
                        />
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', mt: 1 }}>
                            Reclaimed teak coffee table
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Rs. 25,000.00
                        </Typography>
                    </Grid>
                </Grid>

            </Card>
        </Box>
    );
}
