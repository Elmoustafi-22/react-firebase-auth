import { useContext } from "react";
import CommonForm from "../../components/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";


function RegisterPage() {
    const {registerFormData, setRegisterFormData, registerWithFirebase, setLoading} = useContext(AuthContext)

    const navigate = useNavigate()

    function handleRegisterFormSubmit(e) {
        e.preventDefault()
        registerWithFirebase().then(result => {
            if(result.user){
                updateProfile(result.user, {
                    displayName : registerFormData.name
                }).then(() => {
                    console.log(auth.currentUser.displayName)
                })

                if (auth.currentUser.displayName) {
                    setLoading(false)
                    navigate('/profile')
                }
            }
        }).catch(error => console.log(error))
    }

    return (
        <div className="w-full font-poppins flex flex-col items-center h-screen fixed justify-center">
            <div className="border-t border-blue-200 flex flex-col gap-2 min-w-[350px] min-h-[300px] rounded shadow-md shadow-blue-400">
                <div>
                    <h3 className="mt-2 text-center text-xl text-gray-700">Register</h3>
                </div>
                <hr className="border border-gray-300"/>
                <div className="p-2 flex flex-col">
                    <CommonForm 
                        formControls={registerFormControls}
                        buttonText={"Sign Up"}
                        setFormData={setRegisterFormData}
                        formData={registerFormData}
                        onSubmit={handleRegisterFormSubmit}
                    />
                    <p className="p-2 text-gray-700">If you already have an account, <a onClick={() => {
                        navigate('/login')
                    }} className="text-violet-400 hover:underline transition duration-150 cursor-pointer">Login</a></p>
                </div>
                
            </div>
            
        </div>
    )
}

export default RegisterPage;