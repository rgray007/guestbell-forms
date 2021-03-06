import './dynamicSubmit.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import * as Button from '../../../buttons/Button';
export declare enum ButtonState {
    Normal = 0,
    Submitting = 1,
    Error = 2,
    Success = 3,
}
export interface DynamicSubmitProps extends Button.ButtonProps, BaseInput.BaseInputProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, submiting?: () => void, error?: () => void, success?: () => void, reset?: () => void) => void;
    validateForm?: boolean;
    submittingChildren?: JSX.Element | string;
    errorChildren?: JSX.Element | string;
    successChildren?: JSX.Element | string;
    submittingClassName?: string;
    errorClassName?: string;
    successClassName?: string;
    normalClassName?: string;
    submitDisablesInputs?: boolean;
    resetEnablesInputs?: boolean;
}
export interface DynamicSubmitState extends BaseInput.BaseInputState {
    buttonState: ButtonState;
}
export declare class DynamicSubmit extends BaseInput.BaseInput<DynamicSubmitProps, DynamicSubmitState> {
    static defaultProps: BaseInput.BaseInputProps & {
        validateForm: boolean;
        submitDisablesInputs: boolean;
        resetEnablesInputs: boolean;
    };
    constructor(props: any);
    private handleClick(e);
    private submiting();
    private error();
    private success();
    private reset();
    private renderChildren();
    private renderClassName();
    render(): JSX.Element;
}
export default DynamicSubmit;
