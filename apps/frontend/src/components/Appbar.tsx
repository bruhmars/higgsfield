import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export function Appbar() {

    const navigate = useNavigate(); 

    return <div>
        <div className="bg-black text-white flex justify-between">

            <div className="p-4 text-xxl">
                Higgsfield
            </div>

            <div className="flex">

                <div className="flex items-center p-2">
                    <Button variant={"ghost"} onClick={() => {
                        navigate("./signup")
                    }}>Sign up</Button>
                </div>

                <div className="flex items-center p-2">
                    <Button variant={"ghost"} onClick={()=> {
                        navigate("./signin")
                    }}>Sign in</Button>
                </div>

            </div>

        </div>
    </div>
}