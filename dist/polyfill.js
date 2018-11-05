export function polyfill(mathNode) {
    const root = document.createElement(getCustomElementName(mathNode));
    polyfillChildren(root, mathNode);
    const parent = mathNode.parentElement;
    if (parent) {
        mathNode.insertAdjacentElement('beforebegin', root);
        parent.removeChild(mathNode);
    }
    return root;
}
function polyfillChildren(target, current) {
    const children = current.childNodes;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        switch (child.nodeType) {
            case Node.TEXT_NODE:
                if (child.nodeValue) {
                    const txt = document.createTextNode(child.nodeValue);
                    target.appendChild(txt);
                }
                break;
            case Node.ELEMENT_NODE:
                const childElement = child;
                const n = document.createElement(getCustomElementName(childElement));
                const attrs = childElement.attributes;
                if (attrs && attrs.length) {
                    for (let x = 0; x < attrs.length; x++) {
                        const attr = attrs[x];
                        n.setAttribute(attr.name, attr.value);
                    }
                }
                polyfillChildren(n, childElement);
                target.appendChild(n);
                break;
            default:
                break;
        }
    }
}
function getCustomElementName(node) {
    const name = node.tagName.toLowerCase().trim();
    switch (name) {
        case 'math':
            return 'math-ml';
        case 'none':
            return 'm-none';
        default:
            if (name.indexOf('m') === 0) {
                return `m-${name.substring(1)}`;
            }
            break;
    }
    return name;
}
// Check adapted from https://developer.mozilla.org/en-US/docs/Web/MathML/Authoring
function hasMathMLSupport() {
    const div = document.createElement('div');
    div.innerHTML = "<math><mspace height='23px' width='77px'/></math>";
    document.body.appendChild(div);
    const box = div.firstChild && div.firstChild.firstChild && div.firstChild.firstChild.getBoundingClientRect();
    document.body.removeChild(div);
    return box && (Math.abs(box.height - 23) <= 1) && (Math.abs(box.width - 77) <= 1);
}
(() => {
    if (!hasMathMLSupport()) {
        const mathNodes = document.querySelectorAll('math');
        if (mathNodes && mathNodes.length) {
            for (let i = 0; i < mathNodes.length; i++) {
                polyfill(mathNodes[i]);
            }
        }
    }
})();
