import { allContents } from 'content-collections';

export function App() {
  return (
    <ul>
      {allContents.map((content) => (
        <li key={content._meta.path}>
          <a href={`/posts/${content._meta.path}`}>
            <h3>{content.title}</h3>
            <p>{content.summary}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
