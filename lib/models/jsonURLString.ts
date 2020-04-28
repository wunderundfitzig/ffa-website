import { FefeError, parseJson, Validator } from 'fefe'

export const parseJsonURLString = <R>(validator: Validator<R>) => (
  str: unknown
) => {
  if (typeof str !== 'string') {
    throw new FefeError(str, 'should be a url string')
  }
  const jsonString = decodeURIComponent(str)
  const obj = parseJson()(jsonString)
  return validator(obj)
}
