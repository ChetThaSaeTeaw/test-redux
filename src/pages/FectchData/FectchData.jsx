import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function FectchData() {

    const [attraction, setAttraction] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const url = 'https://www.melivecode.com/api/attractions';
        const controller = new AbortController();
        fetch(`${url}/${id}`, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAttraction(data.attraction);
                setLoading(false);
            });

        return () => controller.abort();
    }, [id]);

    return (
        <>
            <main className='container'>
                {loading ? "Loading..." :
                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            variant='top'
                            src={attraction.coverimage}
                        />
                        <Card.Body>
                            <Card.Title>{attraction.name}</Card.Title>
                            <Card.Text>{attraction.detail}</Card.Text>
                            <Button
                                type='submit'
                                variant='primary'
                            >
                                อ่านเพิ่มเติม
                            </Button>
                        </Card.Body>
                    </Card>}
            </main>
        </>
    );
};
