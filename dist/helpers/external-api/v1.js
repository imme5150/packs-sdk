/**
 * This file is auto-generated from OpenAPI definitions by `make build-openapi`. Do not edit manually.
 */
/* eslint-disable */
export const OpenApiSpecHash = '3cb65a92b168c432b6eb8cad28cd0cc16911c3536d86f2d256c7ddb6007de8ad';
export const OpenApiSpecVersion = '1.2.5';
/**
 * A constant identifying the type of the resource.
 */
export var PublicApiType;
(function (PublicApiType) {
    PublicApiType["AclMetadata"] = "aclMetadata";
    PublicApiType["AclPermissions"] = "aclPermissions";
    PublicApiType["ApiLink"] = "apiLink";
    PublicApiType["Automation"] = "automation";
    PublicApiType["Column"] = "column";
    PublicApiType["Control"] = "control";
    PublicApiType["Doc"] = "doc";
    PublicApiType["DocAnalytics"] = "docAnalytics";
    PublicApiType["DocAnalyticsSummary"] = "docAnalyticsSummary";
    PublicApiType["DocAnalyticsV2"] = "docAnalyticsV2";
    PublicApiType["Folder"] = "folder";
    PublicApiType["Formula"] = "formula";
    PublicApiType["MutationStatus"] = "mutationStatus";
    PublicApiType["Pack"] = "pack";
    PublicApiType["PackAclPermissions"] = "packAclPermissions";
    PublicApiType["PackAnalytics"] = "packAnalytics";
    PublicApiType["PackAnalyticsSummary"] = "packAnalyticsSummary";
    PublicApiType["PackAsset"] = "packAsset";
    PublicApiType["PackCategory"] = "packCategory";
    PublicApiType["PackFormulaAnalytics"] = "packFormulaAnalytics";
    PublicApiType["PackLog"] = "packLog";
    PublicApiType["PackMaker"] = "packMaker";
    PublicApiType["PackOauthConfig"] = "packOauthConfig";
    PublicApiType["PackRelease"] = "packRelease";
    PublicApiType["PackSourceCode"] = "packSourceCode";
    PublicApiType["PackSystemConnection"] = "packSystemConnection";
    PublicApiType["PackVersion"] = "packVersion";
    PublicApiType["Page"] = "page";
    PublicApiType["Row"] = "row";
    PublicApiType["Table"] = "table";
    PublicApiType["User"] = "user";
    PublicApiType["Workspace"] = "workspace";
})(PublicApiType || (PublicApiType = {}));
/**
 * Type of principal.
 */
export var PublicApiPrincipalType;
(function (PublicApiPrincipalType) {
    PublicApiPrincipalType["Email"] = "email";
    PublicApiPrincipalType["Domain"] = "domain";
    PublicApiPrincipalType["Anyone"] = "anyone";
})(PublicApiPrincipalType || (PublicApiPrincipalType = {}));
/**
 * Type of access.
 */
export var PublicApiAccessType;
(function (PublicApiAccessType) {
    PublicApiAccessType["ReadOnly"] = "readonly";
    PublicApiAccessType["Write"] = "write";
    PublicApiAccessType["Comment"] = "comment";
    PublicApiAccessType["None"] = "none";
})(PublicApiAccessType || (PublicApiAccessType = {}));
/**
 * A time unit used as part of a duration value.
 */
export var PublicApiDocPublishMode;
(function (PublicApiDocPublishMode) {
    PublicApiDocPublishMode["View"] = "view";
    PublicApiDocPublishMode["Play"] = "play";
    PublicApiDocPublishMode["Edit"] = "edit";
})(PublicApiDocPublishMode || (PublicApiDocPublishMode = {}));
/**
 * Layout type of the table or view.
 */
