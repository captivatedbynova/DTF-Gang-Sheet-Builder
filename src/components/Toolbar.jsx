export default function Toolbar({
  gapMm,
  onGapChange,
  onArrange,
  warning,
  allowRotation,
  onAllowRotationChange,
  sortBySize,
  onSortBySizeChange,
  guideSettings,
  onGuideSettingsChange,
}) {
  return (
    <div className="toolbar">
      <label className="field field-inline">
        <span>Design Spacing (mm)</span>
        <input
          type="number"
          min="0"
          step="1"
          value={gapMm}
          onChange={(event) => onGapChange(Number(event.target.value))}
        />
      </label>
      <button className="button secondary" type="button" onClick={onArrange}>
        Auto Arrange
      </button>
      <label className="toggle-line">
        <input
          type="checkbox"
          checked={allowRotation}
          onChange={(event) => onAllowRotationChange(event.target.checked)}
        />
        <span>Allow Rotation</span>
      </label>
      <label className="toggle-line">
        <input
          type="checkbox"
          checked={sortBySize}
          onChange={(event) => onSortBySizeChange(event.target.checked)}
        />
        <span>Sort by Design Size</span>
      </label>
      <label className="toggle-line">
        <input
          type="checkbox"
          checked={guideSettings.showGapLines}
          onChange={(event) => onGuideSettingsChange({ showGapLines: event.target.checked })}
        />
        <span>Show Spacing Guides</span>
      </label>
      <label className="toggle-line">
        <input
          type="checkbox"
          checked={guideSettings.showCutLines}
          onChange={(event) => onGuideSettingsChange({ showCutLines: event.target.checked })}
        />
        <span>Show Cutting Lines</span>
      </label>
      {warning ? <span className="warning">{warning}</span> : null}
    </div>
  );
}
