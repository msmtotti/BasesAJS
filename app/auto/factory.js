/**
 * Auto Factory
 * @namespace Factories
 */

(function() {
  'use strict';
  angular
      .module('app.auto.factory', [])
      .factory('Marcas', Marcas);

  /**
   * @namespace Auto
   * @desc Obtiene marcas de Autos
   * @memberOf Factories
   */
  function Marcas() {
      var service = {
         porPais: porPais
      };
      return service;

      ////////////

      /**
       * @name porPais
       * @desc Marcas por pais
       * @param {String} pais Busqueda por pais
       * @returns {Object}
       * @memberOf Factories.Autos
       */
      function porPais(pais) {
        var paises = {
          "japon": ["Suzuki", "Mazda"],
          "usa": ["Ford", "Chevrolet"]
        };
        return paises[pais];
      }
  }
})();
