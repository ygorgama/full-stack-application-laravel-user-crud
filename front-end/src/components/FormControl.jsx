import PropTypes from 'prop-types';

export default function FormControl({inputName, inputType, label, placeholder}){
    return (
        <div className="form-control">
            <label className='mb-2 block' htmlFor={inputName}>{label}</label>
            <input className='w-full p-2 rounded bg-slate-200' type={inputType} placeholder={placeholder ? placeholder : ""} name={inputName} id={inputName}/>
        </div>
    );
} 

FormControl.propTypes = {
    inputName: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}