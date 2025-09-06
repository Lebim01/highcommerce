import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { payloadFetch, PayloadList } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Blog | High Commerce',
  description:
    'Guías prácticas para vender más con catálogos grandes: SEO, búsqueda, promos y email.',
}

// Tipos mínimos
type Media = { id: string; url: string; alt?: string }

type Category = { id: string; name: string; slug: string }

type Post = {
  id: string
  title: string
  slug: string
  excerpt?: string
  category: Category | string
  tags?: { value: string }[]
  cover?: Media | string
  publishedAt?: string
  readingTime?: string
}

function formatDate(iso?: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: '2-digit' })
}

async function getCategoryIdBySlug(slug?: string): Promise<string | undefined> {
  if (!slug) return
  const data = await payloadFetch<PayloadList<Category>>(
    `/api/categories?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
  )
  return data.docs[0]?.id
}

async function getPosts(params: { q?: string; cat?: string; page?: number }) {
  const { q, cat, page = 1 } = params
  const search = new URLSearchParams()
  search.set('depth', '1')
  search.set('sort', '-publishedAt')
  search.set('limit', '12')
  search.set('page', String(page))
  // Solo publicados
  search.set('where[_status][equals]', 'published')

  if (q) {
    // OR: title like OR excerpt like
    search.set('where[or][0][title][like]', q)
    search.set('where[or][1][excerpt][like]', q)
  }

  if (cat) {
    const catId = await getCategoryIdBySlug(cat)
    if (catId) search.set('where[category][equals]', catId)
  }
}
