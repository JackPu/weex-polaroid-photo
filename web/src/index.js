'use strict'


const proto = {
  create () {
    const node = document.createElement('div');
    this.inner = document.createElement('img');
    this.inner.style.marginBottom = '5px';
    node.style.padding = "5px 5px 20px 5px"; 
    node.style.border = '1px solid #ddd;';
    node.style.boxShadow = '0 2px 5px rgba(0,0,0,.15)';
    node.style.textAlign = "center"; 
    node.appendChild(this.inner);
    this.text = document.createTextNode(this.value);
    node.appendChild(this.text)
    return node
  }
}

// attribute setters.
const attr = {
  text (val) {
    this.value = val
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