declare module 'pdfjs-dist/build/pdf.worker.js' {
    const workerSrc: string;
    export default workerSrc;
  }
  
  declare module 'pdfjs-dist/legacy/build/pdf' {
    import * as pdfjsLib from 'pdfjs-dist';
    export = pdfjsLib;
  }
  
// declarations.d.ts

declare module 'pdfjs-dist/legacy/build/pdf' {
    import * as pdfjsLib from 'pdfjs-dist';
    export = pdfjsLib;
  }
  
  declare module '/pdf.worker.js' {
    const src: string;
    export default src;
  }
  
  // src/types/pdf-worker.d.ts
declare module 'pdfjs-dist/build/pdf.worker.entry' {
    const workerSrc: string;
    export default workerSrc;
  }
  