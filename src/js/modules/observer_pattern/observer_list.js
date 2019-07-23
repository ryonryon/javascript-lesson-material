class ObserverList{
    constructor() {
        this.observerList = [];
    }

    add(obj) {
        return this.observerList.push(obj);
    }

    empty() {
        this.observerList = [];
    }

    count(){
        return this.observerList.length;
    }

    get(index) {
        if(index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

    insert(obj, index) {
        let pointer = -1;
        if(index === 0) {
            this.observerList.unshift(obj);
        } else if(index === this.observerList.length) {
            this.observerList.push(obj);
        }
        pointer = index;
        return pointer;
    }

    indexOf(obj, startIndex) {
        let i = startIndex;
        let pointer = -1;
        while(i < this.observerList.length) {
            if(this.observerList[i] === obj) {
                pointer = i;
            }
            i++;
        }
    
        return pointer
    }

};

const extend = (obj, extension) => {
    for(var key in obj) {
        extension[key] = obj[key];
    }
}
