import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "itemSubClass"
})
export class ItemSubClassPipe implements PipeTransform {
  transform(id: number, itemClass: number): string {
    if (itemClass === 2) {
      // weapon
      switch (id) {
        case 0:
          return "Axe";
        case 4:
          return "Mace";
        case 5:
          return "2H Mace";
        case 6:
          return "Polearm";
        case 7:
          return "Sword";
        case 9:
          return "Warglaive";
        case 10:
          return "Staff";
        case 13:
          return "Fist Weapon";
        case 15:
          return "Dagger";
        case 18:
          return "Crossbow";
        case 19:
          return "Wand";
      }
    } else if (itemClass === 4) {
      switch (id) {
        case 1:
          return "Cloth";
        case 2:
          return "Leather";
        case 3:
          return "Mail";
        case 4:
          return "Plate";
        case 6:
          return "Shield";
        default:
          return "";
      }
    }
  }
}
