export const TEMPLATES = [
  { id: 'roll-56', label: '22" Wide Gang Sheet', widthCm: 56 },
  { id: 'roll-60', label: '23.6" Wide Gang Sheet', widthCm: 60 },
  { id: 'a4', label: 'A4', widthCm: 21, heightCm: 29.7 },
  { id: 'a3', label: 'A3', widthCm: 29.7, heightCm: 42 },
  { id: 'custom', label: 'Custom Size' },
];

export default function TemplateSelector({ value, onChange }) {
  return (
    <section className="panel">
      <h2>Gang Sheet Templates</h2>
      <label className="field">
        <span>Select Your Sheet Width</span>
        <select
          value={value}
          onChange={(event) => {
            const template = TEMPLATES.find((entry) => entry.id === event.target.value);
            onChange(template || TEMPLATES[TEMPLATES.length - 1]);
          }}
        >
          {TEMPLATES.map((template) => (
            <option key={template.id} value={template.id}>
              {template.label}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
