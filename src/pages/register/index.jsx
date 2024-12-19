import CommonForm from "../../components/common-form";


function RegisterPage() {
    return (
        <div className="w-full font-poppins flex flex-col items-center h-screen fixed justify-center">
            <div className="flex flex-col gap-2 min-w-[400px] min-h-[400px] rounded shadow-md shadow-blue-400">
                <div>
                    <h3 className="text-center text-xl text-gray-700">Register</h3>
                </div>
                <hr className="border border-gray-300"/>
                <div>
                    <CommonForm />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;