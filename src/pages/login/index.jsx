import { useContext } from "react";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import CommonForm from "../../components/common-form";
import { useNavigate } from "react-router-dom";


function LoginPage(){

    const {loginFormData, setLoginFormData, loginWithFirebase, setLoading } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        loginWithFirebase().then(result => {
            if (result) {
                setLoading(false)
                navigate('/profile')
            }
        })
    }

    
    return (
        <div className="w-full font-poppins flex flex-col items-center h-screen fixed justify-center">
            <div className="border-t border-blue-200 flex flex-col gap-2 min-w-[350px] h-auto rounded shadow-md shadow-blue-400">
                <div>
                    <h3 className="mt-2 text-center text-xl text-gray-700">Login</h3>
                </div>
                <hr className="border border-gray-300"/>
                <div className="p-2 flex flex-col">
                    <CommonForm 
                        formControls={loginFormControls}
                        buttonText={"Login"}
                        setFormData={setLoginFormData}
                        formData={loginFormData}
                        onSubmit={handleLoginFormSubmit}
                    />
                </div>
                <p className="mx-auto mb-4 text-gray-700">Want to register? <a onClick={() => {
                        navigate('/')
                    }} className="text-violet-400 hover:underline transition duration-150 cursor-pointer">sign up</a></p>
            </div>
        </div>
    )
}

export default LoginPage;