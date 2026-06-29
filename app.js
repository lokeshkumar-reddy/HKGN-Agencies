/* ============================================================
   BILINGUAL TRANSLATION DICTIONARY (English & Telugu)
============================================================ */
const TRANSLATIONS = {
  en: {
    logoSub: "Pesticides, Fertilisers & Seeds",
    searchPlaceholder: "Search crops care products...",
    roleUser: "👤 User Mode",
    roleAdmin: "🛠️ Admin Mode",
    heroTag: "✨ Quality Crops Care since 2012",
    heroTitle: "Grow Richer Yields<br><span class='gradient-text'>With HKGN Products</span>",
    heroDesc: "We supply high-standard chemical pesticides, organic fertilisers, and hybrid high-yielding seeds. Authorized dealer for top agricultural brands.",
    heroBtnText: "🛒 Shop Catalog",
    heroChip1: "🚜 100% Genuine",
    heroChip2: "💧 Organic Options",
    heroChip3: "📞 Expert Guidance",
    filterTitle: "Categories",
    filterResetBtn: "Reset All",
    catAll: "All Products",
    catFertilisers: "Fertilisers",
    catPesticides: "Pesticides",
    catSeeds: "Seeds",
    infoCardTitle: "HKGN Agencies",
    infoCardProp: "Proprietor: Siddiq Basha",
    infoCardAddress: "📍 R.T.C Busstand Road, Punganur",
    infoCardCell: "📞 Cell: 90004 76878, 90598 47718",
    infoCardGST: "GSTIN: 37DTOPS6450N1ZN",
    productCountText: "Showing {count} products",
    sortLabel: "Sort By:",
    optSortName: "Alphabetical",
    optSortPriceLow: "Price: Low to High",
    optSortPriceHigh: "Price: High to Low",
    emptyTitle: "No products found",
    emptyDesc: "Try typing a different name or matching category filters.",
    emptyBtn: "Clear Filters",
    inStock: "Available: {stock} units",
    outStock: "Out of Stock",
    onlyLeft: "Only {stock} left!",
    addToBag: "Add to Bag 🛍️",
    bagDrawerTitle: "Shopping Bag",
    bagSubtotal: "Subtotal",
    bagTotal: "Total",
    btnProceedCheckout: "🔒 Proceed to Checkout",
    emptyCartText: "Your shopping bag is empty",
    btnStartShopping: "Start Shopping",
    chkTitleStep1: "1",
    chkHeadingCust: "Customer Information",
    lblCustName: "Full Name / Booking Person Name",
    lblCustMobile: "Mobile Number",
    lblCustAddress: "Delivery Address",
    custNamePlaceholder: "Enter booking person name",
    custMobilePlaceholder: "Enter 10-digit mobile number",
    custAddressPlaceholder: "Enter full delivery address",
    chkTitleStep2: "2",
    chkHeadingPay: "Choose Payment Mode",
    payLabelCod: "Cash on Delivery",
    payDetailsTitle: "UPI Application Finalization",
    payDetailsDesc: "Securely checkout using digital UPI. The total bill amount is automatically fetched and locked. You do not need to enter or edit the amount.",
    lblAmountLock: "Locked Payment Amount (Non-editable)",
    orderSummaryTitle: "Order Summary",
    sumSubtotal: "Subtotal",
    sumTotal: "Total Amount",
    btnPlaceOrder: "💬 Place Order on WhatsApp",
    btnBackToShop: "🏪 Back to Shop",
    adminPanelHeading: "🛠️ Store Control Center",
    adminPanelSubheading: "Manage HKGN product listings, update stocks daily, and restore items.",
    adminBtnAddNew: "+ Add New Product",
    tabCatalog: "Active Catalog",
    tabRecycle: "Deleted Products Bin",
    thImage: "Image",
    thName: "Product Name",
    thCategory: "Category",
    thPrice: "Price",
    thStock: "Stock Level",
    thActions: "Actions",
    recycleTitle: "Deleted Product History",
    recycleDesc: "These products were added previously and then deleted. Click on any product card to re-add/restore it to the shop catalog.",
    addProductModalTitle: "Add New Product",
    addProductModalDesc: "Create a new agricultural product listing. This will immediately show up in the catalog for all customers.",
    lblNewProdName: "Product Name",
    lblNewProdCategory: "Category",
    optNewFertilisers: "Fertilisers",
    optNewPesticides: "Pesticides",
    optNewSeeds: "Seeds",
    lblNewProdPrice: "Price (₹)",
    lblNewProdStock: "Initial Stock",
    lblNewProdDesc: "Description",
    lblNewProdImage: "Choose Product Icon or Upload File",
    btnUploadImage: "📂 Or Upload Shop Image File",
    btnAddProdCancel: "Cancel",
    btnAddProdSubmit: "Add Listing",
    restoreModalTitle: "Restore Product",
    restoreModalDesc: "Do you want to add this product again to the catalog?",
    restoreModalCancel: "No",
    restoreModalConfirm: "Yes, Add This Product",
    toastAdded: "Added {name} to your bag!",
    toastUpdatedStock: "Stock updated for {name} to {stock}!",
    toastDeleted: "Moved {name} to Deleted Products Bin.",
    toastRestored: "Restored {name} back to the catalog!",
    toastPermanentDelete: "{name} has been permanently deleted from database.",
    restoreModalDeletePerm: "Delete Permanently",
    toastEnterDetails: "Please fill in all customer details.",
    toastValidPhone: "Please enter a valid 10-digit mobile number.",
    toastEmptyCart: "Your shopping bag is empty.",
    toastProductCreated: "New product {name} added successfully!",
    toastImageUploaded: "Product image uploaded successfully!",
    adminLoginTitle: "Admin Portal Login",
    adminLoginDesc: "Please enter the administrator credentials to access the store control center.",
    lblAdminPhone: "Admin Number",
    lblAdminPass: "Password",
    btnAdminLoginCancel: "Cancel",
    btnAdminLoginSubmit: "Login",
    toastAdminLoginSuccess: "Admin logged in successfully!",
    toastAdminLoginFail: "Invalid admin credentials! Please try again.",
    toastAdminLogout: "Logged out from Admin portal.",
    tabOrders: "Orders List",
    ordersTitle: "Customer Bookings / Orders",
    statusPending: "Pending",
    statusCompleted: "Completed",
    btnMarkCompleted: "Mark Completed",
    btnMarkPending: "Mark Pending",
    btnDeleteOrder: "Delete Order",
    thOrderNum: "Order #",
    thCustDetails: "Customer Details",
    thOrderItems: "Items Ordered",
    thOrderTotal: "Total Price",
    thOrderStatus: "Status",
    thOrderAction: "Actions",
    toastOrderDeleted: "Order #{id} has been deleted.",
    toastOrderStatusChanged: "Order #{id} status changed to {status}.",
    emptyOrders: "No orders have been placed yet.",
    btnExportOrders: "📥 Export to Excel",
    footerTagline: "Quality Pesticides, Fertilisers & Seeds in Punganur, India.",
    footerCredits: "© 2026 HKGN Agencies. All Rights Reserved.",
    shareTitle: "Share This Store:",
    shareBtnStoreCopied: "Store link copied to clipboard!",
    shareBtnWhatsappText: "WhatsApp",
    shareBtnCopyText: "Copy Link",
    shareBtnEmailText: "Email",
    addProductModalTitleEdit: "Edit Product",
    addProductModalDescEdit: "Modify the details of this product listing. All changes sync immediately to all customers.",
    btnAddProdSubmitEdit: "Update Product",
    toastProductUpdated: "Product {name} updated successfully!"
  },
  te: {
    logoSub: "పురుగు మందులు, ఎరువులు మరియు విత్తనాలు",
    searchPlaceholder: "పంట సంరక్షణ ఉత్పత్తుల కోసం వెతకండి...",
    roleUser: "👤 వినియోగదారుడు",
    roleAdmin: "🛠️ అడ్మిన్ మోడ్",
    heroTag: "✨ 2012 నుండి నాణ్యమైన పంట సంరక్షణ సేవలు",
    heroTitle: "HKGN ఉత్పత్తులతో<br><span class='gradient-text'>అధిక దిగుబడులు పొందండి</span>",
    heroDesc: "మేము నాణ్యమైన రసాయన పురుగుమందులు, సేంద్రీయ ఎరువులు మరియు హైబ్రిడ్ విత్తనాలను అందిస్తాము. అగ్రశ్రేణి వ్యవసాయ బ్రాండ్ల అధీకృత డీలర్.",
    heroBtnText: "🛒 ఉత్పత్తుల జాబితా",
    heroChip1: "🚜 100% అసలైనవి",
    heroChip2: "💧 సేంద్రీయ ఎంపికలు",
    heroChip3: "📞 నిపుణుల సలహాలు",
    filterTitle: "విభాగాలు",
    filterResetBtn: "రీసెట్ చేయి",
    catAll: "అన్ని ఉత్పత్తులు",
    catFertilisers: "ఎరువులు",
    catPesticides: "పురుగు మందులు",
    catSeeds: "విత్తనాలు",
    infoCardTitle: "హెచ్.కె.జి.ఎన్. ఏజెన్సీస్",
    infoCardProp: "యజమాని: సిద్దీఖ్ బాషా",
    infoCardAddress: "📍 ఆర్.టి.సి బస్టాండ్ రోడ్డు, పుంగనూరు",
    infoCardCell: "📞 ఫోన్: 90004 76878, 90598 47718",
    infoCardGST: "GSTIN: 37DTOPS6450N1ZN",
    productCountText: "{count} ఉత్పత్తులు చూపబడుతున్నాయి",
    sortLabel: "సార్ట్ చేయండి:",
    optSortName: "అక్షర క్రమం",
    optSortPriceLow: "ధర: తక్కువ నుండి ఎక్కువ",
    optSortPriceHigh: "ధర: ఎక్కువ నుండి తక్కువ",
    emptyTitle: "ఏ ఉత్పత్తులు దొరకలేదు",
    emptyDesc: "మరో పేరుతో వెతకండి లేదా ఫిల్టర్లను రీసెట్ చేయండి.",
    emptyBtn: "ఫిల్టర్స్ క్లియర్ చేయి",
    inStock: "అందుబాటులో ఉంది: {stock} మూటలు",
    outStock: "స్టాక్ లేదు",
    onlyLeft: "కేవలం {stock} మాత్రమే ఉన్నాయి!",
    addToBag: "సంచిలో వేయి 🛍️",
    bagDrawerTitle: "షాపింగ్ సంచి",
    bagSubtotal: "ఉప మొత్తం",
    bagTotal: "మొత్తం బిల్లు",
    btnProceedCheckout: "🔒 కొనుగోలు చేయి",
    emptyCartText: "మీ షాపింగ్ సంచి ఖాళీగా ఉంది",
    btnStartShopping: "కొనుగోలు ప్రారంభించు",
    chkTitleStep1: "1",
    chkHeadingCust: "కస్టమర్ సమాచారం",
    lblCustName: "పూర్తి పేరు / బుకింగ్ చేసే వ్యక్తి పేరు",
    lblCustMobile: "మొబైల్ సంఖ్య",
    lblCustAddress: "డెలివరీ చిరునామా",
    custNamePlaceholder: "పేరు నమోదు చేయండి",
    custMobilePlaceholder: "10 అంకెల మొబైల్ సంఖ్య నమోదు చేయండి",
    custAddressPlaceholder: "పూర్తి చిరునామా నమోదు చేయండి",
    chkTitleStep2: "2",
    chkHeadingPay: "చెల్లింపు పద్ధతి",
    payLabelCod: "క్యాష్ ఆన్ డెలివరీ (COD)",
    payDetailsTitle: "UPI యాప్ చెల్లింపు వివరాలు",
    payDetailsDesc: "UPI ద్వారా సురక్షితంగా చెల్లించండి. మొత్తం బిల్లు ధర లాక్ చేయబడింది. మీరు ధరను మార్చలేరు.",
    lblAmountLock: "లాక్ చేయబడిన బిల్లు మొత్తం (మార్చడానికి వీలులేదు)",
    orderSummaryTitle: "ఆర్డర్ సారాంశం",
    sumSubtotal: "ఉప మొత్తం",
    sumTotal: "మొత్తం బిల్లు",
    btnPlaceOrder: "💬 వాట్సాప్‌లో ఆర్డర్ చేయండి",
    btnBackToShop: "🏪 తిరిగి దుకాణానికి",
    adminPanelHeading: "🛠️ స్టోర్ కంట్రోల్ సెంటర్",
    adminPanelSubheading: "ఉత్పత్తుల జాబితా, ప్రతిరోజూ స్టాక్ నవీకరణ మరియు తొలగించిన వస్తువుల పునరుద్ధరణ.",
    adminBtnAddNew: "+ కొత్త ఉత్పత్తిని జోడించు",
    tabCatalog: "యాక్టివ్ ఉత్పత్తులు",
    tabRecycle: "తొలగించిన ఉత్పత్తుల సంచి",
    thImage: "చిత్రం",
    thName: "ఉత్పత్తి పేరు",
    thCategory: "విభాగం",
    thPrice: "ధర",
    thStock: "స్టాక్ స్థాయి",
    thActions: "చర్యలు",
    recycleTitle: "తొలగించిన ఉత్పత్తుల చరిత్ర",
    recycleDesc: "గతంలో జోడించి ఆపై తొలగించిన ఉత్పత్తులు ఇవి. కేటలాగ్‌కు పునరుద్ధరించడానికి ఏదైనా ఉత్పత్తిపై క్లిక్ చేయండి.",
    addProductModalTitle: "కొత్త ఉత్పత్తిని జోడించు",
    addProductModalDesc: "కొత్త వ్యవసాయ ఉత్పత్తిని జోడించండి. ఇది వెంటనే కేటలాగ్‌లో కనిపిస్తుంది.",
    lblNewProdName: "ఉత్పత్తి పేరు",
    lblNewProdCategory: "విభాగం",
    optNewFertilisers: "ఎరువులు",
    optNewPesticides: "పురుగు మందులు",
    optNewSeeds: "విత్తనాలు",
    lblNewProdPrice: "ధర (₹)",
    lblNewProdStock: "ప్రారంభ స్టాక్",
    lblNewProdDesc: "వివరణ",
    lblNewProdImage: "ఉత్పత్తి చిహ్నం లేదా చిత్రం అప్‌లోడ్ చేయండి",
    btnUploadImage: "📂 లేదా ఫోన్ గ్యాలరీ చిత్రం అప్‌లోడ్ చేయి",
    btnAddProdCancel: "రద్దు చేయి",
    btnAddProdSubmit: "ఉత్పత్తిని జోడించు",
    restoreModalTitle: "ఉత్పత్తిని పునరుద్ధరించు",
    restoreModalDesc: "ఈ ఉత్పత్తిని మళ్లీ దుకాణం కేటలాగ్‌లోకి జోడించాలనుకుంటున్నారా?",
    restoreModalCancel: "వద్దు",
    restoreModalConfirm: "అవును, జోడించు",
    toastAdded: "సంచిలో {name} విజయవంతంగా జోడించబడింది!",
    toastUpdatedStock: "{name} స్టాక్ స్థాయి {stock} కి నవీకరించబడింది!",
    toastDeleted: "{name} తొలగించిన ఉత్పత్తుల సంచికి తరలించబడింది.",
    toastRestored: "{name} విజయవంతంగా దుకాణంలోకి పునరుద్ధరించబడింది!",
    toastPermanentDelete: "{name} డేటాబేస్ నుండి శాశ్వతంగా తొలగించబడింది.",
    restoreModalDeletePerm: "శాశ్వతంగా తొలగించు",
    toastEnterDetails: "దయచేసి కస్టమర్ వివరాలన్నీ నమోదు చేయండి.",
    toastValidPhone: "దయచేసి సరైన 10 అంకెల మొబైల్ సంఖ్యను నమోదు చేయండి.",
    toastEmptyCart: "మీ షాపింగ్ సంచి ఖాళీగా ఉంది.",
    toastProductCreated: "కొత్త ఉత్పత్తి {name} విజయవంతంగా జోడించబడింది!",
    toastImageUploaded: "ఉత్పత్తి చిత్రం విజయవంతంగా అప్‌లోడ్ చేయబడింది!",
    adminLoginTitle: "అడ్మిన్ లాగిన్",
    adminLoginDesc: "స్టోర్ కంట్రోల్ సెంటర్ ప్రవేశించడానికి అడ్మినిస్ట్రేటర్ ఆధారాలను నమోదు చేయండి.",
    lblAdminPhone: "అడ్మిన్ నంబర్",
    lblAdminPass: "పాస్‌వర్డ్",
    btnAdminLoginCancel: "రద్దు చేయి",
    btnAdminLoginSubmit: "లాగిన్",
    toastAdminLoginSuccess: "అడ్మిన్ లాగిన్ విజయవంతమైంది!",
    toastAdminLoginFail: "తప్పుడు అడ్మిన్ వివరాలు! దయచేసి మళ్లీ ప్రయత్నించండి.",
    toastAdminLogout: "అడ్మిన్ పోర్టల్ నుండి విజయవంతంగా నిష్క్రమించారు.",
    tabOrders: "ఆర్డర్ల జాబితా",
    ordersTitle: "వినియోగదారుల బుకింగ్‌లు / ఆర్డర్లు",
    statusPending: "పెండింగ్",
    statusCompleted: "పూర్తయింది",
    btnMarkCompleted: "పూర్తయినట్లు మార్క్ చేయి",
    btnMarkPending: "పెండింగ్‌లో పెట్టండి",
    btnDeleteOrder: "తొలగించు",
    thOrderNum: "ఆర్డర్ #",
    thCustDetails: "కస్టమర్ వివరాలు",
    thOrderItems: "ఉత్పత్తుల వివరాలు",
    thOrderTotal: "మొత్తం ధర",
    thOrderStatus: "స్థితి",
    thOrderAction: "చర్యలు",
    toastOrderDeleted: "ఆర్డర్ #{id} తొలగించబడింది.",
    toastOrderStatusChanged: "ఆర్డర్ #{id} స్థితి {status} కి మార్చబడింది.",
    emptyOrders: "ఇంకా ఎటువంటి ఆర్డర్లు రాలేదు.",
    btnExportOrders: "📥 ఎక్సెల్‌కు ఎగుమతి చేయి",
    footerTagline: "పుంగనూరులో నాణ్యమైన పురుగుమందులు, ఎరువులు మరియు విత్తనాలు.",
    footerCredits: "© 2026 హెచ్.కె.జి.ఎన్. ఏజెన్సీస్. సర్వ హక్కులూ ప్రత్యేకించబడినవి.",
    shareTitle: "ఈ స్టోర్‌ను షేర్ చేయండి:",
    shareBtnStoreCopied: "స్టోర్ లింక్ కాపీ చేయబడింది!",
    shareBtnWhatsappText: "వాట్సాప్",
    shareBtnCopyText: "లింక్ కాపీ చేయి",
    shareBtnEmailText: "ఈమెయిల్",
    addProductModalTitleEdit: "ఉత్పత్తిని సవరించు",
    addProductModalDescEdit: "ఈ ఉత్పత్తి యొక్క వివరాలను మార్చండి. అన్ని మార్పులు కస్టమర్లందరికీ వెంటనే సమకాలీకరించబడతాయి.",
    btnAddProdSubmitEdit: "ఉత్పత్తిని నవీకరించు",
    toastProductUpdated: "ఉత్పత్తి {name} విజయవంతంగా నవీకరించబడింది!"
  }
};

