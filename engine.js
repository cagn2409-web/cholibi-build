/**
 * ============================================================================
 * CHOLIBI v31.3 MASTER FIXED - UNIFIED SINGLE-FILE JAVASCRIPT ENGINE (FULL)
 * ============================================================================
 * Tích hợp trọn vẹn:
 * - Module 01: Site Configs & Target Registry (Phủ 23 cổng game)
 * - Module L01: Xác minh kết quả đăng ký thực tế & Khóa chuyển bước an toàn
 * - Module L03: Đồng bộ activeUsername & Bảo vệ phôi gốc Native Vault
 * - Module L04: CholibiSessionGuard (Quản lý runId, Hủy Timer, Bảo vệ Native Vault)
 * - Module 07: Proxy Bridge & WebView Core (Exponential Backoff chống 429)
 * - Module 10: Slider Captcha Solver (Đồng bộ Timer L04 & Native Gesture Bridge)
 * - Module 17: Bác sĩ CHOLIBI (Doctor Inspector - X-Ray DOM & Cứu hộ iFrame)
 * - Module 04/16: CholibiOtpManager (API Thuê Sim thật + Chống False Positive)
 * - Module 16: CholibiPhoneWorkflow (Điền SĐT / Thuê sim + Chuẩn hóa đầu số 84/0)
 * - Module 18: Floating Dock & Bootstrap Tổng (Giữ nguyên UI bảng nổi tương tác)
 * ============================================================================
 */

