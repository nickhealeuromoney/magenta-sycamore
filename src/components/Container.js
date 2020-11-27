import React from 'react';

const Container = ({
  className,
  ...props
}) => <div {...props} className={`container ${className}`} />;

export default Container;
