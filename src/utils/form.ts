/**
 * React Hook Form의 formState에서 변경된 값만 추출하는 함수
 * @param dirtyFields formState.dirtyFields
 * @param values onSubmit의 data
 */
export const getDirtyValues = <T extends Record<string, unknown>>(
    dirtyFields: Partial<Record<keyof T, boolean>>,
    values: T,
): Partial<T> => {
    return (Object.keys(dirtyFields) as (keyof T)[]).reduce((prev, key) => {
        if (!dirtyFields[key] || values[key] === undefined) return prev
        return {
            ...prev,
            [key]: values[key],
        }
    }, {})
}