export var PublicApiLayout;
(function (PublicApiLayout) {
    PublicApiLayout["Default"] = "default";
    PublicApiLayout["AreaChart"] = "areaChart";
    PublicApiLayout["BarChart"] = "barChart";
    PublicApiLayout["BubbleChart"] = "bubbleChart";
    PublicApiLayout["Calendar"] = "calendar";
    PublicApiLayout["Card"] = "card";
    PublicApiLayout["Detail"] = "detail";
    PublicApiLayout["Form"] = "form";
    PublicApiLayout["GanttChart"] = "ganttChart";
    PublicApiLayout["LineChart"] = "lineChart";
    PublicApiLayout["MasterDetail"] = "masterDetail";
    PublicApiLayout["PieChart"] = "pieChart";
    PublicApiLayout["ScatterChart"] = "scatterChart";
    PublicApiLayout["Slide"] = "slide";
    PublicApiLayout["WordCloud"] = "wordCloud";
})(PublicApiLayout || (PublicApiLayout = {}));
/**
 * Direction of a sort for a table or view.
 */
export var PublicApiSortDirection;
(function (PublicApiSortDirection) {
    PublicApiSortDirection["Ascending"] = "ascending";
    PublicApiSortDirection["Descending"] = "descending";
})(PublicApiSortDirection || (PublicApiSortDirection = {}));
/**
 * How the numeric value should be formatted (with or without symbol, negative numbers in parens).
 */
export var PublicApiCurrencyFormatType;
(function (PublicApiCurrencyFormatType) {
    PublicApiCurrencyFormatType["Currency"] = "currency";
    PublicApiCurrencyFormatType["Accounting"] = "accounting";
    PublicApiCurrencyFormatType["Financial"] = "financial";
})(PublicApiCurrencyFormatType || (PublicApiCurrencyFormatType = {}));
/**
 * How an email address should be displayed in the user interface.
 */
export var PublicApiEmailDisplayType;
(function (PublicApiEmailDisplayType) {
    PublicApiEmailDisplayType["IconAndEmail"] = "iconAndEmail";
    PublicApiEmailDisplayType["IconOnly"] = "iconOnly";
    PublicApiEmailDisplayType["EmailOnly"] = "emailOnly";
})(PublicApiEmailDisplayType || (PublicApiEmailDisplayType = {}));
/**
 * How a link should be displayed in the user interface.
 */
export var PublicApiLinkDisplayType;
(function (PublicApiLinkDisplayType) {
    PublicApiLinkDisplayType["IconOnly"] = "iconOnly";
    PublicApiLinkDisplayType["Url"] = "url";
    PublicApiLinkDisplayType["Title"] = "title";
    PublicApiLinkDisplayType["Card"] = "card";
    PublicApiLinkDisplayType["Embed"] = "embed";
})(PublicApiLinkDisplayType || (PublicApiLinkDisplayType = {}));
/**
 * A time unit used as part of a duration value.
 */
export var PublicApiDurationUnit;
(function (PublicApiDurationUnit) {
    PublicApiDurationUnit["Days"] = "days";
    PublicApiDurationUnit["Hours"] = "hours";
    PublicApiDurationUnit["Minutes"] = "minutes";
    PublicApiDurationUnit["Seconds"] = "seconds";
})(PublicApiDurationUnit || (PublicApiDurationUnit = {}));
/**
 * List of available icon sets.
 */
export var PublicApiIconSet;
(function (PublicApiIconSet) {
    PublicApiIconSet["Star"] = "star";
    PublicApiIconSet["Circle"] = "circle";
    PublicApiIconSet["Fire"] = "fire";
    PublicApiIconSet["Bug"] = "bug";
    PublicApiIconSet["Diamond"] = "diamond";
    PublicApiIconSet["Bell"] = "bell";
    PublicApiIconSet["ThumbsUp"] = "thumbsup";
    PublicApiIconSet["Heart"] = "heart";
    PublicApiIconSet["Chili"] = "chili";
    PublicApiIconSet["Smiley"] = "smiley";
    PublicApiIconSet["Lightning"] = "lightning";
    PublicApiIconSet["Currency"] = "currency";
    PublicApiIconSet["Coffee"] = "coffee";
    PublicApiIconSet["Person"] = "person";
    PublicApiIconSet["Battery"] = "battery";
    PublicApiIconSet["Cocktail"] = "cocktail";
    PublicApiIconSet["Cloud"] = "cloud";
    PublicApiIconSet["Sun"] = "sun";
    PublicApiIconSet["Checkmark"] = "checkmark";
    PublicApiIconSet["LightBulb"] = "lightbulb";
})(PublicApiIconSet || (PublicApiIconSet = {}));
/**
 * Format type of the column
 */
