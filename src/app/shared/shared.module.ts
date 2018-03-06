import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MemberPipe } from './pipes/member.pipe';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [],
    exports: [MemberPipe, FormsModule, CommonModule],
    declarations: [MemberPipe],
    providers: [],
})
export class SharedModule { }
