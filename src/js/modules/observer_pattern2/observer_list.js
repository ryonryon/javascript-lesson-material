class ObserverList2 {
    constructor() {
        this.observerList = [];
    }

    add(obj) {
        this.observerList.push(obj);
    }

    remove(obj) {
        for(let i = 0, len = this.observerList.length; i < len; i++) {
            if(this.observerList[i] === obj) {
                this.observerList.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    notify() {
        let args = Array.prototype.slice.call(arguments, 0);
        for (let i = 0, len = this.observerList.length; i < len; i++) {
            this.observerList[i].update.apply(null, args);
        }
    }
}