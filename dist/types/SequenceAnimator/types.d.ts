import { Easing } from '../common.types';
export declare type SequenceAnimatorProps = {
    autoplay?: boolean;
    duration?: number;
    loop?: boolean;
    easing?: Easing;
    onSequenceEnd?: () => void;
    onAnimationStop?: () => void;
};
export declare type SequenceAnimatorDefaultProps = {
    duration: number;
    autoplay: boolean;
    easing: Easing;
    loop: boolean;
};
export declare type SequenceAnimatorState = {
    frame: number;
};
