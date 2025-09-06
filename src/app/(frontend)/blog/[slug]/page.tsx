import { payloadFetch, PayloadList } from '@/lib/payload'
import type { Metadata } from 'next'

// Tipos
type Media = { id: string; url: string; alt?: string }

type Category = { id: string; name: string; slug: string }

type Post = {
  id: string
  title: string
  slug: string
  excerpt?: string
  category: Category | string
  cover?: Media | string
  contentHtml: string
  publishedAt?: string
  readingTime?: string
}

function formatDate(iso?: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: '2-digit' })
}

async function getPostBySlug(slug: string) {
  const data = await payloadFetch<PayloadList<Post>>(
    `/api/posts?where[slug][equals]=${encodeURIComponent(slug)}&where[_status][equals]=published&depth=1&limit=1`,
  )
  return data.docs[0]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Artículo no encontrado | High Commerce' }
  return {
    title: `${post.title} | High Commerce`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: typeof post.cover === 'object' && post.cover?.url ? [post.cover.url] : undefined,
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return <main className="mx-auto max-w-3xl px-4 py-20">Artículo no encontrado.</main>

  const catName = typeof post.category === 'object' ? post.category.name : ''
  const coverUrl = typeof post.cover === 'object' && post.cover?.url ? post.cover.url : ''

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="text-xs text-slate-600 flex gap-2 items-center">
          {catName && (
            <span className="rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">{catName}</span>
          )}
          {post.publishedAt && (
            <>
              <span>•</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </>
          )}
          {post.readingTime && <span>• {post.readingTime}</span>}
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          {post.title}
        </h1>
        {post.excerpt && <p className="mt-2 text-slate-700">{post.excerpt}</p>}

        {coverUrl && (
          <div className="mt-6 overflow-hidden rounded-3xl ring-1 ring-slate-200">
            <img
              src={coverUrl}
              alt={post.title}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-slate mt-8 max-w-none prose-headings:scroll-mt-24"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  )
}
