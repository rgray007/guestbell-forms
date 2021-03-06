import './form.scss';
import * as React from 'react';
import * as BaseInput from '../input/subComponents/base/BaseInput';
export interface FormValue {
    value: number | string;
    label?: string;
}
export interface FormProps {
    className?: string;
    noValidate?: boolean;
    onSubmit?: () => void;
}
export interface FormState {
    isFormValid: boolean;
    components: {
        [name: string]: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>;
    };
}
export interface FormContext {
    register: (component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) => void;
    unregister: (component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) => void;
    isFormValid: () => boolean;
    updateCallback: (isComponentValid: boolean, inputId: string) => void;
    disableInputs: () => void;
    enableInputs: () => void;
}
export declare const FormContextType: {
    register: any;
    unregister: any;
    isFormValid: any;
    updateCallback: any;
    enableInputs: any;
    disableInputs: any;
};
export declare class Form extends React.Component<FormProps, FormState> {
    static defaultProps: {
        noValidate: boolean;
        showExpandAll: boolean;
    };
    static childContextTypes: {
        register: any;
        unregister: any;
        isFormValid: any;
        updateCallback: any;
        enableInputs: any;
        disableInputs: any;
    };
    private register(component);
    private unregister(component);
    getChildContext(): FormContext;
    disableInputs(): void;
    enableInputs(): void;
    touchAll(): void;
    unTouchAll(): void;
    componentDidMount(): void;
    private updateCallback(isComponentValid?, inputId?);
    constructor(props: FormProps);
    render(): JSX.Element;
}
export default Form;
