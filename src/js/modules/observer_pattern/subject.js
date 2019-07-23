class Subject {
    constructor() {
        this.observers = new ObserverList();
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeIndexObserver(observer) {
        this.observers.removeIndexAt(this.observers.indexOf(observer, 0));
    }

    notify(context) {
        var observerCount = this.observers.count();
        for(var i = 0; i < observerCount; i++) {
            this.observers.get(i).update(context);
        }
    }

    fetchData() {

        const data = {
            apple: "red",
            strawberry: "red",
            banana: "yellow"
        }

        observerList.notify(data)
    }    
}