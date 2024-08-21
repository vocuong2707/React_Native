

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.


// Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”


const value = {
    data: [{
        bill : 275,
        tips : function () {
            return (50 <= this.bill <= 300 ? 15 : 20) / 100;
        },
        totals: function() {
            const total = this.bill + (this.tips() * this.bill);
            return `“The bill was ${this.bill}, the tip was ${this.tips()}%, and the total value ${total}”`;
        }
    },
    {
        bill : 310,
        tips : function () {
            return (50 <= this.bill <= 300 ? 15 : 20) / 100;
        },
        totals: function() {
            const total = this.bill + (this.tips() * this.bill);
            return `“The bill was ${this.bill}, the tip was ${this.tips()}%, and the total value ${total}”`;
        }
    }
],
    
}

for (let index = 0; index < value.data.length; index++) {
    console.log(value.data[index].totals());
}