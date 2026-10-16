export default function ExportSafetyPanel({ stats }) {
  return (
    <section className="panel">
      <h2>EExport Safety</h2>
      <dl className="result-list">
        <div>
          <dt>Pixel Dimensions</dt>
          <dd>{stats.widthPx} x {stats.heightPx} px</dd>
        </div>
        <div>
          <dt>Megapixels</dt>
          <dd>{stats.megapixels.toFixed(1)} MP</dd>
        </div>
        <div>
          <dt>Estimated Memory</dt>
          <dd>{stats.ramMb.toFixed(1)} MB</dd>
        </div>
      </dl>
      {stats.isLarge ? (
        <p className="warning">Large Export Warning: This gang sheet exceeds 150 megapixels. Exporting may require significant memory and could cause your browser to slow down or crash.</p>
      ) : null}
    </section>
  );
}
