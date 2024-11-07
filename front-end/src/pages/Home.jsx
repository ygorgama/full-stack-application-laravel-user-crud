import { Form } from "react-router-dom";

export default function Home(){
    return (
        <div className="flex justify-center items-center w-full h-screen flex-wrap-reverse">
            <div className="bg-slate-400 h-96 flex  justify-center items-center flex-col text-center w-96 rounded">
                <h1 className="text-white font-bold text-4xl mb-6">You are logged in</h1>
                <Form action="logout" method="post">
                    <button type="submit" className="btn bg-yellow-500" >Logout</button>
                </Form>
            </div>
        </div>
    );
}