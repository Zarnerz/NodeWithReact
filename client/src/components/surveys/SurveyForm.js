// Survey Form
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    {
        label: 'Survey Title',
        name: 'title',
        noValueError: 'You must provide a title'
    },
    {
        label: 'Subject Line',
        name: 'subject',
        noValueError: 'You must provide a subject'
    },
    {
        label: 'Email Body',
        name: 'body',
        noValueError: 'You must provide an email body'
    },
    {
        label: 'Recipient List',
        name: 'emails',
        noValueError: 'You must provide valid email(s)'
    }
];
class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                {FIELDS.map(({ label, name }) => {
                    return (
                        <Field
                            key={name}
                            name={name}
                            label={label}
                            type="text"
                            component={SurveyField}
                        />
                    );
                })}
            </div>
        );
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        console.log(values)
                    )}
                >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="teal btn-flat right white-text"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    FIELDS.forEach(({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);
