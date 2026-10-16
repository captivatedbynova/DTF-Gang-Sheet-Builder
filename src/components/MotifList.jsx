
import { useState } from "react";
import { getItemPrintedSizeCm } from "../lib/pricing.js";
import QualityWarning from "./QualityWarning.jsx";

const CM_PER_INCH = 2.54;

function DesignCard({
  group,
  sheetDpi,
  selectedId,
  onSelect,
  onDuplicate,
  onDelete,
  onDeleteGroup,
  onQuantityChange,
  onTrimGroup,
  onSizeChange,
}) {
  const [keepProportions, setKeepProportions] = useState(true);

  const item = group.items[0];
  const size = getItemPrintedSizeCm(item, sheetDpi);

  const widthInches = size.widthCm / CM_PER_INCH;
  const heightInches = size.heightCm / CM_PER_INCH;

  const isSelected = group.items.some(
    (entry) => entry.id === selectedId
  );

  function updateDimension(dimension, value) {
    const numericValue = Number(value);

    if (!Number.isFinite(numericValue) || numericValue <= 0) {
      return;
    }

    if (onSizeChange) {
      onSizeChange(
        group.key,
        dimension,
        numericValue,
        keepProportions
      );
    }
  }

  return (
    <article
      className={`motif-card ${isSelected ? "active" : ""}`}
    >
      <img src={item.src} alt={item.name} />

      <div className="motif-info">
        <strong>{item.name}</strong>

        <span>
          {widthInches.toFixed(2)}" × {heightInches.toFixed(2)}"
        </span>

        <span>Quantity: {group.items.length}</span>
        <span>Rotation: {Math.round(item.rotation || 0)}°</span>

        <QualityWarning item={item} dpi={sheetDpi} />
      </div>

      <div
        style={{
          gridColumn: "1 / -1",
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          background: "var(--bg, #f4f6f8)",
          boxSizing: "border-box",
        }}
      >
        <strong>Set Your Print Size</strong>

        <p className="meta small">
          Enter your desired printed dimensions in inches.
          All copies of this design will be updated.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <label className="field">
            <span>Width (inches)</span>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={Number(widthInches.toFixed(2))}
              onChange={(event) =>
                updateDimension("width", event.target.value)
              }
            />
          </label>

          <label className="field">
            <span>Height (inches)</span>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={Number(heightInches.toFixed(2))}
              onChange={(event) =>
                updateDimension("height", event.target.value)
              }
            />
          </label>
        </div>

        <label
          className="toggle-line"
          style={{ marginTop: "10px" }}
        >
          <input
            type="checkbox"
            checked={keepProportions}
            onChange={(event) =>
              setKeepProportions(event.target.checked)
            }
          />
          <span>Keep Proportions (Recommended)</span>
        </label>

        <p className="meta small">
          Keep this checked to avoid stretching your design.
        </p>
      </div>

      <label
        className="field compact-field"
        style={{ gridColumn: "1 / -1" }}
      >
        <span>Number of Copies</span>
        <input
          type="number"
          min="0"
          step="1"
          value={group.items.length}
          onChange={(event) =>
            onQuantityChange(
              group.key,
              Number(event.target.value)
            )
          }
        />
      </label>

      <div
        className="button-row compact-buttons"
        style={{ gridColumn: "1 / -1" }}
      >
        <button
          className="button secondary"
          type="button"
          onClick={() => onSelect(item.id)}
        >
          Select
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onDuplicate(item.id)}
        >
          Duplicate
        </button>

        {onTrimGroup && (
          <button
            className="button secondary"
            type="button"
            onClick={() => onTrimGroup(group.key)}
          >
            Trim Transparent Edges
          </button>
        )}

        <button
          className="button danger"
          type="button"
          onClick={() => onDelete(item.id)}
        >
          Delete One
        </button>

        <button
          className="button danger"
          type="button"
          onClick={() => onDeleteGroup(group.key)}
        >
          Delete All Copies
        </button>
      </div>
    </article>
  );
}

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
  onSizeChange,
}) {
  return (
    <section className="panel">
      <h2>Uploaded Designs & Print Sizes</h2>

      <p className="meta small">
        Set the exact print size for each design below.
        Keep proportions locked to prevent stretching.
      </p>

      {groups.length === 0 ? (
        <p className="meta">No designs uploaded yet.</p>
      ) : (
        <div className="motif-list">
          {groups.map((group) => (
            <DesignCard
              key={group.key}
              group={group}
              sheetDpi={sheetDpi}
              selectedId={selectedId}
              onSelect={onSelect}
              onDuplicate={onDuplicate}
              onDelete={onDelete}
              onDeleteGroup={onDeleteGroup}
              onQuantityChange={onQuantityChange}
              onTrimGroup={onTrimGroup}
              onSizeChange={onSizeChange}
            />
          ))}
        </div>
      )}
    </section>
  );
}
