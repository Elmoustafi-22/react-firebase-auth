

function CommonInput({type, placeholder, value, onChange, className, name}) {
    return (
        <input 
            type={type || "text"}
            placeholder={placeholder || "Enter something here..."}
            value={value}
            onChange={onChange}
            className={className || "w-full block px-5 py-2 mt-2 text-black border rounded-lg"}
            name={name}
        />
    )
}

export default CommonInput;