/* ============================================================
   INITIAL SEED PRODUCTS (Loaded only once to LocalStorage)
============================================================ */
const SEED_PRODUCTS = [
  {
    id: 1,
    name: "Urea Fertiliser (50kg Bag)",
    category: "fertilisers",
    price: 350,
    stock: 25,
    image: "🌾",
    description: "High-quality nitrogenous fertiliser essential for boosting leafy green crop growth and crop health."
  },
  {
    id: 2,
    name: "DAP Fertiliser (50kg Bag)",
    category: "fertilisers",
    price: 1350,
    stock: 18,
    image: "📦",
    description: "Diammonium Phosphate containing rich phosphate content for healthy root systems and early crop vigor."
  },
  {
    id: 3,
    name: "Organic Neem Oil Pesticide (1 Litre)",
    category: "pesticides",
    price: 280,
    stock: 45,
    image: "🧪",
    description: "Cold-pressed pure organic neem oil pesticide. Safe bio-control against aphids, whiteflies, and scale pests."
  },
  {
    id: 4,
    name: "Hybrid Tomato Seeds (100g Pack)",
    category: "seeds",
    price: 150,
    stock: 30,
    image: "🌻",
    description: "High germination rate hybrid tomato seeds. Yields firm, bright red tomatoes with excellent shelf life."
  },
  {
    id: 5,
    name: "BT Cotton Seeds (Jadoo - 450g Pack)",
    category: "seeds",
    price: 860,
    stock: 0,
    image: "🌾",
    description: "Premium high-boll capacity BT Cotton seeds resistant to bollworms. Note: Currently Out of Stock."
  }
];

