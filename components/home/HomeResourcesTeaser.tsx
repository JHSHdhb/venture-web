import Link from "next/link";
import { routes } from "@/lib/site-data";

type Post = { category: string; title: string; image: string };

const posts: Post[] = [
  {
    category: "Guide",
    title: "What to include in a PCBA quote request",
    image: "/identity-pcb-closeup.jpg",
  },
  {
    category: "PCBA",
    title: "Turnkey vs consigned PCB assembly",
    image: "/hero-assembly-robots.png",
  },
  {
    category: "EMS",
    title: "When a project moves into EMS or box build",
    image: "/hero-ems-factory.jpg",
  },
];

export function HomeResourcesTeaser() {
  return (
    <section className="home-blog" aria-labelledby="home-blog-title">
      <div className="home-blog__inner">
        <div className="home-blog__intro">
          <p className="home-blog__eyebrow">Insights</p>
          <h2 id="home-blog-title" className="home-blog__title">
            Our latest blog
          </h2>
          <p className="home-blog__lead">
            Guides and insights on PCBA quoting, turnkey assembly, sourcing, testing, and EMS — to
            help you prepare a clearer RFQ.
          </p>
          <Link href={routes.blog} className="home-blog__cta">
            View all posts
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="home-blog__cards">
          {posts.map((post) => (
            <Link href={routes.blog} className="blog-card" key={post.title}>
              <span className="blog-card__media">
                <span
                  className="blog-card__img"
                  style={{ backgroundImage: `url("${post.image}")` }}
                />
              </span>
              <span className="blog-card__cat">{post.category}</span>
              <span className="blog-card__title">{post.title}</span>
              <span className="blog-card__link" aria-hidden="true">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
