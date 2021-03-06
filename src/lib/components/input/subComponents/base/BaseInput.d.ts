import * as React from 'react';
import './input.scss';
import * as Validators from '../../../../validators/index';
import * as Form from '../../../form/Form';
export declare type BaseInputProps = {
    disabled?: boolean;
    className?: string;
    label?: string | JSX.Element;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, isValid: boolean) => void;
    required?: boolean;
    customValidators?: Validators.IBaseValidator[];
    validators?: ("email" | "number" | "latitude" | "longitude" | "url")[];
    noValidate?: boolean;
    touchOn?: "focus" | "blur";
    ignoreContext?: boolean;
    onTheFlightValidate?: (value: string) => boolean;
    onFocus?: (e: React.SyntheticEvent<{}>) => void;
    onBlur?: () => void;
    title?: string | JSX.Element;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    errors?: (string | JSX.Element)[];
};
export interface BaseInputState {
    valid: boolean;
    value: string;
    errors: (string | JSX.Element)[];
    validator: undefined;
    touched: boolean;
    disabled: boolean;
    focused: boolean;
}
export declare class BaseInput<P extends BaseInputProps, S extends BaseInputState> extends React.Component<P, S> {
    context: Form.FormContext;
    inputId: string;
    static defaultProps: BaseInputProps;
    static contextTypes: {
        register: any;
        unregister: any;
        isFormValid: any;
        updateCallback: any;
        enableInputs: any;
        disableInputs: any;
    };
    protected getValidationClass(): "validation__success" | "validation__error";
    protected renderDefaultValidation(): JSX.Element;
    componentWillUnmount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: P): void;
    touch(): void;
    unTouch(): void;
    disableInput(): void;
    enableInput(): void;
    private handleValueChange(value);
    protected handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void;
    protected handleBlur(e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>): void;
    protected handleFocus(e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>): void;
    protected getDisabled(): P["disabled"];
    protected setValid(): void;
    protected setInvalid(): void;
    constructor(props: any);
}
export default BaseInput;
