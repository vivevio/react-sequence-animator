import React from 'react';
import { SequenceAnimatorProps, SequenceAnimatorState, SequenceAnimatorDefaultProps } from './types';
export declare class SequenceAnimator extends React.Component<SequenceAnimatorProps, SequenceAnimatorState> {
    static displayName: string;
    static defaultProps: SequenceAnimatorDefaultProps;
    private _animationFrame;
    private _animationStart;
    state: {
        frame: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    start(): void;
    stop(): void;
    reset(): void;
    render(): JSX.Element;
    _getChildrenArray(): (string | number | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal)[];
    _getFrame: () => {};
    _playAnimation: () => void;
    _onAnimate: (timestamp: number) => void;
}
