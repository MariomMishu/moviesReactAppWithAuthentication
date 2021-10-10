import React from 'react';
const Input = ({ label, id, name, value, type, onChange, errors }) => {
    return (
        <>
            <label className="form-label" htmlFor={id}>{label}</label>

            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                value={value}
                onChange={onChange} />

             {errors[name] && <div className="alert alert-danger">{errors[name]}</div>} 
        </>
    )
};
export default Input;