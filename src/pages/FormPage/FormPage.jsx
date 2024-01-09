// CSS
import { Form, Button } from 'react-bootstrap';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setContact } from '../../store/contact/contact.reducer';

// components
import FixedBox from '../../components/FixedBox/FixedBox';

export default function FormPage() {

    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        id: 1,
        name: "",
        email: "",
        gender: "",
        message: ""
    });

    const handleChange = (event) => {
        setUserData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        if (userData) {
            dispatch(setContact(userData));
            event.target.reset();
        } else {
            setValidated(true);
        }
        console.log(userData);
    };

    return (
        <main
            className='container rounded my-4'
            style={{ width: 600, boxShadow: "1px 1px 7px 1px #0009" }}
        >
            <h1>Test App</h1>
            <p>Contact Lists</p>
            <Form
                validated={validated}
                onSubmit={handleSubmitForm}
            >
                <Form.Group>
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Please Enter'
                        name='id'
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a id.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Please Enter'
                        name='name'
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Please Enter'
                        name='email'
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                        aria-label="select-gender"
                        name='gender'
                        onChange={handleChange}
                        required
                    >
                        <option>Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="unknown">Unknown</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Please select a gender.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as='textarea'
                        placeholder='Please Enter'
                        name='message'
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a message.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    type='submit'
                    variant='primary'
                    className='my-4'
                >
                    Submit
                </Button>
            </Form>
            <>
                <FixedBox />
            </>
        </main>
    )
}
