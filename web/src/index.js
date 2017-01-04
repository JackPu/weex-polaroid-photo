'use strict'


const proto = {
  create () {
    this.node = document.createElement('div');
    this.inner = new Image();
    this.inner.style.marginBottom = '10px';
    this.node.style.padding = "5px 5px 10px 5px"; 
    this.node.style.textAlign = "center"; 
    this.node.style.border = '1px solid #ccc';
    this.node.appendChild(this.inner);
    this.node.appendChild(document.createElement('div'));
  
    return this.node 
  }
}

// attribute setters.
const attr = {
  text (val) {
    let text = document.createTextNode(val);
    this.node.appendChild(text);
  },
  
  imgsrc(val) {
    this.inner.src = val;
  }
}

// style setters.
const style = {
  txtColor (val) {
    this.inner.style.color = val
  }
}

// event config.
const event = {
  click: {
    extra () {
      return {
        value: this.inner.textContent
      }
    }
  }
}

function init (Weex) {
  const Component = Weex.Component;
  const extend = Weex.utils.extend;

  function PolaroidPhoto (data) {
    Component.call(this, data);
  }

  PolaroidPhoto.prototype = Object.create(Component.prototype);
  extend(PolaroidPhoto.prototype, proto);
  extend(PolaroidPhoto.prototype, { attr });
  extend(PolaroidPhoto.prototype, {
    style: extend(Object.create(Component.prototype.style), style)
  });
  extend(PolaroidPhoto.prototype, { event });

  Weex.registerComponent('weex-polaroid-photo', PolaroidPhoto);
}

export default { init }