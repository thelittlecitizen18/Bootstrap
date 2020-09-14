const allInstrument = [
    fluteInstrument = {
        description: "חליל יפה",
        id: 1,  
        imagePath: " C:\\Code\\Bootstrap\\halil.png",
        instrumentOrders: null,
        instrumentType: {id: 1, name: "נשיפה"},
        name: "חליל",
        price: 50,
        typeID: 1
      },
      harmonicaInstrument = {
        description: "מפוחית יפה",
        id: 2,  
        imagePath: "C:\\Code\\Bootstrap\\Mapohit.png",
        instrumentOrders: null,
        instrumentType: {id: 1, name: "נשיפה"},
        name: "מפוחית",
        price: 35,
        typeID: 1
      },
    trumpetInstrument = {
        description: "חצוצרה ארוכה",
        id: 3,  
        imagePath: "C:\\Code\\Bootstrap\\hazozra.png",
        instrumentOrders: null,
        instrumentType: {id: 1, name: "נשיפה"},
        name: "חצוצרה",
        price: 1500,
        typeID: 1
      },
    tromboneInstrument = {
        description: "טרומבון קטן",
        id: 4,  
        imagePath: "C:\\Code\\Bootstrap\\trombon.png",
        instrumentOrders: null,
        instrumentType: {id: 1, name: "נשיפה"},
        name: "טרומבון",
        price: 2400,
        typeID: 1
      },
    pianoInstrument = {
        description: "פסנתר יפה",
        id: 5,  
        imagePath: "C:\\Code\\Bootstrap\\piano.png",
        instrumentOrders: null,
        instrumentType: {id: 2, name: "הקשה"},
        name: "פסנתר",
        price: 1400,
        typeID: 2
      },
    violinInstrument = {
        description: "כינור יפה",
        id: 6,  
        imagePath: "C:\\Code\\Bootstrap\\kinor.png",
        instrumentOrders: null,
        instrumentType: {id: 3, name: "מיתר"},
        name: "כינור",
        price: 2300,
        typeID: 3
     }
    ];

    function instrumentTemplate(){

        for (i=0; i < allInstrument.length; i++){

            var start = document.getElementsByClassName("row")[1];

            var col = document.createElement("div");
            col.className = "col-4";

            var card = document.createElement("div");
            card.className = "card mb-3 shadow-sm";
            
            var cardBody = document.createElement("div");
            cardBody.className = "card-body";

            var picture = document.createElement("img");
            picture.src = allInstrument[i].imagePath;

            var title = document.createElement("h1");
            title.className = "card-title";
            title.innerHTML = allInstrument[i].name;

            var info = document.createElement("h2");
            info.className = "card-info";
            info.innerHTML = allInstrument[i].description;

            var price = document.createElement("h1");
            price.className = "price";
            price.innerHTML = allInstrument[i].price;

            var button = document.createElement("button");
            button.className = "btn btn-primary";
            button.innerHTML = "הוספה לעגלה"


            start.appendChild(col);
            col.appendChild(card);
            card.appendChild(cardBody);
            cardBody.appendChild(picture);
            cardBody.appendChild(title);
            cardBody.appendChild(info);
            cardBody.appendChild(price);
            cardBody.appendChild(button);

        }
    }
    instrumentTemplate();
