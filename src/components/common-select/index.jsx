

function CommonSelect() {
    return (
        <div className="p-1 block w-full">
            <label className="block mb-2 text-sm font-medium text-gray-600 w-full font-raleway">Select</label>
            <select className="h-7 border border-gray-300 w-full text-sm rounded-lg block px-1 text-gray-800  focus:outline-none">
                <option className="text-gray-400" selected>Choose a country</option>
                <option value="US">United State</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    )
}

export default CommonSelect;