export var PublicApiColumnFormatType;
(function (PublicApiColumnFormatType) {
    PublicApiColumnFormatType["Text"] = "text";
    PublicApiColumnFormatType["Person"] = "person";
    PublicApiColumnFormatType["Lookup"] = "lookup";
    PublicApiColumnFormatType["Number"] = "number";
    PublicApiColumnFormatType["Percent"] = "percent";
    PublicApiColumnFormatType["Currency"] = "currency";
    PublicApiColumnFormatType["Date"] = "date";
    PublicApiColumnFormatType["DateTime"] = "dateTime";
    PublicApiColumnFormatType["Time"] = "time";
    PublicApiColumnFormatType["Duration"] = "duration";
    PublicApiColumnFormatType["Email"] = "email";
    PublicApiColumnFormatType["Link"] = "link";
    PublicApiColumnFormatType["Slider"] = "slider";
    PublicApiColumnFormatType["Scale"] = "scale";
    PublicApiColumnFormatType["Image"] = "image";
    PublicApiColumnFormatType["Attachments"] = "attachments";
    PublicApiColumnFormatType["Button"] = "button";
    PublicApiColumnFormatType["Checkbox"] = "checkbox";
    PublicApiColumnFormatType["Select"] = "select";
    PublicApiColumnFormatType["PackObject"] = "packObject";
    PublicApiColumnFormatType["Reaction"] = "reaction";
    PublicApiColumnFormatType["Canvas"] = "canvas";
    PublicApiColumnFormatType["Other"] = "other";
})(PublicApiColumnFormatType || (PublicApiColumnFormatType = {}));
/**
 * A schema.org identifier for the object.
 */
export var PublicApiLinkedDataType;
(function (PublicApiLinkedDataType) {
    PublicApiLinkedDataType["ImageObject"] = "ImageObject";
    PublicApiLinkedDataType["MonetaryAmount"] = "MonetaryAmount";
    PublicApiLinkedDataType["Person"] = "Person";
    PublicApiLinkedDataType["WebPage"] = "WebPage";
    PublicApiLinkedDataType["StructuredValue"] = "StructuredValue";
})(PublicApiLinkedDataType || (PublicApiLinkedDataType = {}));
/**
 * The status values that an image object can have.
 */
export var PublicApiImageStatus;
(function (PublicApiImageStatus) {
    PublicApiImageStatus["Live"] = "live";
    PublicApiImageStatus["Deleted"] = "deleted";
    PublicApiImageStatus["Failed"] = "failed";
})(PublicApiImageStatus || (PublicApiImageStatus = {}));
/**
 * Determines how the rows returned are sorted
 */
export var PublicApiRowsSortBy;
(function (PublicApiRowsSortBy) {
    PublicApiRowsSortBy["CreatedAt"] = "createdAt";
    PublicApiRowsSortBy["Natural"] = "natural";
    PublicApiRowsSortBy["UpdatedAt"] = "updatedAt";
})(PublicApiRowsSortBy || (PublicApiRowsSortBy = {}));
/**
 * The format that cell values are returned as.
 */
export var PublicApiValueFormat;
(function (PublicApiValueFormat) {
    PublicApiValueFormat["Simple"] = "simple";
    PublicApiValueFormat["SimpleWithArrays"] = "simpleWithArrays";
    PublicApiValueFormat["Rich"] = "rich";
})(PublicApiValueFormat || (PublicApiValueFormat = {}));
/**
 * Type of the control.
 */
