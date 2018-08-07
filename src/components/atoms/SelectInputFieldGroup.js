import React from 'react';
import classnames from "classnames";
import PropTypes from 'prop-types';

const SelectInputFieldGroup = (props) => {
    const selectOptions = props.options.map(option => {
        return <option key={option.label} value={option.value}>
            {option.label}
        </option>
    });

    return (
        <div className="form-group">
            <select
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.error
                })}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                {selectOptions}
            </select>
            {props.info && <small className="form-text text-muted">{props.info}</small>}
            {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
    )
};

SelectInputFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SelectInputFieldGroup;