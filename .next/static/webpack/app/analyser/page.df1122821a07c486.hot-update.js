"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/analyser/page",{

/***/ "(app-pages-browser)/./src/components/Analyser_components/AnalyserV1-interface/InputsContent.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/Analyser_components/AnalyserV1-interface/InputsContent.tsx ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _styles_AnalyserV1_Styles_input_content_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/AnalyserV1-Styles/input-content/styled */ \"(app-pages-browser)/./src/styles/AnalyserV1-Styles/input-content/styled.ts\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _button_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/SubmitButton */ \"(app-pages-browser)/./src/components/Analyser_components/AnalyserV1-interface/button/SubmitButton.tsx\");\n/* harmony import */ var _services_GetTokenReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/GetTokenReport */ \"(app-pages-browser)/./src/services/GetTokenReport.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_dataSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/dataSlice */ \"(app-pages-browser)/./src/store/dataSlice.ts\");\n/* harmony import */ var _AnalyserV1_results_animations_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnalyserV1-results/animations/Loading */ \"(app-pages-browser)/./src/components/Analyser_components/AnalyserV1-interface/AnalyserV1-results/animations/Loading.tsx\");\n/* harmony import */ var _barrel_optimize_names_notification_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=notification!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/notification/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst InputContent = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)({\n        \"InputContent.useSelector[loading]\": (state)=>state.data.loading\n    }[\"InputContent.useSelector[loading]\"]);\n    const [api, contextHolder] = _barrel_optimize_names_notification_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"].useNotification();\n    async function verify(event) {\n        event.preventDefault();\n        const form = event.currentTarget;\n        const inputValue = form.elements[0];\n        if (!inputValue.value) {\n            api.error({\n                message: 'Erro',\n                description: 'Este campo não pode estar vazio.',\n                duration: 4,\n                closeIcon: null,\n                showProgress: true\n            });\n            return;\n        }\n        try {\n            dispatch((0,_store_dataSlice__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));\n            const data = await (0,_services_GetTokenReport__WEBPACK_IMPORTED_MODULE_4__.fetchTokenReport)(inputValue.value);\n            api.success({\n                message: 'Sucesso',\n                description: 'Dados carregados com sucesso!',\n                duration: 3,\n                closeIcon: false,\n                showProgress: true\n            });\n            dispatch((0,_store_dataSlice__WEBPACK_IMPORTED_MODULE_5__.setData)(data));\n        } catch (e) {\n            api.error({\n                message: 'Erro',\n                description: 'Ocorreu um erro ao buscar o dados do token, certifique-se que o endereço é da rede solana.',\n                duration: 5,\n                closeIcon: null,\n                showProgress: true\n            });\n            dispatch((0,_store_dataSlice__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));\n        } finally{\n            dispatch((0,_store_dataSlice__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_AnalyserV1_Styles_input_content_styled__WEBPACK_IMPORTED_MODULE_2__.InputContentStyle, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            padding: 2,\n            children: [\n                contextHolder,\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnalyserV1_results_animations_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 18\n                }, undefined) : '',\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: \"#\",\n                    onSubmit: verify,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            variant: \"h6\",\n                            gutterBottom: true,\n                            children: \"Insira o endere\\xe7o do Token\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            label: \"9qf14LK7...\",\n                            id: \"fullWidth\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            variant: \"body1\",\n                            paragraph: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n            lineNumber: 66,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lukas\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\MundoCriptoV2\\\\MundoCriptoV2\\\\src\\\\components\\\\Analyser_components\\\\AnalyserV1-interface\\\\InputsContent.tsx\",\n        lineNumber: 65,\n        columnNumber: 7\n    }, undefined);\n};\n_s(InputContent, \"/jgesph6lT18RczhH6DqorU+ZBU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        _barrel_optimize_names_notification_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"].useNotification\n    ];\n});\n_c = InputContent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputContent);\nvar _c;\n$RefreshReg$(_c, \"InputContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FuYWx5c2VyX2NvbXBvbmVudHMvQW5hbHlzZXJWMS1pbnRlcmZhY2UvSW5wdXRzQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV3QztBQUNRO0FBQzJDO0FBQzNDO0FBQ0M7QUFDbUI7QUFDYjtBQUVRO0FBQ0Q7QUFDMUI7QUFFcEMsTUFBTWEsZUFBeUI7O0lBQzdCLE1BQU1DLFdBQVdQLHdEQUFXQTtJQUM1QixNQUFNUSxVQUFVUCx3REFBV0E7NkNBQUMsQ0FBQ1EsUUFBcUJBLE1BQU1DLElBQUksQ0FBQ0YsT0FBTzs7SUFDcEUsTUFBTSxDQUFDRyxLQUFLQyxjQUFjLEdBQUdQLGdGQUFZQSxDQUFDUSxlQUFlO0lBR3pELGVBQWVDLE9BQU9DLEtBQXVDO1FBQzNEQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLE9BQU9GLE1BQU1HLGFBQWE7UUFDaEMsTUFBTUMsYUFBYUYsS0FBS0csUUFBUSxDQUFDLEVBQUU7UUFFbkMsSUFBSSxDQUFDRCxXQUFXRSxLQUFLLEVBQUU7WUFDdkJWLElBQUlXLEtBQUssQ0FBQztnQkFDUkMsU0FBUztnQkFDVEMsYUFBYTtnQkFDYkMsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsY0FBYztZQUNoQjtZQUNBO1FBQ0E7UUFFQSxJQUFJO1lBQ0ZwQixTQUFTSiw0REFBVUEsQ0FBQztZQUNwQixNQUFNTyxPQUFPLE1BQU1YLDBFQUFnQkEsQ0FBQ29CLFdBQVdFLEtBQUs7WUFDcERWLElBQUlpQixPQUFPLENBQUM7Z0JBQ1ZMLFNBQVM7Z0JBQ1RDLGFBQWE7Z0JBQ2JDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLGNBQWM7WUFDaEI7WUFDQXBCLFNBQVNMLHlEQUFPQSxDQUFDUTtRQUNuQixFQUFFLFVBQU07WUFDTkMsSUFBSVcsS0FBSyxDQUFDO2dCQUNSQyxTQUFTO2dCQUNUQyxhQUFhO2dCQUNiQyxVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxjQUFjO1lBQ2hCO1lBQ0FwQixTQUFTSiw0REFBVUEsQ0FBQztRQUN0QixTQUFVO1lBQ1JJLFNBQVNKLDREQUFVQSxDQUFDO1FBQ3RCO0lBQ0Y7SUFHQSxxQkFDSSw4REFBQ1AsNkZBQWlCQTtrQkFDcEIsNEVBQUNELDBGQUFHQTtZQUFDa0MsU0FBUzs7Z0JBRVhqQjtnQkFDQUosd0JBQVUsOERBQUNKLDhFQUFPQTs7OztnQ0FBTTs4QkFDdkIsOERBQUNhO29CQUFLYSxRQUFPO29CQUFJQyxVQUFVakI7O3NDQUN6Qiw4REFBQ3BCLDJGQUFVQTs0QkFBQ3NDLFNBQVE7NEJBQUtDLFlBQVk7c0NBQUM7Ozs7OztzQ0FHdEMsOERBQUNwQyxnRUFBU0E7NEJBQUVxQyxPQUFNOzRCQUFjQyxJQUFHOzs7Ozs7c0NBQ25DLDhEQUFDekMsMkZBQVVBOzRCQUFDc0MsU0FBUTs0QkFBUUksU0FBUzs7Ozs7O3NDQUVqQyw4REFBQ3RDLDREQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQW5FTVE7O1FBQ2FOLG9EQUFXQTtRQUNaQyxvREFBV0E7UUFDRUksZ0ZBQVlBLENBQUNROzs7S0FIdENQO0FBcUVOLGlFQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGx1a2FzXFxPbmVEcml2ZVxcw4FyZWEgZGUgVHJhYmFsaG9cXE11bmRvQ3JpcHRvVjJcXE11bmRvQ3JpcHRvVjJcXHNyY1xcY29tcG9uZW50c1xcQW5hbHlzZXJfY29tcG9uZW50c1xcQW5hbHlzZXJWMS1pbnRlcmZhY2VcXElucHV0c0NvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSW5wdXRDb250ZW50U3R5bGUgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvQW5hbHlzZXJWMS1TdHlsZXMvaW5wdXQtY29udGVudC9zdHlsZWQnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tICcuL2J1dHRvbi9TdWJtaXRCdXR0b24nO1xyXG5pbXBvcnQgeyBmZXRjaFRva2VuUmVwb3J0IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvR2V0VG9rZW5SZXBvcnQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N0b3JlJztcclxuaW1wb3J0IHsgc2V0RGF0YSwgc2V0TG9hZGluZyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2RhdGFTbGljZSc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vQW5hbHlzZXJWMS1yZXN1bHRzL2FuaW1hdGlvbnMvTG9hZGluZyc7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgSW5wdXRDb250ZW50OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5kYXRhLmxvYWRpbmcpO1xyXG4gIGNvbnN0IFthcGksIGNvbnRleHRIb2xkZXJdID0gbm90aWZpY2F0aW9uLnVzZU5vdGlmaWNhdGlvbigpO1xyXG4gIFxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeShldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGZvcm0uZWxlbWVudHNbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIFxyXG4gICAgaWYgKCFpbnB1dFZhbHVlLnZhbHVlKSB7XHJcbiAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICBtZXNzYWdlOiAnRXJybycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRXN0ZSBjYW1wbyBuw6NvIHBvZGUgZXN0YXIgdmF6aW8uJyxcclxuICAgICAgZHVyYXRpb246IDQsIC8vIFRlbXBvIGRlIGV4aWJpw6fDo28gZGEgbm90aWZpY2HDp8OjbyAoc2VndW5kb3MpXHJcbiAgICAgIGNsb3NlSWNvbjogbnVsbCwgLy8gUmVtb3ZlIGJvdMOjbyBkZSBmZWNoYXIgcGFyYSBldml0YXIgcXVlIGZlY2hlbSBhbnRlcyBkbyB0ZW1wb1xyXG4gICAgICBzaG93UHJvZ3Jlc3M6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRva2VuUmVwb3J0KGlucHV0VmFsdWUudmFsdWUpO1xyXG4gICAgICBhcGkuc3VjY2Vzcyh7XHJcbiAgICAgICAgbWVzc2FnZTogJ1N1Y2Vzc28nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGFkb3MgY2FycmVnYWRvcyBjb20gc3VjZXNzbyEnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzLFxyXG4gICAgICAgIGNsb3NlSWNvbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd1Byb2dyZXNzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICBkaXNwYXRjaChzZXREYXRhKGRhdGEpKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBhcGkuZXJyb3Ioe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdFcnJvJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ09jb3JyZXUgdW0gZXJybyBhbyBidXNjYXIgbyBkYWRvcyBkbyB0b2tlbiwgY2VydGlmaXF1ZS1zZSBxdWUgbyBlbmRlcmXDp28gw6kgZGEgcmVkZSBzb2xhbmEuJyxcclxuICAgICAgICBkdXJhdGlvbjogNSwgXHJcbiAgICAgICAgY2xvc2VJY29uOiBudWxsLFxyXG4gICAgICAgIHNob3dQcm9ncmVzczogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKTsgXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRDb250ZW50U3R5bGU+XHJcbiAgICA8Qm94IHBhZGRpbmc9ezJcclxuICAgIH0+XHJcbiAgICAgIHtjb250ZXh0SG9sZGVyfVxyXG4gICAgICB7bG9hZGluZyA/IDxMb2FkaW5nIC8+IDogJyd9XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG9uU3VibWl0PXt2ZXJpZnl9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICBJbnNpcmEgbyBlbmRlcmXDp28gZG8gVG9rZW5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUZXh0RmllbGQgIGxhYmVsPVwiOXFmMTRMSzcuLi5cIiBpZD1cImZ1bGxXaWR0aFwiIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvbiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvQm94PlxyXG4gICAgICA8L0lucHV0Q29udGVudFN0eWxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbnRlbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlR5cG9ncmFwaHkiLCJCb3giLCJJbnB1dENvbnRlbnRTdHlsZSIsIlRleHRGaWVsZCIsIlN1Ym1pdEJ1dHRvbiIsImZldGNoVG9rZW5SZXBvcnQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0RGF0YSIsInNldExvYWRpbmciLCJMb2FkaW5nIiwibm90aWZpY2F0aW9uIiwiSW5wdXRDb250ZW50IiwiZGlzcGF0Y2giLCJsb2FkaW5nIiwic3RhdGUiLCJkYXRhIiwiYXBpIiwiY29udGV4dEhvbGRlciIsInVzZU5vdGlmaWNhdGlvbiIsInZlcmlmeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImlucHV0VmFsdWUiLCJlbGVtZW50cyIsInZhbHVlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsImNsb3NlSWNvbiIsInNob3dQcm9ncmVzcyIsInN1Y2Nlc3MiLCJwYWRkaW5nIiwiYWN0aW9uIiwib25TdWJtaXQiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwibGFiZWwiLCJpZCIsInBhcmFncmFwaCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Analyser_components/AnalyserV1-interface/InputsContent.tsx\n"));

/***/ })

});