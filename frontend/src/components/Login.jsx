import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../assests/image.jpg'
const Login = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/login', { name, phoneNumber, age })
            .then(response => {
                const data = response.data; // Access the parsed JSON response

                console.log('Success:', data);
                navigate('/home', { state: { name: data.name, startTime: data.startTime, endTime: data.endTime } });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <div 
    className="d-flex justify-content-center align-items-center text-center vh-100" 
    style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    }}
>
                <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                    <h2 className='mb-3 text-primary'>Schedule the trial room</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputName" className="form-label">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="form-control"
                                id="exampleInputName"
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPhoneNumber" className="form-label">
                                <strong>Phone Number</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter phone number"
                                className="form-control"
                                id="exampleInputPhoneNumber"
                                onChange={(event) => setPhoneNumber(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputAge" className="form-label">
                                <strong>Age</strong>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter age"
                                className="form-control"
                                id="exampleInputAge"
                                onChange={(event) => setAge(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
