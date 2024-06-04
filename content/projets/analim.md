---
title: Congrès
description: Site de gestion d'un congrès avec ajout et modification de congressistes.
date: 2023-10
cover: congres.png
tags: 
---

# Congrès

<div class="">
    <img src="/images/blog/congres.png" alt="congres" class="mt-12 md:max-w-m mx-auto rounded-lg ">
</div>

---
<p class="text-lg py-2 mt-2 italic">C'est est un projet réalisé lors de mon BTS SIO en atelier de professionalisation au sein d'une équipe de quatre.</p>

## Objectifs

<p class="text-lg py-2 mt-2">Ce site permet la gestion d'un congrès qui comprend de nombreuses fonctionnalités. Ma mission consiste à ajouter des congressistes dans la base de données, pouvoir modifier ses informations et les trier en fonction de leur logment par ordre alphabétique (voir images).</p>



## Compétences utilisées

- **HTML**
- **CSS**
- **PHP**

## Documentation technique



<div class="flex justify-center items-center">
    <img src="/images/blog/congres5.png" alt="createform" class="">
</div>

<div class="flex justify-center items-center">
    <img src="/images/blog/congres4.png" alt="modifform" class="">
</div>

<div class="flex justify-center items-center">
    <img src="/images/blog/congres3.png" alt="tableaucongressiste" class="">
</div>



<div class="flex justify-center items-center">
    <img src="/images/blog/congres1.png" alt="tableaucongressiste2" class="">
</div>

<div class="flex justify-center items-center">
    <img src="/images/blog/congres2.png" alt="bddcongres" class="">
</div>

## Modèle

