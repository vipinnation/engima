'use client';
import dynamic from 'next/dynamic';

import { Editor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';

const CreateBlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  let editor: any;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        editor = new Editor({
          content: '<p>Hello World! 🌎️</p>',
          extensions: [StarterKit]
        });

        console.log(editor);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  };

  return (
    <>
      hh
      {isLoading == false ? <EditorContent editor={editor} className="bg-white" /> : null}
    </>
  );
};

export default CreateBlogPage;
