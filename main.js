import {
  Accordion,
  AccordionModule,
  AccordionTab,
  ActivatedRoute,
  AsyncPipe,
  AutoFocus,
  AutoFocusModule,
  BaseComponent,
  BaseStyle,
  BlankIcon,
  Button,
  ButtonDirective,
  ButtonModule,
  Card,
  CardModule,
  CheckIcon,
  Checkbox,
  CheckboxModule,
  ChevronDownIcon,
  CommonModule,
  ConfirmationService,
  ConnectedOverlayScrollHandler,
  DOCUMENT,
  DefaultValueAccessor,
  DomRendererFactory2,
  DomSanitizer,
  FileUploadModule,
  FilterService,
  Footer,
  FormsModule,
  HorizontalRadioButtonsComponent,
  HttpClient,
  HttpHeaders,
  IconField,
  IftaLabel,
  IftaLabelModule,
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule,
  InputIcon,
  InputText,
  InputTextModule,
  LocationStrategy,
  Message,
  MessageModule,
  MessageService,
  MinusIcon,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  Overlay,
  OverlayModule,
  OverlayService,
  PlusIcon,
  PrimeNG,
  PrimeTemplate,
  ProgressBar,
  ProgressBarModule,
  RadioButton,
  RadioButtonModule,
  RequiredValidator,
  Ripple,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Scroller,
  SearchIcon,
  SharedModule,
  Table,
  TableModule,
  Textarea,
  TextareaModule,
  ThemeService,
  TimesCircleIcon,
  TimesIcon,
  Title,
  TitleStrategy,
  Toast,
  ToggleButton,
  ToggleButtonModule,
  Toolbar,
  ToolbarModule,
  Tooltip,
  TooltipModule,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  TranslationKeys,
  UploadPasteComponent,
  UploadStateService,
  UploadUrlComponent,
  UploadWordComponent,
  UrlDataService,
  WebViewType,
  absolutePosition,
  addClass,
  bootstrapApplication,
  deepEquals,
  definePreset,
  equals,
  findLastIndex,
  findSingle,
  focus,
  getFirstFocusableElement,
  getFocusableElements,
  getLastFocusableElement,
  getOffset,
  isEmpty,
  isIOS,
  isNotEmpty,
  isPrintableCharacter,
  isTouchDevice,
  provideHttpClient,
  providePrimeNG,
  provideRouter,
  resolveFieldData,
  scrollInView,
  unblockBodyScroll,
  uuid,
  zindexutils
} from "./chunk-NIO4BQ6N.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  ViewChild,
  ViewEncapsulation,
  animate,
  booleanAttribute,
  catchError,
  computed,
  effect,
  forwardRef,
  from,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
  map,
  numberAttribute,
  of,
  performanceMarkFeature,
  provideZoneChangeDetection,
  retry,
  setClassMetadata,
  signal,
  state,
  style,
  switchMap,
  takeUntil,
  throwError,
  timeout,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-I5ZTZF5P.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-3MOD5TGX.js";

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(String), \u0275\u0275inject(String));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }], null);
})();

// src/app/common/custom-title-strategy.ts
var CustomTitleStrategy = class _CustomTitleStrategy extends TitleStrategy {
  translate;
  title;
  constructor(translate, title) {
    super();
    this.translate = translate;
    this.title = title;
  }
  updateTitle(snapshot) {
    const titleKey = this.buildTitle(snapshot);
    if (titleKey) {
      this.translate.get(titleKey).subscribe((translated) => {
        this.title.setTitle(translated);
      });
    }
  }
  static \u0275fac = function CustomTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomTitleStrategy)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(Title));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomTitleStrategy, factory: _CustomTitleStrategy.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTitleStrategy, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: TranslateService }, { type: Title }], null);
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-YEAQNZYA.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace2) {
    return this.delegate.createElement(name, namespace2);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace2) {
    this.delegate.setAttribute(el, name, value, namespace2);
  }
  removeAttribute(el, name, namespace2) {
    this.delegate.removeAttribute(el, name, namespace2);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@primeng/themes/material/accordion/index.mjs
var accordion_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    borderWidth: "0",
    borderColor: "{content.border.color}"
  },
  header: {
    color: "{text.color}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    padding: "1.25rem",
    fontWeight: "600",
    borderRadius: "0",
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    activeBackground: "{content.background}",
    activeHoverBackground: "{content.background}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    },
    toggleIcon: {
      color: "{text.muted.color}",
      hoverColor: "{text.muted.color}",
      activeColor: "{text.muted.color}",
      activeHoverColor: "{text.muted.color}"
    },
    first: {
      topBorderRadius: "{content.border.radius}",
      borderWidth: "0"
    },
    last: {
      bottomBorderRadius: "{content.border.radius}",
      activeBottomBorderRadius: "0"
    }
  },
  content: {
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    color: "{text.color}",
    padding: "0 1.25rem 1.25rem 1.25rem"
  },
  css: ({
    dt
  }) => `
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${dt("accordion.transition.duration")};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-start-start-radius: ${dt("content.border.radius")};
    border-start-end-radius: ${dt("content.border.radius")};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-end-start-radius: ${dt("content.border.radius")};
    border-end-end-radius: ${dt("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${dt("navigation.item.active.background")};
}
`
};

// node_modules/@primeng/themes/material/autocomplete/index.mjs
var autocomplete_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  dropdown: {
    width: "3rem",
    sm: {
      width: "2.5rem"
    },
    lg: {
      width: "3.5rem"
    },
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{surface.300}",
        focusColor: "{surface.950}"
      },
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.600}",
        focusColor: "{surface.0}"
      },
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-autocomplete-dropdown:focus-visible {
    background: ${dt("autocomplete.dropdown.hover.background")}
    border-color: ${dt("autocomplete.dropdown.hover.border.color")};
    color: ${dt("autocomplete.dropdown.hover.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${dt("autocomplete.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("autocomplete.focus.border.color")}, ${dt("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${dt("autocomplete.border.color")}, ${dt("autocomplete.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${dt("autocomplete.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("autocomplete.focus.border.color")}, ${dt("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${dt("autocomplete.hover.border.color")}, ${dt("autocomplete.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${dt("autocomplete.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("autocomplete.focus.border.color")}, ${dt("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${dt("autocomplete.border.color")}, ${dt("autocomplete.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${dt("autocomplete.focus.border.color")}, ${dt("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${dt("autocomplete.hover.border.color")}, ${dt("autocomplete.hover.border.color")});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${dt("autocomplete.invalid.border.color")}, ${dt("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${dt("autocomplete.invalid.border.color")}, ${dt("autocomplete.invalid.border.color")});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${dt("autocomplete.invalid.border.color")}, ${dt("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${dt("autocomplete.invalid.border.color")}, ${dt("autocomplete.invalid.border.color")});
}

.p-autocomplete-option {
    transition: none;
}

.p-autocomplete:has(.p-variant-filled) .p-autocomplete-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`
};

// node_modules/@primeng/themes/material/avatar/index.mjs
var avatar_default = {
  root: {
    width: "2rem",
    height: "2rem",
    fontSize: "1rem",
    background: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  icon: {
    size: "1rem"
  },
  group: {
    borderColor: "{content.background}",
    offset: "-0.75rem"
  },
  lg: {
    width: "3rem",
    height: "3rem",
    fontSize: "1.5rem",
    icon: {
      size: "1.5rem"
    },
    group: {
      offset: "-1rem"
    }
  },
  xl: {
    width: "4rem",
    height: "4rem",
    fontSize: "2rem",
    icon: {
      size: "2rem"
    },
    group: {
      offset: "-1.5rem"
    }
  }
};

// node_modules/@primeng/themes/material/badge/index.mjs
var badge_default = {
  root: {
    borderRadius: "{border.radius.md}",
    padding: "0 0.5rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    minWidth: "1.5rem",
    height: "1.5rem"
  },
  dot: {
    size: "0.5rem"
  },
  sm: {
    fontSize: "0.625rem",
    minWidth: "1.25rem",
    height: "1.25rem"
  },
  lg: {
    fontSize: "0.875rem",
    minWidth: "1.75rem",
    height: "1.75rem"
  },
  xl: {
    fontSize: "1rem",
    minWidth: "2rem",
    height: "2rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.500}",
        color: "{surface.0}"
      },
      info: {
        background: "{sky.500}",
        color: "{surface.0}"
      },
      warn: {
        background: "{orange.500}",
        color: "{surface.0}"
      },
      danger: {
        background: "{red.500}",
        color: "{surface.0}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "{green.400}",
        color: "{green.950}"
      },
      info: {
        background: "{sky.400}",
        color: "{sky.950}"
      },
      warn: {
        background: "{orange.400}",
        color: "{orange.950}"
      },
      danger: {
        background: "{red.400}",
        color: "{red.950}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/base/index.mjs
var base_default = {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px"
    },
    emerald: {
      50: "#E8F6F1",
      100: "#C5EBE1",
      200: "#9EDFCF",
      300: "#76D3BD",
      400: "#58C9AF",
      500: "#3BBFA1",
      600: "#35AF94",
      700: "#2D9B83",
      800: "#268873",
      900: "#1A6657",
      950: "#0d3329"
    },
    green: {
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20",
      950: "#0e2f10"
    },
    lime: {
      50: "#F9FBE7",
      100: "#F0F4C3",
      200: "#E6EE9C",
      300: "#DCE775",
      400: "#D4E157",
      500: "#CDDC39",
      600: "#C0CA33",
      700: "#AFB42B",
      800: "#9E9D24",
      900: "#827717",
      950: "#413c0c"
    },
    red: {
      50: "#FFEBEE",
      100: "#FFCDD2",
      200: "#EF9A9A",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C",
      950: "#5c0e0e"
    },
    orange: {
      50: "#FFF3E0",
      100: "#FFE0B2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#FB8C00",
      700: "#F57C00",
      800: "#EF6C00",
      900: "#E65100",
      950: "#732900"
    },
    amber: {
      50: "#FFF8E1",
      100: "#FFECB3",
      200: "#FFE082",
      300: "#FFD54F",
      400: "#FFCA28",
      500: "#FFC107",
      600: "#FFB300",
      700: "#FFA000",
      800: "#FF8F00",
      900: "#FF6F00",
      950: "#803800"
    },
    yellow: {
      50: "#FFFDE7",
      100: "#FFF9C4",
      200: "#FFF59D",
      300: "#FFF176",
      400: "#FFEE58",
      500: "#FFEB3B",
      600: "#FDD835",
      700: "#FBC02D",
      800: "#F9A825",
      900: "#F57F17",
      950: "#7b400c"
    },
    teal: {
      50: "#E0F2F1",
      100: "#B2DFDB",
      200: "#80CBC4",
      300: "#4DB6AC",
      400: "#26A69A",
      500: "#009688",
      600: "#00897B",
      700: "#00796B",
      800: "#00695C",
      900: "#004D40",
      950: "#002720"
    },
    cyan: {
      50: "#E0F7FA",
      100: "#B2EBF2",
      200: "#80DEEA",
      300: "#4DD0E1",
      400: "#26C6DA",
      500: "#00BCD4",
      600: "#00ACC1",
      700: "#0097A7",
      800: "#00838F",
      900: "#006064",
      950: "#003032"
    },
    sky: {
      50: "#E1F5FE",
      100: "#B3E5FC",
      200: "#81D4FA",
      300: "#4FC3F7",
      400: "#29B6F6",
      500: "#03A9F4",
      600: "#039BE5",
      700: "#0288D1",
      800: "#0277BD",
      900: "#01579B",
      950: "#012c4e"
    },
    blue: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#2196F3",
      600: "#1E88E5",
      700: "#1976D2",
      800: "#1565C0",
      900: "#0D47A1",
      950: "#072451"
    },
    indigo: {
      50: "#E8EAF6",
      100: "#C5CAE9",
      200: "#9FA8DA",
      300: "#7986CB",
      400: "#5C6BC0",
      500: "#3F51B5",
      600: "#3949AB",
      700: "#303F9F",
      800: "#283593",
      900: "#1A237E",
      950: "#0d123f"
    },
    violet: {
      50: "#EDE7F6",
      100: "#D1C4E9",
      200: "#B39DDB",
      300: "#9575CD",
      400: "#7E57C2",
      500: "#673AB7",
      600: "#5E35B1",
      700: "#512DA8",
      800: "#4527A0",
      900: "#311B92",
      950: "#190e49"
    },
    purple: {
      50: "#F3E5F5",
      100: "#E1BEE7",
      200: "#CE93D8",
      300: "#BA68C8",
      400: "#AB47BC",
      500: "#9C27B0",
      600: "#8E24AA",
      700: "#7B1FA2",
      800: "#6A1B9A",
      900: "#4A148C",
      950: "#250a46"
    },
    fuchsia: {
      50: "#FDE6F3",
      100: "#FBC1E3",
      200: "#F897D1",
      300: "#F56DBF",
      400: "#F34DB2",
      500: "#F12DA5",
      600: "#E0289D",
      700: "#CC2392",
      800: "#B81E88",
      900: "#951777",
      950: "#4b0c3c"
    },
    pink: {
      50: "#FCE4EC",
      100: "#F8BBD0",
      200: "#F48FB1",
      300: "#F06292",
      400: "#EC407A",
      500: "#E91E63",
      600: "#D81B60",
      700: "#C2185B",
      800: "#AD1457",
      900: "#880E4F",
      950: "#440728"
    },
    rose: {
      50: "#FFF0F0",
      100: "#FFD9D9",
      200: "#FFC0C0",
      300: "#FFA7A7",
      400: "#FF8E8E",
      500: "#FF7575",
      600: "#FF5252",
      700: "#FF3838",
      800: "#F71C1C",
      900: "#D50000",
      950: "#3E0000"
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    }
  },
  semantic: {
    transitionDuration: "0.2s",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0"
    },
    disabledOpacity: "0.38",
    iconSize: "1rem",
    anchorGutter: "0",
    primary: {
      50: "{emerald.50}",
      100: "{emerald.100}",
      200: "{emerald.200}",
      300: "{emerald.300}",
      400: "{emerald.400}",
      500: "{emerald.500}",
      600: "{emerald.600}",
      700: "{emerald.700}",
      800: "{emerald.800}",
      900: "{emerald.900}",
      950: "{emerald.950}"
    },
    formField: {
      paddingX: "0.75rem",
      paddingY: "0.75rem",
      sm: {
        fontSize: "0.875rem",
        paddingX: "0.625rem",
        paddingY: "0.625rem"
      },
      lg: {
        fontSize: "1.125rem",
        paddingX: "0.825rem",
        paddingY: "0.825rem"
      },
      borderRadius: "{border.radius.sm}",
      focusRing: {
        width: "2px",
        style: "solid",
        color: "{primary.color}",
        offset: "-2px",
        shadow: "none"
      },
      transitionDuration: "{transition.duration}"
    },
    list: {
      padding: "0.5rem 0",
      gap: "0",
      header: {
        padding: "0.75rem 1rem"
      },
      option: {
        padding: "0.75rem 1rem",
        borderRadius: "{border.radius.none}"
      },
      optionGroup: {
        padding: "0.75rem 1rem",
        fontWeight: "700"
      }
    },
    content: {
      borderRadius: "{border.radius.sm}"
    },
    mask: {
      transitionDuration: "0.15s"
    },
    navigation: {
      list: {
        padding: "0.5rem 0",
        gap: "0"
      },
      item: {
        padding: "0.75rem 1rem",
        borderRadius: "{border.radius.none}",
        gap: "0.5rem"
      },
      submenuLabel: {
        padding: "0.75rem 1rem",
        fontWeight: "700"
      },
      submenuIcon: {
        size: "0.875rem"
      }
    },
    overlay: {
      select: {
        borderRadius: "{border.radius.sm}",
        shadow: "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"
      },
      popover: {
        borderRadius: "{border.radius.sm}",
        padding: "1rem",
        shadow: "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"
      },
      modal: {
        borderRadius: "{border.radius.sm}",
        padding: "1.5rem",
        shadow: "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"
      },
      navigation: {
        shadow: "0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"
      }
    },
    colorScheme: {
      light: {
        focusRing: {
          shadow: "0 0 1px 4px {surface.200}"
        },
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}"
        },
        primary: {
          color: "{primary.500}",
          contrastColor: "#ffffff",
          hoverColor: "{primary.400}",
          activeColor: "{primary.300}"
        },
        highlight: {
          background: "color-mix(in srgb, {primary.color}, transparent 88%)",
          focusBackground: "color-mix(in srgb, {primary.color}, transparent 76%)",
          color: "{primary.700}",
          focusColor: "{primary.800}"
        },
        mask: {
          background: "rgba(0,0,0,0.32)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.0}",
          disabledBackground: "{surface.300}",
          filledBackground: "{surface.100}",
          filledHoverBackground: "{surface.200}",
          filledFocusBackground: "{surface.100}",
          borderColor: "{surface.400}",
          hoverBorderColor: "{surface.900}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.800}",
          color: "{surface.900}",
          disabledColor: "{surface.600}",
          placeholderColor: "{surface.600}",
          invalidPlaceholderColor: "{red.800}",
          floatLabelColor: "{surface.600}",
          floatLabelFocusColor: "{primary.600}",
          floatLabelActiveColor: "{surface.600}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.600}",
          shadow: "none"
        },
        text: {
          color: "{surface.900}",
          hoverColor: "{surface.900}",
          mutedColor: "{surface.600}",
          hoverMutedColor: "{surface.600}"
        },
        content: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          borderColor: "{surface.300}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.0}",
            borderColor: "{surface.0}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.0}",
            borderColor: "{surface.0}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.0}",
            borderColor: "{surface.0}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.100}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.600}",
              focusColor: "{surface.600}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.100}",
            activeBackground: "{surface.200}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.600}",
              focusColor: "{surface.600}",
              activeColor: "{surface.600}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.color}"
          },
          submenuIcon: {
            color: "{surface.600}",
            focusColor: "{surface.600}",
            activeColor: "{surface.600}"
          }
        }
      },
      dark: {
        focusRing: {
          shadow: "0 0 1px 4px {surface.700}"
        },
        surface: {
          0: "#ffffff",
          50: "{zinc.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}"
        },
        primary: {
          color: "{primary.400}",
          contrastColor: "{surface.900}",
          hoverColor: "{primary.300}",
          activeColor: "{primary.200}"
        },
        highlight: {
          background: "color-mix(in srgb, {primary.400}, transparent 84%)",
          focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)"
        },
        mask: {
          background: "rgba(0,0,0,0.6)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.950}",
          disabledBackground: "{surface.700}",
          filledBackground: "{surface.800}",
          filledHoverBackground: "{surface.700}",
          filledFocusBackground: "{surface.800}",
          borderColor: "{surface.600}",
          hoverBorderColor: "{surface.400}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.300}",
          color: "{surface.0}",
          disabledColor: "{surface.400}",
          placeholderColor: "{surface.400}",
          invalidPlaceholderColor: "{red.300}",
          floatLabelColor: "{surface.400}",
          floatLabelFocusColor: "{primary.color}",
          floatLabelActiveColor: "{surface.400}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.400}",
          shadow: "none"
        },
        text: {
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          mutedColor: "{surface.400}",
          hoverMutedColor: "{surface.400}"
        },
        content: {
          background: "{surface.900}",
          hoverBackground: "{surface.800}",
          borderColor: "{surface.700}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.900}",
            borderColor: "{surface.900}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.900}",
            borderColor: "{surface.900}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.900}",
            borderColor: "{surface.900}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.800}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.400}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.800}",
            activeBackground: "{surface.700}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.400}",
              activeColor: "{surface.400}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.400}",
            focusColor: "{surface.400}",
            activeColor: "{surface.400}"
          }
        }
      }
    }
  }
};

// node_modules/@primeng/themes/material/blockui/index.mjs
var blockui_default = {
  root: {
    borderRadius: "{content.border.radius}"
  }
};

// node_modules/@primeng/themes/material/breadcrumb/index.mjs
var breadcrumb_default = {
  root: {
    padding: "1rem",
    background: "{content.background}",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  item: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    borderRadius: "{content.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      hoverColor: "{navigation.item.icon.focus.color}"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  separator: {
    color: "{navigation.item.icon.color}"
  }
};

// node_modules/@primeng/themes/material/button/index.mjs
var button_default = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    gap: "0.5rem",
    paddingX: "1rem",
    paddingY: "0.625rem",
    iconOnlyWidth: "3rem",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}",
      iconOnlyWidth: "2.5rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}",
      iconOnlyWidth: "3.5rem"
    },
    label: {
      fontWeight: "500"
    },
    raisedShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    },
    badgeSize: "1rem",
    transitionDuration: "{form.field.transition.duration}"
  },
  colorScheme: {
    light: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.100}",
          hoverBackground: "{surface.200}",
          activeBackground: "{surface.300}",
          borderColor: "{surface.100}",
          hoverBorderColor: "{surface.200}",
          activeBorderColor: "{surface.300}",
          color: "{surface.600}",
          hoverColor: "{surface.700}",
          activeColor: "{surface.800}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.500}",
          hoverBackground: "{sky.400}",
          activeBackground: "{sky.300}",
          borderColor: "{sky.500}",
          hoverBorderColor: "{sky.400}",
          activeBorderColor: "{sky.300}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{sky.500}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.500}",
          hoverBackground: "{green.400}",
          activeBackground: "{green.300}",
          borderColor: "{green.500}",
          hoverBorderColor: "{green.400}",
          activeBorderColor: "{green.300}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.500}",
          hoverBackground: "{orange.400}",
          activeBackground: "{orange.300}",
          borderColor: "{orange.500}",
          hoverBorderColor: "{orange.400}",
          activeBorderColor: "{orange.300}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{orange.500}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.500}",
          hoverBackground: "{purple.400}",
          activeBackground: "{purple.300}",
          borderColor: "{purple.500}",
          hoverBorderColor: "{purple.400}",
          activeBorderColor: "{purple.300}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{purple.500}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.500}",
          hoverBackground: "{red.400}",
          activeBackground: "{red.300}",
          borderColor: "{red.500}",
          hoverBorderColor: "{red.400}",
          activeBorderColor: "{red.300}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.950}",
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.950}",
          hoverBorderColor: "{surface.800}",
          activeBorderColor: "{surface.700}",
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          activeColor: "{surface.0}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          borderColor: "{primary.color}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.600}",
          color: "{surface.600}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          borderColor: "{green.500}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          borderColor: "{sky.500}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          borderColor: "{orange.500}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          borderColor: "{purple.500}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          borderColor: "{red.500}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.950}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.900}",
          color: "{surface.900}"
        }
      },
      text: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.600}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.900}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    },
    dark: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.800}",
          hoverBackground: "{surface.700}",
          activeBackground: "{surface.600}",
          borderColor: "{surface.800}",
          hoverBorderColor: "{surface.700}",
          activeBorderColor: "{surface.600}",
          color: "{surface.300}",
          hoverColor: "{surface.200}",
          activeColor: "{surface.100}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.400}",
          hoverBackground: "{sky.300}",
          activeBackground: "{sky.200}",
          borderColor: "{sky.400}",
          hoverBorderColor: "{sky.300}",
          activeBorderColor: "{sky.200}",
          color: "{sky.950}",
          hoverColor: "{sky.950}",
          activeColor: "{sky.950}",
          focusRing: {
            color: "{sky.400}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.400}",
          hoverBackground: "{green.300}",
          activeBackground: "{green.200}",
          borderColor: "{green.400}",
          hoverBorderColor: "{green.300}",
          activeBorderColor: "{green.200}",
          color: "{green.950}",
          hoverColor: "{green.950}",
          activeColor: "{green.950}",
          focusRing: {
            color: "{green.400}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.400}",
          hoverBackground: "{orange.300}",
          activeBackground: "{orange.200}",
          borderColor: "{orange.400}",
          hoverBorderColor: "{orange.300}",
          activeBorderColor: "{orange.200}",
          color: "{orange.950}",
          hoverColor: "{orange.950}",
          activeColor: "{orange.950}",
          focusRing: {
            color: "{orange.400}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.400}",
          hoverBackground: "{purple.300}",
          activeBackground: "{purple.200}",
          borderColor: "{purple.400}",
          hoverBorderColor: "{purple.300}",
          activeBorderColor: "{purple.200}",
          color: "{purple.950}",
          hoverColor: "{purple.950}",
          activeColor: "{purple.950}",
          focusRing: {
            color: "{purple.400}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.400}",
          hoverBackground: "{red.300}",
          activeBackground: "{red.200}",
          borderColor: "{red.400}",
          hoverBorderColor: "{red.300}",
          activeBorderColor: "{red.200}",
          color: "{red.950}",
          hoverColor: "{red.950}",
          activeColor: "{red.950}",
          focusRing: {
            color: "{red.400}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          activeBackground: "{surface.200}",
          borderColor: "{surface.0}",
          hoverBorderColor: "{surface.100}",
          activeBorderColor: "{surface.200}",
          color: "{surface.950}",
          hoverColor: "{surface.950}",
          activeColor: "{surface.950}",
          focusRing: {
            color: "{surface.0}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          borderColor: "{primary.700}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "rgba(255,255,255,0.04)",
          activeBackground: "rgba(255,255,255,0.16)",
          borderColor: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          borderColor: "{green.700}",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          borderColor: "{sky.700}",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          borderColor: "{orange.700}",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          borderColor: "{purple.700}",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          borderColor: "{red.700}",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.500}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.600}",
          color: "{surface.0}"
        }
      },
      text: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-button:focus-visible {
    background: ${dt("button.primary.active.background")};
    border-color: ${dt("button.primary.active.background")};
}

.p-button-secondary:focus-visible {
    background: ${dt("button.secondary.active.background")};
    border-color: ${dt("button.secondary.active.background")};
}

.p-button-success:focus-visible {
    background: ${dt("button.success.active.background")};
    border-color: ${dt("button.success.active.background")};
}

.p-button-info:focus-visible {
    background: ${dt("button.info.active.background")};
    border-color: ${dt("button.info.active.background")};
}

.p-button-warn:focus-visible {
    background: ${dt("button.warn.active.background")};
    border-color: ${dt("button.warn.active.background")};
}

.p-button-help:focus-visible {
    background: ${dt("button.help.active.background")};
    border-color: ${dt("button.help.active.background")};
}

.p-button-danger:focus-visible {
    background: ${dt("button.danger.active.background")};
    border-color: ${dt("button.danger.active.background")};
}

.p-button-contrast:focus-visible {
    background: ${dt("button.contrast.active.background")};
    border-color: ${dt("button.contrast.active.background")};
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, ${dt("primary.color")}, transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: ${dt("button.text.primary.active.background")};
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: ${dt("button.text.secondary.active.background")};
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: ${dt("button.text.success.active.background")};
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: ${dt("button.text.info.active.background")};
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: ${dt("button.text.warn.active.background")};
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: ${dt("button.text.help.active.background")};
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: ${dt("button.text.danger.active.background")};
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: ${dt("button.text.contrast.active.background")};
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: ${dt("button.text.plain.active.background")};
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.primary.active.background")};
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.secondary.active.background")};
    border-color: ${dt("button.outlined.secondary.border.color")};
}

.p-button-success.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.success.active.background")};
}

.p-button-info.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.info.active.background")};
}

.p-button-warn.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.warn.active.background")};
}

.p-button-help.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.help.active.background")};
}

.p-button-danger.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.danger.active.background")};
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.contrast.active.background")};
}

.p-button-plain.p-button-outlined:focus-visible {
    background: ${dt("button.outlined.plain.active.background")};
}
`
};

// node_modules/@primeng/themes/material/card/index.mjs
var card_default = {
  root: {
    background: "{content.background}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    shadow: "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"
  },
  body: {
    padding: "1.5rem",
    gap: "0.75rem"
  },
  caption: {
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "500"
  },
  subtitle: {
    color: "{text.muted.color}"
  }
};

// node_modules/@primeng/themes/material/carousel/index.mjs
var carousel_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  content: {
    gap: "0.25rem"
  },
  indicatorList: {
    padding: "1rem",
    gap: "1rem"
  },
  indicator: {
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "50%",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  colorScheme: {
    light: {
      indicator: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}",
        activeBackground: "{primary.color}"
      }
    },
    dark: {
      indicator: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}",
        activeBackground: "{primary.color}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 96%)
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("carousel.indicator.active.background")}, transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("carousel.indicator.active.background")}, transparent 84%);
}
`
};

// node_modules/@primeng/themes/material/cascadeselect/index.mjs
var cascadeselect_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    mobileIndent: "1rem"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    icon: {
      color: "{list.option.icon.color}",
      focusColor: "{list.option.icon.focus.color}",
      size: "0.875rem"
    }
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  css: ({
    dt
  }) => `
.p-cascadeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${dt("cascadeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("cascadeselect.focus.border.color")}, ${dt("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("cascadeselect.border.color")}, ${dt("cascadeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt("cascadeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("cascadeselect.focus.border.color")}, ${dt("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("cascadeselect.hover.border.color")}, ${dt("cascadeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${dt("cascadeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("cascadeselect.focus.border.color")}, ${dt("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("cascadeselect.border.color")}, ${dt("cascadeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${dt("cascadeselect.focus.border.color")}, ${dt("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("cascadeselect.hover.border.color")}, ${dt("cascadeselect.hover.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt("cascadeselect.invalid.border.color")}, ${dt("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${dt("cascadeselect.invalid.border.color")}, ${dt("cascadeselect.invalid.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${dt("cascadeselect.invalid.border.color")}, ${dt("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${dt("cascadeselect.invalid.border.color")}, ${dt("cascadeselect.invalid.border.color")});
}

.p-cascadeselect-option {
    transition: none;
}
`
};

// node_modules/@primeng/themes/material/checkbox/index.mjs
var checkbox_default = {
  root: {
    borderRadius: "{border.radius.xs}",
    width: "18px",
    height: "18px",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "14px",
      height: "14px"
    },
    lg: {
      width: "22px",
      height: "22px"
    }
  },
  icon: {
    size: "0.875rem",
    color: "{form.field.color}",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "0.75rem"
    },
    lg: {
      size: "1rem"
    }
  },
  css: ({
    dt
  }) => `
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${dt("checkbox.transition.duration")};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("checkbox.checked.background")}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("checkbox.checked.background")}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${dt("checkbox.icon.checked.color")};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: ${dt("checkbox.icon.checked.color")};
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`
};

// node_modules/@primeng/themes/material/chip/index.mjs
var chip_default = {
  root: {
    borderRadius: "2rem",
    paddingX: "0.75rem",
    paddingY: "0.75rem",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  image: {
    width: "2.25rem",
    height: "2.25rem"
  },
  icon: {
    size: "1rem"
  },
  removeIcon: {
    size: "1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}"
    }
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.200}",
        color: "{surface.900}"
      },
      icon: {
        color: "{surface.600}"
      },
      removeIcon: {
        color: "{surface.600}",
        focusRing: {
          shadow: "0 0 1px 4px {surface.300}"
        }
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        color: "{surface.0}"
      },
      icon: {
        color: "{surface.0}"
      },
      removeIcon: {
        color: "{surface.0}",
        focusRing: {
          shadow: "0 0 1px 4px {surface.600}"
        }
      }
    }
  }
};

// node_modules/@primeng/themes/material/colorpicker/index.mjs
var colorpicker_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    width: "2rem",
    height: "2rem",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  panel: {
    shadow: "{overlay.popover.shadow}",
    borderRadius: "{overlay.popover.borderRadius}"
  },
  colorScheme: {
    light: {
      panel: {
        background: "{surface.800}",
        borderColor: "{surface.900}"
      },
      handle: {
        color: "{surface.0}"
      }
    },
    dark: {
      panel: {
        background: "{surface.900}",
        borderColor: "{surface.700}"
      },
      handle: {
        color: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/confirmdialog/index.mjs
var confirmdialog_default = {
  icon: {
    size: "2rem",
    color: "{overlay.modal.color}"
  },
  content: {
    gap: "1rem"
  }
};

// node_modules/@primeng/themes/material/confirmpopup/index.mjs
var confirmpopup_default = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "1rem"
  },
  icon: {
    size: "1.5rem",
    color: "{overlay.popover.color}"
  },
  footer: {
    gap: "0.5rem",
    padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
  }
};

// node_modules/@primeng/themes/material/contextmenu/index.mjs
var contextmenu_default = {
  root: {
    background: "{content.background}",
    borderColor: "transparent",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    mobileIndent: "1rem"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
};

// node_modules/@primeng/themes/material/datatable/index.mjs
var datatable_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{datatable.border.color}",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    sm: {
      padding: "0.375rem 0.5rem"
    },
    lg: {
      padding: "1rem 1.25rem"
    }
  },
  dropPoint: {
    color: "{primary.color}"
  },
  columnResizer: {
    width: "0.5rem"
  },
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    size: "0.875rem"
  },
  loadingIcon: {
    size: "2rem"
  },
  rowToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  filter: {
    inlineGap: "0.5rem",
    overlaySelect: {
      background: "{overlay.select.background}",
      borderColor: "{overlay.select.border.color}",
      borderRadius: "{overlay.select.border.radius}",
      color: "{overlay.select.color}",
      shadow: "{overlay.select.shadow}"
    },
    overlayPopover: {
      background: "{overlay.popover.background}",
      borderColor: "{overlay.popover.border.color}",
      borderRadius: "{overlay.popover.border.radius}",
      color: "{overlay.popover.color}",
      shadow: "{overlay.popover.shadow}",
      padding: "{overlay.popover.padding}",
      gap: "0.5rem"
    },
    rule: {
      borderColor: "{content.border.color}"
    },
    constraintList: {
      padding: "{list.padding}",
      gap: "{list.gap}"
    },
    constraint: {
      focusBackground: "{list.option.focus.background}",
      selectedBackground: "{list.option.selected.background}",
      selectedFocusBackground: "{list.option.selected.focus.background}",
      color: "{list.option.color}",
      focusColor: "{list.option.focus.color}",
      selectedColor: "{list.option.selected.color}",
      selectedFocusColor: "{list.option.selected.focus.color}",
      separator: {
        borderColor: "{content.border.color}"
      },
      padding: "{list.option.padding}",
      borderRadius: "{list.option.border.radius}"
    }
  },
  paginatorTop: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      row: {
        stripedBackground: "{surface.50}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      row: {
        stripedBackground: "{surface.950}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`
};

// node_modules/@primeng/themes/material/dataview/index.mjs
var dataview_default = {
  root: {
    borderColor: "transparent",
    borderWidth: "0",
    borderRadius: "0",
    padding: "0"
  },
  header: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  content: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "transparent",
    borderWidth: "0",
    padding: "0",
    borderRadius: "0"
  },
  footer: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0"
  }
};

// node_modules/@primeng/themes/material/datepicker/index.mjs
var datepicker_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.popover.shadow}",
    padding: "0.5rem"
  },
  header: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    padding: "0 0 0.5rem 0"
  },
  title: {
    gap: "0.5rem",
    fontWeight: "700"
  },
  dropdown: {
    width: "3rem",
    sm: {
      width: "2.5rem"
    },
    lg: {
      width: "3.5rem"
    },
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "n\u0131ne"
    }
  },
  inputIcon: {
    color: "{form.field.icon.color}"
  },
  selectMonth: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.5rem 0.75rem",
    borderRadius: "{content.border.radius}"
  },
  selectYear: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.5rem 0.75rem",
    borderRadius: "{content.border.radius}"
  },
  group: {
    borderColor: "{content.border.color}",
    gap: "{overlay.popover.padding}"
  },
  dayView: {
    margin: "0.5rem 0 0 0"
  },
  weekDay: {
    padding: "0.5rem",
    fontWeight: "700",
    color: "{content.color}"
  },
  date: {
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{primary.color}",
    rangeSelectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{primary.contrast.color}",
    rangeSelectedColor: "{highlight.color}",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    padding: "0.125rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  monthView: {
    margin: "0.5rem 0 0 0"
  },
  month: {
    padding: "0.625rem",
    borderRadius: "{content.border.radius}"
  },
  yearView: {
    margin: "0.5rem 0 0 0"
  },
  year: {
    padding: "0.625rem",
    borderRadius: "{content.border.radius}"
  },
  buttonbar: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}"
  },
  timePicker: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}",
    gap: "0.5rem",
    buttonGap: "0.25rem"
  },
  colorScheme: {
    light: {
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      },
      today: {
        background: "{surface.200}",
        color: "{surface.900}"
      }
    },
    dark: {
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      },
      today: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-datepicker-header {
    justify-content: start
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: ${dt("datepicker.select.month.hover.background")};
    color: ${dt("datepicker.select.month.hover.color")};
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: ${dt("datepicker.select.year.hover.background")};
    color: ${dt("datepicker.select.year.hover.color")};
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: ${dt("datepicker.dropdown.hover.background")};
    border-color: ${dt("datepicker.dropdown.hover.border.color")};
    color: ${dt("datepicker.dropdown.hover.color")};
}

.p-datepicker:has(.p-variant-filled) .p-datepicker-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`
};

// node_modules/@primeng/themes/material/dialog/index.mjs
var dialog_default = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    borderRadius: "{overlay.modal.border.radius}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}",
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  },
  footer: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/material/divider/index.mjs
var divider_default = {
  root: {
    borderColor: "{content.border.color}"
  },
  content: {
    background: "{content.background}",
    color: "{text.color}"
  },
  horizontal: {
    margin: "1rem 0",
    padding: "0 1rem",
    content: {
      padding: "0 0.5rem"
    }
  },
  vertical: {
    margin: "0 1rem",
    padding: "0.5rem 0",
    content: {
      padding: "0.5rem 0"
    }
  }
};

// node_modules/@primeng/themes/material/dock/index.mjs
var dock_default = {
  root: {
    background: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    padding: "0.5rem",
    borderRadius: "{border.radius.xl}"
  },
  item: {
    borderRadius: "{content.border.radius}",
    padding: "0.5rem",
    size: "3rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/material/drawer/index.mjs
var drawer_default = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  },
  footer: {
    padding: "{overlay.modal.padding}"
  }
};

// node_modules/@primeng/themes/material/editor/index.mjs
var editor_default = {
  toolbar: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}"
  },
  toolbarItem: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}",
    padding: "{list.padding}"
  },
  overlayOption: {
    focusBackground: "{list.option.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  content: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  css: ({
    dt
  }) => `
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`
};

// node_modules/@primeng/themes/material/fieldset/index.mjs
var fieldset_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    padding: "0 1.25rem 1.25rem 1.25rem",
    transitionDuration: "{transition.duration}"
  },
  legend: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    borderColor: "transparent",
    padding: "0.75rem 1rem",
    gap: "0.5rem",
    fontWeight: "600",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  toggleIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}"
  },
  content: {
    padding: "0"
  },
  css: ({
    dt
  }) => `
.p-fieldset-toggle-button:focus-visible {
    background: ${dt("navigation.item.active.background")}

}
`
};

// node_modules/@primeng/themes/material/fileupload/index.mjs
var fileupload_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.25rem",
    borderColor: "unset",
    borderWidth: "0",
    borderRadius: "0",
    gap: "0.5rem"
  },
  content: {
    highlightBorderColor: "{primary.color}",
    padding: "0 1.25rem 1.25rem 1.25rem",
    gap: "1rem"
  },
  file: {
    padding: "1rem",
    gap: "1rem",
    borderColor: "{content.border.color}",
    info: {
      gap: "0.5rem"
    }
  },
  fileList: {
    gap: "0.5rem"
  },
  progressbar: {
    height: "0.25rem"
  },
  basic: {
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/material/floatlabel/index.mjs
var floatlabel_default = {
  root: {
    color: "{form.field.float.label.color}",
    focusColor: "{form.field.float.label.focus.color}",
    activeColor: "{form.field.float.label.active.color}",
    invalidColor: "{form.field.float.label.invalid.color}",
    transitionDuration: "0.2s",
    positionX: "{form.field.padding.x}",
    positionY: "{form.field.padding.y}",
    fontWeight: "500",
    active: {
      fontSize: "0.75rem",
      fontWeight: "400"
    }
  },
  over: {
    active: {
      top: "-1.25rem"
    }
  },
  in: {
    input: {
      paddingTop: "1.5rem",
      paddingBottom: "0.5rem"
    },
    active: {
      top: "0.5rem"
    }
  },
  on: {
    borderRadius: "{border.radius.xs}",
    active: {
      background: "{form.field.background}",
      padding: "0 0.125rem"
    }
  }
};

// node_modules/@primeng/themes/material/galleria/index.mjs
var galleria_default = {
  root: {
    borderWidth: "1px",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.100}",
    hoverColor: "{surface.0}",
    size: "3rem",
    gutter: "0.5rem",
    prev: {
      borderRadius: "50%"
    },
    next: {
      borderRadius: "50%"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  navIcon: {
    size: "1.5rem"
  },
  thumbnailsContent: {
    background: "{content.background}",
    padding: "1rem 0.25rem"
  },
  thumbnailNavButton: {
    size: "2rem",
    borderRadius: "50%",
    gutter: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  thumbnailNavButtonIcon: {
    size: "1rem"
  },
  caption: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "{surface.100}",
    padding: "1rem"
  },
  indicatorList: {
    gap: "0.5rem",
    padding: "1rem"
  },
  indicatorButton: {
    width: "1rem",
    height: "1rem",
    activeBackground: "{primary.color}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  insetIndicatorList: {
    background: "rgba(0, 0, 0, 0.5)"
  },
  insetIndicatorButton: {
    background: "rgba(255, 255, 255, 0.4)",
    hoverBackground: "rgba(255, 255, 255, 0.6)",
    activeBackground: "rgba(255, 255, 255, 0.9)"
  },
  closeButton: {
    size: "3rem",
    gutter: "0.5rem",
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  closeButtonIcon: {
    size: "1.5rem"
  },
  colorScheme: {
    light: {
      thumbnailNavButton: {
        hoverBackground: "{surface.100}",
        color: "{surface.600}",
        hoverColor: "{surface.700}"
      },
      indicatorButton: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}"
      }
    },
    dark: {
      thumbnailNavButton: {
        hoverBackground: "{surface.700}",
        color: "{surface.400}",
        hoverColor: "{surface.0}"
      },
      indicatorButton: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/iconfield/index.mjs
var iconfield_default = {
  icon: {
    color: "{form.field.icon.color}"
  }
};

// node_modules/@primeng/themes/material/iftalabel/index.mjs
var iftalabel_default = {
  root: {
    color: "{form.field.float.label.color}",
    focusColor: "{form.field.float.label.focus.color}",
    invalidColor: "{form.field.float.label.invalid.color}",
    transitionDuration: "0.2s",
    positionX: "{form.field.padding.x}",
    top: "0.5rem",
    fontSize: "0.75rem",
    fontWeight: "400"
  },
  input: {
    paddingTop: "1.5rem",
    paddingBottom: "0.5rem"
  }
};

// node_modules/@primeng/themes/material/image/index.mjs
var image_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    icon: {
      size: "1.5rem"
    },
    mask: {
      background: "{mask.background}",
      color: "{mask.color}"
    }
  },
  toolbar: {
    position: {
      left: "auto",
      right: "1rem",
      top: "1rem",
      bottom: "auto"
    },
    blur: "8px",
    background: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: "1px",
    borderRadius: "30px",
    padding: ".5rem",
    gap: "0.5rem"
  },
  action: {
    hoverBackground: "rgba(255,255,255,0.1)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    size: "3rem",
    iconSize: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/material/imagecompare/index.mjs
var imagecompare_default = {
  handle: {
    size: "20px",
    hoverSize: "40px",
    background: "rgba(255,255,255,0.4)",
    hoverBackground: "rgba(255,255,255,0.6)",
    borderColor: "unset",
    hoverBorderColor: "unset",
    borderWidth: "0",
    borderRadius: "50%",
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "rgba(255,255,255,0.3)",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/material/inlinemessage/index.mjs
var inlinemessage_default = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem"
  },
  text: {
    fontWeight: "500"
  },
  icon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    }
  }
};

// node_modules/@primeng/themes/material/inplace/index.mjs
var inplace_default = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{transition.duration}"
  },
  display: {
    hoverBackground: "{content.hover.background}",
    hoverColor: "{content.hover.color}"
  }
};

// node_modules/@primeng/themes/material/inputchips/index.mjs
var inputchips_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        color: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/inputgroup/index.mjs
var inputgroup_default = {
  addon: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.icon.color}",
    borderRadius: "{form.field.border.radius}",
    padding: "0.75rem",
    minWidth: "3rem"
  },
  css: ({
    dt
  }) => `
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${dt("inputtext.filled.background")};
    border-inline-color: ${dt("inputtext.filled.background")};
    background: ${dt("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `
};

// node_modules/@primeng/themes/material/inputnumber/index.mjs
var inputnumber_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  button: {
    width: "3rem",
    borderRadius: "{form.field.border.radius}",
    verticalPadding: "{form.field.padding.y}"
  },
  colorScheme: {
    light: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.200}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.500}",
        activeColor: "{surface.600}"
      }
    },
    dark: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        activeColor: "{surface.200}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: ${dt("inputtext.filled.background")};
    border-inline-color: ${dt("inputtext.filled.background")};
    background: ${dt("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
} 
    
.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: ${dt("inputtext.filled.background")};
    border-inline-color: ${dt("inputtext.filled.background")};
    background: ${dt("inputtext.filled.background")} no-repeat;
} 

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid ${dt("inputtext.border.color")}
}
`
};

// node_modules/@primeng/themes/material/inputotp/index.mjs
var inputotp_default = {
  root: {
    gap: "0.5rem"
  },
  input: {
    width: "3rem",
    sm: {
      width: "2.5rem"
    },
    lg: {
      width: "3.5rem"
    }
  }
};

// node_modules/@primeng/themes/material/inputtext/index.mjs
var inputtext_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  css: ({
    dt
  }) => `
.p-inputtext.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${dt("inputtext.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("inputtext.focus.border.color")}, ${dt("inputtext.focus.border.color")}), linear-gradient(to bottom, ${dt("inputtext.border.color")}, ${dt("inputtext.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${dt("inputtext.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("inputtext.focus.border.color")}, ${dt("inputtext.focus.border.color")}), linear-gradient(to bottom, ${dt("inputtext.hover.border.color")}, ${dt("inputtext.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${dt("inputtext.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("inputtext.focus.border.color")}, ${dt("inputtext.focus.border.color")}), linear-gradient(to bottom, ${dt("inputtext.border.color")}, ${dt("inputtext.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${dt("inputtext.focus.border.color")}, ${dt("inputtext.focus.border.color")}), linear-gradient(to bottom, ${dt("inputtext.hover.border.color")}, ${dt("inputtext.hover.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt("inputtext.invalid.border.color")}, ${dt("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${dt("inputtext.invalid.border.color")}, ${dt("inputtext.invalid.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${dt("inputtext.invalid.border.color")}, ${dt("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${dt("inputtext.invalid.border.color")}, ${dt("inputtext.invalid.border.color")});
}
`
};

// node_modules/@primeng/themes/material/knob/index.mjs
var knob_default = {
  root: {
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  value: {
    background: "{primary.color}"
  },
  range: {
    background: "{content.border.color}"
  },
  text: {
    color: "{text.muted.color}"
  }
};

// node_modules/@primeng/themes/material/listbox/index.mjs
var listbox_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    borderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    shadow: "{form.field.shadow}",
    borderRadius: "{form.field.border.radius}",
    transitionDuration: "{form.field.transition.duration}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      option: {
        stripedBackground: "{surface.50}"
      }
    },
    dark: {
      option: {
        stripedBackground: "{surface.900}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-listbox-option {
    transition: none
}
`
};

// node_modules/@primeng/themes/material/megamenu/index.mjs
var megamenu_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    verticalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "{navigation.list.gap}"
    },
    horizontalOrientation: {
      padding: "0.5rem 0.75rem",
      gap: "0.5rem"
    },
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  overlay: {
    padding: "0",
    background: "{content.background}",
    borderColor: "transparent",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    shadow: "{overlay.navigation.shadow}",
    gap: "0.5rem"
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background.}",
    color: "{navigation.submenu.label.color}"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "2.5rem",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  css: ({
    dt
  }) => `
.p-megamenu-button:focus-visible {
    background: ${dt("navigation.item.active.background")}
}
`
};

// node_modules/@primeng/themes/material/menu/index.mjs
var menu_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background}",
    color: "{navigation.submenu.label.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  css: ({
    dt
  }) => `
.p-menu-overlay {
    border-color: transparent
}
`
};

// node_modules/@primeng/themes/material/menubar/index.mjs
var menubar_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.5rem 0.75rem",
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}",
    background: "{content.background}",
    borderColor: "transparent",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    mobileIndent: "1rem",
    icon: {
      size: "{navigation.submenu.icon.size}",
      color: "{navigation.submenu.icon.color}",
      focusColor: "{navigation.submenu.icon.focus.color}",
      activeColor: "{navigation.submenu.icon.active.color}"
    }
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "2.5rem",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  css: ({
    dt
  }) => `
.p-menubar-button:focus-visible {
    background: ${dt("navigation.item.active.background")}
}
`
};

// node_modules/@primeng/themes/material/message/index.mjs
var message_default = {
  root: {
    borderRadius: "{content.border.radius}",
    borderWidth: "0",
    transitionDuration: "{transition.duration}"
  },
  content: {
    padding: "1rem 1.25rem",
    gap: "0.5rem",
    sm: {
      padding: "0.625rem 0.625rem"
    },
    lg: {
      padding: "0.825rem 0.825rem"
    }
  },
  text: {
    fontSize: "1rem",
    fontWeight: "500",
    sm: {
      fontSize: "0.875rem"
    },
    lg: {
      fontSize: "1.125rem"
    }
  },
  icon: {
    size: "1.25rem",
    sm: {
      size: "1rem"
    },
    lg: {
      size: "1.5rem"
    }
  },
  closeButton: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem",
    sm: {
      size: "0.875rem"
    },
    lg: {
      size: "1.125rem"
    }
  },
  outlined: {
    root: {
      borderWidth: "1px"
    }
  },
  simple: {
    content: {
      padding: "0"
    }
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.600}",
          borderColor: "{blue.600}"
        },
        simple: {
          color: "{blue.600}"
        }
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.600}",
          borderColor: "{green.600}"
        },
        simple: {
          color: "{green.600}"
        }
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.900}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.900}",
          borderColor: "{yellow.900}"
        },
        simple: {
          color: "{yellow.900}"
        }
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.600}",
          borderColor: "{red.600}"
        },
        simple: {
          color: "{red.600}"
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.600}",
          borderColor: "{surface.600}"
        },
        simple: {
          color: "{surface.600}"
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.950}",
          borderColor: "{surface.950}"
        },
        simple: {
          color: "{surface.950}"
        }
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "none",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.500}",
          borderColor: "{blue.500}"
        },
        simple: {
          color: "{blue.500}"
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "none",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.500}",
          borderColor: "{green.500}"
        },
        simple: {
          color: "{green.500}"
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "none",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.500}",
          borderColor: "{yellow.500}"
        },
        simple: {
          color: "{yellow.500}"
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "none",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.500}",
          borderColor: "{red.500}"
        },
        simple: {
          color: "{red.500}"
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.400}",
          borderColor: "{surface.400}"
        },
        simple: {
          color: "{surface.400}"
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "none",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.0}",
          borderColor: "{surface.0}"
        },
        simple: {
          color: "{surface.0}"
        }
      }
    }
  }
};

// node_modules/@primeng/themes/material/metergroup/index.mjs
var metergroup_default = {
  root: {
    borderRadius: "{content.border.radius}",
    gap: "1rem"
  },
  meters: {
    background: "{content.border.color}",
    size: "0.5rem"
  },
  label: {
    gap: "0.5rem"
  },
  labelMarker: {
    size: "0.5rem"
  },
  labelIcon: {
    size: "1rem"
  },
  labelList: {
    verticalGap: "0.5rem",
    horizontalGap: "1rem"
  }
};

// node_modules/@primeng/themes/material/multiselect/index.mjs
var multiselect_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    gap: "0.75rem"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  css: ({
    dt
  }) => `
.p-multiselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${dt("multiselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("multiselect.focus.border.color")}, ${dt("multiselect.focus.border.color")}), linear-gradient(to bottom, ${dt("multiselect.border.color")}, ${dt("multiselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt("multiselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("multiselect.focus.border.color")}, ${dt("multiselect.focus.border.color")}), linear-gradient(to bottom, ${dt("multiselect.hover.border.color")}, ${dt("multiselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${dt("multiselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("multiselect.focus.border.color")}, ${dt("multiselect.focus.border.color")}), linear-gradient(to bottom, ${dt("multiselect.border.color")}, ${dt("multiselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${dt("multiselect.focus.border.color")}, ${dt("multiselect.focus.border.color")}), linear-gradient(to bottom, ${dt("multiselect.hover.border.color")}, ${dt("multiselect.hover.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt("multiselect.invalid.border.color")}, ${dt("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${dt("multiselect.invalid.border.color")}, ${dt("multiselect.invalid.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${dt("multiselect.invalid.border.color")}, ${dt("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${dt("multiselect.invalid.border.color")}, ${dt("multiselect.invalid.border.color")});
}

.p-multiselect-option {
    transition: none;
}
`
};

// node_modules/@primeng/themes/material/orderlist/index.mjs
var orderlist_default = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/material/organizationchart/index.mjs
var organizationchart_default = {
  root: {
    gutter: "0.75rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    selectedColor: "{highlight.color}",
    hoverColor: "{content.hover.color}",
    padding: "1rem 1.25rem",
    toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem",
    borderRadius: "{content.border.radius}"
  },
  nodeToggleButton: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    borderColor: "{content.border.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  connector: {
    color: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "24px"
  }
};

// node_modules/@primeng/themes/material/overlaybadge/index.mjs
var overlaybadge_default = {
  root: {
    outline: {
      width: "2px",
      color: "{content.background}"
    }
  }
};

// node_modules/@primeng/themes/material/paginator/index.mjs
var paginator_default = {
  root: {
    padding: "0.5rem 1rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    background: "{content.background}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "transparent",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  currentPageReport: {
    color: "{text.muted.color}"
  },
  jumpToPageInput: {
    maxWidth: "2.5rem"
  }
};

// node_modules/@primeng/themes/material/panel/index.mjs
var panel_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.25rem",
    borderColor: "{content.border.color}",
    borderWidth: "0",
    borderRadius: "0"
  },
  toggleableHeader: {
    padding: "0.5rem 1.25rem"
  },
  title: {
    fontWeight: "600"
  },
  content: {
    padding: "0 1.25rem 1.25rem 1.25rem"
  },
  footer: {
    padding: "0 1.25rem 1.25rem 1.25rem"
  }
};

// node_modules/@primeng/themes/material/panelmenu/index.mjs
var panelmenu_default = {
  root: {
    gap: "0",
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderWidth: "0",
    color: "{content.color}",
    padding: "0",
    borderRadius: "0",
    first: {
      borderWidth: "0",
      topBorderRadius: "{content.border.radius}"
    },
    last: {
      borderWidth: "0",
      bottomBorderRadius: "{content.border.radius}"
    }
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    gap: "0.5rem",
    padding: "{navigation.item.padding}",
    borderRadius: "{content.border.radius}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenu: {
    indent: "1rem"
  },
  submenuIcon: {
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}"
  },
  css: ({
    dt
  }) => `
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${dt("panelmenu.panel.border.color")}
    transition: margin ${dt("panelmenu.transition.duration")};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-start-start-radius: ${dt("content.border.radius")};
    border-start-end-radius: ${dt("content.border.radius")};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-end-start-radius: ${dt("content.border.radius")};
    border-end-end-radius: ${dt("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${dt("navigation.item.active.background")};
}
`
};

// node_modules/@primeng/themes/material/password/index.mjs
var password_default = {
  meter: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: ".75rem"
  },
  icon: {
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    borderRadius: "{overlay.popover.border.radius}",
    color: "{overlay.popover.color}",
    padding: "{overlay.popover.padding}",
    shadow: "{overlay.popover.shadow}"
  },
  content: {
    gap: "0.5rem"
  },
  colorScheme: {
    light: {
      strength: {
        weakBackground: "{red.500}",
        mediumBackground: "{amber.500}",
        strongBackground: "{green.500}"
      }
    },
    dark: {
      strength: {
        weakBackground: "{red.400}",
        mediumBackground: "{amber.400}",
        strongBackground: "{green.400}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/picklist/index.mjs
var picklist_default = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
};

// node_modules/@primeng/themes/material/popover/index.mjs
var popover_default = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}"
  }
};

// node_modules/@primeng/themes/material/progressbar/index.mjs
var progressbar_default = {
  root: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "1rem"
  },
  value: {
    background: "{primary.color}"
  },
  label: {
    color: "{primary.contrast.color}",
    fontSize: "0.75rem",
    fontWeight: "600"
  }
};

// node_modules/@primeng/themes/material/progressspinner/index.mjs
var progressspinner_default = {
  colorScheme: {
    light: {
      root: {
        colorOne: "{red.500}",
        colorTwo: "{blue.500}",
        colorThree: "{green.500}",
        colorFour: "{yellow.500}"
      }
    },
    dark: {
      root: {
        colorOne: "{red.400}",
        colorTwo: "{blue.400}",
        colorThree: "{green.400}",
        colorFour: "{yellow.400}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/radiobutton/index.mjs
var radiobutton_default = {
  root: {
    width: "20px",
    height: "20px",
    background: "{form.field.background}",
    checkedBackground: "{primary.contrast.color}",
    checkedHoverBackground: "{primary.contrast.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "16px",
      height: "16px"
    },
    lg: {
      width: "24px",
      height: "24px"
    }
  },
  icon: {
    size: "10px",
    checkedColor: "{primary.color}",
    checkedHoverColor: "{primary.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "8px"
    },
    lg: {
      size: "12px"
    }
  },
  css: ({
    dt
  }) => `
.p-radiobutton {
    border-radius: 50%;
    transition: box-shadow ${dt("radiobutton.transition.duration")};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 96%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("radiobutton.checked.border.color")}, transparent 92%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("radiobutton.checked.border.color")}, transparent 84%);
}
`
};

// node_modules/@primeng/themes/material/rating/index.mjs
var rating_default = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  icon: {
    size: "1.125rem",
    color: "{text.muted.color}",
    hoverColor: "{primary.color}",
    activeColor: "{primary.color}"
  },
  css: ({
    dt
  }) => `
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${dt("rating.icon.color")}, transparent 96%)
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${dt("rating.icon.color")}, transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${dt("rating.icon.active.color")}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${dt("rating.icon.active.color")}, transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${dt("rating.icon.active.color")}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${dt("rating.icon.active.color")}, transparent 84%);
}
`
};

// node_modules/@primeng/themes/material/ripple/index.mjs
var ripple_default = {
  colorScheme: {
    light: {
      root: {
        background: "rgba(0,0,0,0.1)"
      }
    },
    dark: {
      root: {
        background: "rgba(255,255,255,0.3)"
      }
    }
  }
};

// node_modules/@primeng/themes/material/scrollpanel/index.mjs
var scrollpanel_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  bar: {
    size: "9px",
    borderRadius: "{border.radius.sm}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      bar: {
        background: "{surface.200}"
      }
    },
    dark: {
      bar: {
        background: "{surface.700}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/select/index.mjs
var select_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  css: ({
    dt
  }) => `
.p-select.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${dt("select.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("select.focus.border.color")}, ${dt("select.focus.border.color")}), linear-gradient(to bottom, ${dt("select.border.color")}, ${dt("select.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${dt("select.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("select.focus.border.color")}, ${dt("select.focus.border.color")}), linear-gradient(to bottom, ${dt("select.hover.border.color")}, ${dt("select.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${dt("select.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("select.focus.border.color")}, ${dt("select.focus.border.color")}), linear-gradient(to bottom, ${dt("select.border.color")}, ${dt("select.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${dt("select.focus.border.color")}, ${dt("select.focus.border.color")}), linear-gradient(to bottom, ${dt("select.hover.border.color")}, ${dt("select.hover.border.color")});
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt("select.invalid.border.color")}, ${dt("select.invalid.border.color")}), linear-gradient(to bottom, ${dt("select.invalid.border.color")}, ${dt("select.invalid.border.color")});
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${dt("select.invalid.border.color")}, ${dt("select.invalid.border.color")}), linear-gradient(to bottom, ${dt("select.invalid.border.color")}, ${dt("select.invalid.border.color")});
}

.p-select-option {
    transition: none;
}
`
};

// node_modules/@primeng/themes/material/selectbutton/index.mjs
var selectbutton_default = {
  root: {
    borderRadius: "{form.field.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    },
    dark: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/skeleton/index.mjs
var skeleton_default = {
  root: {
    borderRadius: "{content.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.200}",
        animationBackground: "rgba(255,255,255,0.4)"
      }
    },
    dark: {
      root: {
        background: "rgba(255, 255, 255, 0.06)",
        animationBackground: "rgba(255, 255, 255, 0.04)"
      }
    }
  }
};

// node_modules/@primeng/themes/material/slider/index.mjs
var slider_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  track: {
    background: "{content.border.color}",
    borderRadius: "{border.radius.xs}",
    size: "2px"
  },
  range: {
    background: "{primary.color}"
  },
  handle: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "{primary.color}",
    hoverBackground: "{primary.color}",
    content: {
      borderRadius: "50%",
      background: "{primary.color}",
      hoverBackground: "{primary.color}",
      width: "18px",
      height: "18px",
      shadow: "0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"
    },
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  css: ({
    dt
  }) => `
.p-slider-handle {
    transition: box-shadow ${dt("slider.transition.duration")}
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("slider.handle.background")}, transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("slider.handle.background")}, transparent 84%);
}
`
};

// node_modules/@primeng/themes/material/speeddial/index.mjs
var speeddial_default = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  }
};

// node_modules/@primeng/themes/material/splitbutton/index.mjs
var splitbutton_default = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
  }
};

// node_modules/@primeng/themes/material/splitter/index.mjs
var splitter_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  gutter: {
    background: "{content.border.color}"
  },
  handle: {
    size: "24px",
    background: "transparent",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
};

// node_modules/@primeng/themes/material/stepper/index.mjs
var stepper_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}",
    activeBackground: "{primary.color}",
    margin: "0 0 0 1.625rem",
    size: "2px"
  },
  step: {
    padding: "0.5rem",
    gap: "1rem"
  },
  stepHeader: {
    padding: "0.75rem 1rem",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    },
    gap: "0.5rem"
  },
  stepTitle: {
    color: "{text.muted.color}",
    activeColor: "{text.color}",
    fontWeight: "500"
  },
  stepNumber: {
    activeBackground: "{primary.color}",
    activeBorderColor: "{primary.color}",
    activeColor: "{primary.contrast.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "none"
  },
  steppanels: {
    padding: "0.875rem 0.5rem 1.125rem 0.5rem"
  },
  steppanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0",
    indent: "1rem"
  },
  colorScheme: {
    light: {
      stepNumber: {
        background: "{surface.400}",
        borderColor: "{surface.400}",
        color: "{surface.0}"
      }
    },
    dark: {
      stepNumber: {
        background: "{surface.200}",
        borderColor: "{surface.200}",
        color: "{surface.900}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-step-header:focus-visible {
    background: ${dt("navigation.item.active.background")}
}
`
};

// node_modules/@primeng/themes/material/steps/index.mjs
var steps_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}"
  },
  itemLink: {
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  itemLabel: {
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    fontWeight: "500"
  },
  itemNumber: {
    background: "{content.background}",
    activeBackground: "{content.background}",
    borderColor: "{content.border.color}",
    activeBorderColor: "{content.border.color}",
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  }
};

// node_modules/@primeng/themes/material/tabmenu/index.mjs
var tabmenu_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  item: {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  itemIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  activeBar: {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
  }
};

// node_modules/@primeng/themes/material/tabs/index.mjs
var tabs_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    background: "transparent",
    hoverBackground: "{content.hover.background}",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.25rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  tabpanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "1.25rem 1.25rem 1.25rem 1.25rem",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    width: "3rem",
    shadow: "none",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    }
  },
  activeBar: {
    height: "2px",
    bottom: "-1px",
    background: "{primary.color}"
  },
  css: ({
    dt
  }) => `


.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, ${dt("primary.color")}, transparent 90%)
}

.p-tab:not(.p-disabled):focus-visible {
    background: ${dt("navigation.item.active.background")};
}

.p-tablist-nav-button:focus-visible {
    background: ${dt("navigation.item.active.background")};
}
`
};

// node_modules/@primeng/themes/material/tabview/index.mjs
var tabview_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tabList: {
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    borderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  tabPanel: {
    background: "{content.background}",
    color: "{content.color}"
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}"
  },
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  }
};

// node_modules/@primeng/themes/material/tag/index.mjs
var tag_default = {
  root: {
    fontSize: "0.875rem",
    fontWeight: "700",
    padding: "0.25rem 0.5rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    roundedBorderRadius: "{border.radius.xl}"
  },
  icon: {
    size: "0.75rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.500}",
        color: "{surface.0}"
      },
      info: {
        background: "{sky.500}",
        color: "{surface.0}"
      },
      warn: {
        background: "{orange.500}",
        color: "{surface.0}"
      },
      danger: {
        background: "{red.500}",
        color: "{surface.0}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "{green.400}",
        color: "{green.950}"
      },
      info: {
        background: "{sky.400}",
        color: "{sky.950}"
      },
      warn: {
        background: "{orange.400}",
        color: "{orange.950}"
      },
      danger: {
        background: "{red.400}",
        color: "{red.950}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/terminal/index.mjs
var terminal_default = {
  root: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.color}",
    height: "18rem",
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{form.field.border.radius}"
  },
  prompt: {
    gap: "0.25rem"
  },
  commandResponse: {
    margin: "2px 0"
  }
};

// node_modules/@primeng/themes/material/textarea/index.mjs
var textarea_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  css: ({
    dt
  }) => `
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${dt("textarea.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("textarea.focus.border.color")}, ${dt("textarea.focus.border.color")}), linear-gradient(to bottom, ${dt("textarea.border.color")}, ${dt("textarea.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${dt("textarea.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("textarea.focus.border.color")}, ${dt("textarea.focus.border.color")}), linear-gradient(to bottom, ${dt("textarea.hover.border.color")}, ${dt("textarea.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${dt("textarea.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("textarea.focus.border.color")}, ${dt("textarea.focus.border.color")}), linear-gradient(to bottom, ${dt("textarea.border.color")}, ${dt("textarea.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${dt("textarea.focus.border.color")}, ${dt("textarea.focus.border.color")}), linear-gradient(to bottom, ${dt("textarea.hover.border.color")}, ${dt("textarea.hover.border.color")});
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt("textarea.invalid.border.color")}, ${dt("textarea.invalid.border.color")}), linear-gradient(to bottom, ${dt("textarea.invalid.border.color")}, ${dt("textarea.invalid.border.color")});
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${dt("textarea.invalid.border.color")}, ${dt("textarea.invalid.border.color")}), linear-gradient(to bottom, ${dt("textarea.invalid.border.color")}, ${dt("textarea.invalid.border.color")});
}
`
};

// node_modules/@primeng/themes/material/tieredmenu/index.mjs
var tieredmenu_default = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    mobileIndent: "1rem"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  css: ({
    dt
  }) => `
.p-tieredmenu-overlay {
    border-color: transparent
}
`
};

// node_modules/@primeng/themes/material/timeline/index.mjs
var timeline_default = {
  event: {
    minHeight: "5rem"
  },
  horizontal: {
    eventContent: {
      padding: "1rem 0"
    }
  },
  vertical: {
    eventContent: {
      padding: "0 1rem"
    }
  },
  eventMarker: {
    size: "1.5rem",
    borderRadius: "50%",
    borderWidth: "2px",
    background: "{primary.color}",
    content: {
      borderRadius: "50%",
      size: "0",
      background: "{primary.color}",
      insetShadow: "none"
    }
  },
  eventConnector: {
    color: "{content.border.color}",
    size: "2px"
  },
  colorScheme: {
    light: {
      eventMarker: {
        borderColor: "{surface.0}"
      }
    },
    dark: {
      eventMarker: {
        borderColor: "{surface.900}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/toast/index.mjs
var toast_default = {
  root: {
    width: "25rem",
    borderRadius: "{content.border.radius}",
    borderWidth: "0",
    transitionDuration: "{transition.duration}"
  },
  icon: {
    size: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "0.5rem"
  },
  text: {
    gap: "0.5rem"
  },
  summary: {
    fontWeight: "500",
    fontSize: "1rem"
  },
  detail: {
    fontWeight: "500",
    fontSize: "0.875rem"
  },
  closeButton: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      root: {
        blur: "0"
      },
      info: {
        background: "{blue.50}",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        detailColor: "{surface.700}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "{green.50}",
        borderColor: "{green.200}",
        color: "{green.600}",
        detailColor: "{surface.700}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "{yellow.50}",
        borderColor: "{yellow.200}",
        color: "{yellow.900}",
        detailColor: "{surface.700}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "{red.50}",
        borderColor: "{red.200}",
        color: "{red.600}",
        detailColor: "{surface.700}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        detailColor: "{surface.700}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        detailColor: "{surface.0}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        }
      }
    },
    dark: {
      root: {
        blur: "10px"
      },
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 36%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{surface.0}",
        detailColor: "{blue.100}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 36%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{surface.0}",
        detailColor: "{green.100}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 36%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{surface.0}",
        detailColor: "{yellow.50}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 36%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{surface.0}",
        detailColor: "{red.100}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        detailColor: "{surface.0}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        detailColor: "{surface.950}",
        shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      }
    }
  }
};

// node_modules/@primeng/themes/material/togglebutton/index.mjs
var togglebutton_default = {
  root: {
    padding: "0.75rem 1rem",
    borderRadius: "{form.field.border.radius}",
    gap: "0.5rem",
    fontWeight: "500",
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.color}",
    hoverColor: "{form.field.color}",
    checkedColor: "{form.field.color}",
    checkedBorderColor: "{form.field.border.color}",
    disabledBackground: "{form.field.disabled.background}",
    disabledBorderColor: "{form.field.disabled.background}",
    disabledColor: "{form.field.disabled.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    focusRing: {
      width: "0",
      style: "none",
      offset: "0",
      color: "unset",
      shadow: "none"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      padding: "0.625rem 0.75rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      padding: "0.875rem 1.25rem"
    }
  },
  icon: {
    color: "{text.muted.color}",
    hoverColor: "{text.muted.color}",
    checkedColor: "{text.muted.color}",
    disabledColor: "{form.field.disabled.color}"
  },
  content: {
    checkedBackground: "transparent",
    checkedShadow: "none",
    padding: "0",
    borderRadius: "0",
    sm: {
      padding: "0"
    },
    lg: {
      padding: "0"
    }
  },
  colorScheme: {
    light: {
      root: {
        hoverBackground: "{surface.100}",
        checkedBackground: "{surface.200}"
      }
    },
    dark: {
      root: {
        hoverBackground: "{surface.800}",
        checkedBackground: "{surface.700}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-togglebutton:focus-visible {
    background: ${dt("togglebutton.hover.background")}
}
`
};

// node_modules/@primeng/themes/material/toggleswitch/index.mjs
var toggleswitch_default = {
  root: {
    width: "2.75rem",
    height: "1rem",
    borderRadius: "30px",
    gap: "0px",
    shadow: "none",
    focusRing: {
      width: "0",
      style: "none",
      color: "unset",
      offset: "0",
      shadow: "none"
    },
    borderWidth: "1px",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    checkedBorderColor: "transparent",
    checkedHoverBorderColor: "transparent",
    invalidBorderColor: "{form.field.invalid.border.color}",
    transitionDuration: "{form.field.transition.duration}",
    slideDuration: "0.2s"
  },
  handle: {
    borderRadius: "50%",
    size: "1.5rem"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.300}",
        disabledBackground: "{surface.400}",
        hoverBackground: "{surface.300}",
        checkedBackground: "{primary.200}",
        checkedHoverBackground: "{primary.200}"
      },
      handle: {
        background: "{surface.0}",
        disabledBackground: "{surface.200}",
        hoverBackground: "{surface.0}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.color}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}",
        checkedColor: "{primary.contrast.color}",
        checkedHoverColor: "{primary.contrast.color}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        disabledBackground: "{surface.600}",
        hoverBackground: "{surface.700}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.color}"
      },
      handle: {
        background: "{surface.400}",
        disabledBackground: "{surface.500}",
        hoverBackground: "{surface.300}",
        checkedBackground: "{primary.200}",
        checkedHoverBackground: "{primary.200}",
        color: "{surface.800}",
        hoverColor: "{surface.900}",
        checkedColor: "{primary.contrast.color}",
        checkedHoverColor: "{primary.contrast.color}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("text.color")}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("toggleswitch.handle.checked.background")}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt("toggleswitch.handle.checked.background")}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`
};

// node_modules/@primeng/themes/material/toolbar/index.mjs
var toolbar_default = {
  root: {
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem",
    padding: "1rem"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.100}",
        borderColor: "{surface.100}"
      }
    },
    dark: {
      root: {
        background: "{surface.800}",
        borderColor: "{surface.800}"
      }
    }
  }
};

// node_modules/@primeng/themes/material/tooltip/index.mjs
var tooltip_default = {
  root: {
    background: "{surface.600}",
    color: "{surface.0}",
    maxWidth: "12.5rem",
    gutter: "0.25rem",
    shadow: "{overlay.popover.shadow}",
    padding: "0.5rem 0.75rem",
    borderRadius: "{overlay.popover.border.radius}"
  }
};

// node_modules/@primeng/themes/material/tree/index.mjs
var tree_default = {
  root: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "1rem",
    gap: "2px",
    indent: "2rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    padding: "0.5rem 0.75rem",
    borderRadius: "{border.radius.xs}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.color}",
    hoverColor: "{text.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  nodeIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}"
  },
  nodeToggleButton: {
    borderRadius: "50%",
    size: "2rem",
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedHoverColor: "{primary.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  loadingIcon: {
    size: "2rem"
  },
  filter: {
    margin: "0 0 0.75rem 0"
  },
  css: ({
    dt
  }) => `
.p-tree-node-content {
    transition: none
}
`
};

// node_modules/@primeng/themes/material/treeselect/index.mjs
var treeselect_default = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  tree: {
    padding: "{list.padding}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  css: ({
    dt
  }) => `
.p-treeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${dt("treeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("treeselect.focus.border.color")}, ${dt("treeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("treeselect.border.color")}, ${dt("treeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt("treeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("treeselect.focus.border.color")}, ${dt("treeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("treeselect.hover.border.color")}, ${dt("treeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${dt("treeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${dt("treeselect.focus.border.color")}, ${dt("treeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("treeselect.border.color")}, ${dt("treeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${dt("treeselect.focus.border.color")}, ${dt("treeselect.focus.border.color")}), linear-gradient(to bottom, ${dt("treeselect.hover.border.color")}, ${dt("treeselect.hover.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${dt("treeselect.invalid.border.color")}, ${dt("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${dt("treeselect.invalid.border.color")}, ${dt("treeselect.invalid.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${dt("treeselect.invalid.border.color")}, ${dt("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${dt("treeselect.invalid.border.color")}, ${dt("treeselect.invalid.border.color")});
}
`
};

// node_modules/@primeng/themes/material/treetable/index.mjs
var treetable_default = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{treetable.border.color}",
    padding: "0.75rem 1rem",
    gap: "0.5rem"
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  columnResizer: {
    width: "0.5rem"
  },
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    size: "0.875rem"
  },
  loadingIcon: {
    size: "2rem"
  },
  nodeToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  },
  css: ({
    dt
  }) => `
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`
};

// node_modules/@primeng/themes/material/virtualscroller/index.mjs
var virtualscroller_default = {
  loader: {
    mask: {
      background: "{content.background}",
      color: "{text.muted.color}"
    },
    icon: {
      size: "2rem"
    }
  }
};

// node_modules/@primeng/themes/material/index.mjs
var material_default = __spreadProps(__spreadValues({}, base_default), {
  components: {
    accordion: accordion_default,
    autocomplete: autocomplete_default,
    avatar: avatar_default,
    badge: badge_default,
    blockui: blockui_default,
    breadcrumb: breadcrumb_default,
    button: button_default,
    datepicker: datepicker_default,
    card: card_default,
    carousel: carousel_default,
    cascadeselect: cascadeselect_default,
    checkbox: checkbox_default,
    chip: chip_default,
    colorpicker: colorpicker_default,
    confirmdialog: confirmdialog_default,
    confirmpopup: confirmpopup_default,
    contextmenu: contextmenu_default,
    dataview: dataview_default,
    datatable: datatable_default,
    dialog: dialog_default,
    divider: divider_default,
    dock: dock_default,
    drawer: drawer_default,
    editor: editor_default,
    fieldset: fieldset_default,
    fileupload: fileupload_default,
    iftalabel: iftalabel_default,
    floatlabel: floatlabel_default,
    galleria: galleria_default,
    iconfield: iconfield_default,
    image: image_default,
    imagecompare: imagecompare_default,
    inlinemessage: inlinemessage_default,
    inplace: inplace_default,
    inputchips: inputchips_default,
    inputgroup: inputgroup_default,
    inputnumber: inputnumber_default,
    inputotp: inputotp_default,
    inputtext: inputtext_default,
    knob: knob_default,
    listbox: listbox_default,
    megamenu: megamenu_default,
    menu: menu_default,
    menubar: menubar_default,
    message: message_default,
    metergroup: metergroup_default,
    multiselect: multiselect_default,
    orderlist: orderlist_default,
    organizationchart: organizationchart_default,
    overlaybadge: overlaybadge_default,
    popover: popover_default,
    paginator: paginator_default,
    password: password_default,
    panel: panel_default,
    panelmenu: panelmenu_default,
    picklist: picklist_default,
    progressbar: progressbar_default,
    progressspinner: progressspinner_default,
    radiobutton: radiobutton_default,
    rating: rating_default,
    scrollpanel: scrollpanel_default,
    select: select_default,
    selectbutton: selectbutton_default,
    skeleton: skeleton_default,
    slider: slider_default,
    speeddial: speeddial_default,
    splitter: splitter_default,
    splitbutton: splitbutton_default,
    stepper: stepper_default,
    steps: steps_default,
    tabmenu: tabmenu_default,
    tabs: tabs_default,
    tabview: tabview_default,
    textarea: textarea_default,
    tieredmenu: tieredmenu_default,
    tag: tag_default,
    terminal: terminal_default,
    timeline: timeline_default,
    togglebutton: togglebutton_default,
    toggleswitch: toggleswitch_default,
    tree: tree_default,
    treeselect: treeselect_default,
    treetable: treetable_default,
    toast: toast_default,
    toolbar: toolbar_default,
    virtualscroller: virtualscroller_default,
    tooltip: tooltip_default,
    ripple: ripple_default
  },
  css: ({
    dt
  }) => `

    `
});

// src/app/mypreset.ts
var MyPreset = definePreset(material_default, {
  semantic: {
    primary: {
      50: "#f9f2fd",
      100: "#ecd9f8",
      200: "#dabaf2",
      300: "#c393e8",
      400: "#a36adc",
      // 4.76 vs black
      500: "#7636ab",
      // 7.27 vs white
      600: "#5e298a",
      700: "#4a1f6c",
      800: "#35154d",
      900: "#210c30",
      950: "#13051b"
    }
  },
  primitive: {
    green: {
      50: "#e6f8f8",
      100: "#bdeee9",
      200: "#91e0db",
      300: "#64d1cd",
      400: "#3fc9c7",
      // 9.60 vs black
      500: "#00706f",
      // 5.92 vs white
      600: "#005b59",
      700: "#004644",
      800: "#003130",
      900: "#001e1e",
      950: "#001010"
    },
    red: {
      50: "#ffe5e8",
      100: "#ffb8c4",
      200: "#ff8aa0",
      300: "#ff5c7c",
      400: "#ff5572",
      // 6.38 vs black
      500: "#c50028",
      // 6.16 vs white
      600: "#a80023",
      700: "#85001b",
      800: "#620014",
      900: "#40000d",
      950: "#200006"
    },
    orange: {
      50: "#fff4e8",
      100: "#ffe0c2",
      200: "#ffcb99",
      300: "#ffb470",
      400: "#ff9844",
      // 8.81 vs black
      500: "#e66411",
      // 3.38 vs white
      600: "#ba500e",
      700: "#8f3d0a",
      800: "#652a07",
      900: "#3c1803",
      950: "#200c01"
    },
    sky: {
      50: "#e6f7fc",
      100: "#b3e6f7",
      200: "#80d4f2",
      300: "#4dbfea",
      400: "#1aaae2",
      // 7.10 vs black
      500: "#0794d3",
      // 3.39 vs white
      600: "#0678ab",
      700: "#055c83",
      800: "#03405b",
      900: "#022433",
      950: "#01131c"
    },
    purple: {
      50: "#fde6f5",
      100: "#f9b8df",
      200: "#f38acc",
      300: "#ec5cb8",
      400: "#e24aae",
      // 5.62 vs black
      500: "#a80078",
      // 7.15 vs white
      600: "#870061",
      700: "#66004b",
      800: "#470034",
      900: "#2a001f",
      950: "#14000e"
    }
  },
  dark: {
    primary: {
      50: "#13051b",
      100: "#210c30",
      200: "#35154d",
      300: "#4a1f6c",
      400: "#5e298a",
      500: "#7636ab",
      // base
      600: "#a36adc",
      700: "#c393e8",
      800: "#dabaf2",
      900: "#ecd9f8",
      950: "#f9f2fd"
    }
  }
});
var mypreset_default = MyPreset;

// src/app/views/static/landing.component.ts
var LandingComponent = class _LandingComponent {
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["ca-landing"]], decls: 6, vars: 6, consts: [["id", "wb-cont"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "title.landing"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "about.content"));
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "ca-landing", imports: [CommonModule, TranslateModule], template: `
    <h1 id="wb-cont">{{ 'title.landing' | translate}}</h1>
    <p>{{'about.content' | translate }}</p>   
  ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/views/static/landing.component.ts", lineNumber: 14 });
})();

// src/app/views/static/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["ca-not-found"]], decls: 2, vars: 3, consts: [[3, "innerHTML"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "span", 0);
      \u0275\u0275pipe(1, "translate");
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, "404.message"), \u0275\u0275sanitizeHtml);
    }
  }, dependencies: [TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "ca-not-found", imports: [TranslateModule], template: `
    <span [innerHTML]="'404.message' | translate"></span>
  ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/views/static/not-found.component.ts", lineNumber: 12 });
})();

// src/app/views/page-assistant/components/upload.component.ts
function PageUploadComponent_ca_upload_url_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ca-upload-url", 14);
    \u0275\u0275listener("uploadComplete", function PageUploadComponent_ca_upload_url_26_Template_ca_upload_url_uploadComplete_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCompare());
    });
    \u0275\u0275elementEnd();
  }
}
function PageUploadComponent_ca_upload_paste_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ca-upload-paste", 14);
    \u0275\u0275listener("uploadComplete", function PageUploadComponent_ca_upload_paste_27_Template_ca_upload_paste_uploadComplete_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCompare());
    });
    \u0275\u0275elementEnd();
  }
}
function PageUploadComponent_ca_upload_word_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ca-upload-word", 14);
    \u0275\u0275listener("uploadComplete", function PageUploadComponent_ca_upload_word_28_Template_ca_upload_word_uploadComplete_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCompare());
    });
    \u0275\u0275elementEnd();
  }
}
var PageUploadComponent = class _PageUploadComponent {
  uploadState;
  router;
  constructor(uploadState, router) {
    this.uploadState = uploadState;
    this.router = router;
  }
  ngOnInit() {
    const data = this.uploadState.getUploadData();
    if (data) {
      this.goToCompare();
    }
  }
  selectedUploadType = "url";
  // Default to url radio button
  onUploadTypeChange(value) {
    this.selectedUploadType = value;
    this.uploadState.setUploadType(value);
  }
  goToCompare() {
    this.router.navigate(["page-assistant/compare"]);
  }
  static \u0275fac = function PageUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageUploadComponent)(\u0275\u0275directiveInject(UploadStateService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageUploadComponent, selectors: [["ca-page-upload"]], decls: 29, vars: 13, consts: [["id", "wb-cont"], [1, "flex", "flex-wrap"], [1, "flex", "mr-4", "mb-4"], [1, "border-none", "p-0", "m-0"], [1, "font-bold", "mb-3"], [1, "flex", "flex-column", "gap-3"], [1, "flex", "align-items-center"], ["name", "uploadType", "value", "url", 3, "onClick", "ngModelChange", "ngModel"], [1, "ml-2"], ["name", "uploadType", "value", "paste", 3, "onClick", "ngModelChange", "ngModel"], ["name", "uploadType", "value", "word", 3, "onClick", "ngModelChange", "ngModel"], [1, "flex"], [3, "ngSwitch"], [3, "uploadComplete", 4, "ngSwitchCase"], [3, "uploadComplete"]], template: function PageUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 1)(7, "div", 2)(8, "fieldset", 3)(9, "legend", 4);
      \u0275\u0275text(10, "Choose upload type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5)(12, "label", 6)(13, "p-radioButton", 7);
      \u0275\u0275listener("onClick", function PageUploadComponent_Template_p_radioButton_onClick_13_listener() {
        return ctx.onUploadTypeChange("url");
      });
      \u0275\u0275twoWayListener("ngModelChange", function PageUploadComponent_Template_p_radioButton_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedUploadType, $event) || (ctx.selectedUploadType = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 8);
      \u0275\u0275text(15, "URL");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "label", 6)(17, "p-radioButton", 9);
      \u0275\u0275listener("onClick", function PageUploadComponent_Template_p_radioButton_onClick_17_listener() {
        return ctx.onUploadTypeChange("paste");
      });
      \u0275\u0275twoWayListener("ngModelChange", function PageUploadComponent_Template_p_radioButton_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedUploadType, $event) || (ctx.selectedUploadType = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275text(19, "Copy & Paste");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "label", 6)(21, "p-radioButton", 10);
      \u0275\u0275listener("onClick", function PageUploadComponent_Template_p_radioButton_onClick_21_listener() {
        return ctx.onUploadTypeChange("word");
      });
      \u0275\u0275twoWayListener("ngModelChange", function PageUploadComponent_Template_p_radioButton_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedUploadType, $event) || (ctx.selectedUploadType = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 8);
      \u0275\u0275text(23, "Word doc (converts to HTML)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 11);
      \u0275\u0275elementContainerStart(25, 12);
      \u0275\u0275template(26, PageUploadComponent_ca_upload_url_26_Template, 1, 0, "ca-upload-url", 13)(27, PageUploadComponent_ca_upload_paste_27_Template, 1, 0, "ca-upload-paste", 13)(28, PageUploadComponent_ca_upload_word_28_Template, 1, 0, "ca-upload-word", 13);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 9, "title.page"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "page.upload.description"));
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedUploadType);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedUploadType);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedUploadType);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngSwitch", ctx.selectedUploadType);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "url");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "paste");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "word");
    }
  }, dependencies: [CommonModule, NgSwitch, NgSwitchCase, FormsModule, NgControlStatus, NgModel, TranslateModule, TranslatePipe, RadioButtonModule, RadioButton, UploadUrlComponent, UploadPasteComponent, UploadWordComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageUploadComponent, [{
    type: Component,
    args: [{ selector: "ca-page-upload", imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      RadioButtonModule,
      UploadUrlComponent,
      UploadPasteComponent,
      UploadWordComponent
    ], template: `<h1 id="wb-cont">{{ 'title.page' | translate}}</h1>\r
<p>{{'page.upload.description' | translate }}</p>\r
<div class="flex flex-wrap">\r
    <!--SELECT UPLOAD TYPE-->\r
    <div class="flex mr-4 mb-4">\r
        <fieldset class="border-none p-0 m-0">\r
            <legend class="font-bold mb-3">Choose upload type:</legend>\r
\r
            <div class="flex flex-column gap-3">\r
                <label class="flex align-items-center">\r
                    <p-radioButton name="uploadType" value="url" (onClick)="onUploadTypeChange('url')"\r
                        [(ngModel)]="selectedUploadType"></p-radioButton>\r
                    <span class="ml-2">URL</span>\r
                </label>\r
\r
                <label class="flex align-items-center">\r
                    <p-radioButton name="uploadType" value="paste" (onClick)="onUploadTypeChange('paste')"\r
                        [(ngModel)]="selectedUploadType"></p-radioButton>\r
                    <span class="ml-2">Copy & Paste</span>\r
                </label>\r
\r
                <label class="flex align-items-center">\r
                    <p-radioButton name="uploadType" value="word" (onClick)="onUploadTypeChange('word')"\r
                        [(ngModel)]="selectedUploadType"></p-radioButton>\r
                    <span class="ml-2">Word doc (converts to HTML)</span>\r
                </label>\r
            </div>\r
        </fieldset>\r
    </div>\r
    <!--UPLOAD FILE-->\r
    <div class="flex">\r
        <ng-container [ngSwitch]="selectedUploadType">\r
\r
            <ca-upload-url *ngSwitchCase="'url'" (uploadComplete)="goToCompare()"></ca-upload-url>\r
            <ca-upload-paste *ngSwitchCase="'paste'" (uploadComplete)="goToCompare()"></ca-upload-paste>\r
            <ca-upload-word *ngSwitchCase="'word'" (uploadComplete)="goToCompare()"></ca-upload-word>\r
\r
        </ng-container>\r
    </div>\r
</div>` }]
  }], () => [{ type: UploadStateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageUploadComponent, { className: "PageUploadComponent", filePath: "src/app/views/page-assistant/components/upload.component.ts", lineNumber: 30 });
})();

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var theme = ({
  dt
}) => `
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${dt("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${dt("progressspinner.colorOne")};
    }
    40% {
        stroke: ${dt("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${dt("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${dt("progressspinner.colorFour")};
    }
}
`;
var classes = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 11,
    consts: [["role", "progressbar", 1, "p-progressspinner", 3, "ngStyle", "ngClass"], ["viewBox", "25 25 50 50", 1, "p-progressspinner-spin"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 1, "p-progressspinner-circle"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1);
        \u0275\u0275element(2, "circle", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", ctx.styleClass);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-busy", true)("data-pc-name", "progressspinner")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275attribute("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div class="p-progressspinner" [ngStyle]="style" [ngClass]="styleClass" role="progressbar" [attr.aria-label]="ariaLabel" [attr.aria-busy]="true" [attr.data-pc-name]="'progressspinner'" [attr.data-pc-section]="'root'">
            <svg class="p-progressspinner-spin" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
                <circle class="p-progressspinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
            </svg>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// src/app/views/page-assistant/components/share.component.ts
function ShareComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h2");
    \u0275\u0275text(2, "Which pages do you want to share?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "p-iftalabel")(5, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function ShareComponent_div_6_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.url, $event) || (ctx_r1.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 5);
    \u0275\u0275text(7, "URL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-iftalabel")(9, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ShareComponent_div_6_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.compareUrl, $event) || (ctx_r1.compareUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 7);
    \u0275\u0275text(11, "Optional comparison URL");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "p");
    \u0275\u0275text(14, "Your share link:");
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "a", 8);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Sample share link: ");
    \u0275\u0275element(20, "br");
    \u0275\u0275elementStart(21, "a", 9);
    \u0275\u0275text(22, " page-assistant/share?url=https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html&compareUrl=https://cra-design.github.io/gst-hst-business/en/topics/gst-hst-businesses.html");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.url);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.compareUrl);
    \u0275\u0275advance(7);
    \u0275\u0275property("href", ctx_r1.getShareLink(ctx_r1.url, ctx_r1.compareUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getShareLink(ctx_r1.url, ctx_r1.compareUrl));
  }
}
function ShareComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "p-progress-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
var ShareComponent = class _ShareComponent {
  route;
  urlDataService;
  uploadState;
  translate;
  router;
  locationStrategy;
  constructor(route, urlDataService, uploadState, translate, router, locationStrategy) {
    this.route = route;
    this.urlDataService = urlDataService;
    this.uploadState = uploadState;
    this.translate = translate;
    this.router = router;
    this.locationStrategy = locationStrategy;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const url = params["url"];
      const compareUrl = params["compareUrl"];
      if (url) {
        this.fetchAndGoToCompare(url, compareUrl);
      }
    });
    this.baseHref = this.locationStrategy.getBaseHref();
  }
  url = "";
  compareUrl = null;
  baseHref = null;
  getShareLink(url, compareUrl) {
    const params = {};
    params.url = url;
    params.compareUrl = compareUrl;
    const treeLink = this.router.createUrlTree(["page-assistant/share"], { queryParams: params });
    const shareLink = `${window.location.origin}${this.baseHref}${this.router.serializeUrl(treeLink).replace(/^\//, "")}`;
    return shareLink;
  }
  error = "";
  loading = false;
  fetchAndGoToCompare(url, compareUrl) {
    return __async(this, null, function* () {
      const unknownError = this.translate.instant("page.upload.error.unknown");
      const tryError = this.translate.instant("page.upload.url.error.try");
      this.loading = true;
      this.error = "";
      try {
        const originalData = yield this.urlDataService.fetchAndProcess(url);
        let compareData;
        if (compareUrl) {
          compareData = yield this.urlDataService.fetchAndProcess(compareUrl);
        }
        this.uploadState.setUploadData({
          originalUrl: url,
          originalHtml: originalData.html,
          modifiedUrl: compareUrl ?? url,
          modifiedHtml: compareData?.html ?? originalData.html,
          found: {
            original: originalData.found,
            modified: compareData?.found ?? originalData.found
          }
        });
        this.router.navigate(["page-assistant/compare"]);
      } catch (err) {
        this.error = `${tryError} ${err.message || err || unknownError}`;
      } finally {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function ShareComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShareComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UrlDataService), \u0275\u0275directiveInject(UploadStateService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShareComponent, selectors: [["ca-share"]], decls: 8, vars: 8, consts: [["id", "wb-cont"], [4, "ngIf"], ["class", "flex justify-content-center", 4, "ngIf"], [1, "flex", "flex-column", "gap-3"], ["pInputText", "", "id", "url", "autocomplete", "off", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "url"], ["pInputText", "", "id", "compare", "autocomplete", "off", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "compare"], [3, "href"], ["href", "page-assistant/share?url=https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html&compareUrl=https://cra-design.github.io/gst-hst-business/en/topics/gst-hst-businesses.html"], [1, "flex", "justify-content-center"], ["ariaLabel", "loading"]], template: function ShareComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, ShareComponent_div_6_Template, 23, 4, "div", 1)(7, ShareComponent_div_7_Template, 2, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "title.page"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "page.share.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe, ProgressSpinnerModule, ProgressSpinner, InputTextModule, InputText, IftaLabelModule, IftaLabel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareComponent, [{
    type: Component,
    args: [{ selector: "ca-share", imports: [CommonModule, FormsModule, TranslateModule, ProgressSpinnerModule, InputTextModule, IftaLabelModule], template: `   
  <h1 id="wb-cont">{{ 'title.page' | translate}}</h1>
<p>{{'page.share.description' | translate }}</p>
      <div *ngIf="!loading">
        <h2>Which pages do you want to share?</h2>
        <div class="flex flex-column gap-3">
          <p-iftalabel>
            <input pInputText id="url" [(ngModel)]="url" autocomplete="off" fluid/>
            <label for="url">URL</label>
          </p-iftalabel>
          <p-iftalabel>
            <input pInputText id="compare" [(ngModel)]="compareUrl" autocomplete="off" fluid/>
            <label for="compare">Optional comparison URL</label>
          </p-iftalabel>
          <div>
            <p>Your share link:<br>
            <a [href]="getShareLink(url, compareUrl)">{{getShareLink(url, compareUrl)}}</a></p>
            <p>Sample share link: <br>
            <a href="page-assistant/share?url=https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html&compareUrl=https://cra-design.github.io/gst-hst-business/en/topics/gst-hst-businesses.html">
          page-assistant/share?url=https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html&compareUrl=https://cra-design.github.io/gst-hst-business/en/topics/gst-hst-businesses.html</a></p>
          </div>
        </div>
      </div>
      <div class="flex justify-content-center" *ngIf="loading"><p-progress-spinner ariaLabel="loading" /></div>
  ` }]
  }], () => [{ type: ActivatedRoute }, { type: UrlDataService }, { type: UploadStateService }, { type: TranslateService }, { type: Router }, { type: LocationStrategy }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShareComponent, { className: "ShareComponent", filePath: "src/app/views/page-assistant/components/share.component.ts", lineNumber: 47 });
})();

// src/app/views/image-assistant/components/file-upload/file-upload.component.ts
var FileUploadComponent = class _FileUploadComponent {
  filesSelected = new EventEmitter();
  isDragOver = false;
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.filesSelected.emit(input.files);
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.filesSelected.emit(event.dataTransfer.files);
    }
  }
  triggerFileInput() {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
      fileInput.click();
    }
  }
  static \u0275fac = function FileUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadComponent, selectors: [["ca-file-upload"]], outputs: { filesSelected: "filesSelected" }, decls: 15, vars: 11, consts: [[1, "file-upload-container", 3, "click", "dragover", "dragleave", "drop"], [1, "upload-icon"], [1, "pi", "pi-upload"], [1, "mb-2"], [1, "text-color-secondary", "text-sm"], ["type", "file", "id", "file-input", "name", "files", "multiple", "", "accept", ".png,.jpg,.jpeg,.pdf", 3, "change"]], template: function FileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fieldset")(1, "legend");
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 0);
      \u0275\u0275listener("click", function FileUploadComponent_Template_div_click_4_listener() {
        return ctx.triggerFileInput();
      })("dragover", function FileUploadComponent_Template_div_dragover_4_listener($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileUploadComponent_Template_div_dragleave_4_listener($event) {
        return ctx.onDragLeave($event);
      })("drop", function FileUploadComponent_Template_div_drop_4_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275elementStart(5, "div", 1);
      \u0275\u0275element(6, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3)(8, "strong");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 4);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 5);
      \u0275\u0275listener("change", function FileUploadComponent_Template_input_change_14_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "image.upload.legend"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("dragover", ctx.isDragOver);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "image.upload.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, "image.upload.accept"), " ");
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.file-upload-container[_ngcontent-%COMP%] {\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 1rem;\n}\n.file-upload-container[_ngcontent-%COMP%]:hover {\n  border-color: #a7a72e;\n  background-color: #f5f5f5;\n}\n.file-upload-container.dragover[_ngcontent-%COMP%] {\n  border-color: #a7a72e;\n  background-color: #f0f0f0;\n}\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #a7a72e;\n  margin-bottom: 1rem;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  margin: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=file-upload.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadComponent, [{
    type: Component,
    args: [{ selector: "ca-file-upload", standalone: true, imports: [CommonModule, TranslateModule], template: `<fieldset>\r
  <legend>{{ 'image.upload.legend' | translate }}</legend>\r
  <div \r
    class="file-upload-container" \r
    [class.dragover]="isDragOver"\r
    (click)="triggerFileInput()"\r
    (dragover)="onDragOver($event)"\r
    (dragleave)="onDragLeave($event)"\r
    (drop)="onDrop($event)">\r
    \r
    <div class="upload-icon">\r
      <i class="pi pi-upload"></i>\r
    </div>\r
    \r
    <p class="mb-2">\r
      <strong>{{ 'image.upload.title' | translate }}</strong>\r
    </p>\r
    \r
    <p class="text-color-secondary text-sm">\r
      {{ 'image.upload.accept' | translate }}\r
    </p>\r
    \r
    <input \r
      type="file" \r
      id="file-input"\r
      name="files" \r
      multiple \r
      accept=".png,.jpg,.jpeg,.pdf"\r
      (change)="onFileSelected($event)">\r
  </div>\r
</fieldset>`, styles: ["/* angular:styles/component:css;49a6573b5384514cd7691e34ae77690c7832d93287784bea6bcab8477465a06c;C:/AmberDev/content-assistant/src/app/views/image-assistant/components/file-upload/file-upload.component.ts */\n.file-upload-container {\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-top: 1rem;\n}\n.file-upload-container:hover {\n  border-color: #a7a72e;\n  background-color: #f5f5f5;\n}\n.file-upload-container.dragover {\n  border-color: #a7a72e;\n  background-color: #f0f0f0;\n}\ninput[type=file] {\n  display: none;\n}\n.upload-icon {\n  font-size: 3rem;\n  color: #a7a72e;\n  margin-bottom: 1rem;\n}\nfieldset {\n  border: none;\n  padding: 0;\n  margin: 0;\n}\nlegend {\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=file-upload.component.css.map */\n"] }]
  }], null, { filesSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent", filePath: "src/app/views/image-assistant/components/file-upload/file-upload.component.ts", lineNumber: 53 });
})();

// node_modules/primeng/fesm2022/primeng-dropdown.mjs
var _c0 = (a0) => ({
  height: a0
});
var _c1 = (a0, a1, a2) => ({
  "p-select-option": true,
  "p-select-option-selected": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c2 = (a0) => ({
  $implicit: a0
});
function DropdownItem_ng_container_1_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-select-option-check-icon");
  }
}
function DropdownItem_ng_container_1_BlankIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "BlankIcon", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-select-option-blank-icon");
  }
}
function DropdownItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DropdownItem_ng_container_1_CheckIcon_1_Template, 1, 1, "CheckIcon", 3)(2, DropdownItem_ng_container_1_BlankIcon_2_Template, 1, 1, "BlankIcon", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selected);
  }
}
function DropdownItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function DropdownItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c3 = ["container"];
var _c4 = ["filter"];
var _c5 = ["focusInput"];
var _c6 = ["editableInput"];
var _c7 = ["items"];
var _c8 = ["scroller"];
var _c9 = ["overlay"];
var _c10 = ["firstHiddenFocusableEl"];
var _c11 = ["lastHiddenFocusableEl"];
var _c12 = () => ({
  class: "p-select-clear-icon"
});
var _c13 = () => ({
  class: "p-select-dropdown-icon"
});
var _c14 = (a0) => ({
  options: a0
});
var _c15 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c16 = () => ({});
function Dropdown_span_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 23);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r2.selectedOption));
  }
}
function Dropdown_span_0_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.label() === "p-emptylabel" ? "\xA0" : ctx_r2.label());
  }
}
function Dropdown_span_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_span_0_ng_template_4_span_0_Template, 2, 1, "span", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedOption);
  }
}
function Dropdown_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 21, 3);
    \u0275\u0275listener("focus", function Dropdown_span_0_Template_span_focus_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_span_0_Template_span_blur_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("keydown", function Dropdown_span_0_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(2, Dropdown_span_0_ng_container_2_Template, 2, 1, "ng-container", 19)(3, Dropdown_span_0_ng_container_3_Template, 1, 4, "ng-container", 22)(4, Dropdown_span_0_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const defaultPlaceholder_r4 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_17_0 = ctx_r2.overlayVisible) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedItemTemplate && ctx_r2.selectedOption);
  }
}
function Dropdown_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 24, 5);
    \u0275\u0275listener("input", function Dropdown_input_1_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEditableInput($event));
    })("keydown", function Dropdown_input_1_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("focus", function Dropdown_input_1_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_input_1_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("id", ctx_r2.inputId)("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === void 0 || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : void 0)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function Dropdown_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 26);
    \u0275\u0275listener("click", function Dropdown_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275listener("click", function Dropdown_ng_container_2_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear($event));
    });
    \u0275\u0275template(1, Dropdown_ng_container_2_span_2_1_Template, 1, 0, null, 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(3, _c12));
  }
}
function Dropdown_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 25)(2, Dropdown_ng_container_2_span_2_Template, 2, 4, "span", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_container_4_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-select-loading-icon pi-spin " + ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_4_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 32);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-select-loading-icon pi pi-spinner pi-spin");
  }
}
function Dropdown_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_4_ng_container_2_span_1_Template, 1, 1, "span", 29)(2, Dropdown_ng_container_4_ng_container_2_span_2_Template, 1, 2, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIcon);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 17)(2, Dropdown_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIconTemplate);
  }
}
function Dropdown_ng_template_5_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_5_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 37);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-select-dropdown-icon");
  }
}
function Dropdown_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_5_ng_container_0_span_1_Template, 1, 1, "span", 34)(2, Dropdown_ng_template_5_ng_container_0_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_template_5_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_5_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_5_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275template(1, Dropdown_ng_template_5_span_1_1_Template, 1, 0, null, 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.dropdownIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c13));
  }
}
function Dropdown_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_5_ng_container_0_Template, 3, 2, "ng-container", 17)(1, Dropdown_ng_template_5_span_1_Template, 2, 3, "span", 33);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_9_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c14, ctx_r2.filterOptions));
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_SearchIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon");
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Dropdown_ng_template_9_div_4_ng_template_2_span_5_1_Template, 1, 0, null, 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_9_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iconfield")(1, "input", 45, 10);
    \u0275\u0275listener("input", function Dropdown_ng_template_9_div_4_ng_template_2_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_9_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_9_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputicon");
    \u0275\u0275template(4, Dropdown_ng_template_9_div_4_ng_template_2_SearchIcon_4_Template, 1, 0, "SearchIcon", 17)(5, Dropdown_ng_template_9_div_4_ng_template_2_span_5_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2._filterValue() || "")("variant", ctx_r2.variant);
    \u0275\u0275attribute("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function Dropdown_ng_template_9_div_4_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, Dropdown_ng_template_9_div_4_ng_container_1_Template, 2, 4, "ng-container", 19)(2, Dropdown_ng_template_9_div_4_ng_template_2_Template, 6, 8, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r15 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c15, items_r13, scrollerOptions_r14));
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 27);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c14, scrollerOptions_r16));
  }
}
function Dropdown_ng_template_9_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function Dropdown_ng_template_9_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 46, 11);
    \u0275\u0275listener("onLazyLoad", function Dropdown_ng_template_9_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, Dropdown_ng_template_9_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, Dropdown_ng_template_9_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(8, _c0, ctx_r2.scrollHeight));
    \u0275\u0275property("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.loaderTemplate);
  }
}
function Dropdown_ng_template_9_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Dropdown_ng_template_9_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r15 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c15, ctx_r2.visibleOptions(), \u0275\u0275pureFunction0(2, _c16)));
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 50);
    \u0275\u0275template(2, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 17)(3, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c0, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c2, option_r17.optionGroup));
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-dropdownItem", 51);
    \u0275\u0275listener("onClick", function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const option_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const i_r19 = \u0275\u0275nextContext().index;
      const scrollerOptions_r20 = \u0275\u0275nextContext().options;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("checkmark", ctx_r2.checkmark)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Dropdown_ng_template_9_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 17)(1, Dropdown_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template, 2, 10, "ng-container", 17);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.isOptionGroup(option_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 14);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52);
    \u0275\u0275template(1, Dropdown_ng_template_9_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, Dropdown_ng_template_9_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c0, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.emptyFilterTemplate && !ctx_r2.emptyTemplate ? 1 : 2);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_9_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52);
    \u0275\u0275template(1, Dropdown_ng_template_9_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, Dropdown_ng_template_9_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c0, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.emptyTemplate ? 1 : 2);
  }
}
function Dropdown_ng_template_9_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 47, 13);
    \u0275\u0275template(2, Dropdown_ng_template_9_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 48)(3, Dropdown_ng_template_9_ng_template_8_li_3_Template, 3, 4, "li", 49)(4, Dropdown_ng_template_9_ng_template_8_li_4_Template, 3, 4, "li", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r20.contentStyle);
    \u0275\u0275property("ngClass", scrollerOptions_r20.contentStyleClass);
    \u0275\u0275attribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Dropdown_ng_template_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Dropdown_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40, 6);
    \u0275\u0275listener("focus", function Dropdown_ng_template_9_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Dropdown_ng_template_9_ng_container_3_Template, 1, 0, "ng-container", 28)(4, Dropdown_ng_template_9_div_4_Template, 4, 2, "div", 41);
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275template(6, Dropdown_ng_template_9_p_scroller_6_Template, 5, 10, "p-scroller", 43)(7, Dropdown_ng_template_9_ng_container_7_Template, 2, 6, "ng-container", 17)(8, Dropdown_ng_template_9_ng_template_8_Template, 5, 8, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, Dropdown_ng_template_9_ng_container_10_Template, 1, 0, "ng-container", 28);
    \u0275\u0275elementStart(11, "span", 40, 8);
    \u0275\u0275listener("focus", function Dropdown_ng_template_9_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.panelStyleClass);
    \u0275\u0275property("ngClass", "p-select-overlay p-component")("ngStyle", ctx_r2.panelStyle);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filter);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var theme2 = ({
  dt
}) => `
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt("select.background")};
    border: 1px solid ${dt("select.border.color")};
    transition: background ${dt("select.transition.duration")}, color ${dt("select.transition.duration")}, border-color ${dt("select.transition.duration")},
        outline-color ${dt("select.transition.duration")}, box-shadow ${dt("select.transition.duration")};
    border-radius: ${dt("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("select.shadow")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${dt("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${dt("select.focus.border.color")};
    box-shadow: ${dt("select.focus.ring.shadow")};
    outline: ${dt("select.focus.ring.width")} ${dt("select.focus.ring.style")} ${dt("select.focus.ring.color")};
    outline-offset: ${dt("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${dt("select.filled.background")};
}

.p-select.p-variant-filled.p-focus {
    background: ${dt("select.filled.focus.background")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${dt("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${dt("select.clear.icon.color")};
    right: ${dt("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt("select.dropdown.color")};
    width: ${dt("select.dropdown.width")};
    border-start-end-radius: ${dt("select.border.radius")};
    border-end-end-radius: ${dt("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${dt("select.padding.y")} ${dt("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${dt("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${dt("select.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1rem + ${dt("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${dt("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${dt("select.overlay.background")};
    color: ${dt("select.overlay.color")};
    border: 1px solid ${dt("select.overlay.border.color")};
    border-radius: ${dt("select.overlay.border.radius")};
    box-shadow: ${dt("select.overlay.shadow")};
}

.p-select-header {
    padding: ${dt("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${dt("select.option.group.padding")};
    background: ${dt("select.option.group.background")};
    color: ${dt("select.option.group.color")};
    font-weight: ${dt("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt("select.list.padding")};
    gap: ${dt("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${dt("select.option.padding")};
    border: 0 none;
    color: ${dt("select.option.color")};
    background: transparent;
    transition: background ${dt("select.transition.duration")}, color ${dt("select.transition.duration")}, border-color ${dt("select.transition.duration")},
    box-shadow ${dt("select.transition.duration")}, outline-color ${dt("select.transition.duration")};
    border-radius: ${dt("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${dt("select.option.focus.background")};
    color: ${dt("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${dt("select.option.selected.background")};
    color: ${dt("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${dt("select.option.selected.focus.background")};
    color: ${dt("select.option.selected.focus.color")};
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: ${dt("select.checkmark.gutter.start")};
    margin-inline-end: ${dt("select.checkmark.gutter.end")};
    color: ${dt("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${dt("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
}

/*For PrimeNG*/

.p-dropdown.ng-invalid.ng-dirty,
.p-select.ng-invalid.ng-dirty {
    outline: 1px solid ${dt("select.invalid.border.color")};
    outline-offset: 0;
}

.p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
.p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
    color: ${dt("select.invalid.placeholder.color")};
}
`;
var classes2 = {
  root: ({
    instance
  }) => ["p-dropdown p-select p-component p-inputwrapper", {
    "p-disabled": instance.disabled,
    "p-variant-filled": instance.variant === "filled" || instance.config.inputVariant() === "filled" || instance.config.inputStyle() === "filled",
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.modelValue() !== void 0 && instance.modelValue() !== null && !instance.modelValue().length,
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-select-open": instance.overlayVisible,
    "p-select-fluid": instance.hasFluid,
    "p-select-sm p-inputfield-sm": instance.size === "small",
    "p-select-lg p-inputfield-lg": instance.size === "large"
  }],
  label: ({
    instance,
    props
  }) => ["p-select-label", {
    "p-placeholder": !props.editable && instance.label === props.placeholder,
    "p-select-label-empty": !props.editable && !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
  }],
  clearIcon: "p-select-clear-icon",
  dropdown: "p-select-dropdown",
  loadingicon: "p-select-loading-icon",
  dropdownIcon: "p-select-dropdown-icon",
  overlay: "p-select-overlay p-component",
  header: "p-select-header",
  pcFilter: "p-select-filter",
  listContainer: "p-select-list-container",
  list: "p-select-list",
  optionGroup: "p-select-option-group",
  optionGroupLabel: "p-select-option-group-label",
  option: ({
    instance,
    props,
    state: state2,
    option,
    focusedOption
  }) => ["p-select-option", {
    "p-select-option-selected": instance.isSelected(option) && props.highlightOnSelect,
    "p-focus": state2.focusedOptionIndex === focusedOption,
    "p-disabled": instance.isOptionDisabled(option)
  }],
  optionLabel: "p-select-option-label",
  optionCheckIcon: "p-select-option-check-icon",
  optionBlankIcon: "p-select-option-blank-icon",
  emptyMessage: "p-select-empty-message"
};
var DropdownStyle = class _DropdownStyle extends BaseStyle {
  name = "select";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DropdownStyle_BaseFactory;
    return function DropdownStyle_Factory(__ngFactoryType__) {
      return (\u0275DropdownStyle_BaseFactory || (\u0275DropdownStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DropdownStyle)))(__ngFactoryType__ || _DropdownStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DropdownStyle,
    factory: _DropdownStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownStyle, [{
    type: Injectable
  }], null, null);
})();
var DropdownClasses;
/* @__PURE__ */ (function(DropdownClasses2) {
})(DropdownClasses || (DropdownClasses = {}));
var DROPDOWN_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Dropdown),
  multi: true
};
var DropdownItem = class _DropdownItem extends BaseComponent {
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  checkmark;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DropdownItem_BaseFactory;
    return function DropdownItem_Factory(__ngFactoryType__) {
      return (\u0275DropdownItem_BaseFactory || (\u0275DropdownItem_BaseFactory = \u0275\u0275getInheritedFactory(_DropdownItem)))(__ngFactoryType__ || _DropdownItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DropdownItem,
    selectors: [["p-dropdownItem"]],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      visible: [2, "visible", "visible", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkmark: [2, "checkmark", "checkmark", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 22,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"]],
    template: function DropdownItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 0);
        \u0275\u0275listener("click", function DropdownItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        \u0275\u0275template(1, DropdownItem_ng_container_1_Template, 3, 2, "ng-container", 1)(2, DropdownItem_span_2_Template, 2, 1, "span", 1)(3, DropdownItem_ng_container_3_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("id", ctx.id)("ngStyle", \u0275\u0275pureFunction1(14, _c0, ctx.itemSize + "px"))("ngClass", \u0275\u0275pureFunction3(16, _c1, ctx.selected, ctx.disabled, ctx.focused));
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.checkmark);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c2, ctx.option));
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, BlankIcon, CheckIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItem, [{
    type: Component,
    args: [{
      selector: "p-dropdownItem",
      standalone: false,
      template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{
                'p-select-option': true,
                'p-select-option-selected': selected,
                'p-disabled': disabled,
                'p-focus': focused
            }"
        >
            <ng-container *ngIf="checkmark">
                <CheckIcon *ngIf="selected" [styleClass]="'p-select-option-check-icon'" />
                <BlankIcon *ngIf="!selected" [styleClass]="'p-select-option-blank-icon'" />
            </ng-container>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var Dropdown = class _Dropdown extends BaseComponent {
  zone;
  filterService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Whether the selected option will be shown with a check mark.
   * @group Props
   */
  checkmark = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Whether the dropdown is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null.
   * @deprecated since v17.3.0, set initial value by model instead.
   * @group Props
   */
  autoDisplayFirst = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Maximum number of character allows in the editable input field.
   * @group Props
   */
  maxlength;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * Whether the component should span the full width of its parent.
   * @group Props
   */
  fluid;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible) this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  _itemSize;
  /**
   * Whether to automatically manage layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _autoZIndex;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _baseZIndex;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _showTransitionOptions;
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _hideTransitionOptions;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!deepEquals(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Callback to invoke when value of dropdown changes.
   * @param {DropdownChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {DropdownFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when dropdown gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when dropdown loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dropdown clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {DropdownLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  _componentStyle = inject(DropdownStyle);
  containerViewChild;
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  // @todo to be refactored
  get hostClass() {
    const classes10 = this._componentStyle.classes.root({
      instance: this
    }).map((cls) => {
      if (typeof cls === "string") {
        return cls;
      } else {
        return Object.keys(cls).filter((key) => cls[key]).join(" ");
      }
    }).join(" ");
    return classes10 + " " + this.styleClass;
  }
  get hostStyle() {
    return this.style;
  }
  _disabled;
  itemsWrapper;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  selectedItemTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  dropdownIconTemplate;
  loadingIconTemplate;
  clearIconTemplate;
  filterIconTemplate;
  filterOptions;
  _options = signal(null);
  _placeholder = signal(void 0);
  modelValue = signal(null);
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  selectedOptionUpdated;
  _filterValue = signal(null);
  searchValue;
  searchTimeout;
  preventModelTouched;
  focusedOptionIndex = signal(-1);
  clicked = signal(false);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  get inputClass() {
    const label = this.label();
    return {
      "p-select-label": true,
      "p-placeholder": this.placeholder() && label === this.placeholder(),
      "p-select-label-empty": !this.editable && !this.selectedItemTemplate && (label === void 0 || label === null || label === "p-emptylabel" || label.length === 0)
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter((option) => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
    return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || "p-emptylabel";
  });
  filled = computed(() => {
    if (typeof this.modelValue() === "string") return !!this.modelValue();
    return this.label() !== "p-emptylabel" && this.modelValue() !== void 0 && this.modelValue() !== null;
  });
  selectedOption;
  editableInputValue = computed(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || "");
  constructor(zone, filterService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && isNotEmpty(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        }
      }
      if (isEmpty(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && isNotEmpty(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== void 0 && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  ngOnInit() {
    super.ngOnInit();
    console.log("Dropdown component is deprecated as of v18, use Select component instead.");
    this.id = this.id || uuid("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-highlight");
      if (selectedItem) {
        scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o2) => result.push(o2));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
    if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === void 0)) {
      if (!this.placeholder()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
    this.selectedOptionUpdated = true;
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.allowModelChange() && this.onModelChange(value);
    this.modelValue.set(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  allowModelChange() {
    return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelected(option) {
    return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.editable) {
      this.updateEditableLabel();
    }
    this.updatePlaceHolderForFloatingLabel();
  }
  updatePlaceHolderForFloatingLabel() {
    const parentElement = this.el.nativeElement.parentElement;
    const isInFloatingLabel = parentElement?.classList.contains("p-float-label");
    if (parentElement && isInFloatingLabel && !this.selectedOption) {
      const label = parentElement.querySelector("label");
      if (label) {
        this._placeholder.set(label.textContent);
      }
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = "";
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionLabel(option) {
    return this.optionLabel !== void 0 && this.optionLabel !== null ? resolveFieldData(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  isOptionDisabled(option) {
    if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
      return false;
    } else {
      return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
    }
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onContainerClick(event) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = "";
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value
      });
    }, 1);
    !this.overlayVisible && isNotEmpty(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-dropdown-items-wrapper");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = findSingle(this.itemsWrapper, ".p-dropdown-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = "";
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        focus(this.focusInputViewChild?.nativeElement);
      }
      if (this.editable && this.editableInputViewChild) {
        focus(this.editableInputViewChild?.nativeElement);
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onKeyDown(event, search) {
    if (this.disabled || this.readonly || this.loading) {
      return;
    }
    switch (event.code) {
      //down
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      //up
      case "ArrowUp":
        this.onArrowUpKey(event, this.editable);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, this.editable);
        break;
      case "Delete":
        this.onDeleteKey(event);
        break;
      case "Home":
        this.onHomeKey(event, this.editable);
        break;
      case "End":
        this.onEndKey(event, this.editable);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      //space
      case "Space":
        this.onSpaceKey(event, search);
        break;
      //enter
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      //escape and tab
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event, this.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!event.metaKey && isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event, true);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== void 0;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
    event.stopPropagation();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  hasFocusableElements() {
    return getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    optionIndex = this.visibleOptions().findIndex((option) => this.isOptionExactMatched(option));
    if (optionIndex === -1) {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionStartsWith(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionStartsWith(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  isOptionExactMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale) === this.searchValue.toLocaleLowerCase(this.filterLocale);
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable) findSingle(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else focus(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  static \u0275fac = function Dropdown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dropdown)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Dropdown,
    selectors: [["p-dropdown"]],
    contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dropdown_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
        \u0275\u0275viewQuery(_c6, 5);
        \u0275\u0275viewQuery(_c7, 5);
        \u0275\u0275viewQuery(_c8, 5);
        \u0275\u0275viewQuery(_c9, 5);
        \u0275\u0275viewQuery(_c10, 5);
        \u0275\u0275viewQuery(_c11, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editableInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function Dropdown_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function Dropdown_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.hostClass);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: [2, "filter", "filter", booleanAttribute],
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      editable: [2, "editable", "editable", booleanAttribute],
      appendTo: "appendTo",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      placeholder: "placeholder",
      loadingIcon: "loadingIcon",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      variant: "variant",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      checkmark: [2, "checkmark", "checkmark", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      loading: [2, "loading", "loading", booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: [2, "autoDisplayFirst", "autoDisplayFirst", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DROPDOWN_VALUE_ACCESSOR, DropdownStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 11,
    vars: 15,
    consts: [["elseBlock", ""], ["overlay", ""], ["content", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["loader", ""], ["items", ""], ["emptyFilter", ""], ["role", "combobox", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", 3, "ngClass", "disabled", "pAutoFocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-select-dropdown"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["role", "combobox", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled", "pAutoFocus"], ["class", "p-select-clear-icon", 3, "click", 4, "ngIf"], [1, "p-select-clear-icon", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-select-dropdown-icon", 4, "ngIf"], ["class", "p-select-dropdown-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-select-dropdown-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-select-dropdown-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-select-header", 3, "click", 4, "ngIf"], [1, "p-select-list-container"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-select-header", 3, "click"], ["pInputText", "", "type", "text", "role", "searchbox", "autocomplete", "off", 1, "p-select-filter", 3, "input", "keydown", "blur", "value", "variant"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["role", "listbox", 1, "p-select-list", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-select-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-select-option-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], ["role", "option", 1, "p-select-empty-message", 3, "ngStyle"]],
    template: function Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, Dropdown_span_0_Template, 6, 20, "span", 15)(1, Dropdown_input_1_Template, 2, 8, "input", 16)(2, Dropdown_ng_container_2_Template, 3, 2, "ng-container", 17);
        \u0275\u0275elementStart(3, "div", 18);
        \u0275\u0275template(4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 19)(5, Dropdown_ng_template_5_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p-overlay", 20, 1);
        \u0275\u0275twoWayListener("visibleChange", function Dropdown_Template_p_overlay_visibleChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function Dropdown_Template_p_overlay_onHide_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(9, Dropdown_ng_template_9_Template, 13, 17, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_6_0;
        const elseBlock_r23 = \u0275\u0275reference(6);
        \u0275\u0275property("ngIf", !ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.editable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-expanded", (tmp_6_0 = ctx.overlayVisible) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false)("data-pc-section", "trigger");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r23);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, Tooltip, Scroller, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, InputText, IconField, InputIcon, DropdownItem],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dropdown, [{
    type: Component,
    args: [{
      selector: "p-dropdown",
      standalone: false,
      template: `
        <span
            #focusInput
            [ngClass]="inputClass"
            *ngIf="!editable"
            [pTooltip]="tooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
            [attr.aria-disabled]="disabled"
            [attr.id]="inputId"
            role="combobox"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-expanded]="overlayVisible ?? false"
            [attr.aria-controls]="overlayVisible ? id + '_list' : null"
            [attr.tabindex]="!disabled ? tabindex : -1"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keydown)="onKeyDown($event)"
            [attr.aria-required]="required"
            [attr.required]="required"
        >
            <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
            <ng-container *ngIf="selectedItemTemplate && selectedOption" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
            <ng-template #defaultPlaceholder>
                <span *ngIf="!selectedOption">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
            </ng-template>
        </span>
        <input
            *ngIf="editable"
            #editableInput
            type="text"
            [attr.id]="inputId"
            [attr.maxlength]="maxlength"
            [ngClass]="inputClass"
            [disabled]="disabled"
            aria-haspopup="listbox"
            [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            (input)="onEditableInput($event)"
            (keydown)="onKeyDown($event)"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
        />
        <ng-container *ngIf="isVisibleClearIcon">
            <TimesIcon class="p-select-clear-icon" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
            <span class="p-select-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate; context: { class: 'p-select-clear-icon' }"></ng-template>
            </span>
        </ng-container>

        <div class="p-select-dropdown" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="'p-select-loading-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="'p-select-loading-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                </ng-container>
            </ng-container>

            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span class="p-select-dropdown-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-select-dropdown-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-select-dropdown-icon">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate; context: { class: 'p-select-dropdown-icon' }"></ng-template>
                </span>
            </ng-template>
        </div>

        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [autoZIndex]="autoZIndex"
            [baseZIndex]="baseZIndex"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [ngClass]="'p-select-overlay p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <div class="p-select-header" *ngIf="filter" (click)="$event.stopPropagation()">
                        <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-iconfield>
                                <input
                                    #filter
                                    pInputText
                                    type="text"
                                    role="searchbox"
                                    autocomplete="off"
                                    [value]="_filterValue() || ''"
                                    class="p-select-filter"
                                    [variant]="variant"
                                    [attr.placeholder]="filterPlaceholder"
                                    [attr.aria-owns]="id + '_list'"
                                    (input)="onFilterInputChange($event)"
                                    [attr.aria-label]="ariaFilterLabel"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    (keydown)="onFilterKeyDown($event)"
                                    (blur)="onFilterBlur($event)"
                                />
                                <p-inputicon>
                                    <SearchIcon *ngIf="!filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div class="p-select-list-container" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize || _itemSize"
                            [autoSize]="true"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-select-list" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li class="p-select-option-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-dropdownItem
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [checkmark]="checkmark"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            (onClick)="onOptionSelect($event, option)"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-dropdownItem>
                                    </ng-container>
                                </ng-template>
                                <li *ngIf="filterValue && isEmpty()" class="p-select-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!filterValue && isEmpty()" class="p-select-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      host: {
        "[attr.id]": "id",
        "(click)": "onContainerClick($event)"
      },
      providers: [DROPDOWN_VALUE_ACCESSOR, DropdownStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }], {
    id: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    autoDisplayFirst: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DropdownModule = class _DropdownModule {
  static \u0275fac = function DropdownModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DropdownModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DropdownModule,
    declarations: [Dropdown, DropdownItem],
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, Ripple, Scroller, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, BlankIcon, CheckIcon, InputTextModule, IconField, InputIcon],
    exports: [Dropdown, OverlayModule, SharedModule, Scroller]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, Scroller, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, BlankIcon, CheckIcon, InputTextModule, IconField, InputIcon, OverlayModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, Ripple, Scroller, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, BlankIcon, CheckIcon, InputTextModule, IconField, InputIcon],
      exports: [Dropdown, OverlayModule, SharedModule, Scroller],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

// src/app/components/model-selector/model-selector.component.ts
function SharedModelSelectorComponent_p_card_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "h3", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r0.cardTitle));
  }
}
function SharedModelSelectorComponent_p_card_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SharedModelSelectorComponent_p_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card");
    \u0275\u0275template(1, SharedModelSelectorComponent_p_card_1_ng_template_1_Template, 5, 3, "ng-template", 3)(2, SharedModelSelectorComponent_p_card_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const selectorContent_r2 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", selectorContent_r2);
  }
}
function SharedModelSelectorComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SharedModelSelectorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SharedModelSelectorComponent_div_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const selectorContent_r2 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", selectorContent_r2);
  }
}
function SharedModelSelectorComponent_ng_template_3_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getModelDescription(), " ");
  }
}
function SharedModelSelectorComponent_ng_template_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "p-checkbox", 17);
    \u0275\u0275twoWayListener("ngModelChange", function SharedModelSelectorComponent_ng_template_3_div_8_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.translateToFrench, $event) || (ctx_r0.translateToFrench = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SharedModelSelectorComponent_ng_template_3_div_8_Template_p_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTranslateChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "small", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.translateToFrench);
    \u0275\u0275property("disabled", ctx_r0.disabled)("binary", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "metadata.modelSelector.translateToFrench"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "metadata.modelSelector.translateDescription"), " ");
  }
}
function SharedModelSelectorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "label", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-dropdown", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SharedModelSelectorComponent_ng_template_3_Template_p_dropdown_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedModel, $event) || (ctx_r0.selectedModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SharedModelSelectorComponent_ng_template_3_Template_p_dropdown_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onModelChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SharedModelSelectorComponent_ng_template_3_small_7_Template, 2, 1, "small", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SharedModelSelectorComponent_ng_template_3_div_8_Template, 9, 9, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, ctx_r0.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.localModels);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedModel);
    \u0275\u0275property("disabled", ctx_r0.disabled)("placeholder", \u0275\u0275pipeBind1(6, 9, "common.modelSelector.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getModelDescription());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showTranslateOption);
  }
}
var SharedModelSelectorComponent = class _SharedModelSelectorComponent {
  translate;
  selectedModel = "";
  models = [];
  label = "common.modelSelector.label";
  showCard = true;
  cardTitle = "common.modelSelector.title";
  disabled = false;
  // For metadata assistant translation option
  showTranslateOption = false;
  translateToFrench = false;
  translateChange = new EventEmitter();
  modelChange = new EventEmitter();
  localModels = [];
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.initializeModels();
    this.translate.onLangChange.subscribe(() => {
      this.initializeModels();
    });
  }
  initializeModels() {
    if (this.models && this.models.length > 0) {
      this.localModels = this.models.map((model) => __spreadProps(__spreadValues({}, model), {
        name: this.translate.instant(model.name)
      }));
    }
  }
  onModelChange(event) {
    const value = event.value || event;
    this.selectedModel = value;
    this.modelChange.emit(value);
  }
  onTranslateChange(value) {
    this.translateToFrench = value;
    this.translateChange.emit(value);
  }
  getModelDescription() {
    const selected = this.localModels.find((m) => m.value === this.selectedModel);
    return selected?.description ? this.translate.instant(selected.description) : "";
  }
  static \u0275fac = function SharedModelSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModelSelectorComponent)(\u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SharedModelSelectorComponent, selectors: [["ca-shared-model-selector"]], inputs: { selectedModel: "selectedModel", models: "models", label: "label", showCard: "showCard", cardTitle: "cardTitle", disabled: "disabled", showTranslateOption: "showTranslateOption", translateToFrench: "translateToFrench" }, outputs: { translateChange: "translateChange", modelChange: "modelChange" }, decls: 5, vars: 2, consts: [["selectorContent", ""], [1, "model-selector-container"], [4, "ngIf"], ["pTemplate", "header"], [4, "ngTemplateOutlet"], [1, "flex", "align-items-center", "p-3"], [1, "pi", "pi-cog", "mr-2"], [1, "m-0"], [1, "model-selector-content"], [1, "field"], ["for", "model", 1, "block", "mb-2", "font-semibold"], ["optionLabel", "name", "optionValue", "value", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "disabled", "placeholder"], ["class", "block mt-2 text-500", 4, "ngIf"], ["class", "field mt-4", 4, "ngIf"], [1, "block", "mt-2", "text-500"], [1, "field", "mt-4"], [1, "flex", "align-items-center"], ["inputId", "translateToFrench", 3, "ngModelChange", "ngModel", "disabled", "binary"], ["for", "translateToFrench", 1, "ml-2", "cursor-pointer"], [1, "block", "mt-2", "ml-4", "text-500"]], template: function SharedModelSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, SharedModelSelectorComponent_p_card_1_Template, 3, 1, "p-card", 2)(2, SharedModelSelectorComponent_div_2_Template, 2, 1, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, SharedModelSelectorComponent_ng_template_3_Template, 9, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCard);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showCard);
    }
  }, dependencies: [CommonModule, NgIf, NgTemplateOutlet, FormsModule, NgControlStatus, NgModel, TranslateModule, TranslatePipe, DropdownModule, Dropdown, PrimeTemplate, CardModule, Card, CheckboxModule, Checkbox], styles: ["\n\n.model-selector-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.model-selector-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .p-dropdown {\n  width: 100%;\n  min-width: 300px;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.text-500[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=model-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModelSelectorComponent, [{
    type: Component,
    args: [{ selector: "ca-shared-model-selector", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      DropdownModule,
      CardModule,
      CheckboxModule
    ], template: `<div class="model-selector-container">\r
  <p-card *ngIf="showCard">\r
    <ng-template pTemplate="header">\r
      <div class="flex align-items-center p-3">\r
        <i class="pi pi-cog mr-2"></i>\r
        <h3 class="m-0">{{ cardTitle | translate }}</h3>\r
      </div>\r
    </ng-template>\r
    \r
    <ng-container *ngTemplateOutlet="selectorContent"></ng-container>\r
  </p-card>\r
  \r
  <div *ngIf="!showCard">\r
    <ng-container *ngTemplateOutlet="selectorContent"></ng-container>\r
  </div>\r
</div>\r
\r
<ng-template #selectorContent>\r
  <div class="model-selector-content">\r
    <div class="field">\r
      <label for="model" class="block mb-2 font-semibold">\r
        {{ label | translate }}\r
      </label>\r
      <p-dropdown \r
        [options]="localModels" \r
        [(ngModel)]="selectedModel"\r
        (ngModelChange)="onModelChange($event)"\r
        optionLabel="name" \r
        optionValue="value"\r
        [disabled]="disabled"\r
        styleClass="w-full"\r
        [placeholder]="'common.modelSelector.placeholder' | translate">\r
      </p-dropdown>\r
      <small class="block mt-2 text-500" *ngIf="getModelDescription()">\r
        {{ getModelDescription() }}\r
      </small>\r
    </div>\r
\r
    <!-- Translation option for metadata assistant -->\r
    <div class="field mt-4" *ngIf="showTranslateOption">\r
      <div class="flex align-items-center">\r
        <p-checkbox \r
          [(ngModel)]="translateToFrench"\r
          (ngModelChange)="onTranslateChange($event)"\r
          [disabled]="disabled"\r
          [binary]="true"\r
          inputId="translateToFrench">\r
        </p-checkbox>\r
        <label for="translateToFrench" class="ml-2 cursor-pointer">\r
          {{ 'metadata.modelSelector.translateToFrench' | translate }}\r
        </label>\r
      </div>\r
      <small class="block mt-2 ml-4 text-500">\r
        {{ 'metadata.modelSelector.translateDescription' | translate }}\r
      </small>\r
    </div>\r
  </div>\r
</ng-template>`, styles: ["/* src/app/components/model-selector/model-selector.component.css */\n.model-selector-container {\n  width: 100%;\n}\n.model-selector-content {\n  padding: 0;\n}\n.field label {\n  color: var(--text-color);\n}\n:host ::ng-deep .p-dropdown {\n  width: 100%;\n  min-width: 300px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.text-500 {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=model-selector.component.css.map */\n"] }]
  }], () => [{ type: TranslateService }], { selectedModel: [{
    type: Input
  }], models: [{
    type: Input
  }], label: [{
    type: Input
  }], showCard: [{
    type: Input
  }], cardTitle: [{
    type: Input
  }], disabled: [{
    type: Input
  }], showTranslateOption: [{
    type: Input
  }], translateToFrench: [{
    type: Input
  }], translateChange: [{
    type: Output
  }], modelChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SharedModelSelectorComponent, { className: "SharedModelSelectorComponent", filePath: "src/app/components/model-selector/model-selector.component.ts", lineNumber: 29 });
})();

// src/app/components/progress-indicator/progress-indicator.component.ts
function ProgressIndicatorComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function ProgressIndicatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275template(2, ProgressIndicatorComponent_div_0_div_2_Template, 1, 0, "div", 3);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "p-progressBar", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showSpinner);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.progressText);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.progressValue)("showValue", true);
  }
}
var ProgressIndicatorComponent = class _ProgressIndicatorComponent {
  progressText = "";
  processedCount = 0;
  totalFiles = 0;
  showProgress = false;
  showSpinner = true;
  get progressValue() {
    if (this.totalFiles === 0)
      return 0;
    return Math.round(this.processedCount / this.totalFiles * 100);
  }
  static \u0275fac = function ProgressIndicatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressIndicatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressIndicatorComponent, selectors: [["ca-progress-indicator"]], inputs: { progressText: "progressText", processedCount: "processedCount", totalFiles: "totalFiles", showProgress: "showProgress", showSpinner: "showSpinner" }, decls: 1, vars: 1, consts: [["class", "progress-container", 4, "ngIf"], [1, "progress-container"], [1, "progress-text"], ["class", "spinner", 4, "ngIf"], [3, "value", "showValue"], [1, "spinner"]], template: function ProgressIndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProgressIndicatorComponent_div_0_Template, 6, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showProgress);
    }
  }, dependencies: [CommonModule, NgIf, ProgressBarModule, ProgressBar], styles: ["\n\n.progress-container[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n}\n.progress-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 4px solid #ccc;\n  border-top-color: #a7a72e;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=progress-indicator.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressIndicatorComponent, [{
    type: Component,
    args: [{ selector: "ca-progress-indicator", standalone: true, imports: [CommonModule, ProgressBarModule], template: '<div class="progress-container" *ngIf="showProgress">\r\n  <div class="progress-text">\r\n    <div class="spinner" *ngIf="showSpinner"></div>\r\n    <span>{{ progressText }}</span>\r\n  </div>\r\n  <p-progressBar [value]="progressValue" [showValue]="true"></p-progressBar>\r\n</div>', styles: ["/* angular:styles/component:css;3626b4fd80763a0a8c7fd3ac85e8e2b1a9ea83f9e1ae2febc71f6ef0fd0f4baa;C:/AmberDev/content-assistant/src/app/components/progress-indicator/progress-indicator.component.ts */\n.progress-container {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n}\n.progress-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.spinner {\n  width: 24px;\n  height: 24px;\n  border: 4px solid #ccc;\n  border-top-color: #a7a72e;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=progress-indicator.component.css.map */\n"] }]
  }], null, { progressText: [{
    type: Input
  }], processedCount: [{
    type: Input
  }], totalFiles: [{
    type: Input
  }], showProgress: [{
    type: Input
  }], showSpinner: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressIndicatorComponent, { className: "ProgressIndicatorComponent", filePath: "src/app/components/progress-indicator/progress-indicator.component.ts", lineNumber: 40 });
})();

// node_modules/primeng/fesm2022/primeng-divider.mjs
var _c02 = ["*"];
var theme3 = ({
  dt
}) => `
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${dt("divider.horizontal.margin")};
    padding: ${dt("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${dt("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${dt("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${dt("divider.vertical.margin")};
    padding: ${dt("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${dt("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${dt("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${dt("divider.content.background")};
    color: ${dt("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`;
var inlineStyles = {
  root: ({
    props
  }) => ({
    justifyContent: props.layout === "horizontal" ? props.align === "center" || props.align === null ? "center" : props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : null : null,
    alignItems: props.layout === "vertical" ? props.align === "center" || props.align === null ? "center" : props.align === "top" ? "flex-start" : props.align === "bottom" ? "flex-end" : null : null
  })
};
var classes3 = {
  root: ({
    props
  }) => ["p-divider p-component", "p-divider-" + props.layout, "p-divider-" + props.type, {
    "p-divider-left": props.layout === "horizontal" && (!props.align || props.align === "left")
  }, {
    "p-divider-center": props.layout === "horizontal" && props.align === "center"
  }, {
    "p-divider-right": props.layout === "horizontal" && props.align === "right"
  }, {
    "p-divider-top": props.layout === "vertical" && props.align === "top"
  }, {
    "p-divider-center": props.layout === "vertical" && (!props.align || props.align === "center")
  }, {
    "p-divider-bottom": props.layout === "vertical" && props.align === "bottom"
  }],
  content: "p-divider-content"
};
var DividerStyle = class _DividerStyle extends BaseStyle {
  name = "divider";
  theme = theme3;
  classes = classes3;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DividerStyle_BaseFactory;
    return function DividerStyle_Factory(__ngFactoryType__) {
      return (\u0275DividerStyle_BaseFactory || (\u0275DividerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DividerStyle)))(__ngFactoryType__ || _DividerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DividerStyle,
    factory: _DividerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerStyle, [{
    type: Injectable
  }], null, null);
})();
var DividerClasses;
(function(DividerClasses2) {
  DividerClasses2["root"] = "p-divider";
  DividerClasses2["content"] = "p-divider-content";
})(DividerClasses || (DividerClasses = {}));
var Divider = class _Divider extends BaseComponent {
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Specifies the orientation.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Border style type.
   * @group Props
   */
  type = "solid";
  /**
   * Alignment of the content.
   * @group Props
   */
  align;
  _componentStyle = inject(DividerStyle);
  get hostClass() {
    return this.styleClass;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Divider_BaseFactory;
    return function Divider_Factory(__ngFactoryType__) {
      return (\u0275Divider_BaseFactory || (\u0275Divider_BaseFactory = \u0275\u0275getInheritedFactory(_Divider)))(__ngFactoryType__ || _Divider);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Divider,
    selectors: [["p-divider"]],
    hostVars: 33,
    hostBindings: function Divider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-orientation", ctx.layout)("data-pc-name", "divider")("role", "separator");
        \u0275\u0275classMap(ctx.hostClass);
        \u0275\u0275styleProp("justify-content", ctx.layout === "horizontal" ? ctx.align === "center" || ctx.align === void 0 ? "center" : ctx.align === "left" ? "flex-start" : ctx.align === "right" ? "flex-end" : null : null)("align-items", ctx.layout === "vertical" ? ctx.align === "center" || ctx.align === void 0 ? "center" : ctx.align === "top" ? "flex-start" : ctx.align === "bottom" ? "flex-end" : null : null);
        \u0275\u0275classProp("p-divider", true)("p-component", true)("p-divider-horizontal", ctx.layout === "horizontal")("p-divider-vertical", ctx.layout === "vertical")("p-divider-solid", ctx.type === "solid")("p-divider-dashed", ctx.type === "dashed")("p-divider-dotted", ctx.type === "dotted")("p-divider-left", ctx.layout === "horizontal" && (!ctx.align || ctx.align === "left"))("p-divider-center", ctx.layout === "horizontal" && ctx.align === "center" || ctx.layout === "vertical" && (!ctx.align || ctx.align === "center"))("p-divider-right", ctx.layout === "horizontal" && ctx.align === "right")("p-divider-top", ctx.layout === "vertical" && ctx.align === "top")("p-divider-bottom", ctx.layout === "vertical" && ctx.align === "bottom");
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      layout: "layout",
      type: "type",
      align: "align"
    },
    features: [\u0275\u0275ProvidersFeature([DividerStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 2,
    vars: 0,
    consts: [[1, "p-divider-content"]],
    template: function Divider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Divider, [{
    type: Component,
    args: [{
      selector: "p-divider",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div class="p-divider-content">
            <ng-content></ng-content>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-divider]": "true",
        "[class.p-component]": "true",
        "[class.p-divider-horizontal]": 'layout === "horizontal"',
        "[class.p-divider-vertical]": 'layout === "vertical"',
        "[class.p-divider-solid]": 'type === "solid"',
        "[class.p-divider-dashed]": 'type === "dashed"',
        "[class.p-divider-dotted]": 'type === "dotted"',
        "[class.p-divider-left]": 'layout === "horizontal" && (!align || align === "left")',
        "[class.p-divider-center]": '(layout === "horizontal" && align === "center") || (layout === "vertical" && (!align || align === "center"))',
        "[class.p-divider-right]": 'layout === "horizontal" && align === "right"',
        "[class.p-divider-top]": 'layout === "vertical" && align === "top"',
        "[class.p-divider-bottom]": 'layout === "vertical" && align === "bottom"',
        "[attr.aria-orientation]": "layout",
        "[attr.data-pc-name]": "'divider'",
        "[attr.role]": '"separator"',
        "[style.justifyContent]": 'layout === "horizontal" ? (align === "center" || align === undefined ? "center" : (align === "left" ? "flex-start" : (align === "right" ? "flex-end" : null))) : null',
        "[style.alignItems]": 'layout === "vertical" ? (align === "center" || align === undefined ? "center" : (align === "top" ? "flex-start" : (align === "bottom" ? "flex-end" : null))) : null'
      },
      providers: [DividerStyle]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var DividerModule = class _DividerModule {
  static \u0275fac = function DividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DividerModule,
    imports: [Divider],
    exports: [Divider]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Divider]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerModule, [{
    type: NgModule,
    args: [{
      imports: [Divider],
      exports: [Divider]
    }]
  }], null, null);
})();

// src/app/services/local-storage.service.ts
var LocalStorageService = class _LocalStorageService {
  constructor() {
  }
  saveData(key, value) {
    localStorage.setItem(key, value);
    console.log(`Saved ` + key + `: ` + value);
  }
  getData(key) {
    return localStorage.getItem(key);
  }
  removeData(key) {
    localStorage.removeItem(key);
    console.log(`Removed ` + key);
  }
  clearData() {
    localStorage.clear();
    console.log(`Removed all stored values`);
  }
  static \u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalStorageService, factory: _LocalStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/api-key.service.ts
var ApiKeyService = class _ApiKeyService {
  localStorageService;
  STORAGE_KEY = "apiKey";
  // Using same key as the rest of the app
  apiKeySubject;
  apiKey$;
  hasApiKey$;
  constructor(localStorageService) {
    this.localStorageService = localStorageService;
    const storedKey = this.getStoredKey();
    this.apiKeySubject = new BehaviorSubject(storedKey);
    this.apiKey$ = this.apiKeySubject.asObservable();
    this.hasApiKey$ = new BehaviorSubject(!!storedKey);
  }
  getStoredKey() {
    return this.localStorageService.getData(this.STORAGE_KEY);
  }
  setKey(key) {
    this.localStorageService.saveData(this.STORAGE_KEY, key);
    this.apiKeySubject.next(key);
    this.hasApiKey$.next(true);
  }
  getCurrentKey() {
    return this.apiKeySubject.value;
  }
  clearKey() {
    this.localStorageService.removeData(this.STORAGE_KEY);
    this.apiKeySubject.next(null);
    this.hasApiKey$.next(false);
  }
  static \u0275fac = function ApiKeyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiKeyService)(\u0275\u0275inject(LocalStorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiKeyService, factory: _ApiKeyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiKeyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: LocalStorageService }], null);
})();

// src/app/services/image-processor.ts
var ImageProcessorService = class _ImageProcessorService {
  http;
  apiKeyService;
  MAX_IMAGE_SIZE = 1024;
  // Max width/height for resizing
  OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
  // --- UPDATED: New Translation Model and specific prompt ---
  TRANSLATION_MODEL_FOR_CRA = "mistralai/mistral-small-3.2-24b-instruct:free";
  // Using Mistral Small for reliable free translation
  constructor(http, apiKeyService) {
    this.http = http;
    this.apiKeyService = apiKeyService;
  }
  /**
   * Main method to analyze an image file using OpenRouter's vision API.
   * @param file The image file to analyze.
   * @param selectedVisionModel The OpenRouter vision model ID (e.g., 'qwen/qwen2.5-vl-32b-instruct:free').
   * @param identifier A unique identifier for logging (e.g., file name).
   * @param isPdfPage Whether this image is from a PDF page (for different prompting).
   * @returns An Observable emitting the analysis result.
   */
  analyzeImage(file, selectedVisionModel, identifier, isPdfPage = false) {
    console.log("ImageProcessorService.analyzeImage called with:", file.name, selectedVisionModel);
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      console.error("No API key found");
      return throwError(() => new Error("OpenRouter API Key is missing. Please provide it."));
    }
    console.log("API key found, loading image...");
    return this.loadImage(file).pipe(map((img) => {
      const base64Data = this.resizeAndConvertToBase64(img, this.MAX_IMAGE_SIZE);
      return { img, base64Data };
    }), switchMap(({ img, base64Data }) => this.getVisionAnalysis(base64Data, selectedVisionModel, apiKey, identifier, isPdfPage).pipe(map((visionResult) => {
      if (visionResult.error) {
        throw new Error(visionResult.error);
      }
      return __spreadProps(__spreadValues({}, visionResult), { imageBase64: base64Data });
    }))), switchMap((visionResult) => {
      if (visionResult.error || !visionResult.english) {
        return from([visionResult]);
      }
      return this.translateToFrench(visionResult.english, apiKey, identifier).pipe(map((frenchText) => ({
        english: visionResult.english,
        french: frenchText,
        error: null,
        // Clear any vision error if translation proceeds
        imageBase64: visionResult.imageBase64
        // Keep the image
      })), catchError((translateError) => {
        console.error(`Translation error for ${identifier}:`, translateError);
        return from([{
          english: visionResult.english,
          french: `[Translation Error: ${translateError.message || "Unknown error"}]`,
          error: translateError.message,
          imageBase64: visionResult.imageBase64
        }]);
      }));
    }), catchError((error) => {
      console.error(`Error in image analysis pipeline for ${identifier}:`, error);
      if (error.message === "KEY_LIMIT_EXCEEDED") {
        return from([{
          english: null,
          french: null,
          error: "KEY_LIMIT_EXCEEDED",
          imageBase64: null
        }]);
      }
      return from([{
        english: null,
        french: null,
        error: error.message || "Unknown error",
        imageBase64: null
      }]);
    }));
  }
  loadImage(file) {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          observer.next(img);
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(new Error(`Failed to load image '${file.name}'.`));
        };
        img.src = e.target?.result;
      };
      reader.onerror = (err) => {
        observer.error(new Error(`Failed to read file '${file.name}'.`));
      };
      reader.readAsDataURL(file);
    });
  }
  resizeAndConvertToBase64(img, maxSize) {
    const canvas = document.createElement("canvas");
    let width = img.width;
    let height = img.height;
    if (width > maxSize || height > maxSize) {
      if (width > height) {
        height = Math.round(height * (maxSize / width));
        width = maxSize;
      } else {
        width = Math.round(width * (maxSize / height));
        height = maxSize;
      }
    }
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get 2D context from canvas for image resizing.");
    }
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL("image/png");
  }
  getVisionAnalysis(base64Data, selectedVisionModel, apiKey, identifier, isPdfPage = false) {
    console.log("getVisionAnalysis called for:", identifier, "model:", selectedVisionModel, "isPdfPage:", isPdfPage);
    let prompt;
    let max_tokens;
    if (isPdfPage) {
      prompt = "Provide a comprehensive, well-structured description of this document page. Format your response with clear sections and bullet points where appropriate.\n\nInclude:\n\u2022 All visible text content (quotes, headings, paragraphs)\n\u2022 Document structure and layout\n\u2022 Forms, fields, and what information they request\n\u2022 Tables and their contents\n\u2022 Any important visual elements or logos\n\nUse line breaks between sections for readability. If there are multiple sections or forms, clearly separate them.\nBe thorough and detailed to help someone understand the full content without seeing the page.";
      max_tokens = 2e3;
    } else {
      prompt = "Create a short, concise alt text for this image suitable for a website. DO NOT start with phrases like 'The image depicts', 'The image shows', or similar. Instead, directly describe the main subject in 15-20 words maximum. Focus only on the key elements necessary for accessibility. Use simple, direct language without unnecessary words.";
      max_tokens = 50;
    }
    let messages;
    if (selectedVisionModel.includes("qwen") || selectedVisionModel.includes("llama")) {
      messages = [{
        "role": "user",
        "content": [
          { "type": "text", "text": prompt },
          { "type": "image_url", "image_url": { "url": base64Data } }
        ]
      }];
    } else {
      messages = [{
        "role": "user",
        "content": [
          { "type": "image_url", "image_url": { "url": base64Data } },
          { "type": "text", "text": prompt }
        ]
      }];
    }
    const payload = {
      model: selectedVisionModel,
      messages,
      max_tokens,
      temperature: 0.3,
      top_p: 0.85
    };
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    });
    return this.http.post(this.OPENROUTER_API_URL, payload, { headers }).pipe(timeout(6e4), map((response) => {
      const englishText = response?.choices?.[0]?.message?.content?.trim();
      if (!englishText) {
        console.warn(`No content or unexpected structure from vision model for ${identifier}. Response:`, response);
        throw new Error("No content returned from vision model.");
      }
      return { english: englishText, french: null, error: null };
    }), catchError((error) => {
      let errorMessage = `Vision API Error (${error.status || "Network Error"}): ${error.statusText || "Unknown Error"}`;
      if (error.error && error.error.error && error.error.error.message) {
        errorMessage += ` - ${error.error.error.message}`;
      } else if (typeof error.error === "string") {
        errorMessage += ` - ${error.error}`;
      }
      if (error.status === 403 && errorMessage.toLowerCase().includes("key limit exceeded")) {
        errorMessage = "KEY_LIMIT_EXCEEDED";
      }
      console.error(`Error in vision API call for ${identifier}:`, errorMessage, error);
      return from([{ english: null, french: null, error: errorMessage }]);
    }));
  }
  translateToFrench(text2, apiKey, identifier) {
    if (!text2) {
      console.log(`Skipping translation for empty text: ${identifier}`);
      return from([""]);
    }
    const systemPrompt = `You are a professional translator for the Canada Revenue Agency (CRA).
                          Your task is to translate the following English text into clear, concise, and accurate Canadian French,
                          using official CRA terminology and tone where applicable.
                          CRITICAL INSTRUCTION: Provide ONLY the direct translation. DO NOT include any explanations, notes,
                          disclaimers, or additional commentary of any kind. DO NOT include phrases like 'Here is the translation:'.
                          DO NOT wrap your response in quotes. Simply translate the text directly.`;
    const messages = [
      { "role": "system", "content": systemPrompt },
      { "role": "user", "content": text2 }
    ];
    const payload = {
      model: this.TRANSLATION_MODEL_FOR_CRA,
      messages,
      temperature: 0.1,
      max_tokens: Math.max(500, Math.ceil(text2.length * 2.5)),
      top_p: 0.9
    };
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    });
    return this.http.post(this.OPENROUTER_API_URL, payload, { headers }).pipe(
      timeout(9e4),
      // Increased timeout to 90 seconds for PDF content
      retry({ count: 1, delay: 2e3 }),
      // Retry once after 2 seconds on failure
      map((response) => {
        console.log(`Translation response for ${identifier}:`, response);
        if (!response || !response.choices || !Array.isArray(response.choices) || response.choices.length === 0) {
          console.error(`Invalid response structure from translation model for ${identifier}:`, response);
          throw new Error("Invalid response structure from translation model.");
        }
        let translation = response.choices[0]?.message?.content;
        if (!translation || typeof translation !== "string") {
          console.error(`No content in translation response for ${identifier}. Full response:`, JSON.stringify(response, null, 2));
          throw new Error("Translation model returned empty content.");
        }
        translation = translation.trim();
        if (!translation) {
          console.error(`Translation content is empty after trimming for ${identifier}`);
          throw new Error("Translation model returned empty content after trimming.");
        }
        translation = translation.replace(/^Voici la traduction\s*:\s*/i, "");
        translation = translation.replace(/^Translation\s*:\s*/i, "");
        translation = translation.replace(/^Here is the translation\s*:\s*/i, "");
        return translation;
      }),
      catchError((error) => {
        let errorMessage = `Translation API Error (${error.status || "Network Error"}): ${error.statusText || "Unknown Error"}`;
        if (error.error && error.error.error && error.error.error.message) {
          errorMessage += ` - ${error.error.error.message}`;
        }
        if (error.status === 403 && error.error?.error?.message?.toLowerCase().includes("key limit exceeded")) {
          errorMessage = "KEY_LIMIT_EXCEEDED";
        }
        console.error(`Error translating text for ${identifier}:`, errorMessage, error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  escapeHtml(unsafe) {
    if (unsafe === null || typeof unsafe !== "string")
      return "";
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  formatDescription(text2) {
    if (!text2)
      return "";
    let formatted = this.escapeHtml(text2);
    formatted = formatted.replace(/\n\s*\n/g, "</p><p>");
    formatted = formatted.replace(/\n/g, "<br>");
    if (!formatted.startsWith("<p>") && formatted.trim() !== "") {
      formatted = "<p>" + formatted;
    }
    if (!formatted.endsWith("</p>") && formatted.trim() !== "") {
      formatted = formatted + "</p>";
    }
    formatted = formatted.replace(/<p>(\s*[-*•][\s\S]*?)<\/p>/g, "<ul><li>$1</li></ul>");
    formatted = formatted.replace(/<br>\s*([-*•])\s+/g, "</li><li>");
    formatted = formatted.replace(/<p>(\s*\d+\.[\s\S]*?)<\/p>/g, "<ol><li>$1</li></ol>");
    formatted = formatted.replace(/<br>\s*(\d+\.)\s+/g, "</li><li>");
    formatted = formatted.replace(/<p>([A-Z][A-Z\s]+[A-Z]:?)<\/p>/g, "<h4>$1</h4>");
    formatted = formatted.replace(/<p>\s*(<br\s*\/?>)?\s*<\/p>/gi, "");
    formatted = formatted.replace(/<p><br\s*\/?>/gi, "<p>");
    formatted = formatted.replace(/<br\s*\/?>\s*<\/p>/gi, "</p>");
    return formatted.trim();
  }
  static \u0275fac = function ImageProcessorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageProcessorService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ApiKeyService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImageProcessorService, factory: _ImageProcessorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageProcessorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: ApiKeyService }], null);
})();

// src/app/views/image-assistant/components/image-result/image-result.component.ts
var _c03 = (a0) => ({ fileName: a0 });
var _c17 = () => ({ width: "30px", height: "30px" });
function ImageResultComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "image.result.title", \u0275\u0275pureFunction1(4, _c03, ctx_r0.result.fileName)));
  }
}
function ImageResultComponent_ng_template_3_p_message_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 6);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", \u0275\u0275pipeBind1(1, 1, "image.result.error") + " " + ctx_r0.result.data.error);
  }
}
function ImageResultComponent_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "p-progressSpinner", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c17));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "image.result.processing"));
  }
}
function ImageResultComponent_ng_template_3_div_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.result.data.imageBase64, \u0275\u0275sanitizeUrl)("alt", "Preview for " + ctx_r0.result.fileName);
  }
}
function ImageResultComponent_ng_template_3_div_2_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function ImageResultComponent_ng_template_3_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ImageResultComponent_ng_template_3_div_2_div_8_span_2_Template, 2, 0, "span", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTruncatedText(ctx_r0.result.data.english), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shouldShowToggle(ctx_r0.result.data.english));
  }
}
function ImageResultComponent_ng_template_3_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", ctx_r0.formatDescription(ctx_r0.result.data.english), \u0275\u0275sanitizeHtml);
  }
}
function ImageResultComponent_ng_template_3_div_2_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ImageResultComponent_ng_template_3_div_2_p_button_10_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleFullText());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, ctx_r0.result.showFullText ? "image.result.showLess" : "image.result.showMore"));
  }
}
function ImageResultComponent_ng_template_3_div_2_p_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ImageResultComponent_ng_template_3_div_2_p_button_11_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.copyText(ctx_r0.result.data.english, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "image.result.copy"));
  }
}
function ImageResultComponent_ng_template_3_div_2_div_17_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function ImageResultComponent_ng_template_3_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275template(2, ImageResultComponent_ng_template_3_div_2_div_17_span_2_Template, 2, 0, "span", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTruncatedText(ctx_r0.result.data.french), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shouldShowToggle(ctx_r0.result.data.french));
  }
}
function ImageResultComponent_ng_template_3_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", ctx_r0.formatDescription(ctx_r0.result.data.french), \u0275\u0275sanitizeHtml);
  }
}
function ImageResultComponent_ng_template_3_div_2_p_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ImageResultComponent_ng_template_3_div_2_p_button_19_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleFullText());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, ctx_r0.result.showFullText ? "image.result.showLess" : "image.result.showMore"));
  }
}
function ImageResultComponent_ng_template_3_div_2_p_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ImageResultComponent_ng_template_3_div_2_p_button_20_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.copyText(ctx_r0.result.data.french, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "image.result.copy"));
  }
}
function ImageResultComponent_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ImageResultComponent_ng_template_3_div_2_img_1_Template, 1, 2, "img", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275template(8, ImageResultComponent_ng_template_3_div_2_div_8_Template, 3, 2, "div", 5)(9, ImageResultComponent_ng_template_3_div_2_div_9_Template, 1, 1, "div", 13)(10, ImageResultComponent_ng_template_3_div_2_p_button_10_Template, 2, 3, "p-button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ImageResultComponent_ng_template_3_div_2_p_button_11_Template, 2, 3, "p-button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275template(17, ImageResultComponent_ng_template_3_div_2_div_17_Template, 3, 2, "div", 5)(18, ImageResultComponent_ng_template_3_div_2_div_18_Template, 1, 1, "div", 13)(19, ImageResultComponent_ng_template_3_div_2_p_button_19_Template, 2, 3, "p-button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ImageResultComponent_ng_template_3_div_2_p_button_20_Template, 2, 3, "p-button", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.data.imageBase64);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "image.result.english"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.result.showFullText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.showFullText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shouldShowToggle(ctx_r0.result.data.english));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.data.english);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 13, "image.result.french"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.result.showFullText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.showFullText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shouldShowToggle(ctx_r0.result.data.french));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.data.french);
  }
}
function ImageResultComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImageResultComponent_ng_template_3_p_message_0_Template, 2, 3, "p-message", 3)(1, ImageResultComponent_ng_template_3_div_1_Template, 5, 6, "div", 4)(2, ImageResultComponent_ng_template_3_div_2_Template, 21, 15, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.result.status === "error" && ctx_r0.result.data.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.status === "processing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.result.status === "completed");
  }
}
var ImageResultComponent = class _ImageResultComponent {
  translate;
  imageProcessor;
  result;
  constructor(translate, imageProcessor) {
    this.translate = translate;
    this.imageProcessor = imageProcessor;
  }
  toggleFullText() {
    this.result.showFullText = !this.result.showFullText;
  }
  copyText(text2, event) {
    return __async(this, null, function* () {
      if (!text2)
        return;
      const button = event.target;
      const originalText = button.textContent;
      try {
        yield navigator.clipboard.writeText(text2);
        button.textContent = this.translate.instant("image.result.copied");
        setTimeout(() => button.textContent = originalText, 2e3);
      } catch (err) {
        console.error("Failed to copy text: ", err);
        button.textContent = this.translate.instant("image.result.copyFailed");
        setTimeout(() => button.textContent = originalText, 2e3);
      }
    });
  }
  formatDescription(text2) {
    return this.imageProcessor.formatDescription(text2);
  }
  getTruncatedText(text2, maxLength = 150) {
    if (!text2)
      return "";
    return text2.length > maxLength ? text2.substring(0, maxLength) : text2;
  }
  shouldShowToggle(text2) {
    return (text2 || "").length > 150;
  }
  static \u0275fac = function ImageResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageResultComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ImageProcessorService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageResultComponent, selectors: [["ca-image-result"]], inputs: { result: "result" }, decls: 4, vars: 0, consts: [[1, "result-container"], ["pTemplate", "header"], ["pTemplate", "content"], ["severity", "error", 3, "text", 4, "ngIf"], ["class", "processing-message", 4, "ngIf"], [4, "ngIf"], ["severity", "error", 3, "text"], [1, "processing-message"], ["strokeWidth", "4"], ["class", "result-image", 3, "src", "alt", 4, "ngIf"], [1, "result-columns"], [1, "result-column"], [1, "collapsible-container"], [3, "innerHTML", 4, "ngIf"], ["styleClass", "p-button-text p-button-sm", 3, "label", "click", 4, "ngIf"], ["icon", "pi pi-copy", "styleClass", "p-button-secondary p-button-sm copy-button", 3, "label", "click", 4, "ngIf"], [1, "result-image", 3, "src", "alt"], [3, "innerHTML"], ["styleClass", "p-button-text p-button-sm", 3, "click", "label"], ["icon", "pi pi-copy", "styleClass", "p-button-secondary p-button-sm copy-button", 3, "click", "label"]], template: function ImageResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-card");
      \u0275\u0275template(2, ImageResultComponent_ng_template_2_Template, 3, 6, "ng-template", 1)(3, ImageResultComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    TranslateModule,
    TranslatePipe,
    ButtonModule,
    Button,
    PrimeTemplate,
    CardModule,
    Card,
    DividerModule,
    MessageModule,
    Message,
    ProgressSpinnerModule,
    ProgressSpinner
  ], styles: ["\n\n.result-container[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.result-image[_ngcontent-%COMP%] {\n  max-height: 200px;\n  width: auto;\n  border: 1px solid #eee;\n  margin-bottom: 1rem;\n  display: block;\n  border-radius: 4px;\n}\n.result-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .result-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.result-column[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.collapsible-container[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.processing-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.copy-button[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=image-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageResultComponent, [{
    type: Component,
    args: [{ selector: "ca-image-result", standalone: true, imports: [
      CommonModule,
      TranslateModule,
      ButtonModule,
      CardModule,
      DividerModule,
      MessageModule,
      ProgressSpinnerModule
    ], template: `<div class="result-container">\r
  <p-card>\r
    <ng-template pTemplate="header">\r
      <h4>{{ 'image.result.title' | translate: { fileName: result.fileName } }}</h4>\r
    </ng-template>\r
    \r
    <ng-template pTemplate="content">\r
      <!-- Error state -->\r
      <p-message \r
        *ngIf="result.status === 'error' && result.data.error" \r
        severity="error" \r
        [text]="('image.result.error' | translate) + ' ' + result.data.error">\r
      </p-message>\r
      \r
      <!-- Processing state -->\r
      <div *ngIf="result.status === 'processing'" class="processing-message">\r
        <p-progressSpinner \r
          [style]="{width: '30px', height: '30px'}" \r
          strokeWidth="4">\r
        </p-progressSpinner>\r
        <span>{{ 'image.result.processing' | translate }}</span>\r
      </div>\r
      \r
      <!-- Completed state -->\r
      <div *ngIf="result.status === 'completed'">\r
        <!-- Image preview -->\r
        <img \r
          *ngIf="result.data.imageBase64" \r
          [src]="result.data.imageBase64"\r
          [alt]="'Preview for ' + result.fileName" \r
          class="result-image">\r
        \r
        <div class="result-columns">\r
          <!-- English Alt Text -->\r
          <div class="result-column">\r
            <strong>{{ 'image.result.english' | translate }}</strong>\r
            <div class="collapsible-container">\r
              <div *ngIf="!result.showFullText">\r
                {{ getTruncatedText(result.data.english) }}\r
                <span *ngIf="shouldShowToggle(result.data.english)">...</span>\r
              </div>\r
              <div *ngIf="result.showFullText" [innerHTML]="formatDescription(result.data.english)"></div>\r
              \r
              <p-button \r
                *ngIf="shouldShowToggle(result.data.english)"\r
                [label]="(result.showFullText ? 'image.result.showLess' : 'image.result.showMore') | translate"\r
                (click)="toggleFullText()"\r
                styleClass="p-button-text p-button-sm">\r
              </p-button>\r
            </div>\r
            \r
            <p-button \r
              *ngIf="result.data.english"\r
              [label]="'image.result.copy' | translate"\r
              (click)="copyText(result.data.english, $event)"\r
              icon="pi pi-copy"\r
              styleClass="p-button-secondary p-button-sm copy-button">\r
            </p-button>\r
          </div>\r
          \r
          <!-- French Alt Text -->\r
          <div class="result-column">\r
            <strong>{{ 'image.result.french' | translate }}</strong>\r
            <div class="collapsible-container">\r
              <div *ngIf="!result.showFullText">\r
                {{ getTruncatedText(result.data.french) }}\r
                <span *ngIf="shouldShowToggle(result.data.french)">...</span>\r
              </div>\r
              <div *ngIf="result.showFullText" [innerHTML]="formatDescription(result.data.french)"></div>\r
              \r
              <p-button \r
                *ngIf="shouldShowToggle(result.data.french)"\r
                [label]="(result.showFullText ? 'image.result.showLess' : 'image.result.showMore') | translate"\r
                (click)="toggleFullText()"\r
                styleClass="p-button-text p-button-sm">\r
              </p-button>\r
            </div>\r
            \r
            <p-button \r
              *ngIf="result.data.french"\r
              [label]="'image.result.copy' | translate"\r
              (click)="copyText(result.data.french, $event)"\r
              icon="pi pi-copy"\r
              styleClass="p-button-secondary p-button-sm copy-button">\r
            </p-button>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-template>\r
  </p-card>\r
</div>`, styles: ["/* angular:styles/component:css;1645e8db0489e01d241bf83ede0fef27d6588e9d7870f9c030b5919ea8047f7f;C:/AmberDev/content-assistant/src/app/views/image-assistant/components/image-result/image-result.component.ts */\n.result-container {\n  margin-bottom: 2rem;\n}\n.result-image {\n  max-height: 200px;\n  width: auto;\n  border: 1px solid #eee;\n  margin-bottom: 1rem;\n  display: block;\n  border-radius: 4px;\n}\n.result-columns {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .result-columns {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n.result-column {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.collapsible-container {\n  margin: 0.5rem 0;\n}\n.processing-message {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.copy-button {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=image-result.component.css.map */\n"] }]
  }], () => [{ type: TranslateService }, { type: ImageProcessorService }], { result: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageResultComponent, { className: "ImageResultComponent", filePath: "src/app/views/image-assistant/components/image-result/image-result.component.ts", lineNumber: 73 });
})();

// src/app/views/image-assistant/components/csv-download/csv-download.component.ts
function CsvDownloadComponent_div_0_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function CsvDownloadComponent_div_0_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadCsv());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "image.csv.download"));
  }
}
function CsvDownloadComponent_div_0_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "image.csv.noData"), " ");
  }
}
function CsvDownloadComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, CsvDownloadComponent_div_0_p_button_1_Template, 2, 3, "p-button", 2)(2, CsvDownloadComponent_div_0_p_2_Template, 3, 3, "p", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasCompletedResults());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasCompletedResults());
  }
}
var CsvDownloadComponent = class _CsvDownloadComponent {
  translate;
  results = {};
  constructor(translate) {
    this.translate = translate;
  }
  hasResults() {
    return Object.keys(this.results).length > 0;
  }
  hasCompletedResults() {
    return Object.values(this.results).some((result) => result.status === "completed");
  }
  downloadCsv() {
    let csvContent = this.translate.instant("image.csv.header") + "\n";
    const sortedFileNames = Object.keys(this.results).sort();
    sortedFileNames.forEach((fileName) => {
      const result = this.results[fileName];
      if (result.status === "completed") {
        const identifier = result.fileName;
        const english = result.data.english || "";
        const french = result.data.french || "";
        const escapeCsv = (str) => `"${(str || "").replace(/"/g, '""')}"`;
        csvContent += `${escapeCsv(identifier)},${escapeCsv(english)},${escapeCsv(french)}
`;
      }
    });
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = this.translate.instant("image.csv.fileName");
    link.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function CsvDownloadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CsvDownloadComponent)(\u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CsvDownloadComponent, selectors: [["ca-csv-download"]], inputs: { results: "results" }, decls: 1, vars: 1, consts: [["class", "csv-download-container", 4, "ngIf"], [1, "csv-download-container"], ["icon", "pi pi-download", "styleClass", "my-2", 3, "label", "onClick", 4, "ngIf"], [4, "ngIf"], ["icon", "pi pi-download", "styleClass", "my-2", 3, "onClick", "label"]], template: function CsvDownloadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CsvDownloadComponent_div_0_Template, 3, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.hasResults());
    }
  }, dependencies: [CommonModule, NgIf, TranslateModule, TranslatePipe, ButtonModule, Button], styles: ["\n\n.csv-download-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1rem;\n  background-color: var(--surface-100);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=csv-download.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsvDownloadComponent, [{
    type: Component,
    args: [{ selector: "ca-csv-download", standalone: true, imports: [CommonModule, TranslateModule, ButtonModule], template: `<div class="csv-download-container" *ngIf="hasResults()">\r
  <p-button \r
    *ngIf="hasCompletedResults()"\r
    (onClick)="downloadCsv()"\r
    [label]="'image.csv.download' | translate"\r
    icon="pi pi-download"\r
    styleClass="my-2">\r
  </p-button>\r
  \r
  <p *ngIf="!hasCompletedResults()">\r
    {{ 'image.csv.noData' | translate }}\r
  </p>\r
</div>`, styles: ["/* angular:styles/component:css;1c997a74d74a98c53de94cd1b23dcec12d9454b472a147986b6d5799e58fa7ae;C:/AmberDev/content-assistant/src/app/views/image-assistant/components/csv-download/csv-download.component.ts */\n.csv-download-container {\n  margin-top: 2rem;\n  padding: 1rem;\n  background-color: var(--surface-100);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=csv-download.component.css.map */\n"] }]
  }], () => [{ type: TranslateService }], { results: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CsvDownloadComponent, { className: "CsvDownloadComponent", filePath: "src/app/views/image-assistant/components/csv-download/csv-download.component.ts", lineNumber: 21 });
})();

// src/app/services/image-assistant-state.service.ts
var ImageAssistantStateService = class _ImageAssistantStateService {
  stateSubject = new BehaviorSubject({
    results: {},
    filesInProgress: 0,
    processedCount: 0,
    progressText: "",
    showProgressArea: false
  });
  state$ = this.stateSubject.asObservable();
  constructor() {
  }
  getCurrentState() {
    return this.stateSubject.value;
  }
  updateState(updates) {
    const currentState = this.stateSubject.value;
    this.stateSubject.next(__spreadValues(__spreadValues({}, currentState), updates));
  }
  addResult(fileName, result) {
    const currentState = this.stateSubject.value;
    const newResults = __spreadProps(__spreadValues({}, currentState.results), { [fileName]: result });
    this.updateState({ results: newResults });
  }
  updateResult(fileName, updates) {
    const currentState = this.stateSubject.value;
    if (currentState.results[fileName]) {
      const updatedResult = __spreadValues(__spreadValues({}, currentState.results[fileName]), updates);
      const newResults = __spreadProps(__spreadValues({}, currentState.results), { [fileName]: updatedResult });
      this.updateState({ results: newResults });
    }
  }
  resetState() {
    this.stateSubject.next({
      results: {},
      filesInProgress: 0,
      processedCount: 0,
      progressText: "",
      showProgressArea: false
    });
  }
  incrementProcessedCount() {
    const currentState = this.stateSubject.value;
    this.updateState({ processedCount: currentState.processedCount + 1 });
  }
  static \u0275fac = function ImageAssistantStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageAssistantStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImageAssistantStateService, factory: _ImageAssistantStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageAssistantStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/pdf-converter.service.ts
var PdfConverterService = class _PdfConverterService {
  pdfjsLib;
  isInitialized = false;
  constructor() {
  }
  /**
   * Lazy load and initialize pdfjs-dist
   */
  initializePdfJs() {
    return __async(this, null, function* () {
      if (this.isInitialized) {
        return;
      }
      const pdfjs = yield import("./chunk-XCH5NBXG.js");
      this.pdfjsLib = pdfjs;
      const { GlobalWorkerOptions } = yield import("./chunk-XCH5NBXG.js");
      const baseElement = document.querySelector("base");
      const baseHref = baseElement?.getAttribute("href") || "/";
      GlobalWorkerOptions.workerSrc = `${baseHref}pdfjs/pdf.worker.min.mjs`.replace(/\/+/g, "/");
      this.isInitialized = true;
    });
  }
  /**
   * Converts a PDF file to an array of image data URLs (one per page)
   * @param file The PDF file to convert
   * @returns Promise with array of base64 image data URLs
   */
  convertPdfToImages(file) {
    return __async(this, null, function* () {
      yield this.initializePdfJs();
      const arrayBuffer = yield file.arrayBuffer();
      const pdf = yield this.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const images = [];
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = yield pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Failed to get canvas context");
        }
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport
        };
        yield page.render(renderContext).promise;
        const imageDataUrl = canvas.toDataURL("image/png");
        images.push(imageDataUrl);
      }
      return images;
    });
  }
  /**
   * Creates a File object from a data URL
   * @param dataUrl The data URL of the image
   * @param filename The filename for the created File
   * @returns A File object
   */
  dataUrlToFile(dataUrl, filename) {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/png";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  static \u0275fac = function PdfConverterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdfConverterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PdfConverterService, factory: _PdfConverterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfConverterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/views/image-assistant/image-assistant.component.ts
function ImageAssistantComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "page.apiKey.active"), " ");
  }
}
function ImageAssistantComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "page.apiKey.notSet"), " ");
  }
}
function ImageAssistantComponent_ng_container_19_div_2_ca_image_result_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ca-image-result", 18);
  }
  if (rf & 2) {
    const result_r2 = ctx.$implicit;
    \u0275\u0275property("result", result_r2);
  }
}
function ImageAssistantComponent_ng_container_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ImageAssistantComponent_ng_container_19_div_2_ca_image_result_1_Template, 1, 1, "ca-image-result", 14);
    \u0275\u0275element(2, "ca-csv-download", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "p-button", 17);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ImageAssistantComponent_ng_container_19_div_2_Template_p_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetTool());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const state_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getResultsArray(state_r4.results));
    \u0275\u0275advance();
    \u0275\u0275property("results", state_r4.results);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 4, "image.reset.label"))("pTooltip", \u0275\u0275pipeBind1(6, 6, "image.reset.tooltip"));
  }
}
function ImageAssistantComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ca-progress-indicator", 11);
    \u0275\u0275template(2, ImageAssistantComponent_ng_container_19_div_2_Template, 7, 8, "div", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const state_r4 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("progressText", state_r4.progressText)("processedCount", state_r4.processedCount)("totalFiles", state_r4.filesInProgress)("showProgress", state_r4.showProgressArea);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getResultsArray(state_r4.results).length > 0);
  }
}
var ImageAssistantComponent = class _ImageAssistantComponent {
  apiKeyService;
  imageProcessorService;
  stateService;
  translate;
  cdr;
  route;
  router;
  pdfConverterService;
  messageService;
  // Processing State
  selectedVisionModel = "qwen/qwen2.5-vl-32b-instruct:free";
  filesToProcess = [];
  state$;
  // Timing tracking
  processingStartTime = 0;
  // Model options for the shared selector
  visionModels = [
    {
      name: "image.model.qwen",
      value: "qwen/qwen2.5-vl-32b-instruct:free",
      description: "image.model.qwenDescription"
    },
    {
      name: "image.model.gemma",
      value: "google/gemma-3-27b-it:free",
      description: "image.model.gemmaDescription"
    }
  ];
  subscriptions = [];
  constructor(apiKeyService, imageProcessorService, stateService, translate, cdr, route, router, pdfConverterService, messageService) {
    this.apiKeyService = apiKeyService;
    this.imageProcessorService = imageProcessorService;
    this.stateService = stateService;
    this.translate = translate;
    this.cdr = cdr;
    this.route = route;
    this.router = router;
    this.pdfConverterService = pdfConverterService;
    this.messageService = messageService;
    this.state$ = this.stateService.state$;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const apiKey = params["key"];
      if (apiKey) {
        this.apiKeyService.setKey(apiKey);
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  onFilesSelected(files) {
    console.log("Files selected:", files);
    console.time("Image processing time");
    this.processingStartTime = performance.now();
    this.filesToProcess = [];
    let actualFileCount = 0;
    for (let i = 0; i < files.length; i++) {
      this.filesToProcess.push({
        file: files[i],
        displayName: files[i].name
      });
      if (files[i].type !== "application/pdf") {
        actualFileCount++;
      }
    }
    this.stateService.resetState();
    this.stateService.updateState({
      filesInProgress: actualFileCount,
      processedCount: 0,
      showProgressArea: true,
      progressText: this.translate.instant("image.progress.starting", { count: actualFileCount })
    });
    this.processNextFile();
  }
  onModelChange(model) {
    this.selectedVisionModel = model;
    alert(this.translate.instant("image.model.changeAlert"));
    this.stateService.resetState();
  }
  processNextFile() {
    return __async(this, null, function* () {
      if (this.filesToProcess.length === 0) {
        this.finalizeProcessing();
        return;
      }
      const fileInfo = this.filesToProcess.shift();
      const file = fileInfo.file;
      const displayName = fileInfo.displayName;
      const isPdfPage = displayName.includes(" - Page ");
      if (file.type !== "application/pdf") {
        const result = {
          fileName: displayName,
          type: "image",
          status: "processing",
          data: { imageBase64: null, english: null, french: null, error: null },
          showFullText: false
        };
        this.stateService.addResult(displayName, result);
      }
      const state2 = this.stateService.getCurrentState();
      this.stateService.updateState({
        progressText: this.translate.instant("image.progress.processing", {
          fileName: displayName,
          current: state2.processedCount + 1,
          total: state2.filesInProgress
        })
      });
      try {
        if (file.type === "application/pdf") {
          console.log("Converting PDF to images:", displayName);
          const images = yield this.pdfConverterService.convertPdfToImages(file);
          if (images.length > 0) {
            console.log(`PDF has ${images.length} pages. Processing all pages...`);
            images.forEach((imageDataUrl, index) => {
              const pageFileName = `${displayName} - Page ${index + 1}`;
              const imageFile = this.pdfConverterService.dataUrlToFile(imageDataUrl, `${displayName}_page${index + 1}.png`);
              this.filesToProcess.push({
                file: imageFile,
                displayName: pageFileName
              });
              const currentState = this.stateService.getCurrentState();
              this.stateService.updateState({
                filesInProgress: currentState.filesInProgress + 1
              });
            });
            this.processNextFile();
          } else {
            throw new Error(this.translate.instant("image.error.pdfNoPages"));
          }
        } else if (file.type.startsWith("image/")) {
          this.imageProcessorService.analyzeImage(file, this.selectedVisionModel, displayName, isPdfPage).subscribe({
            next: (result) => {
              let errorMessage = result.error;
              if (errorMessage === "KEY_LIMIT_EXCEEDED") {
                errorMessage = this.translate.instant("image.error.paidModel");
              }
              this.stateService.updateResult(displayName, {
                status: result.error ? "error" : "completed",
                data: {
                  imageBase64: result.imageBase64 || null,
                  english: result.english,
                  french: result.french,
                  error: errorMessage
                }
              });
              this.stateService.incrementProcessedCount();
              this.processNextFile();
            },
            error: (err) => {
              console.error(`Error analyzing image ${displayName}:`, err);
              let errorMessage = err.message || this.translate.instant("image.error.unknown");
              if (err.message === "KEY_LIMIT_EXCEEDED" || err.message && err.message.includes("KEY_LIMIT_EXCEEDED")) {
                errorMessage = this.translate.instant("image.error.paidModel");
              }
              this.stateService.updateResult(displayName, {
                status: "error",
                data: {
                  imageBase64: null,
                  english: null,
                  french: null,
                  error: errorMessage
                }
              });
              this.stateService.incrementProcessedCount();
              this.processNextFile();
            }
          });
        } else {
          this.stateService.updateResult(displayName, {
            status: "error",
            data: {
              imageBase64: null,
              english: null,
              french: null,
              error: this.translate.instant("image.error.unsupportedFileType")
            }
          });
          this.stateService.incrementProcessedCount();
          this.processNextFile();
        }
      } catch (error) {
        console.error(`Error processing file ${displayName}:`, error);
        if (file.type !== "application/pdf") {
          this.stateService.updateResult(displayName, {
            status: "error",
            data: {
              imageBase64: null,
              english: null,
              french: null,
              error: error.message || this.translate.instant("image.error.failedToProcess")
            }
          });
          this.stateService.incrementProcessedCount();
        }
        this.processNextFile();
      }
    });
  }
  finalizeProcessing() {
    const state2 = this.stateService.getCurrentState();
    this.stateService.updateState({
      progressText: this.translate.instant("image.progress.complete", { count: state2.processedCount })
    });
    console.timeEnd("Image processing time");
    const endTime = performance.now();
    const durationInSeconds = ((endTime - this.processingStartTime) / 1e3).toFixed(2);
    this.messageService.add({
      severity: "success",
      summary: this.translate.instant("common.requestComplete"),
      detail: this.translate.instant("common.totalTime", { time: durationInSeconds }),
      life: 1e4
    });
    setTimeout(() => {
      this.stateService.updateState({ showProgressArea: false });
    }, 3e3);
  }
  // Helper method for template to convert object to array
  getResultsArray(results) {
    return Object.values(results);
  }
  // Reset the tool to process new images
  resetTool() {
    this.stateService.resetState();
    this.filesToProcess = [];
    this.stateService.updateState({
      showProgressArea: false,
      progressText: ""
    });
  }
  static \u0275fac = function ImageAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageAssistantComponent)(\u0275\u0275directiveInject(ApiKeyService), \u0275\u0275directiveInject(ImageProcessorService), \u0275\u0275directiveInject(ImageAssistantStateService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PdfConverterService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageAssistantComponent, selectors: [["ca-image-assistant"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 21, vars: 24, consts: [["id", "wb-cont"], [1, "api-key-status", "mb-4"], ["class", "text-green-600", 4, "ngIf"], ["class", "text-orange-600", 4, "ngIf"], [3, "modelChange", "selectedModel", "models", "label", "cardTitle", "showCard", "showTranslateOption"], [3, "filesSelected"], [4, "ngIf"], [1, "text-green-600"], [1, "pi", "pi-check-circle"], [1, "text-orange-600"], [1, "pi", "pi-exclamation-circle"], [3, "progressText", "processedCount", "totalFiles", "showProgress"], ["class", "results-section", 4, "ngIf"], [1, "results-section"], [3, "result", 4, "ngFor", "ngForOf"], [3, "results"], [1, "mt-3"], ["icon", "pi pi-refresh", "severity", "secondary", 3, "click", "label", "pTooltip"], [3, "result"]], template: function ImageAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "h1", 0);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "section", 1)(8, "div")(9, "strong");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ImageAssistantComponent_span_12_Template, 4, 3, "span", 2);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275template(14, ImageAssistantComponent_span_14_Template, 4, 3, "span", 3);
      \u0275\u0275pipe(15, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "section")(17, "ca-shared-model-selector", 4);
      \u0275\u0275listener("modelChange", function ImageAssistantComponent_Template_ca_shared_model_selector_modelChange_17_listener($event) {
        return ctx.onModelChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ca-file-upload", 5);
      \u0275\u0275listener("filesSelected", function ImageAssistantComponent_Template_ca_file_upload_filesSelected_18_listener($event) {
        return ctx.onFilesSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, ImageAssistantComponent_ng_container_19_Template, 3, 5, "ng-container", 6);
      \u0275\u0275pipe(20, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 12, "title.image"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 14, "image.description"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "page.apiKey.status"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 18, ctx.apiKeyService.hasApiKey$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(15, 20, ctx.apiKeyService.hasApiKey$));
      \u0275\u0275advance(3);
      \u0275\u0275property("selectedModel", ctx.selectedVisionModel)("models", ctx.visionModels)("label", "image.model.label")("cardTitle", "image.model.title")("showCard", true)("showTranslateOption", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(20, 22, ctx.state$));
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    TranslateModule,
    TranslatePipe,
    ButtonModule,
    Button,
    TooltipModule,
    Tooltip,
    Toast,
    FileUploadComponent,
    SharedModelSelectorComponent,
    ProgressIndicatorComponent,
    ImageResultComponent,
    CsvDownloadComponent
  ], styles: ["\n\n.results-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=image-assistant.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageAssistantComponent, [{
    type: Component,
    args: [{ selector: "ca-image-assistant", standalone: true, imports: [
      CommonModule,
      TranslateModule,
      ButtonModule,
      TooltipModule,
      Toast,
      FileUploadComponent,
      SharedModelSelectorComponent,
      ProgressIndicatorComponent,
      ImageResultComponent,
      CsvDownloadComponent
    ], providers: [MessageService], template: `<p-toast></p-toast>\r
\r
<h1 id="wb-cont">{{ 'title.image' | translate }}</h1>\r
<p>{{ 'image.description' | translate }}</p>\r
\r
<!-- API Key Status -->\r
<section class="api-key-status mb-4">\r
  <div>\r
    <strong>{{ 'page.apiKey.status' | translate }}</strong>\r
    <span *ngIf="apiKeyService.hasApiKey$ | async" class="text-green-600">\r
      <i class="pi pi-check-circle"></i> {{ 'page.apiKey.active' | translate }}\r
    </span>\r
    <span *ngIf="!(apiKeyService.hasApiKey$ | async)" class="text-orange-600">\r
      <i class="pi pi-exclamation-circle"></i> {{ 'page.apiKey.notSet' | translate }}\r
    </span>\r
  </div>\r
</section>\r
\r
<!-- Main Tool Area -->\r
<section>\r
  <!-- Model Selector -->\r
  <ca-shared-model-selector\r
    [selectedModel]="selectedVisionModel"\r
    [models]="visionModels"\r
    [label]="'image.model.label'"\r
    [cardTitle]="'image.model.title'"\r
    [showCard]="true"\r
    [showTranslateOption]="false"\r
    (modelChange)="onModelChange($event)">\r
  </ca-shared-model-selector>\r
  \r
  <!-- File Upload -->\r
  <ca-file-upload\r
    (filesSelected)="onFilesSelected($event)">\r
  </ca-file-upload>\r
  \r
  <!-- Progress Indicator -->\r
  <ng-container *ngIf="state$ | async as state">\r
    <ca-progress-indicator\r
      [progressText]="state.progressText"\r
      [processedCount]="state.processedCount"\r
      [totalFiles]="state.filesInProgress"\r
      [showProgress]="state.showProgressArea">\r
    </ca-progress-indicator>\r
    \r
    <!-- Results Display -->\r
    <div class="results-section" *ngIf="getResultsArray(state.results).length > 0">\r
      <ca-image-result \r
        *ngFor="let result of getResultsArray(state.results)"\r
        [result]="result">\r
      </ca-image-result>\r
      \r
      <!-- CSV Download -->\r
      <ca-csv-download\r
        [results]="state.results">\r
      </ca-csv-download>\r
      \r
      <!-- Reset Button -->\r
      <div class="mt-3">\r
        <p-button \r
          (click)="resetTool()"\r
          [label]="'image.reset.label' | translate"\r
          icon="pi pi-refresh"\r
          severity="secondary"\r
          [pTooltip]="'image.reset.tooltip' | translate">\r
        </p-button>\r
      </div>\r
    </div>\r
  </ng-container>\r
</section>`, styles: ["/* angular:styles/component:css;09dc9166e46b9e7aabdb069b1dc488d36e7e0913816855e9dc9912d983b17aa9;C:/AmberDev/content-assistant/src/app/views/image-assistant/image-assistant.component.ts */\n.results-section {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=image-assistant.component.css.map */\n"] }]
  }], () => [{ type: ApiKeyService }, { type: ImageProcessorService }, { type: ImageAssistantStateService }, { type: TranslateService }, { type: ChangeDetectorRef }, { type: ActivatedRoute }, { type: Router }, { type: PdfConverterService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageAssistantComponent, { className: "ImageAssistantComponent", filePath: "src/app/views/image-assistant/image-assistant.component.ts", lineNumber: 47 });
})();

// node_modules/primeng/fesm2022/primeng-panel.mjs
var _c04 = ["header"];
var _c18 = ["icons"];
var _c22 = ["content"];
var _c32 = ["footer"];
var _c42 = ["headericons"];
var _c52 = ["contentWrapper"];
var _c62 = ["*", [["p-header"]], [["p-footer"]]];
var _c72 = ["*", "p-header", "p-footer"];
var _c82 = (a0, a1) => ({
  "p-panel p-component": true,
  "p-panel-toggleable": a0,
  "p-panel-expanded": a1
});
var _c92 = (a0) => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
var _c102 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c112 = (a0) => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
var _c122 = (a0) => ({
  value: "visible",
  params: a0
});
var _c132 = (a0, a1, a2) => ({
  "p-panel-icons-start": a0,
  "p-panel-icons-end": a1,
  "p-panel-icons-center": a2
});
var _c142 = (a0) => ({
  $implicit: a0
});
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("id", ctx_r2.id + "_header");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2._header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r2.expandIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "MinusIcon");
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_span_1_Template, 1, 2, "span", 16)(2, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_MinusIcon_2_Template, 1, 0, "MinusIcon", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.expandIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r2.collapseIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon");
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_span_1_Template, 1, 2, "span", 16)(2, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_PlusIcon_2_Template, 1, 0, "PlusIcon", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapseIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 14)(2, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template, 3, 2, "ng-container", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapsed);
  }
}
function Panel_div_1_p_button_6_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_p_button_6_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_1_p_button_6_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_1_p_button_6_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 14)(1, Panel_div_1_p_button_6_ng_template_1_1_Template, 1, 0, null, 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r2.headerIconsTemplate && !ctx_r2._headerIconsTemplate && !(ctx_r2.toggleButtonProps == null ? null : ctx_r2.toggleButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerIconsTemplate || ctx_r2._headerIconsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c142, ctx_r2.collapsed));
  }
}
function Panel_div_1_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("click", function Panel_div_1_p_button_6_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onIconClick($event));
    })("keydown", function Panel_div_1_p_button_6_Template_p_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", true)("rounded", true)("buttonProps", ctx_r2.toggleButtonProps);
    \u0275\u0275attribute("id", ctx_r2.id + "_header")("aria-label", ctx_r2.buttonAriaLabel)("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed);
  }
}
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function Panel_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHeaderClick($event));
    });
    \u0275\u0275template(1, Panel_div_1_span_1_Template, 2, 2, "span", 9);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275template(5, Panel_div_1_5_Template, 1, 0, null, 6)(6, Panel_div_1_p_button_6_Template, 3, 7, "p-button", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("id", ctx_r2.id + "-titlebar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2._header);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c132, ctx_r2.iconPos === "start", ctx_r2.iconPos === "end", ctx_r2.iconPos === "center"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.iconTemplate || ctx_r2._iconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.toggleable);
  }
}
function Panel_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Panel_div_7_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate || ctx_r2._footerTemplate);
  }
}
var theme4 = ({
  dt
}) => `
.p-panel {
    border: 1px solid ${dt("panel.border.color")};
    border-radius: ${dt("panel.border.radius")};
    background: ${dt("panel.background")};
    color: ${dt("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${dt("panel.header.padding")};
    background: ${dt("panel.header.background")};
    color: ${dt("panel.header.color")};
    border-style: solid;
    border-width: ${dt("panel.header.border.width")};
    border-color: ${dt("panel.header.border.color")};
    border-radius: ${dt("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${dt("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${dt("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${dt("panel.content.padding")};
}

.p-panel-footer {
    padding: ${dt("panel.footer.padding")};
}

/* For PrimeNG */
.p-panel-toggleable.p-panel-expanded > .p-panel-content-container:not(.ng-animating) {
    overflow: visible
}

.p-panel-toggleable .p-panel-content-container {
    overflow: hidden;
}
`;
var classes4 = {
  root: ({
    props
  }) => ["p-panel p-component", {
    "p-panel-toggleable": props.toggleable
  }],
  header: "p-panel-header",
  title: "p-panel-title",
  headerActions: "p-panel-header-actions",
  pcToggleButton: "p-panel-toggle-button",
  contentContainer: "p-panel-content-container",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
var PanelStyle = class _PanelStyle extends BaseStyle {
  name = "panel";
  theme = theme4;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PanelStyle_BaseFactory;
    return function PanelStyle_Factory(__ngFactoryType__) {
      return (\u0275PanelStyle_BaseFactory || (\u0275PanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PanelStyle)))(__ngFactoryType__ || _PanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PanelStyle,
    factory: _PanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelStyle, [{
    type: Injectable
  }], null, null);
})();
var PanelClasses;
(function(PanelClasses2) {
  PanelClasses2["root"] = "p-panel";
  PanelClasses2["header"] = "p-panel-header";
  PanelClasses2["title"] = "p-panel-title";
  PanelClasses2["headerActions"] = "p-panel-header-actions";
  PanelClasses2["pcToggleButton"] = "p-panel-toggle-button";
  PanelClasses2["contentContainer"] = "p-panel-content-container";
  PanelClasses2["content"] = "p-panel-content";
  PanelClasses2["footer"] = "p-panel-footer";
})(PanelClasses || (PanelClasses = {}));
var Panel = class _Panel extends BaseComponent {
  /**
   * Defines if content of panel can be expanded and collapsed.
   * @group Props
   */
  toggleable;
  /**
   * Header text of the panel.
   * @group Props
   */
  _header;
  /**
   * Defines the initial state of panel content, supports one or two-way binding as well.
   * @group Props
   */
  collapsed;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the icons.
   * @group Props
   */
  iconPos = "end";
  /**
   * Expand icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  expandIcon;
  /**
   * Collapse icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  collapseIcon;
  /**
   * Specifies if header of panel cannot be displayed.
   * @group Props
   */
  showHeader = true;
  /**
   * Specifies the toggler element to toggle the panel content.
   * @group Props
   */
  toggler = "icon";
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  toggleButtonProps;
  /**
   * Emitted when the collapsed changes.
   * @param {boolean} value - New Value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  footerFacet;
  animating;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Defines template option for icon.
   * @example
   * ```html
   * <ng-template #icon> </ng-template>
   * ```
   * @group Templates
   */
  iconTemplate;
  /**
   * Defines template option for content.
   * @example
   * ```html
   * <ng-template #content> </ng-template>
   * ```
   * @group Templates
   */
  contentTemplate;
  /**
   * Defines template option for footer.
   * @example
   * ```html
   * <ng-template #footer> </ng-template>
   * ```
   * @group Templates
   */
  footerTemplate;
  /**
   * Defines template option for headerIcon.
   * @type {TemplateRef<PanelHeaderIconsTemplateContext>} context - context of the template.
   * @example
   * ```html
   * <ng-template #headericons let-collapsed> </ng-template>
   * ```
   * @see {@link PanelHeaderIconsTemplateContext}
   * @group Templates
   */
  headerIconsTemplate;
  _headerTemplate;
  _iconTemplate;
  _contentTemplate;
  _footerTemplate;
  _headerIconsTemplate;
  contentWrapperViewChild;
  id = uuid("pn_id_");
  get buttonAriaLabel() {
    return this._header;
  }
  _componentStyle = inject(PanelStyle);
  onHeaderClick(event) {
    if (this.toggler === "header") {
      this.toggle(event);
    }
  }
  onIconClick(event) {
    if (this.toggler === "icon") {
      this.toggle(event);
    }
  }
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.toggleable) {
      if (this.collapsed) this.expand();
      else this.collapse();
    }
    this.cd.markForCheck();
    event.preventDefault();
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
    this.updateTabIndex();
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
    this.updateTabIndex();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateTabIndex() {
    if (this.contentWrapperViewChild) {
      const focusableElements = this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElements.forEach((element) => {
        if (this.collapsed) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("tabindex");
        }
      });
    }
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  onToggleDone(event) {
    this.animating = false;
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "icons":
          this._iconTemplate = item.template;
          break;
        case "headericons":
          this._headerIconsTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Panel_BaseFactory;
    return function Panel_Factory(__ngFactoryType__) {
      return (\u0275Panel_BaseFactory || (\u0275Panel_BaseFactory = \u0275\u0275getInheritedFactory(_Panel)))(__ngFactoryType__ || _Panel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Panel,
    selectors: [["p-panel"]],
    contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c04, 4);
        \u0275\u0275contentQuery(dirIndex, _c18, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, _c32, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerIconsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Panel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c52, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentWrapperViewChild = _t.first);
      }
    },
    inputs: {
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      _header: [0, "header", "_header"],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      iconPos: "iconPos",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      toggler: "toggler",
      transitionOptions: "transitionOptions",
      toggleButtonProps: "toggleButtonProps"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [\u0275\u0275ProvidersFeature([PanelStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c72,
    decls: 8,
    vars: 25,
    consts: [["contentWrapper", ""], ["icon", ""], [3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-panel-content-container", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["severity", "secondary", "type", "button", "role", "button", "styleClass", "p-panel-header-icon p-panel-toggler p-link", 3, "text", "rounded", "buttonProps", "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["severity", "secondary", "type", "button", "role", "button", "styleClass", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", "text", "rounded", "buttonProps"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", 4, "ngIf"], [1, "p-panel-footer"]],
    template: function Panel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c62);
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, Panel_div_1_Template, 7, 10, "div", 3);
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275listener("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onToggleDone($event));
        });
        \u0275\u0275elementStart(3, "div", 5, 0);
        \u0275\u0275projection(5);
        \u0275\u0275template(6, Panel_ng_container_6_Template, 1, 0, "ng-container", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, Panel_div_7_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c82, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        \u0275\u0275attribute("id", ctx.id)("data-pc-name", "panel");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showHeader);
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? \u0275\u0275pureFunction1(19, _c102, \u0275\u0275pureFunction1(17, _c92, ctx.animating ? ctx.transitionOptions : "0ms")) : \u0275\u0275pureFunction1(23, _c122, \u0275\u0275pureFunction1(21, _c112, ctx.animating ? ctx.transitionOptions : "0ms")));
        \u0275\u0275attribute("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : void 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, PlusIcon, MinusIcon, ButtonModule, Button, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Panel, [{
    type: Component,
    args: [{
      selector: "p-panel",
      standalone: true,
      imports: [CommonModule, PlusIcon, MinusIcon, ButtonModule, SharedModule],
      template: `
        <div
            [attr.id]="id"
            [attr.data-pc-name]="'panel'"
            [ngClass]="{
                'p-panel p-component': true,
                'p-panel-toggleable': toggleable,
                'p-panel-expanded': !collapsed && toggleable
            }"
            [ngStyle]="style"
            [class]="styleClass"
        >
            <div class="p-panel-header" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
                <span class="p-panel-title" *ngIf="_header" [attr.id]="id + '_header'">{{ _header }}</span>
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                <div
                    class="p-panel-icons"
                    [ngClass]="{
                        'p-panel-icons-start': iconPos === 'start',
                        'p-panel-icons-end': iconPos === 'end',
                        'p-panel-icons-center': iconPos === 'center'
                    }"
                >
                    <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    <p-button
                        *ngIf="toggleable"
                        [attr.id]="id + '_header'"
                        severity="secondary"
                        [text]="true"
                        [rounded]="true"
                        type="button"
                        role="button"
                        styleClass="p-panel-header-icon p-panel-toggler p-link"
                        [attr.aria-label]="buttonAriaLabel"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        (click)="onIconClick($event)"
                        (keydown)="onKeyDown($event)"
                        [buttonProps]="toggleButtonProps"
                    >
                        <ng-template #icon>
                            <ng-container *ngIf="!headerIconsTemplate && !_headerIconsTemplate && !toggleButtonProps?.icon">
                                <ng-container *ngIf="!collapsed">
                                    <span *ngIf="expandIcon" [class]="expandIcon"></span>
                                    <MinusIcon *ngIf="!expandIcon" />
                                </ng-container>

                                <ng-container *ngIf="collapsed">
                                    <span *ngIf="collapseIcon" [class]="collapseIcon"></span>
                                    <PlusIcon *ngIf="!collapseIcon" />
                                </ng-container>
                            </ng-container>

                            <ng-template *ngTemplateOutlet="headerIconsTemplate || _headerIconsTemplate; context: { $implicit: collapsed }"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
            </div>
            <div
                class="p-panel-content-container"
                [id]="id + '_content'"
                role="region"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.tabindex]="collapsed ? '-1' : undefined"
                [@panelContent]="
                    collapsed
                        ? {
                              value: 'hidden',
                              params: {
                                  transitionParams: animating ? transitionOptions : '0ms',
                                  height: '0',
                                  opacity: '0'
                              }
                          }
                        : {
                              value: 'visible',
                              params: {
                                  transitionParams: animating ? transitionOptions : '0ms',
                                  height: '*',
                                  opacity: '1'
                              }
                          }
                "
                (@panelContent.done)="onToggleDone($event)"
            >
                <div class="p-panel-content" #contentWrapper>
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>

                <div class="p-panel-footer" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PanelStyle]
    }]
  }], null, {
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _header: [{
      type: Input,
      args: ["header"]
    }],
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggler: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    toggleButtonProps: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icons", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    headerIconsTemplate: [{
      type: ContentChild,
      args: ["headericons", {
        descendants: false
      }]
    }],
    contentWrapperViewChild: [{
      type: ViewChild,
      args: ["contentWrapper"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PanelModule = class _PanelModule {
  static \u0275fac = function PanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PanelModule,
    imports: [Panel, SharedModule],
    exports: [Panel, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Panel, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelModule, [{
    type: NgModule,
    args: [{
      imports: [Panel, SharedModule],
      exports: [Panel, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function _defineProperty(e, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t2, e;
}
function ownKeys(e, r2) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e;
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r2 || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _toPropertyKey(t2) {
  var i = _toPrimitive(t2, "string");
  return "symbol" == typeof i ? i : i + "";
}
var noop = () => {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined") _WINDOW = window;
  if (typeof document !== "undefined") _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined") _PERFORMANCE = performance;
} catch (e) {
}
var {
  userAgent = ""
} = _WINDOW.navigator || {};
var WINDOW = _WINDOW;
var DOCUMENT2 = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT2.documentElement && !!DOCUMENT2.head && typeof DOCUMENT2.addEventListener === "function" && typeof DOCUMENT2.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var p = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/;
var g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var S = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
};
var A = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var P = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var s = "classic";
var t = "duotone";
var r = "sharp";
var o = "sharp-duotone";
var L = [s, t, r, o];
var G = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
};
var lt = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
};
var pt = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]);
var xt = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
};
var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
var St = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
};
var At = ["kit"];
var Ct = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
};
var Lt = ["fak", "fakd"];
var Wt = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
};
var Et = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
var t$1 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var r$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var bt$1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
var Yt = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
};
var ua = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
};
var I$1 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
};
var ga = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
};
var x = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"];
var Ia = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...r$1, ...x];
var m$1 = ["solid", "regular", "light", "thin", "duotone", "brands"];
var c$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var F$1 = c$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ma = [...Object.keys(I$1), ...m$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY].concat(c$1.map((a) => "".concat(a, "x"))).concat(F$1.map((a) => "w-".concat(a)));
var wa = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var PRODUCTION = (() => {
  try {
    return false;
  } catch (e$$1) {
    return false;
  }
})();
function familyProxy(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      return prop in target ? target[prop] : target[s];
    }
  });
}
var _PREFIX_TO_STYLE = _objectSpread2({}, S);
_PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  "fa-duotone": "duotone"
}), S[s]), St["kit"]), St["kit-duotone"]);
var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
var _STYLE_TO_PREFIX = _objectSpread2({}, xt);
_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  duotone: "fad"
}), _STYLE_TO_PREFIX[s]), Et["kit"]), Et["kit-duotone"]);
var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
var _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
_PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt["kit"]);
var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
var _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
_LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct["kit"]);
var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
var ICON_SELECTION_SYNTAX_PATTERN = p;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = g;
var _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var DUOTONE_CLASSES = A;
var RESERVED_CLASSES = [...At, ...ma];
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT2.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "") return true;
  if (val === "false") return false;
  if (val === "true") return true;
  return val;
}
if (DOCUMENT2 && typeof DOCUMENT2.querySelector === "function") {
  const attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach((_ref) => {
    let [attr, key] = _ref;
    const val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var _default = {
  styleDefault: "solid",
  familyDefault: s,
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach((key) => {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function(val) {
      _config[key] = val;
      _onChangeCb.forEach((cb) => cb(config));
    },
    get: function() {
      return _config[key];
    }
  });
});
Object.defineProperty(config, "familyPrefix", {
  enumerable: true,
  set: function(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach((cb) => cb(config));
  },
  get: function() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return () => {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
var d$2 = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  const style2 = DOCUMENT2.createElement("style");
  style2.setAttribute("type", "text/css");
  style2.innerHTML = css2;
  const headChildren = DOCUMENT2.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT2.head.insertBefore(style2, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  let size = 12;
  let id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  const array = [];
  for (let i = (obj || []).length >>> 0; i--; ) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter((i) => i);
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce((acc, attributeName) => {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce((acc, styleName) => {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  let {
    transform,
    containerWidth,
    iconWidth
  } = _ref;
  const outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  const inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  const path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  let {
    transform,
    width = UNITS_IN_GRID,
    height = UNITS_IN_GRID,
    startCentered = false
  } = _ref2;
  let val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';
function css() {
  const dcp = DEFAULT_CSS_PREFIX;
  const drc = DEFAULT_REPLACEMENT_CLASS;
  const fp = config.cssPrefix;
  const rc = config.replacementClass;
  let s2 = baseStyles;
  if (fp !== dcp || rc !== drc) {
    const dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    const rPatt = new RegExp("\\.".concat(drc), "g");
    s2 = s2.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s2;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function() {
  DOCUMENT2.removeEventListener("DOMContentLoaded", listener);
  loaded = 1;
  functions.map((fn) => fn());
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT2.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT2.readyState);
  if (!loaded) DOCUMENT2.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  const {
    tag,
    attributes = {},
    children = []
  } = abstractNodes;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function ucs2decode(string) {
  const output = [];
  let counter2 = 0;
  const length = string.length;
  while (counter2 < length) {
    const value = string.charCodeAt(counter2++);
    if (value >= 55296 && value <= 56319 && counter2 < length) {
      const extra = string.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter2--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  const decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  const size = string.length;
  let first = string.charCodeAt(index);
  let second;
  if (first >= 55296 && first <= 56319 && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const icon2 = icons[iconName];
    const expanded = !!icon2.icon;
    if (expanded) {
      acc[icon2.iconName] = icon2.icon;
    } else {
      acc[iconName] = icon2;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks = false
  } = params;
  const normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
var {
  styles,
  shims
} = namespace;
var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
  acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
  return acc;
}, {});
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  const parts = cls.split("-");
  const prefix = parts[0];
  const iconName = parts.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = () => {
  const lookup = (reducer) => {
    return reduce(styles, (o$$1, style2, prefix) => {
      o$$1[prefix] = reduce(style2, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup((acc, icon2, iconName) => {
    if (icon2[3]) {
      acc[icon2[3]] = iconName;
    }
    if (icon2[2]) {
      const aliases = icon2[2].filter((a$$1) => {
        return typeof a$$1 === "number";
      });
      aliases.forEach((alias) => {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup((acc, icon2, iconName) => {
    acc[iconName] = iconName;
    if (icon2[2]) {
      const aliases = icon2[2].filter((a$$1) => {
        return typeof a$$1 === "string";
      });
      aliases.forEach((alias) => {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup((acc, icon2, iconName) => {
    const aliases = icon2[2];
    acc[iconName] = iconName;
    aliases.forEach((alias) => {
      acc[alias] = iconName;
    });
    return acc;
  });
  const hasRegular = "far" in styles || config.autoFetchSvg;
  const shimLookups = reduce(shims, (acc, shim) => {
    const maybeNameMaybeUnicode = shim[0];
    let prefix = shim[1];
    const iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange((c$$1) => {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  const oldUnicode = _byOldUnicode[unicode];
  const newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = () => {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getFamilyId(values) {
  let family = s;
  const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
    acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
    return acc;
  }, {});
  L.forEach((familyId) => {
    if (values.includes(famProps[familyId]) || values.some((v$$1) => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
      family = familyId;
    }
  });
  return family;
}
function getCanonicalPrefix(styleOrPrefix) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family = s
  } = params;
  const style2 = PREFIX_TO_STYLE[family][styleOrPrefix];
  if (family === t && !styleOrPrefix) {
    return "fad";
  }
  const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style2];
  const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  const result = prefix || defined || null;
  return result;
}
function moveNonFaClassesToRest(classNames) {
  let rest = [];
  let iconName = null;
  classNames.forEach((cls) => {
    const result = getIconName(config.cssPrefix, cls);
    if (result) {
      iconName = result;
    } else if (cls) {
      rest.push(cls);
    }
  });
  return {
    iconName,
    rest
  };
}
function sortedUniqueValues(arr) {
  return arr.sort().filter((value, index, arr2) => {
    return arr2.indexOf(value) === index;
  });
}
function getCanonicalIcon(values) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups = false
  } = params;
  let givenPrefix = null;
  const faCombinedClasses = Ia.concat(bt$1);
  const faStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => faCombinedClasses.includes(cls)));
  const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => !Ia.includes(cls)));
  const faStyles = faStyleOrFamilyClasses.filter((cls) => {
    givenPrefix = cls;
    return !P.includes(cls);
  });
  const [styleFromValues = null] = faStyles;
  const family = getFamilyId(faStyleOrFamilyClasses);
  const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
    prefix: getCanonicalPrefix(styleFromValues, {
      family
    })
  });
  return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
    values,
    family,
    styles,
    config,
    canonical,
    givenPrefix
  })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
  let {
    prefix,
    iconName
  } = canonical;
  if (skipLookups || !prefix || !iconName) {
    return {
      prefix,
      iconName
    };
  }
  const shim = givenPrefix === "fa" ? byOldName(iconName) : {};
  const aliasIconName = byAlias(prefix, iconName);
  iconName = shim.iconName || aliasIconName || iconName;
  prefix = shim.prefix || prefix;
  if (prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
    prefix = "fas";
  }
  return {
    prefix,
    iconName
  };
}
var newCanonicalFamilies = L.filter((familyId) => {
  return familyId !== s || familyId !== t;
});
var newCanonicalStyles = Object.keys(ga).filter((key) => key !== s).map((key) => Object.keys(ga[key])).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
  const {
    values,
    family,
    canonical,
    givenPrefix = "",
    styles: styles2 = {},
    config: config$$1 = {}
  } = prefixOptions;
  const isDuotoneFamily = family === t;
  const valuesHasDuotone = values.includes("fa-duotone") || values.includes("fad");
  const defaultFamilyIsDuotone = config$$1.familyDefault === "duotone";
  const canonicalPrefixIsDuotone = canonical.prefix === "fad" || canonical.prefix === "fa-duotone";
  if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
    canonical.prefix = "fad";
  }
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
    const validPrefix = Object.keys(styles2).find((key) => newCanonicalStyles.includes(key));
    if (validPrefix || config$$1.autoFetchSvg) {
      const defaultPrefix = pt.get(family).defaultShortPrefixId;
      canonical.prefix = defaultPrefix;
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
var Library = class {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
      definitions[_key] = arguments[_key];
    }
    const additions = definitions.reduce(this._pullDefinitions, {});
    Object.keys(additions).forEach((key) => {
      this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
      defineIcons(key, additions[key]);
      const longPrefix = PREFIX_TO_LONG_STYLE[s][key];
      if (longPrefix) defineIcons(longPrefix, additions[key]);
      build();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(additions, definition) {
    const normalized = definition.prefix && definition.iconName && definition.icon ? {
      0: definition
    } : definition;
    Object.keys(normalized).map((key) => {
      const {
        prefix,
        iconName,
        icon: icon2
      } = normalized[key];
      const aliases = icon2[2];
      if (!additions[prefix]) additions[prefix] = {};
      if (aliases.length > 0) {
        aliases.forEach((alias) => {
          if (typeof alias === "string") {
            additions[prefix][alias] = icon2;
          }
        });
      }
      additions[prefix][iconName] = icon2;
    });
    return additions;
  }
};
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  let {
    mixoutsTo: obj
  } = _ref;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach((k) => {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach((plugin) => {
    const mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach((tk) => {
      if (typeof mixout[tk] === "function") {
        obj[tk] = mixout[tk];
      }
      if (typeof mixout[tk] === "object") {
        Object.keys(mixout[tk]).forEach((sk) => {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      const hooks = plugin.hooks();
      Object.keys(hooks).forEach((hook) => {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach((hookFn) => {
    accumulator = hookFn.apply(null, [accumulator, ...args]);
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach((hookFn) => {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  const hook = arguments[0];
  const args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  let {
    iconName
  } = iconLookup;
  const prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = () => {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks("noAuto");
};
var dom = {
  i2svg: function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject(new Error("Operation requires a DOM of some kind."));
    }
  },
  watch: function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot
    } = params;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(() => {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
var parse = {
  icon: (icon2) => {
    if (icon2 === null) {
      return null;
    }
    if (typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
      return {
        prefix: icon2.prefix,
        iconName: byAlias(icon2.prefix, icon2.iconName) || icon2.iconName
      };
    }
    if (Array.isArray(icon2) && icon2.length === 2) {
      const iconName = icon2[1].indexOf("fa-") === 0 ? icon2[1].slice(3) : icon2[1];
      const prefix = getCanonicalPrefix(icon2[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof icon2 === "string" && (icon2.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon2.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      const canonicalIcon = getCanonicalIcon(icon2.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof icon2 === "string") {
      const prefix = getDefaultUsablePrefix();
      return {
        prefix,
        iconName: byAlias(prefix, icon2) || icon2
      };
    }
  }
};
var api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
var autoReplace = function() {
  let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot = DOCUMENT2
  } = params;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function() {
      return val.abstract.map((a) => toHtml(a));
    }
  });
  Object.defineProperty(val, "node", {
    get: function() {
      if (!IS_DOM) return;
      const container = DOCUMENT2.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref) {
  let {
    children,
    main,
    mask,
    attributes,
    styles: styles2,
    transform
  } = _ref;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    const {
      width,
      height
    } = main;
    const offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles2), {}, {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref) {
  let {
    prefix,
    iconName,
    children,
    attributes,
    symbol
  } = _ref;
  const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  const {
    icons: {
      main,
      mask
    },
    prefix,
    iconName,
    transform,
    symbol,
    title,
    maskId,
    titleId,
    extra,
    watchable = false
  } = params;
  const {
    width,
    height
  } = mask.found ? mask : main;
  const isUploadedIcon = Lt.includes(prefix);
  const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter((c$$1) => extra.classes.indexOf(c$$1) === -1).filter((c$$1) => c$$1 !== "" || !!c$$1).concat(extra.classes).join(" ");
  let content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  const args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  const {
    children,
    attributes
  } = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  };
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  const {
    content,
    width,
    height,
    transform,
    title,
    extra,
    watchable = false
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  const styles2 = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  const styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  const val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  const {
    content,
    title,
    extra
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  const styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  const val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
var {
  styles: styles$1
} = namespace;
function asFoundIcon(icon2) {
  const width = icon2[0];
  const height = icon2[1];
  const [vectorData] = icon2.slice(4);
  let element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  let givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise((resolve, reject) => {
    if (givenPrefix === "fa") {
      const shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      const icon2 = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon2));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
var noop$1 = () => {
};
var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = 'FA "6.7.2"';
var begin = (name) => {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return () => end(name);
};
var end = (name) => {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
var noop$2 = () => {
};
function isWatched(node) {
  const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === "string";
}
function hasPrefixAndIcon(node) {
  const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  const icon2 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon2;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  const mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT2.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
  return DOCUMENT2.createElement(tag);
}
function convertSVG(abstractObj) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn = abstractObj.tag === "svg" ? createElementNS : createElement
  } = params;
  if (typeof abstractObj === "string") {
    return DOCUMENT2.createTextNode(abstractObj);
  }
  const tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  const children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  let comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
var mutators = {
  replace: function(mutation) {
    const node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach((abstract) => {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        let comment = DOCUMENT2.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function(mutation) {
    const node = mutation[0];
    const abstract = mutation[1];
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      const splitClasses = abstract[0].attributes.class.split(" ").reduce((acc, cls) => {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    const newInnerHTML = abstract.map((a) => toHtml(a)).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  const callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    let frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(() => {
      const mutator = getMutator();
      const mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  const {
    treeCallback = noop$2,
    nodeCallback = noop$2,
    pseudoElementsCallback = noop$2,
    observeMutationsRoot = DOCUMENT2
  } = options;
  mo = new MUTATION_OBSERVER((objects) => {
    if (disabled) return;
    const defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach((mutationRecord) => {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          const {
            prefix,
            iconName
          } = getCanonicalIcon(classArray(mutationRecord.target));
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}
function styleParser(node) {
  const style2 = node.getAttribute("style");
  let val = [];
  if (style2) {
    val = style2.split(";").reduce((acc, style3) => {
      const styles2 = style3.split(":");
      const prop = styles2[0];
      const value = styles2.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  const existingPrefix = node.getAttribute("data-prefix");
  const existingIconName = node.getAttribute("data-icon");
  const innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  let val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  const title = node.getAttribute("title");
  const titleId = node.getAttribute("data-fa-title-id");
  if (config.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  let parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  const {
    iconName,
    prefix,
    rest: extraClasses
  } = classParser(node);
  const extraAttributes = attributesParser(node);
  const pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  let extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute("title"),
    titleId: node.getAttribute("data-fa-title-id"),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
var {
  styles: styles$2
} = namespace;
function generateMutation(node) {
  const nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
function getKnownPrefixes() {
  return [...Ft, ...Ia];
}
function onTree(root) {
  let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  const htmlClassList = DOCUMENT2.documentElement.classList;
  const hclAdd = (suffix) => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const hclRemove = (suffix) => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const prefixes = config.autoFetchSvg ? getKnownPrefixes() : P.concat(Object.keys(styles$2));
  if (!prefixes.includes("fa")) {
    prefixes.push("fa");
  }
  const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map((p$$1) => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  let candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  const mark = perf.begin("onTree");
  const mutations = candidates.reduce((acc, node) => {
    try {
      const mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === "MissingIcon") {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise((resolve, reject) => {
    Promise.all(mutations).then((resolvedMutations) => {
      perform(resolvedMutations, () => {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function") callback();
        mark();
        resolve();
      });
    }).catch((e$$1) => {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then((mutation) => {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    let {
      mask
    } = params;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
var render = function(iconDefinition) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform = meaninglessTransform,
    symbol = false,
    mask = null,
    maskId = null,
    title = null,
    titleId = null,
    classes: classes10 = [],
    attributes = {},
    styles: styles2 = {}
  } = params;
  if (!iconDefinition) return;
  const {
    prefix,
    iconName,
    icon: icon2
  } = iconDefinition;
  return domVariants(_objectSpread2({
    type: "icon"
  }, iconDefinition), () => {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon2),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes: classes10
      }
    });
  });
};
var ReplaceElements = {
  mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      const {
        node = DOCUMENT2,
        callback = () => {
        }
      } = params;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      const {
        iconName,
        title,
        titleId,
        prefix,
        transform,
        symbol,
        mask,
        maskId,
        extra
      } = nodeMeta;
      return new Promise((resolve, reject) => {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then((_ref) => {
          let [main, mask2] = _ref;
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask: mask2
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref2) {
      let {
        children,
        attributes,
        main,
        transform,
        styles: styles2
      } = _ref2;
      const styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      let nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout() {
    return {
      layer(assembler) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: classes10 = []
        } = params;
        return domVariants({
          type: "layer"
        }, () => {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          let children = [];
          assembler((args) => {
            Array.isArray(args) ? args.map((a) => {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: "span",
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers"), ...classes10].join(" ")
            },
            children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout() {
    return {
      counter(content) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title = null,
          classes: classes10 = [],
          attributes = {},
          styles: styles2 = {}
        } = params;
        return domVariants({
          type: "counter",
          content
        }, () => {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes10]
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout() {
    return {
      text(content) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform = meaninglessTransform,
          title = null,
          classes: classes10 = [],
          attributes = {},
          styles: styles2 = {}
        } = params;
        return domVariants({
          type: "text",
          content
        }, () => {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes10]
            }
          });
        });
      }
    };
  },
  provides(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      const {
        title,
        transform,
        extra
      } = nodeMeta;
      let width = null;
      let height = null;
      if (IS_IE) {
        const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        const boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes["aria-hidden"] = "true";
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), lt), wa), Yt);
var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
  const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
  return acc;
}, {});
function hexValueFromContent(content) {
  const cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  const codePoint = codePointAt(cleaned, 0);
  const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function getPrefix(fontFamily, fontWeight) {
  const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
  const fontWeightInteger = parseInt(fontWeight);
  const fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise((resolve, reject) => {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    const children = toArray(node.children);
    const alreadyProcessedPseudoElement = children.filter((c$$1) => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
    const styles2 = WINDOW.getComputedStyle(node, position);
    const fontFamily = styles2.getPropertyValue("font-family");
    const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    const fontWeight = styles2.getPropertyValue("font-weight");
    const content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== "none" && content !== "") {
      const content2 = styles2.getPropertyValue("content");
      let prefix = getPrefix(fontFamily, fontWeight);
      const {
        value: hexValue,
        isSecondary
      } = hexValueFromContent(content2);
      const isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
      let iconName = byUnicode(prefix, hexValue);
      let iconIdentifier = iconName;
      if (isV4) {
        const iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        const meta = blankMeta();
        const {
          extra
        } = meta;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then((main) => {
          const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          const element = DOCUMENT2.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map((a$$1) => toHtml(a$$1)).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise((resolve, reject) => {
    const operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace);
    const end2 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(() => {
      end2();
      enableObservation();
      resolve();
    }).catch(() => {
      end2();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.pseudoElements2svg = function(params) {
      const {
        node = DOCUMENT2
      } = params;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto() {
        disconnect();
      },
      watch(params) {
        const {
          observeMutationsRoot
        } = params;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
var parseTransformString = (transformString) => {
  let transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce((acc, n) => {
    const parts = n.toLowerCase().split("-");
    const first = parts[0];
    let rest = parts.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case "grow":
        acc.size = acc.size + rest;
        break;
      case "shrink":
        acc.size = acc.size - rest;
        break;
      case "left":
        acc.x = acc.x - rest;
        break;
      case "right":
        acc.x = acc.x + rest;
        break;
      case "up":
        acc.y = acc.y - rest;
        break;
      case "down":
        acc.y = acc.y + rest;
        break;
      case "rotate":
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout() {
    return {
      parse: {
        transform: (transformString) => {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref) {
      let {
        main,
        transform,
        containerWidth,
        iconWidth
      } = _ref;
      const outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      const inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      const path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      const operations = {
        outer,
        inner,
        path
      };
      return {
        tag: "g",
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: "g",
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const maskData = node.getAttribute("data-fa-mask");
        const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map((i) => i.trim()));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.generateAbstractMask = function(_ref) {
      let {
        children,
        attributes,
        main,
        mask,
        maskId: explicitMaskId,
        transform
      } = _ref;
      const {
        width: mainWidth,
        icon: mainPath
      } = main;
      const {
        width: maskWidth,
        icon: maskPath
      } = mask;
      const trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      const maskRect = {
        tag: "rect",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: "white"
        })
      };
      const maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      const maskInnerGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      const maskOuterGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      const maskTag = {
        tag: "mask",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      const defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: "rect",
        attributes: _objectSpread2({
          fill: "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides(providers2) {
    let reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      const gChildren = [];
      const FILL = {
        fill: "currentColor"
      };
      const ANIMATION_BASE = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: "opacity"
      });
      const dot = {
        tag: "circle",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;1;1;0;1;"
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: reduceMotion ? [] : [{
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      });
      if (!reduceMotion) {
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        });
      }
      return {
        tag: "g",
        attributes: {
          "class": "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const symbolData = node.getAttribute("data-fa-symbol");
        const symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;

// node_modules/@fortawesome/angular-fontawesome/fesm2022/angular-fontawesome.mjs
var _c05 = ["*"];
var faWarnIfIconDefinitionMissing = (iconSpec) => {
  throw new Error(`Could not find icon with iconName=${iconSpec.iconName} and prefix=${iconSpec.prefix} in the icon library.`);
};
var faWarnIfIconSpecMissing = () => {
  throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.");
};
var isKnownRotateValue = (rotate) => rotate != null && (rotate === 90 || rotate === 180 || rotate === 270 || rotate === "90" || rotate === "180" || rotate === "270");
var faClassList = (props) => {
  const knownRotateValue = isKnownRotateValue(props.rotate);
  const classes10 = {
    [`fa-${props.animation}`]: props.animation != null && !props.animation.startsWith("spin"),
    "fa-spin": props.animation === "spin" || props.animation === "spin-reverse",
    "fa-spin-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-spin-reverse": props.animation === "spin-reverse" || props.animation === "spin-pulse-reverse",
    // According to https://fontawesome.com/docs/web/style/animate#spin fa-pulse
    // class is deprecated, remove the below line when Font Awesome 5 support
    // is dropped.
    "fa-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-fw": props.fixedWidth,
    "fa-border": props.border,
    "fa-inverse": props.inverse,
    "fa-layers-counter": props.counter,
    "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
    "fa-flip-vertical": props.flip === "vertical" || props.flip === "both",
    [`fa-${props.size}`]: props.size !== null,
    [`fa-rotate-${props.rotate}`]: knownRotateValue,
    "fa-rotate-by": props.rotate != null && !knownRotateValue,
    [`fa-pull-${props.pull}`]: props.pull !== null,
    [`fa-stack-${props.stackItemSize}`]: props.stackItemSize != null
  };
  return Object.keys(classes10).map((key) => classes10[key] ? key : null).filter((key) => key);
};
var cssInserted = /* @__PURE__ */ new WeakSet();
var autoCssId = "fa-auto-css";
function ensureCss2(document2, config2) {
  if (!config2.autoAddCss) {
    return;
  }
  if (cssInserted.has(document2)) {
    return;
  }
  if (document2.getElementById(autoCssId) != null) {
    config2.autoAddCss = false;
    cssInserted.add(document2);
    return;
  }
  const style2 = document2.createElement("style");
  style2.setAttribute("type", "text/css");
  style2.setAttribute("id", autoCssId);
  style2.innerHTML = dom$1.css();
  const headChildren = document2.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = child.nodeName.toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  document2.head.insertBefore(style2, beforeChild);
  config2.autoAddCss = false;
  cssInserted.add(document2);
}
var isIconLookup = (i) => i.prefix !== void 0 && i.iconName !== void 0;
var faNormalizeIconSpec = (iconSpec, defaultPrefix) => {
  if (isIconLookup(iconSpec)) {
    return iconSpec;
  }
  if (Array.isArray(iconSpec) && iconSpec.length === 2) {
    return {
      prefix: iconSpec[0],
      iconName: iconSpec[1]
    };
  }
  return {
    prefix: defaultPrefix,
    iconName: iconSpec
  };
};
var FaConfig = class _FaConfig {
  constructor() {
    this.defaultPrefix = "fas";
    this.fallbackIcon = null;
    this._autoAddCss = true;
  }
  /**
   * Automatically add Font Awesome styles to the document when icon is rendered.
   *
   * For the majority of the cases the automatically added CSS is sufficient,
   * please refer to the linked guide for more information on when to disable
   * this feature.
   *
   * @see {@link: https://github.com/FortAwesome/angular-fontawesome/blob/main/docs/guide/adding-css.md}
   * @default true
   */
  set autoAddCss(value) {
    config$1.autoAddCss = value;
    this._autoAddCss = value;
  }
  get autoAddCss() {
    return this._autoAddCss;
  }
  static {
    this.\u0275fac = function FaConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FaConfig,
      factory: _FaConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FaIconLibrary = class _FaIconLibrary {
  constructor() {
    this.definitions = {};
  }
  addIcons(...icons) {
    for (const icon2 of icons) {
      if (!(icon2.prefix in this.definitions)) {
        this.definitions[icon2.prefix] = {};
      }
      this.definitions[icon2.prefix][icon2.iconName] = icon2;
      for (const alias of icon2.icon[2]) {
        if (typeof alias === "string") {
          this.definitions[icon2.prefix][alias] = icon2;
        }
      }
    }
  }
  addIconPacks(...packs) {
    for (const pack of packs) {
      const icons = Object.keys(pack).map((key) => pack[key]);
      this.addIcons(...icons);
    }
  }
  getIconDefinition(prefix, name) {
    if (prefix in this.definitions && name in this.definitions[prefix]) {
      return this.definitions[prefix][name];
    }
    return null;
  }
  static {
    this.\u0275fac = function FaIconLibrary_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaIconLibrary)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FaIconLibrary,
      factory: _FaIconLibrary.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconLibrary, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FaStackItemSizeDirective = class _FaStackItemSizeDirective {
  constructor() {
    this.stackItemSize = "1x";
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.');
    }
  }
  static {
    this.\u0275fac = function FaStackItemSizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaStackItemSizeDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FaStackItemSizeDirective,
      selectors: [["fa-icon", "stackItemSize", ""], ["fa-duotone-icon", "stackItemSize", ""]],
      inputs: {
        stackItemSize: "stackItemSize",
        size: "size"
      },
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackItemSizeDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "fa-icon[stackItemSize],fa-duotone-icon[stackItemSize]"
    }]
  }], null, {
    stackItemSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var FaStackComponent = class _FaStackComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-stack");
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
  static {
    this.\u0275fac = function FaStackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaStackComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaStackComponent,
      selectors: [["fa-stack"]],
      inputs: {
        size: "size"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c05,
      decls: 1,
      vars: 0,
      template: function FaStackComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackComponent, [{
    type: Component,
    args: [{
      selector: "fa-stack",
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    size: [{
      type: Input
    }]
  });
})();
var FaIconComponent = class _FaIconComponent {
  constructor(sanitizer, config2, iconLibrary, stackItem, stack) {
    this.sanitizer = sanitizer;
    this.config = config2;
    this.iconLibrary = iconLibrary;
    this.stackItem = stackItem;
    this.document = inject(DOCUMENT);
    if (stack != null && stackItem == null) {
      console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.');
    }
  }
  ngOnChanges(changes) {
    if (this.icon == null && this.config.fallbackIcon == null) {
      faWarnIfIconSpecMissing();
      return;
    }
    if (changes) {
      const iconDefinition = this.findIconDefinition(this.icon ?? this.config.fallbackIcon);
      if (iconDefinition != null) {
        const params = this.buildParams();
        ensureCss2(this.document, this.config);
        const renderedIcon = icon(iconDefinition, params);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(renderedIcon.html.join("\n"));
      }
    }
  }
  /**
   * Programmatically trigger rendering of the icon.
   *
   * This method is useful, when creating {@link FaIconComponent} dynamically or
   * changing its inputs programmatically as in these cases icon won't be
   * re-rendered automatically.
   */
  render() {
    this.ngOnChanges({});
  }
  findIconDefinition(i) {
    const lookup = faNormalizeIconSpec(i, this.config.defaultPrefix);
    if ("icon" in lookup) {
      return lookup;
    }
    const definition = this.iconLibrary.getIconDefinition(lookup.prefix, lookup.iconName);
    if (definition != null) {
      return definition;
    }
    faWarnIfIconDefinitionMissing(lookup);
    return null;
  }
  buildParams() {
    const classOpts = {
      flip: this.flip,
      animation: this.animation,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth,
      stackItemSize: this.stackItem != null ? this.stackItem.stackItemSize : null
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    const styles2 = {};
    if (classOpts.rotate != null && !isKnownRotateValue(classOpts.rotate)) {
      styles2["--fa-rotate-angle"] = `${classOpts.rotate}`;
    }
    return {
      title: this.title,
      transform: parsedTransform,
      classes: faClassList(classOpts),
      mask: this.mask != null ? this.findIconDefinition(this.mask) : null,
      symbol: this.symbol,
      attributes: {
        role: this.a11yRole
      },
      styles: styles2
    };
  }
  static {
    this.\u0275fac = function FaIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaIconComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(FaConfig), \u0275\u0275directiveInject(FaIconLibrary), \u0275\u0275directiveInject(FaStackItemSizeDirective, 8), \u0275\u0275directiveInject(FaStackComponent, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaIconComponent,
      selectors: [["fa-icon"]],
      hostAttrs: [1, "ng-fa-icon"],
      hostVars: 2,
      hostBindings: function FaIconComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("innerHTML", ctx.renderedIconHTML, \u0275\u0275sanitizeHtml);
          \u0275\u0275attribute("title", ctx.title);
        }
      },
      inputs: {
        icon: "icon",
        title: "title",
        animation: "animation",
        mask: "mask",
        flip: "flip",
        size: "size",
        pull: "pull",
        border: "border",
        inverse: "inverse",
        symbol: "symbol",
        rotate: "rotate",
        fixedWidth: "fixedWidth",
        transform: "transform",
        a11yRole: "a11yRole"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 0,
      vars: 0,
      template: function FaIconComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-icon",
      template: ``,
      host: {
        class: "ng-fa-icon",
        "[attr.title]": "title"
      }
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: FaConfig
  }, {
    type: FaIconLibrary
  }, {
    type: FaStackItemSizeDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FaStackComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    symbol: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    a11yRole: [{
      type: Input
    }],
    renderedIconHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var FaDuotoneIconComponent = class _FaDuotoneIconComponent extends FaIconComponent {
  findIconDefinition(i) {
    const definition = super.findIconDefinition(i);
    if (definition != null && !Array.isArray(definition.icon[4])) {
      throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${definition.iconName}']"></fa-duotone-icon> or use: <fa-icon icon="${definition.iconName}"></fa-icon> instead.`);
    }
    return definition;
  }
  buildParams() {
    const params = super.buildParams();
    if (this.swapOpacity === true || this.swapOpacity === "true") {
      if (Array.isArray(params.classes)) {
        params.classes.push("fa-swap-opacity");
      } else if (typeof params.classes === "string") {
        params.classes = [params.classes, "fa-swap-opacity"];
      } else {
        params.classes = ["fa-swap-opacity"];
      }
    }
    if (params.styles == null) {
      params.styles = {};
    }
    if (this.primaryOpacity != null) {
      params.styles["--fa-primary-opacity"] = this.primaryOpacity.toString();
    }
    if (this.secondaryOpacity != null) {
      params.styles["--fa-secondary-opacity"] = this.secondaryOpacity.toString();
    }
    if (this.primaryColor != null) {
      params.styles["--fa-primary-color"] = this.primaryColor;
    }
    if (this.secondaryColor != null) {
      params.styles["--fa-secondary-color"] = this.secondaryColor;
    }
    return params;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275FaDuotoneIconComponent_BaseFactory;
      return function FaDuotoneIconComponent_Factory(__ngFactoryType__) {
        return (\u0275FaDuotoneIconComponent_BaseFactory || (\u0275FaDuotoneIconComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FaDuotoneIconComponent)))(__ngFactoryType__ || _FaDuotoneIconComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaDuotoneIconComponent,
      selectors: [["fa-duotone-icon"]],
      inputs: {
        swapOpacity: "swapOpacity",
        primaryOpacity: "primaryOpacity",
        secondaryOpacity: "secondaryOpacity",
        primaryColor: "primaryColor",
        secondaryColor: "secondaryColor"
      },
      features: [\u0275\u0275InheritDefinitionFeature],
      decls: 0,
      vars: 0,
      template: function FaDuotoneIconComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaDuotoneIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-duotone-icon",
      template: ``
    }]
  }], null, {
    swapOpacity: [{
      type: Input
    }],
    primaryOpacity: [{
      type: Input
    }],
    secondaryOpacity: [{
      type: Input
    }],
    primaryColor: [{
      type: Input
    }],
    secondaryColor: [{
      type: Input
    }]
  });
})();
var faWarnIfParentNotExist = (parent, parentName, childName) => {
  if (!parent) {
    throw new Error(`${childName} should be used as child of ${parentName} only.`);
  }
};
var FaLayersComponent = class _FaLayersComponent {
  constructor(renderer, elementRef, config2) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.config = config2;
    this.document = inject(DOCUMENT);
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-layers");
    ensureCss2(this.document, this.config);
    this.fixedWidth = typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth;
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
  static {
    this.\u0275fac = function FaLayersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaLayersComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FaConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaLayersComponent,
      selectors: [["fa-layers"]],
      hostVars: 2,
      hostBindings: function FaLayersComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("fa-fw", ctx.fixedWidth);
        }
      },
      inputs: {
        size: "size",
        fixedWidth: "fixedWidth"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c05,
      decls: 1,
      vars: 0,
      template: function FaLayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers",
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: FaConfig
  }], {
    size: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.fa-fw"]
    }]
  });
})();
var FaLayersCounterComponent = class _FaLayersCounterComponent {
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.document = inject(DOCUMENT);
    this.config = inject(FaConfig);
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  buildParams() {
    return {
      title: this.title,
      classes: this.position != null ? [`fa-layers-${this.position}`] : void 0
    };
  }
  updateContent(params) {
    ensureCss2(this.document, this.config);
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(counter(this.content || "", params).html.join(""));
  }
  static {
    this.\u0275fac = function FaLayersCounterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaLayersCounterComponent)(\u0275\u0275directiveInject(FaLayersComponent, 8), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaLayersCounterComponent,
      selectors: [["fa-layers-counter"]],
      hostAttrs: [1, "ng-fa-layers-counter"],
      hostVars: 1,
      hostBindings: function FaLayersCounterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("innerHTML", ctx.renderedHTML, \u0275\u0275sanitizeHtml);
        }
      },
      inputs: {
        content: "content",
        title: "title",
        position: "position"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 0,
      vars: 0,
      template: function FaLayersCounterComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersCounterComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-counter",
      template: "",
      host: {
        class: "ng-fa-layers-counter"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var FaLayersTextComponent = class _FaLayersTextComponent {
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.document = inject(DOCUMENT);
    this.config = inject(FaConfig);
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  /**
   * Updating params by component props.
   */
  buildParams() {
    const classOpts = {
      flip: this.flip,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: this.fixedWidth
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    const styles2 = {};
    if (classOpts.rotate != null && !isKnownRotateValue(classOpts.rotate)) {
      styles2["--fa-rotate-angle"] = `${classOpts.rotate}`;
    }
    return {
      transform: parsedTransform,
      classes: faClassList(classOpts),
      title: this.title,
      styles: styles2
    };
  }
  updateContent(params) {
    ensureCss2(this.document, this.config);
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(text(this.content || "", params).html.join("\n"));
  }
  static {
    this.\u0275fac = function FaLayersTextComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaLayersTextComponent)(\u0275\u0275directiveInject(FaLayersComponent, 8), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaLayersTextComponent,
      selectors: [["fa-layers-text"]],
      hostAttrs: [1, "ng-fa-layers-text"],
      hostVars: 1,
      hostBindings: function FaLayersTextComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("innerHTML", ctx.renderedHTML, \u0275\u0275sanitizeHtml);
        }
      },
      inputs: {
        content: "content",
        title: "title",
        flip: "flip",
        size: "size",
        pull: "pull",
        border: "border",
        inverse: "inverse",
        rotate: "rotate",
        fixedWidth: "fixedWidth",
        transform: "transform"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 0,
      vars: 0,
      template: function FaLayersTextComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersTextComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-text",
      template: "",
      host: {
        class: "ng-fa-layers-text"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var FontAwesomeModule = class _FontAwesomeModule {
  static {
    this.\u0275fac = function FontAwesomeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FontAwesomeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FontAwesomeModule,
      imports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
      exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FontAwesomeModule, [{
    type: NgModule,
    args: [{
      imports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
      exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective]
    }]
  }], null, null);
})();

// node_modules/@fortawesome/free-regular-svg-icons/index.mjs
var faFilePowerpoint = {
  prefix: "far",
  iconName: "file-powerpoint",
  icon: [384, 512, [], "f1c4", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm72 208c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z"]
};

// src/app/services/translation.service.ts
var TranslationService = class _TranslationService {
  http;
  apiKeyService;
  openRouterApiUrl = "https://openrouter.ai/api/v1/chat/completions";
  docxPrompt = `You are a document formatting assistant. 
You will be provided two inputs in HTML format:
1. An English HTML document that contains unique identifiers for each text segment (e.g., <p id="P1">, <p id="P2">).
2. A block of French text that is the translation of the English document.

Your task: return the French document in HTML format such that:
1. All English text is replaced with its correct French translation.
2. The HTML structure (tags, attributes, order) remains unchanged.
3. Each text element retains its original unique ID.
Do not add extra commentary or leftover English text.`;
  pptxPrompt = `You are a presentation formatting assistant. 
Inputs:
1. English HTML containing IDs like S3_T1, S3_T2.
2. A block of French text.

Your task: 
1. Replace the English text with correct French translation.
2. Preserve the same HTML structure and unique IDs.
3. If the French text is one paragraph but the English input is split into multiple segments, split it appropriately.
Return only the French HTML document.`;
  constructor(http, apiKeyService) {
    this.http = http;
    this.apiKeyService = apiKeyService;
  }
  /**
   * Aligns French text with the English HTML structure.
   */
  alignTranslation(englishHtml, frenchText, englishFile) {
    return __async(this, null, function* () {
      englishHtml = englishHtml.replace(/<img[^>]*>/g, "");
      const fileExtension = englishFile?.name.split(".").pop()?.toLowerCase();
      const systemPrompt = fileExtension === "pptx" ? this.pptxPrompt : this.docxPrompt;
      const combinedPrompt = `${systemPrompt}

English Document (HTML):
${englishHtml}

French Text:
${frenchText}

Return the French document in HTML format that exactly follows the structure of the English document.`;
      const requestJson = [
        { role: "system", content: systemPrompt },
        { role: "user", content: combinedPrompt }
      ];
      const models = [
        "meta-llama/llama-3.3-70b-instruct:free",
        "google/gemini-2.0-flash-exp:free",
        "google/gemini-exp-1206:free",
        "cognitivecomputations/dolphin3.0-mistral-24b:free",
        "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
        "nvidia/llama-3.1-nemotron-70b-instruct:free",
        "deepseek/deepseek-r1:free"
      ];
      let finalResponse = null;
      for (const model of models) {
        const aiResponse = yield this.getORData(model, requestJson, 0);
        if (aiResponse?.choices?.[0]?.message?.content) {
          finalResponse = this.removeCodeFences(aiResponse.choices[0].message.content);
          console.log("AI response received.");
          break;
        }
      }
      return finalResponse;
    });
  }
  /**
   * Fetches data from OpenRouter API
   */
  getORData(model, requestJson, temperature = 0) {
    return __async(this, null, function* () {
      const apiKey = this.apiKeyService.getCurrentKey();
      if (!apiKey)
        throw new Error("API key is required.");
      const headers = new HttpHeaders({
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Title": "Content Assistant"
        // optional but nice
      });
      const payload = { model, messages: requestJson, temperature };
      try {
        const resp = yield this.http.post(this.openRouterApiUrl, payload, {
          headers,
          responseType: "text",
          // <-- key change
          observe: "response"
        }).toPromise();
        const ct = resp?.headers.get("content-type") || "";
        if (ct.includes("application/json")) {
          return JSON.parse(resp.body);
        } else {
          console.error(`OpenRouter non-JSON (status ${resp?.status}, ${ct}):
`, (resp?.body || "").slice(0, 500));
          return void 0;
        }
      } catch (err) {
        const status = err?.status;
        const bodySnippet = typeof err?.error === "string" ? err.error.slice(0, 500) : JSON.stringify(err?.error);
        console.error(`OpenRouter HTTP error (model: ${model}) status=${status}: ${bodySnippet}`);
        return void 0;
      }
    });
  }
  /**
   * Removes ``` code fences from AI output
   */
  removeCodeFences(str) {
    str = str.replace(/^```.*\n/, "");
    str = str.replace(/\n\s*```+\s*$/, "");
    return str.trim();
  }
  /**
   * Builds a mapping of paragraph IDs to French text from HTML.
   */
  buildFrenchTextMap(finalFrenchHtml) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = finalFrenchHtml;
    const frenchMap = {};
    tempDiv.querySelectorAll("p[id]").forEach((p2) => {
      const id = p2.getAttribute("id");
      const text2 = p2.textContent?.trim() || "";
      if (text2)
        frenchMap[id] = text2;
    });
    return frenchMap;
  }
  static \u0275fac = function TranslationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslationService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ApiKeyService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationService, factory: _TranslationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: ApiKeyService }], null);
})();

// src/app/services/file-parse.service.ts
var FileParseService = class _FileParseService {
  extractDocxParagraphs(arrayBuffer) {
    return __async(this, null, function* () {
      const JSZipModule = yield import("./chunk-VT4DGONN.js");
      const zip = yield JSZipModule.default.loadAsync(arrayBuffer);
      const xmlStr = yield zip.file("word/document.xml").async("string");
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlStr, "application/xml");
      const paras = Array.from(xmlDoc.getElementsByTagName("w:p"));
      const fullText = [];
      paras.forEach((p2) => {
        const texts = Array.from(p2.getElementsByTagName("w:t")).map((t2) => t2.textContent || "").join("");
        if (texts.trim())
          fullText.push(texts.trim());
      });
      return fullText.join("\n\n");
    });
  }
  extractPptxText(arrayBuffer) {
    return __async(this, null, function* () {
      const JSZipModule = yield import("./chunk-VT4DGONN.js");
      const zip = yield JSZipModule.default.loadAsync(arrayBuffer);
      const slideEntries = Object.keys(zip.files).filter((f) => /^ppt\/slides\/slide\d+\.xml$/i.test(f));
      const allParagraphs = [];
      for (const entry of slideEntries) {
        const xmlStr = yield zip.file(entry).async("string");
        const doc = new DOMParser().parseFromString(xmlStr, "application/xml");
        const slideNumber = entry.match(/slide(\d+)\.xml$/i)[1];
        const paraNodes = Array.from(doc.getElementsByTagName("a:p"));
        for (const para of paraNodes) {
          let paragraphText = "";
          const textNodes = Array.from(para.getElementsByTagName("a:t"));
          for (const node of textNodes) {
            const raw = node.textContent?.trim() ?? "";
            if (raw === slideNumber)
              continue;
            let anc = node.parentNode;
            let skip = false;
            while (anc) {
              if (anc instanceof Element && anc.localName === "fld" && anc.getAttribute("type") === "slidenum") {
                skip = true;
                break;
              }
              anc = anc.parentNode;
            }
            if (skip)
              continue;
            paragraphText += node.textContent ?? "";
          }
          if (paragraphText.trim()) {
            allParagraphs.push(paragraphText.trim());
          }
        }
      }
      return allParagraphs.join("\n\n");
    });
  }
  extractDocxTextXmlWithId(arrayBuffer) {
    return __async(this, null, function* () {
      const JSZipModule = yield import("./chunk-VT4DGONN.js");
      const zip = yield JSZipModule.default.loadAsync(arrayBuffer);
      const xml = yield zip.file("word/document.xml").async("string");
      const doc = new DOMParser().parseFromString(xml, "application/xml");
      const paras = Array.from(doc.getElementsByTagName("w:p"));
      const out = [];
      let pCount = 1;
      for (const p2 of paras) {
        const texts = Array.from(p2.getElementsByTagName("w:t")).map((t2) => (t2.textContent || "").trim());
        if (!texts.join("").trim()) {
          pCount++;
          continue;
        }
        let rCount = 1;
        for (const t2 of texts) {
          if (t2)
            out.push({ id: `P${pCount}_R${rCount}`, text: t2 });
          rCount++;
        }
        pCount++;
      }
      return out;
    });
  }
  extractPptxTextXmlWithId(arrayBuffer) {
    return __async(this, null, function* () {
      const JSZipModule = yield import("./chunk-VT4DGONN.js");
      const zip = yield JSZipModule.default.loadAsync(arrayBuffer);
      const slides = Object.keys(zip.files).filter((f) => /^ppt\/slides\/slide(\d+)\.xml$/.test(f));
      const out = [];
      for (const f of slides) {
        const slideNum = f.match(/\d+/)[0];
        const xml = yield zip.file(f).async("string");
        const doc = new DOMParser().parseFromString(xml, "application/xml");
        const runs = Array.from(doc.getElementsByTagName("a:r")).filter((r2) => r2.getElementsByTagName("a:t").length);
        runs.forEach((r2, idx) => {
          const t2 = r2.getElementsByTagName("a:t")[0].textContent || "";
          out.push({ id: `S${slideNum}_T${idx + 1}`, text: t2.trim() });
        });
      }
      return out;
    });
  }
  static \u0275fac = function FileParseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileParseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileParseService, factory: _FileParseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileParseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/views/translation-assistant/translation-assistant.component.ts
var _c06 = (a0, a1) => ({ "pi-plus": a0, "pi-minus": a1 });
function TranslationAssistantComponent_ng_container_12_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function TranslationAssistantComponent_ng_container_12_fa_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 19);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r2.faFilePowerpoint);
  }
}
function TranslationAssistantComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 15);
    \u0275\u0275template(2, TranslationAssistantComponent_ng_container_12_i_2_Template, 1, 0, "i", 16)(3, TranslationAssistantComponent_ng_container_12_fa_icon_3_Template, 1, 1, "fa-icon", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isDocx(ctx_r2.selectedFile));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isPptx(ctx_r2.selectedFile));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedFile.name, " ");
  }
}
function TranslationAssistantComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 20);
    \u0275\u0275elementStart(1, "p", 21);
    \u0275\u0275text(2, " Drag and drop .docx or .pptx source language file here. ");
    \u0275\u0275elementEnd();
  }
}
function TranslationAssistantComponent_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.previewText);
  }
}
function TranslationAssistantComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275listener("click", function TranslationAssistantComponent_div_17_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isExpanded = !ctx_r2.isExpanded);
    });
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275element(4, "i", 26);
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6, "Preview source language file");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function TranslationAssistantComponent_div_17_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyAll($event));
    });
    \u0275\u0275element(8, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, TranslationAssistantComponent_div_17_div_9_Template, 3, 1, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c06, !ctx_r2.isExpanded, ctx_r2.isExpanded));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.isExpanded);
  }
}
function TranslationAssistantComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "p-card")(2, "h2", 33);
    \u0275\u0275text(3, "Paste target language content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Paste the full translation of the uploaded source content into the box below. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function TranslationAssistantComponent_div_18_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.frenchText, $event) || (ctx_r2.frenchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "button", 35);
    \u0275\u0275listener("click", function TranslationAssistantComponent_div_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFormatTargetLanguageContent());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.frenchText);
  }
}
function TranslationAssistantComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "p-progressSpinner", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3, "Generating files...");
    \u0275\u0275elementEnd()();
  }
}
function TranslationAssistantComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "p-card")(2, "h2", 33);
    \u0275\u0275text(3, "Formatting complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " The translated file has been formatted to match the original layout and is ready for download. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "button", 39);
    \u0275\u0275listener("click", function TranslationAssistantComponent_div_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownloadFile());
    });
    \u0275\u0275elementEnd()()()();
  }
}
var TranslationAssistantComponent = class _TranslationAssistantComponent {
  apiKeyService;
  translationService;
  router;
  route;
  parseSrv;
  isExpanded = false;
  isDragging = false;
  selectedFile = null;
  previewText = "";
  previewVisible = false;
  showSecondUpload = false;
  showDownloadSection = false;
  isProcessing = false;
  frenchText = "";
  englishHtmlStored = "";
  finalFrenchHtml = "";
  sourceError = "";
  faFilePowerpoint = faFilePowerpoint;
  constructor(apiKeyService, translationService, router, route, parseSrv) {
    this.apiKeyService = apiKeyService;
    this.translationService = translationService;
    this.router = router;
    this.route = route;
    this.parseSrv = parseSrv;
  }
  onClear() {
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => this.router.navigate([this.router.url]));
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const apiKey = params["key"];
      if (apiKey) {
        this.apiKeyService.setKey(apiKey);
      }
    });
  }
  onFileSelected(event) {
    this.previewText = "";
    this.showSecondUpload = false;
    this.sourceError = "";
    const input = event.target;
    this.selectedFile = input.files?.[0] ?? null;
    if (this.selectedFile) {
      this.buildEnglishHtmlStored(this.selectedFile).catch(console.error);
    }
  }
  isDocx(file) {
    return file.name.toLowerCase().endsWith(".docx");
  }
  isPptx(file) {
    return file.name.toLowerCase().endsWith(".pptx");
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files.length) {
      const droppedFile = event.dataTransfer.files[0];
      if (droppedFile.name.endsWith(".docx") || droppedFile.name.endsWith(".pptx")) {
        this.selectedFile = droppedFile;
        this.previewText = "";
        this.showSecondUpload = false;
        this.sourceError = "";
        this.buildEnglishHtmlStored(this.selectedFile).catch(console.error);
        this.previewSource();
      } else {
        this.sourceError = "Only .docx or .pptx files are supported.";
      }
    }
  }
  previewSource() {
    return __async(this, null, function* () {
      if (!this.selectedFile) {
        this.sourceError = "Please select a file first.";
        return;
      }
      const buf = yield this.selectedFile.arrayBuffer();
      const ext = this.selectedFile.name.split(".").pop()?.toLowerCase();
      try {
        if (ext === "docx") {
          this.previewText = yield this.parseSrv.extractDocxParagraphs(buf);
        } else if (ext === "pptx") {
          this.previewText = yield this.parseSrv.extractPptxText(buf);
        } else {
          this.sourceError = "Only .docx or .pptx files are supported.";
        }
        this.showSecondUpload = true;
      } catch (e) {
        console.error(e);
        this.sourceError = "Failed to extract text for preview.";
      }
    });
  }
  copyAll(event) {
    event.stopPropagation();
    const textToCopy = this.previewText.trim();
    if (!textToCopy) {
      alert("There is no text to copy!");
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).catch((err) => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy text.");
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
        alert("Failed to copy text.");
      }
      document.body.removeChild(textarea);
    }
  }
  onFormatTargetLanguageContent() {
    return __async(this, null, function* () {
      if (!this.frenchText.trim()) {
        alert("Please paste your translation first.");
        return;
      }
      this.isProcessing = true;
      this.showDownloadSection = false;
      try {
        const formattedHtml = yield this.translationService.alignTranslation(this.englishHtmlStored, this.frenchText, this.selectedFile);
        if (!formattedHtml) {
          alert("Formatting failed. No response from API.");
          return;
        }
        this.finalFrenchHtml = formattedHtml;
        console.log("Final French HTML:", this.finalFrenchHtml);
        this.showDownloadSection = true;
      } catch (error) {
        console.error("Error during formatting:", error);
        alert("An error occurred while formatting.");
      } finally {
        this.isProcessing = false;
      }
    });
  }
  onDownloadFile() {
    return __async(this, null, function* () {
      if (!this.finalFrenchHtml || !this.finalFrenchHtml.trim()) {
        alert("No formatted French document available.");
        return;
      }
      const fileExtension = this.selectedFile?.name.split(".").pop()?.toLowerCase();
      let mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      if (fileExtension === "pptx") {
        mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
      }
      try {
        const arrayBuffer = yield this.selectedFile?.arrayBuffer();
        if (!arrayBuffer) {
          throw new Error("Failed to read the source file.");
        }
        const JSZipModule = yield import("./chunk-VT4DGONN.js");
        const zip = yield JSZipModule.default.loadAsync(arrayBuffer);
        if (fileExtension === "docx") {
          const docXml = yield zip.file("word/document.xml")?.async("string");
          if (!docXml)
            throw new Error("Missing document.xml in DOCX file.");
          const rawMapping = yield this.extractDocxTextXmlWithId(arrayBuffer);
          const aggregatedMapping = this.aggregateDocxMapping(rawMapping);
          const updatedDocXml = this.conversionDocxXmlModified(docXml, this.finalFrenchHtml, aggregatedMapping);
          zip.file("word/document.xml", updatedDocXml);
        } else if (fileExtension === "pptx") {
          const slideRegex = /^ppt\/slides\/slide(\d+)\.xml$/i;
          for (const fileName of Object.keys(zip.files)) {
            const match = slideRegex.exec(fileName);
            if (match) {
              const slideNumber = match[1];
              const slideXml = yield zip.file(fileName)?.async("string");
              if (slideXml) {
                const updatedSlideXml = this.conversionPptxXml(slideXml, this.finalFrenchHtml, slideNumber);
                zip.file(fileName, updatedSlideXml);
              }
            }
          }
        }
        const generatedBlob = yield zip.generateAsync({ type: "blob", mimeType });
        const baseFileName = this.selectedFile?.name.split(".").slice(0, -1).join(".") || "translated-file";
        const modifiedFileName = `${baseFileName}-FR.${fileExtension}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(generatedBlob);
        downloadLink.download = modifiedFileName;
        downloadLink.click();
        URL.revokeObjectURL(downloadLink.href);
      } catch (error) {
        console.error("Error generating download file:", error);
        alert("Failed to generate the translated file.");
      }
    });
  }
  extractDocxTextXmlWithId(arrayBuffer) {
    return __async(this, null, function* () {
      const JSZipModule = yield import("./chunk-VT4DGONN.js");
      const zip = yield JSZipModule.default.loadAsync(arrayBuffer);
      const docXmlStr = yield zip.file("word/document.xml")?.async("string");
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(docXmlStr, "application/xml");
      const paragraphs = xmlDoc.getElementsByTagName("w:p");
      const textElements = [];
      let paragraphCounter = 1;
      for (const paragraph of paragraphs) {
        const runElements = paragraph.getElementsByTagName("w:r");
        if (runElements.length === 0)
          continue;
        let runCounter = 1;
        for (const run of runElements) {
          const textNodes = run.getElementsByTagName("w:t");
          for (const textNode of textNodes) {
            const id = `P${paragraphCounter}_R${runCounter++}`;
            textElements.push({ id, text: textNode.textContent || "" });
          }
        }
        paragraphCounter++;
      }
      return textElements;
    });
  }
  aggregateDocxMapping(mapping) {
    const aggregated = {};
    mapping.forEach((item) => {
      const paraId = item.id.split("_")[0];
      if (!aggregated[paraId]) {
        aggregated[paraId] = { id: paraId, texts: [] };
      }
      aggregated[paraId].texts.push(item.text);
    });
    return Object.values(aggregated).map((entry) => {
      let combined = entry.texts.join("").replace(/\s+/g, " ").trim();
      return { id: entry.id, text: combined };
    });
  }
  buildEnglishHtmlStored(file) {
    return __async(this, null, function* () {
      const buf = yield file.arrayBuffer();
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (ext === "docx") {
        const rawMapping = yield this.extractDocxTextXmlWithId(buf);
        const aggregatedMapping = this.aggregateDocxMapping(rawMapping);
        this.englishHtmlStored = aggregatedMapping.map((item) => `<p id="${item.id}">${item.text}</p>`).join("");
      } else if (ext === "pptx") {
        const rawMapping = yield this.parseSrv.extractPptxTextXmlWithId(buf);
        this.englishHtmlStored = rawMapping.map((item) => `<p id="${item.id}">${item.text}</p>`).join("");
      } else {
        this.englishHtmlStored = "";
      }
      console.log("englishHtmlStored sample:", this.englishHtmlStored.slice(0, 200));
    });
  }
  conversionDocxXmlModified(originalXml, finalFrenchHtml, aggregatedMapping) {
    const frenchMap = this.buildFrenchTextMap(finalFrenchHtml);
    const parser = new DOMParser();
    const serializer = new XMLSerializer();
    const xmlDoc = parser.parseFromString(originalXml, "application/xml");
    const paragraphs = xmlDoc.getElementsByTagName("w:p");
    let mappingIndex = 0;
    for (const p2 of paragraphs) {
      if (mappingIndex >= aggregatedMapping.length)
        break;
      const tElements = p2.getElementsByTagName("w:t");
      if (tElements.length > 0 && tElements[0].textContent?.trim()) {
        const key = aggregatedMapping[mappingIndex].id;
        if (frenchMap[key]) {
          tElements[0].textContent = frenchMap[key];
          const firstT = tElements[0];
          if (!firstT.getAttribute("xml:space")) {
            firstT.setAttribute("xml:space", "preserve");
          }
          for (let j = 1; j < tElements.length; j++) {
            tElements[j].textContent = "";
          }
        }
        mappingIndex++;
      }
    }
    return serializer.serializeToString(xmlDoc);
  }
  conversionPptxXml(originalXml, finalFrenchHtml, slideNumber) {
    const frenchMap = this.buildFrenchTextMap(finalFrenchHtml);
    const memoryCache = {};
    let runIndex = 1;
    return originalXml.replace(/(<a:r>[\s\S]*?<a:t>)([\s\S]*?)(<\/a:t>[\s\S]*?<\/a:r>)/g, (match, prefix, origText, suffix) => {
      const key = `S${slideNumber}_T${runIndex++}`;
      const origTrim = (origText || "").trim();
      const candidateRaw = frenchMap[key];
      let newText = "";
      if (candidateRaw !== void 0) {
        const candidate = candidateRaw.trim();
        newText = candidate;
        if (origTrim && candidate !== origTrim) {
          memoryCache[origTrim] = candidate;
        }
      } else if (memoryCache[origTrim]) {
        newText = memoryCache[origTrim];
      } else if (/^\s*[\d.,-]+\s*$/.test(origTrim)) {
        newText = origTrim;
      } else {
        newText = "";
      }
      if (newText && /<a:rPr[^>]*\sb="1"/.test(prefix)) {
        let t2 = newText.trim();
        const wordCount = t2.split(/\s+/).length;
        const isHeading = wordCount > 2;
        if (isHeading) {
          if (!t2.endsWith(" "))
            t2 += " ";
        } else {
          if (!t2.startsWith(" "))
            t2 = " " + t2;
          if (!t2.endsWith(" "))
            t2 += " ";
        }
        newText = t2;
      }
      return prefix + this.escapeXml(newText) + suffix;
    });
  }
  buildFrenchTextMap(finalFrenchHtml) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = finalFrenchHtml;
    const paragraphs = tempDiv.querySelectorAll("p[id]");
    const map2 = {};
    paragraphs.forEach((p2) => {
      const id = p2.getAttribute("id");
      if (id)
        map2[id] = p2.textContent?.trim() || "";
    });
    return map2;
  }
  escapeXml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  static \u0275fac = function TranslationAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslationAssistantComponent)(\u0275\u0275directiveInject(ApiKeyService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FileParseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TranslationAssistantComponent, selectors: [["app-translation-assistant"]], decls: 21, vars: 7, consts: [["fileInput", ""], ["dragArea", ""], [1, "p-mb-3"], [1, "p-text-bold"], [1, "surface-100", "border-round", "shadow-3", "p-4", "max-w-3xl", "mx-auto"], [1, "p-mb-4"], [1, "p-m-0", "p-text-bold", "p-text-2xl", 2, "color", "black"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "p-3", "border-dashed", "border-round", "border-200", "surface-100", "hover:surface-200", "hover:border-primary-400", "transition-colors", "transition-duration-300", "cursor-pointer", "w-full", "max-w-30rem", "min-h-12rem", 3, "click", "dragover", "dragleave", "drop"], ["type", "file", "accept", ".docx,.pptx", 2, "display", "none", 3, "change"], [4, "ngIf", "ngIfElse"], [1, "flex", "gap-2", "mt-3"], ["pButton", "", "type", "button", "label", "Upload file", "icon", "pi pi-upload", 1, "p-button", "p-component", "p-button-primary", 3, "click", "disabled"], ["class", "mt-3", 4, "ngIf"], ["class", "surface-100 border-round shadow-3", "style", "border: 2px solid #00000000; padding: 1rem", 4, "ngIf"], ["class", "p-mt-4 text-center", 4, "ngIf"], [1, "text-xl", "text-center"], ["class", "pi pi-file-word text-blue-500 text-2xl mr-1", 4, "ngIf"], ["class", "text-orange-500 text-2xl mr-1", 3, "icon", 4, "ngIf"], [1, "pi", "pi-file-word", "text-blue-500", "text-2xl", "mr-1"], [1, "text-orange-500", "text-2xl", "mr-1", 3, "icon"], [1, "pi", "pi-upload", "border-2", "border-circle", "border-300", "p-3", "text-3xl", "text-color-secondary", "mb-2", "hover:bg-primary", "hover:text-white", "transition-colors", "transition-duration-300"], [1, "m-0", "text-center", "text-sm"], [1, "mt-3"], [1, "p-panel", "p-component", "border-1", "border-round", "surface-100", 2, "border-color", "#00000023", "font-size", "1rem", "font-family", '"Segoe UI", Roboto, sans-serif'], [1, "p-panel-header", "d-flex", "justify-content-between", "align-items-center", "cursor-pointer", 2, "height", "4rem", "padding", "0 1rem", "display", "flex", "font-size", "1rem", "justify-content", "space-between", "align-items", "center", "flex-wrap", "nowrap", "gap", "0.5rem", "width", "100%", 3, "click"], [1, "d-flex", "align-items-center"], [1, "pi", 2, "margin-right", "0.5rem", 3, "ngClass"], [1, "p-panel-title", "font-semibold", 2, "color", "black"], ["pButton", "", "type", "button", "title", "Copy All", 1, "p-button-text", "p-button-icon-only", "flex-shrink-0", 2, "width", "3rem", "height", "3rem", 3, "click"], [1, "pi", "pi-copy", 2, "font-size", "1.4rem"], ["class", "p-panel-content p-mt-2", "style", "\n            background-color: white;\n            padding: 1rem;\n            border-top: 1px solid #ccc;\n          ", 4, "ngIf"], [1, "p-panel-content", "p-mt-2", 2, "background-color", "white", "padding", "1rem", "border-top", "1px solid #ccc"], [1, "surface-100", "border-round", "shadow-3", 2, "border", "2px solid #00000000", "padding", "1rem"], [1, "p-mb-3", 2, "color", "black"], ["pInputTextarea", "", "rows", "15", "cols", "70", "placeholder", "", 1, "p-inputtext", "p-mb-3", "w-full", 2, "border-color", "#00000052", "min-height", "10rem", "resize", "vertical text", "font-family", '"Segoe UI", Roboto, sans-serif', "font-size", "1rem", "color", "#000000be", 3, "ngModelChange", "ngModel"], ["pButton", "", "type", "button", "label", "Format target language content", "icon", "pi pi-align-left", 1, "p-button-primary", 3, "click"], [1, "p-mt-4", "text-center"], ["styleClass", "p-mt-3"], [1, "p-mt-2", "font-bold"], ["pButton", "", "type", "button", "label", "Download file", "icon", "pi pi-download", 1, "p-button-primary", 3, "click"]], template: function TranslationAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
      \u0275\u0275text(2, "Translation Assistant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 4)(4, "p-card", 5)(5, "h2", 6);
      \u0275\u0275text(6, " Upload source language file ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " Please upload a Word (.docx) or PowerPoint (.pptx) file containing your source language content. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275listener("click", function TranslationAssistantComponent_Template_div_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(fileInput_r2.click());
      })("dragover", function TranslationAssistantComponent_Template_div_dragover_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragOver($event));
      })("dragleave", function TranslationAssistantComponent_Template_div_dragleave_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragLeave($event));
      })("drop", function TranslationAssistantComponent_Template_div_drop_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      });
      \u0275\u0275elementStart(10, "input", 8, 0);
      \u0275\u0275listener("change", function TranslationAssistantComponent_Template_input_change_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, TranslationAssistantComponent_ng_container_12_Template, 5, 3, "ng-container", 9)(13, TranslationAssistantComponent_ng_template_13_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function TranslationAssistantComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.previewSource());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, TranslationAssistantComponent_div_17_Template, 10, 5, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, TranslationAssistantComponent_div_18_Template, 9, 1, "div", 13)(19, TranslationAssistantComponent_div_19_Template, 4, 0, "div", 14)(20, TranslationAssistantComponent_div_20_Template, 8, 0, "div", 13);
    }
    if (rf & 2) {
      const dragArea_r7 = \u0275\u0275reference(14);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.selectedFile)("ngIfElse", dragArea_r7);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewText);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSecondUpload);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isProcessing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDownloadSection);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    RouterModule,
    ButtonModule,
    ButtonDirective,
    CardModule,
    Card,
    PanelModule,
    MessageModule,
    FileUploadModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ProgressSpinnerModule,
    ProgressSpinner,
    FontAwesomeModule,
    FaIconComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslationAssistantComponent, [{
    type: Component,
    args: [{ selector: "app-translation-assistant", imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      PanelModule,
      MessageModule,
      FileUploadModule,
      FormsModule,
      ProgressSpinnerModule,
      FontAwesomeModule
    ], template: `<div class="p-mb-3">\r
  <h1 class="p-text-bold">Translation Assistant</h1>\r
</div>\r
\r
<div class="surface-100 border-round shadow-3 p-4 max-w-3xl mx-auto">\r
  <p-card class="p-mb-4">\r
    <h2 class="p-m-0 p-text-bold p-text-2xl" style="color: black">\r
      Upload source language file\r
    </h2>\r
\r
    <p>\r
      Please upload a Word (.docx) or PowerPoint (.pptx) file containing your\r
      source language content.\r
    </p>\r
\r
    <!-- Upload Section -->\r
    <div\r
      class="flex flex-column align-items-center justify-content-center p-3 border-dashed border-round border-200 surface-100 hover:surface-200 hover:border-primary-400 transition-colors transition-duration-300 cursor-pointer w-full max-w-30rem min-h-12rem"\r
      (click)="fileInput.click()"\r
      (dragover)="onDragOver($event)"\r
      (dragleave)="onDragLeave($event)"\r
      (drop)="onDrop($event)"\r
    >\r
      <input\r
        type="file"\r
        accept=".docx,.pptx"\r
        #fileInput\r
        style="display: none"\r
        (change)="onFileSelected($event)"\r
      />\r
      <ng-container *ngIf="selectedFile; else dragArea">\r
        <p class="text-xl text-center">\r
          <i\r
            *ngIf="isDocx(selectedFile)"\r
            class="pi pi-file-word text-blue-500 text-2xl mr-1"\r
          ></i>\r
          <fa-icon\r
            *ngIf="isPptx(selectedFile)"\r
            [icon]="faFilePowerpoint"\r
            class="text-orange-500 text-2xl mr-1"\r
          ></fa-icon>\r
\r
          {{ selectedFile.name }}\r
        </p>\r
      </ng-container>\r
      <ng-template #dragArea>\r
        <i\r
          class="pi pi-upload border-2 border-circle border-300 p-3 text-3xl text-color-secondary mb-2 hover:bg-primary hover:text-white transition-colors transition-duration-300"\r
        ></i>\r
        <p class="m-0 text-center text-sm">\r
          Drag and drop .docx or .pptx source language file here.\r
        </p>\r
      </ng-template>\r
    </div>\r
\r
    <div class="flex gap-2 mt-3">\r
      <button\r
        pButton\r
        type="button"\r
        label="Upload file"\r
        icon="pi pi-upload"\r
        class="p-button p-component p-button-primary"\r
        [disabled]="!selectedFile"\r
        (click)="previewSource()"\r
      ></button>\r
    </div>\r
\r
    <!-- Preview Panel -->\r
    <div *ngIf="previewText" class="mt-3">\r
      <div\r
        class="p-panel p-component border-1 border-round surface-100"\r
        style="\r
          border-color: #00000023;\r
          font-size: 1rem;\r
          font-family: &quot;Segoe UI&quot;, Roboto, sans-serif;\r
        "\r
      >\r
        <div\r
          class="p-panel-header d-flex justify-content-between align-items-center cursor-pointer"\r
          style="\r
            height: 4rem;\r
            padding: 0 1rem;\r
            display: flex;\r
            font-size: 1rem;\r
            justify-content: space-between;\r
            align-items: center;\r
            flex-wrap: nowrap;\r
            gap: 0.5rem;\r
            width: 100%;\r
          "\r
          (click)="isExpanded = !isExpanded"\r
        >\r
          <div class="d-flex align-items-center">\r
            <i\r
              class="pi"\r
              [ngClass]="{\r
                'pi-plus': !isExpanded,\r
                'pi-minus': isExpanded,\r
              }"\r
              style="margin-right: 0.5rem"\r
            ></i>\r
            <span class="p-panel-title font-semibold" style="color: black"\r
              >Preview source language file</span\r
            >\r
          </div>\r
\r
          <button\r
            pButton\r
            type="button"\r
            class="p-button-text p-button-icon-only flex-shrink-0"\r
            title="Copy All"\r
            (click)="copyAll($event)"\r
            style="width: 3rem; height: 3rem"\r
          >\r
            <span class="pi pi-copy" style="font-size: 1.4rem"></span>\r
          </button>\r
        </div>\r
\r
        <div\r
          *ngIf="isExpanded"\r
          class="p-panel-content p-mt-2"\r
          style="\r
            background-color: white;\r
            padding: 1rem;\r
            border-top: 1px solid #ccc;\r
          "\r
        >\r
          <span>{{ previewText }}</span>\r
        </div>\r
      </div>\r
    </div>\r
  </p-card>\r
</div>\r
\r
<!-- Target Language Content Card -->\r
<div\r
  *ngIf="showSecondUpload"\r
  class="surface-100 border-round shadow-3"\r
  style="border: 2px solid #00000000; padding: 1rem"\r
>\r
  <p-card>\r
    <h2 class="p-mb-3" style="color: black">Paste target language content</h2>\r
    <p>\r
      Paste the full translation of the uploaded source content into the box\r
      below.\r
    </p>\r
    <textarea\r
      pInputTextarea\r
      rows="15"\r
      cols="70"\r
      placeholder=""\r
      class="p-inputtext p-mb-3 w-full"\r
      style="\r
        border-color: #00000052;\r
        min-height: 10rem;\r
        resize: vertical text;\r
        font-family: &quot;Segoe UI&quot;, Roboto, sans-serif;\r
        font-size: 1rem;\r
        color: #000000be;\r
      "\r
      [(ngModel)]="frenchText"\r
    ></textarea>\r
\r
    <div class="flex gap-2 mt-3">\r
      <button\r
        pButton\r
        type="button"\r
        label="Format target language content"\r
        icon="pi pi-align-left"\r
        class="p-button-primary"\r
        (click)="onFormatTargetLanguageContent()"\r
      ></button>\r
    </div>\r
  </p-card>\r
</div>\r
\r
<!-- Spinner and Generating Files Message -->\r
<div *ngIf="isProcessing" class="p-mt-4 text-center">\r
  <p-progressSpinner styleClass="p-mt-3"></p-progressSpinner>\r
  <p class="p-mt-2 font-bold">Generating files...</p>\r
</div>\r
\r
<div\r
  *ngIf="showDownloadSection"\r
  class="surface-100 border-round shadow-3"\r
  style="border: 2px solid #00000000; padding: 1rem"\r
>\r
  <p-card>\r
    <h2 class="p-mb-3" style="color: black">Formatting complete</h2>\r
    <p>\r
      The translated file has been formatted to match the original layout and is\r
      ready for download.\r
    </p>\r
    <div class="flex gap-2 mt-3">\r
      <button\r
        pButton\r
        type="button"\r
        label="Download file"\r
        icon="pi pi-download"\r
        class="p-button-primary"\r
        (click)="onDownloadFile()"\r
      ></button>\r
    </div>\r
  </p-card>\r
</div>\r
` }]
  }], () => [{ type: ApiKeyService }, { type: TranslationService }, { type: Router }, { type: ActivatedRoute }, { type: FileParseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TranslationAssistantComponent, { className: "TranslationAssistantComponent", filePath: "src/app/views/translation-assistant/translation-assistant.component.ts", lineNumber: 40 });
})();

// src/app/views/project-assistant/project-assistant.component.ts
var _c07 = () => ["/metadata-assistant"];
function ProjectAssistantComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "metadata.title"));
  }
}
function ProjectAssistantComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "p-button", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "common.goTo"))("routerLink", \u0275\u0275pureFunction0(4, _c07));
  }
}
var ProjectAssistantComponent = class _ProjectAssistantComponent {
  static \u0275fac = function ProjectAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectAssistantComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectAssistantComponent, selectors: [["ca-project-assistant"]], decls: 14, vars: 9, consts: [[1, "container", "mx-auto", "px-4", "py-6"], ["id", "wb-cont", 1, "text-4xl", "font-bold", "mb-4"], [1, "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["pTemplate", "header"], [1, "mb-4"], ["pTemplate", "footer"], [1, "p-4"], [1, "text-xl", "font-semibold"], [1, "flex", "justify-end"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "label", "routerLink"]], template: function ProjectAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "p-card");
      \u0275\u0275template(9, ProjectAssistantComponent_ng_template_9_Template, 4, 3, "ng-template", 4);
      \u0275\u0275elementStart(10, "p", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, ProjectAssistantComponent_ng_template_13_Template, 3, 5, "ng-template", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "title.project"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "project.content"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "metadata.cardDescription"));
    }
  }, dependencies: [TranslateModule, TranslatePipe, CommonModule, RouterModule, RouterLink, CardModule, Card, PrimeTemplate, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectAssistantComponent, [{
    type: Component,
    args: [{ selector: "ca-project-assistant", standalone: true, imports: [TranslateModule, CommonModule, RouterModule, CardModule, ButtonModule], template: `<div class="container mx-auto px-4 py-6">\r
  <h1 id="wb-cont" class="text-4xl font-bold mb-4">{{ 'title.project' | translate}}</h1>\r
  <p class="mb-6">{{'project.content' | translate }}</p>\r
  \r
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
    <p-card>\r
      <ng-template pTemplate="header">\r
        <div class="p-4">\r
          <h3 class="text-xl font-semibold">{{ 'metadata.title' | translate }}</h3>\r
        </div>\r
      </ng-template>\r
      <p class="mb-4">{{ 'metadata.cardDescription' | translate }}</p>\r
      <ng-template pTemplate="footer">\r
        <div class="flex justify-end">\r
          <p-button \r
            [label]="'common.goTo' | translate" \r
            icon="pi pi-arrow-right" \r
            iconPos="right"\r
            [routerLink]="['/metadata-assistant']">\r
          </p-button>\r
        </div>\r
      </ng-template>\r
    </p-card>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectAssistantComponent, { className: "ProjectAssistantComponent", filePath: "src/app/views/project-assistant/project-assistant.component.ts", lineNumber: 15 });
})();

// src/app/views/inventory-assistant/inventory-assistant.component.ts
function InventoryAssistantComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "p", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "textarea", 11);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InventoryAssistantComponent_div_18_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.urlsInput, $event) || (ctx_r1.urlsInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(5, "  ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br")(7, "br");
    \u0275\u0275elementStart(8, "button", 12);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function InventoryAssistantComponent_div_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchMetadata(ctx_r1.urlsInput));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 4, "inventory.meta.instructions"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(4, 6, "inventory.meta.watermark"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.urlsInput);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(9, 8, "inventory.meta.fetch-button"));
  }
}
function InventoryAssistantComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "p", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "textarea", 13);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InventoryAssistantComponent_div_19_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.previewInput, $event) || (ctx_r1.previewInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(5, "      ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br")(7, "br");
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function InventoryAssistantComponent_div_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchPreviewMetadata(ctx_r1.previewInput));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 3, "inventory.meta-prvw.instructions"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(4, 5, "inventory.meta.watermark"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.previewInput);
  }
}
function InventoryAssistantComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function InventoryAssistantComponent_p_table_23_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Page (h1)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 1, "inventory.meta.keywords"));
  }
}
function InventoryAssistantComponent_p_table_23_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", row_r4.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.keywords);
  }
}
function InventoryAssistantComponent_p_table_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 15);
    \u0275\u0275template(1, InventoryAssistantComponent_p_table_23_ng_template_1_Template, 10, 3, "ng-template", 16)(2, InventoryAssistantComponent_p_table_23_ng_template_2_Template, 10, 5, "ng-template", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.results);
  }
}
var csvCache = {};
var InventoryAssistantComponent = class _InventoryAssistantComponent {
  // Component state variables
  results = [];
  loading = false;
  errorMessage = "";
  urlsInput = "";
  selectedSourceOption = "canadaOrGithub";
  // Default radio button selection
  previewInput = "";
  /**
   * Main method for processing multiple URLs from input.
   * Populates the `results` array with extracted metadata.
   */
  fetchMetadata(urlsInput) {
    return __async(this, null, function* () {
      const urls = this.getCleanUrls(urlsInput);
      if (!urls.length)
        return;
      this.loading = true;
      this.results.length = 0;
      const resultsBuffer = Array(urls.length).fill(null);
      const promises = urls.map((url, index) => this.processUrl(url, index, resultsBuffer));
      yield Promise.all(promises);
      const validResults = resultsBuffer.filter((r2) => r2 !== null);
      this.results.splice(0, this.results.length, ...validResults);
      this.loading = false;
    });
  }
  /**
   * Splits a multi-line string into a clean array of trimmed, non-empty URLs.
   */
  getCleanUrls(input) {
    return input.split("\n").map((url) => url.trim()).filter((url) => url.length > 0);
  }
  /**
   * Processes a single URL, extracting metadata and updating the results buffer.
   */
  processUrl(url, index, buffer) {
    return __async(this, null, function* () {
      if (!this.isValidUrl(url)) {
        buffer[index] = this.buildErrorResult(url, "Invalid URL", "N/A", "N/A");
        this.updateResults(buffer);
        return;
      }
      try {
        const response = yield fetch(url);
        if (!response.ok) {
          throw new Error(`Fetch failed: HTTP ${response.status}`);
        }
        const html = yield response.text();
        buffer[index] = this.extractMetadata(html, url);
        console.log("Success", buffer[index]);
      } catch {
        buffer[index] = this.buildErrorResult(url, url, "Could not fetch metadata", "");
        console.log("Error", buffer[index]);
      }
      this.updateResults(buffer);
    });
  }
  /**
   * Updates the displayed results once all URLs are processed.
   */
  updateResults(buffer) {
    if (buffer.every((item) => item !== null)) {
      this.results = buffer;
      this.loading = false;
    }
  }
  /**
   * Extracts metadata fields from the raw HTML string.
   */
  extractMetadata(html, url) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const h1 = doc.querySelector("h1")?.innerText.trim();
    const titleTag = doc.querySelector("title")?.innerText.trim();
    const title = h1 || titleTag || url;
    const description = doc.querySelector('meta[name="description"]')?.getAttribute("content") || "No Description";
    const keywords = doc.querySelector('meta[name="keywords"]')?.getAttribute("content") || "No Keywords";
    const source = this.detectSource(url);
    return { url, title, description, keywords, source };
  }
  /**
   * Returns a fallback metadata object in case of error.
   */
  buildErrorResult(url, title, description, keywords) {
    return {
      url,
      title,
      description,
      keywords,
      source: this.detectSource(url)
    };
  }
  /**
   * Attempts to detect the source type from a given URL.
   */
  detectSource(url) {
    try {
      const hostname = new URL(url).hostname;
      if (hostname.includes("canada.ca"))
        return "CA";
      if (hostname.includes("github.io") || hostname.includes("github.com"))
        return "GH";
      return "";
    } catch {
      return "";
    }
  }
  /**
   * Validates whether a string is a properly formatted URL.
   */
  isValidUrl(str) {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Extract metadata for preview URLs using local CSV data.
   */
  fetchPreviewMetadata(input) {
    return __async(this, null, function* () {
      const urls = this.getCleanUrls(input);
      if (!urls.length)
        return;
      this.loading = true;
      this.results = [];
      if (!csvCache["en"] || !csvCache["fr"]) {
        [csvCache["en"], csvCache["fr"]] = yield Promise.all([
          this.loadCsv("gcPage-report/sanitized_cra_gcPageReport_en.csv"),
          this.loadCsv("gcPage-report/sanitized_cra_gcPageReport_fr.csv")
        ]);
      }
      const metadataResults = [];
      for (const url of urls) {
        let result;
        if (!this.isValidUrl(url)) {
          result = this.buildErrorResult(url, "Invalid URL", "N/A", "N/A");
        } else if (!url.includes("canada-preview.adobecqms.net")) {
          result = this.buildErrorResult(url, "Not a preview URL", "N/A", "N/A");
        } else {
          const path = this.extractPreviewPath(url);
          console.log("Normalized preview path:", path);
          const found = this.searchCsvForPath(path, csvCache["en"]) || this.searchCsvForPath(path, csvCache["fr"]);
          if (found) {
            console.log("Found:", found);
            result = {
              url,
              title: found["H1"] || found["Page title"] || "Untitled",
              description: found["Description"] || "No Description",
              keywords: found["Keywords"] || "No Keywords",
              source: "AEM Preview"
            };
          } else {
            result = this.buildErrorResult(url, "Not found in the report", "N/A", "N/A");
          }
        }
        metadataResults.push(result);
      }
      this.results = metadataResults;
      this.loading = false;
    });
  }
  /**
   * Load and parse CSV file from a path.
   */
  loadCsv(path) {
    return __async(this, null, function* () {
      const response = yield fetch(path);
      const text2 = yield response.text();
      return this.parseCsv(text2);
    });
  }
  /**
   * Parse CSV string into an array of objects (rows).
   */
  parseCsv(csvText) {
    const rows = [];
    const lines = csvText.split("\n").filter((line) => line.trim().length > 0);
    const headers = this.splitCsvLine(lines[0]);
    for (const line of lines.slice(1)) {
      const values = this.splitCsvLine(line);
      const row = {};
      headers.forEach((header, i) => {
        row[header] = values[i] || "";
      });
      rows.push(row);
    }
    return rows;
  }
  /**
   * Split a CSV line into values, handling quoted commas.
   */
  splitCsvLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        result.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current);
    return result.map((v) => v.trim());
  }
  /**
   * Extract the path (and search params) from a preview URL.
   */
  extractPreviewPath(url) {
    try {
      const parsed = new URL(url);
      return (parsed.pathname + parsed.search).toLowerCase().replace(/\/$/, "");
    } catch {
      return "";
    }
  }
  /**
   * Search CSV array for a row matching the normalized preview path.
   */
  searchCsvForPath(previewPath, data) {
    const normalizedPreviewPath = previewPath.toLowerCase().replace(/\/$/, "");
    return data.find((row) => {
      const publicPath = row["Public path"];
      if (!publicPath)
        return false;
      try {
        const normalizedCsvPath = new URL(publicPath).pathname.toLowerCase().replace(/\/$/, "");
        return normalizedCsvPath === normalizedPreviewPath;
      } catch {
        return false;
      }
    });
  }
  /**
   * Clear inputs and results when radio option changes.
   */
  onSourceChange() {
    this.results = [];
    this.loading = false;
    this.urlsInput = "";
    this.previewInput = "";
  }
  static \u0275fac = function InventoryAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryAssistantComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryAssistantComponent, selectors: [["ca-inventory-assistant"]], decls: 24, vars: 18, consts: [["id", "wb-cont"], [1, "p-formgroup-inline"], [1, "p-field-radiobutton"], ["name", "sourceOption", "value", "canadaOrGithub", "inputId", "canadaGithubOption", 3, "ngModelChange", "onClick", "ngModel"], ["for", "canadaGithubOption"], [1, "p-field-last-radiobutton"], ["name", "sourceOption", "value", "preview", "inputId", "previewOption", 3, "ngModelChange", "onClick", "ngModel"], ["for", "previewOption"], [4, "ngIf"], [3, "value", 4, "ngIf"], [3, "innerHTML"], ["pTextarea", "", "id", "prjct_pgs", "rows", "5", 2, "width", "100%", 3, "ngModelChange", "ngModel", "placeholder"], ["pButton", "", "type", "button", 3, "click", "label"], ["pTextarea", "", "id", "preview_pgs", "rows", "5", 2, "width", "100%", 3, "ngModelChange", "ngModel", "placeholder"], ["pButton", "", "type", "button", "label", "Fetch Preview Metadata", 3, "click"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["target", "_blank", 3, "href"]], template: function InventoryAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 1)(7, "div", 2)(8, "p-radioButton", 3);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryAssistantComponent_Template_p_radioButton_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSourceOption, $event) || (ctx.selectedSourceOption = $event);
        return $event;
      });
      \u0275\u0275listener("onClick", function InventoryAssistantComponent_Template_p_radioButton_onClick_8_listener() {
        return ctx.onSourceChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 4);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "p-radioButton", 6);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryAssistantComponent_Template_p_radioButton_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedSourceOption, $event) || (ctx.selectedSourceOption = $event);
        return $event;
      });
      \u0275\u0275listener("onClick", function InventoryAssistantComponent_Template_p_radioButton_onClick_13_listener() {
        return ctx.onSourceChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "label", 7);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(17, "br");
      \u0275\u0275template(18, InventoryAssistantComponent_div_18_Template, 10, 10, "div", 8)(19, InventoryAssistantComponent_div_19_Template, 9, 7, "div", 8)(20, InventoryAssistantComponent_div_20_Template, 2, 0, "div", 8);
      \u0275\u0275element(21, "br")(22, "br");
      \u0275\u0275template(23, InventoryAssistantComponent_p_table_23_Template, 3, 1, "p-table", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 10, "title.inventory"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "inventory.intro"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSourceOption);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "inventory.meta.radioLabel1"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedSourceOption);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "inventory.meta.radioLabel2"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedSourceOption === "canadaOrGithub");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSourceOption === "preview");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.results.length > 0);
    }
  }, dependencies: [TranslateModule, TranslatePipe, ButtonModule, ButtonDirective, PrimeTemplate, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgIf, Textarea, TableModule, Table, RadioButtonModule, RadioButton], styles: ["\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: left;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n}\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #444;\n}\n.p-field-radiobutton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.p-field-radiobutton[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.p-field-last-radiobutton[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.p-last-field-radiobutton[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=inventory-assistant.component.css.map */"] });
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventoryAssistantComponent, factory: _InventoryAssistantComponent.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryAssistantComponent, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Component,
    args: [{ selector: "ca-inventory-assistant", imports: [TranslateModule, ButtonModule, FormsModule, CommonModule, Textarea, TableModule, RadioButtonModule], template: `<h1 id="wb-cont">{{ 'title.inventory' | translate }}</h1>\r
<p>{{ 'inventory.intro' | translate }}</p>\r
\r
<!-- PrimeNG Radio Buttons -->\r
<div class="p-formgroup-inline">\r
  <div class="p-field-radiobutton">\r
    <p-radioButton name="sourceOption" value="canadaOrGithub" [(ngModel)]="selectedSourceOption"\r
      inputId="canadaGithubOption" (onClick)="onSourceChange()">\r
    </p-radioButton>\r
    <label for="canadaGithubOption">{{ 'inventory.meta.radioLabel1' | translate }}</label>\r
  </div>\r
\r
  <div class="p-field-last-radiobutton">\r
    <p-radioButton name="sourceOption" value="preview" [(ngModel)]="selectedSourceOption" inputId="previewOption"\r
      (onClick)="onSourceChange()">\r
    </p-radioButton>\r
    <label for="previewOption">{{ 'inventory.meta.radioLabel2' | translate }}</label>\r
  </div>\r
</div>\r
\r
<br />\r
\r
<!-- Input for Canada.ca or GitHub -->\r
<div *ngIf="selectedSourceOption === 'canadaOrGithub'">\r
  <p [innerHTML]="'inventory.meta.instructions' | translate"></p>\r
  <textarea pTextarea id="prjct_pgs" [(ngModel)]="urlsInput" rows="5" style="width: 100%;"\r
    placeholder="{{ 'inventory.meta.watermark' | translate }}">\r
  </textarea>\r
  <br /><br />\r
  <button pButton type="button" label="{{ 'inventory.meta.fetch-button' | translate }}"\r
    (click)="fetchMetadata(urlsInput)">\r
  </button>\r
</div>\r
\r
<!-- Input for Preview -->\r
<div *ngIf="selectedSourceOption === 'preview'">\r
  <p [innerHTML]="'inventory.meta-prvw.instructions' | translate"></p>\r
  <textarea pTextarea id="preview_pgs" [(ngModel)]="previewInput" rows="5" style="width: 100%;"\r
    placeholder="{{ 'inventory.meta.watermark' | translate }}">\r
      </textarea>\r
  <br /><br />\r
  <button pButton type="button" label="Fetch Preview Metadata" (click)="fetchPreviewMetadata(previewInput)">\r
  </button>\r
  </div>\r
\r
<!-- Loading Indicator -->\r
<div *ngIf="loading">Loading...</div>\r
<br /><br />\r
\r
<!-- Results Table -->\r
<p-table [value]="results" *ngIf="results.length > 0">\r
  <ng-template pTemplate="header">\r
    <tr>\r
      <th>Page (h1)</th>\r
      <th>Source</th>\r
      <th>Description</th>\r
      <th>{{ 'inventory.meta.keywords' | translate }}</th>\r
    </tr>\r
  </ng-template>\r
  <ng-template pTemplate="body" let-row>\r
    <tr>\r
      <td><a [href]="row.url" target="_blank">{{ row.title }}</a></td>\r
      <td>{{ row.source }}</td>\r
      <td>{{ row.description }}</td>\r
      <td>{{ row.keywords }}</td>\r
    </tr>\r
  </ng-template>\r
</p-table>\r
`, styles: ["/* src/app/views/inventory-assistant/inventory-assistant.component.css */\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 8px;\n  text-align: left;\n}\ntbody tr {\n  border-bottom: 1px solid #ccc;\n}\nthead tr {\n  border-bottom: 2px solid #444;\n}\n.p-field-radiobutton label {\n  margin-left: 0.75rem;\n}\n.p-field-radiobutton {\n  margin-bottom: 1rem;\n}\n.p-field-last-radiobutton label {\n  margin-left: 0.75rem;\n}\n.p-last-field-radiobutton {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=inventory-assistant.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryAssistantComponent, { className: "InventoryAssistantComponent", filePath: "src/app/views/inventory-assistant/inventory-assistant.component.ts", lineNumber: 35 });
})();

// node_modules/primeng/fesm2022/primeng-inputtextarea.mjs
var theme5 = ({
  dt
}) => `
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${dt("textarea.color")};
    background: ${dt("textarea.background")};
    padding: ${dt("textarea.padding.y")} ${dt("textarea.padding.x")};
    border: 1px solid ${dt("textarea.border.color")};
    transition: background ${dt("textarea.transition.duration")}, color ${dt("textarea.transition.duration")}, border-color ${dt("textarea.transition.duration")}, outline-color ${dt("textarea.transition.duration")}, box-shadow ${dt("textarea.transition.duration")};
    appearance: none;
    border-radius: ${dt("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("textarea.shadow")};
}

.p-textarea:enabled:hover {
    border-color: ${dt("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${dt("textarea.focus.border.color")};
    box-shadow: ${dt("textarea.focus.ring.shadow")};
    outline: ${dt("textarea.focus.ring.width")} ${dt("textarea.focus.ring.style")} ${dt("textarea.focus.ring.color")};
    outline-offset: ${dt("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${dt("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${dt("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${dt("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${dt("textarea.disabled.background")};
    color: ${dt("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${dt("textarea.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${dt("textarea.invalid.border.color")}
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${dt("textarea.invalid.placeholder.color")};
}`;
var classes5 = {
  root: ({
    instance,
    props
  }) => ["p-textarea p-component", {
    "p-filled": instance.filled,
    "p-textarea-resizable ": props.autoResize,
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant ? props.variant === "filled" : instance.config.inputStyle === "filled" || instance.config.inputVariant === "filled",
    "p-textarea-fluid": props.fluid
  }]
};
var TextareaStyle = class _TextareaStyle extends BaseStyle {
  name = "textarea";
  theme = theme5;
  classes = classes5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TextareaStyle_BaseFactory;
    return function TextareaStyle_Factory(__ngFactoryType__) {
      return (\u0275TextareaStyle_BaseFactory || (\u0275TextareaStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaStyle)))(__ngFactoryType__ || _TextareaStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TextareaStyle,
    factory: _TextareaStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaStyle, [{
    type: Injectable
  }], null, null);
})();
var TextareaClasses;
(function(TextareaClasses2) {
  TextareaClasses2["root"] = "p-textarea";
})(TextareaClasses || (TextareaClasses = {}));
var InputTextarea = class _InputTextarea extends BaseComponent {
  ngModel;
  control;
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid = false;
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  filled;
  cachedScrollHeight;
  ngModelSubscription;
  ngControlSubscription;
  _componentStyle = inject(TextareaStyle);
  constructor(ngModel, control) {
    super();
    this.ngModel = ngModel;
    this.control = control;
    console.log("pInputTextarea directive is deprecated in v18. Use pTextarea directive instead");
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.ngModel) {
      this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
    if (this.control) {
      this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.autoResize) this.resize();
    this.updateFilledState();
    this.cd.detectChanges();
  }
  onInput(e) {
    this.updateState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    this.updateFilledState();
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngModelSubscription) {
      this.ngModelSubscription.unsubscribe();
    }
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = function InputTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextarea)(\u0275\u0275directiveInject(NgModel, 8), \u0275\u0275directiveInject(NgControl, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputTextarea,
    selectors: [["", "pInputTextarea", ""]],
    hostAttrs: [1, "p-textarea", "p-component"],
    hostVars: 8,
    hostBindings: function InputTextarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function InputTextarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("p-filled", ctx.filled)("p-textarea-resizable", ctx.autoResize)("p-variant-filled", ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled")("p-textarea-fluid", ctx.hasFluid);
      }
    },
    inputs: {
      autoResize: [2, "autoResize", "autoResize", booleanAttribute],
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute]
    },
    outputs: {
      onResize: "onResize"
    },
    features: [\u0275\u0275ProvidersFeature([TextareaStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextarea, [{
    type: Directive,
    args: [{
      selector: "[pInputTextarea]",
      standalone: true,
      host: {
        class: "p-textarea p-component",
        "[class.p-filled]": "filled",
        "[class.p-textarea-resizable]": "autoResize",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputStyle() === "filled" || config.inputVariant() === "filled"',
        "[class.p-textarea-fluid]": "hasFluid"
      },
      providers: [TextareaStyle]
    }]
  }], () => [{
    type: NgModel,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }]
  }], {
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var Textarea2 = class _Textarea {
  static \u0275fac = function Textarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Textarea)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _Textarea,
    imports: [InputTextarea],
    exports: [InputTextarea]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Textarea2, [{
    type: NgModule,
    args: [{
      imports: [InputTextarea],
      exports: [InputTextarea]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-chip.mjs
var _c08 = ["removeicon"];
var _c19 = ["*"];
function Chip_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 4);
    \u0275\u0275listener("error", function Chip_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt);
  }
}
function Chip_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.icon);
    \u0275\u0275property("ngClass", "p-chip-icon");
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Chip_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_template_2_span_0_Template, 1, 4, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.icon);
  }
}
function Chip_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function Chip_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_span_1_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.removeIcon);
    \u0275\u0275property("ngClass", "p-chip-remove-icon");
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesCircleIcon", 12);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("p-chip-remove-icon");
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_span_1_Template, 1, 5, "span", 9)(2, Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template, 1, 4, "TimesCircleIcon", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIcon);
  }
}
function Chip_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chip_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chip_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Chip_ng_container_5_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_span_2_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275template(1, Chip_ng_container_5_span_2_1_Template, 1, 0, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
function Chip_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Chip_ng_container_5_span_2_Template, 2, 3, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIconTemplate && !ctx_r1._removeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
var theme6 = ({
  dt
}) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${dt("chip.background")};
    color: ${dt("chip.color")};
    border-radius: ${dt("chip.border.radius")};
    padding: ${dt("chip.padding.y")} ${dt("chip.padding.x")};
    gap: ${dt("chip.gap")};
}

.p-chip-icon {
    color: ${dt("chip.icon.color")};
    font-size: ${dt("chip.icon.font.size")};
    width: ${dt("chip.icon.size")};
    height: ${dt("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${dt("chip.image.width")};
    height: ${dt("chip.image.height")};
    margin-left: calc(-1 * ${dt("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${dt("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${dt("chip.padding.y")} / 2);
    padding-bottom: calc(${dt("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${dt("chip.remove.icon.font.size")};
    width: ${dt("chip.remove.icon.size")};
    height: ${dt("chip.remove.icon.size")};
    color: ${dt("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${dt("chip.transition.duration")}, box-shadow ${dt("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${dt("chip.remove.icon.focus.ring.shadow")};
    outline: ${dt("chip.remove.icon.focus.ring.width")} ${dt("chip.remove.icon.focus.ring.style")} ${dt("chip.remove.icon.focus.ring.color")};
    outline-offset: ${dt("chip.remove.icon.focus.ring.offset")};
}
`;
var classes6 = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = class _ChipStyle extends BaseStyle {
  name = "chip";
  theme = theme6;
  classes = classes6;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChipStyle_BaseFactory;
    return function ChipStyle_Factory(__ngFactoryType__) {
      return (\u0275ChipStyle_BaseFactory || (\u0275ChipStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ChipStyle)))(__ngFactoryType__ || _ChipStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChipStyle,
    factory: _ChipStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipStyle, [{
    type: Injectable
  }], null, null);
})();
var ChipClasses;
(function(ChipClasses2) {
  ChipClasses2["root"] = "p-chip";
  ChipClasses2["image"] = "p-chip-image";
  ChipClasses2["icon"] = "p-chip-icon";
  ChipClasses2["label"] = "p-chip-label";
  ChipClasses2["removeIcon"] = "p-chip-remove-icon";
})(ChipClasses || (ChipClasses = {}));
var Chip = class _Chip extends BaseComponent {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Alt attribute of the image.
   * @group Props
   */
  alt;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Whether to display a remove icon.
   * @group Props
   */
  removable = false;
  /**
   * Icon of the remove element.
   * @group Props
   */
  removeIcon;
  /**
   * Callback to invoke when a chip is removed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  visible = true;
  get removeAriaLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["removeLabel"];
  }
  /**
   * Used to pass all properties of the chipProps to the Chip component.
   * @group Props
   */
  get chipProps() {
    return this._chipProps;
  }
  set chipProps(val) {
    this._chipProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  _chipProps;
  _componentStyle = inject(ChipStyle);
  removeIconTemplate;
  templates;
  _removeIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "removeicon":
          this._removeIconTemplate = item.template;
          break;
        default:
          this._removeIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges.chipProps && simpleChanges.chipProps.currentValue) {
      const {
        currentValue
      } = simpleChanges.chipProps;
      if (currentValue.label !== void 0) {
        this.label = currentValue.label;
      }
      if (currentValue.icon !== void 0) {
        this.icon = currentValue.icon;
      }
      if (currentValue.image !== void 0) {
        this.image = currentValue.image;
      }
      if (currentValue.alt !== void 0) {
        this.alt = currentValue.alt;
      }
      if (currentValue.style !== void 0) {
        this.style = currentValue.style;
      }
      if (currentValue.styleClass !== void 0) {
        this.styleClass = currentValue.styleClass;
      }
      if (currentValue.removable !== void 0) {
        this.removable = currentValue.removable;
      }
      if (currentValue.removeIcon !== void 0) {
        this.removeIcon = currentValue.removeIcon;
      }
    }
  }
  containerClass() {
    let classes10 = "p-chip p-component";
    if (this.styleClass) {
      classes10 += ` ${this.styleClass}`;
    }
    return classes10;
  }
  close(event) {
    this.visible = false;
    this.onRemove.emit(event);
  }
  onKeydown(event) {
    if (event.key === "Enter" || event.key === "Backspace") {
      this.close(event);
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Chip_BaseFactory;
    return function Chip_Factory(__ngFactoryType__) {
      return (\u0275Chip_BaseFactory || (\u0275Chip_BaseFactory = \u0275\u0275getInheritedFactory(_Chip)))(__ngFactoryType__ || _Chip);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Chip,
    selectors: [["p-chip"]],
    contentQueries: function Chip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c08, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 9,
    hostBindings: function Chip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "chip")("aria-label", ctx.label)("data-pc-section", "root");
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.containerClass());
        \u0275\u0275styleProp("display", !ctx.visible && "none");
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      alt: "alt",
      style: "style",
      styleClass: "styleClass",
      removable: [2, "removable", "removable", booleanAttribute],
      removeIcon: "removeIcon",
      chipProps: "chipProps"
    },
    outputs: {
      onRemove: "onRemove",
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([ChipStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c19,
    decls: 6,
    vars: 4,
    consts: [["iconTemplate", ""], ["class", "p-chip-image", 3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], ["class", "p-chip-label", 4, "ngIf"], [4, "ngIf"], [1, "p-chip-image", 3, "error", "src", "alt"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-chip-label"], ["tabindex", "0", "class", "p-chip-remove-icon", "role", "button", 3, "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "ngClass", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "click", "keydown", "ngClass"], ["tabindex", "0", "role", "button", 3, "click", "keydown"], ["tabindex", "0", "role", "button", 1, "p-chip-remove-icon", 3, "click", "keydown"], [4, "ngTemplateOutlet"]],
    template: function Chip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Chip_img_1_Template, 1, 2, "img", 1)(2, Chip_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Chip_div_4_Template, 2, 2, "div", 2)(5, Chip_ng_container_5_Template, 3, 2, "ng-container", 3);
      }
      if (rf & 2) {
        const iconTemplate_r6 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.image)("ngIfElse", iconTemplate_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.removable);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chip, [{
    type: Component,
    args: [{
      selector: "p-chip",
      standalone: true,
      imports: [CommonModule, TimesCircleIcon, SharedModule],
      template: `
        <ng-content></ng-content>
        <img class="p-chip-image" [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" [alt]="alt" />
        <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="'p-chip-icon'" [attr.data-pc-section]="'icon'"></span></ng-template>
        <div class="p-chip-label" *ngIf="label" [attr.data-pc-section]="'label'">{{ label }}</div>
        <ng-container *ngIf="removable">
            <ng-container *ngIf="!removeIconTemplate && !_removeIconTemplate">
                <span
                    tabindex="0"
                    *ngIf="removeIcon"
                    [class]="removeIcon"
                    [ngClass]="'p-chip-remove-icon'"
                    [attr.data-pc-section]="'removeicon'"
                    (click)="close($event)"
                    (keydown)="onKeydown($event)"
                    [attr.aria-label]="removeAriaLabel"
                    role="button"
                ></span>
                <TimesCircleIcon tabindex="0" *ngIf="!removeIcon" [class]="'p-chip-remove-icon'" [attr.data-pc-section]="'removeicon'" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button" />
            </ng-container>
            <span *ngIf="removeIconTemplate || _removeIconTemplate" tabindex="0" [attr.data-pc-section]="'removeicon'" class="p-chip-remove-icon" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button">
                <ng-template *ngTemplateOutlet="removeIconTemplate || _removeIconTemplate"></ng-template>
            </span>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ChipStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style",
        "[style.display]": '!visible && "none"',
        "[attr.data-pc-name]": "'chip'",
        "[attr.aria-label]": "label",
        "[attr.data-pc-section]": "'root'"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removeIcon: [{
      type: Input
    }],
    onRemove: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    chipProps: [{
      type: Input
    }],
    removeIconTemplate: [{
      type: ContentChild,
      args: ["removeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ChipModule = class _ChipModule {
  static \u0275fac = function ChipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ChipModule,
    imports: [Chip, SharedModule],
    exports: [Chip, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Chip, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      imports: [Chip, SharedModule],
      exports: [Chip, SharedModule]
    }]
  }], null, null);
})();

// src/app/views/metadata-assistant/components/url-input/url-input.component.ts
function UrlInputComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h3", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "p-button", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("onClick", function UrlInputComponent_ng_template_2_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearInput());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "metadata.urlInput.title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 6, "metadata.urlInput.clear"))("text", true)("disabled", ctx_r1.disabled);
  }
}
function UrlInputComponent_div_19_p_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chip", 23);
  }
  if (rf & 2) {
    const url_r3 = ctx.$implicit;
    \u0275\u0275property("label", url_r3.length > 50 ? url_r3.substring(0, 50) + "..." : url_r3);
  }
}
function UrlInputComponent_div_19_p_chip_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chip", 24);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", "+" + (ctx_r1.validUrls.length - 3) + " " + \u0275\u0275pipeBind1(1, 1, "metadata.urlInput.more"));
  }
}
function UrlInputComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275template(7, UrlInputComponent_div_19_p_chip_7_Template, 1, 1, "p-chip", 21)(8, UrlInputComponent_div_19_p_chip_8_Template, 2, 3, "p-chip", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(5, 4, "metadata.urlInput.validUrls"), " (", ctx_r1.validUrls.length, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.validUrls.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.validUrls.length > 3);
  }
}
function UrlInputComponent_div_20_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const url_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", url_r4, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.getInvalidReason(url_r4), ")");
  }
}
function UrlInputComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "p-message", 25);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 26)(4, "ul", 27);
    \u0275\u0275template(5, UrlInputComponent_div_20_li_5_Template, 4, 2, "li", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("text", \u0275\u0275pipeBind1(2, 2, "metadata.urlInput.invalidUrls"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.invalidUrls);
  }
}
var UrlInputComponent = class _UrlInputComponent {
  disabled = false;
  urlsChange = new EventEmitter();
  urlInputChange = new EventEmitter();
  urlText = "";
  validUrls = [];
  invalidUrls = [];
  // Allowed hosts - same as metadata service
  allowedHosts = /* @__PURE__ */ new Set([
    "cra-design.github.io",
    "cra-proto.github.io",
    "gc-proto.github.io",
    "test.canada.ca",
    "www.canada.ca"
  ]);
  onTextChange() {
    this.parseUrls();
    this.urlInputChange.emit(this.urlText);
  }
  parseUrls() {
    const lines = this.urlText.split("\n").filter((line) => line.trim());
    this.validUrls = [];
    this.invalidUrls = [];
    lines.forEach((line) => {
      const url = line.trim();
      if (url) {
        if (this.isValidUrl(url)) {
          this.validUrls.push(url);
        } else {
          this.invalidUrls.push(url);
        }
      }
    });
    this.urlsChange.emit(this.validUrls);
  }
  isValidUrl(url) {
    try {
      const urlObj = new URL(url);
      const validProtocol = urlObj.protocol === "http:" || urlObj.protocol === "https:";
      const validHost = this.allowedHosts.has(urlObj.host);
      return validProtocol && validHost;
    } catch {
      return false;
    }
  }
  getInvalidReason(url) {
    try {
      const urlObj = new URL(url);
      if (!this.allowedHosts.has(urlObj.host)) {
        return `Domain not supported: ${urlObj.host}`;
      }
      return "Invalid URL format";
    } catch {
      return "Invalid URL format";
    }
  }
  clearInput() {
    this.urlText = "";
    this.validUrls = [];
    this.invalidUrls = [];
    this.urlsChange.emit([]);
    this.urlInputChange.emit("");
  }
  loadSampleUrls() {
    this.urlText = "https://www.canada.ca/en/revenue-agency.html\nhttps://www.canada.ca/fr/agence-revenu.html\nhttps://www.canada.ca/en/revenue-agency/services/tax/businesses.html";
    this.parseUrls();
  }
  getAllowedDomainsText() {
    return Array.from(this.allowedHosts).join(", ");
  }
  static \u0275fac = function UrlInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlInputComponent, selectors: [["ca-url-input"]], inputs: { disabled: "disabled" }, outputs: { urlsChange: "urlsChange", urlInputChange: "urlInputChange" }, decls: 21, vars: 18, consts: [[1, "url-input-container"], ["pTemplate", "header"], [1, "url-input-content"], [1, "field"], ["for", "urls", 1, "block", "mb-2"], ["pInputTextarea", "", "id", "urls", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled", "rows", "placeholder"], [1, "block", "mt-1", "text-500"], [1, "block", "mt-1", "text-400"], [1, "pi", "pi-info-circle", "mr-1"], [1, "url-validation", "mt-3"], ["class", "mb-2", 4, "ngIf"], [4, "ngIf"], [1, "flex", "align-items-center", "justify-content-between", "p-3"], [1, "m-0"], [1, "flex", "gap-2"], ["icon", "pi pi-times", "severity", "secondary", 3, "onClick", "label", "text", "disabled"], [1, "mb-2"], [1, "flex", "align-items-center", "gap-2", "mb-2"], [1, "pi", "pi-check-circle", "text-green-500"], [1, "font-semibold"], [1, "flex", "flex-wrap", "gap-2"], ["styleClass", "text-xs", 3, "label", 4, "ngFor", "ngForOf"], ["styleClass", "text-xs surface-200", 3, "label", 4, "ngIf"], ["styleClass", "text-xs", 3, "label"], ["styleClass", "text-xs surface-200", 3, "label"], ["severity", "warn", "styleClass", "w-full", 3, "text"], [1, "mt-2", "text-orange-600"], [1, "m-0", "pl-3"], ["class", "text-sm", 4, "ngFor", "ngForOf"], [1, "text-sm"], [1, "text-xs", "text-gray-500", "ml-2"]], template: function UrlInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-card");
      \u0275\u0275template(2, UrlInputComponent_ng_template_2_Template, 7, 8, "ng-template", 1);
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "textarea", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function UrlInputComponent_Template_textarea_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.urlText, $event) || (ctx.urlText = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function UrlInputComponent_Template_textarea_ngModelChange_8_listener() {
        return ctx.onTextChange();
      });
      \u0275\u0275text(10, "        ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "small", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "small", 7);
      \u0275\u0275element(15, "i", 8);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275template(19, UrlInputComponent_div_19_Template, 9, 6, "div", 10)(20, UrlInputComponent_div_20_Template, 6, 4, "div", 11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "metadata.urlInput.label"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.urlText);
      \u0275\u0275property("disabled", ctx.disabled)("rows", 8)("placeholder", \u0275\u0275pipeBind1(9, 12, "metadata.urlInput.placeholder"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "metadata.urlInput.help"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 16, "metadata.urlInput.allowedDomains"), ": ", ctx.getAllowedDomainsText(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.validUrls.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.invalidUrls.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslateModule,
    TranslatePipe,
    InputTextarea,
    ButtonModule,
    Button,
    PrimeTemplate,
    CardModule,
    Card,
    ChipModule,
    Chip,
    MessageModule,
    Message
  ], styles: ["\n\n.url-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.url-input-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n}\ntextarea[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.url-validation[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: var(--surface-50);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]     .p-chip {\n  font-size: 0.85rem;\n  padding: 0.25rem 0.5rem;\n}\n[_nghost-%COMP%]     .p-message {\n  margin: 0;\n}\n.text-400[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.text-orange-600[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n/*# sourceMappingURL=url-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlInputComponent, [{
    type: Component,
    args: [{ selector: "ca-url-input", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      InputTextarea,
      ButtonModule,
      CardModule,
      ChipModule,
      MessageModule
    ], template: `<div class="url-input-container">\r
  <p-card>\r
    <ng-template pTemplate="header">\r
      <div class="flex align-items-center justify-content-between p-3">\r
        <h3 class="m-0">{{ 'metadata.urlInput.title' | translate }}</h3>\r
        <div class="flex gap-2">\r
          <p-button \r
            [label]="'metadata.urlInput.clear' | translate"\r
            icon="pi pi-times"\r
            severity="secondary"\r
            [text]="true"\r
            (onClick)="clearInput()"\r
            [disabled]="disabled">\r
          </p-button>\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
    <div class="url-input-content">\r
      <div class="field">\r
        <label for="urls" class="block mb-2">\r
          {{ 'metadata.urlInput.label' | translate }}\r
        </label>\r
        <textarea \r
          pInputTextarea \r
          id="urls"\r
          [(ngModel)]="urlText"\r
          (ngModelChange)="onTextChange()"\r
          [disabled]="disabled"\r
          [rows]="8"\r
          [placeholder]="'metadata.urlInput.placeholder' | translate"\r
          class="w-full">\r
        </textarea>\r
        <small class="block mt-1 text-500">\r
          {{ 'metadata.urlInput.help' | translate }}\r
        </small>\r
        <small class="block mt-1 text-400">\r
          <i class="pi pi-info-circle mr-1"></i>\r
          {{ 'metadata.urlInput.allowedDomains' | translate }}: {{ getAllowedDomainsText() }}\r
        </small>\r
      </div>\r
\r
      <div class="url-validation mt-3">\r
        <div *ngIf="validUrls.length > 0" class="mb-2">\r
          <div class="flex align-items-center gap-2 mb-2">\r
            <i class="pi pi-check-circle text-green-500"></i>\r
            <span class="font-semibold">\r
              {{ 'metadata.urlInput.validUrls' | translate }} ({{ validUrls.length }})\r
            </span>\r
          </div>\r
          <div class="flex flex-wrap gap-2">\r
            <p-chip \r
              *ngFor="let url of validUrls.slice(0, 3)" \r
              [label]="url.length > 50 ? url.substring(0, 50) + '...' : url"\r
              styleClass="text-xs">\r
            </p-chip>\r
            <p-chip \r
              *ngIf="validUrls.length > 3"\r
              [label]="'+' + (validUrls.length - 3) + ' ' + ('metadata.urlInput.more' | translate)"\r
              styleClass="text-xs surface-200">\r
            </p-chip>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="invalidUrls.length > 0">\r
          <p-message \r
            severity="warn" \r
            [text]="'metadata.urlInput.invalidUrls' | translate"\r
            styleClass="w-full">\r
          </p-message>\r
          <div class="mt-2 text-orange-600">\r
            <ul class="m-0 pl-3">\r
              <li *ngFor="let url of invalidUrls" class="text-sm">\r
                {{ url }}\r
                <span class="text-xs text-gray-500 ml-2">({{ getInvalidReason(url) }})</span>\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </p-card>\r
</div>`, styles: ["/* src/app/views/metadata-assistant/components/url-input/url-input.component.css */\n.url-input-container {\n  width: 100%;\n}\n.url-input-content {\n  padding: 0;\n}\n.field label {\n  font-weight: 600;\n  color: var(--text-color);\n}\ntextarea {\n  font-family: monospace;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.url-validation {\n  padding: 1rem;\n  background-color: var(--surface-50);\n  border-radius: var(--border-radius);\n}\n:host ::ng-deep .p-chip {\n  font-size: 0.85rem;\n  padding: 0.25rem 0.5rem;\n}\n:host ::ng-deep .p-message {\n  margin: 0;\n}\n.text-400 {\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.text-orange-600 {\n  color: #ea580c;\n}\n/*# sourceMappingURL=url-input.component.css.map */\n"] }]
  }], null, { disabled: [{
    type: Input
  }], urlsChange: [{
    type: Output
  }], urlInputChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlInputComponent, { className: "UrlInputComponent", filePath: "src/app/views/metadata-assistant/components/url-input/url-input.component.ts", lineNumber: 27 });
})();

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c09 = ["icon"];
var _c110 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 1, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var theme7 = ({
  dt
}) => `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${dt("tag.primary.background")};
    color: ${dt("tag.primary.color")};
    font-size: ${dt("tag.font.size")};
    font-weight: ${dt("tag.font.weight")};
    padding: ${dt("tag.padding")};
    border-radius: ${dt("tag.border.radius")};
    gap: ${dt("tag.gap")};
}

.p-tag-icon {
    font-size: ${dt("tag.icon.size")};
    width: ${dt("tag.icon.size")};
    height:${dt("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${dt("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${dt("tag.success.background")};
    color: ${dt("tag.success.color")};
}

.p-tag-info {
    background: ${dt("tag.info.background")};
    color: ${dt("tag.info.color")};
}

.p-tag-warn {
    background: ${dt("tag.warn.background")};
    color: ${dt("tag.warn.color")};
}

.p-tag-danger {
    background: ${dt("tag.danger.background")};
    color: ${dt("tag.danger.color")};
}

.p-tag-secondary {
    background: ${dt("tag.secondary.background")};
    color: ${dt("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${dt("tag.contrast.background")};
    color: ${dt("tag.contrast.color")};
}
`;
var classes7 = {
  root: ({
    props
  }) => ["p-tag p-component", {
    "p-tag-info": props.severity === "info",
    "p-tag-success": props.severity === "success",
    "p-tag-warn": props.severity === "warn",
    "p-tag-danger": props.severity === "danger",
    "p-tag-secondary": props.severity === "secondary",
    "p-tag-contrast": props.severity === "contrast",
    "p-tag-rounded": props.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  theme = theme7;
  classes = classes7;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var Tag = class _Tag extends BaseComponent {
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _style;
  _componentStyle = inject(TagStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  containerClass() {
    let classes10 = "p-tag p-component";
    if (this.severity) {
      classes10 += ` p-tag-${this.severity}`;
    }
    if (this.rounded) {
      classes10 += " p-tag-rounded";
    }
    if (this.styleClass) {
      classes10 += ` ${this.styleClass}`;
    }
    return classes10;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c09, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.containerClass());
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c110,
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-label"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span class="p-tag-icon" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span class="p-tag-label">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule,
    imports: [Tag, SharedModule],
    exports: [Tag, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// src/app/views/metadata-assistant/components/metadata-result/metadata-result.component.ts
var _c010 = () => ({ "font-size": "0.75rem" });
function MetadataResultComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementStart(3, "h3", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "p-tag", 10);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "metadata.results.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.results.length + " " + \u0275\u0275pipeBind1(7, 4, "metadata.results.items"));
  }
}
function MetadataResultComponent_div_0_p_accordionTab_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getDomainFromUrl(result_r3.url));
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c010));
    \u0275\u0275property("value", result_r3.language === "en" ? "English" : "Fran\xE7ais")("severity", result_r3.language === "en" ? "success" : "info");
  }
}
function MetadataResultComponent_div_0_p_accordionTab_5_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "h4", 29);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 18)(7, "label", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "span", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p-button", 20);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("onClick", function MetadataResultComponent_div_0_p_accordionTab_5_div_36_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r4);
      const result_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(result_r3.frenchTranslatedDescription));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 21)(15, "code", 22);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 31)(18, "div", 18)(19, "label", 14);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span", 19);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p-button", 20);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("onClick", function MetadataResultComponent_div_0_p_accordionTab_5_div_36_Template_p_button_onClick_24_listener() {
      \u0275\u0275restoreView(_r4);
      const result_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(result_r3.frenchTranslatedKeywords));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 21)(27, "code", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const result_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 13, "metadata.results.frenchTranslation"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "metadata.results.translatedDescription"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", result_r3.frenchTranslatedDescription.length, " chars)");
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true)("pTooltip", \u0275\u0275pipeBind1(13, 17, "metadata.results.copyToClipboard"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r3.frenchTranslatedDescription);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 19, "metadata.results.translatedKeywords"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", result_r3.frenchTranslatedKeywords.length, " chars)");
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true)("pTooltip", \u0275\u0275pipeBind1(25, 21, "metadata.results.copyToClipboard"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r3.frenchTranslatedKeywords);
  }
}
function MetadataResultComponent_div_0_p_accordionTab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-accordionTab", 11);
    \u0275\u0275template(1, MetadataResultComponent_div_0_p_accordionTab_5_ng_template_1_Template, 5, 6, "ng-template", 2);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13)(4, "label", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "a", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 17);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("onClick", function MetadataResultComponent_div_0_p_accordionTab_5_Template_p_button_onClick_10_listener() {
      const result_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(result_r3.url));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 18)(14, "label", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p-button", 20);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("onClick", function MetadataResultComponent_div_0_p_accordionTab_5_Template_p_button_onClick_19_listener() {
      const result_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(result_r3.metaDescription));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "code", 22);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "div", 18)(26, "label", 14);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementStart(29, "span", 19);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p-button", 20);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("onClick", function MetadataResultComponent_div_0_p_accordionTab_5_Template_p_button_onClick_31_listener() {
      const result_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyToClipboard(result_r3.metaKeywords));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 21)(34, "code", 22);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, MetadataResultComponent_div_0_p_accordionTab_5_div_36_Template, 29, 23, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("selected", i_r5 === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 20, "metadata.results.url"));
    \u0275\u0275advance(3);
    \u0275\u0275property("href", result_r3.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r3.url, " ");
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true)("pTooltip", \u0275\u0275pipeBind1(11, 22, "metadata.results.openInNewTab"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "metadata.results.metaDescription"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", result_r3.metaDescription.length, " chars)");
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true)("pTooltip", \u0275\u0275pipeBind1(20, 26, "metadata.results.copyToClipboard"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r3.metaDescription);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 28, "metadata.results.metaKeywords"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", result_r3.metaKeywords.length, " chars)");
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true)("pTooltip", \u0275\u0275pipeBind1(32, 30, "metadata.results.copyToClipboard"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(result_r3.metaKeywords);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showTranslations && result_r3.frenchTranslatedDescription);
  }
}
function MetadataResultComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p-card");
    \u0275\u0275template(2, MetadataResultComponent_div_0_ng_template_2_Template, 8, 6, "ng-template", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "p-accordion", 4);
    \u0275\u0275template(5, MetadataResultComponent_div_0_p_accordionTab_5_Template, 37, 32, "p-accordionTab", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("multiple", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.results);
  }
}
var MetadataResultComponent = class _MetadataResultComponent {
  results = [];
  showTranslations = false;
  expandedStates = {};
  toggleExpanded(index) {
    this.expandedStates[index] = !this.expandedStates[index];
  }
  isExpanded(index) {
    return this.expandedStates[index] || false;
  }
  copyToClipboard(text2) {
    navigator.clipboard.writeText(text2).then(() => {
    });
  }
  getKeywordsArray(keywords) {
    return keywords.split(",").map((k) => k.trim()).filter((k) => k.length > 0);
  }
  getDomainFromUrl(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  }
  truncateContent(content, maxLength = 200) {
    if (content.length <= maxLength)
      return content;
    return content.substring(0, maxLength) + "...";
  }
  static \u0275fac = function MetadataResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataResultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataResultComponent, selectors: [["ca-metadata-result"]], inputs: { results: "results", showTranslations: "showTranslations" }, decls: 1, vars: 1, consts: [["class", "metadata-results-container", 4, "ngIf"], [1, "metadata-results-container"], ["pTemplate", "header"], [1, "results-content"], [3, "multiple"], [3, "selected", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-center", "justify-content-between", "p-3"], [1, "flex", "align-items-center"], [1, "pi", "pi-list", "mr-2"], [1, "m-0"], ["severity", "info", 3, "value"], [3, "selected"], [1, "result-content", "p-3"], [1, "field", "mb-3"], [1, "font-semibold", "text-500", "text-sm"], [1, "flex", "align-items-center", "gap-2", "mt-1"], ["target", "_blank", 1, "text-primary", "hover:underline", "text-sm", 3, "href"], ["icon", "pi pi-external-link", "size", "small", 3, "onClick", "text", "rounded", "pTooltip"], [1, "flex", "align-items-center", "justify-content-between", "mb-1"], [1, "text-xs", "text-400", "ml-1"], ["icon", "pi pi-copy", "size", "small", 3, "onClick", "text", "rounded", "pTooltip"], [1, "meta-content", "p-2", "surface-50", "border-round"], [1, "text-sm"], ["class", "translation-section mt-4 p-3 surface-100 border-round", 4, "ngIf"], [1, "flex", "align-items-center", "justify-content-between", "w-full", "pr-2"], [1, "flex", "align-items-center", "gap-2"], [1, "font-semibold"], [3, "value", "severity"], [1, "translation-section", "mt-4", "p-3", "surface-100", "border-round"], [1, "flex", "align-items-center", "gap-2", "mb-3"], [1, "pi", "pi-language"], [1, "field"]], template: function MetadataResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MetadataResultComponent_div_0_Template, 6, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.results && ctx.results.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    TranslateModule,
    TranslatePipe,
    AccordionModule,
    Accordion,
    AccordionTab,
    PrimeTemplate,
    CardModule,
    Card,
    ChipModule,
    ButtonModule,
    Button,
    TagModule,
    Tag,
    TooltipModule,
    Tooltip
  ], styles: ['\n\n.metadata-results-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n.results-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.result-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.content-preview[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  font-family:\n    system-ui,\n    -apple-system,\n    sans-serif;\n  line-height: 1.6;\n}\n.meta-content[_ngcontent-%COMP%] {\n  font-family:\n    "Monaco",\n    "Courier New",\n    monospace;\n  word-break: break-word;\n}\n.keywords-container[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background-color: var(--surface-50);\n  border-radius: var(--border-radius);\n}\n.translation-section[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--primary-300);\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.hover\\:underline[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.text-400[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.text-500[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .p-accordion .p-accordion-header-link {\n  padding: 1rem;\n  background: var(--surface-50);\n  border: 1px solid var(--surface-200);\n  transition: all 0.2s;\n}\n[_nghost-%COMP%]     .p-accordion .p-accordion-header-link:hover {\n  background: var(--surface-100);\n}\n[_nghost-%COMP%]     .p-accordion .p-accordion-content {\n  padding: 0;\n  border: 1px solid var(--surface-200);\n  border-top: none;\n}\n[_nghost-%COMP%]     .p-chip {\n  background: var(--primary-100);\n  color: var(--primary-700);\n  font-size: 0.85rem;\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=metadata-result.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataResultComponent, [{
    type: Component,
    args: [{ selector: "ca-metadata-result", standalone: true, imports: [
      CommonModule,
      TranslateModule,
      AccordionModule,
      CardModule,
      ChipModule,
      ButtonModule,
      TagModule,
      TooltipModule
    ], template: `<div class="metadata-results-container" *ngIf="results && results.length > 0">\r
  <p-card>\r
    <ng-template pTemplate="header">\r
      <div class="flex align-items-center justify-content-between p-3">\r
        <div class="flex align-items-center">\r
          <i class="pi pi-list mr-2"></i>\r
          <h3 class="m-0">{{ 'metadata.results.title' | translate }}</h3>\r
        </div>\r
        <p-tag [value]="results.length + ' ' + ('metadata.results.items' | translate)" severity="info"></p-tag>\r
      </div>\r
    </ng-template>\r
\r
    <div class="results-content">\r
      <p-accordion [multiple]="true">\r
        <p-accordionTab *ngFor="let result of results; let i = index" [selected]="i === 0">\r
          <ng-template pTemplate="header">\r
            <div class="flex align-items-center justify-content-between w-full pr-2">\r
              <div class="flex align-items-center gap-2">\r
                <span class="font-semibold">{{ getDomainFromUrl(result.url) }}</span>\r
                <p-tag \r
                  [value]="result.language === 'en' ? 'English' : 'Fran\xE7ais'" \r
                  [severity]="result.language === 'en' ? 'success' : 'info'"\r
                  [style]="{'font-size': '0.75rem'}">\r
                </p-tag>\r
              </div>\r
            </div>\r
          </ng-template>\r
\r
          <div class="result-content p-3">\r
            <!-- URL -->\r
            <div class="field mb-3">\r
              <label class="font-semibold text-500 text-sm">{{ 'metadata.results.url' | translate }}</label>\r
              <div class="flex align-items-center gap-2 mt-1">\r
                <a [href]="result.url" target="_blank" class="text-primary hover:underline text-sm">\r
                  {{ result.url }}\r
                </a>\r
                <p-button \r
                  icon="pi pi-external-link" \r
                  [text]="true" \r
                  [rounded]="true"\r
                  size="small"\r
                  (onClick)="copyToClipboard(result.url)"\r
                  [pTooltip]="'metadata.results.openInNewTab' | translate">\r
                </p-button>\r
              </div>\r
            </div>\r
\r
            <!-- Meta Description -->\r
            <div class="field mb-3">\r
              <div class="flex align-items-center justify-content-between mb-1">\r
                <label class="font-semibold text-500 text-sm">\r
                  {{ 'metadata.results.metaDescription' | translate }}\r
                  <span class="text-xs text-400 ml-1">({{ result.metaDescription.length }} chars)</span>\r
                </label>\r
                <p-button \r
                  icon="pi pi-copy" \r
                  [text]="true"\r
                  [rounded]="true"\r
                  size="small"\r
                  (onClick)="copyToClipboard(result.metaDescription)"\r
                  [pTooltip]="'metadata.results.copyToClipboard' | translate">\r
                </p-button>\r
              </div>\r
              <div class="meta-content p-2 surface-50 border-round">\r
                <code class="text-sm">{{ result.metaDescription }}</code>\r
              </div>\r
            </div>\r
\r
            <!-- Meta Keywords -->\r
            <div class="field mb-3">\r
              <div class="flex align-items-center justify-content-between mb-1">\r
                <label class="font-semibold text-500 text-sm">\r
                  {{ 'metadata.results.metaKeywords' | translate }}\r
                  <span class="text-xs text-400 ml-1">({{ result.metaKeywords.length }} chars)</span>\r
                </label>\r
                <p-button \r
                  icon="pi pi-copy" \r
                  [text]="true"\r
                  [rounded]="true"\r
                  size="small"\r
                  (onClick)="copyToClipboard(result.metaKeywords)"\r
                  [pTooltip]="'metadata.results.copyToClipboard' | translate">\r
                </p-button>\r
              </div>\r
              <div class="meta-content p-2 surface-50 border-round">\r
                <code class="text-sm">{{ result.metaKeywords }}</code>\r
              </div>\r
            </div>\r
\r
            <!-- French Translations (if available) -->\r
            <div *ngIf="showTranslations && result.frenchTranslatedDescription" class="translation-section mt-4 p-3 surface-100 border-round">\r
              <h4 class="flex align-items-center gap-2 mb-3">\r
                <i class="pi pi-language"></i>\r
                {{ 'metadata.results.frenchTranslation' | translate }}\r
              </h4>\r
\r
              <!-- Translated Description -->\r
              <div class="field mb-3">\r
                <div class="flex align-items-center justify-content-between mb-1">\r
                  <label class="font-semibold text-500 text-sm">\r
                    {{ 'metadata.results.translatedDescription' | translate }}\r
                    <span class="text-xs text-400 ml-1">({{ result.frenchTranslatedDescription.length }} chars)</span>\r
                  </label>\r
                  <p-button \r
                    icon="pi pi-copy" \r
                    [text]="true"\r
                    [rounded]="true"\r
                    size="small"\r
                    (onClick)="copyToClipboard(result.frenchTranslatedDescription!)"\r
                    [pTooltip]="'metadata.results.copyToClipboard' | translate">\r
                  </p-button>\r
                </div>\r
                <div class="meta-content p-2 surface-50 border-round">\r
                  <code class="text-sm">{{ result.frenchTranslatedDescription }}</code>\r
                </div>\r
              </div>\r
\r
              <!-- Translated Keywords -->\r
              <div class="field">\r
                <div class="flex align-items-center justify-content-between mb-1">\r
                  <label class="font-semibold text-500 text-sm">\r
                    {{ 'metadata.results.translatedKeywords' | translate }}\r
                    <span class="text-xs text-400 ml-1">({{ result.frenchTranslatedKeywords!.length }} chars)</span>\r
                  </label>\r
                  <p-button \r
                    icon="pi pi-copy" \r
                    [text]="true"\r
                    [rounded]="true"\r
                    size="small"\r
                    (onClick)="copyToClipboard(result.frenchTranslatedKeywords!)"\r
                    [pTooltip]="'metadata.results.copyToClipboard' | translate">\r
                  </p-button>\r
                </div>\r
                <div class="meta-content p-2 surface-50 border-round">\r
                  <code class="text-sm">{{ result.frenchTranslatedKeywords }}</code>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </p-accordionTab>\r
      </p-accordion>\r
    </div>\r
  </p-card>\r
</div>`, styles: ['/* src/app/views/metadata-assistant/components/metadata-result/metadata-result.component.css */\n.metadata-results-container {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n.results-content {\n  padding: 0;\n}\n.result-content {\n  padding: 1rem;\n}\n.field {\n  margin-bottom: 1rem;\n}\n.field label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.content-preview {\n  max-height: 400px;\n  overflow-y: auto;\n  font-family:\n    system-ui,\n    -apple-system,\n    sans-serif;\n  line-height: 1.6;\n}\n.meta-content {\n  font-family:\n    "Monaco",\n    "Courier New",\n    monospace;\n  word-break: break-word;\n}\n.keywords-container {\n  padding: 0.5rem;\n  background-color: var(--surface-50);\n  border-radius: var(--border-radius);\n}\n.translation-section {\n  border-left: 3px solid var(--primary-300);\n}\n.text-primary {\n  color: var(--primary-color);\n}\n.hover\\:underline:hover {\n  text-decoration: underline;\n}\n.text-400 {\n  color: var(--text-color-secondary);\n}\n.text-500 {\n  color: var(--text-color);\n}\n:host ::ng-deep .p-accordion .p-accordion-header-link {\n  padding: 1rem;\n  background: var(--surface-50);\n  border: 1px solid var(--surface-200);\n  transition: all 0.2s;\n}\n:host ::ng-deep .p-accordion .p-accordion-header-link:hover {\n  background: var(--surface-100);\n}\n:host ::ng-deep .p-accordion .p-accordion-content {\n  padding: 0;\n  border: 1px solid var(--surface-200);\n  border-top: none;\n}\n:host ::ng-deep .p-chip {\n  background: var(--primary-100);\n  color: var(--primary-700);\n  font-size: 0.85rem;\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=metadata-result.component.css.map */\n'] }]
  }], null, { results: [{
    type: Input
  }], showTranslations: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataResultComponent, { className: "MetadataResultComponent", filePath: "src/app/views/metadata-assistant/components/metadata-result/metadata-result.component.ts", lineNumber: 28 });
})();

// src/app/views/metadata-assistant/components/csv-export/csv-export.component.ts
var _c011 = (a0) => ({ count: a0 });
function CsvExportComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "h3", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "metadata.csv.title"));
  }
}
function CsvExportComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "metadata.csv.withTranslations"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTranslatedResultsCount());
  }
}
function CsvExportComponent_div_0_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "metadata.csv.frenchDescription"));
  }
}
function CsvExportComponent_div_0_tr_39_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("max-width", "250px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r3.frenchTranslatedDescription || "-", " ");
  }
}
function CsvExportComponent_div_0_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CsvExportComponent_div_0_tr_39_td_5_Template, 2, 3, "td", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-width", "200px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r3.url, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-width", "250px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r3.metaDescription, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.includeTranslations);
  }
}
function CsvExportComponent_div_0_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ... ", \u0275\u0275pipeBind2(2, 1, "metadata.csv.andMore", \u0275\u0275pureFunction1(4, _c011, ctx_r1.results.length - 2)), " ");
  }
}
function CsvExportComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "p-card");
    \u0275\u0275template(2, CsvExportComponent_div_0_ng_template_2_Template, 5, 3, "ng-template", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "span", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, CsvExportComponent_div_0_div_16_Template, 6, 4, "div", 11);
    \u0275\u0275elementStart(17, "div", 8)(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 10);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 12)(24, "h4", 13);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 14)(28, "table", 15)(29, "thead")(30, "tr", 16)(31, "th", 17);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 17);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, CsvExportComponent_div_0_th_37_Template, 3, 3, "th", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "tbody");
    \u0275\u0275template(39, CsvExportComponent_div_0_tr_39_Template, 6, 7, "tr", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, CsvExportComponent_div_0_div_40_Template, 3, 6, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 21)(42, "p-button", 22);
    \u0275\u0275listener("onClick", function CsvExportComponent_div_0_Template_p_button_onClick_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToCsv());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p-button", 23);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275listener("onClick", function CsvExportComponent_div_0_Template_p_button_onClick_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToCsv());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 24)(47, "small", 25);
    \u0275\u0275element(48, "i", 26);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, "metadata.csv.description"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 19, "metadata.csv.totalUrls"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.results.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.includeTranslations);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 21, "metadata.csv.columns"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.includeTranslations ? 7 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 23, "metadata.csv.preview"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 25, "metadata.csv.url"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 27, "metadata.csv.metaDescription"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.includeTranslations);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.results.slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.results.length > 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx_r1.getExportButtonLabel());
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 29, "metadata.csv.copyForExcel"))("outlined", true)("pTooltip", \u0275\u0275pipeBind1(45, 31, "metadata.csv.copyTooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 33, "metadata.csv.note"), " ");
  }
}
var CsvExportComponent = class _CsvExportComponent {
  translate;
  results = [];
  includeTranslations = false;
  constructor(translate) {
    this.translate = translate;
  }
  getTranslatedResultsCount() {
    return this.results.filter((r2) => r2.frenchTranslatedDescription).length;
  }
  exportToCsv() {
    if (!this.results || this.results.length === 0) {
      return;
    }
    const csvContent = this.generateCsvContent();
    this.downloadCsv(csvContent);
  }
  generateCsvContent() {
    const headers = this.getHeaders();
    const rows = this.results.map((result) => this.resultToRow(result));
    const allRows = [headers, ...rows];
    return allRows.map((row) => row.map((cell) => this.escapeCsvCell(cell)).join(",")).join("\n");
  }
  getHeaders() {
    const baseHeaders = [
      this.translate.instant("metadata.csv.url"),
      this.translate.instant("metadata.csv.language"),
      this.translate.instant("metadata.csv.scrapedContent"),
      this.translate.instant("metadata.csv.metaDescription"),
      this.translate.instant("metadata.csv.metaKeywords")
    ];
    if (this.includeTranslations) {
      baseHeaders.push(this.translate.instant("metadata.csv.frenchDescription"), this.translate.instant("metadata.csv.frenchKeywords"));
    }
    return baseHeaders;
  }
  resultToRow(result) {
    const row = [
      result.url,
      result.language,
      result.scrapedContent,
      result.metaDescription,
      result.metaKeywords
    ];
    if (this.includeTranslations && result.frenchTranslatedDescription) {
      row.push(result.frenchTranslatedDescription, result.frenchTranslatedKeywords || "");
    } else if (this.includeTranslations) {
      row.push("", "");
    }
    return row;
  }
  escapeCsvCell(cell) {
    if (cell == null) {
      return "";
    }
    const cellStr = String(cell);
    if (cellStr.includes(",") || cellStr.includes("\n") || cellStr.includes('"')) {
      const escaped = cellStr.replace(/"/g, '""');
      return `"${escaped}"`;
    }
    return cellStr;
  }
  downloadCsv(content) {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, -5);
    const filename = this.includeTranslations ? `metadata-with-translations-${timestamp}.csv` : `metadata-results-${timestamp}.csv`;
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  getExportButtonLabel() {
    const count = this.results.length;
    return this.translate.instant("metadata.csv.exportButton", { count });
  }
  static \u0275fac = function CsvExportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CsvExportComponent)(\u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CsvExportComponent, selectors: [["ca-metadata-csv-export"]], inputs: { results: "results", includeTranslations: "includeTranslations" }, decls: 1, vars: 1, consts: [["class", "csv-export-container", 4, "ngIf"], [1, "csv-export-container"], ["pTemplate", "header"], [1, "export-content"], [1, "export-info", "mb-3"], [1, "text-sm", "text-500", "m-0"], [1, "export-stats", "mb-3", "p-3", "surface-100", "border-round"], [1, "flex", "align-items-center", "justify-content-between"], [1, "stat-item"], [1, "text-xs", "text-500", "block", "mb-1"], [1, "text-xl", "font-bold", "text-primary"], ["class", "stat-item", 4, "ngIf"], [1, "export-preview", "mb-3"], [1, "text-sm", "font-semibold", "mb-2"], [1, "preview-table", "p-2", "surface-50", "border-round"], [1, "w-full", "text-xs"], [1, "border-bottom-1", "surface-border"], [1, "text-left", "p-1"], ["class", "text-left p-1", 4, "ngIf"], ["class", "border-bottom-1 surface-border", 4, "ngFor", "ngForOf"], ["class", "text-center text-xs text-500 mt-2", 4, "ngIf"], [1, "export-actions", "flex", "gap-2"], ["icon", "pi pi-file-export", "severity", "primary", 3, "onClick", "label"], ["icon", "pi pi-copy", "severity", "secondary", 3, "onClick", "label", "outlined", "pTooltip"], [1, "export-note", "mt-3"], [1, "text-xs", "text-500"], [1, "pi", "pi-info-circle", "mr-1"], [1, "flex", "align-items-center", "p-3"], [1, "pi", "pi-download", "mr-2"], [1, "m-0"], [1, "p-1", "text-overflow-ellipsis", "white-space-nowrap", "overflow-hidden"], ["class", "p-1 text-overflow-ellipsis white-space-nowrap overflow-hidden", 3, "max-width", 4, "ngIf"], [1, "text-center", "text-xs", "text-500", "mt-2"]], template: function CsvExportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CsvExportComponent_div_0_Template, 51, 35, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.results && ctx.results.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TranslateModule, TranslatePipe, ButtonModule, Button, PrimeTemplate, CardModule, Card, TooltipModule, Tooltip], styles: ["\n\n.csv-export-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n.export-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.export-stats[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.preview-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.preview-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  table-layout: fixed;\n}\n.preview-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  background: var(--surface-100);\n}\n.preview-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.text-overflow-ellipsis[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n}\n.white-space-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.export-note[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--surface-200);\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.border-bottom-1[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n.surface-border[_ngcontent-%COMP%] {\n  border-color: var(--surface-border);\n}\n/*# sourceMappingURL=csv-export.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsvExportComponent, [{
    type: Component,
    args: [{ selector: "ca-metadata-csv-export", standalone: true, imports: [
      CommonModule,
      TranslateModule,
      ButtonModule,
      CardModule,
      TooltipModule
    ], template: `<div class="csv-export-container" *ngIf="results && results.length > 0">\r
  <p-card>\r
    <ng-template pTemplate="header">\r
      <div class="flex align-items-center p-3">\r
        <i class="pi pi-download mr-2"></i>\r
        <h3 class="m-0">{{ 'metadata.csv.title' | translate }}</h3>\r
      </div>\r
    </ng-template>\r
\r
    <div class="export-content">\r
      <div class="export-info mb-3">\r
        <p class="text-sm text-500 m-0">\r
          {{ 'metadata.csv.description' | translate }}\r
        </p>\r
      </div>\r
\r
      <div class="export-stats mb-3 p-3 surface-100 border-round">\r
        <div class="flex align-items-center justify-content-between">\r
          <div class="stat-item">\r
            <span class="text-xs text-500 block mb-1">{{ 'metadata.csv.totalUrls' | translate }}</span>\r
            <span class="text-xl font-bold text-primary">{{ results.length }}</span>\r
          </div>\r
          <div class="stat-item" *ngIf="includeTranslations">\r
            <span class="text-xs text-500 block mb-1">{{ 'metadata.csv.withTranslations' | translate }}</span>\r
            <span class="text-xl font-bold text-primary">{{ getTranslatedResultsCount() }}</span>\r
          </div>\r
          <div class="stat-item">\r
            <span class="text-xs text-500 block mb-1">{{ 'metadata.csv.columns' | translate }}</span>\r
            <span class="text-xl font-bold text-primary">{{ includeTranslations ? 7 : 5 }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="export-preview mb-3">\r
        <h4 class="text-sm font-semibold mb-2">{{ 'metadata.csv.preview' | translate }}</h4>\r
        <div class="preview-table p-2 surface-50 border-round">\r
          <table class="w-full text-xs">\r
            <thead>\r
              <tr class="border-bottom-1 surface-border">\r
                <th class="text-left p-1">{{ 'metadata.csv.url' | translate }}</th>\r
                <th class="text-left p-1">{{ 'metadata.csv.metaDescription' | translate }}</th>\r
                <th class="text-left p-1" *ngIf="includeTranslations">{{ 'metadata.csv.frenchDescription' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let result of results.slice(0, 2)" class="border-bottom-1 surface-border">\r
                <td class="p-1 text-overflow-ellipsis white-space-nowrap overflow-hidden" [style.max-width]="'200px'">\r
                  {{ result.url }}\r
                </td>\r
                <td class="p-1 text-overflow-ellipsis white-space-nowrap overflow-hidden" [style.max-width]="'250px'">\r
                  {{ result.metaDescription }}\r
                </td>\r
                <td class="p-1 text-overflow-ellipsis white-space-nowrap overflow-hidden" [style.max-width]="'250px'" *ngIf="includeTranslations">\r
                  {{ result.frenchTranslatedDescription || '-' }}\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
          <div class="text-center text-xs text-500 mt-2" *ngIf="results.length > 2">\r
            ... {{ 'metadata.csv.andMore' | translate: {count: results.length - 2} }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="export-actions flex gap-2">\r
        <p-button \r
          [label]="getExportButtonLabel()"\r
          icon="pi pi-file-export"\r
          severity="primary"\r
          (onClick)="exportToCsv()">\r
        </p-button>\r
        <p-button \r
          [label]="'metadata.csv.copyForExcel' | translate"\r
          icon="pi pi-copy"\r
          severity="secondary"\r
          [outlined]="true"\r
          [pTooltip]="'metadata.csv.copyTooltip' | translate"\r
          (onClick)="exportToCsv()">\r
        </p-button>\r
      </div>\r
\r
      <div class="export-note mt-3">\r
        <small class="text-xs text-500">\r
          <i class="pi pi-info-circle mr-1"></i>\r
          {{ 'metadata.csv.note' | translate }}\r
        </small>\r
      </div>\r
    </div>\r
  </p-card>\r
</div>`, styles: ["/* src/app/views/metadata-assistant/components/csv-export/csv-export.component.css */\n.csv-export-container {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n.export-content {\n  padding: 0;\n}\n.export-stats {\n  background: var(--surface-100);\n}\n.stat-item {\n  text-align: center;\n}\n.preview-table {\n  overflow-x: auto;\n}\n.preview-table table {\n  font-size: 0.75rem;\n  table-layout: fixed;\n}\n.preview-table th {\n  font-weight: 600;\n  color: var(--text-color);\n  background: var(--surface-100);\n}\n.preview-table td {\n  color: var(--text-color-secondary);\n}\n.text-overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n.white-space-nowrap {\n  white-space: nowrap;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.export-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.export-note {\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--surface-200);\n}\n.text-primary {\n  color: var(--primary-color);\n}\n.border-bottom-1 {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n.surface-border {\n  border-color: var(--surface-border);\n}\n/*# sourceMappingURL=csv-export.component.css.map */\n"] }]
  }], () => [{ type: TranslateService }], { results: [{
    type: Input
  }], includeTranslations: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CsvExportComponent, { className: "CsvExportComponent", filePath: "src/app/views/metadata-assistant/components/csv-export/csv-export.component.ts", lineNumber: 22 });
})();

// src/app/services/metadata-assistant.service.ts
var ALLOWED_HOSTS = /* @__PURE__ */ new Set([
  "cra-design.github.io",
  "cra-proto.github.io",
  "gc-proto.github.io",
  "test.canada.ca",
  "www.canada.ca"
]);
var MetadataAssistantService = class _MetadataAssistantService {
  http;
  apiKeyService;
  OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
  SCRAPING_TIMEOUT = 3e4;
  // 30 seconds
  API_TIMEOUT = 6e4;
  // 60 seconds
  TRANSLATION_TIMEOUT = 9e4;
  // 90 seconds with retry
  constructor(http, apiKeyService) {
    this.http = http;
    this.apiKeyService = apiKeyService;
  }
  processUrls(options) {
    const results = [];
    return from(options.urls).pipe(switchMap((url) => this.processUrl(url, options.model, options.translateToFrench)), map((result) => {
      results.push(result);
      return results;
    }), catchError((error) => {
      console.error("Error processing URLs:", error);
      return throwError(() => error);
    }));
  }
  processUrl(url, model, translateToFrench) {
    return this.scrapeUrl(url).pipe(switchMap((scrapedContent) => {
      if (!scrapedContent || scrapedContent.length < 50) {
        return throwError(() => new Error("Content too short or invalid for processing"));
      }
      const language = this.detectLanguage(scrapedContent);
      return this.generateMetadata(scrapedContent, model, language).pipe(switchMap((metadata) => {
        const result = {
          url,
          scrapedContent,
          metaDescription: metadata.description,
          metaKeywords: metadata.keywords,
          language
        };
        if (translateToFrench && language === "en") {
          return this.translateMetadata(metadata).pipe(map((translated) => __spreadProps(__spreadValues({}, result), {
            frenchTranslatedDescription: translated.description,
            frenchTranslatedKeywords: translated.keywords
          })));
        }
        return of(result);
      }));
    }));
  }
  scrapeUrl(url) {
    try {
      const parsedUrl = new URL(url);
      if (!ALLOWED_HOSTS.has(parsedUrl.host)) {
        return throwError(() => new Error(`Host not allowed: ${parsedUrl.host}. Only government domains are supported.`));
      }
    } catch (error) {
      return throwError(() => new Error("Invalid URL format"));
    }
    return from(fetch(`${url}?_=${Date.now()}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache"
    })).pipe(timeout(this.SCRAPING_TIMEOUT), switchMap((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch URL: HTTP ${response.status}`);
      }
      return from(response.text());
    }), map((html) => this.extractTextContent(html)), catchError((error) => {
      console.error("Error scraping URL:", error);
      if (error.message.includes("Host not allowed")) {
        return throwError(() => error);
      }
      return throwError(() => new Error(`Failed to scrape URL: ${error.message || "Unknown error"}`));
    }));
  }
  extractTextContent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    let mainElement = this.findMainElement(doc);
    if (!mainElement) {
      console.warn("No main element found in page, attempting fallback to body content");
      mainElement = doc.body;
      if (!mainElement) {
        console.error("No body element found in page");
        return "";
      }
    }
    const contentElement = mainElement.cloneNode(true);
    const unwantedClasses = [
      "provisional most-requested-bullets well well-sm brdr-0",
      "pagedetails container",
      "lnkbx",
      "pagedetails",
      "gc-prtts",
      "alert alert-info",
      "footer",
      "nav",
      "header",
      "aside"
    ];
    unwantedClasses.forEach((className) => {
      contentElement.querySelectorAll(`.${className.replace(/ /g, ".")}`).forEach((el) => el.remove());
    });
    ["footer", "nav", "header", "aside"].forEach((tagName) => {
      contentElement.querySelectorAll(tagName).forEach((el) => el.remove());
    });
    contentElement.querySelectorAll("h2.h3").forEach((h2) => {
      const text2 = h2.textContent || "";
      if (text2.includes("On this page:") || text2.includes("Sur cette page :")) {
        const nextSibling = h2.nextElementSibling;
        if (nextSibling && nextSibling.tagName === "UL") {
          nextSibling.querySelectorAll("li").forEach((li) => {
            li.setAttribute("data-on-this-page", "true");
          });
          nextSibling.remove();
        }
        h2.remove();
      }
    });
    contentElement.querySelectorAll("h2").forEach((h2) => {
      const text2 = h2.textContent || "";
      if (text2.includes("On this page") || text2.includes("Sur cette page")) {
        let nextElement = h2.nextElementSibling;
        while (nextElement && nextElement.tagName === "UL") {
          nextElement.querySelectorAll("li").forEach((li) => {
            li.setAttribute("data-on-this-page", "true");
          });
          nextElement = nextElement.nextElementSibling;
        }
      }
    });
    const allowedTags = ["h1", "h2", "h3", "h4", "p", "li"];
    const textContent = [];
    allowedTags.forEach((tag) => {
      contentElement.querySelectorAll(tag).forEach((element) => {
        if (tag === "h2") {
          const text3 = element.textContent || "";
          if (text3.includes("Chat with Charlie") || text3.includes("Clavardez avec Charlie")) {
            return;
          }
        }
        if (tag === "li" && element.hasAttribute("data-on-this-page")) {
          return;
        }
        const text2 = element.textContent?.trim();
        if (text2 && text2.length > 0) {
          textContent.push(text2);
        }
      });
    });
    const fullText = textContent.join(" ");
    console.log(`Extracted ${fullText.length} characters of content`);
    if (fullText.length < 100) {
      console.warn(`Very short content extracted: '${fullText}'`);
    } else if (fullText.length > 2500) {
      console.log(`Content truncated from ${fullText.length} to 2500 characters`);
    }
    return fullText.substring(0, 2500);
  }
  findMainElement(doc) {
    const mainSelectors = [
      'main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"]',
      'main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"].col-md-9.col-md-push-3',
      'main[role="main"][property="mainContentOfPage"].container',
      'main[role="main"][property="mainContentOfPage"]'
    ];
    for (const selector of mainSelectors) {
      const element = doc.querySelector(selector);
      if (element) {
        const isLastSelector = selector === mainSelectors[mainSelectors.length - 1];
        if (isLastSelector) {
          const containerDiv = element.querySelector("div.container");
          if (containerDiv) {
            console.log("Found main element with container div inside");
            return containerDiv;
          }
        }
        return element;
      }
    }
    const mainElement = doc.querySelector('main[role="main"]');
    if (mainElement) {
      console.log("Found main element using generic selector");
      const containerDiv = mainElement.querySelector("div.container");
      if (containerDiv) {
        console.log("Found container div inside main element");
        return containerDiv;
      }
      return mainElement;
    }
    const plainMain = doc.querySelector("main");
    if (plainMain) {
      console.log("Found plain main element");
      const containerDiv = plainMain.querySelector("div.container");
      if (containerDiv) {
        console.log("Found container div inside plain main element");
        return containerDiv;
      }
      return plainMain;
    }
    const roleMain = doc.querySelector('[role="main"]');
    if (roleMain) {
      console.log('Found element with role="main"');
      return roleMain;
    }
    return null;
  }
  detectLanguage(content) {
    const frenchIndicators = [
      "le",
      "la",
      "les",
      "de",
      "du",
      "des",
      "un",
      "une",
      "et",
      "ou",
      "mais",
      "pour",
      "avec",
      "sans",
      "sur",
      "dans",
      "par",
      "que",
      "qui",
      "quoi",
      "dont",
      "o\xF9"
    ];
    const words = content.toLowerCase().split(/\s+/);
    const frenchWordCount = words.filter((word) => frenchIndicators.includes(word)).length;
    const frenchRatio = frenchWordCount / Math.max(words.length, 1);
    return frenchRatio > 0.05 ? "fr" : "en";
  }
  generateMetadata(content, model, language) {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error("API key not configured"));
    }
    const descriptionPrompt = language === "en" ? `As a search engine optimization expert, analyze the following content carefully and provide a concise, complete summary suitable for a meta description in English. The summary MUST be highly relevant to the specific content provided and capture its main topic and purpose. Use topic-specific terms found in the content, write in full sentences, and ensure the summary ends concisely within 275 characters. IMPORTANT: Provide ONLY the meta description itself with NO additional commentary or explanations.

${content}

Summary:` : `En tant qu'expert en r\xE9f\xE9rencement, analysez attentivement le contenu suivant et fournissez un r\xE9sum\xE9 concis et complet adapt\xE9 \xE0 une m\xE9ta-description en fran\xE7ais. Le r\xE9sum\xE9 DOIT \xEAtre parfaitement adapt\xE9 au contenu sp\xE9cifique fourni. Utilisez des termes sp\xE9cifiques au sujet, \xE9crivez en phrases compl\xE8tes, et assurez-vous que le r\xE9sum\xE9 se termine de mani\xE8re concise dans les 275 caract\xE8res. IMPORTANT: Fournissez UNIQUEMENT la m\xE9ta-description elle-m\xEAme SANS commentaire suppl\xE9mentaire.

${content}

R\xE9sum\xE9:`;
    const keywordsPrompt = language === "en" ? `As a search engine optimization expert, carefully analyze the following content and identify 10 meaningful, topic-specific meta keywords that are DIRECTLY EXTRACTED from or strongly implied by the content. IMPORTANT: Return ONLY a comma-separated list of keywords with absolutely NO additional notes or commentary. Exclude 'Canada Revenue Agency' from the keywords.

${content}

Keywords:` : `En tant qu'expert en optimisation pour les moteurs de recherche, analysez attentivement le contenu suivant et identifiez 10 mots-cl\xE9s m\xE9ta significatifs qui sont DIRECTEMENT EXTRAITS du contenu. IMPORTANT: Retournez UNIQUEMENT une liste de mots-cl\xE9s s\xE9par\xE9s par des virgules sans AUCUNE note suppl\xE9mentaire. Excluez 'Agence du revenu du Canada' des mots-cl\xE9s.

${content}

Mots-cl\xE9s:`;
    return this.callOpenRouter(descriptionPrompt, model, 200).pipe(switchMap((description) => {
      return this.callOpenRouter(keywordsPrompt, model, 100).pipe(map((keywords) => ({
        description: this.cleanMetadataResponse(description),
        keywords: this.cleanKeywordsResponse(keywords)
      })));
    }));
  }
  translateMetadata(metadata) {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error("API key not configured"));
    }
    const translationModel = "mistralai/mistral-small:free";
    const descriptionPrompt = `You are a professional translator specializing in Canadian government content. Translate the following English meta description to French, maintaining the formal tone used by the Canada Revenue Agency (CRA). 

Important CRA-specific terminology:
- "Canada Revenue Agency" \u2192 "Agence du revenu du Canada"
- "income tax" \u2192 "imp\xF4t sur le revenu"
- "benefits" \u2192 "prestations"
- "tax return" \u2192 "d\xE9claration de revenus"
- "GST/HST" \u2192 "TPS/TVH"
- "business number" \u2192 "num\xE9ro d'entreprise"
- "tax credit" \u2192 "cr\xE9dit d'imp\xF4t"
- "deduction" \u2192 "d\xE9duction"
- "tax-free savings account (TFSA)" \u2192 "compte d'\xE9pargne libre d'imp\xF4t (CELI)"
- "registered retirement savings plan (RRSP)" \u2192 "r\xE9gime enregistr\xE9 d'\xE9pargne-retraite (REER)"

IMPORTANT: Your response must contain ONLY the direct translation, with absolutely NO commentary, NO suggestions, NO explanations, and NO additional text of any kind. Return ONLY the translated text itself:

${metadata.description}

French translation:`;
    const keywordsPrompt = `Translate each of these English keywords to French. IMPORTANT: Return ONLY the translated keywords in a comma-separated list. Provide absolutely NO commentary, NO suggestions, NO explanations, and NO additional text of any kind. Return ONLY a comma-separated list of the translated keywords:

${metadata.keywords}

French keywords (comma-separated):`;
    return this.callOpenRouter(descriptionPrompt, translationModel, 200, this.TRANSLATION_TIMEOUT).pipe(
      retry({ count: 1, delay: 2e3 }),
      // Retry once after 2 seconds for cold starts
      switchMap((description) => {
        return this.callOpenRouter(keywordsPrompt, translationModel, 100, this.TRANSLATION_TIMEOUT).pipe(retry({ count: 1, delay: 2e3 }), map((keywords) => ({
          description: this.cleanMetadataResponse(description),
          keywords: this.cleanKeywordsResponse(keywords)
        })));
      })
    );
  }
  callOpenRouter(prompt, model, maxTokens, timeoutMs = this.API_TIMEOUT) {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error("API key not configured"));
    }
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://content-assistant.app",
      "X-Title": "Content Assistant"
    });
    const payload = {
      model,
      messages: [{ role: "user", content: prompt }],
      max_tokens: maxTokens,
      temperature: 0.3
    };
    return this.http.post(this.OPENROUTER_URL, payload, { headers }).pipe(timeout(timeoutMs), map((response) => {
      if (response.choices && response.choices[0]?.message?.content) {
        return response.choices[0].message.content;
      }
      throw new Error("Invalid response from API");
    }), catchError((error) => {
      console.error("OpenRouter API error:", error);
      return throwError(() => new Error("Failed to generate content"));
    }));
  }
  cleanMetadataResponse(response) {
    let cleaned = response.trim();
    if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
      cleaned = cleaned.slice(1, -1);
    }
    const prefixes = [
      "Here is a summary:",
      "Summary:",
      "Meta description:",
      "Voici un r\xE9sum\xE9:",
      "R\xE9sum\xE9:",
      "M\xE9ta-description:",
      "French translation:",
      "Translation:"
    ];
    for (const prefix of prefixes) {
      if (cleaned.toLowerCase().startsWith(prefix.toLowerCase())) {
        cleaned = cleaned.substring(prefix.length).trim();
      }
    }
    if (cleaned.length > 275) {
      const lastPeriod = cleaned.lastIndexOf(".", 275);
      if (lastPeriod > 200) {
        cleaned = cleaned.substring(0, lastPeriod + 1);
      } else {
        cleaned = cleaned.substring(0, 275);
      }
    }
    return cleaned;
  }
  cleanKeywordsResponse(response) {
    let cleaned = response.trim();
    if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
      cleaned = cleaned.slice(1, -1);
    }
    const prefixes = [
      "Keywords:",
      "Here are the keywords:",
      "Meta keywords:",
      "Mots-cl\xE9s:",
      "Voici les mots-cl\xE9s:",
      "French keywords:"
    ];
    for (const prefix of prefixes) {
      if (cleaned.toLowerCase().startsWith(prefix.toLowerCase())) {
        cleaned = cleaned.substring(prefix.length).trim();
      }
    }
    const keywords = cleaned.split(",").map((k) => k.trim()).filter((k) => k.length > 0);
    return keywords.join(", ");
  }
  static \u0275fac = function MetadataAssistantService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataAssistantService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ApiKeyService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MetadataAssistantService, factory: _MetadataAssistantService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataAssistantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: ApiKeyService }], null);
})();

// src/app/services/metadata-assistant-state.service.ts
var MetadataAssistantStateService = class _MetadataAssistantStateService {
  initialState = {
    isProcessing: false,
    currentUrl: "",
    currentStep: "idle",
    progress: 0,
    totalUrls: 0,
    processedUrls: 0,
    results: [],
    error: null,
    selectedModel: "mistralai/mistral-small-3.2-24b-instruct:free",
    translateToFrench: false
  };
  stateSubject = new BehaviorSubject(this.initialState);
  state$ = this.stateSubject.asObservable();
  constructor() {
  }
  getState() {
    return this.stateSubject.value;
  }
  updateState(updates) {
    const currentState = this.getState();
    this.stateSubject.next(__spreadValues(__spreadValues({}, currentState), updates));
  }
  startProcessing(urls, model, translateToFrench) {
    this.updateState({
      isProcessing: true,
      currentStep: "scraping",
      progress: 0,
      totalUrls: urls.length,
      processedUrls: 0,
      results: [],
      error: null,
      selectedModel: model,
      translateToFrench
    });
  }
  updateProgress(currentUrl, step) {
    const state2 = this.getState();
    const stepProgress = step === "scraping" ? 0.3 : step === "generating" ? 0.6 : 0.9;
    const urlProgress = state2.processedUrls / Math.max(state2.totalUrls, 1);
    const currentUrlProgress = stepProgress / Math.max(state2.totalUrls, 1);
    this.updateState({
      currentUrl,
      currentStep: step,
      progress: Math.min((urlProgress + currentUrlProgress) * 100, 100)
    });
  }
  addResult(result) {
    const state2 = this.getState();
    this.updateState({
      results: [...state2.results, result],
      processedUrls: state2.processedUrls + 1,
      progress: (state2.processedUrls + 1) / Math.max(state2.totalUrls, 1) * 100
    });
  }
  completeProcessing() {
    this.updateState({
      isProcessing: false,
      currentStep: "complete",
      progress: 100,
      currentUrl: ""
    });
  }
  setError(error) {
    this.updateState({
      isProcessing: false,
      currentStep: "idle",
      error
    });
  }
  reset() {
    this.stateSubject.next(this.initialState);
  }
  setSelectedModel(model) {
    this.updateState({ selectedModel: model });
  }
  setTranslateToFrench(translate) {
    this.updateState({ translateToFrench: translate });
  }
  clearResults() {
    this.updateState({
      results: [],
      progress: 0,
      processedUrls: 0,
      totalUrls: 0,
      currentStep: "idle",
      error: null
    });
  }
  static \u0275fac = function MetadataAssistantStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataAssistantStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MetadataAssistantStateService, factory: _MetadataAssistantStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataAssistantStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/views/metadata-assistant/metadata-assistant.component.ts
function MetadataAssistantComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "page.apiKey.active"), " ");
  }
}
function MetadataAssistantComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "page.apiKey.notSet"), " ");
  }
}
function MetadataAssistantComponent_section_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "p-button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function MetadataAssistantComponent_section_16_div_10_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "metadata.button.reset"))("outlined", true);
  }
}
function MetadataAssistantComponent_section_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "ca-progress-indicator", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("progressText", ctx_r1.getProgressText())("processedCount", ctx_r1.state.processedUrls)("totalFiles", ctx_r1.state.totalUrls)("showProgress", true)("showSpinner", ctx_r1.state.isProcessing);
  }
}
function MetadataAssistantComponent_section_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "p-message", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("text", ctx_r1.state.error);
  }
}
function MetadataAssistantComponent_section_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "ca-metadata-result", 25)(2, "ca-metadata-csv-export", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("results", ctx_r1.state.results)("showTranslations", ctx_r1.state.translateToFrench);
    \u0275\u0275advance();
    \u0275\u0275property("results", ctx_r1.state.results)("includeTranslations", ctx_r1.state.translateToFrench);
  }
}
function MetadataAssistantComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "div", 11)(2, "div", 12)(3, "ca-url-input", 13);
    \u0275\u0275listener("urlsChange", function MetadataAssistantComponent_section_16_Template_ca_url_input_urlsChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUrlsChange($event));
    })("urlInputChange", function MetadataAssistantComponent_section_16_Template_ca_url_input_urlInputChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUrlInputChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "ca-shared-model-selector", 15);
    \u0275\u0275listener("modelChange", function MetadataAssistantComponent_section_16_Template_ca_shared_model_selector_modelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onModelChange($event));
    })("translateChange", function MetadataAssistantComponent_section_16_Template_ca_shared_model_selector_translateChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTranslateToggle($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "p-button", 16);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onClick", function MetadataAssistantComponent_section_16_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startProcessing());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, MetadataAssistantComponent_section_16_div_10_Template, 3, 4, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275template(12, MetadataAssistantComponent_section_16_div_12_Template, 2, 5, "div", 5)(13, MetadataAssistantComponent_section_16_div_13_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, MetadataAssistantComponent_section_16_div_14_Template, 3, 4, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.state.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275property("selectedModel", ctx_r1.state.selectedModel)("models", ctx_r1.models)("label", "metadata.modelSelector.modelLabel")("cardTitle", "metadata.modelSelector.title")("showCard", true)("showTranslateOption", true)("translateToFrench", ctx_r1.state.translateToFrench)("disabled", ctx_r1.state.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx_r1.state.isProcessing ? \u0275\u0275pipeBind1(8, 16, "metadata.button.processing") : \u0275\u0275pipeBind1(9, 18, "metadata.button.process"))("disabled", !ctx_r1.canProcess())("loading", ctx_r1.state.isProcessing);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.state.results.length > 0 && !ctx_r1.state.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.state.isProcessing || ctx_r1.state.currentStep === "complete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.results.length > 0);
  }
}
function MetadataAssistantComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "p-message", 28);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("text", \u0275\u0275pipeBind1(2, 1, "metadata.errors.noApiKey"));
  }
}
var MetadataAssistantComponent = class _MetadataAssistantComponent {
  translate;
  metadataService;
  stateService;
  apiKeyService;
  destroy$ = new Subject();
  state = {
    isProcessing: false,
    currentUrl: "",
    currentStep: "idle",
    progress: 0,
    totalUrls: 0,
    processedUrls: 0,
    results: [],
    error: null,
    selectedModel: "mistralai/mistral-small-3.2-24b-instruct:free",
    translateToFrench: false
  };
  urlInput = "";
  urls = [];
  models = [
    {
      name: "Mistral Small 3.2 24B",
      value: "mistralai/mistral-small-3.2-24b-instruct:free",
      description: "metadata.models.mistralDescription"
    },
    {
      name: "Meta Llama 3.3 70B",
      value: "meta-llama/llama-3.3-70b-instruct:free",
      description: "metadata.models.llamaDescription"
    },
    {
      name: "Google Gemma 3 27B",
      value: "google/gemma-3-27b-it:free",
      description: "metadata.models.gemmaDescription"
    }
  ];
  constructor(translate, metadataService, stateService, apiKeyService) {
    this.translate = translate;
    this.metadataService = metadataService;
    this.stateService = stateService;
    this.apiKeyService = apiKeyService;
  }
  ngOnInit() {
    this.stateService.state$.pipe(takeUntil(this.destroy$)).subscribe((state2) => {
      this.state = state2;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onUrlsChange(urls) {
    this.urls = urls;
  }
  onUrlInputChange(input) {
    this.urlInput = input;
  }
  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  onModelChange(model) {
    this.stateService.setSelectedModel(model);
  }
  onTranslateToggle(translate) {
    this.stateService.setTranslateToFrench(translate);
  }
  startProcessing() {
    if (!this.apiKeyService.hasApiKey$.value) {
      this.stateService.setError(this.translate.instant("metadata.errors.noApiKey"));
      return;
    }
    if (this.urls.length === 0) {
      this.stateService.setError(this.translate.instant("metadata.errors.noUrls"));
      return;
    }
    this.stateService.startProcessing(this.urls, this.state.selectedModel, this.state.translateToFrench);
    this.metadataService.processUrls({
      urls: this.urls,
      model: this.state.selectedModel,
      translateToFrench: this.state.translateToFrench
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (results) => {
        results.forEach((result) => {
          this.stateService.addResult(result);
        });
      },
      error: (error) => {
        console.error("Processing error:", error);
        this.stateService.setError(error.message || this.translate.instant("metadata.errors.processingFailed"));
      },
      complete: () => {
        this.stateService.completeProcessing();
      }
    });
  }
  reset() {
    this.stateService.reset();
    this.urlInput = "";
    this.urls = [];
  }
  canProcess() {
    return this.apiKeyService.hasApiKey$.value && this.urls.length > 0 && !this.state.isProcessing;
  }
  getProgressText() {
    if (this.state.currentStep === "scraping") {
      return this.translate.instant("metadata.progress.scrapingContent");
    } else if (this.state.currentStep === "generating") {
      return this.translate.instant("metadata.progress.generatingMetadata");
    } else if (this.state.currentStep === "translating") {
      return this.translate.instant("metadata.progress.translatingContent");
    } else if (this.state.currentStep === "complete") {
      return this.translate.instant("metadata.progress.completeTitle");
    }
    return "";
  }
  static \u0275fac = function MetadataAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataAssistantComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(MetadataAssistantService), \u0275\u0275directiveInject(MetadataAssistantStateService), \u0275\u0275directiveInject(ApiKeyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataAssistantComponent, selectors: [["ca-metadata-assistant"]], decls: 20, vars: 21, consts: [[1, "metadata-assistant-container"], ["id", "wb-cont"], [1, "api-key-status", "mb-4"], ["class", "text-green-600", 4, "ngIf"], ["class", "text-orange-600", 4, "ngIf"], [4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "text-green-600"], [1, "pi", "pi-check-circle"], [1, "text-orange-600"], [1, "pi", "pi-exclamation-circle"], [1, "grid"], [1, "col-12", "lg:col-6"], [3, "urlsChange", "urlInputChange", "disabled"], [1, "mt-3"], [3, "modelChange", "translateChange", "selectedModel", "models", "label", "cardTitle", "showCard", "showTranslateOption", "translateToFrench", "disabled"], ["icon", "pi pi-sparkles", "severity", "primary", "styleClass", "w-full", 3, "onClick", "label", "disabled", "loading"], ["class", "mt-2", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["class", "results-section mt-4", 4, "ngIf"], [1, "mt-2"], ["icon", "pi pi-refresh", "severity", "secondary", "styleClass", "w-full", 3, "onClick", "label", "outlined"], [3, "progressText", "processedCount", "totalFiles", "showProgress", "showSpinner"], ["severity", "error", "styleClass", "w-full", 3, "text"], [1, "results-section", "mt-4"], [3, "results", "showTranslations"], [3, "results", "includeTranslations"], [1, "mt-4"], ["severity", "warn", "styleClass", "w-full", 3, "text"]], template: function MetadataAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "section", 2)(8, "div")(9, "strong");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, MetadataAssistantComponent_span_12_Template, 4, 3, "span", 3);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275template(14, MetadataAssistantComponent_span_14_Template, 4, 3, "span", 4);
      \u0275\u0275pipe(15, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, MetadataAssistantComponent_section_16_Template, 15, 20, "section", 5);
      \u0275\u0275pipe(17, "async");
      \u0275\u0275template(18, MetadataAssistantComponent_div_18_Template, 3, 3, "div", 6);
      \u0275\u0275pipe(19, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "metadata.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "metadata.description"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "page.apiKey.status"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 13, ctx.apiKeyService.hasApiKey$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(15, 15, ctx.apiKeyService.hasApiKey$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(17, 17, ctx.apiKeyService.hasApiKey$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(19, 19, ctx.apiKeyService.hasApiKey$));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    AsyncPipe,
    TranslateModule,
    TranslatePipe,
    FormsModule,
    ButtonModule,
    Button,
    CardModule,
    MessageModule,
    Message,
    SharedModelSelectorComponent,
    ProgressIndicatorComponent,
    UrlInputComponent,
    MetadataResultComponent,
    CsvExportComponent
  ], styles: ["\n\n.metadata-assistant-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.api-key-status[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.results-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=metadata-assistant.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataAssistantComponent, [{
    type: Component,
    args: [{ selector: "ca-metadata-assistant", standalone: true, imports: [
      CommonModule,
      TranslateModule,
      FormsModule,
      ButtonModule,
      CardModule,
      MessageModule,
      SharedModelSelectorComponent,
      ProgressIndicatorComponent,
      UrlInputComponent,
      MetadataResultComponent,
      CsvExportComponent
    ], template: `<div class="metadata-assistant-container">\r
  <h1 id="wb-cont">{{ 'metadata.title' | translate }}</h1>\r
  <p>{{ 'metadata.description' | translate }}</p>\r
\r
  <!-- API Key Status -->\r
  <section class="api-key-status mb-4">\r
    <div>\r
      <strong>{{ 'page.apiKey.status' | translate }}</strong>\r
      <span *ngIf="apiKeyService.hasApiKey$ | async" class="text-green-600">\r
        <i class="pi pi-check-circle"></i> {{ 'page.apiKey.active' | translate }}\r
      </span>\r
      <span *ngIf="!(apiKeyService.hasApiKey$ | async)" class="text-orange-600">\r
        <i class="pi pi-exclamation-circle"></i> {{ 'page.apiKey.notSet' | translate }}\r
      </span>\r
    </div>\r
  </section>\r
\r
  <!-- Main Content Area -->\r
  <section *ngIf="apiKeyService.hasApiKey$ | async">\r
    <div class="grid">\r
      <!-- Left Column: Input & Settings -->\r
      <div class="col-12 lg:col-6">\r
        <!-- URL Input -->\r
        <ca-url-input\r
          [disabled]="state.isProcessing"\r
          (urlsChange)="onUrlsChange($event)"\r
          (urlInputChange)="onUrlInputChange($event)">\r
        </ca-url-input>\r
\r
        <!-- Model Selector with Translation Option -->\r
        <div class="mt-3">\r
          <ca-shared-model-selector\r
            [selectedModel]="state.selectedModel"\r
            [models]="models"\r
            [label]="'metadata.modelSelector.modelLabel'"\r
            [cardTitle]="'metadata.modelSelector.title'"\r
            [showCard]="true"\r
            [showTranslateOption]="true"\r
            [translateToFrench]="state.translateToFrench"\r
            [disabled]="state.isProcessing"\r
            (modelChange)="onModelChange($event)"\r
            (translateChange)="onTranslateToggle($event)">\r
          </ca-shared-model-selector>\r
        </div>\r
\r
        <!-- Process Button -->\r
        <div class="mt-3">\r
          <p-button \r
            [label]="state.isProcessing ? ('metadata.button.processing' | translate) : ('metadata.button.process' | translate)"\r
            icon="pi pi-sparkles"\r
            [disabled]="!canProcess()"\r
            [loading]="state.isProcessing"\r
            severity="primary"\r
            styleClass="w-full"\r
            (onClick)="startProcessing()">\r
          </p-button>\r
        </div>\r
\r
        <!-- Reset Button -->\r
        <div class="mt-2" *ngIf="state.results.length > 0 && !state.isProcessing">\r
          <p-button \r
            [label]="'metadata.button.reset' | translate"\r
            icon="pi pi-refresh"\r
            severity="secondary"\r
            [outlined]="true"\r
            styleClass="w-full"\r
            (onClick)="reset()">\r
          </p-button>\r
        </div>\r
      </div>\r
\r
      <!-- Right Column: Progress & Error Messages -->\r
      <div class="col-12 lg:col-6">\r
        <!-- Progress Indicator -->\r
        <div *ngIf="state.isProcessing || state.currentStep === 'complete'">\r
          <ca-progress-indicator\r
            [progressText]="getProgressText()"\r
            [processedCount]="state.processedUrls"\r
            [totalFiles]="state.totalUrls"\r
            [showProgress]="true"\r
            [showSpinner]="state.isProcessing">\r
          </ca-progress-indicator>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div *ngIf="state.error" class="mt-3">\r
          <p-message \r
            severity="error" \r
            [text]="state.error"\r
            styleClass="w-full">\r
          </p-message>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Results Section -->\r
    <div class="results-section mt-4" *ngIf="state.results.length > 0">\r
      <!-- Metadata Results -->\r
      <ca-metadata-result\r
        [results]="state.results"\r
        [showTranslations]="state.translateToFrench">\r
      </ca-metadata-result>\r
\r
      <!-- CSV Export -->\r
      <ca-metadata-csv-export\r
        [results]="state.results"\r
        [includeTranslations]="state.translateToFrench">\r
      </ca-metadata-csv-export>\r
    </div>\r
  </section>\r
\r
  <!-- No API Key Message -->\r
  <div *ngIf="!(apiKeyService.hasApiKey$ | async)" class="mt-4">\r
    <p-message \r
      severity="warn" \r
      [text]="'metadata.errors.noApiKey' | translate"\r
      styleClass="w-full">\r
    </p-message>\r
  </div>\r
</div>`, styles: ["/* src/app/views/metadata-assistant/metadata-assistant.component.css */\n.metadata-assistant-container {\n  padding: 1rem;\n}\n.api-key-status {\n  margin-bottom: 1.5rem;\n}\n.results-section {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=metadata-assistant.component.css.map */\n"] }]
  }], () => [{ type: TranslateService }, { type: MetadataAssistantService }, { type: MetadataAssistantStateService }, { type: ApiKeyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataAssistantComponent, { className: "MetadataAssistantComponent", filePath: "src/app/views/metadata-assistant/metadata-assistant.component.ts", lineNumber: 37 });
})();

// src/app/views/static/about.component.ts
var AboutComponent = class _AboutComponent {
  constructor() {
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["ca-about"]], decls: 6, vars: 6, consts: [["id", "wb-cont"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "title.about"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "about.content"));
    }
  }, dependencies: [TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "ca-about", imports: [TranslateModule], template: `
    <h1 id="wb-cont">{{ 'title.about' | translate}}</h1>
    <p>{{'about.content' | translate }}</p>    
  ` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/views/static/about.component.ts", lineNumber: 13 });
})();

// src/app/views/example/test.component.ts
function TestComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Link");
    \u0275\u0275elementEnd()();
  }
}
function TestComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "p-button", 15);
    \u0275\u0275listener("onClick", function TestComponent_ng_template_21_Template_p_button_onClick_4_listener() {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fetchAndGoToCompare(link_r2.url));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", link_r2.url, " ");
  }
}
var TestComponent = class _TestComponent {
  urlDataService;
  uploadState;
  router;
  translate;
  //Initialize stuff here
  //This runs first, use it to inject services & other dependencies (delete if not needed)
  constructor(urlDataService, uploadState, router, translate) {
    this.urlDataService = urlDataService;
    this.uploadState = uploadState;
    this.router = router;
    this.translate = translate;
  }
  //Add any services you're using
  //Your functions go here
  //This runs once after the constuctor, delete if not needed.
  ngOnInit() {
    console.log(`Test page - your API key is: localStorage.getItem('apiKey')`);
  }
  //Horizontal radio button example
  yourSelectedButton = WebViewType.Diff;
  yourArray = [
    { label: "page.compare.view.original", value: WebViewType.Original, icon: "pi pi-file" },
    { label: "page.compare.view.modified", value: WebViewType.Modified, icon: "pi pi-file-edit" },
    { label: "page.compare.view.diff", value: WebViewType.Diff, icon: "pi pi-sort-alt" }
  ];
  // Your function to determine what happens when radio buttons are selected
  yourFunction(viewType) {
    this.yourSelectedButton = viewType;
    console.warn(`Option changed to: `, viewType);
  }
  // Fetches URL content and navigates to page assistant compare tool
  error = "";
  loading = false;
  fetchAndGoToCompare(url) {
    return __async(this, null, function* () {
      const unknownError = this.translate.instant("page.upload.error.unknown");
      const tryError = this.translate.instant("page.upload.url.error.try");
      this.loading = true;
      this.error = "";
      try {
        const mainHTML = yield this.urlDataService.fetchAndProcess(url);
        this.uploadState.setUploadData({
          originalUrl: url,
          originalHtml: mainHTML.html,
          modifiedUrl: url,
          modifiedHtml: mainHTML.html,
          found: {
            original: mainHTML.found,
            modified: mainHTML.found
          }
        });
        this.router.navigate(["page-assistant/compare"]);
      } catch (err) {
        this.error = `${tryError} ${err.message || err || unknownError}`;
      } finally {
        this.loading = false;
      }
    });
  }
  //Sample data for table
  links = [
    { title: "Taxes", url: "https://www.canada.ca/en/services/taxes.html" },
    { title: "Scams and fraud - CRA", url: "https://www.canada.ca/en/revenue-agency/corporate/scams-fraud.html" },
    { title: "Income earned illegally is taxable", url: "https://www.canada.ca/en/revenue-agency/corporate/scams-fraud/income-earned-illegally-taxable.html" },
    { title: "Return a payment - Canada Dental Benefit - Closed", url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/dental-benefit/return-payment.html" }
  ];
  static \u0275fac = function TestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestComponent)(\u0275\u0275directiveInject(UrlDataService), \u0275\u0275directiveInject(UploadStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestComponent, selectors: [["ca-test"]], decls: 40, vars: 12, consts: [["id", "wb-cont"], [3, "innerHTML"], [1, "flex", "flex-row", "gap-2"], ["label", "Primary"], ["label", "Secondary", "severity", "secondary"], ["label", "Help", "severity", "help"], ["label", "Info", "severity", "info"], ["label", "Success", "severity", "success"], ["label", "Danger", "severity", "danger"], ["label", "Warn", "severity", "warn"], ["label", "Contrast", "severity", "contrast"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["label", "your.translation.key", "name", "unique-name", 3, "selectedChange", "options", "selected"], ["variant", "text", "severity", "info", 3, "onClick"]], template: function TestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "p", 1);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementStart(8, "div", 2);
      \u0275\u0275element(9, "p-button", 3)(10, "p-button", 4)(11, "p-button", 5)(12, "p-button", 6)(13, "p-button", 7)(14, "p-button", 8)(15, "p-button", 9)(16, "p-button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h2");
      \u0275\u0275text(18, "Table of links that drop you into page compare tool");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-table", 11);
      \u0275\u0275template(20, TestComponent_ng_template_20_Template, 5, 0, "ng-template", 12)(21, TestComponent_ng_template_21_Template, 6, 2, "ng-template", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h2");
      \u0275\u0275text(23, "Horizontal radio button component");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "This component accepts:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ul")(27, "li");
      \u0275\u0275text(28, 'label="your.translation.key" to set the label above the buttons');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li");
      \u0275\u0275text(30, 'name="unique-name" in case you use it more than once on a page');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li");
      \u0275\u0275text(32, '[options]="yourArray" with your array of radio button labels, values, and icons ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li");
      \u0275\u0275text(34, '[(selected)]="yourSelectedButton" to define which button is currently selected');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li");
      \u0275\u0275text(36, '(selectedChange)="yourFunction($event) to define what happens when the buttons are clicked');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "The component emits the value of the selected radio button.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ca-horizontal-radio-buttons", 14);
      \u0275\u0275twoWayListener("selectedChange", function TestComponent_Template_ca_horizontal_radio_buttons_selectedChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.yourSelectedButton, $event) || (ctx.yourSelectedButton = $event);
        return $event;
      });
      \u0275\u0275listener("selectedChange", function TestComponent_Template_ca_horizontal_radio_buttons_selectedChange_39_listener($event) {
        return ctx.yourFunction($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "title.test"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "test.text"));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 10, "test.html"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", ctx.links);
      \u0275\u0275advance(20);
      \u0275\u0275property("options", ctx.yourArray);
      \u0275\u0275twoWayProperty("selected", ctx.yourSelectedButton);
    }
  }, dependencies: [TranslateModule, TranslatePipe, HorizontalRadioButtonsComponent, TableModule, Table, PrimeTemplate, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestComponent, [{
    type: Component,
    args: [{ selector: "ca-test", imports: [TranslateModule, HorizontalRadioButtonsComponent, TableModule, Button], template: `<!--Create a copy of this component called "my-test" to use as your personal testing space. You can access it locally at http://localhost:4200/test-->\r
<!--Any changes made to the my-test folder will NOT be tracked or uploaded to GitHub-->\r
<h1 id="wb-cont">{{ 'title.test' | translate}}</h1>\r
<p>{{'test.text' | translate }}</p>\r
<p [innerHTML]="'test.html' | translate"></p>\r
<div class="flex flex-row gap-2">\r
  <p-button label="Primary" />\r
  <p-button label="Secondary" severity="secondary" />\r
  <p-button label="Help" severity="help" />\r
  <p-button label="Info" severity="info" />\r
  <p-button label="Success" severity="success" />\r
  <p-button label="Danger" severity="danger" />\r
  <p-button label="Warn" severity="warn" />\r
  <p-button label="Contrast" severity="contrast" />\r
</div>\r
<h2>Table of links that drop you into page compare tool</h2>\r
<p-table [value]="links">\r
  <ng-template pTemplate="header">\r
    <tr>\r
      <th>Title</th>\r
      <th>Link</th>\r
    </tr>\r
  </ng-template>\r
  <ng-template pTemplate="body" let-link>\r
    <tr>\r
      <td>{{ link.title }}</td>\r
      <td>\r
        <p-button\r
                  variant="text" severity="info"\r
                  (onClick)="fetchAndGoToCompare(link.url)">\r
          {{ link.url }}\r
        </p-button>\r
      </td>\r
    </tr>\r
  </ng-template>\r
</p-table>\r
<h2>Horizontal radio button component</h2>\r
<p>This component accepts:</p>\r
<ul>\r
  <li>label="your.translation.key" to set the label above the buttons</li>\r
  <li>name="unique-name" in case you use it more than once on a page</li>\r
  <li>[options]="yourArray" with your array of radio button labels, values, and icons\r
  </li>\r
  <li>[(selected)]="yourSelectedButton" to define which button is currently selected</li>\r
  <li>(selectedChange)="yourFunction($event) to define what happens when the buttons are clicked</li>\r
</ul>\r
<p>The component emits the value of the selected radio button.</p>\r
<ca-horizontal-radio-buttons label="your.translation.key" name="unique-name" [options]="yourArray"\r
                             [(selected)]="yourSelectedButton" (selectedChange)="yourFunction($event)">\r
</ca-horizontal-radio-buttons>` }]
  }], () => [{ type: UrlDataService }, { type: UploadStateService }, { type: Router }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestComponent, { className: "TestComponent", filePath: "src/app/views/example/test.component.ts", lineNumber: 21 });
})();

// node_modules/primeng/fesm2022/primeng-buttongroup.mjs
var _c012 = ["*"];
var theme8 = ({
  dt
}) => `
.p-buttongroup .p-button {
    margin: 0;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-buttongroup .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-buttongroup {
    display:flex;
}

.p-buttongroup > .p-button {
    flex: 1;
}

/* For PrimeNG */

.p-buttongroup .p-button:focus,
.p-buttongroup p-button:focus .p-button,
.p-buttonset .p-button:focus,
.p-buttonset .p-button:focus,
.p-buttonset p-button:focus .p-button,
.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover,
.p-buttongroup p-button:not(:last-child) .p-button,
.p-buttongroup p-button:not(:last-child) .p-button:hover,
.p-buttonset .p-button:not(:last-child),
.p-buttonset .p-button:not(:last-child):hover,
.p-buttonset p-button:not(:last-child) .p-button,
.p-buttonset p-button:not(:last-child) .p-button:hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type),
.p-buttongroup p-button:not(:first-of-type):not(:last-of-type) .p-button,
.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),
.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type),
.p-buttongroup p-button:first-of-type:not(:only-of-type) .p-button,
.p-buttonset .p-button:first-of-type:not(:only-of-type),
.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type),
.p-buttongroup p-button:last-of-type:not(:only-of-type) .p-button,
.p-buttonset .p-button:last-of-type:not(:only-of-type),
.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`;
var classes8 = {
  root: "p-buttongroup p-component"
};
var ButtonGroupStyle = class _ButtonGroupStyle extends BaseStyle {
  name = "buttongroup";
  theme = theme8;
  classes = classes8;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonGroupStyle_BaseFactory;
    return function ButtonGroupStyle_Factory(__ngFactoryType__) {
      return (\u0275ButtonGroupStyle_BaseFactory || (\u0275ButtonGroupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonGroupStyle)))(__ngFactoryType__ || _ButtonGroupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ButtonGroupStyle,
    factory: _ButtonGroupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var ButtonGroupClasses;
(function(ButtonGroupClasses2) {
  ButtonGroupClasses2["root"] = "p-buttongroup";
})(ButtonGroupClasses || (ButtonGroupClasses = {}));
var ButtonGroup = class _ButtonGroup extends BaseComponent {
  _componentStyle = inject(ButtonGroupStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonGroup_BaseFactory;
    return function ButtonGroup_Factory(__ngFactoryType__) {
      return (\u0275ButtonGroup_BaseFactory || (\u0275ButtonGroup_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonGroup)))(__ngFactoryType__ || _ButtonGroup);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ButtonGroup,
    selectors: [["p-buttonGroup"], ["p-buttongroup"], ["p-button-group"]],
    features: [\u0275\u0275ProvidersFeature([ButtonGroupStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c012,
    decls: 2,
    vars: 0,
    consts: [["role", "group", 1, "p-buttongroup", "p-component"]],
    template: function ButtonGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroup, [{
    type: Component,
    args: [{
      selector: "p-buttonGroup, p-buttongroup, p-button-group",
      standalone: true,
      imports: [CommonModule],
      template: `
        <span class="p-buttongroup p-component" role="group">
            <ng-content></ng-content>
        </span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ButtonGroupStyle]
    }]
  }], null, null);
})();
var ButtonGroupModule = class _ButtonGroupModule {
  static \u0275fac = function ButtonGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonGroupModule,
    imports: [ButtonGroup],
    exports: [ButtonGroup]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ButtonGroup]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonGroup],
      exports: [ButtonGroup]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-confirmpopup.mjs
var _c013 = ["content"];
var _c111 = ["accepticon"];
var _c23 = ["rejecticon"];
var _c33 = ["headless"];
var _c43 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c53 = (a0) => ({
  value: "open",
  params: a0
});
var _c63 = (a0) => ({
  $implicit: a0
});
function ConfirmPopup_div_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c63, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c63, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    \u0275\u0275property("ngClass", "p-confirmpopup-icon");
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template, 1, 3, "i", 13);
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.message);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_p_button_6_2_ng_template_0_Template, 0, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 16);
    \u0275\u0275listener("onClick", function ConfirmPopup_div_0_ng_template_2_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_template_2_p_button_6_i_1_Template, 1, 2, "i", 17)(2, ConfirmPopup_div_0_ng_template_2_p_button_6_2_Template, 2, 0, null, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.rejectButtonLabel)("ngClass", "p-confirmpopup-reject-button")("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonStyleClass)("size", (ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.size) || "small")("text", (ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.text) || false)("buttonProps", ctx_r1.getRejectButtonProps());
    \u0275\u0275attribute("aria-label", ctx_r1.rejectButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon)("ngIfElse", ctx_r1.rejecticon);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_p_button_7_2_ng_template_0_Template, 0, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275listener("onClick", function ConfirmPopup_div_0_ng_template_2_p_button_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_template_2_p_button_7_i_1_Template, 1, 2, "i", 17)(2, ConfirmPopup_div_0_ng_template_2_p_button_7_2_Template, 2, 0, null, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.acceptButtonLabel)("ngClass", "p-confirmpopup-accept-button")("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptButtonStyleClass)("size", (ctx_r1.confirmation.acceptButtonProps == null ? null : ctx_r1.confirmation.acceptButtonProps.size) || "small")("buttonProps", ctx_r1.getAcceptButtonProps());
    \u0275\u0275attribute("aria-label", ctx_r1.acceptButtonLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon)("ngIfElse", ctx_r1.accepticontemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9, 1);
    \u0275\u0275template(2, ConfirmPopup_div_0_ng_template_2_ng_container_2_Template, 2, 4, "ng-container", 7)(3, ConfirmPopup_div_0_ng_template_2_ng_template_3_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275template(6, ConfirmPopup_div_0_ng_template_2_p_button_6_Template, 3, 10, "p-button", 11)(7, ConfirmPopup_div_0_ng_template_2_p_button_7_Template, 3, 9, "p-button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const withoutContentTemplate_r5 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngIfElse", withoutContentTemplate_r5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectVisible) !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptVisible) !== false);
  }
}
function ConfirmPopup_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function ConfirmPopup_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@animation.start", function ConfirmPopup_div_0_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function ConfirmPopup_div_0_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_container_1_Template, 2, 4, "ng-container", 7)(2, ConfirmPopup_div_0_ng_template_2_Template, 8, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r6 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.styleClass);
    \u0275\u0275property("ngClass", "p-confirmpopup p-component")("ngStyle", ctx_r1.style)("@animation", \u0275\u0275pureFunction1(10, _c53, \u0275\u0275pureFunction2(7, _c43, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngIfElse", notHeadless_r6);
  }
}
var theme9 = ({
  dt
}) => `
.p-confirmpopup {
    position: absolute;
    margin-top: ${dt("confirmpopup.gutter")};
    top: 0;
    left: 0;
    background: ${dt("confirmpopup.background")};
    color: ${dt("confirmpopup.color")};
    border: 1px solid ${dt("confirmpopup.border.color")};
    border-radius: ${dt("confirmpopup.border.radius")};
    box-shadow: ${dt("confirmpopup.shadow")};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${dt("confirmpopup.content.padding")};
    gap: ${dt("confirmpopup.content.gap")};
}

.p-confirmpopup-icon {
    font-size: ${dt("confirmpopup.icon.size")};
    width: ${dt("confirmpopup.icon.size")};
    height: ${dt("confirmpopup.icon.size")};
    color: ${dt("confirmpopup.icon.color")};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${dt("confirmpopup.footer.gap")};
    padding: ${dt("confirmpopup.footer.padding")};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${dt("confirmpopup.gutter")} * -1);
    margin-bottom: ${dt("confirmpopup.gutter")};
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: ${dt("confirmpopup.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${dt("confirmpopup.gutter")} - 2px);
    margin-left: calc(-1 * (${dt("confirmpopup.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt("confirmpopup.background")};
}

.p-confirmpopup:before {
    border-width: ${dt("confirmpopup.gutter")};
    margin-left: calc(-1 * ${dt("confirmpopup.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${dt("confirmpopup.border.color")};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${dt("confirmpopup.background")};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${dt("confirmpopup.border.color")};
}
`;
var classes9 = {
  root: "p-confirmpopup p-component",
  content: "p-confirmpopup-content",
  icon: "p-confirmpopup-icon",
  message: "p-confirmpopup-message",
  footer: "p-confirmpopup-footer",
  pcRejectButton: "p-confirmpopup-reject-button",
  pcAcceptButton: "p-confirmpopup-accept-button"
};
var ConfirmPopupStyle = class _ConfirmPopupStyle extends BaseStyle {
  name = "confirmpopup";
  theme = theme9;
  classes = classes9;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmPopupStyle_BaseFactory;
    return function ConfirmPopupStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmPopupStyle_BaseFactory || (\u0275ConfirmPopupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmPopupStyle)))(__ngFactoryType__ || _ConfirmPopupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmPopupStyle,
    factory: _ConfirmPopupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmPopupClasses;
(function(ConfirmPopupClasses2) {
  ConfirmPopupClasses2["root"] = "p-confirmpopup";
  ConfirmPopupClasses2["content"] = "p-confirmpopup-content";
  ConfirmPopupClasses2["icon"] = "p-confirmpopup-icon";
  ConfirmPopupClasses2["message"] = "p-confirmpopup-message";
  ConfirmPopupClasses2["footer"] = "p-confirmpopup-footer";
  ConfirmPopupClasses2["pcRejectButton"] = "p-confirmpopup-reject-button";
  ConfirmPopupClasses2["pcAcceptButton"] = "p-confirmpopup-accept-button";
})(ConfirmPopupClasses || (ConfirmPopupClasses = {}));
var ConfirmPopup = class _ConfirmPopup extends BaseComponent {
  el;
  confirmationService;
  renderer;
  cd;
  overlayService;
  document;
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Defines if the component is visible.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    this.cd.markForCheck();
  }
  container;
  subscription;
  confirmation;
  contentTemplate;
  acceptIconTemplate;
  rejectIconTemplate;
  headlessTemplate;
  _contentTemplate;
  _acceptIconTemplate;
  _rejectIconTemplate;
  _headlessTemplate;
  _visible;
  documentClickListener;
  documentResizeListener;
  scrollHandler;
  window;
  _componentStyle = inject(ConfirmPopupStyle);
  constructor(el, confirmationService, renderer, cd, overlayService, document2) {
    super();
    this.el = el;
    this.confirmationService = confirmationService;
    this.renderer = renderer;
    this.cd = cd;
    this.overlayService = overlayService;
    this.document = document2;
    this.window = this.document.defaultView;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  onEscapeKeydown(event) {
    if (this.confirmation && this.confirmation.closeOnEscape) {
      this.onReject();
    }
  }
  onAnimationStart(event) {
    if (event.toState === "open") {
      this.container = event.element;
      this.renderer.appendChild(this.document.body, this.container);
      this.align();
      this.bindListeners();
      const element = this.getElementToFocus();
      if (element) {
        element.focus();
      }
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        break;
    }
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  getElementToFocus() {
    switch (this.defaultFocus) {
      case "accept":
        return findSingle(this.container, ".p-confirm-popup-accept");
      case "reject":
        return findSingle(this.container, ".p-confirm-popup-reject");
      case "none":
        return null;
    }
  }
  align() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.config.zIndex.overlay);
    }
    if (!this.confirmation) {
      return;
    }
    absolutePosition(this.container, this.confirmation?.target, false);
    const containerOffset = getOffset(this.container);
    const targetOffset = getOffset(this.confirmation?.target);
    let arrowLeft = 0;
    if (containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left;
    }
    this.container.style.setProperty("--overlayArrowLeft", `${arrowLeft}px`);
    if (containerOffset.top < targetOffset.top) {
      addClass(this.container, "p-confirm-popup-flipped");
    }
  }
  hide() {
    this.visible = false;
  }
  onAccept() {
    if (this.confirmation?.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide();
  }
  onReject() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit();
    }
    this.hide();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindListeners() {
    setTimeout(() => {
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    });
  }
  unbindListeners() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      let documentEvent = isIOS() ? "touchstart" : "click";
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
      this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
        if (this.confirmation && this.confirmation.dismissableMask !== false) {
          let targetElement = this.confirmation.target;
          if (this.container !== event.target && !this.container?.contains(event.target) && targetElement !== event.target && !targetElement.contains(event.target)) {
            this.hide();
          }
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  onWindowResize() {
    if (this.visible && !isTouchDevice()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.confirmation?.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unsubscribeConfirmationSubscriptions() {
    if (this.confirmation) {
      if (this.confirmation.acceptEvent) {
        this.confirmation.acceptEvent.unsubscribe();
      }
      if (this.confirmation.rejectEvent) {
        this.confirmation.rejectEvent.unsubscribe();
      }
    }
  }
  onContainerDestroy() {
    this.unbindListeners();
    this.unsubscribeConfirmationSubscriptions();
    if (this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.confirmation = null;
    this.container = null;
  }
  restoreAppend() {
    if (this.container) {
      this.renderer.removeChild(this.document.body, this.container);
    }
    this.onContainerDestroy();
  }
  get acceptButtonLabel() {
    return this.confirmation?.acceptLabel || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.confirmation?.rejectLabel || this.config.getTranslation(TranslationKeys.REJECT);
  }
  ngOnDestroy() {
    this.restoreAppend();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function ConfirmPopup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopup)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmPopup,
    selectors: [["p-confirmPopup"], ["p-confirmpopup"], ["p-confirm-popup"]],
    contentQueries: function ConfirmPopup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c013, 4);
        \u0275\u0275contentQuery(dirIndex, _c111, 4);
        \u0275\u0275contentQuery(dirIndex, _c23, 4);
        \u0275\u0275contentQuery(dirIndex, _c33, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostBindings: function ConfirmPopup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function ConfirmPopup_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      key: "key",
      defaultFocus: "defaultFocus",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      visible: "visible"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmPopupStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["notHeadless", ""], ["content", ""], ["withoutContentTemplate", ""], ["rejecticon", ""], ["accepticontemplate", ""], ["role", "alertdialog", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "alertdialog", 3, "click", "ngClass", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-confirmpopup-content"], [1, "p-confirmpopup-footer"], ["type", "button", 3, "label", "ngClass", "styleClass", "size", "text", "buttonProps", "onClick", 4, "ngIf"], ["type", "button", 3, "label", "ngClass", "styleClass", "size", "buttonProps", "onClick", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], [1, "p-confirmpopup-message"], [3, "ngClass"], ["type", "button", 3, "onClick", "label", "ngClass", "styleClass", "size", "text", "buttonProps"], [3, "class", 4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["type", "button", 3, "onClick", "label", "ngClass", "styleClass", "size", "buttonProps"]],
    template: function ConfirmPopup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmPopup_div_0_Template, 4, 12, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.visible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule, ButtonModule, Button],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopup, [{
    type: Component,
    args: [{
      selector: "p-confirmPopup, p-confirmpopup, p-confirm-popup",
      standalone: true,
      imports: [CommonModule, SharedModule, ButtonModule],
      template: `
        <div
            *ngIf="visible"
            [ngClass]="'p-confirmpopup p-component'"
            [ngStyle]="style"
            [class]="styleClass"
            role="alertdialog"
            (click)="onOverlayClick($event)"
            [@animation]="{
                value: 'open',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
        >
            <ng-container *ngIf="headlessTemplate || _headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate || _headlessTemplate; context: { $implicit: confirmation }"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div #content class="p-confirmpopup-content">
                    <ng-container *ngIf="contentTemplate || _contentTemplate; else withoutContentTemplate">
                        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: confirmation }"></ng-container>
                    </ng-container>
                    <ng-template #withoutContentTemplate>
                        <i [ngClass]="'p-confirmpopup-icon'" [class]="confirmation?.icon" *ngIf="confirmation?.icon"></i>
                        <span class="p-confirmpopup-message">{{ confirmation?.message }}</span>
                    </ng-template>
                </div>
                <div class="p-confirmpopup-footer">
                    <p-button
                        type="button"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [ngClass]="'p-confirmpopup-reject-button'"
                        [styleClass]="confirmation?.rejectButtonStyleClass"
                        [size]="confirmation.rejectButtonProps?.size || 'small'"
                        [text]="confirmation.rejectButtonProps?.text || false"
                        *ngIf="confirmation?.rejectVisible !== false"
                        [attr.aria-label]="rejectButtonLabel"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        <i [class]="confirmation?.rejectIcon" *ngIf="confirmation?.rejectIcon; else rejecticon"></i>
                        <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                    </p-button>
                    <p-button
                        type="button"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [ngClass]="'p-confirmpopup-accept-button'"
                        [styleClass]="confirmation?.acceptButtonStyleClass"
                        [size]="confirmation.acceptButtonProps?.size || 'small'"
                        *ngIf="confirmation?.acceptVisible !== false"
                        [attr.aria-label]="acceptButtonLabel"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        <i [class]="confirmation?.acceptIcon" *ngIf="confirmation?.acceptIcon; else accepticontemplate"></i>
                        <ng-template #accepticontemplate *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                    </p-button>
                </div>
            </ng-template>
        </div>
    `,
      animations: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmPopupStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ConfirmationService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: OverlayService
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    key: [{
      type: Input
    }],
    defaultFocus: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var ConfirmPopupModule = class _ConfirmPopupModule {
  static \u0275fac = function ConfirmPopupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmPopupModule,
    imports: [ConfirmPopup, SharedModule],
    exports: [ConfirmPopup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmPopup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmPopup, SharedModule],
      exports: [ConfirmPopup, SharedModule]
    }]
  }], null, null);
})();

// src/app/views/ia-assistant/components/link-list.component.ts
function LinkListComponent_ng_container_0_div_4_p_iftalabel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function LinkListComponent_ng_container_0_div_4_p_iftalabel_1_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const url_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(url_r3.originalHref, $event) || (url_r3.originalHref = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 9);
    \u0275\u0275text(3, "Original URL");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const url_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", url_r3.originalHref);
  }
}
function LinkListComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, LinkListComponent_ng_container_0_div_4_p_iftalabel_1_Template, 4, 1, "p-iftalabel", 0);
    \u0275\u0275elementStart(2, "p-inputgroup")(3, "p-iftalabel")(4, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function LinkListComponent_ng_container_0_div_4_Template_input_ngModelChange_4_listener($event) {
      const url_r3 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(url_r3.href, $event) || (url_r3.href = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-inputgroup-addon")(8, "p-button", 6);
    \u0275\u0275listener("click", function LinkListComponent_ng_container_0_div_4_Template_p_button_click_8_listener($event) {
      const url_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.approve.emit({ url: url_r3, event: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-inputgroup-addon")(10, "p-button", 7);
    \u0275\u0275listener("click", function LinkListComponent_ng_container_0_div_4_Template_p_button_click_10_listener() {
      const url_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.remove.emit(url_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const url_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", url_r3.originalHref);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r3.labelKey);
    \u0275\u0275twoWayProperty("ngModel", url_r3.href);
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx_r3.labelKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.labelKey, " URL");
  }
}
function LinkListComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 1);
    \u0275\u0275text(2, "Only links from the following domains are allowed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 10)(4, "li");
    \u0275\u0275text(5, "www.canada.ca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "test.canada.ca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "gc-proto.github.io");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "cra-proto.github.io");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "cra-design.github.io");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function LinkListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275template(4, LinkListComponent_ng_container_0_div_4_Template, 11, 5, "div", 3)(5, LinkListComponent_ng_container_0_ng_container_5_Template, 14, 0, "ng-container", 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.labelKey, " links");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.links);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.labelKey === "Blocked");
  }
}
var LinkListComponent = class _LinkListComponent {
  labelKey;
  links;
  approve = new EventEmitter();
  remove = new EventEmitter();
  static \u0275fac = function LinkListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LinkListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LinkListComponent, selectors: [["ca-link-list"]], inputs: { labelKey: "labelKey", links: "links" }, outputs: { approve: "approve", remove: "remove" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "mb-0"], [1, "flex", "flex-column", "gap-2"], [4, "ngFor", "ngForOf"], ["type", "text", "pInputText", "", "variant", "outlined", "pSize", "small", "fluid", "", 3, "ngModelChange", "id", "ngModel"], [3, "for"], ["icon", "pi pi-check-circle", "pTooltip", "Revalidate", "tooltipPosition", "top", "severity", "success", "variant", "text", 3, "click"], ["icon", "pi pi-times-circle", "pTooltip", "Remove link", "tooltipPosition", "top", "severity", "danger", "variant", "text", 3, "click"], ["type", "text", "id", "original", "pInputText", "", "disabled", "", "pSize", "small", "fluid", "", 1, "ng-invalid", "ng-dirty", "bg-white", 3, "ngModelChange", "ngModel"], ["for", "original"], [1, "my-0"]], template: function LinkListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LinkListComponent_ng_container_0_Template, 6, 3, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.links == null ? null : ctx.links.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IftaLabelModule, IftaLabel, InputTextModule, InputText, InputGroupModule, InputGroup, InputGroupAddonModule, InputGroupAddon, ButtonModule, Button, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=link-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinkListComponent, [{
    type: Component,
    args: [{ selector: "ca-link-list", imports: [CommonModule, FormsModule, IftaLabelModule, InputTextModule, InputGroupModule, InputGroupAddonModule, ButtonModule, Tooltip], template: `
<ng-container *ngIf="links?.length">
  <h2 class="mb-0">{{ labelKey }} links</h2>
  <div class="flex flex-column gap-2">
    <div *ngFor="let url of links">
      <p-iftalabel *ngIf="url.originalHref">
        <input type="text" id="original" pInputText [(ngModel)]="url.originalHref" disabled pSize="small" class="ng-invalid ng-dirty bg-white" fluid/>
        <label for="original">Original URL</label>
      </p-iftalabel>
      <p-inputgroup>
        <p-iftalabel>
          <input type="text" [id]="labelKey" pInputText variant="outlined" [(ngModel)]="url.href" pSize="small" fluid/>
          <label [for]="labelKey">{{ labelKey }} URL</label>
        </p-iftalabel>
        <p-inputgroup-addon>
          <p-button icon="pi pi-check-circle" pTooltip="Revalidate" tooltipPosition="top" severity="success" variant="text" (click)="approve.emit({ url, event: $event })" />
        </p-inputgroup-addon>
        <p-inputgroup-addon>
          <p-button icon="pi pi-times-circle" pTooltip="Remove link" tooltipPosition="top" severity="danger" variant="text" (click)="remove.emit(url)" />
        </p-inputgroup-addon>
      </p-inputgroup>
    </div>
    <ng-container *ngIf="labelKey === 'Blocked'">
      <p class="mb-0">Only links from the following domains are allowed:</p>
      <ul class="my-0">
          <li>www.canada.ca</li>
          <li>test.canada.ca</li>
          <li>gc-proto.github.io</li>
          <li>cra-proto.github.io</li>
          <li>cra-design.github.io</li>
      </ul>
    </ng-container>
  </div>
</ng-container>
  `, styles: ["/* angular:styles/component:css;219558ef63f119a92210704329b58a3cdceaa4fb296db559e672f74512827dc7;C:/AmberDev/content-assistant/src/app/views/ia-assistant/components/link-list.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=link-list.component.css.map */\n"] }]
  }], null, { labelKey: [{
    type: Input
  }], links: [{
    type: Input
  }], approve: [{
    type: Output
  }], remove: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LinkListComponent, { className: "LinkListComponent", filePath: "src/app/views/ia-assistant/components/link-list.component.ts", lineNumber: 57 });
})();

// src/app/views/ia-assistant/ia-assistant.component.ts
function IaAssistantComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.urlChecked, "/", ctx_r1.urlTotal, "");
  }
}
function IaAssistantComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-chip", 11);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const url_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(url_r3.href);
  }
}
function IaAssistantComponent_ng_container_24_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(url_r4.href);
  }
}
function IaAssistantComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2", 13);
    \u0275\u0275text(2, "Valid links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 14);
    \u0275\u0275template(4, IaAssistantComponent_ng_container_24_li_4_Template, 2, 1, "li", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.okUrls);
  }
}
var IaAssistantComponent = class _IaAssistantComponent {
  confirmationService;
  constructor(confirmationService) {
    this.confirmationService = confirmationService;
  }
  rawUrls = "";
  urls = [];
  //Block unknown hosts
  allowedHosts = /* @__PURE__ */ new Set([
    "cra-design.github.io",
    "cra-proto.github.io",
    "gc-proto.github.io",
    "test.canada.ca",
    "www.canada.ca"
  ]);
  //for progress bar
  urlTotal = 0;
  urlChecked = 0;
  urlPercent = 0;
  validateUrls() {
    return __async(this, null, function* () {
      const rawLinks = this.rawUrls.split(/\r?\n/).map((url) => url.trim().toLowerCase()).filter(Boolean);
      const uniqueLinks = Array.from(new Set(rawLinks));
      this.urls = uniqueLinks.map((url) => ({ href: url, status: "checking" }));
      this.urlTotal = this.urls.length;
      this.urlChecked = 0;
      this.urlPercent = 0;
      const urlsToCheck = this.urls.map((url) => this.checkStatus(url).finally(() => {
        this.urlChecked++;
        this.urlPercent = this.urlChecked / this.urlTotal * 100;
      }));
      yield Promise.all(urlsToCheck);
      yield new Promise((resolve) => setTimeout(resolve, 1e3));
      this.urlChecked -= this.badUrls.length;
      for (const badUrl of this.badUrls) {
        badUrl.status = "checking";
        this.checkStatus(badUrl).finally(() => {
          this.urlChecked++;
          this.urlPercent = this.urlChecked / this.urlTotal * 100;
        });
      }
    });
  }
  checkStatus(link) {
    return __async(this, null, function* () {
      try {
        yield new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1e3));
        const url = new URL(link.href);
        if (!this.allowedHosts.has(url.host)) {
          link.status = "blocked";
          return;
        }
        const response = yield fetch(link.href, { method: "HEAD", cache: "no-store" });
        if (!response.ok || response.url.includes("404.html")) {
          link.status = "bad";
        } else if (response.url !== link.href) {
          link.status = "redirect";
          link.originalHref = link.href;
          link.href = response.url;
        } else {
          link.status = "ok";
        }
      } catch (error) {
        link.status = "bad";
      }
    });
  }
  //Filter based on status
  get checkingUrls() {
    return this.urls.filter((u) => u.status === "checking");
  }
  get blockedUrls() {
    return this.urls.filter((u) => u.status === "blocked");
  }
  get badUrls() {
    return this.urls.filter((u) => u.status === "bad");
  }
  get redirectedUrls() {
    return this.urls.filter((u) => u.status === "redirect");
  }
  get okUrls() {
    return this.urls.filter((u) => u.status === "ok");
  }
  remove(link) {
    this.urls = this.urls.filter((url) => url !== link);
    this.urlChecked -= 1;
    this.urlTotal -= 1;
    this.urlPercent = this.urlChecked / this.urlTotal * 100;
  }
  approve(link, $event) {
    link.href = link.href.trim().toLowerCase();
    const duplicate = this.urls.some((url) => url !== link && url.href === link.href);
    if (duplicate) {
      this.confirmDuplicate($event, link);
      return;
    }
    link.status = "checking";
    this.urlChecked -= 1;
    this.urlPercent = this.urlChecked / this.urlTotal * 100;
    this.checkStatus(link).finally(() => {
      this.urlChecked++;
      this.urlPercent = this.urlChecked / this.urlTotal * 100;
    });
  }
  confirmDuplicate(event, link) {
    this.confirmationService.confirm({
      target: event.currentTarget,
      message: "This URL is already included. Do you want to remove the duplicate link?",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: {
        label: "Cancel",
        severity: "secondary",
        outlined: true
      },
      acceptButtonProps: {
        label: "Yes"
      },
      accept: () => {
        this.remove(link);
      },
      reject: () => {
        console.log("Cancel adding duplicate link");
      }
    });
  }
  static \u0275fac = function IaAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IaAssistantComponent)(\u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IaAssistantComponent, selectors: [["ca-ia-assistant"]], decls: 25, vars: 13, consts: [["content", ""], ["id", "wb-cont"], ["id", "urls", "autoResize", "true", "rows", "5", "pTextarea", "", "fluid", "", 3, "ngModelChange", "input", "ngModel"], ["for", "urls"], [3, "value"], [1, "flex", "flex-column", "gap-2"], [4, "ngFor", "ngForOf"], ["labelKey", "Broken", 3, "approve", "remove", "links"], ["labelKey", "Redirected", 3, "approve", "remove", "links"], ["labelKey", "Blocked", 3, "approve", "remove", "links"], [4, "ngIf"], ["styleClass", "bg-yellow-100", 1, "max-w-max"], [1, "pi", "pi-spin", "pi-spinner"], [1, "mb-0"], [1, "my-0"]], template: function IaAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h1", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Paste some relevant URLs to get started.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "p-confirmpopup");
      \u0275\u0275elementStart(9, "p-iftalabel")(10, "textarea", 2);
      \u0275\u0275twoWayListener("ngModelChange", function IaAssistantComponent_Template_textarea_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.rawUrls, $event) || (ctx.rawUrls = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function IaAssistantComponent_Template_textarea_input_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.validateUrls());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "label", 3);
      \u0275\u0275text(12, "URLs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerStart(13);
      \u0275\u0275elementStart(14, "p-progressbar", 4);
      \u0275\u0275template(15, IaAssistantComponent_ng_template_15_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h2");
      \u0275\u0275text(18, "Validating links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 5);
      \u0275\u0275template(20, IaAssistantComponent_ng_container_20_Template, 5, 1, "ng-container", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementStart(21, "ca-link-list", 7);
      \u0275\u0275listener("approve", function IaAssistantComponent_Template_ca_link_list_approve_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.approve($event.url, $event.event));
      })("remove", function IaAssistantComponent_Template_ca_link_list_remove_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.remove($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ca-link-list", 8);
      \u0275\u0275listener("approve", function IaAssistantComponent_Template_ca_link_list_approve_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.approve($event.url, $event.event));
      })("remove", function IaAssistantComponent_Template_ca_link_list_remove_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.remove($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "ca-link-list", 9);
      \u0275\u0275listener("approve", function IaAssistantComponent_Template_ca_link_list_approve_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.approve($event.url, $event.event));
      })("remove", function IaAssistantComponent_Template_ca_link_list_remove_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.remove($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, IaAssistantComponent_ng_container_24_Template, 5, 1, "ng-container", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 9, "title.ia"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "ia.description"));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.rawUrls);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.urlPercent);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.checkingUrls);
      \u0275\u0275advance();
      \u0275\u0275property("links", ctx.badUrls);
      \u0275\u0275advance();
      \u0275\u0275property("links", ctx.redirectedUrls);
      \u0275\u0275advance();
      \u0275\u0275property("links", ctx.blockedUrls);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.okUrls.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe, TextareaModule, Textarea, InputTextModule, IftaLabelModule, IftaLabel, ProgressBarModule, ProgressBar, ButtonModule, ButtonGroupModule, InputGroupModule, InputGroupAddonModule, ChipModule, Chip, ConfirmPopupModule, ConfirmPopup, LinkListComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IaAssistantComponent, [{
    type: Component,
    args: [{ selector: "ca-ia-assistant", imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      TextareaModule,
      InputTextModule,
      IftaLabelModule,
      ProgressBarModule,
      ButtonModule,
      ButtonGroupModule,
      InputGroupModule,
      InputGroupAddonModule,
      ChipModule,
      Tooltip,
      ConfirmPopupModule,
      LinkListComponent
    ], template: `<h1 id="wb-cont">{{ 'title.ia' | translate}}</h1>\r
<p>{{'ia.description' | translate }}</p>\r
<p>Paste some relevant URLs to get started.</p>\r
<p-confirmpopup />\r
<p-iftalabel>\r
    <textarea id="urls" autoResize="true" rows="5" pTextarea [(ngModel)]="rawUrls" (input)="validateUrls()" fluid></textarea>\r
    <label for="urls">URLs</label>\r
</p-iftalabel>\r
\r
<!--div class="flex flex-column gap-2 mt-3">\r
    <ng-container *ngFor="let url of urls">\r
        <p-chip\r
                [styleClass]="getChipClass(url.status)"\r
                [removable]="isEditable(url.status)"\r
                class="max-w-max">\r
            <i [class]="getChipIcon(url.status)"></i>\r
            <span>{{ url.href }}</span>\r
            <i class="pi pi-pen-to-square cursor-pointer"\r
               *ngIf="isEditable(url.status)"\r
               (click)="edit(url.href)"></i>\r
        </p-chip>\r
    </ng-container>\r
</div-->\r
\r
<ng-container>\r
    <p-progressbar [value]="urlPercent">\r
        <ng-template #content let-value>\r
            <span>{{urlChecked}}/{{urlTotal}}</span>\r
        </ng-template>\r
    </p-progressbar>\r
    <h2>Validating links</h2>\r
    <div class="flex flex-column gap-2">\r
        <ng-container *ngFor="let url of checkingUrls">\r
            <p-chip styleClass="bg-yellow-100" class="max-w-max">\r
                <i class="pi pi-spin pi-spinner"></i>\r
                <span>{{ url.href }}</span>\r
            </p-chip>\r
        </ng-container>\r
    </div>\r
</ng-container>\r
\r
\r
<ca-link-list labelKey="Broken"\r
              [links]="badUrls"\r
              (approve)="approve($event.url, $event.event)"\r
              (remove)="remove($event)">\r
</ca-link-list>\r
<ca-link-list labelKey="Redirected"\r
              [links]="redirectedUrls"\r
              (approve)="approve($event.url, $event.event)"\r
              (remove)="remove($event)">\r
</ca-link-list>\r
<ca-link-list labelKey="Blocked"\r
              [links]="blockedUrls"\r
              (approve)="approve($event.url, $event.event)"\r
              (remove)="remove($event)">\r
</ca-link-list>\r
\r
<!--ng-container *ngIf="badUrls.length">\r
    <h2 class="mb-0">Broken links</h2>\r
    <div class="flex flex-column gap-2">\r
        <ng-container *ngFor="let url of badUrls">\r
            <p-inputgroup>\r
                <p-iftalabel>\r
                    <input type="text" id="broken" pInputText variant="outlined" [(ngModel)]="url.href" />\r
                    <label for="broken">Broken URL</label>\r
                </p-iftalabel>\r
                <p-inputgroup-addon>\r
                    <p-button icon="pi pi-check-circle" severity="success" variant="text" (click)="approve(url, $event)" />\r
                </p-inputgroup-addon>\r
                <p-inputgroup-addon>\r
                    <p-button icon="pi pi-times-circle" severity="danger" variant="text" (click)="remove(url)" />\r
                </p-inputgroup-addon>\r
            </p-inputgroup>\r
        </ng-container>\r
    </div>\r
\r
</ng-container>\r
<ng-container *ngIf="redirectedUrls.length">\r
    <h2 class="mb-0">Redirected links</h2>\r
    <div class="flex flex-column gap-2">\r
        <div *ngFor="let url of redirectedUrls">\r
            <p-iftalabel>\r
                <input type="text" id="original" pInputText variant="outlined" [(ngModel)]="url.originalHref" pSize="small" class="ng-invalid ng-dirty bg-white" disabled="true" fluid />\r
                <label for="original">Original URL</label>\r
            </p-iftalabel>\r
            <p-inputgroup>\r
                <p-iftalabel>\r
                    <input type="text" id="redirect" pInputText variant="outlined" [(ngModel)]="url.href" />\r
                    <label for="redirect">Redirected URL</label>\r
                </p-iftalabel>\r
                <p-inputgroup-addon>\r
                    <p-button icon="pi pi-check-circle" pTooltip="Revalidate" tooltipPosition="top" severity="success" variant="text" (click)="approve(url, $event)" />\r
                </p-inputgroup-addon>\r
                <p-inputgroup-addon>\r
                    <p-button icon="pi pi-times-circle" pTooltip="Remove link" tooltipPosition="top" severity="danger" variant="text" (click)="remove(url)" />\r
                </p-inputgroup-addon>\r
            </p-inputgroup>\r
        </div>\r
    </div>\r
</ng-container>\r
<ng-container *ngIf="blockedUrls.length">\r
    <h2 class="mb-0">Blocked links</h2>\r
    <div class="flex flex-column gap-2">\r
        <ng-container *ngFor="let url of blockedUrls">\r
            <p-inputgroup>\r
                <p-iftalabel>\r
                    <input type="text" id="blocked" pInputText variant="outlined" [(ngModel)]="url.href" />\r
                    <label for="blocked">Blocked URL</label>\r
                </p-iftalabel>\r
                <p-inputgroup-addon>\r
                    <p-button icon="pi pi-check-circle" severity="success" variant="text" (click)="approve(url, $event)" />\r
                </p-inputgroup-addon>\r
                <p-inputgroup-addon>\r
                    <p-button icon="pi pi-times-circle" severity="danger" variant="text" (click)="remove(url)" />\r
                </p-inputgroup-addon>\r
            </p-inputgroup>\r
        </ng-container>\r
    </div>\r
    <p class="mb-0">Only links from the following domains are allowed:</p>\r
    <ul class="my-0">\r
        <li>www.canada.ca</li>\r
        <li>test.canada.ca</li>\r
        <li>gc-proto.github.io</li>\r
        <li>cra-proto.github.io</li>\r
        <li>cra-design.github.io</li>\r
    </ul>\r
</ng-container-->\r
<ng-container *ngIf="okUrls.length">\r
    <h2 class="mb-0">Valid links</h2>\r
    <!--div class="flex flex-column gap-2">\r
        <ng-container *ngFor="let url of okUrls">\r
            <p-chip\r
                    [styleClass]="getChipClass(url.status)"\r
                    [removable]="isEditable(url.status)"\r
                    class="max-w-max">\r
                <i [class]="getChipIcon(url.status)"></i>\r
                <span>{{ url.href }}</span>\r
                <i class="pi pi-pen-to-square cursor-pointer"\r
                   *ngIf="isEditable(url.status)"\r
                   (click)="approve(url)"></i>\r
                <i class="pi pi-check-square cursor-pointer"\r
                   *ngIf="isRedirect(url.status)"\r
                   (click)="approve(url)"></i>\r
            </p-chip>\r
        </ng-container>\r
    </div-->\r
    <ul class="my-0">\r
        <li *ngFor="let url of okUrls">{{ url.href }}</li>\r
    </ul>\r
</ng-container>` }]
  }], () => [{ type: ConfirmationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IaAssistantComponent, { className: "IaAssistantComponent", filePath: "src/app/views/ia-assistant/ia-assistant.component.ts", lineNumber: 30 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LandingComponent,
    title: "title.landing"
  },
  {
    path: "page-assistant/compare",
    title: "title.page",
    canActivate: [() => {
      const uploadState = inject(UploadStateService);
      const router = inject(Router);
      if (!uploadState.getUploadData()) {
        router.navigate(["/page-assistant"]);
        return false;
      }
      return true;
    }],
    loadComponent: () => import("./chunk-XAC37KOY.js").then((m) => m.PageAssistantCompareComponent)
  },
  {
    path: "page-assistant/share",
    component: ShareComponent,
    title: "title.page"
  },
  {
    path: "page-assistant",
    component: PageUploadComponent,
    title: "title.page"
  },
  {
    path: "ia-assistant",
    component: IaAssistantComponent,
    title: "title.ia"
  },
  {
    path: "image-assistant",
    component: ImageAssistantComponent,
    title: "title.image"
  },
  {
    path: "translation-assistant",
    component: TranslationAssistantComponent,
    title: "title.translation"
  },
  {
    path: "project-assistant",
    component: ProjectAssistantComponent,
    title: "title.project"
  },
  {
    path: "inventory-assistant",
    component: InventoryAssistantComponent,
    title: "title.inventory"
  },
  {
    path: "metadata-assistant",
    component: MetadataAssistantComponent,
    title: "title.metadata"
  },
  {
    path: "about-us",
    component: AboutComponent,
    title: "title.about"
  },
  {
    path: "test",
    component: TestComponent,
    title: "title.test"
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "title.404"
  }
];

// src/app/app.config.ts
var httpLoaderFactory = (http) => new TranslateHttpLoader(http, "./i18n/", ".json");
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
    provideHttpClient(),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })]),
    provideAnimationsAsync(),
    providePrimeNG({
      inputVariant: "filled",
      // default is outlined
      theme: {
        preset: mypreset_default,
        options: {
          colorScheme: "light",
          // or 'dark'
          theme: "blue",
          // or 'indigo', 'teal', etc.
          ripple: true,
          darkModeSelector: ".dark-mode"
        }
      }
    }),
    MessageService,
    ConfirmationService
  ]
};

// src/app/template/api-reset.component.ts
var ApiResetComponent = class _ApiResetComponent {
  localStore;
  constructor(localStore) {
    this.localStore = localStore;
  }
  static \u0275fac = function ApiResetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiResetComponent)(\u0275\u0275directiveInject(LocalStorageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiResetComponent, selectors: [["ca-api-reset"]], decls: 2, vars: 4, consts: [["icon", "pi pi-key", "outlined", "", "severity", "secondary", "id", "api-key-reset-btn", "styleClass", "surface-border", 1, "my-2", "api-button", 3, "click", "label", "rounded"]], template: function ApiResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-button", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("click", function ApiResetComponent_Template_p_button_click_0_listener() {
        return ctx.localStore.removeData("apiKey");
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "apiKey.change"))("rounded", true);
    }
  }, dependencies: [TranslateModule, TranslatePipe, ButtonModule, Button], styles: ["\n\n@media (max-width: 768px) {\n    .api-button .p-button-label {\n    display: none;\n  }\n}\n  .api-button:hover .p-button-icon {\n  color: var(--p-primary-400) !important;\n}\n  html.dark-mode .api-button:hover .p-button-icon {\n  color: var(--p-primary-200) !important;\n}\n/*# sourceMappingURL=api-reset.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiResetComponent, [{
    type: Component,
    args: [{ selector: "ca-api-reset", imports: [TranslateModule, ButtonModule], template: `
    <p-button icon="pi pi-key" [label]="'apiKey.change' | translate" [rounded]="true" outlined severity="secondary"
    id="api-key-reset-btn" class="my-2 api-button" styleClass="surface-border" (click)="this.localStore.removeData('apiKey');" />
  `, styles: ["/* angular:styles/component:css;bba23d67f0c44f7da3fe1807e61603e3ec278e3a7974ab93a3b3cfcf38d3671d;C:/AmberDev/content-assistant/src/app/template/api-reset.component.ts */\n@media (max-width: 768px) {\n  ::ng-deep .api-button .p-button-label {\n    display: none;\n  }\n}\n::ng-deep .api-button:hover .p-button-icon {\n  color: var(--p-primary-400) !important;\n}\n::ng-deep html.dark-mode .api-button:hover .p-button-icon {\n  color: var(--p-primary-200) !important;\n}\n/*# sourceMappingURL=api-reset.component.css.map */\n"] }]
  }], () => [{ type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiResetComponent, { className: "ApiResetComponent", filePath: "src/app/template/api-reset.component.ts", lineNumber: 27 });
})();

// src/app/template/header.component.ts
function HeaderComponent_ca_api_reset_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ca-api-reset");
  }
}
var HeaderComponent = class _HeaderComponent {
  translate;
  localStore;
  theme;
  get logoSrc() {
    return this.theme.darkMode() ? "cra-logo-dark.png" : "cra-logo.png";
  }
  // constructor(public langToggle: LangToggleService){} //putting the code below into a service works but we aren't calling it anywhere else
  constructor(translate, localStore, theme10) {
    this.translate = translate;
    this.localStore = localStore;
    this.theme = theme10;
    var curLang = this.localStore.getData("lang") || this.translate.getBrowserLang() || "en";
    console.log(this.translate.getBrowserLang());
    this.translate.addLangs(["en", "fr"]);
    this.translate.setDefaultLang("en");
    this.translate.use(curLang);
  }
  selectLanguage() {
    var oppLang = "";
    if (this.translate.currentLang == "en") {
      oppLang = "fr";
    } else {
      oppLang = "en";
    }
    this.translate.use(oppLang);
    this.localStore.saveData("lang", oppLang);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["ca-header"]], decls: 11, vars: 9, consts: [["id", "header", 1, "pb-2"], [1, "flex", "align-items-center", "hidden", "md:block"], ["id", "cra-logo", "priority", "true", 1, "img-fluid", "fip-colour", "w-28rem", 3, "src", "alt"], [1, "flex", "align-items-center", "gap-3"], [4, "ngIf"], ["offIcon", "pi pi-moon", "offLabel", "", "onIcon", "pi pi-sun", "onLabel", "", "ariaLabel", "Toggle between dark and light mode", 1, "p-button-rounded", "p-button-secondary", "p-button-outlined", "p-button-sm", "surface-border", "pr-0", "darkmode-toggle", 3, "click", "ngModel"], ["tabindex", "0", 1, "cursor-pointer", "underline", "font-medium", "text-blue-600", "hover:text-blue-700", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "p-toolbar")(2, "div", 1);
      \u0275\u0275element(3, "img", 2);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, HeaderComponent_ca_api_reset_6_Template, 1, 0, "ca-api-reset", 4);
      \u0275\u0275elementStart(7, "p-togglebutton", 5);
      \u0275\u0275listener("click", function HeaderComponent_Template_p_togglebutton_click_7_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 6);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_8_listener() {
        return ctx.selectLanguage();
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.logoSrc, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(4, 5, "CRA"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.localStore.getData("apiKey") != null);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.theme.darkMode());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "opp.lang"), " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, TranslateModule, TranslatePipe, ToolbarModule, Toolbar, ButtonModule, ToggleButtonModule, ToggleButton, ApiResetComponent], styles: ["\n\n  .p-toolbar {\n  background-color: transparent !important;\n  border: none !important;\n}\nheader[_ngcontent-%COMP%] {\n  border-bottom-style: solid;\n  border-bottom-color: var(--p-gray-400);\n  border-width: 1px;\n  margin-top: -4rem;\n}\n  .darkmode-toggle:hover .p-togglebutton-icon {\n  color: var(--p-cyan-400) !important;\n}\n  html.dark-mode .darkmode-toggle:hover .p-togglebutton-icon {\n  color: var(--p-amber-400) !important;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "ca-header", imports: [CommonModule, FormsModule, TranslateModule, ToolbarModule, ButtonModule, ToggleButtonModule, ApiResetComponent], template: `
  <header id="header" class="pb-2">
  <p-toolbar>
    <div class="flex align-items-center hidden md:block">
      <img
        id="cra-logo"
        class="img-fluid fip-colour w-28rem"
        [src]="logoSrc"
        [alt]="'CRA' | translate"
        priority="true"
      />
    </div>
    <div class="flex align-items-center gap-3">
      <ca-api-reset
        *ngIf="this.localStore.getData('apiKey') != null">
      </ca-api-reset>

      <p-togglebutton
        offIcon="pi pi-moon"
        offLabel=""
        onIcon="pi pi-sun"
        onLabel=""
        class="p-button-rounded p-button-secondary p-button-outlined p-button-sm surface-border pr-0 darkmode-toggle"
        [ngModel] = "theme.darkMode()"
        (click)="theme.toggle()"
        ariaLabel="Toggle between dark and light mode">
      </p-togglebutton>

      <a
        class="cursor-pointer underline font-medium text-blue-600 hover:text-blue-700"
        tabindex="0"
        (click)="selectLanguage()">
        {{ 'opp.lang' | translate }}
      </a>
    </div>
  </p-toolbar>
</header>
  `, styles: ["/* angular:styles/component:css;607ff6dd9fa2de823f98ca3db927b4c2688fafc0a7c156a199ce40df64b470ce;C:/AmberDev/content-assistant/src/app/template/header.component.ts */\n::ng-deep .p-toolbar {\n  background-color: transparent !important;\n  border: none !important;\n}\nheader {\n  border-bottom-style: solid;\n  border-bottom-color: var(--p-gray-400);\n  border-width: 1px;\n  margin-top: -4rem;\n}\n::ng-deep .darkmode-toggle:hover .p-togglebutton-icon {\n  color: var(--p-cyan-400) !important;\n}\n::ng-deep html.dark-mode .darkmode-toggle:hover .p-togglebutton-icon {\n  color: var(--p-amber-400) !important;\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: TranslateService }, { type: LocalStorageService }, { type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/template/header.component.ts", lineNumber: 77 });
})();

// src/app/template/sidebar.component.ts
var _c014 = () => ["/"];
var _c113 = () => ["/page-assistant"];
var _c24 = () => ["/image-assistant"];
var _c34 = () => ["/translation-assistant"];
var _c44 = () => ["/inventory-assistant"];
var _c54 = () => ["/metadata-assistant"];
var _c64 = () => ["/about-us"];
var SidebarComponent = class _SidebarComponent {
  // Section toggle state
  isExpanded = {
    main: true,
    project: true,
    info: true
  };
  toggleSection(section) {
    this.isExpanded[section] = !this.isExpanded[section];
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["ca-sidebar"]], decls: 76, vars: 59, consts: [["id", "nav-bar", 1, "l-navbar", "show-n"], [1, "nav"], [1, "nav_logo"], [3, "routerLink"], [1, "material-icons", "text-primary-200"], [1, "logo_text"], [1, "nav_section"], [1, "nav_header", "text-primary-200", "hover:text-primary-400", 3, "click"], [1, "nav_section_text"], [1, "material-icons", "toggle-icon"], [1, "nav_section_body"], ["routerLinkActive", "active", 1, "nav_link", "flex", "hover:bg-primary-600", "border-round", 3, "routerLink"], [1, "material-icons"], [1, "nav_link_text"], [1, "section"], [1, "nav_header", "text-primary-200", "hover:text-primary-400", "hover:font-bold", 3, "click"], [1, "nav_link", "flex", "hover:bg-primary-600", "border-round", 3, "href"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "design_services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_10_listener() {
        return ctx.toggleSection("main");
      });
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "a", 11)(18, "span", 12);
      \u0275\u0275text(19, "article");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 13);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "a", 11)(24, "span", 12);
      \u0275\u0275text(25, "photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 13);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "a", 11)(30, "span", 12);
      \u0275\u0275text(31, "language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 13);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 14)(36, "div", 15);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_36_listener() {
        return ctx.toggleSection("project");
      });
      \u0275\u0275elementStart(37, "span", 8);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 9);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 10)(43, "a", 11)(44, "span", 12);
      \u0275\u0275text(45, "inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 13);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "a", 11)(50, "span", 12);
      \u0275\u0275text(51, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 13);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 14)(56, "div", 7);
      \u0275\u0275listener("click", function SidebarComponent_Template_div_click_56_listener() {
        return ctx.toggleSection("info");
      });
      \u0275\u0275elementStart(57, "span", 8);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 9);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 10)(63, "a", 11)(64, "span", 12);
      \u0275\u0275text(65, "web_asset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 13);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "a", 16);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementStart(71, "span", 12);
      \u0275\u0275text(72, "feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 13);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(52, _c014));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 28, "title.landing"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 30, "menu.content"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isExpanded.main ? "expand_less" : "expand_more");
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", !ctx.isExpanded.main);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(53, _c113));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 32, "menu.page"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(54, _c24));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 34, "menu.image"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(55, _c34));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 36, "menu.translation"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 38, "menu.project"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isExpanded.project ? "expand_less" : "expand_more");
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", !ctx.isExpanded.project);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(56, _c44));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 40, "menu.inventory"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(57, _c54));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 42, "menu.metadata"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 44, "menu.appInfo"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isExpanded.info ? "expand_less" : "expand_more");
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", !ctx.isExpanded.info);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(58, _c64));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 46, "menu.about"));
      \u0275\u0275advance(2);
      \u0275\u0275property("href", \u0275\u0275pipeBind1(70, 48, "feedback.email"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 50, "menu.feedback"));
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive, TranslateModule, TranslatePipe], styles: ["\n\n.l-navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.l-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: -30%;\n  width: var(--nav-width);\n  height: 100vh;\n  background-color: var(--p-gray-800);\n  padding: .5rem 1rem 1rem;\n  transition: .3s;\n  z-index: var(--z-fixed);\n}\n.nav[_ngcontent-%COMP%] {\n  height: 100%;\n  display: contents;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.nav_link[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  align-items: center;\n  column-gap: 1rem;\n  padding: .3rem 0 0 .3rem;\n  position: relative;\n  color: var(--first-color-light);\n  margin-bottom: .8rem;\n  transition: .3s;\n}\n.nav_link[_ngcontent-%COMP%]:hover {\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  margin-bottom: 0rem;\n}\n.nav_link.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.nav_link.active[_ngcontent-%COMP%] {\n  background-color: var(--p-primary-color);\n  border-radius: .25rem;\n  padding-bottom: .3rem;\n  margin-bottom: .1rem;\n}\n.nav_link.active-hide[_ngcontent-%COMP%] {\n  background-color: var(--p-primary-color);\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  width: 2.8rem;\n}\n.nav_logo[_ngcontent-%COMP%] {\n  display: flex;\n  grid-template-columns: max-content max-content;\n  align-items: center;\n  column-gap: 1rem;\n  padding: 0;\n  margin-bottom: 2rem;\n}\n.nav_logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.nav_logo-name[_ngcontent-%COMP%] {\n  color: var(--first-color-light);\n  font-weight: 700;\n}\n.show-n[_ngcontent-%COMP%] {\n  left: 0;\n}\n.section[_ngcontent-%COMP%] {\n  padding: .1rem;\n}\n.nav_section_body[_ngcontent-%COMP%] {\n  padding-left: .7rem;\n}\n.nav_section_body.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav_link_text[_ngcontent-%COMP%] {\n  margin-left: 0rem;\n}\n.nav_header[_ngcontent-%COMP%] {\n  font-size: 18px;\n  border-radius: .25rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 0.5rem 0;\n}\n.nav_header[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n  padding-bottom: .5rem;\n}\n.nav_header.active[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.nav_header.active[_ngcontent-%COMP%] {\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  margin-bottom: .1rem;\n}\n.nav_header.active-hide[_ngcontent-%COMP%] {\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  width: 2.8rem;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.nav_icon[_ngcontent-%COMP%], \n.nav_section_text[_ngcontent-%COMP%] {\n  margin-left: .5rem;\n}\n.nav_section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 100%;\n}\n@media (max-width: 600px) {\n  .section[_ngcontent-%COMP%], \n   .nav_section-body[_ngcontent-%COMP%], \n   .nav_section_text[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 100%;\n    min-width: 0;\n    display: block;\n  }\n  .nav_header[_ngcontent-%COMP%], \n   .nav_link_text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .toggle-icon[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 0.5rem;\n    align-self: flex-end;\n  }\n  .logo_text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  color: var(--first-color-light);\n}\n.nav_logo[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  align-self: flex-start;\n  margin-right: 0.5rem;\n  border-radius: 0.25rem;\n}\n.logo_text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  padding: 0 .5rem;\n  align-self: flex-start;\n}\n@media screen and (min-width: 600px) {\n  .l-navbar[_ngcontent-%COMP%] {\n    left: 0;\n    padding: 1rem 1rem 0;\n  }\n  .show-n[_ngcontent-%COMP%] {\n    width: calc(var(--nav-width) + 110px);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "ca-sidebar", standalone: true, imports: [CommonModule, RouterModule, TranslateModule], template: `<div class="l-navbar show-n" id="nav-bar">\r
  <nav class="nav">\r
    <!-- App Title -->\r
    <div class="nav_logo">\r
      <a [routerLink]="['/']">\r
        <span class="material-icons text-primary-200">design_services</span>\r
        <span class="logo_text">{{ 'title.landing' | translate }}</span>\r
      </a>\r
    </div>\r
\r
    <!-- Main Tools -->\r
    <div class="nav_section">\r
      <div class="nav_header text-primary-200 hover:text-primary-400" (click)="toggleSection('main')">\r
        <span class="nav_section_text">{{ 'menu.content' | translate }}</span>\r
        <span class="material-icons toggle-icon">{{ isExpanded.main ? 'expand_less' : 'expand_more' }}</span>\r
      </div>\r
      <div class="nav_section_body" [class.hidden]="!isExpanded.main">\r
        <a [routerLink]="['/page-assistant']" routerLinkActive="active"\r
          class="nav_link flex hover:bg-primary-600 border-round ">\r
          <span class="material-icons">article</span>\r
          <span class="nav_link_text">{{ 'menu.page' | translate }}</span>\r
        </a>\r
        <a [routerLink]="['/image-assistant']" routerLinkActive="active"\r
          class="nav_link flex hover:bg-primary-600 border-round">\r
          <span class="material-icons">photo</span>\r
          <span class="nav_link_text">{{ 'menu.image' | translate }}</span>\r
        </a>\r
        <a [routerLink]="['/translation-assistant']" routerLinkActive="active"\r
          class="nav_link flex hover:bg-primary-600 border-round">\r
          <span class="material-icons">language</span>\r
          <span class="nav_link_text">{{ 'menu.translation' | translate }}</span>\r
        </a>\r
      </div>\r
    </div>\r
\r
    <!-- Project Tools -->\r
    <div class="section">\r
      <div class="nav_header text-primary-200 hover:text-primary-400 hover:font-bold" (click)="toggleSection('project')">\r
        <span class="nav_section_text">{{ 'menu.project' | translate }}</span>\r
        <span class="material-icons toggle-icon">{{ isExpanded.project ? 'expand_less' : 'expand_more' }}</span>\r
      </div>\r
      <div class="nav_section_body" [class.hidden]="!isExpanded.project">\r
        <a [routerLink]="['/inventory-assistant']" routerLinkActive="active"\r
          class="nav_link flex hover:bg-primary-600 border-round">\r
          <span class="material-icons">inventory</span>\r
          <span class="nav_link_text">{{ 'menu.inventory' | translate }}</span>\r
        </a>\r
        <a [routerLink]="['/metadata-assistant']" routerLinkActive="active"\r
          class="nav_link flex hover:bg-primary-600 border-round">\r
          <span class="material-icons">description</span>\r
          <span class="nav_link_text">{{ 'menu.metadata' | translate }}</span>\r
        </a>\r
      </div>\r
    </div>\r
\r
    <!-- App Info -->\r
    <div class="section">\r
      <div class="nav_header text-primary-200 hover:text-primary-400" (click)="toggleSection('info')">\r
        <span class="nav_section_text">{{ 'menu.appInfo' | translate }}</span>\r
        <span class="material-icons toggle-icon">{{ isExpanded.info ? 'expand_less' : 'expand_more' }}</span>\r
      </div>\r
      <div class="nav_section_body" [class.hidden]="!isExpanded.info">\r
        <a [routerLink]="['/about-us']" routerLinkActive="active" class="nav_link flex hover:bg-primary-600 border-round">\r
          <span class="material-icons">web_asset</span>\r
          <span class="nav_link_text">{{ 'menu.about' | translate }}</span>\r
        </a>\r
        <a [href]="'feedback.email' | translate" class="nav_link flex hover:bg-primary-600 border-round">\r
          <span class="material-icons">feedback</span>\r
          <span class="nav_link_text">{{ 'menu.feedback' | translate }}</span>\r
        </a>\r
      </div>\r
    </div>\r
\r
  </nav>\r
</div>\r
`, styles: ["/* src/app/template/sidebar.component.css */\n.l-navbar a {\n  text-decoration: none;\n}\n.l-navbar {\n  position: fixed;\n  top: 0;\n  left: -30%;\n  width: var(--nav-width);\n  height: 100vh;\n  background-color: var(--p-gray-800);\n  padding: .5rem 1rem 1rem;\n  transition: .3s;\n  z-index: var(--z-fixed);\n}\n.nav {\n  height: 100%;\n  display: contents;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n}\n.nav_link {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  align-items: center;\n  column-gap: 1rem;\n  padding: .3rem 0 0 .3rem;\n  position: relative;\n  color: var(--first-color-light);\n  margin-bottom: .8rem;\n  transition: .3s;\n}\n.nav_link:hover {\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  margin-bottom: 0rem;\n}\n.nav_link.active:hover {\n  color: #fff;\n}\n.nav_link.active {\n  background-color: var(--p-primary-color);\n  border-radius: .25rem;\n  padding-bottom: .3rem;\n  margin-bottom: .1rem;\n}\n.nav_link.active-hide {\n  background-color: var(--p-primary-color);\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  width: 2.8rem;\n}\n.nav_logo {\n  display: flex;\n  grid-template-columns: max-content max-content;\n  align-items: center;\n  column-gap: 1rem;\n  padding: 0;\n  margin-bottom: 2rem;\n}\n.nav_logo-icon {\n  font-size: 1.25rem;\n}\n.nav_logo-name {\n  color: var(--first-color-light);\n  font-weight: 700;\n}\n.show-n {\n  left: 0;\n}\n.section {\n  padding: .1rem;\n}\n.nav_section_body {\n  padding-left: .7rem;\n}\n.nav_section_body.hidden {\n  display: none;\n}\n.nav_link_text {\n  margin-left: 0rem;\n}\n.nav_header {\n  font-size: 18px;\n  border-radius: .25rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 0.5rem 0;\n}\n.nav_header:hover {\n  font-weight: bold;\n  padding-bottom: .5rem;\n}\n.nav_header.active:hover {\n  color: #fff;\n}\n.nav_header.active {\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  margin-bottom: .1rem;\n}\n.nav_header.active-hide {\n  border-radius: .25rem;\n  padding-bottom: .5rem;\n  width: 2.8rem;\n}\n.toggle-icon {\n  margin-left: auto;\n}\n.nav_icon,\n.nav_section_text {\n  margin-left: .5rem;\n}\n.nav_section {\n  overflow: hidden;\n  max-width: 100%;\n}\n@media (max-width: 600px) {\n  .section,\n  .nav_section-body,\n  .nav_section_text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 100%;\n    min-width: 0;\n    display: block;\n  }\n  .nav_header,\n  .nav_link_text {\n    display: none;\n  }\n  .toggle-icon {\n    margin-left: 0;\n    margin-top: 0.5rem;\n    align-self: flex-end;\n  }\n  .logo_text {\n    display: none;\n  }\n}\n.nav_logo a {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  color: var(--first-color-light);\n}\n.nav_logo .material-icons {\n  font-size: 2.2rem;\n  align-self: flex-start;\n  margin-right: 0.5rem;\n  border-radius: 0.25rem;\n}\n.logo_text {\n  font-size: 1.1rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  padding: 0 .5rem;\n  align-self: flex-start;\n}\n@media screen and (min-width: 600px) {\n  .l-navbar {\n    left: 0;\n    padding: 1rem 1rem 0;\n  }\n  .show-n {\n    width: calc(var(--nav-width) + 110px);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/template/sidebar.component.ts", lineNumber: 13 });
})();

// src/app/template/footer.component.ts
var FooterComponent = class _FooterComponent {
  theme;
  constructor(theme10) {
    this.theme = theme10;
  }
  get logoSrc() {
    return this.theme.darkMode() ? "canada-logo-dark.png" : "canada-logo.png";
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["ca-footer"]], decls: 9, vars: 7, consts: [[1, "container"], [1, "flex", "align-items-end"], [1, "text-color-secondary", "text-sm", "pt-5"], [1, "img-fluid", "fip-colour", 3, "src", "alt"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "p-toolbar")(2, "div", 1)(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 1);
      \u0275\u0275element(7, "img", 3);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "app.version"));
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.logoSrc, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(8, 5, "GoC"));
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe, ToolbarModule, Toolbar], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "ca-footer", imports: [CommonModule, TranslateModule, ToolbarModule], template: `
<footer class="container">
  <p-toolbar>
    <div class="flex align-items-end">
      <p class="text-color-secondary text-sm pt-5">{{'app.version'|translate}}</p>
    </div>
    <div class="flex align-items-end">
      <img
          class="img-fluid fip-colour"
          [src]="logoSrc"
          [alt]="'GoC' | translate"
        />
    </div>
  </p-toolbar>
</footer>
  `, styles: ["/* angular:styles/component:css;219558ef63f119a92210704329b58a3cdceaa4fb296db559e672f74512827dc7;C:/AmberDev/content-assistant/src/app/template/footer.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], () => [{ type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/template/footer.component.ts", lineNumber: 32 });
})();

// src/app/template/api-key.component.ts
function ApiKeyComponent_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "apiKey.error"));
  }
}
function ApiKeyComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, ApiKeyComponent_div_13_ng_container_1_Template, 4, 3, "ng-container", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const apiField_r2 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", apiField_r2.errors == null ? null : apiField_r2.errors["required"]);
  }
}
var ApiKeyComponent = class _ApiKeyComponent {
  localStore;
  api = "";
  error = "";
  emailLink = "";
  messageTemplate = "";
  apiKeyInstructions = "";
  constructor(localStore) {
    this.localStore = localStore;
  }
  static \u0275fac = function ApiKeyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiKeyComponent)(\u0275\u0275directiveInject(LocalStorageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiKeyComponent, selectors: [["ca-api-key"]], decls: 16, vars: 18, consts: [["apiField", "ngModel", "apiKey", ""], [3, "header"], [1, "flex", "flex-column", "gap-3"], [1, "m-0"], ["pInputText", "", "required", "", 3, "ngModelChange", "placeholder", "ngModel"], ["pButton", "", "icon", "pi pi-key", "severity", "success", 3, "click", "label", "raised"], ["class", "text-danger small", 4, "ngIf"], [3, "innerHTML"], [1, "text-danger", "small"], [4, "ngIf"]], template: function ApiKeyComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-card", 1);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275elementStart(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-inputGroup")(7, "input", 4, 0);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApiKeyComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.api, $event) || (ctx.api = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275listener("click", function ApiKeyComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.localStore.saveData("apiKey", ctx.api));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, ApiKeyComponent_div_13_Template, 2, 1, "div", 6);
      \u0275\u0275element(14, "div", 7);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const apiField_r2 = \u0275\u0275reference(8);
      \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 8, "title.apiKey"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "apiKey.intro"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 12, "apiKey.placeholder"));
      \u0275\u0275twoWayProperty("ngModel", ctx.api);
      \u0275\u0275advance(4);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 14, "apiKey.save"))("raised", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", apiField_r2.invalid && apiField_r2.touched);
      \u0275\u0275advance();
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(15, 16, "apiKey.instructions"), \u0275\u0275sanitizeHtml);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, TranslateModule, TranslatePipe, ButtonModule, ButtonDirective, InputGroupModule, InputGroup, CardModule, Card], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiKeyComponent, [{
    type: Component,
    args: [{ selector: "ca-api-key", imports: [CommonModule, FormsModule, TranslateModule, ButtonModule, InputGroupModule, CardModule], template: `<p-card [header]="'title.apiKey' | translate">\r
  <div class="flex flex-column gap-3">\r
\r
    <p class="m-0">\r
      {{'apiKey.intro' | translate}}\r
    </p>\r
\r
    <p-inputGroup>\r
      <input pInputText [placeholder]="'apiKey.placeholder' | translate" [(ngModel)]="api" #apiField="ngModel" #apiKey required />\r
      <button pButton icon="pi pi-key" [label]="'apiKey.save' | translate" [raised]="true" severity="success"\r
              (click)="this.localStore.saveData('apiKey', api)"></button>\r
    </p-inputGroup>\r
\r
    <div *ngIf="apiField.invalid && apiField.touched" class="text-danger small">\r
      <ng-container *ngIf="apiField.errors?.['required']">\r
        <p class="m-0">{{'apiKey.error' | translate}}</p>\r
      </ng-container>\r
    </div>\r
<div [innerHTML]="'apiKey.instructions' | translate"></div>\r
</div>\r
</p-card>\r
` }]
  }], () => [{ type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiKeyComponent, { className: "ApiKeyComponent", filePath: "src/app/template/api-key.component.ts", lineNumber: 18 });
})();

// src/app/app.component.ts
function AppComponent_ca_api_key_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ca-api-key");
  }
}
function AppComponent_router_outlet_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AppComponent = class _AppComponent {
  CustomTitle;
  titleService;
  localStore;
  primeng;
  constructor(CustomTitle, titleService, localStore, primeng) {
    this.CustomTitle = CustomTitle;
    this.titleService = titleService;
    this.localStore = localStore;
    this.primeng = primeng;
  }
  ngOnInit() {
    this.primeng.ripple.set(true);
    console.log("The initial API key is: ", this.localStore.getData("apiKey"));
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(CustomTitleStrategy), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(PrimeNG));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["ca-root"]], decls: 7, vars: 2, consts: [["vocab", "http://schema.org/", "typeof", "WebPage", 1, "mx-8", "my-2", "container"], [1, "container"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "body", 0)(1, "main", 1);
      \u0275\u0275element(2, "ca-header")(3, "ca-sidebar");
      \u0275\u0275template(4, AppComponent_ca_api_key_4_Template, 1, 0, "ca-api-key", 2)(5, AppComponent_router_outlet_5_Template, 1, 0, "router-outlet", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "ca-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.localStore.getData("apiKey") === null);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.localStore.getData("apiKey") != null);
    }
  }, dependencies: [CommonModule, NgIf, RouterOutlet, RouterModule, TranslateModule, HeaderComponent, SidebarComponent, FooterComponent, ApiKeyComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "ca-root", imports: [CommonModule, RouterOutlet, RouterModule, TranslateModule, HeaderComponent, SidebarComponent, FooterComponent, ApiKeyComponent], template: `<body vocab="http://schema.org/" typeof="WebPage" class="mx-8 my-2 container">\r
  <main class="container">\r
    <ca-header></ca-header>\r
    <ca-sidebar></ca-sidebar>\r
    <ca-api-key *ngIf="this.localStore.getData('apiKey') === null"></ca-api-key>\r
    <router-outlet *ngIf="this.localStore.getData('apiKey') != null"></router-outlet>\r
  </main>\r
  <ca-footer></ca-footer>\r
</body>` }]
  }], () => [{ type: CustomTitleStrategy }, { type: Title }, { type: LocalStorageService }, { type: PrimeNG }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 21 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v19.2.14
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-regular-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
//# sourceMappingURL=main.js.map