```js
<?php
include_once "database.php";
class congressiste {
 
    private int $id_congressiste;
    private string $nom;
    private string $prenom;
    private string $adresse;
    private string $email;
    private string $categorieH;
    private bool $petitDej;
 
    public function __construct(int $id_congressiste = 0, string $nom ='', string $prenom ='', string $adresse='', string $email='', string $categorieH = '', bool $petitDej = false) {
        $this->id_congressiste = $id_congressiste;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->adresse = $adresse;
        $this->email = $email;
        $this->categorieH = $categorieH;
        $this->petitDej = $petitDej;
 
    }
 
    public function getIdCongressiste() {
        return $this->id_congressiste;
    }
 
    public function getNom() {
        return $this->nom;
    }
 
    public function getPrenom() {
        return $this->prenom;
    }
 
    public function getAdresse() {
        return $this->adresse;
    }
 
    public function getEmail() {
        return $this->email;
    }
 
    public function getCategorieH() {
        return $this->categorieH;
    }
 
    public function getPetitDej() {
        return $this->petitDej;
    }
 
    public function setIdCongressiste(string $id_congressiste) {
        $this->id_congressiste = $id_congressiste;
    }
   
    public function setNom(string $nouveauNom) {
        $this->nom = $nouveauNom;
 
    }
 
    public function setPrenom(string $nouveauPrenom) {
        $this->prenom = $nouveauPrenom;
    }
 
    public function setAdresse(string $nouvelleAdresse) {
        $this->adresse = $nouvelleAdresse;
    }
 
    public function setEmail(string $nouveauEmail) {
        $this->email = $nouveauEmail;
    }
 
    public function setCategorieH(string $newCategorieH) {
        $this->categorieH = $newCategorieH;
    }
 
    public function setPetitDej(string $newPetitDej) {
        $this->petitDej = $newPetitDej;
    }
 
    public function addCongressiste() {
        $connex = connexionPDO();
        $prep= $connex->prepare ("INSERT INTO congressiste VALUES (?,?,?,?,?,100,?,?,Null,Null)");
        $prep-> bindValue(1, $this->id_congressiste);
        $prep-> bindValue(2, $this->nom);
        $prep-> bindValue(3, $this->prenom);
        $prep-> bindValue(4, $this->adresse);
        $prep-> bindValue(5, $this->email);
        $prep-> bindValue(6, $this->categorieH);
        $prep-> bindValue(7, $this->petitDej);
        $prep->execute();
    }
 
    public function ModifierCongressiste($id_congressiste) {
        $connex = connexionPDO();
        $prep = $connex->prepare("UPDATE congressiste SET Nom = ?, Prenom  = ?, Adresse = ?, AdresseMail = ?, CategorieHotel = ?, Dejeuner = ? WHERE id_congressiste = ?");
        $prep-> bindValue(1, $this->nom);
        $prep-> bindValue(2, $this->prenom);
        $prep-> bindValue(3, $this->adresse);
        $prep-> bindValue(4, $this->email);
        $prep-> bindValue(5, $this->categorieH);
        $prep-> bindValue(6, $this->petitDej);
        $prep-> bindValue(7, $id_congressiste);
        $prep->execute();
   
    }
 
    public function getAllCongressiste() {
        $connex = connexionPDO();
        $prep = $connex->prepare("SELECT * FROM congressiste ORDER BY nom ASC");
        $prep->execute();
        $result = $prep->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }
 
    public function getUnCongressiste($id_congressiste) {
        $connex = connexionPDO();
        $prep = $connex->prepare("SELECT * FROM congressiste WHERE id_congressiste = ?");
        $prep->bindValue(1,$id_congressiste);
        $prep->execute();
        $result = $prep->fetch(PDO::FETCH_OBJ);
        return $result;
    }
 
    public function SupprimerCongressiste($id_congressiste) {
        $connex = connexionPDO();
        $prep = $connex->prepare("DELETE FROM congressiste WHERE id_congressiste = ?");
        $prep->bindValue(1, $this->id_congressiste);
        $prep->execute();
    }
 
    public function getIdCongressisteWhereIdHotelIsNULL() {
        $connex = connexionPDO();
        $prep = $connex->prepare("SELECT * FROM congressiste WHERE id_hotel IS NULL");
        $prep->execute();
        $result = $prep->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }
   
    public function getFactureUnCongressiste($id_congressiste) {
        $connex = connexionPDO();
        $prep = $connex->prepare("SELECT *
        FROM factures AS f
        WHERE EXISTS (
            SELECT 1
            FROM congressistes AS c
            WHERE c.id_congressiste = f.id_congressiste
            AND c.id_congressiste = [ID_DU_CONGRESSISTE]
        );
        ");
        $prep->bindParam(':id_congressiste', $id_congressiste, PDO::PARAM_INT);
 
        // Exécution de la requête
        $prep->execute();
   
        // Récupération des résultats
        $result = $prep->fetchAll(PDO::FETCH_ASSOC);
   
        return $result;
       
    }
}
?>
```

## Vue

