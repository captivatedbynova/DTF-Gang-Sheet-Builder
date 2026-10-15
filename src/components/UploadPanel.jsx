export default function UploadPanel({
  onUpload,
  onDropFiles,
  onLoadProject,
  onRestoreAutosave,
  onClearAutosave,
}) {
  const handleDrop = (event) => {
    event.preventDefault();
    onDropFiles(event.dataTransfer.files);
  };

  return (
    <section className="panel">
      <h2>Upload</h2>
      <label
        className="dropzone"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <input type="file" accept="image/png" multiple onChange={onUpload} />
        <span>Upload PNG Designs or Drag & Drop Here</span>
      </label>
      <div className="button-row">
        <label className="button file-button">
          Load Saved Project
          <input type="file" accept="application/json,.json" onChange={onLoadProject} />
        </label>
        <button className="button secondary" type="button" onClick={onRestoreAutosave}>
          Restore Saved Project
        </button>
      </div>
      <button className="button secondary full" type="button" onClick={onClearAutosave}>
        Clear Saved Project
      </button>
    </section>
  );
}
