import { useState } from 'react';
import { TEMPLATES } from './TemplateSelector.jsx';

export default function SheetTabs({ sheets, activeId, onSelect, onAdd, onDelete, onRename }) {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const startRename = (sheet) => {
    setEditingId(sheet.id);
    setEditName(sheet.name);
  };

  const commitRename = () => {
    if (editingId && editName.trim()) {
      onRename(editingId, editName.trim());
    }
    setEditingId(null);
    setEditName('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') commitRename();
    if (e.key === 'Escape') { setEditingId(null); setEditName(''); }
  };

  return (
    <div className="sheet-tabs">
      <div className="sheet-tab-list">
        {sheets.map((sheet) => (
          <div
            key={sheet.id}
            className={`sheet-tab ${sheet.id === activeId ? 'active' : ''}`}
            onClick={() => onSelect(sheet.id)}
          >
            {editingId === sheet.id ? (
              <input
                type="text"
                className="sheet-tab-input"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                onBlur={commitRename}
                onKeyDown={handleKeyDown}
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <>
                <span className="sheet-tab-name">{sheet.name}</span>
                {sheets.length > 1 && (
                  <button
                    className="sheet-tab-delete"
                    title="Sheet löschen"
                    onClick={(e) => { e.stopPropagation(); onDelete(sheet.id); }}
                  >
                    ×
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="sheet-tab-actions">
        
        <button
          title="Neues Sheet hinzufügen"
          onClick={() => {
            const sel = document.getElementById('add-sheet-template');
            onAdd(sel?.value || TEMPLATES[0].id);
          }}
        >
          + Sheet
        <button
  type="button"
  title="Add New Sheet"
  onClick={() => onAdd(TEMPLATES[0].id)}
>
  + Sheet
</button>