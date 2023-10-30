export const buildStyle = (obj) => {
    return Object.entries(obj)
        .map(([key, value]) => `--${key}:${value}`)
        .join(';');
}