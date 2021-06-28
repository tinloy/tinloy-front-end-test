Brief description of the Box Model:

    The box model is a square box that contains HTML elements, it contains content, padding, border, and margin.

    For example, if I am sending half a dozen of wine to Auckland through NZ Post, the individual wine is the "Content" of the box model. 

    And I will put each bottle of wine into a box, but before I do that, I will wrap each bottle with bubble wrap to fill all the gaps in the box to make sure each bottle of wine sits tidily in the box. And in this case, the bubble wrap is the "Padding" of the box model, and the thickness of the box is the "Border" of the box model.

    At last, I will pull all six boxes into a corrugated box, as the corrugated box is too big for six bottles of wine, so I will have to put some airbags into the corrugated box to fill the gaps between each wine box, and the airbags between the wine bottle is the "Margin" in the box model.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const sales = [
    { itemSold: “Football”, price: 19.99, dateSold: ‘2018-04-07’, id: ‘j_123’ },
    { itemSold: “Trainers”, price: 159.95, dateSold: ‘2018-03-02’, id: ‘t_acds1’ },
    { itemSold: “Cricket bat”, price: 204.97, dateSold: ‘2018-04-05’, id: ‘j_456’},
    { itemSold: “Rugby ball”, price: 30.00, dateSold: ‘2017-04-22’, id: ‘t_acds3’ },
    { itemSold: “Hockey stick”, price: 54.95, dateSold: ‘2017-03-19’, id: ‘j_999’ }
]

Using the above object, complete the following tasks in the same ​README.md​ file as the CSS/HTML
questions:
1. Return the sum of the price of all properties as a single value.

  function totalPrice() {
    var sum = 0;
    for (var i = 0; i < sales.length; i++) {
        sum += sales[i].price;
        i++;
    }
    return sum;
  }

2. Return the items which were sold in 2017.

// I assume the date format is always "YYYY-MM-DD"
    function itemsSoldIn2017() {
        var items = [];
        sales.forEach(item => {
            if (item.dateSold.startsWith('2017')) {
                items.push(item.itemSold);
            }
        })
        return items;
    }

3. Return an array of all of the itemsSold properties as strings, sorted alphabetically.

    function itemsSoldInAlphabeticalOrder() {
        sales.sort((a, b) => {
            if (a.itemSold.toLowerCase() < b.itemSold.toLowerCase()) {
                return -1;
            }
            if (a.itemSold.toLowerCase() > b.itemSold.toLowerCase()) {
                return 1;
            }
            return 0;
        })
        return sales;
    }

4. Using id as an argument, return the sale which matches the id

// I assume the id related to the item is unique
    function findItemById(id) {
        var item = {};
        sales.forEach(itemSold => {
            if (id === itemSold.id) {
                item = itemSold
                return;
            }
        })
    return item;
  }


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

In the webpage, I use Flexbox to layout the page, I consider the content section is the main priority of the page, the navbar and the sidebar are considered as the secondary elements, so when the page is browsed on a mobile device, the sidebar would be hidden for preventing distraction. The text in the header will also be hidden is the screen size is too narrow, but the search bar will remain visible no matter what screen size is to retain the search function for users.

In the main section, content section is set to a specific width to provide a good readability of contents, and on a large screen, it also provides enough empty space between sections, which not only make the page not seen too crowdy, but also providing enough space for user’s eyes to breath between browsing different sections, but in small screen like a mobile phone, it would use almost all of the space to display as much contents as possible.