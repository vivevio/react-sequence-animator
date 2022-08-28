import * as Easings from 'easing-utils';
function doEase(pos, start, end) {
    return start + (end - start) * pos;
}
export var ease = function (easeName) { return function (t, start, end, duration) { return doEase(Easings[easeName](t / duration), start, end); }; };
