'use client';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';

type Props = {
  isEditable?: true | false;
  onChange?: (data: any) => void;
};

async function uploadFile(file: File) {
  const body = new FormData();
  body.append('file', file);

  const ret = await fetch('https://tmpfiles.org/api/v1/upload', {
    method: 'POST',
    body: body
  });
  return (await ret.json()).data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
}

const Editor: React.FC<Props> = ({ isEditable = true, onChange }) => {
  const editor = useCreateBlockNote({
    uploadFile
  });

  const dataChange = () => {
    if (onChange) onChange(editor.document);
  };
  return (
    <BlockNoteView
      editor={editor}
      editable={isEditable}
      className="w-full bg-gray-100 w-full rounded-sm"
      theme={'light'}
      onChange={dataChange}
    />
  );
};

export default Editor;