/* ============================================================
   APPLICATION STATE
============================================================ */
let state = {
  products: [],
  deletedProducts: [],
  cart: [],
  language: "en", // "en" or "te"
  role: "user",   // "user" or "admin"
  theme: "dark",  // "dark" or "light"
  filters: {
    category: "all",
    search: ""
  },
  sortBy: "name",
  checkoutActive: false,
  selectedPaymentMode: "COD",
  activeAdminTab: "catalog",
  tempSelectedEmoji: "🌾",
  uploadedImageBase64: null,
  restoreTargetProduct: null,
  editingProductId: null,
  orders: []
};

/* ============================================================
   CORE RUNTIME INITIALIZATION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  syncDOMTheme();
  renderApp();

  // Socket.io handles database initialization automatically on connection.
});

function loadStateFromStorage() {
  // Products
  const savedProducts = localStorage.getItem("hkgn_products");
  if (savedProducts) {
    state.products = JSON.parse(savedProducts);
  } else {
    state.products = [...SEED_PRODUCTS];
    localStorage.setItem("hkgn_products", JSON.stringify(state.products));
  }

  // Deleted Products History (Recycle Bin)
  const savedDeleted = localStorage.getItem("hkgn_deleted_products");
  if (savedDeleted) {
    state.deletedProducts = JSON.parse(savedDeleted);
  } else {
    state.deletedProducts = [];
    localStorage.setItem("hkgn_deleted_products", JSON.stringify([]));
  }

  // Orders List
  const savedOrders = localStorage.getItem("hkgn_orders");
  if (savedOrders) {
    state.orders = JSON.parse(savedOrders);
  } else {
    state.orders = [];
    localStorage.setItem("hkgn_orders", JSON.stringify([]));
  }

  // Cart
  const savedCart = localStorage.getItem("hkgn_cart");
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  } else {
    state.cart = [];
  }

  // Settings
  state.language = localStorage.getItem("hkgn_lang") || "en";
  state.role = "user"; // Always default to User Portal on startup
  state.theme = localStorage.getItem("hkgn_theme") || "dark";
}

function saveProductsToStorage() {
  localStorage.setItem("hkgn_products", JSON.stringify(state.products));
  syncProductsToCloud();
}

function saveDeletedProductsToStorage() {
  localStorage.setItem("hkgn_deleted_products", JSON.stringify(state.deletedProducts));
  syncDeletedProductsToCloud();
}

function saveOrdersToStorage() {
  localStorage.setItem("hkgn_orders", JSON.stringify(state.orders));
  syncOrdersToCloud();
}


function saveCartToStorage() {
  localStorage.setItem("hkgn_cart", JSON.stringify(state.cart));
}

/* ============================================================
   DATABASE SYNC FUNCTIONS (REAL-TIME WEBSOCKETS VIA SOCKET.IO)
============================================================ */
// Establish socket connection to the current host
const socket = io(window.location.origin);

// Connection status handler
socket.on("connect", () => {
  console.log("Connected to HKGN Agencies Real-time Sync Server");
});

// Receive initial database dump on connect
socket.on("init_data", (data) => {
  console.log("Loaded initial database state:", data);
  if (data.products) {
    state.products = data.products;
    localStorage.setItem("hkgn_products", JSON.stringify(data.products));
  }
  if (data.deleted) {
    state.deletedProducts = data.deleted;
    localStorage.setItem("hkgn_deleted_products", JSON.stringify(data.deleted));
  }
  if (data.orders) {
    state.orders = data.orders;
    localStorage.setItem("hkgn_orders", JSON.stringify(data.orders));
  }
  
  // Render active view
  if (state.role === "admin") {
    renderAdminPanel();
  } else {
    renderProductsGrid();
  }
});

// Listen for updates broadcast by other clients
socket.on("products_updated", (data) => {
  console.log("Products updated in real-time:", data);
  state.products = data;
  localStorage.setItem("hkgn_products", JSON.stringify(data));
  if (state.role === "admin") {
    renderAdminPanel();
  } else {
    renderProductsGrid();
  }
});

socket.on("deleted_updated", (data) => {
  console.log("Deleted bin updated in real-time:", data);
  state.deletedProducts = data;
  localStorage.setItem("hkgn_deleted_products", JSON.stringify(data));
  if (state.role === "admin" && state.activeAdminTab === "recycle") {
    renderAdminPanel();
  }
});

