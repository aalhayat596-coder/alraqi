const directWhatsappBtn = document.getElementById("directWhatsappBtn");
const myPhone = "963985212991";
const defaultMsg = "مرحباً حلويات وباتسري الراقي، أود الاستفسار منكم.";

if (directWhatsappBtn) {
    directWhatsappBtn.href = `https://wa.me/${myPhone}?text=${encodeURIComponent(defaultMsg)}`;
}

const whatsappPhone = "963985212991";

function getAbsoluteImageUrl(imgPath) {
    if (!imgPath) return "";
    try {
        return new URL(imgPath, window.location.href).href;
    } catch (e) {
        return imgPath;
    }
}

const tablesData = [
    {
        name: "طاولة شوكولا ",
        price: "$150",
        image: "images/table/c1.jpeg",
        summary: "تنسيق راقٍ ومناسب للمناسبات والاجتماعات العائلية."
    },
    {
        name: "تشكيلة التارت ",
        price: "$90",
        image: "images/table/c2.jpeg",
        summary: "خيار مميز بلمسات فاخرة للتجمعات والاستقبال."
    },
    {
        name: "طاولة مالح وحلو ",
        price: "$160",
        image: "images/table/c3.jpeg",
        summary: "تشكيلة متوازنة من الحلويات الشرقية والغربية."
    },
    {
        name: "طاولة عيد ميلاد ",
        price: "$150",
        image: "images/table/c4.jpeg",
        summary: "مناسبة لحفلات ميلاد اطفالكم ."
    },
    {
        name: "طاولة عصرية ",
        price: "$120",
        image: "images/table/c5.jpeg",
        summary: "تصميم عملي وجميل لاجتماعات العمل واللقاءات."
    },
    {
        name: "طاولة الضيافة 6",
        price: "$230",
        image: "images/table/c6.jpeg",
        summary: "إطلالة غنية تناسب المناسبات الكبيرة."
    },
    {
        name: "طاولة الفلانتاين ",
        price: "$185",
        image: "images/table/c7.jpeg",
        summary: "تنسيق أنيق يجمع بين الفخامة والبساطة."
    },
    {
        name: "طاولة وداع العزوبية ",
        price: "$175",
        image: "images/table/c9.jpeg",
        summary: "اخترنا لكم اجمل القوالب مع اجمل القطع لتصنع لكم لحظات لا تنسى"
    },
    {
        name: "طاولة الأعياد ",
        price: "$200",
        image: "images/table/c10.jpeg",
        summary: "تشكيلة مميزة بنكهات متناغمة ومظهر جذاب."
    },
    {
        name: "طاولة وداع العزوبية ",
        price: "$220",
        image: "images/table/c11.jpeg",
        summary: "تنسيق فاخر يضيف لمسة خاصة لمناسبتك."
    }
];

let currentIndex = 0;

const tableImg = document.getElementById("tableImg");
const tablePrice = document.getElementById("tablePrice");
const tableName = document.getElementById("tableName");
const tableSummary = document.getElementById("tableSummary");
const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");
const tableCounter = document.getElementById("tableCounter");
const prevTableBtn = document.getElementById("prevTableBtn");
const nextTableBtn = document.getElementById("nextTableBtn");

function renderTable(index) {
    const item = tablesData[index];
    if (!item || !tableImg) return;

    tableImg.src = item.image;
    tableImg.alt = item.name;
    if (tablePrice) tablePrice.textContent = item.price;
    if (tableName) tableName.textContent = item.name;
    if (tableSummary) tableSummary.textContent = item.summary;
    if (tableCounter) tableCounter.textContent = `${index + 1} / ${tablesData.length}`;

    const imageUrl = getAbsoluteImageUrl(item.image);
    const message = `مرحباً حلويات وباتسري الراقي، أرغب بطلب: ${item.name} (السعر: ${item.price})\nرابط الصورة: ${imageUrl}`;
    if (whatsappOrderBtn) {
        whatsappOrderBtn.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    }
}

prevTableBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + tablesData.length) % tablesData.length;
    renderTable(currentIndex);
});

nextTableBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % tablesData.length;
    renderTable(currentIndex);
});

renderTable(currentIndex);

// اقسام القوالب
const cakeSizesInfo = {
    evening: {
        banner: "حجم الأمسية (يكفي 8 ضيوف)",
        chip: "حجم الأمسية · 8 ضيوف"
    },
    gathering: {
        banner: "حجم الجمعات (يكفي 15 ضيفاً)",
        chip: "حجم الجمعات · 15 ضيفاً"
    },
    celebration: {
        banner: "حجم الاحتفالات (يكفي 30 ضيفاً)",
        chip: "حجم الاحتفالات · 30 ضيفاً"
    },
    banquet: {
        banner: "حجم الولائم والمناسبات الكبرى (يكفي 50 ضيفاً)",
        chip: "حجم الولائم والمناسبات الكبرى · 50 ضيفاً"
    }
};

