import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DJk4aIBl.js";
import { B as invariant, C as RouterCore, D as createNonReactiveReadonlyStore, E as createNonReactiveMutableStore, F as joinPaths, G as hasKeys, H as deepEqual, I as removeTrailingSlash, J as replaceEqualDeep, K as isDangerousProtocol, L as trimPathLeft, M as rootRouteId, P as exactPathTest, R as trimPathRight, S as resolveManifestCssLink, U as escapeHtml, W as functionalUpdate, X as useForwardedRef, Y as reactUse, Z as useIntersectionObserver, a as useStore, c as dummyMatchContext, f as useHydrated, h as appendUniqueUserTags, i as require_react_dom, j as redirect, l as matchContext, n as Outlet, q as isModuleNotFoundError, u as useRouter, v as getAssetCrossOrigin, y as getScriptPreloadAttrs } from "./Match-SV5XyXxP.js";
import { $a as flatMap$1, $n as toCodecStringTree, $t as BadArgument, Ai as raceFirst, B as isHttpServerResponse, Ba as map$2, Bi as serviceOption, Bn as Union, C as HttpServerRequest, Ci as match$1, Cn as fromChannel, Cr as Forbidden$1, Ct as fromRecordUnsafe, D as schemaHeaders, Di as orDie, Do as pipe, Dr as decodeBase64String, E as schemaCookies, Ea as UnknownError, En as make$16, Eo as identity, Er as make$18, Fn as Struct, Fr as endUnsafe, G as uint8Array, Gi as timeoutOrElse, Gn as decodeTo, Gt as Path$1, H as raw, Ha as isFailure, Hi as suspend, Hn as declare, Hr as makeUnsafe, Ir as failCauseUnsafe, J as HttpClient, Ja as getOption, Ji as undefined_, Jn as encodeUnknownEffect, Jr as andThen, Jt as FileSystem, K as urlParams, Ki as tryPromise, Kn as decodeUnknownEffect$1, Kr as acquireRelease, Kt as TypeId$7, La as isArrayNonEmpty, Lr as make$17, Mr as fromTransform, Ni as runFork, Nr as mapDone, O as schemaSearchParams, Oa as done, Oi as provideContext, Oo as pipeArguments, Pn as String$1, Qa as omit, Qi as withErrorReporting, Qr as callback, Qt as make$14, R as symbol, Ri as scoped, Rr as offer, S as use, Sa as succeed$2, Si as mapErrorEager, Sn as drain, Sr as transformOrFail, St as fromInput, Ti as matchEffect, Tn as get, Tr as Pointer, Tt as set, U as setHeader, Ua as Reference, Ui as sync, Ur as getCurrent, V as jsonUnsafe, Va as of, Vi as succeed, Vr as make$13, W as text, Wa as Service, X as mapRequest, Xa as getUnsafe, Xi as void_, Xr as asVoid, Xt as Size, Y as filterStatusOk, Ya as getOrElse$1, Yi as uninterruptible, Yr as as, Yt as FileTypeId, Za as makeUnsafe$2, Zn as tag, Zt as WatchBackend, _ as getStatusSuccess, _a as doneUnsafe, _i as gen, _o as isNotUndefined, _r as isOptional, a as ProductInvalidResponseError, aa as effect, ai as die, an as empty$1, ao as isSome, ar as toJsonSchemaMultiDocument$1, at as prependUrl, b as route, ba as fail$1, bi as map, bn as transduce, bo as isUndefined, br as toEncoded, c as ProductsInvalidResponseError, ca as mergeAll, co as none, cr as _is, d as getErrorSchemas, da as succeed$1, di as fnUntraced, do as PipeInspectableProto, dr as Union$1, ea as catchDone, ei as catchTag, en as badArgument, er as VALID_OPEN_API_COMPONENTS_SCHEMAS_KEY_REGEXP, fa as Scope, fi as forEach, fn as merge$1, fo as BaseProto, fr as getAST, g as getStatusError, ga as _await, gi as fromResult, gn as runCollect, go as isNotNull, gr as isObjects, gt as toRecord, h as getResponseEncoding, hi as forkScoped, hn as run, ho as hasProperty, hr as isNull, i as ProductFetchError, in as decodeText, io as getOrUndefined, ir as fromASTs$1, j as limitsServices, ji as result, jn as Never, ka as fail$2, kn as ErrorClass, kt as RegistryProvider, l as AdditionalSchemas, la as provide, li as flatMap, lo as some, lr as decodeUnknownEffect, lt as hasBody, mn as provideContext$1, mr as isDeclaration, n as productListSchema, na as TaggedClass, ni as clockWith, nn as nominal, no as fromUndefinedOr, nr as apply, o as ProductNotFoundError, oa as effectContext, oi as effectify, oo as map$3, or as SchemaError, p as getSuccessSchemas, pa as addFinalizer, pi as forever, pn as mkString, pr as getLastEncoding, q as layer$15, qa as get$1, qi as try_, qr as addFinalizer$1, qt as FileDescriptor, r as productSchema, ra as TaggedError, ri as context, rn as callback$1, ro as getOrElse, rr as fromASTBlacklist, s as ProductsFetchError, si as fail, sn as fromChannel$1, so as match, sr as escapeToken, t as ecomApi, ti as catch_, tn as systemError, to as fromNullishOr, tr as toMultiDocumentOpenApi3_1, tt as schemaBodyJson, u as reflect, ua as provideMerge, ui as flatMapEager, un as isStream, uo as Prototype, ur as map$4, v as isNoContent, va as isDone, vi as ignore, vn as splitLines, vo as isNullish, vr as resolveDescription, w as ParsedSearchParams, wa as Done, wn as isSink, wo as dual, wr as InvalidValue, wt as merge, x as toWebHandler, xi as mapError, xn as unwrap, xo as constFalse, xt as empty, y as RouteContext, ya as makeUnsafe$1, yi as isEffect, yr as resolveIdentifier, z as empty$2, zr as offerUnsafe } from "./api-CKuSm2qT.js";
import { Readable } from "node:stream";
import * as NodeChildProcess from "node:child_process";
import "node:http";
import * as Crypto from "node:crypto";
import * as NFS from "node:fs";
import * as OS from "node:os";
import * as Path from "node:path";
import "node:stream/promises";
import * as NodeUrl from "node:url";
import * as readline from "node:readline";
//#region node_modules/.pnpm/@tanstack+router-core@1.171.8/node_modules/@tanstack/router-core/dist/esm/link.js
var preloadWarning = "Error preloading route! ☝️";
//#endregion
//#region node_modules/.pnpm/@tanstack+router-core@1.171.8/node_modules/@tanstack/router-core/dist/esm/route.js
var BaseRoute = class {
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	constructor(options) {
		this.init = (opts) => {
			this.originalIndex = opts.originalIndex;
			const options = this.options;
			const isRoot = !options?.path && !options?.id;
			this.parentRoute = this.options.getParentRoute?.();
			if (isRoot) this._path = rootRouteId;
			else if (!this.parentRoute) invariant();
			let path = isRoot ? rootRouteId : options?.path;
			if (path && path !== "/") path = trimPathLeft(path);
			const customId = options?.id || path;
			let id = isRoot ? rootRouteId : joinPaths([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, customId]);
			if (path === "__root__") path = "/";
			if (id !== "__root__") id = joinPaths(["/", id]);
			const fullPath = id === "__root__" ? "/" : joinPaths([this.parentRoute.fullPath, path]);
			this._path = path;
			this._id = id;
			this._fullPath = fullPath;
			this._to = trimPathRight(fullPath);
		};
		this.addChildren = (children) => {
			return this._addFileChildren(children);
		};
		this._addFileChildren = (children) => {
			if (Array.isArray(children)) this.children = children;
			if (typeof children === "object" && children !== null) this.children = Object.values(children);
			return this;
		};
		this._addFileTypes = () => {
			return this;
		};
		this.updateLoader = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.update = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.lazy = (lazyFn) => {
			this.lazyFn = lazyFn;
			return this;
		};
		this.redirect = (opts) => redirect({
			from: this.fullPath,
			...opts
		});
		this.options = options || {};
		this.isRoot = !options?.getParentRoute;
		if (options?.id && options?.path) throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
	}
};
var BaseRootRoute = class extends BaseRoute {
	constructor(options) {
		super(options);
	}
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/useMatch.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var dummyStore = {
	get: () => void 0,
	subscribe: () => ({ unsubscribe: () => {} })
};
/**
* Read and select the nearest or targeted route match.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useMatchHook
*/
function useMatch(opts) {
	const router = useRouter();
	const nearestMatchId = import_react.useContext(opts.from ? dummyMatchContext : matchContext);
	const key = opts.from ?? nearestMatchId;
	const matchStore = key ? opts.from ? router.stores.getRouteMatchStore(key) : router.stores.matchStores.get(key) : void 0;
	{
		const match = matchStore?.get();
		if ((opts.shouldThrow ?? true) && !match) invariant();
		if (match === void 0) return;
		return opts.select ? opts.select(match) : match;
	}
	const previousResult = import_react.useRef(void 0);
	return useStore(matchStore ?? dummyStore, (match) => {
		if ((opts.shouldThrow ?? true) && !match) invariant();
		if (match === void 0) return;
		const selected = opts.select ? opts.select(match) : match;
		if (opts.structuralSharing ?? router.options.defaultStructuralSharing) {
			const shared = replaceEqualDeep(previousResult.current, selected);
			previousResult.current = shared;
			return shared;
		}
		return selected;
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
/**
* Read and select the current route's loader data with type‑safety.
*
* Options:
* - `from`/`strict`: Choose which route's data to read and strictness
* - `select`: Map the loader data to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader data (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDataHook
*/
function useLoaderData(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (s) => {
			return opts.select ? opts.select(s.loaderData) : s.loaderData;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
/**
* Read and select the current route's loader dependencies object.
*
* Options:
* - `from`: Choose which route's loader deps to read
* - `select`: Map the deps to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader deps (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDepsHook
*/
function useLoaderDeps(opts) {
	const { select, ...rest } = opts;
	return useMatch({
		...rest,
		select: (s) => {
			return select ? select(s.loaderDeps) : s.loaderDeps;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/useParams.js
/**
* Access the current route's path parameters with type-safety.
*
* Options:
* - `from`/`strict`: Specify the matched route and whether to enforce strict typing
* - `select`: Project the params object to a derived value for memoized renders
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw if the route is not found in strict contexts
*
* @returns The params object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useParamsHook
*/
function useParams(opts) {
	return useMatch({
		from: opts.from,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		strict: opts.strict,
		select: (match) => {
			const params = opts.strict === false ? match.params : match._strictParams;
			return opts.select ? opts.select(params) : params;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/useSearch.js
/**
* Read and select the current route's search parameters with type-safety.
*
* Options:
* - `from`/`strict`: Control which route's search is read and how strictly it's typed
* - `select`: Map the search object to a derived value for render optimization
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw when the route is not found (strict contexts)
*
* @returns The search object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useSearchHook
*/
function useSearch(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.search) : match.search;
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/useNavigate.js
/**
* Imperative navigation hook.
*
* Returns a stable `navigate(options)` function to change the current location
* programmatically. Prefer the `Link` component for user-initiated navigation,
* and use this hook from effects, callbacks, or handlers where imperative
* navigation is required.
*
* Options:
* - `from`: Optional route base used to resolve relative `to` paths.
*
* @returns A function that accepts `NavigateOptions`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useNavigateHook
*/
function useNavigate(_defaultOpts) {
	const router = useRouter();
	return import_react.useCallback((options) => {
		return router.navigate({
			...options,
			from: options.from ?? _defaultOpts?.from
		});
	}, [_defaultOpts?.from, router]);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function useRouteContext(opts) {
	return useMatch({
		...opts,
		select: (match) => opts.select ? opts.select(match.context) : match.context
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/link.js
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
/**
* Build anchor-like props for declarative navigation and preloading.
*
* Returns stable `href`, event handlers and accessibility props derived from
* router options and active state. Used internally by `Link` and custom links.
*
* Options cover `to`, `params`, `search`, `hash`, `state`, `preload`,
* `activeProps`, `inactiveProps`, and more.
*
* @returns React anchor props suitable for `<a>` or custom components.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLinkPropsHook
*/
function useLinkProps(options, forwardedRef) {
	const router = useRouter();
	const innerRef = useForwardedRef(forwardedRef);
	const { activeProps, inactiveProps, activeOptions, to, preload: userPreload, preloadDelay: userPreloadDelay, preloadIntentProximity: _preloadIntentProximity, hashScrollIntoView, replace, startTransition, resetScroll, viewTransition, children, target, disabled, style, className, onClick, onBlur, onFocus, onMouseEnter, onMouseLeave, onTouchStart, ignoreBlocker, params: _params, search: _search, hash: _hash, state: _state, mask: _mask, reloadDocument: _reloadDocument, unsafeRelative: _unsafeRelative, from: _from, _fromLocation, ...propsSafeToSpread } = options;
	{
		const safeInternal = isSafeInternal(to);
		if (typeof to === "string" && !safeInternal && to.indexOf(":") > -1) try {
			new URL(to);
			if (isDangerousProtocol(to, router.protocolAllowlist)) return {
				...propsSafeToSpread,
				ref: innerRef,
				href: void 0,
				...children && { children },
				...target && { target },
				...disabled && { disabled },
				...style && { style },
				...className && { className }
			};
			return {
				...propsSafeToSpread,
				ref: innerRef,
				href: to,
				...children && { children },
				...target && { target },
				...disabled && { disabled },
				...style && { style },
				...className && { className }
			};
		} catch {}
		const next = router.buildLocation({
			...options,
			from: options.from
		});
		const hrefOption = getHrefOption(next.maskedLocation ? next.maskedLocation.publicHref : next.publicHref, next.maskedLocation ? next.maskedLocation.external : next.external, router.history, disabled);
		const externalLink = (() => {
			if (hrefOption?.external) {
				if (isDangerousProtocol(hrefOption.href, router.protocolAllowlist)) return;
				return hrefOption.href;
			}
			if (safeInternal) return void 0;
			if (typeof to === "string" && to.indexOf(":") > -1) try {
				new URL(to);
				if (isDangerousProtocol(to, router.protocolAllowlist)) return;
				return to;
			} catch {}
		})();
		const isActive = (() => {
			if (externalLink) return false;
			const currentLocation = router.stores.location.get();
			const exact = activeOptions?.exact ?? false;
			if (exact) {
				if (!exactPathTest(currentLocation.pathname, next.pathname, router.basepath)) return false;
			} else {
				const currentPathSplit = removeTrailingSlash(currentLocation.pathname, router.basepath);
				const nextPathSplit = removeTrailingSlash(next.pathname, router.basepath);
				if (!(currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/"))) return false;
			}
			if (activeOptions?.includeSearch ?? true) {
				if (currentLocation.search !== next.search) {
					const currentSearchEmpty = !currentLocation.search || typeof currentLocation.search === "object" && !hasKeys(currentLocation.search);
					const nextSearchEmpty = !next.search || typeof next.search === "object" && !hasKeys(next.search);
					if (!(currentSearchEmpty && nextSearchEmpty)) {
						if (!deepEqual(currentLocation.search, next.search, {
							partial: !exact,
							ignoreUndefined: !activeOptions?.explicitUndefined
						})) return false;
					}
				}
			}
			if (activeOptions?.includeHash) return false;
			return true;
		})();
		if (externalLink) return {
			...propsSafeToSpread,
			ref: innerRef,
			href: externalLink,
			...children && { children },
			...target && { target },
			...disabled && { disabled },
			...style && { style },
			...className && { className }
		};
		const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
		const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
		const resolvedStyle = (() => {
			const baseStyle = style;
			const activeStyle = resolvedActiveProps.style;
			const inactiveStyle = resolvedInactiveProps.style;
			if (!baseStyle && !activeStyle && !inactiveStyle) return;
			if (baseStyle && !activeStyle && !inactiveStyle) return baseStyle;
			if (!baseStyle && activeStyle && !inactiveStyle) return activeStyle;
			if (!baseStyle && !activeStyle && inactiveStyle) return inactiveStyle;
			return {
				...baseStyle,
				...activeStyle,
				...inactiveStyle
			};
		})();
		const resolvedClassName = (() => {
			const baseClassName = className;
			const activeClassName = resolvedActiveProps.className;
			const inactiveClassName = resolvedInactiveProps.className;
			if (!baseClassName && !activeClassName && !inactiveClassName) return "";
			let out = "";
			if (baseClassName) out = baseClassName;
			if (activeClassName) out = out ? `${out} ${activeClassName}` : activeClassName;
			if (inactiveClassName) out = out ? `${out} ${inactiveClassName}` : inactiveClassName;
			return out;
		})();
		return {
			...propsSafeToSpread,
			...resolvedActiveProps,
			...resolvedInactiveProps,
			href: hrefOption?.href,
			ref: innerRef,
			disabled: !!disabled,
			target,
			...resolvedStyle && { style: resolvedStyle },
			...resolvedClassName && { className: resolvedClassName },
			...disabled && STATIC_DISABLED_PROPS,
			...isActive && STATIC_ACTIVE_PROPS
		};
	}
	const isHydrated = useHydrated();
	const _options = import_react.useMemo(() => options, [
		router,
		options.from,
		options._fromLocation,
		options.hash,
		options.to,
		options.search,
		options.params,
		options.state,
		options.mask,
		options.unsafeRelative
	]);
	const currentLocation = useStore(router.stores.location, (l) => l, (prev, next) => prev.href === next.href);
	const next = import_react.useMemo(() => {
		const opts = {
			_fromLocation: currentLocation,
			..._options
		};
		return router.buildLocation(opts);
	}, [
		router,
		currentLocation,
		_options
	]);
	const hrefOptionPublicHref = next.maskedLocation ? next.maskedLocation.publicHref : next.publicHref;
	const hrefOptionExternal = next.maskedLocation ? next.maskedLocation.external : next.external;
	const hrefOption = import_react.useMemo(() => getHrefOption(hrefOptionPublicHref, hrefOptionExternal, router.history, disabled), [
		disabled,
		hrefOptionExternal,
		hrefOptionPublicHref,
		router.history
	]);
	const externalLink = import_react.useMemo(() => {
		if (hrefOption?.external) {
			if (isDangerousProtocol(hrefOption.href, router.protocolAllowlist)) return;
			return hrefOption.href;
		}
		if (isSafeInternal(to)) return void 0;
		if (typeof to !== "string" || to.indexOf(":") === -1) return void 0;
		try {
			new URL(to);
			if (isDangerousProtocol(to, router.protocolAllowlist)) return;
			return to;
		} catch {}
	}, [
		to,
		hrefOption,
		router.protocolAllowlist
	]);
	const isActive = import_react.useMemo(() => {
		if (externalLink) return false;
		if (activeOptions?.exact) {
			if (!exactPathTest(currentLocation.pathname, next.pathname, router.basepath)) return false;
		} else {
			const currentPathSplit = removeTrailingSlash(currentLocation.pathname, router.basepath);
			const nextPathSplit = removeTrailingSlash(next.pathname, router.basepath);
			if (!(currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/"))) return false;
		}
		if (activeOptions?.includeSearch ?? true) {
			if (!deepEqual(currentLocation.search, next.search, {
				partial: !activeOptions?.exact,
				ignoreUndefined: !activeOptions?.explicitUndefined
			})) return false;
		}
		if (activeOptions?.includeHash) return isHydrated && currentLocation.hash === next.hash;
		return true;
	}, [
		activeOptions?.exact,
		activeOptions?.explicitUndefined,
		activeOptions?.includeHash,
		activeOptions?.includeSearch,
		currentLocation,
		externalLink,
		isHydrated,
		next.hash,
		next.pathname,
		next.search,
		router.basepath
	]);
	const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
	const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
	const resolvedClassName = [
		className,
		resolvedActiveProps.className,
		resolvedInactiveProps.className
	].filter(Boolean).join(" ");
	const resolvedStyle = (style || resolvedActiveProps.style || resolvedInactiveProps.style) && {
		...style,
		...resolvedActiveProps.style,
		...resolvedInactiveProps.style
	};
	const [isTransitioning, setIsTransitioning] = import_react.useState(false);
	const hasRenderFetched = import_react.useRef(false);
	const preload = options.reloadDocument || externalLink ? false : userPreload ?? router.options.defaultPreload;
	const preloadDelay = userPreloadDelay ?? router.options.defaultPreloadDelay ?? 0;
	const doPreload = import_react.useCallback(() => {
		router.preloadRoute({
			..._options,
			_builtLocation: next
		}).catch((err) => {
			console.warn(err);
			console.warn(preloadWarning);
		});
	}, [
		router,
		_options,
		next
	]);
	useIntersectionObserver(innerRef, import_react.useCallback((entry) => {
		if (entry?.isIntersecting) doPreload();
	}, [doPreload]), intersectionObserverOptions, { disabled: !!disabled || !(preload === "viewport") });
	import_react.useEffect(() => {
		if (hasRenderFetched.current) return;
		if (!disabled && preload === "render") {
			doPreload();
			hasRenderFetched.current = true;
		}
	}, [
		disabled,
		doPreload,
		preload
	]);
	const handleClick = (e) => {
		const elementTarget = e.currentTarget.getAttribute("target");
		const effectiveTarget = target !== void 0 ? target : elementTarget;
		if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!effectiveTarget || effectiveTarget === "_self") && e.button === 0) {
			e.preventDefault();
			(0, import_react_dom.flushSync)(() => {
				setIsTransitioning(true);
			});
			const unsub = router.subscribe("onResolved", () => {
				unsub();
				setIsTransitioning(false);
			});
			router.navigate({
				..._options,
				replace,
				resetScroll,
				hashScrollIntoView,
				startTransition,
				viewTransition,
				ignoreBlocker
			});
		}
	};
	if (externalLink) return {
		...propsSafeToSpread,
		ref: innerRef,
		href: externalLink,
		...children && { children },
		...target && { target },
		...disabled && { disabled },
		...style && { style },
		...className && { className },
		...onClick && { onClick },
		...onBlur && { onBlur },
		...onFocus && { onFocus },
		...onMouseEnter && { onMouseEnter },
		...onMouseLeave && { onMouseLeave },
		...onTouchStart && { onTouchStart }
	};
	const enqueueIntentPreload = (e) => {
		if (disabled || preload !== "intent") return;
		if (!preloadDelay) {
			doPreload();
			return;
		}
		const eventTarget = e.currentTarget;
		if (timeoutMap.has(eventTarget)) return;
		const id = setTimeout(() => {
			timeoutMap.delete(eventTarget);
			doPreload();
		}, preloadDelay);
		timeoutMap.set(eventTarget, id);
	};
	const handleTouchStart = (_) => {
		if (disabled || preload !== "intent") return;
		doPreload();
	};
	const handleLeave = (e) => {
		if (disabled || !preload || !preloadDelay) return;
		const eventTarget = e.currentTarget;
		const id = timeoutMap.get(eventTarget);
		if (id) {
			clearTimeout(id);
			timeoutMap.delete(eventTarget);
		}
	};
	return {
		...propsSafeToSpread,
		...resolvedActiveProps,
		...resolvedInactiveProps,
		href: hrefOption?.href,
		ref: innerRef,
		onClick: composeHandlers([onClick, handleClick]),
		onBlur: composeHandlers([onBlur, handleLeave]),
		onFocus: composeHandlers([onFocus, enqueueIntentPreload]),
		onMouseEnter: composeHandlers([onMouseEnter, enqueueIntentPreload]),
		onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
		onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
		disabled: !!disabled,
		target,
		...resolvedStyle && { style: resolvedStyle },
		...resolvedClassName && { className: resolvedClassName },
		...disabled && STATIC_DISABLED_PROPS,
		...isActive && STATIC_ACTIVE_PROPS,
		...isHydrated && isTransitioning && STATIC_TRANSITIONING_PROPS
	};
}
var STATIC_EMPTY_OBJECT = {};
var STATIC_ACTIVE_OBJECT = { className: "active" };
var STATIC_DISABLED_PROPS = {
	role: "link",
	"aria-disabled": true
};
var STATIC_ACTIVE_PROPS = {
	"data-status": "active",
	"aria-current": "page"
};
var STATIC_TRANSITIONING_PROPS = { "data-transitioning": "transitioning" };
var timeoutMap = /* @__PURE__ */ new WeakMap();
var intersectionObserverOptions = { rootMargin: "100px" };
var composeHandlers = (handlers) => (e) => {
	for (const handler of handlers) {
		if (!handler) continue;
		if (e.defaultPrevented) return;
		handler(e);
	}
};
function getHrefOption(publicHref, external, history, disabled) {
	if (disabled) return void 0;
	if (external) return {
		href: publicHref,
		external: true
	};
	return {
		href: history.createHref(publicHref) || "/",
		external: false
	};
}
function isSafeInternal(to) {
	if (typeof to !== "string") return false;
	const zero = to.charCodeAt(0);
	if (zero === 47) return to.charCodeAt(1) !== 47;
	return zero === 46;
}
/**
* A strongly-typed anchor component for declarative navigation.
* Handles path, search, hash and state updates with optional route preloading
* and active-state styling.
*
* Props:
* - `preload`: Controls route preloading (eg. 'intent', 'render', 'viewport', true/false)
* - `preloadDelay`: Delay in ms before preloading on hover
* - `activeProps`/`inactiveProps`: Additional props merged when link is active/inactive
* - `resetScroll`/`hashScrollIntoView`: Control scroll behavior on navigation
* - `viewTransition`/`startTransition`: Use View Transitions/React transitions for navigation
* - `ignoreBlocker`: Bypass registered blockers
*
* @returns An anchor-like element that navigates without full page reloads.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent
*/
var Link = import_react.forwardRef((props, ref) => {
	const { _asChild, ...rest } = props;
	const { type: _type, ...linkProps } = useLinkProps(rest, ref);
	const children = typeof rest.children === "function" ? rest.children({ isActive: linkProps["data-status"] === "active" }) : rest.children;
	if (!_asChild) {
		const { disabled: _, ...rest } = linkProps;
		return import_react.createElement("a", rest, children);
	}
	return import_react.createElement(_asChild, linkProps, children);
});
function isCtrlEvent(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/route.js
var Route$3 = class extends BaseRoute {
	/**
	* @deprecated Use the `createRoute` function instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a non-root Route instance for code-based routing.
*
* Use this to define a route that will be composed into a route tree
* (typically via a parent route's `addChildren`). If you're using file-based
* routing, prefer `createFileRoute`.
*
* @param options Route options (path, component, loader, context, etc.).
* @returns A Route instance to be attached to the route tree.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouteFunction
*/
function createRoute(options) {
	return new Route$3(options);
}
var RootRoute = class extends BaseRootRoute {
	/**
	* @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a root Route instance used to build your route tree.
*
* Typically paired with `createRouter({ routeTree })`. If you need to require
* a typed router context, use `createRootRouteWithContext` instead.
*
* @param options Root route options (component, error, pending, etc.).
* @returns A root route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRootRouteFunction
*/
function createRootRoute(options) {
	return new RootRoute(options);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/fileRoute.js
/**
* Creates a file-based Route factory for a given path.
*
* Used by TanStack Router's file-based routing to associate a file with a
* route. The returned function accepts standard route options. In normal usage
* the `path` string is inserted and maintained by the `tsr` generator.
*
* @param path File path literal for the route (usually auto-generated).
* @returns A function that accepts Route options and returns a Route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createFileRouteFunction
*/
function createFileRoute(path) {
	return new FileRoute(path, { silent: true }).createRoute;
}
/** 
@deprecated It's no longer recommended to use the `FileRoute` class directly.
Instead, use `createFileRoute('/path/to/file')(options)` to create a file route.
*/
var FileRoute = class {
	constructor(path, _opts) {
		this.path = path;
		this.createRoute = (options) => {
			const route = createRoute(options);
			route.isRoot = false;
			return route;
		};
		this.silent = _opts?.silent;
	}
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
/**
* Wrap a dynamic import to create a route component that supports
* `.preload()` and friendly reload-on-module-missing behavior.
*
* @param importer Function returning a module promise
* @param exportName Named export to use (default: `default`)
* @returns A lazy route component compatible with TanStack Router
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/lazyRouteComponentFunction
*/
function lazyRouteComponent(importer, exportName) {
	let loadPromise;
	let comp;
	let error;
	let reload;
	const load = () => {
		if (!loadPromise) loadPromise = importer().then((res) => {
			loadPromise = void 0;
			comp = res[exportName ?? "default"];
		}).catch((err) => {
			error = err;
			if (isModuleNotFoundError(error)) {
				if (error instanceof Error && typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
					const storageKey = `tanstack_router_reload:${error.message}`;
					if (!sessionStorage.getItem(storageKey)) {
						sessionStorage.setItem(storageKey, "1");
						reload = true;
					}
				}
			}
		});
		return loadPromise;
	};
	const lazyComp = function Lazy(props) {
		if (reload) {
			window.location.reload();
			throw new Promise(() => {});
		}
		if (error) throw error;
		if (!comp) if (reactUse) reactUse(load());
		else throw load();
		return import_react.createElement(comp, props);
	};
	lazyComp.preload = load;
	return lazyComp;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/routerStores.js
var getStoreFactory = (opts) => {
	return {
		createMutableStore: createNonReactiveMutableStore,
		createReadonlyStore: createNonReactiveReadonlyStore,
		batch: (fn) => fn()
	};
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/router.js
/**
* Creates a new Router instance for React.
*
* Pass the returned router to `RouterProvider` to enable routing.
* Notable options: `routeTree` (your route definitions) and `context`
* (required if the root route was created with `createRootRouteWithContext`).
*
* @param options Router options used to configure the router.
* @returns A Router instance to be provided to `RouterProvider`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouterFunction
*/
var createRouter = (options) => {
	return new Router(options);
};
var Router = class extends RouterCore {
	constructor(options) {
		super(options, getStoreFactory);
	}
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/Asset.js
var noopScriptHandler = () => {};
function setScriptAttrs(script, attrs) {
	if (!attrs) return;
	for (const [key, value] of Object.entries(attrs)) if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
}
function Asset(asset) {
	const { attrs, children, nonce, preventScriptHoist } = asset;
	switch (asset.tag) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
			...attrs,
			suppressHydrationWarning: true,
			children
		});
		case "meta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
			...attrs,
			suppressHydrationWarning: true
		});
		case "link": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			...attrs,
			precedence: attrs?.precedence ?? (attrs?.rel === "stylesheet" ? "default" : void 0),
			nonce,
			suppressHydrationWarning: true
		});
		case "style":
			if (asset.inlineCss && false);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
				...attrs,
				dangerouslySetInnerHTML: { __html: children },
				nonce
			});
		case "script": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Script, {
			attrs,
			preventScriptHoist,
			children
		});
		default: return null;
	}
}
function Script({ attrs, children, preventScriptHoist }) {
	useRouter();
	useHydrated();
	const dataScript = typeof attrs?.type === "string" && attrs.type !== "" && attrs.type !== "text/javascript" && attrs.type !== "module";
	import_react.useEffect(() => {
		if (dataScript) return;
		if (attrs?.src) {
			const normSrc = (() => {
				try {
					const base = document.baseURI || window.location.href;
					return new URL(attrs.src, base).href;
				} catch {
					return attrs.src;
				}
			})();
			for (const el of document.querySelectorAll("script[src]")) if (el.src === normSrc) return;
			const script = document.createElement("script");
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
		if (typeof children === "string") {
			const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
			const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
			for (const el of document.querySelectorAll("script:not([src])")) {
				if (!(el instanceof HTMLScriptElement)) continue;
				const sType = el.getAttribute("type") ?? "text/javascript";
				const sNonce = el.getAttribute("nonce") ?? void 0;
				if (el.textContent === children && sType === typeAttr && sNonce === nonceAttr) return;
			}
			const script = document.createElement("script");
			script.textContent = children;
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
	}, [
		attrs,
		children,
		dataScript
	]);
	if (attrs?.src) {
		if (!preventScriptHoist) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			suppressHydrationWarning: true
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			onLoad: noopScriptHandler,
			suppressHydrationWarning: true
		});
	}
	if (typeof children === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		...attrs,
		dangerouslySetInnerHTML: { __html: children },
		suppressHydrationWarning: true
	});
	return null;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/headContentUtils.js
function buildTagsFromMatches(router, nonce, matches, assetCrossOrigin) {
	const routeMeta = matches.map((match) => match.meta).filter((meta) => meta !== void 0);
	const resultMeta = [];
	const metaByAttribute = {};
	let title;
	for (let i = routeMeta.length - 1; i >= 0; i--) {
		const metas = routeMeta[i];
		for (let j = metas.length - 1; j >= 0; j--) {
			const m = metas[j];
			if (!m) continue;
			if (m.title) {
				if (!title) title = {
					tag: "title",
					children: m.title
				};
			} else if ("script:ld+json" in m) try {
				const json = JSON.stringify(m["script:ld+json"]);
				resultMeta.push({
					tag: "script",
					attrs: { type: "application/ld+json" },
					children: escapeHtml(json)
				});
			} catch {}
			else {
				const attribute = m.name ?? m.property;
				if (attribute) if (metaByAttribute[attribute]) continue;
				else metaByAttribute[attribute] = true;
				resultMeta.push({
					tag: "meta",
					attrs: {
						...m,
						nonce
					}
				});
			}
		}
	}
	if (title) resultMeta.push(title);
	if (nonce) resultMeta.push({
		tag: "meta",
		attrs: {
			property: "csp-nonce",
			content: nonce
		}
	});
	resultMeta.reverse();
	const constructedLinks = matches.flatMap((match) => match.links ?? []).filter((link) => link !== void 0).map((link) => ({
		tag: "link",
		attrs: {
			...link,
			nonce
		}
	}));
	const manifest = router.ssr?.manifest;
	const manifestCssTags = [];
	if (manifest) {
		matches.forEach((match) => {
			(manifest.routes[match.routeId]?.css)?.forEach((link) => {
				const resolvedLink = resolveManifestCssLink(link);
				manifestCssTags.push({
					tag: "link",
					attrs: {
						rel: "stylesheet",
						...resolvedLink,
						crossOrigin: getAssetCrossOrigin(assetCrossOrigin, "stylesheet") ?? resolvedLink.crossOrigin,
						suppressHydrationWarning: true,
						nonce
					}
				});
			});
		});
		if (manifest.inlineStyle) manifestCssTags.push({
			tag: "style",
			attrs: {
				...manifest.inlineStyle.attrs,
				nonce
			},
			children: manifest.inlineStyle.children,
			inlineCss: true
		});
	}
	const preloadLinks = [];
	if (manifest) matches.forEach((match) => {
		manifest.routes[match.routeId]?.preloads?.forEach((preload) => {
			preloadLinks.push({
				tag: "link",
				attrs: {
					...getScriptPreloadAttrs(manifest, preload, assetCrossOrigin),
					nonce
				}
			});
		});
	});
	const styles = matches.flatMap((match) => match.styles ?? []).filter((style) => style !== void 0).map(({ children, ...attrs }) => ({
		tag: "style",
		attrs: {
			...attrs,
			nonce
		},
		children
	}));
	const headScripts = matches.flatMap((match) => match.headScripts ?? []).filter((script) => script !== void 0).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			nonce
		},
		children
	}));
	const tags = [];
	appendUniqueUserTags(tags, resultMeta);
	tags.push(...preloadLinks);
	appendUniqueUserTags(tags, constructedLinks);
	tags.push(...manifestCssTags);
	appendUniqueUserTags(tags, styles);
	appendUniqueUserTags(tags, headScripts);
	return tags;
}
/**
* Build the list of head/link/meta/script tags to render for active matches.
* Used internally by `HeadContent`.
*/
var useTags = (assetCrossOrigin) => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	return buildTagsFromMatches(router, nonce, router.stores.matches.get(), assetCrossOrigin);
};
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/HeadContent.js
/**
* Render route-managed head tags (title, meta, links, styles, head scripts).
* Place inside the document head of your app shell.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/document-head-management
*/
function HeadContent(props) {
	const tags = useTags(props.assetCrossOrigin);
	const nonce = useRouter().options.ssr?.nonce;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tags.map((tag) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...tag,
		key: `tsr-meta-${JSON.stringify(tag)}`,
		nonce
	})) });
}
//#endregion
//#region node_modules/.pnpm/@tanstack+react-router@1.170.10_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/@tanstack/react-router/dist/esm/Scripts.js
/**
* Render body script tags collected from route matches and SSR manifests.
* Should be placed near the end of the document body.
*/
var Scripts = () => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	const getAssetScripts = (matches) => {
		const assetScripts = [];
		const manifest = router.ssr?.manifest;
		if (!manifest) return [];
		for (const match of matches) {
			const scripts = manifest.routes[match.routeId]?.scripts;
			if (!scripts) continue;
			for (const asset of scripts) assetScripts.push({
				tag: "script",
				attrs: {
					...asset.attrs,
					nonce
				},
				children: asset.children,
				...typeof asset.attrs?.src === "string" ? { preventScriptHoist: true } : {}
			});
		}
		return assetScripts;
	};
	const getScripts = (matches) => matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			suppressHydrationWarning: true,
			nonce
		},
		children
	}));
	{
		const activeMatches = router.stores.matches.get();
		const assetScripts = getAssetScripts(activeMatches);
		return renderScripts(router, getScripts(activeMatches), assetScripts);
	}
	const assetScripts = useStore(router.stores.matches, getAssetScripts, deepEqual);
	return renderScripts(router, useStore(router.stores.matches, getScripts, deepEqual), assetScripts);
};
function renderScripts(router, scripts, assetScripts) {
	const allScripts = [...scripts, ...assetScripts];
	if (router.serverSsr) {
		const serverBufferedScript = router.serverSsr.takeBufferedScripts();
		if (serverBufferedScript) allScripts.unshift(serverBufferedScript);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: allScripts.map((asset, i) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...asset,
		key: `tsr-scripts-${asset.tag}-${i}`
	})) });
}
//#endregion
//#region src/routes/__root.tsx
var Route$2 = createRootRoute({
	head: () => ({ meta: [
		{ charSet: "utf-8" },
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		},
		{ title: "Tanstack Start Effect" }
	] }),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistryProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })] });
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-iEi-z1Wp.js");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/ConfigProvider.js
/**
* Provides the data source layer for the `Config` module. A `ConfigProvider`
* knows how to load raw configuration nodes from a backing store (environment
* variables, JSON objects, `.env` files, file trees) and expose them through a
* uniform `Node` interface that `Config` schemas consume.
*
* ## Mental model
*
* - **Node** – a discriminated union (`Value | Record | Array`) that describes
*   what lives at a given path in the configuration tree.
* - **Path** – an array of string or numeric segments used to address a node
*   (e.g. `["database", "host"]`).
* - **ConfigProvider** – an object with a `load(path)` method that resolves a
*   path to a `Node | undefined`. Providers can be composed and transformed.
* - **Context.Reference** – `ConfigProvider` is registered as a reference
*   service that defaults to `fromEnv()`, so it works without explicit
*   provision.
* - **SourceError** – the typed error returned when a backing store is
*   unreadable (I/O failure, permission error, etc.).
*
* ## Common tasks
*
* - Read from environment variables → {@link fromEnv}
* - Read from a JSON / plain object → {@link fromUnknown}
* - Parse a `.env` string → {@link fromDotEnvContents}
* - Load a `.env` file → {@link fromDotEnv}
* - Read from a directory tree → {@link fromDir}
* - Build a custom provider → {@link make}
* - Fall back to another provider → {@link orElse}
* - Scope a provider under a prefix → {@link nested}
* - Convert path segments to `CONSTANT_CASE` → {@link constantCase}
* - Transform path segments arbitrarily → {@link mapInput}
* - Install a provider as a Layer → {@link layer} / {@link layerAdd}
*
* ## Gotchas
*
* - `fromEnv` joins path segments with `_` for lookup **and** splits env var
*   names on `_` to discover child keys. `DATABASE_HOST=x` is therefore
*   accessible at both `["DATABASE_HOST"]` and `["DATABASE", "HOST"]`.
* - Because of `_` splitting, querying a parent path like `["DATABASE"]`
*   returns a `Record` node with child key `"HOST"`, even if no env var
*   named `DATABASE` exists.
* - When using `fromEnv` with schemas that use camelCase keys, pipe the
*   provider through {@link constantCase} so `databaseHost` resolves to
*   `DATABASE_HOST`.
* - `orElse` only falls back when the primary provider returns `undefined`
*   (path not found). It does **not** catch `SourceError`.
* - `nested` prepends segments to the path *after* `mapInput` has run, so
*   the order of composition matters.
*
* ## Quickstart
*
* **Example** (Reading config from environment variables)
*
* ```ts
* import { Config, ConfigProvider, Effect } from "effect"
*
* const provider = ConfigProvider.fromEnv({
*   env: { APP_PORT: "3000", APP_HOST: "localhost" }
* })
*
* const port = Config.number("port")
*
* const program = port.parse(
*   provider.pipe(
*     ConfigProvider.nested("app"),
*     ConfigProvider.constantCase
*   )
* )
*
* // Effect.runSync(program) // 3000
* ```
*
* @see {@link make} – build a provider from a lookup function
* @see {@link fromEnv} – the default provider backed by `process.env`
* @see {@link fromUnknown} – provider backed by a plain JS object
*
* @since 4.0.0
*/
/**
* Creates a `Value` node representing a terminal string leaf.
*
* **When to use**
*
* Use when building nodes inside a custom `ConfigProvider`'s `get`
* callback.
*
* **Details**
*
* The function returns a new plain object.
*
* **Example** (Creating a value node)
*
* ```ts
* import { ConfigProvider } from "effect"
*
* const node = ConfigProvider.makeValue("3000")
* // { _tag: "Value", value: "3000" }
* ```
*
* @see {@link makeRecord} – for object-like containers
* @see {@link makeArray} – for array-like containers
*
* @category constructors
* @since 4.0.0
*/
function makeValue(value) {
	return {
		_tag: "Value",
		value
	};
}
/**
* Creates a `Record` node representing an object-like container with known
* child keys.
*
* **When to use**
*
* Use when describing a directory or JSON object inside a custom
* provider.
*
* **Details**
*
* The optional `value` allows a node to be both a container and a leaf at the
* same time (for example, an env var `A=x` that also has children `A_FOO` and
* `A_BAR`).
*
* **Example** (Creating a record node)
*
* ```ts
* import { ConfigProvider } from "effect"
*
* const node = ConfigProvider.makeRecord(new Set(["host", "port"]))
* // { _tag: "Record", keys: Set(["host", "port"]), value: undefined }
* ```
*
* @see {@link makeValue} – for terminal leaves
* @see {@link makeArray} – for array-like containers
*
* @category constructors
* @since 4.0.0
*/
function makeRecord(keys, value) {
	return {
		_tag: "Record",
		keys,
		value
	};
}
/**
* Creates an `Array` node representing an indexed container with a known
* length.
*
* **When to use**
*
* Use when describing a JSON array or a set of numerically-indexed env
* vars inside a custom provider.
*
* **Details**
*
* The optional `value` allows a node to be both a container and a leaf at the
* same time.
*
* **Example** (Creating an array node)
*
* ```ts
* import { ConfigProvider } from "effect"
*
* const node = ConfigProvider.makeArray(3)
* // { _tag: "Array", length: 3, value: undefined }
* ```
*
* @see {@link makeValue} – for terminal leaves
* @see {@link makeRecord} – for object-like containers
*
* @category constructors
* @since 4.0.0
*/
function makeArray(length, value) {
	return {
		_tag: "Array",
		length,
		value
	};
}
TaggedError("SourceError");
/**
* Context reference for the active raw configuration provider, registered in the context with a
* default value of `fromEnv()`. Because it is a `Context.Reference`, it is
* available without explicit provision; `Config` schemas automatically resolve
* it.
*
* **When to use**
*
* Use to override the provider for an entire program via
* `Effect.provideService(ConfigProvider.ConfigProvider, myProvider)`, or to
* retrieve the current provider inside an Effect with
* `yield* ConfigProvider.ConfigProvider`.
*
* **Example** (Providing a custom provider)
*
* ```ts
* import { ConfigProvider, Effect } from "effect"
*
* const provider = ConfigProvider.fromUnknown({ port: 8080 })
*
* const program = Effect.gen(function*() {
*   const current = yield* ConfigProvider.ConfigProvider
*   return current
* }).pipe(
*   Effect.provideService(ConfigProvider.ConfigProvider, provider)
* )
* ```
*
* @see {@link layer} – install a provider as a Layer
* @see {@link layerAdd} – add a fallback provider as a Layer
*
* @category services
* @since 2.0.0
*/
var ConfigProvider = /*#__PURE__*/ Reference("effect/ConfigProvider", { defaultValue: () => fromEnv() });
var Proto$2 = {
	...PipeInspectableProto,
	toJSON() {
		return { _id: "ConfigProvider" };
	}
};
/**
* Creates a `ConfigProvider` from a raw lookup function.
*
* **When to use**
*
* Use when implementing a provider backed by a custom store, such as a
* database, remote API, or in-memory map.
*
* **Details**
*
* The `get` callback receives a `Path` and must return
* `Effect<Node | undefined, SourceError>`. Return `undefined` when the path
* does not exist; fail with `SourceError` only for actual I/O errors.
*
* The optional `mapInput` and `prefix` parameters are wired into the
* resulting `load` method so that combinators like {@link mapInput} and
* {@link nested} can compose without wrapping `get`.
*
* **Example** (A simple in-memory provider)
*
* ```ts
* import { ConfigProvider, Effect } from "effect"
*
* const data: Record<string, string> = {
*   host: "localhost",
*   port: "5432"
* }
*
* const provider = ConfigProvider.make((path) => {
*   const key = path.join(".")
*   const value = data[key]
*   return Effect.succeed(
*     value !== undefined ? ConfigProvider.makeValue(value) : undefined
*   )
* })
* ```
*
* @see {@link fromEnv} – pre-built provider for environment variables
* @see {@link fromUnknown} – pre-built provider for JSON objects
*
* @category constructors
* @since 2.0.0
*/
function make$12(get, mapInput, prefix) {
	const self = Object.create(Proto$2);
	self.get = get;
	self.mapInput = mapInput;
	self.prefix = prefix;
	self.load = (path) => {
		if (mapInput) path = mapInput(path);
		if (prefix) path = [...prefix, ...path];
		return get(path);
	};
	return self;
}
/**
* Scopes a provider so that all lookups are prefixed with the given path
* segments.
*
* **When to use**
*
* Use to namespace config under a prefix like `"app"` or `"database"`, or
* to reuse the same provider shape for multiple sub-configs.
*
* **Details**
*
* Accepts a single string or a full `Path` array. Supports both data-last and
* data-first calling conventions.
*
* **Gotchas**
*
* The prefix is prepended after any `mapInput` transformation runs, so
* ordering matters when composing with {@link mapInput} or
* {@link constantCase}.
*
* **Example** (Nesting under a prefix)
*
* ```ts
* import { ConfigProvider } from "effect"
*
* const provider = ConfigProvider.fromEnv({
*   env: { APP_HOST: "localhost", APP_PORT: "3000" }
* })
*
* // Lookups for ["HOST"] now resolve to ["APP", "HOST"]
* const scoped = ConfigProvider.nested(provider, "APP")
* ```
*
* @see {@link mapInput} – for arbitrary path transformations
*
* @category combinators
* @since 2.0.0
*/
var nested$1 = /*#__PURE__*/ dual(2, (self, prefix) => {
	const path = typeof prefix === "string" ? [prefix] : prefix;
	return make$12(self.get, self.mapInput, self.prefix ? [...self.prefix, ...path] : path);
});
/**
* Creates a `ConfigProvider` backed by environment variables.
*
* **When to use**
*
* Use to read configuration from `process.env`, which is the default when
* no provider is explicitly set, or to pass a custom env record for testing or
* non-Node runtimes.
*
* **Details**
*
* Path segments are joined with `_` for direct lookup, and env var names are
* also split on `_` to build a trie for child key discovery. This means
* `DATABASE_HOST=localhost` is accessible at both path `["DATABASE_HOST"]`
* and `["DATABASE", "HOST"]`. If all immediate children of a trie node have
* purely numeric names, the node is reported as an `Array`; otherwise as a
* `Record`.
*
* The default environment merges `process.env` and `import.meta.env` (when
* available). Override by passing `{ env: { ... } }`.
*
* Never fails with `SourceError` — all lookups are synchronous.
*
* **Example** (Reading from a custom env record)
*
* ```ts
* import { Config, ConfigProvider, Effect } from "effect"
*
* const provider = ConfigProvider.fromEnv({
*   env: {
*     DATABASE_HOST: "localhost",
*     DATABASE_PORT: "5432"
*   }
* })
*
* const host = Config.string("HOST").parse(
*   provider.pipe(ConfigProvider.nested("DATABASE"))
* )
*
* // Effect.runSync(host) // "localhost"
* ```
*
* @see {@link fromUnknown} – for JSON objects
* @see {@link constantCase} – bridge camelCase keys to SCREAMING_SNAKE_CASE
*
* @category ConfigProviders
* @since 2.0.0
*/
function fromEnv(options) {
	const env = options?.env ?? {
		...globalThis?.process?.env,
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	};
	const trie = buildEnvTrie(env);
	return make$12((path) => succeed(nodeAtEnv(trie, env, path)));
}
function buildEnvTrie(env) {
	const root = {};
	for (const [name, value] of Object.entries(env)) {
		if (value === void 0) continue;
		const segments = name.split("_");
		let node = root;
		for (const seg of segments) {
			node.children ??= {};
			node = node.children[seg] ??= {};
		}
		node.value = value;
	}
	return root;
}
var NUMERIC_INDEX = /^(0|[1-9][0-9]*)$/;
function nodeAtEnv(trie, env, path) {
	const leafValue = env[path.map(String).join("_")];
	const trieNode = trieNodeAt(trie, path);
	const children = trieNode?.children ? Object.keys(trieNode.children) : [];
	if (children.length === 0) return leafValue === void 0 ? void 0 : makeValue(leafValue);
	if (children.every((k) => NUMERIC_INDEX.test(k))) return makeArray(Math.max(...children.map((k) => parseInt(k, 10))) + 1, leafValue);
	return makeRecord(new Set(children), leafValue);
}
function trieNodeAt(root, path) {
	if (path.length === 0) return root;
	let node = root;
	for (const seg of path) {
		node = node?.children?.[String(seg)];
		if (!node) return void 0;
	}
	return node;
}
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/Config.js
var TypeId$4 = "~effect/Config";
/**
* Represents the error type produced when config loading or validation fails.
*
* **When to use**
*
* Use when match on `error.cause._tag` to distinguish source failures from
*   validation failures.
* - Pass to {@link fail} to create a Config that always errors.
*
* **Details**
*
* Wraps either:
* - A `SourceError` — the provider could not read data (I/O failure).
* - A `SchemaError` — the data was found but did not match the schema
*   (wrong type, out of range, missing key, etc.).
*
* @see {@link orElse} – recover from a ConfigError
* @see {@link withDefault} – provide a fallback for missing-data errors
*
* @category errors
* @since 4.0.0
*/
var ConfigError = class {
	_tag = "ConfigError";
	name = "ConfigError";
	cause;
	constructor(cause) {
		this.cause = cause;
	}
	get message() {
		return this.cause.toString();
	}
	toString() {
		return `ConfigError(${this.message})`;
	}
};
var Proto$1 = {
	.../*#__PURE__*/ Prototype({
		label: "Config",
		evaluate(fiber) {
			return this.parse(fiber.getRef(ConfigProvider));
		}
	}),
	[TypeId$4]: TypeId$4,
	toJSON() {
		return { _id: "Config" };
	}
};
/**
* Creates a `Config` from a raw parsing function.
*
* **When to use**
*
* Use to build a custom config that cannot be expressed with {@link schema} or
* convenience constructors, or to compose configs programmatically.
*
* **Details**
*
* The `parse` callback receives a `ConfigProvider` and must return
* `Effect<T, ConfigError>`.
*
* **Example** (Custom config that reads two keys)
*
* ```ts
* import { Config, ConfigProvider, Effect } from "effect"
*
* const hostPort = Config.make((provider) =>
*   Effect.all({
*     host: Config.string("host").parse(provider),
*     port: Config.number("port").parse(provider)
*   })
* )
*
* const provider = ConfigProvider.fromUnknown({ host: "localhost", port: 3000 })
* // Effect.runSync(hostPort.parse(provider))
* // { host: "localhost", port: 3000 }
* ```
*
* @see {@link schema} – higher-level constructor using Schema codecs
*
* @category constructors
* @since 4.0.0
*/
function make$11(parse) {
	const self = Object.create(Proto$1);
	self.parse = parse;
	return self;
}
var dump = /*#__PURE__*/ fnUntraced(function* (provider, path) {
	const stat = yield* provider.load(path);
	if (stat === void 0) return void 0;
	switch (stat._tag) {
		case "Value": return stat.value;
		case "Record": {
			if (stat.value !== void 0) return stat.value;
			const out = {};
			for (const key of stat.keys) {
				const child = yield* dump(provider, [...path, key]);
				if (child !== void 0) out[key] = child;
			}
			return out;
		}
		case "Array": {
			if (stat.value !== void 0) return stat.value;
			const out = [];
			for (let i = 0; i < stat.length; i++) out.push(yield* dump(provider, [...path, i]));
			return out;
		}
	}
});
var recur = /*#__PURE__*/ fnUntraced(function* (ast, provider, path) {
	switch (ast._tag) {
		case "Objects": {
			const out = {};
			for (const ps of ast.propertySignatures) {
				const name = ps.name;
				if (typeof name === "string") {
					const value = yield* recur(ps.type, provider, [...path, name]);
					if (value !== void 0) out[name] = value;
				}
			}
			if (ast.indexSignatures.length > 0) {
				const stat = yield* provider.load(path);
				if (stat && stat._tag === "Record") for (const is of ast.indexSignatures) {
					const matches = _is(is.parameter);
					for (const key of stat.keys) if (!Object.hasOwn(out, key) && matches(key)) {
						const value = yield* recur(is.type, provider, [...path, key]);
						if (value !== void 0) out[key] = value;
					}
				}
			}
			return out;
		}
		case "Arrays": {
			const stat = yield* provider.load(path);
			if (stat && stat._tag === "Value") return stat.value;
			const out = [];
			for (let i = 0; i < ast.elements.length; i++) out.push(yield* recur(ast.elements[i], provider, [...path, i]));
			return out;
		}
		case "Union": return yield* dump(provider, path);
		case "Suspend": return yield* recur(ast.thunk(), provider, path);
		default: {
			const stat = yield* provider.load(path);
			if (stat === void 0) return void 0;
			if (stat._tag === "Value") return stat.value;
			if (stat._tag === "Record" && stat.value !== void 0) return stat.value;
			if (stat._tag === "Array" && stat.value !== void 0) return stat.value;
			return;
		}
	}
});
/**
* Creates a `Config<T>` from a `Schema.Codec`.
*
* **When to use**
*
* Use when reading structured or validated config (structs, arrays, unions, branded
*   types, etc.).
* - All convenience constructors (`string`, `number`, …) delegate to this.
*
* **Details**
*
* The optional `path` sets the root path segment(s) for the config lookup.
* Pass a single string for a flat key or an array for nested paths.
*
* The codec is used to decode the raw `StringTree` produced by the provider
* into `T`. Schema validation errors are wrapped in `ConfigError`.
*
* **Example** (Reading a structured config)
*
* ```ts
* import { Config, ConfigProvider, Effect, Schema } from "effect"
*
* const DbConfig = Config.schema(
*   Schema.Struct({
*     host: Schema.String,
*     port: Schema.Int
*   }),
*   "db"
* )
*
* const provider = ConfigProvider.fromUnknown({
*   db: { host: "localhost", port: 5432 }
* })
*
* // Effect.runSync(DbConfig.parse(provider))
* // { host: "localhost", port: 5432 }
* ```
*
* @see {@link string} / {@link number} / {@link boolean} – shortcuts for
*   single-value configs
*
* @category schemas
* @since 4.0.0
*/
function schema(codec, path) {
	const codecStringTree = toCodecStringTree(codec);
	const decodeUnknownEffect$2 = decodeUnknownEffect(codecStringTree);
	const codecStringTreeEncoded = toEncoded(codecStringTree.ast);
	const defaultPath = typeof path === "string" ? [path] : path ?? [];
	return make$11((provider) => {
		const path = provider.prefix ? [...provider.prefix, ...defaultPath] : defaultPath;
		return recur(codecStringTreeEncoded, provider, defaultPath).pipe(flatMapEager((tree) => decodeUnknownEffect$2(tree).pipe(mapErrorEager((issue) => new SchemaError(path.length > 0 ? new Pointer(path, issue) : issue)))), mapErrorEager((cause) => new ConfigError(cause)));
	});
}
/**
* Creates a config for a single string value.
*
* **When to use**
*
* Use when reading a single string env var or config key.
*
* **Details**
*
* Shortcut for `Config.schema(Schema.String, name)`.
*
* **Example** (Reading a string config)
*
* ```ts
* import { Config, ConfigProvider, Effect } from "effect"
*
* const host = Config.string("HOST")
*
* const provider = ConfigProvider.fromUnknown({ HOST: "localhost" })
* // Effect.runSync(host.parse(provider)) // "localhost"
* ```
*
* @see {@link nonEmptyString} – rejects empty strings
* @see {@link schema} – for more complex types
*
* @category constructors
* @since 2.0.0
*/
function string(name) {
	return schema(String$1, name);
}
/**
* Scopes a config under a named prefix.
*
* **When to use**
*
* Use when grouping related config keys under a common namespace (e.g.
*   `"database"`, `"redis"`).
* - Building reusable config fragments that callers nest at different paths.
*
* **Details**
*
* The prefix is prepended to every key the inner config reads. With
* `fromUnknown` this means an extra object level; with `fromEnv` it means
* a `_`-separated prefix on env var names.
*
* Multiple `nested` calls compose: the outermost name becomes the
* outermost path segment.
*
* **Example** (Nesting a struct config under `"database"`)
*
* ```ts
* import { Config, ConfigProvider, Effect } from "effect"
*
* const dbConfig = Config.all({
*   host: Config.string("host"),
*   port: Config.number("port")
* }).pipe(Config.nested("database"))
*
* const provider = ConfigProvider.fromUnknown({
*   database: { host: "localhost", port: "5432" }
* })
* // Effect.runSync(dbConfig.parse(provider))
* // { host: "localhost", port: 5432 }
* ```
*
* **Example** (Env vars with nested prefix)
*
* ```ts
* import { Config, ConfigProvider, Effect } from "effect"
*
* const host = Config.string("host").pipe(Config.nested("database"))
*
* const provider = ConfigProvider.fromEnv({
*   env: { database_host: "localhost" }
* })
* // Effect.runSync(host.parse(provider)) // "localhost"
* ```
*
* @see {@link all} – combine multiple configs into a struct
* @see {@link schema} – read structured config from a schema
*
* @category combinators
* @since 2.0.0
*/
var nested = /*#__PURE__*/ dual(2, (self, name) => make$11((provider) => self.parse(nested$1(provider, name))));
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/Crypto.js
/**
* The `Crypto` module provides a platform-agnostic service for cryptographic
* operations. Runtime packages such as `@effect/platform-node`,
* `@effect/platform-bun`, and `@effect/platform-browser` provide concrete
* implementations backed by the host platform's cryptography APIs.
*
* Use `Crypto` for cryptographic randomness, UUID generation, random values,
* and message digests. The base `Random` service is not cryptographically
* secure unless you replace it with a cryptographically secure implementation.
*
* **Example** (Providing a test Crypto service)
*
* ```ts
* import { Console, Crypto, Effect, Layer } from "effect"
*
* const TestCrypto = Layer.succeed(
*   Crypto.Crypto,
*   Crypto.make({
*     randomBytes: (size) => new Uint8Array(size),
*     digest: (_algorithm, data) => Effect.succeed(data)
*   })
* )
*
* const program = Effect.gen(function*() {
*   const crypto = yield* Crypto.Crypto
*   const id = yield* crypto.randomUUIDv4
*   yield* Console.log(`Created id: ${id}`)
* })
*
* Effect.runPromise(Effect.provide(program, TestCrypto))
* ```
*
* **Example** (Generating random bytes)
*
* ```ts
* import { Crypto, Effect, Layer } from "effect"
*
* const TestCrypto = Layer.succeed(
*   Crypto.Crypto,
*   Crypto.make({
*     randomBytes: (size) => new Uint8Array(size),
*     digest: (_algorithm, data) => Effect.succeed(data)
*   })
* )
*
* const program = Effect.gen(function*() {
*   const crypto = yield* Crypto.Crypto
*   return yield* crypto.randomBytes(32)
* })
*
* Effect.runPromise(Effect.provide(program, TestCrypto))
* ```
*
* @since 4.0.0
*/
var TypeId$3 = "~effect/platform/Crypto";
/**
* Service tag for platform cryptography.
*
* **When to use**
*
* Use when you need to provide or retrieve the full platform Crypto service
* from an effect's context.
*
* **Details**
*
* Providing this service supplies the cryptographic operations described by the
* `Crypto` interface.
*
* @see {@link make} for constructing a Crypto service from primitive operations
*
* @category services
* @since 4.0.0
*/
var Crypto$1 = /*#__PURE__*/ Service("effect/Crypto");
/**
* Creates a `Crypto` service from the primitive implementation, deriving the
* random generator helpers and UUID generation from those primitives.
*
* **When to use**
*
* Use to build a Crypto service for a platform integration, test layer, or
* custom runtime from primitive random-byte and digest operations.
*
* **Details**
*
* The constructor derives random numbers, booleans, integer ranges, shuffling,
* and UUID generation from `impl.randomBytes`. Digest operations delegate to
* `impl.digest`.
*
* **Gotchas**
*
* `impl.randomBytes` must return cryptographically secure bytes of the
* requested length. UUID formatting mutates the byte array returned for UUID
* generation, so the implementation should return a fresh array for each call.
*
* **Example** (Creating a Crypto service)
*
* ```ts
* import { Crypto, Effect, Layer } from "effect"
*
* const TestCrypto = Layer.succeed(
*   Crypto.Crypto,
*   Crypto.make({
*     randomBytes: (size) => new Uint8Array(size),
*     digest: (_algorithm, data) => Effect.succeed(data)
*   })
* )
* ```
*
* @category constructors
* @since 4.0.0
*/
var make$10 = (impl) => {
	const randomBytesUnsafe = impl.randomBytes;
	const randomBytes = (size) => map(validateSize("randomBytes", size), randomBytesUnsafe);
	const nextDoubleUnsafe = () => {
		const bytes = randomBytesUnsafe(7);
		return ((bytes[0] & 31) * 2 ** 48 + bytes[1] * 2 ** 40 + bytes[2] * 2 ** 32 + bytes[3] * 2 ** 24 + bytes[4] * 2 ** 16 + bytes[5] * 2 ** 8 + bytes[6]) / 2 ** 53;
	};
	const nextIntUnsafe = () => Math.floor(nextDoubleUnsafe() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER + 1)) + Number.MIN_SAFE_INTEGER;
	return Crypto$1.of({
		[TypeId$3]: TypeId$3,
		randomBytes,
		nextDoubleUnsafe,
		nextIntUnsafe,
		digest: impl.digest,
		random: sync(() => nextDoubleUnsafe()),
		randomBoolean: sync(() => nextDoubleUnsafe() > .5),
		randomInt: sync(() => nextIntUnsafe()),
		randomBetween: (min, max) => sync(() => nextDoubleUnsafe() * (max - min) + min),
		randomIntBetween(min, max, options) {
			const extra = options?.halfOpen === true ? 0 : 1;
			return sync(() => {
				const minInt = Math.ceil(min);
				const maxInt = Math.floor(max);
				return Math.floor(nextDoubleUnsafe() * (maxInt - minInt + extra)) + minInt;
			});
		},
		randomShuffle: (elements) => sync(() => {
			const buffer = Array.from(elements);
			for (let i = buffer.length - 1; i >= 1; i = i - 1) {
				const index = Math.min(i, Math.floor(nextDoubleUnsafe() * (i + 1)));
				const value = buffer[i];
				buffer[i] = buffer[index];
				buffer[index] = value;
			}
			return buffer;
		}),
		randomUUIDv4: sync(() => formatUUIDv4(randomBytesUnsafe(16))),
		randomUUIDv7: clockWith((clock) => succeed(formatUUIDv7(clock.currentTimeMillisUnsafe(), randomBytesUnsafe(16))))
	});
};
var validateSize = (method, size) => Number.isSafeInteger(size) && size >= 0 ? succeed(size) : fail(badArgument({
	module: "Crypto",
	method,
	description: "size must be a non-negative safe integer"
}));
var hex = (byte) => byte.toString(16).padStart(2, "0");
var formatUUID = (bytes) => {
	return [
		bytes.subarray(0, 4),
		bytes.subarray(4, 6),
		bytes.subarray(6, 8),
		bytes.subarray(8, 10),
		bytes.subarray(10, 16)
	].map((segment) => Array.from(segment, hex).join("")).join("-");
};
var formatUUIDv4 = (bytes) => {
	bytes[6] = bytes[6] & 15 | 64;
	bytes[8] = bytes[8] & 63 | 128;
	return formatUUID(bytes);
};
var maxUUIDv7Timestamp = 2 ** 48 - 1;
var formatUUIDv7 = (timestampMillis, bytes) => {
	const timestamp = Math.min(Math.max(0, Math.trunc(timestampMillis)), maxUUIDv7Timestamp);
	bytes[0] = Math.floor(timestamp / 2 ** 40);
	bytes[1] = Math.floor(timestamp / 2 ** 32) & 255;
	bytes[2] = Math.floor(timestamp / 2 ** 24) & 255;
	bytes[3] = Math.floor(timestamp / 2 ** 16) & 255;
	bytes[4] = Math.floor(timestamp / 2 ** 8) & 255;
	bytes[5] = timestamp & 255;
	bytes[6] = bytes[6] & 15 | 112;
	bytes[8] = bytes[8] & 63 | 128;
	return formatUUID(bytes);
};
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/SchemaRepresentation.js
var toJsonAnnotationsBlacklist = /*#__PURE__*/ new Set([
	...fromASTBlacklist,
	"expected",
	"contentMediaType",
	"contentSchema"
]);
/**
* Converts one or more Schema ASTs into a {@link MultiDocument}.
*
* **When to use**
*
* Use when you have multiple schemas that may share references.
*
* **Details**
*
* All schemas share a single `references` map.
*
* @see {@link MultiDocument}
* @see {@link fromAST}
*
* @category constructors
* @since 4.0.0
*/
var fromASTs = fromASTs$1;
/**
* Converts a {@link MultiDocument} to a Draft 2020-12 JSON Schema
* multi-document.
*
* **When to use**
*
* Use when you have multiple schemas sharing references.
*
* @see {@link MultiDocument}
* @see {@link toJsonSchemaDocument}
* @see {@link fromJsonSchemaMultiDocument}
*
* @category transforming
* @since 4.0.0
*/
var toJsonSchemaMultiDocument = toJsonSchemaMultiDocument$1;
[...toJsonAnnotationsBlacklist];
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/Stdio.js
/**
* Service contract for process standard input, output, error output, and
* command-line arguments.
*
* `Stdio` lets command-line programs depend on standard I/O through the Effect
* environment instead of reading from or writing to global process handles
* directly. The service exposes arguments as an `Effect`, stdout and stderr as
* `Sink`s that accept strings or bytes, and stdin as a byte `Stream`.
*
* **Mental model**
*
* Application code describes what it needs from standard I/O, and a runtime
* layer supplies the concrete streams. Platform packages provide real process
* implementations, while tests can use `Stdio.layerTest` to replace only the
* fields that matter for a scenario and keep the rest inert.
*
* **Common tasks**
*
* - Read command-line arguments from the service's `args` effect.
* - Write text or bytes by running values into the service's `stdout()` or
*   `stderr()` sinks.
* - Consume `stdin` as a stream of `Uint8Array` chunks.
* - Build deterministic tests with `Stdio.layerTest`.
*
* **Gotchas**
*
* Standard I/O is a platform capability. Reads and writes can fail with
* `PlatformError`, so handle failures in the Effect error channel instead of
* assuming the process streams are always available.
*
* @since 4.0.0
*/
/**
* Runtime identifier stored on `Stdio` service implementations.
*
* **Details**
*
* This marker is part of the runtime representation of `Stdio` service
* implementations.
*
* @category type IDs
* @since 4.0.0
*/
var TypeId$2 = "~effect/Stdio";
/**
* Service tag for process standard I/O.
*
* **When to use**
*
* Use when an effect needs command-line arguments or standard I/O streams
* supplied by its environment.
*
* @see {@link make} for constructing a `Stdio` service directly
* @see {@link layerTest} for a test layer with defaults and overrides
*
* @category services
* @since 4.0.0
*/
var Stdio = /*#__PURE__*/ Service(TypeId$2);
/**
* Creates a `Stdio` service implementation from the provided fields and
* attaches the `Stdio` type identifier.
*
* **When to use**
*
* Use to assemble a concrete `Stdio` service when you already have
* implementations for command-line arguments, standard output, standard error,
* and standard input.
*
* **Details**
*
* The returned service reuses the supplied fields unchanged and only adds the
* `Stdio` type identifier; it does not create a `Layer` or provide defaults.
*
* @see {@link layerTest} for a test layer with default fields that can be overridden
*
* @category constructors
* @since 4.0.0
*/
var make$9 = (options) => ({
	[TypeId$2]: TypeId$2,
	...options
});
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/Terminal.js
var TypeId$1 = "~effect/platform/Terminal";
ErrorClass("QuitError")({ _tag: /*#__PURE__*/ tag("QuitError") });
/**
* Service tag for command-line input and output services.
*
* **When to use**
*
* Use to access or provide platform terminal capabilities such as reading
* input, writing output, and inspecting terminal dimensions.
*
* @category services
* @since 4.0.0
*/
var Terminal = /*#__PURE__*/ Service("effect/platform/Terminal");
/**
* Creates a `Terminal` service implementation.
*
* **When to use**
*
* Use to construct a custom `Terminal` service implementation from concrete
* terminal capabilities when writing a platform adapter, test implementation,
* or custom runtime service.
*
* **Details**
*
* The implementation object supplies `columns`, `rows`, `readInput`,
* `readLine`, and `display`; `make` attaches the `Terminal` service marker so
* the result can be provided through the `Terminal` context service.
*
* @category constructors
* @since 4.0.0
*/
var make$8 = (impl) => Terminal.of({
	...impl,
	[TypeId$1]: TypeId$1
});
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/http/Etag.js
/**
* HTTP entity tag values and metadata-based generator layers.
*
* ETags are validators for a specific representation of a resource. Servers put
* them in `ETag` response headers so clients and intermediaries can revalidate
* cached content with `If-None-Match`, or protect writes with preconditions such
* as `If-Match`.
*
* **Mental model**
*
* A strong ETag represents byte-for-byte identity for the selected
* representation. A weak ETag represents a validator that is useful for cache
* revalidation but not for operations that require exact byte identity. The
* `Weak` and `Strong` models store the raw tag value; `toString` adds the
* required quotes and the `W/` prefix for weak tags.
*
* **Common tasks**
*
* - Format an `Etag` value for an HTTP header with `toString`.
* - Provide a `Generator` service with `layer` for strong metadata-derived tags.
* - Use `layerWeak` when size and modification time are good cache validators
*   but not a byte-for-byte guarantee.
*
* **Gotchas**
*
* The built-in generator derives tags only from file size and modification time.
* Choose the strong layer only when that metadata changes for every byte-level
* content change. This module formats ETags but does not parse incoming ETag
* headers or implement conditional request logic.
*
* @since 4.0.0
*/
/**
* Formats an `Etag` as an HTTP header value, including quotes and the `W/` prefix for weak tags.
*
* @category converting
* @since 4.0.0
*/
var toString$1 = (self) => {
	switch (self._tag) {
		case "Weak": return `W/"${self.value}"`;
		case "Strong": return `"${self.value}"`;
	}
};
/**
* Service for generating ETags from filesystem file information or Web `File`-like metadata.
*
* @category models
* @since 4.0.0
*/
var Generator = class extends Service()("effect/http/Etag/Generator") {};
var fromFileInfo = (info) => {
	const mtime = match(info.mtime, {
		onNone: () => "0",
		onSome: (mtime) => mtime.getTime().toString(16)
	});
	return `${info.size.toString(16)}-${mtime}`;
};
var fromFileWeb = (file) => {
	return `${file.size.toString(16)}-${file.lastModified.toString(16)}`;
};
/**
* Layer that provides a `Generator` which produces strong ETags from file size
* and modification time metadata.
*
* **When to use**
*
* Use when file size and modification time reliably change for every byte-level
* change and the consuming HTTP code needs strong ETags from the `Generator`
* service.
*
* **Gotchas**
*
* This layer marks metadata-derived tags as strong. If the underlying storage
* can update file contents without changing the recorded size or modification
* time, those tags can stop representing byte-for-byte identity.
*
* @see {@link layerWeak} for weak metadata-derived ETags when byte-for-byte identity is not required
* @see {@link Generator} for the service provided by this layer
*
* @category layers
* @since 4.0.0
*/
var layer$14 = /*#__PURE__*/ succeed$1(Generator)({
	fromFileInfo(info) {
		return sync(() => ({
			_tag: "Strong",
			value: fromFileInfo(info)
		}));
	},
	fromFileWeb(file) {
		return sync(() => ({
			_tag: "Strong",
			value: fromFileWeb(file)
		}));
	}
});
/**
* Layer that provides a `Generator` which produces weak ETags from file size and modification time metadata.
*
* @category layers
* @since 4.0.0
*/
var layerWeak = /*#__PURE__*/ succeed$1(Generator)({
	fromFileInfo(info) {
		return sync(() => ({
			_tag: "Weak",
			value: fromFileInfo(info)
		}));
	},
	fromFileWeb(file) {
		return sync(() => ({
			_tag: "Weak",
			value: fromFileWeb(file)
		}));
	}
});
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/http/HttpPlatform.js
/**
* Platform-specific support for serving files as HTTP server responses.
*
* `HttpPlatform` is the boundary between the portable HTTP response model and
* the runtime that knows how to stream bytes from the host platform. Server
* code uses this service when it needs to return local files, static assets,
* downloads, byte ranges, or Web `File`-like values without constructing the
* response body by hand.
*
* The helpers in this module enrich those responses with file metadata such as
* `etag`, `last-modified`, and content length where available. Path-based
* responses require `FileSystem` and can fail with `PlatformError` while
* inspecting or streaming the file; `File`-like responses use the Web
* `ReadableStream` and `lastModified` metadata exposed by the value.
*
* Provide `layer` when the default streaming implementation is suitable, or
* use `make` to plug in a runtime-specific response constructor. The default
* layer supplies weak ETag generation itself, but the surrounding runtime still
* needs to provide the `FileSystem` service and run the resulting
* `HttpServerResponse` on an HTTP server adapter that understands Effect
* streams.
*
* @since 4.0.0
*/
/**
* Service for platform-specific HTTP response helpers, including file-backed server responses.
*
* @category services
* @since 4.0.0
*/
var HttpPlatform = class extends Service()("effect/http/HttpPlatform") {};
/**
* Creates an `HttpPlatform` service from platform-specific file response constructors, using `FileSystem` and `Etag.Generator`.
*
* @category constructors
* @since 4.0.0
*/
var make$7 = /*#__PURE__*/ fnUntraced(function* (impl) {
	const fs = yield* FileSystem;
	const etagGen = yield* Generator;
	return HttpPlatform.of({
		fileResponse: fnUntraced(function* (path, options) {
			const info = yield* fs.stat(path);
			const etag = yield* etagGen.fromFileInfo(info);
			const start = Number(options?.offset ?? 0);
			const end = options?.bytesToRead !== void 0 ? start + Number(options.bytesToRead) : void 0;
			const headers = set(options?.headers ? fromInput(options.headers) : empty, "etag", toString$1(etag));
			if (isSome(info.mtime)) headers["last-modified"] = info.mtime.value.toUTCString();
			const contentLength = end !== void 0 ? end - start : Number(info.size) - start;
			return impl.fileResponse(path, options?.status ?? 200, options?.statusText, headers, start, end, contentLength);
		}),
		fileWebResponse(file, options) {
			return map(etagGen.fromFileWeb(file), (etag) => {
				const headers = merge(options?.headers ? fromInput(options.headers) : empty, fromRecordUnsafe({
					etag: toString$1(etag),
					"last-modified": new Date(file.lastModified).toUTCString()
				}));
				return impl.fileWebResponse(file, options?.status ?? 200, options?.statusText, headers, options);
			});
		}
	});
});
//#endregion
//#region node_modules/.pnpm/mime@4.1.0/node_modules/mime/dist/types/other.js
var types$1 = {
	"application/prs.cww": ["cww"],
	"application/prs.xsf+xml": ["xsf"],
	"application/vnd.1000minds.decision-model+xml": ["1km"],
	"application/vnd.3gpp.pic-bw-large": ["plb"],
	"application/vnd.3gpp.pic-bw-small": ["psb"],
	"application/vnd.3gpp.pic-bw-var": ["pvb"],
	"application/vnd.3gpp2.tcap": ["tcap"],
	"application/vnd.3m.post-it-notes": ["pwn"],
	"application/vnd.accpac.simply.aso": ["aso"],
	"application/vnd.accpac.simply.imp": ["imp"],
	"application/vnd.acucobol": ["acu"],
	"application/vnd.acucorp": ["atc", "acutc"],
	"application/vnd.adobe.air-application-installer-package+zip": ["air"],
	"application/vnd.adobe.formscentral.fcdt": ["fcdt"],
	"application/vnd.adobe.fxp": ["fxp", "fxpl"],
	"application/vnd.adobe.xdp+xml": ["xdp"],
	"application/vnd.adobe.xfdf": ["*xfdf"],
	"application/vnd.age": ["age"],
	"application/vnd.ahead.space": ["ahead"],
	"application/vnd.airzip.filesecure.azf": ["azf"],
	"application/vnd.airzip.filesecure.azs": ["azs"],
	"application/vnd.amazon.ebook": ["azw"],
	"application/vnd.americandynamics.acc": ["acc"],
	"application/vnd.amiga.ami": ["ami"],
	"application/vnd.android.package-archive": ["apk"],
	"application/vnd.anser-web-certificate-issue-initiation": ["cii"],
	"application/vnd.anser-web-funds-transfer-initiation": ["fti"],
	"application/vnd.antix.game-component": ["atx"],
	"application/vnd.apple.installer+xml": ["mpkg"],
	"application/vnd.apple.keynote": ["key"],
	"application/vnd.apple.mpegurl": ["m3u8"],
	"application/vnd.apple.numbers": ["numbers"],
	"application/vnd.apple.pages": ["pages"],
	"application/vnd.apple.pkpass": ["pkpass"],
	"application/vnd.aristanetworks.swi": ["swi"],
	"application/vnd.astraea-software.iota": ["iota"],
	"application/vnd.audiograph": ["aep"],
	"application/vnd.autodesk.fbx": ["fbx"],
	"application/vnd.balsamiq.bmml+xml": ["bmml"],
	"application/vnd.blueice.multipass": ["mpm"],
	"application/vnd.bmi": ["bmi"],
	"application/vnd.businessobjects": ["rep"],
	"application/vnd.chemdraw+xml": ["cdxml"],
	"application/vnd.chipnuts.karaoke-mmd": ["mmd"],
	"application/vnd.cinderella": ["cdy"],
	"application/vnd.citationstyles.style+xml": ["csl"],
	"application/vnd.claymore": ["cla"],
	"application/vnd.cloanto.rp9": ["rp9"],
	"application/vnd.clonk.c4group": [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	],
	"application/vnd.cluetrust.cartomobile-config": ["c11amc"],
	"application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
	"application/vnd.commonspace": ["csp"],
	"application/vnd.contact.cmsg": ["cdbcmsg"],
	"application/vnd.cosmocaller": ["cmc"],
	"application/vnd.crick.clicker": ["clkx"],
	"application/vnd.crick.clicker.keyboard": ["clkk"],
	"application/vnd.crick.clicker.palette": ["clkp"],
	"application/vnd.crick.clicker.template": ["clkt"],
	"application/vnd.crick.clicker.wordbank": ["clkw"],
	"application/vnd.criticaltools.wbs+xml": ["wbs"],
	"application/vnd.ctc-posml": ["pml"],
	"application/vnd.cups-ppd": ["ppd"],
	"application/vnd.curl.car": ["car"],
	"application/vnd.curl.pcurl": ["pcurl"],
	"application/vnd.dart": ["dart"],
	"application/vnd.data-vision.rdz": ["rdz"],
	"application/vnd.dbf": ["dbf"],
	"application/vnd.dcmp+xml": ["dcmp"],
	"application/vnd.dece.data": [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	],
	"application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
	"application/vnd.dece.unspecified": ["uvx", "uvvx"],
	"application/vnd.dece.zip": ["uvz", "uvvz"],
	"application/vnd.denovo.fcselayout-link": ["fe_launch"],
	"application/vnd.dna": ["dna"],
	"application/vnd.dolby.mlp": ["mlp"],
	"application/vnd.dpgraph": ["dpg"],
	"application/vnd.dreamfactory": ["dfac"],
	"application/vnd.ds-keypoint": ["kpxx"],
	"application/vnd.dvb.ait": ["ait"],
	"application/vnd.dvb.service": ["svc"],
	"application/vnd.dynageo": ["geo"],
	"application/vnd.ecowin.chart": ["mag"],
	"application/vnd.enliven": ["nml"],
	"application/vnd.epson.esf": ["esf"],
	"application/vnd.epson.msf": ["msf"],
	"application/vnd.epson.quickanime": ["qam"],
	"application/vnd.epson.salt": ["slt"],
	"application/vnd.epson.ssf": ["ssf"],
	"application/vnd.eszigno3+xml": ["es3", "et3"],
	"application/vnd.ezpix-album": ["ez2"],
	"application/vnd.ezpix-package": ["ez3"],
	"application/vnd.fdf": ["*fdf"],
	"application/vnd.fdsn.mseed": ["mseed"],
	"application/vnd.fdsn.seed": ["seed", "dataless"],
	"application/vnd.flographit": ["gph"],
	"application/vnd.fluxtime.clip": ["ftc"],
	"application/vnd.framemaker": [
		"fm",
		"frame",
		"maker",
		"book"
	],
	"application/vnd.frogans.fnc": ["fnc"],
	"application/vnd.frogans.ltf": ["ltf"],
	"application/vnd.fsc.weblaunch": ["fsc"],
	"application/vnd.fujitsu.oasys": ["oas"],
	"application/vnd.fujitsu.oasys2": ["oa2"],
	"application/vnd.fujitsu.oasys3": ["oa3"],
	"application/vnd.fujitsu.oasysgp": ["fg5"],
	"application/vnd.fujitsu.oasysprs": ["bh2"],
	"application/vnd.fujixerox.ddd": ["ddd"],
	"application/vnd.fujixerox.docuworks": ["xdw"],
	"application/vnd.fujixerox.docuworks.binder": ["xbd"],
	"application/vnd.fuzzysheet": ["fzs"],
	"application/vnd.genomatix.tuxedo": ["txd"],
	"application/vnd.geogebra.file": ["ggb"],
	"application/vnd.geogebra.slides": ["ggs"],
	"application/vnd.geogebra.tool": ["ggt"],
	"application/vnd.geometry-explorer": ["gex", "gre"],
	"application/vnd.geonext": ["gxt"],
	"application/vnd.geoplan": ["g2w"],
	"application/vnd.geospace": ["g3w"],
	"application/vnd.gmx": ["gmx"],
	"application/vnd.google-apps.document": ["gdoc"],
	"application/vnd.google-apps.drawing": ["gdraw"],
	"application/vnd.google-apps.form": ["gform"],
	"application/vnd.google-apps.jam": ["gjam"],
	"application/vnd.google-apps.map": ["gmap"],
	"application/vnd.google-apps.presentation": ["gslides"],
	"application/vnd.google-apps.script": ["gscript"],
	"application/vnd.google-apps.site": ["gsite"],
	"application/vnd.google-apps.spreadsheet": ["gsheet"],
	"application/vnd.google-earth.kml+xml": ["kml"],
	"application/vnd.google-earth.kmz": ["kmz"],
	"application/vnd.gov.sk.xmldatacontainer+xml": ["xdcf"],
	"application/vnd.grafeq": ["gqf", "gqs"],
	"application/vnd.groove-account": ["gac"],
	"application/vnd.groove-help": ["ghf"],
	"application/vnd.groove-identity-message": ["gim"],
	"application/vnd.groove-injector": ["grv"],
	"application/vnd.groove-tool-message": ["gtm"],
	"application/vnd.groove-tool-template": ["tpl"],
	"application/vnd.groove-vcard": ["vcg"],
	"application/vnd.hal+xml": ["hal"],
	"application/vnd.handheld-entertainment+xml": ["zmm"],
	"application/vnd.hbci": ["hbci"],
	"application/vnd.hhe.lesson-player": ["les"],
	"application/vnd.hp-hpgl": ["hpgl"],
	"application/vnd.hp-hpid": ["hpid"],
	"application/vnd.hp-hps": ["hps"],
	"application/vnd.hp-jlyt": ["jlt"],
	"application/vnd.hp-pcl": ["pcl"],
	"application/vnd.hp-pclxl": ["pclxl"],
	"application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
	"application/vnd.ibm.minipay": ["mpy"],
	"application/vnd.ibm.modcap": [
		"afp",
		"listafp",
		"list3820"
	],
	"application/vnd.ibm.rights-management": ["irm"],
	"application/vnd.ibm.secure-container": ["sc"],
	"application/vnd.iccprofile": ["icc", "icm"],
	"application/vnd.igloader": ["igl"],
	"application/vnd.immervision-ivp": ["ivp"],
	"application/vnd.immervision-ivu": ["ivu"],
	"application/vnd.insors.igm": ["igm"],
	"application/vnd.intercon.formnet": ["xpw", "xpx"],
	"application/vnd.intergeo": ["i2g"],
	"application/vnd.intu.qbo": ["qbo"],
	"application/vnd.intu.qfx": ["qfx"],
	"application/vnd.ipunplugged.rcprofile": ["rcprofile"],
	"application/vnd.irepository.package+xml": ["irp"],
	"application/vnd.is-xpr": ["xpr"],
	"application/vnd.isac.fcs": ["fcs"],
	"application/vnd.jam": ["jam"],
	"application/vnd.jcp.javame.midlet-rms": ["rms"],
	"application/vnd.jisp": ["jisp"],
	"application/vnd.joost.joda-archive": ["joda"],
	"application/vnd.kahootz": ["ktz", "ktr"],
	"application/vnd.kde.karbon": ["karbon"],
	"application/vnd.kde.kchart": ["chrt"],
	"application/vnd.kde.kformula": ["kfo"],
	"application/vnd.kde.kivio": ["flw"],
	"application/vnd.kde.kontour": ["kon"],
	"application/vnd.kde.kpresenter": ["kpr", "kpt"],
	"application/vnd.kde.kspread": ["ksp"],
	"application/vnd.kde.kword": ["kwd", "kwt"],
	"application/vnd.kenameaapp": ["htke"],
	"application/vnd.kidspiration": ["kia"],
	"application/vnd.kinar": ["kne", "knp"],
	"application/vnd.koan": [
		"skp",
		"skd",
		"skt",
		"skm"
	],
	"application/vnd.kodak-descriptor": ["sse"],
	"application/vnd.las.las+xml": ["lasxml"],
	"application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
	"application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
	"application/vnd.lotus-1-2-3": ["123"],
	"application/vnd.lotus-approach": ["apr"],
	"application/vnd.lotus-freelance": ["pre"],
	"application/vnd.lotus-notes": ["nsf"],
	"application/vnd.lotus-organizer": ["org"],
	"application/vnd.lotus-screencam": ["scm"],
	"application/vnd.lotus-wordpro": ["lwp"],
	"application/vnd.macports.portpkg": ["portpkg"],
	"application/vnd.mapbox-vector-tile": ["mvt"],
	"application/vnd.mcd": ["mcd"],
	"application/vnd.medcalcdata": ["mc1"],
	"application/vnd.mediastation.cdkey": ["cdkey"],
	"application/vnd.mfer": ["mwf"],
	"application/vnd.mfmp": ["mfm"],
	"application/vnd.micrografx.flo": ["flo"],
	"application/vnd.micrografx.igx": ["igx"],
	"application/vnd.mif": ["mif"],
	"application/vnd.mobius.daf": ["daf"],
	"application/vnd.mobius.dis": ["dis"],
	"application/vnd.mobius.mbk": ["mbk"],
	"application/vnd.mobius.mqy": ["mqy"],
	"application/vnd.mobius.msl": ["msl"],
	"application/vnd.mobius.plc": ["plc"],
	"application/vnd.mobius.txf": ["txf"],
	"application/vnd.mophun.application": ["mpn"],
	"application/vnd.mophun.certificate": ["mpc"],
	"application/vnd.mozilla.xul+xml": ["xul"],
	"application/vnd.ms-artgalry": ["cil"],
	"application/vnd.ms-cab-compressed": ["cab"],
	"application/vnd.ms-excel": [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	],
	"application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
	"application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
	"application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
	"application/vnd.ms-fontobject": ["eot"],
	"application/vnd.ms-htmlhelp": ["chm"],
	"application/vnd.ms-ims": ["ims"],
	"application/vnd.ms-lrm": ["lrm"],
	"application/vnd.ms-officetheme": ["thmx"],
	"application/vnd.ms-outlook": ["msg"],
	"application/vnd.ms-pki.seccat": ["cat"],
	"application/vnd.ms-pki.stl": ["*stl"],
	"application/vnd.ms-powerpoint": [
		"ppt",
		"pps",
		"pot"
	],
	"application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
	"application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
	"application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
	"application/vnd.ms-project": ["*mpp", "mpt"],
	"application/vnd.ms-visio.viewer": ["vdx"],
	"application/vnd.ms-word.document.macroenabled.12": ["docm"],
	"application/vnd.ms-word.template.macroenabled.12": ["dotm"],
	"application/vnd.ms-works": [
		"wps",
		"wks",
		"wcm",
		"wdb"
	],
	"application/vnd.ms-wpl": ["wpl"],
	"application/vnd.ms-xpsdocument": ["xps"],
	"application/vnd.mseq": ["mseq"],
	"application/vnd.musician": ["mus"],
	"application/vnd.muvee.style": ["msty"],
	"application/vnd.mynfc": ["taglet"],
	"application/vnd.nato.bindingdataobject+xml": ["bdo"],
	"application/vnd.neurolanguage.nlu": ["nlu"],
	"application/vnd.nitf": ["ntf", "nitf"],
	"application/vnd.noblenet-directory": ["nnd"],
	"application/vnd.noblenet-sealer": ["nns"],
	"application/vnd.noblenet-web": ["nnw"],
	"application/vnd.nokia.n-gage.ac+xml": ["*ac"],
	"application/vnd.nokia.n-gage.data": ["ngdat"],
	"application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
	"application/vnd.nokia.radio-preset": ["rpst"],
	"application/vnd.nokia.radio-presets": ["rpss"],
	"application/vnd.novadigm.edm": ["edm"],
	"application/vnd.novadigm.edx": ["edx"],
	"application/vnd.novadigm.ext": ["ext"],
	"application/vnd.oasis.opendocument.chart": ["odc"],
	"application/vnd.oasis.opendocument.chart-template": ["otc"],
	"application/vnd.oasis.opendocument.database": ["odb"],
	"application/vnd.oasis.opendocument.formula": ["odf"],
	"application/vnd.oasis.opendocument.formula-template": ["odft"],
	"application/vnd.oasis.opendocument.graphics": ["odg"],
	"application/vnd.oasis.opendocument.graphics-template": ["otg"],
	"application/vnd.oasis.opendocument.image": ["odi"],
	"application/vnd.oasis.opendocument.image-template": ["oti"],
	"application/vnd.oasis.opendocument.presentation": ["odp"],
	"application/vnd.oasis.opendocument.presentation-template": ["otp"],
	"application/vnd.oasis.opendocument.spreadsheet": ["ods"],
	"application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
	"application/vnd.oasis.opendocument.text": ["odt"],
	"application/vnd.oasis.opendocument.text-master": ["odm"],
	"application/vnd.oasis.opendocument.text-template": ["ott"],
	"application/vnd.oasis.opendocument.text-web": ["oth"],
	"application/vnd.olpc-sugar": ["xo"],
	"application/vnd.oma.dd2+xml": ["dd2"],
	"application/vnd.openblox.game+xml": ["obgx"],
	"application/vnd.openofficeorg.extension": ["oxt"],
	"application/vnd.openstreetmap.data+xml": ["osm"],
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"],
	"application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"],
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"],
	"application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"],
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"],
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"],
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"],
	"application/vnd.osgeo.mapguide.package": ["mgp"],
	"application/vnd.osgi.dp": ["dp"],
	"application/vnd.osgi.subsystem": ["esa"],
	"application/vnd.palm": [
		"pdb",
		"pqa",
		"oprc"
	],
	"application/vnd.pawaafile": ["paw"],
	"application/vnd.pg.format": ["str"],
	"application/vnd.pg.osasli": ["ei6"],
	"application/vnd.picsel": ["efif"],
	"application/vnd.pmi.widget": ["wg"],
	"application/vnd.pocketlearn": ["plf"],
	"application/vnd.powerbuilder6": ["pbd"],
	"application/vnd.previewsystems.box": ["box"],
	"application/vnd.procrate.brushset": ["brushset"],
	"application/vnd.procreate.brush": ["brush"],
	"application/vnd.procreate.dream": ["drm"],
	"application/vnd.proteus.magazine": ["mgz"],
	"application/vnd.publishare-delta-tree": ["qps"],
	"application/vnd.pvi.ptid1": ["ptid"],
	"application/vnd.pwg-xhtml-print+xml": ["xhtm"],
	"application/vnd.quark.quarkxpress": [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	],
	"application/vnd.rar": ["rar"],
	"application/vnd.realvnc.bed": ["bed"],
	"application/vnd.recordare.musicxml": ["mxl"],
	"application/vnd.recordare.musicxml+xml": ["musicxml"],
	"application/vnd.rig.cryptonote": ["cryptonote"],
	"application/vnd.rim.cod": ["cod"],
	"application/vnd.rn-realmedia": ["rm"],
	"application/vnd.rn-realmedia-vbr": ["rmvb"],
	"application/vnd.route66.link66+xml": ["link66"],
	"application/vnd.sailingtracker.track": ["st"],
	"application/vnd.seemail": ["see"],
	"application/vnd.sema": ["sema"],
	"application/vnd.semd": ["semd"],
	"application/vnd.semf": ["semf"],
	"application/vnd.shana.informed.formdata": ["ifm"],
	"application/vnd.shana.informed.formtemplate": ["itp"],
	"application/vnd.shana.informed.interchange": ["iif"],
	"application/vnd.shana.informed.package": ["ipk"],
	"application/vnd.simtech-mindmapper": ["twd", "twds"],
	"application/vnd.smaf": ["mmf"],
	"application/vnd.smart.teacher": ["teacher"],
	"application/vnd.software602.filler.form+xml": ["fo"],
	"application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
	"application/vnd.spotfire.dxp": ["dxp"],
	"application/vnd.spotfire.sfs": ["sfs"],
	"application/vnd.stardivision.calc": ["sdc"],
	"application/vnd.stardivision.draw": ["sda"],
	"application/vnd.stardivision.impress": ["sdd"],
	"application/vnd.stardivision.math": ["smf"],
	"application/vnd.stardivision.writer": ["sdw", "vor"],
	"application/vnd.stardivision.writer-global": ["sgl"],
	"application/vnd.stepmania.package": ["smzip"],
	"application/vnd.stepmania.stepchart": ["sm"],
	"application/vnd.sun.wadl+xml": ["wadl"],
	"application/vnd.sun.xml.calc": ["sxc"],
	"application/vnd.sun.xml.calc.template": ["stc"],
	"application/vnd.sun.xml.draw": ["sxd"],
	"application/vnd.sun.xml.draw.template": ["std"],
	"application/vnd.sun.xml.impress": ["sxi"],
	"application/vnd.sun.xml.impress.template": ["sti"],
	"application/vnd.sun.xml.math": ["sxm"],
	"application/vnd.sun.xml.writer": ["sxw"],
	"application/vnd.sun.xml.writer.global": ["sxg"],
	"application/vnd.sun.xml.writer.template": ["stw"],
	"application/vnd.sus-calendar": ["sus", "susp"],
	"application/vnd.svd": ["svd"],
	"application/vnd.symbian.install": ["sis", "sisx"],
	"application/vnd.syncml+xml": ["xsm"],
	"application/vnd.syncml.dm+wbxml": ["bdm"],
	"application/vnd.syncml.dm+xml": ["xdm"],
	"application/vnd.syncml.dmddf+xml": ["ddf"],
	"application/vnd.tao.intent-module-archive": ["tao"],
	"application/vnd.tcpdump.pcap": [
		"pcap",
		"cap",
		"dmp"
	],
	"application/vnd.tmobile-livetv": ["tmo"],
	"application/vnd.trid.tpt": ["tpt"],
	"application/vnd.triscape.mxs": ["mxs"],
	"application/vnd.trueapp": ["tra"],
	"application/vnd.ufdl": ["ufd", "ufdl"],
	"application/vnd.uiq.theme": ["utz"],
	"application/vnd.umajin": ["umj"],
	"application/vnd.unity": ["unityweb"],
	"application/vnd.uoml+xml": ["uoml", "uo"],
	"application/vnd.vcx": ["vcx"],
	"application/vnd.visio": [
		"vsd",
		"vst",
		"vss",
		"vsw",
		"vsdx",
		"vtx"
	],
	"application/vnd.visionary": ["vis"],
	"application/vnd.vsf": ["vsf"],
	"application/vnd.wap.wbxml": ["wbxml"],
	"application/vnd.wap.wmlc": ["wmlc"],
	"application/vnd.wap.wmlscriptc": ["wmlsc"],
	"application/vnd.webturbo": ["wtb"],
	"application/vnd.wolfram.player": ["nbp"],
	"application/vnd.wordperfect": ["wpd"],
	"application/vnd.wqd": ["wqd"],
	"application/vnd.wt.stf": ["stf"],
	"application/vnd.xara": ["xar"],
	"application/vnd.xfdl": ["xfdl"],
	"application/vnd.yamaha.hv-dic": ["hvd"],
	"application/vnd.yamaha.hv-script": ["hvs"],
	"application/vnd.yamaha.hv-voice": ["hvp"],
	"application/vnd.yamaha.openscoreformat": ["osf"],
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
	"application/vnd.yamaha.smaf-audio": ["saf"],
	"application/vnd.yamaha.smaf-phrase": ["spf"],
	"application/vnd.yellowriver-custom-menu": ["cmp"],
	"application/vnd.zul": ["zir", "zirz"],
	"application/vnd.zzazz.deck+xml": ["zaz"],
	"application/x-7z-compressed": ["7z"],
	"application/x-abiword": ["abw"],
	"application/x-ace-compressed": ["ace"],
	"application/x-apple-diskimage": ["*dmg"],
	"application/x-arj": ["arj"],
	"application/x-authorware-bin": [
		"aab",
		"x32",
		"u32",
		"vox"
	],
	"application/x-authorware-map": ["aam"],
	"application/x-authorware-seg": ["aas"],
	"application/x-bcpio": ["bcpio"],
	"application/x-bdoc": ["*bdoc"],
	"application/x-bittorrent": ["torrent"],
	"application/x-blender": ["blend"],
	"application/x-blorb": ["blb", "blorb"],
	"application/x-bzip": ["bz"],
	"application/x-bzip2": ["bz2", "boz"],
	"application/x-cbr": [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	],
	"application/x-cdlink": ["vcd"],
	"application/x-cfs-compressed": ["cfs"],
	"application/x-chat": ["chat"],
	"application/x-chess-pgn": ["pgn"],
	"application/x-chrome-extension": ["crx"],
	"application/x-cocoa": ["cco"],
	"application/x-compressed": ["*rar"],
	"application/x-conference": ["nsc"],
	"application/x-cpio": ["cpio"],
	"application/x-csh": ["csh"],
	"application/x-debian-package": ["*deb", "udeb"],
	"application/x-dgc-compressed": ["dgc"],
	"application/x-director": [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	],
	"application/x-doom": ["wad"],
	"application/x-dtbncx+xml": ["ncx"],
	"application/x-dtbook+xml": ["dtb"],
	"application/x-dtbresource+xml": ["res"],
	"application/x-dvi": ["dvi"],
	"application/x-envoy": ["evy"],
	"application/x-eva": ["eva"],
	"application/x-font-bdf": ["bdf"],
	"application/x-font-ghostscript": ["gsf"],
	"application/x-font-linux-psf": ["psf"],
	"application/x-font-pcf": ["pcf"],
	"application/x-font-snf": ["snf"],
	"application/x-font-type1": [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	],
	"application/x-freearc": ["arc"],
	"application/x-futuresplash": ["spl"],
	"application/x-gca-compressed": ["gca"],
	"application/x-glulx": ["ulx"],
	"application/x-gnumeric": ["gnumeric"],
	"application/x-gramps-xml": ["gramps"],
	"application/x-gtar": ["gtar"],
	"application/x-hdf": ["hdf"],
	"application/x-httpd-php": ["php"],
	"application/x-install-instructions": ["install"],
	"application/x-ipynb+json": ["ipynb"],
	"application/x-iso9660-image": ["*iso"],
	"application/x-iwork-keynote-sffkey": ["*key"],
	"application/x-iwork-numbers-sffnumbers": ["*numbers"],
	"application/x-iwork-pages-sffpages": ["*pages"],
	"application/x-java-archive-diff": ["jardiff"],
	"application/x-java-jnlp-file": ["jnlp"],
	"application/x-keepass2": ["kdbx"],
	"application/x-latex": ["latex"],
	"application/x-lua-bytecode": ["luac"],
	"application/x-lzh-compressed": ["lzh", "lha"],
	"application/x-makeself": ["run"],
	"application/x-mie": ["mie"],
	"application/x-mobipocket-ebook": ["*prc", "mobi"],
	"application/x-ms-application": ["application"],
	"application/x-ms-shortcut": ["lnk"],
	"application/x-ms-wmd": ["wmd"],
	"application/x-ms-wmz": ["wmz"],
	"application/x-ms-xbap": ["xbap"],
	"application/x-msaccess": ["mdb"],
	"application/x-msbinder": ["obd"],
	"application/x-mscardfile": ["crd"],
	"application/x-msclip": ["clp"],
	"application/x-msdos-program": ["*exe"],
	"application/x-msdownload": [
		"*exe",
		"*dll",
		"com",
		"bat",
		"*msi"
	],
	"application/x-msmediaview": [
		"mvb",
		"m13",
		"m14"
	],
	"application/x-msmetafile": [
		"*wmf",
		"*wmz",
		"*emf",
		"emz"
	],
	"application/x-msmoney": ["mny"],
	"application/x-mspublisher": ["pub"],
	"application/x-msschedule": ["scd"],
	"application/x-msterminal": ["trm"],
	"application/x-mswrite": ["wri"],
	"application/x-netcdf": ["nc", "cdf"],
	"application/x-ns-proxy-autoconfig": ["pac"],
	"application/x-nzb": ["nzb"],
	"application/x-perl": ["pl", "pm"],
	"application/x-pilot": ["*prc", "*pdb"],
	"application/x-pkcs12": ["p12", "pfx"],
	"application/x-pkcs7-certificates": ["p7b", "spc"],
	"application/x-pkcs7-certreqresp": ["p7r"],
	"application/x-rar-compressed": ["*rar"],
	"application/x-redhat-package-manager": ["rpm"],
	"application/x-research-info-systems": ["ris"],
	"application/x-sea": ["sea"],
	"application/x-sh": ["sh"],
	"application/x-shar": ["shar"],
	"application/x-shockwave-flash": ["swf"],
	"application/x-silverlight-app": ["xap"],
	"application/x-sql": ["*sql"],
	"application/x-stuffit": ["sit"],
	"application/x-stuffitx": ["sitx"],
	"application/x-subrip": ["srt"],
	"application/x-sv4cpio": ["sv4cpio"],
	"application/x-sv4crc": ["sv4crc"],
	"application/x-t3vm-image": ["t3"],
	"application/x-tads": ["gam"],
	"application/x-tar": ["tar"],
	"application/x-tcl": ["tcl", "tk"],
	"application/x-tex": ["tex"],
	"application/x-tex-tfm": ["tfm"],
	"application/x-texinfo": ["texinfo", "texi"],
	"application/x-tgif": ["*obj"],
	"application/x-ustar": ["ustar"],
	"application/x-virtualbox-hdd": ["hdd"],
	"application/x-virtualbox-ova": ["ova"],
	"application/x-virtualbox-ovf": ["ovf"],
	"application/x-virtualbox-vbox": ["vbox"],
	"application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
	"application/x-virtualbox-vdi": ["vdi"],
	"application/x-virtualbox-vhd": ["vhd"],
	"application/x-virtualbox-vmdk": ["vmdk"],
	"application/x-wais-source": ["src"],
	"application/x-web-app-manifest+json": ["webapp"],
	"application/x-x509-ca-cert": [
		"der",
		"crt",
		"pem"
	],
	"application/x-xfig": ["fig"],
	"application/x-xliff+xml": ["*xlf"],
	"application/x-xpinstall": ["xpi"],
	"application/x-xz": ["xz"],
	"application/x-zip-compressed": ["*zip"],
	"application/x-zmachine": [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	],
	"audio/vnd.dece.audio": ["uva", "uvva"],
	"audio/vnd.digital-winds": ["eol"],
	"audio/vnd.dra": ["dra"],
	"audio/vnd.dts": ["dts"],
	"audio/vnd.dts.hd": ["dtshd"],
	"audio/vnd.lucent.voice": ["lvp"],
	"audio/vnd.ms-playready.media.pya": ["pya"],
	"audio/vnd.nuera.ecelp4800": ["ecelp4800"],
	"audio/vnd.nuera.ecelp7470": ["ecelp7470"],
	"audio/vnd.nuera.ecelp9600": ["ecelp9600"],
	"audio/vnd.rip": ["rip"],
	"audio/x-aac": ["*aac"],
	"audio/x-aiff": [
		"aif",
		"aiff",
		"aifc"
	],
	"audio/x-caf": ["caf"],
	"audio/x-flac": ["flac"],
	"audio/x-m4a": ["*m4a"],
	"audio/x-matroska": ["mka"],
	"audio/x-mpegurl": ["m3u"],
	"audio/x-ms-wax": ["wax"],
	"audio/x-ms-wma": ["wma"],
	"audio/x-pn-realaudio": ["ram", "ra"],
	"audio/x-pn-realaudio-plugin": ["rmp"],
	"audio/x-realaudio": ["*ra"],
	"audio/x-wav": ["*wav"],
	"chemical/x-cdx": ["cdx"],
	"chemical/x-cif": ["cif"],
	"chemical/x-cmdf": ["cmdf"],
	"chemical/x-cml": ["cml"],
	"chemical/x-csml": ["csml"],
	"chemical/x-xyz": ["xyz"],
	"image/prs.btif": ["btif", "btf"],
	"image/prs.pti": ["pti"],
	"image/vnd.adobe.photoshop": ["psd"],
	"image/vnd.airzip.accelerator.azv": ["azv"],
	"image/vnd.blockfact.facti": ["facti"],
	"image/vnd.dece.graphic": [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	],
	"image/vnd.djvu": ["djvu", "djv"],
	"image/vnd.dvb.subtitle": ["*sub"],
	"image/vnd.dwg": ["dwg"],
	"image/vnd.dxf": ["dxf"],
	"image/vnd.fastbidsheet": ["fbs"],
	"image/vnd.fpx": ["fpx"],
	"image/vnd.fst": ["fst"],
	"image/vnd.fujixerox.edmics-mmr": ["mmr"],
	"image/vnd.fujixerox.edmics-rlc": ["rlc"],
	"image/vnd.microsoft.icon": ["ico"],
	"image/vnd.ms-dds": ["dds"],
	"image/vnd.ms-modi": ["mdi"],
	"image/vnd.ms-photo": ["wdp"],
	"image/vnd.net-fpx": ["npx"],
	"image/vnd.pco.b16": ["b16"],
	"image/vnd.tencent.tap": ["tap"],
	"image/vnd.valve.source.texture": ["vtf"],
	"image/vnd.wap.wbmp": ["wbmp"],
	"image/vnd.xiff": ["xif"],
	"image/vnd.zbrush.pcx": ["pcx"],
	"image/x-3ds": ["3ds"],
	"image/x-adobe-dng": ["dng"],
	"image/x-cmu-raster": ["ras"],
	"image/x-cmx": ["cmx"],
	"image/x-freehand": [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	],
	"image/x-icon": ["*ico"],
	"image/x-jng": ["jng"],
	"image/x-mrsid-image": ["sid"],
	"image/x-ms-bmp": ["*bmp"],
	"image/x-pcx": ["*pcx"],
	"image/x-pict": ["pic", "pct"],
	"image/x-portable-anymap": ["pnm"],
	"image/x-portable-bitmap": ["pbm"],
	"image/x-portable-graymap": ["pgm"],
	"image/x-portable-pixmap": ["ppm"],
	"image/x-rgb": ["rgb"],
	"image/x-tga": ["tga"],
	"image/x-xbitmap": ["xbm"],
	"image/x-xpixmap": ["xpm"],
	"image/x-xwindowdump": ["xwd"],
	"message/vnd.wfa.wsc": ["wsc"],
	"model/vnd.bary": ["bary"],
	"model/vnd.cld": ["cld"],
	"model/vnd.collada+xml": ["dae"],
	"model/vnd.dwf": ["dwf"],
	"model/vnd.gdl": ["gdl"],
	"model/vnd.gtw": ["gtw"],
	"model/vnd.mts": ["*mts"],
	"model/vnd.opengex": ["ogex"],
	"model/vnd.parasolid.transmit.binary": ["x_b"],
	"model/vnd.parasolid.transmit.text": ["x_t"],
	"model/vnd.pytha.pyox": ["pyo", "pyox"],
	"model/vnd.sap.vds": ["vds"],
	"model/vnd.usda": ["usda"],
	"model/vnd.usdz+zip": ["usdz"],
	"model/vnd.valve.source.compiled-map": ["bsp"],
	"model/vnd.vtu": ["vtu"],
	"text/prs.lines.tag": ["dsc"],
	"text/vnd.curl": ["curl"],
	"text/vnd.curl.dcurl": ["dcurl"],
	"text/vnd.curl.mcurl": ["mcurl"],
	"text/vnd.curl.scurl": ["scurl"],
	"text/vnd.dvb.subtitle": ["sub"],
	"text/vnd.familysearch.gedcom": ["ged"],
	"text/vnd.fly": ["fly"],
	"text/vnd.fmi.flexstor": ["flx"],
	"text/vnd.graphviz": ["gv"],
	"text/vnd.in3d.3dml": ["3dml"],
	"text/vnd.in3d.spot": ["spot"],
	"text/vnd.sun.j2me.app-descriptor": ["jad"],
	"text/vnd.wap.wml": ["wml"],
	"text/vnd.wap.wmlscript": ["wmls"],
	"text/x-asm": ["s", "asm"],
	"text/x-c": [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	],
	"text/x-component": ["htc"],
	"text/x-fortran": [
		"f",
		"for",
		"f77",
		"f90"
	],
	"text/x-handlebars-template": ["hbs"],
	"text/x-java-source": ["java"],
	"text/x-lua": ["lua"],
	"text/x-markdown": ["mkd"],
	"text/x-nfo": ["nfo"],
	"text/x-opml": ["opml"],
	"text/x-org": ["*org"],
	"text/x-pascal": ["p", "pas"],
	"text/x-processing": ["pde"],
	"text/x-sass": ["sass"],
	"text/x-scss": ["scss"],
	"text/x-setext": ["etx"],
	"text/x-sfv": ["sfv"],
	"text/x-suse-ymp": ["ymp"],
	"text/x-uuencode": ["uu"],
	"text/x-vcalendar": ["vcs"],
	"text/x-vcard": ["vcf"],
	"video/vnd.dece.hd": ["uvh", "uvvh"],
	"video/vnd.dece.mobile": ["uvm", "uvvm"],
	"video/vnd.dece.pd": ["uvp", "uvvp"],
	"video/vnd.dece.sd": ["uvs", "uvvs"],
	"video/vnd.dece.video": ["uvv", "uvvv"],
	"video/vnd.dvb.file": ["dvb"],
	"video/vnd.fvt": ["fvt"],
	"video/vnd.mpegurl": ["mxu", "m4u"],
	"video/vnd.ms-playready.media.pyv": ["pyv"],
	"video/vnd.uvvu.mp4": ["uvu", "uvvu"],
	"video/vnd.vivo": ["viv"],
	"video/x-f4v": ["f4v"],
	"video/x-fli": ["fli"],
	"video/x-flv": ["flv"],
	"video/x-m4v": ["m4v"],
	"video/x-matroska": [
		"mkv",
		"mk3d",
		"mks"
	],
	"video/x-mng": ["mng"],
	"video/x-ms-asf": ["asf", "asx"],
	"video/x-ms-vob": ["vob"],
	"video/x-ms-wm": ["wm"],
	"video/x-ms-wmv": ["wmv"],
	"video/x-ms-wmx": ["wmx"],
	"video/x-ms-wvx": ["wvx"],
	"video/x-msvideo": ["avi"],
	"video/x-sgi-movie": ["movie"],
	"video/x-smv": ["smv"],
	"x-conference/x-cooltalk": ["ice"]
};
Object.freeze(types$1);
//#endregion
//#region node_modules/.pnpm/mime@4.1.0/node_modules/mime/dist/types/standard.js
var types = {
	"application/andrew-inset": ["ez"],
	"application/appinstaller": ["appinstaller"],
	"application/applixware": ["aw"],
	"application/appx": ["appx"],
	"application/appxbundle": ["appxbundle"],
	"application/atom+xml": ["atom"],
	"application/atomcat+xml": ["atomcat"],
	"application/atomdeleted+xml": ["atomdeleted"],
	"application/atomsvc+xml": ["atomsvc"],
	"application/atsc-dwd+xml": ["dwd"],
	"application/atsc-held+xml": ["held"],
	"application/atsc-rsat+xml": ["rsat"],
	"application/automationml-aml+xml": ["aml"],
	"application/automationml-amlx+zip": ["amlx"],
	"application/bdoc": ["bdoc"],
	"application/calendar+xml": ["xcs"],
	"application/ccxml+xml": ["ccxml"],
	"application/cdfx+xml": ["cdfx"],
	"application/cdmi-capability": ["cdmia"],
	"application/cdmi-container": ["cdmic"],
	"application/cdmi-domain": ["cdmid"],
	"application/cdmi-object": ["cdmio"],
	"application/cdmi-queue": ["cdmiq"],
	"application/cpl+xml": ["cpl"],
	"application/cu-seeme": ["cu"],
	"application/cwl": ["cwl"],
	"application/dash+xml": ["mpd"],
	"application/dash-patch+xml": ["mpp"],
	"application/davmount+xml": ["davmount"],
	"application/dicom": ["dcm"],
	"application/docbook+xml": ["dbk"],
	"application/dssc+der": ["dssc"],
	"application/dssc+xml": ["xdssc"],
	"application/ecmascript": ["ecma"],
	"application/emma+xml": ["emma"],
	"application/emotionml+xml": ["emotionml"],
	"application/epub+zip": ["epub"],
	"application/exi": ["exi"],
	"application/express": ["exp"],
	"application/fdf": ["fdf"],
	"application/fdt+xml": ["fdt"],
	"application/font-tdpfr": ["pfr"],
	"application/geo+json": ["geojson"],
	"application/gml+xml": ["gml"],
	"application/gpx+xml": ["gpx"],
	"application/gxf": ["gxf"],
	"application/gzip": ["gz"],
	"application/hjson": ["hjson"],
	"application/hyperstudio": ["stk"],
	"application/inkml+xml": ["ink", "inkml"],
	"application/ipfix": ["ipfix"],
	"application/its+xml": ["its"],
	"application/java-archive": [
		"jar",
		"war",
		"ear"
	],
	"application/java-serialized-object": ["ser"],
	"application/java-vm": ["class"],
	"application/javascript": ["*js"],
	"application/json": ["json", "map"],
	"application/json5": ["json5"],
	"application/jsonml+json": ["jsonml"],
	"application/ld+json": ["jsonld"],
	"application/lgr+xml": ["lgr"],
	"application/lost+xml": ["lostxml"],
	"application/mac-binhex40": ["hqx"],
	"application/mac-compactpro": ["cpt"],
	"application/mads+xml": ["mads"],
	"application/manifest+json": ["webmanifest"],
	"application/marc": ["mrc"],
	"application/marcxml+xml": ["mrcx"],
	"application/mathematica": [
		"ma",
		"nb",
		"mb"
	],
	"application/mathml+xml": ["mathml"],
	"application/mbox": ["mbox"],
	"application/media-policy-dataset+xml": ["mpf"],
	"application/mediaservercontrol+xml": ["mscml"],
	"application/metalink+xml": ["metalink"],
	"application/metalink4+xml": ["meta4"],
	"application/mets+xml": ["mets"],
	"application/mmt-aei+xml": ["maei"],
	"application/mmt-usd+xml": ["musd"],
	"application/mods+xml": ["mods"],
	"application/mp21": ["m21", "mp21"],
	"application/mp4": [
		"*mp4",
		"*mpg4",
		"mp4s",
		"m4p"
	],
	"application/msix": ["msix"],
	"application/msixbundle": ["msixbundle"],
	"application/msword": ["doc", "dot"],
	"application/mxf": ["mxf"],
	"application/n-quads": ["nq"],
	"application/n-triples": ["nt"],
	"application/node": ["cjs"],
	"application/octet-stream": [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	],
	"application/oda": ["oda"],
	"application/oebps-package+xml": ["opf"],
	"application/ogg": ["ogx"],
	"application/omdoc+xml": ["omdoc"],
	"application/onenote": [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg",
		"one",
		"onea"
	],
	"application/oxps": ["oxps"],
	"application/p2p-overlay+xml": ["relo"],
	"application/patch-ops-error+xml": ["xer"],
	"application/pdf": ["pdf"],
	"application/pgp-encrypted": ["pgp"],
	"application/pgp-keys": ["asc"],
	"application/pgp-signature": ["sig", "*asc"],
	"application/pics-rules": ["prf"],
	"application/pkcs10": ["p10"],
	"application/pkcs7-mime": ["p7m", "p7c"],
	"application/pkcs7-signature": ["p7s"],
	"application/pkcs8": ["p8"],
	"application/pkix-attr-cert": ["ac"],
	"application/pkix-cert": ["cer"],
	"application/pkix-crl": ["crl"],
	"application/pkix-pkipath": ["pkipath"],
	"application/pkixcmp": ["pki"],
	"application/pls+xml": ["pls"],
	"application/postscript": [
		"ai",
		"eps",
		"ps"
	],
	"application/provenance+xml": ["provx"],
	"application/pskc+xml": ["pskcxml"],
	"application/raml+yaml": ["raml"],
	"application/rdf+xml": ["rdf", "owl"],
	"application/reginfo+xml": ["rif"],
	"application/relax-ng-compact-syntax": ["rnc"],
	"application/resource-lists+xml": ["rl"],
	"application/resource-lists-diff+xml": ["rld"],
	"application/rls-services+xml": ["rs"],
	"application/route-apd+xml": ["rapd"],
	"application/route-s-tsid+xml": ["sls"],
	"application/route-usd+xml": ["rusd"],
	"application/rpki-ghostbusters": ["gbr"],
	"application/rpki-manifest": ["mft"],
	"application/rpki-roa": ["roa"],
	"application/rsd+xml": ["rsd"],
	"application/rss+xml": ["rss"],
	"application/rtf": ["rtf"],
	"application/sbml+xml": ["sbml"],
	"application/scvp-cv-request": ["scq"],
	"application/scvp-cv-response": ["scs"],
	"application/scvp-vp-request": ["spq"],
	"application/scvp-vp-response": ["spp"],
	"application/sdp": ["sdp"],
	"application/senml+xml": ["senmlx"],
	"application/sensml+xml": ["sensmlx"],
	"application/set-payment-initiation": ["setpay"],
	"application/set-registration-initiation": ["setreg"],
	"application/shf+xml": ["shf"],
	"application/sieve": ["siv", "sieve"],
	"application/smil+xml": ["smi", "smil"],
	"application/sparql-query": ["rq"],
	"application/sparql-results+xml": ["srx"],
	"application/sql": ["sql"],
	"application/srgs": ["gram"],
	"application/srgs+xml": ["grxml"],
	"application/sru+xml": ["sru"],
	"application/ssdl+xml": ["ssdl"],
	"application/ssml+xml": ["ssml"],
	"application/swid+xml": ["swidtag"],
	"application/tei+xml": ["tei", "teicorpus"],
	"application/thraud+xml": ["tfi"],
	"application/timestamped-data": ["tsd"],
	"application/toml": ["toml"],
	"application/trig": ["trig"],
	"application/ttml+xml": ["ttml"],
	"application/ubjson": ["ubj"],
	"application/urc-ressheet+xml": ["rsheet"],
	"application/urc-targetdesc+xml": ["td"],
	"application/voicexml+xml": ["vxml"],
	"application/wasm": ["wasm"],
	"application/watcherinfo+xml": ["wif"],
	"application/widget": ["wgt"],
	"application/winhlp": ["hlp"],
	"application/wsdl+xml": ["wsdl"],
	"application/wspolicy+xml": ["wspolicy"],
	"application/xaml+xml": ["xaml"],
	"application/xcap-att+xml": ["xav"],
	"application/xcap-caps+xml": ["xca"],
	"application/xcap-diff+xml": ["xdf"],
	"application/xcap-el+xml": ["xel"],
	"application/xcap-ns+xml": ["xns"],
	"application/xenc+xml": ["xenc"],
	"application/xfdf": ["xfdf"],
	"application/xhtml+xml": ["xhtml", "xht"],
	"application/xliff+xml": ["xlf"],
	"application/xml": [
		"xml",
		"xsl",
		"xsd",
		"rng"
	],
	"application/xml-dtd": ["dtd"],
	"application/xop+xml": ["xop"],
	"application/xproc+xml": ["xpl"],
	"application/xslt+xml": ["*xsl", "xslt"],
	"application/xspf+xml": ["xspf"],
	"application/xv+xml": [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	],
	"application/yang": ["yang"],
	"application/yin+xml": ["yin"],
	"application/zip": ["zip"],
	"application/zip+dotlottie": ["lottie"],
	"audio/3gpp": ["*3gpp"],
	"audio/aac": ["adts", "aac"],
	"audio/adpcm": ["adp"],
	"audio/amr": ["amr"],
	"audio/basic": ["au", "snd"],
	"audio/midi": [
		"mid",
		"midi",
		"kar",
		"rmi"
	],
	"audio/mobile-xmf": ["mxmf"],
	"audio/mp3": ["*mp3"],
	"audio/mp4": [
		"m4a",
		"mp4a",
		"m4b"
	],
	"audio/mpeg": [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	],
	"audio/ogg": [
		"oga",
		"ogg",
		"spx",
		"opus"
	],
	"audio/s3m": ["s3m"],
	"audio/silk": ["sil"],
	"audio/wav": ["wav"],
	"audio/wave": ["*wav"],
	"audio/webm": ["weba"],
	"audio/xm": ["xm"],
	"font/collection": ["ttc"],
	"font/otf": ["otf"],
	"font/ttf": ["ttf"],
	"font/woff": ["woff"],
	"font/woff2": ["woff2"],
	"image/aces": ["exr"],
	"image/apng": ["apng"],
	"image/avci": ["avci"],
	"image/avcs": ["avcs"],
	"image/avif": ["avif"],
	"image/bmp": ["bmp", "dib"],
	"image/cgm": ["cgm"],
	"image/dicom-rle": ["drle"],
	"image/dpx": ["dpx"],
	"image/emf": ["emf"],
	"image/fits": ["fits"],
	"image/g3fax": ["g3"],
	"image/gif": ["gif"],
	"image/heic": ["heic"],
	"image/heic-sequence": ["heics"],
	"image/heif": ["heif"],
	"image/heif-sequence": ["heifs"],
	"image/hej2k": ["hej2"],
	"image/ief": ["ief"],
	"image/jaii": ["jaii"],
	"image/jais": ["jais"],
	"image/jls": ["jls"],
	"image/jp2": ["jp2", "jpg2"],
	"image/jpeg": [
		"jpg",
		"jpeg",
		"jpe"
	],
	"image/jph": ["jph"],
	"image/jphc": ["jhc"],
	"image/jpm": ["jpm", "jpgm"],
	"image/jpx": ["jpx", "jpf"],
	"image/jxl": ["jxl"],
	"image/jxr": ["jxr"],
	"image/jxra": ["jxra"],
	"image/jxrs": ["jxrs"],
	"image/jxs": ["jxs"],
	"image/jxsc": ["jxsc"],
	"image/jxsi": ["jxsi"],
	"image/jxss": ["jxss"],
	"image/ktx": ["ktx"],
	"image/ktx2": ["ktx2"],
	"image/pjpeg": ["jfif"],
	"image/png": ["png"],
	"image/sgi": ["sgi"],
	"image/svg+xml": ["svg", "svgz"],
	"image/t38": ["t38"],
	"image/tiff": ["tif", "tiff"],
	"image/tiff-fx": ["tfx"],
	"image/webp": ["webp"],
	"image/wmf": ["wmf"],
	"message/disposition-notification": ["disposition-notification"],
	"message/global": ["u8msg"],
	"message/global-delivery-status": ["u8dsn"],
	"message/global-disposition-notification": ["u8mdn"],
	"message/global-headers": ["u8hdr"],
	"message/rfc822": [
		"eml",
		"mime",
		"mht",
		"mhtml"
	],
	"model/3mf": ["3mf"],
	"model/gltf+json": ["gltf"],
	"model/gltf-binary": ["glb"],
	"model/iges": ["igs", "iges"],
	"model/jt": ["jt"],
	"model/mesh": [
		"msh",
		"mesh",
		"silo"
	],
	"model/mtl": ["mtl"],
	"model/obj": ["obj"],
	"model/prc": ["prc"],
	"model/step": [
		"step",
		"stp",
		"stpnc",
		"p21",
		"210"
	],
	"model/step+xml": ["stpx"],
	"model/step+zip": ["stpz"],
	"model/step-xml+zip": ["stpxz"],
	"model/stl": ["stl"],
	"model/u3d": ["u3d"],
	"model/vrml": ["wrl", "vrml"],
	"model/x3d+binary": ["*x3db", "x3dbz"],
	"model/x3d+fastinfoset": ["x3db"],
	"model/x3d+vrml": ["*x3dv", "x3dvz"],
	"model/x3d+xml": ["x3d", "x3dz"],
	"model/x3d-vrml": ["x3dv"],
	"text/cache-manifest": ["appcache", "manifest"],
	"text/calendar": ["ics", "ifb"],
	"text/coffeescript": ["coffee", "litcoffee"],
	"text/css": ["css"],
	"text/csv": ["csv"],
	"text/html": [
		"html",
		"htm",
		"shtml"
	],
	"text/jade": ["jade"],
	"text/javascript": ["js", "mjs"],
	"text/jsx": ["jsx"],
	"text/less": ["less"],
	"text/markdown": ["md", "markdown"],
	"text/mathml": ["mml"],
	"text/mdx": ["mdx"],
	"text/n3": ["n3"],
	"text/plain": [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	],
	"text/richtext": ["rtx"],
	"text/rtf": ["*rtf"],
	"text/sgml": ["sgml", "sgm"],
	"text/shex": ["shex"],
	"text/slim": ["slim", "slm"],
	"text/spdx": ["spdx"],
	"text/stylus": ["stylus", "styl"],
	"text/tab-separated-values": ["tsv"],
	"text/troff": [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	],
	"text/turtle": ["ttl"],
	"text/uri-list": [
		"uri",
		"uris",
		"urls"
	],
	"text/vcard": ["vcard"],
	"text/vtt": ["vtt"],
	"text/wgsl": ["wgsl"],
	"text/xml": ["*xml"],
	"text/yaml": ["yaml", "yml"],
	"video/3gpp": ["3gp", "3gpp"],
	"video/3gpp2": ["3g2"],
	"video/h261": ["h261"],
	"video/h263": ["h263"],
	"video/h264": ["h264"],
	"video/iso.segment": ["m4s"],
	"video/jpeg": ["jpgv"],
	"video/jpm": ["*jpm", "*jpgm"],
	"video/mj2": ["mj2", "mjp2"],
	"video/mp2t": [
		"ts",
		"m2t",
		"m2ts",
		"mts"
	],
	"video/mp4": [
		"mp4",
		"mp4v",
		"mpg4"
	],
	"video/mpeg": [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	],
	"video/ogg": ["ogv"],
	"video/quicktime": ["qt", "mov"],
	"video/webm": ["webm"]
};
Object.freeze(types);
//#endregion
//#region node_modules/.pnpm/mime@4.1.0/node_modules/mime/dist/src/Mime.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mime_extensionToType, _Mime_typeToExtension, _Mime_typeToExtensions;
var Mime = class {
	constructor(...args) {
		_Mime_extensionToType.set(this, /* @__PURE__ */ new Map());
		_Mime_typeToExtension.set(this, /* @__PURE__ */ new Map());
		_Mime_typeToExtensions.set(this, /* @__PURE__ */ new Map());
		for (const arg of args) this.define(arg);
	}
	define(typeMap, force = false) {
		for (let [type, extensions] of Object.entries(typeMap)) {
			type = type.toLowerCase();
			extensions = extensions.map((ext) => ext.toLowerCase());
			if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, /* @__PURE__ */ new Set());
			const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
			let first = true;
			for (let extension of extensions) {
				const starred = extension.startsWith("*");
				extension = starred ? extension.slice(1) : extension;
				allExtensions?.add(extension);
				if (first) __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
				first = false;
				if (starred) continue;
				const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
				if (currentType && currentType != type && !force) throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
				__classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
			}
		}
		return this;
	}
	getType(path) {
		if (typeof path !== "string") return null;
		const last = path.replace(/^.*[/\\]/s, "").toLowerCase();
		const ext = last.replace(/^.*\./s, "").toLowerCase();
		const hasPath = last.length < path.length;
		if (!(ext.length < last.length - 1) && hasPath) return null;
		return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
	}
	getExtension(type) {
		if (typeof type !== "string") return null;
		type = type?.split?.(";")[0];
		return (type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null;
	}
	getAllExtensions(type) {
		if (typeof type !== "string") return null;
		return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
	}
	_freeze() {
		this.define = () => {
			throw new Error("define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances");
		};
		Object.freeze(this);
		for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) Object.freeze(extensions);
		return this;
	}
	_getTestState() {
		return {
			types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
			extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f")
		};
	}
};
_Mime_extensionToType = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtension = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtensions = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@effect+platform-node@4.0.0-beta.74_effect@4.0.0-beta.74_ioredis@5.11.0/node_modules/@effect/platform-node/dist/Mime.js
/**
* Re-exports the `mime` package through the `@effect/platform-node/Mime`
* module and the `Mime` namespace in the package barrel.
*
* @since 4.0.0
*/
/**
* @since 4.0.0
*/
/**
* @category re-exports
* @since 4.0.0
*/
var Mime_default = new Mime(types, types$1)._freeze();
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/process/ChildProcessSpawner.js
/**
* Service contract and helpers for running child processes through Effect.
*
* This module defines the {@link ChildProcessSpawner} service used by child
* process commands to start operating-system processes. A spawner turns a
* command description into a {@link ChildProcessHandle}, which exposes scoped
* lifecycle operations: write to stdin, stream stdout and stderr, wait for the
* exit code, kill the process, inspect whether it is still running, and
* temporarily unreference it from the parent process.
*
* Use this module when implementing a platform-specific process backend or
* when code needs direct access to the process service. Most applications build
* commands with the `ChildProcess` module; this service is the lower-level
* execution boundary and also provides convenience methods for collecting exit
* codes, strings, and output lines. The {@link make} constructor derives those
* helpers from one primitive `spawn` implementation, so adapters only need to
* supply process creation.
*
* @since 4.0.0
*/
/**
* Constructs branded child process `ExitCode` values.
*
* @category constructors
* @since 4.0.0
*/
var ExitCode = /*#__PURE__*/ nominal();
/**
* Constructs branded child process `ProcessId` values.
*
* @category constructors
* @since 4.0.0
*/
var ProcessId = /*#__PURE__*/ nominal();
var HandleTypeId = "~effect/ChildProcessSpawner/ChildProcessHandle";
var HandleProto = {
	[HandleTypeId]: HandleTypeId,
	...BaseProto,
	toJSON() {
		return {
			_id: "ChildProcessHandle",
			pid: this.pid
		};
	}
};
/**
* Constructs a new `ChildProcessHandle`.
*
* @category constructors
* @since 4.0.0
*/
var makeHandle = (params) => Object.assign(Object.create(HandleProto), params);
/**
* Creates a `ChildProcessSpawner` service from a `spawn` function, deriving
* helpers for exit codes and output collection from that implementation.
*
* @category models
* @since 4.0.0
*/
var make$6 = (spawn) => {
	const streamString = (command, options) => spawn(command).pipe(map((handle) => decodeText(options?.includeStderr === true ? handle.all : handle.stdout)), unwrap);
	const streamLines = (command, options) => splitLines(streamString(command, options));
	return ChildProcessSpawner.of({
		spawn,
		exitCode: (command) => scoped(flatMap(spawn(command), (handle) => handle.exitCode)),
		streamString,
		streamLines,
		lines: (command, options) => runCollect(streamLines(command, options)),
		string: (command, options) => mkString(streamString(command, options))
	});
};
/**
* Service tag for child process spawning.
*
* @category services
* @since 4.0.0
*/
var ChildProcessSpawner = class extends Service()("effect/process/ChildProcessSpawner") {};
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/process/ChildProcess.js
/**
* An Effect-native module for working with child processes.
*
* This module uses an AST-based approach where commands are built first
* using `make` and `pipeTo`, then executed using `spawn`.
*
* **Example** (Spawning and piping commands)
*
* ```ts
* import { Effect, Stream } from "effect"
* import { NodeServices } from "@effect/platform-node"
* import { ChildProcess } from "effect/unstable/process"
*
* // Build a command
* const command = ChildProcess.make`echo "hello world"`
*
* // Spawn and collect output
* const program = Effect.gen(function*() {
*   // You can `yield*` a command, which calls `ChildProcess.spawn`
*   const handle = yield* command
*   const chunks = yield* Stream.runCollect(handle.stdout)
*   const exitCode = yield* handle.exitCode
*   return { chunks, exitCode }
* }).pipe(Effect.scoped, Effect.provide(NodeServices.layer))
*
* // With options
* const withOptions = ChildProcess.make({ cwd: "/tmp" })`ls -la`
*
* // Piping commands
* const pipeline = ChildProcess.make`cat package.json`.pipe(
*   ChildProcess.pipeTo(ChildProcess.make`grep name`)
* )
*
* // Spawn the pipeline
* const pipelineProgram = Effect.gen(function*() {
*   const handle = yield* pipeline
*   const chunks = yield* Stream.runCollect(handle.stdout)
*   return chunks
* }).pipe(Effect.scoped, Effect.provide(NodeServices.layer))
* ```
*
* @since 4.0.0
*/
var TypeId = "~effect/unstable/process/ChildProcess";
var Proto = {
	.../*#__PURE__*/ Prototype({
		label: "Command",
		evaluate(fiber) {
			return getUnsafe(fiber.context, ChildProcessSpawner).spawn(this);
		}
	}),
	[TypeId]: TypeId
};
var makeStandardCommand = (command, args, options) => Object.assign(Object.create(Proto), {
	_tag: "StandardCommand",
	command,
	args,
	options
});
/**
* Create a command from a template literal, options + template, or array form.
*
* **Details**
*
* This function supports three calling conventions:
* 1. Template literal: `make\`npm run build\``
* 2. Options + template literal: `make({ cwd: "/app" })\`npm run build\``
* 3. Array form: `make("npm", ["run", "build"], options?)`
*
* Template literals are not parsed until execution time, allowing parsing
* errors to flow through Effect's error channel.
*
* **Example** (Creating commands)
*
* ```ts
* import { ChildProcess } from "effect/unstable/process"
*
* // Template literal form
* const cmd1 = ChildProcess.make`echo "hello"`
*
* // With options
* const cmd2 = ChildProcess.make({ cwd: "/tmp" })`ls -la`
*
* // Array form
* const cmd3 = ChildProcess.make("git", ["status"])
* ```
*
* @category constructors
* @since 4.0.0
*/
var make$5 = function make(...args) {
	if (isTemplateString(args[0])) {
		const [templates, ...expressions] = args;
		const tokens = parseTemplates(templates, expressions);
		return makeStandardCommand(tokens[0] ?? "", tokens.slice(1), {});
	}
	if (typeof args[0] === "object" && !Array.isArray(args[0]) && !isTemplateString(args[0])) {
		const options = args[0];
		return function(templates, ...expressions) {
			const tokens = parseTemplates(templates, expressions);
			return makeStandardCommand(tokens[0] ?? "", tokens.slice(1), options);
		};
	}
	if (typeof args[0] === "string" && !Array.isArray(args[1])) {
		const [command, options = {}] = args;
		return makeStandardCommand(command, [], options);
	}
	const [command, cmdArgs = [], options = {}] = args;
	return makeStandardCommand(command, cmdArgs, options);
};
var isTemplateString = (u) => Array.isArray(u) && "raw" in u && Array.isArray(u.raw);
/**
* Parses an fd name like "fd3" to its numeric index.
* Returns undefined if the name is invalid.
*
* @category converting
* @since 4.0.0
*/
var parseFdName = (name) => {
	const match = /^fd(\d+)$/.exec(name);
	if (match === null) return void 0;
	const fd = parseInt(match[1], 10);
	return fd >= 3 ? fd : void 0;
};
/**
* Create an fd name from its numeric index.
*
* @category converting
* @since 4.0.0
*/
var fdName = (fd) => `fd${fd}`;
var parseTemplates = (templates, expressions) => {
	let tokens = [];
	for (const [index, template] of templates.entries()) tokens = parseTemplate(templates, expressions, tokens, template, index);
	return tokens;
};
var parseTemplate = (templates, expressions, prevTokens, template, index) => {
	const rawTemplate = templates.raw[index];
	if (rawTemplate === void 0) throw new Error(`Invalid backslash sequence: ${templates.raw[index]}`);
	const { hasLeadingWhitespace, hasTrailingWhitespace, tokens } = splitByWhitespaces(template, rawTemplate);
	const nextTokens = concatTokens(prevTokens, tokens, hasLeadingWhitespace);
	if (index === expressions.length) return nextTokens;
	const expression = expressions[index];
	return concatTokens(nextTokens, Array.isArray(expression) ? expression.map((expression) => parseExpression(expression)) : [parseExpression(expression)], hasTrailingWhitespace);
};
/**
* Convert valid expressions defined in a template string command (i.e. using
* `${expression}` into strings.
*/
var parseExpression = (expression) => {
	if (typeof expression === "string") return expression;
	return String(expression);
};
var DELIMITERS = /*#__PURE__*/ new Set([
	" ",
	"	",
	"\r",
	"\n"
]);
/**
* Number of characters in backslash escape sequences: \0 \xXX or \uXXXX
* \cX is allowed in RegExps but not in strings
* Octal sequences are not allowed in strict mode
*/
var ESCAPE_LENGTH = {
	x: 3,
	u: 5
};
/**
* Splits a template string by whitespace while also properly handling escape
* sequences.
*
* As an example, let's review the following valid commands:
*
* ```ts
* ChildProcess.exec`echo foo\n bar`
* // We should run `["echo", "foo\n", "bar"]`
*
* ChildProcess.exec`echo foo
*  bar`
* // We should run `["echo", "foo", "bar]`
* ```
*
* The problem is that when we evaluate the template string for both of the above
* commands, we will end up with the same string "echo foo\n bar".
*
* What we really want is to include the escaped character in the arguments for
* the first command, since it was written explicitly by the user.
*
* This is why also having access to the raw template string is useful - in a
* template string, there are two representations of the same string:
* 1. `template`     - The processed string (escape sequences are evaluated).
* 2. `template.raw` - The raw string (escape sequences are literal).
*/
var splitByWhitespaces = (template, rawTemplate) => {
	if (rawTemplate.length === 0) return {
		tokens: [],
		hasLeadingWhitespace: false,
		hasTrailingWhitespace: false
	};
	const hasLeadingWhitespace = DELIMITERS.has(rawTemplate[0]);
	const tokens = [];
	let templateCursor = 0;
	for (let templateIndex = 0, rawIndex = 0; templateIndex < template.length; templateIndex += 1, rawIndex += 1) {
		const rawCharacter = rawTemplate[rawIndex];
		if (DELIMITERS.has(rawCharacter)) {
			if (templateCursor !== templateIndex) tokens.push(template.slice(templateCursor, templateIndex));
			templateCursor = templateIndex + 1;
		} else if (rawCharacter === "\\") {
			const nextRawCharacter = rawTemplate[rawIndex + 1];
			if (nextRawCharacter === "\n") {
				templateIndex -= 1;
				rawIndex += 1;
			} else if (nextRawCharacter === "u" && rawTemplate[rawIndex + 2] === "{") rawIndex = rawTemplate.indexOf("}", rawIndex + 3);
			else rawIndex += ESCAPE_LENGTH[nextRawCharacter] ?? 1;
		}
	}
	const hasTrailingWhitespace = templateCursor === template.length;
	if (!hasTrailingWhitespace) tokens.push(template.slice(templateCursor));
	return {
		tokens,
		hasLeadingWhitespace,
		hasTrailingWhitespace
	};
};
/**
* Concatenates two separate sets of string tokens together.
*
* If either set is empty or `isSeparated=false`, the last element of `prevTokens`
* and the first element of `nextTokens` will be joined into a single token.
*/
var concatTokens = (prevTokens, nextTokens, isSeparated) => isSeparated || prevTokens.length === 0 || nextTokens.length === 0 ? [...prevTokens, ...nextTokens] : [
	...prevTokens.slice(0, -1),
	`${prevTokens.at(-1)}${nextTokens.at(0)}`,
	...nextTokens.slice(1)
];
//#endregion
//#region node_modules/.pnpm/@effect+platform-node-shared@4.0.0-beta.75_effect@4.0.0-beta.74/node_modules/@effect/platform-node-shared/dist/internal/utils.js
/** @internal */
var handleErrnoException = (module, method) => (err, [path]) => {
	let reason = "Unknown";
	switch (err.code) {
		case "ENOENT":
			reason = "NotFound";
			break;
		case "EACCES":
			reason = "PermissionDenied";
			break;
		case "EEXIST":
			reason = "AlreadyExists";
			break;
		case "EISDIR":
			reason = "BadResource";
			break;
		case "ENOTDIR":
			reason = "BadResource";
			break;
		case "EBUSY":
			reason = "Busy";
			break;
		case "ELOOP":
			reason = "BadResource";
			break;
	}
	return systemError({
		_tag: reason,
		module,
		method,
		pathOrDescriptor: path,
		syscall: err.syscall,
		cause: err
	});
};
//#endregion
//#region node_modules/.pnpm/@effect+platform-node-shared@4.0.0-beta.75_effect@4.0.0-beta.74/node_modules/@effect/platform-node-shared/dist/NodeSink.js
/**
* Creates a `Sink` that writes chunks to a Node writable stream, respecting
* backpressure, mapping writable errors with `onError`, and ending the stream
* on completion unless `endOnDone` is `false`.
*
* @category constructors
* @since 4.0.0
*/
var fromWritable = (options) => fromChannel(mapDone(fromWritableChannel(options), (_) => [_]));
/**
* Creates a `Channel` that pulls chunks from upstream and writes them to a
* Node writable stream, respecting backpressure and optionally ending the
* writable when upstream is done.
*
* @category constructors
* @since 4.0.0
*/
var fromWritableChannel = (options) => fromTransform((pull) => {
	const writable = options.evaluate();
	return succeed(pullIntoWritable({
		...options,
		writable,
		pull
	}));
});
/**
* Writes Effect chunks into a Node writable stream.
*
* **When to use**
*
* Use to implement custom Node stream adapters that already have an upstream
* pull and need direct control over a writable stream.
*
* **Details**
*
* The loop waits for `drain` when needed, fails on writable errors, and ends
* the writable on upstream completion unless `endOnDone` is `false`.
*
* @category converting
* @since 4.0.0
*/
var pullIntoWritable = (options) => options.pull.pipe(flatMap((chunk) => {
	let i = 0;
	return callback(function loop(resume) {
		for (; i < chunk.length;) if (!options.writable.write(chunk[i++], options.encoding)) {
			options.writable.once("drain", () => loop(resume));
			return;
		}
		resume(void_);
	});
}), forever({ disableYield: true }), raceFirst(callback((resume) => {
	const onError = (error) => resume(fail(options.onError(error)));
	options.writable.once("error", onError);
	return sync(() => {
		options.writable.off("error", onError);
	});
})), options.endOnDone !== false ? catchDone((_) => {
	if ("closed" in options.writable && options.writable.closed) return done(_);
	return callback((resume) => {
		options.writable.once("finish", () => resume(done(_)));
		options.writable.end();
	});
}) : identity);
//#endregion
//#region node_modules/.pnpm/@effect+platform-node-shared@4.0.0-beta.75_effect@4.0.0-beta.74/node_modules/@effect/platform-node-shared/dist/NodeStream.js
/**
* Adapters between Node streams and Effect streams, channels, and readables.
*
* This module is the stream boundary for Node APIs: wrap `Readable` or
* `Duplex` values as Effect `Stream`s and `Channel`s, pipe an Effect stream
* through a Node duplex transform, expose an Effect `Stream` back to Node as a
* `Readable`, or collect bounded readable payloads into strings, array
* buffers, and `Uint8Array`s. Common sources include files, HTTP bodies, child
* process stdio, sockets, and compression or crypto transforms.
*
* **Mental model**
*
* Read adapters pull from Node's readable side into Effect. Duplex adapters
* write upstream Effect chunks to Node while reading transformed chunks back.
* `toReadable` runs an Effect stream from the caller's context, while
* `toReadableNever` is for streams that need no services.
*
* **Gotchas**
*
* Node backpressure is preserved: writes pause until `drain` before more input
* is pulled. Readables are destroyed on scope finalization by default, and
* duplex writable sides are ended when upstream completes unless configured
* otherwise. For externally owned or long-lived streams, choose `closeOnDone`
* and `endOnDone` deliberately; for collection helpers, set `maxBytes` when
* input size is not already bounded.
*
* @since 4.0.0
*/
/**
* Converts a Node readable stream into an Effect `Stream`, reading chunks with
* an optional chunk size, mapping stream errors with `onError`, and destroying
* the readable on completion unless `closeOnDone` is `false`.
*
* @category constructors
* @since 4.0.0
*/
var fromReadable = (options) => fromChannel$1(fromReadableChannel(options));
/**
* Creates a `Channel` that pulls chunks from a Node readable stream, mapping
* errors with `onError` and destroying the readable on completion unless
* `closeOnDone` is `false`.
*
* @category constructors
* @since 4.0.0
*/
var fromReadableChannel = (options) => fromTransform((_, scope) => readableToPullUnsafe({
	scope,
	readable: options.evaluate(),
	onError: options.onError ?? defaultOnError,
	chunkSize: options.chunkSize,
	closeOnDone: options.closeOnDone
}));
var readableToPullUnsafe = (options) => {
	const readable = options.readable;
	if (readable.readableEnded) return succeed(done());
	const closeOnDone = options.closeOnDone ?? true;
	const exit = options.exit ?? make$13(void 0);
	const latch = makeUnsafe(false);
	function onReadable() {
		latch.openUnsafe();
	}
	function onError(error) {
		exit.current = fail$1(options.onError(error));
		latch.openUnsafe();
	}
	function onEnd() {
		exit.current = fail$1(Done());
		latch.openUnsafe();
	}
	readable.on("readable", onReadable);
	readable.once("error", onError);
	readable.once("end", onEnd);
	const pull = suspend(function loop() {
		let item = options.readable.read(options.chunkSize);
		if (item === null) {
			if (exit.current) return exit.current;
			latch.closeUnsafe();
			return flatMap(latch.await, loop);
		}
		const chunk = of(item);
		while (true) {
			item = options.readable.read(options.chunkSize);
			if (item === null) break;
			chunk.push(item);
		}
		return succeed(chunk);
	});
	return as(addFinalizer(options.scope, sync(() => {
		readable.off("readable", onReadable);
		readable.off("error", onError);
		readable.off("end", onEnd);
		if (closeOnDone && "closed" in options.readable && !options.readable.closed) options.readable.destroy();
	})), pull);
};
var defaultOnError = (error) => new UnknownError(error);
//#endregion
//#region node_modules/.pnpm/@effect+platform-node-shared@4.0.0-beta.75_effect@4.0.0-beta.74/node_modules/@effect/platform-node-shared/dist/NodeChildProcessSpawner.js
var toError = (error) => error instanceof globalThis.Error ? error : new globalThis.Error(String(error));
var toPlatformError = (method, error, command) => {
	const { commands } = flattenCommand(command);
	const commandStr = commands.reduce((acc, curr) => {
		const cmd = `${curr.command} ${curr.args.join(" ")}`;
		return acc.length === 0 ? cmd : `${acc} | ${cmd}`;
	}, "");
	return handleErrnoException("ChildProcess", method)(error, [commandStr]);
};
/**
* Layer that provides the `NodeChildProcessSpawner` implementation.
*
* @category layers
* @since 4.0.0
*/
var layer$13 = /*#__PURE__*/ effect(ChildProcessSpawner, /* @__PURE__ */ gen(function* () {
	const fs = yield* FileSystem;
	const path = yield* Path$1;
	const resolveWorkingDirectory = fnUntraced(function* (options) {
		if (isUndefined(options.cwd)) return void 0;
		yield* fs.access(options.cwd);
		return path.resolve(options.cwd);
	});
	const resolveEnvironment = (options) => {
		return options.extendEnv ? {
			...globalThis.process.env,
			...options.env
		} : options.env;
	};
	const inputToStdioOption = (input) => isStream(input) ? "pipe" : input;
	const outputToStdioOption = (input) => isSink(input) ? "pipe" : input;
	const resolveStdinOption = (options) => {
		const defaultConfig = {
			stream: "pipe",
			encoding: "utf-8",
			endOnDone: true
		};
		if (isUndefined(options.stdin)) return defaultConfig;
		if (typeof options.stdin === "string") return {
			...defaultConfig,
			stream: options.stdin
		};
		if (isStream(options.stdin)) return {
			...defaultConfig,
			stream: options.stdin
		};
		return {
			stream: options.stdin.stream,
			encoding: options.stdin.encoding ?? defaultConfig.encoding,
			endOnDone: options.stdin.endOnDone ?? defaultConfig.endOnDone
		};
	};
	const resolveOutputOption = (options, streamName) => {
		const option = options[streamName];
		if (isUndefined(option)) return { stream: "pipe" };
		if (typeof option === "string") return { stream: option };
		if (isSink(option)) return { stream: option };
		return { stream: option.stream };
	};
	const resolveAdditionalFds = (options) => {
		if (isUndefined(options.additionalFds)) return [];
		const result = [];
		for (const [name, config] of Object.entries(options.additionalFds)) {
			const fd = parseFdName(name);
			if (isNotUndefined(fd)) result.push({
				fd,
				config
			});
		}
		return result.sort((a, b) => a.fd - b.fd);
	};
	const buildStdioArray = (stdinConfig, stdoutConfig, stderrConfig, additionalFds) => {
		const stdio = [
			inputToStdioOption(stdinConfig.stream),
			outputToStdioOption(stdoutConfig.stream),
			outputToStdioOption(stderrConfig.stream)
		];
		if (additionalFds.length === 0) return stdio;
		const maxFd = additionalFds.reduce((max, { fd }) => Math.max(max, fd), 2);
		for (let i = 3; i <= maxFd; i++) stdio[i] = "ignore";
		for (const { fd } of additionalFds) stdio[fd] = "pipe";
		return stdio;
	};
	const setupAdditionalFds = fnUntraced(function* (command, childProcess, additionalFds) {
		if (additionalFds.length === 0) return {
			getInputFd: () => drain,
			getOutputFd: () => empty$1
		};
		const inputSinks = /* @__PURE__ */ new Map();
		const outputStreams = /* @__PURE__ */ new Map();
		for (const { config, fd } of additionalFds) {
			const nodeStream = childProcess.stdio[fd];
			switch (config.type) {
				case "input": {
					let sink = drain;
					if (nodeStream && "write" in nodeStream) sink = fromWritable({
						evaluate: () => nodeStream,
						onError: (error) => toPlatformError(`fromWritable(fd${fd})`, toError(error), command)
					});
					if (config.stream) yield* forkScoped(run(config.stream, sink));
					inputSinks.set(fd, sink);
					break;
				}
				case "output": {
					let stream = empty$1;
					if (nodeStream && "read" in nodeStream) stream = fromReadable({
						evaluate: () => nodeStream,
						onError: (error) => toPlatformError(`fromReadable(fd${fd})`, toError(error), command)
					});
					if (config.sink) stream = transduce(stream, config.sink);
					outputStreams.set(fd, stream);
					break;
				}
			}
		}
		return {
			getInputFd: (fd) => inputSinks.get(fd) ?? drain,
			getOutputFd: (fd) => outputStreams.get(fd) ?? empty$1
		};
	});
	const setupChildStdin = (command, childProcess, config) => suspend(() => {
		let sink = drain;
		if (isNotNull(childProcess.stdin)) sink = fromWritable({
			evaluate: () => childProcess.stdin,
			onError: (error) => toPlatformError("fromWritable(stdin)", toError(error), command),
			endOnDone: config.endOnDone,
			encoding: config.encoding
		});
		if (isStream(config.stream)) return as(forkScoped(run(config.stream, sink)), sink);
		return succeed(sink);
	});
	const setupChildOutputStreams = (command, childProcess, stdoutConfig, stderrConfig) => {
		let stdout = childProcess.stdout ? fromReadable({
			evaluate: () => childProcess.stdout,
			onError: (error) => toPlatformError("fromReadable(stdout)", toError(error), command)
		}) : empty$1;
		let stderr = childProcess.stderr ? fromReadable({
			evaluate: () => childProcess.stderr,
			onError: (error) => toPlatformError("fromReadable(stderr)", toError(error), command)
		}) : empty$1;
		if (isSink(stdoutConfig.stream)) stdout = transduce(stdout, stdoutConfig.stream);
		if (isSink(stderrConfig.stream)) stderr = transduce(stderr, stderrConfig.stream);
		const all = merge$1(stdout, stderr);
		return {
			stdout,
			stderr,
			all
		};
	};
	const spawn = (command, spawnOptions) => callback((resume) => {
		const deferred = makeUnsafe$1();
		const handle = NodeChildProcess.spawn(command.command, command.args, spawnOptions);
		handle.on("error", (error) => {
			resume(fail(toPlatformError("spawn", error, command)));
		});
		handle.on("exit", (...args) => {
			doneUnsafe(deferred, succeed$2(args));
		});
		handle.on("spawn", () => {
			resume(succeed([handle, deferred]));
		});
		return sync(() => {
			handle.kill("SIGTERM");
		});
	});
	const killProcessGroup = (command, childProcess, signal) => {
		if (globalThis.process.platform === "win32") return callback((resume) => {
			NodeChildProcess.exec(`taskkill /pid ${childProcess.pid} /T /F`, (error) => {
				if (error) resume(fail(toPlatformError("kill", toError(error), command)));
				else resume(void_);
			});
		});
		return try_({
			try: () => {
				globalThis.process.kill(-childProcess.pid, signal);
			},
			catch: (error) => toPlatformError("kill", toError(error), command)
		});
	};
	const killProcessGroupOnExit = (childProcess, signal) => {
		if (globalThis.process.platform === "win32") {
			NodeChildProcess.exec(`taskkill /pid ${childProcess.pid} /T /F`, () => {});
			return;
		}
		try {
			globalThis.process.kill(-childProcess.pid, signal);
		} catch {}
	};
	const killProcess = (command, childProcess, signal) => suspend(() => {
		if (!childProcess.kill(signal)) return fail(toPlatformError("kill", new globalThis.Error("Failed to kill child process"), command));
		return void_;
	});
	const withTimeout = (childProcess, command, options) => (kill) => {
		const killSignal = options?.killSignal ?? "SIGTERM";
		return isUndefined(options?.forceKillAfter) ? kill(command, childProcess, killSignal) : timeoutOrElse(kill(command, childProcess, killSignal), {
			duration: options.forceKillAfter,
			orElse: () => kill(command, childProcess, "SIGKILL")
		});
	};
	/**
	* Get the appropriate source stream from a process handle based on the
	* `from` pipe option.
	*/
	const getSourceStream = (handle, from) => {
		const fromOption = from ?? "stdout";
		switch (fromOption) {
			case "stdout": return handle.stdout;
			case "stderr": return handle.stderr;
			case "all": return handle.all;
			default: {
				const fd = parseFdName(fromOption);
				if (isNotUndefined(fd)) return handle.getOutputFd(fd);
				return handle.stdout;
			}
		}
	};
	const spawnCommand = fnUntraced(function* (cmd) {
		switch (cmd._tag) {
			case "StandardCommand": {
				const stdinConfig = resolveStdinOption(cmd.options);
				const stdoutConfig = resolveOutputOption(cmd.options, "stdout");
				const stderrConfig = resolveOutputOption(cmd.options, "stderr");
				const resolvedAdditionalFds = resolveAdditionalFds(cmd.options);
				let isReferenced = true;
				let cleanupOnNonZeroExit = false;
				const [childProcess, exitSignal] = yield* acquireRelease(spawn(cmd, {
					cwd: yield* resolveWorkingDirectory(cmd.options),
					env: resolveEnvironment(cmd.options),
					stdio: buildStdioArray(stdinConfig, stdoutConfig, stderrConfig, resolvedAdditionalFds),
					detached: cmd.options.detached ?? process.platform !== "win32",
					shell: cmd.options.shell
				}), fnUntraced(function* ([childProcess, exitSignal]) {
					const exited = yield* isDone(exitSignal);
					const killWithTimeout = withTimeout(childProcess, cmd, cmd.options);
					if (exited) {
						const [code] = yield* _await(exitSignal);
						if (code !== 0 && isNotNull(code)) return yield* ignore(killWithTimeout(killProcessGroup));
						return yield* void_;
					}
					if (!isReferenced) return yield* void_;
					return yield* killWithTimeout((command, childProcess, signal) => catch_(killProcessGroup(command, childProcess, signal), () => killProcess(command, childProcess, signal))).pipe(andThen(_await(exitSignal)), ignore);
				}));
				const pid = ProcessId(childProcess.pid);
				childProcess.on("exit", (code) => {
					if (cleanupOnNonZeroExit && code !== 0 && isNotNull(code)) killProcessGroupOnExit(childProcess, cmd.options.killSignal ?? "SIGTERM");
				});
				const reref = sync(() => {
					if (!isReferenced) {
						childProcess.ref();
						isReferenced = true;
						cleanupOnNonZeroExit = false;
					}
				});
				const unref = sync(() => {
					if (isReferenced) {
						childProcess.unref();
						isReferenced = false;
						cleanupOnNonZeroExit = true;
					}
					return reref;
				});
				const stdin = yield* setupChildStdin(cmd, childProcess, stdinConfig);
				const { all, stderr, stdout } = setupChildOutputStreams(cmd, childProcess, stdoutConfig, stderrConfig);
				const { getInputFd, getOutputFd } = yield* setupAdditionalFds(cmd, childProcess, resolvedAdditionalFds);
				const isRunning = map(isDone(exitSignal), (done) => !done);
				const exitCode = flatMap(_await(exitSignal), ([code, signal]) => {
					if (isNotNull(code)) return succeed(ExitCode(code));
					return fail(toPlatformError("exitCode", new globalThis.Error(`Process interrupted due to receipt of signal: '${signal}'`), cmd));
				});
				const kill = (options) => {
					return withTimeout(childProcess, cmd, options)((command, childProcess, signal) => catch_(killProcessGroup(command, childProcess, signal), () => killProcess(command, childProcess, signal))).pipe(andThen(_await(exitSignal)), asVoid);
				};
				return makeHandle({
					pid,
					exitCode,
					isRunning,
					kill,
					stdin,
					stdout,
					stderr,
					all,
					getInputFd,
					getOutputFd,
					unref
				});
			}
			case "PipedCommand": {
				const { commands, pipeOptions } = flattenCommand(cmd);
				const [root, ...pipeline] = commands;
				const handles = [yield* spawnCommand(root)];
				for (let i = 0; i < pipeline.length; i++) {
					const command = pipeline[i];
					const options = pipeOptions[i] ?? {};
					const stdinConfig = resolveStdinOption(command.options);
					const sourceStream = unwrap(succeed(getSourceStream(handles[handles.length - 1], options.from)));
					const toOption = options.to ?? "stdin";
					if (toOption === "stdin") handles.push(yield* spawnCommand(make$5(command.command, command.args, {
						...command.options,
						stdin: {
							...stdinConfig,
							stream: sourceStream
						}
					})));
					else {
						const fd = parseFdName(toOption);
						if (isNotUndefined(fd)) {
							const fdName$1 = fdName(fd);
							const existingFds = command.options.additionalFds ?? {};
							handles.push(yield* spawnCommand(make$5(command.command, command.args, {
								...command.options,
								additionalFds: {
									...existingFds,
									[fdName$1]: {
										type: "input",
										stream: sourceStream
									}
								}
							})));
						} else handles.push(yield* spawnCommand(make$5(command.command, command.args, {
							...command.options,
							stdin: {
								...stdinConfig,
								stream: sourceStream
							}
						})));
					}
				}
				const handle = handles[handles.length - 1];
				const unref = gen(function* () {
					const rerefs = [];
					for (const handle of handles) rerefs.push(yield* handle.unref);
					return forEach([...rerefs].reverse(), (reref) => reref, { discard: true });
				});
				return makeHandle({
					pid: handle.pid,
					exitCode: handle.exitCode,
					isRunning: handle.isRunning,
					kill: handle.kill,
					stdin: handle.stdin,
					stdout: handle.stdout,
					stderr: handle.stderr,
					all: handle.all,
					getInputFd: handle.getInputFd,
					getOutputFd: handle.getOutputFd,
					unref
				});
			}
		}
	});
	return make$6(spawnCommand);
}));
/**
* Flattens a `Command` into an array of `StandardCommand`s along with pipe
* options for each connection.
*
* @category transforming
* @since 4.0.0
*/
var flattenCommand = (command) => {
	const commands = [];
	const pipeOptions = [];
	const flatten = (cmd) => {
		switch (cmd._tag) {
			case "StandardCommand":
				commands.push(cmd);
				break;
			case "PipedCommand":
				flatten(cmd.left);
				pipeOptions.push(cmd.options);
				flatten(cmd.right);
				break;
		}
	};
	flatten(command);
	if (commands.length === 0) throw new Error("flattenCommand produced empty commands array");
	const [first, ...rest] = commands;
	return {
		commands: [first, ...rest],
		pipeOptions
	};
};
//#endregion
//#region node_modules/.pnpm/@effect+platform-node-shared@4.0.0-beta.75_effect@4.0.0-beta.74/node_modules/@effect/platform-node-shared/dist/NodeFileSystem.js
/**
* Shared Node-compatible implementation of Effect's `FileSystem` service.
*
* This module adapts Node's `node:fs`, `node:os`, and `node:path` APIs into a
* `FileSystem` layer for Effect programs running on Node-compatible runtimes.
* Platform packages use it to provide file and directory I/O, permissions,
* links, metadata, temporary files and directories, and file watching through
* the shared `FileSystem` service.
*
* **Mental model**
*
* {@link layer} installs a process-backed `FileSystem` service. Each operation
* delegates to the corresponding Node filesystem API, then maps Node failures
* into `PlatformError` values and invalid arguments into `BadArgument` failures.
* Paths keep Node's normal behavior: relative paths resolve from the current
* working directory and platform path rules still apply.
*
* **Common tasks**
*
* Provide {@link layer} at the Node runtime boundary, then depend on the
* `FileSystem` service from application code. Use the service for ordinary
* reads and writes, directory management, metadata inspection, links, temporary
* resources, and file watching without importing Node's `fs` APIs directly.
*
* **Gotchas**
*
* Open files are scoped resources with tracked read and write positions; append
* mode lets the operating system choose the write offset. File watching follows
* `node:fs.watch` semantics unless a custom watch backend is supplied, so
* recursive support, event coalescing, and reported paths vary by runtime and
* platform.
*
* @since 4.0.0
*/
var handleBadArgument = (method) => (err) => badArgument({
	module: "FileSystem",
	method,
	description: err.message ?? String(err)
});
var access = /*#__PURE__*/ (() => {
	const nodeAccess = /*#__PURE__*/ effectify(NFS.access, /*#__PURE__*/ handleErrnoException("FileSystem", "access"), /*#__PURE__*/ handleBadArgument("access"));
	return (path, options) => {
		let mode = NFS.constants.F_OK;
		if (options?.readable) mode |= NFS.constants.R_OK;
		if (options?.writable) mode |= NFS.constants.W_OK;
		return nodeAccess(path, mode);
	};
})();
var copy = /*#__PURE__*/ (() => {
	const nodeCp = /*#__PURE__*/ effectify(NFS.cp, /*#__PURE__*/ handleErrnoException("FileSystem", "copy"), /*#__PURE__*/ handleBadArgument("copy"));
	return (fromPath, toPath, options) => nodeCp(fromPath, toPath, {
		force: options?.overwrite ?? false,
		preserveTimestamps: options?.preserveTimestamps ?? false,
		recursive: true
	});
})();
var copyFile = /*#__PURE__*/ (() => {
	const nodeCopyFile = /*#__PURE__*/ effectify(NFS.copyFile, /*#__PURE__*/ handleErrnoException("FileSystem", "copyFile"), /*#__PURE__*/ handleBadArgument("copyFile"));
	return (fromPath, toPath) => nodeCopyFile(fromPath, toPath);
})();
var chmod = /*#__PURE__*/ (() => {
	const nodeChmod = /*#__PURE__*/ effectify(NFS.chmod, /*#__PURE__*/ handleErrnoException("FileSystem", "chmod"), /*#__PURE__*/ handleBadArgument("chmod"));
	return (path, mode) => nodeChmod(path, mode);
})();
var chown = /*#__PURE__*/ (() => {
	const nodeChown = /*#__PURE__*/ effectify(NFS.chown, /*#__PURE__*/ handleErrnoException("FileSystem", "chown"), /*#__PURE__*/ handleBadArgument("chown"));
	return (path, uid, gid) => nodeChown(path, uid, gid);
})();
var link = /*#__PURE__*/ (() => {
	const nodeLink = /*#__PURE__*/ effectify(NFS.link, /*#__PURE__*/ handleErrnoException("FileSystem", "link"), /*#__PURE__*/ handleBadArgument("link"));
	return (existingPath, newPath) => nodeLink(existingPath, newPath);
})();
var makeDirectory = /*#__PURE__*/ (() => {
	const nodeMkdir = /*#__PURE__*/ effectify(NFS.mkdir, /*#__PURE__*/ handleErrnoException("FileSystem", "makeDirectory"), /*#__PURE__*/ handleBadArgument("makeDirectory"));
	return (path, options) => nodeMkdir(path, {
		recursive: options?.recursive ?? false,
		mode: options?.mode
	});
})();
var makeTempDirectoryFactory = (method) => {
	const nodeMkdtemp = effectify(NFS.mkdtemp, handleErrnoException("FileSystem", method), handleBadArgument(method));
	return (options) => suspend(() => {
		const prefix = options?.prefix ?? "";
		const directory = typeof options?.directory === "string" ? Path.join(options.directory, ".") : OS.tmpdir();
		return nodeMkdtemp(prefix ? Path.join(directory, prefix) : directory + "/");
	});
};
var makeTempDirectory = /*#__PURE__*/ makeTempDirectoryFactory("makeTempDirectory");
var removeFactory = (method) => {
	const nodeRm = effectify(NFS.rm, handleErrnoException("FileSystem", method), handleBadArgument(method));
	return (path, options) => nodeRm(path, {
		recursive: options?.recursive ?? false,
		force: options?.force ?? false
	});
};
var remove = /*#__PURE__*/ removeFactory("remove");
var makeTempDirectoryScoped = /*#__PURE__*/ (() => {
	const makeDirectory = /*#__PURE__*/ makeTempDirectoryFactory("makeTempDirectoryScoped");
	const removeDirectory = /*#__PURE__*/ removeFactory("makeTempDirectoryScoped");
	return (options) => acquireRelease(makeDirectory(options), (directory) => orDie(removeDirectory(directory, { recursive: true })));
})();
var openFactory = (method) => {
	const nodeOpen = effectify(NFS.open, handleErrnoException("FileSystem", method), handleBadArgument(method));
	const nodeClose = effectify(NFS.close, handleErrnoException("FileSystem", method), handleBadArgument(method));
	return (path, options) => pipe(acquireRelease(nodeOpen(path, options?.flag ?? "r", options?.mode), (fd) => orDie(nodeClose(fd))), map((fd) => makeFile(FileDescriptor(fd), options?.flag?.startsWith("a") ?? false)));
};
var open = /*#__PURE__*/ openFactory("open");
var makeFile = /*#__PURE__*/ (() => {
	const nodeReadFactory = (method) => effectify(NFS.read, handleErrnoException("FileSystem", method), handleBadArgument(method));
	const nodeRead = /*#__PURE__*/ nodeReadFactory("read");
	const nodeReadAlloc = /*#__PURE__*/ nodeReadFactory("readAlloc");
	const nodeStat = /*#__PURE__*/ effectify(NFS.fstat, /*#__PURE__*/ handleErrnoException("FileSystem", "stat"), /*#__PURE__*/ handleBadArgument("stat"));
	const nodeTruncate = /*#__PURE__*/ effectify(NFS.ftruncate, /*#__PURE__*/ handleErrnoException("FileSystem", "truncate"), /*#__PURE__*/ handleBadArgument("truncate"));
	const nodeSync = /*#__PURE__*/ effectify(NFS.fsync, /*#__PURE__*/ handleErrnoException("FileSystem", "sync"), /*#__PURE__*/ handleBadArgument("sync"));
	const nodeWriteFactory = (method) => effectify(NFS.write, handleErrnoException("FileSystem", method), handleBadArgument(method));
	const nodeWrite = /*#__PURE__*/ nodeWriteFactory("write");
	const nodeWriteAll = /*#__PURE__*/ nodeWriteFactory("writeAll");
	class FileImpl {
		[FileTypeId];
		fd;
		append;
		position = /*#__PURE__*/ BigInt(0);
		constructor(fd, append) {
			this[FileTypeId] = FileTypeId;
			this.fd = fd;
			this.append = append;
		}
		get stat() {
			return map(nodeStat(this.fd), makeFileInfo);
		}
		get sync() {
			return nodeSync(this.fd);
		}
		seek(offset, from) {
			const offsetSize = Size(offset);
			return sync(() => {
				if (from === "start") this.position = offsetSize;
				else if (from === "current") this.position = this.position + offsetSize;
				return this.position;
			});
		}
		read(buffer) {
			return suspend(() => {
				const position = this.position;
				return map(nodeRead(this.fd, {
					buffer,
					position
				}), (bytesRead) => {
					const sizeRead = Size(bytesRead);
					this.position = position + sizeRead;
					return sizeRead;
				});
			});
		}
		readAlloc(size) {
			const sizeNumber = Number(size);
			return suspend(() => {
				const buffer = Buffer.allocUnsafeSlow(sizeNumber);
				const position = this.position;
				return map(nodeReadAlloc(this.fd, {
					buffer,
					position
				}), (bytesRead) => {
					if (bytesRead === 0) return none();
					this.position = position + BigInt(bytesRead);
					if (bytesRead === sizeNumber) return some(buffer);
					const dst = Buffer.allocUnsafeSlow(bytesRead);
					buffer.copy(dst, 0, 0, bytesRead);
					return some(dst);
				});
			});
		}
		truncate(length) {
			return map(nodeTruncate(this.fd, length ? Number(length) : void 0), () => {
				if (!this.append) {
					const len = BigInt(length ?? 0);
					if (this.position > len) this.position = len;
				}
			});
		}
		write(buffer) {
			return suspend(() => {
				const position = this.position;
				return map(nodeWrite(this.fd, buffer, void 0, void 0, this.append ? void 0 : Number(position)), (bytesWritten) => {
					const sizeWritten = Size(bytesWritten);
					if (!this.append) this.position = position + sizeWritten;
					return sizeWritten;
				});
			});
		}
		writeAllChunk(buffer) {
			return suspend(() => {
				const position = this.position;
				return flatMap(nodeWriteAll(this.fd, buffer, void 0, void 0, this.append ? void 0 : Number(position)), (bytesWritten) => {
					if (bytesWritten === 0) return fail(systemError({
						module: "FileSystem",
						method: "writeAll",
						_tag: "WriteZero",
						pathOrDescriptor: this.fd,
						description: "write returned 0 bytes written"
					}));
					if (!this.append) this.position = position + BigInt(bytesWritten);
					return bytesWritten < buffer.length ? this.writeAllChunk(buffer.subarray(bytesWritten)) : void_;
				});
			});
		}
		writeAll(buffer) {
			return this.writeAllChunk(buffer);
		}
	}
	return (fd, append) => new FileImpl(fd, append);
})();
var makeTempFileFactory = (method) => {
	const makeDirectory = makeTempDirectoryFactory(method);
	return fnUntraced(function* (options) {
		const directory = yield* makeDirectory(options);
		const random = Crypto.randomBytes(6).toString("hex");
		const name = Path.join(directory, options?.suffix ? `${random}${options.suffix}` : random);
		yield* writeFile(name, new Uint8Array(0));
		return name;
	});
};
var makeTempFile = /*#__PURE__*/ makeTempFileFactory("makeTempFile");
var makeTempFileScoped = /*#__PURE__*/ (() => {
	const makeFile = /*#__PURE__*/ makeTempFileFactory("makeTempFileScoped");
	const removeDirectory = /*#__PURE__*/ removeFactory("makeTempFileScoped");
	return (options) => acquireRelease(makeFile(options), (file) => orDie(removeDirectory(Path.dirname(file), { recursive: true })));
})();
var readDirectory = (path, options) => tryPromise({
	try: () => NFS.promises.readdir(path, options),
	catch: (err) => handleErrnoException("FileSystem", "readDirectory")(err, [path])
});
var readFile = (path) => callback((resume, signal) => {
	try {
		NFS.readFile(path, { signal }, (err, data) => {
			if (err) resume(fail(handleErrnoException("FileSystem", "readFile")(err, [path])));
			else resume(succeed(data));
		});
	} catch (err) {
		resume(fail(handleBadArgument("readFile")(err)));
	}
});
var readLink = /*#__PURE__*/ (() => {
	const nodeReadLink = /*#__PURE__*/ effectify(NFS.readlink, /*#__PURE__*/ handleErrnoException("FileSystem", "readLink"), /*#__PURE__*/ handleBadArgument("readLink"));
	return (path) => nodeReadLink(path);
})();
var realPath = /*#__PURE__*/ (() => {
	const nodeRealPath = /*#__PURE__*/ effectify(NFS.realpath, /*#__PURE__*/ handleErrnoException("FileSystem", "realPath"), /*#__PURE__*/ handleBadArgument("realPath"));
	return (path) => nodeRealPath(path);
})();
var rename = /*#__PURE__*/ (() => {
	const nodeRename = /*#__PURE__*/ effectify(NFS.rename, /*#__PURE__*/ handleErrnoException("FileSystem", "rename"), /*#__PURE__*/ handleBadArgument("rename"));
	return (oldPath, newPath) => nodeRename(oldPath, newPath);
})();
var makeFileInfo = (stat) => ({
	type: stat.isFile() ? "File" : stat.isDirectory() ? "Directory" : stat.isSymbolicLink() ? "SymbolicLink" : stat.isBlockDevice() ? "BlockDevice" : stat.isCharacterDevice() ? "CharacterDevice" : stat.isFIFO() ? "FIFO" : stat.isSocket() ? "Socket" : "Unknown",
	mtime: fromNullishOr(stat.mtime),
	atime: fromNullishOr(stat.atime),
	birthtime: fromNullishOr(stat.birthtime),
	dev: stat.dev,
	rdev: fromNullishOr(stat.rdev),
	ino: fromNullishOr(stat.ino),
	mode: stat.mode,
	nlink: fromNullishOr(stat.nlink),
	uid: fromNullishOr(stat.uid),
	gid: fromNullishOr(stat.gid),
	size: Size(stat.size),
	blksize: stat.blksize !== void 0 ? some(Size(stat.blksize)) : none(),
	blocks: fromNullishOr(stat.blocks)
});
var stat = /*#__PURE__*/ (() => {
	const nodeStat = /*#__PURE__*/ effectify(NFS.stat, /*#__PURE__*/ handleErrnoException("FileSystem", "stat"), /*#__PURE__*/ handleBadArgument("stat"));
	return (path) => map(nodeStat(path), makeFileInfo);
})();
var symlink = /*#__PURE__*/ (() => {
	const nodeSymlink = /*#__PURE__*/ effectify(NFS.symlink, /*#__PURE__*/ handleErrnoException("FileSystem", "symlink"), /*#__PURE__*/ handleBadArgument("symlink"));
	return (target, path) => nodeSymlink(target, path);
})();
var truncate = /*#__PURE__*/ (() => {
	const nodeTruncate = /*#__PURE__*/ effectify(NFS.truncate, /*#__PURE__*/ handleErrnoException("FileSystem", "truncate"), /*#__PURE__*/ handleBadArgument("truncate"));
	return (path, length) => nodeTruncate(path, length !== void 0 ? Number(length) : void 0);
})();
var utimes = /*#__PURE__*/ (() => {
	const nodeUtimes = /*#__PURE__*/ effectify(NFS.utimes, /*#__PURE__*/ handleErrnoException("FileSystem", "utime"), /*#__PURE__*/ handleBadArgument("utime"));
	return (path, atime, mtime) => nodeUtimes(path, atime, mtime);
})();
var watchNode = (path) => callback$1((queue) => acquireRelease(sync(() => {
	const watcher = NFS.watch(path, { recursive: true }, (event, path) => {
		if (!path) return;
		switch (event) {
			case "rename":
				runFork(matchEffect(stat(path), {
					onSuccess: (_) => offer(queue, {
						_tag: "Create",
						path
					}),
					onFailure: (_) => offer(queue, {
						_tag: "Remove",
						path
					})
				}));
				return;
			case "change":
				offerUnsafe(queue, {
					_tag: "Update",
					path
				});
				return;
		}
	});
	watcher.on("error", (error) => {
		failCauseUnsafe(queue, fail$2(systemError({
			module: "FileSystem",
			_tag: "Unknown",
			method: "watch",
			pathOrDescriptor: path,
			cause: error
		})));
	});
	watcher.on("close", () => {
		endUnsafe(queue);
	});
	return watcher;
}), (watcher) => sync(() => watcher.close())));
var watch = (backend, path) => stat(path).pipe(map((stat) => backend.pipe(flatMap$1((_) => _.register(path, stat)), getOrElse(() => watchNode(path)))), unwrap);
var writeFile = (path, data, options) => callback((resume, signal) => {
	try {
		NFS.writeFile(path, data, {
			signal,
			flag: options?.flag,
			mode: options?.mode
		}, (err) => {
			if (err) resume(fail(handleErrnoException("FileSystem", "writeFile")(err, [path])));
			else resume(void_);
		});
	} catch (err) {
		resume(fail(handleBadArgument("writeFile")(err)));
	}
});
var makeFileSystem = /*#__PURE__*/ map(/*#__PURE__*/ serviceOption(WatchBackend), (backend) => make$14({
	access,
	chmod,
	chown,
	copy,
	copyFile,
	link,
	makeDirectory,
	makeTempDirectory,
	makeTempDirectoryScoped,
	makeTempFile,
	makeTempFileScoped,
	open,
	readDirectory,
	readFile,
	readLink,
	realPath,
	remove,
	rename,
	stat,
	symlink,
	truncate,
	utimes,
	watch(path) {
		return watch(backend, path);
	},
	writeFile
}));
//#endregion
//#region node_modules/.pnpm/@effect+platform-node@4.0.0-beta.74_effect@4.0.0-beta.74_ioredis@5.11.0/node_modules/@effect/platform-node/dist/NodeFileSystem.js
/**
* Node.js `FileSystem` layer for programs that perform real filesystem I/O.
*
* The exported layer satisfies the platform-independent `FileSystem` service
* with Node-backed operations for files, directories, metadata, permissions,
* links, temporary paths, and path watching. Effects still call the service from
* `effect/FileSystem`; this module only chooses the Node implementation.
*
* **Mental model**
*
* Provide `NodeFileSystem.layer` at the process boundary when filesystem
* effects should touch the host filesystem. Use `NodeServices.layer` instead
* when the same program also needs the standard Node path, stdio, terminal,
* crypto, and child process services. Tests that need isolation can provide a
* different `FileSystem` layer without changing the code that performs the
* reads and writes.
*
* **Gotchas**
*
* Paths are interpreted by Node, so relative paths resolve against the current
* working directory and platform-specific path rules apply. Filesystem failures
* are reported through Effect platform errors rather than thrown exceptions.
* File watching uses `FileSystem.WatchBackend` when one is available; otherwise
* it follows `node:fs.watch`, whose recursive support, event batching, and
* reported path names vary across operating systems.
*
* @since 4.0.0
*/
/**
* Provides the `FileSystem` service backed by Node filesystem APIs.
*
* @category layers
* @since 4.0.0
*/
var layer$11 = /* @__PURE__ */ effect(FileSystem)(makeFileSystem);
//#endregion
//#region node_modules/.pnpm/@effect+platform-node@4.0.0-beta.74_effect@4.0.0-beta.74_ioredis@5.11.0/node_modules/@effect/platform-node/dist/NodeHttpPlatform.js
/**
* Node.js implementation of the Effect HTTP platform service.
*
* This module connects the portable `HttpPlatform` file response helpers to
* Node runtime primitives. It is used by Node HTTP servers and static file
* handlers when returning local files, public assets, downloads, byte ranges,
* or Web `File` values as `HttpServerResponse` bodies.
*
* Path-based responses are served with `node:fs.createReadStream`; Web `File`
* responses are bridged with `Readable.fromWeb`. The implementation fills in
* `content-type` from `Mime`, falls back to `application/octet-stream`, and
* writes the `content-length` for the selected range or whole file. Node's
* stream `end` option is inclusive, so the platform converts Effect's half-open
* range before reading. Empty bodies use an empty readable stream.
*
* Provide `layer` at the Node runtime edge when file responses, static serving,
* or response bodies created from files need real filesystem and ETag support.
* These responses are raw Node streams, so they are intended for the Node HTTP
* server adapter; keep files available until the response body has been
* consumed and prefer the portable `HttpServerResponse` constructors when a
* response does not depend on Node file or stream behavior.
*
* @since 4.0.0
*/
/**
* Creates the Node `HttpPlatform`, serving file responses from Node readable
* streams and adding MIME type and content-length headers when needed.
*
* @category constructors
* @since 4.0.0
*/
var make$3 = /*#__PURE__*/ make$7({
	fileResponse(path, status, statusText, headers, start, end, contentLength) {
		return raw(contentLength === 0 ? Readable.from([]) : NFS.createReadStream(path, {
			start,
			end: end === void 0 ? void 0 : end - 1
		}), {
			headers: {
				...headers,
				"content-type": headers["content-type"] ?? Mime_default.getType(path) ?? "application/octet-stream",
				"content-length": contentLength.toString()
			},
			status,
			statusText
		});
	},
	fileWebResponse(file, status, statusText, headers, _options) {
		return raw(Readable.fromWeb(file.stream()), {
			headers: merge(headers, fromRecordUnsafe({
				"content-type": headers["content-type"] ?? Mime_default.getType(file.name) ?? "application/octet-stream",
				"content-length": file.size.toString()
			})),
			status,
			statusText
		});
	}
});
/**
* Provides the Node `HttpPlatform` together with the filesystem and ETag
* services it needs for file responses.
*
* @category layers
* @since 4.0.0
*/
var layer$10 = /*#__PURE__*/ pipe(/*#__PURE__*/ effect(HttpPlatform)(make$3), /*#__PURE__*/ provide(layer$11), /*#__PURE__*/ provide(layer$14));
//#endregion
//#region node_modules/.pnpm/@effect+platform-node-shared@4.0.0-beta.75_effect@4.0.0-beta.74/node_modules/@effect/platform-node-shared/dist/NodeCrypto.js
/**
* The `NodeCrypto` module implements Effect's `Crypto` service with
* Node-compatible `node:crypto` APIs. It exports {@link make} as the concrete
* service value and {@link layer} for providing that service to programs that
* need cryptographic random bytes, UUID generation, random values, or SHA
* digests over `Uint8Array` input.
*
* **Common tasks**
*
* - Provide {@link layer} in Node-compatible platform packages and tests
* - Reuse {@link make} when a surrounding layer already manages service
*   construction
* - Compute SHA-1, SHA-256, SHA-384, or SHA-512 digests through
*   `effect/Crypto` after the layer is provided
*
* **Gotchas**
*
* - Random bytes come from `node:crypto.randomBytes`
* - Digests use `node:crypto.createHash`; hash failures become platform
*   errors
* - SHA-1 is included for interoperability with existing protocols, not for
*   new security-sensitive designs
*
* @since 1.0.0
*/
var toHashAlgorithm = (algorithm) => {
	switch (algorithm) {
		case "SHA-1": return "sha1";
		case "SHA-256": return "sha256";
		case "SHA-384": return "sha384";
		case "SHA-512": return "sha512";
	}
};
var digest = (algorithm, data) => try_({
	try: () => Uint8Array.from(Crypto.createHash(toHashAlgorithm(algorithm)).update(data).digest()),
	catch: (cause) => systemError({
		module: "Crypto",
		method: "digest",
		_tag: "Unknown",
		description: "Could not compute digest",
		cause
	})
});
//#endregion
//#region node_modules/.pnpm/@effect+platform-node@4.0.0-beta.74_effect@4.0.0-beta.74_ioredis@5.11.0/node_modules/@effect/platform-node/dist/NodeCrypto.js
/**
* The `NodeCrypto` module provides the Node.js `Crypto` service layer for
* Effect programs. Provide {@link layer} at the edge of a Node application,
* CLI, script, or test to satisfy `effect/Crypto` with Node's `node:crypto`
* implementation for secure random bytes, UUID generation, random values, and
* SHA digest operations.
*
* This module is the public Node adapter around the shared Node-compatible
* implementation. Digest failures are reported as platform errors, and SHA-1
* remains available only for interoperability with existing protocols.
*
* @since 1.0.0
*/
/**
* Layer that provides the Node.js Crypto service implementation.
*
* @category layers
* @since 1.0.0
*/
var layer$8 = /* @__PURE__ */ succeed$1(Crypto$1, /* @__PURE__ */ make$10({
	randomBytes: Crypto.randomBytes,
	digest
}));
//#endregion
//#region node_modules/.pnpm/@effect+platform-node-shared@4.0.0-beta.75_effect@4.0.0-beta.74/node_modules/@effect/platform-node-shared/dist/NodePath.js
/**
* Node-backed provider for Effect's `Path` service.
*
* This module turns Node's `node:path` and `node:url` APIs into `Layer`s for
* programs that depend on `Path`. Use it when code should receive path
* operations from the Effect environment instead of importing `node:path`
* directly, including configuration loading, filesystem composition, and file
* URL conversion.
*
* **Mental model**
*
* `layer` follows the platform semantics of the current Node runtime. The
* `layerPosix` and `layerWin32` variants pin the syntax rules to POSIX or
* Windows, which is useful for deterministic parsing, formatting, and tests.
* All three layers include `fromFileUrl` and `toFileUrl` behavior backed by
* Node's URL conversion functions.
*
* **Gotchas**
*
* Path operations are syntactic: they normalize separators, roots, drive
* letters, UNC segments, extensions, and relative segments without checking the
* filesystem. File URL conversion follows Node's validation and encoding
* rules, and invalid conversions fail with `BadArgument`.
*
* @since 4.0.0
*/
var fromFileUrl = (url) => try_({
	try: () => NodeUrl.fileURLToPath(url),
	catch: (cause) => new BadArgument({
		module: "Path",
		method: "fromFileUrl",
		cause
	})
});
var toFileUrl = (path) => try_({
	try: () => NodeUrl.pathToFileURL(path),
	catch: (cause) => new BadArgument({
		module: "Path",
		method: "toFileUrl",
		cause
	})
});
({ ...Path.posix });
({ ...Path.win32 });
//#endregion
//#region node_modules/.pnpm/@effect+platform-node@4.0.0-beta.74_effect@4.0.0-beta.74_ioredis@5.11.0/node_modules/@effect/platform-node/dist/NodePath.js
/**
* Node.js layers for Effect's `Path` service.
*
* This module adapts Node's path and file URL behavior to the
* platform-independent `Path` service. Provide one of its layers when a Node
* program needs to build, normalize, parse, resolve, or convert paths without
* depending directly on `node:path`.
*
* **Mental model**
*
* `Path` is a syntactic service: it manipulates strings and `file:` URLs. It
* does not read the filesystem, check permissions, or validate that paths
* exist. The selected layer decides which separator, drive-letter, UNC, and URL
* conversion rules are used.
*
* **Common tasks**
*
* Use `layer` for host-platform Node semantics, `layerPosix` for stable POSIX
* behavior, and `layerWin32` for stable Windows behavior. `NodeServices.layer`
* already includes `layer`, so import this module directly when a program wants
* only path support or a platform-specific variant.
*
* **Gotchas**
*
* Results that are correct on one platform may not be portable to another.
* `fromFileUrl` and `toFileUrl` use Node's `node:url` conversion rules and
* report invalid conversions as `BadArgument` failures.
*
* @since 4.0.0
*/
/**
* Provides the default Node `Path` service using the platform's `node:path`
* implementation.
*
* @category layers
* @since 4.0.0
*/
var layer$6 = /* @__PURE__ */ succeed$1(Path$1)({
	[TypeId$7]: TypeId$7,
	...Path,
	fromFileUrl,
	toFileUrl
});
//#endregion
//#region node_modules/.pnpm/@effect+platform-node@4.0.0-beta.74_effect@4.0.0-beta.74_ioredis@5.11.0/node_modules/@effect/platform-node/dist/NodeStdio.js
/**
* Node.js `Stdio` layer for the current process.
*
* The exported layer satisfies the platform-independent `Stdio` service by
* reading command-line arguments from `process.argv`, consuming input from
* `process.stdin`, and writing output streams to `process.stdout` and
* `process.stderr`. It is the stdio bridge used by CLIs, scripts, command
* runners, and tests that intentionally communicate through the host process.
*
* **Mental model**
*
* Effects should depend on `Stdio`; this module decides that the backing
* streams are the global Node process handles. Provide `NodeStdio.layer` when a
* program only needs standard input and output, or `NodeServices.layer` when the
* same entrypoint also needs the other default Node services.
*
* **Gotchas**
*
* The process stdio streams are shared resources. The layer leaves stdin open
* and does not end stdout or stderr by default, avoiding accidental closure of
* handles that other code in the same process may still use. Stdio might be a
* pipe, file, or TTY; terminal-specific behavior such as raw mode, echo, color
* detection, and cursor movement belongs with terminal APIs rather than this
* service.
*
* @since 4.0.0
*/
/**
* Provides the `Stdio` service backed by the current process arguments,
* stdin, stdout, and stderr streams.
*
* @category layers
* @since 4.0.0
*/
var layer$4 = /* @__PURE__ */ succeed$1(Stdio, /*#__PURE__*/ make$9({
	args: /*#__PURE__*/ sync(() => process.argv.slice(2)),
	stdout: (options) => fromWritable({
		evaluate: () => process.stdout,
		onError: (cause) => systemError({
			module: "Stdio",
			method: "stdout",
			_tag: "Unknown",
			cause
		}),
		endOnDone: options?.endOnDone ?? false
	}),
	stderr: (options) => fromWritable({
		evaluate: () => process.stderr,
		onError: (cause) => systemError({
			module: "Stdio",
			method: "stderr",
			_tag: "Unknown",
			cause
		}),
		endOnDone: options?.endOnDone ?? false
	}),
	stdin: /*#__PURE__*/ fromReadable({
		evaluate: () => process.stdin,
		onError: (cause) => systemError({
			module: "Stdio",
			method: "stdin",
			_tag: "Unknown",
			cause
		}),
		closeOnDone: false
	})
}));
/**
* Provides the default process-backed `Terminal` service, ending key input on
* Ctrl+C or Ctrl+D.
*
* @category layers
* @since 4.0.0
*/
var layer$3 = /*#__PURE__*/ effect(Terminal, /*#__PURE__*/ (/* @__PURE__ */ fnUntraced(function* (shouldQuit = defaultShouldQuit) {
	const stdin = process.stdin;
	const stdout = process.stdout;
	const rlRef = yield* make$16({ acquire: acquireRelease(sync(() => {
		const rl = readline.createInterface({
			input: stdin,
			escapeCodeTimeout: 50
		});
		readline.emitKeypressEvents(stdin, rl);
		if (stdin.isTTY) stdin.setRawMode(true);
		return rl;
	}), (rl) => sync(() => {
		if (stdin.isTTY) stdin.setRawMode(false);
		rl.close();
	})) });
	const columns = sync(() => stdout.columns ?? 0);
	const rows = sync(() => stdout.rows ?? 0);
	const readInput = gen(function* () {
		yield* get(rlRef);
		const queue = yield* make$17();
		const handleKeypress = (s, k) => {
			const userInput = {
				input: fromUndefinedOr(s),
				key: {
					name: k.name ?? "",
					ctrl: !!k.ctrl,
					meta: !!k.meta,
					shift: !!k.shift
				}
			};
			offerUnsafe(queue, userInput);
			if (shouldQuit(userInput)) endUnsafe(queue);
		};
		yield* addFinalizer$1(() => sync(() => stdin.off("keypress", handleKeypress)));
		stdin.on("keypress", handleKeypress);
		return queue;
	});
	const readLine = scoped(flatMap(get(rlRef), (readlineInterface) => callback((resume) => {
		const onLine = (line) => resume(succeed(line));
		readlineInterface.once("line", onLine);
		return sync(() => readlineInterface.off("line", onLine));
	})));
	const display = (prompt) => uninterruptible(callback((resume) => {
		stdout.write(prompt, (err) => isNullish(err) ? resume(void_) : resume(fail(badArgument({
			module: "Terminal",
			method: "display",
			description: "Failed to write prompt to stdout",
			cause: err
		}))));
	}));
	return make$8({
		columns,
		rows,
		readInput,
		readLine,
		display
	});
}))(defaultShouldQuit));
function defaultShouldQuit(input) {
	return input.key.ctrl && (input.key.name === "c" || input.key.name === "d");
}
/**
* Provides the Node HTTP support services used by `NodeHttpServer`, including
* the HTTP platform, ETag generator, and core Node platform services.
*
* @category layers
* @since 4.0.0
*/
var layerHttpServices = /*#__PURE__*/ mergeAll(layer$10, layerWeak, /* @__PURE__ */ provideMerge(layer$13, /*#__PURE__*/ mergeAll(layer$11, layer$8, layer$6, layer$4, layer$3)));
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/httpapi/HttpApiError.js
/**
* Built-in error schemas for common HTTP API failure responses.
*
* This module provides reusable `Schema.ErrorClass` values for common HTTP
* status codes, plus `HttpApiSchemaError` for request decoding failures raised
* by the HTTP API runtime. The status errors are ready to use in endpoint or
* middleware error declarations and are understood by builders, generated
* clients, reflection, and OpenAPI generation.
*
* **Mental model**
*
* Each status error carries an `httpApiStatus` schema annotation and implements
* `HttpServerRespondable`. Declaring one as an endpoint error tells the server
* how to encode that failure and tells generated clients how to decode it. Using
* an instance directly as a server response produces an empty response with the
* matching HTTP status.
*
* **Common tasks**
*
* Use classes such as {@link BadRequest}, {@link Unauthorized}, {@link NotFound},
* or {@link InternalServerError} when an API error should have a typed body.
* Use the matching `*NoContent` exports when the wire response intentionally has
* no body but clients should still decode that status into a typed error value.
* Use {@link HttpApiSchemaError} to identify failures from decoding path
* params, headers, query values, body values, or payload values.
*
* **Gotchas**
*
* Custom error schemas need an explicit `HttpApiSchema.status` annotation when
* they should map to a status other than `500 Internal Server Error`. Request
* decoding failures are represented separately by {@link HttpApiSchemaError},
* which responds as `400 Bad Request` unless middleware transforms it into a
* declared API error.
*
* **See also**
*
* `HttpApiSchema` for status and no-content annotations, `HttpApiEndpoint` for
* declaring endpoint errors, `HttpApiMiddleware` for middleware error schemas,
* and `HttpApiBuilder` for server-side error encoding.
*
* @since 4.0.0
*/
var badRequestResponse = /*#__PURE__*/ empty$2({ status: 400 });
ErrorClass("effect/HttpApiError/BadRequest")({ _tag: /*#__PURE__*/ tag("BadRequest") }, {
	description: "BadRequest",
	httpApiStatus: 400
});
ErrorClass("effect/HttpApiError/Unauthorized")({ _tag: /*#__PURE__*/ tag("Unauthorized") }, {
	description: "Unauthorized",
	httpApiStatus: 401
});
ErrorClass("effect/HttpApiError/Forbidden")({ _tag: /*#__PURE__*/ tag("Forbidden") }, {
	description: "Forbidden",
	httpApiStatus: 403
});
ErrorClass("effect/HttpApiError/NotFound")({ _tag: /*#__PURE__*/ tag("NotFound") }, {
	description: "NotFound",
	httpApiStatus: 404
});
ErrorClass("effect/HttpApiError/MethodNotAllowed")({ _tag: /*#__PURE__*/ tag("MethodNotAllowed") }, {
	description: "MethodNotAllowed",
	httpApiStatus: 405
});
ErrorClass("effect/HttpApiError/NotAcceptable")({ _tag: /*#__PURE__*/ tag("NotAcceptable") }, {
	description: "NotAcceptable",
	httpApiStatus: 406
});
ErrorClass("effect/HttpApiError/RequestTimeout")({ _tag: /*#__PURE__*/ tag("RequestTimeout") }, {
	description: "RequestTimeout",
	httpApiStatus: 408
});
ErrorClass("effect/HttpApiError/Conflict")({ _tag: /*#__PURE__*/ tag("Conflict") }, {
	description: "Conflict",
	httpApiStatus: 409
});
ErrorClass("effect/HttpApiError/Gone")({ _tag: /*#__PURE__*/ tag("Gone") }, {
	description: "Gone",
	httpApiStatus: 410
});
ErrorClass("effect/HttpApiError/InternalServerError")({ _tag: /*#__PURE__*/ tag("InternalServerError") }, {
	description: "InternalServerError",
	httpApiStatus: 500
});
ErrorClass("effect/HttpApiError/NotImplemented")({ _tag: /*#__PURE__*/ tag("NotImplemented") }, {
	description: "NotImplemented",
	httpApiStatus: 501
});
ErrorClass("effect/HttpApiError/ServiceUnavailable")({ _tag: /*#__PURE__*/ tag("ServiceUnavailable") }, {
	description: "ServiceUnavailable",
	httpApiStatus: 503
});
/**
* Runtime identifier used to mark and detect `HttpApiSchemaError` values.
*
* @category type IDs
* @since 4.0.0
*/
var HttpApiSchemaErrorTypeId = "~effect/httpapi/HttpApiError/HttpApiSchemaError";
/**
* Error raised when an HTTP API request component fails schema decoding. It records
* which component failed and responds as an empty `400 Bad Request` when rendered
* as a server response.
*
* @category errors
* @since 4.0.0
*/
var HttpApiSchemaError = class HttpApiSchemaError extends TaggedClass("HttpApiSchemaError") {
	[HttpApiSchemaErrorTypeId] = HttpApiSchemaErrorTypeId;
	static is(u) {
		return hasProperty(u, HttpApiSchemaErrorTypeId);
	}
	static wrap(kind, effect) {
		return mapError(effect, (error) => new HttpApiSchemaError({
			kind,
			cause: error
		}));
	}
	name = "HttpApiSchemaError";
	message = this.kind;
	[symbol]() {
		return succeed(badRequestResponse);
	}
};
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/httpapi/HttpApiMiddleware.js
var SecurityTypeId = "~effect/httpapi/HttpApiMiddleware/Security";
/**
* Returns `true` when an HTTP API middleware service is security middleware.
*
* @category guards
* @since 4.0.0
*/
var isSecurity = (u) => hasProperty(u, SecurityTypeId);
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/httpapi/OpenApi.js
/**
* OpenAPI 3.1 generation for declarative `HttpApi` contracts.
*
* This module reflects an `HttpApi` into an OpenAPI document and provides the
* annotations used to shape the generated output. The result can be served from
* `HttpApiBuilder.layer`, rendered by Swagger UI or Scalar, passed to client
* generators, or published through API gateway and documentation pipelines.
*
* **Mental model**
*
* {@link fromApi} walks the API's groups and endpoints and emits OpenAPI tags,
* paths, operations, parameters, request bodies, responses, security schemes,
* and component schemas. Endpoint and schema metadata determine the HTTP
* surface; annotations such as {@link Title}, {@link Description},
* {@link Summary}, {@link Version}, {@link Servers}, {@link License},
* {@link ExternalDocs}, {@link Identifier}, {@link Deprecated}, and
* {@link Format} fill in OpenAPI-specific fields.
*
* **Common tasks**
*
* Use {@link fromApi} to generate the complete specification. Use
* {@link annotations} to attach several OpenAPI annotations at once. Use
* {@link Exclude} to omit a group or endpoint, {@link Override} to shallowly
* merge extra fields into a generated object, and {@link Transform} when the
* generated API, tag, or operation needs a programmatic rewrite.
*
* **Gotchas**
*
* Schema identifiers are used as component names; additional schemas must have
* identifiers, and invalid OpenAPI component keys are rejected during
* generation. `HttpApiSchema` encodings choose media types for JSON,
* form-url-encoded, text, binary, and multipart payloads. No-content schemas
* emit responses without bodies, request and response unions are grouped by
* status code and content type, and `:id` route segments are rendered as `{id}`
* path parameters.
*
* **See also**
*
* `HttpApi` for API composition, `HttpApiEndpoint` for endpoint metadata,
* `HttpApiSchema` for HTTP status and encoding annotations, and
* `HttpApiBuilder` for serving the generated document with an HTTP router.
*
* @since 4.0.0
*/
/**
* OpenAPI annotation for overriding generated identifiers, including operation ids.
*
* @category annotations
* @since 4.0.0
*/
var Identifier = class extends Service()("effect/httpapi/OpenApi/Identifier") {};
/**
* OpenAPI annotation for setting the API title or group tag name.
*
* @category annotations
* @since 4.0.0
*/
var Title = class extends Service()("effect/httpapi/OpenApi/Title") {};
/**
* OpenAPI annotation for setting the generated API version.
*
* @category annotations
* @since 4.0.0
*/
var Version = class extends Service()("effect/httpapi/OpenApi/Version") {};
/**
* OpenAPI annotation for setting generated descriptions on APIs, groups, endpoints, or security schemes.
*
* @category annotations
* @since 4.0.0
*/
var Description = class extends Service()("effect/httpapi/OpenApi/Description") {};
/**
* OpenAPI annotation for setting the generated API license metadata.
*
* @category annotations
* @since 4.0.0
*/
var License = class extends Service()("effect/httpapi/OpenApi/License") {};
/**
* OpenAPI annotation for adding external documentation metadata to groups or endpoints.
*
* @category annotations
* @since 4.0.0
*/
var ExternalDocs = class extends Service()("effect/httpapi/OpenApi/ExternalDocs") {};
/**
* OpenAPI annotation for setting the generated API server list.
*
* @category annotations
* @since 4.0.0
*/
var Servers = class extends Service()("effect/httpapi/OpenApi/Servers") {};
/**
* OpenAPI annotation for setting the format metadata, such as a bearer token format on security schemes.
*
* @category annotations
* @since 4.0.0
*/
var Format = class extends Service()("effect/httpapi/OpenApi/Format") {};
/**
* OpenAPI annotation for setting generated summary text.
*
* @category annotations
* @since 4.0.0
*/
var Summary = class extends Service()("effect/httpapi/OpenApi/Summary") {};
/**
* OpenAPI annotation for marking a generated endpoint operation as deprecated.
*
* @category annotations
* @since 4.0.0
*/
var Deprecated = class extends Service()("effect/httpapi/OpenApi/Deprecated") {};
/**
* OpenAPI annotation for shallowly merging additional fields into a generated OpenAPI object.
*
* @category annotations
* @since 4.0.0
*/
var Override = class extends Service()("effect/httpapi/OpenApi/Override") {};
/**
* Annotation that excludes an annotated group or endpoint from the generated
* OpenAPI specification.
*
* **When to use**
*
* Use to hide internal, experimental, or otherwise undocumented HTTP API groups
* and endpoints from generated OpenAPI output.
*
* @category annotations
* @since 4.0.0
*/
var Exclude = /*#__PURE__*/ Reference("effect/httpapi/OpenApi/Exclude", { defaultValue: constFalse });
/**
* OpenAPI annotation for transforming a generated OpenAPI object.
*
* **Details**
*
* The function is applied during generation to the annotated API, group tag, or
* endpoint operation.
*
* @category annotations
* @since 4.0.0
*/
var Transform = class extends Service()("effect/httpapi/OpenApi/Transform") {};
var apiCache = /*#__PURE__*/ new WeakMap();
/**
* This function checks if a given tag exists within the provided context. If
* the tag is present, it retrieves the associated value and applies the given
* callback function to it. If the tag is not found, the function does nothing.
*/
function processAnnotation(ctx, annotation, f) {
	const o = getOption(ctx, annotation);
	if (isSome(o)) f(o.value);
}
/**
* Converts an `HttpApi` instance into an OpenAPI Specification object.
*
* **Details**
*
* This function takes an `HttpApi` instance, which defines a structured API,
* and generates an OpenAPI Specification (`OpenAPISpec`). The resulting spec
* adheres to the OpenAPI 3.1.0 standard and includes detailed metadata such as
* paths, operations, security schemes, and components. The function processes
* the API's annotations, middleware, groups, and endpoints to build a complete
* and accurate representation of the API in OpenAPI format.
*
* The function also deduplicates schemas, applies transformations, and
* integrates annotations like descriptions, summaries, external documentation,
* and overrides. Cached results are used for better performance when the same
* `HttpApi` instance is processed multiple times.
*
* @category constructors
* @since 4.0.0
*/
function fromApi(api) {
	const cached = apiCache.get(api);
	if (cached !== void 0) return cached;
	let spec = {
		openapi: "3.1.0",
		info: {
			title: "Api",
			version: "0.0.1"
		},
		paths: {},
		components: {
			schemas: {},
			securitySchemes: {}
		},
		security: [],
		tags: []
	};
	const pathOps = [];
	processAnnotation(api.annotations, Title, (title) => {
		spec.info.title = title;
	});
	processAnnotation(api.annotations, Version, (version) => {
		spec.info.version = version;
	});
	processAnnotation(api.annotations, Description, (description) => {
		spec.info.description = description;
	});
	processAnnotation(api.annotations, License, (license) => {
		spec.info.license = license;
	});
	processAnnotation(api.annotations, Summary, (summary) => {
		spec.info.summary = summary;
	});
	processAnnotation(api.annotations, Servers, (servers) => {
		spec.servers = [...servers];
	});
	reflect(api, {
		onGroup({ group }) {
			if (get$1(group.annotations, Exclude)) return;
			let tag = { name: getOrElse$1(group.annotations, Title, () => group.identifier) };
			processAnnotation(group.annotations, Description, (description) => {
				tag.description = description;
			});
			processAnnotation(group.annotations, ExternalDocs, (externalDocs) => {
				tag.externalDocs = externalDocs;
			});
			processAnnotation(group.annotations, Override, (override) => {
				Object.assign(tag, override);
			});
			processAnnotation(group.annotations, Transform, (transformFn) => {
				tag = transformFn(tag);
			});
			spec.tags.push(tag);
		},
		onEndpoint({ endpoint, group, mergedAnnotations, middleware }) {
			if (get$1(mergedAnnotations, Exclude)) return;
			let op = {
				tags: [getOrElse$1(group.annotations, Title, () => group.identifier)],
				operationId: getOrElse$1(endpoint.annotations, Identifier, () => group.topLevel ? endpoint.name : `${group.identifier}.${endpoint.name}`),
				parameters: [],
				security: [],
				responses: {}
			};
			const path = endpoint.path.replace(/:(\w+)\??/g, "{$1}");
			const method = endpoint.method.toLowerCase();
			function processRequestBodies(payloadMap) {
				if (payloadMap.size > 0) {
					const c = {};
					let hasContent = false;
					payloadMap.forEach(({ encoding, schemas }, contentType) => {
						const filtered = schemas.filter((s) => !isNoContent(s.ast));
						if (filtered.length === 0) return;
						hasContent = true;
						const asts = filtered.map(getAST);
						const ast = asts.length === 1 ? asts[0] : new Union$1(asts, "anyOf");
						pathOps.push({
							_tag: "schema",
							ast: toEncodingAST(ast, encoding._tag),
							path: [
								"paths",
								path,
								method,
								"requestBody",
								"content",
								contentType,
								"schema"
							]
						});
						c[contentType] = { schema: {} };
					});
					if (hasContent) op.requestBody = {
						content: c,
						required: true
					};
				}
			}
			function processResponseBodies(bodies, defaultDescription) {
				for (const [status, { content, descriptions }] of bodies) {
					const description = descriptions.size > 0 ? Array.from(descriptions).join(" | ") : defaultDescription();
					op.responses[status] = { description };
					if (content !== void 0) content.forEach((map, encoding) => {
						map.forEach((schemas, contentType) => {
							const asts = Array.from(schemas, getAST);
							const ast = asts.length === 1 ? asts[0] : new Union$1(asts, "anyOf");
							pathOps.push({
								_tag: "schema",
								ast: toEncodingAST(ast, encoding),
								path: [
									"paths",
									path,
									method,
									"responses",
									String(status),
									"content",
									contentType,
									"schema"
								]
							});
							op.responses[status].content ??= {};
							op.responses[status].content[contentType] = { schema: {} };
						});
					});
				}
			}
			function processParameters(schema, i) {
				if (schema) {
					const ast = getLastEncoding(schema.ast);
					if (isObjects(ast)) for (const ps of ast.propertySignatures) {
						op.parameters.push({
							name: String(ps.name),
							in: i,
							schema: {},
							required: i === "path" || !isOptional(ps.type)
						});
						pathOps.push({
							_tag: "parameter",
							ast: ps.type,
							path: [
								"paths",
								path,
								method,
								"parameters",
								String(op.parameters.length - 1),
								"schema"
							]
						});
					}
				}
			}
			processAnnotation(endpoint.annotations, Description, (description) => {
				op.description = description;
			});
			processAnnotation(endpoint.annotations, Summary, (summary) => {
				op.summary = summary;
			});
			processAnnotation(endpoint.annotations, Deprecated, (deprecated) => {
				op.deprecated = deprecated;
			});
			processAnnotation(endpoint.annotations, ExternalDocs, (externalDocs) => {
				op.externalDocs = externalDocs;
			});
			middleware.forEach((middleware) => {
				if (!isSecurity(middleware)) return;
				for (const [name, security] of Object.entries(middleware.security)) {
					processHttpApiSecurity(name, security);
					op.security.push({ [name]: [] });
				}
			});
			function processHttpApiSecurity(name, security) {
				if (spec.components.securitySchemes[name] !== void 0) return;
				spec.components.securitySchemes[name] = makeSecurityScheme(security);
			}
			const hasBody$2 = hasBody(endpoint.method);
			if (hasBody$2) processRequestBodies(endpoint.payload);
			processParameters(endpoint.params, "path");
			if (!hasBody$2 && endpoint.payload.size === 1) {
				const entry = endpoint.payload.values().next().value;
				processParameters(entry.schemas[0], "query");
			}
			processParameters(endpoint.headers, "header");
			processParameters(endpoint.query, "query");
			processResponseBodies(extractResponseBodies(getSuccessSchemas(endpoint), getStatusSuccess, resolveDescriptionOrIdentifier), () => "Success");
			processResponseBodies(extractResponseBodies(getErrorSchemas(endpoint), getStatusError, resolveDescriptionOrIdentifier), () => "Error");
			if (!spec.paths[path]) spec.paths[path] = {};
			processAnnotation(endpoint.annotations, Override, (override) => {
				Object.assign(op, override);
			});
			processAnnotation(endpoint.annotations, Transform, (transformFn) => {
				op = transformFn(op);
			});
			spec.paths[path][method] = op;
		}
	});
	processAnnotation(api.annotations, AdditionalSchemas, (componentSchemas) => {
		componentSchemas.forEach((componentSchema) => {
			const identifier = resolveIdentifier(componentSchema.ast);
			if (identifier !== void 0) {
				if (identifier in spec.components.schemas) throw new globalThis.Error(`Duplicate component schema identifier: ${identifier}`);
				spec.components.schemas[identifier] = {};
				pathOps.push({
					_tag: "schema",
					ast: componentSchema.ast,
					path: [
						"components",
						"schemas",
						identifier
					]
				});
			}
		});
	});
	function escapePath(path) {
		return "/" + path.map(escapeToken).join("/");
	}
	if (isArrayNonEmpty(pathOps)) {
		const jsonSchemaMultiDocument = toMultiDocumentOpenApi3_1(toJsonSchemaMultiDocument(fromASTs(map$2(pathOps, (op) => op.ast))));
		const patchOps = pathOps.map((op, i) => {
			return {
				op: "replace",
				path: escapePath(op.path),
				value: jsonSchemaMultiDocument.schemas[i]
			};
		});
		Object.entries(jsonSchemaMultiDocument.definitions).forEach(([name, definition]) => {
			patchOps.push({
				op: "add",
				path: escapePath([
					"components",
					"schemas",
					name
				]),
				value: definition
			});
		});
		spec = apply(patchOps, spec);
	}
	Object.keys(spec.components.schemas).forEach((key) => {
		if (!VALID_OPEN_API_COMPONENTS_SCHEMAS_KEY_REGEXP.test(key)) throw new globalThis.Error(`Invalid component schema key: ${key}`);
	});
	processAnnotation(api.annotations, Override, (override) => {
		Object.assign(spec, override);
	});
	processAnnotation(api.annotations, Transform, (transformFn) => {
		spec = transformFn(spec);
	});
	apiCache.set(api, spec);
	return spec;
}
function extractResponseBodies(schemas, getStatus, getDescription) {
	const map = /* @__PURE__ */ new Map();
	schemas.forEach(process);
	return map;
	function process(schema) {
		const ast = schema.ast;
		const status = getStatus(ast);
		if (isNoContent(ast)) addNoContent(status, getDescription(schema.ast) ?? "<No Content>");
		else addContent(schema, status, getResponseEncoding(ast));
	}
	function addNoContent(status, description) {
		const statusMap = map.get(status);
		if (statusMap === void 0) map.set(status, {
			descriptions: new Set([description]),
			content: void 0
		});
		else if (description !== void 0) statusMap.descriptions.add(description);
	}
	function addContent(schema, status, encoding) {
		const description = getDescription(schema.ast);
		const statusMap = map.get(status);
		const { _tag, contentType } = encoding;
		if (statusMap === void 0) map.set(status, {
			descriptions: new Set(description !== void 0 ? [description] : []),
			content: new Map([[_tag, new Map([[contentType, new Set([schema])]])]])
		});
		else if (statusMap.content !== void 0) {
			if (description !== void 0) statusMap.descriptions.add(description);
			const contentTypeMap = statusMap.content.get(_tag);
			if (contentTypeMap === void 0) statusMap.content.set(_tag, new Map([[contentType, new Set([schema])]]));
			else {
				const set = contentTypeMap.get(contentType);
				if (set === void 0) contentTypeMap.set(contentType, new Set([schema]));
				else set.add(schema);
			}
		}
	}
}
function resolveDescriptionOrIdentifier(ast) {
	return resolveDescription(ast) ?? resolveIdentifier(ast);
}
var Uint8ArrayEncoding = /*#__PURE__*/ String$1.annotate({ format: "binary" });
function toEncodingAST(ast, _tag) {
	switch (_tag) {
		case "Uint8Array": return Uint8ArrayEncoding.ast;
		case "Text": return String$1.ast;
		case "FormUrlEncoded":
		case "Json": return ast;
		case "Multipart": return persistedFileToBinaryEncoding(ast);
	}
}
function persistedFileToBinaryEncoding(ast) {
	if (isDeclaration(ast) && ast.annotations?.typeConstructor?._tag === "effect/http/PersistedFile") return Uint8ArrayEncoding.ast;
	if (typeof ast?.recur === "function") return ast.recur(persistedFileToBinaryEncoding);
	return ast;
}
var makeSecurityScheme = (security) => {
	const meta = {};
	processAnnotation(security.annotations, Description, (description) => {
		meta.description = description;
	});
	switch (security._tag) {
		case "Basic": return {
			...meta,
			type: "http",
			scheme: "basic"
		};
		case "Http": {
			const format = getOption(security.annotations, Format).pipe(map$3((format) => ({ bearerFormat: format })), getOrUndefined);
			return {
				...meta,
				type: "http",
				scheme: security.scheme,
				...format
			};
		}
		case "ApiKey": return {
			...meta,
			type: "apiKey",
			name: security.key,
			in: security.in
		};
	}
};
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/httpapi/HttpApiBuilder.js
/**
* Server builders for declarative `HttpApi` contracts.
*
* This module is the server-side bridge between an `HttpApi` description and an
* `HttpRouter`. It turns endpoint metadata into routes, decodes incoming
* request parts with `Schema`, runs HTTP API middleware, invokes the registered
* handlers, and encodes successes or declared errors back into
* `HttpServerResponse` values.
*
* **Mental model**
*
* `HttpApi` values describe what can be served; this module supplies how it is
* served. Implement each group with {@link group}, then register the completed
* API with {@link layer}. The layer reads the group implementations from the
* Effect context, adds their routes to the active `HttpRouter`, and can also
* expose the generated OpenAPI document.
*
* **Common tasks**
*
* Use {@link group} with `handlers.handle` to implement every endpoint in one
* API group. Use `handlers.handleRaw` when the handler needs direct access to
* the `HttpServerRequest` or must decode the payload manually. Use
* {@link endpoint} when composing one endpoint route by hand, and use
* {@link securityDecode} or {@link securitySetCookie} inside security-aware
* middleware.
*
* **Gotchas**
*
* Every group in the API must have a matching {@link group} layer before
* {@link layer} is evaluated; otherwise registration fails with a defect naming
* the missing group service. Payload decoding is selected from the request
* media type, so unsupported content types return `415` before the handler
* runs. Request decoding failures are wrapped in `HttpApiSchemaError`; handler
* failures are encoded only when they match the endpoint or middleware error
* schemas.
*
* **See also**
*
* `HttpApi` for the top-level contract, `HttpApiGroup` and `HttpApiEndpoint`
* for declaration, `HttpApiMiddleware` for server and client middleware, and
* `OpenApi` for generated specifications.
*
* @since 4.0.0
*/
/**
* Registers an `HttpApi` with a `HttpRouter`.
*
* @category constructors
* @since 4.0.0
*/
var layer = (api, options) => use(fnUntraced(function* (router) {
	const services = yield* context();
	const routes = [];
	const availableGroups = Array.from(services.mapUnsafe.keys()).filter((key) => key.startsWith("effect/httpapi/HttpApiGroup/"));
	for (const group of Object.values(api.groups)) {
		const groupRoutes = services.mapUnsafe.get(group.key)?.routes;
		if (groupRoutes === void 0) {
			const available = availableGroups.length === 0 ? "none" : availableGroups.join(", ");
			return yield* die(`HttpApiGroup "${group.identifier}" not found (key: "${group.key}"). Did you forget to provide HttpApiBuilder.group(api, "${group.identifier}", ...)? Available groups: ${available}`);
		}
		routes.push(...groupRoutes);
	}
	yield* router.addAll(routes);
	if (options?.openapiPath) {
		const spec = fromApi(api);
		yield* router.add("GET", options.openapiPath, succeed(jsonUnsafe(spec)));
	}
}));
/**
* Create a `Layer` that implements all endpoints in an `HttpApi` group.
*
* **Details**
*
* The `build` function receives an unimplemented `Handlers` instance that can
* be used to add handlers to the group. Implement endpoints with
* `handlers.handle`.
*
* @category handlers
* @since 4.0.0
*/
var group = (api, groupName, build) => effectContext(gen(function* () {
	const services = (yield* context()).pipe(omit(Scope));
	const group = api.groups[groupName];
	const result = build(makeHandlers(group));
	const handlers = isEffect(result) ? yield* result : result;
	const routes = [];
	for (const item of handlers.handlers.values()) routes.push(handlerToRoute(group, item, services));
	return makeUnsafe$2(new Map([[group.key, {
		routes,
		handlers: handlers.handlers
	}]]));
}));
/**
* Type identifier symbol used to brand `Handlers` values.
*
* @category type IDs
* @since 4.0.0
*/
var HandlersTypeId = /*#__PURE__*/ Symbol.for("@effect/platform/HttpApiBuilder/Handlers");
/**
* Decodes credentials for an HTTP API security scheme from the current request,
* supporting bearer, API key, and basic authentication inputs.
*
* @category security
* @since 4.0.0
*/
var securityDecode = (self) => {
	switch (self._tag) {
		case "Http": return map(HttpServerRequest, (request) => make$18((request.headers.authorization ?? "").slice(self.schemeLength)));
		case "ApiKey": {
			const key = self.in === "header" ? self.key.toLowerCase() : self.key;
			const schema = Struct({ [key]: String$1 });
			return match$1(self.in === "query" ? schemaSearchParams(schema) : self.in === "cookie" ? schemaCookies(schema) : schemaHeaders(schema), {
				onFailure: () => make$18(""),
				onSuccess: (match) => make$18(match[key])
			});
		}
		case "Basic": {
			const empty = {
				username: "",
				password: make$18("")
			};
			return HttpServerRequest.pipe(flatMap((request) => fromResult(decodeBase64String((request.headers.authorization ?? "").slice(basicLen)))), match$1({
				onFailure: () => empty,
				onSuccess: (header) => {
					const parts = header.split(":");
					if (parts.length !== 2) return empty;
					return {
						username: parts[0],
						password: make$18(parts[1])
					};
				}
			}));
		}
	}
};
var basicLen = `Basic `.length;
var HandlersProto = {
	[HandlersTypeId]: { _Endpoints: identity },
	pipe() {
		return pipeArguments(this, arguments);
	},
	handle(name, handler, options) {
		const endpoint = this.group.endpoints[name];
		this.handlers.set(name, {
			endpoint,
			handler,
			isRaw: false,
			uninterruptible: options?.uninterruptible ?? false
		});
		return this;
	},
	handleRaw(name, handler, options) {
		const endpoint = this.group.endpoints[name];
		this.handlers.set(name, {
			endpoint,
			handler,
			isRaw: true,
			uninterruptible: options?.uninterruptible ?? false
		});
		return this;
	}
};
var makeHandlers = (group) => {
	const self = Object.create(HandlersProto);
	self.group = group;
	self.handlers = /* @__PURE__ */ new Map();
	return self;
};
function buildPayloadDecoders(payloadMap) {
	const result = /* @__PURE__ */ new Map();
	payloadMap.forEach(({ encoding, schemas }, contentType) => {
		const decode = decodeUnknownEffect$1(Union(schemas));
		if (encoding._tag === "Multipart") result.set(contentType, {
			_tag: "Multipart",
			mode: encoding.mode,
			limits: encoding.limits,
			decode
		});
		else result.set(contentType, {
			_tag: encoding._tag,
			decode,
			nullOnEmpty: schemas.some((s) => isNull(toEncoded(s.ast)))
		});
	});
	return result;
}
function decodePayload(payloadBy, httpRequest, query) {
	const hasBody$1 = hasBody(httpRequest.method);
	const contentType = hasBody$1 ? getRequestMediaType(httpRequest) : "application/x-www-form-urlencoded";
	const existing = payloadBy.get(contentType);
	if (!existing) return text(`Unsupported content-type: ${contentType}`, { status: 415 });
	const { _tag, decode } = existing;
	switch (_tag) {
		case "Multipart":
			if (existing.mode === "buffered") {
				let eff = orDie(httpRequest.multipart);
				if (existing.limits) eff = provideContext(eff, limitsServices(existing.limits));
				return flatMap(eff, decode);
			}
			return succeed(existing.limits ? provideContext$1(httpRequest.multipartStream, limitsServices(existing.limits)) : httpRequest.multipartStream);
		case "Json": return flatMap(orDie(flatMap(httpRequest.text, (text) => {
			if (text === "") return existing.nullOnEmpty ? succeed(null) : undefined_;
			return succeed(JSON.parse(text));
		})), decode);
		case "Text": return flatMap(orDie(httpRequest.text), decode);
		case "FormUrlEncoded": return flatMap(hasBody$1 ? map(orDie(httpRequest.urlParamsBody), toRecord) : succeed(query), decode);
		case "Uint8Array": return flatMap(map(orDie(httpRequest.arrayBuffer), (buffer) => new Uint8Array(buffer)), decode);
	}
}
function handlerToHttpEffect(group, endpoint, context, handler, isRaw) {
	const encodeSuccess = encodeUnknownEffect(makeSuccessSchema(endpoint));
	const encodeError = encodeUnknownEffect(makeErrorSchema(endpoint));
	const decodeParams = map$4(endpoint.params, decodeUnknownEffect$1);
	const decodeHeaders = map$4(endpoint.headers, decodeUnknownEffect$1);
	const decodeQuery = map$4(endpoint.query, decodeUnknownEffect$1);
	const payloadBy = endpoint.payload.size > 0 && !isRaw ? buildPayloadDecoders(endpoint.payload) : void 0;
	return applyMiddleware(group, endpoint, context, gen(function* () {
		const context = getCurrent().context;
		const httpRequest = getUnsafe(context, HttpServerRequest);
		const routeContext = getUnsafe(context, RouteContext);
		const query = getUnsafe(context, ParsedSearchParams);
		const request = {
			request: httpRequest,
			endpoint,
			group
		};
		if (decodeParams) request.params = yield* HttpApiSchemaError.wrap("Params", decodeParams(routeContext.params));
		if (decodeHeaders) request.headers = yield* HttpApiSchemaError.wrap("Headers", decodeHeaders(httpRequest.headers));
		if (decodeQuery) request.query = yield* HttpApiSchemaError.wrap("Query", decodeQuery(query));
		if (payloadBy) {
			const result = decodePayload(payloadBy, httpRequest, query);
			if (isHttpServerResponse(result)) return result;
			if (result !== void 0) request.payload = yield* HttpApiSchemaError.wrap("Payload", result);
		}
		const response = yield* handler(request);
		return isHttpServerResponse(response) ? response : yield* HttpApiSchemaError.wrap("Body", encodeSuccess(response));
	})).pipe(withErrorReporting, catch_((error) => {
		if (HttpApiSchemaError.is(error)) return die(error);
		return orDie(encodeError(error));
	}), provideContext(context));
}
/** @internal */
function handlerToRoute(group, handler, context) {
	const endpoint = handler.endpoint;
	return route(endpoint.method, endpoint.path, handlerToHttpEffect(group, endpoint, context, handler.handler, handler.isRaw), { uninterruptible: handler.uninterruptible });
}
var getRequestContentType = (request) => request.headers["content-type"] ? request.headers["content-type"].toLowerCase().trim() : "application/json";
var getRequestMediaType = (request) => {
	const contentType = getRequestContentType(request);
	const index = contentType.indexOf(";");
	return index === -1 ? contentType : contentType.slice(0, index).trim();
};
var applyMiddleware = (group, endpoint, context, handler) => {
	const options = {
		group,
		endpoint
	};
	for (const key_ of endpoint.middlewares) {
		const key = key_;
		const service = getUnsafe(context, key);
		handler = (isSecurity(key) ? makeSecurityMiddleware(key, service) : service)(handler, options);
	}
	return handler;
};
var securityMiddlewareCache = /*#__PURE__*/ new WeakMap();
var makeSecurityMiddleware = (key, service) => {
	const cached = securityMiddlewareCache.get(service);
	if (cached !== void 0) return cached;
	const entries = Object.entries(key.security).map(([securityKey, security]) => ({
		decode: securityDecode(security),
		middleware: service[securityKey]
	}));
	if (entries.length === 0) return identity;
	const middleware = fnUntraced(function* (handler, options) {
		let lastResult;
		for (let i = 0; i < entries.length; i++) {
			const { decode, middleware } = entries[i];
			const result$1 = yield* result(flatMap(decode, (credential) => middleware(handler, {
				credential,
				endpoint: options.endpoint,
				group: options.group
			})));
			if (isFailure(result$1)) {
				lastResult = result$1;
				continue;
			}
			return result$1.success;
		}
		return yield* fromResult(lastResult);
	});
	securityMiddlewareCache.set(service, middleware);
	return middleware;
};
var $HttpServerResponse = /*#__PURE__*/ declare(isHttpServerResponse);
var toResponseSuccessSchema = /*#__PURE__*/ toResponseSchema(getStatusSuccess);
var toResponseErrorSchema = /*#__PURE__*/ toResponseSchema(getStatusError);
function makeSuccessSchema(endpoint) {
	const schemas = getSuccessSchemas(endpoint).map(toResponseSuccessSchema);
	return schemas.length === 1 ? schemas[0] : Union(schemas);
}
function makeErrorSchema(endpoint) {
	const schemas = getErrorSchemas(endpoint).map(toResponseErrorSchema);
	if (schemas.length === 0) return Never;
	return schemas.length === 1 ? schemas[0] : Union(schemas);
}
function toResponseSchema(getStatus) {
	const cache = /* @__PURE__ */ new WeakMap();
	return (schema) => {
		const cached = cache.get(schema.ast);
		if (cached !== void 0) return cached;
		const responseSchema = $HttpServerResponse.pipe(decodeTo(schema, getResponseTransformation(getStatus, schema)));
		cache.set(responseSchema.ast, responseSchema);
		return responseSchema;
	};
}
function getResponseTransformation(getStatus, schema) {
	const ast = schema.ast;
	return transformOrFail({
		decode: (res) => fail(new Forbidden$1(some(res), { message: "Encode only schema" })),
		encode: getResponseEncode(getStatus(ast), getResponseEncoding(ast), isNoContent(ast))
	});
}
function getResponseEncode(status, encoding, isNoContent) {
	switch (encoding._tag) {
		case "Json": return (e) => {
			if (e === void 0 || isNoContent) return succeed(empty$2({ status }));
			try {
				return succeed(text(JSON.stringify(e), {
					status,
					contentType: encoding.contentType
				}));
			} catch (error) {
				return fail(new InvalidValue(some(e), { message: globalThis.String(error) }));
			}
		};
		case "Text": return (e) => succeed(text(e, {
			status,
			contentType: encoding.contentType
		}));
		case "Uint8Array": return (e) => succeed(uint8Array(e, {
			status,
			contentType: encoding.contentType
		}));
		case "FormUrlEncoded": return (e) => succeed(urlParams(e, { status }).pipe(setHeader("content-type", encoding.contentType)));
	}
}
//#endregion
//#region src/ecom/product/service.ts
var ProductService = class extends Service()("ecom/ProductService") {};
var ProductServiceLive = effect(ProductService, gen(function* () {
	const baseUrl = yield* string("BASE_URL").pipe(nested("DUMMY_JSON"));
	const client = (yield* HttpClient).pipe(mapRequest(prependUrl(baseUrl)), filterStatusOk);
	const getProducts = () => client.get("/products").pipe(flatMap(schemaBodyJson(productListSchema)), catchTag("SchemaError", (e) => fail(new ProductsInvalidResponseError({ cause: e.message }))), catchTag("HttpClientError", (e) => fail(new ProductsFetchError({ cause: e.message }))));
	const getProductById = (id) => client.get(`/products/${id}`).pipe(flatMap(schemaBodyJson(productSchema)), catchTag("SchemaError", (e) => fail(new ProductInvalidResponseError({ cause: e.message }))), catchTag("HttpClientError", (error) => {
		if (error.reason._tag === "StatusCodeError" && error.reason.response.status === 404) return fail(new ProductNotFoundError());
		return fail(new ProductFetchError({ cause: error.message }));
	}));
	return {
		getProducts,
		getProductById
	};
})).pipe(provide(layer$15));
//#endregion
//#region src/ecom/product/endpoint-handlers.ts
var productsGroupLayer = group(ecomApi, "products", (handlers) => gen(function* () {
	const products = yield* ProductService;
	return handlers.handle("getProducts", () => products.getProducts()).handle("getProductById", (ctx) => products.getProductById(ctx.params.id));
}));
var handler = toWebHandler(layer(ecomApi).pipe(provide(productsGroupLayer), provide(ProductServiceLive)).pipe(provide(layerHttpServices))).handler;
//#endregion
//#region src/routes/api/$.ts
var Route = createFileRoute("/api/$")({ server: { handlers: {
	GET: ({ request }) => handler(request),
	POST: ({ request }) => handler(request),
	PUT: ({ request }) => handler(request),
	PATCH: ({ request }) => handler(request),
	DELETE: ({ request }) => handler(request),
	OPTIONS: ({ request }) => handler(request)
} } });
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	ApiSplatRoute: Route.update({
		id: "/api/$",
		path: "/api/$",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
