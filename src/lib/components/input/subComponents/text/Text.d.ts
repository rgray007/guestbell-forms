import './text.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface TextProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLInputElement) => void;
    readOnly?: boolean;
}
export interface TextState extends BaseInput.BaseInputState {
}
export declare class Text extends BaseInput.BaseInput<TextProps, TextState> {
    static defaultProps: BaseInput.BaseInputProps & {
        type: string;
        placeholder: string;
        stopClickPropagation: boolean;
        readOnly: boolean;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default Text;
