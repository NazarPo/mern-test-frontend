import React from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types';

const TextInputFieldGroup = (props) => {
    return (
        <div className="form-group">
            <input
                type={props.type}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.error
                })}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            {props.info && <small className="form-text text-muted">{props.info}</small>}
            {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
    )
};

TextInputFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
};

TextInputFieldGroup.defaultProps = {
    type: 'text'
};

export default TextInputFieldGroup;