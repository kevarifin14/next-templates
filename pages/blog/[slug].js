import ReactMarkdown from 'react-markdown';

import Container from 'components/Container';
import { getContent, listContent } from 'utils';

export default function Post({ frontmatter, content }) {
  const { title } = frontmatter;

  return (
    <Container title={title}>
      <ReactMarkdown
        escapeHtml={false}
        source={content}
      />
    </Container>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const { content, data: frontmatter } = getContent('blog', `${slug}.md`);
  return { props: { content, frontmatter } };
}

export async function getStaticPaths() {
  const markdownFilenames = listContent('blog');
  return {
    paths: markdownFilenames.map((filename) => ({ params: { slug: filename } })),
    fallback: false,
  };
}
