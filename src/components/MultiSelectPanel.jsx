
export default function MultiSelectPanel({
  selectedCount,
  onCommand,
  onUndo,
  onRedo,
}) {
  return (
    <section className="panel">
      <h2>Multiple Design Selection</h2>

      <p className="meta">
        {selectedCount} design(s) selected.
      </p>

      <div className="button-row compact-buttons">
        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("left")}
        >
          Align Left
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("right")}
        >
          Align Right
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("top")}
        >
          Align Top
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("bottom")}
        >
          Align Bottom
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("distribute-h")}
        >
          Distribute Horizontally
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("distribute-v")}
        >
          Distribute Vertically
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("equal-width")}
        >
          Match Width
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("equal-height")}
        >
          Match Height
        </button>
      </div>

      <div className="button-row history-buttons">
        <button
          className="button secondary"
          type="button"
          onClick={onUndo}
        >
          Undo
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={onRedo}
        >
          Redo
        </button>
      </div>
    </section>
  );
}
