import React from 'react';
import { SpriteAnimatorDefaultProps, SpriteAnimatorProps, SpriteAnimatorState } from './types';
export declare class SpriteAnimator extends React.Component<SpriteAnimatorProps, SpriteAnimatorState> {
    static displayName: string;
    static defaultProps: SpriteAnimatorDefaultProps;
    state: {
        frame: number;
    };
    private _animationFrame;
    private _animationStart;
    componentDidMount(): void;
    componentDidUpdate(nextProps: SpriteAnimatorProps): void;
    componentWillUnmount(): void;
    start(): void;
    stop(): void;
    reset(): void;
    _playAnimation: () => void;
    _onAnimate: (timestamp: number) => void;
    render(): JSX.Element;
}
