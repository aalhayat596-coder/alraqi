const directWhatsappBtn = document.getElementById("directWhatsappBtn");
const myPhone = "963985212991";
const whatsappPhone = "963985212991";
const defaultMsg = "مرحباً حلويات وباتسري الراقي، أود الاستفسار منكم.";

if (directWhatsappBtn) {
    directWhatsappBtn.href = `https://wa.me/${myPhone}?text=${encodeURIComponent(defaultMsg)}`;
}

function getAbsoluteImageUrl(imgPath) {
    if (!imgPath) return "";
    try {
        return new URL(imgPath, window.location.href).href;
    } catch (e) {
        return imgPath;
    }
}

const preloadedImages = new Set();

function preloadImage(src) {
    if (!src || preloadedImages.has(src)) return;
    preloadedImages.add(src);
    const img = new Image();
    img.src = src;
}

const tablesData = [
    {
        name: "طاولة شوكولا",
        price: "$150",
        image: "images/table/c1.jpeg",
        summary: "تنسيق راقٍ ومناسب للمناسبات والاجتماعات العائلية."
    },
    {
        name: "تشكيلة التارت",
        price: "$90",
        image: "images/table/c2.jpeg",
        summary: "خيار مميز بلمسات فاخرة للتجمعات والاستقبال."
    },
    {
        name: "طاولة مالح وحلو",
        price: "$160",
        image: "images/table/c3.jpeg",
        summary: "تشكيلة متوازنة من الحلويات الشرقية والغربية."
    },
    {
        name: "طاولة عيد ميلاد",
        price: "$150",
        image: "images/table/c4.jpeg",
        summary: "مناسبة لحفلات ميلاد اطفالكم."
    },
    {
        name: "طاولة عصرية",
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
        name: "طاولة الفلانتاين",
        price: "$185",
        image: "images/table/c7.jpeg",
        summary: "تنسيق أنيق يجمع بين الفخامة والبساطة."
    },
    {
        name: "طاولة وداع العزوبية",
        price: "$175",
        image: "images/table/c9.jpeg",
        summary: "اخترنا لكم اجمل القوالب مع اجمل القطع لتصنع لكم لحظات لا تنسى"
    },
    {
        name: "طاولة الأعياد",
        price: "$200",
        image: "images/table/c10.jpeg",
        summary: "تشكيلة مميزة بنكهات متناغمة ومظهر جذاب."
    },
    {
        name: "طاولة وداع العزوبية",
        price: "$220",
        image: "images/table/c11.jpeg",
        summary: "تنسيق فاخر يضيف لمسة خاصة لمناسبتك."
    }
];

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

const cakesDataList = [
    { size: "evening", name: "غاتو نسيم السماء", price: "$7", image: "images/group 8/card1.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو حبيب العمر", price: "$7", image: "images/group 8/card2.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو الفلانتاين", price: "$7", image: "images/group 8/card3.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو بريق الذهب", price: "$7", image: "images/group 8/card4.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card5.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card6.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card7.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card8.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card9.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card10.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card11.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card12.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card13.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card14.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card15.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card16.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card17.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card18.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },
    { size: "evening", name: "غاتو شوكولا بلجيكي كلاسيك", price: "$7", image: "images/group 8/card19.jpeg", summary: "طبقات كاكاو غنية مع كريمة شوكولا ناعمة تناسب سهرة عائلية." },

    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c1.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c2.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c3.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c4.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c5.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c6.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c7.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c8.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c9.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c10.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c11.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c12.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c13.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c14.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c15.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },
    { size: "gathering", name: "غاتو فستق وتوت راقي", price: "$14", image: "images/group 15/c16.jpeg", summary: "نكهة الفستق المحمص مع لمسة توت منعشة للجمعات." },

    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c1.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c2.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c3.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c4.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c5.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c6.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c7.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c8.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c9.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c10.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c11.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c12.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c13.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c14.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c15.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c16.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c17.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c18.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },
    { size: "celebration", name: "غاتو كراميل وشوكولا بيضاء", price: "$25", image: "images/group30/c19.jpeg", summary: "حجم مثالي للاحتفالات وأعياد الميلاد بتقديم فاخر." },

    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c1.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c2.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c3.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c4.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c5.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c6.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c7.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c8.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c9.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c10.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c11.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c12.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c13.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c14.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c15.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c16.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c17.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." },
    { size: "banquet", name: "قالب ضيافة ملكي كبير", price: "$45", image: "images/group 50/c18.jpeg", summary: "مصمم للمناسبات الكبيرة والولائم بتفاصيل متقنة." }
];

let activeCakeSize = "evening";

const tablesTrack = document.getElementById("tablesTrack");
const cakesTrack = document.getElementById("cakesTrack");
const cakeFilterPills = document.querySelectorAll(".cake-filter-pill");
const cakeActiveSizeTitle = document.getElementById("cakeActiveSizeTitle");
const cakeActiveSizeCount = document.getElementById("cakeActiveSizeCount");