// أضف جميع قوالبك هنا مع حقل size لكل قالب:
// "evening" (19) | "gathering" (16) | "celebration" (19) | "banquet" (18)
const cakesDataList = [
    {
        size: "evening",
        name: "غاتو نسيم السماء",
        price: "$7",
        image: "images/group 8/card1.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو حبيب العمر",
        price: "$7",
        image: "images/group 8/card2.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو الفلانتاين",
        price: "$7",
        image: "images/group 8/card3.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو بريق الذهب",
        price: "$7",
        image: "images/group 8/card4.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card5.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card6.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card7.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card8.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card9.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card10.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card11.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card12.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card13.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card14.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card15.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card16.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card17.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card18.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "evening",
        name: "غاتو شوكولا بلجيكي كلاسيك",
        price: "$7",
        image: "images/group 8/card19.jpeg",
        summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c1.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c2.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c3.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c4.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c5.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c6.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c7.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c8.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c9.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c10.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c11.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c12.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c13.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c14.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c15.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "gathering",
        name: "غاتو فستق وتوت راقي",
        price: "$14",
        image: "images/group 15/c16.jpeg",
        summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c1.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c2.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c3.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c4.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c5.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c6.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c7.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c8.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c9.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c10.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c11.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c12.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c13.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c14.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c15.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c16.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c17.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c18.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "celebration",
        name: "غاتو كراميل وشوكولا بيضاء",
        price: "$25",
        image: "images/group30/c19.jpeg",
        summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c1.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c2.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c3.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c4.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c5.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c6.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c7.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c8.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c9.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c10.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c11.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c12.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c13.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c14.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c15.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c16.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c17.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    },
    {
        size: "banquet",
        name: "قالب ضيافة ملكي كبير",
        price: "$45",
        image: "images/group 50/c18.jpeg",
        summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة."
    }
];

let activeCakeSize = "evening";
let activeCakeIndex = 0;

const cakeFilterPills = document.querySelectorAll(".cake-filter-pill");
const cakeActiveSizeTitle = document.getElementById("cakeActiveSizeTitle");
const cakeActiveSizeCount = document.getElementById("cakeActiveSizeCount");
const cakeCardImg = document.getElementById("cakeCardImg");
const cakeCardSizeBadge = document.getElementById("cakeCardSizeBadge");
const cakeCardPrice = document.getElementById("cakeCardPrice");
const cakeCardName = document.getElementById("cakeCardName");
const cakeCardSummary = document.getElementById("cakeCardSummary");
const cakeCardWhatsappBtn = document.getElementById("cakeCardWhatsappBtn");
const cakeSlideCounter = document.getElementById("cakeSlideCounter");
const prevCakeSlide = document.getElementById("prevCakeSlide");
const nextCakeSlide = document.getElementById("nextCakeSlide");

function getCakesForActiveSize() {
    return cakesDataList.filter((item) => item.size === activeCakeSize);
}

function renderCakeShowcase() {
    const sizeMeta = cakeSizesInfo[activeCakeSize];
    const items = getCakesForActiveSize();

    cakeFilterPills.forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-size") === activeCakeSize);
    });

    if (sizeMeta) {
        if (cakeActiveSizeTitle) cakeActiveSizeTitle.textContent = sizeMeta.banner;
        if (cakeCardSizeBadge) cakeCardSizeBadge.textContent = sizeMeta.chip;
    }

    if (cakeActiveSizeCount) {
        cakeActiveSizeCount.textContent = `${items.length} ${items.length === 1 ? "قالب" : "قوالب"}`;
    }

    if (!items.length) {
        if (cakeCardName) cakeCardName.textContent = "قوالب هذا الحجم قريباً";
        if (cakeCardSummary) cakeCardSummary.textContent = "يمكنك التواصل معنا عبر واتساب لطلب قالب مخصص بهذا الحجم.";
        if (cakeCardPrice) cakeCardPrice.textContent = "—";
        if (cakeSlideCounter) cakeSlideCounter.textContent = "0 / 0";

        const sizeLabel = sizeMeta ? sizeMeta.chip : activeCakeSize;
        const inquiryMsg = `مرحباً حلويات وباتسري الراقي، أرغب بالاستفسار عن قوالب (${sizeLabel})`;
        if (cakeCardWhatsappBtn) {
            cakeCardWhatsappBtn.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(inquiryMsg)}`;
        }
        return;
    }

    if (activeCakeIndex >= items.length) {
        activeCakeIndex = 0;
    }

    const currentCake = items[activeCakeIndex];
    const sizeLabelText = sizeMeta ? sizeMeta.chip : activeCakeSize;

    if (cakeCardImg) {
        cakeCardImg.src = currentCake.image;
        cakeCardImg.alt = currentCake.name;
    }
    if (cakeCardPrice) cakeCardPrice.textContent = currentCake.price;
    if (cakeCardName) cakeCardName.textContent = currentCake.name;
    if (cakeCardSummary) cakeCardSummary.textContent = currentCake.summary;
    if (cakeSlideCounter) cakeSlideCounter.textContent = `${activeCakeIndex + 1} / ${items.length}`;

    const imageUrl = getAbsoluteImageUrl(currentCake.image);
    const orderMsg = `مرحباً حلويات وباتسري الراقي، أرغب بطلب: ${currentCake.name} (${sizeLabelText}) - السعر: ${currentCake.price}\nرابط الصورة: ${imageUrl}`;
    if (cakeCardWhatsappBtn) {
        cakeCardWhatsappBtn.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(orderMsg)}`;
    }
}

