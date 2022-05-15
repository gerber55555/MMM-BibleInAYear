Module.register("MMM-BibleInAYear", {

    start: function() {
        Log.log('Starting module: ' + this.name);
        Log.log(BIBLE_PLAN)
        this.bible = BIBLE_PLAN
        Log.log(this.bible)
        this.bibleReading = null
        this.day = 0
        this.getBibleForTheDay();

        setInterval(() => {
           this.getBibleForTheDay() 
        }, 10 * 1000)
    },

    getHeader: function() {
        return "Bible In A Year"
    },

    getScripts: function() {
        return [
            this.file('BiblePlan.js')
        ]
    },

    getDom() {
        const wrapper = document.createElement("div");

        if(this.bibleReading === null) return wrapper;

        const reading = document.createElement("h2");
        reading.innerHTML = this.bibleReading;
        wrapper.append(reading);

        return wrapper;
    },

    getBibleForTheDay() {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        this.day = Math.floor(diff / oneDay) - 1;
        if(this.bible != null) {
            this.bibleReading = this.bible.data[this.day]
            this.updateDom(1000)
        }
    },
    
})