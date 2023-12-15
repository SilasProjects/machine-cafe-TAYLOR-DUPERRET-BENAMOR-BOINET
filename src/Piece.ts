export default class Piece {
  public static readonly UnCentime: Piece = new Piece(1, "cts");
  public static readonly DeuxCentimes: Piece = new Piece(2, "cts");
  public static readonly CinqCentimes: Piece = new Piece(5, "cts");
  public static readonly DixCentimes: Piece = new Piece(10, "cts");
  public static readonly VingtCentimes: Piece = new Piece(20, "cts");
  public static readonly CinquanteCentimes: Piece = new Piece(50, "cts");
  public static readonly UnEuro: Piece = new Piece(1, "€");
  public static readonly DeuxEuros: Piece = new Piece(2, "€");

  private value: number;
  private unit: string;

  private constructor(value: number, unit: string) {
    this.value = value;
    this.unit = unit;
  }

  public toNumber = () => {
    if (this.unit === "cts") return this.value / 100;
    if (this.unit === "€") return this.value;
    return 0;
  };
}
