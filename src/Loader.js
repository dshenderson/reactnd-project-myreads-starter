import React from 'react';

const loader = () => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-book">
      <path d="M20 25L80 25L80 75L20 75Z" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" fill="#60ac5d" stroke="#2e7c31" stroke-width="3"></path>
      <path d="M 50 25 L 57.4782 21.2464 L 57.4782 78.7536 L 50 75" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" stroke-linejoin="round" stroke-linecap="round" fill="#60ac5d" stroke="#2e7c31" stroke-width="3">
        <animate attributeName="d" calcMode="linear" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75" keyTimes="0;0.5;0.501;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
      </path>
      <path d="M 50 25 L 80 25 L 80 75 L 50 75" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" stroke-linejoin="round" stroke-linecap="round" fill="#60ac5d" stroke="#2e7c31" stroke-width="3">
        <animate attributeName="d" calcMode="linear" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75" keyTimes="0;0.5;0.501;1" dur="1.5" begin="-0.249s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1.5" begin="-0.249s" repeatCount="indefinite"></animate>
      </path>
      <path d="M 50 25 L 80 25 L 80 75 L 50 75" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" stroke-linejoin="round" stroke-linecap="round" fill="#60ac5d" stroke="#2e7c31" stroke-width="3">
        <animate attributeName="d" calcMode="linear" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75" keyTimes="0;0.5;0.501;1" dur="1.5" begin="-0.495s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1.5" begin="-0.495s" repeatCount="indefinite"></animate>
      </path>
      <path d="M 50 25 L 37.6782 22.0536 L 37.6782 77.9464 L 50 75" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" stroke-linejoin="round" stroke-linecap="round" fill="#60ac5d" stroke="#2e7c31" stroke-width="3">
        <animate attributeName="d" calcMode="linear" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75" keyTimes="0;0.499;0.5;1" dur="1.5" begin="-0.495s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1.5" begin="-0.495s" repeatCount="indefinite"></animate>
      </path>
      <path d="M 50 25 L 47.5182 20.4136 L 47.5182 79.5864 L 50 75" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" stroke-linejoin="round" stroke-linecap="round" fill="#60ac5d" stroke="#2e7c31" stroke-width="3">
        <animate attributeName="d" calcMode="linear" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75" keyTimes="0;0.499;0.5;1" dur="1.5" begin="-0.249s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1.5" begin="-0.249s" repeatCount="indefinite"></animate>
      </path>
      <path d="M 50 25 L 20 25 L 20 75 L 50 75" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" stroke-linejoin="round" stroke-linecap="round" fill="#60ac5d" stroke="#2e7c31" stroke-width="3">
        <animate attributeName="d" calcMode="linear" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75" keyTimes="0;0.499;0.5;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
      </path>
    </svg>
  );
};

export default Loader;
