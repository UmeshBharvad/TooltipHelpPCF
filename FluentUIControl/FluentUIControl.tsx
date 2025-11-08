import * as React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { FC } from 'react';
import { IInputs } from "./generated/ManifestTypes";

interface Props {
    context: ComponentFramework.Context<IInputs>;
    value: string;
    onChange: (value: string) => void;
    disabled: boolean;
}

export const FluentUIControl: FC<Props> = (props) => {
    return (
        <FluentProvider theme={webLightTheme}>
            {/* Add your Fluent UI components here */}
        </FluentProvider>
    );
};
