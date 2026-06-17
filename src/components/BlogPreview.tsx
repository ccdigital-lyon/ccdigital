import Link from "next/link";
import { GhostPost } from "@/lib/ghost";

export function BlogPreview({ posts }: { posts: GhostPost[] }) {
  return (
    <section className="py-20 bg-[#0D1F3C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dernières <span className="gradient-text">publications</span>
          </h2>
          <p className="text-[#B0B8C8] max-w-xl mx-auto">
            Analyses, guides et retours d'expérience pour anticiper les menaces cyber.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="card-hover group block rounded-2xl overflow-hidden bg-white/5 border border-white/10"
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
                    <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider">
                      {post.primary_tag.name}
                    </span>
                  )}
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#B0B8C8] line-clamp-3">
                    {post.excerpt || ""}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-[#00D4FF] group-hover:translate-x-1 transition-transform">
                    Lire l&apos;article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-[#6B7A90]">
            <p className="text-lg">Les articles arrivent bientôt…</p>
            <p className="text-sm mt-2">Notre blog Ghost CMS sera connecté prochainement.</p>
          </div>
        )}
      </div>
    </section>
  );
}