
const SIZE_PRESETS = [
  { label: "Small Chest", widthCm: 8 },
  { label: "Standard Chest", widthCm: 10 },
  { label: "Sleeve", widthCm: 7 },
  { label: "Youth Shirt", widthCm: 18 },
  { label: "Large Back", widthCm: 28 },
  { label: "A4 Width", widthCm: 21 },
];

export default function ExportPanel({
  selectedItem,
  selectedSizeCm,
  aspectUnlocked,
  onAspectUnlockedChange,
  onDelete,
  onDuplicate,
  onUpdateSelected,
  onUpdateSelectedSizeCm,
  onExportPng,
  onExportAllPng,
  sheetsCount,
  onExportZip,
  onSaveProject,
  guideSettings,
  onGuideSettingsChange,
}) {
  return (
    <>
      <section className="panel">
        <h2>Selected Design</h2>
        {selectedItem ? (
          <>
            <p className="selected-name">{selectedItem.name}</p>

            <label className="field">
              <span>Rotation</span>
              <input
                type="number"
                step="1"
                value={Math.round(selectedItem.rotation)}
                onChange={(event) =>
                  onUpdateSelected({
                    rotation: Number(event.target.value),
                  })
                }
              />
            </label>

            <label className="field">
              <span>Width (cm)</span>
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={selectedSizeCm.widthCm.toFixed(1)}
                onChange={(event) =>
                  onUpdateSelectedSizeCm({
                    widthCm: Number(event.target.value),
                  })
                }
              />
            </label>

            <label className="field">
              <span>Height (cm)</span>
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={selectedSizeCm.heightCm.toFixed(1)}
                onChange={(event) =>
                  onUpdateSelectedSizeCm({
                    heightCm: Number(event.target.value),
                  })
                }
              />
            </label>

            <label className="toggle-line">
              <input
                type="checkbox"
                checked={aspectUnlocked}
                onChange={(event) =>
                  onAspectUnlockedChange(event.target.checked)
                }
              />
              <span>Unlock Aspect Ratio</span>
            </label>

            <div
              className="preset-grid"
              aria-label="Design Size Presets"
            >
              {SIZE_PRESETS.map((preset) => (
                <button
                  className="button secondary small-button"
                  type="button"
                  key={preset.label}
                  onClick={() =>
                    onUpdateSelectedSizeCm({
                      widthCm: preset.widthCm,
                    })
                  }
                >
                  {preset.label} - {preset.widthCm} cm
                </button>
              ))}
            </div>

            <div className="button-row">
              <button
                className="button secondary"
                type="button"
                onClick={onDuplicate}
              >
                Duplicate
              </button>

              <button
                className="button danger"
                type="button"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <p className="meta">No design selected.</p>
        )}
      </section>

      <section className="panel">
        <h2>Preview</h2>

        <label className="toggle-line">
          <input
            type="checkbox"
            checked={guideSettings.whiteUnderbase}
            onChange={(event) =>
              onGuideSettingsChange({
                whiteUnderbase: event.target.checked,
              })
            }
          />
          <span>Preview White Underbase</span>
        </label>

        <p className="meta small">
          White underbase is for preview purposes only.
          Your printing software will handle the actual
          white ink underbase.
        </p>
      </section>

      <section className="panel">
        <h2>Download Your Gang Sheet</h2>

        <label className="toggle-line">
          <input
            type="checkbox"
            checked={guideSettings.exportGuides}
            onChange={(event) =>
              onGuideSettingsChange({
                exportGuides: event.target.checked,
              })
            }
          />
          <span>Include Guide Lines in Export</span>
        </label>

        <button
          className="button primary"
          type="button"
          onClick={onExportPng}
        >
          Download PNG (Current Sheet)
        </button>

        {sheetsCount > 1 && (
          <button
            className="button secondary full"
            type="button"
            onClick={onExportAllPng}
          >
            Download All {sheetsCount} Sheets as PNG
          </button>
        )}

        <button
          className="button secondary full"
          type="button"
          onClick={onExportZip}
        >
          Download ZIP
        </button>

        <button
          className="button secondary full"
          type="button"
          onClick={onSaveProject}
        >
          Save Your Project
        </button>

        <div
          style={{
            marginTop: "16px",
            paddingTop: "12px",
            borderTop: "1px solid #dddddd",
          }}
        >
          <h3>Ready to Order?</h3>

          <p className="meta small">
            Download your completed gang sheet PNG first.
            Then click below to choose your sheet length,
            upload your finished PNG, and complete checkout.
          </p>

          <a
            href="https://www.captivatedbynova.com/product-page/build-your-own-dtf-gang-sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="button primary full"
            style={{
              display: "block",
              textAlign: "center",
              textDecoration: "none",
              marginTop: "12px",
              backgroundColor: "#83175B",
              color: "#ffffff",
              padding: "14px",
              borderRadius: "8px",
              fontWeight: "bold",
              boxSizing: "border-box",
            }}
          >
            Order Your Finished Gang Sheet
          </a>
        </div>
      </section>
    </>
  );
}
