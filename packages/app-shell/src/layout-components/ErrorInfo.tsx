import { ErrorInfoProps, SwitchErrorInfo } from 'piral';
import * as React from 'react';

export const ErrorInfo: React.FunctionComponent<ErrorInfoProps> = (props) => {
    return (
        <div>
            <h1>Error</h1>
            <SwitchErrorInfo {...props} />
        </div>
    );
};
