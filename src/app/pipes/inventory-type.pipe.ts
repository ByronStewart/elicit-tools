import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "inventoryType"
})
export class InventoryTypePipe implements PipeTransform {
  transform(id: any): any {
    switch (id) {
      case 0:
        return "not equippable";
      case 1:
        return "head";
      case 3:
        return "shoulder";
      case 5 || 20:
        return "chest";
      case 16:
        return "back";
      case 6:
        return "waist";
      case 7:
        return "legs";
      case 8:
        return "feet";
      case 9:
        return "wrist";
      case 10:
        return "hands";
      case 11:
        return "ring";
      case 12:
        return "trinket";
      case 13:
        return "1 hand weapon";
      case 14:
        return "shield";
      case 17:
        return "2 hand weapon";
      case 23:
        return "offhand";
      case 26:
        return "ranged weapon";
      default:
        return "";
    }
  }
}
/* 
  0: "not equippable",
  1: "head",
  3: "shoulder",
  5: "chest",
  20: "chest",
  16: "back",
  6: "waist",
  7: "legs",
  8: "feet",
  9: "wrist",
  10: "hands",
  11: "ring",
  12: "trinket",
  13: "1 hand weapon",
  14: "shield",
  17: "2 hand weapon",
  23: "offhand",
  26: "ranged weapon" */
