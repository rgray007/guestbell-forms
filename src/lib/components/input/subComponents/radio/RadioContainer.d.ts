import './radioContainer.scss';
import * as React from 'react';
export interface RadioContainerProps {
    className?: string;
    title?: string;
    horizontal?: boolean;
}
export interface RadioContainerState {
}
export declare class RadioContainer extends React.Component<RadioContainerProps, RadioContainerState> {
    constructor(props: RadioContainerProps);
    render(): JSX.Element;
}
export default RadioContainer;
