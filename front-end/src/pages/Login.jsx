import { Form, Link } from "react-router-dom";
import FormControl from "../components/FormControl";

export default function Login(){
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Form method="post" action="" className="form h-auto">
                <FormControl inputName="email" inputType="email" label="Email" >
                </FormControl>
                <FormControl inputName="password" inputType="password" label="Password">
                </FormControl>
                <div className="flex">
                    <span><Link to="/register" className="font-normal text-neutral-700 text-sm">Don&apos;t have a user register yourself here</Link></span>
                    <button type="submit" className="btn-success btn">Login</button>

                </div>
            </Form>
        </div>
    );
}