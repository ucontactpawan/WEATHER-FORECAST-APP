import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL = 
    "https://media.istockphoto.com/id/119488986/photo/bright-blue-sky-with-the-sun-causing-lens-flare.jpg?s=2048x2048&w=is&k=20&c=cKvy8a82bWbNaKJ461nKGoU7mR9hX71RDUdAwNKD1x8="


    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
           <CardMedia
             sx={{ height: 140 }}
             image= {INIT_URL}
             title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}</p>
                <p>Max Temp = {info.tempMax}</p>
                <p>
                    The weather can be described as <i>{info.weather} </i>and feel like {info.feelslike}&deg;C
                </p>
            </Typography>
           </CardContent>
    </Card>
    </div>
        </div>
    );
}