socket.on("orders_updated", (data) => {
  console.log("Orders database updated in real-time:", data);
  state.orders = data;
  localStorage.setItem("hkgn_orders", JSON.stringify(data));
  if (state.role === "admin" && state.activeAdminTab === "orders") {
    renderAdminPanel();
  }
});

// Socket emit helpers
function syncProductsToCloud() {
  socket.emit("update_products", state.products);
}

function syncDeletedProductsToCloud() {
  socket.emit("update_deleted", state.deletedProducts);
}

function syncOrdersToCloud() {
  socket.emit("update_orders", state.orders);
}

/* ============================================================
   THEMING
============================================================ */
function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("hkgn_theme", state.theme);
  syncDOMTheme();
}

function syncDOMTheme() {
  const body = document.body;
  const themeBtn = document.getElementById("themeToggle");
  
  if (state.theme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    if (themeBtn) themeBtn.innerHTML = "<span>☀️</span>";
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    if (themeBtn) themeBtn.innerHTML = "<span>🌙</span>";
  }
}

/* ============================================================
   ROLE & LANGUAGE TOGGLING
============================================================ */
function setLanguage(lang) {
  state.language = lang;
  localStorage.setItem("hkgn_lang", lang);
  
  // Style active language button
  document.getElementById("langBtnEn").classList.toggle("active", lang === "en");
  document.getElementById("langBtnTe").classList.toggle("active", lang === "te");

  renderTranslations();
  renderProductsGrid();
  renderCartDrawer();
  renderCheckoutView();
  renderAdminPanel();
}

function toggleRole() {
  const dict = TRANSLATIONS[state.language];
  if (state.role === "admin") {
    // Log out admin
    state.role = "user";
    localStorage.removeItem("hkgn_role"); // Clean any old persistent role
    state.checkoutActive = false;
    showToast(dict.toastAdminLogout);
    renderApp();
  } else {
    // Open password login gate
    openAdminLoginModal();
  }
}

function renderApp() {
  const userStoreSection = document.getElementById("userStoreSection");
  const heroSection = document.getElementById("heroSection");
  const adminSection = document.getElementById("adminSection");
  const checkoutSection = document.getElementById("checkoutSection");
  const roleToggleBtn = document.getElementById("roleToggleBtn");
  const searchWrapper = document.getElementById("headerSearchWrapper");

  // Sync role badge styles
  roleToggleBtn.className = state.role === "admin" ? "role-badge admin-role" : "role-badge";

  if (state.role === "admin") {
    userStoreSection.style.display = "none";
    heroSection.style.display = "none";
    checkoutSection.style.display = "none";
    searchWrapper.style.display = "none";
    adminSection.style.display = "block";
    renderAdminPanel();
  } else {
    adminSection.style.display = "none";
    if (state.checkoutActive) {
      userStoreSection.style.display = "none";
      heroSection.style.display = "none";
      checkoutSection.style.display = "block";
      searchWrapper.style.display = "none";
      renderCheckoutView();
    } else {
      userStoreSection.style.display = "block";
      heroSection.style.display = "grid";
      checkoutSection.style.display = "none";
      searchWrapper.style.display = "block";
      renderProductsGrid();
    }
  }

  renderTranslations();
  updateBagBadge();
}

function renderTranslations() {
  const dict = TRANSLATIONS[state.language];

  // Headers & Logos
  document.getElementById("logoSub").textContent = dict.logoSub;
  document.getElementById("searchInput").placeholder = dict.searchPlaceholder;
  document.getElementById("roleLabel").textContent = state.role === "admin" ? dict.roleAdmin : dict.roleUser;

  // Hero Section
  document.getElementById("heroTag").textContent = dict.heroTag;
  document.getElementById("heroTitle").innerHTML = dict.heroTitle;
  document.getElementById("heroDesc").textContent = dict.heroDesc;
  document.getElementById("heroChip1").textContent = dict.heroChip1;
  document.getElementById("heroChip2").textContent = dict.heroChip2;
  document.getElementById("heroChip3").textContent = dict.heroChip3;
  
  // Sidebar Filters
  document.getElementById("filterTitle").textContent = dict.filterTitle;
  document.getElementById("filterResetBtn").textContent = dict.filterResetBtn;
  document.getElementById("catAll").textContent = dict.catAll;
  document.getElementById("catFertilisers").textContent = dict.catFertilisers;
  document.getElementById("catPesticides").textContent = dict.catPesticides;
  document.getElementById("catSeeds").textContent = dict.catSeeds;

  // Sidebar info card
  document.getElementById("infoCardTitle").textContent = dict.infoCardTitle;
  document.getElementById("infoCardProp").textContent = dict.infoCardProp;
  document.getElementById("infoCardAddress").textContent = dict.infoCardAddress;
  document.getElementById("infoCardCell").textContent = dict.infoCardCell;
  document.getElementById("infoCardGST").textContent = dict.infoCardGST;

  // Sort labels
  document.getElementById("sortLabel").textContent = dict.sortLabel;
  document.getElementById("optSortName").textContent = dict.optSortName;
  document.getElementById("optSortPriceLow").textContent = dict.optSortPriceLow;
  document.getElementById("optSortPriceHigh").textContent = dict.optSortPriceHigh;

  // Empty state translations
  document.getElementById("emptyTitle").textContent = dict.emptyTitle;
  document.getElementById("emptyDesc").textContent = dict.emptyDesc;
  document.getElementById("emptyBtn").textContent = dict.emptyBtn;

  // Bag drawer
  document.getElementById("bagDrawerTitle").textContent = dict.bagDrawerTitle;
  document.getElementById("bagSubtotal").textContent = dict.bagSubtotal;
  document.getElementById("bagTotal").textContent = dict.bagTotal;
  document.getElementById("btnProceedCheckout").textContent = dict.btnProceedCheckout;

  // Checkout labels
  document.getElementById("chkTitleStep1").textContent = dict.chkTitleStep1;
  document.getElementById("chkHeadingCust").textContent = dict.chkHeadingCust;
  document.getElementById("lblCustName").textContent = dict.lblCustName;
  document.getElementById("lblCustMobile").textContent = dict.lblCustMobile;
  document.getElementById("lblCustAddress").textContent = dict.lblCustAddress;
  document.getElementById("custName").placeholder = dict.custNamePlaceholder;
  document.getElementById("custMobile").placeholder = dict.custMobilePlaceholder;
  document.getElementById("custAddress").placeholder = dict.custAddressPlaceholder;
  document.getElementById("chkTitleStep2").textContent = dict.chkTitleStep2;
  document.getElementById("chkHeadingPay").textContent = dict.chkHeadingPay;
  document.getElementById("payLabelCod").textContent = dict.payLabelCod;
  document.getElementById("payDetailsTitle").textContent = dict.payDetailsTitle;
  document.getElementById("payDetailsDesc").textContent = dict.payDetailsDesc;
  document.getElementById("lblAmountLock").textContent = dict.lblAmountLock;
  document.getElementById("orderSummaryTitle").textContent = dict.orderSummaryTitle;
  document.getElementById("sumSubtotal").textContent = dict.sumSubtotal;
  document.getElementById("sumTotal").textContent = dict.sumTotal;
  document.getElementById("btnPlaceOrder").textContent = dict.btnPlaceOrder;
  document.getElementById("btnBackToShop").textContent = dict.btnBackToShop;

  // Admin Portal labels
  document.getElementById("adminPanelHeading").textContent = dict.adminPanelHeading;
  document.getElementById("adminPanelSubheading").textContent = dict.adminPanelSubheading;
  document.getElementById("adminBtnAddNew").textContent = dict.adminBtnAddNew;
  document.getElementById("tabCatalog").textContent = dict.tabCatalog;
  document.getElementById("tabRecycle").textContent = dict.tabRecycle;
  document.getElementById("thImage").textContent = dict.thImage;
  document.getElementById("thName").textContent = dict.thName;
  document.getElementById("thCategory").textContent = dict.thCategory;
  document.getElementById("thPrice").textContent = dict.thPrice;
  document.getElementById("thStock").textContent = dict.thStock;
  document.getElementById("thActions").textContent = dict.thActions;
  document.getElementById("recycleTitle").textContent = dict.recycleTitle;
  document.getElementById("recycleDesc").textContent = dict.recycleDesc;

  // Add product modal
  document.getElementById("addProductModalTitle").textContent = dict.addProductModalTitle;
  document.getElementById("addProductModalDesc").textContent = dict.addProductModalDesc;
  document.getElementById("lblNewProdName").textContent = dict.lblNewProdName;
  document.getElementById("lblNewProdCategory").textContent = dict.lblNewProdCategory;
  document.getElementById("optNewFertilisers").textContent = dict.optNewFertilisers;
  document.getElementById("optNewPesticides").textContent = dict.optNewPesticides;
  document.getElementById("optNewSeeds").textContent = dict.optNewSeeds;
  document.getElementById("lblNewProdPrice").textContent = dict.lblNewProdPrice;
  document.getElementById("lblNewProdStock").textContent = dict.lblNewProdStock;
  document.getElementById("lblNewProdDesc").textContent = dict.lblNewProdDesc;
  document.getElementById("lblNewProdImage").textContent = dict.lblNewProdImage;
  document.getElementById("btnUploadImage").textContent = dict.btnUploadImage;
  document.getElementById("btnAddProdCancel").textContent = dict.btnAddProdCancel;
  document.getElementById("btnAddProdSubmit").textContent = dict.btnAddProdSubmit;

  // Confirm restore modal
  document.getElementById("restoreModalTitle").textContent = dict.restoreModalTitle;
  document.getElementById("restoreModalDesc").textContent = dict.restoreModalDesc;
  document.getElementById("restoreModalCancel").textContent = dict.restoreModalCancel;
  document.getElementById("restoreModalConfirm").textContent = dict.restoreModalConfirm;
  document.getElementById("restoreModalDeletePerm").textContent = dict.restoreModalDeletePerm;

  // Admin Login modal
  document.getElementById("adminLoginTitle").textContent = dict.adminLoginTitle;
  document.getElementById("adminLoginDesc").textContent = dict.adminLoginDesc;
  document.getElementById("lblAdminPhone").textContent = dict.lblAdminPhone;
  document.getElementById("lblAdminPass").textContent = dict.lblAdminPass;
  document.getElementById("btnAdminLoginCancel").textContent = dict.btnAdminLoginCancel;
  document.getElementById("btnAdminLoginSubmit").textContent = dict.btnAdminLoginSubmit;

  // Admin Orders tab
  document.getElementById("tabOrders").textContent = dict.tabOrders;
  document.getElementById("ordersTitle").textContent = dict.ordersTitle;
  document.getElementById("btnExportOrders").textContent = dict.btnExportOrders;

  // Footer & Share translations
  document.getElementById("footerTagline").textContent = dict.footerTagline;
  document.getElementById("footerCredits").textContent = dict.footerCredits;
  document.getElementById("shareTitle").textContent = dict.shareTitle;
  document.getElementById("shareBtnWhatsappText").textContent = dict.shareBtnWhatsappText;
  document.getElementById("shareBtnCopyText").textContent = dict.shareBtnCopyText;
  document.getElementById("shareBtnEmailText").textContent = dict.shareBtnEmailText;
}

