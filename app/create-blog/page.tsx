"use client";
import React, { useState } from "react";
import { BlockNoteEditor, Block } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "../../node_modules/@blocknote/react/dist/style.css";
type Props = {};

const CreateBlogPage = (props: Props) => {
  const [blocks, setBlocks] = useState<Array<any> | null>(null);

  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (editor: any) => {
      const blocks = editor.topLevelBlocks;
      console.log("Content was changed:", blocks);
      setBlocks(editor.topLevelBlocks);
    },
  });
  const contentEditor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (editor: any) => {
      const blocks = editor.topLevelBlocks;
      console.log("Content was changed:", blocks);
      setBlocks(editor.topLevelBlocks);
    },
  });

  return (
    <div className="h-full mb-12">
      <h2 className="text-center text-2xl font-semibold pt-2 pb-3">
        Write a new story
      </h2>
      <div className=" w-1/2 mx-auto">
        <p className="text-left text-md font-semibold">Title</p>
        <div className="border-2 rounded-sm">
          <BlockNoteView
            editor={editor}
            className="w-full bg-gray-100 w-full"
            theme={"light"}
          />
        </div>
      </div>

      <div className="pt-4 w-1/2 mx-auto">
        <p className="text-left text-md font-semibold">
          Your Content goes here
        </p>
        <div className="border-2 rounded-sm">
          <BlockNoteView
            editor={contentEditor}
            className="w-full bg-gray-100 w-full overflow-y-scroll"
            theme={"light"}
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto">
        <button className="w-full border rounded-sm text-center py-1.5  bg-black hover:bg-black-400 text-white my-4">Submit</button>
      </div>
    </div>
  );
};

export default CreateBlogPage;