export var PublicApiControlType;
(function (PublicApiControlType) {
    PublicApiControlType["Button"] = "button";
    PublicApiControlType["Checkbox"] = "checkbox";
    PublicApiControlType["DatePicker"] = "datePicker";
    PublicApiControlType["DateRangePicker"] = "dateRangePicker";
    PublicApiControlType["Lookup"] = "lookup";
    PublicApiControlType["Multiselect"] = "multiselect";
    PublicApiControlType["Select"] = "select";
    PublicApiControlType["Scale"] = "scale";
    PublicApiControlType["Slider"] = "slider";
    PublicApiControlType["Reaction"] = "reaction";
})(PublicApiControlType || (PublicApiControlType = {}));
/**
 * Determines how the objects returned are sorted
 */
export var PublicApiSortBy;
(function (PublicApiSortBy) {
    PublicApiSortBy["Name"] = "name";
})(PublicApiSortBy || (PublicApiSortBy = {}));
export var PublicApiTableType;
(function (PublicApiTableType) {
    PublicApiTableType["Table"] = "table";
    PublicApiTableType["View"] = "view";
})(PublicApiTableType || (PublicApiTableType = {}));
export var PublicApiWorkspaceUserRole;
(function (PublicApiWorkspaceUserRole) {
    PublicApiWorkspaceUserRole["Admin"] = "Admin";
    PublicApiWorkspaceUserRole["DocMaker"] = "DocMaker";
    PublicApiWorkspaceUserRole["Editor"] = "Editor";
})(PublicApiWorkspaceUserRole || (PublicApiWorkspaceUserRole = {}));
/**
 * Determines how the Pack analytics returned are sorted.
 */
export var PublicApiPackAnalyticsOrderBy;
(function (PublicApiPackAnalyticsOrderBy) {
    PublicApiPackAnalyticsOrderBy["AnalyticsDate"] = "date";
    PublicApiPackAnalyticsOrderBy["PackId"] = "packId";
    PublicApiPackAnalyticsOrderBy["Name"] = "name";
    PublicApiPackAnalyticsOrderBy["CreatedAt"] = "createdAt";
    PublicApiPackAnalyticsOrderBy["DocInstalls"] = "docInstalls";
    PublicApiPackAnalyticsOrderBy["WorkspaceInstalls"] = "workspaceInstalls";
    PublicApiPackAnalyticsOrderBy["NumFormulaInvocations"] = "numFormulaInvocations";
    PublicApiPackAnalyticsOrderBy["NumActionInvocations"] = "numActionInvocations";
    PublicApiPackAnalyticsOrderBy["NumSyncInvocations"] = "numSyncInvocations";
    PublicApiPackAnalyticsOrderBy["NumMetadataInvocations"] = "numMetadataInvocations";
    PublicApiPackAnalyticsOrderBy["DocsActivelyUsing"] = "docsActivelyUsing";
    PublicApiPackAnalyticsOrderBy["DocsActivelyUsing7Day"] = "docsActivelyUsing7Day";
    PublicApiPackAnalyticsOrderBy["DocsActivelyUsing30Day"] = "docsActivelyUsing30Day";
    PublicApiPackAnalyticsOrderBy["DocsActivelyUsing90Day"] = "docsActivelyUsing90Day";
    PublicApiPackAnalyticsOrderBy["DocsActivelyUsingAllTime"] = "docsActivelyUsingAllTime";
    PublicApiPackAnalyticsOrderBy["WorkspacesActivelyUsing"] = "workspacesActivelyUsing";
    PublicApiPackAnalyticsOrderBy["WorkspacesActivelyUsing7Day"] = "workspacesActivelyUsing7Day";
    PublicApiPackAnalyticsOrderBy["WorkspacesActivelyUsing30Day"] = "workspacesActivelyUsing30Day";
    PublicApiPackAnalyticsOrderBy["WorkspacesActivelyUsing90Day"] = "workspacesActivelyUsing90Day";
    PublicApiPackAnalyticsOrderBy["WorkspacesActivelyUsingAllTime"] = "workspacesActivelyUsingAllTime";
})(PublicApiPackAnalyticsOrderBy || (PublicApiPackAnalyticsOrderBy = {}));
/**
 * Quantization period over which to view analytics.
 */
