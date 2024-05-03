import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest, response: NextResponse){
//     const queryParams = request.nextUrl.searchParams
//     const q: string | null = queryParams.get("q");
//     return NextResponse.json({ message: q ? `queryParams: ${q}` : "hello" }, { status: 200 })
// }

export async function GET(request: NextRequest) {
    const data = [{
        "id": 1,
        "link": "Pepper - Black, Ground",
        "product": "Nantuket Peach Orange",
        "rating": 0,
        "price": "$907.54",
        "discount": "$969.40",
        "image": "product1.png"
    }, {
        "id": 2,
        "link": "Coffee Cup 8oz 5338cd",
        "product": "Star Anise, Whole",
        "rating": 1,
        "price": "$668.13",
        "discount": "$375.45",
        "image": "product2.png"
    }, {
        "id": 3,
        "link": "Beans - Yellow",
        "product": "Extract - Lemon",
        "rating": 1,
        "price": "$244.46",
        "discount": "$381.81",
        "image": "product9.png"
    }, {
        "id": 4,
        "link": "Wine - Stoneliegh Sauvignon",
        "product": "Cheese - Parmigiano Reggiano",
        "rating": 1,
        "price": "$211.18",
        "discount": "$701.94",
        "image": "product9.png"
    }, {
        "id": 5,
        "link": "Banana Turning",
        "product": "Cheese - Feta",
        "rating": 0,
        "price": "$226.73",
        "discount": "$459.52",
        "image": "product4.png"
    }, {
        "id": 6,
        "link": "Cloves - Ground",
        "product": "Basil - Seedlings Cookstown",
        "rating": 4,
        "price": "$244.58",
        "discount": "$87.24",
        "image": "product4.png"
    }, {
        "id": 7,
        "link": "Basil - Primerba, Paste",
        "product": "Skirt - 24 Foot",
        "rating": 1,
        "price": "$905.60",
        "discount": "$487.68",
        "image": "product7.png"
    }, {
        "id": 8,
        "link": "Sauce - Apple, Unsweetened",
        "product": "Cherries - Maraschino,jar",
        "rating": 4,
        "price": "$350.85",
        "discount": "$766.08",
        "image": "product8.png"
    }, {
        "id": 9,
        "link": "Beer - Camerons Cream Ale",
        "product": "Tomatoes - Vine Ripe, Red",
        "rating": 4,
        "price": "$154.04",
        "discount": "$591.54",
        "image": "product9.png"
    }, {
        "id": 10,
        "link": "Pastry - Trippleberry Muffin - Mini",
        "product": "Flour - Pastry",
        "rating": 0,
        "price": "$872.05",
        "discount": "$455.00",
        "image": "product8.png"
    }, {
        "id": 11,
        "link": "Gelatine Leaves - Bulk",
        "product": "Nut - Pistachio, Shelled",
        "rating": 5,
        "price": "$807.22",
        "discount": "$495.52",
        "image": "product7.png"
    }, {
        "id": 12,
        "link": "Coffee Guatemala Dark",
        "product": "Squid - Tubes / Tenticles 10/20",
        "rating": 5,
        "price": "$127.36",
        "discount": "$845.87",
        "image": "product2.png"
    }, {
        "id": 13,
        "link": "Cranberry Foccacia",
        "product": "Milk - 2%",
        "rating": 1,
        "price": "$24.60",
        "discount": "$888.97",
        "image": "product6.png"
    }, {
        "id": 14,
        "link": "Oil - Macadamia",
        "product": "Brandy Cherry - Mcguinness",
        "rating": 3,
        "price": "$735.87",
        "discount": "$902.80",
        "image": "product8.png"
    }, {
        "id": 15,
        "link": "Iced Tea Concentrate",
        "product": "Sugar - Icing",
        "rating": 0,
        "price": "$967.56",
        "discount": "$529.46",
        "image": "product3.png"
    }, {
        "id": 16,
        "link": "Lettuce - Mini Greens, Whole",
        "product": "Miso - Soy Bean Paste",
        "rating": 3,
        "price": "$189.02",
        "discount": "$983.26",
        "image": "product3.png"
    }, {
        "id": 17,
        "link": "Muffin Chocolate Individual Wrap",
        "product": "Cookie Dough - Double",
        "rating": 3,
        "price": "$384.22",
        "discount": "$615.88",
        "image": "product2.png"
    }, {
        "id": 18,
        "link": "Pasta - Fusili Tri - Coloured",
        "product": "Dried Cranberries",
        "rating": 2,
        "price": "$475.02",
        "discount": "$261.02",
        "image": "product6.png"
    }, {
        "id": 19,
        "link": "Coffee - Colombian, Portioned",
        "product": "Wine - Port Late Bottled Vintage",
        "rating": 2,
        "price": "$230.04",
        "discount": "$362.77",
        "image": "product7.png"
    }, {
        "id": 20,
        "link": "Bay Leaf",
        "product": "Maintenance Removal Charge",
        "rating": 2,
        "price": "$260.02",
        "discount": "$667.16",
        "image": "product7.png"
    }, {
        "id": 21,
        "link": "Liquid Aminios Acid - Braggs",
        "product": "Pasta - Fusili, Dry",
        "rating": 4,
        "price": "$494.85",
        "discount": "$930.74",
        "image": "product1.png"
    }, {
        "id": 22,
        "link": "Wine - Red Oakridge Merlot",
        "product": "Liquid Aminios Acid - Braggs",
        "rating": 3,
        "price": "$300.78",
        "discount": "$209.89",
        "image": "product3.png"
    }, {
        "id": 23,
        "link": "Syrup - Kahlua Chocolate",
        "product": "Beets - Golden",
        "rating": 5,
        "price": "$434.08",
        "discount": "$676.66",
        "image": "product2.png"
    }, {
        "id": 24,
        "link": "Sprouts - Corn",
        "product": "Aspic - Amber",
        "rating": 4,
        "price": "$727.21",
        "discount": "$358.74",
        "image": "product8.png"
    }, {
        "id": 25,
        "link": "Cream - 35%",
        "product": "Beef - Shank",
        "rating": 1,
        "price": "$510.37",
        "discount": "$481.90",
        "image": "product2.png"
    }, {
        "id": 26,
        "link": "V8 Splash Strawberry Banana",
        "product": "Wiberg Super Cure",
        "rating": 4,
        "price": "$375.06",
        "discount": "$230.69",
        "image": "product4.png"
    }, {
        "id": 27,
        "link": "Bread - Kimel Stick Poly",
        "product": "Ice Cream - Super Sandwich",
        "rating": 2,
        "price": "$178.12",
        "discount": "$121.22",
        "image": "product3.png"
    }, {
        "id": 28,
        "link": "The Pop Shoppe - Lime Rickey",
        "product": "Pepper - Red Thai",
        "rating": 3,
        "price": "$178.86",
        "discount": "$202.99",
        "image": "product5.png"
    }, {
        "id": 29,
        "link": "Cranberries - Fresh",
        "product": "Pork - Bacon, Double Smoked",
        "rating": 0,
        "price": "$230.17",
        "discount": "$435.84",
        "image": "product5.png"
    }, {
        "id": 30,
        "link": "Sea Urchin",
        "product": "Muffin - Bran Ind Wrpd",
        "rating": 3,
        "price": "$135.16",
        "discount": "$716.45",
        "image": "product1.png"
    }]

    return NextResponse.json({ data }, { status: 200 })
    // return NextResponse.json({ message: "user not authorized" }, { status: 401 })
}