```js
<body class="bg-cover bg-center bg-no-repeat" style="background-image: url('assets/img/hotel1917.jpg')">
<div class="flex flex-col items-center justify-center min-h-screen">
 
 
    <div class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 mt-32" >
<h1 class="text-3xl font-bold mb-4">Congressistes</h1>
</div>
 
 
    <div class="max-w-md mx-auto mt-32">
        <form action="" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
 
        <p class="text-3xl font-bold mb-4">Création de Congressiste</p>
 
            <div class="mb-4">
                <label for="nom" class="block text-gray-700 font-bold mb-2">Nom :</label>
                <input type="text" id="nom" name="nom" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="prenom" class="block text-gray-700 font-bold mb-2">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="Adresse" class="block text-gray-700 font-bold mb-2">Adresse :</label>
                <input type="text" id="Adresse" name="adresse" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">E-mail :</label>
                <input type="email" id="email" name="email" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="categorieHotel" class="block text-gray-700 font-bold mb-2">Catégorie Hôtel :</label>
                <select name="categorieHotel"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">-- Etoile Hôtel --</option>
                    <option value="0">0 Etoile</option>
                    <option value="1">1 Etoile</option>
                    <option value="2">2 Etoiles</option>
                    <option value="3">3 Etoiles</option>
                    <option value="4">4 Etoiles</option>
                    <option value="5">5 Etoiles</option>
                </select>
            </div>
 
            <div class="mb-4">
                <label for="dejeuner" class="block text-gray-700 font-bold mb-2">Petit déjeuner :</label><br>
                <input type="radio" id="oui" name="choix" value="1" required />
                <label for="oui">Oui</label><br>
                <input type="radio" id="non" name="choix" value="0" required />
                <label for="non">Non</label>
                <h2>L'Accompte Forfaitaire est de 100€</h2><br>
            </div>
 
            <div class="mb-6 text-center">
                <input type="submit" name="add"
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    value="Créer">
            </div>
        </form>
    </div>
</div>
 
<?php if (isset($_GET['id_congressiste'])) { ?>
<div class="max-w-md mx-auto">
    <form action="" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       
            <div class="mb-4">
                <label for="nom" class="block text-gray-700 font-bold mb-2">Nom :</label>
                <input type="text" id="nom" name="nom" value="<?php echo $ModifResult->Nom; ?>"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="prenom" class="block text-gray-700 font-bold mb-2">Prénom :</label>
                <input type="text" id="prenom" name="prenom" value="<?php echo $ModifResult->Prenom; ?>"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="Adresse" class="block text-gray-700 font-bold mb-2">Adresse :</label>
                <input type="text" id="Adresse" name="adresse" value="<?php echo $ModifResult->Adresse; ?>"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">E-mail :</label>
                <input type="email" id="email" name="email" value="<?php echo $ModifResult->AdresseMail; ?>"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
 
            <div class="mb-4">
                <label for="categorieHotel" class="block text-gray-700 font-bold mb-2">Catégorie Hôtel :</label>
                <select name="categorieHotel"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value=""><?php echo $ModifResult->CategorieHotel; ?></option>
                    <option value="0 Etoile">0 Etoile</option>
                    <option value="1 Etoile">1 Etoile</option>
                    <option value="2 Etoiles">2 Etoiles</option>
                    <option value="3 Etoiles">3 Etoiles</option>
                    <option value="4 Etoiles">4 Etoiles</option>
                    <option value="5 Etoiles">5 Etoiles</option>
                </select>
            </div>
 
            <div class="mb-4">
                <label for="dejeuner" class="block text-gray-700 font-bold mb-2">Petit déjeuner :</label><br>
                <input type="radio" id="oui" name="choix" value="1"
                    class="mr-2 leading-tight text-gray-700 focus:outline-none focus:shadow-outline">
                <label for="oui" class="mr-4">Oui</label>
                <input type="radio" id="non" name="choix" value="0"
                    class="mr-2 leading-tight text-gray-700 focus:outline-none focus:shadow-outline">
                <label for="non">Non</label><br><br>
            </div>
 
            <div class="mb-6 text-center">
                <input type="submit" name="modif"
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    value="Modifier">
                <input type="submit" name="supp"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    value="Supprimer">
            </div>
        <?php } ?>
    </form>
</div>
 
<br>
<div class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 mt-24" >
<h1 class="text-3xl font-bold mb-4 text-center">Congressiste logé</h1>
</div>
<br>
 
 <div class="overflow-x-auto mt-8  ">
    <table class="min-w-full table-auto bg-white">
        <thead>
            <tr class="bg-gray-200">
                <th class="px-4 py-2">Nom</th>
                <th class="px-4 py-2">Prénom</th>
                <th class="px-4 py-2">Adresse</th>
                <th class="px-4 py-2">Adresse Mail</th>
                <th class="px-4 py-2">Catégorie Hôtel</th>
                <th class="px-4 py-2">Petit Déjeuner</th>
                <th class="px-4 py-2">Modification</th>
            </tr>
        </thead>
        <tbody class="text-gray-700">
            <?php foreach ($result as $congressiste) { ?>
                <tr>
                    <td class="border px-4 py-2"><?php echo $congressiste->Nom; ?></td>
                    <td class="border px-4 py-2"><?php echo $congressiste->Prenom; ?></td>
                    <td class="border px-4 py-2"><?php echo $congressiste->Adresse; ?></td>
                    <td class="border px-4 py-2"><?php echo $congressiste->AdresseMail; ?></td>
                    <td class="border px-4 py-2"><?php echo $congressiste->CategorieHotel; ?></td>
                    <td class="border px-4 py-2"><?php echo $congressiste->Dejeuner; ?></td>
                    <td class="border px-4 py-2">
                        <a value='<?php echo $congressiste->id_congressiste; ?>' href='?action=Congressiste&id_congressiste=<?php echo $congressiste->id_congressiste; ?>' class="bg-black hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Modifier</a>
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</div>
 
<br>
<div class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 mt-24" >
<h1 class="text-3xl font-bold mb-4 text-center">Congressiste sans logement</h1>
</div>
<br>
 
<div class="overflow-x-auto mt-8">
    <table class="min-w-full table-auto bg-white">
        <thead>
            <tr class="bg-gray-200">
                <th class="px-4 py-2">Nom</th>
                <th class="px-4 py-2">Prénom</th>
                <th class="px-4 py-2">Adresse</th>
                <th class="px-4 py-2">Adresse Mail</th>
                <th class="px-4 py-2">Catégorie Hôtel</th>
                <th class="px-4 py-2">Petit Déjeuner</th>
                <th class="px-4 py-2">Loger Congressiste</th>
            </tr>
        </thead>
        <tbody class="text-gray-700">
            <?php foreach ($resultCongressisteHotelNull as $resultatHotelNull) { ?>
                <tr>
                    <td class="border px-4 py-2"><?php echo $resultatHotelNull->Nom; ?></td>
                    <td class="border px-4 py-2"><?php echo $resultatHotelNull->Prenom; ?></td>
                    <td class="border px-4 py-2"><?php echo $resultatHotelNull->Adresse; ?></td>
                    <td class="border px-4 py-2"><?php echo $resultatHotelNull->AdresseMail; ?></td>
                    <td class="border px-4 py-2"><?php echo $resultatHotelNull->CategorieHotel; ?></td>
                    <td class="border px-4 py-2"><?php echo $resultatHotelNull->Dejeuner; ?></td>
                    <td class="border px-4 py-2">
                        <a href='?action=Loger&id_congressiste=<?php echo $resultatHotelNull->id_congressiste; ?>&prefHotel=<?php echo $resultatHotelNull->CategorieHotel; ?>' class="bg-black hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Loger</a>
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</div>
</body>
```
## Contrôleur