function shareStore(platform) {
  const storeUrl = window.location.origin + window.location.pathname;
  const storeText = "Check out HKGN Agencies Store (Punganur) for quality pesticides, fertilisers, and seeds! Order directly on WhatsApp: ";
  const dict = TRANSLATIONS[state.language];

  if (platform === 'whatsapp') {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(storeText + storeUrl)}`;
    window.open(waUrl, '_blank');
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(storeUrl)
      .then(() => {
        showToast(dict.shareBtnStoreCopied);
      })
      .catch(err => {
        console.error("Failed to copy link:", err);
      });
  } else if (platform === 'email') {
    const emailUrl = `mailto:?subject=${encodeURIComponent("HKGN Agencies Agricultural Store")}&body=${encodeURIComponent(storeText + storeUrl)}`;
    window.open(emailUrl, '_blank');
  }
}


/* ============================================================
   USER CATALOG & FILTER ACTION
============================================================ */
function scrollToCatalog() {
  document.getElementById("userStoreSection").scrollIntoView({ behavior: "smooth" });
}

function handleSearch(val) {
  state.filters.search = val.toLowerCase().trim();
  renderProductsGrid();
}

function setCategory(cat, btn) {
  state.filters.category = cat;
  
  // Highlight active sidebar pill
  document.querySelectorAll(".category-pill").forEach(el => el.classList.remove("active"));
  btn.classList.add("active");

  renderProductsGrid();
}

function clearFilters() {
  state.filters.category = "all";
  state.filters.search = "";
  document.getElementById("searchInput").value = "";
  
  document.querySelectorAll(".category-pill").forEach(el => el.classList.remove("active"));
  document.getElementById("catAll").classList.add("active");

  renderProductsGrid();
}

function handleSort(val) {
  state.sortBy = val;
  renderProductsGrid();
}

/* ============================================================
   PRODUCTS GRID RENDER
============================================================ */
function renderProductsGrid() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const countText = document.getElementById("productCountText");
  const dict = TRANSLATIONS[state.language];

  // Filter
  let filtered = state.products.filter(p => {
    const matchesCat = state.filters.category === "all" || p.category === state.filters.category;
    
    // Search is bilingual
    const nameMatch = p.name.toLowerCase().includes(state.filters.search);
    const descMatch = p.description.toLowerCase().includes(state.filters.search);
    
    return matchesCat && (nameMatch || descMatch);
  });

  // Sort
  if (state.sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  // Count text
  countText.textContent = dict.productCountText.replace("{count}", filtered.length);

  // Render
  grid.innerHTML = "";
  if (filtered.length === 0) {
    emptyState.style.display = "block";
    grid.style.display = "none";
  } else {
    emptyState.style.display = "none";
    grid.style.display = "grid";

    filtered.forEach(p => {
      const isOutOfStock = p.stock <= 0;
      
      // Stock Badge text & color
      let stockBadgeText = "";
      let stockBadgeClass = "";
      if (isOutOfStock) {
        stockBadgeText = dict.outStock;
        stockBadgeClass = "out-stock";
      } else if (p.stock <= 5) {
        stockBadgeText = dict.onlyLeft.replace("{stock}", p.stock);
        stockBadgeClass = "out-stock"; // highlight warning in red
      } else {
        stockBadgeText = dict.inStock.replace("{stock}", p.stock);
        stockBadgeClass = "in-stock";
      }

      // Image or emoji render
      const isBase64 = p.image.startsWith("data:");
      const imageTag = isBase64 
        ? `<img src="${p.image}" alt="${p.name}" class="product-image" />`
        : `<span style="font-size: 5.5rem;">${p.image}</span>`;

      const card = document.createElement("div");
      card.className = "product-card glass-card";
      card.innerHTML = `
        <div class="product-image-container">
          ${isOutOfStock ? `<span class="product-tag badge badge-danger">${dict.outStock}</span>` : ""}
          ${imageTag}
        </div>
        <div class="product-info">
          <span class="product-category">${dict["cat" + p.category.charAt(0).toUpperCase() + p.category.slice(1)] || p.category}</span>
          <h4 class="product-title">${p.name}</h4>
          <p class="product-desc">${p.description}</p>
          <div class="product-meta-row">
            <span class="product-price">₹${p.price}</span>
            <span class="product-stock ${stockBadgeClass}">${stockBadgeText}</span>
          </div>
          <button class="btn-primary btn-full" onclick="addToBag(${p.id})" ${isOutOfStock ? "disabled" : ""}>
            ${isOutOfStock ? dict.outStock : dict.addToBag}
          </button>
        </div>
      `;
      grid.appendChild(card);
    });
  }
}

/* ============================================================
   SHOPPING BAG / CART FUNCTIONALITY
============================================================ */
function updateBagBadge() {
  const badge = document.getElementById("bagCount");
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = count;
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  
  if (open) {
    renderCartDrawer();
    drawer.classList.add("active");
    overlay.classList.add("active");
  } else {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function addToBag(prodId) {
  const prod = state.products.find(p => p.id === prodId);
  if (!prod || prod.stock <= 0) return;

  const cartItem = state.cart.find(item => item.id === prodId);
  const dict = TRANSLATIONS[state.language];

  if (cartItem) {
    if (cartItem.qty < prod.stock) {
      cartItem.qty += 1;
      showToast(dict.toastAdded.replace("{name}", prod.name));
    } else {
      showToast(`${dict.onlyLeft.replace("{stock}", prod.stock)}`, true);
    }
  } else {
    state.cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      qty: 1
    });
    showToast(dict.toastAdded.replace("{name}", prod.name));
  }

  saveCartToStorage();
  updateBagBadge();
  renderProductsGrid();
}

function updateCartQty(prodId, change) {
  const item = state.cart.find(i => i.id === prodId);
  const prod = state.products.find(p => p.id === prodId);
  if (!item || !prod) return;

  const newQty = item.qty + change;
  if (newQty <= 0) {
    state.cart = state.cart.filter(i => i.id !== prodId);
  } else if (newQty <= prod.stock) {
    item.qty = newQty;
  } else {
    const dict = TRANSLATIONS[state.language];
    showToast(`${dict.onlyLeft.replace("{stock}", prod.stock)}`, true);
  }

  saveCartToStorage();
  updateBagBadge();
  renderCartDrawer();
}

function removeFromCart(prodId) {
  state.cart = state.cart.filter(i => i.id !== prodId);
  saveCartToStorage();
  updateBagBadge();
  renderCartDrawer();
}

function renderCartDrawer() {
  const container = document.getElementById("bagDrawerItems");
  const footer = document.getElementById("bagDrawerFooter");
  const subtotalVal = document.getElementById("bagSubtotalVal");
  const totalVal = document.getElementById("bagTotalVal");
  const dict = TRANSLATIONS[state.language];

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-cart-icon">👜</span>
        <p>${dict.emptyCartText}</p>
        <button class="btn-primary" style="margin-top: 15px;" onclick="toggleCartDrawer(false)">
          ${dict.btnStartShopping}
        </button>
      </div>
    `;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  container.innerHTML = "";

  let subtotal = 0;

  state.cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const isBase64 = item.image.startsWith("data:");
    const imageTag = isBase64 
      ? `<img src="${item.image}" alt="${item.name}" />`
      : `<span style="font-size: 1.8rem;">${item.image}</span>`;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-img">
        ${imageTag}
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price}</div>
        <div class="cart-item-actions">
          <div class="cart-qty">
            <span class="cart-qty-btn" onclick="updateCartQty(${item.id}, -1)">-</span>
            <span class="cart-qty-val">${item.qty}</span>
            <span class="cart-qty-btn" onclick="updateCartQty(${item.id}, 1)">+</span>
          </div>
          <span class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</span>
        </div>
      </div>
    `;
    container.appendChild(row);
  });

  subtotalVal.textContent = `₹${subtotal}`;
  totalVal.textContent = `₹${subtotal}`;
}

function checkoutFromBag() {
  toggleCartDrawer(false);
  state.checkoutActive = true;
  renderApp();
}

/* ============================================================
   USER CHECKOUT FLOW
============================================================ */
function showCatalogView() {
  state.checkoutActive = false;
  renderApp();
}

function setPaymentMode(mode) {
  state.selectedPaymentMode = "COD";
}

function renderCheckoutView() {
  const listContainer = document.getElementById("checkoutSummaryItems");
  const subtotalVal = document.getElementById("chkSubtotalVal");
  const totalVal = document.getElementById("chkTotalVal");
  const lockedDisplay = document.getElementById("lockedAmountDisplay");
  const dict = TRANSLATIONS[state.language];

  if (state.cart.length === 0) {
    listContainer.innerHTML = `<p class="text-center" style="color:var(--text-secondary);">${dict.emptyCartText}</p>`;
    subtotalVal.textContent = "₹0.00";
    totalVal.textContent = "₹0.00";
    lockedDisplay.textContent = "₹0.00";
    return;
  }

  listContainer.innerHTML = "";
  let subtotal = 0;

  state.cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justify = "space-between";
    row.style.fontSize = "0.85rem";
    row.style.marginBottom = "8px";
    row.style.color = "var(--text-secondary)";
    row.innerHTML = `
      <span>${item.name} <strong>x${item.qty}</strong></span>
      <span>₹${itemTotal}</span>
    `;
    listContainer.appendChild(row);
  });

  subtotalVal.textContent = `₹${subtotal}`;
  totalVal.textContent = `₹${subtotal}`;
  lockedDisplay.textContent = `₹${subtotal}`;
}

function isValidIndianMobile(phone) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  
  // Must be exactly 10 digits
  if (cleanPhone.length !== 10) return false;
  
  // Must start with 6, 7, 8, or 9 (standard Indian mobile numbers)
  if (!/^[6-9]/.test(cleanPhone)) return false;
  
  // Block all-same digits (e.g., 9999999999, 0000000000)
  if (/^(\d)\1{9}$/.test(cleanPhone)) return false;
  
  // Block common fake sequences
  const fakeSequences = ["9876543210", "8765432109", "7654321098", "6789012345", "1234567890", "0123456789"];
  if (fakeSequences.includes(cleanPhone)) return false;
  
  return true;
}

function submitOrder() {
  const name = document.getElementById("custName").value.trim();
  const mobile = document.getElementById("custMobile").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const dict = TRANSLATIONS[state.language];

  if (!name || !mobile || !address) {
    showToast(dict.toastEnterDetails, true);
    return;
  }

  // Validate 10 digit real mobile number
  if (!isValidIndianMobile(mobile)) {
    showToast(dict.toastValidPhone, true);
    return;
  }

  if (state.cart.length === 0) {
    showToast(dict.toastEmptyCart, true);
    return;
  }

  // Calculate new order number first
  const newOrderNum = state.orders.length > 0 ? Math.max(...state.orders.map(o => o.orderNum || 1000)) + 1 : 1001;

  // Calculate total
  let total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Formulate items list text
  let itemsText = "";
  state.cart.forEach(item => {
    itemsText += `\n- ${item.qty}x ${item.name} (₹${item.price} each) - ₹${item.price * item.qty}`;
  });

  // Construct message template with the specific Order Number
  const textMessage = 
`🔔 *NEW BOOKING ORDER #${newOrderNum} - HKGN AGENCIES* 🌾
---------------------------------------------
👤 *Customer Name:* ${name}
📱 *Contact Number:* ${mobile}
📍 *Delivery Address:* ${address}
💳 *Payment Mode:* ${state.selectedPaymentMode}

