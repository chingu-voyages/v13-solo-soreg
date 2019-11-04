const sizesRaw = {
    maxWidth: 1500,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280
};

const sizes = {
    maxWidth: `${sizesRaw.maxWidth}px`,
    sm: `${sizesRaw.sm}px`,
    md: `${sizesRaw.md}px`,
    lg: `${sizesRaw.lg}px`,
    xl: `${sizesRaw.xl}px`
};

const breakpoint = size => {
    return sizes[size];
};

const breakpointsRaw = size => {
    return sizesRaw[size];
};

export { getPageSize, breakpoint, breakpointsRaw };
