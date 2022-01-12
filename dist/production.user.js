// ==UserScript==
// @name        no-translate
// @description wip
// @namespace   github.com/backtolife2021
// @include     http*://*
// @version     0.0.0
// @homepage    https://github.com/backtolife2021/no-translate
// @author      backtolife
// @license     MIT
// @grant       none
// ==/UserScript==

/*
MIT License

Copyright (c) 2022 backtolife2021

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* globals no thing */
(function () {
    'use strict';

    const add_no_translate_class = (element) => {
        element.classList.add('notranslate');
    };
    /**
     * prism
     */
    for (const element of Array.from(document.querySelectorAll('.prism-code'))) {
        add_no_translate_class(element);
    }

})();
//# sourceMappingURL=production.user.js.map
