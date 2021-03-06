import './tags.scss';
import * as BaseInput from '../base/BaseInput';
import { TextProps } from './../text/Text.d';
export declare type Tag = {
    id: number | string;
    name: string;
};
export declare type TagsProps = {
    className?: string;
    disabled?: boolean;
    tags: Tag[];
    existingTags?: Tag[];
    onTagsChanged: (newTags: Tag[]) => void;
    onNewTagAdded?: (newTagName: string) => Tag;
    allowNew?: boolean;
    textProps?: TextProps;
    readOnly?: boolean;
    reaondlyEmptyPlaceholder?: string;
    maxTags?: number;
    pressEnterToAddText?: string;
} & BaseInput.BaseInputProps;
export interface TagsState extends BaseInput.BaseInputState {
    textIsFocused: boolean;
    suggestionsVisible: boolean;
}
export declare class Tags extends BaseInput.BaseInput<TagsProps, TagsState> {
    static defaultProps: TagsProps;
    constructor(props: TagsProps);
    render(): JSX.Element;
    private renderTag(tag, index);
    private renderTags();
}
export default Tags;
