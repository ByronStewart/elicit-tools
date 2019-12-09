import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "itemClass"
})
export class ItemClassPipe implements PipeTransform {
  transform(id: number): any {
    switch (id) {
      case 2:
        return "Weapon";
      case 4:
        return "Armor";
      default:
        return "";
    }
  }
}
