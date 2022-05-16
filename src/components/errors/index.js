import React from 'react';
// import { withNamespaces } from 'react-i18next';

const ErrorMessage = (props) => {
    const { errors, name, messages } = props;
    return (
        <>

            {
                (errors && errors[name] && errors[name].type === "required") ? (
                    <span className="errorMsg">{messages && messages.required ? messages.required : null}</span>)
                    : (
                        null
                    )
            }

            {
                (errors && errors[name] && errors[name].type == "validate") ? (
                    <span className="errorMsg">{messages && messages.validate ? messages.validate : null}</span>)
                    : (
                        null
                    )
            }

            {
                (errors && errors[name] && errors[name].type == "minLength") ? (
                    <span className="errorMsg">{messages && messages.minLength ? messages.minLength : null}</span>)
                    : (
                        null
                    )
            }
            {
                (errors && errors[name] && errors[name].type == "maxLength") ? (
                    <span className="errorMsg">{messages && messages.maxLength ? messages.maxLength : null}</span>)
                    : (
                        null
                    )
            }


            {
                (errors && errors[name] && errors[name].type == "pattern") ? (
                    <span className="errorMsg">{messages && messages.pattern ? messages.pattern : null}</span>)
                    : (
                        null
                    )
            }
        </>
    );
};

export default ErrorMessage;
