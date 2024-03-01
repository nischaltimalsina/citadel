import React from 'react';
import { ISVGProps } from './types';

export const Logo = (props: ISVGProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="64"
            viewBox="0 0 108 64"
            {...props}
        >
            <path
                d="M32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14 63.5 32 64C38.5 64 43 62 43 62C42.9338 61.916 43 42.1981 43 42.1981C40.2605 45.1516 36.3461 47 32 47C23.7157 47 17 40.2843 17 32C17 23.7157 23.7157 17 32 17C40.2843 17 47 23.7157 47 32V64H64V32C64 14.3269 49.6731 0 32 0Z"
                fill="currentColor"
            />
            <path
                d="M68 10C68 4.47715 72.4772 0 78 0H99C103.971 0 108 4.02944 108 9C108 13.9706 103.971 18 99 18H68V10Z"
                fill="currentColor"
            />
            <path
                d="M68 32C68 26.4772 72.4772 22 78 22H99C103.971 22 108 26.0294 108 31C108 35.9706 103.971 40 99 40H68V32Z"
                fill="currentColor"
            />
            <path
                d="M68 54C68 48.4772 72.4772 44 78 44C83.5228 44 88 48.4772 88 54C88 59.5228 83.5228 64 78 64H68V54Z"
                fill="currentColor"
            />
        </svg>
    );
};
