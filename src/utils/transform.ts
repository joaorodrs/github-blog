import { differenceInDays, parseISO } from "date-fns"

export const daysFromNow = (date: string) => {
  if (!date) return '-'

  const createdAt = parseISO(date)

  const difference = differenceInDays(new Date(), createdAt)

  if (difference === 0) {
    return 'Hoje'
  }

  if (difference === 1) {
    return 'Há 1 dia'
  }

  return `Há ${difference} dias`
}