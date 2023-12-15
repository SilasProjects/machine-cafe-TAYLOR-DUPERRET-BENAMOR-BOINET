import Piece from "./Piece";

export default class MachineCafe {
  private prixDuCafe: Piece;
  private montantInsere: Piece[];
  private nombreCafeServis: number;

  public constructor(prixDuCafe: Piece) {
    this.prixDuCafe = prixDuCafe;
  }

  public EntrerDesPieces;

  //   public PayerUnCafe(montantDonne: Piece[]) {
  //     const somme = montantDonne.reduce(
  //       (prev, curr) => prev + curr.toNumber(),
  //       0
  //     );
  //     return somme >= this.prixDuCafe.toNumber();
  //   }
}
