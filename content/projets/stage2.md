---
title: Stage de 2ème année
description: Développement d'une macro Excel (VBA) et support niveau 1.
date: 2024-03
cover: rrthv.jpg
tags: 

---

# Stage de deuxième année (BTS SIO)

<div class="flex justify-center items-center">
    <img src="/images/blog/rrthv.jpg" alt="rrthv" class="rrthv object-center">
</div>

<p class="text-lg py-2 mt-2 italic">Mon stage s'est détoulé à la RRTHV en Février-Mars 2024.</p>

---

## A propos de la RRTHV :
- Adresse : 12 place des Charentes, 87100, Limoges
- Contact : 05 55 10 31 00
- Site Web : https://www.rrthv.com
- Adresse mail : info@rrthv.com
- Horaires d'ouverture : Lundi au Vendredi de 8h30 à 12h30 et de 13h30 à 16h30

## Missions prévues durant le stage :
- Développement d'une application permettant la dématérialisation des carnets de suivi des voitures de service (environ 20 voitures), kilométrage, date, destination, conducteur (sur Power Apps).
- Développement d'une macro sur Excel en VBA permettant de recueillir les informations de plusieurs fichiers sur un seul et même fichier (cela concerne des fichiers de transactions et paiements pour la boutique).

### Pendant mon stage, j'ai effectué du support de niveau 1, comprenant :

- L'installation des bras d'écrans
- La configuration des imprimantes
- L'assistance aux utilisateurs pour des problèmes matériels et logiciels de base
- La résolution de problèmes courants liés aux équipements informatiques


---

### User Form de la macro Excel  :

<div class="flex justify-center items-center">
    <img src="/images/blog/userform.png" alt="userform" class="userform object-center">
</div>

<p class="text-lg py-2 mt-2 italic">Aperçu du UserForm permettant d'effectuer les actions (souhaitées par les ustilisatrices).</p>

---



### Macro Excel :

<p class="text-lg py-2 mt-2 italic">Quelques extraits de code de la macro (VBA).</p>


```js
Private Sub CommandButton1_Click()
' Récupérez les chemins des fichiers sélectionnés
     Dim cheminFichier1 As String, cheminFichier2 As String
     cheminFichier1 = Application.GetOpenFilename("Fichiers Excel (*.xlsx; *.xls), *.xlsx; *.xls")
     cheminFichier2 = Application.GetOpenFilename("Fichiers Excel (*.xlsx; *.xls), *.xlsx; *.xls")
     ' Vérifiez si les utilisateurs ont sélectionné les fichiers
     If cheminFichier1 = "Faux" Or cheminFichier2 = "Faux" Then
         MsgBox "Veuillez sélectionner les deux fichiers à rassembler.", vbExclamation
         Exit Sub
     End If
     ' Ouvrez les fichiers
     Dim fichier1 As Workbook, fichier2 As Workbook
     Set fichier1 = Workbooks.Open(cheminFichier1)
     Set fichier2 = Workbooks.Open(cheminFichier2)
     ' Vérifiez que les objets Workbook ont été correctement définis
     If Not fichier1 Is Nothing And Not fichier2 Is Nothing Then
         ' Fusionnez les données des deux fichiers ici
         ' Exemple: Copiez toutes les données du fichier2 vers la fin du fichier1
         fichier2.Sheets(1).UsedRange.Copy fichier1.Sheets(1).Cells(fichier1.Sheets(1).Rows.Count, "A").End(xlUp).Offset(1, 0)
         fichier1.Save
         fichier2.Save
         fichier1.Close False
         fichier2.Close False
         MsgBox "Fusion des fichiers terminée avec succès!", vbInformation
     Else
         MsgBox "Erreur lors de l'ouverture des fichiers.", vbExclamation
     End If
End Sub

---

Cells(4, 17).FormulaR1C1 = _
        "=IF(COUNTIF(C[-15],RC[-15])=3,""CBID""&"" ""&(VLOOKUP(Annee_Scolaire!RC[-3],payzen,5,FALSE)),IF(COUNTIF(C[-15],RC[-15])=2,""CBD2""&"" ""&(VLOOKUP(RC[-3],payzen,5,FALSE)),IF(COUNTIF(C[-15],RC[-15])=1,""CBSD""&"" ""&(VLOOKUP(RC[-3],payzen,5,FALSE)))))"
    Range("Q4").Select
    Range("Q4").AutoFill Destination:=Range("Q4:Q" & Cells(Rows.Count, "N").End(xlUp).Row), Type:=xlFillDefault

---

' Référence à la feuille "informations_administratives" dans le classeur actif (ThisWorkbook)
Set ws = fichier1.Sheets("informations_administratives")

--- 

Private Sub CommandButton8_Click()
   Columns("A:A").Insert Shift:=xlToRight
   Columns("BM:BM").Cut Destination:=Columns("A:A")
   Columns("BM:BM").Delete
   Columns("B:B").Insert Shift:=xlToRight
   Columns("CH:CH").Cut Destination:=Columns("B:B")
   Columns("CH:CH").Delete


```
