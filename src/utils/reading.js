const WORDS_PER_MINUTE = 200

export const readingTimeInMinutes = text => {
  const numWords = text.split(/\s/g).length
  const minutesToFinish = numWords / WORDS_PER_MINUTE
  return Math.ceil(minutesToFinish)
}
