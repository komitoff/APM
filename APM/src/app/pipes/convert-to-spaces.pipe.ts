import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";
import { Pipe } from "@angular/core/src/metadata/directives";


@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}