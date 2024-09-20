// A hook to copy text to the clipboard programmatically
import { useState } from 'react';

function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
    });
  };

  return { copiedText, copy };
}

export default useCopyToClipboard;
