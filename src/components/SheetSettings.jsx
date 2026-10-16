
export default function SheetSettings({ settings, sheetPixels, onChange }) {
  return (
    <section className="panel">
      <h2>Sheet Settings</h2>

      <label className="field">
        <span>Sheet Width (inches)</span>
        <input
          type="number"
          min="1"
          step="0.01"
          value={Number((settings.widthCm / 2.54).toFixed(2))}
          onChange={(event) =>
            onChange({
              widthCm: Number(event.target.value) * 2.54,
            })
          }
        />
      </label>

      <label className="field">
        <span>Sheet Length (inches)</span>
        <input
          type="number"
          min="1"
          step="0.01"
          value={Number((settings.heightCm / 2.54).toFixed(2))}
          onChange={(event) =>
            onChange({
              heightCm: Number(event.target.value) * 2.54,
            })
          }
        />
      </label>

      <label className="field">
        <span>DPI</span>
        <input
          type="number"
          min="72"
          step="1"
          value={settings.dpi}
          onChange={(event) =>
            onChange({
              dpi: Number(event.target.value),
            })
          }
        />
      </label>

      <p className="meta">
        Export Size: {sheetPixels.widthPx} x {sheetPixels.heightPx} px
      </p>
    </section>
  );
}
