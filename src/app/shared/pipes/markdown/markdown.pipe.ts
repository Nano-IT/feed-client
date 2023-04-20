import {OnInit, Pipe, PipeTransform} from '@angular/core';
import {marked} from 'marked';

import highlight from 'highlight.js';
@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform, OnInit {
  ngOnInit() {
    highlight.initHighlighting()
  }

  transform(value: any, args?: any[]): any {
    if (value && value.length > 0) {
      return marked(value, {
        highlight: (value) => highlight.highlightAuto(value, ).value,
      });
    }
    return value;
  }
}
