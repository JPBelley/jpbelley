export const lerp = (start, end, amt) => {
    return (1 - amt) * start + amt * end
}