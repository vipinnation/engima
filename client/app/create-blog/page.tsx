"use client";
import React, { useState } from "react";
import { BlockNoteEditor, Block } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "../../node_modules/@blocknote/react/dist/style.css";
import { Button } from "@/components/ui/button";
type Props = {};

const CreateBlogPage = (props: Props) => {
  const [content, setContent] = useState<any>([]);
  const [bodyContent, setBodyContent] = useState<Array<any>>([]);

  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: async (editor: any) => {
      const blocks = editor.topLevelBlocks;
      setContent(JSON.stringify(blocks, null, 2));
    },
  });
  const contentEditor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (editor: any) => {
      const blocks = editor.topLevelBlocks;
      console.log("Content was changed:", blocks);
    },
  });

  const onChange = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full mb-12 dark:text-white">
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
            onChange={onChange}
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
        <Button
          type="submit"
          className="w-full rounded-md my-2 dark:bg-white dark:text-black text-white"
        >
          Submit
        </Button>
      </div>

      <DataToHTML data={content} />
    </div>
  );
};

export default CreateBlogPage;

interface Pro {
  data: string | any[];
}

const DataToHTML: React.FC<Pro> = ({ data }) => {
  let jsonData: any[];

  if (Array.isArray(data)) {
    jsonData = data;
  } else {
    try {
      jsonData = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  }

  const htmlContent = jsonData.map((item) => {
    const { id, type, props, content } = item;

    let HeadingTag: keyof JSX.IntrinsicElements = "div";
    switch (props.level) {
      case 1:
        HeadingTag = "h1";
        break;
      case 2:
        HeadingTag = "h2";
        break;
      case 3:
        HeadingTag = "h3";
        break;
    }

    const styles: React.CSSProperties = {
      color: props.textColor,
      backgroundColor: props.backgroundColor,
      textAlign: props.textAlignment,
    };

    return (
      <div key={id} style={styles}>
        {type === "heading" && content.length > 0 ? (
          <HeadingTag>{content[0].text}</HeadingTag>
        ) : (
          <p>{content.map((c: any) => c.text).join("")}</p>
        )}
      </div>
    );
  });

  console.log("HTML Contnet ", htmlContent);

  return <>{htmlContent}</>;
};
