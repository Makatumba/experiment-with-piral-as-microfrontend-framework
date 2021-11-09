import { DashboardTileProps } from 'piral';
import * as React from 'react';

export const DashboardTile: React.FunctionComponent<DashboardTileProps> = (props) => {
    const { columns, rows, children } = props;
    return <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>;
};
