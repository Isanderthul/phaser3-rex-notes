import GetChildrenWidth from './GetChildrenWidth.js';
import GetChildrenHeight from './GetChildrenHeight.js';
import GetChildrenSizers from './GetChildrenSizers.js';
import Layout from './Layout.js';
import _layoutInit from './_layoutInit.js';
import AddChildMethods from './AddChildMethods.js';
import RemoveChildMethods from './RemoveChildMethods.js';
import SetChildrenInteractive from '../utils/setchildreninteractive/SetChildrenInteractive.js';

var methods = {
    getChildrenWidth: GetChildrenWidth,
    getChildrenHeight: GetChildrenHeight,
    getChildrenSizers: GetChildrenSizers,
    layout: Layout,
    _layoutInit: _layoutInit,

    setChildrenInteractive: SetChildrenInteractive
};

Object.assign(
    methods,
    AddChildMethods,
    RemoveChildMethods
);

export default methods;