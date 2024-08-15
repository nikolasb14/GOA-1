import React, { useState } from 'react';

function EnableButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} />
        Enable Button
      </label>
      <button disabled={!enabled}>Click Me</button>
    </div>
  );
}

export default EnableButton;