export var PublicApiAnalyticsScale;
(function (PublicApiAnalyticsScale) {
    PublicApiAnalyticsScale["Daily"] = "daily";
    PublicApiAnalyticsScale["Cumulative"] = "cumulative";
})(PublicApiAnalyticsScale || (PublicApiAnalyticsScale = {}));
/**
 * Determines how the Packs returned are sorted.
 */
export var PublicApiPacksSortBy;
(function (PublicApiPacksSortBy) {
    PublicApiPacksSortBy["Title"] = "title";
    PublicApiPacksSortBy["CreatedAt"] = "createdAt";
    PublicApiPacksSortBy["UpdatedAt"] = "updatedAt";
})(PublicApiPacksSortBy || (PublicApiPacksSortBy = {}));
/**
 * Determines how the Pack listings returned are sorted.
 */
export var PublicApiPackListingsSortBy;
(function (PublicApiPackListingsSortBy) {
    PublicApiPackListingsSortBy["PackId"] = "packId";
    PublicApiPackListingsSortBy["Name"] = "name";
    PublicApiPackListingsSortBy["PackVersion"] = "packVersion";
    PublicApiPackListingsSortBy["PackVersionModifiedAt"] = "packVersionModifiedAt";
})(PublicApiPackListingsSortBy || (PublicApiPackListingsSortBy = {}));
/**
 * Type of Pack permissions.
 */
export var PublicApiPackPrincipalType;
(function (PublicApiPackPrincipalType) {
    PublicApiPackPrincipalType["User"] = "user";
    PublicApiPackPrincipalType["Workspace"] = "workspace";
    PublicApiPackPrincipalType["Worldwide"] = "worldwide";
})(PublicApiPackPrincipalType || (PublicApiPackPrincipalType = {}));
export var PublicApiPackAccessType;
(function (PublicApiPackAccessType) {
    PublicApiPackAccessType["View"] = "view";
    PublicApiPackAccessType["Test"] = "test";
    PublicApiPackAccessType["Edit"] = "edit";
})(PublicApiPackAccessType || (PublicApiPackAccessType = {}));
export var PublicApiPackAssetType;
(function (PublicApiPackAssetType) {
    PublicApiPackAssetType["Logo"] = "logo";
    PublicApiPackAssetType["Cover"] = "cover";
    PublicApiPackAssetType["ExampleImage"] = "exampleImage";
})(PublicApiPackAssetType || (PublicApiPackAssetType = {}));
export var PublicApiPackSource;
(function (PublicApiPackSource) {
    PublicApiPackSource["Web"] = "web";
    PublicApiPackSource["Cli"] = "cli";
})(PublicApiPackSource || (PublicApiPackSource = {}));
/**
 * Widest principal a Pack is available to.
 */
export var PublicApiPackDiscoverability;
(function (PublicApiPackDiscoverability) {
    PublicApiPackDiscoverability["Public"] = "public";
    PublicApiPackDiscoverability["Workspace"] = "workspace";
    PublicApiPackDiscoverability["Private"] = "private";
})(PublicApiPackDiscoverability || (PublicApiPackDiscoverability = {}));
/**
 * Type of Pack connections.
 */
export var PublicApiPackConnectionType;
(function (PublicApiPackConnectionType) {
    PublicApiPackConnectionType["Header"] = "header";
    PublicApiPackConnectionType["UrlParam"] = "urlParam";
    PublicApiPackConnectionType["HttpBasic"] = "httpBasic";
    PublicApiPackConnectionType["Custom"] = "custom";
})(PublicApiPackConnectionType || (PublicApiPackConnectionType = {}));
/**
 * The context request type where a Pack log is generated.
 */
