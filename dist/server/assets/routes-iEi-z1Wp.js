import { i as __toESM, n as require_react, t as require_jsx_runtime } from "./jsx-runtime-DJk4aIBl.js";
import { $a as flatMap$1, $r as catchCause, Aa as interrupt, An as Literal, Ar as remove, At as AtomRegistry, Bn as Union, Br as publishUnsafe, Bt as replacePrevious, Ca as void_$1, Co as constVoid, Cr as Forbidden, Da as combine, Do as pipe, Ei as onExit, Eo as identity, Fa as appendAll, Fi as runSync, Ft as failureWithPrevious, Ga as add, Gn as decodeTo, Gr as runIn, Hi as suspend, Hn as declare, Ht as value, Ia as empty$1, Ii as runSyncWith, Ir as failCauseUnsafe, It as fromExitWithPrevious, J as HttpClient, Jn as encodeUnknownEffect, Ka as empty, La as isArrayNonEmpty, Li as scope, Lr as make$3, Lt as getOrThrow, Ma as fromInputUnsafe, Mi as runCallbackWith, Mt as Schema, Na as isFinite, Nt as builder, Or as empty$2, Ot as RegistryContext, Pa as toMillis, Pi as runForkWith, Pn as String$1, Pr as toPullScoped, Pt as failWithPrevious, Qn as toCodecJson, Ra as isReadonlyArrayNonEmpty, Rn as Uint8Array$1, Rt as initial, So as constTrue, Sr as transformOrFail, Ta as NoSuchElementError, To as flow, Ui as sync, Un as decodeEffect, Ur as getCurrent, Ut as waiting, Vi as succeed, Vn as UnknownFromJsonString, Vt as success, Wa as Service$1, Wi as tap, Wn as decodeSync, Wr as joinAll, Wt as waitingFrom, X as mapRequest, Xi as void_, Xn as isSchemaError, Yn as instanceOf, Yr as as, Z as matchStatus, Za as makeUnsafe$1, Zi as whileLoop, _i as gen, _n as runForEachArray, _t as DecodeError, aa as effect$1, ai as die, at as prependUrl, bi as map$1, br as toEncoded, bt as isHttpClientError, ci as failCause, cn as fromPubSub, ct as setUrl, d as getErrorSchemas, di as fnUntraced, do as PipeInspectableProto, dt as text, eo as flatMapNullishOr, f as getPayloadSchemas, fa as Scope, ft as uint8Array, h as getResponseEncoding, ha as makeUnsafe, ho as hasProperty, hr as isNull, ht as schemaRecord, ia as buildWithMemoMap, ii as contextWith, it as make$4, ja as Scheduler, jr as set$1, jt as batch$1, ka as fail$1, ki as provideService, kr as get$2, la as provide, li as flatMap, ln as fromQueue, lo as some, lt as hasBody, m as getPayloadEncoding, ma as close, mi as forkDetach, mo as hash, mt as fromInput, nt as appendUrlParams, on as ensuring, ot as setBody, p as getSuccessSchemas, pa as addFinalizer, pt as urlParams, q as layer$1, qa as get$1, qn as encodeSync, ri as context$1, rt as bodyFormData, sa as makeMemoMapUnsafe, si as fail, so as match, st as setHeaders, t as ecomApi, ta as isDoneCause, ti as catch_, u as reflect, ua as provideMerge, un as isStream, ur as map$2, ut as isHttpBody, vt as HttpClientError, wi as matchCauseEffect, wo as dual, wr as InvalidValue, xa as isExit, xn as unwrap, xr as transform$1, yi as isEffect, yn as toPull, yo as isObject, yt as StatusCodeError, za as lastNonEmpty, zi as scopedWith, zn as Undefined, zr as offerUnsafe, zt as isSuccess } from "./api-CKuSm2qT.js";
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/SubscriptionRef.js
/**
* The `SubscriptionRef` module combines a fiber-safe mutable reference with a
* replaying stream of state changes. A `SubscriptionRef<A>` stores the latest
* value, serializes updates, and publishes each committed value so subscribers
* can observe state as it evolves.
*
* **Mental model**
*
* - {@link make} creates the reference and immediately publishes the initial
*   value.
* - {@link get} reads the latest value without subscribing.
* - {@link set}, {@link update}, and {@link modify} change the value under the
*   reference semaphore and publish the new value.
* - {@link changes} returns a stream that first emits the current value and
*   then emits future published values.
* - The `Some` variants leave the value unchanged and publish nothing when
*   their `Option` result is empty.
*
* **Common tasks**
*
* - Create shared state with {@link make}.
* - Read once with {@link get} or observe over time with {@link changes}.
* - Replace state with {@link set}, {@link setAndGet}, or {@link getAndSet}.
* - Transform state with {@link update}, {@link updateAndGet},
*   {@link getAndUpdate}, or their effectful variants.
* - Compute a separate result while updating with {@link modify} or
*   {@link modifyEffect}.
*
* **Example** (Reading the current value through changes)
*
* ```ts
* import { Effect, Stream, SubscriptionRef } from "effect"
*
* const program = Effect.gen(function*() {
*   const ref = yield* SubscriptionRef.make(0)
*
*   yield* SubscriptionRef.update(ref, (n) => n + 1)
*
*   const latest = yield* SubscriptionRef.changes(ref).pipe(
*     Stream.take(1),
*     Stream.runCollect
*   )
*
*   return latest
* })
* ```
*
* **Gotchas**
*
* - Every successful set or non-empty update is published, even when the new
*   value is equal to the old one.
* - New subscribers receive the current value from the replay buffer before
*   future updates.
* - Unsafe helpers bypass the semaphore and should only be used when the caller
*   already controls access.
*
* @since 2.0.0
*/
var TypeId$1 = "~effect/SubscriptionRef";
/**
* Returns `true` if the provided value is a `SubscriptionRef`.
*
* **When to use**
*
* Use to narrow an unknown value before calling `SubscriptionRef` operations
* that require a subscription reference.
*
* @category guards
* @since 4.0.0
*/
var isSubscriptionRef = (u) => hasProperty(u, TypeId$1);
({ ...PipeInspectableProto });
/**
* Creates a stream that emits the current value and all subsequent changes to
* the `SubscriptionRef`.
*
* **Details**
*
* The stream will first emit the current value, then emit all future changes
* as they occur.
*
* **Example** (Streaming changes)
*
* ```ts
* import { Deferred, Effect, Fiber, Stream, SubscriptionRef } from "effect"
*
* const program = Effect.gen(function*() {
*   const ref = yield* SubscriptionRef.make(0)
*   const ready = yield* Deferred.make<void>()
*
*   const fiber = yield* SubscriptionRef.changes(ref).pipe(
*     Stream.tap(() => Deferred.succeed(ready, void 0)),
*     Stream.take(3),
*     Stream.runCollect,
*     Effect.forkChild
*   )
*
*   yield* Deferred.await(ready)
*   yield* SubscriptionRef.set(ref, 1)
*   yield* SubscriptionRef.set(ref, 2)
*
*   const values = yield* Fiber.join(fiber)
*   console.log(values) // [ 0, 1, 2 ]
* })
*
* Effect.runPromise(program)
* ```
*
* @category changes
* @since 4.0.0
*/
var changes = (self) => fromPubSub(self.pubsub);
/**
* Retrieves the current value of the `SubscriptionRef`.
*
* **Example** (Reading the current value)
*
* ```ts
* import { Effect, SubscriptionRef } from "effect"
*
* const program = Effect.gen(function*() {
*   const ref = yield* SubscriptionRef.make(42)
*
*   const value = yield* SubscriptionRef.get(ref)
*   console.log(value)
* })
* ```
*
* @category getters
* @since 2.0.0
*/
var get = (self) => sync(() => self.value);
var setUnsafe = (self, value) => {
	self.value = value;
	publishUnsafe(self.pubsub, value);
};
/**
* Sets the value of the `SubscriptionRef`, notifying all subscribers of the
* change.
*
* **Example** (Setting a value)
*
* ```ts
* import { Effect, SubscriptionRef } from "effect"
*
* const program = Effect.gen(function*() {
*   const ref = yield* SubscriptionRef.make(0)
*
*   yield* SubscriptionRef.set(ref, 42)
*
*   const value = yield* SubscriptionRef.get(ref)
*   console.log(value)
* })
* ```
*
* @category setters
* @since 2.0.0
*/
var set = /*#__PURE__*/ dual(2, (self, value) => self.semaphore.withPermit(sync(() => setUnsafe(self, value))));
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/reactivity/Reactivity.js
/**
* The `Reactivity` module provides process-local invalidation for connecting
* writes to dependent reads. It does not cache values itself; it tracks keys,
* registers query handlers, and reruns effects when matching keys are
* invalidated so queues, streams, UI subscriptions, and read models can stay
* fresh after successful writes.
*
* **Mental model**
*
* A query registers one or more keys, runs once immediately, and publishes each
* result to a queue or stream. Invalidating any registered key schedules the
* query to rerun. Mutations wrap an effect and invalidate keys only after it
* succeeds. Keys can be a flat array, or a record whose property names act as
* broad namespaces and whose ids address individual records.
*
* **Common tasks**
*
* - Provide the default in-memory service with {@link layer}.
* - Use {@link query} when callers need a queue of rerun results.
* - Use {@link stream} when downstream code should consume reruns as a stream.
* - Wrap writes with {@link mutation}, or call {@link invalidate} directly when
*   invalidation is already part of the workflow.
* - Use the {@link Reactivity} service directly when many invalidations should
*   be coalesced until a batch exits.
*
* **Gotchas**
*
* - The default layer is process-local; it does not coordinate invalidations
*   across processes or cluster runners.
* - Non-primitive keys are matched by their `Hash.hash` value, so prefer stable
*   key values over mutable objects.
* - If a query fails, its queue or stream fails with the same cause.
* - Invalidations that arrive while a query is already running coalesce into one
*   follow-up run.
*
* **See also**
*
* - {@link query}, {@link stream}, {@link mutation}, and {@link invalidate}
* - {@link layer} and {@link Reactivity}
*
* @since 4.0.0
*/
/**
* Service for key-based reactive invalidation.
*
* **When to use**
*
* Use to provide the invalidation service that refreshes queries, streams, and
* atoms when application keys change.
*
* **Details**
*
* The service can register handlers for keys, invalidate those keys, wrap
* mutations so successful effects invalidate keys, and turn query effects into
* queues or streams that rerun when keys are invalidated.
*
* @category services
* @since 4.0.0
*/
var Reactivity = class extends Service$1()("effect/reactivity/Reactivity") {};
/**
* Creates an in-memory `Reactivity` service.
*
* **Details**
*
* The service tracks handlers by hashed keys and runs the registered handlers when
* matching keys are invalidated.
*
* @category constructors
* @since 4.0.0
*/
var make$2 = /*#__PURE__*/ sync(() => {
	const handlers = /* @__PURE__ */ new Map();
	const invalidateUnsafe = (keys) => {
		keysToHashes(keys, (hash) => {
			const set = handlers.get(hash);
			if (set === void 0) return;
			set.forEach((run) => run());
		});
	};
	const invalidate = (keys) => contextWith((services) => {
		const pending = services.mapUnsafe.get(PendingInvalidation.key);
		if (pending) keysToHashes(keys, (hash) => {
			pending.add(hash);
		});
		else invalidateUnsafe(keys);
		return void_;
	});
	const mutation = (keys, effect) => tap(effect, invalidate(keys));
	const registerUnsafe = (keys, handler) => {
		const resolvedKeys = [];
		keysToHashes(keys, (hash) => {
			resolvedKeys.push(hash);
			let set = handlers.get(hash);
			if (set === void 0) {
				set = /* @__PURE__ */ new Set();
				handlers.set(hash, set);
			}
			set.add(handler);
		});
		return () => {
			for (let i = 0; i < resolvedKeys.length; i++) {
				const set = handlers.get(resolvedKeys[i]);
				set.delete(handler);
				if (set.size === 0) handlers.delete(resolvedKeys[i]);
			}
		};
	};
	const query = (keys, effect) => gen(function* () {
		const services = yield* context$1();
		const scope = get$1(services, Scope);
		const results = yield* make$3();
		const runFork = flow(runForkWith(services), runIn(scope));
		let running = false;
		let pending = false;
		const handleExit = (exit) => {
			if (exit._tag === "Failure") failCauseUnsafe(results, exit.cause);
			else offerUnsafe(results, exit.value);
			if (pending) {
				pending = false;
				runFork(effect).addObserver(handleExit);
			} else running = false;
		};
		function run() {
			if (running) {
				pending = true;
				return;
			}
			running = true;
			runFork(effect).addObserver(handleExit);
		}
		yield* addFinalizer(scope, sync(registerUnsafe(keys, run)));
		run();
		return results;
	});
	const stream = (tables, effect) => query(tables, effect).pipe(map$1(fromQueue), unwrap);
	const withBatch = (effect) => suspend(() => {
		const pending = /* @__PURE__ */ new Set();
		return effect.pipe(provideService(PendingInvalidation, pending), onExit((_) => sync(() => {
			pending.forEach((hash) => {
				const set = handlers.get(hash);
				if (set === void 0) return;
				set.forEach((run) => run());
			});
		})));
	});
	return Reactivity.of({
		mutation,
		query,
		stream,
		invalidateUnsafe,
		invalidate,
		registerUnsafe,
		withBatch
	});
});
var PendingInvalidation = class extends Service$1()("effect/reactivity/Reactivity/PendingInvalidation") {};
/**
* Wraps an effect so the supplied keys are invalidated after the effect succeeds.
*
* **Gotchas**
*
* If the effect fails, the keys are not invalidated.
*
* @category accessors
* @since 4.0.0
*/
var mutation = /*#__PURE__*/ dual(2, (effect, keys) => Reactivity.use((_) => _.mutation(keys, effect)));
/**
* Invalidates the supplied keys through the `Reactivity` service.
*
* **Details**
*
* Registered queries for matching keys are rerun immediately, or collected until
* the enclosing reactivity batch completes.
*
* @category accessors
* @since 4.0.0
*/
var invalidate = (keys) => Reactivity.use((r) => r.invalidate(keys));
/**
* The default layer that provides an in-memory `Reactivity` service.
*
* @category layers
* @since 4.0.0
*/
var layer = /*#__PURE__*/ effect$1(Reactivity)(make$2);
function stringOrHash(u) {
	switch (typeof u) {
		case "string":
		case "number":
		case "bigint":
		case "boolean": return String(u);
		default: return hash(u);
	}
}
var keysToHashes = (keys, f) => {
	if (Array.isArray(keys)) {
		for (let i = 0; i < keys.length; i++) f(stringOrHash(keys[i]));
		return;
	}
	for (const key in keys) {
		f(key);
		const ids = keys[key];
		for (let i = 0; i < ids.length; i++) f(`${key}:${stringOrHash(ids[i])}`);
	}
};
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/reactivity/Atom.js
/**
* Reactive state primitives for values evaluated by an {@link AtomRegistry}.
*
* An {@link Atom} describes how to read a value. The registry is the runtime
* owner: it evaluates reads, caches results, records dependency edges, runs
* effects and streams with the configured runtime services, and disposes nodes
* when they are no longer observed.
*
* **Mental model**
*
* Regular `get(atom)` calls inside a read function create dependencies. When a
* dependency changes or refreshes, dependent atoms are invalidated and re-read
* on demand. One-shot reads such as `get.once(atom)` read the current value
* without creating an edge. The same atom can hold different cached values in
* different registries, so stable atom identity matters; use {@link family} for
* atoms parameterized by input values.
*
* **Common tasks**
*
* Use {@link readable} or {@link writable} for synchronous state, {@link make}
* for effects and streams exposed as `AsyncResult`, {@link fn} for
* command-style effects, {@link pull} for pull-based streams, and
* {@link subscriptionRef} to expose a `SubscriptionRef`. Use {@link kvs},
* {@link searchParam}, and {@link serializable} when atom values need
* persistence, URL state, or server-to-client hydration. Read and mutate atoms
* from Effect code with {@link get}, {@link set}, {@link update},
* {@link refresh}, and {@link mount}; convert observed values to streams with
* {@link toStream} or {@link toStreamResult}.
*
* **Gotchas**
*
* Cache lifetime belongs to the registry, not the atom object. Unobserved
* non-`keepAlive` atoms can be disposed immediately or after their idle TTL,
* which also releases finalizers and may rebuild effects, streams, and derived
* state on the next read. Runtime-backed atoms refresh only through their
* registered refresh hooks or explicit `Reactivity` invalidations; reading an
* `Effect` by itself does not keep external data subscribed.
*
* @since 4.0.0
*/
/**
* Runtime identifier attached to `Atom` values and used by `isAtom`.
*
* @category type IDs
* @since 4.0.0
*/
var TypeId = "~effect/reactivity/Atom";
/**
* Returns `true` when a value is an `Atom`.
*
* @category guards
* @since 4.0.0
*/
var isAtom = (u) => hasProperty(u, TypeId);
/**
* Runtime identifier attached to writable atoms and used by `isWritable`.
*
* @category type IDs
* @since 4.0.0
*/
var WritableTypeId = "~effect/reactivity/Atom/Writable";
/**
* Returns a copy of an atom with an idle time-to-live: finite durations dispose it after inactivity, while an infinite duration keeps it alive.
*
* @category combinators
* @since 4.0.0
*/
var setIdleTTL = /*#__PURE__*/ dual(2, (self, durationInput) => {
	const duration = fromInputUnsafe(durationInput);
	const isFinite$1 = isFinite(duration);
	return Object.assign(Object.create(Object.getPrototypeOf(self)), {
		...self,
		keepAlive: !isFinite$1,
		idleTTL: isFinite$1 ? toMillis(duration) : void 0
	});
});
var removeTtl = /*#__PURE__*/ setIdleTTL(0);
var AtomProto = {
	[TypeId]: TypeId,
	...PipeInspectableProto,
	toJSON() {
		return {
			_id: "Atom",
			keepAlive: this.keepAlive,
			lazy: this.lazy,
			label: this.label
		};
	}
};
var RuntimeProto = {
	...AtomProto,
	atom(arg, options) {
		const read = makeRead(arg, options);
		return readable((get) => {
			const previous = get.self();
			const runtimeResult = get(this);
			if (runtimeResult._tag !== "Success") return replacePrevious(runtimeResult, previous);
			return read(get, runtimeResult.value);
		});
	},
	fn(arg, options) {
		if (arguments.length === 0) return (arg, options) => makeFnRuntime(this, arg, options);
		return makeFnRuntime(this, arg, options);
	},
	pull(arg, options) {
		const pullSignal = removeTtl(state(0));
		return makeStreamPull(pullSignal, readable((get) => {
			const previous = get.self();
			const runtimeResult = get(this);
			if (runtimeResult._tag !== "Success") return replacePrevious(runtimeResult, previous);
			return makeEffect(get, makeStreamPullEffect(get, pullSignal, arg, options), initial(true), runtimeResult.value);
		}));
	},
	subscriptionRef(ref) {
		return makeSubRef(removeTtl(readable((get) => {
			const previous = get.self();
			const runtimeResult = get(this);
			if (runtimeResult._tag !== "Success") return replacePrevious(runtimeResult, previous);
			const value = typeof ref === "function" ? ref(get) : ref;
			return isSubscriptionRef(value) ? value : makeEffect(get, value, initial(true), runtimeResult.value);
		})), (get, ref) => {
			return readSubscriptionRef(get, ref, getOrThrow(get(this)));
		});
	}
};
var makeFnRuntime = (self, arg, options) => {
	const [read, write, argAtom] = makeResultFn(options?.reactivityKeys ? (a, get) => {
		const effect = arg(a, get);
		return isEffect(effect) ? mutation(effect, options.reactivityKeys) : ensuring(effect, invalidate(options.reactivityKeys));
	} : arg, options);
	return writable((get) => {
		get.get(argAtom);
		const previous = get.self();
		const runtimeResult = get.get(self);
		if (runtimeResult._tag !== "Success") return replacePrevious(runtimeResult, previous);
		return read(get, runtimeResult.value);
	}, write);
};
var WritableProto = {
	...AtomProto,
	[WritableTypeId]: WritableTypeId
};
/**
* Returns `true` when an atom is writable.
*
* @category refinements
* @since 4.0.0
*/
var isWritable = (atom) => WritableTypeId in atom;
/**
* Creates a read-only atom from a read function and an optional custom refresh registration callback.
*
* @category constructors
* @since 4.0.0
*/
var readable = (read, refresh) => {
	const self = Object.create(AtomProto);
	self.keepAlive = false;
	self.lazy = true;
	self.read = read;
	self.refresh = refresh;
	return self;
};
/**
* Creates a writable atom from read and write functions, with an optional custom refresh registration callback.
*
* @category constructors
* @since 4.0.0
*/
var writable = (read, write, refresh) => {
	const self = Object.create(WritableProto);
	self.keepAlive = false;
	self.lazy = true;
	self.read = read;
	self.write = write;
	self.refresh = refresh;
	return self;
};
function constSetSelf(ctx, value) {
	ctx.setSelf(value);
}
/**
* Creates an atom from a synchronous value or read function, or from an `Effect` or `Stream` whose state is exposed as an `AsyncResult`; plain values create writable state atoms.
*
* @category constructors
* @since 4.0.0
*/
var make$1 = (arg, options) => {
	const readOrAtom = makeRead(arg, options);
	if ("~effect/reactivity/Atom" in readOrAtom) return readOrAtom;
	return readable(readOrAtom);
};
var makeRead = (arg, options) => {
	if (typeof arg === "function" && !isEffect(arg) && !isStream(arg)) {
		const create = arg;
		return function(get, providedServices) {
			const value = create(get);
			switch (typeof value) {
				case "function":
				case "object":
					if (value === null) return value;
					else if (EffectTypeId in value) return effect(get, value, options, providedServices);
					else if (StreamTypeId in value) return stream(get, value, options, providedServices);
					return value;
				default: return value;
			}
		};
	} else if (isEffect(arg)) return function(get, providedServices) {
		return effect(get, arg, options, providedServices);
	};
	else if (isStream(arg)) return function(get, providedServices) {
		return stream(get, arg, options, providedServices);
	};
	return state(arg);
};
var EffectTypeId = "~effect/Effect";
var StreamTypeId = "~effect/Stream";
var state = (initialValue) => writable(function(_get) {
	return initialValue;
}, constSetSelf);
var effect = (get, effect, options, services) => {
	return makeEffect(get, effect, options?.initialValue !== void 0 ? success(options.initialValue) : initial(), services, options?.uninterruptible);
};
function makeEffect(ctx, effect, initialValue, services = empty(), uninterruptible = false) {
	const previous = ctx.self();
	const scope = makeUnsafe();
	ctx.addFinalizer(() => {
		runForkWith(services)(close(scope, void_$1));
	});
	const servicesMap = new Map(services.mapUnsafe);
	servicesMap.set(Scope.key, scope);
	servicesMap.set(AtomRegistry.key, ctx.registry);
	servicesMap.set(Scheduler.key, ctx.registry.scheduler);
	let syncResult;
	let isAsync = false;
	const cancel = runCallbackSync(makeUnsafe$1(servicesMap), effect, function(exit) {
		syncResult = fromExitWithPrevious(exit, previous);
		if (isAsync) ctx.setSelf(syncResult);
	}, uninterruptible);
	isAsync = true;
	if (cancel !== void 0) ctx.addFinalizer(cancel);
	if (syncResult !== void 0) return syncResult;
	else if (previous._tag === "Some") return waitingFrom(previous);
	return waiting(initialValue);
}
function runCallbackSync(services, effect, onExit, uninterruptible = false) {
	if (isExit(effect)) {
		onExit(effect);
		return;
	}
	const fiber = runForkWith(services)(effect);
	fiber.currentDispatcher?.flush();
	const result = fiber.pollUnsafe();
	if (result) {
		onExit(result);
		return;
	}
	const remove = fiber.addObserver(onExit);
	function cancel() {
		remove();
		if (!uninterruptible) fiber.interruptUnsafe();
	}
	return cancel;
}
/**
* Creates a `RuntimeFactory` backed by the supplied `Layer.MemoMap`.
*
* @category constructors
* @since 4.0.0
*/
var context = (options) => {
	let globalLayer = layer;
	function factory(create) {
		const self = Object.create(RuntimeProto);
		self.keepAlive = false;
		self.lazy = true;
		self.refresh = void 0;
		self.factory = factory;
		const layerAtom = keepAlive(typeof create === "function" ? readable((get) => provideMerge(create(get), globalLayer)) : readable(() => provideMerge(create, globalLayer)));
		self.layer = layerAtom;
		self.read = function read(get) {
			const layer = get(layerAtom);
			return effect(get, flatMap(scope, (scope) => buildWithMemoMap(layer, options.memoMap, scope)), { uninterruptible: true });
		};
		return self;
	}
	factory.memoMap = options.memoMap;
	factory.addGlobalLayer = (layer$2) => {
		globalLayer = provideMerge(globalLayer, provide(layer$2, layer));
	};
	const reactivityAtom = removeTtl(make$1(contextWith((services) => buildWithMemoMap(layer, options.memoMap, get$1(services, Scope))).pipe(map$1(get$1(Reactivity)))));
	factory.withReactivity = (keys) => (atom) => transform(atom, (get) => {
		const reactivity = getOrThrow(get(reactivityAtom));
		get.addFinalizer(reactivity.registerUnsafe(keys, () => {
			get.refresh(atom);
		}));
		get.subscribe(atom, (value) => get.setSelf(value));
		return get.once(atom);
	}, { initialValueTarget: atom });
	return factory;
};
/**
* Default `RuntimeFactory` created with `defaultMemoMap`.
*
* @category context
* @since 4.0.0
*/
var runtime = /*#__PURE__*/ context({ memoMap: /* @__PURE__ */ makeMemoMapUnsafe() });
runtime.withReactivity;
var stream = (get, stream, options, services) => {
	return makeStream(get, stream, options?.initialValue !== void 0 ? success(options.initialValue) : initial(), services);
};
function makeStream(ctx, stream, initialValue, services = empty()) {
	const previous = ctx.self();
	services = add(services, AtomRegistry, ctx.registry);
	const run = scopedWith((scope) => flatMap(toPullScoped(stream.channel, scope), (pull) => whileLoop({
		while: constTrue,
		body: () => pull,
		step(arr) {
			ctx.setSelf(success(lastNonEmpty(arr), { waiting: true }));
		}
	}))).pipe(catchCause((cause) => {
		if (isDoneCause(cause)) pipe(ctx.self(), flatMap$1(value), match({
			onNone: () => ctx.setSelf(failWithPrevious(new NoSuchElementError(), { previous: ctx.self() })),
			onSome: (a) => ctx.setSelf(success(a))
		}));
		else ctx.setSelf(failureWithPrevious(cause, { previous: ctx.self() }));
		return void_;
	}));
	const servicesMap = new Map(services.mapUnsafe);
	servicesMap.set(AtomRegistry.key, ctx.registry);
	servicesMap.set(Scheduler.key, ctx.registry.scheduler);
	const cancel = runCallbackSync(makeUnsafe$1(servicesMap), run, constVoid, false);
	if (cancel !== void 0) ctx.addFinalizer(cancel);
	if (previous._tag === "Some") return waitingFrom(previous);
	return waiting(initialValue);
}
var readSubscriptionRef = (get$3, sub, services = empty()) => {
	if (isSubscriptionRef(sub)) {
		get$3.addFinalizer(changes(sub).pipe(runForEachArray((arr) => {
			for (let i = 0; i < arr.length; i++) get$3.setSelf(arr[i]);
			return void_;
		}), runCallbackWith(services)));
		return runSyncWith(services)(get(sub));
	} else if (sub._tag !== "Success") return sub;
	return makeStream(get$3, changes(sub.value), initial(true), services);
};
var makeSubRef = (refAtom, read) => {
	function write(ctx, value) {
		const ref = ctx.get(refAtom);
		if (isSubscriptionRef(ref)) runSync(set(ref, value));
		else if (isSuccess(ref)) runSync(set(ref.value, value));
	}
	return writable((get) => {
		const ref = get(refAtom);
		if (isSubscriptionRef(ref)) return read(get, ref);
		else if (isSuccess(ref)) return read(get, ref);
		return ref;
	}, write);
};
/**
* Defines the control symbol that can be written to an `AtomResultFn` to reset it to its initial state.
*
* **When to use**
*
* Use to write to an `AtomResultFn` when you need to clear the current async
* result and return it to the initial state.
*
* @category symbols
* @since 4.0.0
*/
var Reset = /*#__PURE__*/ Symbol.for("effect/reactivity/atom/Atom/Reset");
/**
* Defines the control symbol that can be written to an `AtomResultFn` to interrupt the current asynchronous computation.
*
* **When to use**
*
* Use to write to an `AtomResultFn` when you need to interrupt the currently
* running async computation.
*
* @category symbols
* @since 4.0.0
*/
var Interrupt = /*#__PURE__*/ Symbol.for("effect/reactivity/atom/Atom/Interrupt");
function makeResultFn(f, options) {
	const argAtom = removeTtl(state([0, void 0]));
	const initialValue = options?.initialValue !== void 0 ? success(options.initialValue) : initial();
	const fibersAtom = options?.concurrent ? removeTtl(readable((get) => {
		const fibers = /* @__PURE__ */ new Set();
		get.addFinalizer(() => fibers.forEach((f) => f.interruptUnsafe()));
		return fibers;
	})) : void 0;
	function read(get, services) {
		const fibers = fibersAtom ? get(fibersAtom) : void 0;
		get.isFn = true;
		const [counter, arg] = get.get(argAtom);
		if (counter === 0) return initialValue;
		else if (arg === Interrupt) return failureWithPrevious(interrupt(), { previous: get.self() });
		let value = f(arg, get);
		if (EffectTypeId in value) {
			if (fibers) value = flatMap(forkDetach(value, { startImmediately: true }), (fiber) => {
				fibers.add(fiber);
				fiber.addObserver(() => fibers.delete(fiber));
				return map$1(joinAll(fibers), (arr) => arr[0]);
			});
			return makeEffect(get, value, initialValue, services, false);
		}
		return makeStream(get, value, initialValue, services);
	}
	function write(ctx, arg) {
		batch(() => {
			if (arg === Reset) ctx.set(argAtom, [0, void 0]);
			else if (arg === Interrupt) ctx.set(argAtom, [ctx.get(argAtom)[0] + 1, Interrupt]);
			else ctx.set(argAtom, [ctx.get(argAtom)[0] + 1, arg]);
			ctx.refreshSelf();
		});
	}
	return [
		read,
		write,
		argAtom
	];
}
var makeStreamPullEffect = (get, pullSignal, create, options) => flatMap(toPull(typeof create === "function" ? create(get) : create), (pullChunk) => {
	const services = getCurrent().context;
	let acc = empty$1();
	const pull = matchCauseEffect(pullChunk, {
		onFailure(cause) {
			if (isDoneCause(cause)) {
				if (!isReadonlyArrayNonEmpty(acc)) return fail(new NoSuchElementError(`Atom.pull: no items`));
				return succeed({
					done: true,
					items: acc
				});
			}
			return failCause(cause);
		},
		onSuccess(chunk) {
			let items;
			if (options?.disableAccumulation) items = chunk;
			else {
				items = appendAll(acc, chunk);
				acc = items;
			}
			return succeed({
				done: false,
				items
			});
		}
	});
	const cancels = /* @__PURE__ */ new Set();
	get.addFinalizer(() => {
		for (const cancel of cancels) cancel();
	});
	get.once(pullSignal);
	get.subscribe(pullSignal, () => {
		get.setSelf(waitingFrom(get.self()));
		let cancel;
		cancel = runCallbackSync(services, pull, (exit) => {
			if (cancel) cancels.delete(cancel);
			const result = fromExitWithPrevious(exit, get.self());
			const pending = cancels.size > 0;
			get.setSelf(pending ? waiting(result) : result);
		});
		if (cancel) cancels.add(cancel);
	});
	return pull;
});
var makeStreamPull = (pullSignal, pullAtom) => writable(pullAtom.read, function(ctx, _) {
	ctx.set(pullSignal, ctx.get(pullSignal) + 1);
});
/**
* Creates a memoized atom factory that returns the same object for the same argument, using weak references for cached values when the platform supports them.
*
* @category constructors
* @since 4.0.0
*/
var family = typeof WeakRef === "undefined" || typeof FinalizationRegistry === "undefined" ? (f) => {
	const atoms = empty$2();
	return function(arg) {
		const atomEntry = get$2(atoms, arg);
		if (atomEntry._tag === "Some") return atomEntry.value;
		const newAtom = f(arg);
		set$1(atoms, arg, newAtom);
		return newAtom;
	};
} : (f) => {
	const atoms = empty$2();
	const registry = new FinalizationRegistry((arg) => {
		remove(atoms, arg);
	});
	return function(arg) {
		const atomEntry = get$2(atoms, arg).pipe(flatMapNullishOr((ref) => ref.deref()));
		if (atomEntry._tag === "Some") return atomEntry.value;
		const newAtom = f(arg);
		set$1(atoms, arg, new WeakRef(newAtom));
		registry.register(newAtom, arg);
		return newAtom;
	};
};
/**
* Returns a copy of an atom that remains cached and mounted even when no subscribers are using it.
*
* @category combinators
* @since 4.0.0
*/
var keepAlive = (self) => Object.assign(Object.create(Object.getPrototypeOf(self)), {
	...self,
	keepAlive: true
});
/**
* Creates a derived atom by reading another atom with a custom `AtomContext`
* function.
*
* **Details**
*
* If the source is writable, the derived atom keeps the source write input and
* forwards writes to the source. `initialValueTarget` controls which atom receives
* preloaded initial values for the derived atom.
*
* @category combinators
* @since 4.0.0
*/
var transform = /*#__PURE__*/ dual((args) => isAtom(args[0]), (self, f, options) => {
	const atom = removeTtl(isWritable(self) ? writable((get) => f(get, self), function(ctx, value) {
		ctx.set(self, value);
	}, self.refresh ?? function(refresh) {
		refresh(self);
	}) : readable((get) => f(get, self), self.refresh ?? function(refresh) {
		refresh(self);
	}));
	if (options?.initialValueTarget) atom.initialValueTarget = getInitialValueTarget(options.initialValueTarget);
	return atom;
});
var getInitialValueTarget = (atom) => {
	let target = atom;
	while (target.initialValueTarget) target = target.initialValueTarget;
	return target;
};
/**
* Maps the current value of an atom with a pure function.
*
* **Details**
*
* When the source atom is writable, the returned atom remains writable and keeps
* the source atom's write input type.
*
* @category combinators
* @since 4.0.0
*/
var map = /*#__PURE__*/ dual(2, (self, f) => transform(self, (get) => f(get(self))));
/**
* Runs synchronous atom updates as a batch.
*
* **Details**
*
* Stale nodes are rebuilt and listeners are notified after the callback completes,
* so dependent updates observe the final batched state.
*
* @category batching
* @since 4.0.0
*/
var batch = batch$1;
/**
* The type id used to mark atoms that carry serialization metadata.
*
* @category type IDs
* @since 4.0.0
*/
var SerializableTypeId = "~effect-atom/atom/Atom/Serializable";
/**
* Attaches serialization metadata to an atom using a schema and stable key.
*
* **Details**
*
* The schema is converted to a JSON codec for synchronous encode/decode, and the
* key is also used as the atom label when the atom does not already have one.
*
* @category combinators
* @since 4.0.0
*/
var serializable = /*#__PURE__*/ dual(2, (self, options) => {
	const codecJson = toCodecJson(options.schema);
	return Object.assign(Object.create(Object.getPrototypeOf(self)), {
		...self,
		label: self.label ?? [options.key, (/* @__PURE__ */ new Error()).stack?.split("\n")[5] ?? ""],
		[SerializableTypeId]: {
			key: options.key,
			encode: encodeSync(codecJson),
			decode: decodeSync(codecJson)
		}
	});
});
/**
* The type id used to mark atoms with a server-side read override.
*
* @category type IDs
* @since 4.0.0
*/
var ServerValueTypeId = "~effect-atom/atom/Atom/ServerValue";
/**
* Reads an atom from a registry, using its server-side read override when one is
* present.
*
* **Details**
*
* Nested reads performed by the override are resolved against the same registry.
*
* @category ServerValue
* @since 4.0.0
*/
var getServerValue = /*#__PURE__*/ dual(2, (self, registry) => "~effect-atom/atom/Atom/ServerValue" in self ? self[ServerValueTypeId]((atom) => registry.get(atom)) : registry.get(self));
//#endregion
//#region node_modules/.pnpm/@effect+atom-react@4.0.0-beta.74_effect@4.0.0-beta.74_react@19.2.7_scheduler@0.27.0/node_modules/@effect/atom-react/dist/Hooks.js
/**
* React hooks for reading, writing, mounting, refreshing, and subscribing to
* Effect atoms from the registry provided by `RegistryContext`.
*
* **Common tasks**
*
* - Read atom values in React components with {@link useAtomValue}
* - Read and write writable atoms with {@link useAtom}
* - Write without subscribing to the value with {@link useAtomSet}
* - Seed registry-local initial values with {@link useAtomInitialValues}
* - Integrate `AsyncResult` atoms with React Suspense through {@link useAtomSuspense}
* - Subscribe to atom changes or derive stable `AtomRef` properties
*
* **Gotchas**
*
* - Hooks use the current `RegistryContext`, so each provider has an independent atom registry
* - Writable atoms are mounted by the write-oriented hooks before updates are sent
* - Suspense support throws promises for initial or waiting `AsyncResult` values and defects for failures unless `includeFailure` is enabled
*
* @since 4.0.0
*/
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var storeRegistry = /*#__PURE__*/ new WeakMap();
function makeStore(registry, atom) {
	let stores = storeRegistry.get(registry);
	if (stores === void 0) {
		stores = /* @__PURE__ */ new WeakMap();
		storeRegistry.set(registry, stores);
	}
	const store = stores.get(atom);
	if (store !== void 0) return store;
	const newStore = {
		subscribe(f) {
			return registry.subscribe(atom, f);
		},
		snapshot() {
			return registry.get(atom);
		},
		getServerSnapshot() {
			return getServerValue(atom, registry);
		}
	};
	stores.set(atom, newStore);
	return newStore;
}
function useStore(registry, atom) {
	const store = makeStore(registry, atom);
	return import_react.useSyncExternalStore(store.subscribe, store.snapshot, store.getServerSnapshot);
}
/**
* Subscribes to an atom in the current React registry and returns its current
* value, optionally mapped through a selector.
*
* **When to use**
*
* Use when a React component needs to render from an atom value without also
* returning a setter.
*
* **Details**
*
* When a selector is provided, the hook maps the atom before subscribing so the
* component reads the selected value from the current `RegistryContext`.
*
* @see {@link useAtom} for reading and updating a writable atom from one component
* @see {@link useAtomRef} for reading an `AtomRef` directly
*
* @category hooks
* @since 4.0.0
*/
var useAtomValue = (atom, f) => {
	const registry = import_react.useContext(RegistryContext);
	if (f) return useStore(registry, import_react.useMemo(() => map(atom, f), [atom, f]));
	return useStore(registry, atom);
};
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/httpapi/HttpApiClient.js
/**
* Type-safe HTTP clients derived from `HttpApi` declarations.
*
* This module turns the groups and endpoints described by an `HttpApi` into
* callable client methods backed by an `HttpClient`. Use {@link make} or
* {@link makeWith} to call a remote API with the same schema-driven contract as
* the server, and use {@link group}, {@link endpoint}, or {@link urlBuilder}
* when only part of an API or only the encoded URL is needed.
*
* **Mental model**
*
* A generated client mirrors the API structure: top-level endpoints become
* methods on the client, and named groups become nested objects. Each call
* encodes path parameters, query values, headers, and payloads from endpoint
* schemas, runs client middleware, executes the request, and decodes successful
* or declared error responses from the returned `HttpClientResponse`.
*
* **Common tasks**
*
* Use {@link make} when the `HttpClient` service should come from the Effect
* environment. Use {@link makeWith} when a concrete or transformed client is
* already available. Use {@link urlBuilder} to reuse endpoint path and query
* encoding without executing a request. Select `responseMode` per call when
* code needs the decoded value, the raw response, or both.
*
* **Gotchas**
*
* Payloads for HTTP methods without request bodies are encoded into URL
* parameters, and multipart payloads must be supplied as `FormData`.
* `response-only` skips success and error decoding for custom response
* handling. Declared error responses decode into the endpoint error type;
* unknown statuses fail as `HttpClientError.DecodeError`, and response decoding
* can fail with `SchemaError`.
*
* @since 4.0.0
*/
/** @internal */
var makeClient = (api, options) => gen(function* () {
	const services = yield* context$1();
	const httpClient = options.httpClient.pipe(options?.baseUrl === void 0 ? identity : mapRequest(prependUrl(options.baseUrl.toString())));
	function executeMiddleware(group, endpoint, request, middlewareKeys, index) {
		if (index === -1) return httpClient.execute(request);
		const middleware = services.mapUnsafe.get(middlewareKeys[index]);
		if (middleware === void 0) return executeMiddleware(group, endpoint, request, middlewareKeys, index - 1);
		return middleware({
			endpoint,
			group,
			request,
			next(request) {
				return executeMiddleware(group, endpoint, request, middlewareKeys, index - 1);
			}
		});
	}
	reflect(api, {
		predicate: options?.predicate,
		onGroup(onGroupOptions) {
			options.onGroup?.(onGroupOptions);
		},
		onEndpoint(onEndpointOptions) {
			const { group, endpoint, errors, successes } = onEndpointOptions;
			const makeUrl = compilePath(endpoint.path);
			const decodeMap = { orElse: statusOrElse };
			const decodeResponse = matchStatus(decodeMap);
			errors.forEach((schemas, status) => {
				const decode = schemasToResponse(schemas);
				decodeMap[status] = (response) => flatMap(catchCause(decode(response), (cause) => failCause(combine(fail$1(new HttpClientError({ reason: new StatusCodeError({
					request: response.request,
					response
				}) })), cause))), fail);
			});
			successes.forEach((schemas, status) => {
				decodeMap[status] = schemasToResponse(schemas);
			});
			const encodeParams = map$2(endpoint.params, encodeUnknownEffect);
			const payloadSchemas = getPayloadSchemas(endpoint);
			const encodePayload = isArrayNonEmpty(payloadSchemas) ? hasBody(endpoint.method) ? encodeUnknownEffect(getEncodePayloadSchema(payloadSchemas, endpoint.method)) : encodeUnknownEffect(Union(payloadSchemas)) : void 0;
			const encodeHeaders = map$2(endpoint.headers, encodeUnknownEffect);
			const encodeQuery = map$2(endpoint.query, encodeUnknownEffect);
			const middlewareKeys = Array.from(onEndpointOptions.middleware, (tag) => `${tag.key}/Client`);
			const endpointFn = fnUntraced(function* (request) {
				let httpRequest = make$4(endpoint.method)(endpoint.path);
				if (request !== void 0) {
					if (encodeParams !== void 0) {
						const params = yield* encodeParams(request.params);
						httpRequest = setUrl(httpRequest, makeUrl(params));
					}
					if (encodePayload !== void 0) if (hasBody(endpoint.method)) if (request.payload instanceof FormData) httpRequest = bodyFormData(httpRequest, request.payload);
					else {
						const body = yield* encodePayload(request.payload);
						httpRequest = setBody(httpRequest, body);
					}
					else {
						const urlParams = yield* encodePayload(request.payload);
						httpRequest = appendUrlParams(httpRequest, urlParams);
					}
					if (encodeHeaders !== void 0) {
						const headers = yield* encodeHeaders(request.headers);
						httpRequest = setHeaders(httpRequest, headers);
					}
					if (encodeQuery !== void 0) {
						const query = yield* encodeQuery(request.query);
						httpRequest = appendUrlParams(httpRequest, query);
					}
				}
				const response = yield* executeMiddleware(group, endpoint, httpRequest, middlewareKeys, middlewareKeys.length - 1);
				if (request?.responseMode === "response-only") return response;
				const value = yield* options.transformResponse === void 0 ? decodeResponse(response) : options.transformResponse(decodeResponse(response));
				return request?.responseMode === "decoded-and-response" ? [value, response] : value;
			});
			options.onEndpoint({
				...onEndpointOptions,
				endpointFn
			});
		}
	});
});
/**
* Constructs a type-safe client for an HTTP API using the `HttpClient` service,
* endpoint schemas, middleware, and optional client or response transformations.
*
* @category constructors
* @since 4.0.0
*/
var make = (api, options) => flatMap(HttpClient, (httpClient) => makeWith(api, {
	...options,
	httpClient: options?.transformClient ? options.transformClient(httpClient) : httpClient
}));
/**
* Constructs a type-safe client for an HTTP API from the supplied `HttpClient`,
* using the API metadata to encode requests, execute middleware, and decode
* responses.
*
* @category constructors
* @since 4.0.0
*/
var makeWith = (api, options) => {
	const client = {};
	return makeClient(api, {
		...options,
		onGroup({ group }) {
			if (group.topLevel) return;
			client[group.identifier] = {};
		},
		onEndpoint({ endpoint, endpointFn, group }) {
			(group.topLevel ? client : client[group.identifier])[endpoint.name] = endpointFn;
		}
	}).pipe(as(client));
};
var paramsRegExp = /:(\w+)\??/g;
var compilePath = (path) => {
	const segments = path.split(paramsRegExp);
	const len = segments.length;
	if (len === 1) return (_) => path;
	return (params) => {
		let url = segments[0];
		for (let i = 1; i < len; i++) if (i % 2 === 0) url += segments[i];
		else url += params[segments[i]];
		return url;
	};
};
function schemasToResponse(schemas) {
	const decode = decodeEffect(toCodecArrayBuffer(schemas));
	return (response) => flatMap(response.arrayBuffer, decode);
}
var ArrayBuffer = /*#__PURE__*/ instanceOf(globalThis.ArrayBuffer, { expected: "ArrayBuffer" });
var Uint8ArrayFromArrayBuffer = /*#__PURE__*/ ArrayBuffer.pipe(/*#__PURE__*/ decodeTo(Uint8Array$1, /*#__PURE__*/ transform$1({
	decode(fromA) {
		return new Uint8Array(fromA);
	},
	encode(arr) {
		return arr.byteLength === arr.buffer.byteLength ? arr.buffer : arr.buffer.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
	}
})));
var StringFromArrayBuffer = /*#__PURE__*/ ArrayBuffer.pipe(/*#__PURE__*/ decodeTo(String$1, /*#__PURE__*/ transform$1({
	decode(fromA) {
		return new TextDecoder().decode(fromA);
	},
	encode(toI) {
		const arr = new TextEncoder().encode(toI);
		return arr.byteLength === arr.buffer.byteLength ? arr.buffer : arr.buffer.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
	}
})));
var UnknownFromArrayBuffer = /*#__PURE__*/ StringFromArrayBuffer.pipe(/*#__PURE__*/ decodeTo(/*#__PURE__*/ Union([/*#__PURE__*/ Literal("").pipe(/*#__PURE__*/ decodeTo(Undefined, /*#__PURE__*/ transform$1({
	decode: () => void 0,
	encode: () => ""
}))), UnknownFromJsonString])));
function toCodecArrayBuffer(schemas) {
	return Union(schemas.map(onSchema));
	function onSchema(schema) {
		switch (getResponseEncoding(schema.ast)._tag) {
			case "Json": {
				const encodedIsNull = isNull(toEncoded(schema.ast));
				return UnknownFromArrayBuffer.pipe(decodeTo(schema, encodedIsNull ? transform$1({
					decode: (a) => a === void 0 ? null : a,
					encode: (a) => a === null ? void 0 : a
				}) : void 0));
			}
			case "FormUrlEncoded": return StringFromArrayBuffer.pipe(decodeTo(schemaRecord), decodeTo(schema));
			case "Uint8Array": return Uint8ArrayFromArrayBuffer.pipe(decodeTo(schema));
			case "Text": return StringFromArrayBuffer.pipe(decodeTo(schema));
		}
	}
}
var statusOrElse = (response) => fail(new HttpClientError({ reason: new DecodeError({
	request: response.request,
	response
}) }));
var $HttpBody = /*#__PURE__*/ declare(isHttpBody);
function getEncodePayloadSchema(schemas, method) {
	return Union(schemas.map((s) => getEncodePayloadSchemaFromBody(s, method)));
}
var bodyFromPayloadCache = /*#__PURE__*/ new WeakMap();
function getEncodePayloadSchemaFromBody(schema, method) {
	const ast = schema.ast;
	const cached = bodyFromPayloadCache.get(ast);
	if (cached !== void 0) return cached;
	const encoding = getPayloadEncoding(ast, method);
	const out = $HttpBody.pipe(decodeTo(schema, transformOrFail({
		decode(httpBody) {
			return fail(new Forbidden(some(httpBody), { message: "Encode only schema" }));
		},
		encode(t) {
			switch (encoding._tag) {
				case "Multipart": return fail(new Forbidden(some(t), { message: "Payload must be a FormData" }));
				case "Json": try {
					return succeed(text(JSON.stringify(t), encoding.contentType));
				} catch (error) {
					return fail(new InvalidValue(some(t), { message: globalThis.String(error) }));
				}
				case "Text":
					if (typeof t !== "string") return fail(new InvalidValue(some(t), { message: "Expected a string" }));
					return succeed(text(t, encoding.contentType));
				case "FormUrlEncoded":
					if (!isObject(t)) return fail(new InvalidValue(some(t), { message: "Expected a record" }));
					return succeed(urlParams(fromInput(t)));
				case "Uint8Array":
					if (!(t instanceof Uint8Array)) return fail(new InvalidValue(some(t), { message: "Expected a Uint8Array" }));
					return succeed(uint8Array(t, encoding.contentType));
			}
		}
	})));
	bodyFromPayloadCache.set(ast, out);
	return out;
}
//#endregion
//#region node_modules/.pnpm/effect@4.0.0-beta.74/node_modules/effect/dist/unstable/reactivity/AtomHttpApi.js
/**
* The `AtomHttpApi` module adapts typed `HttpApi` clients to the unstable atom
* reactivity runtime. Use it to define a `Context.Service` whose generated HTTP
* API client is available directly and whose endpoints can also be invoked as
* atoms: `query` creates an atom of `AsyncResult` for reads, while `mutation`
* creates an `AtomResultFn` for writes.
*
* It is intended for applications that want server state to participate in atom
* caching, invalidation, and hydration. Queries can be associated with
* `reactivityKeys` so they refresh when those keys are invalidated, mutations can
* invalidate the same keys after the request succeeds, and `timeToLive` controls
* whether idle query atoms expire, stay alive for a duration, or are kept alive.
*
* Serialization is schema-based and intentionally limited to decoded values.
* Mutation atoms are serializable only in `"decoded-only"` mode, while query
* atoms are serializable only in `"decoded-only"` mode when a stable
* `serializationKey` is supplied. Choose serialization keys that uniquely
* identify the endpoint request, keep reactivity keys stable across client and
* server registries during hydration, and avoid serializing response modes that
* expose raw `HttpClientResponse` values.
*
* The service wraps `HttpApiClient.make`, so the same `HttpApi` definition,
* schemas, base URL, middleware services, and HTTP client layer must be available
* wherever the atom runtime is constructed. Use `transformClient` and
* `transformResponse` for cross-cutting client behavior, and remember that
* schema or low-level HTTP client failures are raised as defects while endpoint
* and middleware failures remain typed errors.
*
* @since 4.0.0
*/
/**
* Creates a `Context.Service` class for an HTTP API client backed by an atom
* runtime.
*
* **Details**
*
* The options provide the API definition, HTTP client layer, optional client and
* response transforms, base URL, and runtime factory used by the query and
* mutation helpers.
*
* @category constructors
* @since 4.0.0
*/
var Service = () => (id, options) => {
	const self = Service$1()(id);
	const layer = effect$1(self, make(options.api, options));
	self.runtime = (options.runtime ?? runtime)(typeof options.httpClient === "function" ? (get) => provide(layer, options.httpClient(get)) : provide(layer, options.httpClient));
	const catchErrors = catch_((e) => isSchemaError(e) || isHttpClientError(e) ? die(e) : fail(e));
	const mutationFamily = family(({ endpoint, group, responseMode }) => {
		const atom = self.runtime.fn()(fnUntraced(function* (opts) {
			const effect = catchErrors((yield* self)[group][endpoint]({
				...opts,
				responseMode
			}));
			return yield* opts.reactivityKeys ? mutation(effect, opts.reactivityKeys) : effect;
		}));
		if (responseMode === "decoded-only") {
			const definition = options.api.groups[group].endpoints[endpoint];
			return serializable(atom, {
				key: `AtomHttpApi:mutation:${group}:${endpoint}`,
				schema: Schema({
					success: Union(getSuccessSchemas(definition)),
					error: Union(getErrorSchemas(definition))
				})
			});
		}
		return atom;
	});
	self.mutation = (group, endpoint, options) => mutationFamily({
		group,
		endpoint,
		responseMode: options?.responseMode ?? "decoded-only"
	});
	const queryFamily = family((opts) => {
		let atom = self.runtime.atom(self.use((client_) => {
			return catchErrors(client_[opts.group][opts.endpoint](opts));
		}));
		if (opts.responseMode === "decoded-only" && opts.serializationKey) {
			const endpoint = options.api.groups[opts.group].endpoints[opts.endpoint];
			atom = serializable(atom, {
				key: `AtomHttpApi:${opts.group}:${opts.endpoint}:${opts.serializationKey}`,
				schema: Schema({
					success: Union(getSuccessSchemas(endpoint)),
					error: Union(getErrorSchemas(endpoint))
				})
			});
		}
		if (opts.timeToLive) atom = isFinite(opts.timeToLive) ? setIdleTTL(atom, opts.timeToLive) : keepAlive(atom);
		return opts.reactivityKeys ? self.runtime.factory.withReactivity(opts.reactivityKeys)(atom) : atom;
	});
	self.query = (group, endpoint, request) => {
		return queryFamily({
			group,
			endpoint,
			params: request.params,
			query: request.query,
			payload: request.payload,
			headers: request.headers,
			responseMode: request.responseMode ?? "decoded-only",
			reactivityKeys: request.reactivityKeys,
			timeToLive: request.timeToLive ? fromInputUnsafe(request.timeToLive) : void 0,
			serializationKey: request.serializationKey
		});
	};
	return self;
};
//#endregion
//#region src/ecom/atoms.ts
var EcomApiAtom = class extends Service()("EcomApiAtom", {
	api: ecomApi,
	httpClient: layer$1
}) {};
var productsAtom = EcomApiAtom.query("products", "getProducts", {});
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return builder(useAtomValue(productsAtom)).onInitialOrWaiting(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Loading..." })).onError((error) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Error: ", error.message] })).onSuccess(({ products }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: products.slice(0, 10).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: product.title }, product.id)) })).render();
}
//#endregion
export { Home as component };
