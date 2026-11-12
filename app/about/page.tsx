const commits = [
  { hash: "2c469e7", date: "2026-10-31", message: "edit product server action" },
  { hash: "ca60651", date: "2026-10-31", message: "navbar layout component" },
  { hash: "433f983", date: "2026-10-30", message: "clean setup" },
  { hash: "832aeee", date: "2026-10-30", message: "Ignore local environment secrets" },
  { hash: "3166976", date: "2026-10-30", message: "Merge remote-tracking branch 'sanitized-remote/main'" },
  { hash: "720b588", date: "2026-10-30", message: "product creation and delete" },
  { hash: "e96e9d2", date: "2026-10-30", message: "Merge branch 'main' of github.com:gm485/rich_web_lab_app" },
  { hash: "d3d8a8b", date: "2026-10-30", message: "product creation and deletion" },
  { hash: "8233db3", date: "2026-10-30", message: "create delete server actions" },
  { hash: "c1e508c", date: "2026-10-30", message: "get all products" },
  { hash: "313add2", date: "2026-10-30", message: "recipes form event unfinisehd" },
  { hash: "2a5c1f3", date: "2026-10-29", message: "pocketbase db setup" },
];

export default function AboutPage() {
  return (
    <section className="aboutSection" aria-labelledby="commits-title">
      <h2 id="commits-title">Git commits</h2>
      <ol className="commitList">
        {commits.map(({ hash, date, message }) => (
          <li className="commitItem" key={hash}>
            <code>{hash}</code>
            <span className="commitMessage">{message}</span>
            <time dateTime={date}>{date}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}
