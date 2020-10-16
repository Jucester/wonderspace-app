import React from 'react';
import './NasaPhoto.css';


const apiKey = "y8wdPqafbFPxanl654O05cyobfghX2kCm7MqyFFm";


function NasaPhoto () {

    const [photoData, setPhotoData] = React.useState(null);

    React.useEffect( () => {

            fetchPhoto();


            async function fetchPhoto() {
                const res = await fetch(
                    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
                );

                const data = await res.json();
                console.log(data);
                setPhotoData(data);
            }
    }, []);


    if (!photoData) return <div> </div>

    return (

        <div className="photoContainer">
            <div className="photoImage">
                <img 
                    src={photoData.url} 
                    alt={photoData.title}
                />
            </div>
            <div className="photoInfo">
                    <h3> {photoData.title} </h3>
                    <p> {photoData.date} </p>
                    <p> {photoData.explanation} </p>

            </div>
            
        </div>
    )
}

export default NasaPhoto;