function buildWhatsappUrl(orderText) {
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(orderText)}`;
}

function createProductCardHtml({ name, price, image, summary, badgeText = "" }) {
    const imageUrl = getAbsoluteImageUrl(image);
    const sizePart = badgeText ? ` (${badgeText})` : "";
    const message = `مرحباً حلويات وباتسري الراقي، أرغب بطلب: ${name}${sizePart} - السعر: ${price}\nرابط الصورة: ${imageUrl}`;
    const whatsappHref = buildWhatsappUrl(message);

    const badgeHtml = badgeText
        ? `<span class="cake-size-chip px-2 py-1 rounded-pill small fw-semibold mb-2 d-inline-block">${badgeText}</span>`
        : "";

    return `
        <div class="sawari-item">
            <div class="card sawari-card h-100 border-0">
                <div class="sawari-img-wrap">
                    <img src="${image}" class="card-img-top" alt="${name}">
                </div>
                <div class="card-body d-flex flex-column text-end">
                    ${badgeHtml}
                    <div class="d-flex justify-content-between align-items-center gap-2 mb-2">
                        <h5 class="card-title fw-bold mb-0">${name}</h5>
                        <span class="sawari-price fw-bold">${price}</span>
                    </div>
                    <p class="card-text text-muted small mb-3">${summary}</p>
                    <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer"
                        class="btn sawari-order-btn mt-auto w-100 fw-semibold">
                        اطلب عبر واتساب
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderTablesGrid() {
    if (!tablesTrack) return;
    tablesTrack.innerHTML = tablesData
        .map((item) => createProductCardHtml(item))
        .join("");

    tablesData.slice(0, 3).forEach((item) => preloadImage(item.image));
}

function renderCakesGrid() {
    if (!cakesTrack) return;
    const sizeMeta = cakeSizesInfo[activeCakeSize];
    const items = cakesDataList.filter((item) => item.size === activeCakeSize);

    cakeFilterPills.forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-size") === activeCakeSize);
    });

    if (sizeMeta) {
        if (cakeActiveSizeTitle) cakeActiveSizeTitle.textContent = sizeMeta.banner;
    }

    if (cakeActiveSizeCount) {
        cakeActiveSizeCount.textContent = `${items.length} ${items.length === 1 ? "قالب" : "قوالب"}`;
    }

    if (!items.length) {
        const sizeLabel = sizeMeta ? sizeMeta.chip : activeCakeSize;
        const inquiryUrl = buildWhatsappUrl(
            `مرحباً حلويات وباتسري الراقي، أرغب بالاستفسار عن قوالب (${sizeLabel})`
        );
        cakesTrack.innerHTML = `
            <div class="sawari-item w-100">
                <div class="card sawari-card border-0 p-4 text-center">
                    <h5 class="fw-bold mb-2">قوالب هذا الحجم قريباً</h5>
                    <p class="text-muted small mb-3">يمكنك التواصل معنا عبر واتساب لطلب قالب مخصص بهذا الحجم.</p>
                    <a href="${inquiryUrl}" target="_blank" rel="noopener noreferrer"
                        class="btn sawari-order-btn fw-semibold">
                        اطلب عبر واتساب
                    </a>
                </div>
            </div>
        `;
        return;
    }

    const chipLabel = sizeMeta ? sizeMeta.chip : activeCakeSize;
    cakesTrack.innerHTML = items
        .map((cake) =>
            createProductCardHtml({
                ...cake,
                badgeText: chipLabel
            })
        )
        .join("");

    items.slice(0, 3).forEach((cake) => preloadImage(cake.image));
}

cakeFilterPills.forEach((btn) => {
    btn.addEventListener("click", () => {
        activeCakeSize = btn.getAttribute("data-size");
        renderCakesGrid();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    renderTablesGrid();
    renderCakesGrid();

    // 1. ربط روابط أحجام الغاتو في النافبار بأزرار الفلترة
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

    // 3. تجهيز روابط الواتساب لكروت السواري
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

        orderBtn.href = buildWhatsappUrl(message);
        orderBtn.target = "_blank";
        orderBtn.rel = "noopener noreferrer";
    });

    // 4. نافذة معاينة الصور الموحدة لجميع الأقسام (السواري، الطاولات، القوالب)
    const modalEl = document.getElementById("imagePreviewModal");
    const modalImg = document.getElementById("previewModalImg");
    const modalTitle = document.getElementById("previewModalTitle");
    const modalCaption = document.getElementById("previewModalCaption");

    if (modalEl && typeof bootstrap !== "undefined") {
        const previewModal = new bootstrap.Modal(modalEl);

        function openImagePreview(src, title, caption = "") {
            if (!src || !modalImg) return;
            modalImg.src = src;
            modalImg.alt = title || "معاينة الصورة";
            if (modalTitle) modalTitle.textContent = title || "معاينة المنتج";
            if (modalCaption) modalCaption.textContent = caption;
            previewModal.show();
        }

        const trackContainers = [
            document.getElementById("sawariTrack"),
            tablesTrack,
            cakesTrack
        ];

        trackContainers.forEach((container) => {
            if (!container) return;
            container.addEventListener("click", (e) => {
                const img = e.target.closest(".sawari-img-wrap img");
                if (!img) return;
                const card = img.closest(".sawari-card");
                const name = card?.querySelector(".card-title")?.textContent.trim() || img.alt;
                const price = card?.querySelector(".sawari-price")?.textContent.trim() || "";
                openImagePreview(img.src, name, price ? `السعر: ${price}` : "");
            });
        });
    }
});
