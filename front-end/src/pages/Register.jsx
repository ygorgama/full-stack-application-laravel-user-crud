import { Form, Link } from "react-router-dom";
import FormControl from "../components/FormControl";

export default function Register() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Form method="post" action="" className="form h-auto">
                <FormControl inputName="name" inputType="text" label="Name">
                </FormControl>
                <FormControl inputName="email" inputType="email" label="Email" >
                </FormControl>
                <FormControl inputName="password" inputType="password" label="Password">
                </FormControl>
                <FormControl inputName="password_confirmation" inputType="password" label="Confirm Password">
                </FormControl>
                <div className="flex justify-between">
                    <Link to="/login" type="submit" className="btn text-center">Return</Link>
                    <button type="submit" className="btn-success btn">Register</button>
                </div>
            </Form>
        </div>
    )
}