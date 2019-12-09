import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "memberRank"
})
export class MemberRankPipe implements PipeTransform {
  transform(id: number): string {
    switch (id) {
      case 0:
        return "Guild Master";
      case 1:
        return "Officer";
      case 2:
        return "Officer Alt";
      case 3:
        return "Raider";
      case 4:
        return "Raider Alt";
      case 5:
        return "Trial Raider";
      case 6:
        return "Trial Raider Alt";
      case 7:
        return "Friends and Family";
      default:
        return "";
    }
  }
}
