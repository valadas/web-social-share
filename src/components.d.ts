/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';


import {
  WebSocialShareInput,
  WebSocialShareInputConfig,
} from './types/web-social-share/web-social-share-input';


declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface WebSocialShareTarget {
      'displayNames': boolean;
      'share': WebSocialShareInputConfig;
    }

    interface WebSocialShare {
      'share': WebSocialShareInput;
      'show': boolean;
    }
  }


    interface HTMLWebSocialShareTargetElement extends StencilComponents.WebSocialShareTarget, HTMLStencilElement {}

    var HTMLWebSocialShareTargetElement: {
      prototype: HTMLWebSocialShareTargetElement;
      new (): HTMLWebSocialShareTargetElement;
    };
    

    interface HTMLWebSocialShareElement extends StencilComponents.WebSocialShare, HTMLStencilElement {}

    var HTMLWebSocialShareElement: {
      prototype: HTMLWebSocialShareElement;
      new (): HTMLWebSocialShareElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'web-social-share-target': JSXElements.WebSocialShareTargetAttributes;
    'web-social-share': JSXElements.WebSocialShareAttributes;
    }
  }

  namespace JSXElements {

    export interface WebSocialShareTargetAttributes extends HTMLAttributes {
      'displayNames'?: boolean;
      'onSelected'?: (event: CustomEvent) => void;
      'share'?: WebSocialShareInputConfig;
    }

    export interface WebSocialShareAttributes extends HTMLAttributes {
      'onClosed'?: (event: CustomEvent) => void;
      'share'?: WebSocialShareInput;
      'show'?: boolean;
    }
  }

  interface HTMLElementTagNameMap {
    'web-social-share-target': HTMLWebSocialShareTargetElement
    'web-social-share': HTMLWebSocialShareElement
  }

  interface ElementTagNameMap {
    'web-social-share-target': HTMLWebSocialShareTargetElement;
    'web-social-share': HTMLWebSocialShareElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;