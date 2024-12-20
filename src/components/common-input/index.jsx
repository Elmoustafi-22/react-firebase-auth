

function CommonInput({type, placeholder, value, onChange, name}) {
    return (
        <input 
            type={type || "text"}
            placeholder={placeholder || "Enter something here..."}
            value={value}
            onChange={onChange}
            className="w-full block px-3 py-2 text-black border rounded-lg border-gray-400 text-base focus:outline-none  font-opensans"
            name={name}
        />
    )
}

export default CommonInput;