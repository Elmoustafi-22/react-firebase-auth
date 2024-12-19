import CommonInput from "../common-input";


const formElementTypes = {
    INPUT : 'input',
    SELECT : 'select',
    TEXTAREA : 'textarea',
}

function CommonForm({formControls = [], buttonText, setFormData, formData, onSubmit}){
    
    function renderFormElements(getFormControls, getFormData){
        let element = null;
        
        switch(getFormControls.componentType){
            case formElementTypes.INPUT:
                element = <CommonInput 
                    type={getFormControls.type}
                    placeholder={getFormControls.placeholder}
                    value={getFormData[getFormControls].name}
                    name={getFormControls.name}
                    onChange={(e) => setFormData({
                        ...formData,
                        [getFormControls.name]: e.target.value
                    })}
                />
                break;
            
            case formElementTypes.SELECT:
                break;
                
            case formElementTypes.TEXTAREA:
                break;

            default:
                element = <CommonInput 
                    type={getFormControls.type}
                    placeholder={getFormControls.placeholder}
                    value={getFormData[getFormControls].name}
                    name={getFormControls.name}
                    onChange={(e) => setFormData({
                        ...formData,
                        [getFormControls.name]: e.target.value
                    })}
                />
                break;
        }

        return element;
    }
    
    return (
        <form onSubmit={onSubmit}>
            {
                formControls.map(singleFormItem => renderFormElements(singleFormItem, formData))
            }
            <button type="submit">{buttonText || 'Submit'}</button>
        </form>
    )
}

export default CommonForm;