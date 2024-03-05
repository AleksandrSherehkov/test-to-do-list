export const getLabelClass = (value: string): string => {
  switch(value) {
    case 'completed':
      return 'text-red-500'
    case 'current':
      return 'text-green-500'
    case 'all':
      return 'text-blue-500'
    default:
      return ''
  }
}
