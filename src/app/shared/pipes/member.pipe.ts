import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'member'
})

export class MemberPipe implements PipeTransform {
    transform(value: string[], ...args: any[]): any {
        // let result = '';
        // value.forEach(item => {
        //     result = result + ' - ' + item; 
        // });
        // return `${result.toUpperCase()} (${value.length})`;
        if(value.length > 0){
            return 'Shared';
        } else  {
            return 'Private';
        }
    }
}
