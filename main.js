// ============================================================================
// DỰ ÁN: CHOLIBI - BẢN v31.3 MASTER VIP (ĐÃ CHIA 8 LUỒNG & KHẮC PHỤC TOÀN BỘ 10 LỖI LOGIC)
// Tương thích: DroidScript Premium+ & Android Accessibility Service & Orbita/GoLogin
// Cấu trúc 8 Luồng Cổng Game (23 Site chuẩn):
//   - Luồng 1 (FLOW_1): TT88, 789P, MMOO, NOHU88, GO99
//   - Luồng 2 (FLOW_2): J88, U888, 8KBET
//   - Luồng 3 (FLOW_3): AD88, XX8
//   - Luồng 4 (FLOW_4): CM88, SC88, C168
//   - Luồng 5 (FLOW_5): 78WIN, JUNV1
//   - Luồng 6 (FLOW_6): JUNV2
//   - Luồng 7 (FLOW_7): HI88, SHBET, NEW88, 789BET, F8BET
//   - Luồng 8 (FLOW_8): VAN88, MB66
// ============================================================================

var SITE_FLOW_GROUPS = {
    "FLOW_1": ["TT88", "789P", "MMOO", "NOHU88", "GO99"],
    "FLOW_2": ["J88", "U888", "8KBET"],
    "FLOW_3": ["AD88", "XX8"],
    "FLOW_4": ["CM88", "SC88", "C168"],
    "FLOW_5": ["78WIN", "JUNV1"],
    "FLOW_6": ["JUNV2"],
    "FLOW_7": ["HI88", "SHBET", "NEW88", "789BET", "F8BET"],
    "FLOW_8": ["VAN88", "MB66"]
};

var SITE_CONFIGS = {
    // ================= LUỒNG 1: TT88, 789P, MMOO, NOHU88, GO99 =================
    "TT88": {
        url: "https://m.1tt88.vip/?f=3535864&app=1",
        mirrors: [
            "https://m.1tt88.vip/?f=3535864&app=1",
            "https://m.1tt88.vip/?f=3535864",
            "https://1tt88.vip/?f=3535864"
        ],
        flow: "FLOW_1",
        group: "GROUP_A",
        hostMatch: "1tt88|tt88"
    },
    "789P": {
        url: "https://m.789p1.vip/?f=784461&app=1",
        mirrors: [
            "https://m.789p1.vip/?f=784461&app=1",
            "https://m.789p1.vip/?f=784461",
            "https://www.789p1.vip/?f=784461"
        ],
        flow: "FLOW_1",
        group: "GROUP_A",
        hostMatch: "789p1|789p"
    },
    "MMOO": {
        url: "https://m.mmoo.team/?f=394579&app=1",
        mirrors: [
            "https://m.mmoo.team/?f=394579&app=1",
            "https://m.mmoo.team/?f=394579",
            "https://www.mmoo.team/?f=394579"
        ],
        flow: "FLOW_1",
        group: "GROUP_A",
        hostMatch: "mmoo"
    },
    "NOHU88": {
        url: "https://m.nohu90.com/Account/Register?f=6344995",
        mirrors: [
            "https://m.nohu90.com/Account/Register?f=6344995",
            "https://m.8nohu.vip/?f=6344995&app=1",
            "https://8nohu.vip/?f=6344995"
        ],
        flow: "FLOW_1",
        group: "GROUP_B",
        hostMatch: "nohu90|8nohu|nohu88"
    },
    "GO99": {
        url: "https://m.1go99.vip/?f=3528698&app=1",
        mirrors: [
            "https://m.1go99.vip/?f=3528698&app=1",
            "https://m.1go99.vip/?f=3528698",
            "https://1go99.vip/?f=3528698"
        ],
        flow: "FLOW_1",
        group: "GROUP_B",
        hostMatch: "1go99|go99"
    },

    // ================= LUỒNG 2: J88, U888, 8KBET =================
    "J88": {
        url: "https://m.j88qqgh.buzz/Account/Register?r=EOKXXP6&app=1",
        mirrors: [
            "https://m.j88qqgh.buzz/Account/Register?r=EOKXXP6&app=1",
            "https://j882ea.site/Register?r=EOKXXP6&app=1",
            "https://m.j88qqgh.buzz/Account/Register?r=EOKXXP6"
        ],
        flow: "FLOW_2",
        group: "GROUP_B",
        hostMatch: "j88qqgh|j882ea|j88"
    },
    "U888": {
        url: "https://m.u888288.xyz/Register?r=0R0RVZ4&app=1",
        mirrors: [
            "https://m.u888288.xyz/Register?r=0R0RVZ4&app=1",
            "https://u888288.xyz/Register?r=0R0RVZ4&app=1"
        ],
        flow: "FLOW_2",
        group: "GROUP_B",
        hostMatch: "u888288|u888|u88"
    },
    "8KBET": {
        url: "https://8k0341q.top/?r=KDR65K&app=1",
        mirrors: [
            "https://8k0341q.top/?r=KDR65K&app=1",
            "https://m.8k0341q.top/?r=KDR65K&app=1"
        ],
        flow: "FLOW_2",
        group: "GROUP_B",
        hostMatch: "8k0341q|8kbet|kdr65k"
    },

    // ================= LUỒNG 3: AD88, XX8 =================
    "AD88": {
        url: "https://m.ad88vip9.com/?id=233931938&fixed.iswebclip=2",
        mirrors: [
            "https://m.ad88vip9.com/?id=233931938&fixed.iswebclip=2",
            "https://ad88vip9.com/?id=233931938&fixed.iswebclip=2"
        ],
        flow: "FLOW_3",
        group: "GROUP_A",
        hostMatch: "ad88vip9|ad88|233931938"
    },
    "XX8": {
        url: "https://xx8v22.com/?id=986736259&fixed.iswebclip=2",
        mirrors: [
            "https://xx8v22.com/?id=986736259&fixed.iswebclip=2",
            "https://m.xx8v22.com/?id=986736259&fixed.iswebclip=2"
        ],
        flow: "FLOW_3",
        group: "GROUP_A",
        hostMatch: "xx8v22|xx8|986736259"
    },

    // ================= LUỒNG 4: CM88, SC88, C168 =================
    "CM88": {
        url: "https://cm883.co/home/register?a=216202041",
        mirrors: [
            "https://cm883.co/home/register?a=216202041",
            "https://cm883.co/?a=216202041",
            "https://cm88az.vip/home/register"
        ],
        flow: "FLOW_4",
        group: "GROUP_A",
        hostMatch: "cm883|cm88az|cm88"
    },
    "SC88": {
        url: "https://www.sc88vd.cc/home/register?u=395794899",
        mirrors: [
            "https://www.sc88vd.cc/home/register?u=395794899",
            "https://www.sc88vd.cc/?u=395794899",
            "https://sc88yy.com/home/register",
            "https://sc88qa.com/home/register"
        ],
        flow: "FLOW_4",
        group: "GROUP_A",
        hostMatch: "sc88vd|sc88yy|sc88qa|sc88"
    },
    "C168": {
        url: "https://www.c1688.cc/home/register?u=795262088",
        mirrors: [
            "https://www.c1688.cc/home/register?u=795262088",
            "https://www.c1688.cc/?u=795262088",
            "https://c1686.net/home/register"
        ],
        flow: "FLOW_4",
        group: "GROUP_A",
        hostMatch: "c1688|c1686|c168"
    },

    // ================= LUỒNG 5: 78WIN, JUNV1 =================
    "78WIN": {
        url: "https://www.239050.com/signup?affiliate=U9UZ22",
        mirrors: [
            "https://www.239050.com/signup?affiliate=U9UZ22",
            "https://www.78win8.pro/?af=U9UZ22",
            "https://www.239050.com/?af=U9UZ22",
            "https://m.78win8.pro/?af=U9UZ22"
        ],
        flow: "FLOW_5",
        group: "GROUP_D",
        hostMatch: "78win8|78win|239050|u9uz22",
        promoUrl: "/promoCenter/promotion/1ee0e8d0-fed9-4cd1-89fd-059e35b3de94",
        promoCode: "FREE78"
    },
    "JUNV1": {
        url: "https://sasa2.xn--8866-um1g.com/signup?af=PQMX4F",
        mirrors: [
            "https://sasa2.xn--8866-um1g.com/signup?af=PQMX4F",
            "https://sasa2.xn--8866-um1g.com/?af=PQMX4F",
            "https://m.sasa2.xn--8866-um1g.com/signup?af=PQMX4F"
        ],
        flow: "FLOW_5",
        group: "GROUP_D",
        hostMatch: "xn--8866-um1g|sasa2|junv1|pqmx4f",
        promoUrl: "/promoCenter/promotion/2290b154-b6a3-4b77-9339-8967ec251ed6",
        promoCode: "FR58"
    },

    // ================= LUỒNG 6: JUNV2 =================
    "JUNV2": {
        url: "https://www.suifegrnoirkrbk9487845fcjxf9.com/vi-vn/register?refid=partvcbz",
        mirrors: [
            "https://www.suifegrnoirkrbk9487845fcjxf9.com/vi-vn/register?refid=partvcbz",
            "https://m.suifegrnoirkrbk9487845fcjxf9.com/vi-vn/register?refid=partvcbz"
        ],
        flow: "FLOW_6",
        group: "GROUP_B",
        hostMatch: "suifegrnoirkrbk9487845fcjxf9|junv2|partvcbz"
    },

    // ================= LUỒNG 7: HI88, SHBET, NEW88, 789BET, F8BET =================
    "HI88": {
        url: "https://m.www-sho-pee-vn-com.com/?r=JM4QK7W&app=1",
        mirrors: [
            "https://m.www-sho-pee-vn-com.com/?r=JM4QK7W&app=1",
            "https://m.www-sho-pee-vn-com.com/Account/Register?r=JM4QK7W&app=1"
        ],
        flow: "FLOW_7",
        group: "GROUP_B",
        hostMatch: "sho-pee-vn-com|hi88|jm4qk7w"
    },
    "SHBET": {
        url: "https://m.wwurfhet4iltjvfghpo785y.com/?r=3464Q1J&app=1",
        mirrors: [
            "https://m.wwurfhet4iltjvfghpo785y.com/?r=3464Q1J&app=1",
            "https://m.wwurfhet4iltjvfghpo785y.com/Account/Register?r=3464Q1J&app=1"
        ],
        flow: "FLOW_7",
        group: "GROUP_B",
        hostMatch: "wwurfhet4iltjvfghpo785y|shbet|3464q1j"
    },
    "NEW88": {
        url: "https://m.djcvkifr9bmnirhieiyjnrjveg83f.com/Account/Register/?r=VDGG4Z7",
        mirrors: [
            "https://m.djcvkifr9bmnirhieiyjnrjveg83f.com/Account/Register/?r=VDGG4Z7",
            "https://m.djcvkifr9bmnirhieiyjnrjveg83f.com/?r=VDGG4Z7&app=1"
        ],
        flow: "FLOW_7",
        group: "GROUP_B",
        hostMatch: "djcvkifr9bmnirhieiyjnrjveg83f|new88|vdgg4z7"
    },
    "789BET": {
        url: "https://m.wucxofjviirdjk9olvwo497dhnchhdz.com/?r=94597JL&app=1",
        mirrors: [
            "https://m.wucxofjviirdjk9olvwo497dhnchhdz.com/?r=94597JL&app=1",
            "https://m.wucxofjviirdjk9olvwo497dhnchhdz.com/Account/Register?r=94597JL&app=1"
        ],
        flow: "FLOW_7",
        group: "GROUP_B",
        hostMatch: "wucxofjviirdjk9olvwo497dhnchhdz|789bet|94597jl"
    },
    "F8BET": {
        url: "https://m.28emnc84jkgu2iwsmjds.com/?r=Q3RZLVO&app=1",
        mirrors: [
            "https://m.28emnc84jkgu2iwsmjds.com/?r=Q3RZLVO&app=1",
            "https://m.28emnc84jkgu2iwsmjds.com/Account/Register?r=Q3RZLVO&app=1"
        ],
        flow: "FLOW_7",
        group: "GROUP_B",
        hostMatch: "28emnc84jkgu2iwsmjds|f8bet|q3rzlvo"
    },

    // ================= LUỒNG 8: VAN88, MB66 =================
    "VAN88": {
        url: "https://m.66van88.com/Register?a=44403",
        mirrors: [
            "https://m.66van88.com/Register?a=44403",
            "https://www.66van88.com/Register?a=44403",
            "https://66van88.com/Register?a=44403"
        ],
        flow: "FLOW_8",
        group: "GROUP_C",
        hostMatch: "66van88|van88"
    },
    "MB66": {
        url: "https://etgue484tyjnr89iothyitjgegejfejkvnihjrnj.com/?r=DL70MO0&app=1",
        mirrors: [
            "https://etgue484tyjnr89iothyitjgegejfejkvnihjrnj.com/?r=DL70MO0&app=1",
            "https://m.etgue484tyjnr89iothyitjgegejfejkvnihjrnj.com/?r=DL70MO0&app=1"
        ],
        flow: "FLOW_8",
        group: "GROUP_B",
        hostMatch: "etgue484tyjnr89iothyitjgegejfejkvnihjrnj|mb66|dl70mo0"
    }
};

var SITE_LIST = Object.keys(SITE_CONFIGS);

var web = null;
var urlInput = null;
var siteSpin = null;
var proxyStatusTxt = null;
var activeSiteKey = "TT88";
var currentProxyCfg = null;
var currentRealIp = "";
var injectWatchdogTimer = null;
var bridgeCleanupTimer = null;
var clipboardClearTimer = null;
var ignoreSpinnerUntilTs = 0;
var siteMirrorIndex = {};
var processedBridgeIds = {};
var lastPageLoadStartTs = 0;
var BRIDGE_AUTH_TOKEN = "cbtok_" + Math.floor(100000000 + Math.random() * 899999999) + "_" + Date.now();
var NATIVE_STAGE_RANK = { "REGISTERED": 1, "PIN_SET": 2, "BANK_ADDED": 3, "COMPLETED_ALL": 4 };

// Biến điều khiển Bảng Nổi Tương Tác Trực Tiếp (Interactive Native Floating Dock)
var layRoot = null;
var sysOverlay = null;
var laySysOverlay = null;
var layExternalOverlay = null;
var layOvBody = null;
var ovStatusTxt = null;
var ovExtStatusTxt = null;
var btnOvFold = null;
var btnOverlayTopRef = null;
var isOverlayShown = false;
var isOverlayFolded = false;
var ovPosMode = 0; // 0: Trên (0.082), 1: Giữa (0.38), 2: Dưới (0.64)
var ovPosX = 0.015;
var ovPosY = 0.082;
var multiClipTimers = [];
var cholibiNotify = null;

var HISTORY_STORAGE_APP = "CHOLIBI_APP_STORAGE_V6";
var HISTORY_KEY_RECORDS = "REGISTERED_RECORDS_JSON_V6";
var MASTER_STATE_KEY = "CHOLIBI_MASTER_FORM_STATE_V6";
var LOCKED_VAULT_KEY = "CHOLIBI_LOCKED_PROFILE_VAULT_V6";
var CUSTOM_SITES_KEY = "CHOLIBI_CUSTOM_LEARNED_SITES_V6";
var FINGERPRINT_STATE_KEY = "CHOLIBI_DEVICE_FINGERPRINT_V6";

var nativeCustomSites = {};
var sessionCompletedNeedsWipeOnExit = false;

var ANDROID_DEVICE_POOL = [
    { model: "SM-S928B", brand: "Samsung S24 Ultra", android: "14", chrome: "126.0.6478.122", gpuV: "Qualcomm", gpuR: "Adreno (TM) 750", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.5 },
    { model: "SM-S918B", brand: "Samsung S23 Ultra", android: "14", chrome: "125.0.6422.165", gpuV: "Qualcomm", gpuR: "Adreno (TM) 740", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.5 },
    { model: "23116PN5BC", brand: "Xiaomi 14 Pro", android: "14", chrome: "126.0.6478.71", gpuV: "Qualcomm", gpuR: "Adreno (TM) 750", cores: 8, ram: 12, sw: 393, sh: 873, dpr: 3.0 },
    { model: "2211133G", brand: "Xiaomi 13", android: "14", chrome: "124.0.6367.179", gpuV: "Qualcomm", gpuR: "Adreno (TM) 740", cores: 8, ram: 8, sw: 393, sh: 873, dpr: 3.0 },
    { model: "PHZ110", brand: "OPPO Find X7", android: "14", chrome: "125.0.6422.113", gpuV: "ARM", gpuR: "Mali-G720 Immortalis MC12", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.0 },
    { model: "V2309A", brand: "Vivo X100", android: "14", chrome: "126.0.6478.50", gpuV: "ARM", gpuR: "Mali-G720 Immortalis MC12", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.0 },
    { model: "Pixel 8 Pro", brand: "Google Pixel 8 Pro", android: "14", chrome: "127.0.6533.64", gpuV: "ARM", gpuR: "Mali-G715 Immortalis MC10", cores: 8, ram: 12, sw: 412, sh: 892, dpr: 3.5 },
    { model: "2311DRK48C", brand: "Redmi K70", android: "14", chrome: "124.0.6367.113", gpuV: "Qualcomm", gpuR: "Adreno (TM) 740", cores: 8, ram: 12, sw: 393, sh: 873, dpr: 3.0 },
    { model: "CPH2581", brand: "OnePlus 12", android: "14", chrome: "126.0.6478.122", gpuV: "Qualcomm", gpuR: "Adreno (TM) 750", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.5 },
    { model: "SM-A556E", brand: "Samsung Galaxy A55", android: "14", chrome: "125.0.6422.147", gpuV: "Samsung", gpuR: "Xclipse 530", cores: 8, ram: 8, sw: 412, sh: 915, dpr: 2.625 },
    { model: "RMX3888", brand: "Realme GT5 Pro", android: "14", chrome: "124.0.6367.82", gpuV: "Qualcomm", gpuR: "Adreno (TM) 750", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.0 },
    { model: "SM-S908E", brand: "Samsung S22 Ultra", android: "13", chrome: "122.0.6261.119", gpuV: "Qualcomm", gpuR: "Adreno (TM) 730", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.5 }
];

var activeDeviceFingerprint = null;
function GenerateNewDeviceFingerprint() {
    var pool = (Array.isArray(ANDROID_DEVICE_POOL) && ANDROID_DEVICE_POOL.length > 0)
        ? ANDROID_DEVICE_POOL
        : [{ model: "SM-S928B", brand: "Samsung S24 Ultra", android: "14", chrome: "126.0.6478.122", gpuV: "Qualcomm", gpuR: "Adreno (TM) 750", cores: 8, ram: 12, sw: 412, sh: 915, dpr: 3.5 }];
    var base = pool[Math.floor(Math.random() * pool.length)];
    var buildPool = {
        "13": ["TP1A.220905.004", "TQ3A.230805.001", "TP1A.221005.002"],
        "14": ["UP1A.231005.007", "UQ1A.240205.004", "UKQ1.230917.001"]
    };
    var androidVer = String(base.android || "14");
    var builds = buildPool[androidVer] || buildPool["14"];
    var buildId = builds[Math.floor(Math.random() * builds.length)];
    var buildPatch = Math.floor(60 + Math.random() * 130);
    var chromeVer = String(base.chrome || "126.0.6478.122").replace(/\.\d+$/, "." + buildPatch);

    // UA chuẩn Android System WebView: có Build/<id>; wv và Version/4.0
    var ua = "Mozilla/5.0 (Linux; Android " + androidVer + "; " + base.model + " Build/" + buildId + "; wv) " +
             "AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/" + chromeVer + " Mobile Safari/537.36";

    activeDeviceFingerprint = {
        id: "fp_" + Date.now() + "_" + Math.floor(1000 + Math.random() * 8999),
        model: String(base.model || "SM-S928B"),
        brand: String(base.brand || "Samsung S24 Ultra"),
        android: androidVer,
        buildId: buildId,
        chrome: chromeVer,
        ua: ua,
        gpuVendor: String(base.gpuV || "Qualcomm"),
        gpuRenderer: String(base.gpuR || "Adreno (TM) 750"),
        cores: Number(base.cores || 8),
        ram: Number(base.ram || 12),
        sw: Number(base.sw || 412),
        sh: Number(base.sh || 915),
        dpr: Number(base.dpr || 3.0),
        canvasSeed: Math.floor(1 + Math.random() * 250),
        audioSeed: Number((0.00001 + Math.random() * 0.00008).toFixed(7)),
        createdAt: Date.now()
    };
    try {
        if (typeof app !== "undefined" && typeof app.SaveText === "function") {
            app.SaveText(FINGERPRINT_STATE_KEY, JSON.stringify(activeDeviceFingerprint), HISTORY_STORAGE_APP);
        }
    } catch (e) {}
    return activeDeviceFingerprint;
}

function IsValidFingerprintObject(fp) {
    if (!fp || typeof fp !== "object") return false;
    if (typeof fp.ua !== "string" || fp.ua.length < 40) return false;
    if (fp.ua.indexOf("Build/") === -1 || fp.ua.indexOf("Version/4.0") === -1) return false;
    if (typeof fp.canvasSeed !== "number" || typeof fp.audioSeed !== "number") return false;
    if (typeof fp.sw !== "number" || typeof fp.sh !== "number" || typeof fp.dpr !== "number") return false;
    return true;
}

function LoadOrInitDeviceFingerprint() {
    try {
        if (typeof app !== "undefined" && typeof app.LoadText === "function") {
            var raw = app.LoadText(FINGERPRINT_STATE_KEY, "", HISTORY_STORAGE_APP);
            if (raw) {
                var parsed = JSON.parse(raw);
                if (IsValidFingerprintObject(parsed) && parsed.createdAt) {
                    var ageDays = (Date.now() - Number(parsed.createdAt)) / (1000 * 60 * 60 * 24);
                    if (ageDays > 30 || ageDays < 0) {
                        return GenerateNewDeviceFingerprint();
                    }
                    activeDeviceFingerprint = parsed;
                    return activeDeviceFingerprint;
                }
            }
        }
    } catch (e) {}
    return GenerateNewDeviceFingerprint();
}

function SanitizeLearnedSelectors(baseSel, incomingSel) {
    var result = {};
    var sources = [baseSel, incomingSel];
    for (var s = 0; s < sources.length; s++) {
        var src = sources[s];
        if (!src || typeof src !== "object" || Array.isArray(src)) continue;
        for (var k in src) {
            if (!Object.prototype.hasOwnProperty.call(src, k)) continue;
            if (k === "__proto__" || k === "constructor" || k === "prototype") continue;
            var val = src[k];
            if (typeof val === "string") {
                var trimmedVal = val.trim();
                if (trimmedVal && trimmedVal.length <= 512) {
                    result[k] = trimmedVal;
                }
            }
        }
    }
    return result;
}

function IsSafeHttpUrlBasic(u) {
    if (!u || typeof u !== "string") return false;
    var s = u.trim();
    if (typeof IsValidHttpUrl === "function") return IsValidHttpUrl(s);
    return /^https?:\/\/[a-z0-9.\-]+/i.test(s);
}

function LoadCustomSitesNative() {
    try {
        if (typeof app !== "undefined" && typeof app.LoadText === "function") {
            var raw = app.LoadText(CUSTOM_SITES_KEY, "{}", HISTORY_STORAGE_APP);
            var parsed = JSON.parse(raw || "{}");
            if (parsed && typeof parsed === "object") {
                nativeCustomSites = {};
                var validGroups = { "GROUP_A": 1, "GROUP_B": 1, "GROUP_C": 1, "GROUP_D": 1 };
                for (var sk in parsed) {
                    if (!Object.prototype.hasOwnProperty.call(parsed, sk)) continue;
                    var cleanKey = String(sk || "").trim().toUpperCase().replace(/[^A-Z0-9_]/g, "");
                    if (!cleanKey || cleanKey === "__PROTO__" || cleanKey === "CONSTRUCTOR" || cleanKey === "PROTOTYPE") continue;
                    var item = parsed[sk];
                    if (!item || typeof item !== "object" || typeof item.url !== "string") continue;
                    var cleanUrl = item.url.trim();
                    if (!IsSafeHttpUrlBasic(cleanUrl)) continue;
                    var safeGroup = (item.group && validGroups[item.group]) ? item.group : "GROUP_B";
                    var safeMirrors = [];
                    if (Array.isArray(item.mirrors)) {
                        for (var mi = 0; mi < item.mirrors.length; mi++) {
                            var mUrl = String(item.mirrors[mi] || "").trim();
                            if (IsSafeHttpUrlBasic(mUrl) && safeMirrors.indexOf(mUrl) === -1) {
                                safeMirrors.push(mUrl);
                            }
                        }
                    }
                    if (safeMirrors.indexOf(cleanUrl) === -1) safeMirrors.unshift(cleanUrl);
                    var safeLearned = SanitizeLearnedSelectors(
                        SITE_CONFIGS[cleanKey] ? SITE_CONFIGS[cleanKey].learnedSelectors : null,
                        item.learnedSelectors
                    );
                    if (!SITE_CONFIGS[cleanKey] || SITE_CONFIGS[cleanKey].isCustom) {
                        var safeFlow = String(item.flow || "CUSTOM").trim().toUpperCase() || "CUSTOM";
                        var customCfg = {
                            url: cleanUrl,
                            mirrors: safeMirrors,
                            flow: safeFlow,
                            group: safeGroup,
                            hostMatch: String(item.hostMatch || cleanKey.toLowerCase()).trim() || cleanKey.toLowerCase(),
                            learnedSelectors: safeLearned,
                            isCustom: true
                        };
                        if (typeof item.promoUrl === "string" && item.promoUrl.trim()) customCfg.promoUrl = item.promoUrl.trim();
                        if (typeof item.promoCode === "string" && item.promoCode.trim()) customCfg.promoCode = item.promoCode.trim();
                        SITE_CONFIGS[cleanKey] = customCfg;
                        nativeCustomSites[cleanKey] = customCfg;
                        if (SITE_FLOW_GROUPS[safeFlow] && SITE_FLOW_GROUPS[safeFlow].indexOf(cleanKey) === -1) {
                            SITE_FLOW_GROUPS[safeFlow].push(cleanKey);
                        }
                    } else if (Object.keys(safeLearned).length > 0) {
                        SITE_CONFIGS[cleanKey].learnedSelectors = safeLearned;
                        var clonedBuiltIn = {};
                        for (var bk in SITE_CONFIGS[cleanKey]) {
                            if (Object.prototype.hasOwnProperty.call(SITE_CONFIGS[cleanKey], bk)) {
                                clonedBuiltIn[bk] = SITE_CONFIGS[cleanKey][bk];
                            }
                        }
                        clonedBuiltIn.learnedSelectors = safeLearned;
                        nativeCustomSites[cleanKey] = clonedBuiltIn;
                    }
                }
                SITE_LIST = Object.keys(SITE_CONFIGS);
                if (nativeMasterState && nativeMasterState._savedSitePref && SITE_CONFIGS[nativeMasterState._savedSitePref]) {
                    nativeMasterState.site = nativeMasterState._savedSitePref;
                    activeSiteKey = nativeMasterState._savedSitePref;
                }
            }
        }
    } catch (e) {}
}

function SaveCustomSiteNative(siteEntry) {
    if (!siteEntry || typeof siteEntry !== "object" || !siteEntry.key || !siteEntry.url) return false;
    try {
        var cleanKey = String(siteEntry.key).trim().toUpperCase().replace(/[^A-Z0-9_]/g, "");
        var cleanUrl = String(siteEntry.url).trim();
        if (!cleanKey || !cleanUrl || cleanKey === "__PROTO__" || cleanKey === "CONSTRUCTOR" || cleanKey === "PROTOTYPE") return false;
        if (!IsSafeHttpUrlBasic(cleanUrl)) return false;

        var validGroups = { "GROUP_A": 1, "GROUP_B": 1, "GROUP_C": 1, "GROUP_D": 1 };
        var oldCfg = SITE_CONFIGS[cleanKey] || {};
        var isBuiltInSite = Boolean(SITE_CONFIGS[cleanKey] && !SITE_CONFIGS[cleanKey].isCustom);
        var safeGroup = (siteEntry.group && validGroups[siteEntry.group])
            ? siteEntry.group
            : (oldCfg.group && validGroups[oldCfg.group] ? oldCfg.group : "GROUP_B");

        var mergedLearned = SanitizeLearnedSelectors(oldCfg.learnedSelectors, siteEntry.learnedSelectors);

        var validMirrors = [];
        if (Array.isArray(siteEntry.mirrors)) {
            for (var m = 0; m < siteEntry.mirrors.length; m++) {
                var mUrl = String(siteEntry.mirrors[m] || "").trim();
                if (IsSafeHttpUrlBasic(mUrl) && validMirrors.indexOf(mUrl) === -1) {
                    validMirrors.push(mUrl);
                }
            }
        }
        if (validMirrors.indexOf(cleanUrl) === -1) validMirrors.unshift(cleanUrl);

        if (isBuiltInSite) {
            // Bảo vệ cấu hình gốc của 23 site chuẩn: chỉ bổ sung learnedSelectors mà không ghi đè URL/group gốc
            SITE_CONFIGS[cleanKey].learnedSelectors = mergedLearned;
            var clonedSite = {};
            for (var ck in SITE_CONFIGS[cleanKey]) {
                if (Object.prototype.hasOwnProperty.call(SITE_CONFIGS[cleanKey], ck)) {
                    clonedSite[ck] = SITE_CONFIGS[cleanKey][ck];
                }
            }
            clonedSite.learnedSelectors = mergedLearned;
            nativeCustomSites[cleanKey] = clonedSite;
        } else {
            var safeFlow = String(siteEntry.flow || oldCfg.flow || "CUSTOM").trim().toUpperCase() || "CUSTOM";
            var cfgObj = {
                url: cleanUrl,
                mirrors: validMirrors,
                flow: safeFlow,
                group: safeGroup,
                hostMatch: String(siteEntry.hostMatch || oldCfg.hostMatch || cleanKey.toLowerCase()).trim() || cleanKey.toLowerCase(),
                learnedSelectors: mergedLearned,
                isCustom: true
            };
            if (typeof siteEntry.promoUrl === "string" && siteEntry.promoUrl.trim()) cfgObj.promoUrl = siteEntry.promoUrl.trim();
            if (typeof siteEntry.promoCode === "string" && siteEntry.promoCode.trim()) cfgObj.promoCode = siteEntry.promoCode.trim();
            SITE_CONFIGS[cleanKey] = cfgObj;
            nativeCustomSites[cleanKey] = cfgObj;
            if (SITE_FLOW_GROUPS[safeFlow] && SITE_FLOW_GROUPS[safeFlow].indexOf(cleanKey) === -1) {
                SITE_FLOW_GROUPS[safeFlow].push(cleanKey);
            }
        }

        SITE_LIST = Object.keys(SITE_CONFIGS);
        if (typeof app !== "undefined" && typeof app.SaveText === "function") {
            app.SaveText(CUSTOM_SITES_KEY, JSON.stringify(nativeCustomSites), HISTORY_STORAGE_APP);
        }
        var shouldSwitchSite = (siteEntry.switchSite !== false) && (!isBuiltInSite || cleanKey === activeSiteKey);
        if (siteSpin && typeof siteSpin.SetList === "function") {
            ignoreSpinnerUntilTs = Date.now() + 2000;
            siteSpin.SetList(SITE_LIST.join(","));
            siteSpin.SelectItem(shouldSwitchSite ? cleanKey : activeSiteKey);
        }
        if (shouldSwitchSite) {
            activeSiteKey = cleanKey;
            SaveNativeMasterState({ site: cleanKey });
        }
        SyncRegistryToWebView();
        if (!siteEntry.silent && typeof app !== "undefined" && typeof app.ShowPopup === "function") {
            app.ShowPopup("🧠 Đã lưu cấu hình học tự động cho [" + cleanKey + "]!");
        }
        return true;
    } catch (e) {
        return false;
    }
}

var pendingWipeFinalizeTimer = null;
var pendingWipeNewFp = null;
var pendingWipeSilent = false;
var isWipePending = false;

function FinalizeBrowserWipeAndReloadNative() {
    if (!isWipePending && !pendingWipeNewFp) return false;
    isWipePending = false;
    if (pendingWipeFinalizeTimer) {
        clearTimeout(pendingWipeFinalizeTimer);
        pendingWipeFinalizeTimer = null;
    }
    var newFp = pendingWipeNewFp || activeDeviceFingerprint || LoadOrInitDeviceFingerprint();
    var silentMode = pendingWipeSilent;
    pendingWipeNewFp = null;

    if (!web) return false;
    var reloadOk = false;
    try {
        if (typeof web.ClearCookies === "function") web.ClearCookies();
    } catch (e1) {}
    try {
        if (typeof web.ClearCache === "function") web.ClearCache();
    } catch (e2) {}
    try {
        if (typeof web.SetUserAgent === "function") web.SetUserAgent(newFp.ua);
    } catch (e3) {}
    try {
        var rawInputUrl = (urlInput && typeof urlInput.GetText === "function") ? String(urlInput.GetText() || "").trim() : "";
        var isPostLoginSubpage = /\/(financial|withdraw|security|member|mine|playerinfo|promocenter|validatepage|withdrawaccounts|autobank|deposit|login)\b/i.test(rawInputUrl);
        var currentUrl = (!isPostLoginSubpage && IsValidHttpUrl(rawInputUrl))
            ? rawInputUrl
            : GetActiveSiteDefaultUrl(activeSiteKey);
        if (urlInput && typeof urlInput.SetText === "function") {
            urlInput.SetText(currentUrl);
        }
        lastPageLoadStartTs = Date.now();
        web.LoadUrl(currentUrl);
        reloadOk = true;
    } catch (e4) {
        reloadOk = false;
    }

    if (reloadOk) {
        ResetMasterSessionFlagsOnWipe(newFp);

        if (!silentMode && typeof app !== "undefined" && typeof app.ShowPopup === "function") {
            app.ShowPopup("🛡️ Đã xóa dữ liệu WebView & đổi sang: " + newFp.brand + " (" + newFp.model + ")!");
        }
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText("🛡️ Máy mới: " + newFp.brand + " [" + newFp.model + "] | IP: " + (currentRealIp || "4G/WiFi"));
            proxyStatusTxt.SetTextColor("#2ecc71");
        }
        SyncRegistryToWebView();
    } else if (!silentMode && typeof app !== "undefined" && typeof app.ShowPopup === "function") {
        app.ShowPopup("⚠️ Không thể tải lại WebView khi đổi thiết bị.");
    }
    return reloadOk;
}

function ResetMasterSessionFlagsOnWipe(newFp) {
    sessionCompletedNeedsWipeOnExit = false;
    nativeMasterState.autoMode = false;
    nativeMasterState.currentStep = 0;
    nativeMasterState.registrationSubmitted = false;
    nativeMasterState.submittedUsername = "";
    nativeMasterState.withdrawPinSetInStep1 = false;
    nativeMasterState.waitingOtp = false;
    nativeMasterState.usedBackupStk = false;
    nativeMasterState.retryUserCount = 0;
    nativeMasterState.groupDPinSet = false;
    nativeMasterState.step4OtpStartUrl = "";
    nativeMasterState.otpConfirmClickedOnce = false;
    if (newFp && newFp.id) {
        var fpTag = "[" + newFp.id + "]";
        var logs = Array.isArray(nativeMasterState.logEntries) ? nativeMasterState.logEntries : [];
        var alreadyLogged = logs.length > 0 && logs[logs.length - 1] && String(logs[logs.length - 1].msg || "").indexOf(fpTag) !== -1;
        if (!alreadyLogged) {
            var fpLogEntry = {
                ts: new Date().toTimeString().split(" ")[0],
                site: activeSiteKey,
                msg: "🛡️ Đổi máy mới " + fpTag + ": " + newFp.brand + " (" + newFp.model + " / " + newFp.buildId + ")"
            };
            nativeMasterState.logEntries = logs.slice(-59);
            nativeMasterState.logEntries.push(fpLogEntry);
        }
    }
    try {
        if (typeof app !== "undefined" && typeof app.SaveText === "function") {
            app.SaveText(MASTER_STATE_KEY, JSON.stringify(nativeMasterState), HISTORY_STORAGE_APP);
        }
    } catch (eLog) {}
}

function WipeAllBrowserTracesAndRotateDeviceNative(silentMode) {
    try {
        var newFp = GenerateNewDeviceFingerprint();
        if (!web) {
            if (!silentMode && typeof app !== "undefined" && typeof app.ShowPopup === "function") {
                app.ShowPopup("⚠️ WebView chưa sẵn sàng — Đã chuẩn bị cấu hình " + newFp.brand + " cho lần mở trang tiếp theo.");
            }
            return false;
        }
        // Khi WebView đã sẵn sàng, lưu ngay trạng thái sạch và xóa Cookie/Cache tức thì phòng trường hợp OnPause() đóng app
        ResetMasterSessionFlagsOnWipe(newFp);
        try { if (typeof web.ClearCookies === "function") web.ClearCookies(); } catch (eC1) {}
        try { if (typeof web.ClearCache === "function") web.ClearCache(); } catch (eC2) {}
        try { if (typeof web.SetUserAgent === "function") web.SetUserAgent(newFp.ua); } catch (eC3) {}

        isWipePending = true;
        pendingWipeNewFp = newFp;
        pendingWipeSilent = Boolean(silentMode);
        if (pendingWipeFinalizeTimer) clearTimeout(pendingWipeFinalizeTimer);

        // Chờ __cholibiWipeAllSiteTracesJS() xóa xong IndexedDB/CacheStorage/ServiceWorker rồi báo CHOLIBI_WIPE_DONE (tối đa 1500ms)
        try {
            web.Execute(
                "(function(){" +
                "try{" +
                "if(typeof window.__cholibiWipeAllSiteTracesJS==='function'){" +
                "Promise.resolve(window.__cholibiWipeAllSiteTracesJS()).then(function(){console.log('CHOLIBI_WIPE_DONE');}).catch(function(){console.log('CHOLIBI_WIPE_DONE');});" +
                "}else{" +
                "try{sessionStorage.clear();}catch(e1){}" +
                "try{Object.keys(localStorage).forEach(function(k){if(k.indexOf('CHOLIBI_')!==0)localStorage.removeItem(k);});}catch(e2){}" +
                "console.log('CHOLIBI_WIPE_DONE');" +
                "}" +
                "}catch(e){console.log('CHOLIBI_WIPE_DONE');}" +
                "})();"
            );
        } catch (eExec) {
            return FinalizeBrowserWipeAndReloadNative();
        }
        pendingWipeFinalizeTimer = setTimeout(FinalizeBrowserWipeAndReloadNative, 1500);
        return true;
    } catch (e) {
        return false;
    }
}

var nativeHistoryList = [];

// Bộ lưu trữ các trường phôi đã khóa trong SharedPreferences của ứng dụng
var nativeLockedVault = {
    pw: "",
    wd: "123123",
    name: "",
    phone: "",
    bank: "",
    branch: "Ninh bình",
    stk: "",
    stkBackup: "",
    proxy: "",
    updatedAt: 0,
    clearedFields: {}
};

var nativeMasterState = {
    site: "TT88",
    dataUpdatedAt: 0,
    data: {
        username: "",
        pw: "",
        wd: "123123",
        name: "",
        phone: "",
        bank: "TECHCOMBANK",
        branch: "Ninh bình",
        stk: "",
        stkBackup: "",
        proxy: ""
    },
    lockBankProfile: true,
    autoWipeOnExit: true,
    autoLearnSites: true,
    autoMode: false,
    currentStep: 0,
    registrationSubmitted: false,
    submittedUsername: "",
    withdrawPinSetInStep1: false,
    waitingOtp: false,
    usedBackupStk: false,
    retryUserCount: 0,
    groupDPinSet: false,
    step4OtpStartUrl: "",
    otpConfirmClickedOnce: false,
    collapsed: {},
    logEntries: []
};
// ============================================================================
// TIỆN ÍCH MÃ HÓA BASE64 AN TOÀN UTF-8 (DÙNG ĐỂ TRUYỀN DỮ LIỆU QUA CẦU NỐI)
// ============================================================================
var Base64Util = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        var str = (input === undefined || input === null) ? "" : String(input);
        var utf8 = unescape(encodeURIComponent(str));
        while (i < utf8.length) {
            chr1 = utf8.charCodeAt(i++);
            chr2 = utf8.charCodeAt(i++);
            chr3 = utf8.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
    decode: function(input) {
        if (input === undefined || input === null) return "";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        var clean = String(input).replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < clean.length) {
            var c1 = clean.charAt(i++);
            var c2 = clean.charAt(i++);
            var c3 = clean.charAt(i++);
            var c4 = clean.charAt(i++);
            enc1 = c1 ? this._keyStr.indexOf(c1) : -1;
            enc2 = c2 ? this._keyStr.indexOf(c2) : -1;
            enc3 = c3 ? this._keyStr.indexOf(c3) : 64;
            enc4 = c4 ? this._keyStr.indexOf(c4) : 64;
            if (enc1 < 0 || enc2 < 0 || enc1 === 64 || enc2 === 64) break;
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | ((enc3 >= 0 && enc3 < 64 ? enc3 : 0) >> 2);
            chr3 = (((enc3 >= 0 && enc3 < 64 ? enc3 : 0) & 3) << 6) | (enc4 >= 0 && enc4 < 64 ? enc4 : 0);
            output = output + String.fromCharCode(chr1);
            if (enc3 >= 0 && enc3 < 64) output = output + String.fromCharCode(chr2);
            if (enc4 >= 0 && enc4 < 64) output = output + String.fromCharCode(chr3);
        }
        try {
            return decodeURIComponent(escape(output));
        } catch (e) {
            return output;
        }
    }
};

// ============================================================================
// QUẢN LÝ TRẠNG THÁI PHÔI KHÓA NATIVE (CHỐNG GHI ĐÈ KHI CHUYỂN CỔNG GAME)
// ============================================================================
var ALLOWED_LOCKED_FIELDS = ["pw", "wd", "name", "phone", "bank", "branch", "stk", "stkBackup", "proxy"];
var ALLOWED_MASTER_DATA_FIELDS = ["username", "pw", "wd", "name", "phone", "bank", "branch", "stk", "stkBackup", "proxy"];
var VAULT_CIPHER_KEY = "CHOLIBI_VAULT_SECRET_KEY_V31_MASTER";

function EncryptVaultPayload(vaultObj) {
    try {
        var jsonStr = JSON.stringify(vaultObj || {});
        var utf8 = unescape(encodeURIComponent(jsonStr));
        var xored = "";
        for (var i = 0; i < utf8.length; i++) {
            var kCode = VAULT_CIPHER_KEY.charCodeAt(i % VAULT_CIPHER_KEY.length);
            xored += String.fromCharCode(utf8.charCodeAt(i) ^ (kCode & 0x7F));
        }
        return "CBENC1:" + Base64Util.encode(xored);
    } catch (e) {
        return JSON.stringify(vaultObj || {});
    }
}

function DecryptVaultPayload(rawStr) {
    if (!rawStr || typeof rawStr !== "string") return null;
    var trimmed = rawStr.trim();
    if (!trimmed) return null;
    try {
        if (trimmed.indexOf("CBENC1:") === 0) {
            var b64Part = trimmed.substring(7);
            var xored = Base64Util.decode(b64Part);
            var plainUtf8 = "";
            for (var i = 0; i < xored.length; i++) {
                var kCode = VAULT_CIPHER_KEY.charCodeAt(i % VAULT_CIPHER_KEY.length);
                plainUtf8 += String.fromCharCode(xored.charCodeAt(i) ^ (kCode & 0x7F));
            }
            var jsonStr = decodeURIComponent(escape(plainUtf8));
            return JSON.parse(jsonStr);
        }
        return JSON.parse(trimmed);
    } catch (e) {
        return null;
    }
}

function LoadNativeMasterState() {
    var hasAppLoad = (typeof app !== "undefined" && typeof app.LoadText === "function");
    var hasAppSave = (typeof app !== "undefined" && typeof app.SaveText === "function");
    var hasExplicitSavedVault = false;

    // 1. Đọc dữ liệu Phôi Khóa riêng (tách biệt try/catch để nếu lỗi vẫn đọc được Master State)
    if (hasAppLoad) {
        try {
            var rawVault = app.LoadText(LOCKED_VAULT_KEY, "", HISTORY_STORAGE_APP);
            var migratedFromLegacy = false;
            if (!rawVault) {
                rawVault = app.LoadText("CHOLIBI_LOCKED_PROFILE_VAULT", "", "CHOLIBI_APP_STORAGE_V5");
                if (!rawVault) {
                    rawVault = app.LoadText("CHOLIBI_LOCKED_PROFILE_VAULT_V6", "", "CHOLIBI_APP_STORAGE_V5");
                }
                if (rawVault) migratedFromLegacy = true;
            }
            if (rawVault) {
                var parsedVault = DecryptVaultPayload(rawVault);
                if (parsedVault && typeof parsedVault === "object") {
                    hasExplicitSavedVault = true;
                    for (var i = 0; i < ALLOWED_LOCKED_FIELDS.length; i++) {
                        var fKey = ALLOWED_LOCKED_FIELDS[i];
                        if (typeof parsedVault[fKey] === "string" || typeof parsedVault[fKey] === "number") {
                            nativeLockedVault[fKey] = String(parsedVault[fKey]).trim();
                        }
                    }
                    if (typeof parsedVault.updatedAt === "number") {
                        nativeLockedVault.updatedAt = parsedVault.updatedAt;
                    }
                    if (parsedVault.clearedFields && typeof parsedVault.clearedFields === "object") {
                        nativeLockedVault.clearedFields = {};
                        for (var cIdx = 0; cIdx < ALLOWED_LOCKED_FIELDS.length; cIdx++) {
                            var cf = ALLOWED_LOCKED_FIELDS[cIdx];
                            if (parsedVault.clearedFields[cf] === true) {
                                nativeLockedVault.clearedFields[cf] = true;
                                nativeLockedVault[cf] = "";
                            }
                        }
                    }
                    if ((migratedFromLegacy || String(rawVault).trim().indexOf("CBENC1:") !== 0) && hasAppSave) {
                        try { app.SaveText(LOCKED_VAULT_KEY, EncryptVaultPayload(nativeLockedVault), HISTORY_STORAGE_APP); } catch (eM) {}
                    }
                }
            }
        } catch (eVault) {}
    }

    // Nếu chưa có bản lưu Vault riêng trên máy, tạm xóa giá trị mặc định wd/branch trong Vault để ưu tiên nhận từ MasterState
    if (!hasExplicitSavedVault) {
        nativeLockedVault.wd = "";
        nativeLockedVault.branch = "";
    }

    // 2. Đọc Master State (tách riêng try/catch)
    if (hasAppLoad) {
        try {
            var raw = app.LoadText(MASTER_STATE_KEY, "", HISTORY_STORAGE_APP);
            if (!raw) {
                raw = app.LoadText("CHOLIBI_MASTER_FORM_STATE_V5", "", "CHOLIBI_APP_STORAGE_V5");
            }
            if (raw) {
                var parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") {
                    if (parsed.site && typeof parsed.site === "string") {
                        nativeMasterState._savedSitePref = parsed.site;
                        if (SITE_CONFIGS[parsed.site]) {
                            nativeMasterState.site = parsed.site;
                            activeSiteKey = parsed.site;
                        }
                    }
                    if (typeof parsed.dataUpdatedAt === "number") {
                        nativeMasterState.dataUpdatedAt = parsed.dataUpdatedAt;
                    }
                    if (typeof parsed.lockBankProfile === "boolean") {
                        nativeMasterState.lockBankProfile = parsed.lockBankProfile;
                    }
                    if (parsed.data && typeof parsed.data === "object") {
                        for (var dIdx = 0; dIdx < ALLOWED_MASTER_DATA_FIELDS.length; dIdx++) {
                            var dk = ALLOWED_MASTER_DATA_FIELDS[dIdx];
                            if (typeof parsed.data[dk] === "string" || typeof parsed.data[dk] === "number") {
                                nativeMasterState.data[dk] = String(parsed.data[dk]).trim();
                            }
                        }
                    }
                    if (typeof parsed.autoMode === "boolean") nativeMasterState.autoMode = parsed.autoMode;
                    if (typeof parsed.currentStep === "number") nativeMasterState.currentStep = parsed.currentStep;
                    if (typeof parsed.registrationSubmitted === "boolean") nativeMasterState.registrationSubmitted = parsed.registrationSubmitted;
                    if (typeof parsed.submittedUsername === "string") nativeMasterState.submittedUsername = parsed.submittedUsername;
                    if (typeof parsed.withdrawPinSetInStep1 === "boolean") nativeMasterState.withdrawPinSetInStep1 = parsed.withdrawPinSetInStep1;
                    if (typeof parsed.waitingOtp === "boolean") nativeMasterState.waitingOtp = parsed.waitingOtp;
                    if (typeof parsed.usedBackupStk === "boolean") nativeMasterState.usedBackupStk = parsed.usedBackupStk;
                    if (typeof parsed.retryUserCount === "number") nativeMasterState.retryUserCount = parsed.retryUserCount;
                    if (typeof parsed.groupDPinSet === "boolean") nativeMasterState.groupDPinSet = parsed.groupDPinSet;
                    if (typeof parsed.step4OtpStartUrl === "string") nativeMasterState.step4OtpStartUrl = parsed.step4OtpStartUrl;
                    if (typeof parsed.otpConfirmClickedOnce === "boolean") nativeMasterState.otpConfirmClickedOnce = parsed.otpConfirmClickedOnce;
                    if (typeof parsed.autoWipeOnExit === "boolean") nativeMasterState.autoWipeOnExit = parsed.autoWipeOnExit;
                    if (typeof parsed.autoLearnSites === "boolean") nativeMasterState.autoLearnSites = parsed.autoLearnSites;
                    if (parsed.collapsed && typeof parsed.collapsed === "object") nativeMasterState.collapsed = parsed.collapsed;
                    if (Array.isArray(parsed.logEntries)) nativeMasterState.logEntries = parsed.logEntries.slice(-60);
                }
            }
        } catch (eMaster) {}
    }

    // 3. Đồng bộ bù các trường còn trống vào nativeLockedVault rồi áp dụng Khóa Phôi
    if (nativeMasterState.data) {
        UpdateLockedVaultFromData(nativeMasterState.data, false);
    }
    if (!nativeLockedVault.wd && !(nativeLockedVault.clearedFields && nativeLockedVault.clearedFields.wd)) {
        nativeLockedVault.wd = "123123";
    }
    if (!nativeLockedVault.branch && !(nativeLockedVault.clearedFields && nativeLockedVault.clearedFields.branch)) {
        nativeLockedVault.branch = "Ninh bình";
    }
    ApplyLockedVaultToMasterData();
}

function ApplyLockedVaultToMasterData() {
    if (nativeMasterState.lockBankProfile === false) return;
    nativeMasterState.data = nativeMasterState.data || {};
    var clearedMap = (nativeLockedVault && nativeLockedVault.clearedFields) ? nativeLockedVault.clearedFields : {};
    for (var i = 0; i < ALLOWED_LOCKED_FIELDS.length; i++) {
        var f = ALLOWED_LOCKED_FIELDS[i];
        if (clearedMap && clearedMap[f]) {
            nativeMasterState.data[f] = "";
        } else if (nativeLockedVault[f] !== undefined && nativeLockedVault[f] !== null && String(nativeLockedVault[f]) !== "") {
            nativeMasterState.data[f] = String(nativeLockedVault[f]);
        }
    }
}

function UpdateLockedVaultFromData(dataObj, explicitUserEdit, editedFieldsList) {
    if (!dataObj || typeof dataObj !== "object") return false;
    nativeLockedVault.clearedFields = nativeLockedVault.clearedFields || {};
    var changed = false;
    var hasSpecificFields = Array.isArray(editedFieldsList) && editedFieldsList.length > 0;
    var isSingleFieldClearAllowed = Boolean(explicitUserEdit && hasSpecificFields && editedFieldsList.length === 1);

    for (var i = 0; i < ALLOWED_LOCKED_FIELDS.length; i++) {
        var f = ALLOWED_LOCKED_FIELDS[i];
        if (dataObj[f] === undefined || dataObj[f] === null) continue;
        if (explicitUserEdit && hasSpecificFields && editedFieldsList.indexOf(f) === -1) continue;
        var incoming = String(dataObj[f]).trim();
        if (explicitUserEdit) {
            // Chặn việc đồng bộ hàng loạt (không chỉ định 1 ô cụ thể) vô tình gửi chuỗi rỗng xóa mất dữ liệu đã khóa
            if (incoming === "" && !isSingleFieldClearAllowed && nativeLockedVault[f]) {
                continue;
            }
            if (nativeLockedVault[f] !== incoming) {
                nativeLockedVault[f] = incoming;
                changed = true;
            }
            if (incoming === "" && isSingleFieldClearAllowed) {
                nativeLockedVault.clearedFields[f] = true;
                changed = true;
            } else if (incoming !== "" && nativeLockedVault.clearedFields[f]) {
                delete nativeLockedVault.clearedFields[f];
                changed = true;
            }
        } else if (incoming && !nativeLockedVault[f] && !nativeLockedVault.clearedFields[f]) {
            nativeLockedVault[f] = incoming;
            changed = true;
        }
    }
    if (changed) {
        nativeLockedVault.updatedAt = Date.now();
        try {
            if (typeof app !== "undefined" && typeof app.SaveText === "function") {
                app.SaveText(LOCKED_VAULT_KEY, EncryptVaultPayload(nativeLockedVault), HISTORY_STORAGE_APP);
            }
        } catch (e) {}
    }
    return changed;
}

function SaveSingleUserFieldEditNative(editPayload) {
    if (!editPayload || typeof editPayload !== "object") return false;
    try {
        if (typeof editPayload.lockBankProfile === "boolean") {
            nativeMasterState.lockBankProfile = editPayload.lockBankProfile;
        }
        nativeMasterState.data = nativeMasterState.data || {};
        var f = String(editPayload.field || "").trim();
        if (f && ALLOWED_MASTER_DATA_FIELDS.indexOf(f) !== -1 && editPayload.value !== undefined && editPayload.value !== null) {
            var valStr = String(editPayload.value).trim();
            nativeMasterState.data[f] = valStr;
            if (ALLOWED_LOCKED_FIELDS.indexOf(f) !== -1) {
                var singlePatch = {};
                singlePatch[f] = valStr;
                UpdateLockedVaultFromData(singlePatch, true, [f]);
            }
            nativeMasterState.dataUpdatedAt = Date.now();
        } else if (editPayload.data && typeof editPayload.data === "object") {
            var validEdited = [];
            var explicitList = Array.isArray(editPayload.editedFields) ? editPayload.editedFields : null;
            for (var i = 0; i < ALLOWED_MASTER_DATA_FIELDS.length; i++) {
                var k = ALLOWED_MASTER_DATA_FIELDS[i];
                if (editPayload.data[k] !== undefined && editPayload.data[k] !== null) {
                    var incomingVal = String(editPayload.data[k]).trim();
                    if (incomingVal !== "" || !nativeMasterState.data[k] || (explicitList && explicitList.length === 1 && explicitList[0] === k)) {
                        nativeMasterState.data[k] = incomingVal;
                    }
                    validEdited.push(k);
                }
            }
            UpdateLockedVaultFromData(editPayload.data, true, explicitList || validEdited);
            nativeMasterState.dataUpdatedAt = Date.now();
        }
        if (nativeMasterState.lockBankProfile !== false) {
            ApplyLockedVaultToMasterData();
        }
        if (typeof app !== "undefined" && typeof app.SaveText === "function") {
            app.SaveText(MASTER_STATE_KEY, JSON.stringify(nativeMasterState), HISTORY_STORAGE_APP);
        }
        if (typeof UpdateOverlayStatusText === "function") {
            UpdateOverlayStatusText();
        }
        if (web && editPayload.editId) {
            var safeEditId = String(editPayload.editId).replace(/[^a-zA-Z0-9_\-]/g, "");
            try {
                web.Execute("if(window.__cholibiOnVaultSavedAck){window.__cholibiOnVaultSavedAck('" + safeEditId + "');}");
            } catch (eAck) {}
        }
        return true;
    } catch (e) {
        return false;
    }
}

function SaveNativeMasterState(patchObj) {
    if (!patchObj || typeof patchObj !== "object") return false;
    try {
        var isExplicitUserEdit = Boolean(patchObj.userEdited);

        if (patchObj.site && SITE_CONFIGS[patchObj.site]) {
            nativeMasterState.site = patchObj.site;
        }
        if (typeof patchObj.lockBankProfile === "boolean") {
            nativeMasterState.lockBankProfile = patchObj.lockBankProfile;
        }
        if (patchObj.data && typeof patchObj.data === "object") {
            nativeMasterState.data = nativeMasterState.data || {};
            if (isExplicitUserEdit) {
                var explicitFields = (Array.isArray(patchObj.editedFields) && patchObj.editedFields.length > 0) ? patchObj.editedFields : null;
                var isSingleClear = Boolean(explicitFields && explicitFields.length === 1);
                for (var i = 0; i < ALLOWED_MASTER_DATA_FIELDS.length; i++) {
                    var k = ALLOWED_MASTER_DATA_FIELDS[i];
                    if (patchObj.data[k] !== undefined && patchObj.data[k] !== null) {
                        var incomingStr = String(patchObj.data[k]).trim();
                        var isTargetedField = !explicitFields || explicitFields.indexOf(k) !== -1;
                        if (!isTargetedField && nativeMasterState.data[k]) continue;
                        if (incomingStr !== "" || !nativeMasterState.data[k] || (isSingleClear && explicitFields[0] === k)) {
                            nativeMasterState.data[k] = incomingStr;
                        }
                    }
                }
                UpdateLockedVaultFromData(patchObj.data, true, patchObj.editedFields);
                nativeMasterState.dataUpdatedAt = Date.now();
            } else {
                if (patchObj.data.username !== undefined && patchObj.data.username !== null && String(patchObj.data.username).trim() !== "") {
                    nativeMasterState.data.username = String(patchObj.data.username).trim();
                }
                for (var j = 0; j < ALLOWED_MASTER_DATA_FIELDS.length; j++) {
                    var k2 = ALLOWED_MASTER_DATA_FIELDS[j];
                    if (k2 === "username") continue;
                    if (patchObj.data[k2] !== undefined && patchObj.data[k2] !== null) {
                        var valStr = String(patchObj.data[k2]).trim();
                        if (nativeMasterState.lockBankProfile === false) {
                            if (valStr || !nativeMasterState.data[k2]) {
                                nativeMasterState.data[k2] = valStr;
                            }
                        } else if (valStr && !nativeMasterState.data[k2]) {
                            // Khi bật Khóa Phôi nhưng trường đó chưa có dữ liệu trong cả MasterState lẫn LockedVault, cho phép điền bù giá trị khởi tạo
                            nativeMasterState.data[k2] = valStr;
                        }
                    }
                }
                UpdateLockedVaultFromData(nativeMasterState.data, false);
            }
        }

        if (nativeMasterState.lockBankProfile !== false) {
            ApplyLockedVaultToMasterData();
        }

        if (typeof patchObj.autoMode === "boolean") nativeMasterState.autoMode = patchObj.autoMode;
        if (typeof patchObj.currentStep === "number") nativeMasterState.currentStep = patchObj.currentStep;
        if (typeof patchObj.registrationSubmitted === "boolean") nativeMasterState.registrationSubmitted = patchObj.registrationSubmitted;
        if (typeof patchObj.submittedUsername === "string") nativeMasterState.submittedUsername = patchObj.submittedUsername;
        if (typeof patchObj.withdrawPinSetInStep1 === "boolean") nativeMasterState.withdrawPinSetInStep1 = patchObj.withdrawPinSetInStep1;
        if (typeof patchObj.waitingOtp === "boolean") nativeMasterState.waitingOtp = patchObj.waitingOtp;
        if (typeof patchObj.usedBackupStk === "boolean") nativeMasterState.usedBackupStk = patchObj.usedBackupStk;
        if (typeof patchObj.retryUserCount === "number") nativeMasterState.retryUserCount = patchObj.retryUserCount;
        if (typeof patchObj.groupDPinSet === "boolean") nativeMasterState.groupDPinSet = patchObj.groupDPinSet;
        if (typeof patchObj.step4OtpStartUrl === "string") nativeMasterState.step4OtpStartUrl = patchObj.step4OtpStartUrl;
        if (typeof patchObj.otpConfirmClickedOnce === "boolean") nativeMasterState.otpConfirmClickedOnce = patchObj.otpConfirmClickedOnce;
        if (typeof patchObj.autoWipeOnExit === "boolean") nativeMasterState.autoWipeOnExit = patchObj.autoWipeOnExit;
        if (typeof patchObj.autoLearnSites === "boolean") nativeMasterState.autoLearnSites = patchObj.autoLearnSites;
        if (patchObj.collapsed && typeof patchObj.collapsed === "object") {
            nativeMasterState.collapsed = patchObj.collapsed;
        }
        if (Array.isArray(patchObj.logEntries)) {
            nativeMasterState.logEntries = patchObj.logEntries.slice(-60);
        }
        if (typeof app !== "undefined" && typeof app.SaveText === "function") {
            app.SaveText(MASTER_STATE_KEY, JSON.stringify(nativeMasterState), HISTORY_STORAGE_APP);
        }
        if (typeof UpdateOverlayStatusText === "function") {
            UpdateOverlayStatusText();
        }
        return true;
    } catch (e) {
        return false;
    }
}
// ============================================================================
// BẢNG NỔI ĐIỀU KHIỂN ĐA NĂNG (NATIVE INTERACTIVE FLOATING CONTROL DOCK)
// Hoạt động cảm ứng 100% trực tiếp trên màn hình WebView + Đồng bộ Multi-Clip!
// ============================================================================
function CleanupLegacySystemOverlay() {
    try {
        if (layExternalOverlay && typeof layExternalOverlay.SetVisibility === "function") {
            layExternalOverlay.SetVisibility("Gone");
        }
    } catch (e0) {}
    try {
        if (sysOverlay && layExternalOverlay && typeof sysOverlay.RemoveLayout === "function") {
            sysOverlay.RemoveLayout(layExternalOverlay);
        }
    } catch (e1) {}
    try {
        if (sysOverlay && typeof sysOverlay.Hide === "function") {
            sysOverlay.Hide();
        }
    } catch (e2) {}
    try {
        if (layExternalOverlay && typeof app !== "undefined" && typeof app.DestroyLayout === "function") {
            app.DestroyLayout(layExternalOverlay);
        }
    } catch (e3) {}
    sysOverlay = null;
    layExternalOverlay = null;
}

var isExternalBrowserActive = false;
var lastDispatchedCmdId = "";
var crossAppCmdSeq = 0;

function OnPause() {
    isExternalBrowserActive = true;
    // Giữ nguyên sysOverlay khi chuyển sang GoLogin / Orbita để điều khiển xuyên ứng dụng (Fix P0.1)
    UpdateOverlayStatusText();
    // Yêu cầu #3: Khi đăng ký xong và thoát/ẩn ứng dụng, tự động xóa sạch dấu vân tay cũ để lần sau là máy mới!
    if (nativeMasterState.autoWipeOnExit !== false && sessionCompletedNeedsWipeOnExit) {
        WipeAllBrowserTracesAndRotateDeviceNative(true);
    }
}

function OnResume() {
    isExternalBrowserActive = false;
    UpdateOverlayStatusText();
}

function UpdateOverlayStatusText(customNote) {
    var d = nativeMasterState.data || {};
    var u = d.username || "Chưa tạo";
    var s = nativeMasterState.site || activeSiteKey;
    var n = d.name ? (" | " + d.name.substring(0, 12)) : "";
    var msg = customNote ? ("🟢 [" + s + "] " + customNote) : ("🟢 NỔI [" + s + "] TK: " + u + n);
    try {
        if (ovStatusTxt && typeof ovStatusTxt.SetText === "function") ovStatusTxt.SetText(msg);
    } catch (e1) {}
    try {
        if (ovExtStatusTxt && typeof ovExtStatusTxt.SetText === "function") ovExtStatusTxt.SetText(msg);
    } catch (e2) {}
}

function ExecuteFloatingWebViewCommand(cmdType, extraObj) {
    if (!web) return;
    ApplyLockedVaultToMasterData();
    crossAppCmdSeq = (Number(crossAppCmdSeq) || 0) + 1;
    var cmdId = "wv_cmd_" + Date.now() + "_" + crossAppCmdSeq;
    lastDispatchedCmdId = cmdId;
    var payload = {
        cmdId: cmdId,
        cmd: cmdType,
        site: activeSiteKey,
        data: nativeMasterState.data || {},
        vault: nativeLockedVault || {},
        extra: extraObj || {}
    };
    var b64 = Base64Util.encode(JSON.stringify(payload));
    var jsCall =
        "(function(){" +
        "if(typeof window.__cholibiFloatingAction==='function'){" +
        "window.__cholibiFloatingAction('" + b64 + "');" +
        "}else{" +
        "window.__cholibiPendingFloatingCmd='" + b64 + "';" +
        "console.log('CHOLIBI_NEED_INJECT');" +
        "}" +
        "})();";
    try {
        web.Execute(jsCall);
    } catch (eExec) {}
}

function EnsureNativeProfileGenerated(forceNewUser) {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    var clearedMap = (nativeLockedVault && nativeLockedVault.clearedFields) ? nativeLockedVault.clearedFields : {};
    var prefixes = ["hoangnam", "minhtuan", "quocbao", "ducanh", "thanhlong", "vanminh", "giabao", "huuphuc", "tuananh", "dinhkhoa", "dienphu"];
    var lastNames = ["NGUYEN", "TRAN", "LE", "PHAM", "HOANG", "PHAN", "VU", "DANG", "BUI", "DO"];
    var midNames = ["VAN", "QUOC", "HOANG", "DUC", "MINH", "HUU", "GIA", "TUAN", "THANH"];
    var firstNames = ["MINH", "TUAN", "NAM", "HUNG", "LONG", "DAT", "SON", "KHOA", "PHUC", "BAO"];
    var phonePres = ["098", "097", "096", "038", "039", "091", "090", "093"];

    var nextUser = (!forceNewUser && d.username) ? d.username : "";
    if (!nextUser) {
        var prevUser = String(d.username || nativeMasterState.submittedUsername || "").trim().toLowerCase();
        for (var attempt = 0; attempt < 8; attempt++) {
            var candidate = prefixes[Math.floor(Math.random() * prefixes.length)] + String(Math.floor(100 + Math.random() * 899));
            if (candidate.toLowerCase() !== prevUser) {
                nextUser = candidate;
                break;
            }
        }
        if (!nextUser) {
            nextUser = prefixes[Math.floor(Math.random() * prefixes.length)] + String(Math.floor(1000 + Math.random() * 8999));
        }
    }
    var nextPw = d.pw || ("Abc" + String(Math.floor(100000 + Math.random() * 899999)));
    var nextName = d.name || (
        lastNames[Math.floor(Math.random() * lastNames.length)] + " " +
        midNames[Math.floor(Math.random() * midNames.length)] + " " +
        firstNames[Math.floor(Math.random() * firstNames.length)]
    );
    var nextPhone = d.phone || (phonePres[Math.floor(Math.random() * phonePres.length)] + String(Math.floor(1000000 + Math.random() * 8999999)));
    var nextStk = (!clearedMap.stk && (d.stk || (nativeLockedVault && nativeLockedVault.stk))) ? (d.stk || nativeLockedVault.stk) : "";
    var nextStkBak = (!clearedMap.stkBackup && (d.stkBackup || (nativeLockedVault && nativeLockedVault.stkBackup))) ? (d.stkBackup || nativeLockedVault.stkBackup) : "";
    var nextWd = (!clearedMap.wd && d.wd) ? d.wd : (clearedMap.wd ? "" : "123123");
    var nextBank = (!clearedMap.bank && d.bank) ? d.bank : (clearedMap.bank ? "" : "TECHCOMBANK");
    var nextBranch = (!clearedMap.branch && d.branch) ? d.branch : (clearedMap.branch ? "" : "Ninh bình");
    var nextProxy = (!clearedMap.proxy && d.proxy) ? d.proxy : "";

    SaveNativeMasterState({
        userEdited: false,
        registrationSubmitted: false,
        submittedUsername: "",
        data: {
            username: nextUser,
            pw: nextPw,
            wd: nextWd,
            name: nextName,
            phone: nextPhone,
            bank: nextBank,
            branch: nextBranch,
            stk: nextStk,
            stkBackup: nextStkBak,
            proxy: nextProxy
        }
    });
    if (typeof SyncRegistryToWebView === "function") {
        SyncRegistryToWebView();
    }
    return nativeMasterState.data;
}

function PushMultiClipboardForExternal() {
    for (var i = 0; i < multiClipTimers.length; i++) {
        clearTimeout(multiClipTimers[i]);
    }
    multiClipTimers = [];
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    if (!d.username) d = EnsureNativeProfileGenerated();
    var bm = BuildBookmarkletForOrbita();
    CopyWithAutoClear(bm, 45000);
    try {
        if (!cholibiNotify && typeof app !== "undefined" && typeof app.CreateNotification === "function") {
            cholibiNotify = app.CreateNotification();
        }
        if (cholibiNotify && typeof cholibiNotify.SetMessage === "function") {
            var maskedStk = d.stk ? ("***" + String(d.stk).slice(-4)) : "Chưa có";
            var phoneDisp = FormatPhoneForSiteNative(d.phone, activeSiteKey) || d.phone || "";
            cholibiNotify.SetMessage(
                "CHOLIBI [" + activeSiteKey + "] TK: " + d.username,
                "CHOLIBI Phôi: " + d.username + " | " + (d.name || ""),
                "MK: ****** | SĐT: " + phoneDisp + " | STK: " + maskedStk
            );
            cholibiNotify.Notify("cholibi_profile_id");
        }
    } catch (e) {}
}

// ============================================================================
// CỖ MÁY ĐIỀU KHIỂN XUYÊN ỨNG DỤNG 3 CON ĐƯỜNG (A11Y SERVICE + AUTOX.JS + ADB)
// Báo cáo trung thực trạng thái: PENDING -> SUCCESS / FAILED (Fix P0-06 & P1-05)
// ============================================================================
var crossAppControlMode = "A11Y_PRIMARY"; // "A11Y_PRIMARY" | "AUTOX_BRIDGE" | "ADB_SHELL"
var crossAppCmdSeq = (typeof crossAppCmdSeq === "number" && isFinite(crossAppCmdSeq)) ? crossAppCmdSeq : 0;
var lastA11yStatusTs = 0;
var lastA11yPacketSig = "";
var a11yAckWatchdogTimer = null;
var a11yCmdStateMap = {};
var layExtBody = null;
var btnExtFold = null;
var isExtOverlayFolded = false;

function IsAdbShellAvailableNative() {
    return Boolean(typeof app !== "undefined" && app && (typeof app.SysExec === "function" || typeof app.Shell === "function"));
}

function AdbShellExec(cmdStr, onDone) {
    if (!cmdStr || typeof cmdStr !== "string") {
        if (onDone) onDone(false, "EMPTY_CMD");
        return false;
    }
    if (!IsAdbShellAvailableNative()) {
        if (onDone) onDone(false, "APK_NO_SHELL_SUPPORT");
        return false;
    }
    try {
        if (typeof app.SysExec === "function") {
            var res = app.SysExec(cmdStr, "sh");
            var resStr = String(res == null ? "" : res);
            var isErr = /(?:^|\n)\s*(?:sh:|error:|permission denied|not found|inaccessible)/i.test(resStr);
            if (onDone) onDone(!isErr, resStr);
            return !isErr;
        }
        if (typeof app.Shell === "function") {
            app.Shell(cmdStr, function(status, out) {
                var ok = (status === 0 || status === "0" || status === true || status === undefined || status === null);
                if (onDone) onDone(ok, out || "");
            });
            return true;
        }
    } catch (e) {
        if (onDone) onDone(false, String(e));
    }
    return false;
}

function AdbTap(x, y) {
    var nx = Number(x), ny = Number(y);
    if (!isFinite(nx) || !isFinite(ny) || nx < 0 || ny < 0) return false;
    return AdbShellExec("input tap " + Math.round(nx) + " " + Math.round(ny));
}

function NormalizeAsciiTextNative(str) {
    if (!str) return "";
    var s = String(str);
    try {
        if (typeof s.normalize === "function") {
            s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
    } catch (e) {}
    return s.replace(/đ/g, "d").replace(/Đ/g, "D");
}

function FormatPhoneForSiteNative(rawPhone, siteKey) {
    var digits = String(rawPhone || "").replace(/\D+/g, "");
    if (!digits) return "";
    if (digits.indexOf("84") === 0 && digits.length >= 11) {
        digits = "0" + digits.substring(2);
    }
    var key = (siteKey && SITE_CONFIGS[siteKey]) ? siteKey : activeSiteKey;
    var cfg = (key && SITE_CONFIGS[key]) ? SITE_CONFIGS[key] : null;
    var grp = (cfg && cfg.group) ? cfg.group : "GROUP_A";
    if (grp === "GROUP_A" || grp === "GROUP_D") {
        return digits.replace(/^0+/, "");
    }
    return digits.indexOf("0") === 0 ? digits : ("0" + digits);
}

function NormalizeBankCodeFromTextNative(rawBank) {
    var b = NormalizeAsciiTextNative(rawBank || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!b) return "TECHCOMBANK";
    var map = {
        "LIENVIETBANK": "LPBANK",
        "LIENVIETPOSTBANK": "LPBANK",
        "LPB": "LPBANK",
        "LPBANK": "LPBANK",
        "TCB": "TECHCOMBANK",
        "TECHCOMBANK": "TECHCOMBANK",
        "VCB": "VIETCOMBANK",
        "VIETCOMBANK": "VIETCOMBANK",
        "CTG": "VIETINBANK",
        "VIETINBANK": "VIETINBANK",
        "MB": "MBBANK",
        "MBBANK": "MBBANK",
        "TPB": "TPBANK",
        "TPBANK": "TPBANK",
        "VPB": "VPBANK",
        "VPBANK": "VPBANK",
        "BIDV": "BIDV",
        "ACB": "ACB",
        "SACOMBANK": "SACOMBANK",
        "STB": "SACOMBANK",
        "SHB": "SHB",
        "HDBANK": "HDBANK",
        "VIB": "VIB",
        "MSB": "MSB",
        "OCB": "OCB",
        "SEABANK": "SEABANK",
        "EXIMBANK": "EXIMBANK",
        "AGRIBANK": "AGRIBANK",
        "ABBANK": "ABBANK",
        "NAMABANK": "NAMABANK",
        "BACABANK": "BACABANK",
        "PVCOMBANK": "PVCOMBANK",
        "PUBLICBANK": "PUBLICBANK",
        "VIDBANK": "PUBLICBANK"
    };
    return map[b] || b;
}

function TryParsePipeProfileStringNative(rawText, saveToState) {
    if (!rawText || typeof rawText !== "string" || rawText.indexOf("|") === -1) return null;
    var firstLine = rawText.trim().split(/\r?\n/)[0].trim();
    var parts = firstLine.split("|").map(function(p) { return String(p || "").trim(); });
    if (parts.length < 3 || parts.length > 6) return null;
    var rawName = NormalizeAsciiTextNative(parts[0]).toUpperCase().replace(/[^A-Z\s]/g, " ").replace(/\s+/g, " ").trim();
    var rawPhone = parts[1].replace(/\D+/g, "");
    // STK ngân hàng chỉ chấp nhận chữ số (có thể phân tách bằng khoảng trắng hoặc dấu gạch ngang); nếu lẫn chữ cái thì báo lỗi (return null)
    if (/[A-Za-z]/.test(parts[2])) return null;
    var rawStk = parts[2].replace(/\D+/g, "");
    if (rawName.length < 4 || rawName.indexOf(" ") === -1) return null;
    if (rawPhone.length < 9 || rawPhone.length > 12) return null;
    if (rawStk.length < 6 || rawStk.length > 22) return null;
    var normPhone = rawPhone.indexOf("84") === 0 && rawPhone.length >= 11
        ? ("0" + rawPhone.substring(2))
        : (rawPhone.indexOf("0") === 0 ? rawPhone : ("0" + rawPhone));
    var normBank = parts[3] ? NormalizeBankCodeFromTextNative(parts[3]) : ((nativeMasterState.data && nativeMasterState.data.bank) || "TECHCOMBANK");
    var normProxy = parts[4] ? parts[4].trim() : ((nativeMasterState.data && nativeMasterState.data.proxy) || "");
    var normBranch = parts[5] ? parts[5].trim() : ((nativeMasterState.data && nativeMasterState.data.branch) || "Ninh bình");
    var parsedObj = {
        name: rawName,
        phone: normPhone,
        stk: rawStk,
        bank: normBank,
        proxy: normProxy,
        branch: normBranch
    };
    if (saveToState) {
        var edited = ["name", "phone", "stk"];
        if (parts[3]) edited.push("bank");
        if (parts[4]) edited.push("proxy");
        if (parts[5]) edited.push("branch");
        SaveNativeMasterState({
            userEdited: true,
            editedFields: edited,
            data: parsedObj
        });
    }
    return parsedObj;
}

function AdbInputText(text) {
    if (text === undefined || text === null) return false;
    var raw = String(text).trim();
    if (!raw || /[\r\n\0]/.test(raw)) return false;
    // Không âm thầm cắt bỏ ký tự đặc biệt của mật khẩu (như !, @, #, $); nếu chứa ký tự ngoài bảng ASCII in được thì từ chối rõ ràng
    if (/[^\x20-\x7E]/.test(raw)) return false;
    var escaped = raw.replace(/ /g, "%s").replace(/([\\"'`$&|;<>()*?!~#])/g, "\\$1");
    if (!escaped) return false;
    return AdbShellExec("input text \"" + escaped + "\"");
}

function AdbSwipe(x1, y1, x2, y2, durationMs) {
    var nx1 = Number(x1), ny1 = Number(y1), nx2 = Number(x2), ny2 = Number(y2);
    if (!isFinite(nx1) || !isFinite(ny1) || !isFinite(nx2) || !isFinite(ny2)) return false;
    var dur = parseInt(durationMs, 10);
    if (!isFinite(dur) || dur < 100 || dur > 5000) dur = 750;
    return AdbShellExec("input swipe " + Math.round(nx1) + " " + Math.round(ny1) + " " + Math.round(nx2) + " " + Math.round(ny2) + " " + dur);
}

function AdbKeyEvent(keyCode) {
    var code = parseInt(keyCode, 10);
    if (!isFinite(code) || code < 1 || code > 300) code = 66;
    return AdbShellExec("input keyevent " + code);
}

// Fix Kết Nối JS <-> Java #2: Mỗi lệnh có cmdId duy nhất + bộ canh thời gian 7.5s báo nếu Accessibility chưa bật
function TriggerCrossAppCommand(cmdName, extraData) {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    crossAppCmdSeq = (Number(crossAppCmdSeq) || 0) + 1;
    var cmdId = "cmd_" + Date.now() + "_" + crossAppCmdSeq;
    if (cmdName !== "SYNC_PROFILE") {
        lastDispatchedCmdId = cmdId;
    }
    var siteCfgNow = SITE_CONFIGS[activeSiteKey] || {};
    var cleanNameUpper = NormalizeAsciiTextNative(d.name || "").toUpperCase().replace(/[^A-Z\s]/g, " ").replace(/\s+/g, " ").trim();
    var formattedPhone = FormatPhoneForSiteNative(d.phone, activeSiteKey) || d.phone || "";
    var cleanStkDigits = String(d.stk || "").replace(/\D+/g, "");
    var cleanStkBakDigits = String(d.stkBackup || "").replace(/\D+/g, "");
    var fullPacket = {
        cmdId: cmdId,
        cmd: cmdName || "STEP_EXEC",
        site: activeSiteKey,
        flow: siteCfgNow.flow || "FLOW_1",
        group: siteCfgNow.group || "GROUP_B",
        username: d.username || "",
        pw: d.pw || "",
        wd: d.wd || "123123",
        name: cleanNameUpper || d.name || "",
        phone: formattedPhone,
        rawPhone: d.phone || "",
        bank: d.bank || "TECHCOMBANK",
        branch: d.branch || "Ninh bình",
        stk: cleanStkDigits || d.stk || "",
        stkBackup: cleanStkBakDigits || d.stkBackup || "",
        extra: extraData || {},
        ts: Date.now()
    };
    if (cmdName === "SYNC_PROFILE") {
        SendSafeBroadcast("com.cholibi.action.SYNC_PROFILE", fullPacket);
        return cmdId;
    }
    // Điều phối độc lập theo đúng 1 backend đã chọn (tránh gửi kép cả A11y lẫn AutoX hoặc giả lập ADB khi APK không hỗ trợ)
    if (crossAppControlMode === "ADB_SHELL") {
        if (!IsAdbShellAvailableNative()) {
            UpdateOverlayStatusText("🔴 FAILED: APK hiện tại không hỗ trợ ADB Shell (Hãy dùng A11Y_PRIMARY)");
            return cmdId;
        }
        SendSafeBroadcast("com.cholibi.action.ADB_EXEC", fullPacket);
    } else if (crossAppControlMode === "AUTOX_BRIDGE") {
        SendSafeBroadcast("com.cholibi.autox.ACTION_EXEC", fullPacket);
    } else {
        SendSafeBroadcast("com.cholibi.action.STEP_EXEC", fullPacket);
    }

    if (a11yAckWatchdogTimer) {
        clearTimeout(a11yAckWatchdogTimer);
        a11yAckWatchdogTimer = null;
    }
    var prevState = a11yCmdStateMap[cmdId];
    if (prevState && prevState.timer) clearTimeout(prevState.timer);
    var cmdTimer = setTimeout(function() {
        var stNow = a11yCmdStateMap[cmdId];
        if (stNow && stNow.rank < 2 && lastDispatchedCmdId === cmdId) {
            UpdateOverlayStatusText("⚠️ Chưa thấy phản hồi A11y (Hãy bật dịch vụ Accessibility hoặc dán mã Orbita)");
        }
    }, 7500);
    a11yAckWatchdogTimer = cmdTimer;
    a11yCmdStateMap[cmdId] = {
        cmdId: cmdId,
        cmd: cmdName || "STEP_EXEC",
        status: "DISPATCHED",
        rank: 0,
        ts: fullPacket.ts,
        timer: cmdTimer
    };
    return cmdId;
}

// Fix Kết Nối JS <-> Java #3: Quản lý trạng thái & timer riêng theo từng cmdId, chống gói INIT/DRAG tắt nhầm watchdog và chống lùi trạng thái SUCCESS -> PENDING
function HandleA11yStatusPacket(pkt) {
    if (!pkt || typeof pkt !== "object") return;
    var ts = Number(pkt.ts || Date.now());
    var pktCmdId = String(pkt.cmdId || "").trim();
    var st = String(pkt.status || "PENDING").toUpperCase();
    var msg = String(pkt.message || "");
    var cmd = String(pkt.cmd || pkt.type || "A11Y");
    var isSliderDragAck = /SLIDER_DRAG|DRAG/i.test(cmd);
    var isInitOrHeartbeat = /^(?:INIT|HEARTBEAT|PING|READY)$/i.test(cmd) || /^(?:INIT|READY)$/i.test(st);

    var sig = pktCmdId + "|" + cmd + "|" + st + "|" + msg + "|" + ts;
    if (sig === lastA11yPacketSig) return;

    // 1. Nhánh riêng cho kết quả kéo mảnh ghép (SLIDER_DRAG) hoặc gói INIT: tuyệt đối không tắt watchdog của lệnh chính đang chạy
    if (isSliderDragAck || isInitOrHeartbeat) {
        lastA11yPacketSig = sig;
        if (web && typeof web.Execute === "function") {
            try {
                var b64Drag = Base64Util.encode(JSON.stringify({
                    cmdId: pktCmdId,
                    cmd: cmd,
                    status: st,
                    message: msg,
                    ts: ts
                }));
                var dragDetailJson = JSON.stringify({
                    cmdId: pktCmdId,
                    ok: st === "SUCCESS" || st === "OK" || pkt.ok === true,
                    reason: msg || st,
                    cmd: cmd
                });
                var jsDragNotify = "if(window.__cholibiOnA11yStatus){window.__cholibiOnA11yStatus('" + b64Drag + "');}";
                if (isSliderDragAck && st !== "PENDING") {
                    jsDragNotify += "try{window.dispatchEvent(new CustomEvent('cholibi:native-drag-result',{detail:" + dragDetailJson + "}));}catch(eD){}";
                }
                web.Execute(jsDragNotify);
            } catch (eWebDrag) {}
        }
        return;
    }

    // 2. Xác định lệnh đích theo pktCmdId (yêu cầu khớp với lệnh đang chờ; nếu gói không mang cmdId thì chỉ nhận khi có lệnh đang chờ thực sự)
    if (pktCmdId && lastDispatchedCmdId && pktCmdId !== lastDispatchedCmdId && /^cmd_/.test(lastDispatchedCmdId)) {
        return;
    }
    var targetCmdId = pktCmdId || lastDispatchedCmdId || "";
    if (!pktCmdId) {
        if (!targetCmdId || !a11yCmdStateMap[targetCmdId]) return;
        if (ts && ts < lastA11yStatusTs) return;
    }

    var incomingRank = (st === "SUCCESS" || st === "OK" || st === "FAILED" || st === "ERROR") ? 2 : 1;
    var cmdState = targetCmdId ? a11yCmdStateMap[targetCmdId] : null;
    if (cmdState) {
        // Không cho phép trạng thái kết thúc (SUCCESS/FAILED) bị lùi về PENDING, hoặc gói cũ ghi đè gói mới của cùng cmdId
        if (cmdState.rank >= 2 && incomingRank < 2) return;
        if (cmdState.rank >= 2 && incomingRank >= 2 && ts <= cmdState.ts) return;
        if (pktCmdId && ts && cmdState.ts && ts < cmdState.ts && incomingRank <= cmdState.rank) return;
    }

    lastA11yPacketSig = sig;
    lastA11yStatusTs = Math.max(lastA11yStatusTs, ts);

    if (cmdState && cmdState.timer) {
        clearTimeout(cmdState.timer);
        cmdState.timer = null;
    }
    if ((!pktCmdId || pktCmdId === lastDispatchedCmdId) && a11yAckWatchdogTimer) {
        clearTimeout(a11yAckWatchdogTimer);
        a11yAckWatchdogTimer = null;
    }

    var nextTimer = null;
    if (incomingRank < 2 && (!pktCmdId || pktCmdId === lastDispatchedCmdId)) {
        nextTimer = setTimeout(function() {
            var curSt = targetCmdId ? a11yCmdStateMap[targetCmdId] : null;
            if ((!curSt || curSt.rank < 2) && (!targetCmdId || lastDispatchedCmdId === targetCmdId)) {
                UpdateOverlayStatusText("⚠️ Tác vụ A11y phản hồi quá thời gian (Hãy kiểm tra màn hình)");
            }
        }, 10000);
        a11yAckWatchdogTimer = nextTimer;
    }

    if (targetCmdId) {
        a11yCmdStateMap[targetCmdId] = {
            cmdId: targetCmdId,
            cmd: cmd,
            status: st,
            rank: incomingRank,
            ts: ts,
            timer: nextTimer
        };
    }

    HandleFloatingCommandResult({
        cmdId: targetCmdId,
        cmd: cmd,
        status: st,
        message: msg
    });

    if (web && typeof web.Execute === "function") {
        try {
            var b64 = Base64Util.encode(JSON.stringify({
                cmdId: targetCmdId,
                cmd: cmd,
                status: st,
                message: msg,
                ts: ts
            }));
            var jsNotify = "if(window.__cholibiOnA11yStatus){window.__cholibiOnA11yStatus('" + b64 + "');}";
            web.Execute(jsNotify);
        } catch (eWeb) {}
    }
}

// Hàm toàn cục để MainActivity.java hoặc BroadcastReceiver của DroidScript gọi trực tiếp khi nhận com.cholibi.app.A11Y_STATUS
function OnNativeA11yStatusBridge(rawJsonOrObj) {
    try {
        var pkt = (typeof rawJsonOrObj === "string") ? JSON.parse(rawJsonOrObj) : rawJsonOrObj;
        HandleA11yStatusPacket(pkt);
    } catch (e) {}
}
if (typeof window !== "undefined") {
    window.OnNativeA11yStatusBridge = OnNativeA11yStatusBridge;
}

function OnNativeBroadcastReceived(action, dataStr) {
    try {
        var act = String(action || "");
        if (act.indexOf("A11Y_STATUS") !== -1 || act.indexOf("AUTOX_RESULT") !== -1) {
            var parsed = (typeof dataStr === "string" && dataStr.charAt(0) === "{")
                ? JSON.parse(dataStr)
                : { status: "INFO", message: String(dataStr || "") };
            HandleA11yStatusPacket(parsed);
        }
    } catch (e) {}
}

function PollA11yStatusFileTick() {
    try {
        if (typeof app !== "undefined" && typeof app.LoadText === "function") {
            var savedStatus = app.LoadText("A11Y_LAST_STATUS_JSON", "", HISTORY_STORAGE_APP);
            if (savedStatus) {
                var parsed = JSON.parse(savedStatus);
                if (parsed && parsed.ts && Number(parsed.ts) > lastA11yStatusTs) {
                    HandleA11yStatusPacket(parsed);
                }
            }
        }
    } catch (e) {}
}

function RegisterNativeA11yStatusReceiver() {
    try {
        if (typeof app === "undefined" || !app) return;
        var primaryAction = (crossAppControlMode === "AUTOX_BRIDGE")
            ? "com.cholibi.autox.AUTOX_RESULT"
            : "com.cholibi.app.A11Y_STATUS";
        if (typeof app.RegisterBroadcast === "function") {
            app.RegisterBroadcast("com.cholibi.app.A11Y_STATUS", OnNativeBroadcastReceived);
            app.RegisterBroadcast("com.cholibi.autox.AUTOX_RESULT", OnNativeBroadcastReceived);
        }
        if (typeof app.SetOnBroadcast === "function") {
            // Đăng ký action đơn chuẩn cho APK01 (không bị lỗi gộp chuỗi có dấu phẩy thành 1 action)
            app.SetOnBroadcast(OnNativeBroadcastReceived, primaryAction);
        }
    } catch (e) {}
}

function HandleFloatingCommandResult(resObj) {
    if (!resObj || typeof resObj !== "object") return;
    var st = String(resObj.status || "PENDING").toUpperCase();
    var msg = String(resObj.message || "");
    var prefix = st === "SUCCESS" ? "✅ SUCCESS: " : (st === "FAILED" ? "🔴 FAILED: " : "⏳ PENDING: ");
    UpdateOverlayStatusText(prefix + msg);
    if (st === "SUCCESS" || st === "FAILED") {
        SafeShowPopup(prefix + msg);
    }
}

function DispatchOverlayActionSmart(cmdName, extraData) {
    if (isExternalBrowserActive) {
        TriggerCrossAppCommand(cmdName, extraData || {});
    } else {
        ExecuteFloatingWebViewCommand(cmdName, extraData || {});
    }
}

function OnOvBtnRunAuto() {
    if (!nativeMasterState.data || !nativeMasterState.data.username) {
        EnsureNativeProfileGenerated();
    }
    UpdateOverlayStatusText("⏳ PENDING: Đang gửi lệnh Chạy Auto (" + nativeMasterState.data.username + ")...");
    DispatchOverlayActionSmart("RUN_AUTO", {});
}

function OnOvBtnFillForm() {
    if (!nativeMasterState.data || !nativeMasterState.data.username) {
        EnsureNativeProfileGenerated();
    }
    UpdateOverlayStatusText("⏳ PENDING: Đang điền Form (" + nativeMasterState.data.username + ")...");
    DispatchOverlayActionSmart("FILL_CURRENT_FORM", {});
}

function OnOvBtnNewProfile() {
    var d = EnsureNativeProfileGenerated(true);
    UpdateOverlayStatusText("⏳ PENDING: Đổi TK mới " + d.username + "...");
    CopyWithAutoClear(d.username, 60000);
    DispatchOverlayActionSmart("NEW_USER_AND_FILL", { username: d.username });
    if (!isExternalBrowserActive) {
        TriggerCrossAppCommand("SYNC_PROFILE", { username: d.username });
    }
}

function OnOvBtnSubmitNow() {
    if (!nativeMasterState.data || !nativeMasterState.data.username) {
        EnsureNativeProfileGenerated();
    }
    UpdateOverlayStatusText("⏳ PENDING: Đang tìm & bấm nút Đăng Ký...");
    DispatchOverlayActionSmart("SUBMIT_NOW", {});
}

function OnOvBtnGoBank() {
    if (!nativeMasterState.data || !nativeMasterState.data.username) {
        EnsureNativeProfileGenerated();
    }
    UpdateOverlayStatusText("⏳ PENDING: Đang chuyển tới Ngân Hàng...");
    DispatchOverlayActionSmart("GO_BANK_PAGE", {});
}

function OnOvBtnCleanPopup() {
    UpdateOverlayStatusText("⏳ PENDING: Đang dọn Popup...");
    DispatchOverlayActionSmart("CLEAN_POPUPS", {});
}

function OnOvBtnRotateLink() {
    UpdateOverlayStatusText("🔄 Đang đổi tên miền dự phòng...");
    var rotated = TryNextSiteMirror(activeSiteKey, "Đổi link dự phòng từ Bảng Nổi", true);
    if (rotated && isExternalBrowserActive) {
        var newMirrorUrl = GetActiveSiteDefaultUrl(activeSiteKey);
        CopyWithAutoClear(newMirrorUrl, 60000);
        TriggerCrossAppCommand("ROTATE_MIRROR", { url: newMirrorUrl, site: activeSiteKey });
        UpdateOverlayStatusText("🔄 Đã copy & gửi link dự phòng sang trình duyệt ngoài: " + newMirrorUrl);
    }
}

function OnOvBtnOpenMainPanel() {
    if (isExternalBrowserActive) {
        UpdateOverlayStatusText("⏳ Đang gửi lệnh mở Bảng Chính trên trình duyệt ngoài...");
        TriggerCrossAppCommand("OPEN_MAIN_PANEL", {});
    } else {
        UpdateOverlayStatusText("📋 Đã gửi lệnh mở Bảng Chính CHOLIBI");
        ExecuteFloatingWebViewCommand("OPEN_MAIN_PANEL", {});
    }
}

function OnOvBtnOrbitaCode() {
    if (!nativeMasterState.data || !nativeMasterState.data.username) {
        EnsureNativeProfileGenerated();
    }
    PushMultiClipboardForExternal();
    TriggerCrossAppCommand("SYNC_PROFILE", { source: "ORBITA_BTN" });
    UpdateOverlayStatusText("📲 Đã nạp Phôi + Mã Orbita!");
    SafeShowPopup("📲 Đã copy Mã Nhúng Orbita vào Clipboard & đồng bộ Phôi sang Accessibility!");
}

function SafeShowPopup(msg) {
    try {
        if (typeof app !== "undefined" && typeof app.ShowPopup === "function") {
            app.ShowPopup(msg);
        }
    } catch (e) {}
}

function OnOvBtnCopyUser() {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    if (!d.username) d = EnsureNativeProfileGenerated(false);
    CopyWithAutoClear(d.username, 60000);
    UpdateOverlayStatusText("⏳ Đã copy TK (" + d.username + "), đang chờ điền...");
    DispatchOverlayActionSmart("FILL_SINGLE_FIELD", { field: "username", value: d.username });
    SafeShowPopup("👤 Đã copy TK: " + d.username + " (Đang gửi lệnh điền)");
}

function OnOvBtnCopyPw() {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    if (!d.pw) d = EnsureNativeProfileGenerated(false);
    CopyWithAutoClear(d.pw, 60000);
    UpdateOverlayStatusText("⏳ Đã copy Mật khẩu, đang chờ điền...");
    DispatchOverlayActionSmart("FILL_SINGLE_FIELD", { field: "pw", value: d.pw });
    SafeShowPopup("🔑 Đã copy Mật khẩu (Đang gửi lệnh điền)!");
}

function OnOvBtnCopyPin() {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    var pinVal = d.wd || "123123";
    CopyWithAutoClear(pinVal, 60000);
    UpdateOverlayStatusText("⏳ Đã copy PIN (" + pinVal + "), đang chờ điền...");
    DispatchOverlayActionSmart("FILL_SINGLE_FIELD", { field: "wd", value: pinVal });
    SafeShowPopup("🏧 Đã copy PIN rút tiền: " + pinVal + " (Đang gửi lệnh điền)");
}

function OnOvBtnCopyName() {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    if (!d.name) d = EnsureNativeProfileGenerated(false);
    var cleanName = NormalizeAsciiTextNative(d.name || "").toUpperCase().replace(/[^A-Z\s]/g, " ").replace(/\s+/g, " ").trim() || d.name;
    CopyWithAutoClear(cleanName, 60000);
    UpdateOverlayStatusText("⏳ Đã copy Tên (" + cleanName + "), đang chờ điền...");
    DispatchOverlayActionSmart("FILL_SINGLE_FIELD", { field: "name", value: cleanName });
    SafeShowPopup("🧑 Đã copy Họ Tên: " + cleanName + " (Đang gửi lệnh điền)");
}

function OnOvBtnCopyPhone() {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    if (!d.phone) d = EnsureNativeProfileGenerated(false);
    var formattedPhone = FormatPhoneForSiteNative(d.phone, activeSiteKey) || d.phone;
    CopyWithAutoClear(formattedPhone, 60000);
    UpdateOverlayStatusText("⏳ Đã copy SĐT (" + formattedPhone + "), đang chờ điền...");
    DispatchOverlayActionSmart("FILL_SINGLE_FIELD", { field: "phone", value: formattedPhone, rawPhone: d.phone });
    SafeShowPopup("📱 Đã copy SĐT: " + formattedPhone + " (Đang gửi lệnh điền)");
}

function OnOvBtnCopyStk() {
    ApplyLockedVaultToMasterData();
    var d = nativeMasterState.data || {};
    var cleanStk = String(d.stk || "").replace(/\D+/g, "");
    if (!cleanStk) {
        UpdateOverlayStatusText("⚠️ Chưa có STK ngân hàng trong bảng!");
        SafeShowPopup("⚠️ Bạn chưa nhập STK ngân hàng! Hãy nhập STK thật vào bảng trước.");
        return;
    }
    CopyWithAutoClear(cleanStk, 60000);
    UpdateOverlayStatusText("⏳ Đã copy STK (" + cleanStk + "), đang chờ điền...");
    DispatchOverlayActionSmart("FILL_SINGLE_FIELD", { field: "stk", value: cleanStk });
    SafeShowPopup("💳 Đã copy STK: " + cleanStk + " (Đang gửi lệnh điền)");
}

function OnOvBtnFoldToggle() {
    if (!layOvBody || !btnOvFold) return;
    isOverlayFolded = !isOverlayFolded;
    if (isOverlayFolded) {
        layOvBody.SetVisibility("Gone");
        btnOvFold.SetText("➕");
        UpdateOverlayStatusText("Đã thu gọn (Bấm ➕ để mở)");
    } else {
        layOvBody.SetVisibility("Show");
        btnOvFold.SetText("➖");
        UpdateOverlayStatusText();
    }
}

function OnOvBtnMovePos() {
    ovPosMode = (ovPosMode + 1) % 3;
    if (ovPosMode === 0) {
        ovPosY = 0.082;
        UpdateOverlayStatusText("Vị trí Bảng Nổi: Phía Trên");
    } else if (ovPosMode === 1) {
        ovPosY = 0.38;
        UpdateOverlayStatusText("Vị trí Bảng Nổi: Chính Giữa");
    } else {
        ovPosY = 0.64;
        UpdateOverlayStatusText("Vị trí Bảng Nổi: Phía Dưới");
    }
    if (sysOverlay && layExternalOverlay && isOverlayShown) {
        try {
            sysOverlay.RemoveLayout(layExternalOverlay);
            sysOverlay.AddLayout(layExternalOverlay, ovPosX, ovPosY);
        } catch (ePos) {}
    }
    ExecuteFloatingWebViewCommand("MOVE_FLOAT_DOCK", { mode: ovPosMode });
}

function OnOvBtnClose() {
    HideSystemFloatingOverlay();
}

function CreateNativeFloatingDock() {
    CleanupLegacySystemOverlay();
    laySysOverlay = app.CreateLayout("Linear", "Vertical,FillX");
    laySysOverlay.SetBackColor("#10181e");
    laySysOverlay.SetPadding(0.012, 0.004, 0.012, 0.006);
    laySysOverlay.SetVisibility("Gone");

    // Hàng tiêu đề + điều khiển cửa sổ (Thu gọn / Đổi vị trí / Đóng)
    var rowHead = app.CreateLayout("Linear", "Horizontal,VCenter");
    ovStatusTxt = app.CreateText("🟢 NỔI [" + activeSiteKey + "] TK: " + ((nativeMasterState.data && nativeMasterState.data.username) || "Chưa tạo"), 0.63, -1, "Left");
    ovStatusTxt.SetTextSize(9);
    ovStatusTxt.SetTextColor("#2ecc71");
    rowHead.AddChild(ovStatusTxt);

    btnOvFold = app.CreateButton("➖", 0.095, 0.042);
    btnOvFold.SetBackColor("#1c2b36");
    btnOvFold.SetTextColor("#f1c40f");
    btnOvFold.SetTextSize(8.5);
    btnOvFold.SetOnTouch(OnOvBtnFoldToggle);
    rowHead.AddChild(btnOvFold);

    var btnMove = app.CreateButton("⇅", 0.095, 0.042);
    btnMove.SetBackColor("#1f2c33");
    btnMove.SetTextColor("#ffffff");
    btnMove.SetTextSize(9);
    btnMove.SetOnTouch(OnOvBtnMovePos);
    rowHead.AddChild(btnMove);

    var btnClose = app.CreateButton("✕", 0.095, 0.042);
    btnClose.SetBackColor("#6e1e24");
    btnClose.SetTextColor("#ffaaaa");
    btnClose.SetTextSize(9);
    btnClose.SetOnTouch(OnOvBtnClose);
    rowHead.AddChild(btnClose);
    laySysOverlay.AddChild(rowHead);

    // Phần thân chứa 3 hàng nút chức năng thực thi trực tiếp
    layOvBody = app.CreateLayout("Linear", "Vertical,Left");

    // Hàng 1: Điều khiển Auto & Điền Form trực tiếp trên trang web
    var rowAuto = app.CreateLayout("Linear", "Horizontal,VCenter");
    var bAuto = app.CreateButton("⚡Chạy Auto", 0.24, 0.046);
    bAuto.SetBackColor("#0f8a5f");
    bAuto.SetTextColor("#ffffff");
    bAuto.SetTextSize(8.5);
    bAuto.SetOnTouch(OnOvBtnRunAuto);
    rowAuto.AddChild(bAuto);

    var bFill = app.CreateButton("✍️Điền Nhanh", 0.24, 0.046);
    bFill.SetBackColor("#1b6ca8");
    bFill.SetTextColor("#ffffff");
    bFill.SetTextSize(8.5);
    bFill.SetOnTouch(OnOvBtnFillForm);
    rowAuto.AddChild(bFill);

    var bNew = app.CreateButton("🎲Đổi TK", 0.22, 0.046);
    bNew.SetBackColor("#c07611");
    bNew.SetTextColor("#ffffff");
    bNew.SetTextSize(8.5);
    bNew.SetOnTouch(OnOvBtnNewProfile);
    rowAuto.AddChild(bNew);

    var bSub = app.CreateButton("🚀Bấm ĐK", 0.22, 0.046);
    bSub.SetBackColor("#c0392b");
    bSub.SetTextColor("#ffffff");
    bSub.SetTextSize(8.5);
    bSub.SetOnTouch(OnOvBtnSubmitNow);
    rowAuto.AddChild(bSub);
    layOvBody.AddChild(rowAuto);

    // Hàng 2: Vào Bank, Xóa Popup, Đổi Link Dự Phòng, Mở Bảng Chính, Nạp Orbita
    var rowTools = app.CreateLayout("Linear", "Horizontal,VCenter");
    var bBank = app.CreateButton("🏦Vào Bank", 0.20, 0.044);
    bBank.SetBackColor("#0e6251");
    bBank.SetTextColor("#a3e4d7");
    bBank.SetTextSize(8);
    bBank.SetOnTouch(OnOvBtnGoBank);
    rowTools.AddChild(bBank);

    var bClean = app.CreateButton("🧹Xóa Popup", 0.20, 0.044);
    bClean.SetBackColor("#4a235a");
    bClean.SetTextColor("#e8daef");
    bClean.SetTextSize(8);
    bClean.SetOnTouch(OnOvBtnCleanPopup);
    rowTools.AddChild(bClean);

    var bLink = app.CreateButton("🔄Đổi Link", 0.18, 0.044);
    bLink.SetBackColor("#7e5109");
    bLink.SetTextColor("#fdebd0");
    bLink.SetTextSize(8);
    bLink.SetOnTouch(OnOvBtnRotateLink);
    rowTools.AddChild(bLink);

    var bPanel = app.CreateButton("📋Mở Menu", 0.18, 0.044);
    bPanel.SetBackColor("#1b4f72");
    bPanel.SetTextColor("#d6eaf8");
    bPanel.SetTextSize(8);
    bPanel.SetOnTouch(OnOvBtnOpenMainPanel);
    rowTools.AddChild(bPanel);

    var bOrb = app.CreateButton("📲Orbita", 0.16, 0.044);
    bOrb.SetBackColor("#6c3483");
    bOrb.SetTextColor("#ffffff");
    bOrb.SetTextSize(8);
    bOrb.SetOnTouch(OnOvBtnOrbitaCode);
    rowTools.AddChild(bOrb);
    layOvBody.AddChild(rowTools);

    // Hàng 3: 1-Chạm Vừa Copy Vừa Tự Điền từng ô trực tiếp vào trang web
    var rowCopy = app.CreateLayout("Linear", "Horizontal,VCenter");
    var cUser = app.CreateButton("👤TK", 0.15, 0.042);
    cUser.SetBackColor("#182227");
    cUser.SetTextColor("#1abc9c");
    cUser.SetTextSize(8);
    cUser.SetOnTouch(OnOvBtnCopyUser);
    rowCopy.AddChild(cUser);

    var cPw = app.CreateButton("🔑MK", 0.15, 0.042);
    cPw.SetBackColor("#182227");
    cPw.SetTextColor("#1abc9c");
    cPw.SetTextSize(8);
    cPw.SetOnTouch(OnOvBtnCopyPw);
    rowCopy.AddChild(cPw);

    var cPin = app.CreateButton("🏧PIN", 0.15, 0.042);
    cPin.SetBackColor("#182227");
    cPin.SetTextColor("#f39c12");
    cPin.SetTextSize(8);
    cPin.SetOnTouch(OnOvBtnCopyPin);
    rowCopy.AddChild(cPin);

    var cName = app.CreateButton("🧑Tên", 0.16, 0.042);
    cName.SetBackColor("#182227");
    cName.SetTextColor("#1abc9c");
    cName.SetTextSize(8);
    cName.SetOnTouch(OnOvBtnCopyName);
    rowCopy.AddChild(cName);

    var cPhone = app.CreateButton("📱SĐT", 0.15, 0.042);
    cPhone.SetBackColor("#182227");
    cPhone.SetTextColor("#1abc9c");
    cPhone.SetTextSize(8);
    cPhone.SetOnTouch(OnOvBtnCopyPhone);
    rowCopy.AddChild(cPhone);

    var cStk = app.CreateButton("💳STK", 0.16, 0.042);
    cStk.SetBackColor("#182227");
    cStk.SetTextColor("#1abc9c");
    cStk.SetTextSize(8);
    cStk.SetOnTouch(OnOvBtnCopyStk);
    rowCopy.AddChild(cStk);
    layOvBody.AddChild(rowCopy);

    laySysOverlay.AddChild(layOvBody);
    return laySysOverlay;
}

function OnExtOvBtnFoldToggle() {
    if (!layExtBody || !btnExtFold) return;
    isExtOverlayFolded = !isExtOverlayFolded;
    if (isExtOverlayFolded) {
        layExtBody.SetVisibility("Gone");
        btnExtFold.SetText("➕");
        UpdateOverlayStatusText("Đã thu gọn (Bấm ➕ để mở)");
    } else {
        layExtBody.SetVisibility("Show");
        btnExtFold.SetText("➖");
        UpdateOverlayStatusText();
    }
}

function BuildExternalOverlayLayout() {
    var layExt = app.CreateLayout("Linear", "Vertical,Left");
    layExt.SetBackColor("#ee10181e");
    layExt.SetPadding(0.012, 0.005, 0.012, 0.006);

    var rHead = app.CreateLayout("Linear", "Horizontal,VCenter");
    ovExtStatusTxt = app.CreateText("🟢 NỔI [" + activeSiteKey + "] TK: " + ((nativeMasterState.data && nativeMasterState.data.username) || "Chưa tạo"), 0.52, -1, "Left");
    ovExtStatusTxt.SetTextSize(9);
    ovExtStatusTxt.SetTextColor("#2ecc71");
    rHead.AddChild(ovExtStatusTxt);

    btnExtFold = app.CreateButton("➖", 0.09, 0.042);
    btnExtFold.SetBackColor("#1c2b36");
    btnExtFold.SetTextColor("#f1c40f");
    btnExtFold.SetTextSize(8.5);
    btnExtFold.SetOnTouch(OnExtOvBtnFoldToggle);
    rHead.AddChild(btnExtFold);

    var bMv = app.CreateButton("⇅", 0.09, 0.042);
    bMv.SetBackColor("#1f2c33");
    bMv.SetTextColor("#ffffff");
    bMv.SetTextSize(9);
    bMv.SetOnTouch(OnOvBtnMovePos);
    rHead.AddChild(bMv);

    var bCl = app.CreateButton("✕", 0.09, 0.042);
    bCl.SetBackColor("#6e1e24");
    bCl.SetTextColor("#ffaaaa");
    bCl.SetTextSize(9);
    bCl.SetOnTouch(OnOvBtnClose);
    rHead.AddChild(bCl);
    layExt.AddChild(rHead);

    layExtBody = app.CreateLayout("Linear", "Vertical,Left");

    var rAct = app.CreateLayout("Linear", "Horizontal,VCenter");
    var bA11y = app.CreateButton("⚡Auto/A11y", 0.22, 0.044);
    bA11y.SetBackColor("#0f8a5f");
    bA11y.SetTextColor("#ffffff");
    bA11y.SetTextSize(8);
    bA11y.SetOnTouch(OnOvBtnRunAuto);
    rAct.AddChild(bA11y);

    var bSubExt = app.CreateButton("🚀Bấm ĐK", 0.20, 0.044);
    bSubExt.SetBackColor("#c0392b");
    bSubExt.SetTextColor("#ffffff");
    bSubExt.SetTextSize(8);
    bSubExt.SetOnTouch(OnOvBtnSubmitNow);
    rAct.AddChild(bSubExt);

    var bNew = app.CreateButton("🎲Đổi TK", 0.20, 0.044);
    bNew.SetBackColor("#c07611");
    bNew.SetTextColor("#ffffff");
    bNew.SetTextSize(8);
    bNew.SetOnTouch(OnOvBtnNewProfile);
    rAct.AddChild(bNew);

    var bOrb = app.CreateButton("📲Orbita", 0.20, 0.044);
    bOrb.SetBackColor("#6c3483");
    bOrb.SetTextColor("#ffffff");
    bOrb.SetTextSize(8);
    bOrb.SetOnTouch(OnOvBtnOrbitaCode);
    rAct.AddChild(bOrb);
    layExtBody.AddChild(rAct);

    var rCp = app.CreateLayout("Linear", "Horizontal,VCenter");
    var cU = app.CreateButton("👤TK", 0.14, 0.040);
    cU.SetBackColor("#182227"); cU.SetTextColor("#1abc9c"); cU.SetTextSize(8); cU.SetOnTouch(OnOvBtnCopyUser);
    rCp.AddChild(cU);
    var cP = app.CreateButton("🔑MK", 0.14, 0.040);
    cP.SetBackColor("#182227"); cP.SetTextColor("#1abc9c"); cP.SetTextSize(8); cP.SetOnTouch(OnOvBtnCopyPw);
    rCp.AddChild(cP);
    var cW = app.CreateButton("🏧PIN", 0.14, 0.040);
    cW.SetBackColor("#182227"); cW.SetTextColor("#f39c12"); cW.SetTextSize(8); cW.SetOnTouch(OnOvBtnCopyPin);
    rCp.AddChild(cW);
    var cN = app.CreateButton("🧑Tên", 0.14, 0.040);
    cN.SetBackColor("#182227"); cN.SetTextColor("#1abc9c"); cN.SetTextSize(8); cN.SetOnTouch(OnOvBtnCopyName);
    rCp.AddChild(cN);
    var cPh = app.CreateButton("📱SĐT", 0.14, 0.040);
    cPh.SetBackColor("#182227"); cPh.SetTextColor("#1abc9c"); cPh.SetTextSize(8); cPh.SetOnTouch(OnOvBtnCopyPhone);
    rCp.AddChild(cPh);
    var cS = app.CreateButton("💳STK", 0.14, 0.040);
    cS.SetBackColor("#182227"); cS.SetTextColor("#1abc9c"); cS.SetTextSize(8); cS.SetOnTouch(OnOvBtnCopyStk);
    rCp.AddChild(cS);
    layExtBody.AddChild(rCp);

    layExt.AddChild(layExtBody);
    return layExt;
}

function ShowSystemFloatingOverlay(enableExternalOverlay) {
    try {
        if (!nativeMasterState.data || !nativeMasterState.data.username) {
            EnsureNativeProfileGenerated();
        }
        var dockReady = false;
        if (laySysOverlay) {
            UpdateOverlayStatusText();
            laySysOverlay.SetVisibility("Show");
            dockReady = true;
        }
        var extReady = false;
        var useExtOverlay = (enableExternalOverlay !== false) && (typeof app.CreateOverlay === "function");
        if (useExtOverlay) {
            try {
                if (!sysOverlay) {
                    sysOverlay = app.CreateOverlay("TouchModal,NoFocus");
                }
                if (!layExternalOverlay) {
                    layExternalOverlay = BuildExternalOverlayLayout();
                } else {
                    try { sysOverlay.RemoveLayout(layExternalOverlay); } catch (eRm) {}
                }
                sysOverlay.AddLayout(layExternalOverlay, ovPosX, ovPosY);
                extReady = true;
            } catch (eOv) {
                extReady = false;
            }
        }
        if (!dockReady && !extReady) {
            SafeShowPopup("⚠️ Thiết bị chưa cấp quyền Hiển thị trên ứng dụng khác (Overlay)!");
            OpenOverlayPermissionSettings();
            return false;
        }
        isOverlayShown = true;
        if (btnOverlayTopRef) {
            try {
                btnOverlayTopRef.SetBackColor("#11996b");
                btnOverlayTopRef.SetText("🪟Đóng");
            } catch (eBtnShow) {}
        }
        ExecuteFloatingWebViewCommand("SHOW_FLOAT_DOCK", {});
        SafeShowPopup(extReady
            ? "🪟 Đã bật Bảng Nổi Hệ Thống (Giữ nổi xuyên ứng dụng sang Orbita/GoLogin)!"
            : "🪟 Đã bật Bảng Nổi Điều Khiển trong ứng dụng!");
        return true;
    } catch (err) {
        SafeShowPopup("⚠️ Không thể mở Bảng Nổi: " + err);
        return false;
    }
}

function HideSystemFloatingOverlay() {
    try {
        isOverlayShown = false;
        if (btnOverlayTopRef) {
            try {
                btnOverlayTopRef.SetBackColor("#d35400");
                btnOverlayTopRef.SetText("🪟Nổi");
            } catch (eBtn) {}
        }
        if (laySysOverlay && typeof laySysOverlay.SetVisibility === "function") {
            laySysOverlay.SetVisibility("Gone");
        }
        CleanupLegacySystemOverlay();
        ExecuteFloatingWebViewCommand("HIDE_FLOAT_DOCK", {});
        SafeShowPopup("Đã ẩn Bảng Nổi CHOLIBI.");
    } catch (e) {}
}

function ToggleSystemFloatingOverlay() {
    if (isOverlayShown) {
        HideSystemFloatingOverlay();
    } else {
        ShowSystemFloatingOverlay(true);
    }
}

function OpenAccessibilitySettingsNative() {
    try {
        if (typeof app !== "undefined" && typeof app.SendIntent === "function") {
            app.SendIntent(null, null, "android.settings.ACCESSIBILITY_SETTINGS", null, null, null, null, null);
            SafeShowPopup("⚙️ Đã mở Cài đặt Hỗ trợ tiếp cận (Accessibility) của Android!");
        }
    } catch (e) {
        SafeShowPopup("Hãy vào Cài đặt máy > Hỗ trợ tiếp cận (Accessibility) để bật dịch vụ.");
    }
}

function OpenOverlayPermissionSettings() {
    try {
        if (typeof app !== "undefined" && typeof app.SendIntent === "function") {
            app.SendIntent(null, null, "android.settings.action.MANAGE_OVERLAY_PERMISSION", null, null, null, null, null);
        }
    } catch (e) {}
}

// ============================================================================
// KIỂM TRA & BẢO VỆ ĐỊA CHỈ URL HỢP LỆ (HỖ TRỢ PUNYCODE XN--, QUERY TRỰC TIẾP & PORT 1-65535)
// ============================================================================
var lastMirrorRotateTsBySite = {};

function IsValidHttpUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== "string") return false;
    var trimmed = rawUrl.trim();
    if (!trimmed || /\s/.test(trimmed)) return false;
    if (/^(?:chrome-error|chromewebdata|about:|javascript:|data:|file:|blob:|cholibi-bridge)/i.test(trimmed)) {
        return false;
    }
    if (!/^https?:\/\//i.test(trimmed)) return false;

    var match = trimmed.match(/^https?:\/\/([^\/?#:]+)(?::([0-9]+))?(?:[\/?#].*)?$/i);
    if (!match) return false;
    var host = match[1] || "";
    var portStr = match[2] || "";

    if (portStr) {
        var portNum = parseInt(portStr, 10);
        if (!isFinite(portNum) || portNum < 1 || portNum > 65535) return false;
    }

    if (host.length < 4 || host.length > 253 || host.indexOf(".") === -1 || host.indexOf("..") !== -1) {
        return false;
    }
    var labels = host.split(".");
    if (labels.length < 2) return false;
    for (var i = 0; i < labels.length; i++) {
        var lbl = labels[i];
        if (!lbl || lbl.length > 63) return false;
        if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?$/.test(lbl)) {
            return false;
        }
    }
    var tld = labels[labels.length - 1];
    if (!/^(?:[a-zA-Z]{2,63}|xn--[a-zA-Z0-9]{2,59})$/i.test(tld)) {
        return false;
    }
    return true;
}

function GetNormalizedSiteMirrors(siteKey) {
    var fallbackKey = (typeof activeSiteKey === "string" && SITE_CONFIGS[activeSiteKey])
        ? activeSiteKey
        : (SITE_LIST && SITE_LIST[0] ? SITE_LIST[0] : "TT88");
    var key = (siteKey && SITE_CONFIGS[siteKey]) ? siteKey : fallbackKey;
    var cfg = SITE_CONFIGS[key] || SITE_CONFIGS["TT88"] || SITE_CONFIGS["NOHU88"];
    var validMirrors = [];
    if (cfg && Array.isArray(cfg.mirrors)) {
        for (var i = 0; i < cfg.mirrors.length; i++) {
            var mUrl = String(cfg.mirrors[i] || "").trim();
            if (IsValidHttpUrl(mUrl) && validMirrors.indexOf(mUrl) === -1) {
                validMirrors.push(mUrl);
            }
        }
    }
    if (cfg && cfg.url) {
        var primaryUrl = String(cfg.url || "").trim();
        if (IsValidHttpUrl(primaryUrl) && validMirrors.indexOf(primaryUrl) === -1) {
            validMirrors.unshift(primaryUrl);
        }
    }
    return validMirrors;
}

function GetActiveSiteDefaultUrl(siteKey) {
    var fallbackKey = (typeof activeSiteKey === "string" && SITE_CONFIGS[activeSiteKey])
        ? activeSiteKey
        : (SITE_LIST && SITE_LIST[0] ? SITE_LIST[0] : "TT88");
    var key = (siteKey && SITE_CONFIGS[siteKey]) ? siteKey : fallbackKey;
    var cfg = SITE_CONFIGS[key] || SITE_CONFIGS["TT88"] || SITE_CONFIGS["NOHU88"];
    if (!cfg) return "https://m.1tt88.vip/?f=3535864&app=1";

    var validMirrors = GetNormalizedSiteMirrors(key);
    var idx = Number(siteMirrorIndex[key] || 0);
    if (validMirrors.length > 0) {
        if (idx < 0 || idx >= validMirrors.length) {
            idx = 0;
            siteMirrorIndex[key] = 0;
        }
        return validMirrors[idx];
    }
    return IsValidHttpUrl(cfg.url) ? cfg.url.trim() : "https://m.1tt88.vip/?f=3535864&app=1";
}

function SanitizeUrlForNavigation(rawInput, fallbackSiteKey) {
    var s = String(rawInput || "").trim();
    if (!s || /chrome-error|chromewebdata|about:blank|cholibi-bridge/i.test(s)) {
        return GetActiveSiteDefaultUrl(fallbackSiteKey || activeSiteKey);
    }
    if (!/^https?:\/\//i.test(s)) {
        s = "https://" + s.replace(/^\/+/, "");
    }
    if (!IsValidHttpUrl(s)) {
        return GetActiveSiteDefaultUrl(fallbackSiteKey || activeSiteKey);
    }
    return s;
}

function TryNextSiteMirror(siteKey, errorReason, allowWrapAround) {
    var key = (siteKey && SITE_CONFIGS[siteKey]) ? siteKey : activeSiteKey;
    var validMirrors = GetNormalizedSiteMirrors(key);
    if (validMirrors.length <= 1) {
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText("⚠️ Mạng chặn tên miền " + key + ". Hãy bật 1.1.1.1 hoặc đổi sang 4G.");
            proxyStatusTxt.SetTextColor("#e74c3c");
        }
        return false;
    }

    var now = Date.now();
    var lastRotTs = Number(lastMirrorRotateTsBySite[key] || 0);
    if (!allowWrapAround && (now - lastRotTs < 2200)) {
        return false;
    }

    var curIdx = Number(siteMirrorIndex[key] || 0);
    if (curIdx < 0 || curIdx >= validMirrors.length) curIdx = 0;

    var nextIdx = -1;
    if (curIdx + 1 < validMirrors.length) {
        nextIdx = curIdx + 1;
    } else if (allowWrapAround) {
        nextIdx = 0;
    }

    if (nextIdx === -1) {
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText("⚠️ Đã thử hết " + validMirrors.length + " link của " + key + ". Hãy bật 1.1.1.1/4G hoặc bấm 🔄Đổi Link.");
            proxyStatusTxt.SetTextColor("#e74c3c");
        }
        return false;
    }

    lastMirrorRotateTsBySite[key] = now;
    siteMirrorIndex[key] = nextIdx;
    var nextUrl = validMirrors[nextIdx];
    if (urlInput && typeof urlInput.SetText === "function") {
        urlInput.SetText(nextUrl);
    }
    if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
        proxyStatusTxt.SetText("🔄 Đổi sang link dự phòng #" + (nextIdx + 1) + "/" + validMirrors.length + " cho " + key + "...");
        proxyStatusTxt.SetTextColor("#f39c12");
    }
    lastPageLoadStartTs = now;
    if (web && typeof web.LoadUrl === "function") {
        web.LoadUrl(nextUrl);
    }
    return true;
}

// ============================================================================
// QUẢN LÝ BỘ NHỚ LỊCH SỬ ĐĂNG KÝ THỰC TẾ (MÃ HÓA CBENC1 & CHỐNG GHI NHẬN GIẢ)
// ============================================================================
function IsValidHistoryRecordItem(item) {
    return Boolean(item && typeof item === "object" &&
        typeof item.site === "string" && item.site.trim() !== "" &&
        typeof item.username === "string" && item.username.trim() !== "");
}

function LoadHistoryRegistry() {
    try {
        if (typeof app === "undefined" || typeof app.LoadText !== "function") {
            if (!Array.isArray(nativeHistoryList)) nativeHistoryList = [];
            return;
        }
        var raw = app.LoadText(HISTORY_KEY_RECORDS, "", HISTORY_STORAGE_APP);
        var migratedLegacy = false;
        if (!raw) {
            raw = app.LoadText("REGISTERED_RECORDS_JSON_V5", "", "CHOLIBI_APP_STORAGE_V5") || "[]";
            if (raw && raw !== "[]") migratedLegacy = true;
        }
        var parsed = null;
        var isEncrypted = (typeof raw === "string" && raw.trim().indexOf("CBENC1:") === 0);
        if (typeof DecryptVaultPayload === "function" && isEncrypted) {
            parsed = DecryptVaultPayload(raw);
        } else {
            parsed = JSON.parse(raw || "[]");
        }
        if (Array.isArray(parsed)) {
            nativeHistoryList = parsed.filter(IsValidHistoryRecordItem);
            if ((migratedLegacy || !isEncrypted) && nativeHistoryList.length > 0) {
                SaveHistoryRegistry();
            }
        } else {
            nativeHistoryList = [];
        }
    } catch (e) {
        nativeHistoryList = [];
    }
}

function SaveHistoryRegistry() {
    try {
        if (!Array.isArray(nativeHistoryList)) {
            nativeHistoryList = [];
        } else {
            nativeHistoryList = nativeHistoryList.filter(IsValidHistoryRecordItem);
        }
        if (nativeHistoryList.length > 300) {
            nativeHistoryList = nativeHistoryList.slice(nativeHistoryList.length - 300);
        }
        if (typeof app !== "undefined" && typeof app.SaveText === "function") {
            var payloadToStore = (typeof EncryptVaultPayload === "function")
                ? EncryptVaultPayload(nativeHistoryList)
                : JSON.stringify(nativeHistoryList);
            app.SaveText(HISTORY_KEY_RECORDS, payloadToStore, HISTORY_STORAGE_APP);
        }
    } catch (e) {}
}

function RecordRealSuccessHistory(entry) {
    if (!entry || typeof entry !== "object") return false;
    var cleanUser = String(entry.username || "").trim();
    var cleanSite = String(entry.site || "").trim().toUpperCase();
    if (!cleanUser || !cleanSite) return false;
    // Bắt buộc serverVerified === true đối với lịch sử thành công tự động (chỉ ngoại lệ khi người dùng bấm Lưu thủ công)
    if (entry.serverVerified !== true && !entry.manualSave) return false;

    var rawStage = String(entry.stage || "REGISTERED").trim().toUpperCase();
    var stage = NATIVE_STAGE_RANK[rawStage] ? rawStage : "REGISTERED";
    var activeUser = String(nativeMasterState.submittedUsername || (nativeMasterState.data && nativeMasterState.data.username) || "").trim();

    if (!Array.isArray(nativeHistoryList)) nativeHistoryList = [];
    var existingRecordForUser = null;
    for (var ei = 0; ei < nativeHistoryList.length; ei++) {
        var cand = nativeHistoryList[ei];
        if (IsValidHistoryRecordItem(cand) && cand.site.toUpperCase() === cleanSite && cand.username.trim().toLowerCase() === cleanUser.toLowerCase()) {
            existingRecordForUser = cand;
            break;
        }
    }

    // Nếu không phải lưu thủ công và cũng chưa từng có bản ghi hợp lệ của tài khoản này trong lịch sử, bắt buộc phải khớp với tài khoản đang thực thi
    if (!entry.manualSave && activeUser && cleanUser.toLowerCase() !== activeUser.toLowerCase() && !existingRecordForUser) {
        return false;
    }

    var dMaster = (nativeMasterState && nativeMasterState.data) ? nativeMasterState.data : {};
    var clearedVaultMap = (nativeLockedVault && nativeLockedVault.clearedFields) ? nativeLockedVault.clearedFields : {};
    var getVaultSafe = function(k) {
        if (!nativeLockedVault || clearedVaultMap[k]) return "";
        return String(nativeLockedVault[k] || "").trim();
    };
    var isSameAsMasterUser = (!activeUser || cleanUser.toLowerCase() === activeUser.toLowerCase());
    // Tách bạch lưu thủ công khỏi trạng thái đã liên kết ngân hàng: chỉ gắn stk khi thực sự BANK_ADDED hoặc COMPLETED_ALL để không báo trùng STK giả
    var isBankBound = (stage === "BANK_ADDED" || stage === "COMPLETED_ALL");
    var fallbackStk = isSameAsMasterUser ? String(dMaster.stk || getVaultSafe("stk") || "").trim() : "";
    var stkToSave = isBankBound ? String(entry.stk || fallbackStk).trim() : "";
    var stkProfileRef = String(entry.stkProfile || entry.stk || fallbackStk).trim();

    // Chỉ lấy dữ liệu dự phòng từ Master/Vault khi xác nhận đúng là cùng tài khoản đang hoạt động (isSameAsMasterUser === true)
    var record = {
        id: String(entry.id || (cleanSite + "_" + cleanUser)).toUpperCase(),
        site: cleanSite,
        url: String(entry.url || GetActiveSiteDefaultUrl(cleanSite) || "").trim(),
        ip: String(entry.ip || (isSameAsMasterUser ? currentRealIp : "") || "").trim(),
        username: cleanUser,
        pw: String(entry.pw || (isSameAsMasterUser ? (dMaster.pw || getVaultSafe("pw")) : "") || "").trim(),
        wd: String(entry.wd || (isSameAsMasterUser ? (dMaster.wd || getVaultSafe("wd") || "123123") : "") || (existingRecordForUser ? existingRecordForUser.wd : "")).trim(),
        name: String(entry.name || (isSameAsMasterUser ? (dMaster.name || getVaultSafe("name")) : "") || "").trim(),
        phone: String(entry.phone || (isSameAsMasterUser ? (dMaster.phone || getVaultSafe("phone")) : "") || "").trim(),
        bank: String(entry.bank || (isSameAsMasterUser ? (dMaster.bank || getVaultSafe("bank") || "TECHCOMBANK") : "") || (existingRecordForUser ? existingRecordForUser.bank : "")).trim(),
        branch: String(entry.branch || (isSameAsMasterUser ? (dMaster.branch || getVaultSafe("branch") || "Ninh bình") : "") || (existingRecordForUser ? existingRecordForUser.branch : "")).trim(),
        stk: stkToSave,
        stkProfile: stkProfileRef,
        stkBackup: String(entry.stkBackup || (isSameAsMasterUser ? (dMaster.stkBackup || getVaultSafe("stkBackup")) : "") || "").trim(),
        stage: stage,
        serverVerified: Boolean(entry.serverVerified === true || (existingRecordForUser && existingRecordForUser.serverVerified === true)),
        manualSave: Boolean(entry.manualSave || (existingRecordForUser && existingRecordForUser.manualSave && entry.serverVerified !== true)),
        time: String(entry.time || new Date().toLocaleString("vi-VN"))
    };

    if (!Array.isArray(nativeHistoryList)) nativeHistoryList = [];
    var exists = false;
    for (var i = 0; i < nativeHistoryList.length; i++) {
        var item = nativeHistoryList[i];
        if (!IsValidHistoryRecordItem(item)) continue;
        if (item.site.toUpperCase() === record.site && item.username.trim().toLowerCase() === record.username.toLowerCase()) {
            // Bảo vệ thông tin gốc của bản ghi cũ nếu gói nâng cấp bước không truyền trường mới tường minh
            var preserveOldIfNotExplicit = ["pw", "wd", "name", "phone"];
            for (var pf = 0; pf < preserveOldIfNotExplicit.length; pf++) {
                var pKey = preserveOldIfNotExplicit[pf];
                if (!entry[pKey] && item[pKey]) {
                    record[pKey] = item[pKey];
                }
            }
            var keepFields = ["pw", "wd", "name", "phone", "bank", "branch", "stk", "stkProfile", "stkBackup", "ip", "url"];
            for (var kf = 0; kf < keepFields.length; kf++) {
                var keyF = keepFields[kf];
                if (!record[keyF] && item[keyF]) record[keyF] = item[keyF];
            }
            var oldRank = NATIVE_STAGE_RANK[item.stage] || 1;
            var newRank = NATIVE_STAGE_RANK[record.stage] || 1;
            if (oldRank > newRank) {
                record.stage = item.stage;
            }
            nativeHistoryList[i] = record;
            exists = true;
            break;
        }
    }
    if (!exists) {
        nativeHistoryList.push(record);
    }
    if (stage === "COMPLETED_ALL" || stage === "BANK_ADDED") {
        sessionCompletedNeedsWipeOnExit = true;
    }
    SaveHistoryRegistry();
    SyncRegistryToWebView();
    return true;
}

function DeleteSingleHistoryRecord(siteName, userName) {
    var s = String(siteName || "").trim().toUpperCase();
    var u = String(userName || "").trim().toLowerCase();
    if (!s || !u || !Array.isArray(nativeHistoryList)) return false;
    var beforeLen = nativeHistoryList.length;
    nativeHistoryList = nativeHistoryList.filter(function(item) {
        if (!IsValidHistoryRecordItem(item)) return false;
        return !(item.site.trim().toUpperCase() === s && item.username.trim().toLowerCase() === u);
    });
    SaveHistoryRegistry();
    SyncRegistryToWebView();
    return nativeHistoryList.length < beforeLen;
}

function ClearHistoryRegistry() {
    nativeHistoryList = [];
    SaveHistoryRegistry();
    SyncRegistryToWebView();
    if (typeof SafeShowPopup === "function") {
        SafeShowPopup("🗑️ Đã xóa sạch bộ nhớ lịch sử đăng ký.");
    } else if (typeof app !== "undefined" && typeof app.ShowPopup === "function") {
        app.ShowPopup("🗑️ Đã xóa sạch bộ nhớ lịch sử đăng ký.");
    }
}

function ExportHistoryToClipboard() {
    if (!Array.isArray(nativeHistoryList) || nativeHistoryList.length === 0) {
        if (typeof SafeShowPopup === "function") {
            SafeShowPopup("Kho lưu dữ liệu tài khoản hiện đang trống.");
        } else if (typeof app !== "undefined" && typeof app.ShowPopup === "function") {
            app.ShowPopup("Kho lưu dữ liệu tài khoản hiện đang trống.");
        }
        return false;
    }
    var lines = ["=== KHO LƯU DỮ LIỆU TÀI KHOẢN CHOLIBI ==="];
    var validCount = 0;
    for (var i = 0; i < nativeHistoryList.length; i++) {
        var r = nativeHistoryList[i];
        if (!IsValidHistoryRecordItem(r)) continue;
        validCount++;
        lines.push(
            validCount + ". [" + (r.site || "?") + "] " +
            "TK: " + (r.username || "?") +
            " | MK: " + (r.pw || "?") +
            " | PIN Rút: " + (r.wd || "123123") +
            " | Họ Tên: " + (r.name || "?") +
            " | SĐT: " + (r.phone || "?") +
            " | Bank: " + (r.bank || "?") + " (" + (r.branch || "Ninh bình") + ")" +
            " | STK: " + (r.stk || r.stkProfile || "Chưa gắn") +
            " | IP: " + (r.ip || "N/A") +
            " | Lúc: " + (r.time || "")
        );
    }
    if (validCount === 0) return false;
    var exportText = lines.join("\n");
    if (typeof CopyWithAutoClear === "function") {
        CopyWithAutoClear(exportText, 120000);
    } else if (typeof app !== "undefined" && typeof app.SetClipboardText === "function") {
        app.SetClipboardText(exportText);
    }
    if (typeof SafeShowPopup === "function") {
        SafeShowPopup("✅ Đã copy đầy đủ " + validCount + " hồ sơ tài khoản vào Clipboard (Tự xóa sau 2 phút)!");
    } else if (typeof app !== "undefined" && typeof app.ShowPopup === "function") {
        app.ShowPopup("✅ Đã copy đầy đủ " + validCount + " hồ sơ tài khoản vào Clipboard!");
    }
    return true;
}

function SyncRegistryToWebView() {
    if (!web || typeof web.Execute !== "function") return false;
    try {
        ApplyLockedVaultToMasterData();
        var payload = JSON.stringify({
            records: Array.isArray(nativeHistoryList) ? nativeHistoryList : [],
            currentIp: currentRealIp || "",
            masterState: nativeMasterState,
            lockedVault: nativeLockedVault,
            customSites: nativeCustomSites,
            deviceFp: activeDeviceFingerprint || LoadOrInitDeviceFingerprint()
        });
        var b64 = Base64Util.encode(payload);
        web.Execute("if(window.__cholibiOnHistorySync){window.__cholibiOnHistorySync('" + b64 + "');}");
        return true;
    } catch (e) {
        return false;
    }
}
// ============================================================================
// KHỞI TẠO GIAO DIỆN NATIVE DROIDSCRIPT PREMIUM+ (ĐÃ KHÓA CHẶT SỰ KIỆN & WATCHDOG)
// ============================================================================
var lastSiteSwitchTs = 0;
var lastAutoClipboardText = "";

function CancelPendingWebInjectTimers() {
    if (typeof injectDebounceTimer !== "undefined" && injectDebounceTimer) {
        clearTimeout(injectDebounceTimer);
        injectDebounceTimer = null;
    }
    if (typeof injectFollowupTimer !== "undefined" && injectFollowupTimer) {
        clearTimeout(injectFollowupTimer);
        injectFollowupTimer = null;
    }
}

function OnStart() {
    if (typeof app !== "undefined") {
        if (typeof app.SetOrientation === "function") app.SetOrientation("Portrait");
        if (typeof app.EnableBackKey === "function") app.EnableBackKey(false);
        if (typeof app.PreventScreenLock === "function") {
            try { app.PreventScreenLock(true); } catch (e) {}
        }
    }

    LoadCustomSitesNative();
    LoadOrInitDeviceFingerprint();
    LoadHistoryRegistry();
    LoadNativeMasterState();

    // Đảm bảo activeSiteKey luôn tồn tại trong SITE_CONFIGS sau khi khôi phục trạng thái
    if (!activeSiteKey || !SITE_CONFIGS[activeSiteKey]) {
        activeSiteKey = (SITE_LIST && SITE_LIST.length > 0) ? SITE_LIST[0] : "TT88";
        nativeMasterState.site = activeSiteKey;
    }

    var layMain = app.CreateLayout("Linear", "VCenter,FillXY");
    layMain.SetBackColor("#0d1113");

    var layTop = app.CreateLayout("Linear", "Horizontal,FillX,VCenter");
    layTop.SetBackColor("#141b1f");
    layTop.SetPadding(0.006, 0.004, 0.006, 0.004);

    siteSpin = app.CreateSpinner(SITE_LIST.join(","), 0.21, 0.048);
    siteSpin.SetBackColor("#182228");
    siteSpin.SetTextColor("#1abc9c");
    siteSpin.SetTextSize(9.5);
    ignoreSpinnerUntilTs = Date.now() + 2000;
    siteSpin.SelectItem(activeSiteKey);
    // Fix Lỗi #1: Chỉ gắn 1 sự kiện duy nhất (ưu tiên SetOnChange, fallback sang SetOnTouch) để không kích hoạt kép
    if (typeof siteSpin.SetOnChange === "function") {
        siteSpin.SetOnChange(OnSiteSpinnerChange);
    } else if (typeof siteSpin.SetOnTouch === "function") {
        siteSpin.SetOnTouch(OnSiteSpinnerChange);
    }
    layTop.AddChild(siteSpin);

    var initialUrl = GetActiveSiteDefaultUrl(activeSiteKey);
    urlInput = app.CreateTextEdit(initialUrl, 0.36, 0.048, "SingleLine");
    urlInput.SetBackColor("#0b0f12");
    urlInput.SetTextColor("#bdc3c7");
    urlInput.SetTextSize(8.5);
    urlInput.SetHint("https://...");
    layTop.AddChild(urlInput);

    var btnGo = app.CreateButton("Đi", 0.09, 0.048);
    btnGo.SetBackColor("#11996b");
    btnGo.SetTextColor("#ffffff");
    btnGo.SetTextSize(9);
    btnGo.SetOnTouch(OnBtnGoTouch);
    layTop.AddChild(btnGo);

    var btnOverlayTop = app.CreateButton("🪟Nổi", 0.11, 0.048);
    btnOverlayTop.SetBackColor("#d35400");
    btnOverlayTop.SetTextColor("#ffffff");
    btnOverlayTop.SetTextSize(8.2);
    btnOverlayTop.SetOnTouch(ToggleSystemFloatingOverlay);
    btnOverlayTopRef = btnOverlayTop;
    layTop.AddChild(btnOverlayTop);

    var btnGologin = app.CreateButton("GoLogin", 0.11, 0.048);
    btnGologin.SetBackColor("#2471a3");
    btnGologin.SetTextColor("#ffffff");
    btnGologin.SetTextSize(8);
    btnGologin.SetOnTouch(OnBtnGologinTouch);
    layTop.AddChild(btnGologin);

    var btnOrbita = app.CreateButton("Orbita", 0.10, 0.048);
    btnOrbita.SetBackColor("#6c3483");
    btnOrbita.SetTextColor("#ffffff");
    btnOrbita.SetTextSize(8);
    btnOrbita.SetOnTouch(OnBtnOrbitaTouch);
    layTop.AddChild(btnOrbita);

    layMain.AddChild(layTop);

    var layStatus = app.CreateLayout("Linear", "Horizontal,FillX,VCenter");
    layStatus.SetBackColor("#090c0e");
    layStatus.SetPadding(0.015, 0.001, 0.015, 0.001);

    proxyStatusTxt = app.CreateText("🌐 Đang kiểm tra IP mạng hiện tại...", 0.97, -1, "Left");
    proxyStatusTxt.SetTextSize(8.5);
    proxyStatusTxt.SetTextColor("#7f8c8d");
    layStatus.AddChild(proxyStatusTxt);
    layMain.AddChild(layStatus);

    CreateNativeFloatingDock();
    layMain.AddChild(laySysOverlay);

    web = app.CreateWebView(1.0, -1, "FillXY,IgnoreErrors,AllowZoom,AutoZoom,Wide,DomStorage");
    var initFp = activeDeviceFingerprint || LoadOrInitDeviceFingerprint();
    web.SetUserAgent(initFp.ua);
    web.SetOnProgress(OnWebProgress);
    if (typeof web.SetOnConsole === "function") {
        web.SetOnConsole(OnWebConsole);
    }
    if (typeof web.SetOnUrl === "function") {
        web.SetOnUrl(OnWebUrlNavigate);
    }
    layMain.AddChild(web);

    app.AddLayout(layMain);
    lastPageLoadStartTs = Date.now();
    web.LoadUrl(initialUrl);

    RegisterNativeA11yStatusReceiver();
    CheckRealIpNative(null);
    StartInjectWatchdog();
    StartBridgeMemoryCleanup();
}

function OnBack() {
    if (web && typeof web.CanGoBack === "function" && web.CanGoBack()) {
        web.Back();
    } else if (typeof SafeShowPopup === "function") {
        SafeShowPopup("Đang ở trang đầu. Bấm nút Home để ẩn ứng dụng.");
    } else if (typeof app !== "undefined" && typeof app.ShowPopup === "function") {
        app.ShowPopup("Đang ở trang đầu. Bấm nút Home để ẩn ứng dụng.");
    }
}

function OnSiteSpinnerChange(item) {
    var now = Date.now();
    if (now < ignoreSpinnerUntilTs) return;
    if (now - lastSiteSwitchTs < 600) return;
    var key = String(item || "").trim();
    if (!SITE_CONFIGS[key] || key === activeSiteKey) return;
    SwitchToSiteNative(key);
}

function SwitchToSiteNative(siteKey) {
    var cfg = SITE_CONFIGS[siteKey];
    if (!cfg) return false;
    lastSiteSwitchTs = Date.now();
    CancelPendingWebInjectTimers();

    activeSiteKey = siteKey;
    siteMirrorIndex[siteKey] = 0;

    ApplyLockedVaultToMasterData();
    SaveNativeMasterState({
        site: siteKey,
        autoMode: false,
        currentStep: 0,
        registrationSubmitted: false,
        submittedUsername: "",
        withdrawPinSetInStep1: false,
        waitingOtp: false,
        usedBackupStk: false,
        retryUserCount: 0,
        groupDPinSet: false,
        step4OtpStartUrl: "",
        otpConfirmClickedOnce: false
    });

    if (siteSpin && typeof siteSpin.SelectItem === "function") {
        ignoreSpinnerUntilTs = Date.now() + 2000;
        siteSpin.SelectItem(siteKey);
    }

    var targetUrl = GetActiveSiteDefaultUrl(siteKey);
    if (urlInput && typeof urlInput.SetText === "function") {
        urlInput.SetText(targetUrl);
    }
    if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
        var lockedName = (nativeMasterState.data && nativeMasterState.data.name) ? (" [" + nativeMasterState.data.name + "]") : "";
        proxyStatusTxt.SetText("🌐 Chuyển sang " + siteKey + lockedName + " | IP: " + (currentRealIp || "đang kiểm tra..."));
        proxyStatusTxt.SetTextColor("#1abc9c");
    }

    if (web && typeof web.LoadUrl === "function") {
        lastPageLoadStartTs = Date.now();
        web.LoadUrl(targetUrl);
    }
    return true;
}

function OnBtnGoTouch() {
    CancelPendingWebInjectTimers();
    var rawText = (urlInput && typeof urlInput.GetText === "function") ? urlInput.GetText() : "";
    var cleanLink = SanitizeUrlForNavigation(rawText, activeSiteKey);
    if (urlInput && typeof urlInput.SetText === "function") {
        urlInput.SetText(cleanLink);
    }
    lastPageLoadStartTs = Date.now();
    if (web && typeof web.LoadUrl === "function") {
        web.LoadUrl(cleanLink);
    }
}

function OnBtnGologinTouch() {
    OpenExternalWithTool("com.gologin.gologin_mobile", "GoLogin");
}

function OnBtnOrbitaTouch() {
    OpenExternalWithTool("org.gologin.orbita", "Orbita");
}

// Watchdog thông minh: Chỉ kiểm tra khi trang HTTP/HTTPS hợp lệ đã tải xong & có khóa chống bắn lặp
var injectDebounceTimer = null;
function OnWatchdogTick() {
    PollA11yStatusFileTick();
    if (!web || typeof web.Execute !== "function") return;
    if (Date.now() - lastPageLoadStartTs < 3400) return;
    var curUrl = (urlInput && typeof urlInput.GetText === "function") ? urlInput.GetText() : "";
    if (curUrl && typeof IsAllowedCholibiTargetUrl === "function" && !IsAllowedCholibiTargetUrl(curUrl)) {
        return;
    }
    web.Execute(
        "(function(){" +
        "try{" +
        "if(window.top!==window.self||(document.readyState!=='complete'&&document.readyState!=='interactive')||!document.body)return;" +
        "if(!/^https?:$/i.test(location.protocol)||/chrome-error|chromewebdata|about:blank/i.test(location.href))return;" +
        "if(document.getElementById('cb-panel'))return;" +
        "var now=Date.now();" +
        "if(window.__cbInjectReqTs&&(now-window.__cbInjectReqTs<2500))return;" +
        "window.__cbInjectReqTs=now;" +
        "console.log('CHOLIBI_NEED_INJECT');" +
        "}catch(e){}" +
        "})();"
    );
}

function CleanProcessedBridgeIdsTick() {
    var now = Date.now();
    var keys = Object.keys(processedBridgeIds);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (now - processedBridgeIds[k] > 30000) {
            delete processedBridgeIds[k];
        }
    }
    var remaining = Object.keys(processedBridgeIds);
    if (remaining.length > 100) {
        remaining.sort(function(a, b) { return processedBridgeIds[a] - processedBridgeIds[b]; });
        for (var j = 0; j < remaining.length - 100; j++) {
            delete processedBridgeIds[remaining[j]];
        }
    }
}

function StartBridgeMemoryCleanup() {
    if (bridgeCleanupTimer) clearInterval(bridgeCleanupTimer);
    bridgeCleanupTimer = setInterval(CleanProcessedBridgeIdsTick, 15000);
}

function ClearClipboardNow() {
    try {
        if (typeof app === "undefined" || typeof app.SetClipboardText !== "function") return;
        if (typeof app.GetClipboardText === "function" && lastAutoClipboardText) {
            var curClip = String(app.GetClipboardText() || "");
            if (curClip && curClip !== lastAutoClipboardText) {
                return;
            }
        }
        app.SetClipboardText("");
        lastAutoClipboardText = "";
    } catch (e) {}
}

function StartInjectWatchdog() {
    if (injectWatchdogTimer) clearInterval(injectWatchdogTimer);
    injectWatchdogTimer = setInterval(OnWatchdogTick, 3000);
}

function StopInjectWatchdog() {
    if (injectWatchdogTimer) {
        clearInterval(injectWatchdogTimer);
        injectWatchdogTimer = null;
    }
}

function CopyWithAutoClear(text, clearAfterMs) {
    if (!text) return false;
    try {
        var strVal = String(text);
        lastAutoClipboardText = strVal;
        if (typeof app !== "undefined" && typeof app.SetClipboardText === "function") {
            app.SetClipboardText(strVal);
        }
        if (clipboardClearTimer) clearTimeout(clipboardClearTimer);
        clipboardClearTimer = setTimeout(ClearClipboardNow, clearAfterMs || 45000);
        return true;
    } catch (e) {
        return false;
    }
}

function BuildBookmarkletForOrbita() {
    ApplyLockedVaultToMasterData();
    var fp = activeDeviceFingerprint || LoadOrInitDeviceFingerprint();
    var rawCode = "(" + CholibiInjectedPayload.toString() + ")(" +
        JSON.stringify(SITE_CONFIGS) + "," +
        JSON.stringify(nativeMasterState) + "," +
        JSON.stringify(nativeLockedVault) + ",false," +
        JSON.stringify(BRIDGE_AUTH_TOKEN) + "," +
        JSON.stringify(fp) + ");";
    var b64 = Base64Util.encode(rawCode);
    return "javascript:(function(){try{var bin=atob('" + b64 + "');var s='';if(typeof TextDecoder!=='undefined'){var u8=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)u8[i]=bin.charCodeAt(i);s=new TextDecoder('utf-8').decode(u8);}else{s=decodeURIComponent(escape(bin));}var el=document.createElement('script');el.textContent=s;(document.head||document.documentElement||document.body).appendChild(el);}catch(e){}})();";
}

function OpenExternalWithTool(packageName, displayName) {
    try {
        if (!nativeMasterState.data || !nativeMasterState.data.username) {
            EnsureNativeProfileGenerated();
        }
        if (!isOverlayShown || !sysOverlay || !layExternalOverlay) {
            ShowSystemFloatingOverlay(true);
        } else {
            UpdateOverlayStatusText("📲 Đang điều khiển " + displayName + " (" + nativeMasterState.data.username + ")");
        }
        TriggerCrossAppCommand("SYNC_PROFILE", { targetApp: displayName });

        if (displayName === "GoLogin" && currentProxyCfg && currentProxyCfg.fullFormatted) {
            CopyWithAutoClear(currentProxyCfg.fullFormatted, 60000);
        } else {
            PushMultiClipboardForExternal();
        }
    } catch (prepErr) {}

    try {
        isExternalBrowserActive = true;
        if (typeof app !== "undefined" && typeof app.LaunchApp === "function") {
            app.LaunchApp(packageName);
        }
        return true;
    } catch (launchErr) {
        if (typeof SafeShowPopup === "function") {
            SafeShowPopup("Không mở được " + displayName + ": " + launchErr);
        } else if (typeof app !== "undefined" && typeof app.ShowPopup === "function") {
            app.ShowPopup("Không mở được " + displayName + ": " + launchErr);
        }
        try {
            if (typeof app !== "undefined" && typeof app.OpenUrl === "function") {
                app.OpenUrl("https://play.google.com/store/apps/details?id=" + packageName);
            }
        } catch (eUrl) {}
        return false;
    }
}
// ============================================================================
// KIỂM TRA IP THỰC TẾ Ở TẦNG NATIVE DROIDSCRIPT
// ============================================================================
var ipCheckSeq = 0;

function IsValidIpLiteral(ipStr) {
    if (!ipStr || typeof ipStr !== "string") return false;
    var s = ipStr.trim();
    if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(s)) {
        var parts = s.split(".");
        for (var i = 0; i < 4; i++) {
            var n = parseInt(parts[i], 10);
            if (isNaN(n) || n < 0 || n > 255) return false;
        }
        return true;
    }
    return /^[a-fA-F0-9:]+$/.test(s) && s.indexOf(":") !== -1;
}

function CheckRealIpNative(expectedProxy) {
    ipCheckSeq++;
    var mySeq = ipCheckSeq;
    var endpoints = [
        "https://api.ipify.org?format=json",
        "https://ipinfo.io/json",
        "https://httpbin.org/ip"
    ];
    var tried = 0;

    function tryNext() {
        if (mySeq !== ipCheckSeq) return;
        if (tried >= endpoints.length) {
            if (expectedProxy) {
                if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
                    proxyStatusTxt.SetText("🟡 Đã lưu & copy Proxy " + expectedProxy.masked + " cho GoLogin");
                    proxyStatusTxt.SetTextColor("#f39c12");
                }
                NotifyWebViewProxyState(expectedProxy.masked, false, "Đã copy Proxy cho GoLogin. Không đọc được IP hiện tại.");
            } else if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
                proxyStatusTxt.SetText("🌐 Mạng: 4G / Mặc định thiết bị");
            }
            return;
        }
        var url = endpoints[tried++];
        try {
            var xhr = new XMLHttpRequest();
            xhr.timeout = 5000;
            var movedNext = false;
            var safeNext = function() {
                if (movedNext || mySeq !== ipCheckSeq) return;
                movedNext = true;
                tryNext();
            };
            xhr.onreadystatechange = function() {
                if (mySeq !== ipCheckSeq) return;
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 && xhr.responseText) {
                        try {
                            var data = JSON.parse(xhr.responseText);
                            var detectedIp = String(data.ip || data.origin || "").split(",")[0].trim();
                            if (IsValidIpLiteral(detectedIp)) {
                                movedNext = true;
                                currentRealIp = detectedIp;
                                HandleDetectedIpResult(currentRealIp, expectedProxy);
                                SyncRegistryToWebView();
                                return;
                            }
                        } catch (e) {}
                    }
                    safeNext();
                }
            };
            xhr.onerror = safeNext;
            xhr.ontimeout = safeNext;
            xhr.open("GET", url, true);
            xhr.send();
        } catch (err) {
            tryNext();
        }
    }

    tryNext();
}

function HandleDetectedIpResult(realIp, expectedProxy) {
    if (!expectedProxy) {
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText("🌐 IP thực tế đang dùng: " + realIp + " (4G/WiFi)");
            proxyStatusTxt.SetTextColor("#2ecc71");
        }
        NotifyWebViewProxyState("DIRECT_4G", true, "IP thực tế hiện tại: " + realIp);
        return;
    }

    if (realIp === expectedProxy.host) {
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText("🟢 Proxy ĐÃ HOẠT ĐỘNG! IP khớp: " + realIp);
            proxyStatusTxt.SetTextColor("#2ecc71");
        }
        NotifyWebViewProxyState(expectedProxy.masked, true, "Đã xác nhận IP trùng khớp Proxy: " + realIp);
    } else {
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText(
                "🟡 IP máy: " + realIp + " (Đã copy Proxy " + expectedProxy.masked + " để dán vào GoLogin/Orbita)"
            );
            proxyStatusTxt.SetTextColor("#f39c12");
        }
        NotifyWebViewProxyState(
            expectedProxy.masked,
            false,
            "IP máy: " + realIp + ". Đã copy Proxy vào Clipboard để bạn dán vào GoLogin!"
        );
    }
}

function ParseProxyString(raw) {
    if (!raw || !String(raw).trim()) return null;
    var clean = String(raw).trim()
        .replace(/^https?:\/\//i, "")
        .replace(/^socks5?:\/\//i, "");

    var host = "", portStr = "", user = "", pass = "";

    if (clean.indexOf("@") !== -1) {
        var atParts = clean.split("@");
        var authPart = atParts[0];
        var hostPart = atParts.slice(1).join("@");
        var authSplit = authPart.split(":");
        user = authSplit[0] || "";
        pass = authSplit.slice(1).join(":") || "";
        var lastColon = hostPart.lastIndexOf(":");
        if (lastColon === -1) {
            return { valid: false, error: "Thiếu cổng (port) trong chuỗi Proxy!" };
        }
        host = hostPart.substring(0, lastColon).trim();
        portStr = hostPart.substring(lastColon + 1).trim();
    } else if (clean.charAt(0) === "[") {
        var closeBracket = clean.indexOf("]");
        if (closeBracket === -1 || clean.charAt(closeBracket + 1) !== ":") {
            return { valid: false, error: "Định dạng IPv6 Proxy không hợp lệ!" };
        }
        host = clean.substring(0, closeBracket + 1);
        var rest = clean.substring(closeBracket + 2).split(":");
        if (rest.length !== 1 && rest.length !== 3) {
            return { valid: false, error: "Sai định dạng! Hãy nhập [ipv6]:port:user:pass" };
        }
        portStr = rest[0];
        user = rest.length === 3 ? rest[1] : "";
        pass = rest.length === 3 ? rest[2] : "";
    } else {
        var parts = clean.split(":");
        if (parts.length !== 2 && parts.length < 4) {
            return {
                valid: false,
                error: "Sai định dạng! Hãy nhập host:port:user:pass (VD: 171.236.166.116:32472:MriUCM:TYnqcU)"
            };
        }
        host = parts[0].trim();
        portStr = parts[1].trim();
        user = parts.length >= 4 ? parts[2].trim() : "";
        pass = parts.length >= 4 ? parts.slice(3).join(":").trim() : "";
    }

    var port = parseInt(portStr, 10);
    var isIpv4Candidate = /^\d+\.\d+\.\d+\.\d+$/.test(host);
    var validHost = isIpv4Candidate
        ? IsValidIpLiteral(host)
        : (/^[a-zA-Z0-9.\-\[\]:]+$/.test(host) && host.length >= 3 && host.indexOf("..") === -1);
    if (!validHost || !/^[0-9]+$/.test(portStr) || isNaN(port) || port < 1 || port > 65535) {
        return { valid: false, error: "Host/IP hoặc Port (1-65535) không hợp lệ!" };
    }

    return {
        valid: true,
        host: host,
        port: port,
        user: user,
        pass: pass,
        hostPortOnly: host + ":" + port,
        fullFormatted: host + ":" + port + (user ? (":" + user + ":" + pass) : ""),
        masked: host + ":" + port + (user ? ":[" + user.slice(0, 2) + "***]" : "")
    };
}

function SaveAndVerifyProxy(rawProxy) {
    if (!rawProxy || !String(rawProxy).trim()) {
        currentProxyCfg = null;
        SendSafeBroadcast("com.cholibi.action.CLEAR_PROXY", {});
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText("🟡 Đang kiểm tra lại IP mạng 4G/WiFi...");
        }
        CheckRealIpNative(null);
        return;
    }

    var parsed = ParseProxyString(rawProxy);
    if (!parsed || !parsed.valid) {
        var errMsg = (parsed && parsed.error) ? parsed.error : "Định dạng Proxy không hợp lệ!";
        currentProxyCfg = null;
        if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
            proxyStatusTxt.SetText("🔴 Lỗi Proxy: " + errMsg);
            if (typeof proxyStatusTxt.SetTextColor === "function") proxyStatusTxt.SetTextColor("#e74c3c");
        }
        SafeShowPopup(errMsg);
        NotifyWebViewProxyState("INVALID", false, errMsg);
        return;
    }

    currentProxyCfg = parsed;
    if (proxyStatusTxt && typeof proxyStatusTxt.SetText === "function") {
        proxyStatusTxt.SetText("🟡 Đang kiểm tra IP đối chiếu với " + parsed.masked + "...");
        if (typeof proxyStatusTxt.SetTextColor === "function") proxyStatusTxt.SetTextColor("#f39c12");
    }

    CopyWithAutoClear(parsed.fullFormatted, 25000);

    SendSafeBroadcast("com.cholibi.action.SET_PROXY", {
        host: parsed.host,
        port: parsed.port,
        user: parsed.user || "",
        pass: parsed.pass || "",
        hasAuth: Boolean(parsed.user)
    });

    CheckRealIpNative(parsed);
}

// Fix Kết Nối JS <-> Java #1: Giữ đầy đủ pw và wd khi gửi nội bộ tới package com.cholibi.app
// để CholibiAccessibilityService.java có mật khẩu & PIN rút tiền điền vào biểu mẫu!
function SendSafeBroadcast(actionName, payloadObj) {
    try {
        var safeClone = {};
        if (payloadObj && typeof payloadObj === "object") {
            for (var k in payloadObj) {
                safeClone[k] = payloadObj[k];
            }
        }
        var jsonPayloadStr = JSON.stringify(safeClone);
        var extrasJson = JSON.stringify([
            { name: "payload_json", type: "string", value: jsonPayloadStr }
        ]);
        if (typeof window !== "undefined" && window.CholibiNativeBridge && typeof window.CholibiNativeBridge.sendAction === "function") {
            window.CholibiNativeBridge.sendAction(String(actionName || ""), jsonPayloadStr);
            return;
        }
        // Gửi explicit broadcast tới A11y service của app CHOLIBI Helper (com.cholibi.app)
        if (typeof app.SendIntent === "function") {
            app.SendIntent("com.cholibi.app", "com.cholibi.app.CholibiAccessibilityService",
                actionName, null, null, null, extrasJson, null);
            app.SendIntent("com.cholibi.app", null,
                actionName, null, null, null, extrasJson, null);
            return;
        }
        if (typeof app.BroadcastIntent === "function") {
            app.BroadcastIntent(actionName, "", "", "text/plain", extrasJson);
        }
    } catch (e) {}
}

function NotifyWebViewProxyState(mode, verified, message) {
    if (!web || typeof web.Execute !== "function") return;
    try {
        var payload = JSON.stringify({
            mode: mode,
            verified: verified,
            message: message,
            realIp: currentRealIp || ""
        });
        var b64 = Base64Util.encode(payload);
        web.Execute("if(window.__cholibiOnProxyResult){window.__cholibiOnProxyResult('" + b64 + "');}");
    } catch (e) {}
}

function ProcessBridgeEnvelope(rawEnvelope) {
    if (!rawEnvelope) return;
    try {
        var env = JSON.parse(rawEnvelope);
        if (!env || env.token !== BRIDGE_AUTH_TOKEN) return;
        var msgId = String(env.id || "").replace(/[^a-zA-Z0-9_\-]/g, "");
        if (msgId && processedBridgeIds[msgId]) {
            if (web) {
                web.Execute("if(window.__cholibiBridgeAck){window.__cholibiBridgeAck('" + msgId + "');}");
            }
            return;
        }
        var type = String(env.type || "");
        var data = env.data || {};
        var ALLOWED_BRIDGE_COMMANDS = {
            "SAVE_MASTER_STATE": 1, "SAVE_USER_FIELD_EDIT": 1, "FLOATING_CMD_RESULT": 1,
            "NAVIGATE_SITE": 1, "SYNC_URL": 1, "WEB_LOAD_ERROR": 1, "ROTATE_MIRROR": 1,
            "SET_PROXY": 1, "RECORD_HISTORY": 1, "DELETE_HISTORY_ITEM": 1, "CLEAR_HISTORY": 1,
            "EXPORT_HISTORY": 1, "COPY_TEXT_CLIPBOARD": 1, "OPEN_APP": 1,
            "COPY_ORBITA_SCRIPT": 1, "TOGGLE_SYS_OVERLAY": 1, "HIDE_SYS_OVERLAY_SYNC": 1,
            "OPEN_A11Y_SETTINGS": 1, "TRIGGER_A11Y_STEP": 1, "A11Y_SYNC": 1,
            "FETCH_IMAGE_B64": 1, "SAVE_CUSTOM_SITE": 1, "WIPE_FINGERPRINTS_NOW": 1,
            "MARK_SESSION_COMPLETED_WIPE": 1
        };
        if (!ALLOWED_BRIDGE_COMMANDS[type]) return;

        var handledOk = true;
        if (type === "SAVE_USER_FIELD_EDIT") {
            handledOk = SaveSingleUserFieldEditNative(data) !== false;
        } else if (type === "FLOATING_CMD_RESULT") {
            HandleFloatingCommandResult(data);
        } else if (type === "SAVE_MASTER_STATE") {
            handledOk = SaveNativeMasterState(data) !== false;
        } else if (type === "NAVIGATE_SITE") {
            var chosen = String(data.site || "");
            if (chosen && SITE_CONFIGS[chosen]) {
                SwitchToSiteNative(chosen);
            }
        } else if (type === "SYNC_URL") {
            var incomingUrl = String(data.url || "").trim();
            if (IsValidHttpUrl(incomingUrl)) {
                if (urlInput) urlInput.SetText(incomingUrl);
            }
            SyncRegistryToWebView();
        } else if (type === "WEB_LOAD_ERROR") {
            var failedSite = String(data.site || activeSiteKey);
            var errDetail = String(data.reason || "ERR_NAME_NOT_RESOLVED");
            TryNextSiteMirror(failedSite, errDetail);
        } else if (type === "ROTATE_MIRROR") {
            var targetSite = String(data.site || activeSiteKey);
            TryNextSiteMirror(targetSite, "ROTATE_MIRROR_BRIDGE", true);
        } else if (type === "SET_PROXY") {
            SaveAndVerifyProxy(String(data.raw || ""));
        } else if (type === "RECORD_HISTORY") {
            RecordRealSuccessHistory(data);
        } else if (type === "DELETE_HISTORY_ITEM") {
            DeleteSingleHistoryRecord(data.site, data.username);
        } else if (type === "CLEAR_HISTORY") {
            ClearHistoryRegistry();
        } else if (type === "EXPORT_HISTORY") {
            ExportHistoryToClipboard();
        } else if (type === "COPY_TEXT_CLIPBOARD") {
            if (data.text) {
                CopyWithAutoClear(String(data.text), 60000);
                var lbl = String(data.label || "");
                var isSecretField = (lbl === "f-pw" || lbl === "f-wd");
                SafeShowPopup("📋 Đã copy: " + (isSecretField ? "******" : data.text));
            }

        } else if (type === "OPEN_APP") {
            if (data.target === "GOLOGIN") OnBtnGologinTouch();
            else if (data.target === "ORBITA") OnBtnOrbitaTouch();
        } else if (type === "COPY_ORBITA_SCRIPT") {
            var bm = BuildBookmarkletForOrbita();
            CopyWithAutoClear(bm, 60000);
            SafeShowPopup("✅ Đã copy Mã Nhúng CHOLIBI! Mở Orbita và dán vào thanh địa chỉ URL.");
        } else if (type === "TOGGLE_SYS_OVERLAY") {
            ToggleSystemFloatingOverlay();
        } else if (type === "HIDE_SYS_OVERLAY_SYNC") {
            HideSystemFloatingOverlay();
        } else if (type === "OPEN_A11Y_SETTINGS") {
            OpenAccessibilitySettingsNative();
        } else if (type === "TRIGGER_A11Y_STEP") {
            TriggerCrossAppCommand("STEP_EXEC", data);
            var bm2 = BuildBookmarkletForOrbita();
            try { app.SetClipboardText(bm2); } catch (e) {}
            UpdateOverlayStatusText("⏳ PENDING: Đã gửi lệnh Trợ Năng (A11y/AutoX/ADB) & chờ phản hồi...");
            SafeShowPopup("⏳ PENDING: Đã gửi lệnh Tự Điền Xuyên Ứng Dụng & copy sẵn Mã Nhúng!");
        } else if (type === "A11Y_SYNC") {
            TriggerCrossAppCommand("SYNC_PROFILE", data);
        } else if (type === "FETCH_IMAGE_B64") {
            FetchImageAsBase64Native(data);
        } else if (type === "SAVE_CUSTOM_SITE") {
            SaveCustomSiteNative(data);
        } else if (type === "WIPE_FINGERPRINTS_NOW") {
            WipeAllBrowserTracesAndRotateDeviceNative(Boolean(data && data.silent));
        } else if (type === "MARK_SESSION_COMPLETED_WIPE") {
            // Chỉ đánh dấu chờ xóa dấu vết & xoay thiết bị khi người dùng bấm Đổi Máy hoặc thoát ứng dụng (không đổi UA đột ngột khi Cookie phiên hiện tại còn sống)
            sessionCompletedNeedsWipeOnExit = true;
        }

        if (handledOk && msgId) {
            processedBridgeIds[msgId] = Date.now();
            if (Object.keys(processedBridgeIds).length > 120) {
                CleanProcessedBridgeIdsTick();
            }
            if (web) {
                web.Execute("if(window.__cholibiBridgeAck){window.__cholibiBridgeAck('" + msgId + "');}");
            }
        }
    } catch (e) {}
}

function FetchImageAsBase64Native(data) {
    if (!data || !data.url || !data.reqId) return;
    var reqId = String(data.reqId).replace(/[^a-zA-Z0-9_\-]/g, "");
    var targetUrl = String(data.url).trim();
    if (!/^https?:\/\//i.test(targetUrl)) {
        if (web) web.Execute("if(window.__cholibiOnImageB64){window.__cholibiOnImageB64('" + reqId + "', '');}");
        return;
    }
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", targetUrl, true);
        xhr.responseType = "arraybuffer";
        xhr.timeout = 5000;
        xhr.onload = function() {
            try {
                if (xhr.status >= 200 && xhr.status < 300 && xhr.response) {
                    var bytes = new Uint8Array(xhr.response);
                    var chunks = [];
                    for (var i = 0; i < bytes.length; i++) {
                        chunks.push(String.fromCharCode(bytes[i]));
                    }
                    var binary = chunks.join("");
                    var b64 = (typeof window !== "undefined" && typeof window.btoa === "function")
                        ? window.btoa(binary)
                        : Base64Util.encode(binary);
                    var cType = xhr.getResponseHeader("Content-Type") || "image/png";
                    var dataUri = "data:" + cType + ";base64," + b64;
                    if (web) {
                        web.Execute("if(window.__cholibiOnImageB64){window.__cholibiOnImageB64('" + reqId + "', " + JSON.stringify(dataUri) + ");}");
                    }
                    return;
                }
            } catch (err) {}
            if (web) web.Execute("if(window.__cholibiOnImageB64){window.__cholibiOnImageB64('" + reqId + "', '');}");
        };
        xhr.onerror = xhr.ontimeout = function() {
            if (web) web.Execute("if(window.__cholibiOnImageB64){window.__cholibiOnImageB64('" + reqId + "', '');}");
        };
        xhr.send();
    } catch (e) {
        if (web) web.Execute("if(window.__cholibiOnImageB64){window.__cholibiOnImageB64('" + reqId + "', '');}");
    }
}

function OnWebConsole(msg) {
    if (!msg || typeof msg !== "string") return;
    if (msg === "CHOLIBI_WIPE_DONE") {
        FinalizeBrowserWipeAndReloadNative();
        return;
    }
    if (msg === "CHOLIBI_NEED_INJECT") {
        InjectCholibiTool();
        return;
    }
    if (msg.indexOf("CHOLIBI_NATIVE_DRAG:") === 0) {
        try {
            var b64Drag = msg.substring("CHOLIBI_NATIVE_DRAG:".length).trim();
            var jsonStrDrag = Base64Util.decode(b64Drag);
            var payloadDrag = JSON.parse(jsonStrDrag);
            SendSafeBroadcast("com.cholibi.action.SLIDER_DRAG", payloadDrag);
        } catch (eDrag) {}
        return;
    }
    var prefix = "CHOLIBI_BRIDGE_MSG:";
    var idx = msg.indexOf(prefix);
    if (idx === -1) return;
    var b64 = msg.substring(idx + prefix.length).trim();
    ProcessBridgeEnvelope(Base64Util.decode(b64));
}

function OnWebUrlNavigate(url) {
    if (!url || typeof url !== "string") return;
    if (!/^cholibi-bridge/i.test(url) && !/chrome-error|chromewebdata/i.test(url) && /^https?:/i.test(url)) {
        lastPageLoadStartTs = Date.now();
    }
    var scheme = "cholibi-bridge://msg/";
    if (url.indexOf(scheme) === 0) {
        var b64 = url.substring(scheme.length).trim();
        ProcessBridgeEnvelope(Base64Util.decode(b64));
        return;
    }
    if (/chrome-error|chromewebdata/i.test(url)) {
        if (urlInput && !IsValidHttpUrl(urlInput.GetText())) {
            urlInput.SetText(GetActiveSiteDefaultUrl(activeSiteKey));
        }
    }
}

var injectFollowupTimer = null;
var lastEarlyFpInjectTs = 0;

function InjectEarlyAntiFingerprintNative() {
    if (!web) return;
    var now = Date.now();
    if (now - lastEarlyFpInjectTs < 900) return;
    lastEarlyFpInjectTs = now;
    var fp = activeDeviceFingerprint || LoadOrInitDeviceFingerprint();
    var fpJson = JSON.stringify(fp);
    var earlyJs =
        "(function(fp){" +
        "try{" +
        "if(!fp||window.__cbEarlyFpId===fp.id)return;" +
        "window.__cbEarlyFpId=fp.id;" +
        "Object.defineProperty(navigator,'webdriver',{get:function(){return false;},configurable:true});" +
        "Object.defineProperty(navigator,'hardwareConcurrency',{get:function(){return fp.cores||8;},configurable:true});" +
        "Object.defineProperty(navigator,'deviceMemory',{get:function(){return fp.ram||8;},configurable:true});" +
        "if(fp.ua){Object.defineProperty(navigator,'userAgent',{get:function(){return fp.ua;},configurable:true});}" +
        "var majorVer=(String(fp.chrome||'126').split('.')[0])||'126';" +
        "var uaDataObj={" +
        "brands:[{brand:'Not/A)Brand',version:'8'},{brand:'Chromium',version:majorVer},{brand:'Android WebView',version:majorVer}]," +
        "mobile:true,platform:'Android'," +
        "getHighEntropyValues:function(hints){return Promise.resolve({architecture:'arm',bitness:'64',brands:this.brands,mobile:true,model:fp.model||'SM-S928B',platform:'Android',platformVersion:String(fp.android||'14')+'.0.0',uaFullVersion:fp.chrome||'126.0.6478.122'});}" +
        "};" +
        "Object.defineProperty(navigator,'userAgentData',{get:function(){return uaDataObj;},configurable:true});" +
        "if(fp.dpr){Object.defineProperty(window,'devicePixelRatio',{get:function(){return fp.dpr;},configurable:true});}" +
        "if(fp.sw&&fp.sh&&window.screen){" +
        "Object.defineProperty(window.screen,'width',{get:function(){return fp.sw;},configurable:true});" +
        "Object.defineProperty(window.screen,'height',{get:function(){return fp.sh;},configurable:true});" +
        "Object.defineProperty(window.screen,'availWidth',{get:function(){return fp.sw;},configurable:true});" +
        "Object.defineProperty(window.screen,'availHeight',{get:function(){return fp.sh;},configurable:true});" +
        "}" +
        "}catch(e){}" +
        "})(" + fpJson + ");";
    try { web.Execute(earlyJs); } catch (e) {}
}

// Tiêm sớm Anti-Fingerprint ngay khi trang bắt đầu tải (progress >= 20%) & tiêm giao diện CHOLIBI sau khi đạt 100%
function OnWebProgress(progress) {
    isExternalBrowserActive = false;
    if (progress >= 20 && progress < 100) {
        InjectEarlyAntiFingerprintNative();
    }
    if (progress === 100) {
        try {
            var injectedCode = app.ReadFile(app.GetAppPath() + "/engine.js");
            web.Execute(injectedCode);
            console.log("Đã nạp thành công engine.js vào WebView");
        } catch(e) {
            console.error("Lỗi nạp engine.js: " + e.message);
        }
        InjectEarlyAntiFingerprintNative();
        if (injectDebounceTimer) clearTimeout(injectDebounceTimer);
        if (injectFollowupTimer) clearTimeout(injectFollowupTimer);
        injectDebounceTimer = setTimeout(function() {
            InjectCholibiTool();
            SyncRegistryToWebView();
        }, 650);
        injectFollowupTimer = setTimeout(function() {
            InjectCholibiTool();
            SyncRegistryToWebView();
        }, 1800);
    }
}
function CallSdtFromNative(siteKey, profileData) {
    if (!web || typeof web.Execute !== "function") {
        SafeShowPopup("WebView chưa sẵn sàng.");
        return;
    }

    var args = [
        String(siteKey || activeSiteKey),
        {
            phone: String(
                (profileData && profileData.phone) || ""
            )
        }
    ];

    // JSON.stringify xử lý dấu nháy, xuống dòng và escape chuỗi.
    // Không cần bọc mã bên dưới bằng thẻ <script>.
    var js =
        '(function(a){' +
            'if(typeof window.sdt!=="function")return false;' +
            'Promise.resolve().then(function(){' +
                'return window.sdt(a[0],a[1]);' +
            '}).catch(function(e){' +
                'console.error("SDT: "+String(e && e.message ? e.message : e));' +
            '});' +
            'return true;' +
        '})(' + JSON.stringify(args) + ');';

    web.Execute(js, function(started) {
        // Callback chỉ kiểm tra đã gọi được hàm trong WebView.
        // Đây không phải kết quả hoàn tất xử lý SĐT.
        if (started === false || started === "false") {
            SafeShowPopup(
                "Hãy đợi payload tải xong rồi gọi lại SĐT."
            );
        }
    });
}

// Ví dụ gọi trong sự kiện nút native, sau khi payload đã tải:
// CallSdtFromNative(activeSiteKey, { phone: "0912345678" });

// ============================================================================
// LÕI GIAO DIỆN NỔI SIÊU TỰ ĐỘNG HÓA v31 MASTER FIXED
// ============================================================================
function CholibiInjectedPayload(injectedSiteConfigs, injectedMasterState, injectedLockedVault, isInsideDroidScriptApp, injectedBridgeToken, injectedDeviceFp) {
    if (window.top !== window.self) return;
    if (!document.body) return;

    // 1. GIỮ NGUYÊN ĐIỀU HƯỚNG TỰ NHIÊN CỦA TRANG (Fix P1-03: Bỏ ép window.open redirect gây lặp trang)
    if (!window.__cholibiGatewayHooked) {
        window.__cholibiGatewayHooked = true;
        document.addEventListener('click', function(ev) {
            var a = ev.target && ev.target.closest ? ev.target.closest('a[target="_blank"]') : null;
            if (a && a.href && /^https?:\/\//i.test(a.href)) {
                a.removeAttribute('target');
            }
        }, true);
    }

    if (document.getElementById('cb-panel')) {
        if (document.getElementById('cb-float-dock') && typeof window.__cholibiFloatingAction === 'function') {
            if (window.__cholibiRestoreFromNative && injectedMasterState) {
                window.__cholibiRestoreFromNative(injectedMasterState, injectedLockedVault);
            }
            return;
        }
        try {
            var staleIds = ['cb-panel', 'cb-bubble', 'cb-vault-modal', 'cb-float-dock'];
            for (var sIdxC = 0; sIdxC < staleIds.length; sIdxC++) {
                var staleEl = document.getElementById(staleIds[sIdxC]);
                if (staleEl && staleEl.parentNode) staleEl.parentNode.removeChild(staleEl);
            }
        } catch (eClean) {}
    }

    // Lấy văn bản thuần của trang web (Loại trừ tuyệt đối 100% #cb-panel, #cb-bubble, #cb-vault-modal, #cb-float-dock)
    function getCleanPageText() {
        if (!document.body) return '';
        var parts = [];
        var children = document.body.children;
        for (var i = 0; i < children.length; i++) {
            var ch = children[i];
            if (!ch) continue;
            var id = ch.id || '';
            if (id === 'cb-panel' || id === 'cb-bubble' || id === 'cb-vault-modal' || id === 'cb-float-dock') continue;
            var tag = (ch.tagName || '').toUpperCase();
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'IFRAME') continue;
            var t = ch.innerText || ch.textContent || '';
            if (t) parts.push(t);
        }
        return parts.join(' ').replace(/\s+/g, ' ').trim();
    }
    window.__cholibiGetCleanPageText = getCleanPageText;

    var SITE_MAP = injectedSiteConfigs || {};
    var SITE_KEYS = Object.keys(SITE_MAP);
    // [v31.2] Path xác minh SĐT riêng cho từng site GROUP_A
    var SITE_SECURITY_PATHS = {
        "SC88":  "/home/security?active=0",
        "CM88":  "/home/security?active=0",
        "C168":  "/home/security?active=0",
        "TT88":  "/home/security?active=0",
        "789P":  "/home/security?active=0",
        "MMOO":  "/home/security?active=0",
        "AD88":  "/home/security?active=0",
        "XX8":   "/home/security?active=0",
        "QQ88":  "/home/security?active=0"
    };

    // ========================================================================
    // BỘ GIẢ LẬP & XÓA DẤU VÂN TAY TRÌNH DUYỆT (ANTI-FINGERPRINT ENGINE v31.3)
    // Mỗi phiên đăng ký là 1 thiết bị mới (Canvas/WebGL/Audio/Navigator/WebRTC)
    // ========================================================================
    var FP_STORAGE_KEY = '__cholibi_session_fp_v31';
    var CUSTOM_SITES_LOCAL_KEY = 'cholibi_custom_sites_v31';
    var LEARNED_SELECTORS_LOCAL_KEY = 'cholibi_learned_selectors_v31';
    var learnedSelectorsMap = {};
    try {
        learnedSelectorsMap = JSON.parse(localStorage.getItem(LEARNED_SELECTORS_LOCAL_KEY) || '{}') || {};
    } catch (eL) { learnedSelectorsMap = {}; }

    try {
        var savedCustomSites = JSON.parse(localStorage.getItem(CUSTOM_SITES_LOCAL_KEY) || '{}') || {};
        for (var csk in savedCustomSites) {
            if (savedCustomSites[csk] && savedCustomSites[csk].url) {
                SITE_MAP[csk] = savedCustomSites[csk];
            }
        }
        SITE_KEYS = Object.keys(SITE_MAP);
    } catch (eCS) {}

    var currentNativeFp = (injectedDeviceFp && typeof injectedDeviceFp === 'object' && injectedDeviceFp.canvasSeed) ? injectedDeviceFp : null;

    function getOrInitSessionFingerprint() {
        if (currentNativeFp && currentNativeFp.canvasSeed) {
            try { sessionStorage.setItem(FP_STORAGE_KEY, JSON.stringify(currentNativeFp)); } catch (e0) {}
            return currentNativeFp;
        }
        var fp = null;
        try {
            fp = JSON.parse(sessionStorage.getItem(FP_STORAGE_KEY) || 'null');
        } catch (e) {}
        if (!fp || !fp.canvasSeed) {
            var gpus = [
                { v: 'Qualcomm', r: 'Adreno (TM) 750' },
                { v: 'Qualcomm', r: 'Adreno (TM) 740' },
                { v: 'Qualcomm', r: 'Adreno (TM) 730' },
                { v: 'ARM', r: 'Mali-G720 Immortalis MC12' },
                { v: 'ARM', r: 'Mali-G715 Immortalis MC10' }
            ];
            var g = gpus[Math.floor(Math.random() * gpus.length)];
            fp = {
                id: 'fp_' + Date.now() + '_' + Math.floor(1000 + Math.random() * 8999),
                model: 'SM-S928B',
                brand: 'Samsung S24 Ultra',
                android: '14',
                buildId: 'UP1A.231005.007',
                gpuVendor: g.v,
                gpuRenderer: g.r,
                cores: [8, 12][Math.floor(Math.random() * 2)],
                ram: [8, 12][Math.floor(Math.random() * 2)],
                sw: 412,
                sh: 915,
                dpr: 3.5,
                canvasSeed: Math.floor(1 + Math.random() * 250),
                audioSeed: Number((0.00001 + Math.random() * 0.00008).toFixed(7))
            };
            try { sessionStorage.setItem(FP_STORAGE_KEY, JSON.stringify(fp)); } catch (e2) {}
        }
        return fp;
    }

    function applyAntiFingerprintHooks() {
        var fp = getOrInitSessionFingerprint();
        try {
            Object.defineProperty(navigator, 'webdriver', { get: function() { return false; }, configurable: true });
            Object.defineProperty(navigator, 'hardwareConcurrency', { get: function() { return fp.cores || 8; }, configurable: true });
            Object.defineProperty(navigator, 'deviceMemory', { get: function() { return fp.ram || 8; }, configurable: true });
            if (fp.ua && typeof fp.ua === 'string') {
                Object.defineProperty(navigator, 'userAgent', { get: function() { return fp.ua; }, configurable: true });
            }
            if (fp.dpr && typeof fp.dpr === 'number') {
                Object.defineProperty(window, 'devicePixelRatio', { get: function() { return fp.dpr; }, configurable: true });
            }
            if (fp.sw && fp.sh && window.screen) {
                Object.defineProperty(window.screen, 'width', { get: function() { return fp.sw; }, configurable: true });
                Object.defineProperty(window.screen, 'height', { get: function() { return fp.sh; }, configurable: true });
                Object.defineProperty(window.screen, 'availWidth', { get: function() { return fp.sw; }, configurable: true });
                Object.defineProperty(window.screen, 'availHeight', { get: function() { return fp.sh; }, configurable: true });
            }
        } catch (eNav) {}
        if (window.__cholibiAntiFpApplied) return;
        window.__cholibiAntiFpApplied = true;

        // WebGL Vendor & Renderer Spoofing
        try {
            var patchWebGL = function(proto) {
                if (!proto || !proto.getParameter) return;
                var origGetParam = proto.getParameter;
                proto.getParameter = function(p) {
                    if (p === 37445) return fp.gpuVendor || 'Qualcomm';
                    if (p === 37446) return fp.gpuRenderer || 'Adreno (TM) 740';
                    return origGetParam.apply(this, arguments);
                };
            };
            if (typeof WebGLRenderingContext !== 'undefined') patchWebGL(WebGLRenderingContext.prototype);
            if (typeof WebGL2RenderingContext !== 'undefined') patchWebGL(WebGL2RenderingContext.prototype);
        } catch (eGl) {}

        // Canvas toDataURL Fingerprint Noise (Bảo vệ 100% mọi Canvas Captcha Tencent/Geetest/Yidun!)
        try {
            var origToDataURL = HTMLCanvasElement.prototype.toDataURL;
            HTMLCanvasElement.prototype.toDataURL = function() {
                try {
                    var isCaptchaCanvas = (this.closest && this.closest('[class*="captcha" i], [class*="verify" i], [class*="geetest" i], [class*="yidun" i], [class*="tcaptcha" i], .van-popup, .van-dialog, [role="dialog"]')) ||
                                          (this.width >= 150 && this.height >= 60);
                    if (!isCaptchaCanvas && !this.isConnected && this.width > 16 && this.height > 16 && this.width < 320 && this.height < 80) {
                        var ctx = this.getContext('2d');
                        if (ctx) {
                            var px = ctx.getImageData(0, 0, 2, 2);
                            px.data[0] = (px.data[0] + (fp.canvasSeed % 3)) & 255;
                            ctx.putImageData(px, 0, 0);
                        }
                    }
                } catch (eC) {}
                return origToDataURL.apply(this, arguments);
            };
        } catch (eCv) {}

        // AudioContext Fingerprint Noise
        try {
            if (typeof AudioBuffer !== 'undefined' && AudioBuffer.prototype.getChannelData) {
                var origGetChannelData = AudioBuffer.prototype.getChannelData;
                AudioBuffer.prototype.getChannelData = function() {
                    var res = origGetChannelData.apply(this, arguments);
                    try {
                        if (res && res.length > 20 && !res.__cbNoised) {
                            res.__cbNoised = true;
                            for (var i = 0; i < Math.min(res.length, 64); i += 7) {
                                res[i] = res[i] + (fp.audioSeed || 0.00002);
                            }
                        }
                    } catch (eA) {}
                    return res;
                };
            }
        } catch (eAu) {}
    }
    applyAntiFingerprintHooks();

    var STATE_KEY = 'cholibi_extension_state_v31';
    var LOCAL_HISTORY_KEY = 'cholibi_local_history_v31';
    var VAN88_BOUNCE_KEY = '__cholibi_van88_bounce_guard';
    var RESUME_GUARD_KEY = '__cholibi_resume_loop_guard';
    var IDLE_AUTO_MINIMIZE_MS = 40000;

    var state = {};
    var lockedVault = injectedLockedVault || {};
    var historyRegistry = [];
    var currentDeviceIp = '';
    var idleMinimizeTimer = null;
    var idleCountdownInterval = null;
    var idleSecondsLeft = 40;
    var toastHideTimer = null;
    var fieldsHydrated = false;
    var lastFormSubmitTs = 0;
    var rateLimitCooldownTimer = null;

    try {
        state = JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
    } catch (e) {
        state = {};
    }

    // ========================================================================
    // SỬA TRIỆT ĐỂ LỖI 1: CƯỠNG BỨC ƯU TIÊN DỮ LIỆU TỪ NATIVE MASTER STATE & LOCKED VAULT!
    // Tuyệt đối không để localStorage cũ của trang (VD: BUI DINH HUNG trên 8nohu.vip)
    // đè lên phôi đã khóa (VD: NGUYEN TRUONG CA từ VAN88)!
    // ========================================================================
    function mergeNativeMasterIntoLocalState(masterObj, vaultObj) {
        if (vaultObj && typeof vaultObj === 'object') {
            var incomingVaultTs = Number(vaultObj.updatedAt || 0);
            var localVaultTs = Number(lockedVault.updatedAt || 0);
            var shouldOverwriteVault = (incomingVaultTs >= localVaultTs);
            var incomingCleared = (vaultObj.clearedFields && typeof vaultObj.clearedFields === 'object') ? vaultObj.clearedFields : {};
            lockedVault.clearedFields = lockedVault.clearedFields || {};
            for (var ck in incomingCleared) {
                if (incomingCleared[ck]) lockedVault.clearedFields[ck] = true;
            }
            for (var vk in vaultObj) {
                if (vk === 'updatedAt' || vk === 'clearedAt' || vk === 'clearedFields') continue;
                if (vaultObj[vk] !== undefined && vaultObj[vk] !== null) {
                    var vStr = String(vaultObj[vk]);
                    if (incomingCleared[vk] && shouldOverwriteVault) {
                        lockedVault[vk] = '';
                    } else if ((shouldOverwriteVault && vStr !== '') || (vStr !== '' && !lockedVault[vk])) {
                        lockedVault[vk] = vStr;
                        if (lockedVault.clearedFields) delete lockedVault.clearedFields[vk];
                    }
                }
            }
            if (incomingVaultTs > localVaultTs) lockedVault.updatedAt = incomingVaultTs;
        }
        if (!masterObj || typeof masterObj !== 'object') return;

        if (typeof masterObj.lockBankProfile === 'boolean') {
            state.lockBankProfile = masterObj.lockBankProfile;
        } else if (typeof state.lockBankProfile !== 'boolean') {
            state.lockBankProfile = true;
        }

        var nativeTs = Number(masterObj.dataUpdatedAt || 0);
        var localTs = Number(state.dataUpdatedAt || 0);
        var nativeIsNewerOrEqual = (nativeTs >= localTs);

        state.data = state.data || {};
        if (masterObj.data && typeof masterObj.data === 'object') {
            for (var dk in masterObj.data) {
                if (masterObj.data[dk] !== undefined && masterObj.data[dk] !== null) {
                    var dStr = String(masterObj.data[dk]);
                    if (nativeIsNewerOrEqual || dStr !== '' || !state.data[dk]) {
                        state.data[dk] = dStr;
                    }
                }
            }
        }
        if (nativeTs > localTs) state.dataUpdatedAt = nativeTs;

        // Nếu đang bật Khóa Phôi Cố Định, cưỡng bức áp dụng toàn bộ trường từ lockedVault!
        if (state.lockBankProfile !== false) {
            var lockedKeys = ['pw', 'wd', 'name', 'phone', 'bank', 'branch', 'stk', 'stkBackup', 'proxy'];
            var cMap = lockedVault.clearedFields || {};
            for (var i = 0; i < lockedKeys.length; i++) {
                var lk = lockedKeys[i];
                if (cMap[lk]) {
                    state.data[lk] = '';
                } else if (lockedVault[lk] !== undefined && lockedVault[lk] !== null && String(lockedVault[lk]) !== '') {
                    state.data[lk] = String(lockedVault[lk]);
                }
            }
        }

        if (typeof masterObj.autoMode === 'boolean') state.autoMode = masterObj.autoMode;
        if (typeof masterObj.currentStep === 'number') state.currentStep = masterObj.currentStep;
        if (typeof masterObj.registrationSubmitted === 'boolean') state.registrationSubmitted = masterObj.registrationSubmitted;
        if (typeof masterObj.submittedUsername === 'string') state.submittedUsername = masterObj.submittedUsername;
        if (typeof masterObj.withdrawPinSetInStep1 === 'boolean') state.withdrawPinSetInStep1 = masterObj.withdrawPinSetInStep1;
        if (typeof masterObj.waitingOtp === 'boolean') state.waitingOtp = masterObj.waitingOtp;
        if (typeof masterObj.usedBackupStk === 'boolean') state.usedBackupStk = masterObj.usedBackupStk;
        if (typeof masterObj.retryUserCount === 'number') state.retryUserCount = masterObj.retryUserCount;
        if (typeof masterObj.groupDPinSet === 'boolean') state.groupDPinSet = masterObj.groupDPinSet;
        if (typeof masterObj.step4OtpStartUrl === 'string') state.step4OtpStartUrl = masterObj.step4OtpStartUrl;
        if (typeof masterObj.otpConfirmClickedOnce === 'boolean') state.otpConfirmClickedOnce = masterObj.otpConfirmClickedOnce;
        if (typeof masterObj.autoWipeOnExit === 'boolean') state.autoWipeOnExit = masterObj.autoWipeOnExit;
        if (typeof masterObj.autoLearnSites === 'boolean') state.autoLearnSites = masterObj.autoLearnSites;
        if (masterObj.site) state.site = masterObj.site;
        if (Array.isArray(masterObj.logEntries) && masterObj.logEntries.length > 0) {
            state.logEntries = masterObj.logEntries;
        }
        try {
            localStorage.setItem(STATE_KEY, JSON.stringify(state));
        } catch (e) {}
    }

    mergeNativeMasterIntoLocalState(injectedMasterState, injectedLockedVault);

    try {
        historyRegistry = JSON.parse(localStorage.getItem(LOCAL_HISTORY_KEY) || '[]');
        if (!Array.isArray(historyRegistry)) historyRegistry = [];
    } catch (e) {
        historyRegistry = [];
    }

    function toUpperNoAccent(str) {
        var s = String(str || '');
        s = s.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/gi, 'a');
        s = s.replace(/[èéẹẻẽêềếệểễ]/gi, 'e');
        s = s.replace(/[ìíịỉĩ]/gi, 'i');
        s = s.replace(/[òóọỏõôồốộổỗơờớợởỡ]/gi, 'o');
        s = s.replace(/[ùúụủũưừứựửữ]/gi, 'u');
        s = s.replace(/[ỳýỵỷỹ]/gi, 'y');
        s = s.replace(/đ/gi, 'd');
        return s.toUpperCase().replace(/[^A-Z\s]/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function clearSiteSessionKeepCholibi() {
        try {
            var savedState = localStorage.getItem(STATE_KEY);
            var savedHist = localStorage.getItem(LOCAL_HISTORY_KEY);
            var savedVault = localStorage.getItem('cholibi_locked_vault_v31');
            var savedCustom = localStorage.getItem(CUSTOM_SITES_LOCAL_KEY);
            var savedLearned = localStorage.getItem(LEARNED_SELECTORS_LOCAL_KEY);
            var savedBounce = sessionStorage.getItem(VAN88_BOUNCE_KEY);
            var saved429 = sessionStorage.getItem('__cholibi_429_until_ts');
            var savedLastSub = sessionStorage.getItem('__cholibi_last_submit_ts');
            try { localStorage.clear(); } catch (e1) {}
            try { sessionStorage.clear(); } catch (e2) {}
            if (savedState) localStorage.setItem(STATE_KEY, savedState);
            if (savedHist) localStorage.setItem(LOCAL_HISTORY_KEY, savedHist);
            if (savedVault) localStorage.setItem('cholibi_locked_vault_v31', savedVault);
            if (savedCustom) localStorage.setItem(CUSTOM_SITES_LOCAL_KEY, savedCustom);
            if (savedLearned) localStorage.setItem(LEARNED_SELECTORS_LOCAL_KEY, savedLearned);
            if (savedBounce) sessionStorage.setItem(VAN88_BOUNCE_KEY, savedBounce);
            if (saved429) sessionStorage.setItem('__cholibi_429_until_ts', saved429);
            if (savedLastSub) sessionStorage.setItem('__cholibi_last_submit_ts', savedLastSub);
        } catch (e) {}

        try {
            var cookies = document.cookie ? document.cookie.split(';') : [];
            var hostParts = (location.hostname || '').split('.');
            var rootDomain = hostParts.length >= 2 ? '.' + hostParts.slice(-2).join('.') : '';
            for (var i = 0; i < cookies.length; i++) {
                var c = cookies[i];
                var eqPos = c.indexOf('=');
                var name = (eqPos > -1 ? c.substr(0, eqPos) : c).trim();
                if (!name) continue;
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
                if (rootDomain) {
                    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=' + rootDomain;
                }
            }
        } catch (e) {}
    }
    window.__cholibiClearSiteSession = clearSiteSessionKeepCholibi;

    async function wipeAllSiteTracesAndRotateJS() {
        try {
            var savedState = localStorage.getItem(STATE_KEY);
            var savedHist = localStorage.getItem(LOCAL_HISTORY_KEY);
            var savedVault = localStorage.getItem('cholibi_locked_vault_v31');
            var savedCustom = localStorage.getItem(CUSTOM_SITES_LOCAL_KEY);
            var savedLearned = localStorage.getItem(LEARNED_SELECTORS_LOCAL_KEY);
            try { localStorage.clear(); } catch (e1) {}
            try { sessionStorage.clear(); } catch (e2) {}
            if (savedState) localStorage.setItem(STATE_KEY, savedState);
            if (savedHist) localStorage.setItem(LOCAL_HISTORY_KEY, savedHist);
            if (savedVault) localStorage.setItem('cholibi_locked_vault_v31', savedVault);
            if (savedCustom) localStorage.setItem(CUSTOM_SITES_LOCAL_KEY, savedCustom);
            if (savedLearned) localStorage.setItem(LEARNED_SELECTORS_LOCAL_KEY, savedLearned);
        } catch (e) {}

        // Xóa sạch Cookie trên mọi path & domain
        clearSiteSessionKeepCholibi();

        var withTimeout = function(prom, ms) {
            return Promise.race([
                Promise.resolve(prom),
                new Promise(function(res) { setTimeout(function() { res(null); }, ms || 800); })
            ]);
        };

        // Xóa sạch IndexedDB của trang web (có bảo vệ timeout 800ms chống treo)
        try {
            if (window.indexedDB && typeof window.indexedDB.databases === 'function') {
                var dbs = await withTimeout(window.indexedDB.databases(), 800);
                if (Array.isArray(dbs)) {
                    for (var dIdx = 0; dIdx < dbs.length; dIdx++) {
                        if (dbs[dIdx] && dbs[dIdx].name) {
                            try { window.indexedDB.deleteDatabase(dbs[dIdx].name); } catch (eDb) {}
                        }
                    }
                }
            }
        } catch (eIdb) {}

        // Xóa sạch CacheStorage & ServiceWorker của trang web (có bảo vệ timeout 800ms)
        try {
            if (window.caches && typeof window.caches.keys === 'function') {
                var cKeys = await withTimeout(window.caches.keys(), 800);
                if (Array.isArray(cKeys)) {
                    for (var ck = 0; ck < cKeys.length; ck++) {
                        try { await withTimeout(window.caches.delete(cKeys[ck]), 400); } catch (eCa) {}
                    }
                }
            }
            if (navigator.serviceWorker && typeof navigator.serviceWorker.getRegistrations === 'function') {
                var regs = await withTimeout(navigator.serviceWorker.getRegistrations(), 800);
                if (Array.isArray(regs)) {
                    for (var rg = 0; rg < regs.length; rg++) {
                        try { await withTimeout(regs[rg].unregister(), 400); } catch (eSw) {}
                    }
                }
            }
        } catch (eSwAll) {}

        // Reset cờ phiên cũ và khởi tạo vân tay phần cứng mới hoàn toàn cho phiên kế tiếp
        currentNativeFp = null;
        state.autoMode = false;
        state.currentStep = 0;
        state.registrationSubmitted = false;
        state.submittedUsername = '';
        state.withdrawPinSetInStep1 = false;
        state.waitingOtp = false;
        state.usedBackupStk = false;
        state.retryUserCount = 0;
        state.groupDPinSet = false;
        state.step4OtpStartUrl = '';
        state.otpConfirmClickedOnce = false;
        try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (eSt) {}
        try { sessionStorage.removeItem(FP_STORAGE_KEY); } catch (eFp) {}
        getOrInitSessionFingerprint();
    }
    window.__cholibiWipeAllSiteTracesJS = wipeAllSiteTracesAndRotateJS;

    // ========================================================================
    // CẦU NỐI CONSOLE AN TOÀN (KHÔNG TẠO IFRAME SCHEME LẠ LÀM KẸT WEBVIEW 3 CHẤM!)
    // ========================================================================
    var bridgeQueue = [];
    var bridgeSeq = 0;
    var cleanConsoleRef = null;

    function getCleanConsole() {
        if (cleanConsoleRef) return cleanConsoleRef;
        try {
            if (document.readyState === 'complete' && document.body) {
                var ifr = document.createElement('iframe');
                ifr.style.display = 'none';
                document.body.appendChild(ifr);
                if (ifr.contentWindow && ifr.contentWindow.console) {
                    cleanConsoleRef = ifr.contentWindow.console;
                }
            }
        } catch (e) {}
        return cleanConsoleRef || window.console;
    }

    window.__cholibiBridgeAck = function(ackId) {
        bridgeQueue = bridgeQueue.filter(function(item) { return item.id !== ackId; });
    };

    function sendViaBridgeChannels(b64, tryNum) {
        var msg = 'CHOLIBI_BRIDGE_MSG:' + b64;
        try {
            if (window.console && typeof window.console.log === 'function') {
                window.console.log(msg);
            }
        } catch (e) {}
        try {
            var cc = getCleanConsole();
            if (cc && cc !== window.console && typeof cc.log === 'function') {
                cc.log(msg);
            }
        } catch (e) {}
        if (tryNum >= 2 && isInsideDroidScriptApp !== false) {
            try {
                var ifr = document.createElement('iframe');
                ifr.style.display = 'none';
                document.documentElement.appendChild(ifr);
                ifr.src = 'cholibi-bridge://msg/' + b64;
                setTimeout(function() {
                    try { if (ifr && ifr.parentNode) ifr.parentNode.removeChild(ifr); } catch (e) {}
                }, 1500);
            } catch (e) {}
        }
    }

    function flushBridgeQueue() {
        if (!bridgeQueue.length) return;
        if (isInsideDroidScriptApp === false) {
            bridgeQueue = [];
            return;
        }
        var now = Date.now();
        for (var i = 0; i < bridgeQueue.length; i++) {
            var item = bridgeQueue[i];
            if (item.tries >= 3) continue;
            if (now - item.lastSent < 950) continue;
            item.tries++;
            item.lastSent = now;
            sendViaBridgeChannels(item.b64, item.tries);
        }
        bridgeQueue = bridgeQueue.filter(function(item) { return item.tries < 3; });
    }

    window.__cholibiBridgeSend = function(type, dataObj) {
        if (isInsideDroidScriptApp === false) return;
        bridgeSeq++;
        var id = 'm_' + Date.now() + '_' + bridgeSeq;
        var raw = JSON.stringify({ id: id, token: injectedBridgeToken || '', type: type, data: dataObj || {} });
        var b64 = btoa(unescape(encodeURIComponent(raw)));
        if (bridgeQueue.length > 40) {
            bridgeQueue = bridgeQueue.slice(-40);
        }
        bridgeQueue.push({ id: id, b64: b64, tries: 0, lastSent: 0 });
        flushBridgeQueue();
    };

    if (window.__cholibiBridgeFlushInterval) clearInterval(window.__cholibiBridgeFlushInterval);
    window.__cholibiBridgeFlushInterval = setInterval(flushBridgeQueue, 1000);

    var syncStateDebounceTimer = null;
    function saveState(patch, immediateSync, isUserEdited, editedFields) {
        var hasDataPatch = false;
        for (var k in patch) {
            if (k === 'data' && patch.data) {
                hasDataPatch = true;
                state.data = state.data || {};
                for (var dk in patch.data) {
                    state.data[dk] = patch.data[dk];
                }
                if (isUserEdited) {
                    var lockedKeys = ['pw', 'wd', 'name', 'phone', 'bank', 'branch', 'stk', 'stkBackup', 'proxy'];
                    var specificList = Array.isArray(editedFields) && editedFields.length > 0 ? editedFields : null;
                    lockedVault.clearedFields = lockedVault.clearedFields || {};
                    var allowSingleClear = Boolean(specificList && specificList.length === 1);
                    for (var li = 0; li < lockedKeys.length; li++) {
                        var lk = lockedKeys[li];
                        if (specificList && specificList.indexOf(lk) === -1) continue;
                        if (patch.data[lk] !== undefined && patch.data[lk] !== null) {
                            var cleanV = String(patch.data[lk]).trim();
                            if (cleanV === '' && !allowSingleClear && lockedVault[lk]) continue;
                            lockedVault[lk] = cleanV;
                            if (cleanV === '' && allowSingleClear) {
                                lockedVault.clearedFields[lk] = true;
                            } else if (cleanV !== '') {
                                delete lockedVault.clearedFields[lk];
                            }
                        }
                    }
                    lockedVault.updatedAt = Date.now();
                }
            } else {
                state[k] = patch[k];
            }
        }
        if (hasDataPatch || isUserEdited) {
            state.dataUpdatedAt = Date.now();
        }
        try {
            localStorage.setItem(STATE_KEY, JSON.stringify(state));
        } catch (e) {}

        var payloadToSend = {};
        for (var sk in state) payloadToSend[sk] = state[sk];
        payloadToSend.userEdited = Boolean(isUserEdited);
        if (Array.isArray(editedFields)) payloadToSend.editedFields = editedFields;

        // Fix M1: Debounce 120ms khi gõ phím (isUserEdited=true, immediateSync=false) để mượt trên Android 8-9
        if (immediateSync && !isUserEdited) {
            if (syncStateDebounceTimer) clearTimeout(syncStateDebounceTimer);
            window.__cholibiBridgeSend('SAVE_MASTER_STATE', payloadToSend);
        } else {
            if (syncStateDebounceTimer) clearTimeout(syncStateDebounceTimer);
            syncStateDebounceTimer = setTimeout(function() {
                window.__cholibiBridgeSend('SAVE_MASTER_STATE', payloadToSend);
            }, isUserEdited ? 120 : 250);
        }
    }

    var rawHref = String(location.href || '');
    var pageBodyText = getCleanPageText();
    var isWebErrorPage = !/^https?:\/\//i.test(rawHref) ||
        /chrome-error|chromewebdata|about:blank/i.test(rawHref) ||
        /ERR_NAME_NOT_RESOLVED|ERR_CONNECTION_|ERR_TIMED_OUT|ERR_ADDRESS_UNREACHABLE|Trang web không khả dụng|Không thể tải trang web/i.test(pageBodyText);

    var host = (location.hostname || '').toLowerCase();
    var fullHrefLower = (location.href || '').toLowerCase();
    var detectedSite = state.site || (injectedMasterState && injectedMasterState.site) || 'NOHU88';
    var isKnownDomain = false;
    for (var sIdx = 0; sIdx < SITE_KEYS.length; sIdx++) {
        var kName = SITE_KEYS[sIdx];
        var cfgItem = SITE_MAP[kName] || {};
        var tokens = String(cfgItem.hostMatch || '').toLowerCase().split('|');
        var matched = false;
        for (var tIdx = 0; tIdx < tokens.length; tIdx++) {
            var tok = tokens[tIdx].trim();
            if (tok && (host.indexOf(tok) !== -1 || fullHrefLower.indexOf(tok) !== -1)) {
                matched = true;
                break;
            }
        }
        if (!matched && cfgItem.url) {
            try {
                var cfgHost = new URL(cfgItem.url).hostname.toLowerCase().replace(/^m\.|^www\./, '');
                if (cfgHost && host.indexOf(cfgHost) !== -1) matched = true;
            } catch (eU) {}
        }
        if (matched) {
            detectedSite = kName;
            isKnownDomain = true;
            break;
        }
    }
    var currentSite = detectedSite;
    if (state.site !== detectedSite) saveState({ site: detectedSite }, false, false);

    if (isWebErrorPage) {
        window.__cholibiBridgeSend('WEB_LOAD_ERROR', {
            site: currentSite,
            badUrl: rawHref,
            reason: 'ERR_NAME_NOT_RESOLVED'
        });
    } else {
        window.__cholibiBridgeSend('SYNC_URL', { url: rawHref, site: currentSite });
    }

    function guardVan88UnwantedAutobankRedirect() {
        if (isWebErrorPage || currentSite !== 'VAN88') return false;
        var pathLower = (location.pathname || '').toLowerCase();
        var isOnAutobankOrDeposit = /\/autobank|\/deposit|\/recharge|\/nap-tien/i.test(pathLower);
        var isBeforeRegisterSubmit = !state.registrationSubmitted && (!state.currentStep || state.currentStep <= 1);

        if (isOnAutobankOrDeposit && isBeforeRegisterSubmit) {
            var now = Date.now();
            var bounceInfo = { count: 0, ts: 0 };
            try {
                bounceInfo = JSON.parse(sessionStorage.getItem(VAN88_BOUNCE_KEY) || '{"count":0,"ts":0}');
            } catch (e) {}
            if (now - bounceInfo.ts > 12000) {
                bounceInfo.count = 0;
            }
            if (bounceInfo.count < 2) {
                bounceInfo.count++;
                bounceInfo.ts = now;
                try { sessionStorage.setItem(VAN88_BOUNCE_KEY, JSON.stringify(bounceInfo)); } catch (e) {}
                clearSiteSessionKeepCholibi();
                var regUrl = location.origin + '/Register?a=44403';
                setTimeout(function() {
                    location.replace(regUrl);
                }, 150);
                return true;
            }
        }
        return false;
    }

    if (guardVan88UnwantedAutobankRedirect()) {
        return;
    }

    // Tự động hỗ trợ vượt cổng chờ nếu trang đứng ở tên miền rút gọn quá 4.5 giây
    if (/^(8nohu\.vip|1go99\.vip|1tt88\.vip|www\.789p1\.vip|789p1\.vip|www\.mmoo\.team|mmoo\.team)$/i.test(location.hostname)) {
        setTimeout(function() {
            var visibleInps = Array.from(document.querySelectorAll('input')).filter(function(el) {
                return !el.closest('#cb-panel') && el.offsetParent !== null;
            });
            if (visibleInps.length > 0) return;
            var bodyTxt = getCleanPageText();
            if (bodyTxt.length > 350) return;

            var jumpLinks = Array.from(document.querySelectorAll('a[href^="http"]')).filter(function(a) {
                return !a.closest('#cb-panel') && a.hostname !== location.hostname;
            });
            if (jumpLinks.length > 0 && jumpLinks[0].href) {
                location.href = jumpLinks[0].href;
                return;
            }
            // Nếu tên miền không có m. bị trắng trang, tự chuyển sang bản Mobile H5 m.<hostname>
            if (location.hostname.indexOf('m.') !== 0) {
                var cleanHost = location.hostname.replace(/^www\./i, '');
                var queryPart = location.search || '';
                if (queryPart.indexOf('app=1') === -1) {
                    queryPart = queryPart ? (queryPart + '&app=1') : '?app=1';
                }
                location.href = 'https://m.' + cleanHost + '/' + queryPart;
            }
        }, 4200);
    }

    var style = document.createElement('style');
    style.innerHTML = [
        '#cb-panel { position: fixed; top: 6px; left: 6px; width: 262px; max-width: calc(100vw - 12px); background: rgba(15,20,23,0.98); color: #e0e0e0; font-family: sans-serif; border-radius: 9px; border: 1.5px solid #1abc9c; box-shadow: 0 8px 24px rgba(0,0,0,0.92); z-index: 2147483646; overflow: hidden; font-size: 10px; user-select: none; -webkit-user-select: none; touch-action: manipulation; }',
        '.cb-header { background: linear-gradient(90deg, #0e4b37 0%, #11996b 100%); padding: 5px 7px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 10.5px; color: #fff; }',
        '.cb-site-btn { background: #0b1114; color: #1abc9c; border: 1px solid #1abc9c; border-radius: 4px; padding: 2px 6px; font-size: 10px; font-weight: bold; margin-left: 4px; cursor: pointer; }',
        '.cb-site-grid { display: none; grid-template-columns: repeat(4, 1fr); gap: 3px; background: #0c1215; padding: 5px; border-bottom: 1px solid #1abc9c; max-height: 165px; overflow-y: auto; }',
        '.cb-site-chip { background: #182227; border: 1px solid #2b3b43; color: #bdc3c7; border-radius: 4px; padding: 4px 2px; font-size: 9.5px; font-weight: bold; text-align: center; cursor: pointer; }',
        '.cb-site-chip.active { background: #11996b; border-color: #2ecc71; color: #fff; }',
        '.cb-idle-tag { font-size: 8.5px; color: #d1f2eb; background: rgba(0,0,0,0.3); padding: 1px 4px; border-radius: 3px; margin-left: 4px; font-weight: normal; }',
        '.cb-h-btns button { background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.3); color: #fff; border-radius: 4px; padding: 2px 7px; margin-left: 3px; font-size: 10.5px; font-weight: bold; cursor: pointer; }',
        '.cb-toast { display: none; background: #11996b; color: #fff; font-weight: bold; font-size: 9.5px; text-align: center; padding: 4px 6px; border-bottom: 1px solid #2ecc71; }',
        '.cb-body { padding: 6px; max-height: 73vh; overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; }',
        '.cb-auto-banner { display: none; width: 100%; background: linear-gradient(90deg, #f39c12, #e67e22); color: #111; font-weight: bold; text-align: center; padding: 4px; border-radius: 4px; font-size: 10px; margin-bottom: 5px; box-sizing: border-box; }',
        '.cb-dup-warn { display: none; width: 100%; background: #4a151b; border: 1px solid #e74c3c; color: #ffb8b8; padding: 4px 6px; border-radius: 5px; font-size: 9.5px; margin-bottom: 5px; box-sizing: border-box; line-height: 1.3; }',
        '.cb-err-banner { display: none; width: 100%; background: #3b1b0e; border: 1px solid #f39c12; color: #fdebd0; padding: 4px 6px; border-radius: 5px; font-size: 9.5px; margin-bottom: 5px; box-sizing: border-box; line-height: 1.3; }',
        '.cb-sec { background: #161c1f; border: 1px solid #242d33; border-radius: 6px; padding: 5px 6px; margin-bottom: 5px; }',
        '.cb-sec-title { font-size: 9.5px; color: #1abc9c; font-weight: bold; margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding: 1px 0; }',
        '.cb-sec.is-collapsed > :not(.cb-sec-title) { display: none !important; }',
        '.cb-sec.is-collapsed .cb-sec-title { margin-bottom: 0; }',
        '.cb-sec-title .cb-collapse-arrow { font-size: 9px; margin-left: 4px; color: #1abc9c; }',
        '.cb-field { display: flex; align-items: center; background: #0f1417; border: 1px solid #222c32; border-radius: 4px; padding: 2px 5px; margin-bottom: 3px; }',
        '.cb-field span { width: 58px; color: #95a5a6; font-size: 9px; font-weight: bold; }',
        '.cb-field input { flex: 1; background: transparent; border: none; color: #2ecc71; font-weight: bold; font-size: 10px; outline: none; padding: 2px 0; min-width: 0; }',
        '.cb-copy-chip { background: #1a262d; border: 1px solid #2e4350; color: #bdc3c7; font-size: 8.5px; border-radius: 3px; padding: 2px 5px; margin-left: 3px; cursor: pointer; }',
        '.cb-bank-bar { display: flex; flex-wrap: wrap; gap: 2px; margin: 2px 0 4px 0; }',
        '.cb-bank-chip { background: #131c21; border: 1px solid #283740; color: #1abc9c; font-size: 8px; font-weight: bold; border-radius: 3px; padding: 2px 4px; cursor: pointer; }',
        '.cb-mini-row { display: flex; gap: 3px; margin-top: 4px; }',
        '.cb-mini-btn { flex: 1; background: #1f262a; border: 1px solid #344047; color: #eee; padding: 5px 3px; border-radius: 4px; font-size: 9.2px; font-weight: bold; cursor: pointer; text-align: center; }',
        '.cb-mini-btn.primary { background: #1b6ca8; border-color: #3498db; color: #fff; }',
        '.cb-mini-btn.purple { background: #6c3483; border-color: #9b59b6; color: #fff; }',
        '.cb-mini-btn.teal { background: #0e7c61; border-color: #2ecc71; color: #fff; }',
        '.cb-mini-btn.orange { background: #c27d0e; border-color: #f39c12; color: #fff; }',
        '.cb-mini-btn.lock-on { background: #145a32; border-color: #2ecc71; color: #a9dfbf; }',
        '.cb-eye-btn { background: #1a2429; border: 1px solid #2c3e50; border-radius: 3px; color: #1abc9c; font-size: 9px; padding: 1px 5px; cursor: pointer; }',
        '.cb-step { width: 100%; text-align: left; background: rgba(26,188,156,0.08); border: 1px solid #1abc9c; color: #1abc9c; padding: 4px 7px; border-radius: 4px; margin-bottom: 3px; font-weight: 600; font-size: 9.5px; display: flex; align-items: center; gap: 4px; cursor: pointer; }',
        '.cb-step.done { background: rgba(46,204,113,0.25); color: #2ecc71; border-color: #2ecc71; }',
        '.cb-prog-wrap { background: #262e34; height: 4px; border-radius: 2px; overflow: hidden; margin: 4px 0; }',
        '.cb-prog-bar { background: #2ecc71; height: 100%; width: 0%; transition: width 0.25s; }',
        '.cb-controls { display: flex; gap: 4px; margin-top: 5px; }',
        '.cb-btn-run { flex: 1; background: linear-gradient(90deg, #0f9b6c, #16a085); border: 1px solid #2ecc71; color: #fff; padding: 6px; border-radius: 5px; font-weight: bold; font-size: 10.5px; cursor: pointer; }',
        '.cb-btn-stop { width: 32px; background: #4a1c1f; border: 1px solid #e74c3c; color: #ff8a8a; border-radius: 5px; font-weight: bold; cursor: pointer; }',
        '.cb-btn-reset { width: 32px; background: #1f262a; border: 1px solid #555; color: #ccc; border-radius: 5px; font-weight: bold; cursor: pointer; }',
        '.cb-log-box { background: #0a0d0f; border: 1px solid #20282d; border-radius: 4px; padding: 4px; height: 68px; overflow-y: auto; font-family: monospace; font-size: 9px; line-height: 1.35; color: #2ecc71; }',
        '.cb-hist-box { background: #0a0d0f; border: 1px solid #20282d; border-radius: 4px; padding: 4px; max-height: 78px; overflow-y: auto; font-size: 9px; line-height: 1.35; color: #bdc3c7; }',
        '.cb-hist-del { background: #4a1c1f; border: 1px solid #e74c3c; color: #ff9999; border-radius: 3px; font-size: 8px; padding: 0 4px; margin-left: 4px; cursor: pointer; float: right; }',
        '#cb-bubble { position: fixed; top: 120px; left: 8px; width: 40px; height: 40px; border-radius: 50%; background: radial-gradient(circle, #f39c12 0%, #d35400 100%); border: 2px solid #fff; box-shadow: 0 0 14px rgba(243,156,18,0.95); z-index: 2147483647; display: none; align-items: center; justify-content: center; font-size: 18px; color: #fff; cursor: pointer; touch-action: none; }',
        '#cb-bubble-badge { position: absolute; top: -6px; background: #1abc9c; color: #fff; font-size: 8px; font-weight: bold; padding: 1px 4px; border-radius: 5px; border: 1px solid #fff; display: none; }',
        '.cb-tap-flash { filter: brightness(1.45) !important; transform: scale(0.97); }'
    ].join('\n');
    document.head.appendChild(style);

    var flowLabels = {
        'FLOW_1': 'Luồng 1 (TT88 • 789P • MMOO • NOHU88 • GO99)',
        'FLOW_2': 'Luồng 2 (J88 • U888 • 8KBET)',
        'FLOW_3': 'Luồng 3 (AD88 • XX8)',
        'FLOW_4': 'Luồng 4 (CM88 • SC88 • C168)',
        'FLOW_5': 'Luồng 5 (78WIN • JUNV1)',
        'FLOW_6': 'Luồng 6 (JUNV2)',
        'FLOW_7': 'Luồng 7 (HI88 • SHBET • NEW88 • 789BET • F8BET)',
        'FLOW_8': 'Luồng 8 (VAN88 • MB66)'
    };
    var renderedFlows = {};
    var siteGridParts = [];
    for (var sIdxG = 0; sIdxG < SITE_KEYS.length; sIdxG++) {
        var kG = SITE_KEYS[sIdxG];
        var flG = (SITE_MAP[kG] && SITE_MAP[kG].flow) || 'CUSTOM';
        if (flG !== 'CUSTOM' && !renderedFlows[flG] && flowLabels[flG]) {
            renderedFlows[flG] = true;
            siteGridParts.push('<div style="grid-column:1/-1;font-size:8.5px;color:#f39c12;font-weight:bold;padding:2px 2px 1px 2px;border-bottom:1px dashed #24333c;margin-top:2px;">' + flowLabels[flG] + '</div>');
        }
        siteGridParts.push('<div class="cb-site-chip ' + (currentSite === kG ? 'active' : '') + '" data-site="' + kG + '" data-flow="' + flG + '">' + kG + '</div>');
    }
    siteGridParts.push('<div class="cb-site-chip" id="cb-add-custom-site-chip" style="grid-column: span 2; background:#145a32; border-color:#2ecc71; color:#fff;">➕ Học/Thêm Site Mới</div>');
    var siteGridHtml = siteGridParts.join('');

    var panel = document.createElement('div');
    panel.id = 'cb-panel';
    panel.innerHTML = [
        '<div class="cb-header">',
        '  <div style="display:flex;align-items:center;">🟡 CHOLIBI <button id="cb-site-drawer-btn" class="cb-site-btn">' + currentSite + ' ▼</button><span class="cb-idle-tag" id="cb-idle-tag">⏱40s</span></div>',
        '  <div class="cb-h-btns"><button id="cb-pos-btn" title="Đổi vị trí Đầu/Cuối">⇅</button><button id="cb-min-btn" title="Thu nhỏ">−</button></div>',
        '</div>',
        '<div class="cb-site-grid" id="cb-site-grid">' + siteGridHtml + '</div>',
        '<div class="cb-toast" id="cb-toast">✨ Sẵn sàng</div>',
        '<div class="cb-body" id="cb-body-scroll">',
        '  <div class="cb-auto-banner" id="cb-banner">🤖 AUTO PILOT ĐANG CHẠY LIÊN HOÀN</div>',
        '  <div class="cb-err-banner" id="cb-dns-warn">',
        '    ⚠️ Tên miền hiện tại bị nhà mạng chặn.<br>',
        '    <button class="cb-mini-btn primary" id="cb-switch-mirror" style="margin-top:3px;width:100%;">🔄 Đổi sang tên miền dự phòng</button>',
        '  </div>',
        '  <div class="cb-dup-warn" id="cb-history-warn"></div>',
        '  <div class="cb-sec">',
        '    <div class="cb-sec-title"><span>⚙️ TỰ ĐỘNG HÓA LIÊN HOÀN (<span id="cb-pct" style="color:#2ecc71">0%</span>)</span><span class="cb-collapse-arrow">▼</span></div>',
        '    <button class="cb-step" id="st-1" data-step="1"><span>⬜</span> 1. Đóng Popup + Mở ĐK + Điền Form</button>',
        '    <button class="cb-step" id="st-2" data-step="2"><span>⬜</span> 2. Vào Rút Tiền + Đặt PIN 123123</button>',
        '    <button class="cb-step" id="st-3" data-step="3"><span>⬜</span> 3. Chọn Bank + Chi Nhánh + STK + Gửi</button>',
        '    <button class="cb-step" id="st-4" data-step="4"><span>⬜</span> 4. Xác minh SĐT (Nhóm SC88/CM88)</button>',
        '    <div class="cb-prog-wrap"><div class="cb-prog-bar" id="cb-bar"></div></div>',
        '    <div id="cb-status" style="font-size:9.5px; color:#2ecc71; font-weight:bold;">⚪ Sẵn sàng (Bấm Chạy Auto)</div>',
        '    <button id="cb-otp-done" style="display:none;width:100%;margin-top:4px;padding:5px;background:#1f618d;color:white;border:1px solid #3498db;border-radius:4px;font-weight:bold;font-size:9.5px;">✅ ĐÃ XONG CAPTCHA/OTP — CHẠY TIẾP</button>',
        '    <div class="cb-controls">',
        '      <button class="cb-btn-run" id="cb-run">⚡ CHẠY AUTO TOÀN BỘ</button>',
        '      <button class="cb-btn-stop" id="cb-stop" title="Dừng">⏹</button>',
        '      <button class="cb-btn-reset" id="cb-reset" title="Xóa phiên cũ của web (Giữ nguyên phôi)">🔄</button>',
        '    </div>',
        '    <div class="cb-mini-row" style="margin-top:4px;">',
        '      <button class="cb-mini-btn orange" id="cb-smart-continue">🛠️ Đóng Popup & Tự Chạy Bước Tiếp Theo</button>',
        '    </div>',
        '  </div>',
        '  <div class="cb-sec">',
        '    <div class="cb-sec-title"><span><span class="cb-collapse-arrow">▼</span></span><button class="cb-eye-btn" id="cb-toggle-pw">👁️ MK</button></div>',
        '    <div class="cb-field"><span>👤 TK</span><input id="f-user" autocomplete="off" placeholder="Bấm 🎲 Đổi TK..."></div>',
        '    <div class="cb-field"><span>🔑 MK</span><input id="f-pw" type="password" autocomplete="off" placeholder="Mật khẩu..."></div>',
        '    <div class="cb-field"><span>🔒 MK RÚT</span><input id="f-wd" type="password" autocomplete="off" value="123123" placeholder="123123"></div>',
        '    <div class="cb-field"><span>🧑 HỌ TÊN</span><input id="f-name" autocomplete="off" placeholder="VIET HOA KHONG DAU"></div>',
        '    <div class="cb-field"><span>📱 SĐT</span><input id="f-phone" autocomplete="off" placeholder="098..."></div>',
        '    <div class="cb-field"><span>🏦 BANK</span><input id="f-bank" autocomplete="off" value="TECHCOMBANK" placeholder="TECHCOMBANK / VIKKI BANK"></div>',
        '    <div class="cb-bank-bar" id="cb-bank-bar">',
        '      <span class="cb-bank-chip" data-bank="CAKE">CAKE</span>',
        '      <span class="cb-bank-chip" data-bank="TECHCOMBANK">TCB</span>',
        '      <span class="cb-bank-chip" data-bank="VIKKI BANK">VIKKI</span>',
        '      <span class="cb-bank-chip" data-bank="MB BANK">MB</span>',
        '      <span class="cb-bank-chip" data-bank="ACB BANK">ACB</span>',
        '      <span class="cb-bank-chip" data-bank="VIETCOMBANK">VCB</span>',
        '      <span class="cb-bank-chip" data-bank="BIDV">BIDV</span>',
        '      <span class="cb-bank-chip" data-bank="VPBANK">VPB</span>',
        '    </div>',
        '    <div class="cb-field" style="display:none;"><span>🏢 C.NHÁNH</span><input id="f-branch" autocomplete="off" value="Ninh bình" placeholder="Ninh bình"></div>',
        '    <div class="cb-field"><span>💳 SỐ TK</span><input id="f-stk" autocomplete="off" placeholder="Số tài khoản ngân hàng..."></div>',
        '    <div class="cb-mini-row">',
        '      <button class="cb-mini-btn orange" id="cb-rand-user" style="width:100%;">🎲 Đổi TK Mới</button>',
        '    </div>',
        '  </div>',
        '  <div class="cb-sec is-collapsed">',
        '    <div class="cb-sec-title"><span>👑 PREMIUM+ OVERLAY, TRỢ NĂNG & PROXY</span><span class="cb-collapse-arrow">▶</span></div>',
        '    <div class="cb-field"><span>🌐 PROXY</span><input id="f-proxy" placeholder="ip:port:user:pass"></div>',
        '    <div id="cb-proxy-msg" style="font-size:9px;color:#2ecc71;margin:2px 0;">🌐 Đang kiểm tra IP...</div>',
        '    <div class="cb-mini-row">',
        '      <button class="cb-mini-btn orange" id="cb-toggle-overlay">🪟 Bật Bảng Nổi Đè App</button>',
        '      <button class="cb-mini-btn teal" id="cb-exec-a11y">🤖 Tự Điền A11y</button>',
        '    </div>',
        '    <div class="cb-mini-row">',
        '      <button class="cb-mini-btn primary" id="cb-apply-proxy">Kiểm & Copy Proxy</button>',
        '      <button class="cb-mini-btn purple" id="cb-copy-orbita-bm">📲 Copy Mã Orbita</button>',
        '      <button class="cb-mini-btn" id="cb-open-a11y">⚙️ Cài A11y</button>',
        '    </div>',
        '  </div>',
        '  <div class="cb-sec">',
        '    <div class="cb-sec-title"><span>📂 KHO LƯU TÀI KHOẢN & VÂN TAY (<span id="cb-hist-count">0</span>)</span><span class="cb-collapse-arrow">▼</span></div>',
        '    <div class="cb-mini-row" style="margin-bottom:4px;">',
        '      <button class="cb-mini-btn teal" id="cb-open-vault-modal">📂 Xem Kho TK Đầy Đủ</button>',
        '      <button class="cb-mini-btn primary" id="cb-save-cur-to-vault">💾 Lưu TK Này</button>',
        '    </div>',
        '    <div class="cb-hist-box" id="cb-hist-list">Chưa có tài khoản nào trong kho.</div>',
        '    <div class="cb-mini-row">',
        '      <button class="cb-mini-btn primary" id="cb-export-hist">📤 Copy Kho TK</button>',
        '      <button class="cb-mini-btn orange" id="cb-wipe-fp-now">🛡️ Máy Mới (Xóa Vân Tay)</button>',
        '    </div>',
        '    <div class="cb-mini-row">',
        '      <button class="cb-mini-btn lock-on" id="cb-toggle-autowipe">🧹 Tự Xóa Vân Tay Khi Xong/Thoát: BẬT</button>',
        '      <button class="cb-mini-btn" id="cb-clear-hist" style="flex:0.45;">🗑️ Xóa Kho</button>',
        '    </div>',
        '  </div>',
        '  <div class="cb-sec is-collapsed">',
        '    <div class="cb-sec-title"><span>📋 LOG HOẠT ĐỘNG</span><span class="cb-collapse-arrow">▶</span></div>',
        '    <div class="cb-log-box" id="cb-log"></div>',
        '  </div>',
        '</div>'
    ].join('\n');
    document.body.appendChild(panel);

    var bubble = document.createElement('div');
    bubble.id = 'cb-bubble';
    bubble.innerHTML = '<span id="cb-bubble-badge">AUTO</span>⚡';
    document.body.appendChild(bubble);

    var shieldEvents = ['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'click'];
    for (var se = 0; se < shieldEvents.length; se++) {
        panel.addEventListener(shieldEvents[se], function(ev) {
            ev.stopPropagation();
            resetIdleMinimizeTimer();
        }, false);
    }

    function showToast(msg) {
        var tEl = document.getElementById('cb-toast');
        if (!tEl) return;
        tEl.textContent = msg;
        tEl.style.display = 'block';
        if (toastHideTimer) clearTimeout(toastHideTimer);
        toastHideTimer = setTimeout(function() {
            tEl.style.display = 'none';
        }, 2500);
    }

    function bindFastTap(elOrId, handler) {
        var el = typeof elOrId === 'string' ? document.getElementById(elOrId) : elOrId;
        if (!el || !handler) return;
        var startX = 0, startY = 0, moved = false, lastFireTs = 0;
        var touchHandled = false;
        var touchResetTimer = null;

        el.addEventListener('touchstart', function(ev) {
            ev.stopPropagation();
            resetIdleMinimizeTimer();
            moved = false;
            if (ev.touches && ev.touches[0]) {
                startX = ev.touches[0].clientX;
                startY = ev.touches[0].clientY;
            }
            el.classList.add('cb-tap-flash');
        }, { passive: true });

        el.addEventListener('touchmove', function(ev) {
            if (ev.touches && ev.touches[0]) {
                if (Math.abs(ev.touches[0].clientX - startX) > 12 || Math.abs(ev.touches[0].clientY - startY) > 12) {
                    moved = true;
                    el.classList.remove('cb-tap-flash');
                }
            }
        }, { passive: true });

        el.addEventListener('touchend', function(ev) {
            ev.stopPropagation();
            el.classList.remove('cb-tap-flash');
            if (moved) return;
            touchHandled = true;
            if (touchResetTimer) clearTimeout(touchResetTimer);
            touchResetTimer = setTimeout(function() { touchHandled = false; }, 1000);
            var now = Date.now();
            if (now - lastFireTs < 320) return;
            lastFireTs = now;
            if (ev.cancelable) ev.preventDefault();
            handler.call(el, ev);
        }, false);

        el.addEventListener('click', function(ev) {
            ev.stopPropagation();
            el.classList.remove('cb-tap-flash');
            if (touchHandled) {
                touchHandled = false;
                if (touchResetTimer) { clearTimeout(touchResetTimer); touchResetTimer = null; }
                if (ev.cancelable) ev.preventDefault();
                return;
            }
            var now = Date.now();
            if (now - lastFireTs < 320) return;
            lastFireTs = now;
            handler.call(el, ev);
        }, false);
    }

    if (isWebErrorPage) {
        var dnsWarnEl = document.getElementById('cb-dns-warn');
        if (dnsWarnEl) dnsWarnEl.style.display = 'block';
    }

    bindFastTap('cb-switch-mirror', function() {
        showToast('🔄 Đang chuyển sang tên miền dự phòng...');
        window.__cholibiBridgeSend('ROTATE_MIRROR', { site: state.site || currentSite });
    });

    bindFastTap('cb-site-drawer-btn', function() {
        var grid = document.getElementById('cb-site-grid');
        if (!grid) return;
        var isOpen = grid.style.display === 'grid';
        grid.style.display = isOpen ? 'none' : 'grid';
    });

    // SỬA TRIỆT ĐỂ LỖI ĐIỀU HƯỚNG KÉP LÀM KẸT 3 CHẤM:
    // Nếu chạy trong App DroidScript (isInsideDroidScriptApp !== false), chỉ gửi lệnh NAVIGATE_SITE
    // để Native gọi web.LoadUrl(targetUrl) 1 lần duy nhất!
    var siteChips = panel.querySelectorAll('.cb-site-chip');
    for (var sc = 0; sc < siteChips.length; sc++) {
        bindFastTap(siteChips[sc], function() {
            var chosen = this.getAttribute('data-site');
            if (!chosen || !SITE_MAP[chosen]) return;
            cancelAllRunningTasks();
            var curData = getActiveData();
            saveState({
                site: chosen,
                data: curData,
                autoMode: false,
                currentStep: 0,
                registrationSubmitted: false,
                submittedUsername: '',
                withdrawPinSetInStep1: false,
                waitingOtp: false,
                usedBackupStk: false,
                retryUserCount: 0
            }, true, false);
            document.getElementById('cb-site-grid').style.display = 'none';
            siteUi();
            var targetUrl = SITE_MAP[chosen].url;
            showToast('🌐 Đang chuyển sang ' + chosen + '...');
            addLog('🌐 Chuyển sang ' + chosen + ' (Giữ nguyên phôi: ' + (curData.name || '') + ') -> ' + targetUrl);
            window.__cholibiBridgeSend('NAVIGATE_SITE', { site: chosen, url: targetUrl });
            if (isInsideDroidScriptApp === false) {
                setTimeout(function() {
                    try { window.top.location.href = targetUrl; } catch (e) { window.location.href = targetUrl; }
                }, 150);
            }
        });
    }

    var bankChips = panel.querySelectorAll('.cb-bank-chip');
    for (var bc = 0; bc < bankChips.length; bc++) {
        bindFastTap(bankChips[bc], function() {
            var chosenBank = this.getAttribute('data-bank');
            var bankInp = document.getElementById('f-bank');
            if (bankInp && chosenBank) {
                bankInp.value = chosenBank;
                var d = getActiveData();
                saveState({ data: d }, true, true, ['bank']);
                showToast('🏦 Đã khóa ngân hàng: ' + chosenBank);
                addLog('🏦 Chọn & khóa ngân hàng: ' + chosenBank);
            }
        });
    }

    var copyChips = panel.querySelectorAll('.cb-copy-chip');
    for (var cc = 0; cc < copyChips.length; cc++) {
        bindFastTap(copyChips[cc], function() {
            var targetId = this.getAttribute('data-copy');
            var inputEl = document.getElementById(targetId);
            if (!inputEl || !inputEl.value) {
                showToast('⚠️ Ô này đang trống!');
                return;
            }
            var val = inputEl.value.trim();
            window.__cholibiBridgeSend('COPY_TEXT_CLIPBOARD', { text: val, label: targetId });
            if (navigator.clipboard && navigator.clipboard.writeText) {
                try { navigator.clipboard.writeText(val); } catch (e) {}
            }
            showToast('📋 Đã copy: ' + (targetId === 'f-pw' || targetId === 'f-wd' ? '******' : val));
            addLog('📋 Đã copy nhanh: ' + (targetId === 'f-pw' || targetId === 'f-wd' ? '******' : val));
        });
    }

    var bubbleDragged = false;
    var dragStartX = 0, dragStartY = 0;
    bubble.addEventListener('touchstart', function(ev) {
        ev.stopPropagation();
        if (!ev.touches || !ev.touches[0]) return;
        bubbleDragged = false;
        dragStartX = ev.touches[0].clientX - bubble.offsetLeft;
        dragStartY = ev.touches[0].clientY - bubble.offsetTop;
    }, { passive: true });

    bubble.addEventListener('touchmove', function(ev) {
        ev.stopPropagation();
        if (!ev.touches || !ev.touches[0]) return;
        bubbleDragged = true;
        var nextX = Math.max(4, Math.min(window.innerWidth - 44, ev.touches[0].clientX - dragStartX));
        var nextY = Math.max(4, Math.min(window.innerHeight - 44, ev.touches[0].clientY - dragStartY));
        bubble.style.left = nextX + 'px';
        bubble.style.top = nextY + 'px';
    }, { passive: true });

    bubble.addEventListener('touchend', function(ev) {
        ev.stopPropagation();
        if (!bubbleDragged) {
            restorePanel();
        }
        bubbleDragged = false;
    }, false);

    bubble.addEventListener('click', function(ev) {
        ev.stopPropagation();
        if (!bubbleDragged) {
            restorePanel();
        }
        bubbleDragged = false;
    }, false);

    function updateIdleTagText() {
        var tagEl = document.getElementById('cb-idle-tag');
        if (tagEl) {
            tagEl.textContent = '⏱' + idleSecondsLeft + 's';
        }
    }

    function clearIdleMinimizeTimer() {
        if (idleMinimizeTimer) {
            clearTimeout(idleMinimizeTimer);
            idleMinimizeTimer = null;
        }
        if (idleCountdownInterval) {
            clearInterval(idleCountdownInterval);
            idleCountdownInterval = null;
        }
    }

    function resetIdleMinimizeTimer() {
        clearIdleMinimizeTimer();
        idleSecondsLeft = Math.round(IDLE_AUTO_MINIMIZE_MS / 1000);
        updateIdleTagText();

        idleCountdownInterval = setInterval(function() {
            if (!panel || panel.style.display === 'none') return;
            if (idleSecondsLeft > 1) {
                idleSecondsLeft--;
                updateIdleTagText();
            }
        }, 1000);

        idleMinimizeTimer = setTimeout(function() {
            if (panel && panel.style.display !== 'none') {
                minimizeToBubble(state.autoMode);
            }
        }, IDLE_AUTO_MINIMIZE_MS);
    }

    var bodyScrollEl = document.getElementById('cb-body-scroll');
    if (bodyScrollEl) {
        bodyScrollEl.addEventListener('scroll', resetIdleMinimizeTimer, { passive: true });
    }
    resetIdleMinimizeTimer();

    var foldableSections = panel.querySelectorAll('.cb-sec');
    for (var secIndex = 0; secIndex < foldableSections.length; secIndex++) {
        (function(section, index) {
            var title = section.querySelector('.cb-sec-title');
            if (!title) return;
            bindFastTap(title, function(ev) {
                if (ev && ev.target && ev.target.closest && ev.target.closest('button, input')) return;
                section.classList.toggle('is-collapsed');
                var arrow = title.querySelector('.cb-collapse-arrow');
                if (arrow) arrow.textContent = section.classList.contains('is-collapsed') ? '▶' : '▼';
                try {
                    state.collapsed = state.collapsed || {};
                    state.collapsed[index] = section.classList.contains('is-collapsed');
                    saveState({ collapsed: state.collapsed }, false, false);
                } catch (e) {}
            });
            if (state.collapsed && typeof state.collapsed[index] === 'boolean') {
                section.classList.toggle('is-collapsed', state.collapsed[index]);
            }
            var arrow = title.querySelector('.cb-collapse-arrow');
            if (arrow) arrow.textContent = section.classList.contains('is-collapsed') ? '▶' : '▼';
        })(foldableSections[secIndex], secIndex);
    }

    var sleep = function(ms) { return new Promise(function(r) { setTimeout(r, ms); }); };

    function maskSensitiveLog(text) {
        var out = String(text || '');
        var curPw = (state.data && state.data.pw) ? state.data.pw : '';
        var curWd = (state.data && state.data.wd) ? state.data.wd : '';
        if (curPw && curPw.length >= 4) {
            out = out.split(curPw).join('******');
        }
        if (curWd && curWd.length >= 4) {
            out = out.split(curWd).join('******');
        }
        return out;
    }

    function renderLogEntries() {
        var box = document.getElementById('cb-log');
        if (!box) return;
        box.textContent = '';
        var list = Array.isArray(state.logEntries) ? state.logEntries : [];
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var line = document.createElement('div');
            var ts = document.createElement('span');
            ts.style.color = '#666';
            ts.textContent = item.ts || '';
            line.appendChild(ts);
            line.appendChild(document.createTextNode(' [' + (item.site || currentSite) + '] ' + (item.msg || '')));
            box.appendChild(line);
        }
        box.scrollTop = box.scrollHeight;
    }

    function addLog(text) {
        var safeText = maskSensitiveLog(text);
        var now = new Date().toTimeString().split(' ')[0];
        var sName = state.site || currentSite;
        var list = Array.isArray(state.logEntries) ? state.logEntries.slice(-59) : [];
        list.push({ ts: now, site: sName, msg: safeText });
        saveState({ logEntries: list }, false, false);
        renderLogEntries();
    }
    window.__cholibiLog = addLog;

    // ============================================================================
    // MODULE: SLIDER CAPTCHA SOLVER v2.0 - STRICT EDITION (CORS BYPASS + WEBVIEW TOUCH)
    // Tác giả: CHOLIBI
    // Nguyên tắc: KHÔNG ĐOÁN MÒ — Verify từng bước, vượt rào CORS qua Native Bridge,
    //            tính chuẩn tỷ lệ Track Padding, bắn đa sự kiện Touch/Pointer cho WebView.
    // ============================================================================
    var pendingImageB64Callbacks = {};
    window.__cholibiOnImageB64 = function(reqId, dataUri) {
        var cb = pendingImageB64Callbacks[reqId];
        if (cb) {
            delete pendingImageB64Callbacks[reqId];
            cb(dataUri || '');
        }
    };
    window.__cholibiFetchImageB64 = function(imgUrl, timeoutMs) {
        return new Promise(function(resolve) {
            if (!imgUrl || /^data:/i.test(imgUrl)) {
                resolve(imgUrl || '');
                return;
            }
            var reqId = 'img_' + Date.now() + '_' + Math.floor(Math.random() * 100000);
            var timer = setTimeout(function() {
                if (pendingImageB64Callbacks[reqId]) {
                    delete pendingImageB64Callbacks[reqId];
                    resolve('');
                }
            }, timeoutMs || 4500);
            pendingImageB64Callbacks[reqId] = function(dataUri) {
                clearTimeout(timer);
                resolve(dataUri || '');
            };
            try {
                window.__cholibiBridgeSend('FETCH_IMAGE_B64', { reqId: reqId, url: imgUrl });
            } catch (e) {
                clearTimeout(timer);
                delete pendingImageB64Callbacks[reqId];
                resolve('');
            }
        });
    };

    (function() {
        'use strict';

        if (window.__cholibiSliderSolver && window.__cholibiSliderSolver.version === '2.1') {
            window.__cholibiSliderSolverV2 = window.__cholibiSliderSolver;
            return;
        }

        var CFG = {
            MAX_RETRY: 2,                    // Số lần retry nếu fail
            RETRY_COOLDOWN_MS: 2200,         // Chờ giữa 2 lần retry (tránh spam)
            IMAGE_LOAD_TIMEOUT_MS: 5000,     // Chờ ảnh load tối đa
            VERIFY_TIMEOUT_MS: 6500,         // Chờ kết quả verify từ server
            VERIFY_POLL_INTERVAL_MS: 250,    // Tần suất poll verify
            NATIVE_DRAG_TIMEOUT_MS: 2400,    // Timeout chờ AccessibilityService.dispatchGesture()
            DRAG_STEPS_MIN: 32,              // Số bước kéo tối thiểu
            DRAG_STEPS_MAX: 48,              // Số bước kéo tối đa
            DRAG_STEP_DELAY_MS_MIN: 12,      // Delay giữa các bước
            DRAG_STEP_DELAY_MS_MAX: 22,
            JITTER_PX: 1.5,                  // Nhiễu ngang (rung tay)
            JITTER_Y_PX: 1.2,                // Nhiễu dọc (người thật không kéo thẳng tuyệt đối)
            OVERSHOOT_PX_MIN: 2,             // Kéo quá đích tối thiểu
            OVERSHOOT_PX_MAX: 5,             // Kéo quá đích tối đa
            MIN_GAP_X: 35,                   // Vùng khuyết không bao giờ ở < 35px đầu
            MAX_GAP_X_RATIO: 0.92,           // Và không vượt quá 92% chiều rộng ảnh
            MIN_CONFIDENCE: 0.22,            // Ngưỡng tự tin tối thiểu để dám kéo (hỗ trợ cả ảnh puzzle CM88/SC88)
            MIN_CANVAS_WIDTH: 140,           // Ảnh captcha hợp lệ trên mobile (>= 140px)
            MIN_CANVAS_HEIGHT: 70
        };

        var STATE = {
            solving: false,
            internalRunId: 0,
            attemptCount: 0,
            lastSolveTs: 0
        };

        // FIX #6 — cancel() race condition: chỉ tăng internalRunId, KHÔNG set solving = false trực tiếp
        function cancel() {
            STATE.internalRunId++;
        }

        // FIX #7 — Kết nối trực tiếp với currentRunId của CHOLIBI và internalRunId của module
        function isCancelled(myCholibiRunId, myInternalRunId) {
            if (typeof currentRunId !== 'undefined' && myCholibiRunId !== undefined && currentRunId !== myCholibiRunId) {
                return true;
            }
            if (typeof stepCancelRequested !== 'undefined' && stepCancelRequested) {
                return true;
            }
            return STATE.internalRunId !== myInternalRunId;
        }

        function log(level, msg, extra) {
            var prefix = '[SliderSolver][' + level + '] ';
            var full = prefix + msg + (extra ? ' ' + JSON.stringify(extra) : '');
            if (typeof window.__cholibiLog === 'function') {
                window.__cholibiLog('🤖 ' + msg);
            } else if (typeof console !== 'undefined' && console.log) {
                console.log(full);
            }
        }

        function sleep(ms) {
            return new Promise(function(r) { setTimeout(r, ms); });
        }

        function randBetween(min, max) {
            return min + Math.random() * (max - min);
        }

        function randInt(min, max) {
            return Math.floor(randBetween(min, max + 1));
        }

        function isVisible(el) {
            if (!el || !el.getBoundingClientRect) return false;
            if (el.closest && (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock'))) return false;
            var style = window.getComputedStyle(el);
            if (!style) return false;
            if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
                return false;
            }
            var r = el.getBoundingClientRect();
            return r.width > 4 && r.height > 4 && r.bottom > 0 && r.right > 0 &&
                   r.top < window.innerHeight && r.left < window.innerWidth;
        }

        var CONTAINER_SELECTORS = [
            '.geetest_panel_box', '.geetest_widget', '.geetest_holder',
            '.yidun', '.yidun_modal', '.yidun--light',
            '.tcaptcha-transform', '#tcaptcha_transform_dy', '.tc-fg-item',
            '.nc-container', '#nc_1_wrapper',
            '.verifybox', '.verify-wrap', '.slide-verify', '.slider-captcha', '.captcha-modal', '.captcha-box',
            '.puzzle-container', '.vue-puzzle-vcode', '[class*="puzzle" i]',
            '[class*="captcha" i]', '[class*="verify" i]', '.van-popup', '.van-dialog', '.el-dialog', '.ant-modal', '[role="dialog"]'
        ];

        var SLIDER_BTN_SELECTORS = [
            '.geetest_slider_button',
            '.yidun_slider',
            '.tc-fg-item.tc-slider-normal', '#tcaptcha_drag_thumb',
            '.nc_iconfont.btn_slide', '.btn_slide',
            '.verify-move-block', '.verify-Left-bar .verify-move-block', '.slider-Verify-btn',
            '.slide-verify-slider-mask-item',
            '.slider-btn', '.slider-button', '.slide-btn', '.handler', '.range-btn',
            '[class*="slider-btn" i]', '[class*="slider_btn" i]', '[class*="slider_button" i]',
            '[class*="move-block" i]', '[class*="drag-btn" i]', '[class*="drag_btn" i]',
            '[class*="slider-mask-item" i]', '[class*="slide-block" i]'
        ];

        var REFRESH_BTN_SELECTORS = [
            '.geetest_refresh_1', '.geetest_refresh',
            '.yidun_refresh',
            '.tc-action-icon[ title*="Làm mới" ]', '#reload',
            '.verify-refresh', '.slide-verify-refresh-icon',
            '.captcha-refresh', '[class*="refresh" i]'
        ];

        function extractBgUrlFromElement(el) {
            if (!el) return '';
            if (el.tagName === 'IMG') return el.currentSrc || el.src || '';
            try {
                var st = window.getComputedStyle(el);
                var bgImg = st ? (st.backgroundImage || '') : '';
                var m = bgImg.match(/url\(["']?([^"')]+)["']?\)/i);
                return m ? m[1] : '';
            } catch (e) {
                return '';
            }
        }

        // FIX #1 — Dedup DOM element chuẩn bằng Map (giữ nguyên reference của HTMLElement)
        function dedupCandidates(list) {
            var seen = new Map();
            for (var i = 0; i < list.length; i++) {
                var c = list[i];
                var prev = seen.get(c.container);
                if (!prev || prev.score < c.score) {
                    seen.set(c.container, c);
                }
            }
            return Array.from(seen.values());
        }

        function findCaptchaCandidates() {
            var candidates = [];

            // Chặn CAPTCHA chọn hình theo thứ tự (Tencent / Click-order) để không kéo nhầm
            var pageTxt = getCleanPageText();
            if (/chọn theo thứ tự này|chọn theo thứ tự|nhấp theo thứ tự|click in order/i.test(pageTxt)) {
                return [];
            }

            var containers = [];
            for (var i = 0; i < CONTAINER_SELECTORS.length; i++) {
                var found = document.querySelectorAll(CONTAINER_SELECTORS[i]);
                for (var j = 0; j < found.length; j++) {
                    if (isVisible(found[j])) containers.push(found[j]);
                }
            }
            if (containers.length === 0) {
                containers.push(document.body);
            }

            for (var cIdx = 0; cIdx < containers.length; cIdx++) {
                var root = containers[cIdx];

                var btn = null;
                for (var bIdx = 0; bIdx < SLIDER_BTN_SELECTORS.length; bIdx++) {
                    var b = root.querySelector(SLIDER_BTN_SELECTORS[bIdx]);
                    if (b && isVisible(b)) {
                        var br = b.getBoundingClientRect();
                        if (br.width >= 20 && br.width <= 110 && br.height >= 20 && br.height <= 90) {
                            btn = b;
                            break;
                        }
                    }
                }
                if (!btn) {
                    var hintEls = Array.from(root.querySelectorAll('div, span, p')).filter(function(el) {
                        if (!isVisible(el) || el.children.length > 5) return false;
                        var t = (el.innerText || el.textContent || '').trim();
                        return /trượt để hoàn thành|kéo thanh trượt|trượt sang phải|kéo sang phải|hoàn thành trò đố|hoàn thành ghép hình|slide to/i.test(t);
                    });
                    if (hintEls.length > 0) {
                        var searchAncestors = [
                            hintEls[0].closest('.verify-bar-area, .slider-track, .slide-verify-slider, [class*="slider" i], [class*="track" i], [class*="bar" i]'),
                            hintEls[0].parentElement,
                            hintEls[0].parentElement ? hintEls[0].parentElement.parentElement : null,
                            root
                        ];
                        for (var aIdx = 0; aIdx < searchAncestors.length && !btn; aIdx++) {
                            var trackCand = searchAncestors[aIdx];
                            if (!trackCand) continue;
                            var tr = hintEls[0].parentElement ? hintEls[0].parentElement.getBoundingClientRect() : trackCand.getBoundingClientRect();
                            var subDivs = trackCand.querySelectorAll('div, span, button, i');
                            for (var sd = 0; sd < subDivs.length; sd++) {
                                var sEl = subDivs[sd];
                                if (!isVisible(sEl) || sEl === hintEls[0] || sEl.contains(hintEls[0])) continue;
                                var sr = sEl.getBoundingClientRect();
                                if (sr.width >= 24 && sr.width <= 95 && sr.height >= 22 && sr.height <= 80 &&
                                    Math.abs(sr.left - tr.left) <= 35 && Math.abs(sr.top - tr.top) <= 30) {
                                    btn = sEl;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (!btn) continue;

                var media = [];
                var mediaNodes = root.querySelectorAll('canvas, img');
                for (var m = 0; m < mediaNodes.length; m++) {
                    if (isVisible(mediaNodes[m])) media.push(mediaNodes[m]);
                }
                if (media.length === 0) {
                    var bgDivs = root.querySelectorAll('div');
                    for (var bd = 0; bd < bgDivs.length; bd++) {
                        if (isVisible(bgDivs[bd]) && extractBgUrlFromElement(bgDivs[bd])) {
                            media.push(bgDivs[bd]);
                        }
                    }
                }
                if (media.length === 0) continue;

                var bg = null;
                var slice = null;

                for (var k = 0; k < media.length; k++) {
                    var el = media[k];
                    var r = el.getBoundingClientRect();
                    if (r.width >= CFG.MIN_CANVAS_WIDTH && r.height >= CFG.MIN_CANVAS_HEIGHT) {
                        if (!bg || (r.width * r.height) > (bg.getBoundingClientRect().width * bg.getBoundingClientRect().height)) {
                            bg = el;
                        }
                    }
                }
                if (!bg) continue;

                var bgRect = bg.getBoundingClientRect();

                for (var s = 0; s < media.length; s++) {
                    var sEl2 = media[s];
                    if (sEl2 === bg) continue;
                    var sr2 = sEl2.getBoundingClientRect();
                    var reasonableSize = sr2.width >= 28 && sr2.width <= bgRect.width * 0.45 &&
                                         sr2.height >= 28 && sr2.height <= bgRect.height * 1.05;
                    var overlapsVertically = sr2.bottom > bgRect.top && sr2.top < bgRect.bottom;
                    if (reasonableSize && overlapsVertically) {
                        slice = sEl2;
                        break;
                    }
                }

                var track = btn.parentElement;
                while (track && track !== root && track.getBoundingClientRect().width < bgRect.width * 0.6) {
                    track = track.parentElement;
                }

                var refreshBtn = null;
                for (var rIdx = 0; rIdx < REFRESH_BTN_SELECTORS.length; rIdx++) {
                    var rf = root.querySelector(REFRESH_BTN_SELECTORS[rIdx]);
                    if (rf && isVisible(rf)) { refreshBtn = rf; break; }
                }

                var score = 0;
                if (bg.tagName === 'CANVAS') score += 30;
                if (slice) score += 25;
                if (track && Math.abs(track.getBoundingClientRect().width - bgRect.width) < 40) score += 25;
                if (root !== document.body) score += 20;

                candidates.push({
                    container: root,
                    bg: bg,
                    slice: slice,
                    btn: btn,
                    sliderBtn: btn,
                    track: track || btn.parentElement,
                    refreshBtn: refreshBtn,
                    score: score
                });
            }

            candidates.sort(function(a, b) { return b.score - a.score; });
            return dedupCandidates(candidates);
        }

        function waitForImageReady(el, timeoutMs) {
            return new Promise(function(resolve, reject) {
                var deadline = Date.now() + timeoutMs;

                function check() {
                    if (!el || !document.body.contains(el)) {
                        return reject(new Error('Element đã bị xóa khỏi DOM'));
                    }
                    if (el.tagName === 'CANVAS') {
                        if (el.width > 0 && el.height > 0) return resolve(true);
                    } else if (el.tagName === 'IMG') {
                        if (el.complete && el.naturalWidth > 0 && el.naturalHeight > 0) {
                            return resolve(true);
                        }
                    } else if (extractBgUrlFromElement(el)) {
                        return resolve(true);
                    }
                    if (Date.now() > deadline) {
                        return reject(new Error('Timeout chờ ảnh captcha load'));
                    }
                    setTimeout(check, 100);
                }
                check();
            });
        }

        function loadImgFromSrc(srcUrl, useAnonymous) {
            return new Promise(function(resolve, reject) {
                var im = new Image();
                if (useAnonymous && !/^data:/i.test(srcUrl)) {
                    im.crossOrigin = 'anonymous';
                }
                var t = setTimeout(function() {
                    reject(new Error('Timeout load image'));
                }, 4000);
                im.onload = function() {
                    clearTimeout(t);
                    resolve(im);
                };
                im.onerror = function(e) {
                    clearTimeout(t);
                    reject(e || new Error('Image load error'));
                };
                im.src = srcUrl;
            });
        }

        async function toCanvasWithCorsBypass(el) {
            var c = document.createElement('canvas');
            if (el.tagName === 'CANVAS') {
                c.width = el.width;
                c.height = el.height;
                var ctx0 = c.getContext('2d', { willReadFrequently: true });
                ctx0.drawImage(el, 0, 0);
                try {
                    var testData0 = ctx0.getImageData(0, 0, Math.min(10, c.width), Math.min(10, c.height)).data;
                    var nonZero0 = false;
                    for (var i0 = 0; i0 < testData0.length; i0++) {
                        if (testData0[i0] !== 0) { nonZero0 = true; break; }
                    }
                    if (!nonZero0) throw new Error('Canvas rỗng');
                    return { canvas: c, ctx: ctx0 };
                } catch (errCanvas) {
                    throw new Error('Không đọc được pixel Canvas (CORS): ' + (errCanvas && errCanvas.message ? errCanvas.message : errCanvas));
                }
            }

            var r = el.getBoundingClientRect();
            var w = (el.naturalWidth && el.naturalWidth > 0) ? el.naturalWidth : Math.round(r.width);
            var h = (el.naturalHeight && el.naturalHeight > 0) ? el.naturalHeight : Math.round(r.height);
            c.width = w;
            c.height = h;
            var ctx = c.getContext('2d', { willReadFrequently: true });

            if (el.tagName === 'IMG') {
                try {
                    ctx.drawImage(el, 0, 0, w, h);
                    ctx.getImageData(0, 0, 1, 1);
                    return { canvas: c, ctx: ctx };
                } catch (corsErr1) {
                    log('WARN', 'Ảnh IMG bị chặn CORS trực tiếp -> Đang vượt rào CORS...');
                }
            }

            var imgUrl = extractBgUrlFromElement(el);
            if (!imgUrl) {
                throw new Error('Không tìm thấy URL ảnh captcha để xử lý CORS');
            }

            if (!/^data:/i.test(imgUrl)) {
                try {
                    var anonImg = await loadImgFromSrc(imgUrl, true);
                    c.width = anonImg.naturalWidth || w;
                    c.height = anonImg.naturalHeight || h;
                    ctx = c.getContext('2d', { willReadFrequently: true });
                    ctx.drawImage(anonImg, 0, 0, c.width, c.height);
                    ctx.getImageData(0, 0, 1, 1);
                    return { canvas: c, ctx: ctx };
                } catch (corsErr2) {
                    log('WARN', 'Header CORS máy chủ chặn anonymous -> Chuyển sang tải Base64 qua Native Bridge...');
                }
            }

            var b64DataUri = await window.__cholibiFetchImageB64(imgUrl, 4500);
            if (b64DataUri && /^data:image/i.test(b64DataUri)) {
                var b64Img = await loadImgFromSrc(b64DataUri, false);
                c.width = b64Img.naturalWidth || w;
                c.height = b64Img.naturalHeight || h;
                ctx = c.getContext('2d', { willReadFrequently: true });
                ctx.drawImage(b64Img, 0, 0, c.width, c.height);
                ctx.getImageData(0, 0, 1, 1);
                log('INFO', 'Đã vượt rào CORS thành công qua Native Base64 Bridge!');
                return { canvas: c, ctx: ctx };
            }

            throw new Error('Bị chặn bởi CORS (Tainted Canvas) — không thể đọc pixel ảnh');
        }

        // FIX #3 — Quét 5 hàng ngang, yêu cầu >= 3/5 hàng đồng ý cùng 1 bucket ±5px (chống nhận nhầm viền/nhiễu)
        function tryEdgeDetectGap(bgCanvas, bgCtx) {
            var w = bgCanvas.width, h = bgCanvas.height;
            var data;
            try {
                var context = bgCtx || bgCanvas.getContext('2d', { willReadFrequently: true });
                data = context.getImageData(0, 0, w, h).data;
            } catch (e) {
                return null;
            }

            var scanYs = [0.3, 0.4, 0.5, 0.6, 0.7].map(function(p) { return Math.floor(h * p); });
            var buckets = {}; // bucket (làm tròn 5px) -> số hàng vote

            for (var yi = 0; yi < scanYs.length; yi++) {
                var y = scanYs[yi], maxD = 0, maxX = 0;
                for (var x = Math.floor(w * 0.15); x < Math.floor(w * 0.92); x++) {
                    var i0 = (y * w + x) * 4, i1 = (y * w + x - 1) * 4;
                    var d = Math.abs(data[i0] - data[i1]) +
                            Math.abs(data[i0 + 1] - data[i1 + 1]) +
                            Math.abs(data[i0 + 2] - data[i1 + 2]);
                    if (d > maxD && d > 55) {
                        maxD = d;
                        maxX = x;
                    }
                }
                if (maxX > 0) {
                    var b = Math.round(maxX / 5) * 5;
                    buckets[b] = (buckets[b] || 0) + 1;
                }
            }

            // Yêu cầu >= 3/5 hàng đồng ý (giảm false positive)
            var best = { x: -1, votes: 0 };
            for (var bk in buckets) {
                var bkNum = parseInt(bk, 10);
                var combinedVotes = (buckets[bkNum] || 0) + (buckets[bkNum - 5] || 0) * 0.5 + (buckets[bkNum + 5] || 0) * 0.5;
                if (buckets[bkNum] > best.votes || (buckets[bkNum] === best.votes && combinedVotes > best.votes)) {
                    best = { x: bkNum, votes: buckets[bkNum] };
                }
            }
            if (best.votes < 3) return null;
            return { dist: best.x, confidence: Number((best.votes / 5).toFixed(3)) };
        }

        function analyzeGapByEdge(bgCanvas, bgCtx, sliceRect, bgRect) {
            var W = bgCanvas.width;
            var H = bgCanvas.height;
            var imgData = bgCtx.getImageData(0, 0, W, H).data;

            var yStart = Math.floor(H * 0.12);
            var yEnd   = Math.floor(H * 0.88);
            if (sliceRect && bgRect && bgRect.height > 0) {
                var scaleY = H / bgRect.height;
                var relTop = Math.max(0, (sliceRect.top - bgRect.top) * scaleY);
                var relH   = Math.min(H - relTop, sliceRect.height * scaleY);
                if (relH >= 20) {
                    yStart = Math.max(2, Math.floor(relTop + relH * 0.1));
                    yEnd   = Math.min(H - 2, Math.floor(relTop + relH * 0.9));
                }
            }

            var xMin = Math.max(CFG.MIN_GAP_X, Math.floor(W * 0.15));
            var xMax = Math.floor(W * CFG.MAX_GAP_X_RATIO);
            if (xMax <= xMin + 20) {
                return { x: 0, confidence: 0, reason: 'Kích thước vùng quét không hợp lệ' };
            }

            var gray = new Float32Array(W * H);
            for (var y = 0; y < H; y++) {
                for (var x = 0; x < W; x++) {
                    var p = (y * W + x) * 4;
                    gray[y * W + x] = 0.299 * imgData[p] + 0.587 * imgData[p + 1] + 0.114 * imgData[p + 2];
                }
            }

            var colScore = new Float32Array(W);
            var rowCount = Math.max(1, yEnd - yStart);

            for (var xCol = xMin; xCol < xMax; xCol++) {
                var edgeSum = 0;
                var darkBoostSum = 0;

                for (var yRow = yStart; yRow < yEnd; yRow++) {
                    var gx = -gray[(yRow - 1) * W + (xCol - 1)] + gray[(yRow - 1) * W + (xCol + 1)]
                             - 2 * gray[yRow * W + (xCol - 1)]   + 2 * gray[yRow * W + (xCol + 1)]
                             - gray[(yRow + 1) * W + (xCol - 1)] + gray[(yRow + 1) * W + (xCol + 1)];

                    var absGx = Math.abs(gx);
                    edgeSum += absGx;

                    var leftLum = gray[yRow * W + Math.max(0, xCol - 2)];
                    var rightLum = gray[yRow * W + Math.min(W - 1, xCol + 3)];
                    if (leftLum - rightLum > 18) {
                        darkBoostSum += (leftLum - rightLum) * 1.6;
                    }
                }

                colScore[xCol] = (edgeSum + darkBoostSum) / rowCount;
            }

            var smoothed = new Float32Array(W);
            for (var xs = xMin + 2; xs < xMax - 2; xs++) {
                smoothed[xs] = (
                    colScore[xs - 2] * 1 +
                    colScore[xs - 1] * 2 +
                    colScore[xs]     * 3 +
                    colScore[xs + 1] * 2 +
                    colScore[xs + 2] * 1
                ) / 9;
            }

            var bestX = 0, bestVal = -1;
            var sumVal = 0, countVal = 0;
            for (var xi = xMin; xi < xMax; xi++) {
                var v = smoothed[xi];
                sumVal += v;
                countVal++;
                if (v > bestVal) {
                    bestVal = v;
                    bestX = xi;
                }
            }

            var secondVal = -1;
            var minDistFromPeak = Math.max(25, Math.floor(W * 0.12));
            for (var xj = xMin; xj < xMax; xj++) {
                if (Math.abs(xj - bestX) < minDistFromPeak) continue;
                if (smoothed[xj] > secondVal) {
                    secondVal = smoothed[xj];
                }
            }

            var meanVal = countVal > 0 ? (sumVal / countVal) : 1;
            var ratioVsSecond = secondVal > 0 ? (bestVal - secondVal) / bestVal : 0;
            var ratioVsMean   = meanVal > 0 ? (bestVal - meanVal) / bestVal : 0;
            var confidence = Math.max(0, Math.min(1, ratioVsSecond * 0.65 + ratioVsMean * 0.35));

            return {
                x: bestX,
                confidence: Number(confidence.toFixed(3)),
                peak: Number(bestVal.toFixed(1)),
                secondPeak: Number(secondVal.toFixed(1)),
                mean: Number(meanVal.toFixed(1))
            };
        }

        function analyzeGapByTemplate(bgCanvas, bgCtx, sliceCanvas, sliceCtx) {
            var W = bgCanvas.width, H = bgCanvas.height;
            var sW = sliceCanvas.width, sH = sliceCanvas.height;
            var sData = sliceCtx.getImageData(0, 0, sW, sH).data;

            var minX = sW, maxX = 0, minY = sH, maxY = 0;
            var opaqueCount = 0;
            for (var y = 0; y < sH; y++) {
                for (var x = 0; x < sW; x++) {
                    var a = sData[(y * sW + x) * 4 + 3];
                    if (a > 128) {
                        opaqueCount++;
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }
            var pieceW = maxX - minX;
            var pieceH = maxY - minY;
            if (opaqueCount < 100 || pieceW < 20 || pieceH < 20) {
                return null;
            }

            var borderPoints = [];
            for (var py = minY + 1; py < maxY - 1; py++) {
                for (var px = minX + 1; px < maxX - 1; px++) {
                    var alpha = sData[(py * sW + px) * 4 + 3];
                    if (alpha > 128) {
                        var aL = sData[(py * sW + (px - 1)) * 4 + 3];
                        var aR = sData[(py * sW + (px + 1)) * 4 + 3];
                        var aU = sData[((py - 1) * sW + px) * 4 + 3];
                        var aD = sData[((py + 1) * sW + px) * 4 + 3];
                        if (aL <= 128 || aR <= 128 || aU <= 128 || aD <= 128) {
                            borderPoints.push({ dx: px - minX, dy: py });
                        }
                    }
                }
            }
            if (borderPoints.length < 30) return null;

            var bgData = bgCtx.getImageData(0, 0, W, H).data;
            var startX = Math.max(CFG.MIN_GAP_X, Math.floor(W * 0.15));
            var endX = Math.min(W - pieceW - 2, Math.floor(W * CFG.MAX_GAP_X_RATIO));
            if (endX <= startX) return null;

            var scores = new Float32Array(W);
            var bestX = 0, bestScore = -1, sumScore = 0, cnt = 0;

            for (var cx = startX; cx < endX; cx++) {
                var s = 0;
                for (var b = 0; b < borderPoints.length; b++) {
                    var bx = cx + borderPoints[b].dx;
                    var by = borderPoints[b].dy;
                    if (bx <= 1 || bx >= W - 1 || by <= 1 || by >= H - 1) continue;
                    var p1 = (by * W + (bx - 1)) * 4;
                    var p2 = (by * W + (bx + 1)) * 4;
                    var diff = Math.abs(bgData[p1] - bgData[p2]) +
                               Math.abs(bgData[p1 + 1] - bgData[p2 + 1]) +
                               Math.abs(bgData[p1 + 2] - bgData[p2 + 2]);
                    s += diff;
                }
                scores[cx] = s / borderPoints.length;
                sumScore += scores[cx];
                cnt++;
                if (scores[cx] > bestScore) {
                    bestScore = scores[cx];
                    bestX = cx;
                }
            }

            var second = -1;
            for (var k = startX; k < endX; k++) {
                if (Math.abs(k - bestX) < pieceW * 0.6) continue;
                if (scores[k] > second) second = scores[k];
            }
            var conf = second > 0 ? (bestScore - second) / bestScore : 0;

            return {
                x: bestX - minX,
                rawGapLeft: bestX,
                sliceInitialPadLeft: minX,
                pieceWidth: pieceW,
                confidence: Number(Math.max(0, Math.min(1, conf)).toFixed(3))
            };
        }

        async function analyzeGap(match) {
            await waitForImageReady(match.bg, CFG.IMAGE_LOAD_TIMEOUT_MS);
            if (match.slice) {
                try { await waitForImageReady(match.slice, 2000); } catch (e) {}
            }

            var bgObj = await toCanvasWithCorsBypass(match.bg);
            var bgRect = match.bg.getBoundingClientRect();
            var sliceRect = match.slice ? match.slice.getBoundingClientRect() : null;

            var tplResult = null;
            if (match.slice) {
                try {
                    var sliceObj = await toCanvasWithCorsBypass(match.slice);
                    if (Math.abs(sliceObj.canvas.height - bgObj.canvas.height) <= 8) {
                        tplResult = analyzeGapByTemplate(bgObj.canvas, bgObj.ctx, sliceObj.canvas, sliceObj.ctx);
                    }
                } catch (e) {
                    log('WARN', 'Template match bỏ qua: ' + (e && e.message ? e.message : e));
                }
            }

            // FIX #3: Kết hợp Multi-row bucket voting (tryEdgeDetectGap) với Sobel Edge Detection
            var bucketVoteRes = tryEdgeDetectGap(bgObj.canvas, bgObj.ctx);
            var edgeResult = analyzeGapByEdge(bgObj.canvas, bgObj.ctx, sliceRect, bgRect);

            var chosen = edgeResult;
            var method = 'edge';

            if (bucketVoteRes && bucketVoteRes.confidence >= 0.6) {
                if (Math.abs(bucketVoteRes.dist - edgeResult.x) <= 10) {
                    chosen = {
                        x: Math.round((bucketVoteRes.dist + edgeResult.x) / 2),
                        confidence: Number(Math.max(bucketVoteRes.confidence, edgeResult.confidence).toFixed(3))
                    };
                    method = 'edge+bucketVote(' + bucketVoteRes.confidence + ')';
                } else if (edgeResult.confidence < 0.35) {
                    chosen = {
                        x: bucketVoteRes.dist,
                        confidence: bucketVoteRes.confidence
                    };
                    method = 'bucketVote5Rows';
                }
            }

            if (tplResult && tplResult.confidence >= chosen.confidence && tplResult.confidence >= CFG.MIN_CONFIDENCE) {
                chosen = tplResult;
                method = 'template';
            } else if (tplResult && Math.abs(tplResult.x - chosen.x) <= 8) {
                chosen = {
                    x: Math.round((tplResult.x + chosen.x) / 2),
                    confidence: Number(Math.min(1, Math.max(tplResult.confidence, chosen.confidence) + 0.12).toFixed(3)),
                    pieceWidth: tplResult.pieceWidth || 0
                };
                method = 'combined(template+edge)';
            }

            match.imageWidth = bgObj.canvas.width;
            var renderedGapX = (bgObj.canvas.width > 0)
                ? (chosen.x / bgObj.canvas.width) * bgRect.width
                : chosen.x;

            log('INFO', 'Kết quả phân tích ảnh', {
                method: method,
                imageWidth: bgObj.canvas.width,
                renderedWidth: Math.round(bgRect.width),
                gapX_inImage: chosen.x,
                renderedGapX: Math.round(renderedGapX),
                confidence: chosen.confidence
            });

            return {
                imageX: chosen.x,
                renderedGapX: renderedGapX,
                pieceWidth: chosen.pieceWidth || 0,
                confidence: chosen.confidence,
                imageWidth: bgObj.canvas.width,
                renderedWidth: bgRect.width,
                method: method
            };
        }

        // FIX #4 — Đo chính xác bằng getBoundingClientRect + bù trừ paddingLeft của track
        function computeRealDistance(imgDist, m) {
            var bgRect = m.bg.getBoundingClientRect();
            var trackRect = m.track.getBoundingClientRect();
            var btnEl = m.sliderBtn || m.btn;
            var btnRect = btnEl.getBoundingClientRect();

            // Track có padding không? (button không đi hết được track)
            var paddingLeft = Math.max(0, btnRect.left - trackRect.left);
            var maxTravel = Math.max(40, trackRect.width - btnRect.width - paddingLeft);

            var imgRenderW = bgRect.width;
            // Nếu imgDist truyền vào đang ở hệ tọa độ pixel tự nhiên của canvas/ảnh (m.imageWidth), quy đổi về bgRect.width
            var distInRenderPx = imgDist;
            if (m.imageWidth && m.imageWidth > 0 && Math.abs(m.imageWidth - imgRenderW) > 4) {
                distInRenderPx = (imgDist / m.imageWidth) * imgRenderW;
            }

            var ratio = maxTravel / Math.max(1, imgRenderW);
            var computed = Math.max(15, Math.min(maxTravel, distInRenderPx * ratio));
            return {
                realDistance: Math.round(computed),
                maxTravel: maxTravel,
                ratio: ratio,
                debug: { bgW: imgRenderW, trackW: trackRect.width, btnW: btnRect.width, paddingLeft: paddingLeft, maxTravel: maxTravel }
            };
        }

        // FIX #2 & NATIVE BRIDGE — Kéo isTrusted=true qua AccessibilityService.dispatchGesture()
        async function humanDragNative(matchObj, realDistance, myCholibiRunId, myInternalRunId) {
            if (isCancelled(myCholibiRunId, myInternalRunId)) {
                return { ok: false, reason: 'CANCELLED' };
            }
            var btnEl = matchObj.sliderBtn || matchObj.btn;
            var btnRect = btnEl.getBoundingClientRect();

            var vpX = btnRect.left + btnRect.width / 2;
            var vpY = btnRect.top + btnRect.height / 2;

            return new Promise(function(resolve) {
                var timeout = setTimeout(function() {
                    window.removeEventListener('cholibi:native-drag-result', handler);
                    resolve({ ok: false, reason: 'NATIVE_TIMEOUT' });
                }, CFG.NATIVE_DRAG_TIMEOUT_MS);

                function handler(ev) {
                    clearTimeout(timeout);
                    window.removeEventListener('cholibi:native-drag-result', handler);
                    resolve((ev && ev.detail) ? ev.detail : { ok: true, reason: 'NATIVE_OK' });
                }
                window.addEventListener('cholibi:native-drag-result', handler);

                var payload = btoa(unescape(encodeURIComponent(JSON.stringify({
                    type: 'SLIDER_DRAG',
                    startX: vpX,
                    startY: vpY,
                    viewportX: vpX,
                    viewportY: vpY,
                    distanceX: realDistance,
                    distanceY: 0,
                    durationMs: Math.round(700 + Math.random() * 400)
                }))));
                console.log('CHOLIBI_NATIVE_DRAG:' + payload);
            });
        }

        function cubicBezierEase(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function createEventTargets(btn) {
            var targets = [btn];
            if (document && targets.indexOf(document) === -1) targets.push(document);
            if (window && targets.indexOf(window) === -1) targets.push(window);
            return targets;
        }

        function dispatchDragEvent(btn, type, clientX, clientY, dispatchOnGlobal) {
            var screenX = clientX + (window.screenX || 0);
            var screenY = clientY + (window.screenY || 0);
            var targets = dispatchOnGlobal ? createEventTargets(btn) : [btn];

            for (var idx = 0; idx < targets.length; idx++) {
                var target = targets[idx];
                if (!target || !target.dispatchEvent) continue;

                if (type.indexOf('pointer') === 0 && typeof PointerEvent !== 'undefined') {
                    try {
                        target.dispatchEvent(new PointerEvent(type, {
                            bubbles: true, cancelable: true, composed: true, view: window,
                            pointerId: 1, pointerType: 'touch', isPrimary: true,
                            clientX: clientX, clientY: clientY,
                            screenX: screenX, screenY: screenY,
                            buttons: type === 'pointerup' ? 0 : 1
                        }));
                    } catch (e) {}
                }

                if (type.indexOf('touch') === 0 && typeof TouchEvent !== 'undefined') {
                    try {
                        var touchObj = new Touch({
                            identifier: 1,
                            target: btn,
                            clientX: clientX, clientY: clientY,
                            screenX: screenX, screenY: screenY,
                            pageX: clientX + window.pageXOffset,
                            pageY: clientY + window.pageYOffset,
                            radiusX: 11.5, radiusY: 11.5, rotationAngle: 0, force: 0.85
                        });
                        var activeTouches = (type === 'touchend' || type === 'touchcancel') ? [] : [touchObj];
                        target.dispatchEvent(new TouchEvent(type, {
                            bubbles: true, cancelable: true, composed: true, view: window,
                            touches: activeTouches,
                            targetTouches: activeTouches,
                            changedTouches: [touchObj]
                        }));
                    } catch (e) {}
                }

                if (type.indexOf('mouse') === 0) {
                    try {
                        target.dispatchEvent(new MouseEvent(type, {
                            bubbles: true, cancelable: true, composed: true, view: window,
                            clientX: clientX, clientY: clientY,
                            screenX: screenX, screenY: screenY,
                            button: 0,
                            buttons: type === 'mouseup' ? 0 : 1
                        }));
                    } catch (e) {}
                }
            }
        }

        async function humanDrag(btn, distance, myCholibiRunId, myInternalRunId) {
            var r = btn.getBoundingClientRect();
            var startX = r.left + r.width / 2 + randBetween(-2, 2);
            var startY = r.top + r.height / 2 + randBetween(-2, 2);

            var overshoot = Math.random() < 0.75 ? randBetween(CFG.OVERSHOOT_PX_MIN, CFG.OVERSHOOT_PX_MAX) : 0;
            var steps = randInt(CFG.DRAG_STEPS_MIN, CFG.DRAG_STEPS_MAX);

            dispatchDragEvent(btn, 'pointerdown', startX, startY, false);
            dispatchDragEvent(btn, 'touchstart',  startX, startY, false);
            dispatchDragEvent(btn, 'mousedown',   startX, startY, false);
            await sleep(randInt(65, 130));

            var peakDist = distance + overshoot;
            for (var i = 1; i <= steps; i++) {
                if (isCancelled(myCholibiRunId, myInternalRunId)) return;
                var t = i / steps;
                var eased = cubicBezierEase(t);

                var jitterX = (i < steps - 3) ? randBetween(-CFG.JITTER_PX, CFG.JITTER_PX) : 0;
                var jitterY = randBetween(-CFG.JITTER_Y_PX, CFG.JITTER_Y_PX);

                var curX = startX + peakDist * eased + jitterX;
                var curY = startY + jitterY;

                dispatchDragEvent(btn, 'pointermove', curX, curY, true);
                dispatchDragEvent(btn, 'touchmove',   curX, curY, true);
                dispatchDragEvent(btn, 'mousemove',   curX, curY, true);

                var delay = (t > 0.78)
                    ? randInt(CFG.DRAG_STEP_DELAY_MS_MAX, CFG.DRAG_STEP_DELAY_MS_MAX + 12)
                    : randInt(CFG.DRAG_STEP_DELAY_MS_MIN, CFG.DRAG_STEP_DELAY_MS_MAX);
                await sleep(delay);
            }

            if (overshoot > 0.5) {
                await sleep(randInt(55, 110));
                var backSteps = randInt(4, 7);
                for (var b = 1; b <= backSteps; b++) {
                    if (isCancelled(myCholibiRunId, myInternalRunId)) return;
                    var bt = b / backSteps;
                    var bx = startX + peakDist - overshoot * bt;
                    var by = startY + randBetween(-0.5, 0.5);
                    dispatchDragEvent(btn, 'pointermove', bx, by, true);
                    dispatchDragEvent(btn, 'touchmove',   bx, by, true);
                    dispatchDragEvent(btn, 'mousemove',   bx, by, true);
                    await sleep(randInt(16, 28));
                }
            }

            await sleep(randInt(80, 150));
            var finalX = startX + distance;
            var finalY = startY;
            dispatchDragEvent(btn, 'pointerup', finalX, finalY, true);
            dispatchDragEvent(btn, 'touchend',  finalX, finalY, true);
            dispatchDragEvent(btn, 'mouseup',   finalX, finalY, true);
        }

        // FIX #5 — CONTAINER_GONE không phải bằng chứng đơn lẻ; yêu cầu >= 2 tín hiệu đồng thuận
        function checkSliderSuccess(m, snapshot) {
            var btnEl = m.sliderBtn || m.btn;
            var sig = {
                successClass: false,
                successText: false,
                tokenFilled: false,
                containerGone: !document.body.contains(m.container) || !isVisible(m.container),
                urlChanged: location.href !== snapshot.url,
                navigated: /\/financial|\/home|\/lobby|\/member|\/dashboard|\/withdraw|\/security|\/mine/i.test(location.pathname),
                sliderReset: false,
                errorVisible: false
            };

            // 1. Error alert -> chắc chắn fail
            var alertEl = document.querySelector('.van-toast, .toast, .error, [role="alert"]');
            if (alertEl && isVisible(alertEl)) {
                var t = (alertEl.innerText || '').toLowerCase();
                if (/không đúng|sai|thất bại|lỗi|wrong|failed|error|thử lại/i.test(t)) sig.errorVisible = true;
            }
            if (sig.errorVisible) return { ok: false, evidence: 'ERROR_VISIBLE', signals: sig };

            // 2. Success class/text/token trong container
            if (m.container && m.container.querySelector('[class*="success" i], [class*="verified" i]')) {
                sig.successClass = true;
            }
            if (m.container && /xác minh thành công|验证成功|verified successfully|passed/i.test(m.container.innerText || '')) {
                sig.successText = true;
            }
            if (m.container) {
                var hiddenInputs = m.container.querySelectorAll('input[type="hidden"], input[name*="captcha" i], input[name*="validate" i], input[name*="token" i]');
                for (var i = 0; i < hiddenInputs.length; i++) {
                    if (hiddenInputs[i].value && hiddenInputs[i].value.length > 8) {
                        sig.tokenFilled = true;
                        break;
                    }
                }
            }

            // 3. Slider về vị trí cũ
            if (btnEl && m.track && isVisible(btnEl)) {
                var btnRect = btnEl.getBoundingClientRect();
                var trackRect = m.track.getBoundingClientRect();
                if (btnRect.left - trackRect.left < 4) sig.sliderReset = true;
            }

            // Rule (>= 2 tín hiệu đồng ý):
            if (sig.successClass && (sig.urlChanged || sig.navigated || sig.tokenFilled)) return { ok: true, evidence: 'CLASS_NAV', signals: sig };
            if (sig.successText && (sig.urlChanged || sig.navigated || sig.tokenFilled)) return { ok: true, evidence: 'TEXT_NAV', signals: sig };
            if (sig.containerGone && (sig.urlChanged || sig.navigated || sig.tokenFilled || !sig.errorVisible) && !sig.sliderReset) return { ok: true, evidence: 'GONE_NAV_NORESET', signals: sig };
            if (sig.sliderReset && !sig.successClass && !sig.successText) return { ok: false, evidence: 'SLIDER_RESET', signals: sig };
            return { ok: null, evidence: 'PENDING', signals: sig };
        }

        async function verifySuccess(match, snapshot, myCholibiRunId, myInternalRunId) {
            var start = Date.now();
            await sleep(450);

            while (Date.now() - start < CFG.VERIFY_TIMEOUT_MS) {
                if (isCancelled(myCholibiRunId, myInternalRunId)) {
                    return { ok: false, reason: 'CANCELLED' };
                }
                var check = checkSliderSuccess(match, snapshot);
                if (check.ok === true) {
                    return { ok: true, reason: check.evidence };
                }
                if (check.ok === false && (check.evidence === 'ERROR_VISIBLE' || Date.now() - start > 1200)) {
                    return { ok: false, reason: check.evidence };
                }
                await sleep(CFG.VERIFY_POLL_INTERVAL_MS);
            }

            return { ok: false, reason: 'VERIFY_TIMEOUT' };
        }

        async function solveCaptcha(passedCholibiRunId) {
            if (STATE.solving) {
                log('WARN', 'Đang trong quá trình giải, bỏ qua lệnh gọi trùng');
                return { ok: false, success: false, reason: 'BUSY' };
            }

            STATE.solving = true;
            STATE.internalRunId++;
            var myInternalRunId = STATE.internalRunId;
            var myCholibiRunId = (passedCholibiRunId !== undefined)
                ? passedCholibiRunId
                : (typeof currentRunId !== 'undefined' ? currentRunId : undefined);

            try {
                for (var attempt = 1; attempt <= CFG.MAX_RETRY + 1; attempt++) {
                    if (isCancelled(myCholibiRunId, myInternalRunId)) {
                        return { ok: false, success: false, reason: 'CANCELLED' };
                    }
                    STATE.attemptCount = attempt;
                    log('INFO', '=== Bắt đầu lần giải #' + attempt + ' ===');

                    var candidates = findCaptchaCandidates();
                    if (candidates.length === 0) {
                        log('WARN', 'Không tìm thấy slider captcha nào đang hiển thị trên trang');
                        return { ok: false, success: false, reason: 'NO_CAPTCHA_FOUND' };
                    }

                    var match = candidates[0];
                    var snapshot = {
                        url: location.href,
                        initialBtnLeft: (match.sliderBtn || match.btn).getBoundingClientRect().left
                    };

                    var analysis;
                    try {
                        analysis = await analyzeGap(match);
                    } catch (err) {
                        log('ERROR', 'Lỗi phân tích ảnh: ' + (err && err.message ? err.message : err));
                        return { ok: false, success: false, reason: 'IMAGE_ANALYSIS_ERROR: ' + (err && err.message ? err.message : err) };
                    }

                    if (isCancelled(myCholibiRunId, myInternalRunId)) {
                        return { ok: false, success: false, reason: 'CANCELLED' };
                    }

                    if (analysis.confidence < CFG.MIN_CONFIDENCE || analysis.imageX < CFG.MIN_GAP_X) {
                        log('WARN', 'Độ tự tin thấp (' + analysis.confidence + ') hoặc vị trí không hợp lệ (' + analysis.imageX + 'px)');

                        if (attempt <= CFG.MAX_RETRY && match.refreshBtn) {
                            log('INFO', 'Bấm nút làm mới ảnh Captcha khác rõ hơn...');
                            try { match.refreshBtn.click(); } catch (e) {}
                            await sleep(CFG.RETRY_COOLDOWN_MS);
                            continue;
                        }
                        return {
                            ok: false,
                            success: false,
                            reason: 'LOW_CONFIDENCE',
                            confidence: analysis.confidence,
                            imageX: analysis.imageX
                        };
                    }

                    var distInfo = computeRealDistance(analysis.imageX, match);
                    var realDistance = distInfo.realDistance;
                    log('INFO', 'Khoảng cách kéo thực tế: ' + realDistance + 'px (method=' + analysis.method + ', conf=' + analysis.confidence + ')');

                    // Ưu tiên 1: Kéo isTrusted=true qua Native AccessibilityService.dispatchGesture()
                    var nativeRes = await humanDragNative(match, realDistance, myCholibiRunId, myInternalRunId);
                    if (!nativeRes || !nativeRes.ok) {
                        // Fallback sang chuỗi sự kiện Touch/Pointer/Mouse trên WebView nếu chưa bật Accessibility Helper
                        log('INFO', 'Chuyển sang kéo trực tiếp trên WebView (' + ((nativeRes && nativeRes.reason) || 'JS_FALLBACK') + ')...');
                        await humanDrag(match.sliderBtn || match.btn, realDistance, myCholibiRunId, myInternalRunId);
                    }

                    var verify = await verifySuccess(match, snapshot, myCholibiRunId, myInternalRunId);
                    if (verify.ok) {
                        STATE.lastSolveTs = Date.now();
                        log('INFO', 'GIẢI CAPTCHA THÀNH CÔNG: ' + verify.reason);
                        return {
                            ok: true,
                            success: true,
                            distance: realDistance,
                            confidence: analysis.confidence,
                            attempts: attempt,
                            reason: verify.reason
                        };
                    }

                    log('WARN', 'Lần #' + attempt + ' chưa đạt: ' + verify.reason);
                    if (attempt <= CFG.MAX_RETRY) {
                        var refreshedCandidates = findCaptchaCandidates();
                        if (refreshedCandidates.length > 0 && refreshedCandidates[0].refreshBtn) {
                            try { refreshedCandidates[0].refreshBtn.click(); } catch (e) {}
                        }
                        await sleep(CFG.RETRY_COOLDOWN_MS);
                    }
                }

                log('ERROR', 'Đã hết ' + (CFG.MAX_RETRY + 1) + ' lần thử giải Captcha -> Nhường người dùng kéo tay');
                return { ok: false, success: false, reason: 'EXCEEDED_MAX_RETRY' };
            } finally {
                STATE.solving = false;
            }
        }

        window.__cholibiSliderSolver = {
            version: '2.1',
            solve: solveCaptcha,
            cancel: cancel,
            find: findCaptchaCandidates,
            dedupCandidates: dedupCandidates,
            tryEdgeDetectGap: tryEdgeDetectGap,
            computeRealDistance: computeRealDistance,
            checkSliderSuccess: checkSliderSuccess,
            humanDragNative: humanDragNative,
            hasCaptcha: function() { return findCaptchaCandidates().length > 0; },
            analyze: async function() {
                var c = findCaptchaCandidates();
                if (!c.length) return null;
                return await analyzeGap(c[0]);
            },
            drag: humanDrag,
            config: CFG
        };
        window.__cholibiSliderSolverV2 = window.__cholibiSliderSolver;

        log('INFO', 'Đã khởi tạo Slider Captcha Solver v2.1 (Full 7 Fixes + Native Gesture Bridge)');
    })();

    function setStatus(pct, msg) {
        var barEl = document.getElementById('cb-bar');
        var pctEl = document.getElementById('cb-pct');
        var stEl = document.getElementById('cb-status');
        if (barEl) barEl.style.width = pct + '%';
        if (pctEl) pctEl.innerText = pct + '%';
        if (stEl) stEl.textContent = maskSensitiveLog(msg);
    }

    // ========================================================================
    // SỬA TRIỆT ĐỂ LỖI 2: BỘ NHỚ LỊCH SỬ CHÍNH XÁC (CÓ NÚT ❌ XÓA TỪNG DÒNG & KHÔNG BÁO GIẢ)
    // ========================================================================
    function renderHistoryAndCheckWarnings() {
        var countEl = document.getElementById('cb-hist-count');
        var listEl = document.getElementById('cb-hist-list');
        var warnEl = document.getElementById('cb-history-warn');
        if (countEl) countEl.textContent = String(historyRegistry.length);

        if (listEl) {
            listEl.textContent = '';
            if (historyRegistry.length === 0) {
                listEl.textContent = 'Chưa có tài khoản nào trong kho.';
            } else {
                for (var i = historyRegistry.length - 1; i >= 0; i--) {
                    (function(rec) {
                        var row = document.createElement('div');
                        row.style.borderBottom = '1px solid #1a2226';
                        row.style.padding = '3px 0';
                        row.style.display = 'flex';
                        row.style.justifyContent = 'space-between';
                        row.style.alignItems = 'center';

                        var infoSpan = document.createElement('span');
                        infoSpan.style.cursor = 'pointer';
                        var displayStk = rec.stk || rec.stkProfile || '';
                        infoSpan.textContent = '• [' + rec.site + '] TK: ' + (rec.username || '?') +
                            (rec.pw ? ' | MK: ' + rec.pw : '') +
                            (rec.phone ? ' | SĐT: ' + rec.phone : '') +
                            (displayStk ? ' | STK: ' + displayStk : '');
                        bindFastTap(infoSpan, function() {
                            openFullVaultModal(rec.username);
                        });
                        row.appendChild(infoSpan);

                        var delBtn = document.createElement('button');
                        delBtn.className = 'cb-hist-del';
                        delBtn.textContent = '✕';
                        delBtn.title = 'Xóa bản ghi này';
                        bindFastTap(delBtn, function() {
                            historyRegistry = historyRegistry.filter(function(item) {
                                return !(item.site === rec.site && item.username === rec.username);
                            });
                            try {
                                localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(historyRegistry));
                            } catch (e) {}
                            window.__cholibiBridgeSend('DELETE_HISTORY_ITEM', { site: rec.site, username: rec.username });
                            renderHistoryAndCheckWarnings();
                            renderVaultModalList();
                            showToast('🗑️ Đã xóa lịch sử TK: ' + rec.username);
                        });
                        row.appendChild(delBtn);
                        listEl.appendChild(row);
                    })(historyRegistry[i]);
                }
            }
        }

        var activeSite = state.site || currentSite;
        var stkVal = (document.getElementById('f-stk').value || '').trim();
        var warnings = [];

        for (var j = 0; j < historyRegistry.length; j++) {
            var h = historyRegistry[j];
            if (h.site !== activeSite) continue;
            if (currentDeviceIp && h.ip && h.ip === currentDeviceIp) {
                warnings.push('⚠️ IP ' + currentDeviceIp + ' đã từng ĐK ' + activeSite + ' (TK: ' + h.username + ' lúc ' + h.time + ')');
            }
            if (stkVal && h.stk && h.stk === stkVal) {
                warnings.push('⚠️ STK ' + stkVal + ' đã từng gắn trên ' + activeSite + ' (TK: ' + h.username + ' lúc ' + h.time + ')');
            }
        }

        if (warnEl) {
            if (warnings.length > 0) {
                warnEl.style.display = 'block';
                warnEl.textContent = warnings.join(' | ');
            } else {
                warnEl.style.display = 'none';
                warnEl.textContent = '';
            }
        }
        return warnings;
    }

    // Lưu đầy đủ toàn bộ thông tin tài khoản (TK, MK, PIN Rút, Họ Tên, SĐT, Ngân Hàng, Chi Nhánh, STK, IP, Thời gian) vào Kho!
    function recordSuccessToMemory(stageName, verifiedUsername, isServerVerified, manualSave) {
        if (isServerVerified !== true && !manualSave) return;
        var d = getActiveData();
        var sKey = state.site || currentSite;
        var uToSave = verifiedUsername || state.submittedUsername || d.username || '';
        if (!uToSave) return;

        var isSameActiveUser = (!d.username || uToSave.toLowerCase() === d.username.toLowerCase());
        var isBankBoundStage = (stageName === 'BANK_ADDED' || stageName === 'COMPLETED_ALL');
        var stkToSave = (isBankBoundStage && isSameActiveUser) ? (d.stk || '') : '';

        var entry = {
            site: sKey,
            url: location.origin || (SITE_MAP[sKey] ? SITE_MAP[sKey].url : ''),
            ip: currentDeviceIp || '',
            username: uToSave,
            pw: isSameActiveUser ? (d.pw || '') : '',
            wd: isSameActiveUser ? (d.wd || '123123') : '',
            name: isSameActiveUser ? (d.name || '') : '',
            phone: isSameActiveUser ? (d.phone || '') : '',
            bank: isSameActiveUser ? (d.bank || 'TECHCOMBANK') : '',
            branch: isSameActiveUser ? (d.branch || 'Ninh bình') : '',
            stk: stkToSave,
            stkProfile: isSameActiveUser ? (d.stk || '') : '',
            stkBackup: isSameActiveUser ? (d.stkBackup || '') : '',
            stage: stageName || 'REGISTERED',
            serverVerified: Boolean(isServerVerified === true),
            manualSave: Boolean(manualSave),
            time: new Date().toLocaleString('vi-VN')
        };
        var stageRanks = { 'REGISTERED': 1, 'PIN_SET': 2, 'BANK_ADDED': 3, 'COMPLETED_ALL': 4 };
        var updated = false;
        var isSameActiveUser = (!d.username || uToSave.toLowerCase() === d.username.toLowerCase());
        for (var i = 0; i < historyRegistry.length; i++) {
            var oldRec = historyRegistry[i];
            if (!oldRec || !oldRec.site || !oldRec.username) continue;
            if (oldRec.site === entry.site && oldRec.username.toLowerCase() === entry.username.toLowerCase()) {
                if (!isSameActiveUser && !manualSave) {
                    if (oldRec.pw) entry.pw = oldRec.pw;
                    if (oldRec.name) entry.name = oldRec.name;
                    if (oldRec.phone) entry.phone = oldRec.phone;
                }
                var mergeFields = ['pw', 'wd', 'name', 'phone', 'bank', 'branch', 'stk', 'stkProfile', 'stkBackup', 'ip', 'url'];
                for (var mf = 0; mf < mergeFields.length; mf++) {
                    var fk = mergeFields[mf];
                    if (!entry[fk] && oldRec[fk]) entry[fk] = oldRec[fk];
                }
                var prevR = stageRanks[oldRec.stage] || 1;
                var nextR = stageRanks[entry.stage] || 1;
                if (prevR > nextR) {
                    entry.stage = oldRec.stage;
                }
                historyRegistry[i] = entry;
                updated = true;
                break;
            }
        }
        if (!updated) historyRegistry.push(entry);
        try {
            localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(historyRegistry));
        } catch (e) {}
        window.__cholibiBridgeSend('RECORD_HISTORY', entry);
        renderHistoryAndCheckWarnings();
        renderVaultModalList();
    }

    // ========================================================================
    // GIAO DIỆN KHO LƯU DỮ LIỆU TÀI KHOẢN CHI TIẾT (#cb-vault-modal)
    // ========================================================================
    var vaultModal = document.createElement('div');
    vaultModal.id = 'cb-vault-modal';
    vaultModal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(8,12,15,0.96);z-index:2147483647;display:none;flex-direction:column;color:#ecf0f1;font-family:sans-serif;font-size:11px;box-sizing:border-box;padding:10px;';
    vaultModal.innerHTML = [
        '<div style="display:flex;justify-content:space-between;align-items:center;background:linear-gradient(90deg,#0e4b37,#11996b);padding:8px 10px;border-radius:7px;font-weight:bold;font-size:12px;">',
        '  <span>📂 KHO LƯU DỮ LIỆU TÀI KHOẢN CHOLIBI (<span id="cb-vault-total">0</span>)</span>',
        '  <button id="cb-vault-close" style="background:#6e1e24;border:1px solid #ff9999;color:#fff;border-radius:5px;padding:3px 10px;font-weight:bold;cursor:pointer;">✕ Đóng</button>',
        '</div>',
        '<div style="display:flex;gap:5px;margin:7px 0;">',
        '  <input id="cb-vault-search" placeholder="🔍 Tìm theo Site, TK, MK, Họ tên, SĐT, STK..." style="flex:1;background:#141d22;border:1px solid #1abc9c;color:#2ecc71;border-radius:5px;padding:6px 8px;font-size:11px;outline:none;">',
        '  <button id="cb-vault-copy-all" style="background:#1b6ca8;border:1px solid #3498db;color:#fff;border-radius:5px;padding:6px 9px;font-size:10.5px;font-weight:bold;cursor:pointer;">📤 Copy Tất Cả</button>',
        '</div>',
        '<div id="cb-vault-cards" style="flex:1;overflow-y:auto;padding-right:2px;"></div>'
    ].join('\n');
    document.body.appendChild(vaultModal);

    for (var vse = 0; vse < shieldEvents.length; vse++) {
        vaultModal.addEventListener(shieldEvents[vse], function(ev) {
            ev.stopPropagation();
        }, false);
    }

    function copyVaultValue(val, labelName) {
        if (!val) {
            showToast('⚠️ Mục ' + labelName + ' đang trống!');
            return;
        }
        window.__cholibiBridgeSend('COPY_TEXT_CLIPBOARD', { text: String(val), label: labelName });
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try { navigator.clipboard.writeText(String(val)); } catch (e) {}
        }
        showToast('📋 Đã copy ' + labelName + ': ' + val);
    }

    function renderVaultModalList() {
        var container = document.getElementById('cb-vault-cards');
        var totalEl = document.getElementById('cb-vault-total');
        var searchEl = document.getElementById('cb-vault-search');
        if (!container) return;
        if (totalEl) totalEl.textContent = String(historyRegistry.length);
        var q = (searchEl && searchEl.value ? searchEl.value : '').trim().toLowerCase();

        container.textContent = '';
        var filtered = historyRegistry.filter(function(r) {
            if (!q) return true;
            var blob = [r.site, r.username, r.pw, r.wd, r.name, r.phone, r.bank, r.branch, r.stk, r.stkProfile, r.ip, r.time].join(' ').toLowerCase();
            return blob.indexOf(q) !== -1;
        });

        if (filtered.length === 0) {
            var emptyDiv = document.createElement('div');
            emptyDiv.style.cssText = 'text-align:center;color:#95a5a6;padding:30px 10px;font-size:12px;';
            emptyDiv.textContent = q ? 'Không tìm thấy tài khoản nào khớp từ khóa.' : 'Kho lưu trữ hiện đang trống. Khi bạn đăng ký hoặc bấm "💾 Lưu TK Này", toàn bộ TK, MK, SĐT, STK sẽ được lưu tại đây.';
            container.appendChild(emptyDiv);
            return;
        }

        for (var i = filtered.length - 1; i >= 0; i--) {
            (function(rec, idxNum) {
                var card = document.createElement('div');
                card.style.cssText = 'background:#141c21;border:1px solid #283740;border-left:3.5px solid #1abc9c;border-radius:7px;padding:8px;margin-bottom:7px;line-height:1.45;';

                var stageLabel = rec.stage === 'COMPLETED_ALL' ? '🟢 Hoàn tất 100%' :
                                 (rec.stage === 'BANK_ADDED' ? '🏦 Đã gắn Bank' : '🟡 Đã Đăng ký');
                var stkShown = rec.stk || rec.stkProfile || 'Chưa có';

                var head = document.createElement('div');
                head.style.cssText = 'display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #223038;padding-bottom:4px;margin-bottom:5px;font-weight:bold;';
                head.innerHTML = '<span style="color:#1abc9c;font-size:11.5px;">#' + (idxNum + 1) + ' [' + (rec.site || '?') + '] — ' + stageLabel + '</span>' +
                                 '<span style="color:#95a5a6;font-size:9.5px;">' + (rec.time || '') + '</span>';
                card.appendChild(head);

                var grid = document.createElement('div');
                grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:10.5px;margin-bottom:6px;';
                var items = [
                    { lbl: '👤 TK', val: rec.username || '' },
                    { lbl: '🔑 MK', val: rec.pw || '' },
                    { lbl: '🏧 MK Rút', val: rec.wd || '123123' },
                    { lbl: '🧑 Họ Tên', val: rec.name || '' },
                    { lbl: '📱 SĐT', val: rec.phone || '' },
                    { lbl: '🏦 Ngân hàng', val: (rec.bank || '') + (rec.branch ? ' (' + rec.branch + ')' : '') },
                    { lbl: '💳 STK', val: stkShown },
                    { lbl: '🌐 IP', val: rec.ip || 'N/A' }
                ];
                for (var it = 0; it < items.length; it++) {
                    (function(itemObj) {
                        var cell = document.createElement('div');
                        cell.style.cssText = 'background:#0d1317;border:1px solid #1f2b32;border-radius:4px;padding:3px 5px;display:flex;justify-content:space-between;align-items:center;overflow:hidden;';
                        var txtSpan = document.createElement('span');
                        txtSpan.style.cssText = 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:4px;';
                        var bLbl = document.createElement('b');
                        bLbl.style.color = '#95a5a6';
                        bLbl.textContent = itemObj.lbl + ': ';
                        var valSpan = document.createElement('span');
                        valSpan.style.cssText = 'color:#2ecc71;font-weight:bold;';
                        valSpan.textContent = itemObj.val || '—';
                        txtSpan.appendChild(bLbl);
                        txtSpan.appendChild(valSpan);
                        cell.appendChild(txtSpan);
                        if (itemObj.val && itemObj.val !== 'N/A' && itemObj.val !== 'Chưa có') {
                            var cpBtn = document.createElement('button');
                            cpBtn.textContent = 'Copy';
                            cpBtn.style.cssText = 'background:#1a2b36;border:1px solid #2e4a5c;color:#bdc3c7;border-radius:3px;font-size:8.5px;padding:1px 4px;cursor:pointer;flex-shrink:0;';
                            bindFastTap(cpBtn, function() {
                                copyVaultValue(itemObj.val, itemObj.lbl);
                            });
                            cell.appendChild(cpBtn);
                        }
                        grid.appendChild(cell);
                    })(items[it]);
                }
                card.appendChild(grid);

                var actRow = document.createElement('div');
                actRow.style.cssText = 'display:flex;gap:5px;';

                var btnLoad = document.createElement('button');
                btnLoad.className = 'cb-mini-btn teal';
                btnLoad.textContent = '📥 Nạp Lại Vào Bảng';
                bindFastTap(btnLoad, function() {
                    var restored = {
                        username: rec.username || '',
                        pw: rec.pw || '',
                        wd: rec.wd || '123123',
                        name: rec.name || '',
                        phone: rec.phone || '',
                        bank: rec.bank || 'TECHCOMBANK',
                        branch: rec.branch || 'Ninh bình',
                        stk: rec.stk || rec.stkProfile || '',
                        stkBackup: rec.stkBackup || '',
                        proxy: (state.data && state.data.proxy) || ''
                    };
                    populateFieldsFromData(restored, true);
                    saveState({ data: restored }, true, true);
                    vaultModal.style.display = 'none';
                    var fDockAfterLoad = document.getElementById('cb-float-dock');
                    if (fDockAfterLoad && wasFloatDockVisibleBeforeVault) fDockAfterLoad.style.display = 'block';
                    showToast('📥 Đã nạp hồ sơ TK: ' + restored.username);
                });
                actRow.appendChild(btnLoad);

                var btnCopyFull = document.createElement('button');
                btnCopyFull.className = 'cb-mini-btn primary';
                btnCopyFull.textContent = '📋 Copy Trọn Bộ TK';
                bindFastTap(btnCopyFull, function() {
                    var line = '[' + (rec.site || '?') + '] TK: ' + (rec.username || '') +
                        ' | MK: ' + (rec.pw || '') +
                        ' | PIN: ' + (rec.wd || '123123') +
                        ' | Tên: ' + (rec.name || '') +
                        ' | SĐT: ' + (rec.phone || '') +
                        ' | Bank: ' + (rec.bank || '') + ' (' + (rec.branch || '') + ')' +
                        ' | STK: ' + stkShown;
                    copyVaultValue(line, 'Trọn bộ hồ sơ ' + rec.username);
                });
                actRow.appendChild(btnCopyFull);

                var btnDel = document.createElement('button');
                btnDel.className = 'cb-mini-btn';
                btnDel.style.cssText = 'flex:0.35;background:#4a1c1f;border-color:#e74c3c;color:#ff9999;';
                btnDel.textContent = '🗑️ Xóa';
                bindFastTap(btnDel, function() {
                    historyRegistry = historyRegistry.filter(function(item) {
                        return !(item.site === rec.site && item.username === rec.username);
                    });
                    try { localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(historyRegistry)); } catch (e) {}
                    window.__cholibiBridgeSend('DELETE_HISTORY_ITEM', { site: rec.site, username: rec.username });
                    renderHistoryAndCheckWarnings();
                    renderVaultModalList();
                });
                actRow.appendChild(btnDel);

                card.appendChild(actRow);
                container.appendChild(card);
            })(filtered[i], i);
        }
    }

    var wasFloatDockVisibleBeforeVault = false;
    function openFullVaultModal(filterQuery) {
        var searchEl = document.getElementById('cb-vault-search');
        if (searchEl) searchEl.value = filterQuery || '';
        renderVaultModalList();
        var fDock = document.getElementById('cb-float-dock');
        if (fDock) {
            wasFloatDockVisibleBeforeVault = (fDock.style.display === 'block');
            fDock.style.display = 'none';
        }
        vaultModal.style.display = 'flex';
    }

    bindFastTap('cb-open-vault-modal', function() {
        openFullVaultModal('');
    });
    bindFastTap('cb-vault-close', function() {
        vaultModal.style.display = 'none';
        var fDock = document.getElementById('cb-float-dock');
        if (fDock && (wasFloatDockVisibleBeforeVault || state.autoMode)) {
            fDock.style.display = 'block';
        }
    });
    bindFastTap('cb-vault-copy-all', function() {
        window.__cholibiBridgeSend('EXPORT_HISTORY', {});
        showToast('📤 Đã xuất toàn bộ Kho Tài Khoản ra Clipboard!');
    });
    var vaultSearchInput = document.getElementById('cb-vault-search');
    if (vaultSearchInput) {
        vaultSearchInput.addEventListener('input', function() {
            renderVaultModalList();
        });
    }

    bindFastTap('cb-save-cur-to-vault', function() {
        var d = ensureProfileReadyForAction();
        recordSuccessToMemory('REGISTERED', d.username, Boolean(state.registrationSubmitted && state.submittedUsername === d.username), true);
        showToast('💾 Đã lưu đầy đủ TK "' + d.username + '" (kèm MK, SĐT, STK) vào Kho!');
        addLog('💾 Đã lưu thủ công hồ sơ TK "' + d.username + '" vào Kho Lưu Dữ Liệu.');
    });

    bindFastTap('cb-wipe-fp-now', async function() {
        await wipeAllSiteTracesAndRotateJS();
        window.__cholibiBridgeSend('WIPE_FINGERPRINTS_NOW', { silent: false });
        showToast('🛡️ Đã xóa sạch dấu vân tay cũ & tạo máy mới!');
        addLog('🛡️ Đã xóa sạch Cookie, Cache, IndexedDB, LocalStorage của web & xoay dấu vân tay máy mới!');
    });

    function updateAutoWipeBtnUI() {
        var btn = document.getElementById('cb-toggle-autowipe');
        if (!btn) return;
        var on = state.autoWipeOnExit !== false;
        btn.className = 'cb-mini-btn ' + (on ? 'lock-on' : '');
        btn.textContent = on ? '🧹 Tự Xóa Vân Tay Khi Xong/Thoát: BẬT' : '🧹 Tự Xóa Vân Tay Khi Xong/Thoát: TẮT';
    }

    bindFastTap('cb-toggle-autowipe', function() {
        state.autoWipeOnExit = !(state.autoWipeOnExit !== false);
        saveState({ autoWipeOnExit: state.autoWipeOnExit }, true, false);
        updateAutoWipeBtnUI();
        showToast(state.autoWipeOnExit ? '🛡️ Đã BẬT tự động xóa vân tay khi đăng ký xong / thoát app!' : '⚪ Đã TẮT tự xóa vân tay khi thoát app');
    });
    updateAutoWipeBtnUI();

    // ========================================================================
    // TỰ ĐỘNG PHÁT HIỆN, HỌC THAO TÁC & THÊM SITE MỚI VÀO BỘ NHỚ (SMART SITE LEARNER)
    // ========================================================================
    function buildSelectorForInput(el) {
        if (!el) return '';
        if (el.id && !/\d{2,}|^(?:van-|el-|rc-|mui-|v-|mat-)/i.test(el.id)) {
            var safeId = (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') ? CSS.escape(el.id) : el.id.replace(/[^a-zA-Z0-9_\-]/g, '');
            if (safeId) return '#' + safeId;
        }
        if (el.name) return 'input[name="' + el.name.replace(/"/g, '') + '"]';
        if (el.placeholder) return 'input[placeholder*="' + el.placeholder.substring(0, 18).replace(/"/g, '') + '" i]';
        var formControl = el.getAttribute('formcontrolname') || el.getAttribute('ng-model');
        if (formControl) return 'input[formcontrolname="' + formControl + '"], input[ng-model="' + formControl + '"]';
        return '';
    }

    function inferCurrentSiteGroupFromDom() {
        var pathAndHref = ((location.pathname || '') + ' ' + (location.href || '')).toLowerCase();
        if (/\/account\/register|\/financial/i.test(pathAndHref) || queryPageInput('input[placeholder*="chọn ngân hàng" i]')) {
            return 'GROUP_B';
        }
        if (/\/home\/register|\/home\/security|fixed\.iswebclip/i.test(pathAndHref) || findSixBoxPinContainers().length > 0) {
            return 'GROUP_A';
        }
        return 'GROUP_B';
    }

    function learnAndSaveCurrentSiteInteractive(autoTriggered) {
        var cleanHost = (location.hostname || '').toLowerCase().replace(/^m\.|^www\.|^gioithieu\./, '');
        if (!cleanHost || /chrome-error|about:blank/i.test(location.href)) {
            showToast('⚠️ Hãy mở trang web cổng game cần thêm trước!');
            return;
        }
        var defaultKey = cleanHost.split('.')[0].toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10) || 'SITE_MOI';
        var chosenName = autoTriggered ? defaultKey : prompt('Nhập tên viết tắt cho Site mới (VD: HI88, WIN55...):', defaultKey);
        if (!chosenName) return;
        var siteKey = String(chosenName).trim().toUpperCase().replace(/[^A-Z0-9_]/g, '');
        if (!siteKey) return;

        var inferredGroup = inferCurrentSiteGroupFromDom();
        var learnedForHost = learnedSelectorsMap[cleanHost] || {};
        var newSiteCfg = {
            key: siteKey,
            url: location.href,
            mirrors: [location.href, location.origin + location.pathname],
            group: inferredGroup,
            hostMatch: cleanHost.split('.')[0] + '|' + siteKey.toLowerCase(),
            learnedSelectors: learnedForHost,
            isCustom: true
        };
        SITE_MAP[siteKey] = newSiteCfg;
        if (SITE_KEYS.indexOf(siteKey) === -1) SITE_KEYS.push(siteKey);
        try {
            var savedCustom = JSON.parse(localStorage.getItem(CUSTOM_SITES_LOCAL_KEY) || '{}') || {};
            savedCustom[siteKey] = newSiteCfg;
            localStorage.setItem(CUSTOM_SITES_LOCAL_KEY, JSON.stringify(savedCustom));
        } catch (eS) {}

        saveState({ site: siteKey }, true, false);
        window.__cholibiBridgeSend('SAVE_CUSTOM_SITE', newSiteCfg);

        var gridEl = document.getElementById('cb-site-grid');
        if (gridEl) {
            var addBtn = document.getElementById('cb-add-custom-site-chip');
            var newChip = document.createElement('div');
            newChip.className = 'cb-site-chip active';
            newChip.setAttribute('data-site', siteKey);
            newChip.textContent = siteKey;
            bindFastTap(newChip, function() {
                window.__cholibiBridgeSend('NAVIGATE_SITE', { site: siteKey, url: newSiteCfg.url });
            });
            if (addBtn && addBtn.parentNode === gridEl) {
                gridEl.insertBefore(newChip, addBtn);
            } else {
                gridEl.appendChild(newChip);
            }
        }
        siteUi();
        showToast('🧠 Đã học & lưu Site mới [' + siteKey + '] (' + inferredGroup + ')!');
        addLog('🧠 Đã học & ghi nhớ cổng game mới [' + siteKey + '] -> ' + location.href);
    }

    bindFastTap('cb-add-custom-site-chip', function() {
        learnAndSaveCurrentSiteInteractive(false);
    });

    // Tự động quan sát & học thao tác khi người dùng gõ trên trang web lần đầu (có debounce 250ms đồng bộ về Native)
    var __cholibiSaveLearnedTimer = null;
    var saveDebounceTimer = null;
    document.addEventListener('change', function(ev) {
        var t = ev && ev.target;
        if (!t || t.tagName !== 'INPUT' || t.closest('#cb-panel') || t.closest('#cb-float-dock')) return;
        var val = (t.value || '').trim();
        if (!val) return;
        var d = getActiveData();
        var cleanHost = (location.hostname || '').toLowerCase().replace(/^m\.|^www\./, '');
        if (!cleanHost) return;
        learnedSelectorsMap[cleanHost] = learnedSelectorsMap[cleanHost] || {};
        var sel = buildSelectorForInput(t);
        if (!sel) return;
        var learnedUpdated = false;
        if (d.username && val === d.username) { learnedSelectorsMap[cleanHost].username = sel; learnedUpdated = true; }
        else if (d.pw && val === d.pw && !learnedSelectorsMap[cleanHost].pw) {
            learnedSelectorsMap[cleanHost].pw = sel;
            learnedSelectorsMap[cleanHost].password = sel;
            learnedUpdated = true;
        }
        else if (d.name && toUpperNoAccent(val) === d.name) { learnedSelectorsMap[cleanHost].name = sel; learnedUpdated = true; }
        else if (d.phone && val.replace(/^0+/, '') === d.phone.replace(/^0+/, '')) { learnedSelectorsMap[cleanHost].phone = sel; learnedUpdated = true; }
        else if (d.stk && val === d.stk) { learnedSelectorsMap[cleanHost].stk = sel; learnedUpdated = true; }
        try {
            localStorage.setItem(LEARNED_SELECTORS_LOCAL_KEY, JSON.stringify(learnedSelectorsMap));
        } catch (eL) {}
        if (learnedUpdated && state.autoLearnSites !== false) {
            if (__cholibiSaveLearnedTimer) clearTimeout(__cholibiSaveLearnedTimer);
            saveDebounceTimer = __cholibiSaveLearnedTimer = setTimeout(function() {
                var sKeyNow = state.site || currentSite;
                var curCfg = SITE_MAP[sKeyNow] || {};
                window.__cholibiBridgeSend('SAVE_CUSTOM_SITE', {
                    key: sKeyNow,
                    url: curCfg.url || location.href,
                    group: curCfg.group || inferCurrentSiteGroupFromDom(),
                    learnedSelectors: learnedSelectorsMap[cleanHost],
                    switchSite: false,
                    silent: true
                });
            }, 250);
        }
    }, true);

    function populateFieldsFromData(dObj, forceOverwrite) {
        if (!dObj) return;
        var map = [
            ['f-user', dObj.username],
            ['f-pw', dObj.pw],
            ['f-wd', dObj.wd || '123123'],
            ['f-name', dObj.name],
            ['f-phone', dObj.phone],
            ['f-bank', dObj.bank || 'TECHCOMBANK'],
            ['f-branch', dObj.branch || 'Ninh bình'],
            ['f-stk', dObj.stk],
            ['f-proxy', dObj.proxy]
        ];
        var clearedMap = (lockedVault && lockedVault.clearedFields) ? lockedVault.clearedFields : {};
        var fieldKeyMap = {
            'f-user': 'username', 'f-pw': 'pw', 'f-wd': 'wd', 'f-name': 'name',
            'f-phone': 'phone', 'f-bank': 'bank', 'f-branch': 'branch',
            'f-stk': 'stk', 'f-proxy': 'proxy'
        };
        for (var i = 0; i < map.length; i++) {
            var el = document.getElementById(map[i][0]);
            var val = map[i][1];
            var fKey = fieldKeyMap[map[i][0]];
            if (!el || document.activeElement === el) continue;
            if (fKey && clearedMap[fKey] && forceOverwrite) {
                el.value = '';
            } else if (val !== undefined && val !== null && String(val) !== '') {
                if (forceOverwrite || !el.value) {
                    el.value = String(val);
                }
            }
        }
        fieldsHydrated = true;
    }

    // KHI NATIVE ĐỒNG BỘ XUỐNG: LUÔN CƯỠNG BỨC KHÔI PHỤC ĐÚNG PHÔI ĐÃ KHÓA (NGUYEN TRUONG CA)!
    window.__cholibiRestoreFromNative = function(masterObj, vaultObj) {
        mergeNativeMasterIntoLocalState(masterObj, vaultObj);
        if (state.data) {
            populateFieldsFromData(state.data, true);
        }
        updateLockBankBtnUI();
        if (typeof updateAutoWipeBtnUI === 'function') {
            updateAutoWipeBtnUI();
        }
    };

    window.__cholibiOnHistorySync = function(b64) {
        try {
            var payload = JSON.parse(decodeURIComponent(escape(atob(b64))));
            if (payload.currentIp) currentDeviceIp = payload.currentIp;
            if (Array.isArray(payload.records)) {
                historyRegistry = payload.records;
                try {
                    localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(historyRegistry));
                } catch (e) {}
            }
            if (payload.customSites && typeof payload.customSites === 'object') {
                for (var cKey in payload.customSites) {
                    SITE_MAP[cKey] = payload.customSites[cKey];
                    if (SITE_KEYS.indexOf(cKey) === -1) SITE_KEYS.push(cKey);
                }
            }
            if (payload.deviceFp && typeof payload.deviceFp === 'object' && payload.deviceFp.canvasSeed) {
                currentNativeFp = payload.deviceFp;
                try { sessionStorage.setItem(FP_STORAGE_KEY, JSON.stringify(currentNativeFp)); } catch (eFpS) {}
                try { applyAntiFingerprintHooks(); } catch (eFpA) {}
            }
            if (payload.masterState) {
                window.__cholibiRestoreFromNative(payload.masterState, payload.lockedVault);
            }
            renderHistoryAndCheckWarnings();
            renderVaultModalList();
        } catch (e) {}
    };

    window.__cholibiOnProxyResult = function(b64) {
        try {
            var info = JSON.parse(decodeURIComponent(escape(atob(b64))));
            if (info.realIp) currentDeviceIp = info.realIp;
            var el = document.getElementById('cb-proxy-msg');
            if (el) {
                el.textContent = (info.verified ? '🟢 ' : '🟡 ') + info.message;
                el.style.color = info.verified ? '#2ecc71' : '#f39c12';
            }
            addLog('🌐 ' + info.message);
            renderHistoryAndCheckWarnings();
        } catch (e) {}
    };

    bindFastTap('cb-export-hist', function() {
        window.__cholibiBridgeSend('EXPORT_HISTORY', {});
        showToast('📤 Đã copy lịch sử ra Clipboard!');
        addLog('📤 Đã xuất danh sách lịch sử đăng ký ra Clipboard.');
    });

    bindFastTap('cb-clear-hist', function() {
        historyRegistry = [];
        try { localStorage.removeItem(LOCAL_HISTORY_KEY); } catch (e) {}
        window.__cholibiBridgeSend('CLEAR_HISTORY', {});
        renderHistoryAndCheckWarnings();
        showToast('🗑️ Đã xóa sạch lịch sử!');
        addLog('🗑️ Đã xóa toàn bộ bộ nhớ lịch sử đăng ký.');
    });

    function markStepDone(stepNum) {
        for (var i = 1; i <= 4; i++) {
            var btn = document.getElementById('st-' + i);
            if (!btn) continue;
            var sp = btn.querySelector('span');
            if (!sp) {
                sp = document.createElement('span');
                btn.insertBefore(sp, btn.firstChild);
            }
            if (i <= stepNum) {
                btn.classList.add('done');
                sp.textContent = '☑️';
            } else {
                btn.classList.remove('done');
                sp.textContent = '⬜';
            }
        }
    }

    function minimizeToBubble(showAuto) {
        clearIdleMinimizeTimer();
        panel.style.display = 'none';
        bubble.style.display = 'flex';
        document.getElementById('cb-bubble-badge').style.display = showAuto ? 'block' : 'none';
    }

    function restorePanel() {
        bubble.style.display = 'none';
        panel.style.display = 'block';
        resetIdleMinimizeTimer();
    }

    bindFastTap('cb-min-btn', function() {
        minimizeToBubble(state.autoMode);
    });

    var isBottom = false;
    bindFastTap('cb-pos-btn', function() {
        isBottom = !isBottom;
        panel.style.top = isBottom ? 'auto' : '6px';
        panel.style.bottom = isBottom ? '10px' : 'auto';
        showToast(isBottom ? '⬇️ Đã chuyển bảng xuống dưới' : '⬆️ Đã chuyển bảng lên đầu');
    });

    var pwVisible = false;
    bindFastTap('cb-toggle-pw', function() {
        pwVisible = !pwVisible;
        document.getElementById('f-pw').type = pwVisible ? 'text' : 'password';
        document.getElementById('f-wd').type = pwVisible ? 'text' : 'password';
        this.innerText = pwVisible ? '🙈 Ẩn' : '👁️ MK';
        showToast(pwVisible ? '👁️ Đang hiện mật khẩu' : '🙈 Đã ẩn mật khẩu');
    });

    function updateLockBankBtnUI() {
        // Khóa phôi cố định luôn duy trì BẬT để giữ nguyên toàn bộ thông tin khi chuyển site
        state.lockBankProfile = true;
    }

    bindFastTap('cb-toggle-overlay', function() {
        var d = ensureProfileReadyForAction();
        saveState({ data: d }, true, false);
        window.__cholibiBridgeSend('TOGGLE_SYS_OVERLAY', {});
        showToast('🪟 Đã gửi lệnh Bật/Tắt Bảng Nổi Hệ Thống!');
    });

    bindFastTap('cb-exec-a11y', function() {
        var d = ensureProfileReadyForAction();
        saveState({ data: d }, true, false);
        window.__cholibiBridgeSend('TRIGGER_A11Y_STEP', d);
        showToast('🤖 Đã kích hoạt Điền Trợ Năng (Accessibility)!');
    });

    bindFastTap('cb-open-a11y', function() {
        window.__cholibiBridgeSend('OPEN_A11Y_SETTINGS', {});
        showToast('⚙️ Đang mở Cài đặt Trợ năng Android...');
    });

    bindFastTap('cb-copy-orbita-bm', function() {
        var d = ensureProfileReadyForAction();
        saveState({ data: d }, true, false);
        window.__cholibiBridgeSend('COPY_ORBITA_SCRIPT', {});
        showToast('📲 Đã copy Mã Nhúng Orbita!');
        addLog('📲 Đã copy Mã Nhúng Orbita kèm dữ liệu hiện tại.');
    });

    var a11ySyncDebounceTimer = null;
    function syncDataToAccessibility(d) {
        if (a11ySyncDebounceTimer) clearTimeout(a11ySyncDebounceTimer);
        a11ySyncDebounceTimer = setTimeout(function() {
            var sKey = state.site || currentSite;
            window.__cholibiBridgeSend('A11Y_SYNC', {
                site: sKey,
                url: SITE_MAP[sKey] ? SITE_MAP[sKey].url : '',
                username: d.username || '',
                pw: d.pw || '',
                wd: d.wd || '123123',
                name: d.name || '',
                phone: d.phone || '',
                bank: d.bank || '',
                branch: d.branch || '',
                stk: d.stk || '',
                stkBackup: d.stkBackup || ''
            });
        }, 450);
    }

    // Nhận kết quả trực tiếp từ CholibiAccessibilityService.java (A11Y_STATUS) hiển thị lên Panel & Bảng Nổi
    window.__cholibiOnA11yStatus = function(b64) {
        try {
            var info = JSON.parse(decodeURIComponent(escape(atob(b64))));
            var pktCmdId = String(info.cmdId || '');
            var cmd = String(info.cmd || '').toUpperCase();
            var st = String(info.status || 'PENDING').toUpperCase();
            var msg = String(info.message || '');
            if (cmd.indexOf('SLIDER_DRAG') !== -1 || cmd === 'DRAG_FAILED') {
                var dragOk = (cmd === 'SLIDER_DRAG_DONE' || st === 'SUCCESS' || st === 'OK');
                window.dispatchEvent(new CustomEvent('cholibi:native-drag-result', {
                    detail: { cmdId: pktCmdId, ok: dragOk, cmd: cmd, status: st, reason: msg || cmd }
                }));
                return;
            }
            var icon = st === 'SUCCESS' ? '🟢' : (st === 'FAILED' ? '🔴' : '🟡');
            var pct = st === 'SUCCESS' ? 100 : (st === 'FAILED' ? 0 : 45);
            setStatus(pct, icon + ' [A11y ' + st + '] ' + msg);
            updateFloatDockHeader(icon + ' ' + msg);
            showToast(icon + ' ' + msg);
            addLog('🤖 [A11y ' + st + '] ' + msg);
        } catch (e) {}
    };

    function getActiveData() {
        var d = state.data || {};
        var uEl = document.getElementById('f-user');
        var uVal = (uEl ? uEl.value : '').trim();
        var pEl = document.getElementById('f-pw');
        var pVal = (pEl ? pEl.value : '').trim();
        var wEl = document.getElementById('f-wd');
        var wVal = (wEl ? wEl.value : '').trim();
        var nEl = document.getElementById('f-name');
        var nVal = toUpperNoAccent(nEl ? nEl.value : '').trim();
        var phEl = document.getElementById('f-phone');
        var phVal = (phEl ? phEl.value : '').trim();
        var bkEl = document.getElementById('f-bank');
        var bkVal = (bkEl ? bkEl.value : '').trim();
        var brEl = document.getElementById('f-branch');
        var brVal = (brEl ? brEl.value : '').trim() || (d.branch || 'Ninh bình').trim();
        var sEl = document.getElementById('f-stk');
        var sVal = (sEl ? sEl.value : '').trim();
        var prEl = document.getElementById('f-proxy');
        var prVal = (prEl ? prEl.value : '').trim();

        if (fieldsHydrated) {
            return {
                username:  uVal,
                pw:        pVal,
                wd:        wVal || '123123',
                name:      nVal,
                phone:     phVal,
                bank:      bkVal || 'TECHCOMBANK',
                branch:    brVal || 'Ninh bình',
                stk:       sVal,
                stkBackup: '',
                proxy:     prVal
            };
        }
        return {
            username:  uVal || (d.username || '').trim(),
            pw:        pVal || (d.pw || '').trim(),
            wd:        wVal || (d.wd || '123123').trim(),
            name:      nVal || toUpperNoAccent(d.name || '').trim(),
            phone:     phVal || (d.phone || '').trim(),
            bank:      bkVal || (d.bank || 'TECHCOMBANK').trim(),
            branch:    brVal || (d.branch || 'Ninh bình').trim(),
            stk:       sVal || (d.stk || '').trim(),
            stkBackup: '',
            proxy:     prVal || (d.proxy || '').trim()
        };
    }

    var VIET_LAST_NAMES = ['NGUYEN', 'TRAN', 'LE', 'PHAM', 'HOANG', 'PHAN', 'VU', 'DANG', 'BUI', 'DO', 'HO', 'NGO'];
    var VIET_MID_NAMES  = ['VAN', 'QUOC', 'HOANG', 'DUC', 'MINH', 'HUU', 'GIA', 'TUAN', 'THANH', 'DINH'];
    var VIET_FIRST_NAMES = ['MINH', 'TUAN', 'NAM', 'HUNG', 'LONG', 'DAT', 'SON', 'KHOA', 'PHUC', 'BAO', 'KIEN', 'CUONG', 'THANG', 'HAI'];
    var USER_PREFIXES = ['hoangnam', 'minhtuan', 'quocbao', 'ducanh', 'thanhlong', 'vanminh', 'giabao', 'huuphuc', 'tuananh', 'dinhkhoa', 'dienphu'];
    var PHONE_PREFIXES = ['098', '097', '096', '038', '039', '091', '094', '090', '093', '079'];

    function generateSmartProfile(forceAllFields) {
        var cur = getActiveData();
        var lockBank = state.lockBankProfile !== false;

        // Nếu đang bật Khóa Phôi, luôn ưu tiên lấy giá trị từ lockedVault trước!
        if (lockBank) {
            if (lockedVault.pw) cur.pw = lockedVault.pw;
            if (lockedVault.wd) cur.wd = lockedVault.wd;
            if (lockedVault.name) cur.name = lockedVault.name;
            if (lockedVault.phone) cur.phone = lockedVault.phone;
            if (lockedVault.bank) cur.bank = lockedVault.bank;
            if (lockedVault.branch) cur.branch = lockedVault.branch;
            if (lockedVault.stk) cur.stk = lockedVault.stk;
            if (lockedVault.stkBackup) cur.stkBackup = lockedVault.stkBackup;
        }

        var uPrefix = USER_PREFIXES[Math.floor(Math.random() * USER_PREFIXES.length)];
        var uNum = String(Math.floor(100 + Math.random() * 899));
        // Khi forceAllFields=false (chỉ bổ sung trường còn thiếu từ ensureProfileReadyForAction), giữ nguyên cur.username nếu đã có!
        var newUser = (!forceAllFields && cur.username) ? cur.username : (uPrefix + uNum);

        var newPw = cur.pw;
        if (!newPw || (!lockBank && forceAllFields)) {
            newPw = 'Abc' + String(Math.floor(100000 + Math.random() * 899999));
        }

        var newWd = cur.wd || '123123';

        var newName = cur.name;
        if (!newName || (!lockBank && forceAllFields)) {
            var ln = VIET_LAST_NAMES[Math.floor(Math.random() * VIET_LAST_NAMES.length)];
            var mn = VIET_MID_NAMES[Math.floor(Math.random() * VIET_MID_NAMES.length)];
            var fn = VIET_FIRST_NAMES[Math.floor(Math.random() * VIET_FIRST_NAMES.length)];
            newName = ln + ' ' + mn + ' ' + fn;
        }

        var newPhone = cur.phone;
        if (!newPhone || (!lockBank && forceAllFields)) {
            var pPre = PHONE_PREFIXES[Math.floor(Math.random() * PHONE_PREFIXES.length)];
            var pRest = String(Math.floor(1000000 + Math.random() * 8999999));
            newPhone = pPre + pRest;
        }

        var newBank = cur.bank || 'TECHCOMBANK';
        var newBranch = cur.branch || 'Ninh bình';

        // Tuyệt đối không tự bịa số thẻ 9704... khi tạo phôi (tránh điền nhầm STK giả vào biểu mẫu ngân hàng)
        var newStk = cur.stk || '';
        var newStkBak = cur.stkBackup || '';

        var built = {
            username: newUser,
            pw: newPw,
            wd: newWd,
            name: newName,
            phone: newPhone,
            bank: newBank,
            branch: newBranch,
            stk: newStk,
            stkBackup: newStkBak,
            proxy: cur.proxy || ''
        };

        populateFieldsFromData(built, true);
        saveState({ data: built, retryUserCount: 0, usedBackupStk: false }, true, !lockBank);
        syncDataToAccessibility(built);
        renderHistoryAndCheckWarnings();
        return built;
    }

    function ensureProfileReadyForAction(forStepNum) {
        var d = getActiveData();
        // Fix P0-04: Ở Bước 3 (Thêm ngân hàng), nếu đang bật Khóa Phôi hoặc chưa có STK thì KHÔNG tự sinh STK ngẫu nhiên 9704...
        if (forStepNum === 3) {
            if (!d.stk && lockedVault && lockedVault.stk && !(lockedVault.clearedFields && lockedVault.clearedFields.stk)) {
                d.stk = String(lockedVault.stk);
                populateFieldsFromData(d, false);
            }
            return d;
        }
        if (!d.username || !d.pw || !d.name || !d.phone) {
            d = generateSmartProfile(false);
            showToast('🎲 Tự bổ sung trường trống: ' + d.username);
            addLog('🎲 Đã chuẩn bị đủ phôi TK: ' + d.username + ' | Họ tên: ' + d.name);
        }
        return d;
    }



    function mutateUsernameSuffix(forceNewPrefix) {
        var curUser = (document.getElementById('f-user').value || (state.data && state.data.username) || '').trim().toLowerCase();
        var prefixes = USER_PREFIXES || ['hoangnam', 'minhtuan', 'quocbao', 'ducanh', 'thanhlong', 'vanminh', 'giabao', 'huuphuc', 'tuananh', 'dinhkhoa', 'dienphu'];
        var currentPrefix = '';
        for (var pi = 0; pi < prefixes.length; pi++) {
            if (curUser.indexOf(prefixes[pi]) === 0) {
                currentPrefix = prefixes[pi];
                break;
            }
        }
        // Chọn một tiền tố KHÁC tiền tố cũ (tránh lặp lại hoangnam khi hoangnam đã bị đăng ký hết)
        var otherPrefixes = prefixes.filter(function(p) { return p !== currentPrefix; });
        var chosenPrefix = (forceNewPrefix || !currentPrefix || otherPrefixes.length === 0)
            ? otherPrefixes[Math.floor(Math.random() * otherPrefixes.length)]
            : prefixes[Math.floor(Math.random() * prefixes.length)];
        if (!chosenPrefix) chosenPrefix = 'quocbao';

        // Đuôi 3-4 chữ số ngẫu nhiên mới (từ 1000 đến 8999) để không bao giờ bị trùng 2 số cũ 46, 56, 67
        var suffixNum = String(Math.floor(1000 + Math.random() * 8999));
        var nextUser = chosenPrefix + suffixNum;
        // Giới hạn độ dài chuẩn 8-14 ký tự (phù hợp quy định 2-15 ký tự của TT88, 789P và Jun88)
        if (nextUser.length > 14) nextUser = nextUser.substring(0, 14);

        var fUserEl = document.getElementById('f-user');
        if (fUserEl) fUserEl.value = nextUser;
        state.data = state.data || {};
        state.data.username = nextUser;
        var d = getActiveData();
        if (!d.pw || !d.name || !d.phone) {
            d = generateSmartProfile(false);
            if (fUserEl) fUserEl.value = nextUser;
            d.username = nextUser;
        }
        saveState({ data: d, submittedUsername: '', registrationSubmitted: false }, true, false);
        syncDataToAccessibility(d);
        addLog('🎲 Đổi Tên TK mới chống trùng: ' + nextUser);
        return nextUser;
    }

    bindFastTap('cb-rand-user', function() {
        stepCancelRequested = false;
        var newU = mutateUsernameSuffix();
        showToast('🎲 TK mới: ' + newU);
        setStatus(0, '🟢 Đã đổi TK thành: ' + newU);
        if (registerInputs().length >= 3) {
            var inputsNow = registerInputs();
            var capNow = selectFieldSmart(inputsNow, ['mã xác minh', 'xác nhận mã', 'captcha', 'verification', 'checkcode'], ['mật khẩu', 'rút tiền', 'điện thoại'], null);
            if (capNow) setReactInput(capNow, '');
            fillRegistrationBySite(getActiveData());
        }
    });





    bindFastTap('cb-apply-proxy', function() {
        var rawP = document.getElementById('f-proxy').value.trim();
        var d = getActiveData();
        saveState({ data: d }, true, true, ['proxy']);
        showToast('🌐 Đang kiểm tra & copy Proxy...');
        window.__cholibiBridgeSend('SET_PROXY', { raw: rawP });
    });

    // KHI NGƯỜI DÙNG GÕ SỬA BẤT KỲ Ô NÀO (VD: NGUYEN TRUONG CA), LƯU NGAY VÀO KÉT SẮT KHÓA (userEdited = true)!
    var inputIdToDataKey = {
        'f-user': 'username', 'f-pw': 'pw', 'f-wd': 'wd', 'f-name': 'name',
        'f-phone': 'phone', 'f-bank': 'bank', 'f-branch': 'branch',
        'f-stk': 'stk', 'f-stk-bak': 'stkBackup', 'f-proxy': 'proxy'
    };

    var fieldEditSeq = 0;
    var fieldEditTimers = {};
    window.__cholibiOnVaultSavedAck = function(ackEditId) {
        // Native đã xác nhận lưu trường phôi vào LOCKED_PROFILE_VAULT_V6
    };

    function sendExplicitUserFieldEdit(fieldKey, fieldValue) {
        if (!fieldKey) return;
        var cleanVal = (fieldKey === 'name') ? toUpperNoAccent(fieldValue).trim() : String(fieldValue || '').trim();
        state.data = state.data || {};
        state.data[fieldKey] = cleanVal;
        state.dataUpdatedAt = Date.now();
        if (fieldKey !== 'username') {
            lockedVault.clearedFields = lockedVault.clearedFields || {};
            lockedVault[fieldKey] = cleanVal;
            if (cleanVal === '') {
                lockedVault.clearedFields[fieldKey] = true;
            } else {
                delete lockedVault.clearedFields[fieldKey];
            }
            lockedVault.updatedAt = Date.now();
        }
        try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) {}
        if (fieldEditTimers[fieldKey]) clearTimeout(fieldEditTimers[fieldKey]);
        fieldEditTimers[fieldKey] = setTimeout(function() {
            fieldEditSeq++;
            var editId = 'ed_' + Date.now() + '_' + fieldEditSeq;
            window.__cholibiBridgeSend('SAVE_USER_FIELD_EDIT', {
                editId: editId,
                field: fieldKey,
                value: cleanVal,
                lockBankProfile: state.lockBankProfile !== false
            });
        }, 120);
    }

    var nameInputEl = document.getElementById('f-name');
    if (nameInputEl) {
        nameInputEl.addEventListener('blur', function() {
            this.value = toUpperNoAccent(this.value).trim();
            sendExplicitUserFieldEdit('name', this.value);
        });
    }

    var infoInputs = ['f-user', 'f-pw', 'f-wd', 'f-name', 'f-phone', 'f-bank', 'f-branch', 'f-stk', 'f-proxy'];
    for (var idx = 0; idx < infoInputs.length; idx++) {
        (function(inputId) {
            var inp = document.getElementById(inputId);
            var dataKey = inputIdToDataKey[inputId];
            if (inp && dataKey) {
                inp.addEventListener('input', function() {
                    sendExplicitUserFieldEdit(dataKey, inp.value);
                    syncDataToAccessibility(getActiveData());
                    renderHistoryAndCheckWarnings();
                });
                inp.addEventListener('change', function() {
                    sendExplicitUserFieldEdit(dataKey, inp.value);
                });
            }
        })(infoInputs[idx]);
    }

    // ========================================================================
    // BỘ TRUY VẤN DOM SÂU (HỖ TRỢ CẢ SHADOW DOM & IFRAME WEBCLIP TRÊN AD88/XX8/CM88)
    // ========================================================================
    function collectAllDomRoots() {
        var roots = [document];
        var visited = [document];
        var queue = [document];
        while (queue.length > 0) {
            var cur = queue.shift();
            if (!cur || !cur.querySelectorAll) continue;
            var allEls = [];
            try { allEls = cur.querySelectorAll('*'); } catch (e0) { allEls = []; }
            for (var i = 0; i < allEls.length; i++) {
                var el = allEls[i];
                if (el.id === 'cb-panel' || el.id === 'cb-bubble' || el.id === 'cb-vault-modal' || el.id === 'cb-float-dock') continue;
                if (el.shadowRoot && visited.indexOf(el.shadowRoot) === -1) {
                    visited.push(el.shadowRoot);
                    roots.push(el.shadowRoot);
                    queue.push(el.shadowRoot);
                }
                if (el.tagName === 'IFRAME') {
                    try {
                        var idoc = el.contentDocument || (el.contentWindow && el.contentWindow.document);
                        if (idoc && visited.indexOf(idoc) === -1) {
                            visited.push(idoc);
                            roots.push(idoc);
                            queue.push(idoc);
                        }
                    } catch (eIframe) {}
                }
            }
        }
        return roots;
    }

    function queryAllDeepRaw(selector) {
        var roots = collectAllDomRoots();
        var out = [];
        for (var r = 0; r < roots.length; r++) {
            try {
                var found = roots[r].querySelectorAll(selector);
                for (var j = 0; j < found.length; j++) {
                    if (out.indexOf(found[j]) === -1) out.push(found[j]);
                }
            } catch (eQ) {}
        }
        return out;
    }

    function unwrapCrossOriginWebClipIframeIfNeeded() {
        try {
            var directInputs = document.querySelectorAll('input:not([type="hidden"])');
            if (directInputs.length > 0) return false;
            var iframes = document.querySelectorAll('iframe[src]');
            for (var i = 0; i < iframes.length; i++) {
                var ifr = iframes[i];
                var rect = ifr.getBoundingClientRect();
                if (rect.width >= window.innerWidth * 0.65 && rect.height >= window.innerHeight * 0.65) {
                    var canAccess = false;
                    try {
                        var docTest = ifr.contentDocument || (ifr.contentWindow && ifr.contentWindow.document);
                        if (docTest && docTest.querySelectorAll('input').length > 0) canAccess = true;
                    } catch (eCross) {
                        canAccess = false;
                    }
                    var srcUrl = String(ifr.getAttribute('src') || ifr.src || '').trim();
                    if (!canAccess && /^https?:\/\//i.test(srcUrl) && srcUrl !== location.href) {
                        location.replace(srcUrl);
                        return true;
                    }
                }
            }
        } catch (eUnwrap) {}
        return false;
    }

    function queryPageAll(selector) {
        return queryAllDeepRaw(selector).filter(function(el) {
            if (el.closest && (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock'))) return false;
            var r = el.getBoundingClientRect();
            return r.width > 0 && r.height > 0;
        });
    }

    function queryPageInput(selector) {
        var list = queryPageAll(selector);
        return list.length > 0 ? list[0] : null;
    }

    // Lấy văn bản thuần của trang web (Loại trừ tuyệt đối 100% #cb-panel, #cb-bubble, #cb-vault-modal, #cb-float-dock)
    function getCleanPageText() {
        if (!document.body) return '';
        var parts = [];
        var children = document.body.children;
        for (var i = 0; i < children.length; i++) {
            var ch = children[i];
            if (!ch) continue;
            var id = ch.id || '';
            if (id === 'cb-panel' || id === 'cb-bubble' || id === 'cb-vault-modal' || id === 'cb-float-dock') continue;
            var tag = (ch.tagName || '').toUpperCase();
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'IFRAME') continue;
            var t = ch.innerText || ch.textContent || '';
            if (t) parts.push(t);
        }
        return parts.join(' ').replace(/\s+/g, ' ').trim();
    }

    // Nhận diện trang đang trắng màn hình / quay chấm tròn hồng (Fix Lỗi #4: Không coi trang ngắn hợp lệ là preloading)
    function isPageBlankOrPreloading() {
        var inps = registerInputs();
        if (inps.length > 0) return false;
        var btns = queryPageAll('button, a, [role="button"]');
        var mediaCount = document.querySelectorAll('img, canvas, svg, iframe').length;
        var cleanPageTxt = getCleanPageText();
        if (cleanPageTxt.length < 12 && btns.length === 0 && mediaCount <= 1) {
            return true;
        }
        if (/Đang tải\.\.\.|Vui lòng đợi/i.test(cleanPageTxt) && cleanPageTxt.length < 90 && inps.length === 0 && btns.length === 0) {
            return true;
        }
        return false;
    }

    async function waitUntilPageReadyOrAutoReload(runId, maxWaitMs) {
        var limit = maxWaitMs || 8500;
        var start = Date.now();
        while (Date.now() - start < limit) {
            if (runId !== undefined && isRunCancelled(runId)) return false;
            if (!isPageBlankOrPreloading()) {
                try { sessionStorage.removeItem('__cholibi_blank_reload_cnt'); } catch (e) {}
                return true;
            }
            var elapsedSec = Math.ceil((Date.now() - start) / 1000);
            setStatus(10, '⏳ Đang chờ trang tải giao diện (' + elapsedSec + 's)...');
            await sleep(700);
        }
        if (isPageBlankOrPreloading()) {
            var reloadCnt = 0;
            try { reloadCnt = Number(sessionStorage.getItem('__cholibi_blank_reload_cnt') || 0); } catch (e) {}
            if (reloadCnt < 2) {
                try { sessionStorage.setItem('__cholibi_blank_reload_cnt', String(reloadCnt + 1)); } catch (e) {}
                showToast('🔄 Trang bị trắng quá 8s -> Tự động tải lại (' + (reloadCnt + 1) + '/2)...');
                addLog('🔄 Phát hiện trang trắng màn hình -> Tự động tải lại trang (' + (reloadCnt + 1) + '/2)...');
                setTimeout(function() { location.reload(); }, 250);
            } else {
                try { sessionStorage.removeItem('__cholibi_blank_reload_cnt'); } catch (e) {}
                showToast('🔄 Trang trắng nhiều lần -> Tự đổi sang link dự phòng...');
                addLog('🔄 Trang trắng quá 2 lần -> Tự động chuyển sang tên miền dự phòng!');
                window.__cholibiBridgeSend('ROTATE_MIRROR', { site: state.site || currentSite });
            }
            return false;
        }
        return true;
    }

    // Kiểm tra xem trên màn hình có đang mở Form Đăng Ký hay không (Fix Lỗi #1: Chặn tuyệt đối nhận nhầm trang Login!)
    function isRegistrationFormVisibleOnPage() {
        var pathAndHash = ((location.pathname || '') + ' ' + (location.search || '') + ' ' + (location.hash || '')).toLowerCase();
        if (/\/financial|\/home\/security|\/security|\/withdraw|\/account\/validatepage|\/account\/withdrawaccounts|\/playerinfo|\/promocenter/i.test(pathAndHash)) {
            return false;
        }
        if (/\/login|\bsignin\b|dang-nhap/i.test(pathAndHash) && !/\/register|\/signup/i.test(pathAndHash)) {
            return false;
        }
        var inps = registerInputs();
        if (/\/register|\bregister\b|\/signup|\bsignup\b/i.test(pathAndHash) && inps.length >= 2) {
            return true;
        }
        if (inps.length >= 3) {
            var pwCount = inps.filter(function(el) { return (el.type || '').toLowerCase() === 'password'; }).length;
            var hasUserField = Boolean(selectFieldSmart(
                inps,
                ['tên tài khoản', 'từ 2-15', 'tên đăng nhập', 'tên người dùng', 'username', 'account', 'tài khoản'],
                ['mật khẩu', 'họ và tên', 'ngân hàng', 'số tài khoản', 'chi nhánh', 'mật khẩu đăng nhập tài khoản game'],
                null
            ));
            var hasRegOnlyField = Boolean(selectFieldSmart(
                inps,
                ['xác nhận mật khẩu', 'nhập lại mật khẩu', 'confirm', 'họ và tên', 'họ tên', 'tên thật', 'realname', 'fullname', 'số điện thoại', 'điện thoại', 'số di động', 'phone'],
                null,
                null
            ));
            if (hasUserField && (pwCount >= 2 || (pwCount >= 1 && hasRegOnlyField))) {
                return true;
            }
        }
        return false;
    }

    // Nhận diện chính xác người dùng đang đứng ở màn hình Bước mấy (Tách biệt 100% khỏi chữ trong #cb-panel!)
    function detectCurrentScreenStage() {
        var pathAndHash = ((location.pathname || '') + ' ' + (location.search || '') + ' ' + (location.hash || '')).toLowerCase();
        var sKey = (state && state.site) || currentSite;
        var grp = (SITE_MAP[sKey] && SITE_MAP[sKey].group) ? SITE_MAP[sKey].group : 'GROUP_B';

        // 0. Nhánh URL trực tiếp tốc độ cao cho GROUP_D (Jun88 V1 & 78WIN):
        if (grp === 'GROUP_D' || /\/signup|\/account\/validatepage|\/account\/withdrawaccounts\/bankcards|\/playerinfo|\/promocenter/i.test(pathAndHash)) {
            if (/\/signup|\/register/i.test(pathAndHash) || isRegistrationFormVisibleOnPage()) {
                return 1;
            }
            if (/\/account\/validatepage/i.test(pathAndHash) || queryPageInput('input[placeholder*="Mã xác minh SMS" i]')) {
                return 2;
            }
            if (/\/account\/withdrawaccounts\/bankcards/i.test(pathAndHash) || queryPageInput('input[placeholder*="Tên Ngân Hàng" i]')) {
                return 3;
            }
            if (/\/playerinfo|\/promocenter/i.test(pathAndHash) || queryPageInput('input[placeholder*="Mã pin rút tiền" i]')) {
                return 4;
            }
            if (grp === 'GROUP_D') {
                return 1;
            }
        }

        // 1. Ưu tiên tuyệt đối: Nếu đang ở URL /register hoặc đang hiển thị Form Đăng Ký -> LUÔN LÀ BƯỚC 1!
        if (/\/register|\bregister\b|\/signup|\bsignup\b/i.test(pathAndHash) || isRegistrationFormVisibleOnPage()) {
            return 1;
        }

        var pageTxt = getCleanPageText();

        // 2. Kiểm tra Bước 4 (Trang Bảo Mật / Xác minh SĐT bằng SMS trên GROUP_A)
        if (/\/home\/security|active=0/i.test(pathAndHash) ||
            queryPageInput('input[placeholder*="nhập mã SMS" i]') ||
            /Mã xác minh điện thoại di động|Nhập mã SMS|Đã thêm \(Chưa được xác minh\)/i.test(pageTxt)) {
            return 4;
        }

        // 3. Kiểm tra Bước 2 (Màn hình Đặt mật khẩu rút tiền 6 số)
        if ((findByText('div, span, p, h1, h2, h3', 'đặt mật khẩu rút tiền', false) ||
             findByText('div, span, p, h1, h2, h3', 'Cài đặt mật khẩu rút tiền', false)) &&
            (findByText('div, span, p, h1, h2, h3', 'Xác nhận mật khẩu rút tiền', false) ||
             findSixBoxPinContainers().length >= 2)) {
            return 2;
        }

        // 4. Kiểm tra Bước 3 (Màn hình Rút tiền / Thêm tài khoản ngân hàng)
        if (/\/financial|\/withdraw/i.test(pathAndHash) ||
            /TRUNG TÂM TÀI VỤ|Thêm tài khoản ngân hàng|Chọn ngân hàng phát hành|Tài khoản nhận\s*\(/i.test(pageTxt) ||
            queryPageInput('input[placeholder*="chọn ngân hàng" i], input[placeholder*="9704"], input[placeholder*="số tài khoản ngân hàng" i]')) {
            return 3;
        }

        return 1;
    }

    function setSingleInputValueRaw(el, strVal) {
        var prevVal = el.value;
        var proto = el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
        var descriptor = Object.getOwnPropertyDescriptor(proto, 'value');
        if (descriptor && descriptor.set) {
            descriptor.set.call(el, strVal);
        } else {
            el.value = strVal;
        }
        if (el._valueTracker && typeof el._valueTracker.setValue === 'function') {
            try { el._valueTracker.setValue(prevVal); } catch (eVt) {}
        }
        var lastChar = strVal.length > 0 ? strVal.charAt(strVal.length - 1) : '0';
        var charCode = lastChar.charCodeAt(0) || 48;
        var keyCodeStr = /^\d$/.test(lastChar) ? ('Digit' + lastChar) : ('Key' + lastChar.toUpperCase());
        try {
            el.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: lastChar, code: keyCodeStr, keyCode: charCode, which: charCode }));
            el.dispatchEvent(new KeyboardEvent('keypress', { bubbles: true, cancelable: true, key: lastChar, code: keyCodeStr, keyCode: charCode, which: charCode, charCode: charCode }));
        } catch (e) {}
        try {
            if (typeof InputEvent === 'function') {
                el.dispatchEvent(new InputEvent('beforeinput', { bubbles: true, cancelable: true, data: lastChar, inputType: 'insertText' }));
                el.dispatchEvent(new InputEvent('input', { bubbles: true, data: lastChar, inputType: 'insertText' }));
            } else {
                el.dispatchEvent(new Event('input', { bubbles: true }));
            }
        } catch (e) {
            el.dispatchEvent(new Event('input', { bubbles: true }));
        }
        try {
            el.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: lastChar, code: keyCodeStr, keyCode: charCode, which: charCode }));
        } catch (e) {}
    }

    function setReactInput(el, val, logName, keepFocus) {
        if (!el || el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
        var strVal = String(val !== undefined && val !== null ? val : '');
        try { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
        try { el.focus(); } catch (e) {}
        setSingleInputValueRaw(el, strVal);
        el.dispatchEvent(new Event('change', { bubbles: true }));
        try {
            el.style.outline = '2px solid #2ecc71';
            el.style.boxShadow = '0 0 8px rgba(46,204,113,0.75)';
        } catch (e) {}
        if (!keepFocus) {
            try { el.blur(); } catch (e) {}
        }
        if (logName) {
            var isSecret = /pass|pw|wd|otp|pin|mật khẩu|mk/i.test(logName);
            addLog('✅ Điền "' + logName + '"' + (isSecret ? ' [ĐÃ ẨN]' : ': ' + strVal));
        }
        return true;
    }

    // Điền từng ký tự từ từ theo nhịp người thật đăng ký (Human-like Rhythmic Typing)
    async function typeHumanInput(el, val, logName, keepFocus, runId, pctProgress, stepLabel) {
        if (!el || el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
        if (runId !== undefined && isRunCancelled(runId)) return false;
        var strVal = String(val !== undefined && val !== null ? val : '');
        var isSecret = /pass|pw|wd|otp|pin|mật khẩu|mk/i.test(logName || '');
        var shownVal = isSecret ? '******' : strVal;

        if (stepLabel) {
            setStatus(pctProgress || 12, '✍️ ' + stepLabel + ': Đang gõ ' + (logName || 'ô') + ' (' + shownVal + ')...');
            updateFloatDockHeader('✍️ Đang gõ ' + (logName || '') + '...');
        }

        try { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
        await sleep(220);
        if (runId !== undefined && isRunCancelled(runId)) return false;

        try {
            var r = el.getBoundingClientRect();
            var cx = r.left + r.width / 2;
            var cy = r.top + r.height / 2;
            el.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, clientX: cx, clientY: cy }));
            el.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, clientX: cx, clientY: cy }));
            el.click();
        } catch (e) {}
        try { el.focus(); } catch (e) {}
        try {
            el.style.outline = '2px solid #f39c12';
            el.style.boxShadow = '0 0 10px rgba(243,156,18,0.85)';
        } catch (e) {}
        await sleep(180);
        if (runId !== undefined && isRunCancelled(runId)) return false;

        // Xóa sạch giá trị cũ trước khi gõ từng ký tự
        setSingleInputValueRaw(el, '');
        await sleep(90);

        // Gõ từng ký tự một như người thật (45ms - 70ms mỗi ký tự)
        var currentTyped = '';
        for (var c = 0; c < strVal.length; c++) {
            if (runId !== undefined && isRunCancelled(runId)) return false;
            currentTyped += strVal.charAt(c);
            setSingleInputValueRaw(el, currentTyped);
            var charDelay = 45 + Math.floor(Math.random() * 28);
            await sleep(charDelay);
        }

        // Đảm bảo giá trị cuối cùng khớp 100% và phát sự kiện change
        if (el.value !== strVal) {
            setSingleInputValueRaw(el, strVal);
        }
        el.dispatchEvent(new Event('change', { bubbles: true }));
        try {
            el.style.outline = '2px solid #2ecc71';
            el.style.boxShadow = '0 0 8px rgba(46,204,113,0.75)';
        } catch (e) {}

        await sleep(180);
        if (!keepFocus) {
            try { el.blur(); } catch (e) {}
        }
        await sleep(160);
        if (String(el.value || '') !== strVal) {
            setSingleInputValueRaw(el, strVal);
            el.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (logName) {
            addLog('✅ Đã điền nhịp "' + logName + '": ' + shownVal);
        }
        return true;
    }

    function findByText(selector, text, exact) {
        var norm = function(s) { return (s || '').replace(/\s+/g, ' ').trim().toUpperCase(); };
        var target = norm(text);
        var els = queryAllDeepRaw(selector);
        var matches = els.filter(function(el) {
            if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
            var r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) return false;
            var content = norm(el.innerText || el.textContent);
            if (!content) return false;
            if (exact) return content === target;
            if (content.indexOf(target) === -1) return false;
            // Chặn việc khớp nhầm thẻ cha khổng lồ (<div id="app">) khi exact=false
            if (content.length > target.length + 75 || r.height > 150) return false;
            return true;
        });
        if (matches.length === 0) return null;
        // Ưu tiên phần tử sâu nhất / ngắn gọn nhất (tránh bấm nhầm container bao ngoài)
        matches.sort(function(a, b) {
            var lenA = norm(a.innerText || a.textContent).length;
            var lenB = norm(b.innerText || b.textContent).length;
            if (lenA !== lenB) return lenA - lenB;
            var rA = a.getBoundingClientRect();
            var rB = b.getBoundingClientRect();
            return (rA.width * rA.height) - (rB.width * rB.height);
        });
        return matches[0];
    }

    async function waitForSelector(selector, timeout, runId) {
        var maxTime = timeout || 6500;
        var start = Date.now();
        while (Date.now() - start < maxTime) {
            if (runId !== undefined && isRunCancelled(runId)) return null;
            var el = queryPageInput(selector);
            if (el) return el;
            await sleep(300);
        }
        return queryPageInput(selector);
    }

    function findVirtualKeypadRoot() {
        var containers = Array.from(document.querySelectorAll(
            '.van-number-keyboard, [class*="keyboard" i], [class*="keypad" i], .van-popup, [role="dialog"], div, ul'
        ));
        for (var i = containers.length - 1; i >= 0; i--) {
            var c = containers[i];
            if (c.closest('#cb-panel') || c.closest('#cb-bubble') || c.closest('#cb-float-dock')) continue;
            var r = c.getBoundingClientRect();
            if (r.width < 120 || r.height < 80) continue;
            var foundDigits = {};
            var leaves = c.querySelectorAll('div, button, span, li, i');
            for (var j = 0; j < leaves.length; j++) {
                var leaf = leaves[j];
                if (leaf.children.length === 0) {
                    var t = (leaf.innerText || '').trim();
                    if (/^[0-9]$/.test(t)) foundDigits[t] = true;
                }
            }
            if (Object.keys(foundDigits).length >= 9) return c;
        }
        return document.body;
    }

    // Tìm các cụm 6 ô vuông nhập Mật khẩu rút tiền trên CM88 / SC88 / C168 / TT88 / 789P / MMOO
    function findSixBoxPinContainers() {
        var candidates = Array.from(document.querySelectorAll(
            'ul.van-password-input__security, .van-password-input ul, [class*="password-input" i] ul, [class*="password-input" i], ul, div'
        )).filter(function(el) {
            if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
            var r = el.getBoundingClientRect();
            if (r.width < 140 || r.height < 28 || r.height > 90) return false;
            var children = Array.from(el.children).filter(function(ch) {
                var cr = ch.getBoundingClientRect();
                return cr.width >= 18 && cr.width <= 85 && cr.height >= 24 && cr.height <= 85;
            });
            return children.length === 6;
        });
        // Loại bỏ các thẻ cha bị trùng nếu thẻ con ul đã nằm trong danh sách
        return candidates.filter(function(el) {
            return !candidates.some(function(other) { return other !== el && el.contains(other); });
        });
    }

    function countFilledDotsInPinContainer(container) {
        if (!container) return 0;
        var count = 0;
        var cells = container.children;
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var txt = (cell.innerText || cell.textContent || '').trim();
            var hasDotChild = Array.from(cell.querySelectorAll('i, span, div')).some(function(sub) {
                var sr = sub.getBoundingClientRect();
                var st = window.getComputedStyle(sub);
                return (sr.width >= 4 && sr.height >= 4 && st.display !== 'none' && st.visibility !== 'hidden' && st.opacity !== '0');
            });
            if (txt.length > 0 || hasDotChild) count++;
        }
        return count;
    }

    // Gõ bàn phím số ảo chậm rãi như người thật (340ms/số) và CHỈ phát 1 sự kiện duy nhất để KHÔNG BAO GIỜ bị nhân đôi số (1 -> 11)!
    async function typeOnVirtualKeypad(pinStr, runId, targetPinContainer) {
        var digits = (pinStr || '123123').trim().split('');
        if (targetPinContainer) {
            var firstBox = targetPinContainer.children[0] || targetPinContainer;
            try { firstBox.click(); } catch (e) {}
            await sleep(550);
        }
        var keypadRoot = findVirtualKeypadRoot();
        for (var i = 0; i < digits.length; i++) {
            if (runId !== undefined && isRunCancelled(runId)) return;
            if (targetPinContainer && countFilledDotsInPinContainer(targetPinContainer) >= 6) break;
            var digit = digits[i];
            var keys = Array.from(keypadRoot.querySelectorAll('div, button, span, li, i')).filter(function(el) {
                if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
                var txt = (el.innerText || '').trim();
                var rect = el.getBoundingClientRect();
                return txt === digit && el.children.length === 0 && rect.width > 18 && rect.height > 18 && rect.top > window.innerHeight * 0.40;
            });
            if (keys.length === 0) {
                keys = Array.from(keypadRoot.querySelectorAll('div, button, span, li, i')).filter(function(el) {
                    if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
                    var txt = (el.innerText || '').trim();
                    var rect = el.getBoundingClientRect();
                    return txt === digit && el.children.length === 0 && rect.width > 15 && rect.height > 15;
                });
            }
            var keyEl = keys[keys.length - 1];
            if (keyEl) {
                var clickTarget = keyEl.closest('[role="button"], .van-key, button, li') || keyEl;
                var dotsBefore = targetPinContainer ? countFilledDotsInPinContainer(targetPinContainer) : -1;
                try {
                    clickTarget.click();
                } catch (e) {}
                await sleep(160);
                var dotsAfter = targetPinContainer ? countFilledDotsInPinContainer(targetPinContainer) : -1;
                // Chỉ dùng touchstart nếu click() không làm tăng số ô đã điền
                if (targetPinContainer && dotsBefore >= 0 && dotsAfter === dotsBefore) {
                    try {
                        clickTarget.dispatchEvent(new TouchEvent('touchstart', { bubbles: true, cancelable: true }));
                        clickTarget.dispatchEvent(new TouchEvent('touchend', { bubbles: true, cancelable: true }));
                    } catch (e2) {}
                }
            }
            await sleep(320);
        }
    }

    async function closeAllPopupsUniversal(runId) {
        for (var round = 0; round < 6; round++) {
            if (runId !== undefined && isRunCancelled(runId)) return;
            var clicked = false;

            var textCloseBtn = findByText('.modal button, .van-dialog button, .van-popup button, [role="dialog"] button, button, span, div, a', 'ĐÓNG', true) ||
                               findByText('.modal button, .van-dialog button, .van-popup button, [role="dialog"] button, button, span, div, a', 'Đóng', true) ||
                               findByText('button, span, div', 'Ẩn vĩnh viễn', true);
            if (!textCloseBtn && !/\/promocenter/i.test(location.pathname) && !queryPageInput('input[placeholder*="Tên Ngân Hàng" i]')) {
                var pageWelcomeTxt = getCleanPageText();
                if (/Chào mừng đến với|Thông báo hệ thống/i.test(pageWelcomeTxt)) {
                    textCloseBtn = findByText('.modal button, [role="dialog"] button, button', 'OK', true);
                }
            }
            if (textCloseBtn && !textCloseBtn.closest('#cb-panel')) {
                textCloseBtn.click();
                addLog('🧹 Đóng popup thông báo (' + (round + 1) + ')');
                clicked = true;
                await sleep(550);
                continue;
            }

            var iconCloseSelectors = [
                '.modal .close', '.modal-header .close', '[ng-click*="close" i]', '[ng-click*="cancel" i]',
                '.van-popup__close-icon', '.van-dialog__cancel', '.el-dialog__headerbtn', '.ant-modal-close',
                'i.van-icon-cross', 'i.van-icon-close', 'i.fa-times', 'i.fa-close', '[aria-label="Close" i]',
                '[class*="close-icon" i]', '[class*="close_btn" i]', '[class*="btn-close" i]'
            ].join(', ');

            var iconCloses = queryPageAll(iconCloseSelectors).filter(function(el) {
                var r = el.getBoundingClientRect();
                if (r.width <= 8 || r.height <= 8) return false;
                var formParent = el.closest('form');
                if (formParent && formParent.querySelectorAll('input').length > 3) return false;
                // Không bấm nhầm nút X xóa chữ bên trong ô input
                if (el.closest('.van-field, .el-input, .input-group')) return false;
                return true;
            });

            if (iconCloses.length > 0) {
                iconCloses[iconCloses.length - 1].click();
                addLog('🧹 Đóng nút ✕ popup (' + (round + 1) + ')');
                clicked = true;
                await sleep(550);
                continue;
            }

            // Hỗ trợ đóng cả nút X góc trên bên phải VÀ nút (X) tròn ở đáy giữa popup "Đăng Ký Thành Công!" trên CM88/SC88/C168
            var allSmallNodes = Array.from(document.querySelectorAll('span, i, button, div, a, svg, img')).filter(function(el) {
                if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
                if (el.closest('.van-field, .el-input, .input-group, form')) return false;
                if (el.children.length > 2) return false;
                var r = el.getBoundingClientRect();
                if (r.width < 12 || r.width > 65 || r.height < 12 || r.height > 65) return false;
                var t = (el.innerText || el.textContent || '').trim();
                var cls = String(el.className || '') + ' ' + String(el.getAttribute('src') || '');
                var isTopRightX = /^(×|✕|✖|╳|X|x)$/.test(t) && r.top > 20 && r.top < window.innerHeight * 0.45 && r.right > window.innerWidth * 0.65;
                var isBottomCenterClose = (/^(×|✕|✖|╳|X|x)$/.test(t) || /close|cross|cancel/i.test(cls)) &&
                                          r.top > window.innerHeight * 0.55 && r.top < window.innerHeight * 0.92 &&
                                          Math.abs((r.left + r.width / 2) - (window.innerWidth / 2)) < 75;
                return isTopRightX || isBottomCenterClose;
            });

            if (allSmallNodes.length > 0) {
                allSmallNodes[allSmallNodes.length - 1].click();
                addLog('🧹 Đóng nút (X) popup (' + (round + 1) + ')');
                clicked = true;
                await sleep(550);
                continue;
            }

            if (!clicked) break;
        }
    }

    function registerInputs() {
        var rawInps = (typeof queryAllDeepRaw === 'function') ? queryAllDeepRaw('input') : Array.from(document.querySelectorAll('input'));
        var filtered = rawInps.filter(function(el) {
            if (el.closest && (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock') || el.closest('#cb-vault-modal'))) return false;
            var t = (el.type || '').toLowerCase();
            if (['hidden','checkbox','radio','submit','button','file'].indexOf(t) !== -1) return false;
            var r = el.getBoundingClientRect();
            return r.width > 20 && r.height > 10;
        });
        if (filtered.length === 0 && typeof unwrapCrossOriginWebClipIframeIfNeeded === 'function') {
            unwrapCrossOriginWebClipIframeIfNeeded();
        }
        return filtered;
    }

    function getInputDirectText(el) {
        if (!el) return '';
        return [
            el.name || '',
            el.id || '',
            el.placeholder || '',
            el.getAttribute('aria-label') || '',
            el.getAttribute('ng-model') || '',
            el.getAttribute('formcontrolname') || '',
            el.getAttribute('data-placeholder') || ''
        ].join(' ').toLowerCase();
    }

    function getInputFullContext(el) {
        if (!el) return '';
        var parts = [getInputDirectText(el)];
        var container = el.closest('.form-group, .van-field, .van-cell, .el-form-item, .ant-form-item, .input-group, .input-box, .form-item, li');
        if (!container || container.querySelectorAll('input:not([type="hidden"])').length > 1) {
            container = el.parentElement;
        }
        if (container && container.querySelectorAll('input:not([type="hidden"])').length <= 1) {
            var labels = container.querySelectorAll('label, .van-field__label, .title, span, p, div');
            for (var i = 0; i < labels.length; i++) {
                var lb = labels[i];
                if (lb.children.length <= 2) {
                    var txt = (lb.innerText || lb.textContent || '').trim();
                    if (txt && txt.length <= 60) parts.push(txt);
                }
            }
        }
        // Chỉ lấy thêm parent cấp 2 nếu parent cấp 2 cũng chỉ bao quanh đúng 1 ô input duy nhất (chống trộn lẫn chữ của cả form trên CM88!)
        if (el.parentElement && el.parentElement.parentElement) {
            var p2 = el.parentElement.parentElement;
            if (p2.querySelectorAll && p2.querySelectorAll('input:not([type="hidden"])').length <= 1) {
                var pTxt = (p2.innerText || '').trim();
                if (pTxt && pTxt.length <= 120) parts.push(pTxt);
            }
        }
        return parts.join(' ').toLowerCase();
    }

    function selectFieldSmart(inputs, patterns, excludePatterns, fallbackIndex) {
        // Ưu tiên 1: Khớp trực tiếp trên placeholder / name / id của chính thẻ <input> (không bị nhiễu bởi nhãn ngoài)
        var directMatch = inputs.find(function(el) {
            var directKey = getInputDirectText(el);
            if (!directKey) return false;
            if (excludePatterns && excludePatterns.some(function(ex) { return directKey.indexOf(ex) >= 0; })) {
                return false;
            }
            return patterns.some(function(p) { return directKey.indexOf(p) >= 0; });
        });
        if (directMatch) return directMatch;

        // Ưu tiên 2: Khớp trên ngữ cảnh dòng chứa riêng ô input đó
        var found = inputs.find(function(el) {
            var key = getInputFullContext(el);
            if (excludePatterns && excludePatterns.some(function(ex) { return key.indexOf(ex) >= 0; })) {
                return false;
            }
            return patterns.some(function(p) { return key.indexOf(p) >= 0; });
        });
        return found || (typeof fallbackIndex === 'number' ? inputs[fallbackIndex] : null);
    }

    // ========================================================================
    // SỬA TRIỆT ĐỂ LỖI 3: NHẬN DIỆN CẢ LỖI 429 RATE LIMIT, LỖI FORM & LỖI TRÙNG TK/BANK
    // ========================================================================
    function detectPageAlertStatus() {
        var alertSelectors = [
            '.van-toast', '.van-dialog', '.van-notify', '.van-field__error-message',
            '.el-message', '.el-form-item__error', '.ant-message', '.ant-form-item-explain-error',
            '.toast', '.alert', '.error', '.err', '[role="alert"]',
            '[class*="error" i]', '[class*="toast" i]', '[class*="msg" i]',
            '.modal-body', '.sweet-alert', '.popup-content', '.layer-content'
        ].join(', ');

        var nodes = Array.from(document.querySelectorAll(alertSelectors));
        for (var i = 0; i < nodes.length; i++) {
            var el = nodes[i];
            if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) continue;
            if (el.children.length > 8) continue;
            var r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) continue;
            var txt = (el.innerText || el.textContent || '').trim().toLowerCase();
            if (!txt || txt.length > 200) continue;

            // 0. Kiểm tra lỗi 403 API (Dùng regex tách từ để không bắt nhầm SĐT có cụm 403 - Fix B5)
            if (txt.indexOf('http failure response') !== -1 ||
                (/(^|[^\d])403([^\d]|$)/.test(txt) && /register|đăng ký/i.test(txt))) {
                return 'HTTP_403_BLOCK';
            }

            // 1. Kiểm tra lỗi 429 Rate Limit (Dùng regex tách từ để không bắt nhầm SĐT có cụm 429 - Fix B5)
            if (/(^|[^\d])429([^\d]|$)/.test(txt) ||
                txt.indexOf('kết nối trực tuyến là bất thường') !== -1 ||
                txt.indexOf('thao tác quá nhanh') !== -1 ||
                txt.indexOf('quá nhiều yêu cầu') !== -1) {
                return 'RATE_LIMIT_429';
            }

            // 1b. Kiểm tra báo "Đã vượt quá số lượng ngân hàng tối đa" (Tài khoản đã gắn đủ ngân hàng từ trước)
            if (txt.indexOf('đã vượt quá số lượng ngân hàng tối đa') !== -1 ||
                txt.indexOf('vượt quá số lượng ngân hàng') !== -1 ||
                txt.indexOf('số lượng thẻ ngân hàng đã đạt giới hạn') !== -1) {
                return 'MAX_BANK_REACHED';
            }

            // 2. Kiểm tra trùng STK ngân hàng (Bao gồm cả câu thông báo của CM88/SC88/C168: "Tài khoản rút tiền đó đã được liên kết bởi một thành viên khác")
            if (txt.indexOf('tài khoản ngân hàng đã tồn tại') !== -1 ||
                txt.indexOf('tài khoản rút tiền đó đã được liên kết') !== -1 ||
                txt.indexOf('đã được liên kết bởi một thành viên khác') !== -1 ||
                txt.indexOf('đã được liên kết bởi thành viên khác') !== -1 ||
                txt.indexOf('số tài khoản đã tồn tại') !== -1 ||
                txt.indexOf('số tài khoản này đã tồn tại') !== -1 ||
                txt.indexOf('ngân hàng đã được liên kết') !== -1 ||
                txt.indexOf('thẻ ngân hàng đã tồn tại') !== -1) {
                return 'DUP_BANK';
            }

            // 2b. Kiểm tra trùng Số điện thoại (8KBET: "Số điện thoại này đã tồn tại", AD88/XX8/CM88: "Số điện thoại di động đã được liên kết với tài khoản khác")
            if (txt.indexOf('số điện thoại này đã tồn tại') !== -1 ||
                txt.indexOf('số điện thoại đã tồn tại') !== -1 ||
                txt.indexOf('số điện thoại di động đã được liên kết') !== -1 ||
                txt.indexOf('số điện thoại đã được liên kết') !== -1 ||
                txt.indexOf('số điện thoại đã được đăng ký') !== -1 ||
                txt.indexOf('số điện thoại đã được sử dụng') !== -1 ||
                txt.indexOf('số điện thoại này đã được đăng ký') !== -1 ||
                txt.indexOf('điện thoại đã được liên kết với tài khoản khác') !== -1) {
                return 'DUP_PHONE';
            }

            // 3. Kiểm tra trùng Tên tài khoản
            if (txt.indexOf('tên tài khoản này đã tồn tại') !== -1 ||
                txt.indexOf('tài khoản đã tồn tại') !== -1 ||
                txt.indexOf('tên đăng nhập đã tồn tại') !== -1 ||
                txt.indexOf('tên đăng nhập này đã được sử dụng') !== -1 ||
                (/tài khoản\s+[a-z0-9_]+\s+đã tồn tại/i.test(txt))) {
                return 'DUP_ACCOUNT';
            }

            // 4. Kiểm tra sai Captcha / lỗi dữ liệu khác (8KBET: "Lỗi mã xác minh hoặc lỗi đầu vào, vui lòng quay lại")
            if (txt.indexOf('mã xác nhận không chính xác') !== -1 ||
                txt.indexOf('mã xác minh không đúng') !== -1 ||
                txt.indexOf('mã xác minh lỗi') !== -1 ||
                txt.indexOf('lỗi mã xác minh') !== -1 ||
                txt.indexOf('mã xác minh không chính xác') !== -1 ||
                txt.indexOf('captcha không đúng') !== -1) {
                return 'ERR_CAPTCHA';
            }
        }
        var popups = (typeof queryAllDeepRaw === 'function')
            ? queryAllDeepRaw('.van-toast, .van-dialog, .van-popup, .modal, [role="alert"], [role="dialog"], [class*="msg" i], [class*="toast" i], [class*="dialog" i], [class*="modal" i]')
            : Array.from(document.querySelectorAll('.van-toast, .van-dialog, .van-popup, .modal, [role="alert"], [role="dialog"], [class*="msg" i], [class*="toast" i]'));
        for (var p = 0; p < popups.length; p++) {
            if (popups[p].closest && (popups[p].closest('#cb-panel') || popups[p].closest('#cb-vault-modal') || popups[p].closest('#cb-float-dock'))) continue;
            var pr = popups[p].getBoundingClientRect ? popups[p].getBoundingClientRect() : { width: 0, height: 0 };
            if (pr.width === 0 || pr.height === 0) continue;
            var pTxt = (popups[p].innerText || popups[p].textContent || '').toLowerCase();
            if (pTxt.length > 300) continue;
            if (pTxt.indexOf('số điện thoại này đã tồn tại') !== -1 ||
                pTxt.indexOf('số điện thoại đã tồn tại') !== -1 ||
                pTxt.indexOf('số điện thoại di động đã được liên kết') !== -1 ||
                pTxt.indexOf('số điện thoại đã được liên kết') !== -1 ||
                pTxt.indexOf('số điện thoại đã được đăng ký') !== -1 ||
                pTxt.indexOf('điện thoại đã được liên kết với tài khoản khác') !== -1) {
                return 'DUP_PHONE';
            }
            if (pTxt.indexOf('lỗi mã xác minh') !== -1 ||
                pTxt.indexOf('mã xác minh lỗi') !== -1 ||
                pTxt.indexOf('mã xác nhận không chính xác') !== -1) {
                return 'ERR_CAPTCHA';
            }
            if (pTxt.indexOf('tên đăng nhập này đã được sử dụng') !== -1 ||
                pTxt.indexOf('tên tài khoản này đã tồn tại') !== -1) {
                return 'DUP_ACCOUNT';
            }
            if (pTxt.indexOf('tài khoản rút tiền đó đã được liên kết') !== -1 ||
                pTxt.indexOf('đã được liên kết bởi một thành viên khác') !== -1 ||
                pTxt.indexOf('tài khoản ngân hàng đã tồn tại') !== -1) {
                return 'DUP_BANK';
            }
            if (pTxt.indexOf('đã vượt quá số lượng ngân hàng tối đa') !== -1) {
                return 'MAX_BANK_REACHED';
            }
        }
        return null;
    }

    // Fix B3: Chỉ bấm nút Đóng/OK nằm BÊN TRONG modal đang mở, không bao giờ bấm nhầm nút Xác nhận của form
    function dismissErrorDialogButton() {
        var modalSelectors = '.van-dialog, .sweet-alert, .modal, [role="dialog"]';
        var modals = queryPageAll(modalSelectors);
        for (var m = 0; m < modals.length; m++) {
            var modal = modals[m];
            // Không bao giờ bấm đóng nhầm popup đang chứa các ô input của biểu mẫu
            if (modal.querySelectorAll('input:not([type="hidden"])').length >= 1) continue;
            var btns = modal.querySelectorAll('button, a, span[role="button"], .van-dialog__confirm, .van-dialog__cancel, .sweet-alert button');
            for (var b = 0; b < btns.length; b++) {
                var t = (btns[b].innerText || btns[b].textContent || '').trim().toUpperCase();
                if (/^(ĐÓNG|OK|XÁC NHẬN|HUỶ|BỎ QUA|ĐỒNG Ý|HỦY)$/.test(t)) {
                    try { btns[b].click(); } catch (e) {}
                    return true;
                }
            }
        }
        return false;
    }

    var COOLDOWN_429_KEY = '__cholibi_429_until_ts';
    var LAST_SUBMIT_TS_KEY = '__cholibi_last_submit_ts';

    function getRateLimitUntilTs() {
        try {
            return Number(sessionStorage.getItem(COOLDOWN_429_KEY) || 0);
        } catch (e) {
            return 0;
        }
    }

    function parseRetryAfterSecondsFromDom() {
        var bodyTxt = getCleanPageText();
        var m = bodyTxt.match(/(\d{1,3})\s*(giây|s|sec|seconds)/i);
        if (m && m[1]) {
            var parsed = parseInt(m[1], 10);
            if (!isNaN(parsed) && parsed >= 5 && parsed <= 300) return Math.max(20, parsed);
        }
        return 20;
    }

    function triggerRateLimit429Cooldown() {
        cancelAllRunningTasks();
        saveState({ autoMode: false, registrationSubmitted: false }, true, false);
        restorePanel();
        var sec = parseRetryAfterSecondsFromDom();
        dismissErrorDialogButton();

        var untilTs = Date.now() + sec * 1000;
        try { sessionStorage.setItem(COOLDOWN_429_KEY, String(untilTs)); } catch (e) {}
        if (rateLimitCooldownTimer) clearInterval(rateLimitCooldownTimer);
        showToast('⏳ Lỗi 429 (Thao tác nhanh) — Đã khóa Submit ' + sec + 's...');
        addLog('🛑 Phát hiện máy chủ chặn thao tác nhanh (429). Tự động khóa Submit ' + sec + ' giây để bảo vệ IP!');
        setStatus(0, '🔴 Máy chủ báo 429 (Thao tác nhanh). Đang nghỉ ' + sec + 's...');

        rateLimitCooldownTimer = setInterval(function() {
            var rem = Math.ceil((getRateLimitUntilTs() - Date.now()) / 1000);
            if (rem <= 0 && detectPageAlertStatus() !== 'RATE_LIMIT_429') {
                clearInterval(rateLimitCooldownTimer);
                rateLimitCooldownTimer = null;
                try { sessionStorage.removeItem(COOLDOWN_429_KEY); } catch (e) {}
                setStatus(0, '🟢 Đã hết ' + sec + 's nghỉ 429 — Bạn có thể thao tác tiếp!');
                showToast('🟢 Đã hết thời gian chờ 429!');
            } else {
                setStatus(0, '⏳ Đang chờ xả chặn 429: còn ' + Math.max(1, rem) + ' giây...');
            }
        }, 1000);
    }

    // Fix P1-04 & Audit #9: Khóa tuyệt đối mọi đường Submit khi đang bị 429 VÀ luôn giữ cooldown 3.2s chống bấm đúp (kể cả force=true)
    function canClickSubmitNow(force) {
        var now = Date.now();
        var until429 = getRateLimitUntilTs();
        if (now < until429 || detectPageAlertStatus() === 'RATE_LIMIT_429') {
            var waitSec = Math.max(1, Math.ceil((until429 - now) / 1000));
            showToast('⏳ Đang nghỉ tránh lỗi 429 (còn ' + waitSec + 's)...');
            return false;
        }
        var lastTs = lastFormSubmitTs;
        try {
            var storedTs = Number(sessionStorage.getItem(LAST_SUBMIT_TS_KEY) || 0);
            if (storedTs > lastTs) lastTs = storedTs;
        } catch (e) {}
        if (now - lastTs < 3200) {
            return false;
        }
        lastFormSubmitTs = now;
        try { sessionStorage.setItem(LAST_SUBMIT_TS_KEY, String(now)); } catch (e) {}
        return true;
    }

    function detectCaptchaInputOrModal() {
        var inputs = registerInputs();
        var capInput = selectFieldSmart(inputs, ['mã xác minh', 'xác nhận mã', 'captcha', 'verification', 'checkcode'], ['mật khẩu', 'rút tiền', 'điện thoại'], null);
        if (capInput) return { type: 'INPUT', el: capInput };

        var modalSelectors = '.van-popup, .van-dialog, [role="dialog"], [class*="captcha" i], [class*="verify" i], [class*="geetest" i], div';
        var els = Array.from(document.querySelectorAll(modalSelectors));
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) continue;
            var r = el.getBoundingClientRect();
            if (r.width < 120 || r.height < 80) continue;
            var txt = (el.innerText || '').trim();
            if (txt.length <= 200 && /Trượt để hoàn thành|Chọn theo thứ tự|Xác minh bảo mật/i.test(txt)) {
                return { type: 'MODAL', el: el };
            }
        }
        return null;
    }

    function safeCheckAgreementBox(group) {
        if (group === 'GROUP_C') return;
        var checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"], .van-checkbox__icon, [role="checkbox"]'));
        for (var c = 0; c < checkboxes.length; c++) {
            var cb = checkboxes[c];
            if (cb.closest('#cb-panel') || cb.closest('#cb-bubble') || cb.closest('#cb-float-dock') || cb.closest('a[href]')) continue;

            var lbl = cb.closest('label, .van-checkbox, .checkbox, .agreement, [class*="agree" i]');
            var combinedText = ((cb.parentElement && cb.parentElement.innerText) || '') + ' ' + ((lbl && lbl.innerText) || '');
            if (!/đồng ý|điều khoản|terms|agree|xác nhận điều|tôi đã hiểu|đủ 18 tuổi|thỏa thuận/i.test(combinedText.toLowerCase())) continue;

            var parentBox = cb.closest('.van-checkbox') || cb;
            var clsCombined = String(cb.className || '') + ' ' + String(parentBox.className || '');
            var isChecked = cb.checked ||
                            cb.getAttribute('aria-checked') === 'true' ||
                            parentBox.getAttribute('aria-checked') === 'true' ||
                            parentBox.classList.contains('van-checkbox--checked') ||
                            /\b(checked|active|selected|is-checked|ant-checkbox-checked|el-checkbox__input\s+is-checked)\b/i.test(clsCombined);
            if (isChecked) continue;

            if (cb.tagName === 'INPUT') {
                cb.click();
            } else if (cb.classList.contains('van-checkbox__icon')) {
                cb.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
            } else if (!cb.querySelector('a[href]')) {
                cb.click();
            }
        }
    }

    // Tự động cắt số 0 ở đầu (9 chữ số) cho toàn bộ nhóm GROUP_A (CM88, SC88, C168, TT88, 789P, MMOO)
    // hoặc bất kỳ ô SĐT nào có +84 / maxlength=9 / "không nhập số 0 ở đầu"
    function formatPhoneForInput(phoneRaw, inputEl) {
        var clean = String(phoneRaw || '').replace(/\D+/g, '');
        if (!clean) return '';
        if (clean.indexOf('84') === 0 && clean.length >= 11) {
            clean = '0' + clean.slice(2);
        }
        var site = state.site || detectedSite;
        var group = SITE_MAP[site] ? SITE_MAP[site].group : 'GROUP_B';
        if (group === 'GROUP_A' || group === 'GROUP_D') {
            return clean.replace(/^0+/, '');
        }
        var ml = inputEl ? Number(inputEl.getAttribute('maxlength') || inputEl.maxLength || 0) : 0;
        if (ml === 9) {
            return clean.replace(/^0+/, '');
        }
        var ctx = getInputFullContext(inputEl);
        var fieldHasPlus84 = /\+84|(\b84\s*\|)|không nhập số 0|bỏ số 0|9 chữ số/i.test(ctx);
        if (!fieldHasPlus84 && inputEl) {
            var fieldRow = inputEl.closest('.van-field, .van-cell, .form-group, .input-group, .el-form-item, .ant-form-item, li, form') || inputEl.parentElement;
            if (fieldRow && /\+84|(\b84\s*\|)|không nhập số 0|bỏ số 0|9 chữ số/i.test(fieldRow.innerText || '')) {
                fieldHasPlus84 = true;
            }
        }
        if (fieldHasPlus84) {
            return clean.replace(/^0+/, '');
        }
        return clean.charAt(0) === '0' ? clean : ('0' + clean);
    }

    // ================= A. CÁC STUB PHỤ THUỘC =================

    // No-op compatibility stubs; image retrieval is intentionally unavailable here.
    var CholibiProxyBridge = window.CholibiProxyBridge || {
        FetchImageAsBase64Native: function(imgUrl, callback) {
            if (typeof callback === "function") {
                callback(new Error("Native image bridge is not configured"), "");
            }
        }
    };
    window.CholibiProxyBridge = CholibiProxyBridge;

    if (!window.CholibiApp || typeof window.CholibiApp !== "object") {
        window.CholibiApp = {};
    }

    async function fillRegistrationBySite(d, runId) {
        // Chặn tuyệt đối việc điền nhầm username/password vào trang Ngân hàng, Đặt PIN hoặc Bảo mật SĐT!
        if (detectCurrentScreenStage() !== 1) {
            return false;
        }
        var site = state.site || detectedSite;
        var group = SITE_MAP[site] ? SITE_MAP[site].group : 'GROUP_B';

        // Chờ biểu mẫu Đăng ký dựng xong các ô input (bắt kịp trang SPA đang render, tối đa 6 giây)
        var inputs = registerInputs();
        for (var wInp = 0; wInp < 15 && inputs.length < 3; wInp++) {
            if (runId !== undefined && isRunCancelled(runId)) return false;
            setStatus(8, '⏳ Bước 1: Đang đợi biểu mẫu Đăng ký hiện đủ ô (' + (wInp + 1) + ')...');
            await sleep(400);
            inputs = registerInputs();
        }
        if (inputs.length < 2) return false;

        // Chờ thêm 350ms để framework Vue/Angular gắn xong v-model / formControl
        await sleep(350);
        if (runId !== undefined && isRunCancelled(runId)) return false;
        inputs = registerInputs();

        var cleanHostNow = (location.hostname || '').toLowerCase().replace(/^m\.|^www\./, '');
        var learnedNow = Object.assign(
            {},
            (SITE_MAP[site] && SITE_MAP[site].learnedSelectors) || {},
            learnedSelectorsMap[cleanHostNow] || {}
        );
        var queryLearnedInput = function(selStr) {
            if (!selStr || typeof selStr !== 'string') return null;
            try {
                var elL = queryPageInput(selStr);
                return (elL && inputs.indexOf(elL) !== -1) ? elL : null;
            } catch (e) { return null; }
        };

        var allPwInputs = inputs.filter(function(el) { return (el.type || '').toLowerCase() === 'password'; });
        var nonPwInputs = inputs.filter(function(el) { return (el.type || '').toLowerCase() !== 'password'; });

        var u = queryLearnedInput(learnedNow.username) || selectFieldSmart(
            nonPwInputs.length > 0 ? nonPwInputs : inputs,
            ['tên tài khoản', 'tên người dùng', 'từ 2-15 kí tự', 'từ 2-15 ký tự', 'tên đăng nhập', 'username', 'account', 'tài khoản'],
            ['mật khẩu', 'họ và tên', 'ngân hàng', 'số tài khoản', 'chi nhánh', 'điện thoại', 'sđt', 'email'],
            0
        );

        var wdOnReg = null;
        var cp = null;
        var p = null;

        if (allPwInputs.length === 1) {
            // Trên JUNV1 (Jun88), 78WIN, AD88, XX8, CM88, SC88, C168, U888 chỉ có DUY NHẤT 1 ô password -> Chắc chắn 100% là ô Mật khẩu đăng nhập!
            p = allPwInputs[0];
            cp = null;
            wdOnReg = null;
        } else if (allPwInputs.length >= 2) {
            wdOnReg = (group === 'GROUP_A') ? null : (queryLearnedInput(learnedNow.withdrawPw || learnedNow.wd) || selectFieldSmart(
                allPwInputs,
                ['mật khẩu rút tiền', 'mk rút tiền', 'moneypassword', 'withdrawpassword', 'paypassword', 'mật khẩu giao dịch'],
                null,
                null
            ));
            cp = queryLearnedInput(learnedNow.confirmPw) || selectFieldSmart(
                allPwInputs,
                ['xác nhận mật khẩu', 'xác nhận lại mật khẩu', 'nhập lại mật khẩu', 'vui lòng xác nhận lại mật khẩu', 'confirm', 'repassword', 'checkpassword'],
                ['rút tiền'],
                null
            );
            p = queryLearnedInput(learnedNow.password || learnedNow.pw) || selectFieldSmart(
                allPwInputs,
                ['mật khẩu thành viên', 'nhập mật khẩu của bạn', 'hơn 6 ký tự', 'userpass', 'password', 'mật khẩu'],
                ['xác nhận', 'nhập lại', 'rút tiền', 'giao dịch'],
                0
            );
            if (!p || p === cp || p === wdOnReg) p = allPwInputs[0];
            if (!cp && allPwInputs.length >= 2 && allPwInputs[1] !== wdOnReg) cp = allPwInputs[1];
            if (!wdOnReg && group !== 'GROUP_A' && allPwInputs.length >= 3) wdOnReg = allPwInputs[2];
        } else {
            // Trường hợp người dùng vừa bấm nút con mắt "Hiện mật khẩu" làm tất cả ô password chuyển thành type="text"
            var remForPw = inputs.filter(function(el) { return el !== u; });
            p = queryLearnedInput(learnedNow.password || learnedNow.pw) || selectFieldSmart(
                remForPw,
                ['mật khẩu thành viên', 'nhập mật khẩu', 'hơn 6 ký tự', 'lớn hơn hoặc bằng 8 ký tự', 'userpass', 'password', 'mật khẩu'],
                ['xác nhận', 'nhập lại', 'rút tiền', 'giao dịch', 'khôi phục mật khẩu', 'lấy lại mật khẩu', 'số điện thoại', 'sđt'],
                0
            );
            cp = queryLearnedInput(learnedNow.confirmPw) || selectFieldSmart(
                remForPw.filter(function(el) { return el !== p; }),
                ['xác nhận mật khẩu', 'xác nhận lại mật khẩu', 'nhập lại mật khẩu', 'vui lòng xác nhận lại mật khẩu', 'confirm', 'repassword'],
                ['rút tiền', 'số điện thoại'],
                null
            );
        }

        var remAfterPw = nonPwInputs.filter(function(el) {
            return el !== u && el !== p && el !== cp && el !== wdOnReg;
        });

        var n = queryLearnedInput(learnedNow.name) || selectFieldSmart(
            remAfterPw,
            ['họ và tên', 'họ tên', 'tên thật', 'chữ in hoa không dấu', 'không dấu viết hoa', 'bắt buộc có', 'không thể bắt đầu hoặc kết thúc bằng dấu cách', 'realname', 'fullname', 'name'],
            ['tên tài khoản', 'tên người dùng', 'tên đăng nhập', 'mật khẩu', 'xác minh', 'ngân hàng', 'chi nhánh', 'điện thoại', 'sđt', 'email'],
            null
        );

        var remAfterName = remAfterPw.filter(function(el) { return el !== n; });

        var t = queryLearnedInput(learnedNow.phone) || selectFieldSmart(
            remAfterName,
            ['số điện thoại', 'điện thoại', 'số di động', 'nhập sđt', 'sđt', 'phone', 'mobile', 'tel', '+84'],
            ['họ và tên', 'tên thật', 'email', 'mã xác minh'],
            null
        );
        if (!t) {
            t = remAfterName.find(function(el) {
                if ((el.type || '').toLowerCase() === 'tel') return true;
                var row = el.closest('.van-field, .van-cell, .form-group, .input-group, .input-box, li, div') || el.parentElement;
                return Boolean(row && row.querySelectorAll && row.querySelectorAll('input:not([type="hidden"])').length <= 1 && /\+84|\b84\b/i.test(row.innerText || ''));
            }) || null;
        }

        var remAfterPhone = remAfterName.filter(function(el) { return el !== t; });

        var em = selectFieldSmart(
            remAfterPhone,
            ['email', 'e-mail', 'thư điện tử', 'hộp thư'],
            ['tài khoản', 'người dùng', 'đăng nhập', 'mật khẩu', 'điện thoại', 'họ tên', 'mã xác minh'],
            null
        );

        var cap = findVerificationCodeInput();

        var phoneFormatted = t ? formatPhoneForInput(d.phone, t) : ((group === 'GROUP_A' || group === 'GROUP_D') ? String(d.phone || '').replace(/\D+/g, '').replace(/^0+/, '') : (d.phone || ''));
        var cleanName = toUpperNoAccent(d.name || '');
        var wdVal = d.wd || '123123';
        // Trên JUNV1 (Jun88), ô "Email - không bắt buộc" không cần điền nếu người dùng không yêu cầu, hoặc điền sạch chữ thường
        var isOptionalEmail = Boolean(em && /không bắt buộc|optional/i.test(getInputFullContext(em)));
        var emailVal = (em && !isOptionalEmail) ? ((d.username || 'thanhvien88').toLowerCase() + '@gmail.com') : '';

        // Chuẩn bị mật khẩu điền form: KHÔNG tự ý ghi đè chữ Hoa Q123 vào Két sắt của người dùng!
        // Với JUNV1 / 78WIN (GROUP_D yêu cầu >= 8 ký tự), nếu mật khẩu đang ngắn hơn 8 ký tự (VD: "123123q" 7 ký tự) thì nối đủ >= 8 ký tự chữ thường
        var pwToUse = (d.pw && String(d.pw).trim()) ? String(d.pw).trim() : '123123qq';
        if ((group === 'GROUP_D' || /lớn hơn hoặc bằng 8 ký tự|ít nhất 8 ký tự/i.test(getCleanPageText())) && pwToUse.length < 8) {
            while (pwToUse.length < 8) {
                pwToUse = pwToUse + 'q';
            }
            addLog('🔑 Tự động bù độ dài Mật khẩu >= 8 ký tự cho ' + site + ' (Không ghi đè Két sắt).');
        }
        if ((site === '78WIN' || /chứa ít nhất 1 chữ hoa/i.test(getCleanPageText())) && !/[A-Z]/.test(pwToUse)) {
            if (/[a-z]/.test(pwToUse)) {
                pwToUse = pwToUse.replace(/[a-z]/, function(m) { return m.toUpperCase(); });
            } else {
                pwToUse = 'A' + pwToUse;
            }
            if (pwToUse.length < 8) pwToUse = pwToUse + '123';
        }

        var rawAssignments = [
            { el: u,       val: d.username,     label: 'Tên tài khoản' },
            { el: p,       val: pwToUse,        label: 'Mật khẩu' },
            { el: cp,      val: pwToUse,        label: 'Xác nhận MK' },
            { el: wdOnReg, val: wdVal,          label: 'MK rút tiền' },
            { el: n,       val: cleanName,      label: 'Họ và tên' },
            { el: em,      val: emailVal,       label: 'Email' },
            { el: t,       val: phoneFormatted, label: 'Số điện thoại' }
        ];

        // Lọc các ô hợp lệ (không trùng lặp) và SẮP XẾP TỪ TRÊN XUỐNG DƯỚI theo đúng thứ tự hiển thị trên trang
        var validSteps = [];
        var seen = [];
        for (var i = 0; i < rawAssignments.length; i++) {
            var item = rawAssignments[i];
            if (item.el && item.val && seen.indexOf(item.el) === -1) {
                seen.push(item.el);
                validSteps.push(item);
            }
        }
        validSteps.sort(function(a, b) {
            var topA = a.el.getBoundingClientRect().top;
            var topB = b.el.getBoundingClientRect().top;
            return topA - topB;
        });

        // Điền từ từ từng nhịp như người thật đăng ký (gõ từng chữ + tự động phát hiện & sửa ngay nếu báo Trùng Tên TK)
        for (var idx = 0; idx < validSteps.length; idx++) {
            if (runId !== undefined && isRunCancelled(runId)) return false;
            var stepItem = validSteps[idx];
            var pctNow = 8 + Math.round(((idx + 1) / Math.max(1, validSteps.length)) * 12);
            var rhythmTitle = 'Bước 1 (Nhịp ' + (idx + 1) + '/' + validSteps.length + ')';
            await typeHumanInput(stepItem.el, stepItem.val, stepItem.label, false, runId, pctNow, rhythmTitle);
            if (runId !== undefined && isRunCancelled(runId)) return false;

            // KIỂM TRA TRÙNG TÊN TÀI KHOẢN NGAY KHI GÕ XONG Ô USERNAME (Fix triệt để lỗi TT88/789P trong video)
            if (stepItem.el === u) {
                try { u.blur(); } catch (eBlur) {}
                await sleep(420);
                for (var checkDupTry = 0; checkDupTry < 4; checkDupTry++) {
                    if (runId !== undefined && isRunCancelled(runId)) return false;
                    var pageTxtUserCheck = getCleanPageText().toLowerCase();
                    var uRow = (u.closest && (u.closest('.form-group, .van-field, .input-box, div') || u.parentElement)) || null;
                    var uRowTxt = uRow ? (uRow.innerText || '').toLowerCase() : '';
                    var isUserAlreadyTaken = pageTxtUserCheck.indexOf('tên tài khoản này đã tồn tại') !== -1 ||
                                            pageTxtUserCheck.indexOf('tài khoản đã tồn tại') !== -1 ||
                                            pageTxtUserCheck.indexOf('tên đăng nhập đã tồn tại') !== -1 ||
                                            pageTxtUserCheck.indexOf('tên tài khoản đã tồn tại') !== -1 ||
                                            uRowTxt.indexOf('đã tồn tại') !== -1 ||
                                            uRowTxt.indexOf('tồn tại') !== -1;
                    if (!isUserAlreadyTaken) break;

                    var freshNewUser = mutateUsernameSuffix(true);
                    stepItem.val = freshNewUser;
                    d.username = freshNewUser;
                    showToast('🎲 Trùng TK! Tự đổi sang: ' + freshNewUser);
                    addLog('⚠️ Phát hiện website báo "Tên tài khoản này đã tồn tại" -> Tự động đổi & gõ lại: ' + freshNewUser);
                    setStatus(pctNow, '🎲 Đổi Tên TK mới chống trùng: ' + freshNewUser + '...');
                    await typeHumanInput(u, freshNewUser, 'Tên tài khoản mới', false, runId, pctNow, 'Đổi TK');
                    try { u.blur(); } catch (eB2) {}
                    await sleep(450);
                }
            }

            // Nghỉ từng nhịp 650ms giữa các ô như người thật chuyển tay sang ô tiếp theo
            await sleep(650);
        }

        // Kiểm tra lại toàn bộ các ô sau khi gõ xong (chống trường hợp trang render trễ làm mất chữ ở ô đầu)
        for (var vIdx = 0; vIdx < validSteps.length; vIdx++) {
            var vItem = validSteps[vIdx];
            if (vItem.el && String(vItem.el.value || '').trim() !== String(vItem.val || '').trim()) {
                setReactInput(vItem.el, vItem.val, null, false);
                await sleep(250);
            }
        }

        // Kiểm tra thông báo lỗi định dạng SĐT ngay dưới ô SĐT (VD: AD88 báo "không nhập số 0 ở đầu", hoặc Jun88 báo "có bắt đầu bằng 0 không")
        if (t && t.value) {
            var pageTxtPhoneCheck = getCleanPageText();
            var curPhoneVal = String(t.value || '').trim();
            if (/không nhập số 0|không được bắt đầu bằng số 0|hỗ trợ số điện thoại có 9 chữ số/i.test(pageTxtPhoneCheck) && curPhoneVal.charAt(0) === '0') {
                var stripped9 = curPhoneVal.replace(/^0+/, '');
                setReactInput(t, stripped9, 'SĐT (9 số bỏ số 0)', false);
                await sleep(250);
            } else if (/có bắt đầu bằng 0 không/i.test(pageTxtPhoneCheck) && curPhoneVal.charAt(0) !== '0') {
                var withZero10 = '0' + curPhoneVal;
                setReactInput(t, withZero10, 'SĐT (thử có số 0 đầu)', false);
                await sleep(300);
                if (/có bắt đầu bằng 0 không/i.test(getCleanPageText())) {
                    // Nếu cả có số 0 lẫn bỏ số 0 đều báo lỗi (do đầu số 059 không được cổng game hỗ trợ), trả về 9 số và báo rõ cho người dùng
                    setReactInput(t, curPhoneVal, null, false);
                    showToast('⚠️ Đầu số SĐT (' + curPhoneVal.substring(0, 2) + '...) không được ' + site + ' hỗ trợ! Hãy dùng đầu 09/03/07/08.');
                    addLog('⚠️ Cổng ' + site + ' từ chối đầu số SĐT ' + (d.phone || '') + ' (Hãy đổi sang đầu số 09x/03x/07x/08x).');
                }
            }
        }

        // Nhóm GROUP_A (CM88, SC88, C168...) LUÔN phải đặt mật khẩu rút tiền ở Bước 2
        var pinSetInStep1 = Boolean(wdOnReg && seen.indexOf(wdOnReg) !== -1 && group !== 'GROUP_A');
        saveState({ withdrawPinSetInStep1: pinSetInStep1 }, true, false);

        setStatus(20, '🟡 Bước 1: Đang kiểm tra & tích ô đồng ý điều khoản...');
        await sleep(500);
        if (runId !== undefined && isRunCancelled(runId)) return false;
        safeCheckAgreementBox(group);
        await sleep(650);

        var subBtn = findRegisterSubmit();
        if (subBtn && !subBtn.getAttribute('data-cb-sub-bound')) {
            subBtn.setAttribute('data-cb-sub-bound', '1');
            subBtn.addEventListener('click', function() {
                stepCancelRequested = false;
                var curD = getActiveData();
                saveState({
                    registrationSubmitted: true,
                    submittedUsername: curD.username || '',
                    currentStep: 1,
                    waitingOtp: false
                }, true, false);
                startPostRegisterWatcherLoop(currentRunId);
            });
        }

        if (cap) {
            bindVerificationCodeAutoSubmit(cap);
            setTimeout(function() { try { cap.focus(); } catch (e) {} }, 250);
            addLog('⏸ Đã điền đủ ' + validSteps.length + ' ô & trỏ vào ô MÃ XÁC MINH. Gõ xong mã sẽ TỰ BẤM ĐĂNG KÝ!');
            setStatus(20, '🟡 Bước 1: Đã điền đủ ' + validSteps.length + ' ô — Hãy gõ Mã xác minh để tự bấm Đăng ký!');
        } else {
            setStatus(22, '🟢 Bước 1: Đã điền từ từ đủ ' + validSteps.length + ' ô đăng ký (' + d.username + ')!');
        }

        return seen.indexOf(u) !== -1 && seen.indexOf(p) !== -1;
    }

    function findRegisterSubmit() {
        var rawBtns = (typeof queryAllDeepRaw === 'function')
            ? queryAllDeepRaw('button, input[type="submit"], [role="button"], .van-button, a.btn, div.btn, [class*="submit" i], [class*="reg-btn" i], [class*="btn-reg" i]')
            : Array.from(document.querySelectorAll('button, input[type="submit"], [role="button"], .van-button, a.btn, div.btn'));
        var allBtns = rawBtns.filter(function(el) {
            if (el.closest && (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock') || el.closest('#cb-vault-modal'))) return false;
            var r = el.getBoundingClientRect();
            return r.width > 40 && r.height > 18;
        });

        var exactSubmit = allBtns.find(function(el) {
            var txt = (el.innerText || el.value || '').replace(/\s+/g, ' ').trim();
            return /đăng ký người dùng mới|đăng ký ngay|đăng ký phiên bản|hoàn tất đăng ký|xác nhận đăng ký/i.test(txt);
        });
        if (exactSubmit) return exactSubmit;

        var typeSubmit = allBtns.find(function(el) {
            var txt = (el.innerText || el.value || '').replace(/\s+/g, ' ').trim();
            return (el.type || '').toLowerCase() === 'submit' && /đăng ký|đăng kí|register|xác nhận/i.test(txt);
        });
        if (typeSubmit) return typeSubmit;

        var regCandidates = allBtns.filter(function(el) {
            if (el.getAttribute('role') === 'tab' || el.classList.contains('van-tab') || el.closest('.van-tabs__nav, [role="tablist"]')) return false;
            var txt = (el.innerText || el.value || '').replace(/\s+/g, ' ').trim();
            return /^(đăng ký|đăng kí|register)(\s*\.{0,3})?$/i.test(txt);
        });
        if (regCandidates.length > 0) {
            return regCandidates[regCandidates.length - 1];
        }
        return null;
    }

    function findWithdrawLink() {
        return findByText('a, button, div, span, li', 'RÚT TIỀN', true) ||
               findByText('a, button, div, span, li', 'Rút Tiền', true) ||
               findByText('a, button, div, span, li', 'Rút tiền', true);
    }

    function otpWaitingUI() {
        var btn = document.getElementById('cb-otp-done');
        if (btn) btn.style.display = state.waitingOtp ? 'block' : 'none';
    }

    function finishWorkflow(bankConfirmed) {
        var sKey = state.site || currentSite;
        var group = SITE_MAP[sKey] ? SITE_MAP[sKey].group : 'GROUP_B';
        saveState({ autoMode: false, currentStep: 0, waitingOtp: false, registrationSubmitted: false }, true, false);
        document.getElementById('cb-banner').style.display = 'none';
        otpWaitingUI();
        restorePanel();
        if (bankConfirmed) {
            var dFin = getActiveData();
            recordSuccessToMemory('COMPLETED_ALL', state.submittedUsername || dFin.username, true);
            markStepDone((group === 'GROUP_A' || group === 'GROUP_D') ? 4 : 3);
            window.__cholibiBridgeSend('MARK_SESSION_COMPLETED_WIPE', { site: sKey });
            showToast('🎉 Hoàn tất ' + sKey + '! Đã lưu vào Kho & chuẩn bị Vân tay mới khi thoát!');
            setStatus(100, '🟢 Hoàn tất (' + sKey + ') — Đã lưu đầy đủ vào Kho Tài Khoản!');
            addLog('✅ Đã hoàn tất toàn bộ luồng, lưu vào Kho & kích hoạt chế độ làm mới vân tay cho phiên sau.');
        } else {
            showToast('🟡 Đã gửi biểu mẫu ' + sKey + ' — Chờ máy chủ xác nhận!');
            setStatus(80, '🟡 Đã gửi biểu mẫu (' + sKey + ') — Hãy kiểm tra xác nhận từ máy chủ.');
            addLog('ℹ️ Đã kết thúc thao tác tự động nhưng chưa ghi COMPLETED_ALL do chờ xác nhận máy chủ.');
        }
    }

    function siteUi() {
        var sKey = state.site || currentSite;
        var drawerBtn = document.getElementById('cb-site-drawer-btn');
        if (drawerBtn) drawerBtn.textContent = sKey + ' ▼';
        var chips = panel.querySelectorAll('.cb-site-chip');
        for (var i = 0; i < chips.length; i++) {
            chips[i].classList.toggle('active', chips[i].getAttribute('data-site') === sKey);
        }
        var group = SITE_MAP[sKey] ? SITE_MAP[sKey].group : 'GROUP_B';
        var needsFourSteps = (group === 'GROUP_A' || group === 'GROUP_D');
        var step1El = document.getElementById('st-1');
        var step2El = document.getElementById('st-2');
        var step3El = document.getElementById('st-3');
        var step4 = document.getElementById('st-4');
        if (step4) step4.style.display = needsFourSteps ? 'flex' : 'none';
        var setStepBtnLabelKeepSpan = function(btnEl, labelTxt) {
            if (!btnEl) return;
            var sp = btnEl.querySelector('span');
            var iconTxt = sp ? (sp.textContent || '⬜') : (btnEl.classList.contains('done') ? '☑️' : '⬜');
            btnEl.textContent = '';
            var newSpan = document.createElement('span');
            newSpan.textContent = iconTxt;
            btnEl.appendChild(newSpan);
            btnEl.appendChild(document.createTextNode(' ' + labelTxt));
        };
        if (group === 'GROUP_D') {
            setStepBtnLabelKeepSpan(step1El, '1. ĐK (/signup)');
            setStepBtnLabelKeepSpan(step2El, '2. Xác minh SĐT');
            setStepBtnLabelKeepSpan(step3El, '3. Thêm Bank');
            setStepBtnLabelKeepSpan(step4, '4. PIN & Nhận KM');
        } else {
            setStepBtnLabelKeepSpan(step1El, '1. Đóng Popup + Mở ĐK + Điền Form');
            setStepBtnLabelKeepSpan(step2El, '2. Vào Rút Tiền + Đặt PIN 123123');
            setStepBtnLabelKeepSpan(step3El, '3. Chọn Bank + Chi Nhánh + STK + Gửi');
            setStepBtnLabelKeepSpan(step4, '4. Xác minh SĐT (Nhóm SC88/CM88)');
        }
        updateLockBankBtnUI();
        otpWaitingUI();
    }

    var currentRunId = 0;
    var stepCancelRequested = false;
    var postRegLoopRunning = false;
    var stepRunningLock = false;
    var activeLockRunId = 0;
    var capAutoSubmitDebounceTimer = null;
    var smsAutoSubmitTimer = null;
    var otpVerifyTimer = null;
    var autoResumeTimer = null;
    var step4AutoExecTimer = null;
    var financialAutoExecTimer = null;

    function clearPendingActionTimers() {
        if (capAutoSubmitDebounceTimer) { clearTimeout(capAutoSubmitDebounceTimer); capAutoSubmitDebounceTimer = null; }
        if (smsAutoSubmitTimer) { clearTimeout(smsAutoSubmitTimer); smsAutoSubmitTimer = null; }
        if (otpVerifyTimer) { clearTimeout(otpVerifyTimer); otpVerifyTimer = null; }
        if (autoResumeTimer) { clearTimeout(autoResumeTimer); autoResumeTimer = null; }
        if (step4AutoExecTimer) { clearTimeout(step4AutoExecTimer); step4AutoExecTimer = null; }
        if (financialAutoExecTimer) { clearTimeout(financialAutoExecTimer); financialAutoExecTimer = null; }
    }

    function startNewRunSession() {
        clearPendingActionTimers();
        currentRunId++;
        stepCancelRequested = false;
        stepRunningLock = false;
        activeLockRunId = 0;
        postRegLoopRunning = false;
        if (window.__cholibiSliderSolver && typeof window.__cholibiSliderSolver.cancel === 'function') {
            window.__cholibiSliderSolver.cancel();
        }
        return currentRunId;
    }

    function cancelAllRunningTasks() {
        clearPendingActionTimers();
        currentRunId++;
        stepCancelRequested = true;
        postRegLoopRunning = false;
        stepRunningLock = false;
        activeLockRunId = 0;
        if (window.__cholibiSliderSolver && typeof window.__cholibiSliderSolver.cancel === 'function') {
            window.__cholibiSliderSolver.cancel();
        }
    }

    function isRunCancelled(runId) {
        return stepCancelRequested || (runId !== undefined && runId !== currentRunId);
    }

    bindFastTap('cb-otp-done', function() {
        if (detectPageAlertStatus()) {
            showToast('⚠️ Trang đang báo lỗi! Hãy kiểm tra trước khi tiếp tục.');
            return;
        }
        addLog('📱 Tiếp tục luồng tự động sau khi xong Captcha / OTP.');
        var runId = startNewRunSession();
        saveState({ waitingOtp: false, autoMode: true }, true, false);
        otpWaitingUI();
        if (state.currentStep <= 1) {
            var subBtn = findRegisterSubmit();
            if (subBtn && registerInputs().length >= 3 && canClickSubmitNow(true)) {
                var curD = getActiveData();
                saveState({
                    registrationSubmitted: true,
                    submittedUsername: curD.username || '',
                    currentStep: 1
                }, true, false);
                subBtn.click();
                startPostRegisterWatcherLoop(runId);
            } else {
                executeStep(2, false, runId);
            }
        } else if (state.currentStep === 2 && (SITE_MAP[state.site || currentSite] && SITE_MAP[state.site || currentSite].group === 'GROUP_D')) {
            var smsBtnD = findByText('button, div, span', 'Xác nhận', true) || findByText('button, div, span', 'Xác Nhận', true);
            if (smsBtnD && canClickSubmitNow(true)) {
                smsBtnD.click();
            }
            setTimeout(function() {
                if (isRunCancelled(runId)) return;
                var closeD = findByText('button, div, span', 'Đóng', true) || findByText('button, div, span', 'OK', true);
                if (closeD) closeD.click();
                saveState({ autoMode: true, currentStep: 3, waitingOtp: false }, true, false);
                location.href = location.origin + '/account/withdrawaccounts/bankcards';
            }, 900);
        } else if (state.currentStep === 2 || state.currentStep === 3) {
            executeStep(state.currentStep, false, runId);
        } else {
            // Fix Review #1 & P0-05: Kiểm tra thông minh xác minh OTP (Bắt thêm URL thay đổi, nút Xác nhận disable/loading, hoặc đã bấm gửi 1 lần không lỗi)
            var otpInputs = queryPageAll('input[placeholder*="OTP" i], input[placeholder*="xác minh" i], input[placeholder*="mã" i]');
            var hasEmptyOtp = otpInputs.some(function(el) { return !(el.value || '').trim(); });
            var urlChangedAfterOtp = Boolean(state.step4OtpStartUrl && location.href !== state.step4OtpStartUrl) ||
                                     (!/\/security|verify/i.test(location.href) && otpInputs.length === 0);
            if (hasEmptyOtp && !urlChangedAfterOtp) {
                showToast('⚠️ Ô mã OTP vẫn đang trống! Hãy nhập mã OTP và xác nhận trên trang trước.');
                saveState({ waitingOtp: true }, true, false);
                otpWaitingUI();
                return;
            }
            var pageTxtOtp = getCleanPageText();
            var hasOtpConfirmedText = /(đã xác minh|xác minh thành công|liên kết thành công|đã liên kết số điện thoại|xác thực thành công)/i.test(pageTxtOtp);
            var otpInputStillVisible = otpInputs.length > 0;
            var confirmOtpBtn = findByText('button, .van-button, div, span', 'Xác nhận', true) ||
                                findByText('button, .van-button, div, span', 'Xác Nhận', true) ||
                                findByText('button, .van-button, div, span', 'Gửi đi', true) ||
                                findByText('button, .van-button, div, span', 'Hoàn thành', true);
            var isBtnDisabledOrLoading = Boolean(confirmOtpBtn && (
                confirmOtpBtn.disabled ||
                confirmOtpBtn.getAttribute('disabled') !== null ||
                confirmOtpBtn.getAttribute('aria-disabled') === 'true' ||
                /disabled|loading|is-loading|van-button--disabled|van-button--loading/i.test(String(confirmOtpBtn.className || '')) ||
                /đang xử lý|đang gửi|loading/i.test(confirmOtpBtn.innerText || '')
            ));

            if (!hasOtpConfirmedText && !urlChangedAfterOtp) {
                if (otpInputStillVisible && !isBtnDisabledOrLoading && !state.otpConfirmClickedOnce) {
                    saveState({ waitingOtp: true, otpConfirmClickedOnce: true }, true, false);
                    if (confirmOtpBtn && canClickSubmitNow(true)) {
                        confirmOtpBtn.click();
                    }
                }
                showToast('⏳ Đang kiểm tra phản hồi xác minh OTP từ máy chủ...');
                setStatus(90, '🟡 PENDING: Đã gửi xác nhận OTP — Đang chờ máy chủ xác nhận...');
                if (otpVerifyTimer) clearTimeout(otpVerifyTimer);
                otpVerifyTimer = setTimeout(function() {
                    if (isRunCancelled(runId)) return;
                    var alertNow = detectPageAlertStatus();
                    var txtAfter = getCleanPageText();
                    var otpInpsAfter = queryPageAll('input[placeholder*="OTP" i], input[placeholder*="xác minh" i], input[placeholder*="mã" i]');
                    var positiveOtpDone = !alertNow && (
                        /(đã xác minh|xác minh thành công|liên kết thành công|đã liên kết số điện thoại|xác thực thành công)/i.test(txtAfter) ||
                        Boolean(state.step4OtpStartUrl && location.href !== state.step4OtpStartUrl) ||
                        otpInpsAfter.length === 0
                    );
                    if (positiveOtpDone) {
                        saveState({ otpConfirmClickedOnce: false }, false, false);
                        finishWorkflow(true);
                    } else {
                        saveState({ otpConfirmClickedOnce: false, waitingOtp: true }, true, false);
                        otpWaitingUI();
                        setStatus(88, '🟡 PENDING: Máy chủ chưa xác nhận OTP thành công — Hãy kiểm tra mã OTP trên màn hình.');
                    }
                }, 1600);
                return;
            }
            saveState({ otpConfirmClickedOnce: false }, false, false);
            finishWorkflow(true);
        }
    });

    // ========================================================================
    // VÒNG THEO DÕI SAU ĐĂNG KÝ (CHUẨN HÓA CHO CẢ VAN88, NOHU88/J88 VÀ SC88/CM88)
    // ========================================================================
    async function startPostRegisterWatcherLoop(runId) {
        if (postRegLoopRunning) return;
        postRegLoopRunning = true;
        var activeRunId = runId !== undefined ? runId : currentRunId;
        var site = state.site || detectedSite;
        var group = SITE_MAP[site] ? SITE_MAP[site].group : 'GROUP_B';

        for (var i = 0; i < 180; i++) {
            if (isRunCancelled(activeRunId)) {
                postRegLoopRunning = false;
                return;
            }
            await sleep(950);
            if (isRunCancelled(activeRunId)) {
                postRegLoopRunning = false;
                return;
            }
            if (i > 0 && i % 10 === 0) {
                setStatus(25, '⏳ Đang chờ xác nhận đăng ký (' + i + 's/180s)...');
                addLog('⏳ Đang theo dõi phản hồi đăng ký (' + i + 's/180s)...');
            }

            var alertType = detectPageAlertStatus();
            if (alertType === 'HTTP_403_BLOCK') {
                dismissErrorDialogButton();
                restorePanel();
                saveState({ registrationSubmitted: false }, true, false);
                showToast('🔄 Tên miền phụ báo lỗi 403 -> Tự chuyển sang link chính...');
                addLog('⚠️ Tên miền hiện tại báo lỗi 403 API -> Tự động chuyển sang tên miền dự phòng!');
                window.__cholibiBridgeSend('ROTATE_MIRROR', { site: state.site || currentSite });
                postRegLoopRunning = false;
                return;
            }
            if (alertType === 'RATE_LIMIT_429') {
                triggerRateLimit429Cooldown();
                postRegLoopRunning = false;
                return;
            }
            if (alertType === 'ERR_CAPTCHA') {
                dismissErrorDialogButton();
                restorePanel();
                var capErrInp = findVerificationCodeInput();
                if (capErrInp) {
                    setReactInput(capErrInp, '');
                    setTimeout(function() { try { capErrInp.focus(); } catch (e) {} }, 150);
                }
                saveState({ registrationSubmitted: false, waitingOtp: true }, true, false);
                otpWaitingUI();
                showToast('⚠️ Lỗi Mã xác minh! Đã tự đóng thông báo, hãy gõ lại mã mới.');
                setStatus(15, '🟡 Lỗi Mã xác minh — Hãy gõ lại 4 số Captcha mới!');
                addLog('⚠️ Trang báo Lỗi mã xác minh -> Đã tự đóng hộp thoại & xóa ô mã để nhập lại.');
                postRegLoopRunning = false;
                return;
            }
            if (alertType === 'DUP_PHONE') {
                dismissErrorDialogButton();
                await closeAllPopupsUniversal(activeRunId);
                restorePanel();
                saveState({ autoMode: false, registrationSubmitted: false, waitingOtp: false }, true, false);
                otpWaitingUI();
                var dupPhVal = (getActiveData().phone || '');
                showToast('🔴 SĐT [' + dupPhVal + '] đã tồn tại / đã liên kết TK khác!');
                setStatus(0, '🔴 CẢNH BÁO: Số điện thoại (' + dupPhVal + ') đã tồn tại trên trang này! Hãy đổi SĐT khác.');
                addLog('🛑 CẢNH BÁO TRÙNG SĐT: Website báo Số điện thoại (' + dupPhVal + ') đã tồn tại hoặc đã liên kết với tài khoản khác!');
                postRegLoopRunning = false;
                return;
            }
            if (alertType === 'DUP_ACCOUNT') {
                dismissErrorDialogButton();
                var curRetries = Number(state.retryUserCount || 0);
                if (curRetries < 3) {
                    var freshUserPost = mutateUsernameSuffix(true);
                    saveState({ retryUserCount: curRetries + 1, registrationSubmitted: false }, true, false);
                    var dNow = getActiveData();
                    dNow.username = freshUserPost;
                    await fillRegistrationBySite(dNow);
                    await sleep(500);
                    var retrySub = findRegisterSubmit();
                    if (retrySub && !detectCaptchaInputOrModal() && canClickSubmitNow()) {
                        retrySub.click();
                        saveState({ registrationSubmitted: true, submittedUsername: dNow.username || '' }, true, false);
                        continue;
                    }
                }
                restorePanel();
                var inpsAfterDup = registerInputs();
                var capAfterDup = selectFieldSmart(inpsAfterDup, ['mã xác minh', 'xác nhận mã', 'captcha', 'verification', 'checkcode'], ['mật khẩu', 'rút tiền', 'điện thoại'], null);
                if (capAfterDup) {
                    setReactInput(capAfterDup, '');
                    setTimeout(function() { try { capAfterDup.focus(); } catch (e) {} }, 120);
                }
                saveState({ autoMode: false, registrationSubmitted: false }, true, false);
                showToast('⚠️ Trùng TK! Đã tự đổi sang TK mới: ' + (document.getElementById('f-user').value || ''));
                setStatus(0, '🔴 Trùng TK! Đã đổi sang TK mới (' + (document.getElementById('f-user').value || '') + '), hãy nhập lại Mã xác minh.');
                addLog('⚠️ Trùng Tên TK -> Đã tự động đổi sang TK mới: ' + (document.getElementById('f-user').value || ''));
                postRegLoopRunning = false;
                return;
            }

            // CHỈ GHI NHẬN ĐĂNG KÝ THÀNH CÔNG KHI ĐÃ THỰC SỰ BẤM SUBMIT (state.registrationSubmitted === true)
            // HOẶC ĐÃ CHUYỂN KHỎI TRANG /Register SANG SẢNH THÀNH VIÊN!
            var successDepositBtn = findByText('button, a, div, span', 'Gửi tiền ngay lập tức', false) ||
                                    findByText('button, a, div, span', 'lập tức nạp tiền', false);
            var successStartGameBtn = findByText('button, a, div, span', 'Bắt đầu trò chơi', false) ||
                                      findByText('button, a, div, span', 'bắt đầu trò chơi', false);
            var successLabel = findByText('div, span, p, h1, h2, h3, h4', 'chúc mừng bạn đã đăng ký thành công', false) ||
                               findByText('div, span, p, h1, h2, h3, h4', 'Xin chúc mừng! Đăng ký thành công', false) ||
                               findByText('div, span, p, h1, h2, h3, h4', 'Đăng Ký Thành Công', false);

            var isStillOnRegisterUrl = /\/register|\/signup/i.test(location.pathname);
            var isRedirectedToVan88Autobank = (group === 'GROUP_C' && /\/autobank/i.test(location.pathname));
            var isOnFinancialUrl = /\/financial/i.test(location.pathname);
            var isGroupDLobbyOrAccount = (group === 'GROUP_D' && !isStillOnRegisterUrl && (/\/gamelobby|\/account|\/promocenter/i.test(location.pathname) || registerInputs().length === 0));
            var withdrawal = !isStillOnRegisterUrl ? findWithdrawLink() : null;

            var hasPopupSuccess = Boolean(successDepositBtn || successStartGameBtn || successLabel);
            var hasNavigatedSuccess = Boolean(isRedirectedToVan88Autobank || isOnFinancialUrl || isGroupDLobbyOrAccount || (withdrawal && registerInputs().length < 2) || (!isStillOnRegisterUrl && /MemberCenter|Lobby|mine/i.test(location.href)));

            // Fix P0-03: Bắt buộc state.registrationSubmitted === true (tuyệt đối bỏ Boolean(successLabel) độc lập!)
            // và kiểm tra đúng submittedUsername của phiên hiện tại trước khi ghi nhận REGISTERED!
            var currentActiveUser = (getActiveData().username || '').trim();
            var submittedUserMatch = Boolean(state.submittedUsername && (!currentActiveUser || state.submittedUsername.toLowerCase() === currentActiveUser.toLowerCase()));
            if (state.registrationSubmitted === true && submittedUserMatch && !detectPageAlertStatus() && (hasPopupSuccess || hasNavigatedSuccess)) {
                var verifiedUser = state.submittedUsername;
                // Dọn sạch hộp thoại chúc mừng sau đăng ký và ghi nhận REGISTERED đã xác minh máy chủ
                recordSuccessToMemory('REGISTERED', verifiedUser, true);

                var nextStepAfterReg = state.withdrawPinSetInStep1 ? 3 : 2;
                saveState({
                    autoMode: true,
                    currentStep: nextStepAfterReg,
                    registrationSubmitted: false,
                    waitingOtp: false
                }, true, false);
                otpWaitingUI();
                addLog('🎉 Đăng ký TK "' + verifiedUser + '" thành công! Đang chuyển sang Rút tiền / Thêm ngân hàng...');
                setStatus(35, '🟢 ĐK thành công (' + verifiedUser + ')! Đang vào Rút tiền...');

                // NHÁNH TỐC ĐỘ CAO GROUP_D (JUN88 V1 & 78WIN):
                // Bỏ qua toàn bộ thông báo sảnh, nhảy TRỰC TIẾP bằng link tới trang Xác minh SĐT (/account/validatePage)!
                if (group === 'GROUP_D') {
                    saveState({
                        autoMode: true,
                        currentStep: 2,
                        registrationSubmitted: false,
                        waitingOtp: false
                    }, true, false);
                    addLog('⚡ [GROUP_D] Bỏ qua sảnh -> Nhảy trực tiếp đến link Xác minh SĐT (/account/validatePage)!');
                    setStatus(35, '🟢 ĐK xong (' + verifiedUser + ') -> Vào thẳng /account/validatePage!');
                    postRegLoopRunning = false;
                    location.href = location.origin + '/account/validatePage';
                    return;
                }

                // SỬA TRIỆT ĐỂ LỖI VAN88 (GROUP_C):
                // Tuyệt đối KHÔNG nhảy sang /Financial?tab=2 trên VAN88!
                if (group === 'GROUP_C') {
                    if (successDepositBtn) {
                        successDepositBtn.click();
                        await sleep(1100);
                    } else if (successStartGameBtn) {
                        successStartGameBtn.click();
                        await sleep(1100);
                    } else {
                        await closeAllPopupsUniversal(activeRunId);
                    }
                    var wdBtnVan = findWithdrawLink();
                    if (wdBtnVan) {
                        wdBtnVan.click();
                        await sleep(1000);
                    }
                    postRegLoopRunning = false;
                    if (isRunCancelled(activeRunId)) return;
                    restorePanel();
                    executeStep(nextStepAfterReg, false, activeRunId);
                    return;
                }

                // Nhóm GROUP_B (NOHU88, GO99, J88, U888): Chuyển sang /Financial?tab=2
                if (group === 'GROUP_B' || /Account\/Register/i.test(location.pathname)) {
                    location.href = location.origin + '/Financial?tab=2';
                    postRegLoopRunning = false;
                    return;
                }

                // Nhóm GROUP_A (SC88, CM88, C168, TT88, 789P, MMOO):
                // Chờ 700ms cho popup "Đăng Ký Thành Công!" hiện hẳn rồi đóng sạch cả nút (X) ở đáy popup,
                // và LUÔN chuyển vào Bước 2 (Đặt Mật Khẩu Rút Tiền 6 số)!
                await sleep(700);
                await dismissPostRegisterModals();
                await closeAllPopupsUniversal(activeRunId);
                var hasPinScreenAlready = findByText('div, span, p', 'đặt mật khẩu rút tiền', false) ||
                                          findByText('div, span, p', 'Xác nhận mật khẩu rút tiền', false);
                if (!hasPinScreenAlready) {
                    var wdBtnNow = findWithdrawLink();
                    if (wdBtnNow) {
                        wdBtnNow.click();
                        await sleep(1100);
                    }
                }

                postRegLoopRunning = false;
                if (isRunCancelled(activeRunId)) return;
                saveState({ currentStep: 2, withdrawPinSetInStep1: false }, true, false);
                executeStep(2, false, activeRunId);
                return;
            }
        }
        postRegLoopRunning = false;
        setStatus(25, '🟡 Đã chờ 3 phút chưa thấy tín hiệu ĐK thành công. Hãy kiểm tra thủ công!');
        addLog('⚠️ Timeout chờ xác nhận đăng ký thành công sau 180 giây.');
    }

    // Hàm chọn Ngân hàng thông minh cho cả GROUP_B (NOHU88/J88/GO99/U888) và GROUP_A (CM88/SC88/C168/TT88/789P/MMOO)
    async function selectBankOptionSmart(desiredBankRaw, isGroupB, runId) {
        var rawBank = (desiredBankRaw || 'TECHCOMBANK').trim().toUpperCase();
        var cleanTarget = rawBank.replace(/\s+/g, '');
        var aliases = [cleanTarget];
        if (cleanTarget.indexOf('TECHCOM') !== -1 || cleanTarget === 'TCB') {
            aliases = ['TECHCOMBANK', 'TECHCOMBANK(TCB)', 'TCB'];
        } else if (cleanTarget.indexOf('MB') !== -1) {
            aliases = ['MBBANK', 'MB', 'NGANHANGQUANDOI'];
        } else if (cleanTarget.indexOf('VIETCOM') !== -1 || cleanTarget === 'VCB') {
            aliases = ['VIETCOMBANK', 'VCB'];
        } else if (cleanTarget.indexOf('VIETIN') !== -1 || cleanTarget === 'VTB') {
            aliases = ['VIETINBANK', 'VIETINBANK(VTB)', 'VTB'];
        } else if (cleanTarget.indexOf('ACB') !== -1) {
            aliases = ['ACBBANK', 'ACB'];
        } else if (cleanTarget.indexOf('VIKKI') !== -1 || cleanTarget.indexOf('DONG') !== -1) {
            aliases = ['VIKKIBANK', 'VIKKI', 'DONGABANK'];
        } else if (cleanTarget.indexOf('BIDV') !== -1) {
            aliases = ['BIDV', 'BIDVBANK'];
        } else if (cleanTarget.indexOf('CAKE') !== -1) {
            aliases = ['CAKE', 'CAKEBYVPBANK', 'NGANHANGSOCAKE'];
        } else if (cleanTarget.indexOf('VP') !== -1) {
            aliases = ['VPBANK', 'VPB'];
        } else if (cleanTarget.indexOf('TP') !== -1) {
            aliases = ['TPBANK', 'TPB'];
        } else if (cleanTarget.indexOf('SACOM') !== -1 || cleanTarget === 'STB') {
            aliases = ['SACOMBANK', 'STB'];
        } else if (cleanTarget.indexOf('AGRI') !== -1 || cleanTarget.indexOf('VBARD') !== -1) {
            aliases = ['AGRIBANK', 'VBARD', 'NNPTNT'];
        } else if (cleanTarget.indexOf('HDB') !== -1) {
            aliases = ['HDBANK', 'HDB'];
        } else if (cleanTarget.indexOf('SHB') !== -1) {
            aliases = ['SHBANK', 'SHB'];
        } else if (cleanTarget.indexOf('VIB') !== -1) {
            aliases = ['VIBBANK', 'VIB'];
        } else if (cleanTarget.indexOf('OCB') !== -1 || cleanTarget.indexOf('PHUONGDONG') !== -1) {
            aliases = ['OCBBANK', 'OCB', 'PHUONGDONG'];
        } else if (cleanTarget.indexOf('MSB') !== -1 || cleanTarget.indexOf('HANGHAI') !== -1) {
            aliases = ['MSBBANK', 'MSB', 'HANGHAI'];
        } else if (cleanTarget.indexOf('SEA') !== -1) {
            aliases = ['SEABANK'];
        } else if (cleanTarget.indexOf('LPB') !== -1 || cleanTarget.indexOf('LIENVIET') !== -1) {
            aliases = ['LPBANK', 'LIENVIETPOSTBANK', 'LPB'];
        } else if (cleanTarget.indexOf('EXIM') !== -1 || cleanTarget === 'EIB') {
            aliases = ['EXIMBANK', 'EIB'];
        } else if (cleanTarget.indexOf('TIMO') !== -1 || cleanTarget.indexOf('BVBANK') !== -1 || cleanTarget.indexOf('BANVIET') !== -1) {
            aliases = ['BVBANK', 'TIMO', 'BANVIET'];
        }

        function matchesBankAlias(txtUpperNoSpace) {
            if (!txtUpperNoSpace || txtUpperNoSpace.length > 48) return false;
            if (/CHỌNNGÂNHÀNG|VUILÒNGCHỌN/i.test(txtUpperNoSpace)) return false;
            for (var i = 0; i < aliases.length; i++) {
                var a = aliases[i];
                if (txtUpperNoSpace === a) return true;
                if (a.length >= 5 && txtUpperNoSpace.indexOf(a) !== -1) return true;
                if (a.length < 5 && (
                    txtUpperNoSpace.indexOf('(' + a + ')') !== -1 ||
                    txtUpperNoSpace.indexOf('-' + a) !== -1 ||
                    txtUpperNoSpace.indexOf(a + '-') !== -1 ||
                    txtUpperNoSpace.indexOf(a + 'BANK') !== -1
                )) {
                    return true;
                }
            }
            return false;
        }

        if (isGroupB) {
            var bankTrigger = queryPageInput('input[placeholder*="chọn ngân hàng" i]') ||
                              findByText('div, span, input', 'Vui lòng chọn ngân hàng');
            if (!bankTrigger) return false;
            try { bankTrigger.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
            await sleep(300);
            try { bankTrigger.focus(); } catch (e) {}
            try { bankTrigger.click(); } catch (e) {}
            await sleep(650);
            if (runId !== undefined && isRunCancelled(runId)) return false;

            // Gõ tên ngân hàng trực tiếp vào ô input "Vui lòng chọn ngân hàng" để AngularJS tự lọc danh sách (như ở 01:41 Video 1)
            var searchBox = queryPageInput('input[placeholder*="chọn ngân hàng" i]');
            if (searchBox && !searchBox.readOnly && !searchBox.disabled) {
                var shortFilter = aliases[0].substring(0, 5);
                setReactInput(searchBox, shortFilter, null, true);
                await sleep(650);
            }
            if (runId !== undefined && isRunCancelled(runId)) return false;

            var candidatesB = Array.from(document.querySelectorAll(
                '.dropdown-menu li, .dropdown-menu a, .dropdown-menu div, .dropdown-menu span, [ng-repeat] li, [ng-repeat] div, [ng-repeat] span, ul li, div, span'
            )).filter(function(el) {
                if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
                if (el.tagName === 'INPUT' || el === bankTrigger) return false;
                if (el.children.length > 3) return false;
                var r = el.getBoundingClientRect();
                if (r.width < 40 || r.height < 16 || r.height > 75 || el.offsetParent === null) return false;
                var t = (el.innerText || el.textContent || '').replace(/\s+/g, '').toUpperCase();
                return matchesBankAlias(t);
            });

            if (candidatesB.length > 0) {
                var itemB = candidatesB[candidatesB.length - 1];
                var clickRowB = itemB.closest('li, a, [ng-click]') || itemB;
                try { clickRowB.scrollIntoView({ block: 'center' }); } catch (e) {}
                await sleep(350);
                try { clickRowB.click(); } catch (e) {}
                if (clickRowB !== itemB) {
                    try { itemB.click(); } catch (e2) {}
                }
                addLog('✅ Đã chọn ngân hàng: ' + rawBank);
                await sleep(550);
                return true;
            }
            return false;
        } else if (queryPageInput('input[placeholder*="Tên Ngân Hàng" i], input[placeholder*="Nhập tên ngân hàng" i]') || /\/account\/withdrawaccounts\/bankcards/i.test(location.pathname)) {
            // Nhánh chọn Ngân hàng trực tiếp trên Jun88 V1 & 78WIN (GROUP_D - /account/withdrawaccounts/bankcards):
            var bankFieldD = queryPageInput('input[placeholder*="Tên Ngân Hàng" i]') ||
                             findByText('div, span, label, input', 'Tên Ngân Hàng', false);
            if (bankFieldD && !queryPageInput('input[placeholder*="Nhập tên ngân hàng" i]')) {
                await humanClick(bankFieldD);
                await sleep(650);
                if (runId !== undefined && isRunCancelled(runId)) return false;
            }

            var searchInputD = queryPageInput('input[placeholder*="Nhập tên ngân hàng" i], input[placeholder*="tên ngân hàng" i]');
            if (searchInputD && searchInputD !== bankFieldD) {
                var filterKeyword = aliases[0] === 'CAKE' ? 'CAKE' : rawBank;
                await typeHumanInput(searchInputD, filterKeyword, 'Tìm Ngân hàng', true, runId, 68, 'Bước 3');
                await sleep(550);
                if (runId !== undefined && isRunCancelled(runId)) return false;
            }

            var bankItemsD = Array.from(document.querySelectorAll('li, div, span, p, a')).filter(function(el) {
                if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
                if (el === bankFieldD || el === searchInputD || el.tagName === 'INPUT') return false;
                if (el.children.length > 4) return false;
                var r = el.getBoundingClientRect();
                if (r.width < 30 || r.height < 14 || r.height > 110) return false;
                var txt = (el.innerText || el.textContent || '').replace(/\s+/g, '').toUpperCase();
                if (/TÊNNGÂNHÀNG|NHẬPTÊNNGÂNHÀNG|TOÀNBỘ|ABCDEF/i.test(txt)) return false;
                return matchesBankAlias(txt);
            });

            if (bankItemsD.length > 0) {
                var targetItemD = bankItemsD[bankItemsD.length - 1];
                var clickCardD = targetItemD.closest('li, [role="option"], [class*="item" i], [class*="bank" i]') || targetItemD;
                try { clickCardD.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
                await sleep(320);
                await humanClick(clickCardD);
                if (clickCardD !== targetItemD) {
                    try { targetItemD.click(); } catch (e2) {}
                }
                addLog('✅ [GROUP_D] Đã chọn ngân hàng: ' + rawBank);
                await sleep(550);
                return true;
            }
            return false;
        } else {
            // Nhóm GROUP_A / GROUP_C (CM88, SC88, C168, TT88, 789P, MMOO, VAN88):
            // TUYỆT ĐỐI KHÔNG gõ chữ hay blur vào ô readonly "Chọn ngân hàng phát hành" để không làm đóng sập danh sách (Fix lỗi 06:59 & 07:21 Video 2)!
            var bankSelect = findByText('div, span, input, select', 'Chọn ngân hàng phát hành', false) ||
                             findByText('div, span, input, select', 'Chọn ngân hàng', false) ||
                             queryPageInput('input[placeholder*="Chọn ngân hàng" i]');
            if (!bankSelect) return false;
            var triggerRow = bankSelect.closest('.van-field, .van-cell, .el-select, .ant-select') || bankSelect;

            // Chỉ bấm MỘT LẦN để mở danh sách ngân hàng (tránh bấm kép làm đóng sập danh sách như ở 06:58 Video 2)
            await humanClick(bankSelect);
            await sleep(700);
            if (runId !== undefined && isRunCancelled(runId)) return false;

            var findMatchingBankNodes = function() {
                return Array.from(document.querySelectorAll(
                    'li, .van-cell, .van-picker-column__item, .el-select-dropdown__item, .ant-select-item, [role="option"], div, span, option'
                )).filter(function(el) {
                    if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
                    if (el === bankSelect || el === triggerRow || el.tagName === 'INPUT') return false;
                    if (el.children.length > 4) return false;
                    var r = el.getBoundingClientRect();
                    if (r.width < 20 || r.height < 10 || r.height > 90) return false;
                    var t = (el.innerText || el.textContent || '').replace(/\s+/g, '').toUpperCase();
                    return matchesBankAlias(t);
                });
            };

            var candidatesA = findMatchingBankNodes();
            if (candidatesA.length === 0 && triggerRow !== bankSelect) {
                await humanClick(triggerRow);
                await sleep(650);
                candidatesA = findMatchingBankNodes();
            }

            // Chỉ gõ vào ô tìm kiếm nếu thực sự có 1 ô input tìm kiếm RIÊNG BIỆT
            var realSearchInput = queryPageAll('input[placeholder*="Tìm" i], input[type="search"]').find(function(inp) {
                return inp !== bankSelect && !inp.readOnly && !inp.disabled;
            });
            if (realSearchInput && candidatesA.length === 0) {
                setReactInput(realSearchInput, rawBank, null, true);
                await sleep(500);
                candidatesA = findMatchingBankNodes();
            }

            if (candidatesA.length > 0) {
                var bestA = candidatesA[candidatesA.length - 1];
                var clickRowA = bestA.closest('li, .van-cell, .el-select-dropdown__item, [role="option"]') || bestA;
                try { clickRowA.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
                await sleep(380);
                await humanClick(clickRowA);
                addLog('✅ Đã chọn ngân hàng phát hành: ' + rawBank);
                await sleep(550);
                return true;
            }
            return false;
        }
    }

    // Hàm chỉ điền thông tin Ngân hàng & STK (phục vụ nút ✍️ Điền Nhanh mà KHÔNG tự động bấm Gửi/Xác nhận)
    async function fillBankFieldsOnly(d, runId) {
        var myRunId = runId !== undefined ? runId : currentRunId;
        var site = state.site || detectedSite;
        var group = SITE_MAP[site] ? SITE_MAP[site].group : 'GROUP_B';
        var cleanStkDigits = String(d.stk || '').replace(/\D+/g, '');
        setStatus(65, '🟡 Đang điền biểu mẫu Ngân hàng (' + (d.bank || 'TECHCOMBANK') + ')...');
        var gpkBankInput = queryPageInput('input[placeholder*="chọn ngân hàng" i]') ||
                           findByText('div, span, input', 'Vui lòng chọn ngân hàng');
        var gpkAccInput = queryPageInput('input[placeholder*="9704"]');
        if (group === 'GROUP_D' || /\/account\/withdrawaccounts\/bankcards/i.test(location.pathname)) {
            if (!queryPageInput('input[placeholder*="Tên Ngân Hàng" i]')) {
                var addBankBtnD = findByText('button, div, span, a', 'Thêm ngân hàng +', false) ||
                                  findByText('button, div, span, a', 'Thêm ngân hàng', true);
                if (addBankBtnD) {
                    await humanClick(addBankBtnD);
                    await sleep(650);
                }
            }
            await selectBankOptionSmart(d.bank || 'CAKE', false, myRunId);
            if (isRunCancelled(myRunId)) return false;
            var stkInpD = queryPageInput('input[placeholder*="Số tài khoản" i], input[placeholder*="tài khoản ngân hàng" i]');
            if (stkInpD && cleanStkDigits) {
                await typeHumanInput(stkInpD, cleanStkDigits, 'Số tài khoản', false, myRunId, 74, 'Điền Bank');
                await sleep(450);
            }
            var loginPwInpD = queryPageInput('input[placeholder*="Mật khẩu đăng nhập tài khoản game" i], input[placeholder*="Mật khẩu đăng nhập" i]');
            if (loginPwInpD && d.pw) {
                await typeHumanInput(loginPwInpD, d.pw, 'MK đăng nhập game', false, myRunId, 77, 'Điền Bank');
            }
        } else if (gpkBankInput || gpkAccInput || group === 'GROUP_B') {
            await selectBankOptionSmart(d.bank || 'TECHCOMBANK', true, myRunId);
            if (isRunCancelled(myRunId)) return false;
            var branchInput = queryPageInput('input[placeholder*="thành phố" i], input[placeholder*="chi nhánh" i], input[placeholder*="hồ chí minh" i]');
            if (branchInput) {
                await typeHumanInput(branchInput, d.branch || 'Ninh bình', 'Chi nhánh', false, myRunId, 72, 'Điền Bank');
                await sleep(500);
                if (isRunCancelled(myRunId)) return false;
            }
            var accInput = queryPageInput('input[placeholder*="9704"], input[placeholder*="số tài khoản" i], input[placeholder*="tài khoản" i]');
            if (accInput && cleanStkDigits) {
                await typeHumanInput(accInput, cleanStkDigits, 'Số tài khoản', false, myRunId, 76, 'Điền Bank');
            }
        } else {
            var ownerNameInp = queryPageInput('input[placeholder*="không dấu viết hoa" i], input[placeholder*="chủ tài khoản" i]');
            if (ownerNameInp && !ownerNameInp.disabled && !ownerNameInp.readOnly && (ownerNameInp.value || '').indexOf('*') === -1) {
                setReactInput(ownerNameInp, toUpperNoAccent(d.name || ''), 'Họ tên chủ thẻ');
                await sleep(400);
            }
            await selectBankOptionSmart(d.bank || 'MB BANK', false, myRunId);
            await sleep(450);
            if (isRunCancelled(myRunId)) return false;
            var branchInpA = queryPageInput('input[placeholder*="chi nhánh" i], input[placeholder*="thành phố" i]');
            if (branchInpA) {
                await typeHumanInput(branchInpA, d.branch || 'Ninh bình', 'Chi nhánh', false, myRunId, 72, 'Điền Bank');
                await sleep(450);
            }
            var stkInput = queryPageInput('input[placeholder*="số tài khoản" i], input[placeholder*="994"], input[placeholder*="tài khoản" i], input[name*="account" i]');
            if (stkInput && cleanStkDigits) {
                await typeHumanInput(stkInput, cleanStkDigits, 'Số tài khoản', false, myRunId, 76, 'Điền Bank');
            }
        }
        showToast('✍️ Đã điền xong thông tin Ngân hàng (Chưa bấm Gửi)!');
        setStatus(78, '🟢 Đã điền xong Ngân hàng & STK — Kiểm tra rồi bấm Xác Nhận.');
        return true;
    }


    // ========================================================================
    // LUỒNG TRỰC TIẾP TỐC ĐỘ CAO CHO GROUP_D (JUN88 V1 & 78WIN)
    // Nhảy thẳng qua URL: /signup -> /account/validatePage -> /account/withdrawaccounts/bankcards -> /playerInfo?type=4 & /promoCenter/promotion/...
    // ========================================================================
    function getGroupDSignupUrl(siteKey) {
        var curSearch = location.search || '';
        if (/af=|affiliate=/i.test(curSearch)) {
            return location.origin + '/signup' + curSearch;
        }
        var cfg = SITE_MAP[siteKey];
        if (cfg && cfg.url && /\?/.test(cfg.url)) {
            var qIdx = cfg.url.indexOf('?');
            return location.origin + '/signup' + cfg.url.slice(qIdx);
        }
        return location.origin + '/signup';
    }

    async function executeGroupDStep2Sms(d, isManualSingleStep, myRunId) {
        var site = state.site || detectedSite;
        markStepDone(1);
        saveState({ currentStep: 2 }, false, false);

        if (!/\/account\/validatepage/i.test(location.pathname)) {
            addLog('⚡ [GROUP_D] Chuyển trực tiếp tới trang Xác minh SMS (/account/validatePage)...');
            setStatus(40, '🟡 Bước 2: Đang mở trực tiếp /account/validatePage...');
            saveState({ autoMode: !isManualSingleStep && Boolean(state.autoMode), currentStep: 2 }, true, false);
            if (isRunCancelled(myRunId)) return;
            location.href = location.origin + '/account/validatePage';
            return;
        }

        setStatus(42, '🟡 Bước 2 (' + site + '): Đang chuẩn bị gửi mã xác minh SMS...');
        addLog('2️⃣ BƯỚC 2 (' + site + '): Xác minh SĐT trực tiếp tại /account/validatePage...');
        await sleep(600);
        if (isRunCancelled(myRunId)) return;

        // Kiểm tra nếu đã hiện popup "Xác minh SMS thành công"
        var pageTxtNow = getCleanPageText();
        if (/Xác minh SMS thành công/i.test(pageTxtNow)) {
            var closeSuccessBtn = findByText('button, div, span', 'Đóng', true) || findByText('button, div, span', 'OK', true);
            if (closeSuccessBtn) await humanClick(closeSuccessBtn);
            await sleep(500);
            markStepDone(2);
            if (isManualSingleStep && !state.autoMode) {
                setStatus(55, '🟢 Đã xác minh SMS thành công (Xong Bước 2).');
                return;
            }
            saveState({ autoMode: true, currentStep: 3, waitingOtp: false }, true, false);
            addLog('✅ Đã xác minh SMS thành công -> Nhảy trực tiếp sang Thêm ngân hàng (/account/withdrawaccounts/bankcards)!');
            if (isRunCancelled(myRunId)) return;
            location.href = location.origin + '/account/withdrawaccounts/bankcards';
            return;
        }

        // Tìm nút "Gửi tin nhắn" và tự bấm nếu chưa đếm ngược
        var sendSmsBtn = findByText('button, div, span', 'Gửi tin nhắn', true) ||
                         findByText('button, div, span', 'Gửi tin nhắn', false) ||
                         findByText('button, div, span', 'Gửi mã', true);
        if (sendSmsBtn) {
            var btnTxt = (sendSmsBtn.innerText || '').trim();
            var isCountingDown = /giây|\ds\b/i.test(btnTxt) || sendSmsBtn.disabled;
            if (!isCountingDown) {
                await humanClick(sendSmsBtn);
                addLog('📩 Đã tự động bấm nút "Gửi tin nhắn" SMS!');
                showToast('📩 Đã bấm "Gửi tin nhắn" SMS — Hãy nhập 6 số OTP!');
                await sleep(750);
            }
        }

        var smsCodeInput = await waitForSelector('input[placeholder*="Mã xác minh SMS" i], input[placeholder*="mã xác minh" i], input[placeholder*="SMS" i]', 5000, myRunId);
        if (isRunCancelled(myRunId)) return;

        if (smsCodeInput) {
            try { smsCodeInput.focus(); } catch (e) {}
            if (!smsCodeInput.getAttribute('data-cb-groupd-sms')) {
                smsCodeInput.setAttribute('data-cb-groupd-sms', '1');
                smsCodeInput.addEventListener('input', function() {
                    if (stepCancelRequested) return;
                    var codeVal = (smsCodeInput.value || '').replace(/\D+/g, '');
                    if (smsAutoSubmitTimer) clearTimeout(smsAutoSubmitTimer);
                    if (codeVal.length === 6) {
                        var boundRunId = currentRunId;
                        smsAutoSubmitTimer = setTimeout(async function() {
                            if (isRunCancelled(boundRunId)) return;
                            var confirmBtn = findByText('button, div, span', 'Xác nhận', true) ||
                                             findByText('button, div, span', 'Xác Nhận', true);
                            if (confirmBtn && canClickSubmitNow(true)) {
                                addLog('🚀 Đã nhận đủ 6 số OTP [' + codeVal + '] -> Tự bấm "Xác nhận"!');
                                await humanClick(confirmBtn);
                                for (var w = 0; w < 16; w++) {
                                    await sleep(450);
                                    if (isRunCancelled(boundRunId)) return;
                                    var txtAfter = getCleanPageText();
                                    if (/Xác minh SMS thành công/i.test(txtAfter)) {
                                        var closeBtn = findByText('button, div, span', 'Đóng', true) ||
                                                       findByText('button, div, span', 'OK', true);
                                        if (closeBtn) await humanClick(closeBtn);
                                        await sleep(450);
                                        markStepDone(2);
                                        saveState({ autoMode: true, currentStep: 3, waitingOtp: false }, true, false);
                                        otpWaitingUI();
                                        addLog('🎉 Xác minh SMS thành công -> Chuyển thẳng tới Thêm ngân hàng (/account/withdrawaccounts/bankcards)!');
                                        showToast('🎉 Xác minh SĐT xong -> Vào thẳng Thêm Ngân Hàng!');
                                        if (isRunCancelled(myRunId)) return;
            location.href = location.origin + '/account/withdrawaccounts/bankcards';
                                        return;
                                    }
                                }
                            }
                        }, 380);
                    }
                });
            }
        }

        saveState({ currentStep: 2, waitingOtp: true, step4OtpStartUrl: location.href }, true, false);
        otpWaitingUI();
        setStatus(48, '🟡 Bước 2: Đã bấm Gửi tin nhắn — Hãy nhập 6 số OTP để tự qua Bước 3 (Ngân hàng)!');
        setTimeout(function() {
            if (!isRunCancelled(myRunId)) minimizeToBubble(true);
        }, 700);
    }

    async function executeGroupDStep3Bank(d, isManualSingleStep, myRunId) {
        var site = state.site || detectedSite;
        if (!d.stk || !String(d.stk).trim()) {
            restorePanel();
            saveState({ autoMode: false }, true, false);
            showToast('⚠️ Chưa có Số Tài Khoản (STK)! Hãy nhập STK vào bảng trước.');
            setStatus(55, '🔴 Bước 3 tạm dừng: Ô STK đang trống.');
            return;
        }

        markStepDone(2);
        saveState({ currentStep: 3, waitingOtp: false }, false, false);
        otpWaitingUI();

        if (!/\/account\/withdrawaccounts\/bankcards/i.test(location.pathname)) {
            addLog('⚡ [GROUP_D] Chuyển trực tiếp tới trang Thêm ngân hàng (/account/withdrawaccounts/bankcards)...');
            setStatus(65, '🟡 Bước 3: Đang mở trực tiếp /account/withdrawaccounts/bankcards...');
            saveState({ autoMode: !isManualSingleStep && Boolean(state.autoMode), currentStep: 3 }, true, false);
            if (isRunCancelled(myRunId)) return;
            location.href = location.origin + '/account/withdrawaccounts/bankcards';
            return;
        }

        setStatus(68, '🟡 Bước 3 (' + site + '): Đang mở form Thêm ngân hàng (' + (d.bank || 'CAKE') + ')...');
        addLog('3️⃣ BƯỚC 3 (' + site + '): Thêm Ngân hàng trực tiếp tại /account/withdrawaccounts/bankcards...');
        await sleep(650);
        if (isRunCancelled(myRunId)) return;

        var cleanStkDigits = String(d.stk || '').replace(/\D+/g, '');
        var stkLast4 = cleanStkDigits.slice(-4);

        // Nếu trên trang đã có nút "Thêm ngân hàng +" mà chưa hiện ô input "Tên Ngân Hàng", bấm "Thêm ngân hàng +"!
        var bankNameInp = queryPageInput('input[placeholder*="Tên Ngân Hàng" i]');
        if (!bankNameInp) {
            var addBankPlusBtn = findByText('button, div, span, a', 'Thêm ngân hàng +', false) ||
                                 findByText('button, div, span, a', 'Thêm ngân hàng', true);
            if (addBankPlusBtn) {
                await humanClick(addBankPlusBtn);
                addLog('👆 Đã bấm nút "Thêm ngân hàng +"');
                await sleep(750);
                if (isRunCancelled(myRunId)) return;
            }
        }

        minimizeToBubble(true);

        // 1. Chọn Tên Ngân Hàng (Hỗ trợ CAKE, TECHCOMBANK, MB BANK, v.v. qua ô tìm kiếm "Nhập tên ngân hàng")
        await selectBankOptionSmart(d.bank || 'CAKE', false, myRunId);
        await sleep(500);
        if (isRunCancelled(myRunId)) return;

        // 2. Điền Số tài khoản
        var stkInpD = await waitForSelector('input[placeholder*="Số tài khoản" i], input[placeholder*="tài khoản ngân hàng" i]', 5000, myRunId);
        if (isRunCancelled(myRunId)) return;
        if (stkInpD && cleanStkDigits) {
            await typeHumanInput(stkInpD, cleanStkDigits, 'Số tài khoản', false, myRunId, 74, 'Bước 3');
            await sleep(550);
            if (isRunCancelled(myRunId)) return;
        }

        // 3. Điền Mật khẩu đăng nhập tài khoản game (LƯU Ý: Jun88 & 78WIN yêu cầu MẬT KHẨU ĐĂNG NHẬP d.pw, KHÔNG PHẢI PIN d.wd!)
        var gameLoginPwInp = queryPageInput('input[placeholder*="Mật khẩu đăng nhập tài khoản game" i], input[placeholder*="Mật khẩu đăng nhập" i]');
        if (gameLoginPwInp && d.pw) {
            await typeHumanInput(gameLoginPwInp, d.pw, 'MK đăng nhập game', false, myRunId, 78, 'Bước 3');
            await sleep(550);
            if (isRunCancelled(myRunId)) return;
        }

        // 4. Bấm nút "OK"
        var okBankBtn = findByText('button, div, span', 'OK', true) ||
                        findByText('button, div, span', 'Xác nhận', true);
        if (okBankBtn && stkInpD && cleanStkDigits && canClickSubmitNow(true)) {
            await humanClick(okBankBtn);
            addLog('⏳ Đã bấm nút "OK" lưu thẻ ngân hàng (' + (d.bank || 'CAKE') + ')...');
        } else {
            restorePanel();
            setStatus(70, '🟡 Đã điền thông tin Ngân hàng — Hãy kiểm tra và bấm OK.');
            return;
        }

        // 5. Chờ máy chủ xác nhận "Thẻ ngân hàng đã được thêm thành công"
        var bankAddedOk = false;
        for (var wB = 0; wB < 18; wB++) {
            await sleep(420);
            if (isRunCancelled(myRunId)) return;
            var alertNow = detectPageAlertStatus();
            if (alertNow === 'DUP_BANK') {
                dismissErrorDialogButton();
                var bakDigits = String(d.stkBackup || '').replace(/\D+/g, '');
                if (bakDigits && bakDigits !== cleanStkDigits && !state.usedBackupStk) {
                    addLog('🔄 Trùng STK chính -> Tự đổi sang STK Phụ: ' + bakDigits);
                    var fStkEl = document.getElementById('f-stk');
                    if (fStkEl) fStkEl.value = bakDigits;
                    d = getActiveData();
                    saveState({ data: d, usedBackupStk: true }, true, false);
                    if (stkInpD) {
                        await typeHumanInput(stkInpD, bakDigits, 'STK Phụ', false, myRunId, 76, 'Bước 3');
                        await sleep(450);
                        if (okBankBtn && canClickSubmitNow(true)) {
                            await humanClick(okBankBtn);
                            cleanStkDigits = bakDigits;
                            stkLast4 = cleanStkDigits.slice(-4);
                            wB = 0;
                            continue;
                        }
                    }
                }
                restorePanel();
                saveState({ autoMode: false }, true, false);
                showToast('⚠️ Trùng STK ngân hàng!');
                setStatus(65, '🔴 CẢNH BÁO: STK ngân hàng đã tồn tại trên hệ thống!');
                return;
            }

            var txtNow = getCleanPageText();
            if (/Thẻ ngân hàng đã được thêm thành công|thêm ngân hàng thành công|liên kết thành công/i.test(txtNow) ||
                (!queryPageInput('input[placeholder*="Số tài khoản" i]') && (txtNow.indexOf('****' + stkLast4) !== -1 || /\/account$/i.test(location.pathname)))) {
                bankAddedOk = true;
                var closeSuccessModal = findByText('button, div, span', 'Đóng', true) || findByText('button, div, span', 'OK', true);
                if (closeSuccessModal) {
                    await humanClick(closeSuccessModal);
                    await sleep(450);
                }
                break;
            }
        }

        if (!bankAddedOk) {
            restorePanel();
            setStatus(75, '🟡 Đang chờ máy chủ xác nhận thêm ngân hàng...');
            return;
        }

        recordSuccessToMemory('BANK_ADDED', state.submittedUsername || d.username, true);
        markStepDone(3);

        if (isManualSingleStep && !state.autoMode) {
            restorePanel();
            setStatus(82, '🟢 Đã thêm Ngân hàng thành công (Xong Bước 3).');
            return;
        }

        // Tự động chuyển thẳng sang Bước 4 (Đặt Mã PIN rút tiền + Nhận Khuyến Mãi 58K / 78K)!
        saveState({ autoMode: true, currentStep: 4, groupDPinSet: false }, true, false);
        addLog('🎁 Đã thêm Ngân hàng xong -> Tự động sang Bước 4 (Cài PIN rút tiền & Nhận Khuyến Mãi luôn)!');
        showToast('🎁 Thêm Bank xong -> Tự động cài PIN & Nhận KM!');
        await executeGroupDStep4PinAndPromo(d, false, myRunId);
    }

    async function executeGroupDStep4PinAndPromo(d, isManualSingleStep, myRunId) {
        var site = state.site || detectedSite;
        var cfg = SITE_MAP[site] || {};
        var promoPath = cfg.promoUrl || '/promoCenter/promo';
        var promoCode = cfg.promoCode || (site === '78WIN' ? 'FREE78' : 'FR58');

        markStepDone(3);
        saveState({ currentStep: 4, waitingOtp: false }, false, false);
        otpWaitingUI();

        // GIAI ĐOẠN 4A: Nếu chưa cài Mã PIN rút tiền (hoặc đang đứng ở /playerInfo?type=4), cài Mã PIN rút tiền trước!
        if (!state.groupDPinSet && !/\/promocenter/i.test(location.pathname)) {
            if (!/\/playerinfo/i.test(location.pathname)) {
                addLog('🔐 [Bước 4A] Mở trực tiếp trang Cài Mã PIN rút tiền (/playerInfo?type=4)...');
                setStatus(85, '🟡 Bước 4A: Đang mở /playerInfo?type=4 để cài Mã PIN rút tiền...');
                saveState({ autoMode: true, currentStep: 4 }, true, false);
                location.href = location.origin + '/playerInfo?type=4';
                return;
            }
        }

        if (/\/playerinfo/i.test(location.pathname) || queryPageInput('input[placeholder*="Mã pin rút tiền" i]')) {
            minimizeToBubble(true);
            setStatus(86, '🟡 Bước 4A (' + site + '): Đang điền Mã PIN rút tiền & MK đăng nhập...');
            addLog('🔐 Đang điền Mã PIN rút tiền tại /playerInfo?type=4...');
            var pinInp1 = await waitForSelector('input[placeholder*="Mã pin rút tiền" i]', 5000, myRunId);
            if (isRunCancelled(myRunId)) return;
            var pinInp2 = queryPageInput('input[placeholder*="Xác nhận lại mã pin" i]');
            var loginPwInp = queryPageInput('input[placeholder*="Mật khẩu đăng nhập tài khoản game" i], input[placeholder*="Mật khẩu đăng nhập" i]');

            var pinVal = d.wd || '123123';
            if (pinInp1) {
                await typeHumanInput(pinInp1, pinVal, 'Mã PIN rút tiền', false, myRunId, 87, 'Bước 4A');
                await sleep(500);
            }
            if (pinInp2) {
                await typeHumanInput(pinInp2, pinVal, 'Xác nhận Mã PIN', false, myRunId, 89, 'Bước 4A');
                await sleep(500);
            }
            if (loginPwInp && d.pw) {
                await typeHumanInput(loginPwInp, d.pw, 'MK đăng nhập game', false, myRunId, 91, 'Bước 4A');
                await sleep(500);
            }

            var submitPinBtn = findByText('button, div, span', 'Ấn Xác Nhận', true) ||
                               findByText('button, div, span', 'Cập nhật', true) ||
                               findByText('button, div, span', 'Xác nhận', true);
            if (submitPinBtn && canClickSubmitNow(true)) {
                await humanClick(submitPinBtn);
                addLog('⏳ Đã bấm xác nhận cài Mã PIN rút tiền...');
            }

            for (var wP = 0; wP < 14; wP++) {
                await sleep(420);
                if (isRunCancelled(myRunId)) return;
                var txtP = getCleanPageText();
                if (/Thành công|thành công/i.test(txtP) || /\/promocenter/i.test(location.pathname)) {
                    var closePinModal = findByText('button, div, span', 'Đóng', true) || findByText('button, div, span', 'OK', true);
                    if (closePinModal) {
                        await humanClick(closePinModal);
                        await sleep(450);
                    }
                    break;
                }
            }

            recordSuccessToMemory('PIN_SET', state.submittedUsername || d.username, true);
            saveState({ groupDPinSet: true, autoMode: true, currentStep: 4 }, true, false);
            addLog('✅ Đã cài Mã PIN rút tiền thành công -> Chuyển thẳng tới trang Nhận Khuyến Mãi (' + promoCode + ')!');

            if (!/\/promocenter/i.test(location.pathname)) {
                location.href = location.origin + promoPath;
                return;
            }
        }

        // GIAI ĐOẠN 4B: Tự động mở trang Khuyến Mãi (FR58 trên Jun88 / FREE78 trên 78WIN) & bấm "Đăng Ký Ngay" -> "OK"!
        if (!/\/promocenter/i.test(location.pathname)) {
            addLog('🎁 [Bước 4B] Chuyển trực tiếp tới trang Khuyến Mãi (' + promoCode + ')...');
            setStatus(92, '🟡 Bước 4B: Đang mở trực tiếp trang Khuyến Mãi (' + promoCode + ')...');
            saveState({ autoMode: true, currentStep: 4 }, true, false);
            location.href = location.origin + promoPath;
            return;
        }

        minimizeToBubble(true);
        setStatus(94, '🟡 Bước 4B (' + site + '): Đang tìm nút "Đăng Ký Ngay" khuyến mãi ' + promoCode + '...');
        addLog('🎁 Đang ở trang Khuyến Mãi (' + site + ') -> Chuẩn bị bấm "Đăng Ký Ngay"...');
        await sleep(800);
        if (isRunCancelled(myRunId)) return;

        // Nếu đang ở danh sách /promoCenter/promo chứ chưa vào chi tiết khuyến mãi, chuyển thẳng tới promoPath
        if (/\/promocenter\/promo$/i.test(location.pathname) && promoPath.indexOf('/promotion/') !== -1) {
            location.href = location.origin + promoPath;
            return;
        }

        var claimBtn = null;
        for (var wClaim = 0; wClaim < 14; wClaim++) {
            if (isRunCancelled(myRunId)) return;
            claimBtn = findByText('button, div, span, a', 'Đăng Ký Ngay', true) ||
                       findByText('button, div, span, a', 'Đăng ký ngay', true) ||
                       findByText('button, div, span, a', 'Nhận ngay', true);
            if (claimBtn) break;
            await sleep(450);
        }

        if (!claimBtn) {
            restorePanel();
            setStatus(92, '🟡 Đã mở trang Khuyến Mãi — Hãy bấm "Đăng Ký Ngay" trên màn hình.');
            return;
        }

        try { claimBtn.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
        await sleep(450);
        await humanClick(claimBtn);
        addLog('👆 Đã bấm nút "Đăng Ký Ngay" nhận khuyến mãi ' + promoCode + '!');

        // Chờ 700ms: nếu web chuyển sang /playerInfo?type=4 (do chưa có PIN), tự gọi lại hàm này để điền PIN!
        await sleep(750);
        if (isRunCancelled(myRunId)) return;
        if (/\/playerinfo/i.test(location.pathname) || queryPageInput('input[placeholder*="Mã pin rút tiền" i]')) {
            saveState({ groupDPinSet: false }, true, false);
            await executeGroupDStep4PinAndPromo(d, isManualSingleStep, myRunId);
            return;
        }

        // Chờ hộp thoại xác nhận "Bạn có muốn đăng ký khuyến mãi này?" -> Tự bấm "OK"!
        for (var wConfirm = 0; wConfirm < 10; wConfirm++) {
            if (isRunCancelled(myRunId)) return;
            var confirmPromoOkBtn = findByText('.modal button, [role="dialog"] button, button, div, span', 'OK', true) ||
                                    findByText('.modal button, [role="dialog"] button, button, div, span', 'Xác nhận', true);
            if (confirmPromoOkBtn && confirmPromoOkBtn !== claimBtn) {
                await humanClick(confirmPromoOkBtn);
                addLog('🚀 Đã tự bấm "OK" xác nhận đăng ký khuyến mãi ' + promoCode + '!');
                break;
            }
            await sleep(350);
        }

        // Chờ thông báo kết quả từ máy chủ (VD: "Gửi thành công! Vui lòng đến trung tâm thành viên để kiểm tra")
        await sleep(1600);
        if (isRunCancelled(myRunId)) return;
        var resultTxt = getCleanPageText();
        var closeFinalBtn = findByText('button, div, span', 'Đóng', true) || findByText('button, div, span', 'OK', true);
        if (closeFinalBtn && closeFinalBtn !== claimBtn) {
            await humanClick(closeFinalBtn);
        }
        if (/Gửi thành công|nhận thưởng thành công|đăng ký khuyến mãi thành công/i.test(resultTxt)) {
            addLog('🎉 NHẬN KHUYẾN MÃI ' + promoCode + ' THÀNH CÔNG!');
            showToast('🎉 Đã đăng ký nhận KM ' + promoCode + ' thành công!');
        } else {
            addLog('ℹ️ Đã gửi yêu cầu nhận khuyến mãi ' + promoCode + ' — Hoàn tất quy trình!');
        }
        finishWorkflow(true);
    }

    async function executeStep(step, isManualSingleStep, passedRunId) {
        if (stepRunningLock && activeLockRunId && passedRunId !== activeLockRunId && !stepCancelRequested) {
            cancelAllRunningTasks();
        }
        var myRunId = (passedRunId !== undefined) ? passedRunId : startNewRunSession();
        stepRunningLock = true;
        activeLockRunId = myRunId;

        try {
            var d = ensureProfileReadyForAction(step);
            saveState({ data: d }, true, false);

            var site = state.site || detectedSite;
            var group = SITE_MAP[site] ? SITE_MAP[site].group : 'GROUP_B';
            document.getElementById('cb-banner').style.display = state.autoMode ? 'block' : 'none';

            // Chờ trang tải xong giao diện (chống chạy nhầm trên màn hình trắng / chấm hồng)
            var pageReady = await waitUntilPageReadyOrAutoReload(myRunId, 8500);
            if (!pageReady || isRunCancelled(myRunId)) return;

            // Nếu bấm Bước 1 nhưng người dùng đã đăng nhập và đang đứng ở màn hình Đặt PIN (Bước 2) hoặc Ngân hàng (Bước 3) hoặc Xác minh SĐT (Bước 4) -> Tự động chuyển thẳng sang bước tương ứng!
            var detectedStageNow = detectCurrentScreenStage();
            if (step === 1 && detectedStageNow > 1) {
                addLog('🧭 Nhận diện đang ở màn hình Bước ' + detectedStageNow + ' -> Tự động chạy thẳng Bước ' + detectedStageNow + ' (Không điền đè TK/MK)!');
                saveState({ currentStep: detectedStageNow }, true, false);
                await executeStep(detectedStageNow, isManualSingleStep, myRunId);
                return;
            }

            if (step === 1) {
                markStepDone(0);
                saveState({ currentStep: 1, waitingOtp: false }, false, false);
                otpWaitingUI();

                var memWarns = renderHistoryAndCheckWarnings();
                if (memWarns.length > 0) {
                    addLog(memWarns[0]);
                }

                setStatus(5, '🟡 Bước 1: Đang dọn popup & chuẩn bị Form Đăng Ký (' + site + ')...');
                addLog('1️⃣ BƯỚC 1: Đóng popup & điền từng nhịp ĐK ' + site + ' (TK: ' + d.username + ' | Tên: ' + d.name + ')...');
                await sleep(500);
                if (isRunCancelled(myRunId)) return;

                // TỐI ƯU TỐC ĐỘ CAO CHO GROUP_D (JUN88 V1 & 78WIN):
                // Nếu đang ở trang chủ / sảnh game (chưa vào /signup hoặc /login), nhảy TRỰC TIẾP sang link /signup (bỏ qua hoàn toàn việc đóng popup sảnh)!
                if (group === 'GROUP_D' && !/\/signup|\/login|\/register/i.test(location.pathname) && registerInputs().length < 2) {
                    var directSignupUrl = getGroupDSignupUrl(site);
                    addLog('⚡ [GROUP_D] Bỏ qua thông báo sảnh -> Nhảy trực tiếp tới link Đăng Ký: ' + directSignupUrl);
                    setStatus(8, '🟡 Bước 1: Đang mở trực tiếp link Đăng ký (/signup)...');
                    saveState({ autoMode: !isManualSingleStep && Boolean(state.autoMode), currentStep: 1, registrationSubmitted: false }, true, false);
                    location.href = directSignupUrl;
                    return;
                }

                // Nếu người dùng đang đứng ở trang Đăng Nhập (/login) của GROUP_D (như 08:47 Video 1), tự điền TK + MK để đăng nhập và nhảy thẳng tới Xác minh SĐT!
                if (group === 'GROUP_D' && /\/login/i.test(location.pathname)) {
                    await closeAllPopupsUniversal(myRunId);
                    var loginInps = registerInputs();
                    var uLog = selectFieldSmart(loginInps, ['tài khoản', 'tên đăng nhập', 'username'], ['mật mã', 'mật khẩu'], 0);
                    var pLog = selectFieldSmart(loginInps, ['mật mã', 'mật khẩu', 'password'], null, 1);
                    if (uLog && d.username) await typeHumanInput(uLog, d.username, 'Tài khoản ĐN', false, myRunId, 12, 'Đăng nhập');
                    if (pLog && d.pw) await typeHumanInput(pLog, d.pw, 'Mật khẩu ĐN', false, myRunId, 16, 'Đăng nhập');
                    var loginBtn = findByText('button, div, span', 'ĐĂNG NHẬP PHIÊN BẢN 1', true) ||
                                   findByText('button, div, span', 'ĐĂNG NHẬP', true);
                    if (loginBtn && canClickSubmitNow(true)) {
                        saveState({ autoMode: true, currentStep: 2 }, true, false);
                        await humanClick(loginBtn);
                        await sleep(1600);
                        if (isRunCancelled(myRunId)) return;
            location.href = location.origin + '/account/validatePage';
                        return;
                    }
                }

                await closeAllPopupsUniversal(myRunId);
                if (isRunCancelled(myRunId)) return;

                // Chờ & mở form Đăng ký kiên nhẫn (bắt kịp tốc độ tải của trang tối đa 10 giây)
                var clickedLobbyRegBtn = false;
                for (var waitReg = 0; waitReg < 16 && registerInputs().length < 3; waitReg++) {
                    if (isRunCancelled(myRunId)) return;
                    if (!clickedLobbyRegBtn || waitReg === 6) {
                        var regHeaderBtn = findByText('a, button, div, span', 'ĐĂNG KÝ', true) ||
                                           findByText('a, button, div, span', 'Đăng ký', true) ||
                                           findByText('a, button, div, span', 'Đăng Ký', true);
                        if (regHeaderBtn) {
                            clickedLobbyRegBtn = true;
                            addLog('👆 Tự bấm nút ĐĂNG KÝ trên sảnh & đợi biểu mẫu mở...');
                            setStatus(7, '🟡 Bước 1: Đã bấm nút ĐĂNG KÝ — Đang đợi biểu mẫu mở...');
                            saveState({ autoMode: !isManualSingleStep && Boolean(state.autoMode), currentStep: 1, registrationSubmitted: false }, true, false);
                            await humanClick(regHeaderBtn);
                        }
                    }
                    await sleep(600);
                    if (registerInputs().length < 3 && waitReg % 3 === 2) {
                        await closeAllPopupsUniversal(myRunId);
                    }
                }

                if (!state.registrationSubmitted) {
                    var filled = await fillRegistrationBySite(d, myRunId);
                    if (isRunCancelled(myRunId)) return;
                    if (!filled) {
                        showToast('⏳ Chưa thấy đủ ô Đăng ký trên trang, đang chờ trang tải...');
                        setStatus(10, '🟡 Bước 1: Đang đợi biểu mẫu Đăng ký tải xong...');
                        return;
                    }
                    showToast('✍️ Đã điền xong từng nhịp: ' + d.username);
                    await sleep(750);
                    if (isRunCancelled(myRunId)) return;
                    // Trên CM88 / GROUP_A (không có mã xác minh chữ), kể cả khi bấm lẻ Bước 1 vẫn phải tự bấm nút Đăng Ký & tự giải trò chơi giải đố!
                    if (isManualSingleStep && !state.autoMode && group !== 'GROUP_A' && findVerificationCodeInput()) {
                        markStepDone(1);
                        setStatus(25, '🟢 Xong Bước 1 (Đã đóng Popup & điền Form Đăng Ký).');
                        return;
                    }

                    var preAlert = detectPageAlertStatus();
                    if (preAlert === 'RATE_LIMIT_429') {
                        triggerRateLimit429Cooldown();
                        return;
                    }
                    if (preAlert === 'DUP_PHONE') {
                        dismissErrorDialogButton();
                        await closeAllPopupsUniversal(myRunId);
                        restorePanel();
                        saveState({ autoMode: false, registrationSubmitted: false, waitingOtp: false }, true, false);
                        otpWaitingUI();
                        showToast('🔴 Số điện thoại (' + (d.phone || '') + ') đã tồn tại trên hệ thống!');
                        setStatus(0, '🔴 CẢNH BÁO: Số điện thoại (' + (d.phone || '') + ') đã tồn tại / đã liên kết TK khác!');
                        addLog('🛑 Website báo trùng Số điện thoại (' + (d.phone || '') + ')! Hãy đổi SĐT khác.');
                        return;
                    }
                    if (preAlert === 'DUP_ACCOUNT') {
                        dismissErrorDialogButton();
                        var freshUserPre = mutateUsernameSuffix(true);
                        d = getActiveData();
                        d.username = freshUserPre;
                        showToast('🎲 Trùng Tên TK! Tự đổi sang: ' + freshUserPre);
                        addLog('🔄 Website báo trùng Tên TK -> Tự động sinh TK mới: ' + freshUserPre);
                        await fillRegistrationBySite(d, myRunId);
                        await sleep(550);
                        if (isRunCancelled(myRunId)) return;
                    }

                    // TỰ ĐỘNG GIẢI CAPTCHA TRƯỢT NẾU CÓ SẴN TRÊN TRANG TRƯỚC KHI BẤM ĐĂNG KÝ
                    if (window.__cholibiSliderSolver && window.__cholibiSliderSolver.hasCaptcha()) {
                        addLog('🤖 Phát hiện CAPTCHA Trượt trên form. Tự động giải...');
                        setStatus(15, '🟡 Đang tự động giải CAPTCHA trượt...');
                        minimizeToBubble(true);

                        var solveResPre = await window.__cholibiSliderSolver.solve(myRunId);
                        if (solveResPre && (solveResPre.ok || solveResPre.success)) {
                            addLog('✅ Đã vượt qua CAPTCHA trượt!');
                            setStatus(20, '🟢 Vượt CAPTCHA thành công!');
                            await sleep(900);
                        } else {
                            addLog('⚠️ Chưa tự giải được CAPTCHA trượt (' + ((solveResPre && solveResPre.reason) || '') + '). Hãy kéo tay -> Tool tự chạy tiếp!');
                            setStatus(15, '🔴 Hãy TỰ KÉO thanh trượt bằng tay -> Tool sẽ tự bấm ĐK!');
                            startPostRegisterWatcherLoop(myRunId);
                            return;
                        }
                    }

                    // Nếu trang có ô nhập Mã xác minh (4-6 ký tự cuối form như NOHU88/J88/VAN88), dừng chờ gõ mã -> tự bấm ĐK
                    var capInputEl = findVerificationCodeInput();
                    if (capInputEl) {
                        saveState({ currentStep: 1, waitingOtp: true, autoMode: true }, true, false);
                        otpWaitingUI();
                        showToast('⌨️ Hãy gõ Mã xác minh -> Tự bấm ĐK!');
                        setStatus(15, '🟡 Hãy nhập Mã xác minh -> Tự bấm Đăng ký & chạy tiếp!');
                        setTimeout(function() {
                            if (!isRunCancelled(myRunId)) minimizeToBubble(true);
                        }, 1200);
                        startPostRegisterWatcherLoop(myRunId);
                        return;
                    }

                    // Nếu là CM88 / SC88 / C168 (bấm nút ĐĂNG KÝ xong mới hiện khung kéo hình Trượt để hoàn thành trò đố):
                    var submitBtn = findRegisterSubmitBtn ? findRegisterSubmitBtn() : findRegisterSubmit();
                    if (submitBtn && canClickSubmitNow(true)) {
                        saveState({
                            registrationSubmitted: true,
                            submittedUsername: d.username || '',
                            currentStep: 1,
                            autoMode: true
                        }, true, false);
                        await humanClick(submitBtn);
                        addLog('⏳ Đã bấm nút Đăng ký cho TK: ' + d.username + ' -> Chờ kiểm tra khung Trò chơi giải đố (CAPTCHA trượt)...');

                        // Chờ tối đa ~5.6 giây để modal Trò chơi giải đố (CAPTCHA trượt) trên CM88/SC88/C168 tải xong ảnh
                        for (var wCap = 0; wCap < 16; wCap++) {
                            await sleep(350);
                            if (isRunCancelled(myRunId)) return;
                            if (window.__cholibiSliderSolver && window.__cholibiSliderSolver.hasCaptcha()) break;
                            if (detectPageAlertStatus()) break;
                            var subDoneEarly = findByText('div, span, p, h1, h2, h3, h4', 'Đăng Ký Thành Công', false) ||
                                               findByText('div, span, p, h1, h2, h3, h4', 'chúc mừng bạn đã đăng ký thành công', false);
                            if (subDoneEarly) break;
                        }

                        // TỰ ĐỘNG GIẢI CAPTCHA TRƯỢT NẾU HIỆN LÊN SAU KHI BẤM NÚT ĐĂNG KÝ (CM88 / SC88 / C168)
                        if (window.__cholibiSliderSolver && window.__cholibiSliderSolver.hasCaptcha()) {
                            addLog('🤖 Phát hiện CAPTCHA Trượt sau khi bấm Đăng ký. Tự động giải...');
                            setStatus(15, '🟡 Đang tự động giải CAPTCHA trượt...');
                            minimizeToBubble(true);

                            var solveResPost = await window.__cholibiSliderSolver.solve(myRunId);
                            if (solveResPost && (solveResPost.ok || solveResPost.success)) {
                                addLog('✅ Đã vượt qua CAPTCHA trượt (' + (solveResPost.distance || 0) + 'px)!');
                                setStatus(20, '🟢 Vượt CAPTCHA thành công! Đang vào Bước 2...');
                                await sleep(800);
                            } else {
                                addLog('⚠️ Chưa tự giải được CAPTCHA trượt (' + ((solveResPost && solveResPost.reason) || '') + '). Hãy kéo tay -> Tool tự chạy tiếp!');
                                setStatus(15, '🔴 Hãy TỰ KÉO thanh trượt bằng tay -> Tool sẽ tự chạy tiếp Bước 2!');
                                startPostRegisterWatcherLoop(myRunId);
                                return;
                            }
                        }
                    } else {
                        setStatus(20, '🟡 Đã điền xong form; hãy bấm Đăng ký.');
                        startPostRegisterWatcherLoop(myRunId);
                        return;
                    }
                }

                setStatus(25, '🟡 Đang chờ xác minh / Đăng ký thành công để tự vào Bước 2...');
                minimizeToBubble(true);
                await startPostRegisterWatcherLoop(myRunId);
            }

            else if (step === 2) {
                if (group === 'GROUP_D') {
                    await executeGroupDStep2Sms(d, isManualSingleStep, myRunId);
                    return;
                }
                markStepDone(1);
                setStatus(35, '🟡 Bước 2: Kiểm tra / Đặt MK rút tiền (' + site + ')...');
                addLog('2️⃣ BƯỚC 2: Kiểm tra / Đặt MK rút tiền (' + site + ')...');
                await sleep(700);
                if (isRunCancelled(myRunId)) return;

                await dismissPostRegisterModals();
                await closeAllPopupsUniversal(myRunId);
                if (isRunCancelled(myRunId)) return;

                var hasSetPinTitleNow = findByText('div, span, p', 'đặt mật khẩu rút tiền', false) ||
                                        findByText('div, span, p', 'Cài đặt mật khẩu rút tiền', false) ||
                                        findByText('div, span, p', 'Xác nhận mật khẩu rút tiền', false);

                if (!hasSetPinTitleNow) {
                    var wdNav = findWithdrawLink();
                    if (wdNav && /tab=1/i.test(location.search)) {
                        wdNav.click();
                        await sleep(950);
                    } else if (wdNav && location.href.indexOf('security') === -1 && location.href.indexOf('withdraw') === -1 && location.href.indexOf('Financial') === -1) {
                        wdNav.click();
                        await sleep(1100);
                    }
                    if (isRunCancelled(myRunId)) return;
                    await closeAllPopupsUniversal(myRunId);
                }

                var setPwdAlert = findByText('div, span, a', 'Mật khẩu rút tiền chưa cài đặt');
                if (setPwdAlert) {
                    setPwdAlert.click();
                    await sleep(1000);
                    if (isRunCancelled(myRunId)) return;
                }

                var existingBankTrigger = findByText('div, span, input', 'Vui lòng chọn ngân hàng') ||
                                          findByText('div, span', 'Tài khoản nhận', true) ||
                                          findByText('div, span, button', 'Thêm Tài Khoản', false) ||
                                          queryPageInput('input[placeholder*="chọn ngân hàng" i], input[placeholder*="9704"], input[placeholder*="số tài khoản" i]');
                var hasSetPinTitle = findByText('div, span, p', 'đặt mật khẩu rút tiền', false) ||
                                     findByText('div, span, p', 'Cài đặt mật khẩu rút tiền', false) ||
                                     findByText('div, span, p', 'Xác nhận mật khẩu rút tiền', false);
                if (existingBankTrigger && !hasSetPinTitle) {
                    if (isManualSingleStep || !state.autoMode) {
                        markStepDone(2);
                        setStatus(50, '🟢 Tài khoản đã có MK rút tiền (Xong Bước 2).');
                        return;
                    }
                    addLog('✅ Tài khoản đã có MK rút tiền -> Chuyển thẳng sang Bước 3 (Thêm ngân hàng)!');
                    saveState({ currentStep: 3 }, true, false);
                    await executeStep(3, isManualSingleStep, myRunId);
                    return;
                }

                minimizeToBubble(true);

                // Ưu tiên nhận diện 2 cụm 6 ô vuông trên CM88 / SC88 / C168 / TT88 / 789P / MMOO
                var sixBoxContainers = findSixBoxPinContainers();
                var pwInputs = queryPageAll('input[type="password"]');

                if (sixBoxContainers.length >= 2) {
                    addLog('🔢 Điền chậm rãi 6 số MK rút tiền (Dòng 1)...');
                    await typeOnVirtualKeypad(d.wd, myRunId, sixBoxContainers[0]);
                    await sleep(600);
                    if (isRunCancelled(myRunId)) return;
                    addLog('🔢 Điền chậm rãi 6 số Xác nhận MK rút tiền (Dòng 2)...');
                    await typeOnVirtualKeypad(d.wd, myRunId, sixBoxContainers[1]);
                    await sleep(600);
                } else if (pwInputs.length >= 2 && pwInputs.length < 6 && group !== 'GROUP_A') {
                    setReactInput(pwInputs[0], d.wd, 'withdrawPassword');
                    await sleep(450);
                    if (isRunCancelled(myRunId)) return;
                    setReactInput(pwInputs[1], d.wd, 'confirmWithdrawPassword');
                    await sleep(500);
                } else {
                    var label1 = findByText('div, span, p', 'đặt mật khẩu rút tiền', false) ||
                                 findByText('div, span, p', 'Cài đặt mật khẩu rút tiền', false);
                    if (label1 && label1.nextElementSibling) label1.nextElementSibling.click();
                    await sleep(500);
                    if (isRunCancelled(myRunId)) return;
                    await typeOnVirtualKeypad(d.wd, myRunId, sixBoxContainers[0] || null);

                    var label2 = findByText('div, span, p', 'Xác nhận mật khẩu rút tiền', false);
                    if (label2 && label2.nextElementSibling) label2.nextElementSibling.click();
                    await sleep(500);
                    if (isRunCancelled(myRunId)) return;
                    await typeOnVirtualKeypad(d.wd, myRunId, sixBoxContainers[1] || null);
                }

                await sleep(550);
                if (isRunCancelled(myRunId)) return;
                var confirmBtn = findByText('button, .van-button, div', 'Xác Nhận', true) ||
                                 findByText('button, div, span', 'Gửi đi', true) ||
                                 findByText('button, div, span', 'Xác nhận', true);
                if (confirmBtn && canClickSubmitNow(true)) {
                    await humanClick(confirmBtn);
                }

                await sleep(2000);
                if (isRunCancelled(myRunId)) return;
                restorePanel();
                if (isManualSingleStep || !state.autoMode) {
                    markStepDone(2);
                    setStatus(50, '🟢 Xong Bước 2 (Đã đặt MK rút tiền).');
                    return;
                }
                saveState({ currentStep: 3 }, true, false);
                await executeStep(3, false, myRunId);
            }

            else if (step === 3) {
                if (group === 'GROUP_D') {
                    await executeGroupDStep3Bank(d, isManualSingleStep, myRunId);
                    return;
                }
                if (!d.stk || !String(d.stk).trim()) {
                    restorePanel();
                    saveState({ autoMode: false }, true, false);
                    showToast('⚠️ Chưa có Số Tài Khoản (STK)! Hãy nhập STK thật vào bảng trước.');
                    setStatus(50, '🔴 Bước 3 tạm dừng: Ô STK đang trống (Không tự sinh STK giả).');
                    addLog('🛑 Dừng Bước 3 vì chưa có STK ngân hàng hợp lệ.');
                    return;
                }
                markStepDone(2);
                setStatus(65, '🟡 Bước 3: Đang chuẩn bị biểu mẫu Ngân hàng (' + site + ')...');
                addLog('3️⃣ BƯỚC 3: Thêm Bank (' + (d.bank || 'TECHCOMBANK') + ' - STK: ' + (d.stk || '') + ')...');
                await sleep(750);
                if (isRunCancelled(myRunId)) return;

                // Chờ màn hình "Đang tải... Vui lòng đợi!" tải xong (tối đa 15 giây)
                for (var wLoad = 0; wLoad < 30; wLoad++) {
                    if (isRunCancelled(myRunId)) return;
                    var bodyTxtNow = getCleanPageText();
                    var isSpinning = /Đang tải\.\.\.|Vui lòng đợi/i.test(bodyTxtNow) && registerInputs().length === 0;
                    if (!isSpinning) break;
                    setStatus(65, '⏳ Trang ' + site + ' đang tải dữ liệu... (' + Math.ceil((wLoad + 1) / 2) + 's)');
                    await sleep(500);
                }
                if (isRunCancelled(myRunId)) return;

                await closeAllPopupsUniversal(myRunId);
                if (isRunCancelled(myRunId)) return;

                if (/\/financial/i.test(location.pathname) && /tab=1/i.test(location.search)) {
                    var rTab = findWithdrawLink();
                    if (rTab) {
                        rTab.click();
                        await sleep(1000);
                        if (isRunCancelled(myRunId)) return;
                    } else {
                        location.href = location.origin + '/Financial?tab=2';
                        return;
                    }
                }

                if (group === 'GROUP_B') {
                    for (var wForm = 0; wForm < 16; wForm++) {
                        if (isRunCancelled(myRunId)) return;
                        var hasBankDom = queryPageInput('input[placeholder*="chọn ngân hàng" i], input[placeholder*="9704"], input[placeholder*="số tài khoản" i]') ||
                                         findByText('div, span, input', 'Vui lòng chọn ngân hàng');
                        if (hasBankDom) break;
                        var wdLinkTry = findWithdrawLink();
                        if (wdLinkTry && wForm === 3) wdLinkTry.click();
                        await sleep(550);
                    }
                }

                var gpkBankInput = queryPageInput('input[placeholder*="vui lòng chọn ngân hàng" i]') ||
                                   findByText('div, span, input', 'Vui lòng chọn ngân hàng');
                var gpkAccInput = queryPageInput('input[placeholder*="9704"]');
                var bankFormSubmitted = false;
                var cleanStkDigits = String(d.stk || '').replace(/\D+/g, '');

                if (group === 'GROUP_B' || (group !== 'GROUP_A' && group !== 'GROUP_C' && (gpkBankInput || gpkAccInput))) {
                    minimizeToBubble(true);

                    // 1. Chọn Ngân hàng chậm rãi (hỗ trợ gõ lọc trên NOHU88/J88/GO99/U888)
                    await selectBankOptionSmart(d.bank || 'TECHCOMBANK', true, myRunId);
                    if (isRunCancelled(myRunId)) return;

                    // 2. Điền Chi nhánh ngân hàng
                    var branchInput = queryPageInput('input[placeholder*="thành phố" i], input[placeholder*="chi nhánh" i], input[placeholder*="hồ chí minh" i]');
                    if (!branchInput) {
                        var allInps = registerInputs();
                        branchInput = selectFieldSmart(allInps, ['chi nhánh', 'thành phố', 'hồ chí minh', 'branch', 'city'], ['ngân hàng', 'số tài khoản', '9704'], null);
                    }
                    if (branchInput) {
                        await typeHumanInput(branchInput, d.branch || 'Ninh bình', 'Chi nhánh', false, myRunId, 72, 'Bước 3');
                        await sleep(650);
                        if (isRunCancelled(myRunId)) return;
                    }

                    // 3. Điền Số tài khoản (chỉ chữ số sạch, gõ từng số như người thật)
                    var accInput = queryPageInput('input[placeholder*="9704"], input[placeholder*="số tài khoản" i], input[placeholder*="tài khoản" i]');
                    if (!accInput) {
                        var allInps2 = registerInputs();
                        accInput = selectFieldSmart(allInps2, ['số tài khoản', '9704', 'account'], ['chi nhánh', 'ngân hàng'], null);
                    }
                    if (accInput && cleanStkDigits) {
                        await typeHumanInput(accInput, cleanStkDigits, 'Số tài khoản', false, myRunId, 76, 'Bước 3');
                        await sleep(700);
                        if (isRunCancelled(myRunId)) return;
                    }

                    // 4. Bấm GỬI ĐI
                    var submitGpk = findByText('button, div, span, input[type="submit"]', 'GỬI ĐI', true) ||
                                    findByText('button, div, span, input[type="submit"]', 'Gửi đi', true) ||
                                    findByText('button, div, span', 'Xác nhận', true);
                    if (submitGpk && accInput && cleanStkDigits && canClickSubmitNow()) {
                        await humanClick(submitGpk);
                        bankFormSubmitted = true;
                        addLog('⏳ Đã bấm GỬI ĐI thêm ngân hàng!');
                    }
                    await sleep(2000);
                    if (isRunCancelled(myRunId)) return;

                } else {
                    // Luồng CM88 / SC88 / C168 / TT88 / 789P / MMOO / VAN88 (GROUP_A & GROUP_C)
                    minimizeToBubble(true);

                    // Kiểm tra nếu tài khoản ĐÃ liên kết ngân hàng rồi (VD: "Tài khoản nhận (1/5)" hoặc "****1998") -> Chuyển thẳng sang Bước 4!
                    var pageTextPreBank = getCleanPageText();
                    var stkCheckLast4 = cleanStkDigits ? cleanStkDigits.slice(-4) : '';
                    var bakCheckLast4 = String(d.stkBackup || '').replace(/\D+/g, '').slice(-4);
                    var alreadyLinkedOnPage = /Tài khoản nhận\s*\([1-9]\//i.test(pageTextPreBank) ||
                        (stkCheckLast4.length === 4 && pageTextPreBank.indexOf('****' + stkCheckLast4) !== -1) ||
                        (bakCheckLast4.length === 4 && pageTextPreBank.indexOf('****' + bakCheckLast4) !== -1);

                    if (alreadyLinkedOnPage && !queryPageInput('input[placeholder*="số tài khoản" i], input[placeholder*="994"]')) {
                        addLog('✅ Phát hiện tài khoản đã liên kết ngân hàng trên trang -> Chuyển thẳng sang Bước 4 (Xác minh SĐT)!');
                        bankFormSubmitted = true;
                    } else {
                        var existingStkModal = queryPageInput('input[placeholder*="số tài khoản" i], input[placeholder*="994"]');
                        if (!existingStkModal) {
                            var tabReceive = findByText('div, span, li', 'Tài khoản nhận', true);
                            if (tabReceive) {
                                await humanClick(tabReceive);
                                await sleep(650);
                            }
                            if (isRunCancelled(myRunId)) return;

                            // Kiểm tra lại sau khi bấm tab Tài khoản nhận xem đã có thẻ chưa
                            var pageTextAfterTab = getCleanPageText();
                            if (/Tài khoản nhận\s*\([1-9]\//i.test(pageTextAfterTab)) {
                                addLog('✅ Tài khoản đã có ngân hàng liên kết (Tài khoản nhận 1/5) -> Chuyển thẳng sang Bước 4!');
                                bankFormSubmitted = true;
                            } else {
                                var addBankRow = findByText('div, span, a', 'Thêm Vào', true) ||
                                                 findByText('div, span, a', 'Tài khoản ngân hàng', false) ||
                                                 findByText('div, span, button, a', 'Thêm Tài Khoản', false);
                                if (addBankRow) {
                                    await humanClick(addBankRow);
                                    await sleep(900);
                                }
                                if (isRunCancelled(myRunId)) return;

                                // Nếu hiện popup "Nhập mật khẩu rút tiền" (6 ô vuông + nút Tiếp Theo như ở 06:42 Video 2)
                                var nextBtn = findByText('button, .van-button, div, span', 'Tiếp Theo', true);
                                if (nextBtn) {
                                    addLog('🔐 Nhập 6 số MK rút tiền để mở form Thêm ngân hàng...');
                                    var modalPinBoxes = findSixBoxPinContainers();
                                    await typeOnVirtualKeypad(d.wd, myRunId, modalPinBoxes[0] || null);
                                    await sleep(500);
                                    if (isRunCancelled(myRunId)) return;
                                    await humanClick(nextBtn);
                                    await sleep(1000);
                                    if (isRunCancelled(myRunId)) return;
                                }
                            }
                        }

                        if (!bankFormSubmitted) {
                            // Kiểm tra nếu có ô Họ tên chủ tài khoản chưa khóa (chưa phải ***H)
                            var ownerNameInp = queryPageInput('input[placeholder*="không dấu viết hoa" i], input[placeholder*="chủ tài khoản" i]');
                            if (ownerNameInp && !ownerNameInp.disabled && !ownerNameInp.readOnly && (ownerNameInp.value || '').indexOf('*') === -1) {
                                setReactInput(ownerNameInp, toUpperNoAccent(d.name || ''), 'Họ tên chủ thẻ');
                                await sleep(420);
                            }

                            // 1. Chọn Ngân hàng phát hành TRƯỚC (để không làm mất focus hay đóng sập dropdown)
                            await selectBankOptionSmart(d.bank || 'MB BANK', false, myRunId);
                            await sleep(500);
                            if (isRunCancelled(myRunId)) return;

                            // 2. Điền Chi nhánh ngân hàng (nếu form có ô Chi nhánh)
                            var branchInpA = queryPageInput('input[placeholder*="chi nhánh" i], input[placeholder*="thành phố" i]');
                            if (branchInpA) {
                                await typeHumanInput(branchInpA, d.branch || 'Ninh bình', 'Chi nhánh', false, myRunId, 72, 'Bước 3');
                                await sleep(600);
                            }

                            // 3. Điền Số tài khoản từng số như người thật (không bao giờ báo "! Chỉ hỗ trợ số")
                            var stkInput = await waitForSelector('input[placeholder*="số tài khoản" i], input[placeholder*="994"], input[placeholder*="tài khoản" i], input[name*="account" i]', 6500, myRunId);
                            if (isRunCancelled(myRunId)) return;
                            if (stkInput && cleanStkDigits) {
                                await typeHumanInput(stkInput, cleanStkDigits, 'Số tài khoản', false, myRunId, 76, 'Bước 3');
                                await sleep(650);
                                if (findByText('div, span, p', 'Chỉ hỗ trợ số', false)) {
                                    setReactInput(stkInput, cleanStkDigits, null);
                                    await sleep(400);
                                }
                            }

                            var confirmBankBtn = findByText('button, .van-button, div', 'Xác Nhận', true) ||
                                                 findByText('button, .van-button, div', 'Thêm mới', true) ||
                                                 findByText('button, div, span', 'Gửi đi', true) ||
                                                 findByText('button, div, span', 'Thêm', true);
                            if (confirmBankBtn && stkInput && cleanStkDigits && canClickSubmitNow(true)) {
                                await humanClick(confirmBankBtn);
                                bankFormSubmitted = true;
                                addLog('⏳ Đã bấm Xác Nhận thêm tài khoản ngân hàng!');
                            }
                            await sleep(350);
                            if (isRunCancelled(myRunId)) return;
                        }
                    }
                }

                if (!bankFormSubmitted) {
                    restorePanel();
                    setStatus(65, '🟡 Trang chưa hiện form Ngân hàng (Đang tải). Khi trang tải xong hãy bấm Bước 3!');
                    showToast('⏳ Trang chưa tải xong ô Ngân hàng — Chưa lưu STK!');
                    addLog('⏳ Chưa thấy ô nhập STK ngân hàng (trang còn đang tải) -> Không ghi nhận hoàn tất giả.');
                    return;
                }

                // Vòng lặp kiểm tra phản hồi máy chủ (bắt ngay toast "Đã thêm thành công" 1.2s & tự đổi sang STK PHỤ nếu báo trùng ở bất kỳ nhịp nào!)
                var bankConfirmedByServer = false;
                for (var bWait = 0; bWait < 20; bWait++) {
                    if (isRunCancelled(myRunId)) return;
                    var lateAlert = detectPageAlertStatus();
                    if (lateAlert === 'RATE_LIMIT_429') {
                        triggerRateLimit429Cooldown();
                        return;
                    }
                    if (lateAlert === 'MAX_BANK_REACHED') {
                        dismissErrorDialogButton();
                        bankConfirmedByServer = true;
                        break;
                    }
                    if (lateAlert === 'DUP_BANK') {
                        dismissErrorDialogButton();
                        var cleanBakDigits = String(d.stkBackup || '').replace(/\D+/g, '');
                        if (cleanBakDigits && cleanBakDigits !== cleanStkDigits && !state.usedBackupStk) {
                            addLog('🔄 STK chính đã được liên kết bởi thành viên khác -> Tự đổi sang STK PHỤ: ' + cleanBakDigits);
                            showToast('🔄 Trùng STK chính -> Tự điền STK Phụ: ' + cleanBakDigits);
                            var fStkEl = document.getElementById('f-stk');
                            if (fStkEl) fStkEl.value = cleanBakDigits;
                            d = getActiveData();
                            saveState({ data: d, usedBackupStk: true }, true, false);
                            await sleep(450);
                            var backupAccEl = queryPageInput('input[placeholder*="9704"], input[placeholder*="số tài khoản" i], input[placeholder*="994"], input[placeholder*="tài khoản" i]');
                            if (backupAccEl) {
                                setReactInput(backupAccEl, cleanBakDigits, 'STK dự phòng');
                                await sleep(500);
                                var retryBankBtn = findByText('button, .van-button, div, span', 'GỬI ĐI', true) ||
                                                   findByText('button, .van-button, div, span', 'Gửi đi', true) ||
                                                   findByText('button, .van-button, div, span', 'Xác Nhận', true) ||
                                                   findByText('button, .van-button, div, span', 'Thêm mới', true);
                                if (retryBankBtn && canClickSubmitNow(true)) {
                                    await humanClick(retryBankBtn);
                                    cleanStkDigits = cleanBakDigits;
                                    bWait = 0; // Reset bộ đếm chờ kết quả của STK Phụ
                                    await sleep(500);
                                    continue;
                                }
                            }
                        }
                        restorePanel();
                        saveState({ autoMode: false }, true, false);
                        showToast('⚠️ Trùng STK ngân hàng! Hãy nhập STK Phụ khác.');
                        setStatus(50, '🔴 CẢNH BÁO: STK ngân hàng đã được liên kết bởi thành viên khác!');
                        addLog('⚠️ Website báo trùng STK ngân hàng! Đã dừng để bạn kiểm tra.');
                        return;
                    }
                    if (lateAlert) {
                        restorePanel();
                        saveState({ autoMode: false }, true, false);
                        setStatus(50, '🔴 Máy chủ từ chối thông tin Ngân hàng (' + lateAlert + ') — Không lưu lịch sử giả!');
                        addLog('⚠️ Máy chủ báo lỗi khi thêm ngân hàng: ' + lateAlert);
                        return;
                    }

                    var pageTxtAfterBank = getCleanPageText();
                    var stkLast4 = cleanStkDigits ? cleanStkDigits.slice(-4) : '';
                    var stkInputAfterSubmit = queryPageInput('input[placeholder*="9704"], input[placeholder*="số tài khoản" i], input[placeholder*="994"]');
                    var maskedStkAppeared = (stkLast4.length === 4 && (
                        pageTxtAfterBank.indexOf('***' + stkLast4) !== -1 ||
                        pageTxtAfterBank.indexOf('****' + stkLast4) !== -1 ||
                        (!stkInputAfterSubmit && pageTxtAfterBank.indexOf(stkLast4) !== -1)
                    ));
                    var hasSuccessToastOrText = /(đã thêm thành công|thêm ngân hàng thành công|liên kết ngân hàng thành công|thêm thẻ thành công|liên kết thành công|thêm thành công|đã liên kết ngân hàng|Tài khoản nhận\s*\([1-9]\/|Tài khoản ngân hàng\s*\([1-9]\/)/i.test(pageTxtAfterBank) || maskedStkAppeared;
                    if (hasSuccessToastOrText && !detectPageAlertStatus()) {
                        bankConfirmedByServer = true;
                        break;
                    }
                    await sleep(320);
                }

                if (!bankConfirmedByServer) {
                    restorePanel();
                    saveState({ autoMode: false }, true, false);
                    setStatus(65, '🟡 PENDING: Đang chờ máy chủ xác nhận liên kết ngân hàng — Chưa ghi BANK_ADDED!');
                    addLog('⏳ Trạng thái PENDING: Chưa thấy máy chủ xác nhận liên kết ngân hàng thành công -> Không ghi BANK_ADDED giả.');
                    window.__cholibiBridgeSend('FLOATING_CMD_RESULT', {
                        cmd: 'GO_BANK_PAGE',
                        status: 'PENDING',
                        message: 'Đã gửi biểu mẫu Ngân hàng, đang chờ máy chủ xác nhận (PENDING)'
                    });
                    return;
                }

                recordSuccessToMemory('BANK_ADDED', state.submittedUsername || d.username, true);
                window.__cholibiBridgeSend('FLOATING_CMD_RESULT', {
                    cmd: 'GO_BANK_PAGE',
                    status: 'SUCCESS',
                    message: 'Đã liên kết Ngân hàng thành công (' + (d.bank || '') + ')'
                });

                // Nếu bấm chạy lẻ Bước 3 (isManualSingleStep), dừng lại sau khi xong Bước 3!
                if (isManualSingleStep || !state.autoMode) {
                    restorePanel();
                    markStepDone(3);
                    setStatus(80, '🟢 Xong Bước 3 (Đã liên kết Ngân hàng thành công).');
                    return;
                }

                // Chuyển thẳng sang Bước 4 (Xác minh SĐT) cho toàn bộ nhóm GROUP_A khi chạy Auto
                if (group === 'GROUP_A') {
                    saveState({ autoMode: true, currentStep: 4, waitingOtp: false }, true, false);
                    markStepDone(3);
                    setStatus(80, '🟢 Đã thêm Ngân hàng -> Tự động chuyển sang Xác minh SĐT...');
                    addLog('🔐 Đã thêm Ngân hàng xong -> Tự động mở trang Bảo Mật / Xác minh SĐT...');

                    var securityPath = SITE_SECURITY_PATHS[site] || '/home/security?active=0';
                    var targetSecurityUrl = location.origin + securityPath;

                    // Ưu tiên 1: Điều hướng mượt qua Vue Router SPA (không gây trắng màn hình hay tải lại trang)
                    var navigatedBySpa = false;
                    try {
                        var appRoot = document.querySelector('#app');
                        if (appRoot && appRoot.__vue__ && appRoot.__vue__.$router) {
                            appRoot.__vue__.$router.push(securityPath);
                            navigatedBySpa = true;
                        } else if (appRoot && appRoot.__vue_app__ && appRoot.__vue_app__.config &&
                                   appRoot.__vue_app__.config.globalProperties && appRoot.__vue_app__.config.globalProperties.$router) {
                            appRoot.__vue_app__.config.globalProperties.$router.push(securityPath);
                            navigatedBySpa = true;
                        }
                    } catch (eSpa) {}

                    if (navigatedBySpa) {
                        await sleep(850);
                        if (isRunCancelled(myRunId)) return;
                        if (location.href.indexOf('/home/security') !== -1 || queryPageInput('input[placeholder*="số di động" i], input[placeholder*="điện thoại" i]')) {
                            await executeStep(4, false, myRunId);
                            return;
                        }
                    }

                    // Ưu tiên 2: Nếu chưa ở /home/security, chuyển qua location.href và Auto Resume sẽ chạy ngay Bước 4
                    if (location.href.indexOf('/home/security') === -1) {
                        await sleep(500);
                        if (isRunCancelled(myRunId)) return;
                        location.href = targetSecurityUrl;
                        return;
                    }
                    await executeStep(4, false, myRunId);
                } else {
                    restorePanel();
                    if (!state.autoMode && isManualSingleStep) {
                        markStepDone(3);
                        setStatus(85, '🟢 Xong Bước 3 (Đã xác nhận thêm Ngân hàng).');
                        return;
                    }
                    finishWorkflow(bankConfirmedByServer);
                }
            }

            else if (step === 4) {
                if (group === 'GROUP_D') {
                    await executeGroupDStep4PinAndPromo(d, isManualSingleStep, myRunId);
                    return;
                }
                // Chặn tuyệt đối việc chạy nhầm Bước 4 (Xác minh SĐT) khi đang đứng ở Form Đăng Ký (Bước 1)!
                if (isRegistrationFormVisibleOnPage() || /\/register|\bregister\b/i.test((location.pathname || '') + ' ' + (location.hash || ''))) {
                    addLog('🧭 Đang ở Form Đăng Ký (Bước 1) -> Tự chuyển về Bước 1 để điền thông tin đăng ký!');
                    saveState({ currentStep: 1, waitingOtp: false }, true, false);
                    await executeStep(1, isManualSingleStep, myRunId);
                    return;
                }
                markStepDone(3);
                setStatus(85, '🟡 Bước 4: Mở mục Số Điện Thoại & điền SĐT xác minh (' + site + ')...');
                addLog('4️⃣ BƯỚC 4: Điền SĐT xác minh (9 số không có số 0 đầu) & bấm Lấy mã xác minh...');
                await sleep(650);
                if (isRunCancelled(myRunId)) return;

                // Nếu chưa ở trang /home/security và cũng chưa thấy ô nhập SĐT trên CM88/SC88/C168 -> Tự chuyển sang /home/security?active=0!
                if (!queryPageInput('input[placeholder*="số di động" i], input[placeholder*="điện thoại" i], input[placeholder*="nhập mã SMS" i], input[type="tel"]')) {
                    var smsEntryCard = findByText('div, span, button, a', 'Xác minh SMS', false) ||
                                       findByText('div, span, a', 'Bảo Mật', true) ||
                                       findByText('div, span, a', 'Trung tâm bảo mật', false) ||
                                       findByText('div, span, a', 'Bảo mật tài khoản', false);
                    if (smsEntryCard && location.href.indexOf('/home/security') === -1) {
                        await humanClick(smsEntryCard);
                        await sleep(850);
                        if (isRunCancelled(myRunId)) return;
                    }
                    if (group === 'GROUP_A' && location.href.indexOf('/home/security') === -1 &&
                        !queryPageInput('input[placeholder*="số di động" i], input[placeholder*="điện thoại" i], input[placeholder*="nhập mã SMS" i], input[type="tel"]')) {
                        var secTargetPath = SITE_SECURITY_PATHS[site] || '/home/security?active=0';
                        saveState({ autoMode: true, currentStep: 4, waitingOtp: false }, true, false);
                        location.href = location.origin + secTargetPath;
                        return;
                    }
                }

                // Nếu đang ở danh sách Bảo Mật (/home/security trên CM88/SC88/C168), tự bấm mở dòng "Số Điện Thoại" / "Chưa được xác minh" vào form nhập SĐT!
                for (var tryOpenPhone = 0; tryOpenPhone < 4; tryOpenPhone++) {
                    if (queryPageInput('input[placeholder*="số di động" i], input[placeholder*="nhập mã SMS" i], input[placeholder*="điện thoại" i], input[type="tel"], input[placeholder*="99" i]')) {
                        break;
                    }
                    var phoneMenuRow = findByText('div, span, li, a', 'Chưa được xác minh', false) ||
                                       findByText('div, span, li, a', 'Chưa xác minh', false) ||
                                       findByText('div, span, li, a', 'Chưa liên kết', false) ||
                                       findByText('div, span, li, a', 'Số Điện Thoại', true) ||
                                       findByText('div, span, li, a', 'Số điện thoại', true) ||
                                       findByText('div, span, li, a', 'Số di động', false) ||
                                       findByText('div, span, li, a', 'Điện thoại di động', false);
                    if (phoneMenuRow) {
                        var rowEl = phoneMenuRow.closest('.van-cell, .security-item, .list-item, .menu-item, li, a') || phoneMenuRow;
                        if (rowEl === phoneMenuRow) {
                            while (rowEl.parentElement && rowEl.parentElement !== document.body) {
                                var pr = rowEl.parentElement.getBoundingClientRect();
                                if (pr.height > 90 || pr.width < 140) break;
                                rowEl = rowEl.parentElement;
                            }
                        }
                        await humanClick(rowEl);
                        try { phoneMenuRow.click(); } catch (e1) {}
                        var rightArrow = rowEl.querySelector ? rowEl.querySelector('.van-cell__right-icon, .van-icon-arrow, i, svg, button, span:last-child') : null;
                        if (rightArrow && rightArrow !== phoneMenuRow) {
                            try { rightArrow.click(); } catch (e2) {}
                        }
                        await sleep(850);
                        if (isRunCancelled(myRunId)) return;
                    } else {
                        await sleep(450);
                    }
                }

                var verifyPhoneInput = await waitForSelector('input[placeholder*="số di động" i], input[placeholder*="điện thoại" i], input[type="tel"], input[placeholder*="99" i]', 5500, myRunId);
                if (isRunCancelled(myRunId)) return;

                if (!verifyPhoneInput) {
                    var allStep4Inps = registerInputs();
                    verifyPhoneInput = selectFieldSmart(allStep4Inps, ['di động', 'điện thoại', 'phone', '99', 'sđt'], ['sms', 'mã xác minh', 'otp'], 0);
                }

                if (!verifyPhoneInput) {
                    restorePanel();
                    setStatus(0, '🔴 Không tìm thấy ô SĐT trên trang. Có thể đang sai trang!');
                    addLog('⚠️ Không tìm thấy ô nhập SĐT — Đã dừng Bước 4, KHÔNG lưu trạng thái giả.');
                    saveState({ currentStep: 4, waitingOtp: false, autoMode: false }, true, false);
                    return;
                }

                if (d.phone) {
                    // Luôn cắt bỏ toàn bộ số 0 ở đầu cho Bước 4 xác minh SĐT (+84) và gõ từng số như người thật
                    var clean9Digits = String(d.phone || '').replace(/\D+/g, '').replace(/^84/, '').replace(/^0+/, '');
                    await typeHumanInput(verifyPhoneInput, clean9Digits, 'SĐT xác minh (9 số)', false, myRunId, 88, 'Bước 4');
                    verifyPhoneInput.setAttribute('data-cb-phone-filled', '1');
                    await sleep(750);
                }

                // Tự động bấm nút "Lấy mã xác minh" (như ở 08:19 Video 2)
                var getSmsCodeBtn = findByText('button, .van-button, div, span', 'Lấy mã xác minh', true) ||
                                    findByText('button, .van-button, div, span', 'Lấy mã xác minh', false) ||
                                    findByText('button, .van-button, div, span', 'Gửi mã', false);
                if (getSmsCodeBtn) {
                    await humanClick(getSmsCodeBtn);
                    addLog('📩 Đã tự bấm nút "Lấy mã xác minh" SMS!');
                    showToast('📩 Đã điền 9 số SĐT & bấm Lấy mã xác minh!');
                    await sleep(900);

                    // Nếu sau khi bấm "Lấy mã xác minh" hiện ra CAPTCHA trượt thì tự giải luôn!
                    if (window.__cholibiSliderSolver && window.__cholibiSliderSolver.hasCaptcha()) {
                        addLog('🤖 Phát hiện CAPTCHA trượt khi lấy mã SMS -> Tự động giải...');
                        var smsCapRes = await window.__cholibiSliderSolver.solve(myRunId);
                        if (smsCapRes && (smsCapRes.ok || smsCapRes.success)) {
                            addLog('✅ Đã giải xong CAPTCHA trượt lấy mã SMS!');
                        }
                    }
                }

                // Tự động gắn sự kiện vào ô "Nhập mã SMS": khi người dùng gõ đủ mã SMS OTP (4-6 số), tự bấm nút Xác Nhận!
                var smsInput = queryPageInput('input[placeholder*="mã SMS" i], input[placeholder*="mã xác minh" i], input[placeholder*="OTP" i]');
                if (smsInput && !smsInput.getAttribute('data-cb-sms-bound')) {
                    smsInput.setAttribute('data-cb-sms-bound', '1');
                    smsInput.addEventListener('input', function() {
                        if (stepCancelRequested) return;
                        var v = (smsInput.value || '').trim();
                        if (smsAutoSubmitTimer) clearTimeout(smsAutoSubmitTimer);
                        if (v.length >= 4 && v.length <= 6) {
                            var boundRunId = currentRunId;
                            smsAutoSubmitTimer = setTimeout(async function() {
                                if (isRunCancelled(boundRunId)) return;
                                var confirmSmsBtn = findByText('button, .van-button, div, span', 'Xác Nhận', true) ||
                                                    findByText('button, .van-button, div, span', 'Xác nhận', true);
                                if (confirmSmsBtn && canClickSubmitNow(true)) {
                                    addLog('🚀 Đã nhận mã SMS OTP [' + v + '] -> Tự bấm Xác Nhận!');
                                    await humanClick(confirmSmsBtn);
                                    await sleep(1600);
                                    if (isRunCancelled(boundRunId)) return;
                                    var txtNow = getCleanPageText();
                                    var otpAfter = queryPageAll('input[placeholder*="mã SMS" i], input[placeholder*="OTP" i]');
                                    var confirmedSms = !detectPageAlertStatus() && (
                                        /(đã xác minh|xác minh thành công|liên kết thành công|xác thực thành công)/i.test(txtNow) ||
                                        otpAfter.length === 0
                                    );
                                    if (confirmedSms) {
                                        finishWorkflow(true);
                                    }
                                }
                            }, 450);
                        }
                    });
                }

                saveState({ currentStep: 4, waitingOtp: true, step4OtpStartUrl: location.href, otpConfirmClickedOnce: false }, true, false);
                otpWaitingUI();
                setStatus(85, '🟡 Đã điền SĐT (9 số) & bấm Lấy mã! Hãy nhập mã OTP để hoàn tất.');
                setTimeout(function() {
                    if (!isRunCancelled(myRunId)) minimizeToBubble(true);
                }, 700);
            }
        } finally {
            if (activeLockRunId === myRunId) {
                stepRunningLock = false;
                activeLockRunId = 0;
            }
        }
    }

    bindFastTap('cb-run', function() {
        var runId = startNewRunSession();
        var stageNow = detectCurrentScreenStage();
        var d = ensureProfileReadyForAction(stageNow);
        saveState({
            data: d,
            autoMode: true,
            currentStep: stageNow,
            waitingOtp: false,
            registrationSubmitted: false,
            submittedUsername: stageNow === 1 ? '' : (state.submittedUsername || d.username || ''),
            withdrawPinSetInStep1: false,
            usedBackupStk: false,
            retryUserCount: 0
        }, true, false);
        showToast('⚡ Đang chạy Auto Bước ' + stageNow + ' (' + d.username + ')!');
        addLog('🚀 BẮT ĐẦU CHẠY AUTO (' + (state.site || currentSite) + ' - Bước ' + stageNow + ')');
        executeStep(stageNow, false, runId);
    });

    bindFastTap('cb-smart-continue', async function() {
        var runId = startNewRunSession();
        var d = ensureProfileReadyForAction();
        saveState({ data: d, autoMode: true }, true, false);
        showToast('🛠️ Đang đóng popup & tự chạy tiếp...');
        await closeAllPopupsUniversal(runId);
        if (isRunCancelled(runId)) return;
        if (/\/financial/i.test(location.pathname) || queryPageInput('input[placeholder*="9704"], input[placeholder*="chọn ngân hàng" i]')) {
            addLog('🛠️ Nhận diện đang ở trang Tài vụ / Ngân hàng -> Chạy Bước 3!');
            executeStep(3, false, runId);
        } else if (registerInputs().length >= 3) {
            addLog('🛠️ Nhận diện đang ở form Đăng ký -> Điền & Chạy Bước 1!');
            saveState({ registrationSubmitted: false, currentStep: 1 }, true, false);
            executeStep(1, false, runId);
        } else {
            addLog('🛠️ Đóng popup sảnh & tìm nút Đăng ký...');
            executeStep(1, false, runId);
        }
    });

    bindFastTap('cb-stop', function() {
        cancelAllRunningTasks();
        if (window.__cholibiSliderSolver && typeof window.__cholibiSliderSolver.cancel === 'function') {
            window.__cholibiSliderSolver.cancel();
        }
        if (rateLimitCooldownTimer) {
            clearInterval(rateLimitCooldownTimer);
            rateLimitCooldownTimer = null;
        }
        saveState({ autoMode: false, currentStep: 0, waitingOtp: false, registrationSubmitted: false }, true, false);
        otpWaitingUI();
        document.getElementById('cb-banner').style.display = 'none';
        showToast('⏹ Đã dừng ngay lập tức mọi tác vụ Auto');
        setStatus(0, '🔴 Đã dừng Auto');
    });

    bindFastTap('cb-reset', function() {
        cancelAllRunningTasks();
        var currentFormData = getActiveData();
        clearSiteSessionKeepCholibi();
        saveState({
            data: currentFormData,
            autoMode: false,
            currentStep: 0,
            registrationSubmitted: false,
            submittedUsername: '',
            withdrawPinSetInStep1: false,
            waitingOtp: false,
            usedBackupStk: false,
            retryUserCount: 0,
            groupDPinSet: false,
            step4OtpStartUrl: '',
            otpConfirmClickedOnce: false
        }, true, false);
        showToast('🔄 Đang làm mới phiên trang web...');
        var cleanResetUrl = SITE_MAP[currentSite] ? SITE_MAP[currentSite].url : location.href;
        location.replace(cleanResetUrl);
    });

    var stepBtns = panel.querySelectorAll('.cb-step');
    for (var b = 0; b < stepBtns.length; b++) {
        bindFastTap(stepBtns[b], function() {
            var targetStep = Number(this.getAttribute('data-step'));
            cancelAllRunningTasks();
            var runId = startNewRunSession();
            var d = ensureProfileReadyForAction(targetStep);
            saveState({ data: d, autoMode: false, currentStep: targetStep }, true, false);
            document.getElementById('cb-banner').style.display = 'none';
            showToast('▶️ Chạy lẻ Bước ' + targetStep + '...');
            executeStep(targetStep, true, runId);
        });
    }

    // KHỞI TẠO CÁC Ô INPUT TỪ STATE.DATA (CƯỠNG BỨC GHI ĐÈ forceOverwrite=true ĐỂ GIỮ ĐÚNG NGUYEN TRUONG CA)
    if (state.data) {
        populateFieldsFromData(state.data, true);
    } else {
        fieldsHydrated = true;
    }
    if (Array.isArray(state.logEntries)) {
        renderLogEntries();
    }
    siteUi();
    renderHistoryAndCheckWarnings();

    function allowAutoResumeForStep(stepNum) {
        try {
            var now = Date.now();
            var g = JSON.parse(sessionStorage.getItem(RESUME_GUARD_KEY) || '{"step":0,"count":0,"ts":0}');
            if (g.step !== stepNum || now - g.ts > 25000) {
                g = { step: stepNum, count: 1, ts: now };
            } else {
                g.count++;
                g.ts = now;
            }
            sessionStorage.setItem(RESUME_GUARD_KEY, JSON.stringify(g));
            return g.count <= 4;
        } catch (e) {
            return true;
        }
    }

    // ========================================================================
    // BỔ SUNG ĐẦY ĐỦ 12 HÀM HELPER CHUẨN v31.1 (PART A)
    // ========================================================================
    // ========================================================================
    // ƯU TIÊN NÂNG CẤP: NHẬN DIỆN Ô MÃ XÁC MINH (4–6 KÝ TỰ CUỐI FORM) & TỰ ĐỘNG ĐĂNG KÝ
    // ========================================================================
    function findVerificationCodeInput() {
        var inputs = registerInputs();
        if (!inputs || inputs.length === 0) return null;
        var byKeyword = selectFieldSmart(inputs,
            ['mã xác minh', 'xác nhận mã', 'captcha', 'verification', 'checkcode', 'mã bảo vệ', 'mã xác nhận', 'nhập mã xác', 'verifycode', 'securitycode'],
            ['mật khẩu', 'rút tiền', 'điện thoại', 'sđt', 'di động', 'phone', 'tel', 'họ tên', 'tên thật', 'tài khoản', 'ngân hàng', 'chi nhánh', 'giới thiệu', 'mã mời', 'đại lý'], null);
        if (byKeyword) return byKeyword;

        // Các cổng GROUP_A (CM88, SC88, C168, TT88, 789P, MMOO, AD88, XX8) dùng Trò chơi giải đố (Captcha trượt) sau khi bấm Đăng ký, KHÔNG có ô gõ mã 4-6 số trên form!
        var activeSiteNow = state.site || detectedSite || currentSite;
        var activeGrpNow = (SITE_MAP[activeSiteNow] && SITE_MAP[activeSiteNow].group) ? SITE_MAP[activeSiteNow].group : 'GROUP_B';
        if (activeGrpNow === 'GROUP_A') {
            return null;
        }

        // Fallback cho các cổng có ô Captcha 4-6 ký tự đi kèm ảnh/canvas Captcha ngay trong dòng input
        if (inputs.length >= 4) {
            for (var idx = inputs.length - 1; idx >= Math.max(0, inputs.length - 2); idx--) {
                var candidate = inputs[idx];
                var t = (candidate.type || 'text').toLowerCase();
                if (t === 'password' || t === 'tel' || t === 'email') continue;
                var ctx = getInputFullContext(candidate);
                if (/tên tài khoản|tên người dùng|tên đăng nhập|username|mật khẩu|password|họ và tên|họ tên|tên thật|fullname|realname|số điện thoại|điện thoại|di động|sđt|phone|mobile|tel|\+84|email|số tài khoản|ngân hàng|chi nhánh|giới thiệu|mã mời|đại lý|affiliate|invite|ref/i.test(ctx)) {
                    continue;
                }
                var ml = Number(candidate.getAttribute('maxlength') || candidate.maxLength || 0);
                var rowEl = candidate.closest('.van-field, .van-cell, .form-group, .input-group, li') || candidate.parentElement;
                var hasCaptchaMediaNearby = Boolean(rowEl && rowEl.querySelectorAll && rowEl.querySelectorAll('input:not([type="hidden"])').length <= 1 &&
                    rowEl.querySelector('canvas, img[src*="captcha" i], img[src*="code" i], img[src^="data:image"], [class*="captcha" i], [class*="verify-code" i]'));
                if ((ml >= 4 && ml <= 6) || hasCaptchaMediaNearby) {
                    return candidate;
                }
            }
        }
        return null;
    }

    function bindVerificationCodeAutoSubmit(cap) {
        if (!cap || cap.getAttribute('data-cb-bound') === '1') return;
        cap.setAttribute('data-cb-bound', '1');

        var checkAndAutoSubmit = function(isEnterKey) {
            var val = (cap.value || '').trim();
            if (capAutoSubmitDebounceTimer) {
                clearTimeout(capAutoSubmitDebounceTimer);
                capAutoSubmitDebounceTimer = null;
            }
            if (val.length < 4 || val.length > 6) return;

            var ml = Number(cap.getAttribute('maxlength') || cap.maxLength || 0);
            var targetLen = (ml >= 4 && ml <= 6) ? ml : 6;
            // Nếu nhấn Enter hoặc đã đủ độ dài tối đa (4-6 ký tự) -> Gửi ngay sau 100ms
            // Nếu gõ 4 hoặc 5 ký tự (VD: 1232 hoặc 34525) trên ô không giới hạn maxlength=4 -> Chờ 420ms sau phím cuối để không cắt ngang khi đang gõ số thứ 5-6
            var waitMs = (isEnterKey || val.length >= targetLen) ? 100 : 420;
            var boundCapRunId = currentRunId;
            capAutoSubmitDebounceTimer = setTimeout(function() {
                if (isRunCancelled(boundCapRunId)) return;
                var finalVal = (cap.value || '').trim();
                if (finalVal.length >= 4 && finalVal.length <= 6) {
                    if (window.__cholibiTriggerSubmitNow) {
                        window.__cholibiTriggerSubmitNow(finalVal);
                    }
                }
            }, waitMs);
        };

        cap.addEventListener('input', function() { checkAndAutoSubmit(false); });
        cap.addEventListener('keyup', function(ev) {
            if (ev && (ev.key === 'Enter' || ev.keyCode === 13)) {
                checkAndAutoSubmit(true);
            }
        });
        cap.addEventListener('keydown', function(ev) {
            if (ev && (ev.key === 'Enter' || ev.keyCode === 13)) {
                ev.preventDefault();
                checkAndAutoSubmit(true);
            }
        });
    }

    function withdrawPinInputs() {
        var all = queryPageAll('input[type="password"], input[maxlength="1"], input[inputmode="numeric"]');
        var pinBoxes = all.filter(function(el) {
            var ml = el.getAttribute('maxlength');
            return ml === '1' || el.maxLength === 1;
        });
        if (pinBoxes.length >= 4) return pinBoxes;
        return all.filter(function(el) {
            var ctx = getInputFullContext(el);
            if (/tên đăng nhập|username|họ và tên|họ tên|điện thoại|số điện thoại/i.test(ctx)) return false;
            return true;
        });
    }

    function fillPinBoxes(boxes, pinStr) {
        if (!boxes || !boxes.length) return false;
        var digits = String(pinStr || '').split('');
        if (boxes.length >= digits.length) {
            for (var i = 0; i < digits.length; i++) {
                var box = boxes[i];
                if (!box) continue;
                try { box.focus(); } catch (e) {}
                setNativeValue(box, digits[i]);
                box.dispatchEvent(new Event('input', { bubbles: true }));
                box.dispatchEvent(new Event('change', { bubbles: true }));
                box.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: digits[i] }));
                try { box.blur(); } catch (e) {}
                flashInputElement(box);
            }
            return true;
        }
        if (boxes.length === 1) {
            setNativeValue(boxes[0], pinStr);
            flashInputElement(boxes[0]);
            return true;
        }
        return false;
    }

    function setNativeValue(el, val) {
        if (!el) return false;
        try { el.focus(); } catch (e) {}
        var prevVal = el.value;
        var proto = el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
        var descriptor = Object.getOwnPropertyDescriptor(proto, 'value');
        if (descriptor && descriptor.set) {
            descriptor.set.call(el, val);
        } else {
            el.value = val;
        }
        if (el._valueTracker && typeof el._valueTracker.setValue === 'function') {
            try { el._valueTracker.setValue(prevVal); } catch (eVt) {}
        }
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        try { el.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true })); } catch (e) {}
        return true;
    }

    function flashInputElement(el) {
        if (!el) return;
        try {
            var prevOutline = el.style.outline;
            var prevBoxShadow = el.style.boxShadow;
            el.style.outline = '2px solid #2ecc71';
            el.style.boxShadow = '0 0 8px rgba(46,204,113,0.75)';
            setTimeout(function() {
                try {
                    el.style.outline = prevOutline;
                    el.style.boxShadow = prevBoxShadow;
                } catch (e) {}
            }, 1400);
        } catch (e) {}
    }

    function mergeVaultObjects(v1, v2) {
        var out = {
            updatedAt: Math.max(Number((v1 && v1.updatedAt) || 0), Number((v2 && v2.updatedAt) || 0)),
            clearedFields: Object.assign({}, (v1 && v1.clearedFields) || {}, (v2 && v2.clearedFields) || {})
        };
        var keys = ['pw', 'wd', 'name', 'phone', 'bank', 'branch', 'stk', 'stkBackup', 'proxy'];
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (out.clearedFields[k]) {
                out[k] = '';
            } else if (v2 && v2[k] !== undefined && v2[k] !== null && String(v2[k]) !== '') {
                out[k] = String(v2[k]);
            } else if (v1 && v1[k] !== undefined && v1[k] !== null && String(v1[k]) !== '') {
                out[k] = String(v1[k]);
            }
        }
        return out;
    }

    function saveVault(vault) {
        try {
            localStorage.setItem('cholibi_locked_vault_v31', JSON.stringify(vault || {}));
        } catch (e) {}
        try {
            if (state && state.data) {
                window.__cholibiBridgeSend('SAVE_MASTER_STATE', {
                    data: state.data,
                    userEdited: false
                });
            }
        } catch (e) {}
    }

    function applyVaultToDataObject(dataObj, forceOverwrite) {
        var out = Object.assign({}, dataObj || {});
        if (!lockedVault) return out;
        var cMap = lockedVault.clearedFields || {};
        var keys = ['pw', 'wd', 'name', 'phone', 'bank', 'branch', 'stk', 'stkBackup', 'proxy'];
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var v = lockedVault[k];
            if (cMap[k] && forceOverwrite) {
                out[k] = '';
            } else if (v !== undefined && v !== null && String(v) !== '') {
                if (forceOverwrite || !out[k] || String(out[k]).trim() === '') {
                    out[k] = String(v);
                }
            }
        }
        return out;
    }

    function findRegisterSubmitBtn() {
        var baseBtn = findRegisterSubmit();
        if (baseBtn) return baseBtn;
        var allBtns = Array.from(document.querySelectorAll('button, input[type="submit"], [role="button"], .van-button'));
        var regBtns = allBtns.filter(function(el) {
            if (el.closest('#cb-panel') || el.closest('#cb-bubble') || el.closest('#cb-float-dock')) return false;
            var t = (el.innerText || el.value || '').replace(/\s+/g, ' ').trim().toUpperCase();
            return /ĐĂNG KÝ|ĐĂNG KÍ|REGISTER|XÁC NHẬN/.test(t);
        });
        if (regBtns.length === 0) return null;
        var best = regBtns[0];
        var bestTop = best.getBoundingClientRect().top;
        for (var i = 1; i < regBtns.length; i++) {
            var top = regBtns[i].getBoundingClientRect().top;
            if (top > bestTop) { best = regBtns[i]; bestTop = top; }
        }
        return best;
    }

    function humanClick(el) {
        return new Promise(function(resolve) {
            if (!el) { resolve(false); return; }
            try { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
            var delay = 200 + Math.random() * 280;
            setTimeout(function() {
                try {
                    var r = el.getBoundingClientRect();
                    var cx = r.left + r.width / 2;
                    var cy = r.top + r.height / 2;
                    var opts = { bubbles: true, cancelable: true, clientX: cx, clientY: cy, view: window, button: 0, buttons: 1 };
                    try { el.dispatchEvent(new PointerEvent('pointerdown', opts)); } catch (e) {}
                    try { el.dispatchEvent(new TouchEvent('touchstart', { bubbles: true, cancelable: true })); } catch (e) {}
                    try { el.dispatchEvent(new MouseEvent('mousedown', opts)); } catch (e) {}
                    var upOpts = { bubbles: true, cancelable: true, clientX: cx, clientY: cy, view: window, button: 0, buttons: 0 };
                    try { el.dispatchEvent(new PointerEvent('pointerup', upOpts)); } catch (e) {}
                    try { el.dispatchEvent(new TouchEvent('touchend', { bubbles: true, cancelable: true })); } catch (e) {}
                    try { el.dispatchEvent(new MouseEvent('mouseup', upOpts)); } catch (e) {}
                    try { el.dispatchEvent(new MouseEvent('click', upOpts)); } catch (e) { el.click(); }
                } catch (e) {
                    try { el.click(); } catch (e2) {}
                }
                resolve(true);
            }, delay);
        });
    }

    async function waitForRegistrationOutcomeAndAdvance(d, runId, nextStep) {
        if (typeof startPostRegisterWatcherLoop === 'function') {
            await startPostRegisterWatcherLoop(runId);
        }
        return true;
    }

    async function dismissPostRegisterModals() {
        var closeSelectors = '.van-popup__close-icon, .modal .close, [aria-label="Close"], .close-btn, i.van-icon-cross, i.van-icon-close';
        var icons = queryPageAll(closeSelectors);
        for (var i = 0; i < icons.length; i++) {
            try { icons[i].click(); } catch (e) {}
            await sleep(280);
        }
        return true;
    }

    function bindVerificationCodeSmartEnter() {
        var verInp = findVerificationCodeInput();
        if (!verInp) return;
        bindVerificationCodeAutoSubmit(verInp);
    }
    var lastAutoStep4TriggerTs = 0;
    var lastObservedStage = 0;
    var lastObservedPath = '';

    // Đồng bộ hiển thị của Bảng CHOLIBI theo sát màn hình trang web thực tế (Không bao giờ hiển thị Bước 4 khi đang ở Form Đăng Ký!)
    function syncPanelStatusWithActualPage() {
        if (stepRunningLock || postRegLoopRunning) return;
        var stageNow = detectCurrentScreenStage();
        var curPath = (location.pathname || '') + (location.search || '') + (location.hash || '');

        // Nếu thực tế đang ở Form Đăng Ký (Bước 1) nhưng bộ nhớ cũ còn kẹt ở Bước 2, 3, 4 hoặc waitingOtp
        if (stageNow === 1 && (state.currentStep > 1 || (state.waitingOtp && !findVerificationCodeInput()))) {
            saveState({
                currentStep: state.autoMode ? 1 : 0,
                waitingOtp: false,
                registrationSubmitted: false
            }, false, false);
            markStepDone(0);
            otpWaitingUI();
            var dCur = getActiveData();
            setStatus(0, '🟢 Đang ở Form Đăng Ký (Bước 1) — TK: ' + (dCur.username || 'Sẵn sàng'));
            updateFloatDockHeader('🟢 Bước 1 (ĐK): ' + (dCur.username || 'Sẵn sàng'));
        }

        if (stageNow !== lastObservedStage || curPath !== lastObservedPath) {
            lastObservedStage = stageNow;
            lastObservedPath = curPath;
            if (!state.autoMode && !stepRunningLock) {
                var dInfo = getActiveData();
                if (stageNow === 1) {
                    markStepDone(0);
                    if (isRegistrationFormVisibleOnPage()) {
                        setStatus(0, '🟢 Đang ở Form Đăng Ký (Bước 1) — Bấm Chạy Auto');
                    } else {
                        setStatus(0, '🟢 Đang ở Sảnh (' + (state.site || currentSite) + ') — Bấm Chạy Auto để mở ĐK');
                    }
                } else if (stageNow === 2) {
                    markStepDone(1);
                    setStatus(35, '🟢 Đang ở màn hình Đặt MK Rút Tiền (Bước 2)');
                } else if (stageNow === 3) {
                    markStepDone(2);
                    setStatus(65, '🟢 Đang ở màn hình Thêm Ngân Hàng (Bước 3 — ' + (dInfo.bank || 'BANK') + ')');
                } else if (stageNow === 4) {
                    markStepDone(3);
                    setStatus(85, '🟢 Đang ở màn hình Xác Minh SĐT (Bước 4)');
                }
            }
        }
    }

    if (window.__cholibiMainSyncInterval) {
        clearInterval(window.__cholibiMainSyncInterval);
    }
    window.__cholibiMainSyncInterval = setInterval(function() {
        try { bindVerificationCodeSmartEnter(); } catch (e) {}
        try { syncPanelStatusWithActualPage(); } catch (eSync) {}
        try {
            if (!state.autoMode || stepCancelRequested) return;
            var siteNow = state.site || currentSite;
            var grpNow = SITE_MAP[siteNow] ? SITE_MAP[siteNow].group : 'GROUP_B';
            if (grpNow !== 'GROUP_A' || stepRunningLock) return;

            // TUYỆT ĐỐI KHÔNG tự nhảy Bước 4 nếu đang ở Form Đăng Ký (Bước 1)!
            var actualStage = detectCurrentScreenStage();
            if (actualStage === 1 || isRegistrationFormVisibleOnPage()) return;

            var nowTs = Date.now();
            if (nowTs - lastAutoStep4TriggerTs < 4500) return;

            // 1. Chỉ khi đang bật Auto ở Bước 3 (Liên kết ngân hàng) và hiện thông báo nổi ".van-toast" chứa "Đã thêm thành công" -> Tự nhảy sang Bước 4!
            if (actualStage === 3 && location.href.indexOf('/home/security') === -1) {
                var toastsNow = queryPageAll('.van-toast, .toast, [role="alert"]');
                var hasBankSuccessToast = toastsNow.some(function(el) {
                    return /Đã thêm thành công|Thêm thành công|Liên kết thành công/i.test(el.innerText || el.textContent || '');
                });
                if (hasBankSuccessToast) {
                    lastAutoStep4TriggerTs = nowTs;
                    recordSuccessToMemory('BANK_ADDED', state.submittedUsername || (state.data && state.data.username) || '', true);
                    saveState({ autoMode: true, currentStep: 4, waitingOtp: false }, true, false);
                    var secPath = SITE_SECURITY_PATHS[siteNow] || '/home/security?active=0';
                    addLog('🔐 Phát hiện thông báo "Đã thêm thành công" ngân hàng -> Tự chuyển sang Xác minh SĐT!');
                    var targetRunId = currentRunId;
                    try {
                        var appEl = document.querySelector('#app');
                        if (appEl && appEl.__vue__ && appEl.__vue__.$router) {
                            appEl.__vue__.$router.push(secPath);
                            if (step4AutoExecTimer) clearTimeout(step4AutoExecTimer);
                            step4AutoExecTimer = setTimeout(function() {
                                if (!isRunCancelled(targetRunId) && state.autoMode) executeStep(4, false, targetRunId);
                            }, 850);
                            return;
                        }
                    } catch (eR) {}
                    location.href = location.origin + secPath;
                    return;
                }
            }

            // 2. Chỉ khi thực sự đang ở trang Bảo Mật (/home/security - Bước 4) VÀ state.autoMode === true mà ô SĐT còn trống -> Tự điền 9 số & bấm Lấy mã!
            if (actualStage === 4 && (location.href.indexOf('/home/security') !== -1 || queryPageInput('input[placeholder*="nhập mã SMS" i]'))) {
                var phoneInpNow = queryPageInput('input[placeholder*="số di động" i], input[placeholder*="nhập đầy đủ số di động" i]');
                if (phoneInpNow && !phoneInpNow.value && !phoneInpNow.getAttribute('data-cb-phone-filled')) {
                    lastAutoStep4TriggerTs = nowTs;
                    executeStep(4, false, currentRunId);
                    return;
                }
                var cleanTxt = getCleanPageText();
                if (location.href.indexOf('/home/security') !== -1 && !phoneInpNow && /Chưa được xác minh/i.test(cleanTxt)) {
                    lastAutoStep4TriggerTs = nowTs;
                    executeStep(4, false, currentRunId);
                }
            }
        } catch (e) {}
    }, 950);

    window.__cholibiTriggerSubmitNow = async function(codeTyped) {
        if (!canClickSubmitNow()) return;
        stepCancelRequested = false;
        var runId = startNewRunSession();
        var d = ensureProfileReadyForAction(1);
        var site = state.site || currentSite;
        var group = SITE_MAP[site] ? SITE_MAP[site].group : 'GROUP_B';
        safeCheckAgreementBox(group);
        var submitBtn = findRegisterSubmitBtn();
        if (submitBtn) {
            var nextStepAfterReg = state.withdrawPinSetInStep1 ? 3 : 2;
            saveState({
                data: d,
                autoMode: true,
                currentStep: 1,
                waitingOtp: false,
                registrationSubmitted: true,
                submittedUsername: d.username || ''
            }, true, false);
            otpWaitingUI();
            document.getElementById('cb-banner').style.display = 'block';
            var codeNote = codeTyped ? (' [Mã: ' + codeTyped + ']') : '';
            setStatus(22, '🚀 Đã nhận Mã xác minh' + codeNote + ' -> Tự bấm Đăng ký & chờ máy chủ...');
            addLog('🚀 Tự động bấm Đăng ký cho TK: ' + d.username + codeNote + ' — Đang chờ phản hồi thực từ máy chủ...');
            window.__cholibiBridgeSend('FLOATING_CMD_RESULT', {
                cmd: 'SUBMIT_NOW',
                status: 'PENDING',
                message: 'Đã bấm Đăng ký TK ' + d.username + ', đang chờ máy chủ xác nhận...'
            });
            await humanClick(submitBtn);
            setTimeout(function() {
                try { dismissPostRegisterModals(); } catch (e) {}
            }, 900);
            await waitForRegistrationOutcomeAndAdvance(d, runId, nextStepAfterReg);
        } else {
            showToast('⚠️ Không tìm thấy nút Đăng Ký trên màn hình hiện tại!');
            window.__cholibiBridgeSend('FLOATING_CMD_RESULT', {
                cmd: 'SUBMIT_NOW',
                status: 'FAILED',
                message: 'Không tìm thấy nút Đăng Ký trên trang hiện tại'
            });
        }
    };

    // ========================================================================
    // BẢNG NỔI MINI KÉO THẢ TRỰC TIẾP TRÊN WEB (#cb-float-dock) &
    // BỘ XỬ LÝ LỆNH TRỰC TIẾP TỪ BẢNG NỔI (window.__cholibiFloatingAction)
    // ========================================================================
    var floatDockStyle = document.createElement('style');
    floatDockStyle.textContent = [
        '#cb-float-dock { position: fixed; top: 56px; right: 6px; width: 254px; max-width: calc(100vw - 12px); background: rgba(14,21,26,0.97); color: #e0e0e0; font-family: sans-serif; border-radius: 9px; border: 1.5px solid #f39c12; box-shadow: 0 8px 24px rgba(0,0,0,0.92); z-index: 2147483647; display: none; overflow: hidden; font-size: 9.5px; user-select: none; -webkit-user-select: none; touch-action: manipulation; }',
        '.cbf-head { background: linear-gradient(90deg, #9c5100 0%, #d35400 100%); padding: 5px 7px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 9.5px; color: #fff; cursor: move; touch-action: none; }',
        '.cbf-title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 162px; }',
        '.cbf-hbtns button { background: rgba(0,0,0,0.42); border: 1px solid rgba(255,255,255,0.35); color: #fff; border-radius: 4px; padding: 1px 6px; margin-left: 2px; font-size: 9.5px; font-weight: bold; cursor: pointer; }',
        '.cbf-body { padding: 5px; }',
        '.cbf-row { display: flex; gap: 3px; margin-bottom: 3px; }',
        '.cbf-row:last-child { margin-bottom: 0; }',
        '.cbf-btn { flex: 1; background: #1c262b; border: 1px solid #34495e; color: #ecf0f1; padding: 5px 2px; border-radius: 4px; font-size: 8.8px; font-weight: bold; text-align: center; cursor: pointer; }',
        '.cbf-btn.green { background: #0f8a5f; border-color: #2ecc71; color: #fff; }',
        '.cbf-btn.blue { background: #1b6ca8; border-color: #3498db; color: #fff; }',
        '.cbf-btn.orange { background: #c07611; border-color: #f39c12; color: #fff; }',
        '.cbf-btn.red { background: #b03a2e; border-color: #e74c3c; color: #fff; }',
        '.cbf-btn.teal { background: #0e6251; border-color: #1abc9c; color: #a3e4d7; }',
        '.cbf-btn.purple { background: #5b2c6f; border-color: #9b59b6; color: #e8daef; }',
        '.cbf-chip { flex: 1; background: #131b1f; border: 1px solid #273746; color: #1abc9c; padding: 4px 1px; border-radius: 4px; font-size: 8.3px; font-weight: bold; text-align: center; cursor: pointer; }'
    ].join('\n');
    document.head.appendChild(floatDockStyle);

    var floatDock = document.createElement('div');
    floatDock.id = 'cb-float-dock';
    floatDock.innerHTML = [
        '<div class="cbf-head" id="cbf-drag-head">',
        '  <div class="cbf-title" id="cbf-status-txt">🪟 NỔI [' + currentSite + '] TK: ' + ((state.data && state.data.username) || 'Chưa tạo') + '</div>',
        '  <div class="cbf-hbtns">',
        '    <button id="cbf-btn-fold" title="Thu gọn / Mở rộng">➖</button>',
        '    <button id="cbf-btn-pos" title="Đổi vị trí">⇅</button>',
        '    <button id="cbf-btn-close" title="Đóng bảng nổi">✕</button>',
        '  </div>',
        '</div>',
        '<div class="cbf-body" id="cbf-body-wrap">',
        '  <div class="cbf-row">',
        '    <button class="cbf-btn green" id="cbf-act-auto">⚡Chạy Auto</button>',
        '    <button class="cbf-btn blue" id="cbf-act-fill">✍️Điền Nhanh</button>',
        '    <button class="cbf-btn orange" id="cbf-act-newu">🎲Đổi TK</button>',
        '    <button class="cbf-btn red" id="cbf-act-sub">🚀Bấm ĐK</button>',
        '  </div>',
        '  <div class="cbf-row">',
        '    <button class="cbf-btn teal" id="cbf-act-bank">🏦Vào Bank</button>',
        '    <button class="cbf-btn purple" id="cbf-act-clean">🧹Xóa Popup</button>',
        '    <button class="cbf-btn orange" id="cbf-act-link">🔄Đổi Link</button>',
        '    <button class="cbf-btn blue" id="cbf-act-menu">📋Mở Bảng</button>',
        '  </div>',
        '  <div class="cbf-row">',
        '    <button class="cbf-chip" data-f="username">👤TK</button>',
        '    <button class="cbf-chip" data-f="pw">🔑MK</button>',
        '    <button class="cbf-chip" data-f="wd" style="color:#f39c12;">🏧PIN</button>',
        '    <button class="cbf-chip" data-f="name">🧑Tên</button>',
        '    <button class="cbf-chip" data-f="phone">📱SĐT</button>',
        '    <button class="cbf-chip" data-f="stk">💳STK</button>',
        '  </div>',
        '</div>'
    ].join('\n');
    document.body.appendChild(floatDock);

    for (var fse = 0; fse < shieldEvents.length; fse++) {
        floatDock.addEventListener(shieldEvents[fse], function(ev) {
            ev.stopPropagation();
        }, false);
    }

    function updateFloatDockHeader(customMsg) {
        var el = document.getElementById('cbf-status-txt');
        if (!el) return;
        var s = state.site || currentSite;
        if (customMsg) {
            el.textContent = '🟢 [' + s + '] ' + customMsg;
        } else {
            var d = getActiveData();
            el.textContent = '🪟 NỔI [' + s + '] TK: ' + (d.username || 'Chưa tạo');
        }
    }

    // Kéo thả tự do thanh tiêu đề #cbf-drag-head
    (function() {
        var dragHead = document.getElementById('cbf-drag-head');
        if (!dragHead) return;
        var dragging = false, startX = 0, startY = 0, origLeft = 0, origTop = 0;
        dragHead.addEventListener('touchstart', function(ev) {
            if (ev.target && ev.target.closest && ev.target.closest('button')) return;
            if (!ev.touches || !ev.touches[0]) return;
            dragging = true;
            var rect = floatDock.getBoundingClientRect();
            origLeft = rect.left;
            origTop = rect.top;
            startX = ev.touches[0].clientX;
            startY = ev.touches[0].clientY;
        }, { passive: true });

        dragHead.addEventListener('touchmove', function(ev) {
            if (!dragging || !ev.touches || !ev.touches[0]) return;
            var dx = ev.touches[0].clientX - startX;
            var dy = ev.touches[0].clientY - startY;
            var nextLeft = Math.max(4, Math.min(window.innerWidth - floatDock.offsetWidth - 4, origLeft + dx));
            var nextTop = Math.max(4, Math.min(window.innerHeight - floatDock.offsetHeight - 4, origTop + dy));
            floatDock.style.right = 'auto';
            floatDock.style.bottom = 'auto';
            floatDock.style.left = nextLeft + 'px';
            floatDock.style.top = nextTop + 'px';
        }, { passive: true });

        dragHead.addEventListener('touchend', function() {
            dragging = false;
        }, { passive: true });
    })();

    var cbfFolded = false;
    bindFastTap('cbf-btn-fold', function() {
        cbfFolded = !cbfFolded;
        var bWrap = document.getElementById('cbf-body-wrap');
        if (bWrap) bWrap.style.display = cbfFolded ? 'none' : 'block';
        this.textContent = cbfFolded ? '➕' : '➖';
    });

    var cbfPosIdx = 0;
    bindFastTap('cbf-btn-pos', function() {
        cbfPosIdx = (cbfPosIdx + 1) % 3;
        floatDock.style.left = '6px';
        floatDock.style.right = 'auto';
        floatDock.style.bottom = 'auto';
        if (cbfPosIdx === 0) {
            floatDock.style.top = '52px';
            updateFloatDockHeader('Vị trí: Phía Trên');
        } else if (cbfPosIdx === 1) {
            floatDock.style.top = Math.round(window.innerHeight * 0.38) + 'px';
            updateFloatDockHeader('Vị trí: Chính Giữa');
        } else {
            floatDock.style.top = Math.round(window.innerHeight * 0.65) + 'px';
            updateFloatDockHeader('Vị trí: Phía Dưới');
        }
    });

    bindFastTap('cbf-btn-close', function() {
        floatDock.style.display = 'none';
        window.__cholibiBridgeSend('HIDE_SYS_OVERLAY_SYNC', {});
    });

    bindFastTap('cbf-act-auto', function() {
        window.__cholibiExecFloatingCmd('RUN_AUTO', {});
    });
    bindFastTap('cbf-act-fill', function() {
        window.__cholibiExecFloatingCmd('FILL_CURRENT_FORM', {});
    });
    bindFastTap('cbf-act-newu', function() {
        window.__cholibiExecFloatingCmd('NEW_USER_AND_FILL', {});
    });
    bindFastTap('cbf-act-sub', function() {
        window.__cholibiExecFloatingCmd('SUBMIT_NOW', {});
    });
    bindFastTap('cbf-act-bank', function() {
        window.__cholibiExecFloatingCmd('GO_BANK_PAGE', {});
    });
    bindFastTap('cbf-act-clean', function() {
        window.__cholibiExecFloatingCmd('CLEAN_POPUPS', {});
    });
    bindFastTap('cbf-act-link', function() {
        window.__cholibiExecFloatingCmd('ROTATE_LINK', {});
    });
    bindFastTap('cbf-act-menu', function() {
        window.__cholibiExecFloatingCmd('OPEN_MAIN_PANEL', {});
    });

    var cbfChips = floatDock.querySelectorAll('.cbf-chip');
    for (var fc = 0; fc < cbfChips.length; fc++) {
        bindFastTap(cbfChips[fc], function() {
            var fieldKey = this.getAttribute('data-f');
            var d = ensureProfileReadyForAction(fieldKey === 'stk' ? 3 : 1);
            var val = d[fieldKey] || '';
            if (fieldKey === 'stk' && !val) {
                updateFloatDockHeader('⚠️ Chưa có STK ngân hàng!');
                showToast('⚠️ Bạn chưa nhập STK ngân hàng vào bảng!');
                return;
            }
            if (val) {
                window.__cholibiBridgeSend('COPY_TEXT_CLIPBOARD', { text: val, label: 'f-' + fieldKey });
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    try { navigator.clipboard.writeText(val); } catch (e) {}
                }
            }
            window.__cholibiExecFloatingCmd('FILL_SINGLE_FIELD', { field: fieldKey, value: val });
        });
    }

    // Thực thi lệnh trực tiếp bằng đúng 100% các hàm chuẩn của CholibiInjectedPayload
    window.__cholibiExecFloatingCmd = async function(cmd, extra) {
        extra = extra || {};
        var site = state.site || currentSite;
        var group = SITE_MAP[site] ? SITE_MAP[site].group : 'GROUP_B';

        if (cmd === 'SHOW_FLOAT_DOCK') {
            floatDock.style.display = 'block';
            updateFloatDockHeader();
            minimizeToBubble(state.autoMode);
            return;
        }
        if (cmd === 'HIDE_FLOAT_DOCK') {
            floatDock.style.display = 'none';
            return;
        }
        if (cmd === 'MOVE_FLOAT_DOCK') {
            floatDock.style.display = 'block';
            var m = Number(extra.mode || 0) % 3;
            floatDock.style.left = '6px';
            floatDock.style.right = 'auto';
            floatDock.style.bottom = 'auto';
            if (m === 0) floatDock.style.top = '52px';
            else if (m === 1) floatDock.style.top = Math.round(window.innerHeight * 0.38) + 'px';
            else floatDock.style.top = Math.round(window.innerHeight * 0.65) + 'px';
            return;
        }

        if (cmd === 'RUN_AUTO') {
            var runId = startNewRunSession();
            var d = ensureProfileReadyForAction();
            saveState({
                data: d,
                autoMode: true,
                currentStep: 1,
                waitingOtp: false,
                registrationSubmitted: false,
                submittedUsername: '',
                withdrawPinSetInStep1: false,
                usedBackupStk: false,
                retryUserCount: 0
            }, true, false);
            updateFloatDockHeader('⚡ Đang chạy Auto: ' + d.username);
            showToast('⚡ [Bảng Nổi] Đang chạy Auto Toàn Bộ (' + d.username + ')!');
            addLog('⚡ [BẢNG NỔI] Kích hoạt Chạy Auto Toàn Bộ: ' + d.username);
            executeStep(1, false, runId);
        } else if (cmd === 'FILL_CURRENT_FORM') {
            var runIdF = startNewRunSession();
            var dF = ensureProfileReadyForAction();
            saveState({ data: dF, autoMode: false }, true, false);
            await closeAllPopupsUniversal(runIdF);
            if (isRunCancelled(runIdF)) return;
            var stageF = detectCurrentScreenStage();
            if (stageF === 3 || /\/financial/i.test(location.pathname) || queryPageInput('input[placeholder*="9704"], input[placeholder*="chọn ngân hàng" i]')) {
                updateFloatDockHeader('🏦 Đang điền Ngân hàng & STK...');
                showToast('🏦 [Bảng Nổi] Chỉ điền Ngân hàng & STK (Không tự gửi)...');
                await fillBankFieldsOnly(dF, runIdF);
                updateFloatDockHeader('✍️ Đã điền Bank: ' + (dF.bank || ''));
            } else if (registerInputs().length >= 3 || (/register/i.test(location.pathname) && registerInputs().length >= 2)) {
                await fillRegistrationBySite(dF, runIdF);
                updateFloatDockHeader('✍️ Đã điền: ' + dF.username);
                showToast('✍️ Đã điền xong form (' + dF.username + ') — Chưa bấm gửi!');
            } else {
                updateFloatDockHeader('✍️ Mở form ĐK & điền...');
                showToast('✍️ Đang mở form Đăng Ký & chỉ điền thông tin...');
                var regBtnF = findByText('a, button, div, span', 'ĐĂNG KÝ', true) ||
                              findByText('a, button, div, span', 'Đăng ký', true) ||
                              findByText('a, button, div, span', 'Đăng Ký', true);
                if (regBtnF) {
                    regBtnF.click();
                    await sleep(1100);
                    if (!isRunCancelled(runIdF)) {
                        await fillRegistrationBySite(dF, runIdF);
                        updateFloatDockHeader('✍️ Đã điền: ' + dF.username);
                    }
                } else {
                    showToast('⚠️ Chưa thấy biểu mẫu trên màn hình hiện tại!');
                }
            }
            window.__cholibiBridgeSend('FLOATING_CMD_RESULT', {
                cmd: 'FILL_CURRENT_FORM',
                status: 'SUCCESS',
                message: 'Đã điền biểu mẫu trên màn hình (' + dF.username + ')'
            });
        } else if (cmd === 'NEW_USER_AND_FILL') {
            stepCancelRequested = false;
            var newU = extra.username ? String(extra.username).trim() : '';
            if (newU) {
                var fUserEl = document.getElementById('f-user');
                if (fUserEl) fUserEl.value = newU;
                var curD = getActiveData();
                curD.username = newU;
                saveState({
                    data: curD,
                    registrationSubmitted: false,
                    submittedUsername: '',
                    currentStep: 1
                }, true, false);
            } else {
                newU = mutateUsernameSuffix();
            }
            var dNow = ensureProfileReadyForAction();
            updateFloatDockHeader('🎲 TK mới: ' + dNow.username);
            showToast('🎲 TK mới: ' + dNow.username + ' (Giữ phôi: ' + (dNow.name || '') + ')');
            setStatus(0, '🟢 Đã đổi TK thành: ' + dNow.username);
            if (registerInputs().length >= 2) {
                var inputsNow = registerInputs();
                var capNow = selectFieldSmart(inputsNow, ['mã xác minh', 'xác nhận mã', 'captcha', 'verification', 'checkcode'], ['mật khẩu', 'rút tiền', 'điện thoại'], null);
                if (capNow) setReactInput(capNow, '');
                fillRegistrationBySite(dNow);
            }
        } else if (cmd === 'SUBMIT_NOW') {
            if (!canClickSubmitNow(true)) return;
            var runIdS = startNewRunSession();
            var dS = ensureProfileReadyForAction();
            safeCheckAgreementBox(group);
            var submitBtn = findRegisterSubmit();
            if (submitBtn) {
                saveState({
                    data: dS,
                    autoMode: true,
                    currentStep: 1,
                    registrationSubmitted: true,
                    submittedUsername: dS.username || '',
                    waitingOtp: false
                }, true, false);
                otpWaitingUI();
                updateFloatDockHeader('🚀 Đã bấm ĐK: ' + dS.username);
                showToast('🚀 Đã bấm nút Đăng ký (' + dS.username + ')!');
                addLog('🚀 [BẢNG NỔI] Đã bấm nút Đăng ký cho TK: ' + dS.username);
                submitBtn.click();
                startPostRegisterWatcherLoop(runIdS);
            } else {
                updateFloatDockHeader('⚠️ Chưa thấy nút Đăng Ký');
                showToast('⚠️ Không tìm thấy nút Đăng Ký trên màn hình hiện tại!');
            }
        } else if (cmd === 'GO_BANK_PAGE') {
            var runIdB = startNewRunSession();
            var dB = ensureProfileReadyForAction(3);
            saveState({ data: dB, autoMode: true, currentStep: 3 }, true, false);
            updateFloatDockHeader('🏦 Đang vào trang Ngân hàng...');
            showToast('🏦 Đang chuyển sang trang Ngân hàng & điền STK...');
            if (group === 'GROUP_D' && !/\/account\/withdrawaccounts\/bankcards/i.test(location.pathname)) {
                location.href = location.origin + '/account/withdrawaccounts/bankcards';
                return;
            }
            if (group === 'GROUP_B' && !/\/financial/i.test(location.pathname)) {
                location.href = location.origin + '/Financial?tab=2';
                return;
            }
            var wdLink = findWithdrawLink();
            if (wdLink && !/\/financial/i.test(location.pathname)) {
                wdLink.click();
                await sleep(900);
            }
            executeStep(3, false, runIdB);
        } else if (cmd === 'CLEAN_POPUPS') {
            await closeAllPopupsUniversal(currentRunId);
            updateFloatDockHeader('🧹 Đã đóng sạch Popup!');
            showToast('🧹 Đã đóng toàn bộ Popup & Quảng cáo!');
            window.__cholibiBridgeSend('FLOATING_CMD_RESULT', {
                cmd: 'CLEAN_POPUPS',
                status: 'SUCCESS',
                message: 'Đã dọn sạch hộp thoại & quảng cáo trên trang'
            });
        } else if (cmd === 'ROTATE_LINK') {
            updateFloatDockHeader('🔄 Đang đổi tên miền dự phòng...');
            showToast('🔄 Đang chuyển sang tên miền dự phòng...');
            window.__cholibiBridgeSend('ROTATE_MIRROR', { site: state.site || currentSite });
        } else if (cmd === 'OPEN_MAIN_PANEL') {
            restorePanel();
            updateFloatDockHeader('📋 Đã mở Bảng chính');
            showToast('📋 Đã mở Bảng điều khiển chính CHOLIBI!');
        } else if (cmd === 'FILL_SINGLE_FIELD') {
            var fKey = extra.field || '';
            var dSingle = ensureProfileReadyForAction(fKey === 'stk' ? 3 : 1);
            var fVal = extra.value || dSingle[fKey] || '';
            if (!fVal) return;

            var activeEl = document.activeElement;
            if (activeEl && activeEl.tagName === 'INPUT' && !activeEl.closest('#cb-panel') && !activeEl.closest('#cb-float-dock')) {
                setReactInput(activeEl, fVal, fKey);
                updateFloatDockHeader('✅ Đã điền ' + fKey.toUpperCase());
                return;
            }

            var rInps = registerInputs();
            if (fKey === 'username') {
                var uInp = selectFieldSmart(rInps, ['tên tài khoản', 'từ 2-15', 'tên đăng nhập', 'username', 'account', 'tài khoản'], ['mật khẩu', 'họ và tên', 'ngân hàng', 'số tài khoản'], 0);
                if (uInp) setReactInput(uInp, fVal, 'Tài khoản');
            } else if (fKey === 'pw') {
                var pwInps = rInps.filter(function(el) { return (el.type || '').toLowerCase() === 'password'; });
                if (pwInps[0]) setReactInput(pwInps[0], fVal, 'Mật khẩu');
                if (pwInps[1]) setReactInput(pwInps[1], fVal, 'Xác nhận MK');
            } else if (fKey === 'wd') {
                var wdInp = selectFieldSmart(rInps, ['mật khẩu rút tiền', 'mk rút tiền', 'moneypassword', 'withdrawpassword', 'paypassword'], null, null);
                if (wdInp) {
                    setReactInput(wdInp, fVal, 'MK rút tiền');
                } else {
                    await typeOnVirtualKeypad(fVal, currentRunId);
                }
            } else if (fKey === 'name') {
                var nInp = selectFieldSmart(rInps, ['họ và tên', 'họ tên', 'tên thật', 'chữ in hoa', 'realname', 'fullname', 'name'], ['tài khoản', 'đăng nhập', 'mật khẩu', 'xác minh'], null);
                if (nInp) setReactInput(nInp, toUpperNoAccent(fVal), 'Họ tên');
            } else if (fKey === 'phone') {
                var tInp = selectFieldSmart(rInps, ['số điện thoại', 'điện thoại', 'số di động', 'sđt', 'phone', 'mobile', 'tel'], ['mật khẩu', 'rút tiền', 'xác minh', 'họ và tên'], null);
                if (tInp) setReactInput(tInp, formatPhoneForInput(fVal, tInp), 'SĐT');
            } else if (fKey === 'stk') {
                var sInp = queryPageInput('input[placeholder*="9704"], input[placeholder*="số tài khoản" i], input[placeholder*="tài khoản" i]') ||
                           selectFieldSmart(rInps, ['số tài khoản', '9704', 'account'], ['chi nhánh', 'ngân hàng'], null);
                if (sInp) setReactInput(sInp, fVal, 'Số tài khoản');
            }
            updateFloatDockHeader('✅ Đã điền & copy ' + fKey.toUpperCase());
        }
    };

    window.__cholibiFloatingAction = async function(b64Payload) {
        try {
            var jsonStr = decodeURIComponent(escape(window.atob(b64Payload)));
            var pkt = JSON.parse(jsonStr);
            var cmd = pkt.cmd || '';
            if (pkt.vault && typeof pkt.vault === "object") {
                lockedVault = mergeVaultObjects(lockedVault, pkt.vault);
                saveVault(lockedVault);
            }
            if (pkt.data || pkt.vault) {
                mergeNativeMasterIntoLocalState(
                    { data: pkt.data || {}, lockBankProfile: state.lockBankProfile },
                    pkt.vault || {}
                );
                if (state.data) {
                    state.data = applyVaultToDataObject(state.data, state.lockBankProfile !== false);
                    populateFieldsFromData(state.data, true);
                }
            }
            await window.__cholibiExecFloatingCmd(cmd, pkt.extra || {});
        } catch (err) {
            addLog('⚠️ Lỗi thực thi Bảng Nổi: ' + (err && err.message ? err.message : String(err)));
        }
    };

    if (window.__cholibiPendingFloatingCmd) {
        var pendingB64 = window.__cholibiPendingFloatingCmd;
        window.__cholibiPendingFloatingCmd = null;
        setTimeout(function() {
            if (window.__cholibiFloatingAction) window.__cholibiFloatingAction(pendingB64);
        }, 120);
    }

    // Khởi chạy kiểm tra DOM SPA & tự động tiếp tục sau khi toàn bộ Bảng Chính, Bảng Nổi Mini và __cholibiFloatingAction đã sẵn sàng 100%!
    (async function initAfterSpaReady() {
        var initRunId = currentRunId;
        await waitUntilPageReadyOrAutoReload(initRunId, 5500);
        if (isRunCancelled(initRunId)) return;

        if (/\/financial/i.test(location.pathname) && (state.autoMode || state.registrationSubmitted || state.currentStep >= 2)) {
            document.getElementById('cb-banner').style.display = state.autoMode ? 'block' : 'none';
            markStepDone(2);
            if (state.autoMode) {
                setStatus(65, '🟢 Đã vào Trung tâm tài vụ -> Tự động chọn Ngân hàng & điền STK...');
                if (financialAutoExecTimer) clearTimeout(financialAutoExecTimer);
                financialAutoExecTimer = setTimeout(function() {
                    if (!isRunCancelled(initRunId) && state.autoMode) executeStep(3, false, initRunId);
                }, 850);
                return;
            }
        }

        if (currentSite === 'VAN88' && state.registrationSubmitted && /\/autobank/i.test(location.pathname) && !state.autoMode) {
            recordSuccessToMemory('REGISTERED', state.submittedUsername, true);
            saveState({ currentStep: 2, registrationSubmitted: false }, true, false);
            markStepDone(1);
            setTimeout(function() {
                if (isRunCancelled(initRunId)) return;
                var wdTab = findWithdrawLink();
                if (wdTab) {
                    wdTab.click();
                    addLog('🎉 ĐK VAN88 thành công -> Tự chuyển khỏi Autobank sang Rút Tiền.');
                    setStatus(25, '🟢 Đã chuyển sang mục Rút Tiền (Cài MK rút).');
                }
            }, 500);
        }

        var initStageNow = detectCurrentScreenStage();
        if (initStageNow === 1 && state.currentStep > 1) {
            saveState({
                currentStep: state.autoMode ? 1 : 0,
                waitingOtp: false,
                registrationSubmitted: false
            }, false, false);
            markStepDone(0);
            otpWaitingUI();
        }

        if (state.autoMode && (state.currentStep === 1 || initStageNow === 1)) {
            if (allowAutoResumeForStep(1)) {
                document.getElementById('cb-banner').style.display = 'block';
                markStepDone(0);
                setStatus(10, '⚪ Đang tự động chạy Bước 1 (Đóng popup & Điền từng nhịp)...');
                if (autoResumeTimer) clearTimeout(autoResumeTimer);
                autoResumeTimer = setTimeout(function() {
                    if (!isRunCancelled(initRunId) && state.autoMode) executeStep(1, false, initRunId);
                }, 700);
            }
        } else if (state.autoMode && state.currentStep > 1) {
            var resumeStep = (initStageNow > 1) ? initStageNow : state.currentStep;
            if (allowAutoResumeForStep(resumeStep)) {
                document.getElementById('cb-banner').style.display = 'block';
                markStepDone(resumeStep - 1);
                setStatus((resumeStep - 1) * 25, '⚪ Đang tự động tiếp tục Bước ' + resumeStep + '...');
                if (autoResumeTimer) clearTimeout(autoResumeTimer);
                autoResumeTimer = setTimeout(function() {
                    if (!isRunCancelled(initRunId) && state.autoMode) executeStep(resumeStep, false, initRunId);
                }, 700);
            } else {
                saveState({ autoMode: false }, true, false);
                setStatus(0, '🟡 Đã tạm dừng Auto do trang tải lại quá nhiều lần.');
            }
        } else {
            syncPanelStatusWithActualPage();
        }
    })();

    window.addEventListener('pagehide', function() {
        try { clearPendingActionTimers(); } catch (e1) {}
        try { clearIdleMinimizeTimer(); } catch (e2) {}
        try {
            if (window.__cholibiMainSyncInterval) {
                clearInterval(window.__cholibiMainSyncInterval);
                window.__cholibiMainSyncInterval = null;
            }
            if (window.__cholibiBridgeFlushInterval) {
                clearInterval(window.__cholibiBridgeFlushInterval);
                window.__cholibiBridgeFlushInterval = null;
            }
            if (rateLimitCooldownTimer) {
                clearInterval(rateLimitCooldownTimer);
                rateLimitCooldownTimer = null;
            }
        } catch (e3) {}
    });
}

function IsAllowedCholibiTargetUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== "string") return true;
    var u = rawUrl.trim().toLowerCase();
    if (!u || /^about:blank|^chrome-error|^chromewebdata|^cholibi-bridge/i.test(u)) return false;
    if (!/^https?:\/\//i.test(u)) return false;
    return true;
}

function InjectCholibiTool() {
    if (!web) return;
    var curUrl = (urlInput && typeof urlInput.GetText === "function") ? urlInput.GetText() : "";
    if (curUrl && !IsAllowedCholibiTargetUrl(curUrl)) return;
    ApplyLockedVaultToMasterData();
    var fp = activeDeviceFingerprint || LoadOrInitDeviceFingerprint();
    var directScript = "(" + CholibiInjectedPayload.toString() + ")(" +
        JSON.stringify(SITE_CONFIGS) + "," +
        JSON.stringify(nativeMasterState) + "," +
        JSON.stringify(nativeLockedVault) + ",true," +
        JSON.stringify(BRIDGE_AUTH_TOKEN) + "," +
        JSON.stringify(fp) + ");";
    web.Execute(directScript);
}