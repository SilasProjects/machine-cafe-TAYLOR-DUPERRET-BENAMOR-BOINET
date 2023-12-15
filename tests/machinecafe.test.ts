import { describe, expect, test } from "@jest/globals";
import MachineCafe from "../src/MachineCafe";
import Piece from "../src/Piece";

describe("On teste le fonctionnement de la machine à café", () => {
  const casePrixCafe = [
    [Piece.UnEuro, [Piece.UnEuro]],
    [Piece.UnEuro, [Piece.DeuxEuros, Piece.UnEuro]],
  ];

  test.each(casePrixCafe as [Piece, Piece[]][])(
    [
      "ETANT DONNE une machine à café",
      "QUAND on insère au moins le prix d'un café",
      "ALORS un café est servi",
      "ET l'argent est encaissé",
      "CAS {50cts, 1€, 2€}",
    ].join(" "),
    (prixDuCafe: Piece, montantDonne: Piece[]) => {
      const cafeServi = new MachineCafe(prixDuCafe).PayerUnCafe(montantDonne);
      expect(cafeServi).toBe(true);
    }
  );

  //   test(
  //     [
  //       "ETANT DONNE une machine à café",
  //       "QUAND on insère moins que le prix d'un café",
  //       "ALORS aucun café n'est servi",
  //       "ET l'argent est rendu",
  //       "CAS {1ct, 2cts, 5cts, 10cts, 20cts}",
  //     ].join(" "),
  //     () => {

  //     }
  //   );

  //   test(
  //     [
  //       "ETANT DONNE une machine a café ne pouvant pas servir",
  //       "QUAND on insère au moins le prix d'un café",
  //       "ALORS aucun café n'est servi",
  //       "ET l'argent est encaissé",
  //       "ET l'argent est rendu",
  //     ].join(" "),
  //     () => {

  //     }
  //   );
});