export var PublicApiPackLogRequestType;
(function (PublicApiPackLogRequestType) {
    PublicApiPackLogRequestType["Unknown"] = "unknown";
    PublicApiPackLogRequestType["ConnectionNameMetadataRequest"] = "connectionNameMetadataRequest";
    PublicApiPackLogRequestType["ParameterAutocompleteMetadataRequest"] = "parameterAutocompleteMetadataRequest";
    PublicApiPackLogRequestType["PostAuthSetupMetadataRequest"] = "postAuthSetupMetadataRequest";
    PublicApiPackLogRequestType["GetSyncTableSchemaMetadataRequest"] = "getSyncTableSchemaMetadataRequest";
    PublicApiPackLogRequestType["GetDynamicSyncTableNameMetadataRequest"] = "getDynamicSyncTableNameMetadataRequest";
    PublicApiPackLogRequestType["ListSyncTableDynamicUrlsMetadataRequest"] = "listSyncTableDynamicUrlsMetadataRequest";
    PublicApiPackLogRequestType["GetDynamicSyncTableDisplayUrlMetadataRequest"] = "getDynamicSyncTableDisplayUrlMetadataRequest";
    PublicApiPackLogRequestType["GetIdentifiersForConnectionRequest"] = "getIdentifiersForConnectionRequest";
    PublicApiPackLogRequestType["InvokeFormulaRequest"] = "invokeFormulaRequest";
    PublicApiPackLogRequestType["InvokeSyncFormulaRequest"] = "invokeSyncFormulaRequest";
    PublicApiPackLogRequestType["ImpersonateInvokeFormulaRequest"] = "impersonateInvokeFormulaRequest";
    PublicApiPackLogRequestType["ImpersonateInvokeMetadataFormulaRequest"] = "impersonateInvokeMetadataFormulaRequest";
})(PublicApiPackLogRequestType || (PublicApiPackLogRequestType = {}));
export var PublicApiPackLogType;
(function (PublicApiPackLogType) {
    PublicApiPackLogType["Custom"] = "custom";
    PublicApiPackLogType["Fetcher"] = "fetcher";
    PublicApiPackLogType["Invocation"] = "invocation";
    PublicApiPackLogType["Internal"] = "internal";
    PublicApiPackLogType["Auth"] = "auth";
})(PublicApiPackLogType || (PublicApiPackLogType = {}));
export var PublicApiLogLevel;
(function (PublicApiLogLevel) {
    PublicApiLogLevel["Error"] = "error";
    PublicApiLogLevel["Warn"] = "warn";
    PublicApiLogLevel["Info"] = "info";
    PublicApiLogLevel["Debug"] = "debug";
    PublicApiLogLevel["Trace"] = "trace";
    PublicApiLogLevel["Unknown"] = "unknown";
})(PublicApiLogLevel || (PublicApiLogLevel = {}));
/**
 * Only relevant for original Coda packs.
 */
export var PublicApiFeatureSet;
(function (PublicApiFeatureSet) {
    PublicApiFeatureSet["Basic"] = "Basic";
    PublicApiFeatureSet["Pro"] = "Pro";
    PublicApiFeatureSet["Team"] = "Team";
    PublicApiFeatureSet["Enterprise"] = "Enterprise";
})(PublicApiFeatureSet || (PublicApiFeatureSet = {}));
/**
 * Status of featured doc in pack listing.
 */
export var PublicApiFeaturedDocStatus;
(function (PublicApiFeaturedDocStatus) {
    PublicApiFeaturedDocStatus["DocInaccessibleOrDoesNotExist"] = "docInaccessibleOrDoesNotExist";
    PublicApiFeaturedDocStatus["InvalidPublishedDocUrl"] = "invalidPublishedDocUrl";
})(PublicApiFeaturedDocStatus || (PublicApiFeaturedDocStatus = {}));
/**
 * The pack formula type.
 */
export var PublicApiPackFormulaType;
(function (PublicApiPackFormulaType) {
    PublicApiPackFormulaType["Action"] = "action";
    PublicApiPackFormulaType["Formula"] = "formula";
    PublicApiPackFormulaType["Sync"] = "sync";
    PublicApiPackFormulaType["Metadata"] = "metadata";
})(PublicApiPackFormulaType || (PublicApiPackFormulaType = {}));
