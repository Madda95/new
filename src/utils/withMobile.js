
import React from 'react';

export const withMobile = WrappedComponent => props => <WrappedComponent isMobile={getIsMobile()} {...props} />

const getIsMobile = () => {
    return window.innerWidth <= 420 ? true : false;
}