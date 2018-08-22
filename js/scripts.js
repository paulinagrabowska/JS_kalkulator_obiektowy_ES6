'use strict';
(function(){
    class Calc {
        constructor(pushed, result) {
            this._pushed = document.querySelectorAll(pushed);
            this._resPlace = document.querySelector(result);
            this._assignEvents(this._pushed);
        }
        _assignEvents(pushed) {
            pushed.forEach(this._addClick, this);
        }
        _addClick(pushed) {
            pushed.addEventListener('click', this._resCalc.bind(this));
        }
        _resCalc(pushed) {
            var pushedValue = pushed.target.value;
            if (pushedValue === 'C') {
                this._resPlace.value = '';
            }
            else if (pushedValue === '=') {
                this._resPlace.value = eval(this._resPlace.value);
            }
            else {
                this._resPlace.value += pushedValue;
            }
            return this._resPlace.value;
        }
    }
    new Calc('input[type="button"]', '#res');
})();


