import React from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types';

const NumberInputFieldGroup = (props) => {
    return (
        <div className="form-group">
            <input
                type={props.type}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.error
                })}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                min={props.min}
                max={props.max}
            />
            {props.info && <small className="form-text text-muted">{props.info}</small>}
            {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
    )
};

NumberInputFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default NumberInputFieldGroup;