📦 *Items Ordered:*${itemsText}

💰 *Total Amount:* ₹${total} (Locked Amount)
---------------------------------------------
_Order placed via HKGN Store Web Application_`;

  // Encode message for URL
  const encodedText = encodeURIComponent(textMessage);
  
  // target number: admin Siddiq Basha
  const adminWhatsAppNumber = "919391595381"; 

  // Open WhatsApp Link
  const waUrl = `https://wa.me/${adminWhatsAppNumber}?text=${encodedText}`;
  window.open(waUrl, "_blank");

  // Deduct stock levels in state locally
  state.cart.forEach(cartItem => {
    const dbProduct = state.products.find(p => p.id === cartItem.id);
    if (dbProduct) {
      dbProduct.stock = Math.max(0, dbProduct.stock - cartItem.qty);
    }
  });

  // Save Order to local database
  const newOrder = {
    id: Date.now(),
    orderNum: newOrderNum,
    customerName: name,
    customerMobile: mobile,
    customerAddress: address,
    paymentMode: "COD",
    items: state.cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: item.qty
    })),
    totalAmount: total,
    date: new Date().toLocaleString(state.language === "en" ? "en-US" : "te-IN"),
    status: "Pending"
  };
  state.orders.push(newOrder);
  saveOrdersToStorage();

  // Reset cart
  state.cart = [];
  saveCartToStorage();
  saveProductsToStorage();
  updateBagBadge();

  // Redirect back to catalog
  state.checkoutActive = false;
  showToast(state.language === "en" ? "Order initiated on WhatsApp successfully!" : "ఆర్డర్ విజయవంతంగా వాట్సాప్‌లో పంపబడింది!");
  renderApp();
}

/* ============================================================
   ADMIN CONTROL PANEL
============================================================ */
function switchAdminTab(tab) {
  state.activeAdminTab = tab;
  
  document.getElementById("tabCatalog").classList.toggle("active", tab === "catalog");
  document.getElementById("tabRecycle").classList.toggle("active", tab === "recycle");
  document.getElementById("tabOrders").classList.toggle("active", tab === "orders");

  document.getElementById("adminTabCatalogContent").style.display = tab === "catalog" ? "block" : "none";
  document.getElementById("adminTabRecycleContent").style.display = tab === "recycle" ? "block" : "none";
  document.getElementById("adminTabOrdersContent").style.display = tab === "orders" ? "block" : "none";

  renderAdminPanel();
}

