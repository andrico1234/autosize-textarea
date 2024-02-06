class AutosizeTextarea extends HTMLElement {
  static register(tagName = 'autosize-textarea') {
    if ("customElements" in window) {
      customElements.define(tagName, this);
    }
  }

  handleTextareaChange(e) {
    const target = e.target;
    const computed = window.getComputedStyle(target);
    const borderTop = computed.borderTopWidth;
    const borderBottom = computed.borderBottomWidth;
    const borderHeight = parseFloat(borderTop) + parseFloat(borderBottom);

    // Because the scrollheight won't decrease after its grown, we reset the height to 0 on every change
    target.style.height = '0px';

    const scrollHeight = target.scrollHeight;
    const totalNewHeight = borderHeight + scrollHeight;
    target.style.height = `${totalNewHeight}px`;
  }

  connectedCallback() {
    const textareaEl = this.querySelector('textarea');

    if (document.readyState === "loading") {
      return document.addEventListener("readystatechange", this.connectedCallback.bind(this), { once: true })
    }

    if (textareaEl) {
      textareaEl.style.resize = 'none';
      textareaEl.addEventListener('input', this.handleTextareaChange);
      textareaEl.setAttribute('rows', '1')
    } else {
      console.warn('No textarea element found in autosize-textarea');
    }
  }

  disconnectedCallback() {
    const textareaEl = this.querySelector('textarea');

    if (textareaEl) {
      textareaEl.removeEventListener('input', this.handleTextareaChange);
    }
  }
}

AutosizeTextarea.register();