cakeFilterPills.forEach((btn) => {
    btn.addEventListener("click", () => {
        activeCakeSize = btn.getAttribute("data-size");
        activeCakeIndex = 0;
        renderCakeShowcase();
    });
});

prevCakeSlide?.addEventListener("click", () => {
    const items = getCakesForActiveSize();
    if (!items.length) return;
    activeCakeIndex = (activeCakeIndex - 1 + items.length) % items.length;
    renderCakeShowcase();
});

nextCakeSlide?.addEventListener("click", () => {
    const items = getCakesForActiveSize();
    if (!items.length) return;
    activeCakeIndex = (activeCakeIndex + 1) % items.length;
    renderCakeShowcase();
});

renderCakeShowcase();

document.addEventListener("DOMContentLoaded", () => {
    // 1. ربط روابط أحجام الغاتو في النافبار بأزرار الفلترة في قسم الغاتو
    const navSizeLinks = document.querySelectorAll(".cake-nav-size");
    navSizeLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const targetSize = link.dataset.size;
            const matchingFilterBtn = document.querySelector(
                `#cakeSizeFilterBar .cake-filter-pill[data-size="${targetSize}"]`
            );
            if (matchingFilterBtn) {
                matchingFilterBtn.click();
            }
        });
    });

    // 2. إغلاق قائمة النافبار تلقائياً على الجوال بعد اختيار أي قسم
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    const navLinksToClose = document.querySelectorAll(
        "#navbarSupportedContent .nav-link:not(.dropdown-toggle), #navbarSupportedContent .dropdown-item"
    );

    navLinksToClose.forEach((item) => {
        item.addEventListener("click", () => {
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modalEl = document.getElementById("imagePreviewModal");
    const modalImg = document.getElementById("previewModalImg");
    const modalTitle = document.getElementById("previewModalTitle");
    const modalCaption = document.getElementById("previewModalCaption");

    if (!modalEl || typeof bootstrap === "undefined") return;

    const previewModal = new bootstrap.Modal(modalEl);

    function openImagePreview(src, title, caption = "") {
        if (!src) return;
        modalImg.src = src;
        modalImg.alt = title || "معاينة الصورة";
        modalTitle.textContent = title || "معاينة المنتج";
        modalCaption.textContent = caption;
        previewModal.show();
    }

    // 1. الضغط على صور السواري
    const sawariTrack = document.getElementById("sawariTrack");
    if (sawariTrack) {
        sawariTrack.addEventListener("click", (e) => {
            const img = e.target.closest(".sawari-img-wrap img");
            if (!img) return;
            const card = img.closest(".sawari-card");
            const name = card?.querySelector(".card-title")?.textContent.trim() || img.alt;
            const price = card?.querySelector(".sawari-price")?.textContent.trim() || "";
            openImagePreview(img.src, name, price ? `السعر: ${price}` : "");
        });
    }

    // 2. الضغط على صورة قالب الغاتو الحالية
    const cakeImg = document.getElementById("cakeCardImg");
    if (cakeImg) {
        cakeImg.addEventListener("click", () => {
            const name = document.getElementById("cakeCardName")?.textContent.trim() || "قالب غاتو";
            const price = document.getElementById("cakeCardPrice")?.textContent.trim() || "";
            openImagePreview(cakeImg.src, name, price ? `السعر: ${price}` : "");
        });
    }

    // 3. الضغط على صورة طاولة الضيافة الحالية
    const tableImg = document.getElementById("tableImg");
    if (tableImg) {
        tableImg.addEventListener("click", () => {
            const name = document.getElementById("tableName")?.textContent.trim() || "طاولة ضيافة";
            const price = document.getElementById("tablePrice")?.textContent.trim() || "";
            openImagePreview(tableImg.src, name, price ? `السعر: ${price}` : "");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sawariCards = document.querySelectorAll("#sawari-section .sawari-card");

    sawariCards.forEach((card) => {
        const orderBtn = card.querySelector(".sawari-order-btn");
        if (!orderBtn) return;

        const title = card.querySelector(".card-title")?.textContent.trim() || "سارية";
        const price = card.querySelector(".sawari-price")?.textContent.trim() || "";
        const imgEl = card.querySelector(".sawari-img-wrap img");
        const imageUrl = imgEl ? getAbsoluteImageUrl(imgEl.getAttribute("src")) : "";

        const baseMsg = price
            ? `مرحباً، أرغب بطلب (${title}) - السعر: ${price}`
            : `مرحباً، أرغب بطلب (${title})`;

        const message = imageUrl ? `${baseMsg}\nرابط الصورة: ${imageUrl}` : baseMsg;

        const encodedMessage = encodeURIComponent(message);
        orderBtn.href = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;
        orderBtn.target = "_blank";
        orderBtn.rel = "noopener noreferrer";
    });
});