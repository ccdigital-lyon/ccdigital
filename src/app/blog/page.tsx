import { getPosts } from "@/lib/ghost";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ressources Cybersécurité",
  description: "Analyses, guides et retours d'expérience pour anticiper les menaces cyber en PME industrielle.",
};

export const revalidate = 300; // ISR: revalidate every 5 minutes

export default async function BlogPage() {
  const posts = await getPosts(12);

  return (
    <div className="pt-20">
      <section className="py-20 gradient-page">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-content">
            Ressources <span className="gradient-text">& Blog</span>
          </h1>
          <p className="text-lg text-content-secondary max-w-2xl mb-12">
            Analyses, guides et retours d&apos;expérience pour anticiper les menaces cyber en PME industrielle.
          </p>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card-hover group block rounded-2xl overflow-hidden bg-surface-card border border-edge"
                >
                  {post.feature_image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.feature_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.primary_tag && (
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {post.primary_tag.name}
                      </span>
                    )}
                    <h2 className="text-lg font-bold mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2 text-content">
                      {post.title}
                    </h2>
                    <p className="text-sm text-content-secondary line-clamp-3">
                      {post.excerpt || ""}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-content-muted">
              <p className="text-xl">Les articles arrivent bientôt…</p>
              <p className="mt-2 text-sm">Notre blog Ghost CMS sera connecté prochainement.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}