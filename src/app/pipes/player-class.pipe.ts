import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "playerClass"
})
export class PlayerClassPipe implements PipeTransform {
  transform(id: number): string {
    switch (id) {
      case 1:
        return "Warrior";
      case 2:
        return "Paladin";
      case 3:
        return "Hunter";
      case 4:
        return "Rogue";
      case 5:
        return "Priest";
      case 6:
        return "Death Knight";
      case 7:
        return "Shaman";
      case 8:
        return "Mage";
      case 9:
        return "Warlock";
      case 10:
        return "Monk";
      case 11:
        return "Druid";
      case 12:
        return "Demon Hunter";
      default:
        return "";
    }
  }
}
/* 
  1: "Warrior",
  2: "Paladin",
  3: "Hunter",
  4: "Rogue",
  5: "Priest",
  6: "Death Knight",
  7: "Shaman",
  8: "Mage",
  9: "Warlock",
  10: "Monk",
  11: "Druid",
  12: "Demon Hunter"
*/
