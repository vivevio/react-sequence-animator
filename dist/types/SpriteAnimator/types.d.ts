import React from 'react';
import { Easing } from '../common.types';
export declare type Position = {
    top: number;
    left: number;
    width: React.CSSProperties['width'];
    height: React.CSSProperties['height'];
};
export declare type SpriteAnimatorProps = {
    autoplay?: boolean;
    duration?: number;
    loop?: boolean;
    easing?: Easing;
    children?: React.ReactNode;
    getPosition(frame: number): Position;
    numOfFrames?: number;
    onSequenceEnd?: () => void;
    onAnimationStop?: () => void;
};
export declare type SpriteAnimatorState = {
    frame: number;
};
export declare type SpriteAnimatorDefaultProps = {
    autoplay: boolean;
    loop: boolean;
    easing: Easing;
    getPosition(): Position;
    numOfFrames: number;
};
