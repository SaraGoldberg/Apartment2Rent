import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const KindApartment = (props) => {
    const list = props.list;
    var width= {
         'sm': 12 / list.length,
         'xs' : (12 / list.length)* 2 };

    return (
        <Container maxWidth="md" component="main">
            <Grid dir="rtl" className="container" container spacing={5} alignItems="flex-start">
                {list.map((index) => (
                    <Grid item key={index.title} xs={width.xs} sm={width.sm}>
                        <Card>
                            <CardHeader
                                title={index.title}
                                subheader={index.subheader}
                                titleTypographyProps={{ align: 'center' }}
                                subheaderTypographyProps={{ align: 'center' }}
                                action={index.title === 'Pro' ? <StarIcon /> : null}
                            />
                            <CardContent>
                                <div>
                                    <Typography component="h2" variant="h3" color="textPrimary">
                                        <img alt="שכירות" src="logo512.png"></img>
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button fullWidth variant={index.buttonVariant} color="primary">
                                    {index.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default KindApartment;