```js
<?php
include "vue/entete.html.php";
include_once "modele/bd.congressiste.php";
require "modele/bd.facturation.php";
 
 
    if (isset($_POST['add'])) {
   $congressiste = new congressiste(0,$_POST["nom"], $_POST["prenom"], $_POST["adresse"], $_POST["email"], $_POST["categorieHotel"], $_POST["choix"]);
   $congressiste->addCongressiste();
    }
 
    if (isset($_POST['modif'])) {
        $congressiste = new congressiste($_GET["id_congressiste"],$_POST["nom"], $_POST["prenom"], $_POST["adresse"], $_POST["email"], $_POST["categorieHotel"], $_POST["choix"]);
        $congressiste->ModifierCongressiste($_GET["id_congressiste"]);
    }
 
   
    $congressisteAll = new congressiste();
    $result = $congressisteAll->getAllCongressiste();
   
   
    if( isset($_GET["id_congressiste"])) {
    $ModifCongressiste = new congressiste();
    $ModifResult = $ModifCongressiste->getUnCongressiste($_GET["id_congressiste"]);
    }
 
    if (isset($_POST['supp'])) {
        $suppCongressiste = new congressiste($_GET["id_congressiste"],"","","","","","");
        $suppCongressiste->SupprimerCongressiste($_GET["id_congressiste"]);
        header("Location:?action=Congressiste");
    }
 
    $congressisteHotelNull = new congressiste();
    $resultCongressisteHotelNull = $congressisteHotelNull->getIdCongressisteWhereIdHotelIsNULL();
 
    if(isset($_GET["id_congressiste"])) {
        $fcongressiste = new facturation ();
        $factureUnCongressiste = $fcongressiste->GetOneFacture($_GET["id_congressiste"]);
    }
   
   
   
    include "vue/VueCongressiste.php";
?>
```