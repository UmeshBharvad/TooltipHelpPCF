"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipHelpControl = void 0;
var TooltipHelpControl = /** @class */ (function () {
    function TooltipHelpControl() {
        this.isTooltipVisible = false;
        this.container = document.createElement("div");
        this.tooltip = document.createElement("div");
        this.helpIcon = document.createElement("span");
        this.initialize();
    }
    TooltipHelpControl.prototype.initialize = function () {
        this.setupHelpIcon();
        this.setupTooltip();
        this.container.appendChild(this.helpIcon);
        this.container.appendChild(this.tooltip);
        document.body.appendChild(this.container);
        this.addEventListeners();
    };
    TooltipHelpControl.prototype.setupHelpIcon = function () {
        this.helpIcon.innerHTML = "&#x1F6C8;"; // Help icon (info symbol)
        this.helpIcon.style.cursor = "pointer";
        this.helpIcon.style.marginLeft = "5px";
    };
    TooltipHelpControl.prototype.setupTooltip = function () {
        this.tooltip.style.position = "absolute";
        this.tooltip.style.backgroundColor = "white";
        this.tooltip.style.border = "1px solid #ccc";
        this.tooltip.style.padding = "10px";
        this.tooltip.style.display = "none"; // Initially hidden
        this.tooltip.innerHTML = this.getControlDescription();
    };
    TooltipHelpControl.prototype.getControlDescription = function () {
        // Logic to retrieve control description from environment variable or default
        return "This is a tooltip help control description.";
    };
    TooltipHelpControl.prototype.addEventListeners = function () {
        var _this = this;
        this.helpIcon.addEventListener("mouseenter", function () { return _this.showTooltip(); });
        this.helpIcon.addEventListener("mouseleave", function () { return _this.hideTooltip(); });
        this.tooltip.addEventListener("click", function (e) { return e.stopPropagation(); });
        document.addEventListener("click", function () { return _this.hideTooltip(); });
    };
    TooltipHelpControl.prototype.showTooltip = function () {
        this.isTooltipVisible = true;
        this.tooltip.style.display = "block";
        var rect = this.helpIcon.getBoundingClientRect();
        this.tooltip.style.top = "".concat(rect.bottom + window.scrollY, "px");
        this.tooltip.style.left = "".concat(rect.left + window.scrollX, "px");
    };
    TooltipHelpControl.prototype.hideTooltip = function () {
        this.isTooltipVisible = false;
        this.tooltip.style.display = "none";
    };
    TooltipHelpControl.prototype.getOutputs = function () {
        return {};
    };
    TooltipHelpControl.prototype.destroy = function () {
        // Cleanup if necessary
    };
    return TooltipHelpControl;
}());
exports.TooltipHelpControl = TooltipHelpControl;
