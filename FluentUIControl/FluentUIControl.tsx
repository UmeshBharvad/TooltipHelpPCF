import * as React from 'react';
import {
    FluentProvider,
    webLightTheme,
    Tooltip,
    Button,
    Text,
    makeStyles
} from '@fluentui/react-components';
import { Info16Regular as InfoIcon } from '@fluentui/react-icons';
import { IInputs } from "./generated/ManifestTypes";
import { useState, useCallback } from 'react';

interface Props {
    context: ComponentFramework.Context<IInputs>;
    value: string;
    onChange: (value: string) => void;
    disabled: boolean;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
    leftIcon: {
        order: 0,
    },
    rightIcon: {
        order: 2,
    },
    content: {
        order: 1,
        flexGrow: 1,
    },
    tooltipContent: {
        maxWidth: '300px',
        padding: '8px',
    },
});

export const FluentUIControl: React.FC<Props> = (props) => {
    const styles = useStyles();
    const [tooltipContent, setTooltipContent] = useState<string>('');

    const getTooltipContent = useCallback(() => {
        const { context } = props;
        const useEnvVar = context.parameters.useEnvironmentVariable.raw === 'true';
        
        if (useEnvVar && context.parameters.environmentVariableName.raw) {
            // Get content from environment variable
            const envVarName = context.parameters.environmentVariableName.raw;
            return context.parameters.tooltipContent.raw || '';
        }
        
        return context.parameters.tooltipContent.raw || '';
    }, [props.context]);

    const renderTooltipContent = () => {
        const content = getTooltipContent();
        if (props.context.parameters.tooltipStyle.raw === 'html') {
            return <div dangerouslySetInnerHTML={{ __html: content }} />;
        }
        return <Text>{content}</Text>;
    };

    const iconPosition = props.context.parameters.iconPosition.raw || 'right';
    
    return (
        <FluentProvider theme={webLightTheme}>
            <div className={styles.container}>
                <Tooltip
                    content={
                        <div className={styles.tooltipContent}>
                            {renderTooltipContent()}
                        </div>
                    }
                    relationship="description"
                >
                    <Button
                        icon={<InfoIcon />}
                        appearance="transparent"
                        size="small"
                        className={iconPosition === 'left' ? styles.leftIcon : styles.rightIcon}
                    />
                </Tooltip>
                <div className={styles.content}>
                    {/* Your bound control content here */}
                    {props.value}
                </div>
            </div>
        </FluentProvider>
    );
};
