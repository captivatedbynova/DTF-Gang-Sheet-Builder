const STEPS = [
  'Upload your PNG designs or drag and drop them here',
  'Choose your gang sheet size and check the dimensions',
  'Arrange your designs manually or use Auto Arrange',
  'Review image quality, pricing, and ink usage',
  'Export your finished gang sheet as PNG or ZIP',
];

const SHORTCUTS = [
  ['Ctrl + Z', 'Undo'],
  ['Ctrl + Y', 'Redo'],
  ['Delete', 'Delete selected design'],
  ['Shift + Click', 'Select multiple designs'],
  ['Ctrl + V', 'Paste PNG from clipboard'],
];

export default function QuickStartPanel() {
  return (
    <section className="panel quickstart-panel">
      <h2>How to Get Started</h2>
      <ol className="compact-list">
        {STEPS.map((step) => <li key={step}>{step}</li>)}
      </ol>
      <details className="details-box">
        <summary>Show Keyboard Shortcuts</summary>
        <dl className="shortcut-list">
          {SHORTCUTS.map(([keys, label]) => (
            <div key={keys}>
              <dt>{keys}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </details>
    </section>
  );
}
