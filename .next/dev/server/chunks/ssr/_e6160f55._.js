module.exports = [
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/lib/venue-map-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LAYOUT_TEMPLATES",
    ()=>LAYOUT_TEMPLATES,
    "addVenueNode",
    ()=>addVenueNode,
    "buildGraphFromVenueMap",
    ()=>buildGraphFromVenueMap,
    "deleteVenueNode",
    ()=>deleteVenueNode,
    "getVenueMap",
    ()=>getVenueMap,
    "initializeDefaultVenueMap",
    ()=>initializeDefaultVenueMap,
    "loadLayoutTemplate",
    ()=>loadLayoutTemplate,
    "saveVenueMap",
    ()=>saveVenueMap,
    "updateVenueNode",
    ()=>updateVenueNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
const LAYOUT_TEMPLATES = [
    {
        id: "standard-tables",
        name: "Standard Table Layout",
        description: "40 tables arranged in a grid with center aisle",
        nodes: Array.from({
            length: 40
        }, (_, i)=>{
            const col = i % 8;
            const row = Math.floor(i / 8);
            const xOffset = col >= 4 ? 100 : 0 // Center aisle
            ;
            return {
                id: `table-${i + 1}`,
                x: 150 + col * 120 + xOffset,
                y: 200 + row * 120,
                type: "table",
                label: `Table ${i + 1}`,
                seats: 8,
                capacity: 10
            };
        }),
        groups: [
            {
                id: "group-tables",
                name: "All Tables",
                color: "#1E40AF",
                nodeIds: Array.from({
                    length: 40
                }, (_, i)=>`table-${i + 1}`)
            }
        ]
    },
    {
        id: "vip-section",
        name: "VIP Section Layout",
        description: "12 VIP tables with stage and premium positioning",
        nodes: [
            {
                id: "stage-1",
                x: 600,
                y: 100,
                type: "stage",
                label: "Main Stage"
            },
            ...Array.from({
                length: 12
            }, (_, i)=>{
                const col = i % 4;
                const row = Math.floor(i / 4);
                return {
                    id: `vip-table-${i + 1}`,
                    x: 300 + col * 150,
                    y: 300 + row * 140,
                    type: "vip-table",
                    label: `VIP Table ${i + 1}`,
                    seats: 6,
                    capacity: 30
                };
            })
        ],
        groups: [
            {
                id: "group-vip",
                name: "VIP Tables",
                color: "#DC2626",
                nodeIds: Array.from({
                    length: 12
                }, (_, i)=>`vip-table-${i + 1}`)
            }
        ]
    },
    {
        id: "wedding-layout",
        name: "Wedding Reception",
        description: "Complete wedding setup with stage, tables, buffet, and dance floor",
        nodes: [
            {
                id: "stage-1",
                x: 600,
                y: 80,
                type: "stage",
                label: "Stage"
            },
            {
                id: "entrance-1",
                x: 600,
                y: 1100,
                type: "entrance",
                label: "Main Entrance"
            },
            {
                id: "buffet-1",
                x: 100,
                y: 500,
                type: "buffet",
                label: "Buffet Left"
            },
            {
                id: "buffet-2",
                x: 1100,
                y: 500,
                type: "buffet",
                label: "Buffet Right"
            },
            ...Array.from({
                length: 20
            }, (_, i)=>{
                const col = i % 5;
                const row = Math.floor(i / 5);
                const xOffset = col >= 2.5 ? 150 : 0 // Dance floor space
                ;
                return {
                    id: `table-${i + 1}`,
                    x: 200 + col * 120 + xOffset,
                    y: 250 + row * 150,
                    type: "table",
                    label: `Table ${i + 1}`,
                    seats: 8,
                    capacity: 10
                };
            })
        ],
        groups: [
            {
                id: "group-food",
                name: "Food Stations",
                color: "#059669",
                nodeIds: [
                    "buffet-1",
                    "buffet-2"
                ]
            },
            {
                id: "group-tables",
                name: "Guest Tables",
                color: "#1E40AF",
                nodeIds: Array.from({
                    length: 20
                }, (_, i)=>`table-${i + 1}`)
            }
        ]
    },
    {
        id: "conference-layout",
        name: "Conference Hall",
        description: "Professional conference setup with theater-style seating",
        nodes: [
            {
                id: "stage-1",
                x: 600,
                y: 100,
                type: "stage",
                label: "Presentation Stage"
            },
            {
                id: "entrance-1",
                x: 300,
                y: 1000,
                type: "entrance",
                label: "Left Entrance"
            },
            {
                id: "entrance-2",
                x: 900,
                y: 1000,
                type: "entrance",
                label: "Right Entrance"
            },
            ...Array.from({
                length: 30
            }, (_, i)=>{
                const col = i % 6;
                const row = Math.floor(i / 6);
                return {
                    id: `table-${i + 1}`,
                    x: 250 + col * 140,
                    y: 300 + row * 120,
                    type: "table",
                    label: `Table ${i + 1}`,
                    seats: 4,
                    capacity: 10
                };
            })
        ],
        groups: [
            {
                id: "group-seating",
                name: "Theater Seating",
                color: "#1E40AF",
                nodeIds: Array.from({
                    length: 30
                }, (_, i)=>`table-${i + 1}`)
            }
        ]
    }
];
/**
 * Removes undefined fields from an object to ensure Firebase compatibility
 */ function removeUndefinedFields(obj) {
    const cleaned = {};
    for(const key in obj){
        if (obj[key] !== undefined) {
            if (typeof obj[key] === "object" && obj[key] !== null && !(obj[key] instanceof Date) && !(obj[key] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"])) {
                cleaned[key] = removeUndefinedFields(obj[key]);
            } else {
                cleaned[key] = obj[key];
            }
        }
    }
    return cleaned;
}
async function saveVenueMap(venueMap) {
    try {
        if (!venueMap.name) {
            throw new Error("Venue map name is required");
        }
        if (!venueMap.imageUrl) {
            throw new Error("Venue map imageUrl is required");
        }
        if (!venueMap.nodes || !Array.isArray(venueMap.nodes)) {
            throw new Error("Venue map nodes array is required");
        }
        if (!venueMap.width || !venueMap.height) {
            throw new Error("Venue map dimensions (width/height) are required");
        }
        const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "venueMaps", "main");
        const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now();
        const cleanedNodes = venueMap.nodes.map((node)=>{
            const cleaned = {
                id: node.id,
                x: node.x,
                y: node.y,
                type: node.type,
                label: node.label
            };
            // Only add optional fields if they have values
            if (node.description !== undefined && node.description !== null) {
                cleaned.description = node.description;
            }
            if (node.customLabel !== undefined && node.customLabel !== null) {
                cleaned.customLabel = node.customLabel;
            }
            if (node.seats !== undefined && node.seats !== null) {
                cleaned.seats = node.seats;
            }
            if (node.capacity !== undefined && node.capacity !== null) {
                cleaned.capacity = node.capacity;
            }
            if (node.groupId !== undefined && node.groupId !== null) {
                cleaned.groupId = node.groupId;
            }
            if (node.createdAt) {
                cleaned.createdAt = node.createdAt instanceof Date ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(node.createdAt) : node.createdAt;
            }
            if (node.updatedAt) {
                cleaned.updatedAt = node.updatedAt instanceof Date ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(node.updatedAt) : node.updatedAt;
            }
            return cleaned;
        });
        const dataToSave = {
            name: venueMap.name,
            imageUrl: venueMap.imageUrl,
            width: venueMap.width,
            height: venueMap.height,
            nodes: cleanedNodes,
            createdAt: now,
            updatedAt: now
        };
        // Only add optional fields if they're defined
        if (venueMap.customImageUrl !== undefined && venueMap.customImageUrl !== null) {
            dataToSave.customImageUrl = venueMap.customImageUrl;
        }
        if (venueMap.backgroundOpacity !== undefined && venueMap.backgroundOpacity !== null) {
            dataToSave.backgroundOpacity = venueMap.backgroundOpacity;
        }
        if (venueMap.defaultZoom !== undefined && venueMap.defaultZoom !== null) {
            dataToSave.defaultZoom = venueMap.defaultZoom;
        }
        if (venueMap.defaultCenter !== undefined && venueMap.defaultCenter !== null) {
            dataToSave.defaultCenter = venueMap.defaultCenter;
        }
        if (venueMap.groups !== undefined && venueMap.groups !== null && venueMap.groups.length > 0) {
            dataToSave.groups = venueMap.groups;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(mapRef, dataToSave);
        console.log("[v0] Venue map persisted to Firebase Firestore successfully");
        return mapRef.id;
    } catch (error) {
        console.error("[v0] Error saving venue map:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to save venue map: ${error.message}`);
        }
        throw new Error("Failed to save venue map: Unknown error occurred");
    }
}
async function getVenueMap() {
    try {
        const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "venueMaps", "main");
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(mapRef);
        if (!snapshot.exists()) {
            console.log("[v0] No existing venue map found in Firestore");
            return null;
        }
        const data = snapshot.data();
        return {
            id: snapshot.id,
            name: data.name,
            imageUrl: data.imageUrl,
            customImageUrl: data.customImageUrl,
            backgroundOpacity: data.backgroundOpacity,
            width: data.width,
            height: data.height,
            defaultZoom: data.defaultZoom || 0.8,
            defaultCenter: data.defaultCenter || {
                x: 600,
                y: 600
            },
            nodes: data.nodes || [],
            groups: data.groups || [],
            createdAt: data.createdAt?.toDate() || new Date(),
            updatedAt: data.updatedAt?.toDate() || new Date()
        };
    } catch (error) {
        console.error("[v0] Error fetching venue map:", error);
        throw error;
    }
}
function loadLayoutTemplate(templateId) {
    return LAYOUT_TEMPLATES.find((t)=>t.id === templateId) || null;
}
function buildGraphFromVenueMap(nodes) {
    console.log("[v0] Building graph using Edge Nodes for walkable paths");
    const graphNodes = nodes.map((node)=>({
            id: node.id,
            x: node.x,
            y: node.y,
            type: node.type
        }));
    const edges = [];
    const entrances = nodes.filter((n)=>n.type === "entrance");
    const edgeNodes = nodes.filter((n)=>n.type === "edge-node");
    const tables = nodes.filter((n)=>n.type === "table" || n.type === "vip-table");
    console.log(`[v0] Found ${entrances.length} entrances, ${edgeNodes.length} edge nodes, ${tables.length} tables`);
    if (entrances.length === 0) {
        console.warn("[v0] No entrances found - pathfinding will fail");
        return {
            nodes: graphNodes,
            edges
        };
    }
    const euclideanDistance = (n1, n2)=>{
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    for(let i = 0; i < entrances.length; i++){
        for(let j = i + 1; j < entrances.length; j++){
            const dist = euclideanDistance(entrances[i], entrances[j]);
            edges.push({
                from: entrances[i].id,
                to: entrances[j].id,
                weight: dist
            });
            edges.push({
                from: entrances[j].id,
                to: entrances[i].id,
                weight: dist
            });
        }
    }
    // Connect edge nodes that are vertically or horizontally aligned within tolerance
    const alignmentTolerance = 30 // Allow slight misalignment
    ;
    for(let i = 0; i < edgeNodes.length; i++){
        for(let j = i + 1; j < edgeNodes.length; j++){
            const node1 = edgeNodes[i];
            const node2 = edgeNodes[j];
            const dx = Math.abs(node2.x - node1.x);
            const dy = Math.abs(node2.y - node1.y);
            // Check if aligned vertically (same X)
            const isVerticallyAligned = dx < alignmentTolerance;
            // Check if aligned horizontally (same Y)
            const isHorizontallyAligned = dy < alignmentTolerance;
            if (isVerticallyAligned || isHorizontallyAligned) {
                const dist = euclideanDistance(node1, node2);
                // Only connect nearby edge nodes (< 300px apart)
                if (dist < 300) {
                    const weight = isVerticallyAligned ? dist : dist * 1.2 // Slightly prefer vertical movement
                    ;
                    edges.push({
                        from: node1.id,
                        to: node2.id,
                        weight
                    });
                    edges.push({
                        from: node2.id,
                        to: node1.id,
                        weight
                    });
                    console.log(`[v0] Connected edge nodes ${node1.label} <-> ${node2.label} (${isVerticallyAligned ? "vertical" : "horizontal"}, ${Math.round(dist)}px)`);
                }
            }
        }
    }
    entrances.forEach((entrance)=>{
        const nearestEdgeNodes = edgeNodes.map((edge)=>({
                edge,
                dist: euclideanDistance(entrance, edge)
            })).sort((a, b)=>a.dist - b.dist).slice(0, 3) // Connect to 3 nearest edge nodes
        ;
        nearestEdgeNodes.forEach(({ edge, dist })=>{
            if (dist < 400) {
                edges.push({
                    from: entrance.id,
                    to: edge.id,
                    weight: dist
                });
                edges.push({
                    from: edge.id,
                    to: entrance.id,
                    weight: dist
                });
                console.log(`[v0] Connected entrance ${entrance.label} to edge node ${edge.label} (${Math.round(dist)}px)`);
            }
        });
    });
    tables.forEach((table)=>{
        const nearestEdgeNodes = edgeNodes.map((edge)=>({
                edge,
                dist: euclideanDistance(table, edge)
            })).sort((a, b)=>a.dist - b.dist).slice(0, 2) // Connect each table to 2 nearest edge nodes
        ;
        nearestEdgeNodes.forEach(({ edge, dist })=>{
            if (dist < 250) {
                // Tables only connect if very close to edge node
                edges.push({
                    from: edge.id,
                    to: table.id,
                    weight: dist
                });
                edges.push({
                    from: table.id,
                    to: edge.id,
                    weight: dist
                });
            }
        });
    });
    console.log(`[v0] Built edge node graph: ${graphNodes.length} nodes, ${edges.length} edges`);
    console.log(`[v0] Edge nodes define walkable corridors with 90-degree turns, entrances are all starting points`);
    return {
        nodes: graphNodes,
        edges
    };
}
async function addVenueNode(node) {
    try {
        const venueMap = await getVenueMap();
        if (!venueMap) throw new Error("Venue map not found");
        const newNode = {
            ...node,
            id: `node-${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        const updatedNodes = [
            ...venueMap.nodes,
            newNode
        ];
        await saveVenueMap({
            ...venueMap,
            nodes: updatedNodes
        });
        return newNode;
    } catch (error) {
        console.error("[v0] Error adding venue node:", error);
        throw error;
    }
}
async function updateVenueNode(nodeId, updates) {
    try {
        const venueMap = await getVenueMap();
        if (!venueMap) throw new Error("Venue map not found");
        const updatedNodes = venueMap.nodes.map((node)=>node.id === nodeId ? {
                ...node,
                ...updates,
                updatedAt: new Date()
            } : node);
        await saveVenueMap({
            ...venueMap,
            nodes: updatedNodes
        });
    } catch (error) {
        console.error("[v0] Error updating venue node:", error);
        throw error;
    }
}
async function deleteVenueNode(nodeId) {
    try {
        const venueMap = await getVenueMap();
        if (!venueMap) throw new Error("Venue map not found");
        const updatedNodes = venueMap.nodes.filter((node)=>node.id !== nodeId);
        await saveVenueMap({
            ...venueMap,
            nodes: updatedNodes
        });
    } catch (error) {
        console.error("[v0] Error deleting venue node:", error);
        throw error;
    }
}
async function initializeDefaultVenueMap() {
    const defaultMap = {
        name: "Main Event Venue",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9caa3868-4cd5-468f-9fe7-4dc613433d03.jfif-bjuGNoSEEOVtEQdwylS2JSfEkM6Jhy.jpeg",
        width: 1200,
        height: 1400,
        defaultZoom: 0.8,
        defaultCenter: {
            x: 600,
            y: 700
        },
        nodes: [
            // Entrances
            {
                id: "entrance-1",
                x: 300,
                y: 1350,
                type: "entrance",
                label: "Main Entrance",
                description: "South entrance"
            },
            {
                id: "entrance-2",
                x: 600,
                y: 1350,
                type: "entrance",
                label: "Entrance 2",
                description: "South entrance (center)"
            },
            {
                id: "entrance-3",
                x: 900,
                y: 1350,
                type: "entrance",
                label: "Entrance 3",
                description: "South entrance (right)"
            },
            // Stage
            {
                id: "stage",
                x: 600,
                y: 50,
                type: "stage",
                label: "STAGE",
                description: "Main stage"
            },
            // Buffets
            {
                id: "buffet-1",
                x: 50,
                y: 400,
                type: "buffet",
                label: "BUFFET1",
                description: "Left side buffet"
            },
            {
                id: "buffet-2",
                x: 50,
                y: 700,
                type: "buffet",
                label: "BUFFET2",
                description: "Left side buffet (lower)"
            },
            {
                id: "buffet-3",
                x: 1150,
                y: 700,
                type: "buffet",
                label: "BUFFET3",
                description: "Right side buffet"
            },
            // Carving Tables
            {
                id: "carving-1",
                x: 100,
                y: 600,
                type: "carving-table",
                label: "CARVING TABLE",
                description: "Left side carving station"
            },
            {
                id: "carving-2",
                x: 1100,
                y: 600,
                type: "carving-table",
                label: "CARVING TABLE",
                description: "Right side carving station"
            },
            // Photo Exhibit
            {
                id: "photo-exhibit",
                x: 600,
                y: 1200,
                type: "photo-exhibit",
                label: "PHOTO EXHIBIT",
                description: "Photo exhibition area"
            },
            // Crying Room
            {
                id: "crying-room",
                x: 250,
                y: 1150,
                type: "crying-room",
                label: "CRYING ROOM",
                description: "Comfort room"
            },
            // VIP Tables
            {
                id: "vip-table-1",
                x: 450,
                y: 250,
                type: "vip-table",
                label: "VIP TABLE 1",
                seats: 8,
                capacity: 30
            },
            {
                id: "vip-table-2",
                x: 750,
                y: 250,
                type: "vip-table",
                label: "VIP TABLE 2",
                seats: 8,
                capacity: 30
            },
            // Regular Tables (sampling - 20 tables shown, total 80)
            {
                id: "table-1",
                x: 200,
                y: 150,
                type: "table",
                label: "Table 1",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-2",
                x: 350,
                y: 150,
                type: "table",
                label: "Table 2",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-5",
                x: 200,
                y: 300,
                type: "table",
                label: "Table 5",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-6",
                x: 350,
                y: 300,
                type: "table",
                label: "Table 6",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-9",
                x: 200,
                y: 450,
                type: "table",
                label: "Table 9",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-10",
                x: 350,
                y: 450,
                type: "table",
                label: "Table 10",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-21",
                x: 850,
                y: 150,
                type: "table",
                label: "Table 21",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-22",
                x: 1000,
                y: 150,
                type: "table",
                label: "Table 22",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-25",
                x: 850,
                y: 300,
                type: "table",
                label: "Table 25",
                seats: 8,
                capacity: 10
            },
            {
                id: "table-26",
                x: 1000,
                y: 300,
                type: "table",
                label: "Table 26",
                seats: 8,
                capacity: 10
            }
        ],
        groups: [
            {
                id: "group-1",
                name: "Entrances",
                color: "#FF5733",
                nodeIds: [
                    "entrance-1",
                    "entrance-2",
                    "entrance-3"
                ]
            },
            {
                id: "group-2",
                name: "Food Stations",
                color: "#33FF57",
                nodeIds: [
                    "buffet-1",
                    "buffet-2",
                    "buffet-3",
                    "carving-1",
                    "carving-2"
                ]
            },
            {
                id: "group-3",
                name: "Special Areas",
                color: "#3357FF",
                nodeIds: [
                    "photo-exhibit",
                    "crying-room",
                    "stage"
                ]
            },
            {
                id: "group-4",
                name: "VIP Tables",
                color: "#F333FF",
                nodeIds: [
                    "vip-table-1",
                    "vip-table-2"
                ]
            },
            {
                id: "group-5",
                name: "Regular Tables",
                color: "#FF33A1",
                nodeIds: [
                    "table-1",
                    "table-2",
                    "table-5",
                    "table-6",
                    "table-9",
                    "table-10",
                    "table-21",
                    "table-22",
                    "table-25",
                    "table-26"
                ]
            }
        ]
    };
    await saveVenueMap(defaultMap);
    const saved = await getVenueMap();
    return saved;
}
}),
"[project]/components/pathfinding-visualization.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PathfindingVisualization",
    ()=>PathfindingVisualization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$venue$2d$map$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/venue-map-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-ssr] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-ssr] (ecmascript) <export default as ZoomOut>");
"use client";
;
;
;
;
;
;
function PathfindingVisualization({ seatId, imageSrc, showBackground = false, isVip = false }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [venueNodes, setVenueNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // zoom / pan
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pan, setPan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // pointer / gesture state (mouse + touch)
    const pointersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const lastPinchDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // dragging
    const dragPointerIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastDragPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // double-tap / double-click
    const lastTapTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTapPosRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // tuning
    const PAN_SPEED = 1.4;
    const WHEEL_ZOOM_IN = 1.2;
    const WHEEL_ZOOM_OUT = 0.8;
    const DOUBLE_TAP_ZOOM = 1.6;
    // Load venue nodes from Firebase
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadVenueData() {
            try {
                const venueMap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$venue$2d$map$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVenueMap"])();
                if (venueMap && venueMap.nodes) {
                    setVenueNodes(venueMap.nodes);
                    setError(null);
                } else {
                    setError("No venue map configured");
                }
            } catch (err) {
                console.error("[v0] Error loading venue map:", err);
                setError("Failed to load venue map");
            } finally{
                setIsLoading(false);
            }
        }
        loadVenueData();
    }, []);
    // Validate the requested seat exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!seatId || venueNodes.length === 0) return;
        try {
            const targetTable = venueNodes.find((node)=>{
                const expectedType = isVip ? "vip-table" : "table";
                if (node.type !== expectedType) return false;
                const tableNum = node.label.match(/\d+/)?.[0];
                return tableNum === String(seatId);
            });
            if (!targetTable) {
                setError(`${isVip ? "VIP " : ""}Table ${seatId} not found`);
            } else {
                setError(null);
            }
        } catch (err) {
            console.error("[v0] Error finding table:", err);
            setError("Error locating table");
        }
    }, [
        seatId,
        venueNodes,
        isVip
    ]);
    // --- Zoom / pan helpers ----------------------------------------------------
    const clampZoom = (z)=>Math.min(4, Math.max(0.5, z));
    const zoomAtPoint = (factor, clientX, clientY)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        setZoom((prevZoom)=>{
            const targetZoom = clampZoom(prevZoom * factor);
            const actualFactor = targetZoom / prevZoom;
            if (actualFactor === 1) return prevZoom;
            setPan((prevPan)=>{
                const worldX = (x - prevPan.x) / prevZoom;
                const worldY = (y - prevPan.y) / prevZoom;
                return {
                    x: x - worldX * targetZoom,
                    y: y - worldY * targetZoom
                };
            });
            return targetZoom;
        });
    };
    const zoomToCenter = (factor)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        zoomAtPoint(factor, rect.left + rect.width / 2, rect.top + rect.height / 2);
    };
    const handleZoomIn = ()=>zoomToCenter(DOUBLE_TAP_ZOOM);
    const handleZoomOut = ()=>zoomToCenter(1 / DOUBLE_TAP_ZOOM);
    const handleResetView = ()=>{
        setZoom(1);
        setPan({
            x: 0,
            y: 0
        });
    };
    const toggleFullscreen = ()=>{
        setIsFullscreen((prev)=>!prev);
        if (!isFullscreen) {
            handleResetView();
        }
    };
    // --- Double-tap / double-click detection ----------------------------------
    const handleTouchDoubleTapCheck = (e)=>{
        if (e.pointerType !== "touch") return false;
        const now = performance.now();
        const lastTime = lastTapTimeRef.current;
        const lastPos = lastTapPosRef.current;
        const TAP_THRESHOLD_MS = 300;
        const TAP_DISTANCE_PX = 30;
        let isDoubleTap = false;
        if (lastTime && now - lastTime < TAP_THRESHOLD_MS && lastPos) {
            const dx = e.clientX - lastPos.x;
            const dy = e.clientY - lastPos.y;
            const dist = Math.hypot(dx, dy);
            if (dist < TAP_DISTANCE_PX) {
                isDoubleTap = true;
            }
        }
        if (isDoubleTap) {
            zoomAtPoint(DOUBLE_TAP_ZOOM, e.clientX, e.clientY);
            lastTapTimeRef.current = null;
            lastTapPosRef.current = null;
            return true;
        } else {
            lastTapTimeRef.current = now;
            lastTapPosRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            return false;
        }
    };
    const handleDoubleClick = (e)=>{
        zoomAtPoint(DOUBLE_TAP_ZOOM, e.clientX, e.clientY);
    };
    // --- Pointer handlers: drag + pinch ---------------------------------------
    const handlePointerDown = (e)=>{
        if (e.pointerType === "touch") {
            const used = handleTouchDoubleTapCheck(e);
            if (used) return;
        }
        const id = e.pointerId;
        pointersRef.current.set(id, {
            x: e.clientX,
            y: e.clientY
        });
        e.target.setPointerCapture(id);
        const pointers = [
            ...pointersRef.current.entries()
        ];
        if (pointers.length === 1) {
            dragPointerIdRef.current = id;
            lastDragPosRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            lastPinchDistanceRef.current = null;
        } else if (pointers.length === 2) {
            const [, p1] = pointers[0];
            const [, p2] = pointers[1];
            const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            lastPinchDistanceRef.current = dist;
            dragPointerIdRef.current = null;
            lastDragPosRef.current = null;
        }
    };
    const handlePointerMove = (e)=>{
        const id = e.pointerId;
        if (!pointersRef.current.has(id)) return;
        pointersRef.current.set(id, {
            x: e.clientX,
            y: e.clientY
        });
        const pointers = [
            ...pointersRef.current.values()
        ];
        if (pointers.length === 1 && dragPointerIdRef.current === id && lastDragPosRef.current) {
            const dx = (e.clientX - lastDragPosRef.current.x) * PAN_SPEED;
            const dy = (e.clientY - lastDragPosRef.current.y) * PAN_SPEED;
            lastDragPosRef.current = {
                x: e.clientX,
                y: e.clientY
            };
            setPan((prev)=>({
                    x: prev.x + dx,
                    y: prev.y + dy
                }));
        } else if (pointers.length >= 2 && lastPinchDistanceRef.current) {
            e.preventDefault();
            const [p1, p2] = pointers;
            const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            if (dist === 0) return;
            const factor = dist / lastPinchDistanceRef.current;
            const centerX = (p1.x + p2.x) / 2;
            const centerY = (p1.y + p2.y) / 2;
            zoomAtPoint(factor, centerX, centerY);
            lastPinchDistanceRef.current = dist;
        }
    };
    const endPointer = (e)=>{
        const id = e.pointerId;
        pointersRef.current.delete(id);
        e.target.releasePointerCapture(id);
        const remaining = [
            ...pointersRef.current.entries()
        ];
        if (remaining.length === 0) {
            dragPointerIdRef.current = null;
            lastPinchDistanceRef.current = null;
            lastDragPosRef.current = null;
        } else if (remaining.length === 1) {
            const [remainingId, point] = remaining[0];
            dragPointerIdRef.current = remainingId;
            lastPinchDistanceRef.current = null;
            lastDragPosRef.current = {
                x: point.x,
                y: point.y
            };
        }
    };
    const handlePointerUp = (e)=>{
        endPointer(e);
    };
    const handlePointerCancel = (e)=>{
        endPointer(e);
    };
    const handleWheel = (e)=>{
        e.preventDefault();
        const factor = e.deltaY < 0 ? WHEEL_ZOOM_IN : WHEEL_ZOOM_OUT;
        zoomAtPoint(factor, e.clientX, e.clientY);
    };
    // --- Drawing --------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas || venueNodes.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const allX = venueNodes.map((n)=>n.x);
        const allY = venueNodes.map((n)=>n.y);
        const rawMinX = Math.min(...allX);
        const rawMaxX = Math.max(...allX);
        const rawMinY = Math.min(...allY);
        const rawMaxY = Math.max(...allY);
        const rawWidth = rawMaxX - rawMinX;
        const rawHeight = rawMaxY - rawMinY;
        // ➜ IMPORTANT CHANGE:
        // Always use the FULL map bounds (no cropping around the selected seat)
        const margin = 40;
        const minX = rawMinX - margin;
        const maxX = rawMaxX + margin;
        const minY = rawMinY - margin;
        const maxY = rawMaxY + margin;
        const contentWidth = maxX - minX;
        const contentHeight = maxY - minY;
        // Use container size (fullscreen or embedded)
        const parent = canvas.parentElement;
        const canvasWidth = parent?.clientWidth ?? 1400;
        const canvasHeight = parent?.clientHeight ?? Math.ceil(contentHeight / contentWidth * canvasWidth);
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        // Scale so the WHOLE map fits inside the container
        const scaleX = canvasWidth / contentWidth;
        const scaleY = canvasHeight / contentHeight;
        const scale = Math.min(scaleX, scaleY);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(zoom, zoom);
        ctx.translate(pan.x / zoom, pan.y / zoom);
        const toCanvas = (x, y)=>({
                x: (x - minX) * scale,
                y: (y - minY) * scale
            });
        const drawNode = (node, highlight = false)=>{
            const pos = toCanvas(node.x, node.y);
            if (node.type === "stage") {
                ctx.fillStyle = "#1E3A8A";
                ctx.fillRect(pos.x - 100 * scale, pos.y - 20 * scale, 200 * scale, 40 * scale);
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `bold ${Math.max(12, 16 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("STAGE", pos.x, pos.y);
            } else if (node.type === "buffet") {
                ctx.fillStyle = "#1F2937";
                ctx.fillRect(pos.x - 15 * scale, pos.y - 30 * scale, 30 * scale, 60 * scale);
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `${Math.max(8, 10 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.save();
                ctx.translate(pos.x, pos.y);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText("BUFFET", 0, 0);
                ctx.restore();
            } else if (node.type === "carving-table") {
                ctx.fillStyle = "#7C3AED";
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 25 * scale, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `${Math.max(8, 9 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("CT", pos.x, pos.y);
            } else if (node.type === "crying-room") {
                ctx.fillStyle = "#06B6D4";
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 20 * scale, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `${Math.max(6, 7 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("CRYING", pos.x, pos.y - 4 * scale);
                ctx.fillText("ROOM", pos.x, pos.y + 4 * scale);
            } else if (node.type === "photo-exhibit") {
                ctx.fillStyle = "#F59E0B";
                ctx.fillRect(pos.x - 30 * scale, pos.y - 20 * scale, 60 * scale, 40 * scale);
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `${Math.max(7, 8 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("PHOTO", pos.x, pos.y);
            } else if (node.type === "edge-node") {
                return;
            } else if (node.type === "custom" || node.type === "waypoint" || node.type === "intersection") {
                ctx.fillStyle = "#8B5CF6";
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 8 * scale, 0, Math.PI * 2);
                ctx.fill();
                if (node.label && node.type === "custom") {
                    ctx.fillStyle = "#1F2937";
                    ctx.font = `${Math.max(7, 8 * scale)}px sans-serif`;
                    ctx.textAlign = "center";
                    ctx.fillText(node.label.substring(0, 8), pos.x, pos.y + 15 * scale);
                }
            } else if (node.type === "entrance") {
                ctx.fillStyle = highlight ? "#FBBF24" : "#10B981";
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 12 * scale, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#FFFFFF";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `bold ${Math.max(8, 10 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("E", pos.x, pos.y);
            } else if (node.type === "table" || node.type === "vip-table") {
                const tableNum = node.label.match(/\d+/)?.[0];
                const isSelected = tableNum === String(seatId) && (isVip && node.type === "vip-table" || !isVip && node.type === "table");
                ctx.fillStyle = node.type === "vip-table" ? "#DC2626" : "#1E40AF";
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 12 * scale, 0, Math.PI * 2);
                ctx.fill();
                if (isSelected) {
                    ctx.strokeStyle = "#FBBF24";
                    ctx.lineWidth = 4;
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, 18 * scale, 0, Math.PI * 2);
                    ctx.stroke();
                }
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `bold ${Math.max(8, 10 * scale)}px sans-serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(tableNum || "", pos.x, pos.y);
            }
        };
        venueNodes.forEach((node)=>{
            const tableNum = node.label.match(/\d+/)?.[0];
            const isSelected = tableNum === String(seatId) && (isVip && node.type === "vip-table" || !isVip && node.type === "table");
            drawNode(node, isSelected);
        });
        ctx.restore();
    }, [
        seatId,
        venueNodes,
        isVip,
        zoom,
        pan
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "bg-white border-blue-200 p-6 md:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 text-center text-sm md:text-base",
                        children: "Loading venue map..."
                    }, void 0, false, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pathfinding-visualization.tsx",
                lineNumber: 458,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/pathfinding-visualization.tsx",
            lineNumber: 457,
            columnNumber: 7
        }, this);
    }
    if (venueNodes.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "bg-red-50 border-red-200 p-6 md:p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 text-red-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm md:text-base",
                                children: "Venue Map Not Configured"
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs md:text-sm",
                                children: "Please set up the venue map in the admin panel first."
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 475,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 473,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pathfinding-visualization.tsx",
                lineNumber: 471,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/pathfinding-visualization.tsx",
            lineNumber: 470,
            columnNumber: 7
        }, this);
    }
    const canvasProps = {
        ref: canvasRef,
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onPointerCancel: handlePointerCancel,
        onPointerLeave: handlePointerUp,
        onWheel: handleWheel,
        onDoubleClick: handleDoubleClick
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-white flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 bg-slate-50 border-b border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-slate-900",
                                children: [
                                    isVip ? "VIP " : "",
                                    "Seat Number ",
                                    seatId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 501,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: toggleFullscreen,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/pathfinding-visualization.tsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 504,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 500,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "relative flex-1 overflow-hidden bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ...canvasProps,
                            className: "absolute inset-0 w-full h-full cursor-move touch-none"
                        }, void 0, false, {
                            fileName: "[project]/components/pathfinding-visualization.tsx",
                            lineNumber: 509,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                onClick: handleZoomOut,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/pathfinding-visualization.tsx",
                                    lineNumber: 516,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                onClick: handleResetView,
                                children: "1:1"
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 518,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                onClick: handleZoomIn,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/pathfinding-visualization.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 514,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pathfinding-visualization.tsx",
                lineNumber: 499,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-white border-slate-200 overflow-hidden shadow-sm",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 md:p-4 bg-yellow-50 border-b border-yellow-200 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4 md:w-5 md:h-5 text-yellow-700 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs md:text-sm text-yellow-700",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this),
                    seatId && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 md:p-4 bg-blue-50 border-b border-blue-200 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs md:text-sm text-slate-700 text-center leading-relaxed flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-blue-700 text-base md:text-lg block md:inline mb-1 md:mb-0",
                                        children: [
                                            isVip ? "VIP " : "",
                                            "Seat Number ",
                                            seatId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pathfinding-visualization.tsx",
                                        lineNumber: 540,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block md:inline text-xs md:text-sm",
                                        children: [
                                            " ",
                                            "- Highlighted on the map below"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pathfinding-visualization.tsx",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: toggleFullscreen,
                                className: "ml-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "w-4 h-4 md:w-5 md:h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/pathfinding-visualization.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 538,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white p-3 md:p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: containerRef,
                            className: "relative w-full h-[75vh] md:h-[550px] lg:h-[650px] max-w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ...canvasProps,
                                className: "absolute inset-0 w-full h-full cursor-move touch-none"
                            }, void 0, false, {
                                fileName: "[project]/components/pathfinding-visualization.tsx",
                                lineNumber: 559,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pathfinding-visualization.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pathfinding-visualization.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pathfinding-visualization.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/lib/firebase-service.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignSeatToAttendee",
    ()=>assignSeatToAttendee,
    "batchImportAttendees",
    ()=>batchImportAttendees,
    "cancelCheckIn",
    ()=>cancelCheckIn,
    "checkInAttendee",
    ()=>checkInAttendee,
    "checkTableCapacity",
    ()=>checkTableCapacity,
    "createAttendee",
    ()=>createAttendee,
    "deleteAttendee",
    ()=>deleteAttendee,
    "getAttendeeByTicket",
    ()=>getAttendeeByTicket,
    "getAttendees",
    ()=>getAttendees,
    "getCategoryDistribution",
    ()=>getCategoryDistribution,
    "getCheckInStats",
    ()=>getCheckInStats,
    "getNoShowsCount",
    ()=>getNoShowsCount,
    "getRegionDistribution",
    ()=>getRegionDistribution,
    "getSeatInfo",
    ()=>getSeatInfo,
    "logAudit",
    ()=>logAudit,
    "searchAttendees",
    ()=>searchAttendees,
    "updateAttendee",
    ()=>updateAttendee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// Helper to convert Firestore timestamps to JS dates
function convertTimestamps(data) {
    const converted = {
        ...data
    };
    Object.keys(converted).forEach((key)=>{
        if (converted[key]?.toDate) {
            converted[key] = converted[key].toDate();
        }
    });
    return converted;
}
const ensureFirebaseInitialized = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"]) {
        throw new Error("Firebase is not initialized. Please configure Firebase environment variables in your Vercel project settings.");
    }
};
async function getAttendees() {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "desc"));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return snapshot.docs.map((doc)=>({
                id: doc.id,
                ...convertTimestamps(doc.data())
            }));
    } catch (error) {
        console.error("[v0] Error fetching attendees:", error);
        throw error;
    }
}
async function searchAttendees(searchTerm) {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const allAttendees = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...convertTimestamps(doc.data())
            }));
        const lowerSearch = searchTerm.toLowerCase();
        return allAttendees.filter((att)=>att.name.toLowerCase().includes(lowerSearch) || att.ticketNumber.toLowerCase().includes(lowerSearch));
    } catch (error) {
        console.error("[v0] Error searching attendees:", error);
        throw error;
    }
}
async function getAttendeeByTicket(ticketNumber) {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])("ticketNumber", "==", ticketNumber.toUpperCase()));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        if (snapshot.empty) return null;
        const doc = snapshot.docs[0];
        return {
            id: doc.id,
            ...convertTimestamps(doc.data())
        };
    } catch (error) {
        console.error("[v0] Error fetching attendee by ticket:", error);
        throw error;
    }
}
async function createAttendee(attendeeData) {
    try {
        ensureFirebaseInitialized();
        const cleanData = Object.fromEntries(Object.entries(attendeeData).filter(([, value])=>value !== undefined));
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"), {
            ...cleanData,
            ticketNumber: cleanData.ticketNumber.toUpperCase(),
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        });
        return docRef.id;
    } catch (error) {
        console.error("[v0] Error creating attendee:", error);
        throw error;
    }
}
async function updateAttendee(id, updates) {
    try {
        ensureFirebaseInitialized();
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
            ...updates,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        });
    } catch (error) {
        console.error("[v0] Error updating attendee:", error);
        throw error;
    }
}
async function deleteAttendee(id) {
    try {
        ensureFirebaseInitialized();
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
    } catch (error) {
        console.error("[v0] Error deleting attendee:", error);
        throw error;
    }
}
async function checkInAttendee(id) {
    try {
        ensureFirebaseInitialized();
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
            checkedIn: true,
            checkedInTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        });
    } catch (error) {
        console.error("[v0] Error checking in attendee:", error);
        throw error;
    }
}
async function cancelCheckIn(id) {
    try {
        ensureFirebaseInitialized();
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees", id);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
            checkedIn: false,
            checkedInTime: null,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        });
        console.log("[v0] Check-in cancelled successfully");
    } catch (error) {
        console.error("[v0] Error cancelling check-in:", error);
        throw error;
    }
}
async function getSeatInfo(seatNumber) {
    try {
        ensureFirebaseInitialized();
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "seats", String(seatNumber));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (!snapshot.exists()) return null;
        return {
            seatNumber,
            ...convertTimestamps(snapshot.data())
        };
    } catch (error) {
        console.error("[v0] Error fetching seat info:", error);
        throw error;
    }
}
async function checkTableCapacity(tableNumber, isVIP) {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])("assignedSeat", "==", tableNumber));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const maxCapacity = isVIP ? 30 : 10;
        const currentOccupancy = snapshot.size;
        const available = maxCapacity - currentOccupancy;
        return {
            current: currentOccupancy,
            max: maxCapacity,
            available,
            isFull: available <= 0
        };
    } catch (error) {
        console.error("[v0] Error checking table capacity:", error);
        throw error;
    }
}
async function assignSeatToAttendee(attendeeId, tableNumber, isVIP) {
    try {
        ensureFirebaseInitialized();
        const capacity = await checkTableCapacity(tableNumber, isVIP);
        if (capacity.isFull) {
            throw new Error(`Table ${tableNumber} is at full capacity (${capacity.max}/${capacity.max} seats occupied)`);
        }
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"]);
        const attendeeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees", attendeeId);
        batch.update(attendeeRef, {
            table: tableNumber,
            tableCapacity: isVIP ? 30 : 10,
            updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        });
        await batch.commit();
        console.log(`[v0] Assigned attendee to table ${tableNumber}. Capacity: ${capacity.current + 1}/${capacity.max}`);
    } catch (error) {
        console.error("[v0] Error assigning seat:", error);
        throw error;
    }
}
async function logAudit(action, performedBy, targetTicketNumber, seatNumber, details) {
    try {
        ensureFirebaseInitialized();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "auditLogs"), {
            action,
            performedBy,
            targetTicketNumber,
            seatNumber,
            details,
            timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        });
    } catch (error) {
        console.error("[v0] Error logging audit:", error);
    }
}
async function batchImportAttendees(attendeesList) {
    try {
        ensureFirebaseInitialized();
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"]);
        const errors = [];
        let successful = 0;
        let failed = 0;
        for (const attendee of attendeesList){
            try {
                const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees", attendee.ticketNumber.toUpperCase());
                batch.set(docRef, {
                    ticketNumber: attendee.ticketNumber.toUpperCase(),
                    name: attendee.name,
                    email: attendee.email,
                    region: attendee.region,
                    category: attendee.category,
                    table: attendee.table || null,
                    assignedSeat: attendee.seat || null,
                    checkedIn: false,
                    checkedInTime: null,
                    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
                    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
                });
                successful++;
            } catch (err) {
                failed++;
                errors.push(`Failed to import ${attendee.ticketNumber}: ${err}`);
            }
        }
        await batch.commit();
        return {
            successful,
            failed,
            errors
        };
    } catch (error) {
        console.error("[v0] Error batch importing attendees:", error);
        throw error;
    }
}
async function getCheckInStats() {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const attendees = snapshot.docs.map((doc)=>doc.data());
        const totalAttendees = attendees.length;
        const checkedIn = attendees.filter((a)=>a.checkedIn).length;
        const pending = totalAttendees - checkedIn;
        const checkInPercentage = totalAttendees > 0 ? Math.round(checkedIn / totalAttendees * 100) : 0;
        return {
            totalAttendees,
            checkedIn,
            pending,
            checkInPercentage
        };
    } catch (error) {
        console.error("[v0] Error fetching check-in stats:", error);
        throw error;
    }
}
async function getRegionDistribution() {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const distribution = {
            Luzon: 0,
            Visayas: 0,
            Mindanao: 0,
            International: 0
        };
        snapshot.docs.forEach((doc)=>{
            const region = doc.data().region;
            if (distribution.hasOwnProperty(region)) {
                distribution[region]++;
            }
        });
        return distribution;
    } catch (error) {
        console.error("[v0] Error fetching region distribution:", error);
        throw error;
    }
}
async function getCategoryDistribution() {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const distribution = {};
        snapshot.docs.forEach((doc)=>{
            const category = doc.data().category;
            distribution[category] = (distribution[category] || 0) + 1;
        });
        return distribution;
    } catch (error) {
        console.error("[v0] Error fetching category distribution:", error);
        throw error;
    }
}
async function getNoShowsCount() {
    try {
        ensureFirebaseInitialized();
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firestore"], "attendees"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])("checkedIn", "==", false));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return snapshot.size;
    } catch (error) {
        console.error("[v0] Error fetching no-shows count:", error);
        throw error;
    }
}
;
}),
"[project]/app/checkin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckinPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pathfinding$2d$visualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pathfinding-visualization.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/firebase-service.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function CheckinPage() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedAttendee, setSelectedAttendee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSearch = async ()=>{
        setIsSearching(true);
        setError(null);
        setSelectedAttendee(null);
        try {
            const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["searchAttendees"])(searchInput);
            if (results.length > 0) {
                setSelectedAttendee(results[0]);
            } else {
                setError("No attendee found with that search term.");
            }
        } catch (err) {
            console.error("[v0] Search failed:", err);
            setError("Failed to search attendees. Please try again.");
        } finally{
            setIsSearching(false);
        }
    };
    const handleCheckin = async ()=>{
        if (!selectedAttendee) return;
        if (selectedAttendee.assignedSeat) {
            try {
                const isVIP = selectedAttendee.category === "VIP";
                const capacity = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkTableCapacity"])(selectedAttendee.assignedSeat, isVIP);
                if (capacity.isFull) {
                    setError(`Table ${selectedAttendee.assignedSeat} is at full capacity (${capacity.max}/${capacity.max} seats). Cannot check in.`);
                    return;
                }
            } catch (err) {
                console.error("[v0] Error checking capacity:", err);
                setError("Failed to check table capacity. Please try again.");
                return;
            }
        }
        try {
            setIsSearching(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["checkInAttendee"])(selectedAttendee.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logAudit"])("check_in", user?.email || "", selectedAttendee.ticketNumber, selectedAttendee.assignedSeat, {
                name: selectedAttendee.name
            });
            setSelectedAttendee({
                ...selectedAttendee,
                checkedIn: true
            });
            setTimeout(()=>{
                setSearchInput("");
                setSelectedAttendee(null);
            }, 2000);
        } catch (err) {
            console.error("[v0] Check-in failed:", err);
            setError("Failed to check in. Please try again.");
        } finally{
            setIsSearching(false);
        }
    };
    const handleCancelCheckIn = async ()=>{
        if (!selectedAttendee || !confirm("Are you sure you want to cancel this check-in?")) return;
        try {
            setIsSearching(true);
            setError(null);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cancelCheckIn"])(selectedAttendee.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logAudit"])("cancel_check_in", user?.email || "", selectedAttendee.ticketNumber, selectedAttendee.assignedSeat, {
                name: selectedAttendee.name
            });
            setSelectedAttendee({
                ...selectedAttendee,
                checkedIn: false
            });
        } catch (err) {
            console.error("[v0] Error cancelling check-in:", err);
            setError("Failed to cancel check-in. Please try again.");
        } finally{
            setIsSearching(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[oklch(0.13_0.05_260)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-[oklch(0.13_0.05_260)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "bg-[oklch(0.13_0.05_260)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-7xl mx-auto px-6 py-6 bg-[oklch(0.13_0.05_260)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/Logo__2_-removebg-preview.png",
                                                    width: 100,
                                                    height: 100,
                                                    alt: "Picture of the author"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkin/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/LGN__1_-removebg-preview.png",
                                                    width: 400,
                                                    height: 400,
                                                    alt: "Picture of the author"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkin/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/BTSL-removebg-preview.png",
                                                    width: 400,
                                                    height: 400,
                                                    alt: "Picture of the author"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkin/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 28
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkin/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkin/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 20
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/checkin/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 12
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/checkin/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/checkin/page.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkin/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/checkin/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/checkin/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12 space-y-6 md:space-y-8",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-red-50 border-red-300 p-3 md:p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-700 text-xs md:text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/checkin/page.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/checkin/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-white border-blue-200 p-4 md:p-8 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg md:text-xl font-semibold text-slate-900 mb-4 md:mb-6",
                                children: "Find My Seat"
                            }, void 0, false, {
                                fileName: "[project]/app/checkin/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkin/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Enter ticket number or name...",
                                                value: searchInput,
                                                onChange: (e)=>setSearchInput(e.target.value),
                                                onKeyPress: (e)=>e.key === "Enter" && handleSearch(),
                                                className: "pl-10 md:pl-12 bg-white border-blue-200 text-slate-900 placeholder:text-slate-400 h-11 md:h-12 text-base md:text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkin/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkin/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSearch,
                                        disabled: !searchInput || isSearching,
                                        className: "bg-[oklch(0.13_0.05_260)] text-white px-6 md:px-8 h-11 md:h-12 w-full sm:w-auto",
                                        children: isSearching ? "Searching..." : "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkin/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkin/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkin/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    selectedAttendee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-white border-blue-200 p-4 md:p-6 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base md:text-lg font-semibold text-slate-900 leading-tight",
                                        children: "Venue Map"
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkin/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm text-slate-600 p-3 md:p-4 bg-blue-50 rounded-lg leading-relaxed",
                                        children: [
                                            "Your assigned seat is",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-blue-700",
                                                children: [
                                                    "Seat ",
                                                    selectedAttendee.assignedSeat || "Not Yet Assigned"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkin/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this),
                                            ". Look for the highlighted table with the orange circle on the map above."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkin/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto",
                                        children: !selectedAttendee.checkedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleCheckin,
                                            disabled: isSearching,
                                            className: "bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto h-11",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/checkin/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this),
                                                isSearching ? "Processing..." : "Mark as Checked In"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/checkin/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2 text-emerald-600 font-semibold py-2 bg-emerald-50 rounded-md sm:bg-transparent sm:py-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkin/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm md:text-base",
                                                        children: "Checked In"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkin/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkin/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false)
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkin/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkin/page.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            selectedAttendee.assignedSeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pathfinding$2d$visualization$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PathfindingVisualization"], {
                                    seatId: selectedAttendee.assignedSeat,
                                    isVip: selectedAttendee.category === "VIP",
                                    showBackground: false
                                }, void 0, false, {
                                    fileName: "[project]/app/checkin/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/checkin/page.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/checkin/page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/checkin/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/checkin/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_e6160f55._.js.map