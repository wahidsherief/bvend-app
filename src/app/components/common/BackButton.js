import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

const BackButton = () => {
    const navigate = useNavigate()
    return <Button onClick={() => navigate(-1)} className="btn-dark btn-sm btn-hover">Back</Button>
}

export default BackButton