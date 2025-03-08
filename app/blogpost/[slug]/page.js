
import fs, { existsSync } from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkRehype from 'remark-rehype'
import remarkRetext from 'remark-retext'
import retextEnglish from 'retext-english'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import retextEquality from 'retext-equality'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/onthispage';

export default async function page({params}){
    // const blog = {
    //     title: "Typescript tutorial in hindi",
    //     author: "John Doe",
    //     description: "This is a sample blog post description.",
    //     date: "2024-09-02",
    //     content: "<p>This is the content of the blog post. It can include <strong>HTML</strong> tags and other elements.</p>"
    // };
    const filepath = `content/${params.slug}.md`
    if(!fs.existsSync(filepath)){
        return (notFound())
    }
 
    const filedata = fs.readFileSync(filepath, 'utf-8');
    const { content,data} = matter(filedata);
    const processor = unified()
    .use(remarkParse)
    .use(remarkPresetLintMarkdownStyleGuide)
    .use(remarkRetext, unified().use(retextEnglish).use(retextEquality))
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
        theme: "github-dark-dimmed",
        transformers: [
          transformerCopyButton({
            visibility: 'always',
            feedbackDuration: 3_000,
          }),
        ],
      })


    const htmlContent = (await processor.process(content)).toString()
    const a = data.title;
    return (
        <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
        <div className="flex gap-2">
            <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
            <p className="text-sm text-gray-500 mb-4">{data.date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
        {/* <div dangerouslySetInnerHTML={{ __html: data.content }} className="prose" > </div> */}
        <OnThisPage htmlContent={htmlContent} />
    </div>
    )
}