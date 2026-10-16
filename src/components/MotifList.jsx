import { getItemPrintedSizeCm } from '../lib/pricing.js';
import QualityWarning from './QualityWarning.jsx';

export default function MotifList({
  groups,
  sheetDpi,
  selectedId,
  onSelect,
  onDuplicate,
  onDelete,
  onDeleteGroup,
  onQuantityChange,
  onTrimGroup,
}) {
  return (
    <section className="panel">
      <h2>Uploaded Designs</h2>
      {groups.length === 0 ? (
        <p className="meta">No designs uploaded yet.</p>
      ) : (
        <div className="motif-list">
          {groups.map((group) => {
            const item = group.items[0];
            const size = getItemPrintedSizeCm(item, sheetDpi);
            return (
              <article
                className={`motif-card ${group.items.some((entry) => entry.id === selectedId) ? 'active' : ''}`}
                key={group.key}
              >
                <img src={item.src} alt="" />
                <div className="motif-info">
                  <strong>{item.name}</strong>
                  <span>
                    {(size.widthCm / 2.54).toFixed(2)}" x {(size.heightCm / 2.54).toFixed(2)}"
                  </span>
                  <span>Quantity {group.items.length}</span>
                  <span>Rotation {Math.round(item.rotation || 0)} Grad</span>
                  <QualityWarning item={item} dpi={sheetDpi} />
                </div>
                <label className="field compact-field">
                  <span>Quantity</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={group.items.length}
                    onChange={(event) => onQuantityChange(group.key, Number(event.target.value))}
                  />
                </label>
                <div className="button-row compact-buttons">
                  <button className="button secondary" type="button" onClick={() => onSelect(item.id)}>
                    Select
                  </button>
                  <button className="button secondary" type="button" onClick={() => onDuplicate(item.id)}>
                    Duplicate
                  </button>
                  {onTrimGroup && (
                    <button className="button secondary" type="button" onClick={() => onTrimGroup(group.key)}>
                      Trim Transparent Edges
                    </button>
                  )}
                  <button className="button danger" type="button" onClick={() => onDelete(item.id)}>
                    Delete
                  </button>
                  <button className="button danger" type="button" onClick={() => onDeleteGroup(group.key)}>
                    Delete All
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
