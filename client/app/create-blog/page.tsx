'use client';
import { Button } from '@/components/ui/button';
import { BlogAPI } from '@/services/api-calls/blog.api-calls';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const Editor = dynamic(() => import('@/components/editor/editor'), { ssr: false });

const CreateBlogPage = () => {
  const [title, setTitle] = useState<any>([]);
  const [content, setContent] = useState<any>([]);

  const handleTitleChange = (data: any) => {
    try {
      let result = DataToHTML(JSON.stringify(data, null, 2));
      setTitle(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleContentChange = (data: any) => {
    try {
      let result = DataToHTML(JSON.stringify(data, null, 2));
      setContent(result);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async () => {
    try {
      let res = await BlogAPI.create({ title, content });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-full mb-12 dark:text-white">
        <h2 className="text-center text-2xl font-semibold pt-2 pb-3">Write a new story</h2>
        <div className=" w-1/2 mx-auto">
          <p className="text-left text-md font-semibold">Title</p>
          <div className="border-2 rounded-sm">
            <Editor isEditable={true} onChange={handleTitleChange} />
          </div>
        </div>

        <div className="pt-4 w-1/2 mx-auto">
          <p className="text-left text-md font-semibold">Your Content goes here</p>
          <div className="border-2 rounded-sm">
            <Editor onChange={handleContentChange} isEditable={true} />
          </div>
        </div>

        <div className="w-1/2 mx-auto">
          <Button
            type="submit"
            className="w-full rounded-md my-2 dark:bg-white dark:text-black text-white bg-primary dark:bg-white"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateBlogPage;

interface Pro {
  data: string | any[];
}

const DataToHTML = (data: any) => {
  let jsonData: any[];

  if (Array.isArray(data)) {
    jsonData = data;
  } else {
    try {
      jsonData = JSON.parse(data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;
    }
  }

  const htmlContent = jsonData.map((item) => {
    const { id, type, props, content } = item;

    let HeadingTag: any = 'div';
    switch (props.level) {
      case 1:
        HeadingTag = 'h1';
        break;
      case 2:
        HeadingTag = 'h2';
        break;
      case 3:
        HeadingTag = 'h3';
        break;
    }

    const styles = {
      color: props.textColor,
      backgroundColor: props.backgroundColor,
      textAlign: props.textAlignment
    };

    let html = `<div key="${id}" style="`;
    Object.entries(styles).forEach(([key, value]) => {
      html += `${key}:${value};`;
    });
    html += '">';

    if (type === 'heading' && content.length > 0) {
      html += `<${HeadingTag}>${content[0].text}</${HeadingTag}>`;
    } else {
      html += '<p>';
      content.forEach((c: any) => {
        html += c.text;
      });
      html += '</p>';
    }

    html += '</div>';

    return html;
  });

  console.log('HTML Content:', htmlContent);

  return htmlContent.join('');
};
