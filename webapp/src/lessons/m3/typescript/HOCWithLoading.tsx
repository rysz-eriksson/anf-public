/* eslint-disable import/first */
import React from 'react'
import { Loader } from 'ui/atoms';

/**
 * 馃敟 Czym jest HOC? (Higher-Order Component)
 * 
 * TL;DR; (OOP) jest fabryk膮 innych komponent贸w
 * (FP) jest jednym wi臋cej poziomem domkni臋cia (closure)
 * kt贸ry pozwala sparametryzowa膰 inne komponenty
 * 
 * Normalnie komponenty moglibysmy opisa膰 przy u偶yciu takiej sygnatury:
 *    COMPONENT : PROPS -> VDOM
 * 
 * natomiast HOC ma 1 poziom wi臋cej:
 *    HOC : PARAMS -> COMPONENT
 * czyli
 *    HOC : PARAMS -> PROPS -> VDOM
 * (jak wida膰, closure)
 * 
 * przy czym te PARAMS mog膮 obejmowa膰 r贸偶ne rzeczy. Mog膮 to by膰 sztywne warto艣ci
 * (stringi czy cokolwiek), a mo偶e to by膰 inny komponent, kt贸ry zostaje opakowany
 * dodatkow膮 funkcjonalno艣ci膮. Cz臋sto jest to:
 *    HOC : (ComponentA, Params) -> PROPS -> VDOM
 * czyli poniek膮d
 *    HOC : (ComponentA, Params) -> ComponentB
 * 
 * Po co?
 * - poniewa偶 trzeba by艂o jako艣 "wyci膮ga膰 cz臋艣膰 wsp贸ln膮" pomi臋dzy komponentami. I dop贸ki nie by艂o hook贸w,
 * czyli logika by艂a w komponentach klasowych - to HOCe by艂y najcz臋艣ciej stosowanych patternem.
 * (Wcze艣niej by艂y mixiny 馃槗 - a potem "wynaleziono" render propsy; a teraz jeste艣my w epoce "hook贸w")
 */

interface WithLoadingProps {
  loading: boolean;
}

// 馃敟 to jest HOC w wersji czysty JS

// const JS_WithLoading = (Component) =>
//   class WithLoading extends React.Component {
//     render() {
//       const { loading, ...props } = this.props;
//       return loading ? <Loader /> : <Component {...props} />;
//     }
//   };

// 馃敟 a to - w wersji TS / KLASA
const _WithLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <Loader /> : <Component {...props as P} />;
    }
  };

// 馃敟 a to - w wersji TS / FUNKCJA
export const WithLoading = <P extends object>(Component: React.ComponentType<P>) => {
  const withLoading: React.FC<P & WithLoadingProps> = (wrapperProps) => {
    const { loading, ...props } = wrapperProps;
    return loading ? <Loader /> : <Component {...props as P} />;
  }
  withLoading.displayName = "WithLoading"
  return withLoading
}
