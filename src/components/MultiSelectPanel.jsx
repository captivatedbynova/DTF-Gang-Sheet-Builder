
export default function MultiSelectPanel({
  selectedCount,
  onCommand,
  canUndo,
  canRedo,
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
          onClick={() => onCommand("align-left")}
          disabled={selectedCount < 2}
        >
          Align Left
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("align-right")}
          disabled={selectedCount < 2}
        >
          Align Right
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("align-top")}
          disabled={selectedCount < 2}
        >
          Align Top
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("align-bottom")}
          disabled={selectedCount < 2}
        >
          Align Bottom
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("distribute-x")}
          disabled={selectedCount < 3}
        >
          Distribute Horizontally
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("distribute-y")}
          disabled={selectedCount < 3}
        >
          Distribute Vertically
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("same-width")}
          disabled={selectedCount < 2}
        >
          Match Width
        </button>

        <button
          className="button secondary"
          type="button"
          onClick={() => onCommand("same-height")}
          disabled={selectedCount < 2}
        >
          Match Height
        </button>
      </div>

      <div className="button-row history-buttons">
        <button
          className="button secondary"
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
        >
          Undo
        </button>
        <button
          className="button secondary"
          type="button"
          onClick={onRedo}
          disabled={!canRedo}
        >
          Redo
        </button>
      </div>
    </section>
  );
}
