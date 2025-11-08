import { IInputs, IOutputs } from "./generated/ManifestTypes";

/**
 * TooltipHelpControl - A PowerApps Component Framework (PCF) control
 * 
 * PURPOSE:
 * Adds contextual help functionality to PowerApps forms by displaying a help icon
 * next to form controls that shows detailed help content in a tooltip when activated.
 * 
 * FEATURES:
 * - Flexible content sources (control description, environment variables, custom text)
 * - HTML and plain text rendering support
 * - Configurable icon positioning (before/after control)
 * - Multiple activation modes (hover/click)
 * - Customizable styling and appearance
 * 
 * @version 1.0.0
 * @publisher Bharvad
 * @prefix ub_
 */
export class TooltipHelpControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    // ===== PRIVATE PROPERTIES =====
    
    /**
     * Main container element that wraps the entire control
     */
    private _mainContainer: HTMLDivElement;
    
    /**
     * PowerApps context object containing all control properties and utilities
     */
    private _controlContext: ComponentFramework.Context<IInputs>;
    
    /**
     * Callback function to notify PowerApps of output changes
     */
    private _outputChangeNotifier: () => void;
    
    /**
     * The clickable help icon element
     */
    private _helpIconElement: HTMLElement;
    
    /**
     * The tooltip container that displays help content
     */
    private _tooltipContainer: HTMLDivElement;
    
    /**
     * Current visibility state of the tooltip
     */
    private _tooltipVisibilityState: boolean = false;
    
    /**
     * Stores the current help content to avoid unnecessary updates
     */
    private _cachedHelpContent: string = "";
    
    /**
     * Tracks if control has been properly initialized
     */
    private _isControlInitialized: boolean = false;
    
    // ===== EVENT HANDLER PROPERTIES =====
    // Pre-bound event handlers to maintain proper 'this' context
    
    private _boundIconClickHandler: (event: Event) => void;
    private _boundIconHoverHandler: (event: Event) => void;
    private _boundIconLeaveHandler: (event: Event) => void;
    private _boundDocumentClickHandler: (event: Event) => void;
    private _boundTooltipCloseHandler: (event: Event) => void;

    /**
     * CONSTRUCTOR
     * Initializes the control and binds event handlers to maintain proper context
     */
    constructor() {
        // Bind all event handlers to preserve 'this' context when called asynchronously
        this._boundIconClickHandler = this.handleIconClick.bind(this);
        this._boundIconHoverHandler = this.handleIconHover.bind(this);
        this._boundIconLeaveHandler = this.handleIconLeave.bind(this);
        this._boundDocumentClickHandler = this.handleDocumentClick.bind(this);
        this._boundTooltipCloseHandler = this.handleTooltipClose.bind(this);
    }

    /**
     * CONTROL INITIALIZATION
     * Called by PowerApps when the control is first loaded
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        try {
            // Store essential references for later use
            this._controlContext = context;
            this._outputChangeNotifier = notifyOutputChanged;
            this._mainContainer = container;

            // Create the control's HTML structure
            this.buildControlStructure();
            
            // Set up all event listeners
            this.attachEventListeners();
            
            // Mark as successfully initialized
            this._isControlInitialized = true;
            
            // Log successful initialization for debugging
            console.log("TooltipHelpControl: Successfully initialized");
            
        } catch (error) {
            // Handle initialization errors gracefully
            console.error("TooltipHelpControl: Initialization failed", error);
            this.displayErrorState("Failed to initialize help control");
        }
    }

    /**
     * VIEW UPDATE HANDLER
     * Called whenever PowerApps needs to update the control's display
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        try {
            // Update stored context reference
            this._controlContext = context;
            
            // Only proceed if control was properly initialized
            if (!this._isControlInitialized) {
                console.warn("TooltipHelpControl: updateView called before initialization");
                return;
            }

            // Refresh the help content if it has changed
            this.refreshHelpContent();
            
            // Update visual styling based on current properties
            this.updateControlStyling();
            
            // Reposition elements if icon placement changed
            this.updateIconPositioning();
            
        } catch (error) {
            console.error("TooltipHelpControl: Update view failed", error);
        }
    }

    /**
     * CONTROL STRUCTURE BUILDER
     * Creates the HTML elements that make up the control interface
     */
    private buildControlStructure(): void {
        // Clear any existing content
        this._mainContainer.innerHTML = "";
        
        // Apply main container CSS class
        this._mainContainer.className = "tooltip-help-control-wrapper";
        
        // Create the help icon element
        this._helpIconElement = this.createHelpIcon();
        
        // Create the tooltip container (initially hidden)
        this._tooltipContainer = this.createTooltipContainer();
        
        // Add elements to the main container in correct order
        this.arrangeControlElements();
    }

    /**
     * HELP ICON CREATOR
     * Builds the clickable/hoverable help icon element
     */
    private createHelpIcon(): HTMLElement {
        const iconElement = document.createElement("span");
        iconElement.className = "tooltip-help-icon";
        iconElement.setAttribute("role", "button");
        iconElement.setAttribute("tabindex", "0");
        iconElement.setAttribute("aria-label", "Show help information");
        iconElement.innerHTML = "&#x2753;"; // Question mark symbol
        
        return iconElement;
    }

    /**
     * TOOLTIP CONTAINER CREATOR
     * Builds the popup container that displays help content
     */
    private createTooltipContainer(): HTMLDivElement {
        const tooltipElement = document.createElement("div");
        tooltipElement.className = "tooltip-help-content";
        tooltipElement.style.display = "none"; // Start hidden
        
        // Create close button for the tooltip
        const closeButton = document.createElement("button");
        closeButton.className = "tooltip-close-button";
        closeButton.setAttribute("aria-label", "Close help tooltip");
        closeButton.innerHTML = "&#x2715;"; // X symbol
        closeButton.addEventListener("click", this._boundTooltipCloseHandler);
        
        // Create content area for help text
        const contentArea = document.createElement("div");
        contentArea.className = "tooltip-content-area";
        
        // Assemble tooltip structure
        tooltipElement.appendChild(closeButton);
        tooltipElement.appendChild(contentArea);
        
        return tooltipElement;
    }

    /**
     * ELEMENT ARRANGEMENT
     * Positions icon and tooltip based on current configuration
     */
    private arrangeControlElements(): void {
        const iconPlacement = this._controlContext.parameters.helpIconPlacement.raw || "after";
        
        // Clear container and rebuild in correct order
        this._mainContainer.innerHTML = "";
        
        if (iconPlacement === "before") {
            this._mainContainer.appendChild(this._helpIconElement);
            this._mainContainer.appendChild(this._tooltipContainer);
        } else {
            this._mainContainer.appendChild(this._helpIconElement);
            this._mainContainer.appendChild(this._tooltipContainer);
        }
    }

    /**
     * EVENT LISTENERS SETUP
     * Attaches all necessary event handlers to control elements
     */
    private attachEventListeners(): void {
        const activationMode = this._controlContext.parameters.tooltipActivation.raw || "hover";
        
        if (activationMode === "hoverMode") {
            // Set up hover-based tooltip activation
            this._helpIconElement.addEventListener("mouseenter", this._boundIconHoverHandler);
            this._helpIconElement.addEventListener("mouseleave", this._boundIconLeaveHandler);
        } else {
            // Set up click-based tooltip activation
            this._helpIconElement.addEventListener("click", this._boundIconClickHandler);
            document.addEventListener("click", this._boundDocumentClickHandler);
        }
        
        // Add keyboard accessibility
        this._helpIconElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                this.toggleTooltipVisibility();
            }
        });
    }

    /**
     * HELP CONTENT REFRESH
     * Updates tooltip content based on current configuration
     */
    private refreshHelpContent(): void {
        const newContent = this.resolveHelpContent();
        
        // Only update if content has actually changed
        if (newContent !== this._cachedHelpContent) {
            this._cachedHelpContent = newContent;
            this.updateTooltipContent(newContent);
        }
    }

    /**
     * HELP CONTENT RESOLVER
     * Determines what content to show based on configuration
     */
    private resolveHelpContent(): string {
        const contentSource = this._controlContext.parameters.helpContentSource.raw || "controlDescription";
        
        switch (contentSource) {
            case "environmentVariable":
                return this.getEnvironmentVariableContent();
            
            case "customContent":
                return this._controlContext.parameters.customHelpContent.raw || "";
            
            case "controlDescription":
            default:
                return this.getControlDescriptionContent();
        }
    }

    /**
     * ENVIRONMENT VARIABLE CONTENT RETRIEVER
     * Fetches content from specified environment variable
     */
    private getEnvironmentVariableContent(): string {
        const variableName = this._controlContext.parameters.envVariableName.raw;
        
        if (!variableName) {
            return "Environment variable name not specified";
        }

        try {
            // In a real implementation, this would fetch from environment variable
            return `Help content from environment variable: ${variableName}`;
        } catch (error) {
            console.error("Failed to retrieve environment variable:", error);
            return "Failed to load help content from environment variable";
        }
    }

    /**
     * CONTROL DESCRIPTION CONTENT RETRIEVER
     * Gets help content from the bound control's description
     */
    private getControlDescriptionContent(): string {
        // In a real implementation, this would access the form control's description
        return "Help information for this field. This is the default tooltip content provided by the Bharvad Tooltip Help Control.";
    }

    /**
     * TOOLTIP CONTENT UPDATER
     * Updates the visible content in the tooltip
     */
    private updateTooltipContent(content: string): void {
        const contentArea = this._tooltipContainer.querySelector(".tooltip-content-area");
        if (!contentArea) return;
        
        const renderMode = this._controlContext.parameters.contentRenderMode.raw || "plainText";
        
        if (renderMode === "htmlMode") {
            // Render as HTML (sanitize in production!)
            contentArea.innerHTML = content;
        } else {
            // Render as plain text
            contentArea.textContent = content;
        }
    }

    /**
     * CONTROL STYLING UPDATER
     * Applies current styling configuration to control elements
     */
    private updateControlStyling(): void {
        this.updateIconStyling();
        this.updateTooltipStyling();
    }

    /**
     * ICON STYLING UPDATER
     * Applies styling properties to the help icon
     */
    private updateIconStyling(): void {
        const iconSize = this._controlContext.parameters.helpIconSize.raw || 18;
        const iconColor = this._controlContext.parameters.helpIconColor.raw || "#106ebe";
        
        this._helpIconElement.style.fontSize = `${iconSize}px`;
        this._helpIconElement.style.color = iconColor;
        this._helpIconElement.style.cursor = "pointer";
    }

    /**
     * TOOLTIP STYLING UPDATER
     * Applies styling properties to the tooltip container
     */
    private updateTooltipStyling(): void {
        const maxWidth = this._controlContext.parameters.tooltipMaxWidth.raw || 320;
        const bgColor = this._controlContext.parameters.tooltipBgColor.raw || "#2d2d30";
        const textColor = this._controlContext.parameters.tooltipTextColor.raw || "#f1f1f1";
        
        this._tooltipContainer.style.maxWidth = `${maxWidth}px`;
        this._tooltipContainer.style.backgroundColor = bgColor;
        this._tooltipContainer.style.color = textColor;
    }

    /**
     * ICON POSITIONING UPDATER
     * Updates icon position based on configuration
     */
    private updateIconPositioning(): void {
        // Re-arrange elements if needed
        this.arrangeControlElements();
        this.attachEventListeners();
    }

    // ===== EVENT HANDLERS =====

    /**
     * ICON CLICK HANDLER
     * Handles click events on the help icon
     */
    private handleIconClick(event: Event): void {
        event.stopPropagation();
        this.toggleTooltipVisibility();
    }

    /**
     * ICON HOVER HANDLER
     * Handles mouse enter events on the help icon
     */
    private handleIconHover(event: Event): void {
        this.showTooltip();
    }

    /**
     * ICON LEAVE HANDLER
     * Handles mouse leave events on the help icon
     */
    private handleIconLeave(event: Event): void {
        // Add small delay to prevent flickering
        setTimeout(() => {
            if (!this._tooltipContainer.matches(':hover')) {
                this.hideTooltip();
            }
        }, 100);
    }

    /**
     * DOCUMENT CLICK HANDLER
     * Handles clicks outside the control to close tooltip
     */
    private handleDocumentClick(event: Event): void {
        const target = event.target as HTMLElement;
        
        // Close tooltip if click is outside the control
        if (!this._mainContainer.contains(target)) {
            this.hideTooltip();
        }
    }

    /**
     * TOOLTIP CLOSE HANDLER
     * Handles clicks on the tooltip close button
     */
    private handleTooltipClose(event: Event): void {
        event.stopPropagation();
        this.hideTooltip();
    }

    // ===== TOOLTIP VISIBILITY METHODS =====

    /**
     * TOOLTIP VISIBILITY TOGGLE
     * Toggles tooltip visibility state
     */
    private toggleTooltipVisibility(): void {
        if (this._tooltipVisibilityState) {
            this.hideTooltip();
        } else {
            this.showTooltip();
        }
    }

    /**
     * TOOLTIP SHOW METHOD
     * Makes the tooltip visible
     */
    private showTooltip(): void {
        this._tooltipContainer.style.display = "block";
        this._tooltipVisibilityState = true;
        
        // Update ARIA attributes for accessibility
        this._helpIconElement.setAttribute("aria-expanded", "true");
    }

    /**
     * TOOLTIP HIDE METHOD
     * Hides the tooltip
     */
    private hideTooltip(): void {
        this._tooltipContainer.style.display = "none";
        this._tooltipVisibilityState = false;
        
        // Update ARIA attributes for accessibility
        this._helpIconElement.setAttribute("aria-expanded", "false");
    }

    /**
     * ERROR STATE DISPLAY
     * Shows an error message when something goes wrong
     */
    private displayErrorState(message: string): void {
        this._mainContainer.innerHTML = `
            <div class="tooltip-help-error">
                <span class="error-icon">⚠️</span>
                <span class="error-message">${message}</span>
            </div>
        `;
    }

    /**
     * CONTROL OUTPUT GETTER
     * Returns the current outputs for PowerApps
     */
    public getOutputs(): IOutputs {
        return {};
    }

    /**
     * CONTROL DESTRUCTION
     * Cleanup method called when control is removed
     */
    public destroy(): void {
        // Remove event listeners to prevent memory leaks
        if (this._helpIconElement) {
            this._helpIconElement.removeEventListener("click", this._boundIconClickHandler);
            this._helpIconElement.removeEventListener("mouseenter", this._boundIconHoverHandler);
            this._helpIconElement.removeEventListener("mouseleave", this._boundIconLeaveHandler);
        }
        
        document.removeEventListener("click", this._boundDocumentClickHandler);
        
        // Clear references
        this._mainContainer = null as any;
        this._controlContext = null as any;
        this._helpIconElement = null as any;
        this._tooltipContainer = null as any;
        
        console.log("TooltipHelpControl: Successfully destroyed");
    }
}