export const required = value => {
    if(value) return undefined
    return 'Value is required'
}

export const maxLength = maxLength => value => {
    if(value.length > maxLength) return `Value max is ${maxLength}`
    return undefined
}