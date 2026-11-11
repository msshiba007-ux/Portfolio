export default function Timeline({ title, entries }) {
  return (
    <div className="timeline-group">
      <h3>{title}</h3>
      {entries.length ? (
        <ol className="timeline">
          {entries.map((entry, index) => (
            <li key={`${entry.title}-${index}`}>
              <p className="entry-date">{entry.date}</p>
              <h4>{entry.title}</h4>
              <p className="organization">{entry.organization}</p>
              <p>{entry.description}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p className="empty-note">
          Professional experience will be added as my journey grows.
        </p>
      )}
    </div>
  );
}
