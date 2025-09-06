export type PayloadList<T> = {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export async function payloadFetch<T>(path: string, init?: RequestInit) {
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL
  if (!base) throw new Error('NEXT_PUBLIC_PAYLOAD_URL no definido')
  const url = `${base.replace(/\/$/, '')}${path}`
  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR 60s
    ...init,
    headers: {
      Accept: 'application/json',
      ...(init?.headers || {}),
    },
  })
  if (!res.ok) throw new Error(`Payload error ${res.status}: ${await res.text()}`)
  return res.json() as Promise<T>
}
