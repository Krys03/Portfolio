"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.generateMetadata = void 0;
var core_1 = require("@once-ui-system/core");
var resources_1 = require("@/resources");
var TableOfContents_1 = require("@/components/about/TableOfContents");
var about_module_scss_1 = require("@/components/about/about.module.scss");
var react_1 = require("react");
function generateMetadata() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, core_1.Meta.generate({
                    title: resources_1.about.title,
                    description: resources_1.about.description,
                    baseURL: resources_1.baseURL,
                    image: "/api/og/generate?title=" + encodeURIComponent(resources_1.about.title),
                    path: resources_1.about.path
                })];
        });
    });
}
exports.generateMetadata = generateMetadata;
function About() {
    var structure = [
        {
            title: resources_1.about.intro.title,
            display: resources_1.about.intro.display,
            items: []
        },
        {
            title: resources_1.about.work.title,
            display: resources_1.about.work.display,
            items: resources_1.about.work.experiences.map(function (experience) { return experience.company; })
        },
        {
            title: resources_1.about.studies.title,
            display: resources_1.about.studies.display,
            items: resources_1.about.studies.institutions.map(function (institution) { return institution.name; })
        },
        {
            title: resources_1.about.technical.title,
            display: resources_1.about.technical.display,
            items: resources_1.about.technical.skills.map(function (skill) { return skill.title; })
        },
    ];
    return (react_1["default"].createElement(core_1.Column, { maxWidth: "m" },
        react_1["default"].createElement(core_1.Schema, { as: "webPage", baseURL: resources_1.baseURL, title: resources_1.about.title, description: resources_1.about.description, path: resources_1.about.path, image: "/api/og/generate?title=" + encodeURIComponent(resources_1.about.title), author: {
                name: resources_1.person.name,
                url: "" + resources_1.baseURL + resources_1.about.path,
                image: "" + resources_1.baseURL + resources_1.person.avatar
            } }),
        react_1["default"].createElement(core_1.Row, { fillWidth: true, s: { direction: "column" }, horizontal: "center" },
            resources_1.about.avatar.display && (react_1["default"].createElement(core_1.Column, { className: about_module_scss_1["default"].avatar, top: "64", fitHeight: true, position: "sticky", s: { position: "relative", style: { top: "auto" } }, xs: { style: { top: "auto" } }, minWidth: "160", paddingX: "l", paddingBottom: "xl", gap: "m", flex: 3, horizontal: "center" },
                react_1["default"].createElement(core_1.Avatar, { src: resources_1.person.avatar, size: "xl" }),
                react_1["default"].createElement(core_1.Row, { gap: "8", vertical: "center" },
                    react_1["default"].createElement(core_1.Icon, { onBackground: "accent-weak", name: "globe" }),
                    resources_1.person.location),
                resources_1.person.languages && resources_1.person.languages.length > 0 && (react_1["default"].createElement(core_1.Row, { wrap: true, gap: "8" }, resources_1.person.languages.map(function (language, index) { return (react_1["default"].createElement(core_1.Tag, { key: index, size: "l" }, language)); }))),
                resources_1.about.tableOfContent.display && (react_1["default"].createElement(core_1.Column, { gap: "16", paddingTop: "l" },
                    react_1["default"].createElement(TableOfContents_1["default"], { structure: structure, about: resources_1.about }))))),
            react_1["default"].createElement(core_1.Column, { className: about_module_scss_1["default"].blockAlign, flex: 9, maxWidth: 40 },
                react_1["default"].createElement(core_1.Column, { id: resources_1.about.intro.title, fillWidth: true, minHeight: "160", vertical: "center", marginBottom: "32" },
                    resources_1.about.calendar.display && (react_1["default"].createElement(core_1.Row, { fitWidth: true, border: "brand-alpha-medium", background: "brand-alpha-weak", radius: "full", padding: "4", gap: "8", marginBottom: "m", vertical: "center", className: about_module_scss_1["default"].blockAlign, style: {
                            backdropFilter: "blur(var(--static-space-1))"
                        } },
                        react_1["default"].createElement(core_1.Icon, { paddingLeft: "12", name: "calendar", onBackground: "brand-weak" }),
                        react_1["default"].createElement(core_1.Row, { paddingX: "8" }, "Schedule a call"),
                        react_1["default"].createElement(core_1.IconButton, { href: resources_1.about.calendar.link, "data-border": "rounded", variant: "secondary", icon: "chevronRight" }))),
                    react_1["default"].createElement(core_1.Heading, { className: about_module_scss_1["default"].textAlign, variant: "display-strong-xl" }, resources_1.person.name),
                    react_1["default"].createElement(core_1.Text, { className: about_module_scss_1["default"].textAlign, variant: "display-default-xs", onBackground: "neutral-weak" }, resources_1.person.role),
                    resources_1.social.length > 0 && (react_1["default"].createElement(core_1.Row, { className: about_module_scss_1["default"].blockAlign, paddingTop: "20", paddingBottom: "8", gap: "8", wrap: true, horizontal: "center", fitWidth: true, "data-border": "rounded" }, resources_1.social.map(function (item) {
                        return item.link && (react_1["default"].createElement(react_1["default"].Fragment, { key: item.name },
                            react_1["default"].createElement(core_1.Row, { s: { hide: true } },
                                react_1["default"].createElement(core_1.Button, { key: item.name, href: item.link, prefixIcon: item.icon, label: item.name, size: "s", weight: "default", variant: "secondary" })),
                            react_1["default"].createElement(core_1.Row, { hide: true, s: { hide: false } },
                                react_1["default"].createElement(core_1.IconButton, { size: "l", key: item.name + "-icon", href: item.link, icon: item.icon, variant: "secondary" }))));
                    })))),
                resources_1.about.intro.display && (react_1["default"].createElement(core_1.Column, { textVariant: "body-default-l", fillWidth: true, gap: "m", marginBottom: "xl" }, resources_1.about.intro.description)),
                resources_1.about.work.display && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(core_1.Heading, { as: "h2", id: resources_1.about.work.title, variant: "display-strong-s", marginBottom: "m" }, resources_1.about.work.title),
                    react_1["default"].createElement(core_1.Column, { fillWidth: true, gap: "l", marginBottom: "40" }, resources_1.about.work.experiences.map(function (experience, index) { return (react_1["default"].createElement(core_1.Column, { key: experience.company + "-" + experience.role + "-" + index, fillWidth: true },
                        react_1["default"].createElement(core_1.Row, { fillWidth: true, horizontal: "between", vertical: "end", marginBottom: "4" },
                            react_1["default"].createElement(core_1.Text, { id: experience.company, variant: "heading-strong-l" }, experience.company),
                            react_1["default"].createElement(core_1.Text, { variant: "heading-default-xs", onBackground: "neutral-weak" }, experience.timeframe)),
                        react_1["default"].createElement(core_1.Text, { variant: "body-default-s", onBackground: "brand-weak", marginBottom: "m" }, experience.role),
                        react_1["default"].createElement(core_1.Column, { as: "ul", gap: "16" }, experience.achievements.map(function (achievement, index) { return (react_1["default"].createElement(core_1.Text, { as: "li", variant: "body-default-m", key: experience.company + "-" + index }, achievement)); })),
                        experience.images && experience.images.length > 0 && (react_1["default"].createElement(core_1.Row, { fillWidth: true, paddingTop: "m", paddingLeft: "40", gap: "12", wrap: true }, experience.images.map(function (image, index) { return (react_1["default"].createElement(core_1.Row, { key: index, border: "neutral-medium", radius: "m", minWidth: image.width, height: image.height },
                            react_1["default"].createElement(core_1.Media, { enlarge: true, radius: "m", sizes: image.width.toString(), alt: image.alt, src: image.src }))); }))))); })))),
                resources_1.about.studies.display && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(core_1.Heading, { as: "h2", id: resources_1.about.studies.title, variant: "display-strong-s", marginBottom: "m" }, resources_1.about.studies.title),
                    react_1["default"].createElement(core_1.Column, { fillWidth: true, gap: "l", marginBottom: "40" }, resources_1.about.studies.institutions.map(function (institution, index) { return (react_1["default"].createElement(core_1.Column, { key: institution.name + "-" + index, fillWidth: true, gap: "4" },
                        react_1["default"].createElement(core_1.Text, { id: institution.name, variant: "heading-strong-l" }, institution.name),
                        react_1["default"].createElement(core_1.Text, { variant: "heading-default-xs", onBackground: "neutral-weak" }, institution.description))); })))),
                resources_1.about.technical.display && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(core_1.Heading, { as: "h2", id: resources_1.about.technical.title, variant: "display-strong-s", marginBottom: "40" }, resources_1.about.technical.title),
                    react_1["default"].createElement(core_1.Column, { fillWidth: true, gap: "l" }, resources_1.about.technical.skills.map(function (skill, index) { return (react_1["default"].createElement(core_1.Column, { key: skill + "-" + index, fillWidth: true, gap: "4" },
                        react_1["default"].createElement(core_1.Text, { id: skill.title, variant: "heading-strong-l" }, skill.title),
                        react_1["default"].createElement(core_1.Text, { variant: "body-default-m", onBackground: "neutral-weak" }, skill.description),
                        skill.tags && skill.tags.length > 0 && (react_1["default"].createElement(core_1.Row, { wrap: true, gap: "8", paddingTop: "8" }, skill.tags.map(function (tag, tagIndex) { return (react_1["default"].createElement(core_1.Tag, { key: skill.title + "-" + tagIndex, size: "l", prefixIcon: tag.icon }, tag.name)); }))),
                        skill.images && skill.images.length > 0 && (react_1["default"].createElement(core_1.Row, { fillWidth: true, paddingTop: "m", gap: "12", wrap: true }, skill.images.map(function (image, index) { return (react_1["default"].createElement(core_1.Row, { key: index, border: "neutral-medium", radius: "m", minWidth: image.width, height: image.height },
                            react_1["default"].createElement(core_1.Media, { enlarge: true, radius: "m", sizes: image.width.toString(), alt: image.alt, src: image.src }))); }))))); }))))))));
}
exports["default"] = About;
