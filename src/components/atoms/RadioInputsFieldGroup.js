import React from 'react';
import PropTypes from 'prop-types';

const RadioInputFieldGroup = (props) => {
    return (
        <div className="form-group row">
            <label className="col-lg-5 col-form-label form-control-label">Чи маєш ти ноутбук?</label>
            <div className="col-lg-7 radio-form">
                <div>
                    <input id="notebook-true"
                           type="radio"
                           value="yes"
                           checked={props.checked}
                           onChange={props.onChange}
                           name="choice"
                           required
                    />
                    <label htmlFor="notebook-true">Так</label>
                </div>
                <div>
                    <input id="notebook-false"
                           type="radio"
                           value="no"
                           checked={!props.checked}
                           onChange={props.onChange}
                           name="choice"/>
                    <label htmlFor="notebook-false">Ні</label>
                </div>
            </div>
            {props.info && <small className="form-text text-muted">{props.info}</small>}
            {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
    )
};

RadioInputFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default RadioInputFieldGroup;