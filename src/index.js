import _ from  'lodash';
import './style/index.css'//打包css要安装loder => css-loader module, style-loader

import {a,b,c} from './model1'

function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['第一个','webpack','练习'], ' ')
    dom.classList.add('box')
    console.log(a)
    console.log(b)
    console.log(c)
    return dom;
}
let divDom = createDomElement();

document.body.appendChild(divDom)
