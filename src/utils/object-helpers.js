export const updateObjectinArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(el=>{
        if(el[objPropName] === itemId){
            return {...el, ...newObjProps}
        }
        return el
    })
}