function renderAdminPanel() {
  const dict = TRANSLATIONS[state.language];
  if (state.activeAdminTab === "catalog") {
    const tableBody = document.getElementById("adminCatalogTableBody");
    tableBody.innerHTML = "";

    state.products.forEach(p => {
      const isBase64 = p.image.startsWith("data:");
      const imageTag = isBase64 
        ? `<img src="${p.image}" alt="${p.name}" />`
        : `<span style="font-size: 1.8rem;">${p.image}</span>`;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td data-label="${dict.thImage || 'Image'}">
          <div class="admin-prod-thumb">
            ${imageTag}
          </div>
        </td>
        <td data-label="${dict.thName || 'Name'}" style="font-weight:600;">${p.name}</td>
        <td data-label="${dict.thCategory || 'Category'}"><span class="badge badge-primary">${p.category}</span></td>
        <td data-label="${dict.thPrice || 'Price'}" style="font-weight:700; color:var(--accent-color);">₹${p.price}</td>
        <td data-label="${dict.thStock || 'Stock Level'}">
          <div class="stock-control">
            <span class="stock-btn" onclick="adjustAdminStock(${p.id}, -1)">-</span>
            <input type="number" class="stock-input" id="stockIn-${p.id}" value="${p.stock}" min="0" onchange="saveAdminStockChange(${p.id}, this.value)" />
            <span class="stock-btn" onclick="adjustAdminStock(${p.id}, 1)">+</span>
          </div>
        </td>
        <td data-label="${dict.thActions || 'Actions'}">
          <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:center;">
            <button class="btn-accent btn-sm" onclick="openEditProductModal(${p.id})">✏️ Edit</button>
            <button class="btn-danger btn-sm" onclick="deleteProduct(${p.id})">🗑️ Delete</button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  } else if (state.activeAdminTab === "recycle") {
    // Recycle Bin
    const recycleGrid = document.getElementById("adminRecycleBinGrid");
    recycleGrid.innerHTML = "";

    if (state.deletedProducts.length === 0) {
      recycleGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--text-secondary);">
          <span style="font-size: 3rem;">📦</span>
          <p style="margin-top: 10px;">The Deleted Bin is empty.</p>
        </div>
      `;
      return;
    }

    state.deletedProducts.forEach(p => {
      const isBase64 = p.image.startsWith("data:");
      const imageTag = isBase64 
        ? `<img src="${p.image}" alt="${p.name}" style="max-width:32px; max-height:32px; object-fit:contain;" />`
        : `<span style="font-size: 1.8rem;">${p.image}</span>`;

      const card = document.createElement("div");
      card.className = "recycle-card glass-card";
      card.onclick = () => triggerRestorePopup(p);
      card.innerHTML = `
        <div class="admin-prod-thumb" style="width:40px; height:40px;">
          ${imageTag}
        </div>
        <div class="recycle-info">
          <h4>${p.name}</h4>
          <p>₹${p.price} | Stock: ${p.stock}</p>
        </div>
        <span style="color:var(--primary-color); font-size:1.1rem;">♻️</span>
      `;
      recycleGrid.appendChild(card);
    });
  } else if (state.activeAdminTab === "orders") {
    renderAdminOrders();
  }
}

/* ============================================================
   ADMIN ORDERS LIST PANEL RENDERING
============================================================ */
function renderAdminOrders() {
  const container = document.getElementById("adminOrdersContainer");
  const dict = TRANSLATIONS[state.language];

  if (!state.orders || state.orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px; color:var(--text-secondary);">
        <span style="font-size: 3rem;">📋</span>
        <p style="margin-top: 10px;">${dict.emptyOrders}</p>
      </div>
    `;
    return;
  }

  // Reverse sort by ID so newest orders show up first
  const sortedOrders = [...state.orders].sort((a, b) => b.id - a.id);

  container.innerHTML = `<div class="orders-list-grid"></div>`;
  const grid = container.querySelector(".orders-list-grid");

  sortedOrders.forEach(order => {
    // Generate items table HTML
    let itemsRowsHtml = "";
    order.items.forEach(item => {
      itemsRowsHtml += `
        <tr>
          <td style="font-weight: 500;">${item.name}</td>
          <td style="text-align: center;">x${item.qty}</td>
          <td style="text-align: right;">₹${item.price}</td>
          <td style="text-align: right; font-weight: 600;">₹${item.price * item.qty}</td>
        </tr>
      `;
    });

    const isPending = order.status === "Pending";
    const statusText = isPending ? dict.statusPending : dict.statusCompleted;
    const statusClass = isPending ? "pending" : "completed";
    const actionBtnText = isPending ? dict.btnMarkCompleted : dict.btnMarkPending;
    
    const card = document.createElement("div");
    card.className = "order-card glass-card";
    card.innerHTML = `
      <div class="order-card-header">
        <span class="order-number">Order #${order.orderNum}</span>
        <span class="order-date">${order.date}</span>
        <span class="order-status ${statusClass}">${statusText}</span>
      </div>
      <div class="order-card-body">
        <!-- Customer info -->
        <div class="order-info-section">
          <h4>${dict.thCustDetails}</h4>
          <p><strong>👤 Name:</strong> ${order.customerName}</p>
          <p><strong>📞 Phone:</strong> ${order.customerMobile}</p>
          <p><strong>📍 Address:</strong> ${order.customerAddress}</p>
        </div>
        <!-- Order items table -->
        <div class="order-info-section">
          <h4>${dict.thOrderItems}</h4>
          <table class="order-items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th style="text-align: center;">Qty</th>
                <th style="text-align: right;">Price</th>
                <th style="text-align: right;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${itemsRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
      <div class="order-card-footer">
        <div class="order-total">${dict.thOrderTotal}: ₹${order.totalAmount}</div>
        <div class="order-actions">
          <button class="btn-secondary btn-sm" onclick="toggleOrderStatus(${order.id})">${actionBtnText}</button>
          <button class="btn-danger btn-sm" onclick="deleteOrder(${order.id})">🗑️ ${dict.btnDeleteOrder}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function toggleOrderStatus(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = order.status === "Pending" ? "Completed" : "Pending";
  saveOrdersToStorage();

  const dict = TRANSLATIONS[state.language];
  const translatedStatus = order.status === "Pending" ? dict.statusPending : dict.statusCompleted;
  showToast(dict.toastOrderStatusChanged.replace("{id}", order.orderNum).replace("{status}", translatedStatus));

  renderAdminPanel();
}

function deleteOrder(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  state.orders = state.orders.filter(o => o.id !== orderId);
  saveOrdersToStorage();

  const dict = TRANSLATIONS[state.language];
  showToast(dict.toastOrderDeleted.replace("{id}", order.orderNum));

  renderAdminPanel();
}

function exportOrdersToExcel() {
  if (!state.orders || state.orders.length === 0) {
    const dict = TRANSLATIONS[state.language];
    showToast(state.language === "en" ? "No orders available to export." : "ఎగుమతి చేయడానికి ఎటువంటి ఆర్డర్లు లేవు.", true);
    return;
  }

  // Column headers
  let csvContent = "Order Number,Date,Customer Name,Mobile Number,Delivery Address,Items Ordered,Total Amount (INR),Status\n";

  state.orders.forEach(order => {
    const itemsDescription = order.items.map(item => `${item.qty}x ${item.name}`).join(" | ");
    
    // Clean strings of commas or quotes to prevent CSV parsing issues
    const cleanName = order.customerName.replace(/"/g, '""');
    const cleanPhone = order.customerMobile.replace(/"/g, '""');
    const cleanAddress = order.customerAddress.replace(/"/g, '""').replace(/\n/g, " ");
    const cleanItems = itemsDescription.replace(/"/g, '""');
    const cleanDate = order.date.replace(/"/g, '""');

    // Add row (wrap strings in double quotes)
    csvContent += `"${order.orderNum}","${cleanDate}","${cleanName}","${cleanPhone}","${cleanAddress}","${cleanItems}","${order.totalAmount}","${order.status}"\n`;
  });

  // Create a blob with UTF-8 BOM so Excel opens Telugu/Special characters correctly
  const BOM = "\uFEFF";
  const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `HKGN_Orders_${Date.now()}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


// Daily stock updates in Admin Mode
function adjustAdminStock(prodId, change) {
  const input = document.getElementById(`stockIn-${prodId}`);
  if (!input) return;
  
  let val = parseInt(input.value) || 0;
  val = Math.max(0, val + change);
  input.value = val;
  
  saveAdminStockChange(prodId, val);
}

function saveAdminStockChange(prodId, val) {
  const prod = state.products.find(p => p.id === prodId);
  if (!prod) return;

  const intVal = parseInt(val);
  prod.stock = isNaN(intVal) ? 0 : Math.max(0, intVal);
  
  saveProductsToStorage();
  
  // Show toast feedback
  const dict = TRANSLATIONS[state.language];
  showToast(dict.toastUpdatedStock.replace("{name}", prod.name).replace("{stock}", prod.stock));
  
  // If in user mode, update badge, but this runs in admin
  renderAdminPanel();
}

function deleteProduct(prodId) {
  const prodIndex = state.products.findIndex(p => p.id === prodId);
  if (prodIndex === -1) return;

  const prod = state.products[prodIndex];
  
  // Add to deleted bin
  state.deletedProducts.push(prod);
  saveDeletedProductsToStorage();

  // Remove from active
  state.products.splice(prodIndex, 1);
  saveProductsToStorage();

  const dict = TRANSLATIONS[state.language];
  showToast(dict.toastDeleted.replace("{name}", prod.name));

  // Render
  renderAdminPanel();
}

/* ============================================================
   RESTORE MODAL / BIN RECOVERY
============================================================ */
function triggerRestorePopup(product) {
  state.restoreTargetProduct = product;
  
  const modal = document.getElementById("confirmRestoreModal");
  modal.classList.add("active");
}

function closeRestoreModal(confirm) {
  const modal = document.getElementById("confirmRestoreModal");
  modal.classList.remove("active");

  const p = state.restoreTargetProduct;
  if (confirm && p) {
    // Restore
    state.products.push(p);
    saveProductsToStorage();

    state.deletedProducts = state.deletedProducts.filter(item => item.id !== p.id);
    saveDeletedProductsToStorage();

    const dict = TRANSLATIONS[state.language];
    showToast(dict.toastRestored.replace("{name}", p.name));
  }

  state.restoreTargetProduct = null;
  renderAdminPanel();
}

function permanentlyDeleteProductFromBin() {
  const modal = document.getElementById("confirmRestoreModal");
  modal.classList.remove("active");

  const p = state.restoreTargetProduct;
  if (p) {
    // Remove from deleted list permanently
    state.deletedProducts = state.deletedProducts.filter(item => item.id !== p.id);
    saveDeletedProductsToStorage();

    const dict = TRANSLATIONS[state.language];
    showToast(dict.toastPermanentDelete.replace("{name}", p.name));
  }

  state.restoreTargetProduct = null;
  renderAdminPanel();
}

/* ============================================================
   ADD / EDIT PRODUCT FORM ACTIONS
============================================================ */
function openAddProductModal() {
  state.editingProductId = null;

  const dict = TRANSLATIONS[state.language];
  document.getElementById("addProductModalTitle").textContent = dict.addProductModalTitle;
  document.getElementById("addProductModalDesc").textContent = dict.addProductModalDesc;
  document.getElementById("btnAddProdSubmit").textContent = dict.btnAddProdSubmit;

  document.getElementById("addProductModal").classList.add("active");
  // reset file upload temp state
  state.uploadedImageBase64 = null;
  state.tempSelectedEmoji = "🌾";
  
  // Clear select wrappers
  document.querySelectorAll(".img-select-option").forEach(el => el.classList.remove("active"));
  document.querySelector('.img-select-option[data-img-emoji="🌾"]').classList.add("active");
  
  document.getElementById("imageUploadStatus").textContent = "";
  document.getElementById("addProductForm").reset();
}

function openEditProductModal(productId) {
  const p = state.products.find(prod => prod.id === productId);
  if (!p) return;
  
  state.editingProductId = productId;
  const dict = TRANSLATIONS[state.language];
  
  document.getElementById("addProductModalTitle").textContent = dict.addProductModalTitleEdit;
  document.getElementById("addProductModalDesc").textContent = dict.addProductModalDescEdit;
  document.getElementById("btnAddProdSubmit").textContent = dict.btnAddProdSubmitEdit;
  
  // Fill inputs
  document.getElementById("newProdName").value = p.name;
  document.getElementById("newProdCategory").value = p.category;
  document.getElementById("newProdPrice").value = p.price;
  document.getElementById("newProdStock").value = p.stock;
  document.getElementById("newProdDesc").value = p.description;
  
  // Image state
  const isBase64 = p.image.startsWith("data:");
  if (isBase64) {
    state.uploadedImageBase64 = p.image;
    state.tempSelectedEmoji = null;
    document.querySelectorAll(".img-select-option").forEach(el => el.classList.remove("active"));
    document.getElementById("imageUploadStatus").textContent = state.language === "en" ? "Existing uploaded image preserved" : "ప్రస్తుత చిత్రం భద్రపరచబడింది";
  } else {
    state.tempSelectedEmoji = p.image;
    state.uploadedImageBase64 = null;
    document.querySelectorAll(".img-select-option").forEach(el => {
      const match = el.getAttribute("data-img-emoji") === p.image;
      el.classList.toggle("active", match);
    });
    document.getElementById("imageUploadStatus").textContent = "";
  }
  
  document.getElementById("addProductModal").classList.add("active");
}

function closeAddProductModal(e) {
  // If clicked close icon or cancel btn
  if (!e || e.target.classList.contains("modal-overlay")) {
    document.getElementById("addProductModal").classList.remove("active");
  }
}

function selectNewProductEmoji(emoji, element) {
  state.tempSelectedEmoji = emoji;
  state.uploadedImageBase64 = null; // override base64 if emoji is clicked
  
  document.querySelectorAll(".img-select-option").forEach(el => el.classList.remove("active"));
  element.classList.add("active");
  
  document.getElementById("imageUploadStatus").textContent = "";
}

function handleImageUpload(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    state.uploadedImageBase64 = e.target.result;
    
    // De-select emoji cards
    document.querySelectorAll(".img-select-option").forEach(el => el.classList.remove("active"));
    
    const dict = TRANSLATIONS[state.language];
    document.getElementById("imageUploadStatus").textContent = dict.toastImageUploaded;
  };
  reader.readAsDataURL(file);
}

function handleAddProductSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("newProdName").value.trim();
  const category = document.getElementById("newProdCategory").value;
  const price = parseInt(document.getElementById("newProdPrice").value) || 0;
  const stock = parseInt(document.getElementById("newProdStock").value) || 0;
  const desc = document.getElementById("newProdDesc").value.trim();
  const finalImage = state.uploadedImageBase64 ? state.uploadedImageBase64 : state.tempSelectedEmoji;
  const dict = TRANSLATIONS[state.language];

  if (state.editingProductId !== null) {
    // Editing existing product
    const p = state.products.find(prod => prod.id === state.editingProductId);
    if (p) {
      p.name = name;
      p.category = category;
      p.price = price;
      p.stock = stock;
      p.description = desc;
      p.image = finalImage;
      
      saveProductsToStorage();
      showToast(dict.toastProductUpdated.replace("{name}", name));
    }
    state.editingProductId = null;
  } else {
    // Create new product
    const newId = state.products.length > 0 
      ? Math.max(...state.products.map(p => p.id)) + 1 
      : 1;

    const newProduct = {
      id: newId,
      name: name,
      category: category,
      price: price,
      stock: stock,
      image: finalImage,
      description: desc
    };

    state.products.push(newProduct);
    saveProductsToStorage();
    showToast(dict.toastProductCreated.replace("{name}", name));
  }

  // Close and refresh
  document.getElementById("addProductModal").classList.remove("active");
  renderAdminPanel();
}

/* ============================================================
   TOAST FEEDBACK
============================================================ */
function showToast(message, isDanger = false) {
  const container = document.getElementById("toastContainer");
  
  const toast = document.createElement("div");
  toast.className = isDanger ? "toast toast-danger" : "toast";
  toast.innerHTML = `
    <span>${isDanger ? "⚠️" : "🔔"}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Slide out after 3 seconds
  setTimeout(() => {
    toast.style.animation = "slideInLeft 0.3s ease reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2700);
}

/* ============================================================
   ADMIN PORTAL LOGIN MODAL HANDLERS
============================================================ */
function openAdminLoginModal() {
  document.getElementById("adminLoginModal").classList.add("active");
  document.getElementById("adminLoginForm").reset();
}

function closeAdminLoginModal(e) {
  if (!e || e.target.classList.contains("modal-overlay")) {
    document.getElementById("adminLoginModal").classList.remove("active");
  }
}

function handleAdminLoginSubmit(e) {
  e.preventDefault();
  
  const phone = document.getElementById("adminPhoneInput").value.trim();
  const password = document.getElementById("adminPassInput").value.trim();
  const dict = TRANSLATIONS[state.language];

  // Credentials check
  if (phone === "9391595381" && password === "loki@2006") {
    state.role = "admin";
    localStorage.removeItem("hkgn_role"); // Never persist admin role across sessions
    state.checkoutActive = false;
    
    // Close modal
    document.getElementById("adminLoginModal").classList.remove("active");
    
    showToast(dict.toastAdminLoginSuccess);
    renderApp();
  } else {
    showToast(dict.toastAdminLoginFail, true);
  }
}
