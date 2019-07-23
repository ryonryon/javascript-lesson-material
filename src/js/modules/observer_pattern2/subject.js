class Subject {
    constructor() {
        this.observerList = new ObserverList2();
    }

    addObserver(obj) {
        this.observerList.add(obj);
    }

    removeObserver(obj) {
        this.observerList.remove(obj);
    }

    fetchData() {
        const data = {
            apple: "red",
            strawberry: "red",
            banana: "yellow"
        };

        this.observerList.notify(data);
    }
}

const dataUpdated = {
    update: function() {
        console.log("DataUpdated")
    }
};

const dataPublished = {
    update: function() {
        console.log("DataPublished")
    }
};