(function(window, document) {
    'use strict';

    if (window.__CHOLIBI_LOADED__) {
        console.warn("[CHOLIBI] Engine already loaded. Skipping re-initialization.");
        return;
    }
    window.__CHOLIBI_LOADED__ = true;

    // =========================================================================
    // MODULE 01: Site Configs & Target Registry (23 Cổng game mục tiêu)
    // =========================================================================
    const CholibiSiteConfigs = {
        targets: {
            "sc88": {
                name: "SC88 / CM88 / C168 / FLY88 Group",
                domains: ["sc88.net", "sc88.vip", "sc88.proxy.net", "sc88byy.com", "sc88vd.cc", "sc88yy.com", "sc88qa.com", "c1688.cc", "c1686.net", "c168", "fly88.com", "fly88"],
                selectors: {
                    username: "input[name='username'], #reg_user, input.username-input, input[placeholder*='tài khoản' i]",
                    password: "input[name='password'], #reg_password, input.password-input, input[type='password']",
                    phone: "input[name='phone'], #reg_phone, input.phone-input, input[placeholder*='điện thoại' i]",
                    submitBtn: ".btn-register, button[type='submit'], #submit_btn, .van-button--primary",
                    bankSelect: ".bank-dropdown-container, select[name='bank']",
                    otpInput: "input[name='otp_code'], #otp_input, input[placeholder*='SMS' i]"
                }
            },
            "cm88": {
                name: "CM88 Platform",
                domains: ["cm88.net", "cm88.io", "m88az.vip", "cm88az.vip", "acm88.xyz", "cm883.co", "cm88"],
                selectors: {
                    username: "input.cm-user, input[name='username'], #reg_user, input[placeholder*='tài khoản' i]",
                    password: "input.cm-pwd, input[name='password'], #reg_password, input[type='password']",
                    phone: "input.cm-phone, input[name='phone'], #reg_phone, input[placeholder*='điện thoại' i]",
                    submitBtn: "button.cm-submit, button[type='submit'], .btn-register",
                    bankSelect: "select.cm-bank, .bank-dropdown-container",
                    otpInput: "input.cm-otp, input[name='otp_code'], #otp_input"
                }
            },
            "ad88": {
                name: "AD88 / XX8 Group",
                domains: ["ad88vip9.com", "ad88", "xx8v22.com", "iwx822.com", "xx8"],
                selectors: {
                    username: "input[name='username'], #reg_user, input.username-input, input[placeholder*='tài khoản' i]",
                    password: "input[name='password'], #reg_password, input.password-input, input[type='password']",
                    phone: "input[name='phone'], #reg_phone, input.phone-input, input[placeholder*='điện thoại' i]",
                    submitBtn: ".btn-register, button[type='submit'], #submit_btn",
                    bankSelect: ".bank-dropdown-container, select[name='bank']",
                    otpInput: "input[name='otp_code'], #otp_input, input[placeholder*='SMS' i]"
                }
            },
            "j88": {
                name: "J88 / U88 Group",
                domains: ["j88qqgh.buzz", "j882ea.site", "j88.com", "j88", "u888288.xyz", "u88.com", "u888", "u88", "bkbet.com", "bkbet"],
                selectors: {
                    username: "input[name='username'], input[id*='user' i], input[formcontrolname*='account' i], input[ng-model*='Account' i]",
                    password: "input[name='password'], input[id*='pass' i], input[type='password']",
                    phone: "input[name='phone'], input[id*='phone' i], input[placeholder*='điện thoại' i]",
                    submitBtn: "button[type='submit'], .submit-btn, .btn-register",
                    bankSelect: "input[placeholder*='chọn ngân hàng' i], select.cm-bank",
                    otpInput: "input[name='otp_code'], input[placeholder*='xác minh' i]"
                }
            },
            "789bet": {
                name: "HI88 / F8BET / NEW88 / SHBET88 / 789BET Group",
                domains: ["789bet.com", "789bet", "new88.com", "new88", "f8bet.com", "f8bet", "hi88", "shbet88", "shbet", "iwin.com", "okvip.com", "mmlive.com"],
                selectors: {
                    username: "input[name='account'], input[id*='userName' i], .input-user, input[name='username']",
                    password: "input[name='password'], input[id*='passWord' i], .input-pwd, input[type='password']",
                    phone: "input[name='phone'], input[id*='mobile' i], .input-phone, input[placeholder*='điện thoại' i]",
                    submitBtn: "button.register-btn, .btn-submit, input[type='submit'], button[type='submit']",
                    bankSelect: ".bank-select, input[placeholder*='chọn ngân hàng' i]",
                    otpInput: "input[name='code'], input[name='otp_code']"
                }
            },
            "78win": {
                name: "78WIN / JUN88V1 / JUN88V2 Group",
                domains: ["78win060.com", "78win8.pro", "239050.com", "78win", "7bwin", "junv1.com", "junv2.com", "junv1", "junv2", "jun88", "h88.com", "sheet.cc"],
                selectors: {
                    username: "input[name='member'], input[name='username'], input[placeholder*='tên đăng nhập' i], input[placeholder*='tài khoản' i]",
                    password: "input[name='password'], input[placeholder*='mật khẩu' i], input[type='password']",
                    phone: "input[name='phone'], input[placeholder*='số điện thoại' i], input[placeholder*='điện thoại' i]",
                    submitBtn: ".register-btn, button[type='submit'], .btn-submit",
                    bankSelect: "select[name='bank'], input[placeholder*='Tên Ngân Hàng' i]",
                    otpInput: "input[name='code'], input[placeholder*='Mã xác minh SMS' i]"
                }
            },
            "go99": {
                name: "GO99 / TT88 / NOHU88 / MMOO / 789P Group",
                domains: ["1go99.vip", "go99.com", "go99", "1tt88.vip", "tt88", "nohu90.com", "8nohu.vip", "nohu88", "nohu", "mmoo.team", "mmoo", "789p1.vip", "789p"],
                selectors: {
                    username: "input[name='username'], #reg_user, input[id*='user' i], input[placeholder*='tài khoản' i]",
                    password: "input[name='password'], #reg_password, input[type='password']",
                    phone: "input[name='phone'], #reg_phone, input[placeholder*='điện thoại' i]",
                    submitBtn: ".btn-register, button[type='submit'], #submit_btn",
                    bankSelect: "input[placeholder*='chọn ngân hàng' i], .bank-dropdown-container, select[name='bank']",
                    otpInput: "input[name='otp_code'], #otp_input, input[placeholder*='SMS' i]"
                }
            },
            "van88": {
                name: "VAN88 / F168 Group",
                domains: ["van88.com", "van88.biz", "t6van88.com", "66van88.com", "van88", "f168.com", "f1688.me", "f168"],
                selectors: {
                    username: "#account_name, input[name='account'], input[name='username']",
                    password: "#account_pwd, input[name='pwd'], input[name='password']",
                    phone: "#mobile_no, input[name='mobile'], input[name='phone']",
                    submitBtn: "#submit_reg_btn, .btn-submit, button[type='submit']",
                    bankSelect: "#bank_select_box, select[name='bank']",
                    otpInput: "#sms_code, input[name='otp_code']"
                }
            }
        },
        detectCurrentSite() {
            let host = (window.location.hostname || "").toLowerCase();
            for (let key in this.targets) {
                for (let d of this.targets[key].domains) {
                    if (host.includes(d.toLowerCase())) return key;
                }
            }
            return "sc88";
        },
        getConfig(siteKey) {
            return this.targets[siteKey] || this.targets["sc88"];
        }
    };

    // =========================================================================
    // L01 CONFIG GUARD: Tìm kiếm phần tử đa tầng (Robust Selector)
    // =========================================================================
    const CholibiL01ConfigGuard = {
        isElementVisible(el) {
            if (!el || (typeof el.closest === "function" && el.closest("#cholibi-dock"))) return false;
            const style = (typeof window.getComputedStyle === "function") ? window.getComputedStyle(el) : null;
            if (style && (style.display === "none" || style.visibility === "hidden" || parseFloat(style.opacity) === 0)) {
                return false;
            }
            if (typeof el.getClientRects === "function" && el.getClientRects().length > 0) {
                const rect = el.getBoundingClientRect();
                return rect.width > 0 && rect.height > 0;
            }
            return el.offsetParent !== null;
        },

        findElement(selectorsStringOrArray) {
            if (!selectorsStringOrArray) return null;
            let selectors = Array.isArray(selectorsStringOrArray)
                ? selectorsStringOrArray
                : String(selectorsStringOrArray).split(',').map(s => s.trim()).filter(Boolean);

            for (let sel of selectors) {
                try {
                    let nodes = document.querySelectorAll(sel);
                    for (let el of nodes) {
                        if (this.isElementVisible(el)) return el;
                    }
                } catch (e) {}
            }
            return null;
        },

        detectSiteAdvanced() {
            let host = (window.location.hostname || "").toLowerCase();
            let title = (document.title || "").toLowerCase();

            for (let key in CholibiSiteConfigs.targets) {
                for (let d of CholibiSiteConfigs.targets[key].domains) {
                    if (host.includes(d.toLowerCase())) return key;
                }
            }
            if (title.includes("cm88")) return "cm88";
            if (title.includes("van88") || title.includes("f168")) return "van88";
            if (title.includes("ad88") || title.includes("xx8")) return "ad88";
            if (title.includes("j88") || title.includes("u88")) return "j88";
            if (title.includes("78win") || title.includes("jun88")) return "78win";
            if (title.includes("789bet") || title.includes("new88") || title.includes("f8bet") || title.includes("hi88") || title.includes("shbet")) return "789bet";
            if (title.includes("go99") || title.includes("nohu") || title.includes("tt88") || title.includes("mmoo") || title.includes("789p")) return "go99";
            return "sc88";
        }
    };

    // =========================================================================
    // L03 PROFILE VAULT: Quản lý phôi & Sinh username độc bản chống phình dài
    // =========================================================================
    const CholibiL03ProfileVault = {
        activeState: {
            activeUsername: "",
            retryCount: 0,
            maxRetries: 3
        },
        originalVaultProfile: null,

        initSession(vaultProfile) {
            let source = (vaultProfile && Object.keys(vaultProfile).length > 0)
                ? vaultProfile
                : (window.CholibiMasterApp && window.CholibiMasterApp.runtime && window.CholibiMasterApp.runtime.sessionProfile) || {};
            this.originalVaultProfile = Object.freeze({ ...source });
            this.activeState.activeUsername = source.username || "";
            this.activeState.retryCount = 0;
            return this.activeState.activeUsername;
        },

        generateUniqueUsername(baseName = "user") {
            let rawPrefix = (this.originalVaultProfile && this.originalVaultProfile.username)
                ? this.originalVaultProfile.username
                : String(baseName || "user");
            let cleanBase = rawPrefix.replace(/\d{1,5}$/, "").replace(/[^a-z0-9]/gi, "").toLowerCase().slice(0, 12);
            if (cleanBase.length < 4) cleanBase = "cholibi";

            let randomSuffix = Math.floor(Math.random() * 90000 + 10000);
            let generated = `${cleanBase}${randomSuffix}`;
            console.log(`[L03 Vault] Sinh username độc bản: ${generated}`);
            return generated;
        },

        isUsernameConflictModalPresent() {
            let modals = document.querySelectorAll(".el-message-box, .el-message, .van-dialog, .van-toast, .swal2-popup, .modal, .popup, [role='alert'], [role='dialog']");
            for (let m of modals) {
                if (!CholibiL01ConfigGuard.isElementVisible(m)) continue;
                let text = (m.innerText || m.textContent || "").toLowerCase();
                if (
                    text.includes("tên tài khoản đã tồn tại") ||
                    text.includes("tên tài khoản này đã tồn tại") ||
                    text.includes("tài khoản đã tồn tại") ||
                    text.includes("tên đăng nhập đã tồn tại") ||
                    text.includes("account already exists") ||
                    text.includes("id người chơi này đã có người dùng")
                ) {
                    return true;
                }
            }
            return false;
        },

        updateActiveUsername(newUsername, siteConfig) {
            if (!newUsername) return;
            this.activeState.activeUsername = String(newUsername).trim();

            if (window.CholibiMasterApp && window.CholibiMasterApp.runtime) {
                window.CholibiMasterApp.runtime.activeUsername = this.activeState.activeUsername;
                window.CholibiMasterApp.runtime.sessionProfile = {
                    ...(window.CholibiMasterApp.runtime.sessionProfile || {}),
                    username: this.activeState.activeUsername
                };
            }

            let dockTicker = document.getElementById("dock-ticker");
            if (dockTicker) {
                dockTicker.innerText = `TK mới: ${this.activeState.activeUsername}`;
            }

            if (siteConfig && siteConfig.selectors) {
                let userField = CholibiL01ConfigGuard.findElement(siteConfig.selectors.username);
                if (userField && userField.value !== this.activeState.activeUsername) {
                    userField.value = this.activeState.activeUsername;
                    userField.dispatchEvent(new Event('input', { bubbles: true }));
                    userField.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        },

        handleConflictAndRetry(siteConfig, currentProfile = {}) {
            if (!this.isUsernameConflictModalPresent()) return false;
            if (this.activeState.retryCount >= this.activeState.maxRetries) {
                console.warn(`[L03 Vault] Đã chạm giới hạn đổi tên tối đa (${this.activeState.maxRetries} lần).`);
                updateFloatingDock("PAUSED", "Trùng tên tài khoản quá số lần cho phép.");
                return false;
            }

            console.warn("[L03 Vault] Phát hiện xung đột tên tài khoản! Đang tiến hành đổi hậu tố...");
            this.activeState.retryCount += 1;

            let closeBtns = document.querySelectorAll(".el-message-box__headerbtn, .van-dialog__confirm, .van-dialog__cancel, .modal-close, .swal2-confirm, button");
            for (let btn of closeBtns) {
                if (btn.closest && btn.closest("#cholibi-dock")) continue;
                if (!CholibiL01ConfigGuard.isElementVisible(btn)) continue;
                let txt = (btn.innerText || btn.textContent || "").trim().toLowerCase();
                if (txt === "đóng" || txt === "xác nhận" || txt === "ok" || btn.className.includes("close") || btn.className.includes("headerbtn")) {
                    try { btn.click(); } catch (e) {}
                    break;
                }
            }

            let baseSeed = (this.originalVaultProfile && this.originalVaultProfile.username)
                || currentProfile.username
                || "truongly";
            let nextUsername = this.generateUniqueUsername(baseSeed);
            currentProfile.username = nextUsername;
            this.updateActiveUsername(nextUsername, siteConfig);

            let userField = CholibiL01ConfigGuard.findElement(siteConfig && siteConfig.selectors ? siteConfig.selectors.username : null);
            if (userField) {
                userField.value = nextUsername;
                userField.dispatchEvent(new Event('input', { bubbles: true }));
                userField.dispatchEvent(new Event('change', { bubbles: true }));
                console.log(`[L03 Vault] Đã cập nhật username mới vào form: ${nextUsername}`);
                return true;
            }
            return false;
        }
    };

    // =========================================================================
    // L04 SESSION GUARD: Quản lý phiên, Hủy Timer & Bảo vệ Native Vault
    // =========================================================================
    const CholibiSessionGuard = (function() {
        const PROTECTED_STORAGE_PREFIXES = [
            "CHOLIBI_", "cholibi_", "__CHOLIBI", "__cholibi",
            "VAULT_", "vault_", "PROFILE_", "SEED_", "DOCTOR_"
        ];
        const SITE_AUTH_KEY_PATTERNS = /^(?:token|access_token|auth|jwt|user_info|member|session|vuex|pinia|login_state|account_info)(?:[_:.-]|$)/i;
        const SITE_SESSION_COOKIE_PATTERNS = /^(?:PHPSESSID|JSESSIONID|ASP\.NET_SessionId|connect\.sid|sid)$/i;
        const UI_BLACKLIST_WORDS = new Set([
            "đăng nhập", "đăng ký", "tài khoản", "trang chủ", "khuyến mãi",
            "rút tiền", "nạp tiền", "cskh", "chơi thử", "login", "register", "account"
        ]);

        let _runId = 0;
        let _activeSiteKey = null;
        let _vaultSnapshot = null;

        const _resourcePool = {
            timeouts: new Set(),
            intervals: new Set(),
            observers: new Set(),
            abortControllers: new Set()
        };

        function isProtectedKey(key) {
            if (!key || typeof key !== "string") return false;
            return PROTECTED_STORAGE_PREFIXES.some(prefix => key.startsWith(prefix));
        }

        function removeAuthKeysFromStorage(store) {
            const keysToRemove = [];
            for (let i = 0; i < store.length; i++) {
                const key = store.key(i);
                if (!key || isProtectedKey(key)) continue;
                if (SITE_AUTH_KEY_PATTERNS.test(key)) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(k => store.removeItem(k));
            return keysToRemove.length;
        }

        return {
            lockVaultProfile(rawProfile) {
                if (!rawProfile || typeof rawProfile !== "object") return this.getSafeProfileCopy();
                if (Object.keys(rawProfile).length === 0 && _vaultSnapshot && Object.keys(_vaultSnapshot).length > 0) {
                    return this.getSafeProfileCopy();
                }
                _vaultSnapshot = Object.freeze({ ...rawProfile });
                return { ..._vaultSnapshot };
            },
            getSafeProfileCopy() {
                return _vaultSnapshot ? { ..._vaultSnapshot } : {};
            },
            getCurrentContext() {
                return { runId: _runId, siteKey: _activeSiteKey };
            },
            createNewRunContext(newSiteKey) {
                this.disposeAllResources();
                _runId += 1;
                _activeSiteKey = newSiteKey || CholibiSiteConfigs.detectCurrentSite();

                const context = Object.freeze({
                    runId: _runId,
                    siteKey: _activeSiteKey,
                    timestamp: Date.now()
                });

                if (window.CholibiMasterApp) {
                    const safeCopy = this.getSafeProfileCopy();
                    window.CholibiMasterApp.runtime = {
                        runId: context.runId,
                        siteKey: context.siteKey,
                        isRunning: false,
                        sessionProfile: safeCopy,
                        activeUsername: safeCopy.username || "",
                        registrationStatus: "IDLE",
                        registrationRunId: 0,
                        registrationReason: ""
                    };
                }
                console.log(`[L04 SessionGuard] Phiên mới: runId=#${_runId} | siteKey=${_activeSiteKey}`);
                return context;
            },
            disposeAllResources() {
                _resourcePool.timeouts.forEach(id => clearTimeout(id));
                _resourcePool.timeouts.clear();

                _resourcePool.intervals.forEach(id => clearInterval(id));
                _resourcePool.intervals.clear();

                _resourcePool.observers.forEach(obs => {
                    try { obs.disconnect(); } catch (_) {}
                });
                _resourcePool.observers.clear();

                _resourcePool.abortControllers.forEach(ctrl => {
                    try { ctrl.abort(); } catch (_) {}
                });
                _resourcePool.abortControllers.clear();
            },
            isRunValid(expectedRunId = _runId, expectedSiteKey = _activeSiteKey) {
                return (expectedRunId === _runId) && (expectedSiteKey === _activeSiteKey);
            },
            setTimeout(fn, delay, expectedRunId = _runId, expectedSiteKey = _activeSiteKey) {
                const id = window.setTimeout(() => {
                    _resourcePool.timeouts.delete(id);
                    if (!this.isRunValid(expectedRunId, expectedSiteKey)) return;
                    fn();
                }, delay);
                _resourcePool.timeouts.add(id);
                return id;
            },
            clearTimeout(id) {
                clearTimeout(id);
                _resourcePool.timeouts.delete(id);
            },
            setInterval(fn, intervalMs, expectedRunId = _runId, expectedSiteKey = _activeSiteKey) {
                const id = window.setInterval(() => {
                    if (!this.isRunValid(expectedRunId, expectedSiteKey)) {
                        clearInterval(id);
                        _resourcePool.intervals.delete(id);
                        return;
                    }
                    fn();
                }, intervalMs);
                _resourcePool.intervals.add(id);
                return id;
            },
            clearInterval(id) {
                clearInterval(id);
                _resourcePool.intervals.delete(id);
            },
            registerObserver(observerInstance) {
                if (observerInstance && typeof observerInstance.disconnect === "function") {
                    _resourcePool.observers.add(observerInstance);
                }
                return observerInstance;
            },
            wrapCallback(expectedRunId, expectedSiteKey, callbackFn) {
                return (...args) => {
                    if (!this.isRunValid(expectedRunId, expectedSiteKey)) return;
                    return callbackFn(...args);
                };
            },
            async guardAsync(expectedRunId, expectedSiteKey, asyncTaskFn) {
                if (!this.isRunValid(expectedRunId, expectedSiteKey)) return null;
                const result = await asyncTaskFn();
                if (!this.isRunValid(expectedRunId, expectedSiteKey)) return null;
                return result;
            },
            createAbortController() {
                const ctrl = new AbortController();
                _resourcePool.abortControllers.add(ctrl);
                return ctrl;
            },
            detectLoggedAccountConflict(expectedUsername) {
                const headerUserSelectors = [
                    "header .user-name", "header .account-name",
                    ".user-info-bar .username", ".member-info .name",
                    ".header-right .user-account", "[data-cholibi-role='logged-username']"
                ].join(", ");

                const candidates = document.querySelectorAll(headerUserSelectors);
                const targetClean = (expectedUsername || "").trim().toLowerCase();
                const validUsernameRegex = /^[a-z0-9_]{5,18}$/i;

                for (const el of candidates) {
                    if (!CholibiL01ConfigGuard.isElementVisible(el) || el.tagName === "INPUT" || el.closest("form")) continue;
                    const rawText = (el.innerText || el.textContent || "").trim();
                    const lowerText = rawText.toLowerCase();

                    if (!rawText || UI_BLACKLIST_WORDS.has(lowerText) || !validUsernameRegex.test(rawText)) {
                        continue;
                    }
                    if (targetClean && lowerText !== targetClean) {
                        return { hasConflict: true, detectedUsername: rawText };
                    }
                }
                return { hasConflict: false, detectedUsername: null };
            },
            sanitizeSiteAuthSessionOnly() {
                try {
                    removeAuthKeysFromStorage(localStorage);
                    removeAuthKeysFromStorage(sessionStorage);

                    const hostParts = (window.location.hostname || "").split(".");
                    const rootDomain = hostParts.length >= 2 ? "." + hostParts.slice(-2).join(".") : "";
                    document.cookie.split(";").forEach(cookieStr => {
                        const eqPos = cookieStr.indexOf("=");
                        const name = (eqPos > -1 ? cookieStr.substr(0, eqPos) : cookieStr).trim();
                        if (!name || isProtectedKey(name)) return;
                        if (SITE_SESSION_COOKIE_PATTERNS.test(name) || SITE_AUTH_KEY_PATTERNS.test(name)) {
                            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
                            if (rootDomain) {
                                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${rootDomain}`;
                            }
                        }
                    });
                    return true;
                } catch (err) {
                    console.error("[L04 SessionGuard] Lỗi dọn phiên:", err);
                    return false;
                }
            }
        };
    })();

    // =========================================================================
    // L15 PROXY BRIDGE: Kết nối mạng, Timeout & Exponential Backoff chống 429
    // =========================================================================
    const CholibiProxyBridge = {
        computeRateLimitWaitMs(retryAfterHeader) {
            const stamp = Date.now();
            const storageKey = "CHOLIBI_429_BACKOFF";
            let attempts = 0;
            try {
                const saved = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
                if (stamp - Number(saved.timestamp || 0) < 5 * 60 * 1000) {
                    attempts = Math.min(6, Math.max(0, Number(saved.attempts || 0)));
                }
            } catch (_) {}
            attempts += 1;
            try {
                sessionStorage.setItem(storageKey, JSON.stringify({ attempts, timestamp: stamp }));
            } catch (_) {}

            const headerSec = retryAfterHeader ? parseInt(retryAfterHeader, 10) : 0;
            const headerMs = (!isNaN(headerSec) && headerSec > 0) ? headerSec * 1000 : 0;
            const backoffMs = Math.min(60000, Math.pow(2, attempts) * 1000 + Math.floor(Math.random() * 500));
            return Math.max(headerMs, backoffMs);
        },

        async fetchWithExponentialBackoff(url, options = {}, timeoutMs = 10000, maxRetries = 3) {
            const { runId, siteKey } = CholibiSessionGuard.getCurrentContext();
            let attempt = 0;

            while (attempt <= maxRetries) {
                if (!CholibiSessionGuard.isRunValid(runId, siteKey)) {
                    throw new Error("SESSION_CANCELLED");
                }
                const ctrl = CholibiSessionGuard.createAbortController();
                const timerId = CholibiSessionGuard.setTimeout(() => ctrl.abort(), timeoutMs, runId, siteKey);

                try {
                    const response = await fetch(url, { ...options, signal: ctrl.signal });
                    CholibiSessionGuard.clearTimeout(timerId);

                    if (response.status === 429 && attempt < maxRetries) {
                        attempt += 1;
                        const waitMs = this.computeRateLimitWaitMs(response.headers.get("Retry-After"));
                        console.warn(`[L15 ProxyBridge] Gặp lỗi 429. Chờ ${waitMs}ms trước lần thử ${attempt}/${maxRetries}...`);
                        await new Promise(resolve => CholibiSessionGuard.setTimeout(resolve, waitMs, runId, siteKey));
                        continue;
                    }
                    return response;
                } catch (err) {
                    CholibiSessionGuard.clearTimeout(timerId);
                    attempt += 1;
                    if (attempt > maxRetries || !CholibiSessionGuard.isRunValid(runId, siteKey)) {
                        throw err;
                    }
                    const retryWaitMs = Math.pow(2, attempt) * 1000;
                    await new Promise(resolve => CholibiSessionGuard.setTimeout(resolve, retryWaitMs, runId, siteKey));
                }
            }
            throw new Error("EXCEEDED_MAX_RETRIES");
        },

        CheckRealIpNative(callback, timeoutMs = 10000, maxRetries = 2) {
            const { runId, siteKey } = CholibiSessionGuard.getCurrentContext();
            const safeCb = CholibiSessionGuard.wrapCallback(runId, siteKey, callback);

            this.fetchWithExponentialBackoff('https://api.ipify.org?format=json', { method: 'GET', cache: 'no-store' }, timeoutMs, maxRetries)
                .then(res => res.json())
                .then(data => safeCb(null, data.ip))
                .catch(err => safeCb(err, null));
        },

        ParseProxyString(proxyStr) {
            if (!proxyStr || typeof proxyStr !== 'string') return null;
            let parts = proxyStr.trim().split(':');
            if (parts.length >= 2) {
                return {
                    host: parts[0],
                    port: parseInt(parts[1], 10),
                    username: parts[2] || '',
                    password: parts[3] || ''
                };
            }
            return null;
        },

        FetchImageAsBase64Native(imageUrl, callback, timeoutMs = 15000) {
            const { runId, siteKey } = CholibiSessionGuard.getCurrentContext();
            let called = false;
            let imgTimeout = null;
            const safeCallback = CholibiSessionGuard.wrapCallback(runId, siteKey, (err, data) => {
                if (called) return;
                called = true;
                if (imgTimeout) CholibiSessionGuard.clearTimeout(imgTimeout);
                callback(err, data);
            });

            try {
                let img = new Image();
                img.crossOrigin = 'Anonymous';
                imgTimeout = CholibiSessionGuard.setTimeout(() => {
                    safeCallback(new Error("Image fetch timeout via proxy"), null);
                }, timeoutMs, runId, siteKey);

                img.onload = function() {
                    let canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    let ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    let dataURL = canvas.toDataURL('image/png');
                    safeCallback(null, dataURL);
                };
                img.onerror = function(e) {
                    safeCallback(e, null);
                };
                img.src = imageUrl;
            } catch (ex) {
                safeCallback(ex, null);
            }
        }
    };

    // =========================================================================
    // L10 CAPTCHA SOLVER: Giải mã thanh trượt đồng bộ Timer L04
    // =========================================================================
    const CholibiCaptchaSolver = {
        solveSlider(sliderElement, targetDistance) {
            if (!sliderElement) return Promise.resolve(false);
            const { runId, siteKey } = CholibiSessionGuard.getCurrentContext();

            return new Promise((resolve) => {
                try {
                    let box = sliderElement.getBoundingClientRect();
                    let startX = box.left + box.width / 2;
                    let startY = box.top + box.height / 2;

                    let evtStart = new MouseEvent('mousedown', { clientX: startX, clientY: startY, bubbles: true });
                    sliderElement.dispatchEvent(evtStart);

                    let currentX = startX;
                    let targetX = startX + (targetDistance || 120);
                    let step = 6;

                    let interval = CholibiSessionGuard.setInterval(() => {
                        if (!CholibiSessionGuard.isRunValid(runId, siteKey)) {
                            CholibiSessionGuard.clearInterval(interval);
                            resolve(false);
                            return;
                        }
                        currentX += step;
                        let evtMove = new MouseEvent('mousemove', { clientX: currentX, clientY: startY, bubbles: true });
                        document.dispatchEvent(evtMove);

                        if (currentX >= targetX) {
                            CholibiSessionGuard.clearInterval(interval);
                            let evtUp = new MouseEvent('mouseup', { clientX: targetX, clientY: startY, bubbles: true });
                            document.dispatchEvent(evtUp);
                            resolve(true);
                        }
                    }, 15, runId, siteKey);
                } catch (e) {
                    console.error("[Captcha] Error solving slider:", e);
                    resolve(false);
                }
            });
        }
    };

    // =========================================================================
    // MODULE 17: Bác sĩ CHOLIBI (Doctor Inspector - X-Ray DOM)
    // =========================================================================
    const CholibiDoctorInspector = {
        runXRayScan() {
            console.log("[Doctor X-Ray] Scanning DOM structure & hidden elements...");
            let hiddenInputs = Array.from(document.querySelectorAll("input[type='hidden'], input[style*='display: none']"))
                .filter(el => !(el.closest && el.closest("#cholibi-dock")));
            let iframes = Array.from(document.querySelectorAll("iframe"))
                .filter(el => !(el.closest && el.closest("#cholibi-dock")));
            let issuesFound = [];

            if (iframes.length > 0) {
                issuesFound.push(`Phát hiện ${iframes.length} iFrame bị lồng. Form có thể bị kẹt.`);
            }

            return {
                status: issuesFound.length === 0 ? "HEALTHY" : "WARNING",
                hiddenInputsCount: hiddenInputs.length,
                iframesCount: iframes.length,
                issues: issuesFound
            };
        },
        unwrapIframe() {
            let iframe = Array.from(document.querySelectorAll("iframe"))
                .find(el => !(el.closest && el.closest("#cholibi-dock")) && el.src);
            if (iframe && iframe.src) {
                console.log("[Doctor X-Ray] Unwrapping iFrame source:", iframe.src);
                window.location.href = iframe.src;
                return true;
            }
            return false;
        },
        async inspectAndExtractCaptcha(imgSelector) {
            updateFloatingDock("XRAY_SCAN", "Đang quét DOM tìm cấu trúc Captcha...");

            let imgEl = CholibiL01ConfigGuard.findElement(imgSelector) || document.querySelector(imgSelector);
            if (!imgEl) {
                updateFloatingDock("PAUSED", "Không tìm thấy phần tử Captcha trên DOM!");
                return null;
            }

            if (imgEl.tagName === "SPAN" || imgEl.tagName === "DIV") {
                let rawText = (imgEl.innerText || imgEl.textContent || "").trim();
                if (rawText.length > 0) {
                    updateFloatingDock("VERIFIED", "Phát hiện CSS Text thuần túy (Độ chính xác 100%)");
                    return rawText;
                }
            }

            let tagUpper = String(imgEl.tagName || "").toUpperCase();
            let src = imgEl.getAttribute("src") || "";
            if (src.startsWith("data:image/") || tagUpper === "SVG") {
                updateFloatingDock("CLEANING", "Đang xử lý dữ liệu ảnh gốc trong RAM...");
                return src || imgEl.outerHTML;
            }

            return new Promise((resolve) => {
                CholibiProxyBridge.FetchImageAsBase64Native(imgEl.src, (err, base64Data) => {
                    if (err || !base64Data) {
                        updateFloatingDock("AUTO_REFRESH", "Ảnh lỗi/mờ - Đang kích hoạt tự đổi mã mới...");
                        imgEl.click();
                        resolve(null);
                    } else {
                        updateFloatingDock("CLEANING", "Đã nạp ảnh vào RAM, đang tẩy nhiễu...");
                        resolve(base64Data);
                    }
                });
            });
        }
    };

    // =========================================================================
    // MODULE 04: OTP MANAGER (Thuê sim API thực tế)
    // =========================================================================
    const CholibiOtpManager = {
        apiKey: "tak_C6BWMWj07Xpq3OF3E4Ptd3l8pkRKt2JH",
        baseUrl: "http://apithue.hacksieucap.pro/api/v1",

        async checkBalance() {
            try {
                let res = await CholibiProxyBridge.fetchWithExponentialBackoff(`${this.baseUrl}/balance`, {
                    method: 'GET',
                    headers: { 'X-API-Key': this.apiKey }
                });
                let data = await res.json();
                return data.balance || 0;
            } catch (e) {
                console.error("[OTP API] Lỗi kiểm tra số dư:", e);
                return null;
            }
        },

        async rentPhoneNumber(productKey) {
            const { runId, siteKey } = CholibiSessionGuard.getCurrentContext();
            try {
                let res = await CholibiProxyBridge.fetchWithExponentialBackoff(`${this.baseUrl}/sim/rent`, {
                    method: 'POST',
                    headers: {
                        'X-API-Key': this.apiKey,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ product: productKey })
                });
                let data = await res.json();
                if (!CholibiSessionGuard.isRunValid(runId, siteKey)) return null;

                if (data && data.ok && data.phone) {
                    return {
                        orderId: data.order_id,
                        phone: data.phone,
                        charged: data.charged
                    };
                }
                return null;
            } catch (e) {
                console.error("[OTP API] Lỗi kết nối khi thuê sim:", e);
                return null;
            }
        },

        verifyOtpTriggerSuccess() {
            let countdownEl = document.querySelector(".countdown, .resend-timer, #timer, [id*='countdown']");
            let isCountdownActive = countdownEl && CholibiL01ConfigGuard.isElementVisible(countdownEl) && parseInt(countdownEl.innerText, 10) > 0;
            let otpInput = CholibiL01ConfigGuard.findElement("input[name='otp'], input[name='sms_code'], input[name='otp_code'], #otp_input");
            let isInputEnabled = otpInput && !otpInput.disabled && !otpInput.readOnly;

            return Boolean(isCountdownActive || isInputEnabled);
        },

        async pollAndFillOtp(orderId, maxTimeoutSec = 60) {
            const { runId, siteKey } = CholibiSessionGuard.getCurrentContext();
            let startTime = Date.now();
            updateFloatingDock("XRAY_SCAN", "Đang chờ tin nhắn SMS OTP (0s)...");

            return new Promise((resolve) => {
                let settled = false;
                const finishPoll = (result) => {
                    if (settled) return;
                    settled = true;
                    CholibiSessionGuard.clearInterval(pollInterval);
                    resolve(result);
                };

                let pollInterval = CholibiSessionGuard.setInterval(async () => {
                    if (!CholibiSessionGuard.isRunValid(runId, siteKey)) {
                        finishPoll(false);
                        return;
                    }

                    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                    if (elapsedTime > maxTimeoutSec) {
                        updateFloatingDock("PAUSED", "Quá thời gian chờ OTP (Timeout 60s). Đã ngắt mạch.");
                        finishPoll(false);
                        return;
                    }

                    updateFloatingDock("XRAY_SCAN", `Đang đợi SMS... (${elapsedTime}s/${maxTimeoutSec}s)`);

                    try {
                        let response = await CholibiProxyBridge.fetchWithExponentialBackoff(`${this.baseUrl}/sim/order/${orderId}`, {
                            method: 'GET',
                            headers: {
                                'X-API-Key': this.apiKey,
                                'Content-Type': 'application/json'
                            }
                        }, 8000, 1);
                        let data = await response.json();
                        if (!CholibiSessionGuard.isRunValid(runId, siteKey)) {
                            finishPoll(false);
                            return;
                        }

                        if (data && (data.code || data.otp || data.sms_content)) {
                            let otpCode = data.code || data.otp || this.extractCodeFromText(data.sms_content);
                            if (otpCode) {
                                let otpInput = CholibiL01ConfigGuard.findElement("input[name='otp'], input[name='sms_code'], input[name='otp_code'], #otp_input");
                                if (otpInput) {
                                    otpInput.value = otpCode;
                                    otpInput.dispatchEvent(new Event('input', { bubbles: true }));
                                    otpInput.dispatchEvent(new Event('change', { bubbles: true }));
                                    updateFloatingDock("VERIFIED", `Đã điền xong OTP: ${otpCode}`);
                                    finishPoll(true);
                                    return;
                                }
                            }
                        }
                    } catch (err) {
                        console.error("[OTP API] Lỗi kiểm tra mã đơn hàng:", err);
                    }
                }, 3000, runId, siteKey);
            });
        },

        extractCodeFromText(text) {
            if (!text) return null;
            let match = String(text).match(/\b\d{4,6}\b/);
            return match ? match[0] : null;
        }
    };

    // =========================================================================
    // MODULE 16: CholibiPhoneWorkflow (Điền SĐT / Thuê sim + Chuẩn hóa 84/0)
    // =========================================================================
    const CholibiPhoneWorkflow = {
        formatPhoneForSite(rawPhone, siteKey, phoneField) {
            let digits = String(rawPhone || "").replace(/\D/g, "");
            if (!digits) return "";

            if (digits.startsWith("84") && digits.length >= 11) {
                digits = "0" + digits.substring(2);
            } else if (digits.length === 9 && !digits.startsWith("0")) {
                digits = "0" + digits;
            }

            const stripLeadingZeroSites = new Set(["78win", "7bwin", "junv1", "junv2"]);
            const maxLen = phoneField ? Number(phoneField.getAttribute("maxlength") || phoneField.maxLength || 0) : 0;
            const parentText = (phoneField && phoneField.parentElement) ? (phoneField.parentElement.innerText || "") : "";
            const hasPlus84Prefix = /\+84|(\b84\s*\|)|không nhập số 0|9 chữ số/i.test(parentText);

            if ((stripLeadingZeroSites.has(siteKey) || maxLen === 9 || hasPlus84Prefix) && digits.startsWith("0")) {
                return digits.replace(/^0+/, "");
            }
            return digits;
        },

        async handlePhoneNumberWorkflow(siteKey, profileData) {
            const { runId } = CholibiSessionGuard.getCurrentContext();
            console.log(`[Phone Workflow] Kiểm tra nguồn số điện thoại cho: ${siteKey}`);

            let config = CholibiSiteConfigs.getConfig(siteKey);
            let phoneField = CholibiL01ConfigGuard.findElement(config.selectors.phone);

            if (!phoneField) {
                updateFloatingDock("PAUSED", "Không tìm thấy ô nhập số điện thoại trên DOM!");
                return null;
            }

            let phoneNumberToUse = "";
            let activeOrderId = null;

            if (profileData && profileData.phone && String(profileData.phone).trim() !== "") {
                phoneNumberToUse = String(profileData.phone).trim();
                updateFloatingDock("VERIFIED", `Dùng SĐT cá nhân có sẵn: ${phoneNumberToUse}`);
                console.log(`[Phone Workflow] Sử dụng SĐT cá nhân: ${phoneNumberToUse}`);
            } else {
                updateFloatingDock("XRAY_SCAN", `Phát hiện trống SĐT -> Đang gọi API thuê sim cho [${siteKey}]...`);

                let productMap = {
                    "sc88": "sc88",
                    "cm88": "cm88",
                    "van88": "f168"
                };
                let productKey = productMap[siteKey] || "sc88";

                let rentResult = await CholibiOtpManager.rentPhoneNumber(productKey);
                if (!CholibiSessionGuard.isRunValid(runId, siteKey)) return null;

                if (!rentResult || !rentResult.phone) {
                    updateFloatingDock("PAUSED", "API Thuê sim thất bại hoặc hết số. Dừng luồng.");
                    return null;
                }

                phoneNumberToUse = rentResult.phone;
                activeOrderId = rentResult.orderId;
            }

            let formattedPhone = this.formatPhoneForSite(phoneNumberToUse, siteKey, phoneField);
            if (!formattedPhone) {
                updateFloatingDock("PAUSED", "Số điện thoại sau chuẩn hóa không hợp lệ!");
                return null;
            }

            phoneField.value = formattedPhone;
            phoneField.dispatchEvent(new Event('input', { bubbles: true }));
            phoneField.dispatchEvent(new Event('change', { bubbles: true }));
            phoneField.blur();

            updateFloatingDock("VERIFIED", `Đã điền SĐT thành công: ${formattedPhone}`);

            return {
                phone: formattedPhone,
                orderId: activeOrderId,
                isUsingApi: activeOrderId !== null
            };
        }
    };

    // =========================================================================
    // L01 REGISTRATION VERIFIER: Xác minh đăng ký thực tế & Chặn chuyển bước
    // =========================================================================
    const CholibiL01RegistrationVerifier = {
        messageSelector: [
            "[role='alert']", "[role='status']", ".el-message", ".el-message-box",
            ".el-form-item__error", ".swal2-popup", ".swal2-html-container",
            ".ant-message-notice", ".van-toast", ".van-dialog", ".toast", ".notification",
            ".modal", ".popup", ".register-success-modal", "[class*='error-message']", "[class*='error-text']"
        ].join(", "),
        accountSelector: [
            "header .user-name", "header .account-name", ".user-info-bar .username",
            ".member-info .name", ".header-right .user-account",
            "[data-cholibi-role='logged-username']"
        ].join(", "),
        successPattern: /(?:đăng\s*ký\s*thành\s*công|chúc\s*mừng[^.!\n]{0,90}đăng\s*ký\s*thành\s*công|registration\s*(?:successful|succeeded)|account\s*(?:created|registered)\s*successfully)/i,
        failurePattern: /(?:đăng\s*ký\s*(?:thất\s*bại|không\s*thành\s*công)|tài\s*khoản\s*đã\s*tồn\s*tại|tên\s*tài\s*khoản\s*đã\s*tồn\s*tại|tên\s*đăng\s*nhập\s*đã\s*tồn\s*tại|mã\s*xác\s*(?:nhận|minh)\s*không\s*(?:đúng|chính\s*xác)|account\s*already\s*exists|registration\s*failed|\bMBR\d{5}\b)/i,

        readMessages() {
            return Array.from(document.querySelectorAll(this.messageSelector))
                .filter(el => CholibiL01ConfigGuard.isElementVisible(el))
                .map(el => (el.innerText || el.textContent || "").trim().slice(0, 600))
                .filter(Boolean);
        },

        isLoggedInAs(username) {
            const target = String(username || "").trim().toLowerCase();
            if (!target) return false;
            return Array.from(document.querySelectorAll(this.accountSelector)).some(el => {
                if (!CholibiL01ConfigGuard.isElementVisible(el) || (el.closest && el.closest("form"))) return false;
                return String(el.innerText || el.textContent || "").trim().toLowerCase() === target;
            });
        },

        waitForResult(context, username, previousMessages, loggedBefore, timeoutMs = 15000) {
            const previous = new Set(previousMessages || []);
            return new Promise((resolve) => {
                let settled = false;
                let pollId = null;
                let timeoutId = null;

                const finish = (status, reason) => {
                    if (settled) return;
                    settled = true;
                    if (pollId) CholibiSessionGuard.clearInterval(pollId);
                    if (timeoutId) CholibiSessionGuard.clearTimeout(timeoutId);
                    resolve({ status, reason });
                };

                const inspect = () => {
                    if (!CholibiSessionGuard.isRunValid(context.runId, context.siteKey)) {
                        finish("CANCELLED", "Phiên đăng ký đã thay đổi hoặc chuyển cổng.");
                        return;
                    }
                    const currentMessages = this.readMessages();
                    const newMessages = currentMessages.filter(msg => !previous.has(msg));
                    const failure = newMessages.find(msg => this.failurePattern.test(msg))
                        || currentMessages.find(msg => this.failurePattern.test(msg) && !previous.has(msg));
                    if (failure) {
                        finish("FAILED", failure.slice(0, 180));
                        return;
                    }
                    if (!loggedBefore && this.isLoggedInAs(username)) {
                        finish("SUCCESS", "Đã xác nhận đúng tài khoản đăng nhập trên sảnh.");
                        return;
                    }
                    const success = newMessages.find(msg => this.successPattern.test(msg));
                    if (success) {
                        finish("SUCCESS", "Trang xác nhận đăng ký thành công.");
                    }
                };

                pollId = CholibiSessionGuard.setInterval(inspect, 300, context.runId, context.siteKey);
                timeoutId = CholibiSessionGuard.setTimeout(() => {
                    finish("TIMEOUT", "Quá thời gian chờ mà chưa nhận được xác nhận đăng ký từ trang.");
                }, timeoutMs, context.runId, context.siteKey);
                inspect();
            });
        }
    };

    // =========================================================================
    // MODULE 16: 4-Step Automated Workflow Engine (Khóa bước PIN & Bank an toàn)
    // =========================================================================
    const CholibiWorkflowEngine = {
        async executeStep1Register(siteKey, profileData = {}) {
            const effectiveProfile = (profileData && Object.keys(profileData).length > 0)
                ? CholibiSessionGuard.lockVaultProfile(profileData)
                : CholibiSessionGuard.getSafeProfileCopy();
            const ctx = CholibiSessionGuard.createNewRunContext(siteKey);
            CholibiL03ProfileVault.initSession(effectiveProfile);

            const runtime = window.CholibiMasterApp && window.CholibiMasterApp.runtime;
            if (runtime) {
                runtime.registrationStatus = "WAITING";
                runtime.registrationRunId = ctx.runId;
            }
            const report = (status, reason) => {
                if (CholibiSessionGuard.isRunValid(ctx.runId, siteKey) && runtime) {
                    runtime.registrationStatus = status;
                    runtime.registrationReason = reason;
                }
                return { status, reason, runId: ctx.runId, siteKey };
            };

            const conflict = CholibiSessionGuard.detectLoggedAccountConflict(effectiveProfile.username);
            if (conflict.hasConflict) {
                CholibiSessionGuard.sanitizeSiteAuthSessionOnly();
            }

            let config = CholibiSiteConfigs.getConfig(siteKey);
            let userField = CholibiL01ConfigGuard.findElement(config.selectors.username);
            let passField = CholibiL01ConfigGuard.findElement(config.selectors.password);
            let submitBtn = CholibiL01ConfigGuard.findElement(config.selectors.submitBtn);

            if (!userField || !passField || !submitBtn) {
                updateFloatingDock("PAUSED", "Thiếu ô tài khoản, mật khẩu hoặc nút đăng ký.");
                return report("FAILED", "Thiếu ô tài khoản, mật khẩu hoặc nút đăng ký.");
            }

            const usernameToFill = effectiveProfile.username || CholibiL03ProfileVault.generateUniqueUsername("user");
            const passwordToFill = effectiveProfile.password || "Cholibi@2026!";

            userField.value = usernameToFill;
            passField.value = passwordToFill;
            userField.dispatchEvent(new Event('input', { bubbles: true }));
            passField.dispatchEvent(new Event('input', { bubbles: true }));
            CholibiL03ProfileVault.updateActiveUsername(usernameToFill, config);

            const phoneResult = await CholibiPhoneWorkflow.handlePhoneNumberWorkflow(siteKey, effectiveProfile);
            if (!CholibiSessionGuard.isRunValid(ctx.runId, siteKey)) {
                return report("CANCELLED", "Phiên đăng ký đã thay đổi.");
            }
            if (!phoneResult) {
                updateFloatingDock("PAUSED", "Chưa điền được số điện thoại; dừng gửi đăng ký.");
                return report("FAILED", "Chưa điền được số điện thoại; không gửi đăng ký.");
            }

            const submittedUsername = userField.value.trim();
            const previousMessages = CholibiL01RegistrationVerifier.readMessages();
            const loggedBefore = CholibiL01RegistrationVerifier.isLoggedInAs(submittedUsername);

            try {
                submitBtn.click();
            } catch (err) {
                updateFloatingDock("PAUSED", "Không thực hiện được nút đăng ký.");
                return report("FAILED", "Không thực hiện được nút đăng ký.");
            }

            updateFloatingDock("XRAY_SCAN", "Đã gửi form; đang kiểm tra kết quả đăng ký...");
            const verified = await CholibiL01RegistrationVerifier.waitForResult(
                ctx, submittedUsername, previousMessages, loggedBefore, 15000
            );

            if (
                verified.status === "FAILED" &&
                CholibiSessionGuard.isRunValid(ctx.runId, siteKey) &&
                CholibiL03ProfileVault.isUsernameConflictModalPresent() &&
                window.CholibiMasterApp &&
                window.CholibiMasterApp.handleUsernameConflict(siteKey)
            ) {
                return report("FAILED", "Tên tài khoản đã tồn tại; đã điền tên mới, chưa gửi lại đăng ký.");
            }

            return report(verified.status, verified.reason);
        },

        isRegistrationVerifiedForCurrentRun() {
            const ctx = CholibiSessionGuard.getCurrentContext();
            const runtime = window.CholibiMasterApp && window.CholibiMasterApp.runtime;
            return Boolean(
                runtime &&
                runtime.registrationStatus === "SUCCESS" &&
                runtime.registrationRunId === ctx.runId &&
                runtime.siteKey === ctx.siteKey
            );
        },

        async executeStep2WithdrawPin(pinCode) {
            if (!this.isRegistrationVerifiedForCurrentRun()) {
                updateFloatingDock("PAUSED", "L01: Chưa xác minh đăng ký; khóa bước PIN.");
                return false;
            }
            let pinInput = CholibiL01ConfigGuard.findElement("input[name='pin'], input[name='withdraw_pwd']");
            if (pinInput) {
                pinInput.value = pinCode || "888888";
                pinInput.dispatchEvent(new Event('input', { bubbles: true }));
                pinInput.dispatchEvent(new Event('change', { bubbles: true }));
                return true;
            }
            return false;
        },

        async executeStep3BankLink(bankData) {
            if (!this.isRegistrationVerifiedForCurrentRun()) {
                updateFloatingDock("PAUSED", "L01: Chưa xác minh đăng ký; khóa bước ngân hàng.");
                return false;
            }
            return true;
        },

        async executeStep4SmsOtp(otpCode, orderId = null) {
            if (orderId && !otpCode) {
                if (!CholibiOtpManager.verifyOtpTriggerSuccess()) {
                    updateFloatingDock("PAUSED", "Cảnh báo False Positive: Chưa phát hiện Countdown gửi SMS!");
                    return false;
                }
                return await CholibiOtpManager.pollAndFillOtp(orderId, 60);
            }
            let otpInput = CholibiL01ConfigGuard.findElement("input[name='otp'], input[name='sms_code'], input[name='otp_code'], #otp_input");
            if (otpInput) {
                otpInput.value = otpCode || "";
                otpInput.dispatchEvent(new Event('input', { bubbles: true }));
                otpInput.dispatchEvent(new Event('change', { bubbles: true }));
                return true;
            }
            return false;
        }
    };

    // =========================================================================
    // MODULE 18: Floating Dock & Bootstrap Tổng (Giữ nguyên UI bảng nổi)
    // =========================================================================
    function updateFloatingDock(stateCode, customMessage = "") {
        let dockBg = document.getElementById("cholibi-dock");
        let badge = document.getElementById("dock-badge");
        let ticker = document.getElementById("dock-ticker");

        if (!dockBg || !badge || !ticker) return;

        switch (stateCode) {
            case "IDLE":
                dockBg.style.borderColor = "#4CAF50";
                badge.style.backgroundColor = "#4CAF50";
                badge.innerText = "SẴN SÀNG";
                ticker.innerText = customMessage || "Đang chờ lệnh khởi chạy...";
                break;
            case "XRAY_SCAN":
                dockBg.style.borderColor = "#2196F3";
                badge.style.backgroundColor = "#2196F3";
                badge.innerText = "X-RAY";
                ticker.innerText = `🩺 ${customMessage || "Đang phân tích cấu trúc DOM..."}`;
                break;
            case "CLEANING":
                dockBg.style.borderColor = "#FFC107";
                badge.style.backgroundColor = "#FFC107";
                badge.innerText = "LỌC NHIỄU";
                ticker.innerText = `🧹 ${customMessage || "Đang tẩy nhiễu ảnh trong RAM..."}`;
                break;
            case "AUTO_REFRESH":
                dockBg.style.borderColor = "#FF9800";
                badge.style.backgroundColor = "#FF9800";
                badge.innerText = "ĐỔI MÃ";
                ticker.innerText = `🔄 ${customMessage || "Đang yêu cầu đổi mã Captcha mới..."}`;
                break;
            case "VERIFIED":
                dockBg.style.borderColor = "#00E676";
                badge.style.backgroundColor = "#00E676";
                badge.innerText = "CHUẨN XÁC";
                ticker.innerText = `✅ ${customMessage || "Xác minh thành công!"}`;
                break;
            case "PAUSED":
                dockBg.style.borderColor = "#F44336";
                badge.style.backgroundColor = "#F44336";
                badge.innerText = "TẠM DỪNG";
                ticker.innerText = `⏸️ ${customMessage || "Đã ngắt mạch an toàn."}`;
                break;
            default:
                ticker.innerText = customMessage;
                break;
        }
    }

    function injectFloatingUI() {
        if (document.getElementById('cholibi-dock')) return;

        let dock = document.createElement('div');
        dock.id = 'cholibi-dock';
        dock.style.cssText = `
            position: fixed; bottom: 20px; right: 20px; z-index: 999999;
            background: linear-gradient(135deg, #1e1e2f, #2a2a40); color: #fff;
            padding: 12px 16px; border-radius: 12px; font-family: sans-serif;
            box-shadow: 0 8px 24px rgba(0,0,0,0.4); border: 2px solid #4CAF50;
            display: flex; flex-direction: column; gap: 8px; min-width: 200px;
        `;

        dock.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
                <span style="font-weight: bold; font-size: 13px; color: #00ffcc;">CHOLIBI v31.3</span>
                <span id="dock-badge" style="font-size: 10px; background: #4CAF50; color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: bold;">SẴN SÀNG</span>
            </div>
            <div id="dock-ticker" style="font-size: 11px; color: #ddd; min-height: 16px;">Đang chờ lệnh khởi chạy...</div>
            <button id="btn-run-step1" style="background: #4f46e5; color: white; border: none; padding: 6px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: bold;">Chạy Bước 1 & SĐT Auto</button>
            <button id="btn-xray" style="background: #0284c7; color: white; border: none; padding: 6px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: bold;">Bác sĩ X-Ray Scan</button>
        `;

        document.body.appendChild(dock);

        document.getElementById('btn-run-step1').onclick = async () => {
            let activeSite = CholibiSiteConfigs.detectCurrentSite();
            let savedProfile = CholibiSessionGuard.getSafeProfileCopy();
            const result = await CholibiWorkflowEngine.executeStep1Register(activeSite, savedProfile);
            if (!result || result.status === "CANCELLED" || !CholibiSessionGuard.isRunValid(result.runId, result.siteKey)) {
                return;
            }
            if (result.status === "SUCCESS") {
                updateFloatingDock("VERIFIED", "Đăng ký tài khoản thành công!");
            } else if (result.status === "TIMEOUT") {
                updateFloatingDock("PAUSED", "Chưa xác minh được đăng ký (TIMEOUT).");
            } else {
                updateFloatingDock("PAUSED", result.reason || "Đăng ký thất bại.");
            }
        };

        document.getElementById('btn-xray').onclick = () => {
            let res = CholibiDoctorInspector.runXRayScan();
            updateFloatingDock("XRAY_SCAN", `iFrame: ${res.iframesCount} | Ẩn: ${res.hiddenInputsCount}`);
            if (res.iframesCount > 0) {
                if (confirm("Phát hiện iFrame bọc form. Bóc tách ngay lập tức?")) {
                    CholibiDoctorInspector.unwrapIframe();
                }
            } else {
                alert(`Kết quả quét X-Ray: ${res.status}\nKhông phát hiện kẹt form.`);
            }
        };
    }

    window.CholibiMasterApp = {
        version: "v31.3-MASTER-FIXED",
        configs: CholibiSiteConfigs,
        configGuardL01: CholibiL01ConfigGuard,
        verifierL01: CholibiL01RegistrationVerifier,
        profileVaultL03: CholibiL03ProfileVault,
        sessionGuard: CholibiSessionGuard,
        proxy: CholibiProxyBridge,
        captcha: CholibiCaptchaSolver,
        doctor: CholibiDoctorInspector,
        otpManager: CholibiOtpManager,
        phoneWorkflow: CholibiPhoneWorkflow,
        workflow: CholibiWorkflowEngine,
        handleUsernameConflict(siteKey) {
            const ctx = CholibiSessionGuard.getCurrentContext();
            if (!CholibiSessionGuard.isRunValid(ctx.runId, siteKey) || !this.runtime) return false;
            const workingProfile = {
                ...(this.runtime.sessionProfile || {}),
                username: this.runtime.activeUsername || (this.runtime.sessionProfile && this.runtime.sessionProfile.username) || ""
            };
            const changed = CholibiL03ProfileVault.handleConflictAndRetry(
                CholibiSiteConfigs.getConfig(siteKey),
                workingProfile
            );
            if (changed) {
                this.runtime.activeUsername = workingProfile.username;
                this.runtime.sessionProfile = {
                    ...(this.runtime.sessionProfile || {}),
                    username: workingProfile.username
                };
            }
            return changed;
        },
        switchSiteSession(newSiteKey, vaultProfile) {
            if (vaultProfile && Object.keys(vaultProfile).length > 0) {
                CholibiSessionGuard.lockVaultProfile(vaultProfile);
            }
            const ctx = CholibiSessionGuard.createNewRunContext(newSiteKey);
            const conflict = CholibiSessionGuard.detectLoggedAccountConflict(
                this.runtime && this.runtime.sessionProfile ? this.runtime.sessionProfile.username : ""
            );
            if (conflict.hasConflict) {
                CholibiSessionGuard.sanitizeSiteAuthSessionOnly();
            }
            return ctx;
        },
        init() {
            const initialSite = CholibiSiteConfigs.detectCurrentSite();
            CholibiSessionGuard.createNewRunContext(initialSite);
            console.log(`[CHOLIBI] Khởi động Master Engine [${this.version}] thành công!`);
            injectFloatingUI();
            updateFloatingDock("IDLE", "Hệ thống đã sẵn sàng vận hành.");
        }
    };

    // CẦU NỐI DÀNH CHO NATIVE DROIDSCRIPT
    window.sdt = function(siteKey, profileData) {
        let targetSite = String(siteKey || CholibiSiteConfigs.detectCurrentSite() || "sc88").toLowerCase();
        return CholibiPhoneWorkflow.handlePhoneNumberWorkflow(targetSite, profileData || {});
    };

    if (document.readyState === 'complete') {
        window.CholibiMasterApp.init();
    } else {
        window.addEventListener('load', () => window.CholibiMasterApp.init());
    }

})(window, document);