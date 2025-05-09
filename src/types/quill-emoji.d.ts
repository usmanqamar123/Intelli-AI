declare module 'quill-emoji' {
  import Quill from 'quill';
  class EmojiBlot extends Quill.import('blots/block') {
    static blotName: string;
    static tagName: string;
    static create(value: any): any;
    static formats(node: any): any;
    format(name: string, value: any): void;
  }
  export { EmojiBlot };
}
