
const CM_PER_INCH = 2.54;
const SHEET_WIDTH_CM = 56;

const GANG_SHEET_LENGTHS = [
  ...Array.from({ length: 33 }, (_, index) => (index + 1) * 12),
  400,
];

export const TEMPLATES = [
  {
    id: "roll-56",
    label: '22" Wide Gang Sheet',
    widthCm: SHEET_WIDTH_CM,
    heightCm: 100,
  },
  ...GANG_SHEET_LENGTHS.map((length) => ({
    id: `gang-${length}`,
    label: `22" x ${length}" Gang Sheet`,
    widthCm: SHEET_WIDTH_CM,
    heightCm: length * CM_PER_INCH,
  })),
  {
    id: "roll-60",
    label: '23.6" Wide Gang Sheet',
    widthCm: 60,
  },
  {
    id: "a4",
    label: "A4",
    widthCm: 21,
    heightCm: 29.7,
  },
  {
    id: "a3",
    label: "A3",
    widthCm: 29.7,
    heightCm: 42,
  },
  {
    id: "custom",
    label: "Custom Size",
  },
];

export default function TemplateSelector({ value, onChange }) {
  return (
    <section className="panel">
      <h2>Gang Sheet Size</h2>

      <label className="field">
        <span>Select Your Gang Sheet Size</span>

        <select
          value={value}
          onChange={(event) => {
            const template =
              TEMPLATES.find(
                (entry) => entry.id === event.target.value
              ) || TEMPLATES[0];

            onChange(template);
          }}
        >
          {TEMPLATES.map((template) => (
            <option
              key={template.id}
              value={template.id}
            >
              {template.label}
            </option>
          ))}
        </select>
      </label>

      <p className="meta small">
        Choose the exact sheet length you plan to purchase.
        Download your completed PNG before proceeding to checkout.
        Your selected sheet size must match your purchased size.
      </p>
    </section>
  );
}
