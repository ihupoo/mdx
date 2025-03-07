// TypeScript Version: 3.4

import {Plugin, Compiler, Processor} from 'unified'

declare namespace mdx {
  interface Options {
    /**
     * Path on disk to processed file
     * @default undefined
     */
    filepath?: string

    /**
     * skip the addition of 'export default' statement when serializing
     * to JSX
     * @default false
     */
    skipExport?: boolean

    /**
     * wrap 'export default' statement with provided string when serializing
     * to JSX
     */
    wrapExport?: string

    /**
     * remark plugins to transform markdown content
     *
     * @default []
     */
    remarkPlugins?: Plugin[]

    /**
     * rehype plugins html content
     *
     * @default []
     */
    rehypePlugins?: Plugin[]
  }

  /**
   * compile mdx text to jsx text asynchronously
   *
   * @param mdx content as a text
   * @param options transform and compiler options
   * @returns jsx text
   */
  function sync(mdx: string, options?: Options): string

  /**
   * Generated an MDX AST compiler
   *
   * @param options transform and compiler options
   * @returns Unified Processor for MDX
   */
  function createMdxAstCompiler(options?: Options): Processor

  /**
   * Generated an MDX compiler
   *
   * @param options transform and compiler options
   * @returns Unified Processor for MDX
   */
  function createCompiler(options?: Options): Processor
}

/**
 * compile mdx text to jsx text asynchronously
 *
 * @param mdx content as a text
 * @param options transform and compiler options
 * @returns jsx text
 */
declare function mdx(mdx: string, options?: mdx.Options): Promise<string>

export = mdx
