import moment from 'moment';
import Link from 'next/link';

import Container from 'components/Container';
import { listContentMetadata } from 'utils';

export default function Blog({ posts }) {
  return (
    <Container title="Blog">
      {posts.map(({ slug, title }) => (
        <Link href="/blog/[slug]" as={`/blog/${slug}`}>{title}</Link>))}
    </Container>
  );
}

export async function getStaticProps() {
  const posts = listContentMetadata('blog');
  const postsByDate = posts.sort(({ date: date1 }, { date: date2 }) => (
    -1 * (moment(date1) - moment(date2))
  ));

  return {
    props: { posts: postsByDate },
  };
}
