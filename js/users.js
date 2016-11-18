(function(){

  "use strict";

  angular.module('appUsers', [])
          .controller('UsersCtrl', UsersCtrl);


      function UsersCtrl($scope){
        console.log('Scope chargée!');



            $scope.users = [
              {
                sexe: true,
                nom: 'Boyer',
                prenom: 'Julien',
                age: 28,
                ville: 'Lyon'
              },
              {
                sexe: false,
                nom: 'Perrontton',
                prenom: 'Elodie',
                age: 28,
                ville: 'Lyon'
              },
              {
                sexe: true,
                nom: 'Vandepitte',
                prenom: 'alexis',
                age: 23,
                ville: 'Marseille'
              },
              {
                sexe: true,
                nom: 'Cadet',
                prenom: 'Mathias',
                age: 25,
                ville: 'Villeurbanne'
              }
            ];


        $scope.ajouterUser = function(){
          console.log('Formulaire envoyé');
          //
          $scope.users.push(
            {
              sexe: $scope.sexe,
              nom: $scope.nom,
              prenom: $scope.prenom,
              age: $scope.age,
              ville: $scope.ville,
            }
          );

          $scope.nom = "";
          $scope.prenom = "";
          $scope.age = "";
          $scope.ville = "";
          $scope.sexe = "";
        }


          /*
            *
            * Exercice: Créer un bouton par utilisateur pour pouvoir supprimer
            * un utilisateur
            *
            * Afficher le sexe par utilisateur: Homme ou Femme
            *
           */



          }


}());
